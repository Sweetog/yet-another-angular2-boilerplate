import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/core/core.module';
import { enableProdMode } from '@angular/core';

//CSS STYLES
import './styles';


if (!AppConfig.isDev) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
