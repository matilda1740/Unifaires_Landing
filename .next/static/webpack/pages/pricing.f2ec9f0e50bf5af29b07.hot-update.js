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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_matildamwendwa_Documents_GitHub_Unifaires_Landing_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_Layout_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Layout/Text */ \"./src/components/Layout/Text.js\");\n/* harmony import */ var components_Layout_Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Layout/Heading */ \"./src/components/Layout/Heading.js\");\n/* harmony import */ var common_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/components/Button */ \"./src/common/components/Button/index.js\");\n/* harmony import */ var _PricingPage_pricing_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../PricingPage/pricing.style */ \"./src/components/PricingPage/pricing.style.js\");\n/* harmony import */ var common_assets_images_crown_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! common/assets/images/crown.svg */ \"./src/common/assets/images/crown.svg\");\n/* harmony import */ var common_data_appData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common/data/appData */ \"./src/common/data/appData.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/matildamwendwa/Documents/GitHub/Unifaires_Landing/src/components/PricingPage/PricingPolicy/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_matildamwendwa_Documents_GitHub_Unifaires_Landing_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n// Contact Section Index\n\n\n\n\n\n\n\n\n\n\nvar PricingPolicy = function PricingPolicy() {\n  _s();\n\n  var slogan = common_data_appData__WEBPACK_IMPORTED_MODULE_8__.pricing.slogan,\n      title = common_data_appData__WEBPACK_IMPORTED_MODULE_8__.pricing.title,\n      subtitle = common_data_appData__WEBPACK_IMPORTED_MODULE_8__.pricing.subtitle,\n      monthly = common_data_appData__WEBPACK_IMPORTED_MODULE_8__.pricing.monthly,\n      annualy = common_data_appData__WEBPACK_IMPORTED_MODULE_8__.pricing.annualy,\n      class_name = common_data_appData__WEBPACK_IMPORTED_MODULE_8__.pricing.class_name;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    active: 'monthly',\n    pricingPlan: monthly\n  }),\n      state = _useState[0],\n      setState = _useState[1];\n\n  var handlePricingPlan = function handlePricingPlan(plan) {\n    if (plan === 'annualy') {\n      setState(_objectSpread(_objectSpread({}, state), {}, {\n        active: 'annualy',\n        pricingPlan: annualy\n      }));\n    } else {\n      setState(_objectSpread(_objectSpread({}, state), {}, {\n        active: 'monthly',\n        pricingPlan: monthly\n      }));\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_PricingPage_pricing_style__WEBPACK_IMPORTED_MODULE_6__.default, {\n    id: \"pricing_section\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_PricingPage_pricing_style__WEBPACK_IMPORTED_MODULE_6__.PricingSectionHeader, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(components_Layout_Heading__WEBPACK_IMPORTED_MODULE_4__.default, {\n        className: \"slogan\",\n        as: \"h5\",\n        content: slogan\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(components_Layout_Heading__WEBPACK_IMPORTED_MODULE_4__.default, {\n        className: \"pricing_title\",\n        content: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(components_Layout_Text__WEBPACK_IMPORTED_MODULE_3__.default, {\n        className: \"pricing_subtitle\",\n        content: subtitle\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_PricingPage_pricing_style__WEBPACK_IMPORTED_MODULE_6__.ButtonGroup, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"button\", {\n          className: state.active === 'annualy' ? 'active' : '',\n          type: \"button\",\n          onClick: function onClick() {\n            return handlePricingPlan('annualy');\n          },\n          children: \"Anually\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"button\", {\n          className: state.active === 'monthly' ? 'active' : '',\n          type: \"button\",\n          onClick: function onClick() {\n            return handlePricingPlan('monthly');\n          },\n          children: \"Monthly\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 10\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_PricingPage_pricing_style__WEBPACK_IMPORTED_MODULE_6__.PricingSliderSection, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_PricingPage_pricing_style__WEBPACK_IMPORTED_MODULE_6__.PricingArea, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_PricingPage_pricing_style__WEBPACK_IMPORTED_MODULE_6__.InnerWrapper, {\n        children: state.pricingPlan.map(function (item) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_PricingPage_pricing_style__WEBPACK_IMPORTED_MODULE_6__.PricingCard, {\n            id: class_name,\n            children: [item.suggested && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"span\", {\n              className: \"tag\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"img\", {\n                src: common_assets_images_crown_svg__WEBPACK_IMPORTED_MODULE_7__.default === null || common_assets_images_crown_svg__WEBPACK_IMPORTED_MODULE_7__.default === void 0 ? void 0 : common_assets_images_crown_svg__WEBPACK_IMPORTED_MODULE_7__.default.src,\n                alt: \"Crown\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 67,\n                columnNumber: 21\n              }, _this), \" Most Popular\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 66,\n              columnNumber: 19\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n              className: \"card-header\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(components_Layout_Heading__WEBPACK_IMPORTED_MODULE_4__.default, {\n                as: \"h3\",\n                content: item.title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 71,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(components_Layout_Text__WEBPACK_IMPORTED_MODULE_3__.default, {\n                content: item.description\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 72,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(common_components_Button__WEBPACK_IMPORTED_MODULE_5__.default, {\n                className: \"price_card_btn\",\n                title: item.price !== 0 ? 'Start Free Trail' : 'Subscribe Now'\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 73,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 70,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n              className: \"card-body\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"ul\", {\n                className: \"feature-list\",\n                children: item.features.map(function (item) {\n                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"li\", {\n                    children: item.text\n                  }, \"\".concat(state.active, \"-feature--key\").concat(item.id), false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 82,\n                    columnNumber: 23\n                  }, _this);\n                })\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 80,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 79,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n              className: \"card-footer\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"strong\", {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"span\", {\n                  children: [\"\\u20AC \", item.price]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 91,\n                  columnNumber: 21\n                }, _this), \" /\", state.active]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 90,\n                columnNumber: 19\n              }, _this), item.trail ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n                className: \"trail\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                  href: item.trailLink,\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"a\", {\n                    children: [\"Or Start \", item.trail, \" Days trail\"]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 97,\n                    columnNumber: 25\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 96,\n                  columnNumber: 23\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 95,\n                columnNumber: 21\n              }, _this) : '']\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 89,\n              columnNumber: 17\n            }, _this)]\n          }, \"\".concat(state.active, \"-card--key\").concat(item.id), true, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(PricingPolicy, \"s66cXBiJ75jLEv7IBCc+NSxt7PQ=\");\n\n_c = PricingPolicy;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PricingPolicy);\n\nvar _c;\n\n$RefreshReg$(_c, \"PricingPolicy\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QcmljaW5nUGFnZS9QcmljaW5nUG9saWN5L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7OztBQUVBLElBQU1lLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUMxQixNQUFRQyxNQUFSLEdBQWtFRiwrREFBbEU7QUFBQSxNQUFnQkcsS0FBaEIsR0FBa0VILDhEQUFsRTtBQUFBLE1BQXVCSSxRQUF2QixHQUFrRUosaUVBQWxFO0FBQUEsTUFBaUNLLE9BQWpDLEdBQWtFTCxnRUFBbEU7QUFBQSxNQUEwQ00sT0FBMUMsR0FBa0VOLGdFQUFsRTtBQUFBLE1BQW1ETyxVQUFuRCxHQUFrRVAsbUVBQWxFOztBQUNBLGtCQUEwQmIsK0NBQVEsQ0FBQztBQUNqQ3FCLElBQUFBLE1BQU0sRUFBRSxTQUR5QjtBQUVqQ0MsSUFBQUEsV0FBVyxFQUFFSjtBQUZvQixHQUFELENBQWxDO0FBQUEsTUFBT0ssS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBTUEsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxJQUFELEVBQVU7QUFDbEMsUUFBSUEsSUFBSSxLQUFLLFNBQWIsRUFBd0I7QUFDdEJGLE1BQUFBLFFBQVEsaUNBQ0hELEtBREc7QUFFTkYsUUFBQUEsTUFBTSxFQUFFLFNBRkY7QUFHTkMsUUFBQUEsV0FBVyxFQUFFSDtBQUhQLFNBQVI7QUFLRCxLQU5ELE1BTU87QUFDTEssTUFBQUEsUUFBUSxpQ0FDSEQsS0FERztBQUVORixRQUFBQSxNQUFNLEVBQUUsU0FGRjtBQUdOQyxRQUFBQSxXQUFXLEVBQUVKO0FBSFAsU0FBUjtBQUtEO0FBQ0YsR0FkRDs7QUFlQSxzQkFDRSw4REFBQywrREFBRDtBQUFnQixNQUFFLEVBQUMsaUJBQW5CO0FBQUEsNEJBQ0ksOERBQUMsNEVBQUQ7QUFBQSw4QkFD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QWZGLGVBeUJFO0FBQUssdUJBQVMsRUFBQyxhQUFmO0FBQUEsc0NBQ0U7QUFBQSx3Q0FDRTtBQUFBLHdDQUFTUCxJQUFJLENBQUNJLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLFFBQ2dDVCxLQUFLLENBQUNGLE1BRHRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixFQUtHTyxJQUFJLENBQUNRLEtBQUwsZ0JBQ0M7QUFBSyx5QkFBUyxFQUFDLE9BQWY7QUFBQSx1Q0FDRSw4REFBQyxrREFBRDtBQUFNLHNCQUFJLEVBQUVSLElBQUksQ0FBQ1MsU0FBakI7QUFBQSx5Q0FDRTtBQUFBLDRDQUFhVCxJQUFJLENBQUNRLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURELEdBT0MsRUFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBekJGO0FBQUEsdUJBQXFCYixLQUFLLENBQUNGLE1BQTNCLHVCQUE4Q08sSUFBSSxDQUFDTyxFQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURxQjtBQUFBLFNBQXRCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF2Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5RUQsQ0FoR0Q7O0dBQU1yQjs7S0FBQUE7QUFrR04sK0RBQWVBLGFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJpY2luZ1BhZ2UvUHJpY2luZ1BvbGljeS9pbmRleC5qcz9mODUzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvbnRhY3QgU2VjdGlvbiBJbmRleFxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBUZXh0IGZyb20gJ2NvbXBvbmVudHMvTGF5b3V0L1RleHQnO1xuaW1wb3J0IEhlYWRpbmcgZnJvbSAnY29tcG9uZW50cy9MYXlvdXQvSGVhZGluZyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ2NvbW1vbi9jb21wb25lbnRzL0J1dHRvbic7XG5pbXBvcnQgU2VjdGlvbldyYXBwZXIsIHtQcmljaW5nU2VjdGlvbkhlYWRlciwgQnV0dG9uR3JvdXAsUHJpY2luZ0FyZWEsSW5uZXJXcmFwcGVyLFByaWNpbmdDYXJkLCBQcmljaW5nU2xpZGVyU2VjdGlvbn0gZnJvbSAnLi4vLi4vUHJpY2luZ1BhZ2UvcHJpY2luZy5zdHlsZSc7XG5cbmltcG9ydCBjcm93biBmcm9tICdjb21tb24vYXNzZXRzL2ltYWdlcy9jcm93bi5zdmcnO1xuXG5cbmltcG9ydCB7IHByaWNpbmcgfSBmcm9tICdjb21tb24vZGF0YS9hcHBEYXRhJztcblxuY29uc3QgUHJpY2luZ1BvbGljeSA9ICgpID0+IHtcbiAgY29uc3QgeyBzbG9nYW4sIHRpdGxlLCBzdWJ0aXRsZSwgbW9udGhseSwgYW5udWFseSwgY2xhc3NfbmFtZSB9ID0gcHJpY2luZztcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgYWN0aXZlOiAnbW9udGhseScsXG4gICAgcHJpY2luZ1BsYW46IG1vbnRobHksXG4gIH0pO1xuXG5cbiAgY29uc3QgaGFuZGxlUHJpY2luZ1BsYW4gPSAocGxhbikgPT4ge1xuICAgIGlmIChwbGFuID09PSAnYW5udWFseScpIHtcbiAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFjdGl2ZTogJ2FubnVhbHknLFxuICAgICAgICBwcmljaW5nUGxhbjogYW5udWFseSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTdGF0ZSh7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhY3RpdmU6ICdtb250aGx5JyxcbiAgICAgICAgcHJpY2luZ1BsYW46IG1vbnRobHksXG4gICAgICB9KTtcbiAgICB9XG4gIH07ICBcbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvbldyYXBwZXIgaWQ9XCJwcmljaW5nX3NlY3Rpb25cIj5cbiAgICAgICAgPFByaWNpbmdTZWN0aW9uSGVhZGVyPlxuICAgICAgICAgIDxIZWFkaW5nIGNsYXNzTmFtZT1cInNsb2dhblwiICBhcz1cImg1XCIgY29udGVudD17c2xvZ2FufSAvPlxuICAgICAgICAgIDxIZWFkaW5nIGNsYXNzTmFtZT1cInByaWNpbmdfdGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cbiAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJwcmljaW5nX3N1YnRpdGxlXCIgY29udGVudD17c3VidGl0bGV9IC8+XG5cbiAgICAgICAgIDxCdXR0b25Hcm91cD5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0YXRlLmFjdGl2ZSA9PT0gJ2FubnVhbHknID8gJ2FjdGl2ZScgOiAnJ31cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUHJpY2luZ1BsYW4oJ2FubnVhbHknKX1cbiAgICAgICAgICA+QW51YWxseVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3RhdGUuYWN0aXZlID09PSAnbW9udGhseScgPyAnYWN0aXZlJyA6ICcnfVxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQcmljaW5nUGxhbignbW9udGhseScpfVxuICAgICAgICAgID5Nb250aGx5XG4gICAgICAgICAgPC9idXR0b24+ICAgICAgICAgIFxuICAgICAgICA8L0J1dHRvbkdyb3VwPiAgICAgICAgICBcbiAgICAgICAgPC9QcmljaW5nU2VjdGlvbkhlYWRlcj5cblxuICAgICAgICA8UHJpY2luZ1NsaWRlclNlY3Rpb24+PC9QcmljaW5nU2xpZGVyU2VjdGlvbj5cbiAgICAgICAgPFByaWNpbmdBcmVhPlxuICAgICAgICAgIDxJbm5lcldyYXBwZXI+XG4gICAgICAgICAgICB7c3RhdGUucHJpY2luZ1BsYW4ubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxQcmljaW5nQ2FyZCBrZXk9e2Ake3N0YXRlLmFjdGl2ZX0tY2FyZC0ta2V5JHtpdGVtLmlkfWB9IGlkPXtjbGFzc19uYW1lfT5cbiAgICAgICAgICAgICAgICB7aXRlbS5zdWdnZXN0ZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGFnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjcm93bj8uc3JjfSBhbHQ9XCJDcm93blwiIC8+IE1vc3QgUG9wdWxhclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiIGNvbnRlbnQ9e2l0ZW0udGl0bGV9IC8+XG4gICAgICAgICAgICAgICAgICA8VGV4dCBjb250ZW50PXtpdGVtLmRlc2NyaXB0aW9ufSAvPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJwcmljZV9jYXJkX2J0blwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLnByaWNlICE9PSAwID8gJ1N0YXJ0IEZyZWUgVHJhaWwnIDogJ1N1YnNjcmliZSBOb3cnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC8+ICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmZWF0dXJlLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uZmVhdHVyZXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17YCR7c3RhdGUuYWN0aXZlfS1mZWF0dXJlLS1rZXkke2l0ZW0uaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPEljb24gaWNvbj17Y2hlY2ttYXJrQ2lyY2xlZH0gLz4gICovfVxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+4oKsIHtpdGVtLnByaWNlfTwvc3Bhbj4gL3tzdGF0ZS5hY3RpdmV9XG4gICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cblxuICAgICAgICAgICAgICAgICAge2l0ZW0udHJhaWwgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhaWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtpdGVtLnRyYWlsTGlua30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5PciBTdGFydCB7aXRlbS50cmFpbH0gRGF5cyB0cmFpbDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvUHJpY2luZ0NhcmQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0lubmVyV3JhcHBlcj5cbiAgICAgICAgPC9QcmljaW5nQXJlYT4gICAgICAgICAgICAgXG4gICAgPC9TZWN0aW9uV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByaWNpbmdQb2xpY3k7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJUZXh0IiwiSGVhZGluZyIsIkJ1dHRvbiIsIlNlY3Rpb25XcmFwcGVyIiwiUHJpY2luZ1NlY3Rpb25IZWFkZXIiLCJCdXR0b25Hcm91cCIsIlByaWNpbmdBcmVhIiwiSW5uZXJXcmFwcGVyIiwiUHJpY2luZ0NhcmQiLCJQcmljaW5nU2xpZGVyU2VjdGlvbiIsImNyb3duIiwicHJpY2luZyIsIlByaWNpbmdQb2xpY3kiLCJzbG9nYW4iLCJ0aXRsZSIsInN1YnRpdGxlIiwibW9udGhseSIsImFubnVhbHkiLCJjbGFzc19uYW1lIiwiYWN0aXZlIiwicHJpY2luZ1BsYW4iLCJzdGF0ZSIsInNldFN0YXRlIiwiaGFuZGxlUHJpY2luZ1BsYW4iLCJwbGFuIiwibWFwIiwiaXRlbSIsInN1Z2dlc3RlZCIsInNyYyIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJmZWF0dXJlcyIsInRleHQiLCJpZCIsInRyYWlsIiwidHJhaWxMaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/PricingPage/PricingPolicy/index.js\n");

/***/ })

});