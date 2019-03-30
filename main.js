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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n  <div class=\"container\">\r\n    <div class=\"title text-center mt-3\">\r\n      <h1 class=\"\">Our e-commerce Store</h1>\r\n      <p>chooes one of our category below\r\n    </div>\r\n    <app-categories></app-categories>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n           <app-filters></app-filters>\r\n      </div>\r\n      <div class=\"col-md-8\">\r\n          <app-product></app-product>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Adf3ly';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _filters_filters_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filters/filters.component */ "./src/app/filters/filters.component.ts");
/* harmony import */ var _productfilter_productfilter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./productfilter/productfilter.component */ "./src/app/productfilter/productfilter.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _categories_categories_component__WEBPACK_IMPORTED_MODULE_7__["CategoriesComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"],
                _filters_filters_component__WEBPACK_IMPORTED_MODULE_9__["FiltersComponent"],
                _productfilter_productfilter_component__WEBPACK_IMPORTED_MODULE_10__["ProductfilterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/categories/categories.component.css":
/*!*****************************************************!*\
  !*** ./src/app/categories/categories.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/categories/categories.component.html":
/*!******************************************************!*\
  !*** ./src/app/categories/categories.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"categoires\">\n  <div class=\"row text-center\">\n    <div *ngFor=\"let category of categoires\" class=\"offset-md-1 col-md-2 offset-md-1\">\n      <img [src]=category.image alt={{category.name}}>\n      <h3 class=\"text-center\">{{category.name}}</h3>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(http) {
        this.http = http;
        this.url = 'http://test-api.edfa3ly.io/category';
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.url).subscribe(function (a) {
            _this.categoires = a;
            console.log('login' + a.login);
            console.log('bio' + a.bio);
            console.log('company' + a.company);
        }, function (err) { console.log('Error occured'); });
    };
    CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.css */ "./src/app/categories/categories.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/filters/filters.component.css":
/*!***********************************************!*\
  !*** ./src/app/filters/filters.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "fieldset{\r\n  border:1px solid #eee !important;\r\n\r\n}\r\n.clear{\r\n   cursor:  pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsdGVycy9maWx0ZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBZ0M7O0FBRWxDO0FBQ0E7R0FDRyxnQkFBZ0I7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9maWx0ZXJzL2ZpbHRlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZpZWxkc2V0e1xyXG4gIGJvcmRlcjoxcHggc29saWQgI2VlZSAhaW1wb3J0YW50O1xyXG5cclxufVxyXG4uY2xlYXJ7XHJcbiAgIGN1cnNvcjogIHBvaW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/filters/filters.component.html":
/*!************************************************!*\
  !*** ./src/app/filters/filters.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<fieldset>\n\n   <legend> filters</legend>\n   <div class=\"price__section flex-column\">\n     <p>Price Range</p>\n\n     <div>\n       <span>form ($)</span><span>to ($)</span>\n     </div>\n     <div class=\"price__line\">\n       <hr>\n     </div>\n   </div>\n\n\n   <div class=\"color__section flex-column\">\n     <form>\n       <p>Color</p>\n         <input (keyup.enter)=\"selectColor(color)\"\n          class=\"form-control\" #color type=\"text\" name=\"color\" placeholder=\"enter color\">\n         <div class=\"checkboxs\">\n           <div class=\"color\">\n             <input (click)=\"selectColor(color)\" type=\"checkbox\" name=\"red\" #color>\n             <span>red</span>\n          </div>\n          <div class=\"color\">\n             <input (click)=\"selectColor(color)\" type=\"checkbox\" name=\"green\" #color>\n             <span>green</span>\n         </div>\n         <div class=\"color\">\n             <input (click)=\"selectColor(color)\" type=\"checkbox\" name=\"yellow\" #color>\n             <span>yellow</span>\n         </div>\n         <div class=\"color\">\n             <input (click)=\"selectColor(color)\" type=\"checkbox\" name=\"balck\"  #color>\n             <span>balck</span>\n         </div>\n\n         </div>\n         <div (click)=\"remove()\" class=\"clear\">x clear</div>\n     </form>\n\n   </div>\n<div class=\"reating\">\n  <h2>Avarge Rating</h2>\n<span *ngFor=\"let i of counter(5)\" class=\"fa fa-star checked\"></span><br>\n<span *ngFor=\"let i of counter(4)\" class=\"fa fa-star checked\"></span>\n<span class=\"fa fa-star\"></span><br>\n<span *ngFor=\"let i of counter(3)\" class=\"fa fa-star checked\"></span>\n<span class=\"fa fa-star\"></span>\n<span class=\"fa fa-star\"></span><br>\n<span *ngFor=\"let i of counter(2)\" class=\"fa fa-star checked\"></span>\n<span class=\"fa fa-star\"></span>\n<span class=\"fa fa-star\"></span>\n<span class=\"fa fa-star\"></span><br>\n<span *ngFor=\"let i of counter(1)\" class=\"fa fa-star checked\"></span>\n<span class=\"fa fa-star\"></span>\n<span class=\"fa fa-star\"></span>\n<span class=\"fa fa-star\"></span>\n<span class=\"fa fa-star\"></span><br>\n</div>\n</fieldset>\n"

/***/ }),

/***/ "./src/app/filters/filters.component.ts":
/*!**********************************************!*\
  !*** ./src/app/filters/filters.component.ts ***!
  \**********************************************/
/*! exports provided: FiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersComponent", function() { return FiltersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var FiltersComponent = /** @class */ (function () {
    function FiltersComponent(http) {
        this.http = http;
        this.url = 'http://test-api.edfa3ly.io/product';
        this.colors = [];
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FiltersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.url).subscribe(function (a) {
            _this.products = a;
        });
    };
    FiltersComponent.prototype.counter = function (i) {
        return new Array(i);
    };
    FiltersComponent.prototype.selectColor = function (color) {
        this.colors.push(color.name);
        this.valueChange.emit(this.colors);
    };
    FiltersComponent.prototype.remove = function () {
        this.colors = [];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FiltersComponent.prototype, "valueChange", void 0);
    FiltersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filters',
            template: __webpack_require__(/*! ./filters.component.html */ "./src/app/filters/filters.component.html"),
            styles: [__webpack_require__(/*! ./filters.component.css */ "./src/app/filters/filters.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FiltersComponent);
    return FiltersComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg{\r\n  padding: 20px;\r\n}\r\n.image__block{\r\n   margin-bottom: 40px;\r\n  box-shadow: 7px -3px 20px #888888;\r\n  box-shadow: 4px 10px 5px #aaaaaa;\r\nborder: 1px solid #BFBFBF;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtHQUNHLG1CQUFtQjtFQUNwQixpQ0FBaUM7RUFDakMsZ0NBQWdDO0FBQ2xDLHlCQUF5QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJne1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLmltYWdlX19ibG9ja3tcclxuICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBib3gtc2hhZG93OiA3cHggLTNweCAyMHB4ICM4ODg4ODg7XHJcbiAgYm94LXNoYWRvdzogNHB4IDEwcHggNXB4ICNhYWFhYWE7XHJcbmJvcmRlcjogMXB4IHNvbGlkICNCRkJGQkY7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div *ngFor=\"let product of products| paginate: { itemsPerPage: 10, currentPage: p }\"\n   class=\"col-md-6 flex flex-column text-center image__block\">\n    <div class=\"bg flex-grow-1\">\n      <img class=\"flex-grow-1\" src=\"{{product.image}}\" alt=\"{{product.name}}\">\n    <p class=\"flex-grow-1\">{{product.name}}</p>\n     <span *ngFor='let e of counter(5 -product.rating )' class=\"fa fa-star\"></span>\n    <span *ngFor='let e of counter(product.rating)' class=\"fa fa-star checked\"></span>\n      <p class=\"flex-grow-1\">${{product.price}}</p>\n\n    </div>\n  </div>\n</div>\n <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ProductComponent = /** @class */ (function () {
    function ProductComponent(http) {
        this.http = http;
        this.url = 'http://test-api.edfa3ly.io/product';
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.url).subscribe(function (a) {
            _this.products = a;
        });
    };
    ProductComponent.prototype.counter = function (i) {
        return new Array(i);
    };
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/productfilter/productfilter.component.css":
/*!***********************************************************!*\
  !*** ./src/app/productfilter/productfilter.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RmaWx0ZXIvcHJvZHVjdGZpbHRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/productfilter/productfilter.component.html":
/*!************************************************************!*\
  !*** ./src/app/productfilter/productfilter.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div *ngFor=\"let product of products| paginate: { itemsPerPage: 10, currentPage: p }\"\n   class=\"col-md-6 flex flex-column text-center image__block\">\n    <div class=\"bg flex-grow-1\">\n      <img class=\"flex-grow-1\" src=\"{{product.image}}\" alt=\"{{product.name}}\">\n    <p class=\"flex-grow-1\">{{product.name}}</p>\n     <span *ngFor='let e of counter(5 -product.rating )' class=\"fa fa-star\"></span>\n    <span *ngFor='let e of counter(product.rating)' class=\"fa fa-star checked\"></span>\n      <p class=\"flex-grow-1\">${{product.price}}</p>\n\n    </div>\n  </div>\n</div>\n <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n"

/***/ }),

/***/ "./src/app/productfilter/productfilter.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/productfilter/productfilter.component.ts ***!
  \**********************************************************/
/*! exports provided: ProductfilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductfilterComponent", function() { return ProductfilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductfilterComponent = /** @class */ (function () {
    function ProductfilterComponent() {
    }
    ProductfilterComponent.prototype.ngOnInit = function () {
    };
    ProductfilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-productfilter',
            template: __webpack_require__(/*! ./productfilter.component.html */ "./src/app/productfilter/productfilter.component.html"),
            styles: [__webpack_require__(/*! ./productfilter.component.css */ "./src/app/productfilter/productfilter.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductfilterComponent);
    return ProductfilterComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\afaf\Adf3ly\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map