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
		var e = new Error('Cannot find module "' + req + '".');
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

module.exports = ".img-fluid {\r\n    height: 250px;\r\n    width: 100%;\r\n}\r\n.navbar-inverse {\r\n    z-index: 1000;\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100%;\r\n\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<nav  class=\"navbar navbar-inverse\">\r\n  <div class=\"container\"> \r\n  <div class=\"navbar-header\">\r\n    <a class=\"navbar-brand\" href=\"main\">Refresh Novi Sad</a>\r\n  </div>\r\n  <div id=\"navbar\" class=\"navbar-collapse collapse\">\r\n    <ul class=\"nav navbar-nav\">\r\n      <li class=\"active\"><a href=\"main\">Početna</a></li> \r\n      <li><a>O nama</a></li>\r\n      <li><a href=\"contact\">Kontakt</a></li>\r\n    </ul>\r\n    <ul class=\"nav navbar-nav pull-right\">\r\n      <li *ngIf=\"!isLoggedIn()\"><a href=\"login\">Login</a></li>\r\n\t\t\t<li *ngIf=\"isLoggedIn()\"><a (click)=\"logout()\">Logout</a></li>\r\n\t  </ul>\r\n  </div>\r\n  </div>\r\n</nav>\r\n\r\n  <router-outlet></router-outlet>\r\n \r\n      \r\n    \r\n\r\n\r\n\r\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _security_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./security/authentication-service.service */ "./src/app/security/authentication-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    AppComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    AppComponent.prototype.isLoggedIn = function () {
        return this.authenticationService.isLoggedIn();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_security_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page/main/main.component */ "./src/app/page/main/main.component.ts");
/* harmony import */ var _security_jwt_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./security/jwt-utils.service */ "./src/app/security/jwt-utils.service.ts");
/* harmony import */ var _security_token_interceptor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./security/token-interceptor.service */ "./src/app/security/token-interceptor.service.ts");
/* harmony import */ var _security_can_activate_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./security/can-activate-auth.guard.service */ "./src/app/security/can-activate-auth.guard.service.ts");
/* harmony import */ var _service_donation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/donation.service */ "./src/app/service/donation.service.ts");
/* harmony import */ var _service_project_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/project.service */ "./src/app/service/project.service.ts");
/* harmony import */ var _page_details_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page/details/details.component */ "./src/app/page/details/details.component.ts");
/* harmony import */ var _page_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./page/add-project/add-project.component */ "./src/app/page/add-project/add-project.component.ts");
/* harmony import */ var _service_category_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service/category.service */ "./src/app/service/category.service.ts");
/* harmony import */ var _page_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./page/contact/contact.component */ "./src/app/page/contact/contact.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _security_authentication_service_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./security/authentication-service.service */ "./src/app/security/authentication-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"] },
    { path: 'main', component: _page_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"] },
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'projects/:id', component: _page_details_details_component__WEBPACK_IMPORTED_MODULE_12__["DetailsComponent"] },
    { path: 'add-project', component: _page_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_13__["AddProjectComponent"] },
    { path: 'contact', component: _page_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _page_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
                _page_details_details_component__WEBPACK_IMPORTED_MODULE_12__["DetailsComponent"],
                _page_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_13__["AddProjectComponent"],
                _page_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, {
                    enableTracing: false
                })
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _security_token_interceptor_service__WEBPACK_IMPORTED_MODULE_8__["TokenInterceptorService"],
                    multi: true
                },
                _security_authentication_service_service__WEBPACK_IMPORTED_MODULE_17__["AuthenticationService"],
                _security_can_activate_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["CanActivateAuthGuard"],
                _security_jwt_utils_service__WEBPACK_IMPORTED_MODULE_7__["JwtUtilsService"],
                _service_project_service__WEBPACK_IMPORTED_MODULE_11__["ProjectService"],
                _service_donation_service__WEBPACK_IMPORTED_MODULE_10__["DonationService"],
                _service_category_service__WEBPACK_IMPORTED_MODULE_14__["CategoryService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\"></div>\r\n    <div class=\"col-md-6\">\r\n      <form class=\"form-signin\" (ngSubmit)=\"login()\">\r\n        <h2 class=\"form-signin-heading\">Please sign in</h2>\r\n        <label for=\"username\" class=\"sr-only\">Username</label>\r\n        <input type=\"text\" id=\"username\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Username\"\r\n          required autofocus>\r\n        <label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n        <input type=\"password\" id=\"inputPassword\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.password\" placeholder=\"Password\"\r\n          required>\r\n        <button class=\"btn btn-primary btn-block\" type=\"submit\">Sign in</button>\r\n      </form>\r\n      <div *ngIf=wrongUsernameOrPass class=\"alert alert-warning box-msg\" role=\"alert\">\r\n        Wrong username or password.\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _security_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../security/authentication-service.service */ "./src/app/security/authentication-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.user = {};
        this.wrongUsernameOrPass = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authenticationService.login(this.user.username, this.user.password).subscribe(function (loggedIn) {
            if (loggedIn) {
                _this.router.navigate(['/main']);
            }
        }, function (err) {
            if (err.toString() === 'Ilegal login') {
                _this.wrongUsernameOrPass = true;
                console.log(err);
            }
            else {
                rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(err);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_security_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/page/add-project/add-project.component.css":
/*!************************************************************!*\
  !*** ./src/app/page/add-project/add-project.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/add-project/add-project.component.html":
/*!*************************************************************!*\
  !*** ./src/app/page/add-project/add-project.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <form (ngSubmit)=\"saveProject()\" class=\"form\">\r\n        <strong>Naziv projekta:</strong>\r\n        <input [(ngModel)]=\"projectsToAdd.name\" class=\"form-control\"name=\"add\" type=\"text\" required=\"true\"/>\r\n        \r\n        <strong>Kategorija:</strong>\r\n        <select [compareWith]=\"byId\" [(ngModel)]=\"projectsToAdd.category\" name=\"category\" class=\"form-control\">\r\n            <option *ngFor=\"let category of categories\" [ngValue]=\"category\">{{category.name}}</option>\r\n        </select>  \r\n\r\n        <strong>Opis projekta: </strong>\r\n        <input [(ngModel)]=\"projectsToAdd.description\" type=\"text\" class=\"form-control\" name=\"projectDesc\"/>\r\n\r\n        <strong>Početak projekta: </strong>\r\n        <input [(ngModel)]=\"projectsToAdd.start\" type=\"date\" class=\"form-control\" name=\"projectStart\"/>\r\n        \r\n        <strong>Završetak projekta: </strong>\r\n        <input [(ngModel)]=\"projectsToAdd.deadline\"  type=\"date\" class=\"form-control\"  name=\"projectEnd\" />\r\n        \r\n        <strong>Potreban iznos: </strong>\r\n        <input [(ngModel)]=\"projectsToAdd.donationGoal\"  type=\"number\" class=\"form-control\" name=\"projectGoal\" />\r\n        <strong>Dodavanje slike: </strong>\r\n        <input [(ngModel)]=\"projectsToAdd.imageURL\"  type=\"url\" class=\"form-control\" name=\"imgURl\"/>\r\n        \r\n        <button type=\"submit\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#dodavanjeZavrseno\">\r\n            Sačuvaj\r\n        </button>\r\n        <button type=\"submit\" class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#dodavanjePrekinuto\">\r\n          Odustani\r\n      </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <img  width=\"100%\" height=\"400px\" class=\"img-fluid\" src=\"https://biznakenya.com/wp-content/uploads/2018/01/Crowdfunding-concept-2.jpg\">\r\n        <div class=\"align-top\"> \r\n          <div class=\"carousel-caption\">\r\n              <div class=\"align-top\">\r\n              </div>\r\n          </div>\r\n        </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n\r\n  \r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"dodavanjeZavrseno\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dodavanjeZavrsenoLabel\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\" id=\"dodavanjeZavrsenoLabel\">Dodavanje novog projekta</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        Uspešno završeno\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Zatvori</button>\r\n        <a href=\"main\" type=\"button\" class=\"btn btn-primary\">Povratak na projekte</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"dodavanjePrekinuto\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dodavanjePrekinutoLabel\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\" id=\"dodavanjeZavrsenoLabel\">Dodavanje novog projekta</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        Da li zaista želite da odustanete od dodavanja novog projekta?\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <a href=\"main\" type=\"button\" class=\"btn btn-primary\">DA</a>\r\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">NE</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/page/add-project/add-project.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/page/add-project/add-project.component.ts ***!
  \***********************************************************/
/*! exports provided: AddProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProjectComponent", function() { return AddProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/project.service */ "./src/app/service/project.service.ts");
/* harmony import */ var _service_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/category.service */ "./src/app/service/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddProjectComponent = /** @class */ (function () {
    function AddProjectComponent(projectService, categoryService) {
        this.projectService = projectService;
        this.categoryService = categoryService;
        this.date = new Date(Date.now());
        this.projectsToAdd = {
            name: '',
            description: '',
            start: this.date,
            deadline: this.date,
            donationGoal: 0,
            donationCurrent: 0,
            isSuccessful: false,
            category: {
                id: "",
            },
            donations: [{
                    amount: 0,
                }],
            imageURL: '',
        };
    }
    AddProjectComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    AddProjectComponent.prototype.loadData = function () {
        var _this = this;
        this.categoryService.get().subscribe(function (resp) {
            _this.categories = resp['content'];
        });
    };
    AddProjectComponent.prototype.byId = function (category1, category2) {
        return category1.id === category2.id;
    };
    AddProjectComponent.prototype.saveProject = function () {
        this.projectService.addProject(this.projectsToAdd).subscribe(function (resp) {
        });
    };
    AddProjectComponent.prototype.reset = function () {
        this.projectsToAdd = {
            name: '',
            description: '',
            start: this.date,
            deadline: this.date,
            donationGoal: 0,
            donationCurrent: 0,
            isSuccessful: false,
            category: {
                id: "",
            },
            donations: [{
                    amount: 0,
                }],
            imageURL: '',
        };
    };
    AddProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-project',
            template: __webpack_require__(/*! ./add-project.component.html */ "./src/app/page/add-project/add-project.component.html"),
            styles: [__webpack_require__(/*! ./add-project.component.css */ "./src/app/page/add-project/add-project.component.css")]
        }),
        __metadata("design:paramtypes", [_service_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"],
            _service_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]])
    ], AddProjectComponent);
    return AddProjectComponent;
}());



/***/ }),

/***/ "./src/app/page/contact/contact.component.css":
/*!****************************************************!*\
  !*** ./src/app/page/contact/contact.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/contact/contact.component.html":
/*!*****************************************************!*\
  !*** ./src/app/page/contact/contact.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n  <img  width=\"100%\" height=\"300px\" class=\"img-fluid\" src=\"https://www.panorama.com/wp-content/uploads/2015/03/contact_us_banner1.jpg\">\r\n</div>\r\n<hr>\r\n<hr>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-5\">\r\n        <div class=\"text-light\">Ime</div><input type=\"text\" class=\"form-control\" placeholder=\"Unesite ime\">\r\n        <div class=\"text-light\">Email adresa</div><input type=\"text\" class=\"form-control\" placeholder=\"Unesite e-mail adresu\">\r\n        <div class=\"text-light\">Poruka</div><textarea class=\"form-control\" rows=\"5\" id=\"comment\" placeholder=\"Unesite poruku\"></textarea>\r\n        <button type=\"submit\" class=\"btn btn-primary\">Pošalji</button>\r\n    </div> \r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-7\">\r\n            <h3 style=\"text-align: center; color: #3b5e7d;\"> Pratite nas na društvenim mrežama </h3>\r\n            <img width=\"100%\" class=\"img-fluid\" src=\"https://melissadivietri.com/wp-content/uploads/2016/03/Social-networks_a.png\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n  </div> \r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-5\">\r\n      <h4>Kontakt: 021/555-1235</h4>\r\n      <h4>Email adresa: refreshnovisad@gmail.com </h4>\r\n      \r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/page/contact/contact.component.ts":
/*!***************************************************!*\
  !*** ./src/app/page/contact/contact.component.ts ***!
  \***************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
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

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/page/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/page/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/page/details/details.component.css":
/*!****************************************************!*\
  !*** ./src/app/page/details/details.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/details/details.component.html":
/*!*****************************************************!*\
  !*** ./src/app/page/details/details.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n        <img  width=\"100%\" class=\"img-fluid\" src=\"{{project.imageURL}}\" />\r\n        <div class=\"align-top\"> \r\n            <div class=\"carousel-caption\">\r\n                <div class=\"align-top\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"container\">\r\n    <div class=\"row\"><h1 class=\"bg-info\">{{project.name}}</h1></div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n                <h3>Opis projekta:</h3><p>{{project.description}}</p>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n                <p><strong>Početak projekta:</strong> {{project.start}}</p>\r\n                <p><strong>Završetak projekta:</strong> {{project.deadline}}</p>\r\n                <p><strong>Potreban iznos:</strong> {{project.donationGoal}} rsd</p>\r\n                <p><strong>Ukupno donirano:</strong>{{project.donationCurrent}} rsd </p>\r\n                <p><button (click)=\"showDonate()\" class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#doniranje\">Doniraj</button></p>\r\n                <p><a class=\"btn\" href=\"main\">Nazad</a></p>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!--Donate modal-->\r\n<div class=\"modal fade\" id=\"doniranje\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"doniranje\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n          <h4 class=\"modal-title\" id=\"doniranjeZavrsenoLabel\"><strong>Doniranje</strong></h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <form (submit)=\"donate()\" class=\"form\">\r\n                <div class=\"form-group\">\r\n                    <strong>Koliko Novca:</strong><input [(ngModel)]=\"donation.amount\" class=\"form-control\" type=\"text\" name=\"amount\" />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <input class=\"btn btn-primary\" type=\"submit\" value=\"Potvrdi\"/>\r\n                    <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Odustani</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/page/details/details.component.ts":
/*!***************************************************!*\
  !*** ./src/app/page/details/details.component.ts ***!
  \***************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/project.service */ "./src/app/service/project.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_donation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/donation.service */ "./src/app/service/donation.service.ts");
/* harmony import */ var _security_authentication_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../security/authentication-service.service */ "./src/app/security/authentication-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(projectService, route, donationService, authenticationService, router) {
        this.projectService = projectService;
        this.route = route;
        this.donationService = donationService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.donation = {
            amount: 0
        };
    }
    DetailsComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    DetailsComponent.prototype.showDonate = function () {
        if (!this.isLoggedIn()) {
            alert("Da biste donirali novac morate se ulogovati!");
            this.router.navigate(['/login']);
        }
        else {
            return document.getElementById("doniranje");
        }
    };
    DetailsComponent.prototype.isLoggedIn = function () {
        return this.authenticationService.isLoggedIn();
    };
    /*showDonate(){
      var x = document.getElementById("donateForm");
       if (x.style.display === "none") {
          x.style.display = "block";
      } else {
          x.style.display = "none";
      }
    }*/
    DetailsComponent.prototype.donate = function () {
        var _this = this;
        this.donationService.createDonation(this.donation).subscribe(function (resp) {
            _this.projectService.increaseDonationCurrent(_this.project.id, _this.donation.amount).subscribe(function (resp) {
                _this.loadData();
                _this.reset();
            });
        });
    };
    DetailsComponent.prototype.loadData = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.projectService.getOneProject(id).subscribe(function (resp) {
                _this.project = resp;
            });
        });
    };
    DetailsComponent.prototype.reset = function () {
        this.donation = {
            amount: 0
        };
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/page/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/page/details/details.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_service_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_donation_service__WEBPACK_IMPORTED_MODULE_3__["DonationService"],
            _security_authentication_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/page/main/main.component.css":
/*!**********************************************!*\
  !*** ./src/app/page/main/main.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/main/main.component.html":
/*!***********************************************!*\
  !*** ./src/app/page/main/main.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <img  width=\"100%\" height=\"400px\" class=\"img-fluid\" src=\"http://project-rec.eu/wp-content/uploads/2014/01/novi-sad-nocu.jpg\">\r\n      <div class=\"align-top\"> \r\n        <div class=\"carousel-caption\">\r\n            <div class=\"align-top\">\r\n              <h1  class=\"align-text-top\">ReFresh Novi Sad</h1>\r\n            </div>\r\n        </div>\r\n      </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n<hr>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <form (ngSubmit)=\"search()\" class=\"form form-inline\">\r\n        <label for= \"searchProjects\">Pretraga po:</label>\r\n        <select name=\"searchProjects\" [(ngModel)]=\"critteria\" class=\"form-control\">\r\n          <option selected value=\"name\">nazivu</option>\r\n          <option value=\"category\">kategoriji</option>\r\n        </select>\r\n           <input  name=\"search\" type=\"text\" [(ngModel)]=\"inputSearch\" class=\"form-control\" />\r\n           <input type=\"submit\" value=\"Traži\" class=\"btn btn-primary\" />\r\n           <input (click)=\"resetSearch()\" class=\"btn btn-danger\" value=\"Poništi\" type=\"reset\"/>\r\n      </form>\r\n      <hr>\r\n      <label *ngIf=\"isLoggedIn()\" for=\"addProjects\">Dodavanje novih projekata <a class=\"btn btn-primary\" href=\"add-project\">Dodaj</a></label>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n  <div class=\"pages\"> \r\n      <button *ngIf=\"currentPage>0\" (click)=\"changePage(-1)\" class=\"btn\"><<<</button>\r\n    {{currentPage}}\r\n       <button *ngIf=\"currentPage <totalPages-1\" (click)=\"changePage(1)\" class=\"btn\">>>></button>\r\n  </div>\r\n</div>\r\n<hr>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 single-project\"  *ngFor=\"let project of projects\">\r\n        <div class=\"thumbnail\">\r\n            <img src=\"{{project.imageURL}}\"  class=\"img-thumbnail img-rounded\" alt=\"{{project.name}}\" />\r\n        </div> \r\n        \r\n        <h3>{{project.name}}</h3>\r\n        <h5>{{project.category.name}}</h5>\r\n        <hr>\r\n        <a class=\"btn btn-primary\" href=\"projects/{{project.id}}\">Detalji</a>\r\n        <a *ngIf=\"isAdmin()\" class=\"btn btn-danger\" (click)=\"deleteProject(project.id)\">Obriši</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n<hr>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/page/main/main.component.ts":
/*!*********************************************!*\
  !*** ./src/app/page/main/main.component.ts ***!
  \*********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/project.service */ "./src/app/service/project.service.ts");
/* harmony import */ var _service_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/category.service */ "./src/app/service/category.service.ts");
/* harmony import */ var _security_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../security/authentication-service.service */ "./src/app/security/authentication-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainComponent = /** @class */ (function () {
    function MainComponent(projectService, categoryService, authenticationService) {
        this.projectService = projectService;
        this.categoryService = categoryService;
        this.authenticationService = authenticationService;
        this.currentPage = 0;
    }
    MainComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    MainComponent.prototype.isAdmin = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser === null) {
            return false;
        }
        if (currentUser.roles == 'ADMINISTRATOR') {
            return true;
        }
        else {
            return false;
        }
    };
    MainComponent.prototype.isLoggedIn = function () {
        return this.authenticationService.isLoggedIn();
    };
    MainComponent.prototype.loadData = function () {
        var _this = this;
        this.projectService.getProjects(this.currentPage).subscribe(function (resp) {
            _this.projects = resp['content'];
            _this.totalPages = resp['totalPages'];
        });
        this.categoryService.get().subscribe(function (resp) {
            _this.categories = resp['content'];
        });
    };
    MainComponent.prototype.changePage = function (i) {
        this.currentPage += i;
        this.loadData();
    };
    MainComponent.prototype.search = function () {
        var _this = this;
        if (this.critteria === 'name') {
            var name = this.inputSearch;
        }
        else {
            var category = this.inputSearch;
        }
        this.projectService.getProjects(0, name, category).subscribe(function (resp) {
            _this.projects = resp['content'];
            _this.totalPages = resp['totalPages'];
        });
    };
    MainComponent.prototype.deleteProject = function (id) {
        this.projectService.deleteProject(id).subscribe(function (resp) {
            alert("projekat je obrisan");
        });
        this.loadData();
    };
    MainComponent.prototype.resetSearch = function () {
        this.loadData();
        // this.name = '';
        // this.projectService.getProjects(0, this.name).subscribe((resp)=>{
        //   this.projects = resp ['content'];
        // })
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/page/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/page/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [_service_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"],
            _service_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"],
            _security_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/security/authentication-service.service.ts":
/*!************************************************************!*\
  !*** ./src/app/security/authentication-service.service.ts ***!
  \************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _jwt_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jwt-utils.service */ "./src/app/security/jwt-utils.service.ts");
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
    function AuthenticationService(http, jwtUtilsService) {
        this.http = http;
        this.jwtUtilsService = jwtUtilsService;
        this.loginPath = '/api/login';
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(this.loginPath, JSON.stringify({ username: username, password: password }), { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            var token = res && res['token'];
            if (token) {
                localStorage.setItem('currentUser', JSON.stringify({
                    username: username,
                    roles: _this.jwtUtilsService.getRoles(token),
                    token: token
                }));
                return true;
            }
            else {
                return false;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            var msg = '';
            if (err.status === 400) {
                return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw('Ilegal login');
            }
            else {
                return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(err.json().error || 'Server error');
            }
        }));
        /*.catch((error: any) => {
          if (error.status === 400) {
            return Observable.throw('Ilegal login');
          }
          else {
            return Observable.throw(error.json().error || 'Server error');
          }
        });*/
    };
    AuthenticationService.prototype.getToken = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var token = currentUser && currentUser.token;
        return token ? token : "";
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        if (this.getToken() != '')
            return true;
        else
            return false;
    };
    AuthenticationService.prototype.getCurrentUser = function () {
        if (localStorage.currentUser) {
            return JSON.parse(localStorage.currentUser);
        }
        else {
            return undefined;
        }
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _jwt_utils_service__WEBPACK_IMPORTED_MODULE_4__["JwtUtilsService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/security/can-activate-auth.guard.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/security/can-activate-auth.guard.service.ts ***!
  \*************************************************************/
/*! exports provided: CanActivateAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActivateAuthGuard", function() { return CanActivateAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication-service.service */ "./src/app/security/authentication-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CanActivateAuthGuard = /** @class */ (function () {
    function CanActivateAuthGuard(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    CanActivateAuthGuard.prototype.canActivate = function (next, state) {
        if (this.authenticationService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    CanActivateAuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_authentication_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CanActivateAuthGuard);
    return CanActivateAuthGuard;
}());



/***/ }),

/***/ "./src/app/security/jwt-utils.service.ts":
/*!***********************************************!*\
  !*** ./src/app/security/jwt-utils.service.ts ***!
  \***********************************************/
/*! exports provided: JwtUtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtUtilsService", function() { return JwtUtilsService; });
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

var JwtUtilsService = /** @class */ (function () {
    function JwtUtilsService() {
    }
    JwtUtilsService.prototype.getRoles = function (token) {
        var jwtData = token.split('.')[1];
        var decodedJwtJsonData = window.atob(jwtData);
        var decodedJwtData = JSON.parse(decodedJwtJsonData);
        return decodedJwtData.roles.map(function (x) { return x.authority; }) || [];
    };
    JwtUtilsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], JwtUtilsService);
    return JwtUtilsService;
}());



/***/ }),

/***/ "./src/app/security/token-interceptor.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/security/token-interceptor.service.ts ***!
  \*******************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication-service.service */ "./src/app/security/authentication-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(inj) {
        this.inj = inj;
    }
    TokenInterceptorService.prototype.intercept = function (request, next) {
        var authenticationService = this.inj.get(_authentication_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]);
        request = request.clone({
            setHeaders: {
                'X-Auth-Token': "" + authenticationService.getToken()
            }
        });
        return next.handle(request);
    };
    TokenInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "./src/app/service/category.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/category.service.ts ***!
  \*********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryService = /** @class */ (function () {
    function CategoryService(httpClient) {
        this.httpClient = httpClient;
        this.path = "/api/categories";
    }
    CategoryService.prototype.get = function () {
        return this.httpClient.get(this.path);
    };
    CategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/service/donation.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/donation.service.ts ***!
  \*********************************************/
/*! exports provided: DonationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationService", function() { return DonationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DonationService = /** @class */ (function () {
    function DonationService(httpClient) {
        this.httpClient = httpClient;
        this.path = 'api/donations';
    }
    DonationService.prototype.createDonation = function (donation) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.httpClient.post(this.path, donation, { headers: headers });
    };
    DonationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DonationService);
    return DonationService;
}());



/***/ }),

/***/ "./src/app/service/project.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/project.service.ts ***!
  \********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectService = /** @class */ (function () {
    function ProjectService(httpClient) {
        this.httpClient = httpClient;
        this.path = 'api/projects';
    }
    ProjectService.prototype.getProjects = function (currentPage, name, category) {
        var cPage = String(currentPage);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (name) {
            params = params.append('name', name).set('page', cPage);
        }
        if (category) {
            params = params.append('category', category).set('page', cPage);
        }
        return this.httpClient.get(this.path, { params: params });
    };
    ProjectService.prototype.getOneProject = function (id) {
        return this.httpClient.get(this.path + "/" + id);
    };
    ProjectService.prototype.deleteProject = function (id) {
        return this.httpClient.delete(this.path + "/" + id);
    };
    ProjectService.prototype.addProject = function (project) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.httpClient.post(this.path, project, { headers: headers });
    };
    ProjectService.prototype.increaseDonationCurrent = function (id, amount) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var tmp = String(amount);
        params = params.append('ammount', tmp);
        /* console.log(params); */
        return this.httpClient.put(this.path + "/addDonation/" + id, params);
    };
    ProjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProjectService);
    return ProjectService;
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

module.exports = __webpack_require__(/*! /mnt/c/Users/tanja/dev/Projekat-Tim-1-CrowdFunding/CrowdFundingClient/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map