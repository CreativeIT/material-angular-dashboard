import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'ag-available',
  template: `
    <span *ngFor="let i of Array(countNum)" class="label label--mini label__availability"
          [class.background-color--secondary]="countNum === 1"
          [class.color--orange]="countNum === 2"
          [class.background-color--primary]="countNum === 4"
          [class.color--green]="countNum === 3"></span>
    <span *ngFor="let i of Array(4 - countNum)" class="label label--mini label__availability"></span>
  `,
})
export class AgAvailableComponent implements ICellRendererAngularComp {
  public readonly Array = Array;
  public countNum = 0;

  agInit(params: any): void {
    this.countNum = params.value;
  }

  refresh(): boolean {
    return false;
  }
}
