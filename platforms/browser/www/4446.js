"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[4446],{

/***/ 54446:
/*!*******************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-picker-column-internal.entry.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ion_picker_column_internal": () => (/* binding */ PickerColumnInternal)
/* harmony export */ });
/* harmony import */ var _Users_akagupta20_Desktop_Project_ionic_mobile_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-8e692445.js */ 91559);
/* harmony import */ var _ionic_global_c95cf239_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ionic-global-c95cf239.js */ 58607);
/* harmony import */ var _helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-3b390e48.js */ 29259);
/* harmony import */ var _haptic_683b3b3c_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./haptic-683b3b3c.js */ 70634);
/* harmony import */ var _theme_7670341c_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme-7670341c.js */ 50320);


/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */





const pickerColumnInternalIosCss = ":host{padding-left:16px;padding-right:16px;padding-top:0px;padding-bottom:0px;height:200px;outline:none;font-size:22px;-webkit-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;overflow-x:hidden;overflow-y:scroll;scrollbar-width:none;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host::-webkit-scrollbar{display:none}:host .picker-item{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden;scroll-snap-align:center}:host .picker-item-empty,:host .picker-item.picker-item-disabled{scroll-snap-align:none;cursor:default}:host .picker-item.picker-item-disabled{opacity:0.4}:host(.picker-column-active) .picker-item.picker-item-active{color:var(--ion-color-base)}@media (any-hover: hover){:host(:focus){outline:none;background:rgba(var(--ion-color-base-rgb), 0.2)}}";
const pickerColumnInternalMdCss = ":host{padding-left:16px;padding-right:16px;padding-top:0px;padding-bottom:0px;height:200px;outline:none;font-size:22px;-webkit-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;overflow-x:hidden;overflow-y:scroll;scrollbar-width:none;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host::-webkit-scrollbar{display:none}:host .picker-item{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden;scroll-snap-align:center}:host .picker-item-empty,:host .picker-item.picker-item-disabled{scroll-snap-align:none;cursor:default}:host .picker-item.picker-item-disabled{opacity:0.4}:host(.picker-column-active) .picker-item.picker-item-active{color:var(--ion-color-base)}@media (any-hover: hover){:host(:focus){outline:none;background:rgba(var(--ion-color-base-rgb), 0.2)}}:host .picker-item-active{color:var(--ion-color-base)}";
const PickerColumnInternal = class {
  constructor(hostRef) {
    (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.ionChange = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionChange", 7);
    this.isScrolling = false;
    this.isColumnVisible = false;
    this.isActive = false;
    /**
     * A list of options to be displayed in the picker
     */

    this.items = [];
    /**
     * The color to use from your application's color palette.
     * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
     * For more information on colors, see [theming](/docs/theming/basics).
     */

    this.color = 'primary';
    /**
     * If `true`, tapping the picker will
     * reveal a number input keyboard that lets
     * the user type in values for each picker
     * column. This is useful when working
     * with time pickers.
     *
     * @internal
     */

    this.numericInput = false;

    this.centerPickerItemInView = (target, smooth = true) => {
      const {
        el,
        isColumnVisible
      } = this;

      if (isColumnVisible) {
        // (Vertical offset from parent) - (three empty picker rows) + (half the height of the target to ensure the scroll triggers)
        const top = target.offsetTop - 3 * target.clientHeight + target.clientHeight / 2;

        if (el.scrollTop !== top) {
          el.scroll({
            top,
            left: 0,
            behavior: smooth ? 'smooth' : undefined
          });
        }
      }
    };
    /**
     * When ionInputModeChange is emitted, each column
     * needs to check if it is the one being made available
     * for text entry.
     */


    this.inputModeChange = ev => {
      if (!this.numericInput) {
        return;
      }

      const {
        useInputMode,
        inputModeColumn
      } = ev.detail;
      /**
       * If inputModeColumn is undefined then this means
       * all numericInput columns are being selected.
       */

      const isColumnActive = inputModeColumn === undefined || inputModeColumn === this.el;

      if (!useInputMode || !isColumnActive) {
        this.setInputModeActive(false);
        return;
      }

      this.setInputModeActive(true);
    };
    /**
     * Setting isActive will cause a re-render.
     * As a result, we do not want to cause the
     * re-render mid scroll as this will cause
     * the picker column to jump back to
     * whatever value was selected at the
     * start of the scroll interaction.
     */


    this.setInputModeActive = state => {
      if (this.isScrolling) {
        this.scrollEndCallback = () => {
          this.isActive = state;
        };

        return;
      }

      this.isActive = state;
    };
    /**
     * When the column scrolls, the component
     * needs to determine which item is centered
     * in the view and will emit an ionChange with
     * the item object.
     */


    this.initializeScrollListener = () => {
      const {
        el
      } = this;
      let timeout;
      let activeEl = this.activeItem;

      const scrollCallback = () => {
        (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_3__.r)(() => {
          if (timeout) {
            clearTimeout(timeout);
            timeout = undefined;
          }

          if (!this.isScrolling) {
            (0,_haptic_683b3b3c_js__WEBPACK_IMPORTED_MODULE_4__.a)();
            this.isScrolling = true;
          }
          /**
           * Select item in the center of the column
           * which is the month/year that we want to select
           */


          const bbox = el.getBoundingClientRect();
          const centerX = bbox.x + bbox.width / 2;
          const centerY = bbox.y + bbox.height / 2;
          const activeElement = el.shadowRoot.elementFromPoint(centerX, centerY);

          if (activeEl !== null) {
            activeEl.classList.remove(PICKER_COL_ACTIVE);
          }

          if (activeElement.disabled) {
            return;
          }
          /**
           * If we are selecting a new value,
           * we need to run haptics again.
           */


          if (activeElement !== activeEl) {
            (0,_haptic_683b3b3c_js__WEBPACK_IMPORTED_MODULE_4__.b)();
          }

          activeEl = activeElement;
          activeElement.classList.add(PICKER_COL_ACTIVE);
          timeout = setTimeout(() => {
            this.isScrolling = false;
            (0,_haptic_683b3b3c_js__WEBPACK_IMPORTED_MODULE_4__.h)();
            /**
             * Certain tasks (such as those that
             * cause re-renders) should only be done
             * once scrolling has finished, otherwise
             * flickering may occur.
             */

            const {
              scrollEndCallback
            } = this;

            if (scrollEndCallback) {
              scrollEndCallback();
              this.scrollEndCallback = undefined;
            }

            const dataIndex = activeElement.getAttribute('data-index');
            /**
             * If no value it is
             * possible we hit one of the
             * empty padding columns.
             */

            if (dataIndex === null) {
              return;
            }

            const index = parseInt(dataIndex, 10);
            const selectedItem = this.items[index];

            if (selectedItem.value !== this.value) {
              this.setValue(selectedItem.value);
            }
          }, 250);
        });
      };
      /**
       * Wrap this in an raf so that the scroll callback
       * does not fire when component is initially shown.
       */


      (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_3__.r)(() => {
        el.addEventListener('scroll', scrollCallback);

        this.destroyScrollListener = () => {
          el.removeEventListener('scroll', scrollCallback);
        };
      });
    };
  }

  itemsChange(currentItems, previousItems) {
    const {
      value
    } = this;
    /**
     * When the items change, it is possible for the item
     * that was selected to no longer exist. In that case, we need
     * to automatically select the nearest item. If we do not,
     * then the scroll position will be reset to zero and it will
     * look like the first item was automatically selected.
     *
     * If we cannot find a closest item then we do nothing, and
     * the browser will reset the scroll position to 0.
     */

    const findCurrentItem = currentItems.find(item => item.value === value);

    if (!findCurrentItem) {
      /**
       * The default behavior is to assume
       * that the new set of data is similar to the old
       * set of data, just with some items filtered out.
       * We walk backwards through the data to find the
       * closest enabled picker item and select it.
       *
       * Developers can also swap the items out for an entirely
       * new set of data. In that case, the value we select
       * here likely will not make much sense. For this use case,
       * developers should update the `value` prop themselves
       * when swapping out the data.
       */
      const findPreviousItemIndex = previousItems.findIndex(item => item.value === value);

      if (findPreviousItemIndex === -1) {
        return;
      }
      /**
       * Step through the current items backwards
       * until we find a neighbor we can select.
       * We start at the last known location of the
       * current selected item in order to
       * account for data that has been added. This
       * search prioritizes stability in that it
       * tries to keep the scroll position as close
       * to where it was before the update.
       * Before Items: ['a', 'b', 'c'], Selected Value: 'b'
       * After Items:  ['a', 'dog', 'c']
       * Even though 'dog' is a different item than 'b',
       * it is the closest item we can select while
       * preserving the scroll position.
       */


      let nearestItem;

      for (let i = findPreviousItemIndex; i >= 0; i--) {
        const item = currentItems[i];

        if (item !== undefined && item.disabled !== true) {
          nearestItem = item;
          break;
        }
      }

      if (nearestItem) {
        this.setValue(nearestItem.value);
        return;
      }
    }
  }

  valueChange() {
    if (this.isColumnVisible) {
      /**
       * Only scroll the active item into view when the picker column
       * is actively visible to the user.
       */
      this.scrollActiveItemIntoView();
    }
  }
  /**
   * Only setup scroll listeners
   * when the picker is visible, otherwise
   * the container will have a scroll
   * height of 0px.
   */


  componentWillLoad() {
    const visibleCallback = entries => {
      var _a;

      const ev = entries[0];

      if (ev.isIntersecting) {
        this.isColumnVisible = true;
        /**
         * Because this initial call to scrollActiveItemIntoView has to fire before
         * the scroll listener is set up, we need to manage the active class manually.
         */

        const oldActive = (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_3__.g)(this.el).querySelector(`.${PICKER_COL_ACTIVE}`);
        oldActive === null || oldActive === void 0 ? void 0 : oldActive.classList.remove(PICKER_COL_ACTIVE);
        this.scrollActiveItemIntoView();
        (_a = this.activeItem) === null || _a === void 0 ? void 0 : _a.classList.add(PICKER_COL_ACTIVE);
        this.initializeScrollListener();
      } else {
        this.isColumnVisible = false;

        if (this.destroyScrollListener) {
          this.destroyScrollListener();
          this.destroyScrollListener = undefined;
        }
      }
    };

    new IntersectionObserver(visibleCallback, {
      threshold: 0.001
    }).observe(this.el);
    const parentEl = this.el.closest('ion-picker-internal');

    if (parentEl !== null) {
      parentEl.addEventListener('ionInputModeChange', ev => this.inputModeChange(ev));
    }
  }

  componentDidRender() {
    var _a;

    const {
      activeItem,
      items,
      isColumnVisible,
      value
    } = this;

    if (isColumnVisible) {
      if (activeItem) {
        this.scrollActiveItemIntoView();
      } else if (((_a = items[0]) === null || _a === void 0 ? void 0 : _a.value) !== value) {
        /**
         * If the picker column does not have an active item and the current value
         * does not match the first item in the picker column, that means
         * the value is out of bounds. In this case, we assign the value to the
         * first item to match the scroll position of the column.
         *
         */
        this.setValue(items[0].value);
      }
    }
  }
  /** @internal  */


  scrollActiveItemIntoView() {
    var _this = this;

    return (0,_Users_akagupta20_Desktop_Project_ionic_mobile_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const activeEl = _this.activeItem;

      if (activeEl) {
        _this.centerPickerItemInView(activeEl, false);
      }
    })();
  }
  /**
   * Sets the value prop and fires the ionChange event.
   * This is used when we need to fire ionChange from
   * user-generated events that cannot be caught with normal
   * input/change event listeners.
   * @internal
   */


  setValue(value) {
    var _this2 = this;

    return (0,_Users_akagupta20_Desktop_Project_ionic_mobile_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        items
      } = _this2;
      _this2.value = value;
      const findItem = items.find(item => item.value === value && item.disabled !== true);

      if (findItem) {
        _this2.ionChange.emit(findItem);
      }
    })();
  }

  get activeItem() {
    return (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_3__.g)(this.el).querySelector(`.picker-item[data-value="${this.value}"]:not([disabled])`);
  }

  render() {
    const {
      items,
      color,
      isActive,
      numericInput
    } = this;
    const mode = (0,_ionic_global_c95cf239_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.H, {
      tabindex: 0,
      class: (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_5__.c)(color, {
        [mode]: true,
        ['picker-column-active']: isActive,
        ['picker-column-numeric-input']: numericInput
      })
    }, (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "picker-item picker-item-empty"
    }, "\u00A0"), (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "picker-item picker-item-empty"
    }, "\u00A0"), (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "picker-item picker-item-empty"
    }, "\u00A0"), items.map((item, index) => {
      return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", {
        tabindex: "-1",
        class: {
          'picker-item': true,
          'picker-item-disabled': item.disabled || false
        },
        "data-value": item.value,
        "data-index": index,
        onClick: ev => {
          this.centerPickerItemInView(ev.target);
        },
        disabled: item.disabled
      }, item.text);
    }), (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "picker-item picker-item-empty"
    }, "\u00A0"), (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "picker-item picker-item-empty"
    }, "\u00A0"), (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "picker-item picker-item-empty"
    }, "\u00A0"));
  }

  get el() {
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.i)(this);
  }

  static get watchers() {
    return {
      "items": ["itemsChange"],
      "value": ["valueChange"]
    };
  }

};
const PICKER_COL_ACTIVE = 'picker-item-active';
PickerColumnInternal.style = {
  ios: pickerColumnInternalIosCss,
  md: pickerColumnInternalMdCss
};


/***/ }),

/***/ 50320:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-7670341c.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createColorClasses),
/* harmony export */   "g": () => (/* binding */ getClassMap),
/* harmony export */   "h": () => (/* binding */ hostContext),
/* harmony export */   "o": () => (/* binding */ openURL)
/* harmony export */ });
/* harmony import */ var _Users_akagupta20_Desktop_Project_ionic_mobile_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);


/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */


const createColorClasses = (color, cssClassMap) => {
  return typeof color === 'string' && color.length > 0 ? Object.assign({
    'ion-color': true,
    [`ion-color-${color}`]: true
  }, cssClassMap) : cssClassMap;
};

const getClassList = classes => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array.filter(c => c != null).map(c => c.trim()).filter(c => c !== '');
  }

  return [];
};

const getClassMap = classes => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};

const SCHEME = /^[a-z][a-z0-9+\-.]*:/;

const openURL = /*#__PURE__*/function () {
  var _ref = (0,_Users_akagupta20_Desktop_Project_ionic_mobile_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (url, ev, direction, animation) {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
      const router = document.querySelector('ion-router');

      if (router) {
        if (ev != null) {
          ev.preventDefault();
        }

        return router.push(url, direction, animation);
      }
    }

    return false;
  });

  return function openURL(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();



/***/ })

}]);
//# sourceMappingURL=4446.js.map