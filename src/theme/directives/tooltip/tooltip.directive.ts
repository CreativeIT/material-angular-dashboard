import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

import { TooltipComponent } from './tooltip.component';

@Directive({
  selector: '[baseTooltip]',
})
export class TooltipDirective {
  public tooltipRef: ComponentRef<TooltipComponent>;

  @Input() set baseTooltip(value) {
    // NOTE: questionably
    const targetRef = this.vcr.createEmbeddedView(this.tr);
    this.tooltipRef = this.vcr.createComponent(
      this.cfr.resolveComponentFactory(TooltipComponent),
    );
    this.tooltipRef.instance.targetId = targetRef.rootNodes[0].getAttribute('id');
    this.tooltipRef.instance.content = value;
  }

  @Input() set baseTooltipPosition(value) {
    this.tooltipRef.instance.position = value;
  }

  @Input() set baseTooltipLarge(value) {
    this.tooltipRef.instance.large = true;
  }

  constructor(
    public vcr: ViewContainerRef,
    public tr: TemplateRef<any>,
    public cfr: ComponentFactoryResolver,
  ) { }
}
