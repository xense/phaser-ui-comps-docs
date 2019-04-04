/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/docs/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/src/WindowTest.js":
/*!************************************!*\
  !*** ./examples/src/WindowTest.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WindowTest; });\nclass WindowTest extends PhaserComps.UIComponents.UIComponentPrototype {\r\n\tconstructor() {\r\n\t\tsuper();\r\n\r\n\t\tthis.setText('title', 'WOW SUCH TITLE!');\r\n\r\n\t\t// create first tab and listen to its group selection events\r\n\t\t// tab values will be used here as component state ids\r\n\t\tthis._firstTab = new PhaserComps.UIComponents.UIButtonRadio(this, 'tab_1', 'Buttons', 'buttons');\r\n\t\tthis._firstTab.on(PhaserComps.UIComponents.UIButtonRadio.EVENT_SELECT, this.onTabSelect, this);\r\n\r\n\t\t// create other tabs\r\n\t\tnew PhaserComps.UIComponents.UIButtonRadio(this, 'tab_2', 'Scrollbars', 'scroll', this._firstTab);\r\n\t\tnew PhaserComps.UIComponents.UIButtonRadio(this, 'tab_3', 'Progressbars', 'progress', this._firstTab);\r\n\t\tthis.lastTab = new PhaserComps.UIComponents.UIButtonRadio(\r\n\t\t\tthis,\r\n\t\t\t'tab_4',\r\n\t\t\t'Other stuff',\r\n\t\t\t'other',\r\n\t\t\tthis._firstTab\r\n\t\t);\r\n\r\n\t\t///////// TAB 1\r\n\t\t// create checkbox, that will enable/dissble last tab\r\n\t\tthis.btn_check = new PhaserComps.UIComponents.UIButtonSelect(this, 'btn_check_last_tab', 'Enable last tab');\r\n\t\tthis.btn_check.on(PhaserComps.UIComponents.UIButtonSelect.EVENT_CLICK, this.onCheckLastTab, this);\r\n\t\tthis.btn_check.select = true;\r\n\r\n\t\t// simple buttons, that change status text field\r\n\t\tnew PhaserComps.UIComponents.UIButton(this, 'btn_1', 'Some button').on(\r\n\t\t\tPhaserComps.UIComponents.UIButton.EVENT_CLICK, () => {\r\n\t\t\t\tthis.setText('status', 'You clicked some button');\r\n\t\t\t},\r\n\t\t\tthis\r\n\t\t);\r\n\r\n\t\tnew PhaserComps.UIComponents.UIButton(this, 'btn_2', 'Other button').on(\r\n\t\t\tPhaserComps.UIComponents.UIButton.EVENT_CLICK, () => {\r\n\t\t\t\tthis.setText('status', 'You clicked other button');\r\n\t\t\t},\r\n\t\t\tthis);\r\n\r\n\t\t// this button will show how disable state works\r\n\t\tnew PhaserComps.UIComponents.UIButton(this, 'btn_3', 'Last button').enable = false;\r\n\r\n\r\n\r\n\t\t/////////// TAB 2\r\n\t\tnew PhaserComps.UIComponents.UIScrollPanel(this, 'txt_scrolling', 'scroll_bar_1', 'DIMENSIONS', true);\r\n\r\n\r\n\t\tlet bar2 = new PhaserComps.UIComponents.UIScrollBar(this, 'scroll_bar_2', false);\r\n\t\tbar2.setValueBounds(50, 250, 20);\r\n\t\tbar2.on(PhaserComps.UIComponents.UIScrollBar.EVENT_CHANGE, this.onScrollBar2, this);\r\n\r\n\t\t// IMPORTANT! make doState after all child components created\r\n\t\tthis._firstTab.select = true;\r\n\t}\r\n\r\n\tonTabSelect(value) {\r\n\t\tconsole.log('selected tab value:', value);\r\n\t\tthis.doState();\r\n\t}\r\n\r\n\tonCheckLastTab() {\r\n\t\tthis.lastTab.enable = this.btn_check.select;\r\n\t}\r\n\r\n\tgetStateId() {\r\n\t\tif (!this._firstTab) // when super calls getStateId, _firstTab is not created yet\r\n\t\t\treturn 'buttons';\r\n\r\n\t\treturn this._firstTab.valueSelected;\r\n\t}\r\n\r\n\tonScrollBar2(value) {\r\n\t\tthis.setText('txt_bar_value', 'Bar value: ' + value);\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./examples/src/WindowTest.js?");

/***/ }),

/***/ "./examples/src/index.js":
/*!*******************************!*\
  !*** ./examples/src/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _WindowTest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WindowTest */ \"./examples/src/WindowTest.js\");\n\r\n\r\nvar config = {\r\n\ttype: Phaser.AUTO,\r\n\tparent: 'example',\r\n\tbackgroundColor: '#ffffff',\r\n\twidth: 800,\r\n\theight: 600,\r\n\tscene: {\r\n\t\tpreload: preload,\r\n\t\tcreate: create\r\n\t},\r\n\tplugins: {\r\n\t\tglobal: [\r\n\t\t\tPhaserComps.Plugin.DefaultCfg\r\n\t\t]\r\n\t}\r\n};\r\n\r\nvar game = new Phaser.Game(config);\r\n\r\nfunction preload() {\r\n\tthis.load.json('window_config', 'jsons/WindowTest.json');\r\n\tthis.load.multiatlas('window_atlas', 'atlases/WindowTest_images.json', 'atlases/');\r\n}\r\n\r\nfunction create() {\r\n\tlet clip = this.add.ui_component(\r\n\t\tgame.cache.json.get('window_config'),\r\n\t\t['window_atlas']\r\n\t);\r\n\r\n\tvar window = new _WindowTest__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\twindow.appendClip(clip);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./examples/src/index.js?");

/***/ }),

/***/ 0:
/*!*************************************!*\
  !*** multi ./examples/src/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\WORK\\Citadels\\npm\\phaser-ui-comps-docs\\examples\\src\\index.js */\"./examples/src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./examples/src/index.js?");

/***/ })

/******/ });