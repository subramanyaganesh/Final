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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _health_health_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./health/health.component */ "./src/app/health/health.component.ts");
/* harmony import */ var _config_service_config_service_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config-service/config-service.component */ "./src/app/config-service/config-service.component.ts");





var routes = [
    {
        path: '',
        component: _config_service_config_service_component__WEBPACK_IMPORTED_MODULE_4__["ConfigServiceComponent"]
    },
    {
        path: 'health',
        component: _health_health_component__WEBPACK_IMPORTED_MODULE_3__["HealthComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<header>\n  <a routerLink=\"/\">Config</a>\n\n  <a routerLink=\"/health\">Health</a>\n</header>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  background: #293e40;\n  height: 4rem;\n  color: white;\n  padding: 1rem;\n  line-height: 3rem; }\n  header a {\n    padding: 1rem;\n    color: white;\n    text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdWJyYW1hbnlhLmdhbmVzaC9Eb2N1bWVudHMvUGFyZW50L3dlYi9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVFLG1CQUFtQjtFQUVuQixZQUFXO0VBQ1gsWUFBVztFQUNYLGFBQVk7RUFDWixpQkFBZ0IsRUFBQTtFQVBsQjtJQVVJLGFBQVk7SUFDWixZQUFXO0lBQ1gscUJBQW9CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmhlYWRlcntcblxuICBiYWNrZ3JvdW5kOiAjMjkzZTQwO1xuXG4gIGhlaWdodDo0cmVtO1xuICBjb2xvcjp3aGl0ZTtcbiAgcGFkZGluZzoxcmVtO1xuICBsaW5lLWhlaWdodDozcmVtO1xuXG4gIGF7XG4gICAgcGFkZGluZzoxcmVtO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICB9XG5cbn1cbiJdfQ== */"

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
        this.title = 'myapp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _health_health_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./health/health.component */ "./src/app/health/health.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_service_config_service_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config-service/config-service.component */ "./src/app/config-service/config-service.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _configform_configform_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./configform/configform.component */ "./src/app/configform/configform.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






// is what we write





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _health_health_component__WEBPACK_IMPORTED_MODULE_5__["HealthComponent"],
                _config_service_config_service_component__WEBPACK_IMPORTED_MODULE_7__["ConfigServiceComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"],
                _configform_configform_component__WEBPACK_IMPORTED_MODULE_9__["ConfigformComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card/card.component.html":
/*!******************************************!*\
  !*** ./src/app/card/card.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n\n  <h1>{{data.tag}}</h1>\n  <div> {{data.instance}}</div>\n  <div> {{data.username}}</div>\n  <div> {{data.id}}</div>\n  <!--  <pre>{{data|json}}</pre>-->\n  <hr>\n  <!--horizontal ruler-->\n\n  <Button (click)=\"showForm=!showForm\" class=\"button primary\">Edit</Button>\n\n  <Button (click)=\"deleteConfig(data.id)\" class=\"button danger\">Delete</Button>\n\n  <app-configform *ngIf=\"showForm\" [id]=\"data.id\" (reload)=\"handleUpdate()\"></app-configform>\n\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/card/card.component.scss":
/*!******************************************!*\
  !*** ./src/app/card/card.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  min-height: 10rem;\n  margin: 1rem;\n  padding: 1rem;\n  box-shadow: 2px 2px 12px gray; }\n\n.button {\n  margin: 3px;\n  border: none;\n  padding: .5rem;\n  outline: none;\n  color: white; }\n\n.button:hover {\n    box-shadow: 2px 2px 10px gray; }\n\n.danger {\n  background: firebrick; }\n\n.primary {\n  background: steelblue; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdWJyYW1hbnlhLmdhbmVzaC9Eb2N1bWVudHMvUGFyZW50L3dlYi9zcmMvYXBwL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlFLGlCQUFpQjtFQUVqQixZQUFZO0VBQ1osYUFBYTtFQUViLDZCQUFrQyxFQUFBOztBQUlwQztFQUVFLFdBQVU7RUFDVixZQUFZO0VBQ1osY0FBYztFQUNkLGFBQWE7RUFDYixZQUFZLEVBQUE7O0FBTmQ7SUFTSSw2QkFBa0MsRUFBQTs7QUFLdEM7RUFDRyxxQkFBcUIsRUFBQTs7QUFHeEI7RUFDRSxxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcblxuXG4gIC8vd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwcmVtO1xuXG4gIG1hcmdpbjogMXJlbTtcbiAgcGFkZGluZzogMXJlbTtcblxuICBib3gtc2hhZG93OiAycHggMnB4IDEycHggcmdiYShncmF5LCA0NSk7XG5cbn1cblxuLmJ1dHRvbiB7XG5cbiAgbWFyZ2luOjNweDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAuNXJlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICAmOmhvdmVye1xuXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IHJnYmEoZ3JheSw0NSk7XG4gIH1cblxufVxuXG4uZGFuZ2VyIHtcbiAgIGJhY2tncm91bmQ6IGZpcmVicmljaztcbiB9XG5cbi5wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogc3RlZWxibHVlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _httpclient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../httpclient.service */ "./src/app/httpclient.service.ts");



var CardComponent = /** @class */ (function () {
    function CardComponent(http) {
        this.http = http;
        this.reload = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showForm = false;
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent.prototype.deleteConfig = function (id) {
        var _this = this;
        this.http.deleteSNConfig(id).subscribe(function (data) {
            _this.reload.emit('');
        });
    };
    CardComponent.prototype.handleUpdate = function () {
        this.reload.emit('');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardComponent.prototype, "reload", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/card/card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_httpclient_service__WEBPACK_IMPORTED_MODULE_2__["HttpclientService"]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/config-service/config-service.component.html":
/*!**************************************************************!*\
  !*** ./src/app/config-service/config-service.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <!--<pre>{{config | json}}</pre>-->\n  <button class=\"add-config\" (click)=\"showForm=!showForm\">\n    Add new config\n  </button>\n  <app-configform *ngIf=\"showForm\" (reload)=\"handleRefresh()\"></app-configform>\n\n\n\n<!--  </div>-->\n  <div class=\"config\">\n    <div *ngFor=\"let cfg of config\">\n\n      <app-card [data]=\"cfg\" (reload)=\"handleRefresh()\"></app-card>\n\n\n    </div>\n\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/config-service/config-service.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/config-service/config-service.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-config {\n  padding: 1rem;\n  background: tomato;\n  width: 10rem;\n  margin: 10px;\n  color: white; }\n\n.config {\n  display: grid;\n  align-items: center;\n  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdWJyYW1hbnlhLmdhbmVzaC9Eb2N1bWVudHMvUGFyZW50L3dlYi9zcmMvYXBwL2NvbmZpZy1zZXJ2aWNlL2NvbmZpZy1zZXJ2aWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsYUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFXO0VBQ1gsWUFBVztFQUNYLFlBQVcsRUFBQTs7QUFHYjtFQUNFLGFBQVk7RUFDWixtQkFBbUI7RUFFbkIsMkRBQTJELEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb25maWctc2VydmljZS9jb25maWctc2VydmljZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtY29uZmlne1xuXG4gIHBhZGRpbmc6MXJlbTtcbiAgYmFja2dyb3VuZDogdG9tYXRvO1xuICB3aWR0aDoxMHJlbTtcbiAgbWFyZ2luOjEwcHg7XG4gIGNvbG9yOndoaXRlO1xufVxuXG4uY29uZmlne1xuICBkaXNwbGF5OmdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNDBweCwgMWZyKSk7XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/config-service/config-service.component.ts":
/*!************************************************************!*\
  !*** ./src/app/config-service/config-service.component.ts ***!
  \************************************************************/
/*! exports provided: ConfigServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigServiceComponent", function() { return ConfigServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _httpclient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../httpclient.service */ "./src/app/httpclient.service.ts");



var ConfigServiceComponent = /** @class */ (function () {
    function ConfigServiceComponent(http) {
        this.http = http;
        this.showForm = false;
    }
    ConfigServiceComponent.prototype.ngOnInit = function () {
        this.getConfig();
    };
    ConfigServiceComponent.prototype.getConfig = function () {
        var _this = this;
        this.http.getSNConfig().subscribe(function (data) {
            _this.config = data;
        });
    };
    ConfigServiceComponent.prototype.handleRefresh = function () {
        this.getConfig();
    };
    ConfigServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-config-service',
            template: __webpack_require__(/*! ./config-service.component.html */ "./src/app/config-service/config-service.component.html"),
            styles: [__webpack_require__(/*! ./config-service.component.scss */ "./src/app/config-service/config-service.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_httpclient_service__WEBPACK_IMPORTED_MODULE_2__["HttpclientService"]])
    ], ConfigServiceComponent);
    return ConfigServiceComponent;
}());



/***/ }),

/***/ "./src/app/configform/configform.component.html":
/*!******************************************************!*\
  !*** ./src/app/configform/configform.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n\n  <h1>Add Config</h1>\n<!--  <pre>{{data |json}}</pre>-->\n  <form  #configForminsert=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n<!--    # is called template variable -->\n\n    <div class=\"form-group\">\n      <label for=\"tag\">Tag</label>\n      <input type=\"text\" class=\"form-control\" id=\"tag\" required\n             [(ngModel)]=\"configFormData.tag\" name=\"instance\" >\n    </div>\n    <div class=\"form-group\">\n      <label for=\"instance\">Instance</label>\n      <input type=\"text\" class=\"form-control\" id=\"instance\" required\n             [(ngModel)]=\"configFormData.instance\"name=\"instance\" >\n    </div>\n    <div class=\"form-group\">\n      <label for=\"user\">User name</label>\n      <input type=\"text\" class=\"form-control\" id=\"User\" required\n             [(ngModel)]=\"configFormData.username\" name=\"instance\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"text\" class=\"form-control\" id=\"password\" required\n             [(ngModel)]=\"configFormData.password\"name=\"instance\">\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./src/app/configform/configform.component.scss":
/*!******************************************************!*\
  !*** ./src/app/configform/configform.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ2Zvcm0vY29uZmlnZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/configform/configform.component.ts":
/*!****************************************************!*\
  !*** ./src/app/configform/configform.component.ts ***!
  \****************************************************/
/*! exports provided: ConfigformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigformComponent", function() { return ConfigformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _httpclient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../httpclient.service */ "./src/app/httpclient.service.ts");



var ConfigformComponent = /** @class */ (function () {
    function ConfigformComponent(postman) {
        this.postman = postman;
        this.reload = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.configFormData = {
            instance: '',
            username: '',
            password: '',
            tag: '',
            id: null
        };
    }
    ConfigformComponent.prototype.ngOnInit = function () {
        if (this.id != null) {
            this.configFormData.id = this.id;
        }
    };
    ConfigformComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.id == null) {
            this.postman.insertSNConfig(this.configFormData).subscribe(function (resp) {
                _this.reload.emit();
            });
        }
        else {
            this.postman.updateSNConfig(this.id, this.configFormData).subscribe(function (resp) {
                _this.reload.emit();
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ConfigformComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ConfigformComponent.prototype, "reload", void 0);
    ConfigformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-configform',
            template: __webpack_require__(/*! ./configform.component.html */ "./src/app/configform/configform.component.html"),
            styles: [__webpack_require__(/*! ./configform.component.scss */ "./src/app/configform/configform.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_httpclient_service__WEBPACK_IMPORTED_MODULE_2__["HttpclientService"]])
    ], ConfigformComponent);
    return ConfigformComponent;
}());



/***/ }),

/***/ "./src/app/health/health.component.html":
/*!**********************************************!*\
  !*** ./src/app/health/health.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n\n  <div *ngFor=\"let h of health\" class=\"health\">\n\n         {{h.instance}} <br>  {{h.status}}<br> {{h.name}}<br>{{h.id}}\n      </div>\n\n<!--    <app-card-http>-->\n<!--      {{h.instance}} <br>  {{h.status}}<br> {{h.name}}<br>{{h.id}}-->\n<!--    </app-card-http>-->\n\n\n  </div>\n<!--</div>-->\n"

/***/ }),

/***/ "./src/app/health/health.component.scss":
/*!**********************************************!*\
  !*** ./src/app/health/health.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".health {\n  background: #293e40;\n  color: white;\n  min-height: 5rem;\n  margin: 3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdWJyYW1hbnlhLmdhbmVzaC9Eb2N1bWVudHMvUGFyZW50L3dlYi9zcmMvYXBwL2hlYWx0aC9oZWFsdGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxtQkFBbUI7RUFDbkIsWUFBVztFQUNYLGdCQUFlO0VBQ2YsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaGVhbHRoL2hlYWx0aC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFsdGh7XG5cbiAgYmFja2dyb3VuZDogIzI5M2U0MDtcbiAgY29sb3I6d2hpdGU7XG4gIG1pbi1oZWlnaHQ6NXJlbTtcbiAgbWFyZ2luOjNweCA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/health/health.component.ts":
/*!********************************************!*\
  !*** ./src/app/health/health.component.ts ***!
  \********************************************/
/*! exports provided: HealthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthComponent", function() { return HealthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _httpclient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../httpclient.service */ "./src/app/httpclient.service.ts");



var HealthComponent = /** @class */ (function () {
    function HealthComponent(postman) {
        this.postman = postman;
        this.health = null;
    }
    HealthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postman.getHealth().subscribe(function (resp) {
            _this.health = resp;
        });
    };
    HealthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-health',
            template: __webpack_require__(/*! ./health.component.html */ "./src/app/health/health.component.html"),
            styles: [__webpack_require__(/*! ./health.component.scss */ "./src/app/health/health.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_httpclient_service__WEBPACK_IMPORTED_MODULE_2__["HttpclientService"]])
    ], HealthComponent);
    return HealthComponent;
}());



/***/ }),

/***/ "./src/app/httpclient.service.ts":
/*!***************************************!*\
  !*** ./src/app/httpclient.service.ts ***!
  \***************************************/
/*! exports provided: HttpclientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpclientService", function() { return HttpclientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");




var HttpclientService = /** @class */ (function () {
    function HttpclientService(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    HttpclientService.prototype.getSNConfig = function () {
        return this.http.get(this.url + '/config');
    };
    HttpclientService.prototype.deleteSNConfig = function (id) {
        return this.http.delete(this.url + '/config/' + id);
    };
    HttpclientService.prototype.insertSNConfig = function (data) {
        return this.http.post(this.url + '/config', data);
    };
    HttpclientService.prototype.updateSNConfig = function (id, data) {
        return this.http.put(this.url + '/config/' + id, data);
    };
    HttpclientService.prototype.getHealth = function () {
        return this.http.get(this.url + '/instance-health');
    };
    HttpclientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpclientService);
    return HttpclientService;
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
    production: false,
    baseUrl: 'http://localhost:8080'
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

module.exports = __webpack_require__(/*! /Users/subramanya.ganesh/Documents/Parent/web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map