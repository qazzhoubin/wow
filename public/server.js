/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/GameElement.ts":
/*!****************************!*\
  !*** ./src/GameElement.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass GameElement {\n    id;\n    name;\n    hp;\n    mp;\n    speed;\n    power;\n    defence;\n    width;\n    height;\n    x;\n    y;\n    color;\n    constructor(id) {\n        this.id = id;\n        this.name = \"\";\n        this.hp = 0;\n        this.mp = 0;\n        this.speed = 0;\n        this.power = 0;\n        this.defence = 0;\n        this.width = 0;\n        this.height = 0;\n        this.x = 0;\n        this.y = 0;\n        this.color = [0, 0, 0];\n    }\n    serialize() {\n        return [\n            this.id,\n            this.name,\n            this.hp,\n            this.mp,\n            this.speed,\n            this.power,\n            this.defence,\n            this.x,\n            this.y,\n            this.width,\n            this.height,\n            this.color.join(\",\")\n        ].join(\"|\");\n    }\n    unserialize(serialized) {\n        const values = serialized.split(\"|\");\n        this.id = Number(values[0]);\n        this.name = values[1];\n        this.hp = Number(values[2]);\n        this.mp = Number(values[3]);\n        this.speed = Number(values[4]);\n        this.power = Number(values[5]);\n        this.defence = Number(values[6]);\n        this.x = Number(values[7]);\n        this.y = Number(values[8]);\n        this.width = Number(values[9]);\n        this.height = Number(values[10]);\n        this.color = values[11].split(\",\").map(c => Number(c));\n    }\n}\nexports[\"default\"] = GameElement;\n\n\n//# sourceURL=webpack://wow/./src/GameElement.ts?");

/***/ }),

/***/ "./src/GameInput.ts":
/*!**************************!*\
  !*** ./src/GameInput.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass GameInput {\n    keys;\n    constructor() {\n        this.keys = new Map();\n    }\n    setKey(key, pressed) {\n        this.keys.set(key, pressed);\n    }\n    hasKey(keys) {\n        const d = [];\n        return d.concat(keys).every(key => this.keys.has(key) && this.keys.get(key));\n    }\n    serialize() {\n        return Array.from(this.keys.keys()).filter(key => this.keys.has(key) && this.keys.get(key)).join(\"|\");\n    }\n    unserialize(serialized) {\n        const values = serialized.split(\"|\");\n        values.forEach(key => {\n            this.keys.set(key, true);\n        });\n    }\n}\nexports[\"default\"] = GameInput;\n\n\n//# sourceURL=webpack://wow/./src/GameInput.ts?");

/***/ }),

/***/ "./src/GameState.ts":
/*!**************************!*\
  !*** ./src/GameState.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass GameState {\n    element;\n    input;\n    constructor(element, input) {\n        this.element = element;\n        this.input = input;\n    }\n    serialize() {\n        return [\n            this.element.serialize(),\n            this.input.serialize()\n        ].join(\"\\r\\n\");\n    }\n    unserialize(serialized) {\n        const values = serialized.split(\"\\r\\n\");\n        this.element.unserialize(values[0]);\n        this.input.unserialize(values[1]);\n    }\n}\nexports[\"default\"] = GameState;\n\n\n//# sourceURL=webpack://wow/./src/GameState.ts?");

/***/ }),

/***/ "./src/Vector.ts":
/*!***********************!*\
  !*** ./src/Vector.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Vector {\n    components;\n    constructor(...components) {\n        this.components = components;\n    }\n    add({ components }) {\n        return new Vector(...this.components.map((component, index) => component + components[index]));\n    }\n    subtract({ components }) {\n        return new Vector(...this.components.map((component, index) => component - components[index]));\n    }\n    reverse() {\n        return new Vector(...this.components.reverse());\n    }\n}\nexports[\"default\"] = Vector;\n\n\n//# sourceURL=webpack://wow/./src/Vector.ts?");

/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst GameElement_1 = __importDefault(__webpack_require__(/*! ./GameElement */ \"./src/GameElement.ts\"));\nconst GameInput_1 = __importDefault(__webpack_require__(/*! ./GameInput */ \"./src/GameInput.ts\"));\nconst GameState_1 = __importDefault(__webpack_require__(/*! ./GameState */ \"./src/GameState.ts\"));\nconst Vector_1 = __importDefault(__webpack_require__(/*! ./Vector */ \"./src/Vector.ts\"));\nconst utils_1 = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\nlet states = [];\nonmessage = function (e) {\n    const data = e.data;\n    const command = data[0];\n    switch (command) {\n        case \"start\":\n            StartGame();\n            break;\n        case \"update\":\n            UpdateGame(data[1]);\n            break;\n    }\n    boardcast();\n};\nfunction boardcast() {\n    const response = states.map(state => state.serialize());\n    postMessage(response);\n}\nfunction AI() {\n    states.forEach((state, i) => {\n        if (state.element.id !== 1) {\n            const key = [\"w\", \"d\", \"s\", \"a\"][Math.floor(i % 4)];\n            state.input.setKey(key, true);\n            UpdateState(state);\n        }\n    });\n    boardcast();\n    requestAnimationFrame(AI);\n}\nfunction StartGame() {\n    for (let i = 1; i <= 10; i++) {\n        const ele = new GameElement_1.default(i);\n        const input = new GameInput_1.default();\n        ele.name = `name-${i}`;\n        ele.hp = (0, utils_1.random)(0, 100);\n        ele.mp = (0, utils_1.random)(0, 100);\n        ele.power = (0, utils_1.random)(0, 100);\n        ele.defence = (0, utils_1.random)(0, 100);\n        ele.speed = (0, utils_1.random)(0, 100);\n        ele.x = (0, utils_1.random)(100, 500);\n        ele.y = (0, utils_1.random)(100, 500);\n        ele.width = (0, utils_1.random)(5, 20);\n        ele.height = (0, utils_1.random)(5, 20);\n        ele.color = [(0, utils_1.random)(0, 255), (0, utils_1.random)(0, 255), (0, utils_1.random)(0, 255)];\n        const state = new GameState_1.default(ele, input);\n        states.push(state);\n    }\n    AI();\n}\nfunction UpdateGame(data) {\n    states = data.map(d => {\n        const state = new GameState_1.default(new GameElement_1.default(0), new GameInput_1.default());\n        state.unserialize(d);\n        return state;\n    });\n    const player = states.find(state => state.element.id === 1);\n    if (player) {\n        UpdateState(player);\n    }\n}\nfunction UpdateState(state) {\n    const input = state.input;\n    const baseSpeed = new Vector_1.default(5, 0);\n    let position = new Vector_1.default(state.element.x, state.element.y);\n    if (input.hasKey([\"w\"])) {\n        position = position.subtract(baseSpeed.reverse());\n    }\n    if (input.hasKey([\"d\"])) {\n        position = position.add(baseSpeed);\n    }\n    if (input.hasKey([\"s\"])) {\n        position = position.add(baseSpeed.reverse());\n    }\n    if (input.hasKey([\"a\"])) {\n        position = position.subtract(baseSpeed);\n    }\n    state.element.x = position.components[0];\n    state.element.y = position.components[1];\n}\n\n\n//# sourceURL=webpack://wow/./src/server.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.make = exports.random = void 0;\nfunction random(min, max) {\n    return Math.floor((max - min) * Math.random() + min);\n}\nexports.random = random;\nfunction make(command, states) {\n    const data = states.map(state => state.serialize());\n    return [command, data];\n}\nexports.make = make;\n\n\n//# sourceURL=webpack://wow/./src/utils.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server.ts");
/******/ 	
/******/ })()
;