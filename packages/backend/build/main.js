require('/Users/enmanueljarquin/Development/marvel/node_modules/source-map-support/register.js');
module.exports =
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/backpack-core/node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "../../node_modules/escape-string-regexp/index.js":
/*!********************************************************************************************!*\
  !*** /Users/enmanueljarquin/Development/marvel/node_modules/escape-string-regexp/index.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	return str.replace(matchOperatorsRe, '\\$&');
};


/***/ }),

/***/ "../../node_modules/has-ansi/index.js":
/*!********************************************************************************!*\
  !*** /Users/enmanueljarquin/Development/marvel/node_modules/has-ansi/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ansiRegex = __webpack_require__(/*! ansi-regex */ "../../node_modules/has-ansi/node_modules/ansi-regex/index.js");
var re = new RegExp(ansiRegex().source); // remove the `g` flag
module.exports = re.test.bind(re);


/***/ }),

/***/ "../../node_modules/has-ansi/node_modules/ansi-regex/index.js":
/*!********************************************************************************************************!*\
  !*** /Users/enmanueljarquin/Development/marvel/node_modules/has-ansi/node_modules/ansi-regex/index.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function () {
	return /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g;
};


/***/ }),

/***/ "../../node_modules/superagent-logger/lib/index.js":
/*!*********************************************************************************************!*\
  !*** /Users/enmanueljarquin/Development/marvel/node_modules/superagent-logger/lib/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var url = __webpack_require__(/*! url */ "url");
var querystring = __webpack_require__(/*! querystring */ "querystring");
var chalk = __webpack_require__(/*! chalk */ "../../node_modules/superagent-logger/node_modules/chalk/index.js");
var superagent = __webpack_require__(/*! superagent */ "superagent");

exports = module.exports = function(options) {
  if(!options) options = {};
  if(options instanceof superagent.Request)
    return attachSuperagentLogger({}, options);

  return attachSuperagentLogger.bind(null, options);
};

function attachSuperagentLogger(options, req) {
  var start = new Date().getTime();
  var timestamp = new Date().toISOString();

  var uri = url.parse(req.url);
  var method = req.method;

  if(options.outgoing) {
    console.log('%s %s %s %s %s %s',
      chalk.gray(
        rightPad(uri.protocol.toUpperCase().replace(/[^\w]/g, ''), 5)
      ),
      chalk.gray(rightPad(method.toUpperCase(), 'delete'.length)),
      options.timestamp ? chalk.gray('[' + timestamp + ']') : '',
      chalk.gray(' - '),
      chalk.gray(uri.href + (req.qs ? '' : '?' + querystring.encode(req.qs))),
      chalk.gray('(pending)')
    );
  }

  req.on('response', function(res) {
    var now = new Date().getTime();
    var elapsed = now - start;

    var st = res.status;
    if(st < 300) {
      st = chalk.green(st);
    } else if (st < 400) {
      st = chalk.yellow(st);
    } else {
      st = chalk.red(st);
    }


    console.log('%s %s %s %s %s %s',
      chalk.magenta(
        rightPad(uri.protocol.toUpperCase().replace(/[^\w]/g, ''), 5)
      ),
      chalk.cyan(rightPad(method.toUpperCase(), 'delete'.length)),
      options.timestamp ? chalk.gray('[' + timestamp + ']') : '',
      st,
      chalk.gray(uri.href + (req.qs ? '' : '?' + querystring.encode(req.qs))),
      chalk.gray('(') +
        chalk[colorForSpeed(elapsed)](elapsed + 'ms') +
        chalk.gray(')')
    );
  });
}

function colorForSpeed(ms) {
  if(ms < 200) {
    return 'green';
  } else if(ms < 1000) {
    return 'gray';
  } else if(ms < 5000) {
    return 'yellow';
  } else {
    return 'red';
  }
}

function rightPad(str, len) {
  var l = str.length;
  if(l < len) {
    for(var i = 0, n = len - l; i < n; i++) {
      str += ' ';
    }
  }
  return str;
}


/***/ }),

/***/ "../../node_modules/superagent-logger/node_modules/ansi-regex/index.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/enmanueljarquin/Development/marvel/node_modules/superagent-logger/node_modules/ansi-regex/index.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function () {
	return /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g;
};


/***/ }),

/***/ "../../node_modules/superagent-logger/node_modules/ansi-styles/index.js":
/*!******************************************************************************************************************!*\
  !*** /Users/enmanueljarquin/Development/marvel/node_modules/superagent-logger/node_modules/ansi-styles/index.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function assembleStyles () {
	var styles = {
		modifiers: {
			reset: [0, 0],
			bold: [1, 22], // 21 isn't widely supported and 22 does the same thing
			dim: [2, 22],
			italic: [3, 23],
			underline: [4, 24],
			inverse: [7, 27],
			hidden: [8, 28],
			strikethrough: [9, 29]
		},
		colors: {
			black: [30, 39],
			red: [31, 39],
			green: [32, 39],
			yellow: [33, 39],
			blue: [34, 39],
			magenta: [35, 39],
			cyan: [36, 39],
			white: [37, 39],
			gray: [90, 39]
		},
		bgColors: {
			bgBlack: [40, 49],
			bgRed: [41, 49],
			bgGreen: [42, 49],
			bgYellow: [43, 49],
			bgBlue: [44, 49],
			bgMagenta: [45, 49],
			bgCyan: [46, 49],
			bgWhite: [47, 49]
		}
	};

	// fix humans
	styles.colors.grey = styles.colors.gray;

	Object.keys(styles).forEach(function (groupName) {
		var group = styles[groupName];

		Object.keys(group).forEach(function (styleName) {
			var style = group[styleName];

			styles[styleName] = group[styleName] = {
				open: '\u001b[' + style[0] + 'm',
				close: '\u001b[' + style[1] + 'm'
			};
		});

		Object.defineProperty(styles, groupName, {
			value: group,
			enumerable: false
		});
	});

	return styles;
}

Object.defineProperty(module, 'exports', {
	enumerable: true,
	get: assembleStyles
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../backpack-core/node_modules/webpack/buildin/module.js */ "../../node_modules/backpack-core/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../node_modules/superagent-logger/node_modules/chalk/index.js":
/*!************************************************************************************************************!*\
  !*** /Users/enmanueljarquin/Development/marvel/node_modules/superagent-logger/node_modules/chalk/index.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var escapeStringRegexp = __webpack_require__(/*! escape-string-regexp */ "../../node_modules/escape-string-regexp/index.js");
var ansiStyles = __webpack_require__(/*! ansi-styles */ "../../node_modules/superagent-logger/node_modules/ansi-styles/index.js");
var stripAnsi = __webpack_require__(/*! strip-ansi */ "../../node_modules/superagent-logger/node_modules/strip-ansi/index.js");
var hasAnsi = __webpack_require__(/*! has-ansi */ "../../node_modules/has-ansi/index.js");
var supportsColor = __webpack_require__(/*! supports-color */ "../../node_modules/superagent-logger/node_modules/supports-color/index.js");
var defineProps = Object.defineProperties;
var isSimpleWindowsTerm = process.platform === 'win32' && !/^xterm/i.test(process.env.TERM);

function Chalk(options) {
	// detect mode if not set manually
	this.enabled = !options || options.enabled === undefined ? supportsColor : options.enabled;
}

// use bright blue on Windows as the normal blue color is illegible
if (isSimpleWindowsTerm) {
	ansiStyles.blue.open = '\u001b[94m';
}

var styles = (function () {
	var ret = {};

	Object.keys(ansiStyles).forEach(function (key) {
		ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');

		ret[key] = {
			get: function () {
				return build.call(this, this._styles.concat(key));
			}
		};
	});

	return ret;
})();

var proto = defineProps(function chalk() {}, styles);

function build(_styles) {
	var builder = function () {
		return applyStyle.apply(builder, arguments);
	};

	builder._styles = _styles;
	builder.enabled = this.enabled;
	// __proto__ is used because we must return a function, but there is
	// no way to create a function with a different prototype.
	/* eslint-disable no-proto */
	builder.__proto__ = proto;

	return builder;
}

function applyStyle() {
	// support varags, but simply cast to string in case there's only one arg
	var args = arguments;
	var argsLen = args.length;
	var str = argsLen !== 0 && String(arguments[0]);

	if (argsLen > 1) {
		// don't slice `arguments`, it prevents v8 optimizations
		for (var a = 1; a < argsLen; a++) {
			str += ' ' + args[a];
		}
	}

	if (!this.enabled || !str) {
		return str;
	}

	var nestedStyles = this._styles;
	var i = nestedStyles.length;

	// Turns out that on Windows dimmed gray text becomes invisible in cmd.exe,
	// see https://github.com/chalk/chalk/issues/58
	// If we're on Windows and we're dealing with a gray color, temporarily make 'dim' a noop.
	var originalDim = ansiStyles.dim.open;
	if (isSimpleWindowsTerm && (nestedStyles.indexOf('gray') !== -1 || nestedStyles.indexOf('grey') !== -1)) {
		ansiStyles.dim.open = '';
	}

	while (i--) {
		var code = ansiStyles[nestedStyles[i]];

		// Replace any instances already present with a re-opening code
		// otherwise only the part of the string until said closing code
		// will be colored, and the rest will simply be 'plain'.
		str = code.open + str.replace(code.closeRe, code.open) + code.close;
	}

	// Reset the original 'dim' if we changed it to work around the Windows dimmed gray issue.
	ansiStyles.dim.open = originalDim;

	return str;
}

function init() {
	var ret = {};

	Object.keys(styles).forEach(function (name) {
		ret[name] = {
			get: function () {
				return build.call(this, [name]);
			}
		};
	});

	return ret;
}

defineProps(Chalk.prototype, init());

module.exports = new Chalk();
module.exports.styles = ansiStyles;
module.exports.hasColor = hasAnsi;
module.exports.stripColor = stripAnsi;
module.exports.supportsColor = supportsColor;


/***/ }),

/***/ "../../node_modules/superagent-logger/node_modules/strip-ansi/index.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/enmanueljarquin/Development/marvel/node_modules/superagent-logger/node_modules/strip-ansi/index.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ansiRegex = __webpack_require__(/*! ansi-regex */ "../../node_modules/superagent-logger/node_modules/ansi-regex/index.js")();

module.exports = function (str) {
	return typeof str === 'string' ? str.replace(ansiRegex, '') : str;
};


/***/ }),

/***/ "../../node_modules/superagent-logger/node_modules/supports-color/index.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/enmanueljarquin/Development/marvel/node_modules/superagent-logger/node_modules/supports-color/index.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var argv = process.argv;

var terminator = argv.indexOf('--');
var hasFlag = function (flag) {
	flag = '--' + flag;
	var pos = argv.indexOf(flag);
	return pos !== -1 && (terminator !== -1 ? pos < terminator : true);
};

module.exports = (function () {
	if ('FORCE_COLOR' in process.env) {
		return true;
	}

	if (hasFlag('no-color') ||
		hasFlag('no-colors') ||
		hasFlag('color=false')) {
		return false;
	}

	if (hasFlag('color') ||
		hasFlag('colors') ||
		hasFlag('color=true') ||
		hasFlag('color=always')) {
		return true;
	}

	if (process.stdout && !process.stdout.isTTY) {
		return false;
	}

	if (process.platform === 'win32') {
		return true;
	}

	if ('COLORTERM' in process.env) {
		return true;
	}

	if (process.env.TERM === 'dumb') {
		return false;
	}

	if (/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(process.env.TERM)) {
		return true;
	}

	return false;
})();


/***/ }),

/***/ "../../node_modules/superagent-prefix/index.js":
/*!*****************************************************************************************!*\
  !*** /Users/enmanueljarquin/Development/marvel/node_modules/superagent-prefix/index.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (prefix) {
    return function (request) {
        if (request.url[0] === '/') {
            request.url = prefix + request.url;
        }

        return request;
    };
}

/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var convict__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! convict */ "convict");
/* harmony import */ var convict__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(convict__WEBPACK_IMPORTED_MODULE_1__);


const config = convict__WEBPACK_IMPORTED_MODULE_1___default()({
  env: {
    format: ["production", "development", "test"],
    default: "development",
    arg: "env",
    env: "NODE_ENV"
  },
  port: {
    doc: "The port to bind.",
    format: "port",
    default: 8000,
    env: "PORT"
  },
  api: {
    url: "http://gateway.marvel.com",
    publicKey: {
      default: "",
      arg: "public_key",
      env: "PUBLIC_KEY"
    },
    hash: {
      default: "",
      arg: "hash",
      env: "HASH"
    }
  }
});
const env = config.get("env");

if (env !== "production") {
  const filePath = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, `${env}.json`);
  config.loadFile(filePath);
}

config.validate();
/* harmony default export */ __webpack_exports__["default"] = (config);
/* WEBPACK VAR INJECTION */}.call(this, "src/config"))

/***/ }),

/***/ "./src/graphql/character/index.js":
/*!****************************************!*\
  !*** ./src/graphql/character/index.js ***!
  \****************************************/
/*! exports provided: characterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "characterModule", function() { return characterModule; });
/* harmony import */ var graphql_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-modules */ "graphql-modules");
/* harmony import */ var graphql_modules__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_modules__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _typeDefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typeDefs */ "./src/graphql/character/typeDefs.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolvers */ "./src/graphql/character/resolvers.js");



const characterModule = Object(graphql_modules__WEBPACK_IMPORTED_MODULE_0__["createModule"])({
  id: "character-module",
  __dirname: __dirname,
  typeDefs: _typeDefs__WEBPACK_IMPORTED_MODULE_1__["default"],
  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* WEBPACK VAR INJECTION */}.call(this, "src/graphql/character"))

/***/ }),

/***/ "./src/graphql/character/resolvers.js":
/*!********************************************!*\
  !*** ./src/graphql/character/resolvers.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const root = "/characters";
/* harmony default export */ __webpack_exports__["default"] = ({
  Query: {
    async characters(_, {
      filter = {},
      desc,
      pagination = {}
    }, {
      request
    }) {
      let filters = _objectSpread(_objectSpread(_objectSpread({}, filter), pagination), {}, {
        orderBy: desc ? "-name" : "name"
      });

      const {
        body: {
          data
        }
      } = await request.get(root).query(filters);
      return data;
    },

    async character(_, {
      id
    }, {
      request
    }) {
      const {
        body: {
          data: {
            results
          }
        }
      } = await request.get(`${root}/${id}`);
      return results[0];
    }

  },
  Character: {
    thumbnail: info => `${info.thumbnail.path}.${info.thumbnail.extension}`,

    async comics(info, args, {
      request
    }) {
      const {
        body: {
          data: {
            results
          }
        }
      } = await request.get(`${root}/${info.id}/comics`);
      return results;
    },

    async stories(info, args, {
      request
    }) {
      const {
        body: {
          data: {
            results
          }
        }
      } = await request.get(`${root}/${info.id}/stories`);
      return results;
    }

  }
});

/***/ }),

/***/ "./src/graphql/character/typeDefs.js":
/*!*******************************************!*\
  !*** ./src/graphql/character/typeDefs.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-modules */ "graphql-modules");
/* harmony import */ var graphql_modules__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_modules__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (graphql_modules__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  type Character {
    id: ID!
    name: String!
    description: String
    thumbnail: String
    resourceURI: String
    comics: [Comic]
    stories: [Story]
  }

  input CharacterFiltersInput {
    nameStartsWith: String
    comics: [ID]
    stories: [ID]
  }

  type CharacterConnection implements PaginationResponse {
    offset: Int
    total: Int
    limit: Int
    count: Int
    results: [Character]
  }

  type Query {
    characters(
      filter: CharacterFiltersInput
      desc: Boolean
      pagination: PaginationInput
    ): CharacterConnection
    character(id: ID!): Character
  }
`);

/***/ }),

/***/ "./src/graphql/comic/index.js":
/*!************************************!*\
  !*** ./src/graphql/comic/index.js ***!
  \************************************/
/*! exports provided: comicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comicModule", function() { return comicModule; });
/* harmony import */ var graphql_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-modules */ "graphql-modules");
/* harmony import */ var graphql_modules__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_modules__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _typeDefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typeDefs */ "./src/graphql/comic/typeDefs.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolvers */ "./src/graphql/comic/resolvers.js");



const comicModule = Object(graphql_modules__WEBPACK_IMPORTED_MODULE_0__["createModule"])({
  id: "comic-module",
  __dirname: __dirname,
  typeDefs: _typeDefs__WEBPACK_IMPORTED_MODULE_1__["default"],
  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* WEBPACK VAR INJECTION */}.call(this, "src/graphql/comic"))

/***/ }),

/***/ "./src/graphql/comic/resolvers.js":
/*!****************************************!*\
  !*** ./src/graphql/comic/resolvers.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const root = "/comics";
/* harmony default export */ __webpack_exports__["default"] = ({
  Query: {
    async comics(_, {
      filter,
      orderBy,
      pagination = {}
    }, {
      request
    }) {
      const filters = _objectSpread(_objectSpread({}, filter), {}, {
        orderBy
      }, pagination);

      const {
        body: {
          data
        }
      } = await request.get(root).query(filters);
      return data;
    },

    async comic(_, {
      id
    }, {
      request
    }) {
      const {
        body: {
          data: {
            results
          }
        }
      } = await request.get(`${root}/${id}`);
      return results[0];
    }

  },
  Comic: {
    thumbnail: info => `${info.thumbnail.path}.${info.thumbnail.extension}`,

    async characters(info, args, {
      request
    }) {
      const {
        body: {
          data: {
            results
          }
        }
      } = await request.get(`${root}/${info.id}/characters`);
      return results;
    },

    async stories(info, args, {
      request
    }) {
      const {
        body: {
          data: {
            results
          }
        }
      } = await request.get(`${root}/${info.id}/stories`);
      return results;
    }

  },
  ComicSort: {
    TITLE: "title",
    ISSUE_NUMBER: "issueNumber"
  },
  IssueFormat: {
    COMIC: "comic",
    MAGAZINE: "magazine",
    TRADE_PAPERBACK: "trade paperback",
    HARDCOVER: "hardcover",
    DIGEST: "digest",
    GRAPHIC_NOVEL: "graphic novel",
    DIGITAL_COMIC: "digital comic",
    INFINITE_COMIC: "infinite comic"
  }
});

/***/ }),

/***/ "./src/graphql/comic/typeDefs.js":
/*!***************************************!*\
  !*** ./src/graphql/comic/typeDefs.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-modules */ "graphql-modules");
/* harmony import */ var graphql_modules__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_modules__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (graphql_modules__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  type Comic {
    id: ID!
    title: String!
    description: String
    resourceURI: String
    thumbnail: String
    issueNumber: Float
    format: String
    characters: [Character]
    stories: [Story]
  }

  input ComicFiltersInput {
    titleStartsWith: String
    issueNumber: Float
    format: IssueFormat
  }

  enum IssueFormat {
    COMIC
    MAGAZINE
    TRADE_PAPERBACK
    HARDCOVER
    DIGEST
    GRAPHIC_NOVEL
    DIGITAL_COMIC
    INFINITE_COMIC
  }

  enum ComicSort {
    TITLE
    ISSUE_NUMBER
  }

  type ComicConnection implements PaginationResponse {
    offset: Int
    total: Int
    limit: Int
    count: Int
    results: [Comic]
  }

  extend type Query {
    comics(
      filter: ComicFiltersInput
      orderBy: ComicSort
      pagination: PaginationInput
    ): ComicConnection
    comic(id: ID!): Comic
  }
`);

/***/ }),

/***/ "./src/graphql/common/index.js":
/*!*************************************!*\
  !*** ./src/graphql/common/index.js ***!
  \*************************************/
/*! exports provided: commonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonModule", function() { return commonModule; });
/* harmony import */ var graphql_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-modules */ "graphql-modules");
/* harmony import */ var graphql_modules__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_modules__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _typeDefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typeDefs */ "./src/graphql/common/typeDefs.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolvers */ "./src/graphql/common/resolvers.js");



const commonModule = Object(graphql_modules__WEBPACK_IMPORTED_MODULE_0__["createModule"])({
  id: "common-module",
  __dirname: __dirname,
  typeDefs: _typeDefs__WEBPACK_IMPORTED_MODULE_1__["default"],
  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* WEBPACK VAR INJECTION */}.call(this, "src/graphql/common"))

/***/ }),

/***/ "./src/graphql/common/resolvers.js":
/*!*****************************************!*\
  !*** ./src/graphql/common/resolvers.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./src/graphql/common/typeDefs.js":
/*!****************************************!*\
  !*** ./src/graphql/common/typeDefs.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-modules */ "graphql-modules");
/* harmony import */ var graphql_modules__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_modules__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (graphql_modules__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  input PaginationInput {
    offset: Int
    limit: Int
  }

  interface PaginationResponse {
    offset: Int
    total: Int
    limit: Int
    count: Int
  }
`);

/***/ }),

/***/ "./src/graphql/story/index.js":
/*!************************************!*\
  !*** ./src/graphql/story/index.js ***!
  \************************************/
/*! exports provided: storyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storyModule", function() { return storyModule; });
/* harmony import */ var graphql_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-modules */ "graphql-modules");
/* harmony import */ var graphql_modules__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_modules__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _typeDefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typeDefs */ "./src/graphql/story/typeDefs.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolvers */ "./src/graphql/story/resolvers.js");



const storyModule = Object(graphql_modules__WEBPACK_IMPORTED_MODULE_0__["createModule"])({
  id: "story-module",
  __dirname: __dirname,
  typeDefs: _typeDefs__WEBPACK_IMPORTED_MODULE_1__["default"],
  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* WEBPACK VAR INJECTION */}.call(this, "src/graphql/story"))

/***/ }),

/***/ "./src/graphql/story/resolvers.js":
/*!****************************************!*\
  !*** ./src/graphql/story/resolvers.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const root = "/stories";
/* harmony default export */ __webpack_exports__["default"] = ({
  Query: {
    async stories(_, {
      pagination = {}
    }, {
      request
    }) {
      const {
        body: {
          data
        }
      } = await request.get(root).query(pagination);
      return data;
    },

    async story(_, {
      id
    }, {
      request
    }) {
      const {
        body: {
          data: {
            results
          }
        }
      } = await request.get(`${root}/${id}`);
      return results[0];
    }

  },
  Story: {
    thumbnail: info => {
      if (!info.thumbnail) {
        return "";
      }

      return `${info.thumbnail.path}.${info.thumbnail.extension}`;
    },

    async characters(info, args, {
      request
    }) {
      const {
        body: {
          data: {
            results
          }
        }
      } = await request.get(`${root}/${info.id}/characters`);
      return results;
    },

    async comics(info, args, {
      request
    }) {
      const {
        body: {
          data: {
            results
          }
        }
      } = await request.get(`${root}/${info.id}/comics`);
      return results;
    }

  }
});

/***/ }),

/***/ "./src/graphql/story/typeDefs.js":
/*!***************************************!*\
  !*** ./src/graphql/story/typeDefs.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-modules */ "graphql-modules");
/* harmony import */ var graphql_modules__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_modules__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (graphql_modules__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  type Story {
    id: ID!
    title: String!
    description: String
    resourceURI: String
    thumbnail: String
    characters: [Character]
    comics: [Comic]
  }

  type StoryConnection implements PaginationResponse {
    offset: Int
    total: Int
    limit: Int
    count: Int
    results: [Story]
  }

  extend type Query {
    stories(pagination: PaginationInput): StoryConnection
    story(id: ID!): Story
  }
`);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server */ "apollo-server");
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-modules */ "graphql-modules");
/* harmony import */ var graphql_modules__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_modules__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_superagent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/superagent */ "./src/utils/superagent.js");
/* harmony import */ var _graphql_character__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graphql/character */ "./src/graphql/character/index.js");
/* harmony import */ var _graphql_comic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graphql/comic */ "./src/graphql/comic/index.js");
/* harmony import */ var _graphql_story__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./graphql/story */ "./src/graphql/story/index.js");
/* harmony import */ var _graphql_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./graphql/common */ "./src/graphql/common/index.js");







const application = Object(graphql_modules__WEBPACK_IMPORTED_MODULE_1__["createApplication"])({
  modules: [_graphql_common__WEBPACK_IMPORTED_MODULE_6__["commonModule"], _graphql_character__WEBPACK_IMPORTED_MODULE_3__["characterModule"], _graphql_comic__WEBPACK_IMPORTED_MODULE_4__["comicModule"], _graphql_story__WEBPACK_IMPORTED_MODULE_5__["storyModule"]]
});
const PORT = process.env.PORT || 4000;
const schema = application.createSchemaForApollo();
const server = new apollo_server__WEBPACK_IMPORTED_MODULE_0__["ApolloServer"]({
  schema,
  context: {
    request: _utils_superagent__WEBPACK_IMPORTED_MODULE_2__["superagent"]
  }
});
server.listen({
  port: PORT
}).then(({
  url
}) => {
  console.log(`🚀 Server ready at ${url}`);
});

/***/ }),

/***/ "./src/utils/superagent.js":
/*!*********************************!*\
  !*** ./src/utils/superagent.js ***!
  \*********************************/
/*! exports provided: superagent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "superagent", function() { return superagent; });
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! superagent */ "superagent");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var superagent_prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! superagent-prefix */ "../../node_modules/superagent-prefix/index.js");
/* harmony import */ var superagent_prefix__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(superagent_prefix__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var superagent_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! superagent-logger */ "../../node_modules/superagent-logger/lib/index.js");
/* harmony import */ var superagent_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(superagent_logger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/config/index.js");





function createAgent() {
  const api = _config__WEBPACK_IMPORTED_MODULE_3__["default"].get("api");
  return superagent__WEBPACK_IMPORTED_MODULE_0___default.a.agent().use(superagent_prefix__WEBPACK_IMPORTED_MODULE_1___default()(`${api.url}/v1/public`)).use(superagent_logger__WEBPACK_IMPORTED_MODULE_2__).query({
    apikey: api.publicKey,
    hash: api.hash,
    ts: 1
  });
}

const superagent = createAgent();

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/enmanueljarquin/Development/marvel/packages/backend/src/index.js */"./src/index.js");


/***/ }),

/***/ "apollo-server":
/*!********************************!*\
  !*** external "apollo-server" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server");

/***/ }),

/***/ "convict":
/*!**************************!*\
  !*** external "convict" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("convict");

/***/ }),

/***/ "graphql-modules":
/*!**********************************!*\
  !*** external "graphql-modules" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-modules");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "superagent":
/*!*****************************!*\
  !*** external "superagent" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("superagent");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=main.map