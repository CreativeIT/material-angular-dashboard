import { AfterViewInit, Component, HostBinding } from '@angular/core';
import { UpgradableComponent } from 'theme/components/upgradable';

declare const google: any;

@Component({
  selector: 'app-map',
  styleUrls: ['./map.component.scss'],
  templateUrl: 'map.component.html',
})
export class MapComponent extends UpgradableComponent implements AfterViewInit {
  @HostBinding('class.mdl-grid') private readonly mdlGrid = true;

  public ngAfterViewInit() {
    const mapOptions = {
      center: { lat: 53.905042, lng: 27.569053 },
      zoomControl: true,
      zoom: 14,
      maxZoom: 20,
      minZoom: 5,
      scrollwheel: false,
      mapMaker: true,
      styles: [
        {
          featureType: 'road',
          elementType: 'geometry.fill',
          stylers: [
            { color: '#ffffff' },
            { weight: 1.9 },
          ],
        }, {
          featureType: 'road.local',
          elementType: 'geometry.fill',
          stylers: [
            { color: '#f0f0f0' },
            { weight: 1.4 },
          ],
        }, {
          featureType: 'all',
          elementType: 'labels.text.fill',
          stylers: [
            { color: '#333333' },
          ],
        }, {
          featureType: 'all',
          elementType: 'labels.icon',
          stylers: [
            { hue: '#000000' },
            { saturation: -100 },
            { lightness: 0 },
          ],
        }, {
          featureType: 'landscape.natural',
          elementType: 'geometry',
          stylers: [
            { color: '#d0d0d0' },
          ],
        }, {
          featureType: 'landscape.man_made',
          elementType: 'geometry.stroke',
          stylers: [
            { color: '#888888' },
          ],
        }, {
          featureType: 'landscape.man_made',
          elementType: 'geometry.fill',
          stylers: [
            { color: '#cccccc' },
          ],
        }, {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [
            { color: '#bbbbbb' },
          ],
        }, {
          featureType: 'poi.attraction',
          elementType: 'geometry',
          stylers: [
            { color: '#bbbbbb' },
          ],
        }, {
          featureType: 'poi.business',
          elementType: 'geometry',
          stylers: [
            { color: '#bbbbbb' },
          ],
        }, {
          featureType: 'poi.medical',
          elementType: 'geometry',
          stylers: [
            { color: '#bbbbbb' },
          ],
        }, {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [
            { color: '#bbbbbb' },
          ],
        }, {
          featureType: 'poi.school',
          elementType: 'geometry',
          stylers: [
            { color: '#bbbbbb' },
          ],
        }, {
          featureType: 'poi.sports_complex',
          elementType: 'geometry.fill',
          stylers: [
            { color: '#bbbbbb' },
          ],
        }, {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [
            { color: '#999999' },
          ],
        },
      ],
    };
    const map = new google.maps.Map(document.querySelector('.map__window'), mapOptions);
    const markerImage = 'assets/images/marker.png';
    const activeMarkerImage = 'assets/images/active_marker.png';
    const markers = {
      theatre: {
        marker: new google.maps.Marker({
          map,
          position: { lat: 53.900646, lng: 27.562573 },
          animation: google.maps.Animation.DROP,
          icon: activeMarkerImage,
          title: 'Yanka Kupala National Academic Theatre',
          location: ' Vulitsa Enhyel\'sa 7, Minsk, Belarus',
          openingHours: ' 9 AM - 9 PM',
          description: 'National academic theatre of Yanka Kupala is the oldest theatre of Belarus. It was opened on September 14, 1920, it is located in a building of the Minsk provincial theatre, constructed under the project of architects Karol Kozlowski and Konstantin Uvedensky in 1890 by means of donations of citizens. ',
          moreInfoLink: 'http://kupalauski.by/en/teatr/history/',
          image: '0px',
        }),
      },
      bicyclePath: {
        marker: new google.maps.Marker({
          map,
          position: { lat: 53.903891, lng: 27.570529 },
          animation: google.maps.Animation.DROP,
          icon: markerImage,
          title: 'Bicycle path',
          location: '53.904126, 27.570758, Minsk, Belarus',
          openingHours: 'around the clock',
          description: 'Minsk bike path extends from the northwest to the southern outskirts of Minsk. The length of the cycle paths of about 26.73 km. ',
          moreInfoLink: 'http://swim.by/minsk-bike-path/',
          image: '-170px',
        }),

      },
      uGallery: {
        marker: new google.maps.Marker({
          map,
          position: { lat: 53.910543, lng: 27.575458 },
          animation: google.maps.Animation.DROP,
          icon: markerImage,
          title: 'Ў Gallery of Contemporary Art',
          location: 'Praspyekt Nyezalyezhnastsi 37а, Minsk, Belarus',
          openingHours: '10 AM - 12 PM',
          description: 'Active - art platform for the presentation of contemporary Belarusian and European art. ',
          moreInfoLink: 'http://en.ygallery.by/',
          image: '-340px',
        }),
      },
      showInfo(target) {
        document.querySelector('.map__target-picture').classList.toggle('map__target-picture--hide');
        document.querySelector('.map__target-info').classList.toggle('map__target-info--hide');
        setTimeout(
          () => {
            document.querySelector('.map__target-title').innerHTML = target.title;
            document.querySelector('.map__target-location').innerHTML = `<i class=\"material-icons\">room</i>${target.location}`;
            document.querySelector('.map__target-opening-hours').innerHTML = `<i class=\"material-icons\">query_builder</i>${target.openingHours}`;
            document.querySelector('.map__target-description').innerHTML = `${target.description} <a class="map__target-more-info" href="${target.moreInfoLink}" target="_blank">More</a>`;
            (document.querySelector('.map__target-picture') as HTMLElement).style.backgroundPositionX = target.image;
            document.querySelector('.map__target-picture').classList.toggle('map__target-picture--hide');
            document.querySelector('.map__target-info').classList.toggle('map__target-info--hide');
          },
          200,
        );
      },
      setActiveMarker() {
        for (const key in markers) {
          if (typeof(markers[key].marker) === 'object' && markers[key].marker != null) {
            markers[key].marker.setIcon(markerImage);
          }
        }
        if (this === markers) {
          markers.theatre.marker.setIcon(activeMarkerImage);
          markers.showInfo(markers.theatre.marker);
        } else {
          this.setIcon(activeMarkerImage);
          markers.showInfo(this);
        }
      },
    };
    markers.setActiveMarker();
    for (const key in markers) {
      if (typeof(markers[key].marker) === 'object' && markers[key].marker !== null) {
        markers[key].marker.addListener('click', markers.setActiveMarker);
      }
    }
    componentHandler.upgradeDom();
  }
}
