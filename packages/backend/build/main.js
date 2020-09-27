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

/***/ "./src/characters/index.js":
/*!*********************************!*\
  !*** ./src/characters/index.js ***!
  \*********************************/
/*! exports provided: charactersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charactersModule", function() { return charactersModule; });
/* harmony import */ var graphql_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-modules */ "graphql-modules");
/* harmony import */ var graphql_modules__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_modules__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! superagent */ "superagent");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! querystring */ "querystring");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/config/index.js");




const charactersModule = Object(graphql_modules__WEBPACK_IMPORTED_MODULE_0__["createModule"])({
  id: "characters-module",
  __dirname: __dirname,
  typeDefs: graphql_modules__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    type Query {
      hello: String
    }
  `,
  resolvers: {
    Query: {
      hello: async () => {
        const api = _config__WEBPACK_IMPORTED_MODULE_3__["default"].get("api");
        const params = querystring__WEBPACK_IMPORTED_MODULE_2___default.a.stringify({
          apikey: api.publicKey,
          hash: api.hash,
          ts: 1
        });
        const res = await superagent__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${api.url}/v1/public/characters?${params}`);
        console.log(res.body.data);
        return "Hello world!";
      }
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, "src/characters"))

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
/* harmony import */ var _characters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./characters */ "./src/characters/index.js");
// import express from "express";



const application = Object(graphql_modules__WEBPACK_IMPORTED_MODULE_1__["createApplication"])({
  modules: [_characters__WEBPACK_IMPORTED_MODULE_2__["charactersModule"]]
});
const PORT = process.env.PORT || 4000;
const schema = application.createSchemaForApollo();
const server = new apollo_server__WEBPACK_IMPORTED_MODULE_0__["ApolloServer"]({
  schema
});
server.listen({
  port: PORT
}).then(({
  url
}) => {
  console.log(`🚀 Server ready at ${url}`);
});

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

/***/ })

/******/ });
//# sourceMappingURL=main.map