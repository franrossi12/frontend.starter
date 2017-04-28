"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var boat_component_1 = require("./boat.component");
var forms_1 = require("@angular/forms");
var boat_service_1 = require("./boat.service");
var boat_list_component_1 = require("./boat-list/boat-list.component");
var boat_edit_component_1 = require("./boat-edit/boat-edit.component");
var boat_start_component_1 = require("./boat-start/boat-start.component");
var BoatModule = (function () {
    function BoatModule(desc, capacity) {
        this.description = desc;
        this.capacity = capacity;
    }
    return BoatModule;
}());
BoatModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule
        ],
        declarations: [
            boat_component_1.BoatComponent,
            boat_list_component_1.BoatListComponent,
            boat_edit_component_1.BoatEditComponent,
            boat_start_component_1.BoatStartComponent
        ],
        providers: [boat_service_1.BoatService]
    }),
    __metadata("design:paramtypes", [String, String])
], BoatModule);
exports.BoatModule = BoatModule;
//# sourceMappingURL=E:/wamp64/www/frontStarter/src/app/boat/boat.module.js.map