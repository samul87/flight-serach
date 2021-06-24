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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nbody {\n  /*background: #f1f3fa;*/\n  width: 100%;\n  height: 100%;\n  font-size: 100%;\n  background: #000428;\n  /* fallback for old browsers */\n  background: -webkit-linear-gradient(to right, #000428, #004e92);\n  background: linear-gradient(to right, #000428, #004e92);\n  background-size: cover; }\n\n.navbar i {\n  padding: 0 2px; }\n\n.footer {\n  color: white; }\n\n.navbar-toggler {\n  color: white;\n  outline: none;\n  border-radius: 45%;\n  background: #000428; }\n\n.collapsed {\n  background: transparent; }\n\nbutton:focus {\n  outline: none; }\n\nhtml {\n  height: 100%;\n  width: 100%; }\n\n.navbar {\n  width: 100%;\n  margin-bottom: 25px; }\n\n.thumb-div {\n  margin-top: 20%; }\n\n.hello-div {\n  margin-top: 56%; }\n\n#slideshow {\n  position: relative; }\n\n#slideshow > div {\n  position: absolute; }\n\n#slideshow1 {\n  position: relative; }\n\n#slideshow2 {\n  position: relative; }\n\n#slideshow1 > div {\n  position: absolute; }\n\n#slideshow2 > div {\n  position: absolute; }\n\n.search-form {\n  width: 20%;\n  border: none;\n  float: left;\n  height: 3rem;\n  text-align: center;\n  outline: none;\n  border-radius: 0; }\n\n.from {\n  border-radius: 7px 0 0 7px; }\n\n.search-form:hover {\n  border-bottom: solid #007bff 2px; }\n\n.search-button {\n  width: 20%;\n  border: none;\n  height: 3rem;\n  color: white;\n  outline: none;\n  border-radius: 0 7px 7px 0; }\n\n#cards {\n  opacity: 0; }\n\n.flip-card-inner {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 0.6s;\n  transform-style: preserve-3d;\n  /*box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);*/ }\n\n.flip-card:hover .flip-card-inner {\n  transform: rotateY(180deg); }\n\n.flip-card-front,\n.flip-card-back {\n  width: 100%;\n  height: 100%;\n  /*backface-visibility: hidden;*/ }\n\n.flip-card-front {\n  /*background-color: #bbb;*/\n  color: black; }\n\n.flip-card-back {\n  /*background-color: #2980b9;*/\n  /*color: white;*/\n  transform: rotateY(180deg); }\n\n.min {\n  min-width: 200px; }\n\n.city-list {\n  color: white;\n  list-style: none;\n  margin-top: 20px;\n  overflow: auto;\n  height: 100%;\n  display: flex;\n  flex-direction: row; }\n  .city-list > div {\n    display: flex;\n    align-items: center;\n    gap: 4px; }\n\n@media only screen and (max-width: 900px) {\n  .img-resp {\n    width: 300px; } }\n\n@media only screen and (min-width: 900px) {\n  .img-resp {\n    width: 800px; } }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/UI.ts":
/*!*******************!*\
  !*** ./src/UI.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UI = void 0;
__webpack_require__(/*! ./style.scss */ "./src/style.scss");
var LIST_ELEMTNS;
(function (LIST_ELEMTNS) {
    LIST_ELEMTNS["name"] = "name";
    LIST_ELEMTNS["temp"] = "temp";
    LIST_ELEMTNS["pressure"] = "press";
    LIST_ELEMTNS["icon"] = "icon";
})(LIST_ELEMTNS || (LIST_ELEMTNS = {}));
var WEATHER_TYPES;
(function (WEATHER_TYPES) {
    WEATHER_TYPES["thunderstorm"] = "2";
    WEATHER_TYPES["drizzle"] = "3";
    WEATHER_TYPES["rain"] = "5";
    WEATHER_TYPES["snow"] = "6";
    WEATHER_TYPES["atmosphere"] = "7";
    WEATHER_TYPES["clear"] = "8";
})(WEATHER_TYPES || (WEATHER_TYPES = {}));
class UI {
    constructor(main) {
        this.mainContext = main;
    }
    flightPlan(event) {
        const destination = document.getElementById("destination");
        const dateFlight = document.getElementById("dateFlight");
        const people = document.getElementById("people");
        const flight = document.getElementById("flight");
        const flightBoston = document.getElementById("flightBoston");
        const flightLondon = document.getElementById("flightLondon");
        const flightWarsaw = document.getElementById("flightWarsaw");
        const destinationValue = destination.value.toLowerCase();
        switch (destinationValue) {
            case "boston":
                flight.style.display = "block";
                flightBoston.style.display = "block";
                return;
            case "warsaw":
                flight.style.display = "block";
                flightWarsaw.style.display = "block";
                return;
            case "london":
                flight.style.display = "block";
                flightLondon.style.display = "block";
                return;
            default:
                return;
        }
    }
    complete() {
        const comSour = document.getElementById("comSour");
        const comDest = document.getElementById("comDest");
        const comDate = document.getElementById("comDate");
        const comBag = document.getElementById("comBag");
        const comSet = document.getElementById("comSet");
        const comPrice = document.getElementById("comPrice");
        const dest = document.querySelector("#destination");
        const dateFlight = document.querySelector("#dateFlight");
        comDest.textContent = `Destination : ${dest.value}`;
        comDate.textContent = `Date : ${dateFlight.value}`;
    }
    book(event) {
        const flight = document.getElementById("flight");
        const flightBoston = document.getElementById("flightBoston");
        const flightLondon = document.getElementById("flightLondon");
        const flightWarsaw = document.getElementById("flightWarsaw");
        const flightBostonBooks = document.getElementById("flightBostonBooks");
        const flightLondonBooks = document.getElementById("flightLondonBooks");
        const flightWarsawBooks = document.getElementById("flightWarsawBooks");
        const destination = document.getElementById("destination");
        const destinationValue = destination.value.toLowerCase();
        switch (destinationValue) {
            case "boston":
                flight.style.display = "none";
                flightBoston.style.display = "none";
                flightBostonBooks.style.display = "block";
                break;
            case "warsaw":
                flight.style.display = "none";
                flightWarsaw.style.display = "none";
                flightWarsawBooks.style.display = "block";
                break;
            case "london":
                flight.style.display = "none";
                flightLondon.style.display = "none";
                flightLondonBooks.style.display = "block";
                break;
            default:
                return;
        }
        const btnComplete = document.querySelectorAll(".btnComplete");
        btnComplete.forEach((element) => {
            return element.addEventListener("click", (e) => {
                flightBostonBooks.style.display = "none";
                flightLondonBooks.style.display = "none";
                flightWarsawBooks.style.display = "none";
                let container = e.target.closest(".bookFlight");
                const people = document.getElementById("people");
                let handLuggage = container.querySelector("input[name=handLuggage]:checked");
                let smallBug = container.querySelector("input[name=smallBug]:checked");
                let checkedInBag = container.querySelector("input[name=checkedInBag]:checked");
                let seat = container.querySelector("input[name=seat]");
                const comDest = document.getElementById("comDest");
                const comDate = document.getElementById("comDate");
                const comBag = document.getElementById("comBag");
                const comSet = document.getElementById("comSet");
                const comPrice = document.getElementById("comPrice");
                const dest = document.querySelector("#destination");
                const price = dest.value.toLowerCase() == "london"
                    ? 100
                    : dest.value.toLowerCase() == "boston"
                        ? 1000
                        : 50;
                const dateFlight = document.querySelector("#dateFlight");
                comDest.textContent = `Destination : ${dest.value}`;
                comDate.textContent = `Date : ${dateFlight.value}`;
                comBag.textContent = `Bag  : ${handLuggage
                    ? "handLuggage"
                    : smallBug
                        ? "small bag"
                        : checkedInBag
                            ? "Checked In bag"
                            : ""}`;
                comSet.textContent = `Seat : ${seat.value}`;
                comPrice.innerHTML = `Price : ${price * people.value}  <select>
        <option>USD</option>
        <option>PLN</option>
        <option>EUR</option>
      </select>`;
                const complete = document.getElementById("complete");
                complete.style.display = "block";
                const finish = document.getElementById("finish");
                finish.addEventListener("click", () => {
                    complete.style.display = "none";
                    alert("Thank you. You have successfully Booked your Tickets");
                });
            });
        });
    }
    populateListElement(element, weatherData) {
        const parentId = element.id;
        const iconEl = document.querySelector(`#${parentId} #${parentId}_${LIST_ELEMTNS.icon}`);
        iconEl.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
        iconEl.alt = weatherData.weather[0].description;
        iconEl.title = weatherData.weather[0].description;
        document.querySelector(`#${parentId} #${parentId}_${LIST_ELEMTNS.name}`).innerHTML = weatherData.name;
        let d = new Date(weatherData.dt * 1000);
        document.querySelector(`#${parentId} #${parentId}_${LIST_ELEMTNS.pressure}`).innerHTML = `${d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear()} `;
        document.querySelector(`#${parentId} #${parentId}_${LIST_ELEMTNS.temp}`).innerHTML = `${(weatherData.main.temp / 10).toFixed(1)}°C`;
        return element;
    }
    renderWeatherElement(weatherData, elementId) {
        const wrapper = document.getElementById("cityList");
        const element = document.createElement("div");
        element.className = "col-lg-4 col-md-4 col-sm-6";
        element.id = elementId;
        const elementBtn = document.createElement("button");
        const elementBtnContainer = document.createElement("div");
        const elementBtnContainerChild = document.createElement("div");
        elementBtnContainer.className =
            "img-thumbnail img-fluid thumb-div flip-card min";
        elementBtnContainerChild.style.display = "flex";
        elementBtnContainerChild.style.flexDirection = "column";
        const nameEl = document.createElement("p");
        nameEl.id = `${elementId}_${LIST_ELEMTNS.name}`;
        elementBtnContainerChild.appendChild(nameEl);
        const tempEl = document.createElement("span");
        tempEl.id = `${elementId}_${LIST_ELEMTNS.temp}`;
        elementBtnContainerChild.appendChild(tempEl);
        const pressEl = document.createElement("span");
        pressEl.id = `${elementId}_${LIST_ELEMTNS.pressure}`;
        elementBtnContainerChild.appendChild(pressEl);
        const iconEl = document.createElement("img");
        iconEl.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
        iconEl.id = `${elementId}_${LIST_ELEMTNS.icon}`;
        elementBtnContainer.appendChild(elementBtnContainerChild);
        elementBtnContainer.appendChild(iconEl);
        elementBtn.appendChild(elementBtnContainer);
        element.appendChild(elementBtn);
        wrapper.appendChild(element);
        this.populateListElement(element, weatherData);
    }
    renderWeatherList(weatherData, force = false) {
        if (force) {
            const wrapper = document.getElementById("cityList");
            wrapper.innerHTML = null;
        }
        weatherData.forEach((data) => {
            const elementId = `listEl_${data.id}`;
            const element = document.getElementById(elementId);
            if (element)
                this.populateListElement(element, data);
            else
                this.renderWeatherElement(data, elementId);
        });
    }
}
exports.UI = UI;


/***/ }),

/***/ "./src/User.ts":
/*!*********************!*\
  !*** ./src/User.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const apiCaller_1 = __webpack_require__(/*! ./apiCaller */ "./src/apiCaller.ts");
class User {
    constructor(main) {
        this.mainContext = main;
        this.apiCaller = new apiCaller_1.ApiCaller();
    }
    register() {
        $.ajax({
            type: "POST",
            url: "http://127.0.0.1:3000/register",
            data: $("#form1").serialize(),
            dataType: "json",
            success: function (response) {
                $("#form1")[0].reset();
                document.getElementById("checkRegister").innerHTML = response.Success;
                setTimeout(function () {
                    document.getElementById("checkRegister").innerHTML = "";
                }, 3000);
            },
            error: function () { },
        });
    }
    login() {
        let self = this;
        $.ajax({
            type: "POST",
            url: "http://127.0.0.1:3000/login",
            data: $("#formLogin").serialize(),
            dataType: "json",
            success: function (response) {
                console.log(response);
                $("#formLogin")[0].reset();
                if (response.Success == "Success!") {
                    let data = { data: "userExist" };
                    self.apiCaller.saveDataUser(data);
                }
                document.getElementById("checkLogin").innerHTML = response.Success;
                setTimeout(function () {
                    document.getElementById("checkLogin").innerHTML = "";
                }, 3000);
            },
            error: function () { },
        });
    }
}
exports.User = User;


/***/ }),

/***/ "./src/apiCaller.ts":
/*!**************************!*\
  !*** ./src/apiCaller.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiCaller = exports.DATA_KEY_USER = exports.DATA_KEY = void 0;
exports.DATA_KEY = "weather_data";
exports.DATA_KEY_USER = "user_data";
const header = {
    method: "GET",
    headers: {
        "x-rapidapi-key": "8ecc96afd7mshb2cd585157a748ep1e8143jsn4b75af5a8309",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
    },
};
class ApiCaller {
    constructor() {
        this.callData("London");
        this.callData("warsaw");
        this.callData("boston");
    }
    callData(city) {
        return __awaiter(this, void 0, void 0, function* () {
            if (city) {
                const weather = yield this.getWeatherData(city);
                if (weather.cod == 200) {
                    this.saveData(weather);
                }
            }
        });
    }
    getWeatherData(city) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiURL = `https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&units=%22metric%22%20or%20%22imperial%22`;
            const weatherResp = yield fetch(apiURL, header);
            const weatherData = yield weatherResp.json();
            return weatherData;
        });
    }
    saveData(data) {
        const currentData = this.getData();
        const indexInLS = currentData.findIndex((val) => val.id === data.id);
        if (indexInLS !== -1) {
            currentData[indexInLS] = data;
            localStorage.setItem(exports.DATA_KEY, JSON.stringify(currentData));
            return;
        }
        localStorage.setItem(exports.DATA_KEY, JSON.stringify([...currentData, data]));
    }
    saveDataUser(data) {
        localStorage.setItem(exports.DATA_KEY_USER, JSON.stringify(data));
    }
    getDataUser() {
        const data = localStorage.getItem(exports.DATA_KEY_USER);
        if (data)
            return JSON.parse(data);
        return [];
    }
    getData() {
        const data = localStorage.getItem(exports.DATA_KEY);
        if (data)
            return JSON.parse(data);
        return [];
    }
}
exports.ApiCaller = ApiCaller;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
__webpack_require__(/*! ./style.scss */ "./src/style.scss");
const apiCaller_1 = __webpack_require__(/*! ./apiCaller */ "./src/apiCaller.ts");
const UI_1 = __webpack_require__(/*! ./UI */ "./src/UI.ts");
const User_1 = __webpack_require__(/*! ./User */ "./src/User.ts");
class Main {
    constructor() {
        this.apiCaller = new apiCaller_1.ApiCaller();
        this.UI = new UI_1.UI(this);
        this.User = new User_1.User(this);
        this.weatherData = this.apiCaller.getData();
        this.bindInputEvents();
    }
    bindInputEvents() {
        let self = this;
        setTimeout(function () {
            self.UI.renderWeatherList(self.weatherData);
        }, 3000);
        const registerForm = document.getElementById("form1");
        const loginForm = document.getElementById("formLogin");
        const formFlight = document.getElementById("formFlight");
        registerForm.addEventListener("submit", (event) => {
            event.preventDefault();
            this.User.register();
        });
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            this.User.login();
        });
        formFlight.addEventListener("submit", (event) => {
            event.preventDefault();
            console.log(this.apiCaller.getDataUser());
            if (this.apiCaller.getDataUser().length < 1) {
                alert("You must loggIn");
                return;
            }
            this.UI.flightPlan(event);
            const bookBtn = document.querySelectorAll(".bookBtn");
            bookBtn.forEach((element) => {
                return element.addEventListener("click", this.UI.book);
            });
        });
    }
}
exports.Main = Main;
new Main();


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VJLnRzIiwid2VicGFjazovLy8uL3NyYy9Vc2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlDYWxsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0Esa0NB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RCxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQzFCLE9BQU8sT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pELENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUFqREQsb0JBaURDO0FBRUQsSUFBSSxJQUFJLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7O0FDeERYLFVBQVUsbUJBQU8sQ0FBQyxtSkFBd0U7QUFDMUYsMEJBQTBCLG1CQUFPLENBQUMsbU1BQStGOztBQUVqSTs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQSwwQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IH1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxOyB9XFxuXFxub2wsIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7IH1cXG5cXG5ibG9ja3F1b3RlLCBxIHtcXG4gIHF1b3Rlczogbm9uZTsgfVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgY29udGVudDogbm9uZTsgfVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDsgfVxcblxcbmJvZHkge1xcbiAgLypiYWNrZ3JvdW5kOiAjZjFmM2ZhOyovXFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICMwMDA0Mjg7XFxuICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwMDQyOCwgIzAwNGU5Mik7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDA0MjgsICMwMDRlOTIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgfVxcblxcbi5uYXZiYXIgaSB7XFxuICBwYWRkaW5nOiAwIDJweDsgfVxcblxcbi5mb290ZXIge1xcbiAgY29sb3I6IHdoaXRlOyB9XFxuXFxuLm5hdmJhci10b2dnbGVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA0NSU7XFxuICBiYWNrZ3JvdW5kOiAjMDAwNDI4OyB9XFxuXFxuLmNvbGxhcHNlZCB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxcblxcbmJ1dHRvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lOyB9XFxuXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5uYXZiYXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAyNXB4OyB9XFxuXFxuLnRodW1iLWRpdiB7XFxuICBtYXJnaW4tdG9wOiAyMCU7IH1cXG5cXG4uaGVsbG8tZGl2IHtcXG4gIG1hcmdpbi10b3A6IDU2JTsgfVxcblxcbiNzbGlkZXNob3cge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuI3NsaWRlc2hvdyA+IGRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cXG5cXG4jc2xpZGVzaG93MSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4jc2xpZGVzaG93MiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4jc2xpZGVzaG93MSA+IGRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cXG5cXG4jc2xpZGVzaG93MiA+IGRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cXG5cXG4uc2VhcmNoLWZvcm0ge1xcbiAgd2lkdGg6IDIwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDA7IH1cXG5cXG4uZnJvbSB7XFxuICBib3JkZXItcmFkaXVzOiA3cHggMCAwIDdweDsgfVxcblxcbi5zZWFyY2gtZm9ybTpob3ZlciB7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAjMDA3YmZmIDJweDsgfVxcblxcbi5zZWFyY2gtYnV0dG9uIHtcXG4gIHdpZHRoOiAyMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMCA3cHggN3B4IDA7IH1cXG5cXG4jY2FyZHMge1xcbiAgb3BhY2l0eTogMDsgfVxcblxcbi5mbGlwLWNhcmQtaW5uZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cztcXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICAvKmJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTsqLyB9XFxuXFxuLmZsaXAtY2FyZDpob3ZlciAuZmxpcC1jYXJkLWlubmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpOyB9XFxuXFxuLmZsaXAtY2FyZC1mcm9udCxcXG4uZmxpcC1jYXJkLWJhY2sge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAvKmJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsqLyB9XFxuXFxuLmZsaXAtY2FyZC1mcm9udCB7XFxuICAvKmJhY2tncm91bmQtY29sb3I6ICNiYmI7Ki9cXG4gIGNvbG9yOiBibGFjazsgfVxcblxcbi5mbGlwLWNhcmQtYmFjayB7XFxuICAvKmJhY2tncm91bmQtY29sb3I6ICMyOTgwYjk7Ki9cXG4gIC8qY29sb3I6IHdoaXRlOyovXFxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTsgfVxcblxcbi5taW4ge1xcbiAgbWluLXdpZHRoOiAyMDBweDsgfVxcblxcbi5jaXR5LWxpc3Qge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XFxuICAuY2l0eS1saXN0ID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA0cHg7IH1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAuaW1nLXJlc3Age1xcbiAgICB3aWR0aDogMzAwcHg7IH0gfVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHgpIHtcXG4gIC5pbWctcmVzcCB7XFxuICAgIHdpZHRoOiA4MDBweDsgfSB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xyXG5cclxuaW1wb3J0IHsgSVdlYXRoZXJEYXRhIH0gZnJvbSBcIi4vaW50ZXJmYWNlXCI7XHJcblxyXG5pbXBvcnQgeyBNYWluIH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuXHJcbmVudW0gTElTVF9FTEVNVE5TIHtcclxuICBuYW1lID0gXCJuYW1lXCIsXHJcbiAgdGVtcCA9IFwidGVtcFwiLFxyXG4gIHByZXNzdXJlID0gXCJwcmVzc1wiLFxyXG4gIGljb24gPSBcImljb25cIixcclxufVxyXG5cclxuZW51bSBXRUFUSEVSX1RZUEVTIHtcclxuICB0aHVuZGVyc3Rvcm0gPSBcIjJcIixcclxuICBkcml6emxlID0gXCIzXCIsXHJcbiAgcmFpbiA9IFwiNVwiLFxyXG4gIHNub3cgPSBcIjZcIixcclxuICBhdG1vc3BoZXJlID0gXCI3XCIsXHJcbiAgY2xlYXIgPSBcIjhcIixcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVJIHtcclxuICBtYWluQ29udGV4dDogTWFpbjtcclxuICBjb25zdHJ1Y3RvcihtYWluOiBNYWluKSB7XHJcbiAgICB0aGlzLm1haW5Db250ZXh0ID0gbWFpbjtcclxuICB9XHJcblxyXG4gIGZsaWdodFBsYW4oZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBjb25zdCBkZXN0aW5hdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICBcImRlc3RpbmF0aW9uXCJcclxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IGRhdGVGbGlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVGbGlnaHRcIik7XHJcbiAgICBjb25zdCBwZW9wbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBlb3BsZVwiKTtcclxuICAgIGNvbnN0IGZsaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmxpZ2h0XCIpO1xyXG4gICAgY29uc3QgZmxpZ2h0Qm9zdG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmbGlnaHRCb3N0b25cIik7XHJcbiAgICBjb25zdCBmbGlnaHRMb25kb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZsaWdodExvbmRvblwiKTtcclxuICAgIGNvbnN0IGZsaWdodFdhcnNhdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmxpZ2h0V2Fyc2F3XCIpO1xyXG4gICAgY29uc3QgZGVzdGluYXRpb25WYWx1ZTogc3RyaW5nID0gZGVzdGluYXRpb24udmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgIHN3aXRjaCAoZGVzdGluYXRpb25WYWx1ZSkge1xyXG4gICAgICBjYXNlIFwiYm9zdG9uXCI6XHJcbiAgICAgICAgZmxpZ2h0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgZmxpZ2h0Qm9zdG9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICBjYXNlIFwid2Fyc2F3XCI6XHJcbiAgICAgICAgZmxpZ2h0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgZmxpZ2h0V2Fyc2F3LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICBjYXNlIFwibG9uZG9uXCI6XHJcbiAgICAgICAgZmxpZ2h0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgZmxpZ2h0TG9uZG9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcbiAgY29tcGxldGUoKSB7XHJcbiAgICBjb25zdCBjb21Tb3VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21Tb3VyXCIpO1xyXG4gICAgY29uc3QgY29tRGVzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tRGVzdFwiKTtcclxuICAgIGNvbnN0IGNvbURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbURhdGVcIik7XHJcbiAgICBjb25zdCBjb21CYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbUJhZ1wiKTtcclxuICAgIGNvbnN0IGNvbVNldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tU2V0XCIpO1xyXG4gICAgY29uc3QgY29tUHJpY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbVByaWNlXCIpO1xyXG4gICAgY29uc3QgZGVzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzdGluYXRpb25cIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IGRhdGVGbGlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcIiNkYXRlRmxpZ2h0XCJcclxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbURlc3QudGV4dENvbnRlbnQgPSBgRGVzdGluYXRpb24gOiAke2Rlc3QudmFsdWV9YDtcclxuICAgIGNvbURhdGUudGV4dENvbnRlbnQgPSBgRGF0ZSA6ICR7ZGF0ZUZsaWdodC52YWx1ZX1gO1xyXG4gIH1cclxuICAvLyBmdW5rY2phIHogYm9va1xyXG4gIGJvb2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBjb25zdCBmbGlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZsaWdodFwiKTtcclxuICAgIGNvbnN0IGZsaWdodEJvc3RvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmxpZ2h0Qm9zdG9uXCIpO1xyXG4gICAgY29uc3QgZmxpZ2h0TG9uZG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmbGlnaHRMb25kb25cIik7XHJcbiAgICBjb25zdCBmbGlnaHRXYXJzYXcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZsaWdodFdhcnNhd1wiKTtcclxuICAgIGNvbnN0IGZsaWdodEJvc3RvbkJvb2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmbGlnaHRCb3N0b25Cb29rc1wiKTtcclxuICAgIGNvbnN0IGZsaWdodExvbmRvbkJvb2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmbGlnaHRMb25kb25Cb29rc1wiKTtcclxuICAgIGNvbnN0IGZsaWdodFdhcnNhd0Jvb2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmbGlnaHRXYXJzYXdCb29rc1wiKTtcclxuICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgIFwiZGVzdGluYXRpb25cIlxyXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uc3QgZGVzdGluYXRpb25WYWx1ZTogc3RyaW5nID0gZGVzdGluYXRpb24udmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgIHN3aXRjaCAoZGVzdGluYXRpb25WYWx1ZSkge1xyXG4gICAgICBjYXNlIFwiYm9zdG9uXCI6XHJcbiAgICAgICAgZmxpZ2h0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBmbGlnaHRCb3N0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGZsaWdodEJvc3RvbkJvb2tzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJ3YXJzYXdcIjpcclxuICAgICAgICBmbGlnaHQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGZsaWdodFdhcnNhdy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgZmxpZ2h0V2Fyc2F3Qm9va3Muc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImxvbmRvblwiOlxyXG4gICAgICAgIGZsaWdodC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgZmxpZ2h0TG9uZG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBmbGlnaHRMb25kb25Cb29rcy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGJ0bkNvbXBsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idG5Db21wbGV0ZVwiKTtcclxuICAgIC8vIFxyXG4gICAgYnRuQ29tcGxldGUuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICByZXR1cm4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBmbGlnaHRCb3N0b25Cb29rcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgZmxpZ2h0TG9uZG9uQm9va3Muc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGZsaWdodFdhcnNhd0Jvb2tzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBsZXQgY29udGFpbmVyID0gZS50YXJnZXQuY2xvc2VzdChcIi5ib29rRmxpZ2h0XCIpO1xyXG4gICAgICAgIGNvbnN0IHBlb3BsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGVvcGxlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IGhhbmRMdWdnYWdlID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICBcImlucHV0W25hbWU9aGFuZEx1Z2dhZ2VdOmNoZWNrZWRcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGV0IHNtYWxsQnVnID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPXNtYWxsQnVnXTpjaGVja2VkXCIpO1xyXG4gICAgICAgIGxldCBjaGVja2VkSW5CYWcgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgIFwiaW5wdXRbbmFtZT1jaGVja2VkSW5CYWddOmNoZWNrZWRcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGV0IHNlYXQgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9c2VhdF1cIik7XHJcbiAgICAgICAgY29uc3QgY29tRGVzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tRGVzdFwiKTtcclxuICAgICAgICBjb25zdCBjb21EYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21EYXRlXCIpO1xyXG4gICAgICAgIGNvbnN0IGNvbUJhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tQmFnXCIpO1xyXG4gICAgICAgIGNvbnN0IGNvbVNldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tU2V0XCIpO1xyXG4gICAgICAgIGNvbnN0IGNvbVByaWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21QcmljZVwiKTtcclxuICAgICAgICBjb25zdCBkZXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXN0aW5hdGlvblwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IHByaWNlID1cclxuICAgICAgICAgIGRlc3QudmFsdWUudG9Mb3dlckNhc2UoKSA9PSBcImxvbmRvblwiXHJcbiAgICAgICAgICAgID8gMTAwXHJcbiAgICAgICAgICAgIDogZGVzdC52YWx1ZS50b0xvd2VyQ2FzZSgpID09IFwiYm9zdG9uXCJcclxuICAgICAgICAgICAgICA/IDEwMDBcclxuICAgICAgICAgICAgICA6IDUwO1xyXG4gICAgICAgIGNvbnN0IGRhdGVGbGlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgXCIjZGF0ZUZsaWdodFwiXHJcbiAgICAgICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIGNvbURlc3QudGV4dENvbnRlbnQgPSBgRGVzdGluYXRpb24gOiAke2Rlc3QudmFsdWV9YDtcclxuICAgICAgICBjb21EYXRlLnRleHRDb250ZW50ID0gYERhdGUgOiAke2RhdGVGbGlnaHQudmFsdWV9YDtcclxuICAgICAgICBjb21CYWcudGV4dENvbnRlbnQgPSBgQmFnICA6ICR7aGFuZEx1Z2dhZ2VcclxuICAgICAgICAgICAgPyBcImhhbmRMdWdnYWdlXCJcclxuICAgICAgICAgICAgOiBzbWFsbEJ1Z1xyXG4gICAgICAgICAgICAgID8gXCJzbWFsbCBiYWdcIlxyXG4gICAgICAgICAgICAgIDogY2hlY2tlZEluQmFnXHJcbiAgICAgICAgICAgICAgICA/IFwiQ2hlY2tlZCBJbiBiYWdcIlxyXG4gICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICB9YDtcclxuICAgICAgICBjb21TZXQudGV4dENvbnRlbnQgPSBgU2VhdCA6ICR7c2VhdC52YWx1ZX1gO1xyXG4gICAgICAgIGNvbVByaWNlLmlubmVySFRNTCA9IGBQcmljZSA6ICR7cHJpY2UgKiBwZW9wbGUudmFsdWV9ICA8c2VsZWN0PlxyXG4gICAgICAgIDxvcHRpb24+VVNEPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbj5QTE48L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uPkVVUjwvb3B0aW9uPlxyXG4gICAgICA8L3NlbGVjdD5gO1xyXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21wbGV0ZVwiKTtcclxuICAgICAgICBjb21wbGV0ZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIGNvbnN0IGZpbmlzaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmluaXNoXCIpO1xyXG4gICAgICAgIGZpbmlzaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgY29tcGxldGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgYWxlcnQoXCJUaGFuayB5b3UuIFlvdSBoYXZlIHN1Y2Nlc3NmdWxseSBCb29rZWQgeW91ciBUaWNrZXRzXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICAvLyB1enVwZcWCbmlhIGRhbmUgeiBhcGkgZG8gZWxlbWVudMOzdyBodG1sLCBcclxuICBwb3B1bGF0ZUxpc3RFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50LCB3ZWF0aGVyRGF0YTogSVdlYXRoZXJEYXRhKSB7XHJcbiAgICBjb25zdCBwYXJlbnRJZCA9IGVsZW1lbnQuaWQ7XHJcbiAgICBjb25zdCBpY29uRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBgIyR7cGFyZW50SWR9ICMke3BhcmVudElkfV8ke0xJU1RfRUxFTVROUy5pY29ufWBcclxuICAgICkgYXMgSFRNTEltYWdlRWxlbWVudDtcclxuICAgIGljb25FbC5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHt3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2A7XHJcbiAgICBpY29uRWwuYWx0ID0gd2VhdGhlckRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcclxuICAgIGljb25FbC50aXRsZSA9IHdlYXRoZXJEYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBgIyR7cGFyZW50SWR9ICMke3BhcmVudElkfV8ke0xJU1RfRUxFTVROUy5uYW1lfWBcclxuICAgICkuaW5uZXJIVE1MID0gd2VhdGhlckRhdGEubmFtZTtcclxuICAgIGxldCBkID0gbmV3IERhdGUod2VhdGhlckRhdGEuZHQgKiAxMDAwKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIGAjJHtwYXJlbnRJZH0gIyR7cGFyZW50SWR9XyR7TElTVF9FTEVNVE5TLnByZXNzdXJlfWBcclxuICAgICkuaW5uZXJIVE1MID0gYCR7ZC5nZXREYXRlKCkgKyBcIi1cIiArIChkLmdldE1vbnRoKCkgKyAxKSArIFwiLVwiICsgZC5nZXRGdWxsWWVhcigpXHJcbiAgICAgIH0gYDtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIGAjJHtwYXJlbnRJZH0gIyR7cGFyZW50SWR9XyR7TElTVF9FTEVNVE5TLnRlbXB9YFxyXG4gICAgKS5pbm5lckhUTUwgPSBgJHsod2VhdGhlckRhdGEubWFpbi50ZW1wIC8gMTApLnRvRml4ZWQoMSl9wrBDYDtcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH1cclxuICAvLyB0d29yemVuaWUgZWxlbWVudMOzdyBodG1sIFxyXG4gIHJlbmRlcldlYXRoZXJFbGVtZW50KHdlYXRoZXJEYXRhOiBJV2VhdGhlckRhdGEsIGVsZW1lbnRJZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaXR5TGlzdFwiKTtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBcImNvbC1sZy00IGNvbC1tZC00IGNvbC1zbS02XCI7XHJcbiAgICBlbGVtZW50LmlkID0gZWxlbWVudElkO1xyXG4gICAgY29uc3QgZWxlbWVudEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBjb25zdCBlbGVtZW50QnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGVsZW1lbnRCdG5Db250YWluZXJDaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBlbGVtZW50QnRuQ29udGFpbmVyLmNsYXNzTmFtZSA9XHJcbiAgICAgIFwiaW1nLXRodW1ibmFpbCBpbWctZmx1aWQgdGh1bWItZGl2IGZsaXAtY2FyZCBtaW5cIjtcclxuICAgIGVsZW1lbnRCdG5Db250YWluZXJDaGlsZC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICBlbGVtZW50QnRuQ29udGFpbmVyQ2hpbGQuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XHJcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIG5hbWVFbC5pZCA9IGAke2VsZW1lbnRJZH1fJHtMSVNUX0VMRU1UTlMubmFtZX1gO1xyXG4gICAgZWxlbWVudEJ0bkNvbnRhaW5lckNoaWxkLmFwcGVuZENoaWxkKG5hbWVFbCk7XHJcbiAgICBjb25zdCB0ZW1wRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIHRlbXBFbC5pZCA9IGAke2VsZW1lbnRJZH1fJHtMSVNUX0VMRU1UTlMudGVtcH1gO1xyXG4gICAgZWxlbWVudEJ0bkNvbnRhaW5lckNoaWxkLmFwcGVuZENoaWxkKHRlbXBFbCk7XHJcbiAgICBjb25zdCBwcmVzc0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBwcmVzc0VsLmlkID0gYCR7ZWxlbWVudElkfV8ke0xJU1RfRUxFTVROUy5wcmVzc3VyZX1gO1xyXG4gICAgZWxlbWVudEJ0bkNvbnRhaW5lckNoaWxkLmFwcGVuZENoaWxkKHByZXNzRWwpO1xyXG4gICAgY29uc3QgaWNvbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGljb25FbC5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHt3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2A7XHJcbiAgICBpY29uRWwuaWQgPSBgJHtlbGVtZW50SWR9XyR7TElTVF9FTEVNVE5TLmljb259YDtcclxuXHJcbiAgICBlbGVtZW50QnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnRCdG5Db250YWluZXJDaGlsZCk7XHJcbiAgICBlbGVtZW50QnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGljb25FbCk7XHJcbiAgICBlbGVtZW50QnRuLmFwcGVuZENoaWxkKGVsZW1lbnRCdG5Db250YWluZXIpO1xyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50QnRuKTtcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcblxyXG4gICAgdGhpcy5wb3B1bGF0ZUxpc3RFbGVtZW50KGVsZW1lbnQsIHdlYXRoZXJEYXRhKTtcclxuICB9XHJcbiAgLy8gd3lyZW5kZXJ1aiB6IG90cnp5bWFueWNoIGRhbnljaCwgYm94eSB6IHBvZ29kxIUsIGxpbmlhIDIyNiB0d29yemVuaWUgem1pZW5uZWogeiBlbGVtZW50ZW0sIHBvdGVtIGlmIHcgMjI4LCBqZcWbbGkgbmllIGlzdG5pZWplIHRvIHd5a29uYWogZnVuY2tjamUgMjI5LiBUYSBmdWtjamEgb2RwYWxhIHNpxJkgamFrbyBwaWVyd3N6YSwgXHJcbiAgcmVuZGVyV2VhdGhlckxpc3Qod2VhdGhlckRhdGE6IElXZWF0aGVyRGF0YVtdLCBmb3JjZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICBpZiAoZm9yY2UpIHtcclxuICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2l0eUxpc3RcIik7XHJcbiAgICAgIHdyYXBwZXIuaW5uZXJIVE1MID0gbnVsbDtcclxuICAgIH1cclxuICAgIHdlYXRoZXJEYXRhLmZvckVhY2goKGRhdGEpID0+IHtcclxuICAgICAgY29uc3QgZWxlbWVudElkID0gYGxpc3RFbF8ke2RhdGEuaWR9YDtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZCkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIGlmIChlbGVtZW50KSB0aGlzLnBvcHVsYXRlTGlzdEVsZW1lbnQoZWxlbWVudCwgZGF0YSk7XHJcbiAgICAgIGVsc2UgdGhpcy5yZW5kZXJXZWF0aGVyRWxlbWVudChkYXRhLCBlbGVtZW50SWQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1haW4gfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5pbXBvcnQgeyBBcGlDYWxsZXIgfSBmcm9tIFwiLi9hcGlDYWxsZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyIHtcclxuICBtYWluQ29udGV4dDogTWFpbjtcclxuICBhcGlDYWxsZXI6IEFwaUNhbGxlcjtcclxuICBjb25zdHJ1Y3RvcihtYWluOiBNYWluKSB7XHJcbiAgICB0aGlzLm1haW5Db250ZXh0ID0gbWFpbjtcclxuICAgIHRoaXMuYXBpQ2FsbGVyID0gbmV3IEFwaUNhbGxlcigpO1xyXG4gIH1cclxuICAvLyBmdW5rY2phIHogZXZlbnR1IHN1Ym1pdFxyXG4gIHJlZ2lzdGVyKCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgIHVybDogXCJodHRwOi8vMTI3LjAuMC4xOjMwMDAvcmVnaXN0ZXJcIixcclxuICAgICAgZGF0YTogJChcIiNmb3JtMVwiKS5zZXJpYWxpemUoKSxcclxuICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2U6IGFueSkge1xyXG4gICAgICAgIC8vYWxlcnQoXCJhXCIpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UuU3VjY2Vzcyk7XHJcbiAgICAgICAgLy9AdHMtYmxvY2tcclxuICAgICAgICAkKFwiI2Zvcm0xXCIpWzBdLnJlc2V0KCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hlY2tSZWdpc3RlclwiKS5pbm5lckhUTUwgPSByZXNwb25zZS5TdWNjZXNzO1xyXG4gICAgICAgIC8vZG9vZGFqIHRlbiBrb2RcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hlY2tSZWdpc3RlclwiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIH0sIDMwMDApO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogZnVuY3Rpb24gKCkgeyB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2dpbigpIHtcclxuICAgIGxldCBzZWxmID0gdGhpc1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgIHVybDogXCJodHRwOi8vMTI3LjAuMC4xOjMwMDAvbG9naW5cIixcclxuICAgICAgZGF0YTogJChcIiNmb3JtTG9naW5cIikuc2VyaWFsaXplKCksXHJcbiAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgLy9hbGVydChcImFcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICQoXCIjZm9ybUxvZ2luXCIpWzBdLnJlc2V0KCk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLlN1Y2Nlc3MgPT0gXCJTdWNjZXNzIVwiKSB7XHJcbiAgICAgICAgICBsZXQgZGF0YSA9IHsgZGF0YTogXCJ1c2VyRXhpc3RcIiB9O1xyXG4gICAgICAgICAgc2VsZi5hcGlDYWxsZXIuc2F2ZURhdGFVc2VyKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoZWNrTG9naW5cIikuaW5uZXJIVE1MID0gcmVzcG9uc2UuU3VjY2VzcztcclxuICAgICAgICAvL2RvZGFqIHRlbiBrb2RcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hlY2tMb2dpblwiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIH0sIDMwMDApO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogZnVuY3Rpb24gKCkgeyB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBEQVRBX0tFWSA9IFwid2VhdGhlcl9kYXRhXCI7XHJcbmV4cG9ydCBjb25zdCBEQVRBX0tFWV9VU0VSID0gXCJ1c2VyX2RhdGFcIjtcclxuY29uc3QgaGVhZGVyID0ge1xyXG4gIG1ldGhvZDogXCJHRVRcIixcclxuICBoZWFkZXJzOiB7XHJcbiAgICBcIngtcmFwaWRhcGkta2V5XCI6IFwiOGVjYzk2YWZkN21zaGIyY2Q1ODUxNTdhNzQ4ZXAxZTgxNDNqc240Yjc1YWY1YTgzMDlcIixcclxuICAgIFwieC1yYXBpZGFwaS1ob3N0XCI6IFwiY29tbXVuaXR5LW9wZW4td2VhdGhlci1tYXAucC5yYXBpZGFwaS5jb21cIixcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwaUNhbGxlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmNhbGxEYXRhKFwiTG9uZG9uXCIpO1xyXG4gICAgdGhpcy5jYWxsRGF0YShcIndhcnNhd1wiKTtcclxuICAgIHRoaXMuY2FsbERhdGEoXCJib3N0b25cIik7XHJcbiAgfVxyXG5cclxuICBhc3luYyBjYWxsRGF0YShjaXR5Pzogc3RyaW5nKSB7XHJcbiAgICBpZiAoY2l0eSkge1xyXG4gICAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgdGhpcy5nZXRXZWF0aGVyRGF0YShjaXR5KTtcclxuICAgICAgaWYgKHdlYXRoZXIuY29kID09IDIwMCkge1xyXG4gICAgICAgIHRoaXMuc2F2ZURhdGEod2VhdGhlcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGdldFdlYXRoZXJEYXRhKGNpdHk6IHN0cmluZykge1xyXG4gICAgY29uc3QgYXBpVVJMID0gYGh0dHBzOi8vY29tbXVuaXR5LW9wZW4td2VhdGhlci1tYXAucC5yYXBpZGFwaS5jb20vd2VhdGhlcj9xPSR7Y2l0eX0mdW5pdHM9JTIybWV0cmljJTIyJTIwb3IlMjAlMjJpbXBlcmlhbCUyMmA7XHJcbiAgICBjb25zdCB3ZWF0aGVyUmVzcCA9IGF3YWl0IGZldGNoKGFwaVVSTCwgaGVhZGVyKTtcclxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgd2VhdGhlclJlc3AuanNvbigpO1xyXG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xyXG4gIH1cclxuXHJcbiAgc2F2ZURhdGEoZGF0YTogYW55KSB7XHJcbiAgICBjb25zdCBjdXJyZW50RGF0YSA9IHRoaXMuZ2V0RGF0YSgpO1xyXG4gICAgY29uc3QgaW5kZXhJbkxTID0gY3VycmVudERhdGEuZmluZEluZGV4KCh2YWw6IGFueSkgPT4gdmFsLmlkID09PSBkYXRhLmlkKTtcclxuICAgIGlmIChpbmRleEluTFMgIT09IC0xKSB7XHJcbiAgICAgIGN1cnJlbnREYXRhW2luZGV4SW5MU10gPSBkYXRhO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShEQVRBX0tFWSwgSlNPTi5zdHJpbmdpZnkoY3VycmVudERhdGEpKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKERBVEFfS0VZLCBKU09OLnN0cmluZ2lmeShbLi4uY3VycmVudERhdGEsIGRhdGFdKSk7XHJcbiAgfVxyXG5cclxuICBzYXZlRGF0YVVzZXIoZGF0YTogYW55KSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShEQVRBX0tFWV9VU0VSLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgfVxyXG5cclxuICBnZXREYXRhVXNlcigpOiBhbnkge1xyXG4gICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKERBVEFfS0VZX1VTRVIpO1xyXG4gICAgaWYgKGRhdGEpIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YSgpOiBhbnkge1xyXG4gICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKERBVEFfS0VZKTtcclxuICAgIGlmIChkYXRhKSByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XHJcbmltcG9ydCB7IEFwaUNhbGxlciB9IGZyb20gXCIuL2FwaUNhbGxlclwiO1xyXG5pbXBvcnQgeyBVSSB9IGZyb20gXCIuL1VJXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi9Vc2VyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFpbiB7XHJcbiAgYXBpQ2FsbGVyOiBBcGlDYWxsZXI7XHJcbiAgVUk6IFVJO1xyXG4gIFVzZXI6IFVzZXI7XHJcbiAgd2VhdGhlckRhdGE6IGFueVtdO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5hcGlDYWxsZXIgPSBuZXcgQXBpQ2FsbGVyKCk7XHJcbiAgICB0aGlzLlVJID0gbmV3IFVJKHRoaXMpO1xyXG4gICAgdGhpcy5Vc2VyID0gbmV3IFVzZXIodGhpcyk7XHJcblxyXG4gICAgdGhpcy53ZWF0aGVyRGF0YSA9IHRoaXMuYXBpQ2FsbGVyLmdldERhdGEoKTtcclxuXHJcbiAgICB0aGlzLmJpbmRJbnB1dEV2ZW50cygpO1xyXG4gIH1cclxuXHJcbiAgYmluZElucHV0RXZlbnRzKCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHNlbGYuVUkucmVuZGVyV2VhdGhlckxpc3Qoc2VsZi53ZWF0aGVyRGF0YSk7XHJcbiAgICB9LCAzMDAwKTtcclxuICAgIGNvbnN0IHJlZ2lzdGVyRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybTFcIik7XHJcbiAgICBjb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1Mb2dpblwiKTtcclxuICAgIGNvbnN0IGZvcm1GbGlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1GbGlnaHRcIik7XHJcblxyXG4gICAgcmVnaXN0ZXJGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMuVXNlci5yZWdpc3RlcigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMuVXNlci5sb2dpbigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZm9ybUZsaWdodC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmFwaUNhbGxlci5nZXREYXRhVXNlcigpKTtcclxuICAgICAgaWYgKHRoaXMuYXBpQ2FsbGVyLmdldERhdGFVc2VyKCkubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgIGFsZXJ0KFwiWW91IG11c3QgbG9nZ0luXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLlVJLmZsaWdodFBsYW4oZXZlbnQpO1xyXG4gICAgICBjb25zdCBib29rQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib29rQnRuXCIpO1xyXG4gICAgICAvLyBmdW5rY2phIHogYm9va1xyXG4gICAgICBib29rQnRuLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICByZXR1cm4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5VSS5ib29rKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbm5ldyBNYWluKCk7XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiXSwic291cmNlUm9vdCI6IiJ9