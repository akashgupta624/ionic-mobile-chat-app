"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[6157],{

/***/ 12039:
/*!*******************************************************!*\
  !*** ./src/app/screens/login/login-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 64805);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{
  path: '',
  component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
}];
let LoginPageRoutingModule = /*#__PURE__*/(() => {
  class LoginPageRoutingModule {}

  LoginPageRoutingModule.ɵfac = function LoginPageRoutingModule_Factory(t) {
    return new (t || LoginPageRoutingModule)();
  };

  LoginPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: LoginPageRoutingModule
  });
  LoginPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
  return LoginPageRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 26157:
/*!***********************************************!*\
  !*** ./src/app/screens/login/login.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 12039);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 64805);
/* harmony import */ var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/shared.module */ 16369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);







let LoginPageModule = /*#__PURE__*/(() => {
  class LoginPageModule {}

  LoginPageModule.ɵfac = function LoginPageModule_Factory(t) {
    return new (t || LoginPageModule)();
  };

  LoginPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: LoginPageModule
  });
  LoginPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule, src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
  return LoginPageModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LoginPageModule, {
    declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule, src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ }),

/***/ 64805:
/*!*********************************************!*\
  !*** ./src/app/screens/login/login.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _awesome_cordova_plugins_sms_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/sms/ngx */ 42617);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _components_input_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/input/input.component */ 95436);
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/button/button.component */ 99388);
/* harmony import */ var _components_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/icon-button/icon-button.component */ 99077);








let LoginPage = /*#__PURE__*/(() => {
  class LoginPage {
    constructor(sms, platform) {
      this.sms = sms;
      this.platform = platform;
    }

    ngOnInit() {
      this.platform.ready().then(() => {
        this.sms.send('8586906308', 'Hello world! ' + ' ' + 1234);
      });
    }

  }

  LoginPage.ɵfac = function LoginPage_Factory(t) {
    return new (t || LoginPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_awesome_cordova_plugins_sms_ngx__WEBPACK_IMPORTED_MODULE_0__.SMS), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform));
  };

  LoginPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: LoginPage,
    selectors: [["app-login"]],
    decls: 17,
    vars: 0,
    consts: [[1, "ion-padding"], ["label", "Phone Number"], ["label", "Email ID"], ["label", "Password", "type", "password"], ["routerLink", "#", 1, "forgot-password-link"], ["label", "Login"], ["icon", "logo-facebook", "label", "Connect with Facebook"], [1, "footer-text"], ["routerLink", "/register"]],
    template: function LoginPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-content", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Welcome,");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Sign in to continue!");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "app-input", 1)(7, "app-input", 2)(8, "app-input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "app-button", 5)(12, "app-icon-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "I'm a new user, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHrefDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _components_input_input_component__WEBPACK_IMPORTED_MODULE_1__.InputComponent, _components_button_button_component__WEBPACK_IMPORTED_MODULE_2__.ButtonComponent, _components_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_3__.IconButtonComponent],
    styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin-top: 15%;\n  margin-bottom: 10px;\n  font-size: 32px;\n  font-weight: 700;\n}\n\nh3[_ngcontent-%COMP%] {\n  color: #939fab;\n  font-weight: 600;\n}\n\nform[_ngcontent-%COMP%] {\n  margin-top: 5rem;\n}\n\nform[_ngcontent-%COMP%]   .forgot-password-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  display: inline-block;\n  width: 100%;\n  text-align: right;\n  font-weight: 600;\n  font-size: 14px;\n  color: #4a4a4a;\n}\n\nform[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 3rem;\n}\n\n.footer-text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 17px;\n  margin-top: 15%;\n}\n\n.footer-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-weight: 600;\n  color: #fa578e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFDRTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFERjs7QUFHRTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBREoiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuaDEge1xuICBtYXJnaW4tdG9wOiAxNSU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuaDMge1xuICBjb2xvcjogIzkzOWZhYjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuZm9ybSB7XG4gIG1hcmdpbi10b3A6IDVyZW07XG5cbiAgLmZvcmdvdC1wYXNzd29yZC1saW5rIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjNGE0YTRhO1xuICB9XG5cbiAgYXBwLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgfVxufVxuXG4uZm9vdGVyLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbWFyZ2luLXRvcDogMTUlO1xuXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjZmE1NzhlO1xuICB9XG59XG4iXX0= */"]
  });
  return LoginPage;
})();

/***/ })

}]);
//# sourceMappingURL=6157.js.map