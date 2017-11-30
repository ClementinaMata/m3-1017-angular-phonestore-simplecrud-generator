webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__phone_details_phone_details_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__phone_list_phone_list_component__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });


var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__phone_list_phone_list_component__["a" /* PhoneListComponent */] },
    { path: 'phone/:id', component: __WEBPACK_IMPORTED_MODULE_0__phone_details_phone_details_component__["a" /* PhoneDetailsComponent */] },
    { path: '**', redirectTo: '' }
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, ".phone{\n  display: inline-block;\n  text-align: center;\n  margin: 20px;\n}\n\n.phone img{\n  height: 180px;\n}\n\n.phones{\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 80vh;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

module.exports = "<h1>\n  {{title}}\n</h1>\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

module.exports = "<h1> Phone details </h1>\n  <a [routerLink]=\"['']\"> Back to list </a>\n\n  <div *ngIf=\"phone\">\n    <div class=\"phone-thumbnail\">\n      <img height=\"300\" [src]=\"phone.image\" />\n    </div>\n\n    <div class=\"phone-info\">\n      <h2> {{ phone.name }}&nbsp;</h2>\n      <h3> {{ phone.brand }} </h3>\n\n      <div *ngIf=\"phone.specs.length\">\n        <h4> Features </h4>\n        <ul>\n          <li *ngFor=\"let spec of phone.specs\"> {{ spec&nbsp;}} </li>\n        </ul>\n      </div>\n    </div>\n    <button (click)=\"deletePhone(phone._id)\"> Delete </button>\n  </div>\n"

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

module.exports = "<h1> Phone list </h1>\n<h1 *ngIf=\"phones.length > 0\">En oferta: {{ phones[0].name }}</h1>\n<div class=\"phones\">\n  <div *ngFor=\"let phone of phones\" class=\"phone\">\n    <img [src]=\"phone.image\" />\n    <h3> {{ phone.name }} </h3>\n    <p> {{ phone.brand }} </p>\n    <a [routerLink]=\"['phone', phone._id]\"> View Details </a>\n  </div>\n</div>\n"

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(92);


/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DOMAIN = "http://localhost:3000";
var PATH = "/api/phones";
var BASEURL = "" + DOMAIN + PATH;
var PhoneService = (function () {
    function PhoneService(http) {
        this.http = http;
    }
    PhoneService.prototype.getPhoneList = function () {
        return this.http.get(BASEURL)
            .map(function (res) { return res.json(); });
    };
    PhoneService.prototype.getPhoneByID = function (id) {
        return this.http.get(BASEURL + "/" + id)
            .map(function (res) { return res.json(); });
    };
    PhoneService.prototype.deletePhone = function (id) {
        return this.http.delete(BASEURL + "/" + id)
            .map(function (res) { return res.json(); });
    };
    return PhoneService;
}());
PhoneService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PhoneService);

var _a;
//# sourceMappingURL=phone.service.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_phone_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PhoneDetailsComponent = (function () {
    function PhoneDetailsComponent(router, phoneService, route) {
        var _this = this;
        this.router = router;
        this.phoneService = phoneService;
        this.route = route;
        route.params.subscribe(function (params) {
            _this.phoneService.getPhoneByID(params['id'])
                .subscribe(function (phone) { return _this.phone = phone; });
        });
    }
    PhoneDetailsComponent.prototype.deletePhone = function (id) {
        var _this = this;
        this.phoneService.deletePhone(id).subscribe(function () {
            _this.router.navigate(['']);
        });
    };
    PhoneDetailsComponent.prototype.ngOnInit = function () {
    };
    return PhoneDetailsComponent;
}());
PhoneDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-phone-details',
        template: __webpack_require__(159),
        styles: [__webpack_require__(156)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_phone_service__["a" /* PhoneService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_phone_service__["a" /* PhoneService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], PhoneDetailsComponent);

var _a, _b, _c;
//# sourceMappingURL=phone-details.component.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_phone_service__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhoneListComponent = (function () {
    function PhoneListComponent(phoneService) {
        var _this = this;
        this.phoneService = phoneService;
        this.phones = [];
        this.phoneService.getPhoneList().subscribe(function (list) {
            _this.phones = list;
        });
    }
    PhoneListComponent.prototype.ngOnInit = function () {
    };
    return PhoneListComponent;
}());
PhoneListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-phone-list',
        template: __webpack_require__(160),
        styles: [__webpack_require__(157)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_phone_service__["a" /* PhoneService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_phone_service__["a" /* PhoneService */]) === "function" && _a || Object])
], PhoneListComponent);

var _a;
//# sourceMappingURL=phone-list.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 91;


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(101);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(158),
        styles: [__webpack_require__(155)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__phone_list_phone_list_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__phone_details_phone_details_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_phone_service__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__phone_list_phone_list_component__["a" /* PhoneListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__phone_details_phone_details_component__["a" /* PhoneDetailsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__routes__["a" /* routes */])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__services_phone_service__["a" /* PhoneService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.bundle.js.map