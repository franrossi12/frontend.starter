"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var app_component_1 = require("./app.component");
//import { DropdownModule } from 'ng2-bootstrap/dropdown';
var tabs_1 = require("ng2-bootstrap/tabs");
var nav_dropdown_directive_1 = require("./shared/nav-dropdown.directive");
var ng2_charts_1 = require("ng2-charts/ng2-charts");
var sidebar_directive_1 = require("./shared/sidebar.directive");
var aside_directive_1 = require("./shared/aside.directive");
var breadcrumb_component_1 = require("./shared/breadcrumb.component");
var forms_1 = require("@angular/forms");
// Routing Module
var app_routing_1 = require("./app.routing");
//Layouts
var full_layout_component_1 = require("./layouts/full-layout.component");
var http_1 = require("@angular/http");
//social
var angular2_social_login_1 = require("angular2-social-login");
var boat_component_1 = require("./boat/boat.component");
var boat_list_component_1 = require("./boat/boat-list/boat-list.component");
var boat_service_1 = require("./boat/boat.service");
var boat_start_component_1 = require("./boat/boat-start/boat-start.component");
var providers = {
    "google": {
        "clientId": "434170109748-71jcj2hpl0srqj0a2dmbaurf96mp7hrc.apps.googleusercontent.com"
    },
    "facebook": {
        "clientId": "1041155476018316",
        "apiVersion": "v2.9"
    }
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_1.AppRoutingModule,
            //DropdownModule.forRoot(),
            tabs_1.TabsModule.forRoot(),
            ng2_charts_1.ChartsModule,
            angular2_social_login_1.Angular2SocialLoginModule,
            forms_1.FormsModule,
            http_1.HttpModule
        ],
        declarations: [
            app_component_1.AppComponent,
            full_layout_component_1.FullLayoutComponent,
            nav_dropdown_directive_1.NAV_DROPDOWN_DIRECTIVES,
            breadcrumb_component_1.BreadcrumbsComponent,
            sidebar_directive_1.SIDEBAR_TOGGLE_DIRECTIVES,
            aside_directive_1.AsideToggleDirective,
            boat_component_1.BoatComponent,
            boat_list_component_1.BoatListComponent,
            boat_start_component_1.BoatStartComponent
        ],
        providers: [{
                provide: common_1.LocationStrategy,
                useClass: common_1.HashLocationStrategy
            },
            boat_service_1.BoatService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
angular2_social_login_1.Angular2SocialLoginModule.loadProvidersScripts(providers);
//# sourceMappingURL=E:/wamp64/www/frontStarter/src/app/app.module.js.map