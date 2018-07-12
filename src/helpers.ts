import 'material-design-lite/material';

import { AfterViewInit, HostBinding } from '@angular/core';

export function HostClassBinding(classList: string | DOMTokenList | (() => string | DOMTokenList), inherit = false) {
  return (Target) => {
    Object.defineProperty(
      Target.prototype,
      'hostClassList',
      {
        get () {
          return (
            (inherit ? this.viewContainerRef.element.nativeElement.className : '')
            + ' '
            + (
              typeof(classList) === 'string' || classList instanceof DOMTokenList
                ? classList.toString()
                : classList.call(this).toString()
            )
          ).split(' ').filter((cls, i, list) => list.indexOf(cls) === i).join(' '); // FIXME: ugly
        },
      },
    );
    HostBinding('class')(Target.prototype, 'hostClassList', Object.getOwnPropertyDescriptor(Target.prototype, 'hostClassList'));
  };
}

export function UpgradeDomAfterViewInit(Target) {
  const ngAfterViewInit = Target.prototype.ngAfterViewInit;
  Target.prototype.ngAfterViewInit = function () {
    if (ngAfterViewInit) {
      ngAfterViewInit.call(this);
    }
    componentHandler.upgradeDom();
  };
}
