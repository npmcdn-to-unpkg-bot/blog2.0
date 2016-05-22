///<reference path="../../typings.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';
import {provide} from '@angular/core';
import {ROUTER_PROVIDERS} from '@angular/router';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from "@angular/router";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";



import { AppComponent } from "./app.component";


bootstrap(AppComponent, [ROUTER_PROVIDERS, provide(LocationStrategy,
    {useClass: HashLocationStrategy})]);





