"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contact",{

/***/ "./src/common/data/appData.js":
/*!************************************!*\
  !*** ./src/common/data/appData.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactCard\": function() { return /* binding */ contactCard; },\n/* harmony export */   \"login\": function() { return /* binding */ login; },\n/* harmony export */   \"signup\": function() { return /* binding */ signup; },\n/* harmony export */   \"forgotPass\": function() { return /* binding */ forgotPass; },\n/* harmony export */   \"businessModule\": function() { return /* binding */ businessModule; }\n/* harmony export */ });\n/* harmony import */ var common_assets_images_logoUnifaires_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/assets/images/logoUnifaires.svg */ \"./src/common/assets/images/logoUnifaires.svg\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n/* -------- Contact Card data section --------- */\n\nvar contactCard = {\n  heading: 'Contact Form',\n  logo: common_assets_images_logoUnifaires_svg__WEBPACK_IMPORTED_MODULE_0__.default,\n  slogan: 'Contact Us',\n  title: 'questions, enquiries',\n  description: 'We value your time so we will do our best to respond to your message promptly.',\n  buttonText: 'Send Message',\n  email: {\n    heading: \"Contact the team\",\n    date: \"Mon- Fri from 8pm to 5pm\",\n    link: \"info@unifaires.com\"\n  },\n  msgChat: {\n    heading: \"Chat to us\",\n    date: \"Mon- Fri from 8pm to 5pm\",\n    link: \"+44 0876 8757 667\"\n  } // socials: [facebook, instagram, twitter, youtube]\n\n};\n/* -------- Login data section --------- */\n\nvar login = {\n  heading: 'Login',\n  logo: common_assets_images_logoUnifaires_svg__WEBPACK_IMPORTED_MODULE_0__.default,\n  slogan: 'Democratized',\n  title: 'learning for all',\n  description: 'Unifaires is a good platform that emphasizes learning for all. lorem ipsum dolor sit amet consectuer',\n  buttonText: 'Complete Signup',\n  forgotHeading: 'Forgot Password',\n  forgotDescription: \"Enter the email address you signed up with and we'll send an email with instructions to reset your password.\",\n  resetHeading: 'Reset Password',\n  resetDescription: \"Enter a new password for here, and try to remember this one will you\"\n};\nvar signup = {\n  heading: 'Sign Up',\n  logo: common_assets_images_logoUnifaires_svg__WEBPACK_IMPORTED_MODULE_0__.default,\n  slogan: 'Democratized',\n  title: 'learning for all',\n  description: 'Unifaires is a good platform that emphasizes learning for all. lorem ipsum dolor sit amet consectuer',\n  buttonText: 'Proceed'\n};\nvar forgotPass = {\n  heading: 'Forgot Password',\n  description: \"Enter the email address you signed up with and we'll send an email with instructions to reset your password.\",\n  buttonText: 'Send Reset Link'\n};\n/* -------- BUSINESS MODULE --------- */\n\nvar businessModule = {\n  company: 'Unifaires',\n  suite: 'Business Suite',\n  userType: 'business',\n  userOptions: [{\n    courses: [{\n      title: \"Data Science for IoT\",\n      dateAdded: \"12th Jan 2021\",\n      thumbnail: \"\",\n      views: \"\",\n      members: \"\"\n    }],\n    jobs: [],\n    scholarships: [],\n    badges: []\n  }]\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL2RhdGEvYXBwRGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFFQTs7QUFDTyxJQUFNQyxXQUFXLEdBQUc7QUFDekJDLEVBQUFBLE9BQU8sRUFBRSxjQURnQjtBQUV6QkYsRUFBQUEsSUFBSSxFQUFFQSwyRUFGbUI7QUFHekJHLEVBQUFBLE1BQU0sRUFBRSxZQUhpQjtBQUl6QkMsRUFBQUEsS0FBSyxFQUFFLHNCQUprQjtBQUt6QkMsRUFBQUEsV0FBVyxFQUFFLGdGQUxZO0FBTXpCQyxFQUFBQSxVQUFVLEVBQUUsY0FOYTtBQU96QkMsRUFBQUEsS0FBSyxFQUFFO0FBQ0xMLElBQUFBLE9BQU8sRUFBRSxrQkFESjtBQUVMTSxJQUFBQSxJQUFJLEVBQUUsMEJBRkQ7QUFHTEMsSUFBQUEsSUFBSSxFQUFFO0FBSEQsR0FQa0I7QUFZekJDLEVBQUFBLE9BQU8sRUFBRTtBQUNQUixJQUFBQSxPQUFPLEVBQUUsWUFERjtBQUVQTSxJQUFBQSxJQUFJLEVBQUUsMEJBRkM7QUFHUEMsSUFBQUEsSUFBSSxFQUFFO0FBSEMsR0FaZ0IsQ0FpQnpCOztBQWpCeUIsQ0FBcEI7QUFxQlA7O0FBQ08sSUFBTUUsS0FBSyxHQUFHO0FBQ25CVCxFQUFBQSxPQUFPLEVBQUUsT0FEVTtBQUVuQkYsRUFBQUEsSUFBSSxFQUFFQSwyRUFGYTtBQUduQkcsRUFBQUEsTUFBTSxFQUFFLGNBSFc7QUFJbkJDLEVBQUFBLEtBQUssRUFBRSxrQkFKWTtBQUtuQkMsRUFBQUEsV0FBVyxFQUFFLHNHQUxNO0FBTW5CQyxFQUFBQSxVQUFVLEVBQUUsaUJBTk87QUFPbkJNLEVBQUFBLGFBQWEsRUFBRSxpQkFQSTtBQVFuQkMsRUFBQUEsaUJBQWlCLEVBQUUsOEdBUkE7QUFTbkJDLEVBQUFBLFlBQVksRUFBRSxnQkFUSztBQVVuQkMsRUFBQUEsZ0JBQWdCLEVBQUU7QUFWQyxDQUFkO0FBYUEsSUFBTUMsTUFBTSxHQUFHO0FBQ3BCZCxFQUFBQSxPQUFPLEVBQUUsU0FEVztBQUVwQkYsRUFBQUEsSUFBSSxFQUFFQSwyRUFGYztBQUdwQkcsRUFBQUEsTUFBTSxFQUFFLGNBSFk7QUFJcEJDLEVBQUFBLEtBQUssRUFBRSxrQkFKYTtBQUtwQkMsRUFBQUEsV0FBVyxFQUFFLHNHQUxPO0FBTXBCQyxFQUFBQSxVQUFVLEVBQUU7QUFOUSxDQUFmO0FBU0EsSUFBTVcsVUFBVSxHQUFHO0FBQ3hCZixFQUFBQSxPQUFPLEVBQUUsaUJBRGU7QUFFeEJHLEVBQUFBLFdBQVcsRUFBRSw4R0FGVztBQUd4QkMsRUFBQUEsVUFBVSxFQUFFO0FBSFksQ0FBbkI7QUFNUDs7QUFFTyxJQUFNWSxjQUFjLEdBQUc7QUFDNUJDLEVBQUFBLE9BQU8sRUFBRSxXQURtQjtBQUU1QkMsRUFBQUEsS0FBSyxFQUFFLGdCQUZxQjtBQUc1QkMsRUFBQUEsUUFBUSxFQUFFLFVBSGtCO0FBSTVCQyxFQUFBQSxXQUFXLEVBQUUsQ0FBQztBQUNaQyxJQUFBQSxPQUFPLEVBQUUsQ0FDUDtBQUNFbkIsTUFBQUEsS0FBSyxFQUFFLHNCQURUO0FBRUVvQixNQUFBQSxTQUFTLEVBQUUsZUFGYjtBQUdFQyxNQUFBQSxTQUFTLEVBQUUsRUFIYjtBQUlFQyxNQUFBQSxLQUFLLEVBQUUsRUFKVDtBQUtFQyxNQUFBQSxPQUFPLEVBQUU7QUFMWCxLQURPLENBREc7QUFVWkMsSUFBQUEsSUFBSSxFQUFFLEVBVk07QUFXWkMsSUFBQUEsWUFBWSxFQUFFLEVBWEY7QUFZWkMsSUFBQUEsTUFBTSxFQUFFO0FBWkksR0FBRDtBQUplLENBQXZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21tb24vZGF0YS9hcHBEYXRhLmpzPzA4MWUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgbG9nbyBmcm9tICdjb21tb24vYXNzZXRzL2ltYWdlcy9sb2dvVW5pZmFpcmVzLnN2ZydcblxuLyogLS0tLS0tLS0gQ29udGFjdCBDYXJkIGRhdGEgc2VjdGlvbiAtLS0tLS0tLS0gKi9cbmV4cG9ydCBjb25zdCBjb250YWN0Q2FyZCA9IHtcbiAgaGVhZGluZzogJ0NvbnRhY3QgRm9ybScsXG4gIGxvZ286IGxvZ28sXG4gIHNsb2dhbjogJ0NvbnRhY3QgVXMnLFxuICB0aXRsZTogJ3F1ZXN0aW9ucywgZW5xdWlyaWVzJywgXG4gIGRlc2NyaXB0aW9uOiAnV2UgdmFsdWUgeW91ciB0aW1lIHNvIHdlIHdpbGwgZG8gb3VyIGJlc3QgdG8gcmVzcG9uZCB0byB5b3VyIG1lc3NhZ2UgcHJvbXB0bHkuJywgXG4gIGJ1dHRvblRleHQ6ICdTZW5kIE1lc3NhZ2UnLFxuICBlbWFpbDoge1xuICAgIGhlYWRpbmc6IFwiQ29udGFjdCB0aGUgdGVhbVwiLFxuICAgIGRhdGU6IFwiTW9uLSBGcmkgZnJvbSA4cG0gdG8gNXBtXCIsXG4gICAgbGluazogXCJpbmZvQHVuaWZhaXJlcy5jb21cIlxuICB9LFxuICBtc2dDaGF0OiB7XG4gICAgaGVhZGluZzogXCJDaGF0IHRvIHVzXCIsXG4gICAgZGF0ZTogXCJNb24tIEZyaSBmcm9tIDhwbSB0byA1cG1cIixcbiAgICBsaW5rOiBcIis0NCAwODc2IDg3NTcgNjY3XCIgICBcbiAgfVxuICAvLyBzb2NpYWxzOiBbZmFjZWJvb2ssIGluc3RhZ3JhbSwgdHdpdHRlciwgeW91dHViZV1cbn1cblxuXG4vKiAtLS0tLS0tLSBMb2dpbiBkYXRhIHNlY3Rpb24gLS0tLS0tLS0tICovXG5leHBvcnQgY29uc3QgbG9naW4gPSB7XG4gIGhlYWRpbmc6ICdMb2dpbicsXG4gIGxvZ286IGxvZ28sXG4gIHNsb2dhbjogJ0RlbW9jcmF0aXplZCcsXG4gIHRpdGxlOiAnbGVhcm5pbmcgZm9yIGFsbCcsIFxuICBkZXNjcmlwdGlvbjogJ1VuaWZhaXJlcyBpcyBhIGdvb2QgcGxhdGZvcm0gdGhhdCBlbXBoYXNpemVzIGxlYXJuaW5nIGZvciBhbGwuIGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3R1ZXInLFxuICBidXR0b25UZXh0OiAnQ29tcGxldGUgU2lnbnVwJyxcbiAgZm9yZ290SGVhZGluZzogJ0ZvcmdvdCBQYXNzd29yZCcsXG4gIGZvcmdvdERlc2NyaXB0aW9uOiBcIkVudGVyIHRoZSBlbWFpbCBhZGRyZXNzIHlvdSBzaWduZWQgdXAgd2l0aCBhbmQgd2UnbGwgc2VuZCBhbiBlbWFpbCB3aXRoIGluc3RydWN0aW9ucyB0byByZXNldCB5b3VyIHBhc3N3b3JkLlwiLFxuICByZXNldEhlYWRpbmc6ICdSZXNldCBQYXNzd29yZCcsXG4gIHJlc2V0RGVzY3JpcHRpb246IFwiRW50ZXIgYSBuZXcgcGFzc3dvcmQgZm9yIGhlcmUsIGFuZCB0cnkgdG8gcmVtZW1iZXIgdGhpcyBvbmUgd2lsbCB5b3VcIlxufVxuXG5leHBvcnQgY29uc3Qgc2lnbnVwID0ge1xuICBoZWFkaW5nOiAnU2lnbiBVcCcsXG4gIGxvZ286IGxvZ28sXG4gIHNsb2dhbjogJ0RlbW9jcmF0aXplZCcsXG4gIHRpdGxlOiAnbGVhcm5pbmcgZm9yIGFsbCcsIFxuICBkZXNjcmlwdGlvbjogJ1VuaWZhaXJlcyBpcyBhIGdvb2QgcGxhdGZvcm0gdGhhdCBlbXBoYXNpemVzIGxlYXJuaW5nIGZvciBhbGwuIGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3R1ZXInLFxuICBidXR0b25UZXh0OiAnUHJvY2VlZCdcbn1cblxuZXhwb3J0IGNvbnN0IGZvcmdvdFBhc3MgPSB7XG4gIGhlYWRpbmc6ICdGb3Jnb3QgUGFzc3dvcmQnLFxuICBkZXNjcmlwdGlvbjogXCJFbnRlciB0aGUgZW1haWwgYWRkcmVzcyB5b3Ugc2lnbmVkIHVwIHdpdGggYW5kIHdlJ2xsIHNlbmQgYW4gZW1haWwgd2l0aCBpbnN0cnVjdGlvbnMgdG8gcmVzZXQgeW91ciBwYXNzd29yZC5cIixcbiAgYnV0dG9uVGV4dDogJ1NlbmQgUmVzZXQgTGluaydcbn1cblxuLyogLS0tLS0tLS0gQlVTSU5FU1MgTU9EVUxFIC0tLS0tLS0tLSAqL1xuXG5leHBvcnQgY29uc3QgYnVzaW5lc3NNb2R1bGUgPSB7XG4gIGNvbXBhbnk6ICdVbmlmYWlyZXMnLFxuICBzdWl0ZTogJ0J1c2luZXNzIFN1aXRlJyxcbiAgdXNlclR5cGU6ICdidXNpbmVzcycsXG4gIHVzZXJPcHRpb25zOiBbe1xuICAgIGNvdXJzZXM6IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiRGF0YSBTY2llbmNlIGZvciBJb1RcIixcbiAgICAgICAgZGF0ZUFkZGVkOiBcIjEydGggSmFuIDIwMjFcIixcbiAgICAgICAgdGh1bWJuYWlsOiBcIlwiLFxuICAgICAgICB2aWV3czogXCJcIixcbiAgICAgICAgbWVtYmVyczogXCJcIlxuICAgICAgfVxuICAgIF0sXG4gICAgam9iczogW10sXG4gICAgc2Nob2xhcnNoaXBzOiBbXSxcbiAgICBiYWRnZXM6IFtdXG4gIH1dXG59Il0sIm5hbWVzIjpbImxvZ28iLCJjb250YWN0Q2FyZCIsImhlYWRpbmciLCJzbG9nYW4iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYnV0dG9uVGV4dCIsImVtYWlsIiwiZGF0ZSIsImxpbmsiLCJtc2dDaGF0IiwibG9naW4iLCJmb3Jnb3RIZWFkaW5nIiwiZm9yZ290RGVzY3JpcHRpb24iLCJyZXNldEhlYWRpbmciLCJyZXNldERlc2NyaXB0aW9uIiwic2lnbnVwIiwiZm9yZ290UGFzcyIsImJ1c2luZXNzTW9kdWxlIiwiY29tcGFueSIsInN1aXRlIiwidXNlclR5cGUiLCJ1c2VyT3B0aW9ucyIsImNvdXJzZXMiLCJkYXRlQWRkZWQiLCJ0aHVtYm5haWwiLCJ2aWV3cyIsIm1lbWJlcnMiLCJqb2JzIiwic2Nob2xhcnNoaXBzIiwiYmFkZ2VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/common/data/appData.js\n");

/***/ })

});