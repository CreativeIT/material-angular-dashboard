import { Component, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PaginationProxy } from 'ag-grid-community';

@Component({
  selector: 'ag-pagination',
  styleUrls: ['../../../../../theme/components/pagination/pagination.component.scss'],
  template: `
    <span (click)="onChangePage(-1)"><i class="material-icons">chevron_left</i></span>
    <span> {{ currentPage }} of {{ numPage }} </span>
    <span (click)="onChangePage(1)"><i class="material-icons">chevron_right</i></span>
    <div class="goto">
      <span> Go to </span>
      <form (submit)="goToPage($event)">
        <input [(ngModel)]="inputNumPage" name="inputPage"
               class="mdl-textfield__input"
               type="number"
               min="1"
               [max]="numPage">
      </form>
    </div>
  `,
})
export class AgPaginationComponent implements OnChanges {
  @HostBinding('class.pagination') private readonly pagination = true;
  @Input() private paginationProxy: PaginationProxy;
  public numPage = 1;
  public currentPage = 1;
  public inputNumPage: number;

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('paginationProxy') && changes.paginationProxy.currentValue) {
      this.numPage = this.paginationProxy.getTotalPages();
      this.currentPage = this.paginationProxy.getCurrentPage() + 1;
    }
  }

  public onChangePage(direction: number) {
    if (direction > 0) {
      this.paginationProxy.goToNextPage();
    } else {
      this.paginationProxy.goToPreviousPage();
    }
    this.currentPage = this.paginationProxy.getCurrentPage() + 1;
  }

  public goToPage(event) {
    event.preventDefault();
    this.currentPage = (this.inputNumPage <= this.numPage && this.inputNumPage > 0) ? this.inputNumPage : this.currentPage;
    this.paginationProxy.goToPage(this.currentPage - 1);
    this.inputNumPage = null;
  }
}
