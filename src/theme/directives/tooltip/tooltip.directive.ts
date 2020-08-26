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
  private tooltipRef: ComponentRef<TooltipComponent>;

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
    private vcr: ViewContainerRef,
    private tr: TemplateRef<any>,
    private cfr: ComponentFactoryResolver,
  ) { }
}
