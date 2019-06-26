import { Component } from '@angular/core';

@Component({
  selector: 'app-investigations',
  styleUrls: ['./investigations.component.scss'],
  templateUrl: './investigations.component.html',
})
export class InvestigationsComponent {
  public config = {
    type: 'investigation',
    isPagination: true,
    isPeriod: false,
    title: 'Investigations',
    isFilter: true,
  };
}
