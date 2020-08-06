import { Component, EventEmitter, HostBinding, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { InvestigationsService } from '@services/*';
import { takeWhile } from 'rxjs/internal/operators';
import { UpgradableComponent } from '../../../theme/components/upgradable/upgradable.component';

const HEADER_INVESTIGATION = [
  {
    id: 'openDateTime',
    name: 'Time',
    sort: 0,
  },
  {
    id: 'locationCountry',
    name: 'Location Country',
    sort: 0,
  },
  {
    id: 'reportSource',
    name: 'Report Source',
    sort: 0,
  },
  {
    id: 'status',
    name: 'Status',
    sort: 0,
  },
  {
    id: 'originSource',
    name: 'Origin',
    sort: 0,
  },
];
const PERIOD_TYPES = {
  today: 'today',
  yesterday: 'yesterday',
  week: 'week',
  month: 'month',
  year: 'year',
};

@Component({
  selector: 'app-investig-wrap-table',
  styleUrls: ['./investig-wrap-table.component.scss'],
  templateUrl: './investig-wrap-table.component.html',
})
export class InvestigWrapTableComponent extends UpgradableComponent implements OnInit, OnDestroy {
  @HostBinding('class.mdl-grid') public readonly mdlGrid = true;
  @HostBinding('class.mdl-cell') public readonly mdlCell = true;
  @HostBinding('class.mdl-cell--12-col-desktop') public readonly mdlCell12ColDesktop = true;
  @HostBinding('class.mdl-cell--12-col-tablet') public readonly mdlCell12ColTablet = true;
  @HostBinding('class.mdl-cell--4-col-phone') public readonly mdlCell4ColPhone = true;
  @HostBinding('class.mdl-cell--top') public readonly mdlCellTop = true;
  @HostBinding('class.ui-tables') public readonly uiTables = true;

  @Input() public config: {
    type: 'investigation', // 'investigation' | 'prediction'
    isPagination: true,
    isPeriod: false,
    title: 'Investigations',
    isFilter: false,
  };
  @Input() public filterParams: any;
  public readonly periodTypes = PERIOD_TYPES;

  public alive = true;
  public data: any[];
  public period = PERIOD_TYPES.week;
  public numPage = 1;
  public currentPage = 1;
  public headers = [];
  public filterValues = {};

  constructor(public investService: InvestigationsService) {
    super();
  }

  public ngOnInit() {
    this.headers = HEADER_INVESTIGATION;
    if (this.config.isFilter) {
      this.investService.filterValue()
        .pipe(takeWhile(() => this.alive))
        .subscribe((filterValue) => {
          this.filterValues = filterValue;
          this.loadData(this.filterValues);
        });
    }
    this.filterValues = { period: this.period };
    this.loadData(this.filterValues);
  }

  public ngOnDestroy() {
    this.alive = false;
  }

  public changePeriod(period) {
    if (this.period !== period) {
      this.period = period;
      this.filterValues = { period: this.period };
      this.loadData(this.filterValues);
    }
  }

  public loadData(filters: object = {}, page: number = null) {
    let fullFilter = Object.assign({}, filters);
    if (this.config.isPagination) {
      this.currentPage = page ? page : 1;
      fullFilter = Object.assign({}, fullFilter, { page: this.currentPage });
    }

    this.investService.getInvestigations(fullFilter)
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.data = data.investigations;
        this.numPage = data.pages;
        if (page === null) { // update by filter or sorting. go to first page
          this.currentPage = (data.pages > 0) ? 1 : 0;
        }
      });
  }

  public changePage(page) {
    if (page !== this.currentPage) {
      this.currentPage = page;
      this.loadData(this.filterValues, page);
    }
  }

  public onClick() {
    setTimeout(() => componentHandler.upgradeDom(), 200);
  }
}
