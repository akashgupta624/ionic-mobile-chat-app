"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[5515],{

/***/ 75515:
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/status-tap-20472ffa.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startStatusTap": () => (/* binding */ startStatusTap)
/* harmony export */ });
/* harmony import */ var _Users_akagupta20_Projects_ionic_whatsapp_clone_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-8e692445.js */ 91559);
/* harmony import */ var _index_5d0c8232_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-5d0c8232.js */ 33081);
/* harmony import */ var _helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-3b390e48.js */ 29259);
/* harmony import */ var _index_c4b11676_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-c4b11676.js */ 99273);


/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */





const startStatusTap = () => {
  const win = window;
  win.addEventListener('statusTap', () => {
    (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.f)(() => {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const el = document.elementFromPoint(width / 2, height / 2);

      if (!el) {
        return;
      }

      const contentEl = (0,_index_5d0c8232_js__WEBPACK_IMPORTED_MODULE_2__.f)(el);

      if (contentEl) {
        new Promise(resolve => (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_3__.c)(contentEl, resolve)).then(() => {
          (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.c)( /*#__PURE__*/(0,_Users_akagupta20_Projects_ionic_whatsapp_clone_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            /**
             * If scrolling and user taps status bar,
             * only calling scrollToTop is not enough
             * as engines like WebKit will jump the
             * scroll position back down and complete
             * any in-progress momentum scrolling.
             */
            contentEl.style.setProperty('--overflow', 'hidden');
            yield (0,_index_5d0c8232_js__WEBPACK_IMPORTED_MODULE_2__.s)(contentEl, 300);
            contentEl.style.removeProperty('--overflow');
          }));
        });
      }
    });
  });
};



/***/ })

}]);
//# sourceMappingURL=5515.js.map