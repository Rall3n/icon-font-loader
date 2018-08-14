/* icon font style message */
if (typeof window !== 'undefined' && !window.ICON_FONT_STYLE) {
    window.ICON_FONT_STYLE = { fontName: 'icon-font', styleContent: '@font-face {\n\tfont-family: "icon-font";\n\tsrc:url("/icon-font.ttf?4c0dccba00813a7f1d6bf8baa9ef28aa") format("truetype"),\n\turl("/icon-font.eot?4c0dccba00813a7f1d6bf8baa9ef28aa#iefix") format("embedded-opentype"),\n\turl("/icon-font.woff?4c0dccba00813a7f1d6bf8baa9ef28aa") format("woff"),\n\turl("/icon-font.svg?4c0dccba00813a7f1d6bf8baa9ef28aa#icon-font") format("svg");\n}' };
} else if (typeof window !== 'undefined' && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
    window.ICON_FONT_STYLE.update({ fontName: 'icon-font', styleContent: '@font-face {\n\tfont-family: "icon-font";\n\tsrc:url("/icon-font.ttf?4c0dccba00813a7f1d6bf8baa9ef28aa") format("truetype"),\n\turl("/icon-font.eot?4c0dccba00813a7f1d6bf8baa9ef28aa#iefix") format("embedded-opentype"),\n\turl("/icon-font.woff?4c0dccba00813a7f1d6bf8baa9ef28aa") format("woff"),\n\turl("/icon-font.svg?4c0dccba00813a7f1d6bf8baa9ef28aa#icon-font") format("svg");\n}' });
}/** ****/ (function (modules) { // webpackBootstrap
/** ****/ 	// The module cache
/** ****/ 	const installedModules = {};
    /** ****/
    /** ****/ 	// The require function
    /** ****/ 	function __webpack_require__(moduleId) {
        /** ****/
        /** ****/ 		// Check if module is in cache
        /** ****/ 		if (installedModules[moduleId]) {
            /** ****/ 			return installedModules[moduleId].exports;
            /** ****/ 		}
        /** ****/ 		// Create a new module (and put it into the cache)
        /** ****/ 		const module = installedModules[moduleId] = {
            /** ****/ 			i: moduleId,
            /** ****/ 			l: false,
            /** ****/ 			exports: {},
            /** ****/ 		};
        /** ****/
        /** ****/ 		// Execute the module function
        /** ****/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /** ****/
        /** ****/ 		// Flag the module as loaded
        /** ****/ 		module.l = true;
        /** ****/
        /** ****/ 		// Return the exports of the module
        /** ****/ 		return module.exports;
        /** ****/ 	}
    /** ****/
    /** ****/
    /** ****/ 	// expose the modules object (__webpack_modules__)
    /** ****/ 	__webpack_require__.m = modules;
    /** ****/
    /** ****/ 	// expose the module cache
    /** ****/ 	__webpack_require__.c = installedModules;
    /** ****/
    /** ****/ 	// define getter function for harmony exports
    /** ****/ 	__webpack_require__.d = function (exports, name, getter) {
        /** ****/ 		if (!__webpack_require__.o(exports, name)) {
            /** ****/ 			Object.defineProperty(exports, name, {
                /** ****/ 				configurable: false,
                /** ****/ 				enumerable: true,
                /** ****/ 				get: getter,
                /** ****/ 			});
            /** ****/ 		}
        /** ****/ 	};
    /** ****/
    /** ****/ 	// getDefaultExport function for compatibility with non-harmony modules
    /** ****/ 	__webpack_require__.n = function (module) {
        /** ****/ 		const getter = module && module.__esModule
        /** ****/ 			? function getDefault() { return module.default; }
        /** ****/ 			: function getModuleExports() { return module; };
        /** ****/ 		__webpack_require__.d(getter, 'a', getter);
        /** ****/ 		return getter;
        /** ****/ 	};
    /** ****/
    /** ****/ 	// Object.prototype.hasOwnProperty.call
    /** ****/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /** ****/
    /** ****/ 	// __webpack_public_path__
    /** ****/ 	__webpack_require__.p = '/';
    /** ****/
    /** ****/ 	 __webpack_require__(8)();// Load entry module and return exports
    /** ****/ 	return __webpack_require__(__webpack_require__.s = 2);
/** ****/ })
/** **********************************************************************/
/** ****/ ([
/* 0 */
/** */ (function (module, exports) {
        /*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
        // css base code, injected by the css-loader
        module.exports = function (useSourceMap) {
            const list = [];

            // return the list of modules as css string
            list.toString = function toString() {
                return this.map((item) => {
                    const content = cssWithMappingToString(item, useSourceMap);
                    if (item[2]) {
                        return '@media ' + item[2] + '{' + content + '}';
                    } else {
                        return content;
                    }
                }).join('');
            };

            // import a list of modules into the list
            list.i = function (modules, mediaQuery) {
                if (typeof modules === 'string')
                    modules = [[null, modules, '']];
                const alreadyImportedModules = {};
                for (var i = 0; i < this.length; i++) {
                    const id = this[i][0];
                    if (typeof id === 'number')
                        alreadyImportedModules[id] = true;
                }
                for (i = 0; i < modules.length; i++) {
                    const item = modules[i];
                    // skip already imported module
                    // this implementation is not 100% perfect for weird media query combinations
                    //  when a module is imported multiple times with different media queries.
                    //  I hope this will never occur (Hey this way we have smaller bundles)
                    if (typeof item[0] !== 'number' || !alreadyImportedModules[item[0]]) {
                        if (mediaQuery && !item[2]) {
                            item[2] = mediaQuery;
                        } else if (mediaQuery) {
                            item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
                        }
                        list.push(item);
                    }
                }
            };
            return list;
        };

        function cssWithMappingToString(item, useSourceMap) {
            const content = item[1] || '';
            const cssMapping = item[3];
            if (!cssMapping) {
                return content;
            }

            if (useSourceMap && typeof btoa === 'function') {
                const sourceMapping = toComment(cssMapping);
                const sourceURLs = cssMapping.sources.map((source) => '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */');

                return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
            }

            return [content].join('\n');
        }

        // Adapted from convert-source-map (MIT)
        function toComment(sourceMap) {
            // eslint-disable-next-line no-undef
            const base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
            const data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

            return '/*# ' + data + ' */';
        }
        /** */ }),
    /* 1 */
    /** */ (function (module, exports, __webpack_require__) {
        /*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

        const stylesInDom = {};

        const	memoize = function (fn) {
            let memo;

            return function () {
                if (typeof memo === 'undefined')
                    memo = fn.apply(this, arguments);
                return memo;
            };
        };

        const isOldIE = memoize(() =>
        // Test for IE <= 9 as proposed by Browserhacks
        // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
        // Tests for existence of standard globals is to allow style-loader
        // to operate correctly into non-standard environments
        // @see https://github.com/webpack-contrib/style-loader/issues/177
	 window && document && document.all && !window.atob
        );

        const getElement = (function (fn) {
            const memo = {};

            return function (selector) {
                if (typeof memo[selector] === 'undefined') {
                    memo[selector] = fn.call(this, selector);
                }

                return memo[selector];
            };
        })((target) => document.querySelector(target));

        let singleton = null;
        let	singletonCounter = 0;
        const	stylesInsertedAtTop = [];

        const	fixUrls = __webpack_require__(5);

        module.exports = function (list, options) {
            if (typeof DEBUG !== 'undefined' && DEBUG) {
                if (typeof document !== 'object')
                    throw new Error('The style-loader cannot be used in a non-browser environment');
            }

            options = options || {};

            options.attrs = typeof options.attrs === 'object' ? options.attrs : {};

            // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
            // tags it will allow on a page
            if (!options.singleton)
                options.singleton = isOldIE();

            // By default, add <style> tags to the <head> element
            if (!options.insertInto)
                options.insertInto = 'head';

            // By default, add <style> tags to the bottom of the target
            if (!options.insertAt)
                options.insertAt = 'bottom';

            const styles = listToStyles(list, options);

            addStylesToDom(styles, options);

            return function update(newList) {
                const mayRemove = [];

                for (var i = 0; i < styles.length; i++) {
                    const item = styles[i];
                    var domStyle = stylesInDom[item.id];

                    domStyle.refs--;
                    mayRemove.push(domStyle);
                }

                if (newList) {
                    const newStyles = listToStyles(newList, options);
                    addStylesToDom(newStyles, options);
                }

                for (var i = 0; i < mayRemove.length; i++) {
                    var domStyle = mayRemove[i];

                    if (domStyle.refs === 0) {
                        for (let j = 0; j < domStyle.parts.length; j++)
                            domStyle.parts[j]();

                        delete stylesInDom[domStyle.id];
                    }
                }
            };
        };

        function addStylesToDom(styles, options) {
            for (let i = 0; i < styles.length; i++) {
                const item = styles[i];
                const domStyle = stylesInDom[item.id];

                if (domStyle) {
                    domStyle.refs++;

                    for (var j = 0; j < domStyle.parts.length; j++) {
                        domStyle.parts[j](item.parts[j]);
                    }

                    for (; j < item.parts.length; j++) {
                        domStyle.parts.push(addStyle(item.parts[j], options));
                    }
                } else {
                    const parts = [];

                    for (var j = 0; j < item.parts.length; j++) {
                        parts.push(addStyle(item.parts[j], options));
                    }

                    stylesInDom[item.id] = { id: item.id, refs: 1, parts };
                }
            }
        }

        function listToStyles(list, options) {
            const styles = [];
            const newStyles = {};

            for (let i = 0; i < list.length; i++) {
                const item = list[i];
                const id = options.base ? item[0] + options.base : item[0];
                const css = item[1];
                const media = item[2];
                const sourceMap = item[3];
                const part = { css, media, sourceMap };

                if (!newStyles[id])
                    styles.push(newStyles[id] = { id, parts: [part] });
                else
                    newStyles[id].parts.push(part);
            }

            return styles;
        }

        function insertStyleElement(options, style) {
            const target = getElement(options.insertInto);

            if (!target) {
                throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            }

            const lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

            if (options.insertAt === 'top') {
                if (!lastStyleElementInsertedAtTop) {
                    target.insertBefore(style, target.firstChild);
                } else if (lastStyleElementInsertedAtTop.nextSibling) {
                    target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
                } else {
                    target.appendChild(style);
                }
                stylesInsertedAtTop.push(style);
            } else if (options.insertAt === 'bottom') {
                target.appendChild(style);
            } else {
                throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            }
        }

        function removeStyleElement(style) {
            if (style.parentNode === null)
                return false;
            style.parentNode.removeChild(style);

            const idx = stylesInsertedAtTop.indexOf(style);
            if (idx >= 0) {
                stylesInsertedAtTop.splice(idx, 1);
            }
        }

        function createStyleElement(options) {
            const style = document.createElement('style');

            options.attrs.type = 'text/css';

            addAttrs(style, options.attrs);
            insertStyleElement(options, style);

            return style;
        }

        function createLinkElement(options) {
            const link = document.createElement('link');

            options.attrs.type = 'text/css';
            options.attrs.rel = 'stylesheet';

            addAttrs(link, options.attrs);
            insertStyleElement(options, link);

            return link;
        }

        function addAttrs(el, attrs) {
            Object.keys(attrs).forEach((key) => {
                el.setAttribute(key, attrs[key]);
            });
        }

        function addStyle(obj, options) {
            let style, update, remove, result;

            // If a transform function was defined, run it on the css
            if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function () {
	    		// noop
	    	};
	    }
            }

            if (options.singleton) {
                const styleIndex = singletonCounter++;

                style = singleton || (singleton = createStyleElement(options));

                update = applyToSingletonTag.bind(null, style, styleIndex, false);
                remove = applyToSingletonTag.bind(null, style, styleIndex, true);
            } else if (
                obj.sourceMap
		&& typeof URL === 'function'
		&& typeof URL.createObjectURL === 'function'
		&& typeof URL.revokeObjectURL === 'function'
		&& typeof Blob === 'function'
		&& typeof btoa === 'function'
            ) {
                style = createLinkElement(options);
                update = updateLink.bind(null, style, options);
                remove = function () {
                    removeStyleElement(style);

                    if (style.href)
                        URL.revokeObjectURL(style.href);
                };
            } else {
                style = createStyleElement(options);
                update = applyToTag.bind(null, style);
                remove = function () {
                    removeStyleElement(style);
                };
            }

            update(obj);

            return function updateStyle(newObj) {
                if (newObj) {
                    if (
                        newObj.css === obj.css
				&& newObj.media === obj.media
				&& newObj.sourceMap === obj.sourceMap
                    ) {
                        return;
                    }

                    update(obj = newObj);
                } else {
                    remove();
                }
            };
        }

        const replaceText = (function () {
            const textStore = [];

            return function (index, replacement) {
                textStore[index] = replacement;

                return textStore.filter(Boolean).join('\n');
            };
        })();

        function applyToSingletonTag(style, index, remove, obj) {
            const css = remove ? '' : obj.css;

            if (style.styleSheet) {
                style.styleSheet.cssText = replaceText(index, css);
            } else {
                const cssNode = document.createTextNode(css);
                const childNodes = style.childNodes;

                if (childNodes[index])
                    style.removeChild(childNodes[index]);

                if (childNodes.length) {
                    style.insertBefore(cssNode, childNodes[index]);
                } else {
                    style.appendChild(cssNode);
                }
            }
        }

        function applyToTag(style, obj) {
            const css = obj.css;
            const media = obj.media;

            if (media) {
                style.setAttribute('media', media);
            }

            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                while (style.firstChild) {
                    style.removeChild(style.firstChild);
                }

                style.appendChild(document.createTextNode(css));
            }
        }

        function updateLink(link, options, obj) {
            let css = obj.css;
            const sourceMap = obj.sourceMap;

            /*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
            const autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

            if (options.convertToAbsoluteUrls || autoFixUrls) {
                css = fixUrls(css);
            }

            if (sourceMap) {
                // http://stackoverflow.com/a/26603875
                css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */';
            }

            const blob = new Blob([css], { type: 'text/css' });

            const oldSrc = link.href;

            link.href = URL.createObjectURL(blob);

            if (oldSrc)
                URL.revokeObjectURL(oldSrc);
        }
        /** */ }),
    /* 2 */
    /** */ (function (module, __webpack_exports__, __webpack_require__) {
        'use strict';

        Object.defineProperty(__webpack_exports__, '__esModule', { value: true });
        /* harmony import */ const __WEBPACK_IMPORTED_MODULE_0__icon_css__ = __webpack_require__(3);
        /* harmony import */ const __WEBPACK_IMPORTED_MODULE_0__icon_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__icon_css__);
        /* harmony import */ const __WEBPACK_IMPORTED_MODULE_1__icon1_css__ = __webpack_require__(6);
        /* harmony import */ const __WEBPACK_IMPORTED_MODULE_1__icon1_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__icon1_css__);
        /** */ }),
    /* 3 */
    /** */ (function (module, exports, __webpack_require__) {
        // style-loader: Adds some css to the DOM by adding a <style> tag

        // load the styles
        let content = __webpack_require__(4);
        if (typeof content === 'string')
            content = [[module.i, content, '']];
        // Prepare cssTransformation
        let transform;

        const options = {};
        options.transform = transform;
        // add the styles to the DOM
        const update = __webpack_require__(1)(content, options);
        if (content.locals)
            module.exports = content.locals;
        // Hot Module Replacement
        if (false) {
            // When the styles change, update the <style> tags
            if (!content.locals) {
                module.hot.accept('!!../../../node_modules/css-loader/index.js!../../../index.js!./icon.css', () => {
                    let newContent = require('!!../../../node_modules/css-loader/index.js!../../../index.js!./icon.css');
                    if (typeof newContent === 'string')
                        newContent = [[module.id, newContent, '']];
                    update(newContent);
                });
            }
            // When the module is disposed, remove the <style> tags
            module.hot.dispose(() => { update(); });
        }
        /** */ }),
    /* 4 */
    /** */ (function (module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(0)(undefined);
        // imports

        // module
        exports.push([module.i, "body .icon-arrow-left:before,body span.icon-arrow-slice:before,.icon-arrow-up:before,.icon-arrow-up-1:before{\n    font-family: 'icon-font';\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-decoration: inherit;\n    text-rendering: optimizeLegibility;\n    text-transform: none;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    font-smoothing: antialiased;\n    content: '\\F101'\n}\nbody.test .des{\n    color: salmon\n}\nbody .icon-arrow-left:before {\n    color: red;\n    content: '';\n}\n\nbody span.icon-arrow-slice:before {\n    font-size:20px;\n    color: blue;\n    content: '';\n}\n\n.icon-arrow-up:before {\n    color: green;\n    content: '';\n}\n\n.icon-arrow-up-1:before {\n    color: green;\n    content: '';\n}", '']);

        // exports
        /** */ }),
    /* 5 */
    /** */ (function (module, exports) {
        /**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

        module.exports = function (css) {
            // get current location
            const location = typeof window !== 'undefined' && window.location;

            if (!location) {
                throw new Error('fixUrls requires window.location');
            }

            // blank or null?
            if (!css || typeof css !== 'string') {
	  return css;
            }

            const baseUrl = location.protocol + '//' + location.host;
            const currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, '/');

            // convert each url(...)
            /*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
            const fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, (fullMatch, origUrl) => {
                // strip quotes (if they exist)
                const unquotedOrigUrl = origUrl
                    .trim()
                    .replace(/^"(.*)"$/, (o, $1) => $1)
                    .replace(/^'(.*)'$/, (o, $1) => $1);

                // already a full url? no change
                if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
                }

                // convert the url to a full url
                let newUrl;

                if (unquotedOrigUrl.indexOf('//') === 0) {
		  	// TODO: should we add protocol?
                    newUrl = unquotedOrigUrl;
                } else if (unquotedOrigUrl.indexOf('/') === 0) {
                    // path should be relative to the base url
                    newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
                } else {
                    // path should be relative to current directory
                    newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ''); // Strip leading './'
                }

                // send back the fixed url(...)
                return 'url(' + JSON.stringify(newUrl) + ')';
            });

            // send back the fixed css
            return fixedCss;
        };
        /** */ }),
    /* 6 */
    /** */ (function (module, exports, __webpack_require__) {
        // style-loader: Adds some css to the DOM by adding a <style> tag

        // load the styles
        let content = __webpack_require__(7);
        if (typeof content === 'string')
            content = [[module.i, content, '']];
        // Prepare cssTransformation
        let transform;

        const options = {};
        options.transform = transform;
        // add the styles to the DOM
        const update = __webpack_require__(1)(content, options);
        if (content.locals)
            module.exports = content.locals;
        // Hot Module Replacement
        if (false) {
            // When the styles change, update the <style> tags
            if (!content.locals) {
                module.hot.accept('!!../../../node_modules/css-loader/index.js!../../../index.js!./icon1.css', () => {
                    let newContent = require('!!../../../node_modules/css-loader/index.js!../../../index.js!./icon1.css');
                    if (typeof newContent === 'string')
                        newContent = [[module.id, newContent, '']];
                    update(newContent);
                });
            }
            // When the module is disposed, remove the <style> tags
            module.hot.dispose(() => { update(); });
        }
        /** */ }),
    /* 7 */
    /** */ (function (module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(0)(undefined);
        // imports

        // module
        exports.push([module.i, ".icon-slice:before {\n    font-family: 'icon-font';\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-decoration: inherit;\n    text-rendering: optimizeLegibility;\n    text-transform: none;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    font-smoothing: antialiased;\n    content: '\\F101';\n}\n.icon-slice:before {\n    color: blue;\n    content: '';\n}", '']);

        // exports
        /** */ }),
    /* 8 */
    /** */ (function (module, exports, __webpack_require__) {
        const styleId = 'ICON-FONT-FILE-STYLE';
        function createStyleContent(fontConfig) {
            const style = fontConfig || window.ICON_FONT_STYLE;
            return style.styleContent || '';
        }

        function addStyle(fontConfig) {
            let styleTag = document.createElement('style'), headElement = document.getElementsByTagName('head')[0];
            styleTag.innerHTML = createStyleContent(fontConfig);
            styleTag.id = styleId;
            styleTag.type = 'text/css';
            if (headElement) {
                headElement.appendChild(styleTag);
            } else {
                window.addEventListener('load', () => {
                    headElement.appendChild(styleTag);
                });
            }
        }

        function updateStyle(fontConfig) {
            const styleTag = document.getElementById(styleId);
            if (!styleTag) {
                addStyle(fontConfig);
            } else {
                styleTag.innerHTML = createStyleContent(fontConfig);
            }
        }

        module.exports = function () {
            if (window.HAS_CREATE_FONT_STYLE) {
                return;
            }
            addStyle();
            window.HAS_CREATE_FONT_STYLE = true;
        };
        if (false) {
            window.ICON_FONT_STYLE.update = updateStyle;
        }
        /** */ }),
/** ****/ ]);
