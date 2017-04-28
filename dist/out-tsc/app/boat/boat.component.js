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
var boat_service_1 = require("./boat.service");
var BoatComponent = (function () {
    function BoatComponent(service) {
        this.service = service;
    }
    BoatComponent.prototype.ngOnInit = function () {
    };
    return BoatComponent;
}());
BoatComponent = __decorate([
    core_1.Component({
        selector: 'app-boat',
        templateUrl: './boat.component.html',
        styleUrls: ['./boat.component.scss']
    }),
    __metadata("design:paramtypes", [boat_service_1.BoatService])
], BoatComponent);
exports.BoatComponent = BoatComponent;
//# sourceMappingURL=E:/wamp64/www/frontStarter/src/app/boat/boat.component.js.map