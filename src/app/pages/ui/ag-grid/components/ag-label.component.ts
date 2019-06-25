import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'ag-label',
  template: `<span *ngFor="let item of values" class="label label--mini color--{{ item.color }}">{{ item.text }}</span>`,
})
export class AgLabelComponent implements ICellRendererAngularComp {
  public values: { color: string, text: string } | any;

  agInit(params: any): void {
    this.values = params.value;
    if (!Array.isArray(params.value)) {
      this.values = [params.value];
    }
  }

  refresh(): boolean {
    return true;
  }
}
