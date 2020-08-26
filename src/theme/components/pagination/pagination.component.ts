import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Component({
  selector: 'base-pagination',
  styleUrls: ['./pagination.component.scss'],
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {
  @HostBinding('class.pagination') private readonly pagination = true;

  @Input() public numPage = 1;
  @Input() public currentPage = 1;
  @Output() public changePage = new EventEmitter();
  public inputNumPage: number;

  public onChangePage(direction: number) {
    this.currentPage = Math.min(Math.max(this.currentPage + direction, 1), this.numPage);
    this.changePage.emit(this.currentPage);
  }

  public goToPage(event) {
    event.preventDefault();
    this.currentPage = (this.inputNumPage <= this.numPage && this.inputNumPage > 0) ? this.inputNumPage : this.currentPage;
    this.inputNumPage = null;
    this.changePage.emit(this.currentPage);
  }
}
