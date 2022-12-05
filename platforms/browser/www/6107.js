"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[6107],{

/***/ 36877:
/*!*************************************************************!*\
  !*** ./src/app/screens/register/register-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 81992);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{
  path: '',
  component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
}];
let RegisterPageRoutingModule = /*#__PURE__*/(() => {
  class RegisterPageRoutingModule {}

  RegisterPageRoutingModule.ɵfac = function RegisterPageRoutingModule_Factory(t) {
    return new (t || RegisterPageRoutingModule)();
  };

  RegisterPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: RegisterPageRoutingModule
  });
  RegisterPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
  return RegisterPageRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RegisterPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 56107:
/*!*****************************************************!*\
  !*** ./src/app/screens/register/register.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 36877);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 81992);
/* harmony import */ var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/shared.module */ 16369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






let RegisterPageModule = /*#__PURE__*/(() => {
  class RegisterPageModule {}

  RegisterPageModule.ɵfac = function RegisterPageModule_Factory(t) {
    return new (t || RegisterPageModule)();
  };

  RegisterPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: RegisterPageModule
  });
  RegisterPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule, src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
  return RegisterPageModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](RegisterPageModule, {
    declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule, src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ }),

/***/ 81992:
/*!***************************************************!*\
  !*** ./src/app/screens/register/register.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var _services_message_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/message.modal */ 31219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_server_connect_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/server-connect.service */ 67286);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _components_input_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/input/input.component */ 95436);
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/button/button.component */ 99388);
/* harmony import */ var _components_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/icon-button/icon-button.component */ 99077);








let RegisterPage = /*#__PURE__*/(() => {
  class RegisterPage {
    constructor(dataService, router) {
      this.dataService = dataService;
      this.router = router;
      this.form = {
        name: '',
        phone: '',
        email: '',
        password: ''
      };
    }

    ngOnInit() {
      this.dataService.getData$('registerUser').subscribe(data => {
        if (data.result === 'Success') {
          this.router.navigate(['/tabs']);
        }
      });
    }

    onClick(data) {
      console.log("clicked register", this.form);
      let msg = new _services_message_modal__WEBPACK_IMPORTED_MODULE_0__.ServerMessage('set', 'registerUser', this.form);
      this.dataService.sendMessage(msg);
    }

  }

  RegisterPage.ɵfac = function RegisterPage_Factory(t) {
    return new (t || RegisterPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_server_connect_service__WEBPACK_IMPORTED_MODULE_1__.ServerConnect), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
  };

  RegisterPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: RegisterPage,
    selectors: [["app-register"]],
    decls: 16,
    vars: 13,
    consts: [[1, "ion-padding"], [3, "label", "id", "type", "inputText"], [3, "label", "type", "id", "inputText"], ["label", "Register", 3, "clickEvent"], ["icon", "logo-facebook", "label", "Connect with Facebook"], [1, "footer-text"], ["routerLink", "/login"]],
    template: function RegisterPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-content", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Create Account,");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Sign up to get started!");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "form")(6, "app-input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("inputText", function RegisterPage_Template_app_input_inputText_6_listener($event) {
          return ctx.form.name = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "app-input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("inputText", function RegisterPage_Template_app_input_inputText_7_listener($event) {
          return ctx.form.phone = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "app-input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("inputText", function RegisterPage_Template_app_input_inputText_8_listener($event) {
          return ctx.form.email = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "app-input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("inputText", function RegisterPage_Template_app_input_inputText_9_listener($event) {
          return ctx.form.password = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "app-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("clickEvent", function RegisterPage_Template_app_button_clickEvent_10_listener($event) {
          return ctx.onClick($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "app-icon-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "I'm already a member, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("label", "Full Name")("id", "name")("type", "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("label", "Phone Number")("id", "phone")("type", "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("label", "Email ID")("id", "email")("type", "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("label", "Password")("type", "password")("type", "password")("id", "password");
      }
    },
    dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHrefDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _components_input_input_component__WEBPACK_IMPORTED_MODULE_2__.InputComponent, _components_button_button_component__WEBPACK_IMPORTED_MODULE_3__.ButtonComponent, _components_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_4__.IconButtonComponent],
    styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin-top: 15%;\n  margin-bottom: 10px;\n  font-size: 32px;\n  font-weight: 700;\n}\n\nh3[_ngcontent-%COMP%] {\n  color: #939fab;\n  font-weight: 600;\n}\n\nform[_ngcontent-%COMP%] {\n  margin-top: 5rem;\n}\n\nform[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 3rem;\n}\n\n.footer-text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 17px;\n  margin-top: 15%;\n}\n\n.footer-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-weight: 600;\n  color: #fa578e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFDRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUVFO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFBSiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5oMSB7XG4gIG1hcmdpbi10b3A6IDE1JTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5oMyB7XG4gIGNvbG9yOiAjOTM5ZmFiO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5mb3JtIHtcbiAgbWFyZ2luLXRvcDogNXJlbTtcblxuICBhcHAtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICB9XG59XG5cbi5mb290ZXItdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXJnaW4tdG9wOiAxNSU7XG5cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICNmYTU3OGU7XG4gIH1cbn1cbiJdfQ== */"]
  });
  return RegisterPage;
})();

/***/ })

}]);
//# sourceMappingURL=6107.js.map