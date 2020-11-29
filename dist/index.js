/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/push.js/bin/push.min.js":
/*!**********************************************!*\
  !*** ./node_modules/push.js/bin/push.min.js ***!
  \**********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, top-level-this-exports, __webpack_require__.g, __webpack_require__.* */
/*! CommonJS bailout: this is used directly at 38:157-161 */
/*! CommonJS bailout: module.exports is used directly at 38:68-82 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/**\n * @license\n *\n * Push v1.0.9\n * =========\n * A compact, cross-browser solution for the JavaScript Notifications API\n *\n * Credits\n * -------\n * Tsvetan Tsvetkov (ttsvetko)\n * Alex Gibson (alexgibson)\n *\n * License\n * -------\n *\n * The MIT License (MIT)\n *\n * Copyright (c) 2015-2017 Tyler Nickerson\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n!function(i,t){ true?module.exports=t():0}(this,function(){\"use strict\";var i={errors:{incompatible:\"\".concat(\"PushError:\",\" Push.js is incompatible with browser.\"),invalid_plugin:\"\".concat(\"PushError:\",\" plugin class missing from plugin manifest (invalid plugin). Please check the documentation.\"),invalid_title:\"\".concat(\"PushError:\",\" title of notification must be a string\"),permission_denied:\"\".concat(\"PushError:\",\" permission request declined\"),sw_notification_error:\"\".concat(\"PushError:\",\" could not show a ServiceWorker notification due to the following reason: \"),sw_registration_error:\"\".concat(\"PushError:\",\" could not register the ServiceWorker due to the following reason: \"),unknown_interface:\"\".concat(\"PushError:\",\" unable to create notification: unknown interface\")}};function t(i){return(t=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(i){return typeof i}:function(i){return i&&\"function\"==typeof Symbol&&i.constructor===Symbol&&i!==Symbol.prototype?\"symbol\":typeof i})(i)}function n(i,t){if(!(i instanceof t))throw new TypeError(\"Cannot call a class as a function\")}function e(i,t){for(var n=0;n<t.length;n++){var e=t[n];e.enumerable=e.enumerable||!1,e.configurable=!0,\"value\"in e&&(e.writable=!0),Object.defineProperty(i,e.key,e)}}function o(i,t,n){return t&&e(i.prototype,t),n&&e(i,n),i}function r(i,t){if(\"function\"!=typeof t&&null!==t)throw new TypeError(\"Super expression must either be null or a function\");i.prototype=Object.create(t&&t.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),t&&c(i,t)}function s(i){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(i){return i.__proto__||Object.getPrototypeOf(i)})(i)}function c(i,t){return(c=Object.setPrototypeOf||function(i,t){return i.__proto__=t,i})(i,t)}function a(i,t){return!t||\"object\"!=typeof t&&\"function\"!=typeof t?function(i){if(void 0===i)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return i}(i):t}var u=function(){function i(t){n(this,i),this._win=t,this.GRANTED=\"granted\",this.DEFAULT=\"default\",this.DENIED=\"denied\",this._permissions=[this.GRANTED,this.DEFAULT,this.DENIED]}return o(i,[{key:\"request\",value:function(i,t){return arguments.length>0?this._requestWithCallback.apply(this,arguments):this._requestAsPromise()}},{key:\"_requestWithCallback\",value:function(i,t){var n,e=this,o=this.get(),r=!1,s=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e._win.Notification.permission;r||(r=!0,void 0===n&&e._win.webkitNotifications&&(n=e._win.webkitNotifications.checkPermission()),n===e.GRANTED||0===n?i&&i():t&&t())};o!==this.DEFAULT?s(o):this._win.webkitNotifications&&this._win.webkitNotifications.checkPermission?this._win.webkitNotifications.requestPermission(s):this._win.Notification&&this._win.Notification.requestPermission?(n=this._win.Notification.requestPermission(s))&&n.then&&n.then(s).catch(function(){t&&t()}):i&&i()}},{key:\"_requestAsPromise\",value:function(){var i=this,t=this.get(),n=t!==this.DEFAULT,e=this._win.Notification&&this._win.Notification.requestPermission,o=this._win.webkitNotifications&&this._win.webkitNotifications.checkPermission;return new Promise(function(r,s){var c,a=!1,u=function(t){a||(a=!0,!function(t){return t===i.GRANTED||0===t}(t)?s():r())};n?u(t):o?i._win.webkitNotifications.requestPermission(function(i){u(i)}):e?(c=i._win.Notification.requestPermission(u))&&c.then&&c.then(u).catch(s):r()})}},{key:\"has\",value:function(){return this.get()===this.GRANTED}},{key:\"get\",value:function(){return this._win.Notification&&this._win.Notification.permission?this._win.Notification.permission:this._win.webkitNotifications&&this._win.webkitNotifications.checkPermission?this._permissions[this._win.webkitNotifications.checkPermission()]:navigator.mozNotification?this.GRANTED:this._win.external&&this._win.external.msIsSiteMode?this._win.external.msIsSiteMode()?this.GRANTED:this.DEFAULT:this.GRANTED}}]),i}(),f=function(){function i(){n(this,i)}return o(i,null,[{key:\"isUndefined\",value:function(i){return void 0===i}},{key:\"isNull\",value:function(i){return null===obj}},{key:\"isString\",value:function(i){return\"string\"==typeof i}},{key:\"isFunction\",value:function(i){return i&&\"[object Function]\"==={}.toString.call(i)}},{key:\"isObject\",value:function(i){return\"object\"===t(i)}},{key:\"objectMerge\",value:function(i,t){for(var n in t)i.hasOwnProperty(n)&&this.isObject(i[n])&&this.isObject(t[n])?this.objectMerge(i[n],t[n]):i[n]=t[n]}}]),i}(),l=function i(t){n(this,i),this._win=t},h=function(i){function t(){return n(this,t),a(this,s(t).apply(this,arguments))}return r(t,l),o(t,[{key:\"isSupported\",value:function(){return void 0!==this._win.Notification}},{key:\"create\",value:function(i,t){return new this._win.Notification(i,{icon:f.isString(t.icon)||f.isUndefined(t.icon)||f.isNull(t.icon)?t.icon:t.icon.x32,body:t.body,tag:t.tag,requireInteraction:t.requireInteraction})}},{key:\"close\",value:function(i){i.close()}}]),t}(),_=function(t){function e(){return n(this,e),a(this,s(e).apply(this,arguments))}return r(e,l),o(e,[{key:\"isSupported\",value:function(){return void 0!==this._win.navigator&&void 0!==this._win.navigator.serviceWorker}},{key:\"getFunctionBody\",value:function(i){var t=i.toString().match(/function[^{]+{([\\s\\S]*)}$/);return null!=t&&t.length>1?t[1]:null}},{key:\"create\",value:function(t,n,e,o,r){var s=this;this._win.navigator.serviceWorker.register(o),this._win.navigator.serviceWorker.ready.then(function(o){var c={id:t,link:e.link,origin:document.location.href,onClick:f.isFunction(e.onClick)?s.getFunctionBody(e.onClick):\"\",onClose:f.isFunction(e.onClose)?s.getFunctionBody(e.onClose):\"\"};void 0!==e.data&&null!==e.data&&(c=Object.assign(c,e.data)),o.showNotification(n,{icon:e.icon,body:e.body,vibrate:e.vibrate,tag:e.tag,data:c,requireInteraction:e.requireInteraction,silent:e.silent}).then(function(){o.getNotifications().then(function(i){o.active.postMessage(\"\"),r(i)})}).catch(function(t){throw new Error(i.errors.sw_notification_error+t.message)})}).catch(function(t){throw new Error(i.errors.sw_registration_error+t.message)})}},{key:\"close\",value:function(){}}]),e}(),v=function(i){function t(){return n(this,t),a(this,s(t).apply(this,arguments))}return r(t,l),o(t,[{key:\"isSupported\",value:function(){return void 0!==this._win.navigator.mozNotification}},{key:\"create\",value:function(i,t){var n=this._win.navigator.mozNotification.createNotification(i,t.body,t.icon);return n.show(),n}}]),t}(),d=function(i){function t(){return n(this,t),a(this,s(t).apply(this,arguments))}return r(t,l),o(t,[{key:\"isSupported\",value:function(){return void 0!==this._win.external&&void 0!==this._win.external.msIsSiteMode}},{key:\"create\",value:function(i,t){return this._win.external.msSiteModeClearIconOverlay(),this._win.external.msSiteModeSetIconOverlay(f.isString(t.icon)||f.isUndefined(t.icon)?t.icon:t.icon.x16,i),this._win.external.msSiteModeActivate(),null}},{key:\"close\",value:function(){this._win.external.msSiteModeClearIconOverlay()}}]),t}(),w=function(i){function t(){return n(this,t),a(this,s(t).apply(this,arguments))}return r(t,l),o(t,[{key:\"isSupported\",value:function(){return void 0!==this._win.webkitNotifications}},{key:\"create\",value:function(i,t){var n=this._win.webkitNotifications.createNotification(t.icon,i,t.body);return n.show(),n}},{key:\"close\",value:function(i){i.cancel()}}]),t}();return new(function(){function t(i){n(this,t),this._currentId=0,this._notifications={},this._win=i,this.Permission=new u(i),this._agents={desktop:new h(i),chrome:new _(i),firefox:new v(i),ms:new d(i),webkit:new w(i)},this._configuration={serviceWorker:\"/serviceWorker.min.js\",fallback:function(i){}}}return o(t,[{key:\"_closeNotification\",value:function(t){var n=!0,e=this._notifications[t];if(void 0!==e){if(n=this._removeNotification(t),this._agents.desktop.isSupported())this._agents.desktop.close(e);else if(this._agents.webkit.isSupported())this._agents.webkit.close(e);else{if(!this._agents.ms.isSupported())throw n=!1,new Error(i.errors.unknown_interface);this._agents.ms.close()}return n}return!1}},{key:\"_addNotification\",value:function(i){var t=this._currentId;return this._notifications[t]=i,this._currentId++,t}},{key:\"_removeNotification\",value:function(i){var t=!1;return this._notifications.hasOwnProperty(i)&&(delete this._notifications[i],t=!0),t}},{key:\"_prepareNotification\",value:function(i,t){var n,e=this;return n={get:function(){return e._notifications[i]},close:function(){e._closeNotification(i)}},t.timeout&&setTimeout(function(){n.close()},t.timeout),n}},{key:\"_serviceWorkerCallback\",value:function(i,t,n){var e=this,o=this._addNotification(i[i.length-1]);navigator&&navigator.serviceWorker&&(navigator.serviceWorker.addEventListener(\"message\",function(i){var t=JSON.parse(i.data);\"close\"===t.action&&Number.isInteger(t.id)&&e._removeNotification(t.id)}),n(this._prepareNotification(o,t))),n(null)}},{key:\"_createCallback\",value:function(i,t,n){var e,o=this,r=null;if(t=t||{},e=function(i){o._removeNotification(i),f.isFunction(t.onClose)&&t.onClose.call(o,r)},this._agents.desktop.isSupported())try{r=this._agents.desktop.create(i,t)}catch(e){var s=this._currentId,c=this.config().serviceWorker;this._agents.chrome.isSupported()&&this._agents.chrome.create(s,i,t,c,function(i){return o._serviceWorkerCallback(i,t,n)})}else this._agents.webkit.isSupported()?r=this._agents.webkit.create(i,t):this._agents.firefox.isSupported()?this._agents.firefox.create(i,t):this._agents.ms.isSupported()?r=this._agents.ms.create(i,t):(t.title=i,this.config().fallback(t));if(null!==r){var a=this._addNotification(r),u=this._prepareNotification(a,t);f.isFunction(t.onShow)&&r.addEventListener(\"show\",t.onShow),f.isFunction(t.onError)&&r.addEventListener(\"error\",t.onError),f.isFunction(t.onClick)&&r.addEventListener(\"click\",t.onClick),r.addEventListener(\"close\",function(){e(a)}),r.addEventListener(\"cancel\",function(){e(a)}),n(u)}n(null)}},{key:\"create\",value:function(t,n){var e,o=this;if(!f.isString(t))throw new Error(i.errors.invalid_title);return e=this.Permission.has()?function(i,e){try{o._createCallback(t,n,i)}catch(i){e(i)}}:function(e,r){o.Permission.request().then(function(){o._createCallback(t,n,e)}).catch(function(){r(i.errors.permission_denied)})},new Promise(e)}},{key:\"count\",value:function(){var i,t=0;for(i in this._notifications)this._notifications.hasOwnProperty(i)&&t++;return t}},{key:\"close\",value:function(i){var t;for(t in this._notifications)if(this._notifications.hasOwnProperty(t)&&this._notifications[t].tag===i)return this._closeNotification(t)}},{key:\"clear\",value:function(){var i,t=!0;for(i in this._notifications)this._notifications.hasOwnProperty(i)&&(t=t&&this._closeNotification(i));return t}},{key:\"supported\",value:function(){var i=!1;for(var t in this._agents)this._agents.hasOwnProperty(t)&&(i=i||this._agents[t].isSupported());return i}},{key:\"config\",value:function(i){return(void 0!==i||null!==i&&f.isObject(i))&&f.objectMerge(this._configuration,i),this._configuration}},{key:\"extend\",value:function(t){var n,e={}.hasOwnProperty;if(!e.call(t,\"plugin\"))throw new Error(i.errors.invalid_plugin);for(var o in e.call(t,\"config\")&&f.isObject(t.config)&&null!==t.config&&this.config(t.config),n=new(0,t.plugin)(this.config()))e.call(n,o)&&f.isFunction(n[o])&&(this[o]=n[o])}}]),t}())(\"undefined\"!=typeof window?window:__webpack_require__.g)});\n//# sourceMappingURL=push.min.js.map\n\n\n//# sourceURL=webpack://timer/./node_modules/push.js/bin/push.min.js?");

/***/ }),

/***/ "./ts/State.ts":
/*!*********************!*\
  !*** ./ts/State.ts ***!
  \*********************/
/*! flagged exports */
/*! export State [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export stateList [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.State = exports.stateList = void 0;\nvar Timer_1 = __webpack_require__(/*! ./Timer */ \"./ts/Timer.ts\");\nvar stateList;\n(function (stateList) {\n    stateList[stateList[\"INIT\"] = 0] = \"INIT\";\n    stateList[stateList[\"WORKING\"] = 1] = \"WORKING\";\n    stateList[stateList[\"WORKED\"] = 2] = \"WORKED\";\n    stateList[stateList[\"BREAKING\"] = 3] = \"BREAKING\";\n    stateList[stateList[\"BREAKED\"] = 4] = \"BREAKED\";\n})(stateList = exports.stateList || (exports.stateList = {}));\nvar State = /** @class */ (function () {\n    function State() {\n        this.state = stateList.INIT;\n        this.timer = new Timer_1.Timer(25);\n        this.updateView();\n    }\n    State.prototype.initState = function () {\n        this.state = stateList.INIT;\n        this.updateView();\n    };\n    State.prototype.updateState = function () {\n        if (this.state == stateList.BREAKED) {\n            this.state = stateList.WORKING;\n        }\n        else {\n            this.state += 1;\n        }\n        this.updateView();\n    };\n    State.prototype.updateView = function () {\n        this.timer.stopTimer();\n        if (this.state == stateList.INIT) {\n            var minuteFormElem = document.getElementById('workMinute');\n            this.timer.setTimer(parseInt(minuteFormElem.value), 'start work');\n        }\n        else if (this.state == stateList.WORKING) {\n            var minuteFormElem = document.getElementById('workMinute');\n            this.timer.setTimer(parseInt(minuteFormElem.value), 'stop');\n            this.timer.startWork();\n        }\n        else if (this.state == stateList.WORKED) {\n            var minuteFormElem = document.getElementById('breakMinute');\n            this.timer.setTimer(parseInt(minuteFormElem.value), 'start break');\n        }\n        else if (this.state == stateList.BREAKING) {\n            var minuteFormElem = document.getElementById('breakMinute');\n            this.timer.setTimer(parseInt(minuteFormElem.value), 'stop');\n            this.timer.startBreak();\n        }\n        else if (this.state == stateList.BREAKED) {\n            var minuteFormElem = document.getElementById('workMinute');\n            this.timer.setTimer(parseInt(minuteFormElem.value), 'start work');\n        }\n        else {\n            console.log('は?');\n        }\n        console.log(this.state);\n    };\n    return State;\n}());\nexports.State = State;\n\n\n//# sourceURL=webpack://timer/./ts/State.ts?");

/***/ }),

/***/ "./ts/Timer.ts":
/*!*********************!*\
  !*** ./ts/Timer.ts ***!
  \*********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Timer = void 0;\nvar push_js_1 = __importDefault(__webpack_require__(/*! push.js */ \"./node_modules/push.js/bin/push.min.js\"));\nvar Timer = /** @class */ (function () {\n    function Timer(minute) {\n        this.finishAt = new Date();\n        this.finishAt.setMinutes(this.finishAt.getMinutes() + minute);\n        this.minute = minute;\n        this.second = 0;\n        this.timerInterval = null;\n        this.isPush = false;\n        this.makePushPermission();\n    }\n    Timer.prototype.updateFinishAt = function (minute) {\n        var now = new Date();\n        this.finishAt.setMinutes(now.getMinutes() + minute);\n        this.minute = minute;\n        this.second = 0;\n    };\n    Timer.prototype.startWork = function () {\n        var _this = this;\n        this.timerInterval = setInterval(function () {\n            var timerMinuteElem = document.getElementById('timerMinute');\n            var timerSecondElem = document.getElementById('timerSecond');\n            if (_this.minute == 0 && _this.second == 0) {\n                _this.stopTimer();\n                // alert('Break!!!')\n                push_js_1.default.create(\"Hello world!\", {\n                    body: \"How's it hangin'?\",\n                    // icon: 'icon.png',\n                    timeout: 4000,\n                });\n            }\n            else if (_this.second == 0) {\n                _this.minute -= 1;\n                _this.second = 59;\n            }\n            else {\n                _this.second -= 1;\n            }\n            timerMinuteElem.innerText = String(_this.minute);\n            timerSecondElem.innerText = ' : ' + String(_this.second);\n        }, 1000);\n    };\n    Timer.prototype.startBreak = function () {\n        var _this = this;\n        this.timerInterval = setInterval(function () {\n            var timerMinuteElem = document.getElementById('timerMinute');\n            var timerSecondElem = document.getElementById('timerSecond');\n            if (_this.minute == 0 && _this.second == 0) {\n                _this.stopTimer();\n                alert('Break!!!');\n            }\n            else if (_this.second == 0) {\n                _this.minute -= 1;\n                _this.second = 59;\n            }\n            else {\n                _this.second -= 1;\n            }\n            timerMinuteElem.innerText = String(_this.minute);\n            timerSecondElem.innerText = ' : ' + String(_this.second);\n        }, 1000);\n    };\n    Timer.prototype.stopTimer = function () {\n        if (this.timerInterval) {\n            clearInterval(this.timerInterval);\n        }\n    };\n    Timer.prototype.setTimer = function (minute, stateName) {\n        console.log('settimer');\n        var startButtonElem = document.getElementById('startButton');\n        startButtonElem.innerText = stateName;\n        this.updateFinishAt(minute);\n        var timerElem = document.getElementById('timer');\n        timerElem.innerText = String(this.finishAt.getHours()) + ' : ' + String(this.finishAt.getMinutes()) + ' : ' + String(this.finishAt.getSeconds());\n        var timerMinuteElem = document.getElementById('timerMinute');\n        var timerSecondElem = document.getElementById('timerSecond');\n        timerMinuteElem.innerText = String(this.minute);\n        timerSecondElem.innerText = ' : ' + String(this.second);\n    };\n    Timer.prototype.makePushPermission = function () {\n        // Push.Permission.request(this.onGranted, this.onDenied);\n        // Push.Permission.request();\n        push_js_1.default.create(\"Hello world!\", {\n            body: \"How's it hangin'?\",\n            // icon: 'icon.png',\n            timeout: 4000,\n        });\n        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');\n    };\n    return Timer;\n}());\nexports.Timer = Timer;\n\n\n//# sourceURL=webpack://timer/./ts/Timer.ts?");

/***/ }),

/***/ "./ts/index.ts":
/*!*********************!*\
  !*** ./ts/index.ts ***!
  \*********************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n// import UUID from \"uuid\";\nvar State_1 = __webpack_require__(/*! ./State */ \"./ts/State.ts\");\nvar state = new State_1.State();\nvar startbutton = document.getElementById(\"startButton\");\nstartbutton.addEventListener('click', function () {\n    state.updateState();\n});\n// startbutton.addEventListener('load', () => {\n//     state.updateState();\n// });\n\n\n//# sourceURL=webpack://timer/./ts/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./ts/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;