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
var angular2_social_login_1 = require("angular2-social-login");
var LoginComponent = (function () {
    function LoginComponent(_auth) {
        this._auth = _auth;
    }
    LoginComponent.prototype.signIn = function (provider) {
        var _this = this;
        this.sub = this._auth.login(provider).subscribe(function (data) {
            console.log(data);
            _this.user = data;
        });
    };
    LoginComponent.prototype.logout = function () {
        var _this = this;
        this._auth.logout().subscribe(function (data) { console.log(data); _this.user = null; });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        templateUrl: 'login.component.html'
    }),
    __metadata("design:paramtypes", [angular2_social_login_1.AuthService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=E:/wamp64/www/frontStarter/src/app/pages/login.component.js.map