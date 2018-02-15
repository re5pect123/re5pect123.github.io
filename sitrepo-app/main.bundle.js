webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet> "

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_uploader__ = __webpack_require__("../../../../ngx-uploader/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__osiguranja_osiguranja_component__ = __webpack_require__("../../../../../src/app/osiguranja/osiguranja.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_home_homeUpload_component__ = __webpack_require__("../../../../../src/app/home/homeUpload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_izvestaj_izvestaj_component__ = __webpack_require__("../../../../../src/app/izvestaj/izvestaj.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_korisnici_korisnici_component__ = __webpack_require__("../../../../../src/app/korisnici/korisnici.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_profil_profil_component__ = __webpack_require__("../../../../../src/app/profil/profil.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'osiguranja',
        component: __WEBPACK_IMPORTED_MODULE_9__osiguranja_osiguranja_component__["a" /* TableComponent */]
    },
    {
        path: 'izvestaj',
        component: __WEBPACK_IMPORTED_MODULE_11_app_izvestaj_izvestaj_component__["a" /* IzvestajComponent */]
    },
    {
        path: 'korisnici',
        component: __WEBPACK_IMPORTED_MODULE_12_app_korisnici_korisnici_component__["a" /* KorisniciComponent */]
    },
    {
        path: 'profil',
        component: __WEBPACK_IMPORTED_MODULE_13_app_profil_profil_component__["a" /* ProfilComponent */]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__osiguranja_osiguranja_component__["a" /* TableComponent */],
            __WEBPACK_IMPORTED_MODULE_10_app_home_homeUpload_component__["a" /* UploadComponent */],
            __WEBPACK_IMPORTED_MODULE_11_app_izvestaj_izvestaj_component__["a" /* IzvestajComponent */],
            __WEBPACK_IMPORTED_MODULE_12_app_korisnici_korisnici_component__["a" /* KorisniciComponent */],
            __WEBPACK_IMPORTED_MODULE_13_app_profil_profil_component__["a" /* ProfilComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_uploader__["a" /* NgUploaderModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/app-home.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"drop-container\" ngFileDrop [options]=\"options\" (uploadOutput)=\"onUploadOutput($event)\" [uploadInput]=\"uploadInput\" [ngClass]=\"{ 'is-drop-over': dragOver }\">\r\n      <h1>Upload excel file</h1>\r\n  </div>\r\n\r\n  <label class=\"upload-button\">\r\n    <input type=\"file\" class=\"file\" name=\"multipartFile\" ngFileSelect [options]=\"options\" (uploadOutput)=\"onUploadOutput($event)\" [uploadInput]=\"uploadInput\" multiple>\r\n  </label>\r\n  \r\n  <button type=\"button\" class=\"btn-primary\" (click)=\"startUpload()\">\r\n    Start Upload\r\n  </button> \r\n<br><br>\r\n    {{getResult}}\r\n  "

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n  <h1 class=\"title\">\r\n    Dobrodošli na SitRepo Admin panel\r\n  </h1>\r\n  <img [src]=\"LOGOBIG\" alt=\"Deploy logo\" class=\"logo-mid\">\r\n  <br><br><br>\r\n  <p class=\"top\"> Posetite naš sajt: \r\n    <a href=\"http://159.203.140.94/\" target=\"_blank\">http://159.203.140.94/</a>\r\n  </p>\r\n<!--  <upload></upload> -->\r\n</div>\r\n\r\n<style>\r\n\r\n  .top{\r\n    margin-bottom: 100px;\r\n  }\r\n\r\n  .title {\r\n    margin-top: 200px;\r\n    margin-bottom: 100px;\r\n    font-size: 30px;\r\n  }\r\n\r\n</style>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent() {
        this.LOGOMID = 'assets/images/logo.png';
        this.LOGOBIG = 'assets/images/logoVeliki.png';
    }
    HomeComponent.prototype.ngOnInit = function () { };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/homeUpload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_uploader__ = __webpack_require__("../../../../ngx-uploader/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_home_request_service__ = __webpack_require__("../../../../../src/app/home/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadComponent = (function () {
    function UploadComponent(requestService, http) {
        this.requestService = requestService;
        this.http = http;
        this.DataArray = [];
        this.files = [];
        this.uploadInput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.humanizeBytes = __WEBPACK_IMPORTED_MODULE_1_ngx_uploader__["c" /* humanizeBytes */];
    }
    UploadComponent.prototype.loadTableData = function () {
        var _this = this;
        this.requestService.sendGetRequest().subscribe(function (data) {
            _this.DataArray = data;
            console.log(data);
        });
    };
    UploadComponent.prototype.sendGetRequest = function () {
        var _this = this;
        console.log("Usao u metod za slanje GET requsta --> idemo u service!");
        this.requestService.sendGetRequest()
            .subscribe(function (data) { return _this.getResult = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log("Finished"); });
        this.requestService.sendGetRequest();
        this.getResult = this.requestService.getResult;
    };
    UploadComponent.prototype.onUploadOutput = function (output) {
        if (output.type === 'allAddedToQueue') {
        }
        else if (output.type === 'addedToQueue' && typeof output.file !== 'undefined') {
            this.files.push(output.file);
        }
        else if (output.type === 'uploading' && typeof output.file !== 'undefined') {
            var index = this.files.findIndex(function (file) { return typeof output.file !== 'undefined' && file.id === output.file.id; });
            this.files[index] = output.file;
        }
        else if (output.type === 'removed') {
            this.files = this.files.filter(function (file) { return file !== output.file; });
        }
        else if (output.type === 'dragOver') {
            this.dragOver = true;
        }
        else if (output.type === 'dragOut') {
            this.dragOver = false;
        }
        else if (output.type === 'drop') {
            this.dragOver = false;
        }
    };
    UploadComponent.prototype.startUpload = function () {
        var event = {
            type: 'uploadAll',
            url: 'http://localhost:8000/upload',
            method: 'POST',
            data: { foo: 'bar' }
        };
        //  this.uploadInput.emit(event);
        var headers1 = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers1 });
        console.log("NOVA METODA");
        this.http.post('http://localhost:8000/upload', this.uploadInput.emit(event), options).map(function (response) { return response.json(); })
            .subscribe(function () { console.log('Success'); });
    };
    UploadComponent.prototype.cancelUpload = function (id) {
        this.uploadInput.emit({ type: 'cancel', id: id });
    };
    UploadComponent.prototype.removeFile = function (id) {
        this.uploadInput.emit({ type: 'remove', id: id });
    };
    UploadComponent.prototype.removeAllFiles = function () {
        this.uploadInput.emit({ type: 'removeAll' });
    };
    UploadComponent.prototype.sendPostRequest = function () {
        console.log("Usao u metod za slanje post requesta --> idemo u service!");
        this.requestService.sendPostRequest();
        this.postResult = this.requestService.postResult;
    };
    return UploadComponent;
}());
UploadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'upload',
        template: __webpack_require__("../../../../../src/app/home/app-home.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2_app_home_request_service__["a" /* RequestService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_home_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_home_request_service__["a" /* RequestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */]) === "function" && _b || Object])
], UploadComponent);

var _a, _b;
//# sourceMappingURL=homeUpload.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/request.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequestService = (function () {
    function RequestService(http) {
        this.http = http;
    }
    RequestService.prototype.sendGetRequest = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        console.log("Usao u service, saljemo get requst! ");
        return this.http.get('http://localhost:8000/getAll')
            .map(function (res) { return res.json(); });
    };
    RequestService.prototype.sendPostRequest = function () {
        var headers1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers1 });
        console.log("NOVA METODA");
        this.http.post('http://localhost:8000/upload', options).map(function (response) { return response.json(); })
            .subscribe(function () { console.log('Success'); });
        /*      const headers = new Headers();
             console.log("Usao u service, saljemo post request");
             this.headers.append("Content-Type", 'application/json');
     
             this.http.post('http://localhost:8000/upload',{headers})
                  .subscribe(data => {
                     this.postResult = data['_body'];
                     console.log(data['_body']);
                   });*/
    };
    return RequestService;
}());
RequestService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], RequestService);

var _a;
//# sourceMappingURL=request.service.js.map

/***/ }),

/***/ "../../../../../src/app/izvestaj/izvestaj.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t\r\n        \r\n        <div class=\"col-md-12\">\r\n          \t\t<form class=\"navbar-form\" role=\"search\">\r\n\t\t<div class=\"input-group\">\r\n\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Pronadji izvestaj\" name=\"srch-term\" id=\"srch-term\">\r\n\t\t\t<div class=\"input-group-btn\">\r\n\t\t\t\t<button class=\"btn btn-default\" type=\"submit\"><i class=\"glyphicon glyphicon-search\"></i></button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t</form>\r\n\r\n    <br><br>\r\n        <div class=\"table-responsive\">\r\n\r\n                \r\n              <table  class=\"table table-bordred table-striped\">\r\n                   \r\n                   <thead>\r\n                   \r\n                   <th>&nbsp;&nbsp;RB</th>\r\n                    <th>&nbsp;&nbsp;Naziv</th>\r\n                     <th>&nbsp;&nbsp;Osiguranje</th>\r\n                     <th>&nbsp;&nbsp;Posalji</th>\r\n                     <th>&nbsp;&nbsp;Izmeni</th>\r\n                     <th>&nbsp;&nbsp;Obrisi</th>\r\n                     \r\n                   </thead>\r\n    <tbody>\r\n    \r\n    <tr>\r\n\r\n    <td>1</td>\r\n    <td>Triglav</td>\r\n    <td>Kralja Petra 33, Beograd</td>\r\n    <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Send\"><button class=\"btn btn-success btn-xs\" data-title=\"Send\" data-toggle=\"modal\" data-target=\"#send\" ><span class=\"glyphicon glyphicon-envelope\"></span></button></p></td>\r\n    <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Edit\"><button class=\"btn btn-primary btn-xs\" data-title=\"Edit\" data-toggle=\"modal\" data-target=\"#edit\" ><span class=\"glyphicon glyphicon-pencil\"></span></button></p></td>\r\n    <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete\"><button class=\"btn btn-danger btn-xs\" data-title=\"Delete\" data-toggle=\"modal\" data-target=\"#delete\" ><span class=\"glyphicon glyphicon-trash\"></span></button></p></td>\r\n    </tr>\r\n    \r\n <tr>\r\n    <td>2</td>\r\n    <td>Milenijum</td>\r\n    <td>Borisa Kidrica 22, Beograd</td>\r\n<td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Send\"><button class=\"btn btn-success btn-xs\" data-title=\"Send\" data-toggle=\"modal\" data-target=\"#send\" ><span class=\"glyphicon glyphicon-envelope\"></span></button></p></td>\r\n    \r\n    <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Edit\"><button class=\"btn btn-primary btn-xs\" data-title=\"Edit\" data-toggle=\"modal\" data-target=\"#edit\" ><span class=\"glyphicon glyphicon-pencil\"></span></button></p></td>\r\n    <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete\"><button class=\"btn btn-danger btn-xs\" data-title=\"Delete\" data-toggle=\"modal\" data-target=\"#delete\" ><span class=\"glyphicon glyphicon-trash\"></span></button></p></td>\r\n    </tr>\r\n    \r\n    \r\n <tr>\r\n    <td>3</td>\r\n    <td>Delta Generali</td>\r\n    <td>Srpsko-grckog prijateljstva 31, Beograd</td>\r\n    <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Send\"><button class=\"btn btn-success btn-xs\" data-title=\"Send\" data-toggle=\"modal\" data-target=\"#send\" ><span class=\"glyphicon glyphicon-envelope\"></span></button></p></td>\r\n    \r\n    <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Edit\"><button class=\"btn btn-primary btn-xs\" data-title=\"Edit\" data-toggle=\"modal\" data-target=\"#edit\" ><span class=\"glyphicon glyphicon-pencil\"></span></button></p></td>\r\n    <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete\"><button class=\"btn btn-danger btn-xs\" data-title=\"Delete\" data-toggle=\"modal\" data-target=\"#delete\" ><span class=\"glyphicon glyphicon-trash\"></span></button></p></td>\r\n </tr>    \r\n  <tr>\r\n    <td>4</td>\r\n    <td>Mogren</td>\r\n    <td>Veljka Dugosevica 332, Beograd</td>\r\n    <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Send\"><button class=\"btn btn-success btn-xs\" data-title=\"Send\" data-toggle=\"modal\" data-target=\"#send\" ><span class=\"glyphicon glyphicon-envelope\"></span></button></p></td>\r\n    \r\n    <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Edit\"><button class=\"btn btn-primary btn-xs\" data-title=\"Edit\" data-toggle=\"modal\" data-target=\"#edit\" ><span class=\"glyphicon glyphicon-pencil\"></span></button></p></td>\r\n    <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete\"><button class=\"btn btn-danger btn-xs\" data-title=\"Delete\" data-toggle=\"modal\" data-target=\"#delete\" ><span class=\"glyphicon glyphicon-trash\"></span></button></p></td>\r\n </tr>    \r\n\r\n    </tbody>\r\n        \r\n</table>\r\n\r\n<div class=\"clearfix\"></div>\r\n<ul class=\"pagination pull-right\">\r\n  <li class=\"disabled\"><a href=\"#\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a></li>\r\n  <li class=\"active\"><a href=\"#\">1</a></li>\r\n  <li><a href=\"#\">2</a></li>\r\n  <li><a href=\"#\"><span class=\"glyphicon glyphicon-chevron-right\"></span></a></li>\r\n</ul>\r\n                \r\n            </div>\r\n            \r\n        </div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"edit\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\r\n        <h4 class=\"modal-title custom_align\" id=\"Heading\">Edit Your Detail</h4>\r\n      </div>\r\n          <div class=\"modal-body\">\r\n          <div class=\"form-group\">\r\n        <input class=\"form-control \" type=\"text\" placeholder=\"Mohsin\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n        \r\n        <input class=\"form-control \" type=\"text\" placeholder=\"Irshad\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n        <textarea rows=\"2\" class=\"form-control\" placeholder=\"CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan\"></textarea>\r\n    \r\n        \r\n        </div>\r\n      </div>\r\n          <div class=\"modal-footer \">\r\n        <button type=\"button\" class=\"btn btn-warning btn-lg\" style=\"width: 100%;\"><span class=\"glyphicon glyphicon-ok-sign\"></span> Update</button>\r\n      </div>\r\n        </div>\r\n    <!-- /.modal-content --> \r\n  </div>\r\n      <!-- /.modal-dialog --> \r\n    </div>\r\n    \r\n    \r\n    \r\n    <div class=\"modal fade\" id=\"delete\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\r\n        <h4 class=\"modal-title custom_align\" id=\"Heading\">Delete this entry</h4>\r\n      </div>\r\n          <div class=\"modal-body\">\r\n       \r\n       <div class=\"alert alert-danger\"><span class=\"glyphicon glyphicon-warning-sign\"></span> Are you sure you want to delete this Record?</div>\r\n       \r\n      </div>\r\n        <div class=\"modal-footer \">\r\n        <button type=\"button\" class=\"btn btn-success\" ><span class=\"glyphicon glyphicon-ok-sign\"></span> Yes</button>\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"><span class=\"glyphicon glyphicon-remove\"></span> No</button>\r\n      </div>\r\n        </div>\r\n    <!-- /.modal-content --> \r\n  </div>\r\n      <!-- /.modal-dialog --> \r\n    </div>\r\n\r\n\r\n\r\n\r\n<!-- STARA TABELA \r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n   <input #find class=\"form-control input-sm\" placeholder=\"Pretraži osiguranje\" style=\"width:240px;\"/>\r\n    <button (click) = 'sendForFind(find.value)' class=\"btn btn-primary btn-sm\"> Pretraži </button>\r\n       <button (click)=\"loadTableData()\"> Load Data</button> \r\n\r\n\r\n\t\t<form class=\"navbar-form\" role=\"search\">\r\n\t\t<div class=\"input-group\">\r\n\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Pretraži osiguranje\" name=\"srch-term\" id=\"srch-term\">\r\n\t\t\t<div class=\"input-group-btn\">\r\n\t\t\t\t<button class=\"btn btn-default\" type=\"submit\"><i class=\"glyphicon glyphicon-search\"></i></button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t</form>\r\n\t\t<br><br>\r\n      <table class=\"table table-bordered\">\r\n          <thead>\r\n            <tr>\r\n              <th>RB</th>\r\n              <th>Naziv osiguranja</th>\r\n              <th>Telefon</th>\r\n              <th>Mail</th>\r\n              <th>Opcije</th>\r\n            </tr>\r\n          </thead>\r\n      <tbody>\r\n             <tr *ngFor=\"let data of DataArray\">\r\n              <th>{{ data.id }}</th>\r\n              <td><a href=\"/getclient/{{data.clientName}}\">{{ data.clientName }}</a></td>\r\n              <td>{{ data.amount}}</td>\r\n              <td>{{ data.timestamp}}</td>\r\n              <td>{{ data.inputDate}}</td>\r\n              <td>{{ data.source}}</td>\r\n            </tr> \r\n          </tbody> \r\n          <tbody>\r\n             <tr>\r\n              <th>1</th>\r\n              <td>Triglav</td>\r\n              <td>+38163585885</td>\r\n              <td>triglav@gmail.com</td>\r\n              \r\n            </tr> \r\n          </tbody> \r\n        </table>\r\n\r\n  </div>\r\n</div>\r\n-->\r\n"

/***/ }),

/***/ "../../../../../src/app/izvestaj/izvestaj.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_izvestaj_izvestaj_service__ = __webpack_require__("../../../../../src/app/izvestaj/izvestaj.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IzvestajComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IzvestajComponent = (function () {
    function IzvestajComponent(http, tableService) {
        this.http = http;
        this.tableService = tableService;
        this.products = [
            {
                "productId": 2,
                "productName": "Garden Cart"
            }
        ];
        this.DataArray = [];
    }
    /*  sendForFind(find:string) {
      console.log(find);
  
      this.http.get('http://localhost:8000/getclient/' + find)
              .subscribe(data => {
                  this.getResult = data['_body'];
                  console.log(data['_body']);
                });
  
  
    }*/
    IzvestajComponent.prototype.sendForFind = function (find) {
        var _this = this;
        console.log(find);
        this.tableService.sendForFind(find).subscribe(function (data) {
            _this.DataArray = data;
            console.log(data);
        });
    };
    IzvestajComponent.prototype.loadTableData = function () {
        var _this = this;
        this.tableService.loadTableData().subscribe(function (data) {
            _this.DataArray = data;
            console.log(data);
        });
    };
    IzvestajComponent.prototype.onNameClick = function (find) {
        var _this = this;
        this.tableService.onNameClick(find).subscribe(function (data) {
            _this.DataArray = data;
            console.log(data);
        });
    };
    IzvestajComponent.prototype.ngOnInit = function () { };
    IzvestajComponent.prototype.sendGetRequest = function () {
        console.log("SEND");
    };
    return IzvestajComponent;
}());
IzvestajComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-table',
        template: __webpack_require__("../../../../../src/app/izvestaj/izvestaj.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2_app_izvestaj_izvestaj_service__["a" /* IzvestajService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_izvestaj_izvestaj_service__["a" /* IzvestajService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_izvestaj_izvestaj_service__["a" /* IzvestajService */]) === "function" && _b || Object])
], IzvestajComponent);

var _a, _b;
//# sourceMappingURL=izvestaj.component.js.map

/***/ }),

/***/ "../../../../../src/app/izvestaj/izvestaj.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IzvestajService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IzvestajService = (function () {
    function IzvestajService(http) {
        this.http = http;
    }
    IzvestajService.prototype.loadTableData = function () {
        console.log("Usao u service, saljemo get requst! ");
        return this.http.get('http://localhost:8000/getAll')
            .map(function (res) { return res.json(); });
    };
    IzvestajService.prototype.sendForFind = function (find) {
        console.log(find);
        console.log("Usao u service, saljemo get requst! ");
        return this.http.get('http://localhost:8000/getclient/' + find)
            .map(function (res) { return res.json(); });
    };
    IzvestajService.prototype.onNameClick = function (find) {
        console.log("Kliknuo si na ime");
        return this.http.get('http://localhost:8000/getclient/' + find)
            .map(function (res) { return res.json(); });
    };
    return IzvestajService;
}());
IzvestajService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], IzvestajService);

var _a;
//# sourceMappingURL=izvestaj.service.js.map

/***/ }),

/***/ "../../../../../src/app/korisnici/korisnici.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t\r\n        \r\n        <div class=\"col-md-12\">\r\n          \t\t<form class=\"navbar-form\" role=\"search\">\r\n\t\t<div class=\"input-group\">\r\n\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Pronadji korisnika\" name=\"srch-term\" id=\"srch-term\">\r\n\t\t\t<div class=\"input-group-btn\">\r\n\t\t\t\t<button class=\"btn btn-default\" type=\"submit\"><i class=\"glyphicon glyphicon-search\"></i></button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t</form>\r\n\r\n    <br><br>\r\n        <div class=\"table-responsive\">\r\n\r\n                \r\n              <table  class=\"table table-bordred table-striped\">\r\n                   \r\n                   <thead>\r\n                   \r\n                   <th>&nbsp;&nbsp;RB</th>\r\n                    <th>&nbsp;&nbsp;Ime</th>\r\n                     <th>&nbsp;&nbsp;Prezime</th>\r\n                     <th>&nbsp;&nbsp;Adresa</th>\r\n                     <th>&nbsp;&nbsp;Datum registracije</th>\r\n                     <th>&nbsp;&nbsp;Izmeni</th>\r\n                     <th>&nbsp;&nbsp;Obrisi</th>\r\n                     \r\n                   </thead>\r\n    <tbody>\r\n    \r\n    <tr>\r\n\r\n    <td>1</td>\r\n    <td>Marko</td>\r\n    <td>Uljarevic</td>\r\n    <td>Kritska 22</td>\r\n    <td>19.11.2017</td>\r\n    <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Edit\"><button class=\"btn btn-primary btn-xs\" data-title=\"Edit\" data-toggle=\"modal\" data-target=\"#edit\" ><span class=\"glyphicon glyphicon-pencil\"></span></button></p></td>\r\n    <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete\"><button class=\"btn btn-danger btn-xs\" data-title=\"Delete\" data-toggle=\"modal\" data-target=\"#delete\" ><span class=\"glyphicon glyphicon-trash\"></span></button></p></td>\r\n    </tr>\r\n    \r\n<tr>\r\n\r\n    <td>2</td>\r\n    <td>Dejan</td>\r\n    <td>Uljarevic</td>\r\n    <td>Ratka Mitrovica 22</td>\r\n    <td>19.11.2017</td>\r\n    <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Edit\"><button class=\"btn btn-primary btn-xs\" data-title=\"Edit\" data-toggle=\"modal\" data-target=\"#edit\" ><span class=\"glyphicon glyphicon-pencil\"></span></button></p></td>\r\n    <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete\"><button class=\"btn btn-danger btn-xs\" data-title=\"Delete\" data-toggle=\"modal\" data-target=\"#delete\" ><span class=\"glyphicon glyphicon-trash\"></span></button></p></td>\r\n    </tr>\r\n    \r\n<tr>\r\n\r\n    <td>3</td>\r\n    <td>Nikola</td>\r\n    <td>Simic</td>\r\n    <td>Ratka Banzica 122/8</td>\r\n    <td>19.11.2017</td>\r\n    <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Edit\"><button class=\"btn btn-primary btn-xs\" data-title=\"Edit\" data-toggle=\"modal\" data-target=\"#edit\" ><span class=\"glyphicon glyphicon-pencil\"></span></button></p></td>\r\n    <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete\"><button class=\"btn btn-danger btn-xs\" data-title=\"Delete\" data-toggle=\"modal\" data-target=\"#delete\" ><span class=\"glyphicon glyphicon-trash\"></span></button></p></td>\r\n    </tr>\r\n<tr>\r\n\r\n    <td>4</td>\r\n    <td>Rade </td>\r\n    <td>Colic Simic</td>\r\n    <td>Rajka Matica 4</td>\r\n    <td>19.11.2017</td>\r\n    <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Edit\"><button class=\"btn btn-primary btn-xs\" data-title=\"Edit\" data-toggle=\"modal\" data-target=\"#edit\" ><span class=\"glyphicon glyphicon-pencil\"></span></button></p></td>\r\n    <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete\"><button class=\"btn btn-danger btn-xs\" data-title=\"Delete\" data-toggle=\"modal\" data-target=\"#delete\" ><span class=\"glyphicon glyphicon-trash\"></span></button></p></td>\r\n    </tr>\r\n    <tr>\r\n\r\n    <td>5</td>\r\n    <td>Dzon </td>\r\n    <td>Milicevic</td>\r\n    <td>Knez Mihajlova 74</td>\r\n    <td>19.11.2017</td>\r\n    <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Edit\"><button class=\"btn btn-primary btn-xs\" data-title=\"Edit\" data-toggle=\"modal\" data-target=\"#edit\" ><span class=\"glyphicon glyphicon-pencil\"></span></button></p></td>\r\n    <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete\"><button class=\"btn btn-danger btn-xs\" data-title=\"Delete\" data-toggle=\"modal\" data-target=\"#delete\" ><span class=\"glyphicon glyphicon-trash\"></span></button></p></td>\r\n    </tr>\r\n    <tr>\r\n\r\n    <td>6</td>\r\n    <td>Goran </td>\r\n    <td>Radic</td>\r\n    <td>Mitra Mirkovica 22</td>\r\n    <td>19.11.2017</td>\r\n    <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Edit\"><button class=\"btn btn-primary btn-xs\" data-title=\"Edit\" data-toggle=\"modal\" data-target=\"#edit\" ><span class=\"glyphicon glyphicon-pencil\"></span></button></p></td>\r\n    <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete\"><button class=\"btn btn-danger btn-xs\" data-title=\"Delete\" data-toggle=\"modal\" data-target=\"#delete\" ><span class=\"glyphicon glyphicon-trash\"></span></button></p></td>\r\n    </tr>\r\n\r\n\r\n    </tbody>\r\n        \r\n</table>\r\n\r\n<div class=\"clearfix\"></div>\r\n<ul class=\"pagination pull-right\">\r\n  <li class=\"disabled\"><a href=\"#\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a></li>\r\n  <li class=\"active\"><a href=\"#\">1</a></li>\r\n  <li><a href=\"#\">2</a></li>\r\n  <li><a href=\"#\">3</a></li>\r\n  <li><a href=\"#\">4</a></li>\r\n  <li><a href=\"#\">5</a></li>\r\n  <li><a href=\"#\">6</a></li>\r\n  <li><a href=\"#\">7</a></li>\r\n  <li><a href=\"#\">8</a></li>\r\n  <li><a href=\"#\"><span class=\"glyphicon glyphicon-chevron-right\"></span></a></li>\r\n</ul>\r\n                \r\n            </div>\r\n            \r\n        </div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"edit\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\r\n        <h4 class=\"modal-title custom_align\" id=\"Heading\">Edit Your Detail</h4>\r\n      </div>\r\n          <div class=\"modal-body\">\r\n          <div class=\"form-group\">\r\n        <input class=\"form-control \" type=\"text\" placeholder=\"Mohsin\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n        \r\n        <input class=\"form-control \" type=\"text\" placeholder=\"Irshad\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n        <textarea rows=\"2\" class=\"form-control\" placeholder=\"CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan\"></textarea>\r\n    \r\n        \r\n        </div>\r\n      </div>\r\n          <div class=\"modal-footer \">\r\n        <button type=\"button\" class=\"btn btn-warning btn-lg\" style=\"width: 100%;\"><span class=\"glyphicon glyphicon-ok-sign\"></span> Update</button>\r\n      </div>\r\n        </div>\r\n    <!-- /.modal-content --> \r\n  </div>\r\n      <!-- /.modal-dialog --> \r\n    </div>\r\n    \r\n    \r\n    \r\n    <div class=\"modal fade\" id=\"delete\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\r\n        <h4 class=\"modal-title custom_align\" id=\"Heading\">Delete this entry</h4>\r\n      </div>\r\n          <div class=\"modal-body\">\r\n       \r\n       <div class=\"alert alert-danger\"><span class=\"glyphicon glyphicon-warning-sign\"></span> Are you sure you want to delete this Record?</div>\r\n       \r\n      </div>\r\n        <div class=\"modal-footer \">\r\n        <button type=\"button\" class=\"btn btn-success\" ><span class=\"glyphicon glyphicon-ok-sign\"></span> Yes</button>\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"><span class=\"glyphicon glyphicon-remove\"></span> No</button>\r\n      </div>\r\n        </div>\r\n    <!-- /.modal-content --> \r\n  </div>\r\n      <!-- /.modal-dialog --> \r\n    </div>\r\n\r\n\r\n\r\n\r\n<!-- STARA TABELA \r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n   <input #find class=\"form-control input-sm\" placeholder=\"Pretraži osiguranje\" style=\"width:240px;\"/>\r\n    <button (click) = 'sendForFind(find.value)' class=\"btn btn-primary btn-sm\"> Pretraži </button>\r\n       <button (click)=\"loadTableData()\"> Load Data</button> \r\n\r\n\r\n\t\t<form class=\"navbar-form\" role=\"search\">\r\n\t\t<div class=\"input-group\">\r\n\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Pretraži osiguranje\" name=\"srch-term\" id=\"srch-term\">\r\n\t\t\t<div class=\"input-group-btn\">\r\n\t\t\t\t<button class=\"btn btn-default\" type=\"submit\"><i class=\"glyphicon glyphicon-search\"></i></button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t</form>\r\n\t\t<br><br>\r\n      <table class=\"table table-bordered\">\r\n          <thead>\r\n            <tr>\r\n              <th>RB</th>\r\n              <th>Naziv osiguranja</th>\r\n              <th>Telefon</th>\r\n              <th>Mail</th>\r\n              <th>Opcije</th>\r\n            </tr>\r\n          </thead>\r\n      <tbody>\r\n             <tr *ngFor=\"let data of DataArray\">\r\n              <th>{{ data.id }}</th>\r\n              <td><a href=\"/getclient/{{data.clientName}}\">{{ data.clientName }}</a></td>\r\n              <td>{{ data.amount}}</td>\r\n              <td>{{ data.timestamp}}</td>\r\n              <td>{{ data.inputDate}}</td>\r\n              <td>{{ data.source}}</td>\r\n            </tr> \r\n          </tbody> \r\n          <tbody>\r\n             <tr>\r\n              <th>1</th>\r\n              <td>Triglav</td>\r\n              <td>+38163585885</td>\r\n              <td>triglav@gmail.com</td>\r\n              \r\n            </tr> \r\n          </tbody> \r\n        </table>\r\n\r\n  </div>\r\n</div>\r\n-->\r\n"

/***/ }),

/***/ "../../../../../src/app/korisnici/korisnici.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_korisnici_korisnici_service__ = __webpack_require__("../../../../../src/app/korisnici/korisnici.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KorisniciComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KorisniciComponent = (function () {
    function KorisniciComponent(http, tableService) {
        this.http = http;
        this.tableService = tableService;
        this.products = [
            {
                "productId": 2,
                "productName": "Garden Cart"
            }
        ];
        this.DataArray = [];
    }
    /*  sendForFind(find:string) {
      console.log(find);
  
      this.http.get('http://localhost:8000/getclient/' + find)
              .subscribe(data => {
                  this.getResult = data['_body'];
                  console.log(data['_body']);
                });
  
  
    }*/
    KorisniciComponent.prototype.sendForFind = function (find) {
        var _this = this;
        console.log(find);
        this.tableService.sendForFind(find).subscribe(function (data) {
            _this.DataArray = data;
            console.log(data);
        });
    };
    KorisniciComponent.prototype.loadTableData = function () {
        var _this = this;
        this.tableService.loadTableData().subscribe(function (data) {
            _this.DataArray = data;
            console.log(data);
        });
    };
    KorisniciComponent.prototype.onNameClick = function (find) {
        var _this = this;
        this.tableService.onNameClick(find).subscribe(function (data) {
            _this.DataArray = data;
            console.log(data);
        });
    };
    KorisniciComponent.prototype.ngOnInit = function () { };
    KorisniciComponent.prototype.sendGetRequest = function () {
        console.log("SEND");
    };
    return KorisniciComponent;
}());
KorisniciComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-table',
        template: __webpack_require__("../../../../../src/app/korisnici/korisnici.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2_app_korisnici_korisnici_service__["a" /* KorisniciService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_korisnici_korisnici_service__["a" /* KorisniciService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_korisnici_korisnici_service__["a" /* KorisniciService */]) === "function" && _b || Object])
], KorisniciComponent);

var _a, _b;
//# sourceMappingURL=korisnici.component.js.map

/***/ }),

/***/ "../../../../../src/app/korisnici/korisnici.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KorisniciService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KorisniciService = (function () {
    function KorisniciService(http) {
        this.http = http;
    }
    KorisniciService.prototype.loadTableData = function () {
        console.log("Usao u service, saljemo get requst! ");
        return this.http.get('http://localhost:8000/getAll')
            .map(function (res) { return res.json(); });
    };
    KorisniciService.prototype.sendForFind = function (find) {
        console.log(find);
        console.log("Usao u service, saljemo get requst! ");
        return this.http.get('http://localhost:8000/getclient/' + find)
            .map(function (res) { return res.json(); });
    };
    KorisniciService.prototype.onNameClick = function (find) {
        console.log("Kliknuo si na ime");
        return this.http.get('http://localhost:8000/getclient/' + find)
            .map(function (res) { return res.json(); });
    };
    return KorisniciService;
}());
KorisniciService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], KorisniciService);

var _a;
//# sourceMappingURL=korisnici.service.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <header></header>\r\n    <nav class=\"navbar navbar-inverse bs-dark\">\r\n        <div class=\"navbar-header\">\r\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n          </button>\r\n          <a class=\"navbar-brand\">\r\n                    <img [src]=\"LOGO\" alt=\"Deploy logo\" class=\"logo\">\r\n           </a>\r\n        </div>\r\n\r\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n          <ul class=\"nav navbar-nav marginLeft\">\r\n            <li class=\"active\"><a href=\"#\" class=\"color\" routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">Početna <span class=\"sr-only\">(current)</span></a></li>\r\n            <li class=\"active\"><a href=\"#\" class=\"color\" routerLink=\"izvestaj\" routerLinkActive=\"active\">Izveštaj <span class=\"sr-only\">(current)</span></a></li>\r\n            <li class=\"active\"><a href=\"#\" class=\"color\" routerLink=\"osiguranja\" routerLinkActive=\"active\">Osiguranja <span class=\"sr-only\">(current)</span></a></li>\r\n            <li class=\"active\"><a href=\"#\" class=\"color\" routerLink=\"korisnici\" routerLinkActive=\"active\">Korisnici <span class=\"sr-only\">(current)</span></a></li>\r\n         <!--   <li class=\"active\"><a href=\"#\" class=\"color\">Statistika <span class=\"sr-only\">(current)</span></a></li>\r\n            \r\n           <li class=\"dropdown\">\r\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"> Opcije <span class=\"caret\"></span></a>\r\n              <ul class=\"dropdown-menu\">\r\n                <li><a href=\"#\">Tabela</a></li>\r\n                <li><a href=\"#\">Korisnici</a></li>\r\n                <li><a href=\"#\">Izveštaj</a></li>\r\n                <li><a href=\"#\">Statistika</a></li>\r\n                <li role=\"separator\" class=\"divider\"></li>\r\n                <li><a href=\"#\">Slike</a></li>\r\n                <li role=\"separator\" class=\"divider\"></li>\r\n                <li><a href=\"#\">Video</a></li> \r\n              </ul>\r\n            </li>-->\r\n          </ul>\r\n        <!--  <form class=\"navbar-form navbar-left form-horizontal\" role=\"search\">\r\n              <div class=\"input-group\">\r\n                 <input type=\"text\" class=\"search-box\" placeholder=\"Pretraga\">\r\n                 <button type=\"submit\" class=\"btn\"><span class=\"glyphicon glyphicon-search\"></span></button>\r\n              </div>\r\n          </form> -->\r\n          <ul class=\"nav navbar-nav navbar-right\">\r\n            <li class=\"dropdown\">\r\n              <a class=\"dropdown-toggle navbar-img\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n              Podesavanja \r\n              <img src=\"http://placehold.it/150x150\" class=\"img-circle\" alt=\"Profile Image\" />\r\n              </a>\r\n              <ul class=\"dropdown-menu\">\r\n                <li><a href=\"#\" routerLink=\"profil\" routerLinkActive=\"active\">Profil administratora</a></li>\r\n           <!--     <li><a href=\"#\">Dodaj korisnika</a></li>\r\n                <li role=\"separator\" class=\"divider\"></li>\r\n                <li><a href=\"#\">Settings</a></li> -->\r\n              </ul>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n    </nav>\r\n</div>\r\n\r\n<style>\r\n  .color{\r\n    color:#3aa188 !important;\r\n  }\r\n  .marginLeft{\r\n    margin-left:40%;\r\n  }\r\n  .bs-dark.navbar-inverse {\r\n  background-color: #222;\r\n  border-color: #080808;\r\n}\r\n.bs-dark .navbar-img {padding:5px 6px !important;}\r\n.bs-dark .navbar-img img {width:40px;}\r\n.bs-dark .dropdown-menu {\r\n  min-width: 200px;\r\n  padding: 5px 0;\r\n  margin: 2px 0 0;\r\n  background-color: #000;\r\n  border: 1px solid rgba(0, 0, 0, 0.7);\r\n  border: 1px solid rgba(0, 0, 0, .15);\r\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\r\n          box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\r\n}\r\n\r\n.bs-dark .dropdown-menu .divider {\r\n  border: 1px solid rgba(0, 0, 0, 0.8);\r\n}\r\n.bs-dark .dropdown-menu > li > a {\r\n  padding: 6px 20px;\r\n  color: rgba(255,255,255,0.80);\r\n}\r\n.bs-dark .dropdown-menu > li > a:hover,\r\n.bs-dark .dropdown-menu > li > a:focus {\r\n  color: rgba(255,255,255,0.70);\r\n  text-decoration: none;\r\n  background-color: transparent;\r\n}\r\n.bs-dark .dropdown-menu > .active > a,\r\n.bs-dark .dropdown-menu > .active > a:hover,\r\n.bs-dark .dropdown-menu > .active > a:focus {\r\n  color: rgba(255,255,255,0.70);\r\n  text-decoration: none;\r\n  background-color: transparent;\r\n  outline: 0;\r\n}\r\n\r\n.bs-dark .navbar-form {\r\n  margin:0;\r\n  margin-top: 5px;\r\n  padding:8px 0px;\r\n}\r\n \r\n.bs-dark .navbar-form .search-box {\r\n  border:0px;\r\n  height:35px;\r\n  outline: none;\r\n  width:320px;\r\n  padding-right: 3px;\r\n  padding-left: 15px;\r\n  margin:4px;\r\n  -webkit-border-radius: 22px;\r\n  -moz-border-radius: 22px;\r\n  border-radius: 22px;\r\n}\r\n \r\n.bs-dark .navbar-form button {\r\n  border: 0;\r\n  background: none;\r\n  padding: 2px 5px;\r\n  margin-top: 2px;\r\n  position: relative;\r\n  left: -34px;\r\n  margin-bottom: 0;\r\n  -webkit-border-radius: 3px;\r\n  -moz-border-radius: 3px;\r\n  border-radius: 3px;\r\n}\r\n \r\n.bs-dark .search-box:focus + button {\r\n  z-index: 3;   \r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .bs-dark .dropdown:hover {background-color: #000;}\r\n\t.bs-dark .dropdown:hover .dropdown-menu {\r\n\t  display: block;\r\n\t}\r\n\t.bs-dark .navbar-form {\r\n\t  padding:0px;\r\n\t}\t\r\n\t.bs-dark .navbar-form .search-box {\r\n\t  width:260px;\r\n\t  height:32px;\r\n\t}\r\n\r\n}\r\n\r\n  </style>\r\n\r\n\r\n\r\n<!--<div class=\"container\">\r\n  <nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\"> \r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar1\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n           <a class=\"navbar-brand\">\r\n                    <img [src]=\"LOGO\" alt=\"Deploy logo\" class=\"logo\">\r\n           </a>\r\n      </div>\r\n      <div id=\"navbar1\" class=\"navbar-collapse collapse\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <li>\r\n            <a class=\"font-size\" routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">Ingestor</a>\r\n          </li>\r\n          <li>\r\n            <a class=\"font-size\" routerLink=\"table\" routerLinkActive=\"active\">Table</a>\r\n          </li>\r\n          <li>\r\n            <a class=\"font-size\">Deploy 1</a>\r\n          </li>\r\n          <li>\r\n            <a class=\"font-size\">Deploy 2</a>\r\n          </li>\r\n          <li>\r\n            <a class=\"font-size\" >Deploy 3</a>\r\n          </li>\r\n          <li>\r\n            <a class=\"font-size\" >Deploy 4</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</div>\r\n\r\n<style>\r\n  \r\n  .active {\r\n    color:#0070c0 !important;\r\n  }\r\n\r\n  .logo {\r\n    width: 200px;\r\n  }\r\n\r\n  .navbar-brand {\r\n    padding: 0px;\r\n  }\r\n\r\n  .navbar-brand>img {\r\n    height: 100%;\r\n    padding: 5px;\r\n    width: auto;\r\n  }\r\n\r\n  .font-size {\r\n    font-size: 20px;\r\n    margin-left: 50px;\r\n  }\r\n\r\n</style>\r\n-->"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
        this.LOGO = 'assets/images/logo.png';
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/osiguranja/osiguranja.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t\r\n        \r\n        <div class=\"col-md-12\">\r\n          \t\t<form class=\"navbar-form\" role=\"search\">\r\n\t\t<div class=\"input-group\">\r\n\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Pretraži osiguranje\" name=\"srch-term\" id=\"srch-term\">\r\n\t\t\t<div class=\"input-group-btn\">\r\n\t\t\t\t<button class=\"btn btn-default\" type=\"submit\"><i class=\"glyphicon glyphicon-search\"></i></button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n    <button class=\"btn btn-success\" style=\"margin-left:5%\">Dodaj novo osiguranje</button>\r\n\t\t</form>\r\n\r\n    <br><br>\r\n        <div class=\"table-responsive\">\r\n\r\n                \r\n              <table  class=\"table table-bordred table-striped\">\r\n                   \r\n                   <thead>\r\n                   \r\n                   <th>&nbsp;&nbsp;RB</th>\r\n                    <th>&nbsp;&nbsp;Naziv</th>\r\n                     <th>&nbsp;&nbsp;Adresa</th>\r\n                     <th>&nbsp;&nbsp;Mail</th>\r\n                     <th>&nbsp;&nbsp;Telefon</th>\r\n                      <th>&nbsp;&nbsp;Izmeni</th>\r\n                       <th>&nbsp;&nbsp;Obrisi</th>\r\n                   </thead>\r\n    <tbody>\r\n    \r\n    <tr>\r\n\r\n    <td>1</td>\r\n    <td>Triglav</td>\r\n    <td>Kralja Petra 33, Beograd</td>\r\n    <td>triglav@gmail.com</td>\r\n    <td>+381655585584</td>\r\n    <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Edit\"><button class=\"btn btn-primary btn-xs\" data-title=\"Edit\" data-toggle=\"modal\" data-target=\"#edit\" ><span class=\"glyphicon glyphicon-pencil\"></span></button></p></td>\r\n    <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete\"><button class=\"btn btn-danger btn-xs\" data-title=\"Delete\" data-toggle=\"modal\" data-target=\"#delete\" ><span class=\"glyphicon glyphicon-trash\"></span></button></p></td>\r\n    </tr>\r\n    \r\n <tr>\r\n    <td>2</td>\r\n    <td>Milenijum</td>\r\n    <td>Borisa Kidrica 22, Beograd</td>\r\n    <td>milenijum@hotmail.com</td>\r\n    <td>+381118787852</td>\r\n    <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Edit\"><button class=\"btn btn-primary btn-xs\" data-title=\"Edit\" data-toggle=\"modal\" data-target=\"#edit\" ><span class=\"glyphicon glyphicon-pencil\"></span></button></p></td>\r\n    <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete\"><button class=\"btn btn-danger btn-xs\" data-title=\"Delete\" data-toggle=\"modal\" data-target=\"#delete\" ><span class=\"glyphicon glyphicon-trash\"></span></button></p></td>\r\n    </tr>\r\n    \r\n    \r\n <tr>\r\n    <td>3</td>\r\n    <td>Delta Generali</td>\r\n    <td>Srpsko-grckog prijateljstva 31, Beograd</td>\r\n    <td>delta@gmail.com</td>\r\n    <td>+381657878965</td>\r\n    <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Edit\"><button class=\"btn btn-primary btn-xs\" data-title=\"Edit\" data-toggle=\"modal\" data-target=\"#edit\" ><span class=\"glyphicon glyphicon-pencil\"></span></button></p></td>\r\n    <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete\"><button class=\"btn btn-danger btn-xs\" data-title=\"Delete\" data-toggle=\"modal\" data-target=\"#delete\" ><span class=\"glyphicon glyphicon-trash\"></span></button></p></td>\r\n </tr>    \r\n  <tr>\r\n    <td>4</td>\r\n    <td>Mogren</td>\r\n    <td>Veljka Dugosevica 332, Beograd</td>\r\n    <td>mogren@gmail.com</td>\r\n    <td>+38168579456</td>\r\n    <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Edit\"><button class=\"btn btn-primary btn-xs\" data-title=\"Edit\" data-toggle=\"modal\" data-target=\"#edit\" ><span class=\"glyphicon glyphicon-pencil\"></span></button></p></td>\r\n    <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete\"><button class=\"btn btn-danger btn-xs\" data-title=\"Delete\" data-toggle=\"modal\" data-target=\"#delete\" ><span class=\"glyphicon glyphicon-trash\"></span></button></p></td>\r\n </tr>    \r\n\r\n    </tbody>\r\n        \r\n</table>\r\n\r\n<div class=\"clearfix\"></div>\r\n<ul class=\"pagination pull-right\">\r\n  <li class=\"disabled\"><a href=\"#\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a></li>\r\n  <li class=\"active\"><a href=\"#\">1</a></li>\r\n  <li><a href=\"#\">2</a></li>\r\n  <li><a href=\"#\">3</a></li>\r\n  <li><a href=\"#\">4</a></li>\r\n  <li><a href=\"#\">5</a></li>\r\n  <li><a href=\"#\"><span class=\"glyphicon glyphicon-chevron-right\"></span></a></li>\r\n</ul>\r\n                \r\n            </div>\r\n            \r\n        </div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"edit\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\r\n        <h4 class=\"modal-title custom_align\" id=\"Heading\">Edit Your Detail</h4>\r\n      </div>\r\n          <div class=\"modal-body\">\r\n          <div class=\"form-group\">\r\n        <input class=\"form-control \" type=\"text\" placeholder=\"Mohsin\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n        \r\n        <input class=\"form-control \" type=\"text\" placeholder=\"Irshad\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n        <textarea rows=\"2\" class=\"form-control\" placeholder=\"CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan\"></textarea>\r\n    \r\n        \r\n        </div>\r\n      </div>\r\n          <div class=\"modal-footer \">\r\n        <button type=\"button\" class=\"btn btn-warning btn-lg\" style=\"width: 100%;\"><span class=\"glyphicon glyphicon-ok-sign\"></span> Update</button>\r\n      </div>\r\n        </div>\r\n    <!-- /.modal-content --> \r\n  </div>\r\n      <!-- /.modal-dialog --> \r\n    </div>\r\n    \r\n    \r\n    \r\n    <div class=\"modal fade\" id=\"delete\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\r\n        <h4 class=\"modal-title custom_align\" id=\"Heading\">Delete this entry</h4>\r\n      </div>\r\n          <div class=\"modal-body\">\r\n       \r\n       <div class=\"alert alert-danger\"><span class=\"glyphicon glyphicon-warning-sign\"></span> Are you sure you want to delete this Record?</div>\r\n       \r\n      </div>\r\n        <div class=\"modal-footer \">\r\n        <button type=\"button\" class=\"btn btn-success\" ><span class=\"glyphicon glyphicon-ok-sign\"></span> Yes</button>\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"><span class=\"glyphicon glyphicon-remove\"></span> No</button>\r\n      </div>\r\n        </div>\r\n    <!-- /.modal-content --> \r\n  </div>\r\n      <!-- /.modal-dialog --> \r\n    </div>\r\n\r\n\r\n\r\n\r\n<!-- STARA TABELA \r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n   <input #find class=\"form-control input-sm\" placeholder=\"Pretraži osiguranje\" style=\"width:240px;\"/>\r\n    <button (click) = 'sendForFind(find.value)' class=\"btn btn-primary btn-sm\"> Pretraži </button>\r\n       <button (click)=\"loadTableData()\"> Load Data</button> \r\n\r\n\r\n\t\t<form class=\"navbar-form\" role=\"search\">\r\n\t\t<div class=\"input-group\">\r\n\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Pretraži osiguranje\" name=\"srch-term\" id=\"srch-term\">\r\n\t\t\t<div class=\"input-group-btn\">\r\n\t\t\t\t<button class=\"btn btn-default\" type=\"submit\"><i class=\"glyphicon glyphicon-search\"></i></button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t</form>\r\n\t\t<br><br>\r\n      <table class=\"table table-bordered\">\r\n          <thead>\r\n            <tr>\r\n              <th>RB</th>\r\n              <th>Naziv osiguranja</th>\r\n              <th>Telefon</th>\r\n              <th>Mail</th>\r\n              <th>Opcije</th>\r\n            </tr>\r\n          </thead>\r\n      <tbody>\r\n             <tr *ngFor=\"let data of DataArray\">\r\n              <th>{{ data.id }}</th>\r\n              <td><a href=\"/getclient/{{data.clientName}}\">{{ data.clientName }}</a></td>\r\n              <td>{{ data.amount}}</td>\r\n              <td>{{ data.timestamp}}</td>\r\n              <td>{{ data.inputDate}}</td>\r\n              <td>{{ data.source}}</td>\r\n            </tr> \r\n          </tbody> \r\n          <tbody>\r\n             <tr>\r\n              <th>1</th>\r\n              <td>Triglav</td>\r\n              <td>+38163585885</td>\r\n              <td>triglav@gmail.com</td>\r\n              \r\n            </tr> \r\n          </tbody> \r\n        </table>\r\n\r\n  </div>\r\n</div>\r\n-->\r\n"

/***/ }),

/***/ "../../../../../src/app/osiguranja/osiguranja.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_osiguranja_osiguranja_service__ = __webpack_require__("../../../../../src/app/osiguranja/osiguranja.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TableComponent = (function () {
    function TableComponent(http, tableService) {
        this.http = http;
        this.tableService = tableService;
        this.products = [
            {
                "productId": 2,
                "productName": "Garden Cart"
            }
        ];
        this.DataArray = [];
    }
    /*  sendForFind(find:string) {
      console.log(find);
  
      this.http.get('http://localhost:8000/getclient/' + find)
              .subscribe(data => {
                  this.getResult = data['_body'];
                  console.log(data['_body']);
                });
  
  
    }*/
    TableComponent.prototype.sendForFind = function (find) {
        var _this = this;
        console.log(find);
        this.tableService.sendForFind(find).subscribe(function (data) {
            _this.DataArray = data;
            console.log(data);
        });
    };
    TableComponent.prototype.loadTableData = function () {
        var _this = this;
        this.tableService.loadTableData().subscribe(function (data) {
            _this.DataArray = data;
            console.log(data);
        });
    };
    TableComponent.prototype.onNameClick = function (find) {
        var _this = this;
        this.tableService.onNameClick(find).subscribe(function (data) {
            _this.DataArray = data;
            console.log(data);
        });
    };
    TableComponent.prototype.ngOnInit = function () { };
    TableComponent.prototype.sendGetRequest = function () {
        console.log("SEND");
    };
    return TableComponent;
}());
TableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-table',
        template: __webpack_require__("../../../../../src/app/osiguranja/osiguranja.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2_app_osiguranja_osiguranja_service__["a" /* TableService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_osiguranja_osiguranja_service__["a" /* TableService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_osiguranja_osiguranja_service__["a" /* TableService */]) === "function" && _b || Object])
], TableComponent);

var _a, _b;
//# sourceMappingURL=osiguranja.component.js.map

/***/ }),

/***/ "../../../../../src/app/osiguranja/osiguranja.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TableService = (function () {
    function TableService(http) {
        this.http = http;
    }
    TableService.prototype.loadTableData = function () {
        console.log("Usao u service, saljemo get requst! ");
        return this.http.get('http://localhost:8000/getAll')
            .map(function (res) { return res.json(); });
    };
    TableService.prototype.sendForFind = function (find) {
        console.log(find);
        console.log("Usao u service, saljemo get requst! ");
        return this.http.get('http://localhost:8000/getclient/' + find)
            .map(function (res) { return res.json(); });
    };
    TableService.prototype.onNameClick = function (find) {
        console.log("Kliknuo si na ime");
        return this.http.get('http://localhost:8000/getclient/' + find)
            .map(function (res) { return res.json(); });
    };
    return TableService;
}());
TableService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], TableService);

var _a;
//# sourceMappingURL=osiguranja.service.js.map

/***/ }),

/***/ "../../../../../src/app/profil/profil.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n\r\n    <meta charset=\"utf-8\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n    <meta name=\"description\" content=\"\">\r\n    <meta name=\"author\" content=\"\">\r\n\r\n    <title>Podaci o administratoru</title>\r\n<link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css\" rel=\"stylesheet\" integrity=\"sha256-3dkvEK0WLHRJ7/Csr0BZjAWxERc5WH7bdeUya2aXxdU= sha512-+L4yy6FRcDGbXJ9mPG8MT/3UCDzwR9gPeyFNMCtInsol++5m3bk2bXWKdZjvybmohrAsn3Ua5x8gfLnbE1YkOg==\" crossorigin=\"anonymous\">\r\n    <!-- Bootstrap Core CSS -->\r\n<!--     <link href=\"css/bootstrap.min.css\" rel=\"stylesheet\"> -->\r\n<link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha256-7s5uDGW3AHqw6xtJmNNtr+OBRJUlgkNJEo78P4b0yRw= sha512-nNo+yCHEyn0smMxSswnf/OnX6/KwJuZTlNZBjauKhTK0c+zT+q5JOCx0UFhXQ6rJR9jg6Es8gPuD2uZcYDLqSw==\" crossorigin=\"anonymous\">\r\n\r\n    <!-- Custom CSS -->\r\n    <style>\r\n    body {\r\n        padding-top: 70px;\r\n        /* Required padding for .navbar-fixed-top. Remove if using .navbar-static-top. Change if height of navigation changes. */\r\n    }\r\n\r\n    .othertop{margin-top:10px;}\r\n    </style>\r\n\r\n    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->\r\n    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->\r\n    <!--[if lt IE 9]>\r\n        <script src=\"https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js\"></script>\r\n        <script src=\"https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js\"></script>\r\n    <![endif]-->\r\n\r\n</head>\r\n\r\n<body>\r\n\r\n<div class=\"container\">\r\n<div class=\"row\">\r\n<div class=\"col-md-10 \">\r\n<form class=\"form-horizontal\">\r\n<fieldset>\r\n\r\n<!-- Form Name -->\r\n<legend>Podaci o administratoru</legend>\r\n\r\n<!-- Text input-->\r\n\r\n\r\n\r\n\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"Name (Full name)\">Ime i prezime</label>  \r\n  <div class=\"col-md-4\">\r\n <div class=\"input-group\">\r\n       <div class=\"input-group-addon\">\r\n        <i class=\"fa fa-user\">\r\n        </i>\r\n       </div>\r\n       <input id=\"Name (Full name)\" name=\"Name (Full name)\" type=\"text\" placeholder=\"Ime i prezime\" class=\"form-control addNew_form-control input-md\">\r\n      </div>\r\n\r\n    \r\n  </div>\r\n\r\n  \r\n</div>\r\n\r\n<!-- File Button --> \r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"Upload photo\">Ubaci sliku</label>\r\n  <div class=\"col-md-4\">\r\n    <input id=\"Upload photo\" name=\"Upload photo\" class=\"input-file\" type=\"file\">\r\n  </div>\r\n</div>\r\n\r\n<!-- Text input-->\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"Date Of Birth\">Datum rodjenja</label>  \r\n  <div class=\"col-md-4\">\r\n\r\n  <div class=\"input-group\">\r\n       <div class=\"input-group-addon\">\r\n     <i class=\"fa fa-birthday-cake\"></i>\r\n        \r\n       </div>\r\n       <input id=\"Date Of Birth\" name=\"Date Of Birth\" type=\"text\" placeholder=\"Datum rodjenja\" class=\"form-control input-md\">\r\n      </div>\r\n  \r\n    \r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- Text input\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"Father\">Father's name</label>  \r\n  <div class=\"col-md-4\">\r\n  <div class=\"input-group\">\r\n       <div class=\"input-group-addon\">\r\n      <i class=\"fa fa-male\" style=\"font-size: 20px;\"></i>\r\n        \r\n       </div>\r\n      <input id=\"Father\" name=\"Father\" type=\"text\" placeholder=\"Father's name\" class=\"form-control input-md\">\r\n\r\n      </div>\r\n    \r\n  </div>\r\n</div>-->\r\n\r\n<!-- Text input\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"Mother\">Mother's Name</label>  \r\n  <div class=\"col-md-4\">\r\n  <div class=\"input-group\">\r\n       <div class=\"input-group-addon\">\r\n      <i class=\"fa fa-female\" style=\"font-size: 20px;\"></i>\r\n        \r\n       </div>\r\n  <input id=\"Mother\" name=\"Mother\" type=\"text\" placeholder=\"Mother's Name\" class=\"form-control input-md\">\r\n\r\n      </div>\r\n    \r\n  </div>\r\n</div>-->\r\n\r\n<!-- Multiple Radios (inline)\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"Gender\">Gender</label>\r\n  <div class=\"col-md-4\"> \r\n    <label class=\"radio-inline\" for=\"Gender-0\">\r\n      <input type=\"radio\" name=\"Gender\" id=\"Gender-0\" value=\"1\" checked=\"checked\">\r\n      Male\r\n    </label> \r\n    <label class=\"radio-inline\" for=\"Gender-1\">\r\n      <input type=\"radio\" name=\"Gender\" id=\"Gender-1\" value=\"2\">\r\n      Female\r\n    </label> \r\n    <label class=\"radio-inline\" for=\"Gender-2\">\r\n      <input type=\"radio\" name=\"Gender\" id=\"Gender-2\" value=\"3\">\r\n      Other\r\n    </label>\r\n  </div>\r\n</div> -->\r\n\r\n<!-- Multiple Radios (inline) \r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"radios\">Marital Status:</label>\r\n  <div class=\"col-md-4\"> \r\n    <label class=\"radio-inline\" for=\"radios-0\">\r\n      <input type=\"radio\" name=\"radios\" id=\"radios-0\" value=\"1\" checked=\"checked\">\r\n      Married\r\n    </label> \r\n    <label class=\"radio-inline\" for=\"radios-1\">\r\n      <input type=\"radio\" name=\"radios\" id=\"radios-1\" value=\"2\">\r\n      Unmarried\r\n    </label>\r\n  </div>\r\n</div>-->\r\n\r\n<!-- Text input-->\r\n<!-- <div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"Temporary Address\">Temporary Address</label>  \r\n  <div class=\"col-md-4\">\r\n\r\n  <div class=\"input-group\">\r\n       <div class=\"input-group-addon\">\r\n     <i class=\"fa fa-home\" style=\"font-size:20px;\"></i>\r\n        \r\n       </div>\r\n <input id=\"Temporary Address\" name=\"Temporary Address\" type=\"text\" placeholder=\"Temporary Address\" class=\"form-control input-md\">\r\n      </div>\r\n \r\n    \r\n  </div>\r\n</div>\r\n -->\r\n\r\n\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label col-xs-12\" for=\"Permanent Address\">Adresa</label>  \r\n  <div class=\"col-md-2  col-xs-4\">\r\n  <input id=\"Permanent Address\" name=\"Permanent Address\" type=\"text\" placeholder=\"Grad\" class=\"form-control input-md \">\r\n  </div>\r\n\r\n  <div class=\"col-md-2 col-xs-4\">\r\n\r\n  <input id=\"Permanent Address\" name=\"Permanent Address\" type=\"text\" placeholder=\"Opstina\" class=\"form-control input-md \">\r\n  </div>\r\n\r\n  \r\n</div>\r\n\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"Permanent Address\"></label>  \r\n  <div class=\"col-md-2  col-xs-4\">\r\n  <input id=\"Permanent Address\" name=\"Permanent Address\" type=\"text\" placeholder=\"Ulica\" class=\"form-control input-md \">\r\n  \r\n  </div>\r\n\r\n  \r\n\r\n  \r\n</div>\r\n\r\n\r\n<!--\r\n\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label col-xs-12\" for=\"Temporary Address\">Temporary Address</label>  \r\n  <div class=\"col-md-2  col-xs-4\">\r\n  <input id=\"Temporary Address\" name=\"Temporary Address\" type=\"text\" placeholder=\"District\" class=\"form-control input-md \">\r\n  </div>\r\n\r\n  <div class=\"col-md-2 col-xs-4\">\r\n\r\n  <input id=\"Temporary Address\" name=\"Temporary Address\" type=\"text\" placeholder=\"Area\" class=\"form-control input-md \">\r\n  </div>\r\n\r\n  \r\n</div>\r\n\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"Temporary Address\"></label>  \r\n  <div class=\"col-md-2  col-xs-4\">\r\n  <input id=\"Temporary Address\" name=\"Temporary Address\" type=\"text\" placeholder=\"Street\" class=\"form-control input-md \">\r\n  \r\n  </div>\r\n\r\n  \r\n\r\n  \r\n</div>\r\n\r\n\r\n\r\n\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"Primary Occupation\">Primary Occupation</label>  \r\n  <div class=\"col-md-4\">\r\n  <div class=\"input-group\">\r\n       <div class=\"input-group-addon\">\r\n     <i class=\"fa fa-briefcase\"></i>\r\n        \r\n       </div>\r\n      <input id=\"Primary Occupation\" name=\"Primary Occupation\" type=\"text\" placeholder=\"Primary Occupation\" class=\"form-control input-md\">\r\n      </div>\r\n  \r\n    \r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"Secondary Occupation (if any)\">Secondary Occupation (if any)</label>  \r\n  <div class=\"col-md-4\">\r\n  <div class=\"input-group\">\r\n       <div class=\"input-group-addon\">\r\n      <i class=\"fa fa-briefcase\"></i>\r\n        \r\n       </div>\r\n     <input id=\"Secondary Occupation (if any)\" name=\"Secondary Occupation (if any)\" type=\"text\" placeholder=\"Secondary Occupation (if any)\" class=\"form-control input-md\">\r\n      </div>\r\n  \r\n    \r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"Skills\">Skills</label>  \r\n  <div class=\"col-md-4\">\r\n  <div class=\"input-group\">\r\n       <div class=\"input-group-addon\">\r\n     <i class=\"fa fa-graduation-cap\"></i>\r\n        \r\n       </div>\r\n     <input id=\"Skills\" name=\"Skills\" type=\"text\" placeholder=\"Skills\" class=\"form-control input-md\">\r\n      </div>\r\n \r\n    \r\n  </div>\r\n</div>\r\n\r\n Text input-->\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"Phone number \">Broj telefona </label>  \r\n  <div class=\"col-md-4\">\r\n  <div class=\"input-group\">\r\n       <div class=\"input-group-addon\">\r\n     <i class=\"fa fa-phone\"></i>\r\n        \r\n       </div>\r\n    <input id=\"Phone number \" name=\"Phone number \" type=\"text\" placeholder=\"Broj mobilnog telefona \" class=\"form-control input-md\">\r\n    \r\n      </div>\r\n      <div class=\"input-group othertop\">\r\n       <div class=\"input-group-addon\">\r\n     <i class=\"fa fa-mobile fa-1x\" style=\"font-size: 20px;\"></i>\r\n        \r\n       </div>\r\n    <input id=\"Phone number \" name=\"Secondary Phone number \" type=\"text\" placeholder=\"Broj fiksnog telefona\" class=\"form-control input-md\">\r\n    \r\n      </div>\r\n  \r\n  </div>\r\n</div>\r\n\r\n<!-- Text input-->\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"Email Address\">Email</label>  \r\n  <div class=\"col-md-4\">\r\n  <div class=\"input-group\">\r\n       <div class=\"input-group-addon\">\r\n     <i class=\"fa fa-envelope-o\"></i>\r\n        \r\n       </div>\r\n    <input id=\"Email Address\" name=\"Email Address\" type=\"text\" placeholder=\"Email\" class=\"form-control input-md\">\r\n    \r\n      </div>\r\n  \r\n  </div>\r\n</div>\r\n\r\n<!-- Text input\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"Availability time\">Availability time</label>  \r\n  <div class=\"col-md-4\">\r\n  <div class=\"input-group\">\r\n       <div class=\"input-group-addon\">\r\n     <i class=\"fa fa-clock-o\"></i>\r\n        \r\n       </div>\r\n    <input id=\"Availability time\" name=\"Availability time\" type=\"text\" placeholder=\"Availability time\" class=\"form-control input-md\">\r\n    \r\n      </div>\r\n  \r\n    \r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"Available Service Area\">Available Service Area</label>  \r\n  <div class=\"col-md-4\">\r\n  <div class=\"input-group\">\r\n       <div class=\"input-group-addon\">\r\n     <i class=\"fa fa-street-view\"></i>\r\n        \r\n       </div>\r\n   <input id=\"Available Service Area\" name=\"Available Service Area\" type=\"text\" placeholder=\"Available Service Area\" class=\"form-control input-md\">\r\n    \r\n      </div>\r\n  \r\n    \r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"Citizenship No.\">Citizenship No.</label>  \r\n  <div class=\"col-md-4\">\r\n  <div class=\"input-group\">\r\n       <div class=\"input-group-addon\">\r\n     <i class=\"fa fa-sticky-note-o\"></i>\r\n        \r\n       </div>\r\n   <input id=\"Citizenship No.\" name=\"Citizenship No.\" type=\"text\" placeholder=\"Citizenship No.\" class=\"form-control input-md\">\r\n    \r\n      </div>\r\n \r\n    \r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"Languages Known\">Languages Known</label>\r\n  <div class=\"col-md-4\">\r\n  <div class=\"checkbox\">\r\n    <label for=\"Languages Known-0\">\r\n      <input type=\"checkbox\" name=\"Languages Known\" id=\"Languages Known-0\" value=\"1\">\r\n      Nepali\r\n    </label>\r\n    </div>\r\n  <div class=\"checkbox\">\r\n    <label for=\"Languages Known-1\">\r\n      <input type=\"checkbox\" name=\"Languages Known\" id=\"Languages Known-1\" value=\"2\">\r\n      Newari\r\n    </label>\r\n    </div>\r\n  <div class=\"checkbox\">\r\n    <label for=\"Languages Known-2\">\r\n      <input type=\"checkbox\" name=\"Languages Known\" id=\"Languages Known-2\" value=\"3\">\r\n      English\r\n    </label>\r\n    </div>\r\n  <div class=\"checkbox\">\r\n    <label for=\"Languages Known-3\">\r\n      <input type=\"checkbox\" name=\"Languages Known\" id=\"Languages Known-3\" value=\"4\">\r\n      Hindi\r\n    </label>\r\n    </div>\r\n\r\n<div class=\"othertop\">\r\n    <label for=\"Languages Known-4\">\r\n    \r\n     \r\n  \r\n    </label>\r\n\r\n     <input type=\"input\" name=\"LanguagesKnown\" id=\"Languages Known-4\"  placeholder=\"Other Language\">\r\n    </div>\r\n    \r\n  </div>\r\n</div>\r\n\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"License No.\">License No.</label>  \r\n  <div class=\"col-md-4\">\r\n  <div class=\"input-group\">\r\n       <div class=\"input-group-addon\">\r\n     <i class=\"fa fa-sticky-note-o\"></i>\r\n        \r\n       </div>\r\n   <input id=\"License No.\" name=\"License No.\" type=\"text\" placeholder=\"License No.\" class=\"form-control input-md\">\r\n    \r\n      </div>\r\n \r\n    \r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"Owns Vehicle\">Owns Vehicle?</label>\r\n  <div class=\"col-md-4\">\r\n  <div class=\"checkbox\">\r\n    <label for=\"Owns Vehicle-0\">\r\n      <input type=\"checkbox\" name=\"Owns Vehicle\" id=\"Owns Vehicle-0\" value=\"1\">\r\n      4 wheeler\r\n    </label>\r\n    </div>\r\n  <div class=\"checkbox\">\r\n    <label for=\"Owns Vehicle-1\">\r\n      <input type=\"checkbox\" name=\"Owns Vehicle\" id=\"Owns Vehicle-1\" value=\"2\">\r\n     Bike\r\n    </label>\r\n    </div>\r\n  <div class=\"checkbox\">\r\n    <label for=\"Owns Vehicle-2\">\r\n      <input type=\"checkbox\" name=\"Owns Vehicle\" id=\"Owns Vehicle-2\" value=\"3\">\r\n      Bicycle\r\n    </label>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"Working Experience (time period)\">Working Experience (time period)</label>  \r\n  <div class=\"col-md-4\">\r\n  <div class=\"input-group\">\r\n       <div class=\"input-group-addon\">\r\n     <i class=\"fa fa-clock-o\"></i>\r\n        \r\n       </div>\r\n    <input id=\"Working Experience (time period)\" name=\"Working Experience\" type=\"text\" placeholder=\"Enter time period \" class=\"form-control input-md\">\r\n    \r\n    \r\n      </div>\r\n \r\n  </div>\r\n</div>\r\n\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"Overview (max 200 words)\">Overview (max 200 words)</label>\r\n  <div class=\"col-md-4\">                     \r\n    <textarea class=\"form-control\" rows=\"10\"  id=\"Overview (max 200 words)\" name=\"Overview (max 200 words)\">Overview</textarea>\r\n  </div>\r\n</div>\r\n\r\n-->\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" ></label>  \r\n  <div class=\"col-md-4\">\r\n  <a href=\"#\" class=\"btn btn-success\"><span class=\"glyphicon glyphicon-thumbs-up\"></span> Sacuvaj</a>\r\n  <a href=\"#\" class=\"btn btn-danger\" value=\"\"><span class=\"glyphicon glyphicon-remove-sign\"></span> Odustani</a>\r\n    \r\n  </div>\r\n</div>\r\n\r\n</fieldset>\r\n</form>\r\n</div>\r\n<div class=\"col-md-2 hidden-xs\">\r\n<img src=\"http://websamplenow.com/30/userprofile/images/avatar.jpg\" class=\"img-responsive img-thumbnail \">\r\n  </div>\r\n\r\n\r\n</div>\r\n   </div>\r\n    <!-- jQuery Version 1.11.1 -->\r\n    <script src=\"js/jquery.js\"></script>\r\n\r\n    <!-- Bootstrap Core JavaScript -->\r\n    <script src=\"js/bootstrap.min.js\"></script>\r\n\r\n    \r\n\r\n</body>\r\n\r\n</html>"

/***/ }),

/***/ "../../../../../src/app/profil/profil.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_profil_profil_service__ = __webpack_require__("../../../../../src/app/profil/profil.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilComponent = (function () {
    function ProfilComponent(http, tableService) {
        this.http = http;
        this.tableService = tableService;
        this.products = [
            {
                "productId": 2,
                "productName": "Garden Cart"
            }
        ];
        this.DataArray = [];
    }
    /*  sendForFind(find:string) {
      console.log(find);
  
      this.http.get('http://localhost:8000/getclient/' + find)
              .subscribe(data => {
                  this.getResult = data['_body'];
                  console.log(data['_body']);
                });
  
  
    }*/
    ProfilComponent.prototype.sendForFind = function (find) {
        var _this = this;
        console.log(find);
        this.tableService.sendForFind(find).subscribe(function (data) {
            _this.DataArray = data;
            console.log(data);
        });
    };
    ProfilComponent.prototype.loadTableData = function () {
        var _this = this;
        this.tableService.loadTableData().subscribe(function (data) {
            _this.DataArray = data;
            console.log(data);
        });
    };
    ProfilComponent.prototype.onNameClick = function (find) {
        var _this = this;
        this.tableService.onNameClick(find).subscribe(function (data) {
            _this.DataArray = data;
            console.log(data);
        });
    };
    ProfilComponent.prototype.ngOnInit = function () { };
    ProfilComponent.prototype.sendGetRequest = function () {
        console.log("SEND");
    };
    return ProfilComponent;
}());
ProfilComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-table',
        template: __webpack_require__("../../../../../src/app/profil/profil.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2_app_profil_profil_service__["a" /* ProfilService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_profil_profil_service__["a" /* ProfilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_profil_profil_service__["a" /* ProfilService */]) === "function" && _b || Object])
], ProfilComponent);

var _a, _b;
//# sourceMappingURL=profil.component.js.map

/***/ }),

/***/ "../../../../../src/app/profil/profil.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilService = (function () {
    function ProfilService(http) {
        this.http = http;
    }
    ProfilService.prototype.loadTableData = function () {
        console.log("Usao u service, saljemo get requst! ");
        return this.http.get('http://localhost:8000/getAll')
            .map(function (res) { return res.json(); });
    };
    ProfilService.prototype.sendForFind = function (find) {
        console.log(find);
        console.log("Usao u service, saljemo get requst! ");
        return this.http.get('http://localhost:8000/getclient/' + find)
            .map(function (res) { return res.json(); });
    };
    ProfilService.prototype.onNameClick = function (find) {
        console.log("Kliknuo si na ime");
        return this.http.get('http://localhost:8000/getclient/' + find)
            .map(function (res) { return res.json(); });
    };
    return ProfilService;
}());
ProfilService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ProfilService);

var _a;
//# sourceMappingURL=profil.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map