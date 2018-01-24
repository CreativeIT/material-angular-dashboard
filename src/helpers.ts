import 'material-design-lite/material';

import { AfterViewInit, HostBinding } from '@angular/core';

export const HostClassBinding = (classList: string | DOMTokenList | (() => string | DOMTokenList)) => Target => {
  Object.defineProperty(Target.prototype, 'hostClassList', {
    [
      typeof(classList) === 'string' || classList instanceof DOMTokenList
        ? 'value'
        : 'get'
    ]: (
      classList instanceof DOMTokenList
        ? classList.toString()
        : classList
    ),
  });
  HostBinding('class')(Target.prototype, 'hostClassList', Object.getOwnPropertyDescriptor(Target.prototype, 'hostClassList'));
};

export const UpgradeDomAfterViewInit = Target => class extends Target implements AfterViewInit {
  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }
};
