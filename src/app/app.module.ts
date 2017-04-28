import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
//import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';
import { FormsModule } from '@angular/forms';

// Routing Module
import { AppRoutingModule } from './app.routing';

//Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';


import {Http, Headers, HttpModule} from '@angular/http';

//social

import { Angular2SocialLoginModule } from 'angular2-social-login';
import { BoatComponent } from './boat/boat.component';
import { BoatListComponent } from './boat/boat-list/boat-list.component';
import {BoatService} from './boat/boat.service';
import {BoatStartComponent} from './boat/boat-start/boat-start.component';

let providers = {
  "google": {
    "clientId": "434170109748-71jcj2hpl0srqj0a2dmbaurf96mp7hrc.apps.googleusercontent.com"
  },
  "facebook": {
      "clientId": "1041155476018316",
      "apiVersion": "v2.9"
  }
};

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    //DropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    Angular2SocialLoginModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    BoatComponent,
    BoatListComponent,
    BoatStartComponent
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy},
    BoatService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

Angular2SocialLoginModule.loadProvidersScripts(providers);
