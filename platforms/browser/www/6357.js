"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[6357],{

/***/ 96357:
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ion_textarea": () => (/* binding */ Textarea)
/* harmony export */ });
/* harmony import */ var _Users_akagupta20_Projects_ionic_whatsapp_clone_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-8e692445.js */ 91559);
/* harmony import */ var _ionic_global_c95cf239_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ionic-global-c95cf239.js */ 58607);
/* harmony import */ var _helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-3b390e48.js */ 29259);
/* harmony import */ var _theme_7670341c_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-7670341c.js */ 50320);


/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */




const textareaIosCss = ".sc-ion-textarea-ios-h{--background:initial;--color:initial;--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:0.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--border-radius:0;display:block;position:relative;-ms-flex:1;flex:1;width:100%;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);white-space:pre-wrap;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-textarea-ios-h{background:initial}.ion-color.sc-ion-textarea-ios-h{color:var(--ion-color-base)}ion-item.sc-ion-textarea-ios-h,ion-item .sc-ion-textarea-ios-h{-ms-flex-item-align:baseline;align-self:baseline}ion-item.sc-ion-textarea-ios-h:not(.item-label),ion-item:not(.item-label) .sc-ion-textarea-ios-h{--padding-start:0}.textarea-wrapper.sc-ion-textarea-ios{display:grid;min-width:inherit;max-width:inherit;min-height:inherit;max-height:inherit}.textarea-wrapper.sc-ion-textarea-ios::after{white-space:pre-wrap;content:attr(data-replicated-value) \" \";visibility:hidden}.native-textarea.sc-ion-textarea-ios,.textarea-wrapper.sc-ion-textarea-ios::after{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;grid-area:1/1/2/2;word-break:break-word}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.native-textarea.sc-ion-textarea-ios,.textarea-wrapper.sc-ion-textarea-ios::after{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-textarea.sc-ion-textarea-ios{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;overflow:hidden}.native-textarea.sc-ion-textarea-ios::-webkit-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::-moz-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios:-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea[disabled].sc-ion-textarea-ios{opacity:0.4}.cloned-input.sc-ion-textarea-ios{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-textarea-ios .cloned-input.sc-ion-textarea-ios,[dir=rtl].sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios,[dir=rtl] .sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios{left:unset;right:unset;right:0}[auto-grow].sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios{height:100%}.item-label-floating.item-has-placeholder.sc-ion-textarea-ios-h:not(.item-has-value),.item-label-floating.item-has-placeholder:not(.item-has-value) .sc-ion-textarea-ios-h{opacity:0}.item-label-floating.item-has-placeholder.sc-ion-textarea-ios-h:not(.item-has-value).item-has-focus,.item-label-floating.item-has-placeholder:not(.item-has-value).item-has-focus .sc-ion-textarea-ios-h{-webkit-transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.sc-ion-textarea-ios-h{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:0;font-size:inherit}.item-label-stacked.sc-ion-textarea-ios-h,.item-label-stacked .sc-ion-textarea-ios-h,.item-label-floating.sc-ion-textarea-ios-h,.item-label-floating .sc-ion-textarea-ios-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0px}";
const textareaMdCss = ".sc-ion-textarea-md-h{--background:initial;--color:initial;--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:0.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--border-radius:0;display:block;position:relative;-ms-flex:1;flex:1;width:100%;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);white-space:pre-wrap;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-textarea-md-h{background:initial}.ion-color.sc-ion-textarea-md-h{color:var(--ion-color-base)}ion-item.sc-ion-textarea-md-h,ion-item .sc-ion-textarea-md-h{-ms-flex-item-align:baseline;align-self:baseline}ion-item.sc-ion-textarea-md-h:not(.item-label),ion-item:not(.item-label) .sc-ion-textarea-md-h{--padding-start:0}.textarea-wrapper.sc-ion-textarea-md{display:grid;min-width:inherit;max-width:inherit;min-height:inherit;max-height:inherit}.textarea-wrapper.sc-ion-textarea-md::after{white-space:pre-wrap;content:attr(data-replicated-value) \" \";visibility:hidden}.native-textarea.sc-ion-textarea-md,.textarea-wrapper.sc-ion-textarea-md::after{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;grid-area:1/1/2/2;word-break:break-word}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.native-textarea.sc-ion-textarea-md,.textarea-wrapper.sc-ion-textarea-md::after{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-textarea.sc-ion-textarea-md{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;overflow:hidden}.native-textarea.sc-ion-textarea-md::-webkit-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::-moz-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md:-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea[disabled].sc-ion-textarea-md{opacity:0.4}.cloned-input.sc-ion-textarea-md{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-textarea-md .cloned-input.sc-ion-textarea-md,[dir=rtl].sc-ion-textarea-md-h .cloned-input.sc-ion-textarea-md,[dir=rtl] .sc-ion-textarea-md-h .cloned-input.sc-ion-textarea-md{left:unset;right:unset;right:0}[auto-grow].sc-ion-textarea-md-h .cloned-input.sc-ion-textarea-md{height:100%}.item-label-floating.item-has-placeholder.sc-ion-textarea-md-h:not(.item-has-value),.item-label-floating.item-has-placeholder:not(.item-has-value) .sc-ion-textarea-md-h{opacity:0}.item-label-floating.item-has-placeholder.sc-ion-textarea-md-h:not(.item-has-value).item-has-focus,.item-label-floating.item-has-placeholder:not(.item-has-value).item-has-focus .sc-ion-textarea-md-h{-webkit-transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.sc-ion-textarea-md-h{--padding-top:10px;--padding-end:0;--padding-bottom:11px;--padding-start:8px;margin-left:0;margin-right:0;margin-top:8px;margin-bottom:0;font-size:inherit}.item-label-stacked.sc-ion-textarea-md-h,.item-label-stacked .sc-ion-textarea-md-h,.item-label-floating.sc-ion-textarea-md-h,.item-label-floating .sc-ion-textarea-md-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0}";
const Textarea = class {
  constructor(hostRef) {
    (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.ionChange = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionChange", 7);
    this.ionInput = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionInput", 7);
    this.ionStyle = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionStyle", 7);
    this.ionBlur = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionBlur", 7);
    this.ionFocus = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionFocus", 7);
    this.inputId = `ion-textarea-${textareaIds++}`;
    this.didBlurAfterEdit = false;
    this.inheritedAttributes = {};
    /**
     * This is required for a WebKit bug which requires us to
     * blur and focus an input to properly focus the input in
     * an item with delegatesFocus. It will no longer be needed
     * with iOS 14.
     *
     * @internal
     */

    this.fireFocusEvents = true;
    this.hasFocus = false;
    /**
     * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
     * Available options: `"off"`, `"none"`, `"on"`, `"sentences"`, `"words"`, `"characters"`.
     */

    this.autocapitalize = 'none';
    /**
     * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
     */

    this.autofocus = false;
    /**
     * If `true`, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.
     */

    this.clearOnEdit = false;
    /**
     * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke. This also impacts form bindings such as `ngModel` or `v-model`.
     */

    this.debounce = 0;
    /**
     * If `true`, the user cannot interact with the textarea.
     */

    this.disabled = false;
    /**
     * The name of the control, which is submitted with the form data.
     */

    this.name = this.inputId;
    /**
     * If `true`, the user cannot modify the value.
     */

    this.readonly = false;
    /**
     * If `true`, the user must fill in a value before submitting a form.
     */

    this.required = false;
    /**
     * If `true`, the element will have its spelling and grammar checked.
     */

    this.spellcheck = false;
    /**
     * If `true`, the textarea container will grow and shrink based
     * on the contents of the textarea.
     */

    this.autoGrow = false;
    /**
     * The value of the textarea.
     */

    this.value = '';

    this.onInput = ev => {
      if (this.nativeInput) {
        this.value = this.nativeInput.value;
      }

      this.emitStyle();
      this.ionInput.emit(ev);
    };

    this.onFocus = ev => {
      this.hasFocus = true;
      this.focusChange();

      if (this.fireFocusEvents) {
        this.ionFocus.emit(ev);
      }
    };

    this.onBlur = ev => {
      this.hasFocus = false;
      this.focusChange();

      if (this.fireFocusEvents) {
        this.ionBlur.emit(ev);
      }
    };

    this.onKeyDown = () => {
      this.checkClearOnEdit();
    };
  }

  debounceChanged() {
    this.ionChange = (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_3__.h)(this.ionChange, this.debounce);
  }

  disabledChanged() {
    this.emitStyle();
  }
  /**
   * Update the native input element when the value changes
   */


  valueChanged() {
    const nativeInput = this.nativeInput;
    const value = this.getValue();

    if (nativeInput && nativeInput.value !== value) {
      nativeInput.value = value;
    }

    this.runAutoGrow();
    this.emitStyle();
    this.ionChange.emit({
      value
    });
  }

  connectedCallback() {
    this.emitStyle();
    this.debounceChanged();
    {
      document.dispatchEvent(new CustomEvent('ionInputDidLoad', {
        detail: this.el
      }));
    }
  }

  disconnectedCallback() {
    {
      document.dispatchEvent(new CustomEvent('ionInputDidUnload', {
        detail: this.el
      }));
    }
  }

  componentWillLoad() {
    this.inheritedAttributes = Object.assign(Object.assign({}, (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_3__.i)(this.el)), (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_3__.j)(this.el, ['data-form-type', 'title']));
  }

  componentDidLoad() {
    this.runAutoGrow();
  }
  /**
   * Sets focus on the native `textarea` in `ion-textarea`. Use this method instead of the global
   * `textarea.focus()`.
   */


  setFocus() {
    var _this = this;

    return (0,_Users_akagupta20_Projects_ionic_whatsapp_clone_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.nativeInput) {
        _this.nativeInput.focus();
      }
    })();
  }
  /**
   * Sets blur on the native `textarea` in `ion-textarea`. Use this method instead of the global
   * `textarea.blur()`.
   * @internal
   */


  setBlur() {
    var _this2 = this;

    return (0,_Users_akagupta20_Projects_ionic_whatsapp_clone_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.nativeInput) {
        _this2.nativeInput.blur();
      }
    })();
  }
  /**
   * Returns the native `<textarea>` element used under the hood.
   */


  getInputElement() {
    return Promise.resolve(this.nativeInput);
  }

  emitStyle() {
    this.ionStyle.emit({
      interactive: true,
      textarea: true,
      input: true,
      'interactive-disabled': this.disabled,
      'has-placeholder': this.placeholder !== undefined,
      'has-value': this.hasValue(),
      'has-focus': this.hasFocus
    });
  }

  runAutoGrow() {
    if (this.nativeInput && this.autoGrow) {
      (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.c)(() => {
        var _a;

        if (this.textareaWrapper) {
          // Replicated value is an attribute to be used in the stylesheet
          // to set the inner contents of a pseudo element.
          this.textareaWrapper.dataset.replicatedValue = (_a = this.value) !== null && _a !== void 0 ? _a : '';
        }
      });
    }
  }
  /**
   * Check if we need to clear the text input if clearOnEdit is enabled
   */


  checkClearOnEdit() {
    if (!this.clearOnEdit) {
      return;
    } // Did the input value change after it was blurred and edited?


    if (this.didBlurAfterEdit && this.hasValue()) {
      // Clear the input
      this.value = '';
    } // Reset the flag


    this.didBlurAfterEdit = false;
  }

  focusChange() {
    // If clearOnEdit is enabled and the input blurred but has a value, set a flag
    if (this.clearOnEdit && !this.hasFocus && this.hasValue()) {
      this.didBlurAfterEdit = true;
    }

    this.emitStyle();
  }

  hasValue() {
    return this.getValue() !== '';
  }

  getValue() {
    return this.value || '';
  }

  render() {
    const mode = (0,_ionic_global_c95cf239_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);
    const value = this.getValue();
    const labelId = this.inputId + '-lbl';
    const label = (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_3__.k)(this.el);

    if (label) {
      label.id = labelId;
    }

    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.H, {
      "aria-disabled": this.disabled ? 'true' : null,
      class: (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_4__.c)(this.color, {
        [mode]: true
      })
    }, (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "textarea-wrapper",
      ref: el => this.textareaWrapper = el
    }, (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("textarea", Object.assign({
      class: "native-textarea",
      "aria-labelledby": label ? labelId : null,
      ref: el => this.nativeInput = el,
      autoCapitalize: this.autocapitalize,
      autoFocus: this.autofocus,
      enterKeyHint: this.enterkeyhint,
      inputMode: this.inputmode,
      disabled: this.disabled,
      maxLength: this.maxlength,
      minLength: this.minlength,
      name: this.name,
      placeholder: this.placeholder || '',
      readOnly: this.readonly,
      required: this.required,
      spellcheck: this.spellcheck,
      cols: this.cols,
      rows: this.rows,
      wrap: this.wrap,
      onInput: this.onInput,
      onBlur: this.onBlur,
      onFocus: this.onFocus,
      onKeyDown: this.onKeyDown
    }, this.inheritedAttributes), value)));
  }

  get el() {
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.i)(this);
  }

  static get watchers() {
    return {
      "debounce": ["debounceChanged"],
      "disabled": ["disabledChanged"],
      "value": ["valueChanged"]
    };
  }

};
let textareaIds = 0;
Textarea.style = {
  ios: textareaIosCss,
  md: textareaMdCss
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
/* harmony import */ var _Users_akagupta20_Projects_ionic_whatsapp_clone_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);


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
  var _ref = (0,_Users_akagupta20_Projects_ionic_whatsapp_clone_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (url, ev, direction, animation) {
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
//# sourceMappingURL=6357.js.map