require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ 128:
/***/ (function(module, exports) {

module.exports = require("~/package.json");

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(149)(false);
// Imports
exports.i(__webpack_require__(272), "");

// Module
exports.push([module.i, "/*\nIn NativeScript, the app.css file is where you place CSS rules that\nyou would like to apply to your entire application. Check out\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\nselectors and properties you can use to style UI components.\n\n/*\nIn many cases you may want to use the NativeScript core theme instead\nof writing your own CSS rules. For a full list of class names in the theme\nrefer to http://docs.nativescript.org/ui/theme.\n*/\n", ""]);

;
    if (false) {}


/***/ }),

/***/ 200:
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
webpackEmptyAsyncContext.id = 200;

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@angular/core/fesm5/core.js
var core = __webpack_require__(1);

// EXTERNAL MODULE: ../node_modules/nativescript-angular/nativescript.module.js
var nativescript_module = __webpack_require__(217);

// EXTERNAL MODULE: ../node_modules/nativescript-angular/router/index.js
var router = __webpack_require__(123);

// EXTERNAL MODULE: ../node_modules/tns-core-modules/ui/page/page.js
var page = __webpack_require__(38);

// CONCATENATED MODULE: ./app/home/home.component.ts


var home_component_HomeComponent = /** @class */ (function () {
    function HomeComponent(page) {
        page.actionBarHidden = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.log('home start');
    };
    HomeComponent.ctorParameters = function () { return [
        { type: page["Page"] }
    ]; };
    HomeComponent = __decorate([
        Object(core["Component"])({
            selector: 'app-home',
            template: __webpack_require__(291),
            styles: [__webpack_require__(292)]
        }),
        __metadata("design:paramtypes", [page["Page"]])
    ], HomeComponent);
    return HomeComponent;
}());


// CONCATENATED MODULE: ./app/form/form.component.ts

var form_component_FormComponent = /** @class */ (function () {
    function FormComponent() {
    }
    FormComponent.prototype.ngOnInit = function () {
        console.log('form');
    };
    FormComponent = __decorate([
        Object(core["Component"])({
            selector: 'ns-form',
            template: __webpack_require__(293),
            styles: [__webpack_require__(294)]
        }),
        __metadata("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());


// CONCATENATED MODULE: ./app/app-routing.module.ts




var routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: home_component_HomeComponent },
    { path: "home/form", component: form_component_FormComponent }
];
var app_routing_module_AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(core["NgModule"])({
            imports: [router["NativeScriptRouterModule"].forRoot(routes)],
            exports: [router["NativeScriptRouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());


// CONCATENATED MODULE: ./app/app.component.ts

var app_component_AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(core["Component"])({
            selector: "ns-app",
            template: __webpack_require__(295)
        })
    ], AppComponent);
    return AppComponent;
}());


// CONCATENATED MODULE: ./app/app.module.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return app_module_AppModule; });




// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";


var app_module_AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        Object(core["NgModule"])({
            bootstrap: [
                app_component_AppComponent
            ],
            imports: [
                nativescript_module["NativeScriptModule"],
                app_routing_module_AppRoutingModule,
            ],
            declarations: [
                app_component_AppComponent,
                home_component_HomeComponent,
                form_component_FormComponent
            ],
            providers: [],
            schemas: [
                core["NO_ERRORS_SCHEMA"]
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(216);
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(219);

        let applicationCheckPlatform = __webpack_require__(12);
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__(16);
__webpack_require__(269);
        }

        
            __webpack_require__(270)();
            
            
        if (false) {}
        
            
        __webpack_require__(273);
        // this import should be first in order to load some required settings (like globals and reflect-metadata)


// A traditional NativeScript application starts by initializing global objects,
// setting up global CSS rules, creating, and navigating to the main page.
// Angular applications need to take care of their own initialization:
// modules, components, directives, routes, DI providers.
// A NativeScript Angular app needs to make both paradigms work together,
// so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.
Object(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__[/* AppModule */ "a"]);

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),

/***/ 291:
/***/ (function(module, exports) {

module.exports = "<GridLayout class=\"body\">\n  <StackLayout class=\"home-panel\">\n      <StackLayout   class=\"m-15\" backgroundColor=\"lightgray\">\n        <Image src=\"~/images/logonbr.png\" class=\"fas t-36\"></Image>\n    </StackLayout>  \n    <Label text=\"Contactez nous !\" class=\"button\" [nsRouterLink]=\"['form']\"></Label>\n       <!-- <Button text=\"Contactez nous !\" class=\"button\" [nsRouterLink]=\"['form']\"></Button> -->\n  </StackLayout>\n</GridLayout>        "

/***/ }),

/***/ 292:
/***/ (function(module, exports) {

module.exports = ".home-panel{\r\n    vertical-align: center; \r\n    font-size: 20;\r\n    margin: 15;\r\n}\r\n\r\n.description-label{\r\n    margin-bottom: 15;\r\n}\r\n\r\n.body{\r\n    background-color:#4a2343;\r\n}\r\n\r\n.button{\r\n    padding:10;\r\n    padding-left: 100%;\r\n    margin-top: 100;\r\n    background-color:#592a51;\r\n    color:white;\r\n}"

/***/ }),

/***/ 293:
/***/ (function(module, exports) {

module.exports = "\n    <StackLayout class=\"body\">\n      <WebView\n          src=\"https://docs.google.com/forms/d/e/1FAIpQLSeim15ga8SGwnBRV_BmXK1y4XpnFF_K1mhYrpul2x9CimghoA/viewform?usp=sf_link\">\n      </WebView>\n  </StackLayout>\n"

/***/ }),

/***/ 294:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 295:
/***/ (function(module, exports) {

module.exports = "<!-- https://docs.nativescript.org/angular/core-concepts/angular-navigation.html#page-router-outlet -->\n<GridLayout>\n<page-router-outlet></page-router-outlet>\n</GridLayout> "

/***/ })

},[[220,1,2]]]);