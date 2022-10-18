/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkspace_tourism_app"] = self["webpackChunkspace_tourism_app"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const array = [\r\n  {\r\n    name: 'Evans',\r\n    score: 34,\r\n  },\r\n\r\n  {\r\n    name: 'Harry',\r\n    score: 34,\r\n  },\r\n\r\n  {\r\n    name: 'Mark',\r\n    score: 34,\r\n  },\r\n\r\n  {\r\n    name: 'Aecwood',\r\n    score: 34,\r\n  },\r\n\r\n  {\r\n    name: 'MagDee',\r\n    score: 34,\r\n  },\r\n\r\n  {\r\n    name: 'Shallot',\r\n    score: 34,\r\n  },\r\n];\r\n\r\nconst display = document.querySelector('#list');\r\nconst element = document.createElement('li');\r\n\r\nconst render = () => {\r\n  array.forEach((a) => {\r\n    element.innerHTML += `\r\n    <li class='litem'>\r\n      <label class='lname'> ${a.name} : </label> \r\n      <label class='lscore'> ${a.score} </label>\r\n    </li>\r\n    `;\r\n  })\r\n}\r\nwindow.onload = () => {\r\n  render();\r\n  document.querySelector('#list').appendChild(element)\r\n}\r\n\n\n//# sourceURL=webpack://space-tourism-app/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);