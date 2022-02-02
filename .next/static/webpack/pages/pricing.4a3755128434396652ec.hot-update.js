"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/pricing",{

/***/ "./src/components/PricingPage/PricingPolicy/index.js":
/*!***********************************************************!*\
  !*** ./src/components/PricingPage/PricingPolicy/index.js ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_matildamwendwa_Documents_GitHub_Unifaires_Landing_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_Layout_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Layout/Text */ \"./src/components/Layout/Text.js\");\n/* harmony import */ var components_Layout_Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Layout/Heading */ \"./src/components/Layout/Heading.js\");\n/* harmony import */ var common_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/components/Button */ \"./src/common/components/Button/index.js\");\n/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons-kit */ \"./node_modules/react-icons-kit/index.js\");\n/* harmony import */ var react_icons_kit_ionicons_checkmarkCircled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons-kit/ionicons/checkmarkCircled */ \"./node_modules/react-icons-kit/ionicons/checkmarkCircled.js\");\n/* harmony import */ var _PricingPage_pricing_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../PricingPage/pricing.style */ \"./src/components/PricingPage/pricing.style.js\");\n/* harmony import */ var _PricingSlider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../PricingSlider */ \"./src/components/PricingPage/PricingSlider/index.js\");\n/* harmony import */ var common_assets_images_crown_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! common/assets/images/crown.svg */ \"./src/common/assets/images/crown.svg\");\n/* harmony import */ var common_assets_images_checkmark_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! common/assets/images/checkmark.svg */ \"./src/common/assets/images/checkmark.svg\");\n/* harmony import */ var common_data_appData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! common/data/appData */ \"./src/common/data/appData.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/matildamwendwa/Documents/GitHub/Unifaires_Landing/src/components/PricingPage/PricingPolicy/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_matildamwendwa_Documents_GitHub_Unifaires_Landing_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar PricingPolicy = function PricingPolicy() {\n  _s();\n\n  var slogan = common_data_appData__WEBPACK_IMPORTED_MODULE_12__.pricing.slogan,\n      title = common_data_appData__WEBPACK_IMPORTED_MODULE_12__.pricing.title,\n      subtitle = common_data_appData__WEBPACK_IMPORTED_MODULE_12__.pricing.subtitle,\n      monthly = common_data_appData__WEBPACK_IMPORTED_MODULE_12__.pricing.monthly,\n      annualy = common_data_appData__WEBPACK_IMPORTED_MODULE_12__.pricing.annualy,\n      class_name = common_data_appData__WEBPACK_IMPORTED_MODULE_12__.pricing.class_name;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    active: 'monthly',\n    pricingPlan: monthly\n  }),\n      state = _useState[0],\n      setState = _useState[1];\n\n  var handlePricingPlan = function handlePricingPlan(plan) {\n    if (plan === 'annualy') {\n      setState(_objectSpread(_objectSpread({}, state), {}, {\n        active: 'year',\n        pricingPlan: annualy\n      }));\n    } else {\n      setState(_objectSpread(_objectSpread({}, state), {}, {\n        active: 'monthly',\n        pricingPlan: monthly\n      }));\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_PricingPage_pricing_style__WEBPACK_IMPORTED_MODULE_8__.default, {\n    id: \"pricing_section\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_PricingPage_pricing_style__WEBPACK_IMPORTED_MODULE_8__.PricingSectionHeader, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(components_Layout_Heading__WEBPACK_IMPORTED_MODULE_4__.default, {\n        className: \"slogan\",\n        as: \"h5\",\n        content: slogan\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(components_Layout_Heading__WEBPACK_IMPORTED_MODULE_4__.default, {\n        className: \"pricing_title\",\n        content: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(components_Layout_Text__WEBPACK_IMPORTED_MODULE_3__.default, {\n        className: \"pricing_subtitle\",\n        content: subtitle\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_PricingPage_pricing_style__WEBPACK_IMPORTED_MODULE_8__.ButtonGroup, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(\"button\", {\n          className: state.active === 'annualy' ? 'active' : '',\n          type: \"button\",\n          onClick: function onClick() {\n            return handlePricingPlan('annualy');\n          },\n          children: \"Anually\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(\"button\", {\n          className: state.active === 'monthly' ? 'active' : '',\n          type: \"button\",\n          onClick: function onClick() {\n            return handlePricingPlan('monthly');\n          },\n          children: \"Monthly\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 10\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_PricingSlider__WEBPACK_IMPORTED_MODULE_9__.default, {\n      className: \"pricing_slider_div\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_PricingPage_pricing_style__WEBPACK_IMPORTED_MODULE_8__.PricingArea, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_PricingPage_pricing_style__WEBPACK_IMPORTED_MODULE_8__.InnerWrapper, {\n        children: state.pricingPlan.map(function (item) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_PricingPage_pricing_style__WEBPACK_IMPORTED_MODULE_8__.PricingCard, {\n            id: class_name,\n            children: [item.notice[\"boolean\"] === true && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(\"span\", {\n              className: \"tag\",\n              children: item.notice.message\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 71,\n              columnNumber: 19\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(\"div\", {\n              className: \"card_header\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(components_Layout_Heading__WEBPACK_IMPORTED_MODULE_4__.default, {\n                as: \"h3\",\n                content: item.title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 74,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(components_Layout_Text__WEBPACK_IMPORTED_MODULE_3__.default, {\n                content: item.description\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 75,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(common_components_Button__WEBPACK_IMPORTED_MODULE_5__.default, {\n                className: \"price_card_btn\",\n                title: item.button_title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 76,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 73,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(\"div\", {\n              className: \"card_price_div\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(\"p\", {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(\"strong\", {\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(\"span\", {\n                    children: [\"\\u20AC \", item.price]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 79,\n                    columnNumber: 30\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 79,\n                  columnNumber: 22\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(\"span\", {\n                  children: [\"/ \", state.active]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 79,\n                  columnNumber: 66\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 79,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 78,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(\"div\", {\n              className: \"card-body\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(\"ul\", {\n                className: \"feature-list\",\n                children: item.features.map(function (item) {\n                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(\"li\", {\n                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(react_icons_kit__WEBPACK_IMPORTED_MODULE_6__.Icon, {\n                      icon: react_icons_kit_ionicons_checkmarkCircled__WEBPACK_IMPORTED_MODULE_7__.checkmarkCircled\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 97,\n                      columnNumber: 26\n                    }, _this), item.text]\n                  }, \"\".concat(state.active, \"-feature--key\").concat(item.id), true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 95,\n                    columnNumber: 23\n                  }, _this);\n                })\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 93,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 92,\n              columnNumber: 19\n            }, _this)]\n          }, \"\".concat(state.active, \"-card--key\").concat(item.id), true, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(PricingPolicy, \"s66cXBiJ75jLEv7IBCc+NSxt7PQ=\");\n\n_c = PricingPolicy;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PricingPolicy);\n\nvar _c;\n\n$RefreshReg$(_c, \"PricingPolicy\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QcmljaW5nUGFnZS9QcmljaW5nUG9saWN5L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOzs7QUFFQSxJQUFNa0IsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQzFCLE1BQVFDLE1BQVIsR0FBa0VGLGdFQUFsRTtBQUFBLE1BQWdCRyxLQUFoQixHQUFrRUgsK0RBQWxFO0FBQUEsTUFBdUJJLFFBQXZCLEdBQWtFSixrRUFBbEU7QUFBQSxNQUFpQ0ssT0FBakMsR0FBa0VMLGlFQUFsRTtBQUFBLE1BQTBDTSxPQUExQyxHQUFrRU4saUVBQWxFO0FBQUEsTUFBbURPLFVBQW5ELEdBQWtFUCxvRUFBbEU7O0FBQ0Esa0JBQTBCaEIsK0NBQVEsQ0FBQztBQUNqQ3dCLElBQUFBLE1BQU0sRUFBRSxTQUR5QjtBQUVqQ0MsSUFBQUEsV0FBVyxFQUFFSjtBQUZvQixHQUFELENBQWxDO0FBQUEsTUFBT0ssS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBTUEsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxJQUFELEVBQVU7QUFDbEMsUUFBSUEsSUFBSSxLQUFLLFNBQWIsRUFBd0I7QUFDdEJGLE1BQUFBLFFBQVEsaUNBQ0hELEtBREc7QUFFTkYsUUFBQUEsTUFBTSxFQUFFLE1BRkY7QUFHTkMsUUFBQUEsV0FBVyxFQUFFSDtBQUhQLFNBQVI7QUFLRCxLQU5ELE1BTU87QUFDTEssTUFBQUEsUUFBUSxpQ0FDSEQsS0FERztBQUVORixRQUFBQSxNQUFNLEVBQUUsU0FGRjtBQUdOQyxRQUFBQSxXQUFXLEVBQUVKO0FBSFAsU0FBUjtBQUtEO0FBQ0YsR0FkRDs7QUFlQSxzQkFDRSwrREFBQywrREFBRDtBQUFnQixNQUFFLEVBQUMsaUJBQW5CO0FBQUEsNEJBQ0ks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Q00sUUFBTCxDQUFjUCxHQUFkLENBQWtCLFVBQUNDLElBQUQ7QUFBQSxzQ0FDakI7QUFBQSw0Q0FFRywrREFBQyxpREFBRDtBQUFNLDBCQUFJLEVBQUV6Qix1RkFBZ0JBO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRkgsRUFHR3lCLElBQUksQ0FBQ08sSUFIUjtBQUFBLCtCQUFZWixLQUFLLENBQUNGLE1BQWxCLDBCQUF3Q08sSUFBSSxDQUFDUSxFQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURpQjtBQUFBLGlCQUFsQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXZCSjtBQUFBLHVCQUFxQmIsS0FBSyxDQUFDRixNQUEzQix1QkFBOENPLElBQUksQ0FBQ1EsRUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEcUI7QUFBQSxTQUF0QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBekJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0VELENBN0ZEOztHQUFNdEI7O0tBQUFBO0FBK0ZOLCtEQUFlQSxhQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1ByaWNpbmdQYWdlL1ByaWNpbmdQb2xpY3kvaW5kZXguanM/Zjg1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFRleHQgZnJvbSAnY29tcG9uZW50cy9MYXlvdXQvVGV4dCc7XG5pbXBvcnQgSGVhZGluZyBmcm9tICdjb21wb25lbnRzL0xheW91dC9IZWFkaW5nJztcbmltcG9ydCBCdXR0b24gZnJvbSAnY29tbW9uL2NvbXBvbmVudHMvQnV0dG9uJztcbmltcG9ydCB7IEljb24gfSBmcm9tICdyZWFjdC1pY29ucy1raXQnO1xuaW1wb3J0IHsgY2hlY2ttYXJrQ2lyY2xlZCB9IGZyb20gJ3JlYWN0LWljb25zLWtpdC9pb25pY29ucy9jaGVja21hcmtDaXJjbGVkJztcblxuaW1wb3J0IFNlY3Rpb25XcmFwcGVyLCB7UHJpY2luZ1NlY3Rpb25IZWFkZXIsIEJ1dHRvbkdyb3VwLFByaWNpbmdBcmVhLElubmVyV3JhcHBlcixQcmljaW5nQ2FyZCwgfSBmcm9tICcuLi8uLi9QcmljaW5nUGFnZS9wcmljaW5nLnN0eWxlJztcbmltcG9ydCBQcmljaW5nU2xpZGVyU2VjdGlvbiBmcm9tICcuLi9QcmljaW5nU2xpZGVyJ1xuaW1wb3J0IGNyb3duIGZyb20gJ2NvbW1vbi9hc3NldHMvaW1hZ2VzL2Nyb3duLnN2Zyc7XG5pbXBvcnQgY2hlY2ttYXJrIGZyb20gJ2NvbW1vbi9hc3NldHMvaW1hZ2VzL2NoZWNrbWFyay5zdmcnO1xuXG5cbmltcG9ydCB7IHByaWNpbmcgfSBmcm9tICdjb21tb24vZGF0YS9hcHBEYXRhJztcblxuY29uc3QgUHJpY2luZ1BvbGljeSA9ICgpID0+IHtcbiAgY29uc3QgeyBzbG9nYW4sIHRpdGxlLCBzdWJ0aXRsZSwgbW9udGhseSwgYW5udWFseSwgY2xhc3NfbmFtZSB9ID0gcHJpY2luZztcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgYWN0aXZlOiAnbW9udGhseScsXG4gICAgcHJpY2luZ1BsYW46IG1vbnRobHksXG4gIH0pO1xuXG5cbiAgY29uc3QgaGFuZGxlUHJpY2luZ1BsYW4gPSAocGxhbikgPT4ge1xuICAgIGlmIChwbGFuID09PSAnYW5udWFseScpIHtcbiAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFjdGl2ZTogJ3llYXInLFxuICAgICAgICBwcmljaW5nUGxhbjogYW5udWFseSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTdGF0ZSh7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhY3RpdmU6ICdtb250aGx5JyxcbiAgICAgICAgcHJpY2luZ1BsYW46IG1vbnRobHksXG4gICAgICB9KTtcbiAgICB9XG4gIH07ICBcbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvbldyYXBwZXIgaWQ9XCJwcmljaW5nX3NlY3Rpb25cIj5cbiAgICAgICAgPFByaWNpbmdTZWN0aW9uSGVhZGVyPlxuICAgICAgICAgIDxIZWFkaW5nIGNsYXNzTmFtZT1cInNsb2dhblwiICBhcz1cImg1XCIgY29udGVudD17c2xvZ2FufSAvPlxuICAgICAgICAgIDxIZWFkaW5nIGNsYXNzTmFtZT1cInByaWNpbmdfdGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cbiAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJwcmljaW5nX3N1YnRpdGxlXCIgY29udGVudD17c3VidGl0bGV9IC8+XG5cbiAgICAgICAgIDxCdXR0b25Hcm91cD5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0YXRlLmFjdGl2ZSA9PT0gJ2FubnVhbHknID8gJ2FjdGl2ZScgOiAnJ31cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUHJpY2luZ1BsYW4oJ2FubnVhbHknKX1cbiAgICAgICAgICA+QW51YWxseVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3RhdGUuYWN0aXZlID09PSAnbW9udGhseScgPyAnYWN0aXZlJyA6ICcnfVxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQcmljaW5nUGxhbignbW9udGhseScpfVxuICAgICAgICAgID5Nb250aGx5XG4gICAgICAgICAgPC9idXR0b24+ICAgICAgICAgIFxuICAgICAgICA8L0J1dHRvbkdyb3VwPiAgICAgICAgICBcbiAgICAgICAgPC9QcmljaW5nU2VjdGlvbkhlYWRlcj5cblxuICAgICAgICA8UHJpY2luZ1NsaWRlclNlY3Rpb24gY2xhc3NOYW1lPVwicHJpY2luZ19zbGlkZXJfZGl2XCI+XG5cbiAgICAgICAgPC9QcmljaW5nU2xpZGVyU2VjdGlvbj5cbiAgICAgICAgPFByaWNpbmdBcmVhPlxuICAgICAgICAgIDxJbm5lcldyYXBwZXI+XG4gICAgICAgICAgICB7c3RhdGUucHJpY2luZ1BsYW4ubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxQcmljaW5nQ2FyZCBrZXk9e2Ake3N0YXRlLmFjdGl2ZX0tY2FyZC0ta2V5JHtpdGVtLmlkfWB9IGlkPXtjbGFzc19uYW1lfT5cbiAgICAgICAgICAgICAgICB7aXRlbS5ub3RpY2UuYm9vbGVhbiA9PT0gdHJ1ZSAmJiAoXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0YWdcIj57aXRlbS5ub3RpY2UubWVzc2FnZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImgzXCIgY29udGVudD17aXRlbS50aXRsZX0gLz5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IGNvbnRlbnQ9e2l0ZW0uZGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInByaWNlX2NhcmRfYnRuXCIgdGl0bGU9e2l0ZW0uYnV0dG9uX3RpdGxlfSAvPiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX3ByaWNlX2RpdlwiPlxuICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz48c3Bhbj7igqwge2l0ZW0ucHJpY2V9PC9zcGFuPjwvc3Ryb25nPjxzcGFuPi8ge3N0YXRlLmFjdGl2ZX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgIHsvKiB7aXRlbS50cmFpbCA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0udHJhaWxMaW5rfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPk9yIFN0YXJ0IHtpdGVtLnRyYWlsfSBEYXlzIHRyYWlsPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgICAgKX0gKi99XG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZlYXR1cmUtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5mZWF0dXJlcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtgJHtzdGF0ZS5hY3RpdmV9LWZlYXR1cmUtLWtleSR7aXRlbS5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17Y2hlY2ttYXJrPy5zcmN9IGFsdD1cIkNoZWNrTWFya1wiIC8+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGljb249e2NoZWNrbWFya0NpcmNsZWR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8L1ByaWNpbmdDYXJkPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9Jbm5lcldyYXBwZXI+XG4gICAgICAgIDwvUHJpY2luZ0FyZWE+ICAgICAgICAgICAgIFxuICAgIDwvU2VjdGlvbldyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmljaW5nUG9saWN5O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiVGV4dCIsIkhlYWRpbmciLCJCdXR0b24iLCJJY29uIiwiY2hlY2ttYXJrQ2lyY2xlZCIsIlNlY3Rpb25XcmFwcGVyIiwiUHJpY2luZ1NlY3Rpb25IZWFkZXIiLCJCdXR0b25Hcm91cCIsIlByaWNpbmdBcmVhIiwiSW5uZXJXcmFwcGVyIiwiUHJpY2luZ0NhcmQiLCJQcmljaW5nU2xpZGVyU2VjdGlvbiIsImNyb3duIiwiY2hlY2ttYXJrIiwicHJpY2luZyIsIlByaWNpbmdQb2xpY3kiLCJzbG9nYW4iLCJ0aXRsZSIsInN1YnRpdGxlIiwibW9udGhseSIsImFubnVhbHkiLCJjbGFzc19uYW1lIiwiYWN0aXZlIiwicHJpY2luZ1BsYW4iLCJzdGF0ZSIsInNldFN0YXRlIiwiaGFuZGxlUHJpY2luZ1BsYW4iLCJwbGFuIiwibWFwIiwiaXRlbSIsIm5vdGljZSIsIm1lc3NhZ2UiLCJkZXNjcmlwdGlvbiIsImJ1dHRvbl90aXRsZSIsInByaWNlIiwiZmVhdHVyZXMiLCJ0ZXh0IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/PricingPage/PricingPolicy/index.js\n");

/***/ })

});