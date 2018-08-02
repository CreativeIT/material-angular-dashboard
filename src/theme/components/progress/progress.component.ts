import { Component, ElementRef, HostBinding, HostListener, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'base-progress',
  styleUrls: ['./progress.component.scss'],
  template: ``,
})
export class ProgressComponent {
  private progressValue = 0;
  private bufferValue = 100;
  private isDeterminate = true;

  @Input() private color;

  @Input() set indeterminate(value) {
    if (value || value === '') {
      this.isDeterminate = false;
    }
  }

  @Input() set progress(value) {
    this.progressValue = value;
    if (this.el.nativeElement.MaterialProgress) {
      this.el.nativeElement.MaterialProgress.setProgress(this.progressValue);
    }
  }

  @Input() set buffer(value) {
    this.bufferValue = value;
    if (this.el.nativeElement.MaterialProgress) {
      this.el.nativeElement.MaterialProgress.setBuffer(this.bufferValue);
    }
  }

  @HostBinding('class') private get className() {
    return `mdl-progress mdl-js-progress progress--colored-${this.color}`;
  }

  @HostBinding('class.mdl-progress__indeterminate') private get mdlProgressIndeterminate() {
    return !this.isDeterminate;
  }

  @HostListener('mdl-componentupgraded') private mdlComponentUpgraded() {
    this.el.nativeElement.MaterialProgress.setProgress(this.progressValue); this.el.nativeElement.MaterialProgress.setBuffer(this.bufferValue);
  }

  constructor(
    private el: ElementRef,
  ) { }
}
