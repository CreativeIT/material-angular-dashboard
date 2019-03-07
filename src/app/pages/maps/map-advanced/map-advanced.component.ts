import { AfterViewInit, Component, HostBinding, OnDestroy, ViewChild } from '@angular/core';
import { takeWhile } from 'rxjs/internal/operators';

declare const google: any;

import { UpgradableComponent } from 'theme/components/upgradable';
import { MapsService } from '../maps.service';
import { MAP_STYLE } from './map-advanced-style';

const markerIconUrl = {
  url: 'assets/images/marker-advanced.svg',
  active: 'assets/images/marker-advanced-active.svg',
};
const infoWindowSize = {
  width: 200,
  height: 130,
  paddingX: 5,
  paddingY: 5,
};
const switchZoomValue = 5;
const iconSize = 20;

@Component({
  selector: 'app-map-advanced',
  styleUrls: ['./map-advanced.component.scss'],
  templateUrl: './map-advanced.component.html',
})
export class MapAdvancedComponent extends UpgradableComponent implements AfterViewInit, OnDestroy {
  @HostBinding('class.map-advanced') private map = true;

  @ViewChild('gmap') gmapElement: any;
  public gMap: any;
  public data = [];
  private prevZoom = 2;
  private markers: any[] = [];
  private alive = true;
  private isWorldLevel = true;

  public constructor(private mapService: MapsService) {
    super();
  }

  public ngOnDestroy() {
    this.alive = false;
  }

  public ngAfterViewInit() {
    const mapOptions = {
      center: { lat: 53, lng: 27 },
      zoomControl: true,
      zoom: 2,
      maxZoom: 10,
      minZoom: 2,
      scrollwheel: true,
      streetViewControl: false,
      fullscreenControl: false,
      mapMaker: true,
      styles: MAP_STYLE,
    };

    this.gMap = new google.maps.Map(this.gmapElement.nativeElement, mapOptions);
    const getData = (this.isWorldLevel) ? this.mapService.getCountriesPopulation() : this.mapService.getCountriesPopulation();
    getData
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.loadData(data);
      });
    this.gMap.addListener('zoom_changed', () => this.onZoomChanged());

  }

  private loadData(data): void {
    this.clearMarkers();
    this.data = data;
    this.createMarkersArray(data);
    componentHandler.upgradeDom();
  }

  private clearMarkers() {
    if (this.markers) {
      this.markers.forEach((marker) => {
        marker.setMap(null);
      });
      this.markers = null;
    }
  }

  private createMarkersArray(data) {
    const markers = [];
    data.map((item) => {
      const icon = {
        url: markerIconUrl.url,
        size: new google.maps.Size(iconSize, iconSize),
        scaledSize: new google.maps.Size(iconSize, iconSize),
      };

      const marker = new google.maps.Marker({
        icon,
        position: item.position,
        map: this.gMap,
      });

      marker.addListener('mouseover', event => this.drawInfoWindow(item, event, marker));
      marker.addListener('mouseout', event => this.removeInfoWindow(item, event));
      if (this.gMap.getZoom() <= switchZoomValue) {
        marker.addListener('click', event => this.zoomingToPoint(item, event));
      }

      markers.push(marker);
    });
    this.markers = markers;
  }

  private drawInfoWindow(item, event, marker): void {
    /* check if previous window-info is shown and remove it */
    const oldWindowsInfo = document.getElementsByClassName('window-info');
    if (oldWindowsInfo.length > 0) {
      for (let index = 0; index += 1; index < oldWindowsInfo.length) {
        oldWindowsInfo[index].removeChild(oldWindowsInfo[index]);
      }
    }
    /* create info div and change marker on hover */
    const mouseEvent = Object.values(event).find(value => value instanceof MouseEvent) as Event;
    const parent = (mouseEvent.target as HTMLElement).parentNode as HTMLElement;
    const infowindow = document.createElement('div');
    parent.style.opacity = '1';
    parent.style.overflow = 'visible';
    infowindow.innerHTML = `<div class="mdl-card">
                                  <div class="mdl-card__title">
                                    <h1 class="mdl-card__title-text">${ item.name }</h1>
                                  </div>
                                  <div class="mdl-card__supporting-text no-padding">
                                    <div>Population:<span>${ item.population }</span></div>
                                    <div>Area:<span>${ item.area } km<sup>2</sup></span></div>
                                  </div>
                             </div>`;
    infowindow.classList.add('window-info');
    const img = parent.getElementsByTagName('img')[0];
    img.src = (img) ? markerIconUrl.active : null;

    const position = this.calculateInfoPosition(marker);
    infowindow.style[position.top ? 'top' : 'bottom'] = `${iconSize}px`;
    infowindow.style[position.left ? 'left' : 'right'] = `${iconSize + infoWindowSize.paddingX}px`;

    item.infowindow = infowindow;
    parent.appendChild(infowindow);
  }

  private removeInfoWindow(item, event): void {
    const parent = item.infowindow.parentElement;
    parent.style.opacity = '0';
    parent.style.overflow = 'hidden';
    const img = parent.getElementsByTagName('img')[0];
    if (img) {
      img.src = markerIconUrl.url;
    }
    item.infowindow.remove();
  }

  private calculateInfoPosition(marker): { top: boolean, left: boolean } {
    /* calculated where displayed infowindow relative to corners */
    const scale = Math.pow(2, this.gMap.getZoom());
    const nw = new google.maps.LatLng(
      this.gMap.getBounds().getNorthEast().lat(),
      this.gMap.getBounds().getSouthWest().lng(),
    );
    const worldCoordinateNW = this.gMap.getProjection().fromLatLngToPoint(nw);
    const worldCoordinate = this.gMap.getProjection().fromLatLngToPoint(marker.getPosition());
    const markerOffset = new google.maps.Point(
      Math.floor((worldCoordinate.x - worldCoordinateNW.x) * scale),
      Math.floor((worldCoordinate.y - worldCoordinateNW.y) * scale),
    );
    const mapOffset = new google.maps.Point(
      Math.floor(this.gMap.getDiv().getBoundingClientRect().width),
      Math.floor(this.gMap.getDiv().getBoundingClientRect().height),
    );

    const position = {
      top: (markerOffset.y + infoWindowSize.height < mapOffset.y),
      left: (markerOffset.x + infoWindowSize.width + infoWindowSize.paddingX * 2 < mapOffset.x),
    };
    return position;
  }

  private zoomingToPoint(item, event): void {
    this.gMap.setZoom(switchZoomValue + 1);
    this.gMap.setCenter(item.position);
  }

  private onZoomChanged(): void {
    // reload data on zoom changed event
    const currentZoom = this.gMap.getZoom();
    if (currentZoom > switchZoomValue && this.prevZoom <= switchZoomValue) {
      this.mapService.getCitiesPopulation()
        .pipe(takeWhile(() => this.alive))
        .subscribe((data) => {
          this.loadData(data);
        });
    }
    if (currentZoom <= switchZoomValue && this.prevZoom > switchZoomValue) {
      this.mapService.getCountriesPopulation()
        .pipe(takeWhile(() => this.alive))
        .subscribe((data) => {
          this.loadData(data);
        });
    }
    this.isWorldLevel = (currentZoom <= switchZoomValue);
    this.prevZoom = currentZoom;
  }
}
