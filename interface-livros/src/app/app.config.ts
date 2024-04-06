import {ApplicationConfig, NgModule} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from "@angular/common/http";



export let appConfig: ApplicationConfig;
appConfig = {
  providers: [provideRouter(routes), provideHttpClient()]
};
