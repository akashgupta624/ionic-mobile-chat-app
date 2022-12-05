"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[5607],{

/***/ 54171:
/*!****************************************************!*\
  !*** ./src/app/tabs/chats/chats-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatsPageRoutingModule": () => (/* binding */ ChatsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _chats_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chats.page */ 11115);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{
  path: '',
  component: _chats_page__WEBPACK_IMPORTED_MODULE_0__.ChatsPage
}];
let ChatsPageRoutingModule = /*#__PURE__*/(() => {
  class ChatsPageRoutingModule {}

  ChatsPageRoutingModule.ɵfac = function ChatsPageRoutingModule_Factory(t) {
    return new (t || ChatsPageRoutingModule)();
  };

  ChatsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ChatsPageRoutingModule
  });
  ChatsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
  return ChatsPageRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ChatsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 55607:
/*!********************************************!*\
  !*** ./src/app/tabs/chats/chats.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatsPageModule": () => (/* binding */ ChatsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _chats_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chats-routing.module */ 54171);
/* harmony import */ var _chats_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chats.page */ 11115);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






let ChatsPageModule = /*#__PURE__*/(() => {
  class ChatsPageModule {}

  ChatsPageModule.ɵfac = function ChatsPageModule_Factory(t) {
    return new (t || ChatsPageModule)();
  };

  ChatsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: ChatsPageModule
  });
  ChatsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _chats_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatsPageRoutingModule]
  });
  return ChatsPageModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ChatsPageModule, {
    declarations: [_chats_page__WEBPACK_IMPORTED_MODULE_1__.ChatsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _chats_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatsPageRoutingModule]
  });
})();

/***/ }),

/***/ 11115:
/*!******************************************!*\
  !*** ./src/app/tabs/chats/chats.page.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatsPage": () => (/* binding */ ChatsPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_platform_platform_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/platform/platform.service */ 43475);
/* harmony import */ var _services_faker_faker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/faker/faker.service */ 18186);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);







function ChatsPage_ion_toolbar_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-searchbar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function ChatsPage_ion_header_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 7)(1, "ion-toolbar")(2, "ion-title", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Chats");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ion-searchbar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}

const _c0 = function (a1) {
  return ["/chat-detail", a1];
};

function ChatsPage_ion_item_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 9)(1, "ion-avatar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "small", 12)(6, "ion-text", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "17.10.2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p")(9, "ion-text", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const chat_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, chat_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", chat_r3.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", chat_r3.first_name, " ", chat_r3.last_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", chat_r3.last_message, " ");
  }
}

let ChatsPage = /*#__PURE__*/(() => {
  class ChatsPage {
    constructor(platformService, fakerService) {
      this.platformService = platformService;
      this.fakerService = fakerService;
      this.chatsList = [];
    }

    dataInit() {
      this.fakerService.getFaker().then(faker => {
        this.chatsList = Array.apply(null, Array(25)).map(() => {
          const gender = faker.random.arrayElements([1, 0])[0];
          return {
            id: faker.random.uuid(),
            first_name: faker.name.firstName(gender),
            last_name: faker.name.lastName(gender),
            email: faker.internet.email(),
            avatar: faker.internet.avatar(),
            last_message: faker.lorem.sentence()
          };
        });
      });
    }

    ngOnInit() {
      this.dataInit();
    }

  }

  ChatsPage.ɵfac = function ChatsPage_Factory(t) {
    return new (t || ChatsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_platform_platform_service__WEBPACK_IMPORTED_MODULE_0__.PlatformService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_faker_faker_service__WEBPACK_IMPORTED_MODULE_1__.FakerService));
  };

  ChatsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ChatsPage,
    selectors: [["app-chats"]],
    decls: 15,
    vars: 3,
    consts: [["slot", "start"], ["slot", "end"], ["slot", "icon-only", "name", "create-outline"], [4, "ngIf"], ["collapse", "condense", 4, "ngIf"], ["button", "", "detail", "false", "routerdirection", "forward", 3, "routerLink", 4, "ngFor", "ngForOf"], ["placeholder", "Search"], ["collapse", "condense"], ["size", "large"], ["button", "", "detail", "false", "routerdirection", "forward", 3, "routerLink"], ["slot", "start", 2, "width", "52px", "height", "52px"], [3, "src"], [1, "ion-float-right"], ["color", "medium"]],
    template: function ChatsPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0)(3, "ion-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Change ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Chats");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-buttons", 1)(8, "ion-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "ion-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ChatsPage_ion_toolbar_10_Template, 2, 0, "ion-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ChatsPage_ion_header_12_Template, 6, 0, "ion-header", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ChatsPage_ion_item_14_Template, 13, 7, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.platformService.isAndroid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.platformService.isIOS);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.chatsList);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0cy5wYWdlLnNjc3MifQ== */"]
  });
  return ChatsPage;
})();

/***/ })

}]);
//# sourceMappingURL=5607.js.map