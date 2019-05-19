(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<app-header></app-header>\n<!------------>\n\n<!-- Body -->\n<router-outlet></router-outlet>\n<!---------->\n\n<!-- Footer -->\n<app-footer></app-footer>\n<!------------>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/header/header.component */ "./src/app/component/header/header.component.ts");
/* harmony import */ var _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/footer/footer.component */ "./src/app/component/footer/footer.component.ts");
/* harmony import */ var _component_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/welcome/welcome.component */ "./src/app/component/welcome/welcome.component.ts");
/* harmony import */ var _component_lastposition_lastposition_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/lastposition/lastposition.component */ "./src/app/component/lastposition/lastposition.component.ts");
/* harmony import */ var _component_historical_historical_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/historical/historical.component */ "./src/app/component/historical/historical.component.ts");
/* harmony import */ var _component_virtualzone_virtualzone_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/virtualzone/virtualzone.component */ "./src/app/component/virtualzone/virtualzone.component.ts");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/authentication.service */ "./src/app/service/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _component_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _component_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_8__["WelcomeComponent"],
                _component_lastposition_lastposition_component__WEBPACK_IMPORTED_MODULE_9__["LastpositionComponent"],
                _component_historical_historical_component__WEBPACK_IMPORTED_MODULE_10__["HistoricalComponent"],
                _component_virtualzone_virtualzone_component__WEBPACK_IMPORTED_MODULE_11__["VirtualzoneComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRouting"]
            ],
            providers: [_service_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouting", function() { return AppRouting; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/welcome/welcome.component */ "./src/app/component/welcome/welcome.component.ts");
/* harmony import */ var _component_lastposition_lastposition_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/lastposition/lastposition.component */ "./src/app/component/lastposition/lastposition.component.ts");
/* harmony import */ var _component_historical_historical_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/historical/historical.component */ "./src/app/component/historical/historical.component.ts");
/* harmony import */ var _component_virtualzone_virtualzone_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/virtualzone/virtualzone.component */ "./src/app/component/virtualzone/virtualzone.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _component_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"] },
    { path: 'lastposition', component: _component_lastposition_lastposition_component__WEBPACK_IMPORTED_MODULE_3__["LastpositionComponent"] },
    { path: 'historical', component: _component_historical_historical_component__WEBPACK_IMPORTED_MODULE_4__["HistoricalComponent"] },
    { path: 'virtualzone', component: _component_virtualzone_virtualzone_component__WEBPACK_IMPORTED_MODULE_5__["VirtualzoneComponent"] },
];
var AppRouting = /** @class */ (function () {
    function AppRouting() {
    }
    AppRouting = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRouting);
    return AppRouting;
}());



/***/ }),

/***/ "./src/app/component/footer/footer.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/footer/footer.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/footer/footer.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/footer/footer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Begin Footer -->\n<footer class=\"footer\">\n  <div class=\"container text-center\">\n    <span class=\"text-muted\">Place sticky footer content here.</span>\n  </div>\n</footer>\n<!-- End Footer -->\n"

/***/ }),

/***/ "./src/app/component/footer/footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/component/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/component/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/component/header/header.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/header/header.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/header/header.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/header/header.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Begin Menu -->\n<header>\n  <nav class=\"navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">Kriauto</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n      </ul>\n      \n      <ul class=\"navbar-nav \">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">\n            <i class=\"fa fa-home\"></i>\n            Home\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">\n            <i class=\"fa fa-home\"></i>\n            Contacts\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item dropdown\" [hidden]=\"!connected\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"fas fa-map-marker-alt\"></i>\n            Géolocalisation\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" href=\"#\">Dernière position</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Historique</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Zone Virtuelle</a>\n          </div>\n        </li>\n        <li class=\"nav-item dropdown\" [hidden]=\"!connected\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"fas fa-map-marker-alt\"></i>\n            Rapport\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" href=\"#\">Vitesse</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Distance</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Carburant Principale</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Carburant Secondaire</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Température Moteur</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Température Frigot</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Portes</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Chauffeurs</a>\n          </div>\n        </li>\n        <li class=\"nav-item dropdown\" [hidden]=\"!connected\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"fas fa-map-marker-alt\"></i>\n            Notification\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" href=\"#\">Consultation</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Activation</a>\n          </div>\n        </li>\n        <li class=\"nav-item dropdown\" [hidden]=\"!connected\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"fas fa-map-marker-alt\"></i>\n            Configuration\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" href=\"#\">Paramètres</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Arret-Démarrage</a>\n          </div>\n        </li>\n        <li class=\"nav-item\" [hidden]=\"!connected\">\n          <a class=\"nav-link\" href=\"#\">\n            <i class=\"fa fa-home\"></i>\n            Mon Compte\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\" [hidden]=\"connected\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n            <i class=\"fas fa-sign-in-alt\"></i>\n            Connexion\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\" [hidden]=\"!connected\">\n          <a class=\"nav-link\" href=\"#\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n            <i class=\"fas fa-sign-out-alt\"></i>\n            Déconnexion\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n\n</header>\n<!-- End Menu -->\n<!-- Begin Modal Connexion -->\n<!-- Button trigger modal -->\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Connexion</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form>\n          <div class=\"form-group\">\n            <label for=\"login\">Identifiant</label>\n            <input type=\"login\" [(ngModel)]=\"authentication.login\"  class=\"form-control\" id=\"login\" name=\"login\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Mot de passe</label>\n            <input type=\"password\" [(ngModel)]=\"authentication.password\" class=\"form-control\" id=\"password\" name=\"password\">\n          </div>\n          <div class=\"form-check\">\n            <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n            <label class=\"form-check-label\" for=\"exampleCheck1\">se souvenir de moi</label>\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"login()\">Se connecter</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- End Modal Connexion -->\n"

/***/ }),

/***/ "./src/app/component/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _model_Authentication__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/Authentication */ "./src/app/model/Authentication.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authenticationService) {
        this.authenticationService = authenticationService;
        this.authentication = new _model_Authentication__WEBPACK_IMPORTED_MODULE_1__["Authentication"]();
        this.connected = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.login = function () {
        this.authenticationService.login(this.authentication)
            .subscribe(function (data) {
            alert("data ");
            /*this.currentuser = data;
            localStorage.setItem("token",this.currentuser.authToken.toString());
            alert("ok "+ this.currentuser.authToken.toString());*/
            console.log(data);
        }, function (error) {
            alert("error ");
            /*alert("ok "+ error['error']['message']);
            console.log(error['error']['message']);*/
            console.log(error);
        });
    };
    ;
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/component/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/component/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_service_authentication_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/component/historical/historical.component.css":
/*!***************************************************************!*\
  !*** ./src/app/component/historical/historical.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/historical/historical.component.html":
/*!****************************************************************!*\
  !*** ./src/app/component/historical/historical.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  historical works!\n</p>\n"

/***/ }),

/***/ "./src/app/component/historical/historical.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/historical/historical.component.ts ***!
  \**************************************************************/
/*! exports provided: HistoricalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoricalComponent", function() { return HistoricalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HistoricalComponent = /** @class */ (function () {
    function HistoricalComponent() {
    }
    HistoricalComponent.prototype.ngOnInit = function () {
    };
    HistoricalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-historical',
            template: __webpack_require__(/*! ./historical.component.html */ "./src/app/component/historical/historical.component.html"),
            styles: [__webpack_require__(/*! ./historical.component.css */ "./src/app/component/historical/historical.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HistoricalComponent);
    return HistoricalComponent;
}());



/***/ }),

/***/ "./src/app/component/lastposition/lastposition.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/component/lastposition/lastposition.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/lastposition/lastposition.component.html":
/*!********************************************************************!*\
  !*** ./src/app/component/lastposition/lastposition.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  lastposition works!\n</p>\n"

/***/ }),

/***/ "./src/app/component/lastposition/lastposition.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/lastposition/lastposition.component.ts ***!
  \******************************************************************/
/*! exports provided: LastpositionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastpositionComponent", function() { return LastpositionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LastpositionComponent = /** @class */ (function () {
    function LastpositionComponent() {
    }
    LastpositionComponent.prototype.ngOnInit = function () {
    };
    LastpositionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lastposition',
            template: __webpack_require__(/*! ./lastposition.component.html */ "./src/app/component/lastposition/lastposition.component.html"),
            styles: [__webpack_require__(/*! ./lastposition.component.css */ "./src/app/component/lastposition/lastposition.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LastpositionComponent);
    return LastpositionComponent;
}());



/***/ }),

/***/ "./src/app/component/virtualzone/virtualzone.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/component/virtualzone/virtualzone.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/virtualzone/virtualzone.component.html":
/*!******************************************************************!*\
  !*** ./src/app/component/virtualzone/virtualzone.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  virtualzone works!\n</p>\n"

/***/ }),

/***/ "./src/app/component/virtualzone/virtualzone.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/virtualzone/virtualzone.component.ts ***!
  \****************************************************************/
/*! exports provided: VirtualzoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualzoneComponent", function() { return VirtualzoneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VirtualzoneComponent = /** @class */ (function () {
    function VirtualzoneComponent() {
    }
    VirtualzoneComponent.prototype.ngOnInit = function () {
    };
    VirtualzoneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-virtualzone',
            template: __webpack_require__(/*! ./virtualzone.component.html */ "./src/app/component/virtualzone/virtualzone.component.html"),
            styles: [__webpack_require__(/*! ./virtualzone.component.css */ "./src/app/component/virtualzone/virtualzone.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VirtualzoneComponent);
    return VirtualzoneComponent;
}());



/***/ }),

/***/ "./src/app/component/welcome/welcome.component.css":
/*!*********************************************************!*\
  !*** ./src/app/component/welcome/welcome.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/welcome/welcome.component.html":
/*!**********************************************************!*\
  !*** ./src/app/component/welcome/welcome.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Begin page content -->\n<main role=\"main\" class=\"container\">\n  <h1 class=\"mt-5\">Sticky footer with fixed navbar</h1>\n  <p class=\"lead\">Pin a fixed-height footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS. A fixed navbar has been added with <code>padding-top: 60px;</code> on the <code>body &gt; .container</code>.</p>\n  <p>Back to <a href=\"../sticky-footer\">the default sticky footer</a> minus the navbar.</p>\n</main>\n<!-- Begin page content -->\n"

/***/ }),

/***/ "./src/app/component/welcome/welcome.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/welcome/welcome.component.ts ***!
  \********************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/component/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/component/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/model/Authentication.ts":
/*!*****************************************!*\
  !*** ./src/app/model/Authentication.ts ***!
  \*****************************************/
/*! exports provided: Authentication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Authentication", function() { return Authentication; });
var Authentication = /** @class */ (function () {
    function Authentication() {
    }
    return Authentication;
}());



/***/ }),

/***/ "./src/app/model/CurrentUser.ts":
/*!**************************************!*\
  !*** ./src/app/model/CurrentUser.ts ***!
  \**************************************/
/*! exports provided: CurrentUser, CurrentUserAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentUser", function() { return CurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentUserAdapter", function() { return CurrentUserAdapter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CurrentUser = /** @class */ (function () {
    function CurrentUser(agencyName, authToken, isCarburantP, isCarburantS, isContactUs, isCourse, isDoor, isDriver, isHistory, isLastPosition, isMyAccount, isNotifConf, isNotifCons, isParameters, isSpeedMax, isStartStop, isTempF, isTempM, isZoneOne, isZoneTwo) {
        this._agencyName = agencyName;
        this._authToken = authToken;
        this._isCarburantP = isCarburantP;
        this._isCarburantS = isCarburantS;
        this._isContactUs = isContactUs;
        this._isCourse = isCourse;
        this._isDoor = isDoor;
        this._isDriver = isDriver;
        this._isHistory = isHistory;
        this._isLastPosition = isLastPosition;
        this._isMyAccount = isMyAccount;
        this._isNotifConf = isNotifConf;
        this._isNotifCons = isNotifCons;
        this._isParameters = isParameters;
        this._isSpeedMax = isSpeedMax;
        this._isStartStop = isStartStop;
        this._isTempF = isTempF;
        this._isTempM = isTempM;
        this._isZoneOne = isZoneOne;
        this._isZoneTwo = isZoneTwo;
    }
    Object.defineProperty(CurrentUser.prototype, "agencyName", {
        get: function () {
            return this._agencyName;
        },
        set: function (value) {
            this._agencyName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentUser.prototype, "authToken", {
        get: function () {
            return this._authToken;
        },
        set: function (value) {
            this._authToken = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentUser.prototype, "isCarburantP", {
        get: function () {
            return this._isCarburantP;
        },
        set: function (value) {
            this._isCarburantP = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentUser.prototype, "isCarburantS", {
        get: function () {
            return this._isCarburantS;
        },
        set: function (value) {
            this._isCarburantS = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentUser.prototype, "isContactUs", {
        get: function () {
            return this._isContactUs;
        },
        set: function (value) {
            this._isContactUs = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentUser.prototype, "isCourse", {
        get: function () {
            return this._isCourse;
        },
        set: function (value) {
            this._isCourse = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentUser.prototype, "isDoor", {
        get: function () {
            return this._isDoor;
        },
        set: function (value) {
            this._isDoor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentUser.prototype, "isDriver", {
        get: function () {
            return this._isDriver;
        },
        set: function (value) {
            this._isDriver = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentUser.prototype, "isHistory", {
        get: function () {
            return this._isHistory;
        },
        set: function (value) {
            this._isHistory = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentUser.prototype, "isLastPosition", {
        get: function () {
            return this._isLastPosition;
        },
        set: function (value) {
            this._isLastPosition = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentUser.prototype, "isMyAccount", {
        get: function () {
            return this._isMyAccount;
        },
        set: function (value) {
            this._isMyAccount = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentUser.prototype, "isNotifConf", {
        get: function () {
            return this._isNotifConf;
        },
        set: function (value) {
            this._isNotifConf = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentUser.prototype, "isNotifCons", {
        get: function () {
            return this._isNotifCons;
        },
        set: function (value) {
            this._isNotifCons = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentUser.prototype, "isParameters", {
        get: function () {
            return this._isParameters;
        },
        set: function (value) {
            this._isParameters = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentUser.prototype, "isSpeedMax", {
        get: function () {
            return this._isSpeedMax;
        },
        set: function (value) {
            this._isSpeedMax = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentUser.prototype, "isStartStop", {
        get: function () {
            return this._isStartStop;
        },
        set: function (value) {
            this._isStartStop = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentUser.prototype, "isTempF", {
        get: function () {
            return this._isTempF;
        },
        set: function (value) {
            this._isTempF = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentUser.prototype, "isTempM", {
        get: function () {
            return this._isTempM;
        },
        set: function (value) {
            this._isTempM = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentUser.prototype, "isZoneOne", {
        get: function () {
            return this._isZoneOne;
        },
        set: function (value) {
            this._isZoneOne = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentUser.prototype, "isZoneTwo", {
        get: function () {
            return this._isZoneTwo;
        },
        set: function (value) {
            this._isZoneTwo = value;
        },
        enumerable: true,
        configurable: true
    });
    return CurrentUser;
}());

var CurrentUserAdapter = /** @class */ (function () {
    function CurrentUserAdapter() {
    }
    CurrentUserAdapter.prototype.adapt = function (item) {
        return new CurrentUser(item.agencyName, item.authToken, item.isCarburantP, item.isCarburantS, item.isContactUs, item.isCourse, item.isDoor, item.isDriver, item.isHistory, item.isLastPosition, item.isMyAccount, item.isNotifConf, item.isNotifCons, item.isParameters, item.isSpeedMax, item.isStartStop, item.isTempF, item.isTempM, item.isZoneOne, item.isZoneTwo);
    };
    CurrentUserAdapter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], CurrentUserAdapter);
    return CurrentUserAdapter;
}());



/***/ }),

/***/ "./src/app/service/authentication.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/authentication.service.ts ***!
  \***************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators/map */ "./node_modules/rxjs-compat/_esm5/operators/map.js");
/* harmony import */ var _model_CurrentUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/CurrentUser */ "./src/app/model/CurrentUser.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, adapter) {
        this.http = http;
        this.adapter = adapter;
        this.baseUrl = 'http://www.kriauto.ma/api/login';
    }
    AuthenticationService.prototype.login = function (authentication) {
        var _this = this;
        return this.http.post("" + this.baseUrl, authentication).pipe(
        // Adapt each item in the raw data array
        Object(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.map(function (item) { return _this.adapter.adapt(item); }); }));
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _model_CurrentUser__WEBPACK_IMPORTED_MODULE_3__["CurrentUserAdapter"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/abdelhaq/workspace/kriauto-ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map