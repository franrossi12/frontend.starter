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
var http_1 = require("@angular/http");
require("rxjs/Rx");
var Observable_1 = require("rxjs/Observable");
var BoatService = (function () {
    function BoatService(http) {
        this.http = http;
    }
    ;
    BoatService.prototype.storeBoat = function (boat) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://127.0.0.1:8000/api/boat-store', boat, { headers: headers })
            .map(function (response) {
            var data = response.json();
            return data;
        })
            .catch(function (error) {
            return Observable_1.Observable.throw('Something went wrong');
        });
    };
    BoatService.prototype.getBoats = function () {
        return this.http.get('http://127.0.0.1:8000/api/boat-list')
            .map(function (response) {
            var data = response.json();
            console.log(data.boats.data);
            return data.boats.data;
        })
            .catch(function (error) {
            return Observable_1.Observable.throw('Something went wrong');
        });
    };
    BoatService.prototype.getBoat = function (boat) {
        return this.http.get('https://udemy-ng-http.firebaseio.com/appName.json')
            .map(function (response) {
            return response.json();
        });
    };
    return BoatService;
}());
BoatService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], BoatService);
exports.BoatService = BoatService;
//# sourceMappingURL=E:/wamp64/www/frontStarter/src/app/boat/boat.service.js.map