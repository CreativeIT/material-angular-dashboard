import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'base-progress',
  // styleUrls: ['../toggle/toggle.component.scss'],
  template: `
    <div #bar class="mdl-progress mdl-js-progress progress--colored-{{ color }}" (mdl-componentupgraded)="$event.target.MaterialProgress.setProgress(progressValue); $event.target.MaterialProgress.setBuffer(bufferValue)" [class.mdl-progress__indeterminate]="!isDeterminate"></div>
  `,
})
export class ProgressComponent {
  private progressValue = 0;
  private bufferValue = 100;
  private isDeterminate = true;

  @ViewChild('bar') bar;
  @Input() color;

  @Input() set indeterminate(value) {
    if (value || value === '') {
      this.isDeterminate = false;
    }
  }

  @Input() set progress(value) {
    this.progressValue = value;
    if (this.bar.nativeElement.MaterialProgress) {
      this.bar.nativeElement.MaterialProgress.setProgress(this.progressValue);
    }
  }

  @Input() set buffer(value) {
    this.bufferValue = value;
    if (this.bar.nativeElement.MaterialProgress) {
      this.bar.nativeElement.MaterialProgress.setBuffer(this.bufferValue);
    }
  }
}
