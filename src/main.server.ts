import { enableProdMode } from '@angular/core';

import * as domino from 'domino';
import * as fs from 'fs';
import * as path from 'path';
import { environment } from './environments/environment';

declare global {
  // tslint:disable-next-line
  interface Window {
    foo: string;
  }
}

const template = fs.readFileSync(path.join(__dirname, '../dist', 'index.html')).toString();
const win = domino.createWindow(template);

global['window'] = win;
if (environment.production) {
  enableProdMode();
}

export { AppServerModule } from './app/app.server.module';
export { renderModule, renderModuleFactory } from '@angular/platform-server';
