import {
  Directive,
  Input,
  ViewContainerRef,
  TemplateRef,
  ComponentFactoryResolver,
  ComponentRef,
} from '@angular/core';

import { BaseTooltipComponent } from './tooltip.component';

@Directive({
  selector: '[baseTooltip]',
})
export class BaseTooltipDirective {
  private tooltipRef: ComponentRef<BaseTooltipComponent>;

  @Input() set baseTooltip(value) {
    const targetRef = this.vcr.createEmbeddedView(this.tr);
    this.tooltipRef = this.vcr.createComponent(
      this.cfr.resolveComponentFactory(BaseTooltipComponent),
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
