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

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Game {\n    ctx;\n    states;\n    constructor(ctx) {\n        this.ctx = ctx;\n        this.states = [];\n    }\n    update(states) {\n        this.states = states;\n    }\n    redraw() {\n        this.states.forEach(state => {\n            const element = state.element;\n            console.log(state);\n            this.ctx.save();\n            this.ctx.beginPath();\n            this.ctx.fillText(element.name, element.x, element.y);\n            this.ctx.fillStyle = `rgb(${element.color[0]},${element.color[1]},${element.color[2]})`;\n            this.ctx.fillRect(element.x, element.y, element.width, element.height);\n            this.ctx.restore();\n        });\n    }\n    loop(timestamp) {\n        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);\n        this.redraw();\n        window.requestAnimationFrame(this.loop.bind(this));\n    }\n    run() {\n        window.requestAnimationFrame(this.loop.bind(this));\n    }\n}\nexports[\"default\"] = Game;\n\n\n//# sourceURL=webpack://wow/./src/Game.ts?");

/***/ }),

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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Game_1 = __importDefault(__webpack_require__(/*! ./Game */ \"./src/Game.ts\"));\nconst GameElement_1 = __importDefault(__webpack_require__(/*! ./GameElement */ \"./src/GameElement.ts\"));\nconst GameInput_1 = __importDefault(__webpack_require__(/*! ./GameInput */ \"./src/GameInput.ts\"));\nconst GameState_1 = __importDefault(__webpack_require__(/*! ./GameState */ \"./src/GameState.ts\"));\nconst utils_1 = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\nconst worker = new Worker(\"server.js\");\nlet states = [];\nfunction start() {\n    worker.postMessage((0, utils_1.make)(\"start\", states));\n}\nfunction update() {\n    worker.postMessage((0, utils_1.make)(\"update\", states));\n    // window.requestAnimationFrame(update)\n}\nfunction listen(game) {\n    worker.addEventListener(\"message\", function (e) {\n        const data = e.data;\n        states = data.map(d => {\n            const state = new GameState_1.default(new GameElement_1.default(0), new GameInput_1.default());\n            state.unserialize(d);\n            return state;\n        });\n        game.update(states);\n    });\n}\nfunction listenKeyorad() {\n    document.addEventListener(\"keydown\", function (e) {\n        const player = states.find(state => state.element.id === 1);\n        if (!player) {\n            throw new Error(\"No player\");\n        }\n        player.input.setKey(e.key, true);\n    });\n    document.addEventListener(\"keyup\", function (e) {\n        const player = states.find(state => state.element.id === 1);\n        if (!player) {\n            throw new Error(\"No player\");\n        }\n        player.input.setKey(e.key, false);\n    });\n}\nfunction main() {\n    const app = document.getElementById(\"app\");\n    if (!app) {\n        throw new Error(\"app container does not exist\");\n    }\n    const canvas = document.createElement(\"canvas\");\n    canvas.width = app.clientWidth;\n    canvas.height = app.clientHeight;\n    const context = canvas.getContext(\"2d\");\n    if (!context) {\n        throw new Error(\"Your browser does not support canvas,please use chrome of latest version\");\n    }\n    app.appendChild(canvas);\n    const game = new Game_1.default(context);\n    game.run();\n    listen(game);\n    listenKeyorad();\n    start();\n    // setInterval(update, 1000)\n}\nmain();\n\n\n//# sourceURL=webpack://wow/./src/main.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;