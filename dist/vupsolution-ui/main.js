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

module.exports = "a,button { outline: none; }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<app-header></app-header>\n<!------------>\n\n<!-- Body -->\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-2 collapse d-md-flex bg-light pt-2 min-vh-100\" id=\"sidebar\" [hidden]=\"!connected1\">\n            <!-- Menu Vertical  -->\n            <app-menu></app-menu>\n            <!------------>\n        </div>\n        <div class=\"col pt-2\">\n            <!-- Contenet Right -->\n            <router-outlet></router-outlet>\n            <!------------>\n        </div>\n    </div>\n</div>\n<!---------->\n\n<!-- Footer -->\n<app-footer></app-footer>\n<!------------>\n"

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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _interceptor_tokeninterceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./interceptor/tokeninterceptor */ "./src/app/interceptor/tokeninterceptor.ts");
/* harmony import */ var _component_menu_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/menu/menu.component */ "./src/app/component/menu/menu.component.ts");
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
                _component_virtualzone_virtualzone_component__WEBPACK_IMPORTED_MODULE_11__["VirtualzoneComponent"],
                _component_menu_menu_component__WEBPACK_IMPORTED_MODULE_15__["MenuComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRouting"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"]
            ],
            providers: [_service_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _interceptor_tokeninterceptor__WEBPACK_IMPORTED_MODULE_14__["TokenInterceptor"],
                    multi: true
                },
            ],
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

module.exports = "a,button { outline: none; }"

/***/ }),

/***/ "./src/app/component/header/header.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/header/header.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Begin Menu -->\n<header>\n  <nav class=\"navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">VUP-SOLUTION</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n      </ul>\n      \n      <ul class=\"navbar-nav \">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\" [hidden]=\"connected\" (click)=\"open(content)\">\n            <i class=\"fas fa-sign-in-alt\"></i>\n            Connexion\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\" [hidden]=\"!connected\">\n          <a class=\"nav-link\" href=\"#\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n            <i class=\"fas fa-sign-out-alt\"></i>\n            Déconnexion\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n\n</header>\n<!-- End Menu -->\n<!-- Begin Modal Connexion -->\n<ng-template #content let-modal let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\" id=\"exampleModalLabel\">Connexion</h5>\n    <button type=\"button\" class=\"close\"  aria-label=\"Close\" (click)=\"c('Close click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>\n    <form>\n      <div class=\"form-group\">\n        <label for=\"login\">Identifiant</label>\n        <input type=\"login\" [(ngModel)]=\"authentication.login\"  class=\"form-control\" id=\"login\" name=\"login\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Mot de passe</label>\n        <input type=\"password\" [(ngModel)]=\"authentication.password\" class=\"form-control\" id=\"password\" name=\"password\">\n      </div>\n      <div class=\"form-check\">\n        <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n        <label class=\"form-check-label\" for=\"exampleCheck1\">se souvenir de moi</label>\n      </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"login()\">Se connecter</button>\n  </div>\n</ng-template>\n<!-- End Modal Connexion -->\n\n"

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
/* harmony import */ var _model_authentication__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/authentication */ "./src/app/model/authentication.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/message */ "./src/app/model/message.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function HeaderComponent(authenticationservice, modalService, router) {
        this.authenticationservice = authenticationservice;
        this.modalService = modalService;
        this.router = router;
        this.authentication = new _model_authentication__WEBPACK_IMPORTED_MODULE_1__["Authentication"]();
        this.modalReference = null;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.connected = false;
        this.message = null;
    };
    HeaderComponent.prototype.login = function () {
        var _this = this;
        this.authenticationservice.login(this.authentication)
            .subscribe(function (data) {
            _this.currentuser = data;
            _this.authenticationservice.addToken(_this.currentuser.authToken.toString());
            var text = 'success';
            _this.message = new _model_message__WEBPACK_IMPORTED_MODULE_3__["Message"](text, 'success', 'A2');
            //console.log(data);
            _this.connected = true;
            _this.modalReference.close();
            _this.router.navigateByUrl('/lastposition');
        }, function (error) {
            var text = error['error']['message'];
            //console.log(error);
            _this.message = new _model_message__WEBPACK_IMPORTED_MODULE_3__["Message"](text, 'error', 'A2');
        });
    };
    ;
    HeaderComponent.prototype.open = function (content) {
        this.modalReference = null;
        this.authentication = new _model_authentication__WEBPACK_IMPORTED_MODULE_1__["Authentication"]();
        this.message = null;
        this.modalReference = this.modalService.open(content);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/component/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/component/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_service_authentication_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
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

module.exports = "\n\n"

/***/ }),

/***/ "./src/app/component/lastposition/lastposition.component.html":
/*!********************************************************************!*\
  !*** ./src/app/component/lastposition/lastposition.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "lastposition"

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

/***/ "./src/app/component/menu/menu.component.css":
/*!***************************************************!*\
  !*** ./src/app/component/menu/menu.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link[data-toggle].collapsed:after {\n    content: \"  +\";\n}\n.nav-link[data-toggle]:not(.collapsed):after {\n    content: \"  -\";\n}\na,button { outline: none; }"

/***/ }),

/***/ "./src/app/component/menu/menu.component.html":
/*!****************************************************!*\
  !*** ./src/app/component/menu/menu.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul id=\"accordion1\" class=\"nav nav-pills flex-column\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" data-toggle=\"collapse\" href=\"#item-1\" data-parent=\"#accordion1\">Item 1</a>\n    <div id=\"item-1\" class=\"collapse show\">\n      <ul class=\"nav flex-column ml-3\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#/virtualzone\">Sub 1-1</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Sub 1-2</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Sub 1-3</a>\n        </li>\n      </ul>\n    </div>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" data-toggle=\"collapse\" href=\"#item-2\" data-parent=\"#accordion1\">Item 2</a>\n    <div id=\"item-2\" class=\"collapse\">\n      <ul class=\"nav flex-column ml-3\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Sub 2-1</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Sub 2-2</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Sub 2-3</a>\n        </li>\n      </ul>\n    </div>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" data-toggle=\"collapse\" href=\"#item-3\" data-parent=\"#accordion1\">Item 3</a>\n    <div id=\"item-3\" class=\"collapse\">\n      <ul class=\"nav flex-column ml-3\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Sub 3-1</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Sub 3-2</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Sub 3-3</a>\n        </li>\n      </ul>\n    </div>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/component/menu/menu.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/menu/menu.component.ts ***!
  \**************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
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

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/component/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/component/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
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

module.exports = "<!-- Begin page content -->\nWelcome\n<!-- Begin page content -->\n"

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

/***/ "./src/app/interceptor/tokeninterceptor.ts":
/*!*************************************************!*\
  !*** ./src/app/interceptor/tokeninterceptor.ts ***!
  \*************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/service/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(authenticationservice) {
        this.authenticationservice = authenticationservice;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        request = request.clone({
            setHeaders: {
                Authorization: "" + this.authenticationservice.getToken()
            }
        });
        return next.handle(request);
    };
    TokenInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_service_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/model/authentication.ts":
/*!*****************************************!*\
  !*** ./src/app/model/authentication.ts ***!
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

/***/ "./src/app/model/currentuser.ts":
/*!**************************************!*\
  !*** ./src/app/model/currentuser.ts ***!
  \**************************************/
/*! exports provided: Currentuser, CurrentUserAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Currentuser", function() { return Currentuser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentUserAdapter", function() { return CurrentUserAdapter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Currentuser = /** @class */ (function () {
    function Currentuser(agencyName, authToken, isCarburantP, isCarburantS, isContactUs, isCourse, isDoor, isDriver, isHistory, isLastPosition, isMyAccount, isNotifConf, isNotifCons, isParameters, isSpeedMax, isStartStop, isTempF, isTempM, isZoneOne, isZoneTwo) {
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
    Object.defineProperty(Currentuser.prototype, "agencyName", {
        get: function () {
            return this._agencyName;
        },
        set: function (value) {
            this._agencyName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Currentuser.prototype, "authToken", {
        get: function () {
            return this._authToken;
        },
        set: function (value) {
            this._authToken = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Currentuser.prototype, "isCarburantP", {
        get: function () {
            return this._isCarburantP;
        },
        set: function (value) {
            this._isCarburantP = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Currentuser.prototype, "isCarburantS", {
        get: function () {
            return this._isCarburantS;
        },
        set: function (value) {
            this._isCarburantS = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Currentuser.prototype, "isContactUs", {
        get: function () {
            return this._isContactUs;
        },
        set: function (value) {
            this._isContactUs = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Currentuser.prototype, "isCourse", {
        get: function () {
            return this._isCourse;
        },
        set: function (value) {
            this._isCourse = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Currentuser.prototype, "isDoor", {
        get: function () {
            return this._isDoor;
        },
        set: function (value) {
            this._isDoor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Currentuser.prototype, "isDriver", {
        get: function () {
            return this._isDriver;
        },
        set: function (value) {
            this._isDriver = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Currentuser.prototype, "isHistory", {
        get: function () {
            return this._isHistory;
        },
        set: function (value) {
            this._isHistory = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Currentuser.prototype, "isLastPosition", {
        get: function () {
            return this._isLastPosition;
        },
        set: function (value) {
            this._isLastPosition = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Currentuser.prototype, "isMyAccount", {
        get: function () {
            return this._isMyAccount;
        },
        set: function (value) {
            this._isMyAccount = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Currentuser.prototype, "isNotifConf", {
        get: function () {
            return this._isNotifConf;
        },
        set: function (value) {
            this._isNotifConf = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Currentuser.prototype, "isNotifCons", {
        get: function () {
            return this._isNotifCons;
        },
        set: function (value) {
            this._isNotifCons = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Currentuser.prototype, "isParameters", {
        get: function () {
            return this._isParameters;
        },
        set: function (value) {
            this._isParameters = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Currentuser.prototype, "isSpeedMax", {
        get: function () {
            return this._isSpeedMax;
        },
        set: function (value) {
            this._isSpeedMax = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Currentuser.prototype, "isStartStop", {
        get: function () {
            return this._isStartStop;
        },
        set: function (value) {
            this._isStartStop = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Currentuser.prototype, "isTempF", {
        get: function () {
            return this._isTempF;
        },
        set: function (value) {
            this._isTempF = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Currentuser.prototype, "isTempM", {
        get: function () {
            return this._isTempM;
        },
        set: function (value) {
            this._isTempM = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Currentuser.prototype, "isZoneOne", {
        get: function () {
            return this._isZoneOne;
        },
        set: function (value) {
            this._isZoneOne = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Currentuser.prototype, "isZoneTwo", {
        get: function () {
            return this._isZoneTwo;
        },
        set: function (value) {
            this._isZoneTwo = value;
        },
        enumerable: true,
        configurable: true
    });
    return Currentuser;
}());

var CurrentUserAdapter = /** @class */ (function () {
    function CurrentUserAdapter() {
    }
    CurrentUserAdapter.prototype.adapt = function (item) {
        return new Currentuser(item.agencyName, item.authToken, item.isCarburantP, item.isCarburantS, item.isContactUs, item.isCourse, item.isDoor, item.isDriver, item.isHistory, item.isLastPosition, item.isMyAccount, item.isNotifConf, item.isNotifCons, item.isParameters, item.isSpeedMax, item.isStartStop, item.isTempF, item.isTempM, item.isZoneOne, item.isZoneTwo);
    };
    CurrentUserAdapter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], CurrentUserAdapter);
    return CurrentUserAdapter;
}());



/***/ }),

/***/ "./src/app/model/message.ts":
/*!**********************************!*\
  !*** ./src/app/model/message.ts ***!
  \**********************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
var Message = /** @class */ (function () {
    function Message(text, type, code) {
        this._text = text;
        this._type = type;
        this._code = code;
    }
    Object.defineProperty(Message.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (value) {
            this._text = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Message.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Message.prototype, "code", {
        get: function () {
            return this._code;
        },
        set: function (value) {
            this._code = value;
        },
        enumerable: true,
        configurable: true
    });
    return Message;
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
/* harmony import */ var _model_currentuser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/currentuser */ "./src/app/model/currentuser.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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
        //map((data: any) => data.map(item => this.adapter.adapt(item))),
        // Adapt item object
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.valueOf(function (item) { return _this.adapter.adapt(item); }); }));
    };
    AuthenticationService.prototype.addToken = function (token) {
        localStorage.setItem('token', 'Basic' + token);
    };
    AuthenticationService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthenticationService.prototype.deleteToken = function () {
        localStorage.removeItem('token');
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _model_currentuser__WEBPACK_IMPORTED_MODULE_2__["CurrentUserAdapter"]])
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

module.exports = __webpack_require__(/*! /home/abdelhaq/workspace/vupsolution-ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map