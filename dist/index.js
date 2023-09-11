/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship),
/* harmony export */   computerShips: () => (/* binding */ computerShips),
/* harmony export */   playerShips: () => (/* binding */ playerShips)
/* harmony export */ });
// ship.js

class Ship {
    constructor(length) {
      this.length = length;
      this.hits = 0;
      this.isSunk = false;
    }
  
    hit() {
      if (!this.isSunk) {
        this.hits++;
        if (this.hits === this.length) {
          this.isSunk = true;
        }
      }
    }
  }


// Create players ships
const playerCarrier = new Ship(5);
const playerBattleship = new Ship(4);
const playerCruiser = new Ship(3);
const playerSubmarine = new Ship(3);
const playerDestroyer = new Ship(2);

// Create computers ships
const computerCarrier = new Ship(5);
const computerBattleship = new Ship(4);
const computerCruiser = new Ship(3);
const computerSubmarine = new Ship(3);
const computerDestroyer = new Ship(2);

// Another way of creating the computerShips array
// const computerShips = {
//     computerCarrier: new Ship(5),
//     computerBattleship: new Ship(4),
//     computerCruiser: new Ship(3),
//     computerSubmarine: new Ship(3),
//     computerDestroyer: new Ship(2),
//   };

// // Create arrays for both sets of ships
const playerShips = [playerCarrier, playerBattleship, playerCruiser, playerSubmarine, playerDestroyer];
const computerShips = [computerCarrier, computerBattleship, computerCruiser, computerSubmarine, computerDestroyer];



// Example usage:
//   const myShip = new Ship(3); // Create a ship with a length of 3
//   myShip.hit(); // Mark the ship as hit once
//   myShip.hit(); // Mark the ship as hit again
//   console.log(myShip.isSunk()); // Check if the ship is sunk (false)
//   myShip.hit(); // Mark the ship as hit the third time
//   console.log(myShip.isSunk()); // Check if the ship is sunk (true)

// Example usage:
// console.log("Carrier isSunk:", carrier.isSunk()); // false
// console.log("Battleship isSunk:", battleship.isSunk()); // false
// console.log("Cruiser isSunk:", cruiser.isSunk()); // false
// console.log("Submarine isSunk:", submarine.isSunk()); // false
// console.log("Destroyer isSunk:", destroyer.isSunk()); // false
// console.log("Computer Carrier isSunk:", computerCarrier.isSunk()); // false
// console.log("Computer Battleship isSunk:", computerBattleship.isSunk()); // false
// console.log("Computer Cruiser isSunk:", computerCruiser.isSunk()); // false
// console.log("Computer Submarine isSunk:", computerSubmarine.isSunk()); // false
// console.log("Computer Destroyer isSunk:", computerDestroyer.isSunk()); // false

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships */ "./src/ships.js");


console.log("Computer Carrier isSunk?", _ships__WEBPACK_IMPORTED_MODULE_0__.computerShips[0].isSunk); // false
console.log("Computer Battleship isSunk?", _ships__WEBPACK_IMPORTED_MODULE_0__.computerShips[1].isSunk); // false
console.log("Computer Cruiser isSunk?", _ships__WEBPACK_IMPORTED_MODULE_0__.computerShips[2].isSunk); // false
console.log("Computer Submarine isSunk?", _ships__WEBPACK_IMPORTED_MODULE_0__.computerShips[3].isSunk); // false
console.log("Computer Destroyer isSunk?", _ships__WEBPACK_IMPORTED_MODULE_0__.computerShips[4].isSunk); // false
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUU0Qzs7QUFFNUM7QUFDQSxpQ0FBaUM7QUFDakMsbUJBQW1CO0FBQ25CLG1CQUFtQjtBQUNuQixtQ0FBbUM7QUFDbkMsbUJBQW1CO0FBQ25CLG1DQUFtQzs7QUFFbkM7QUFDQSxxREFBcUQ7QUFDckQsMkRBQTJEO0FBQzNELHFEQUFxRDtBQUNyRCx5REFBeUQ7QUFDekQseURBQXlEO0FBQ3pELHNFQUFzRTtBQUN0RSw0RUFBNEU7QUFDNUUsc0VBQXNFO0FBQ3RFLDBFQUEwRTtBQUMxRSwwRUFBMEU7Ozs7OztVQ25FMUU7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04yRDs7QUFFM0Qsd0NBQXdDLGlEQUFhLGFBQWE7QUFDbEUsMkNBQTJDLGlEQUFhLGFBQWE7QUFDckUsd0NBQXdDLGlEQUFhLGFBQWE7QUFDbEUsMENBQTBDLGlEQUFhLGFBQWE7QUFDcEUsMENBQTBDLGlEQUFhLGFBQWEsUSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzaGlwLmpzXG5cbmNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICB0aGlzLmhpdHMgPSAwO1xuICAgICAgdGhpcy5pc1N1bmsgPSBmYWxzZTtcbiAgICB9XG4gIFxuICAgIGhpdCgpIHtcbiAgICAgIGlmICghdGhpcy5pc1N1bmspIHtcbiAgICAgICAgdGhpcy5oaXRzKys7XG4gICAgICAgIGlmICh0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5pc1N1bmsgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuLy8gQ3JlYXRlIHBsYXllcnMgc2hpcHNcbmNvbnN0IHBsYXllckNhcnJpZXIgPSBuZXcgU2hpcCg1KTtcbmNvbnN0IHBsYXllckJhdHRsZXNoaXAgPSBuZXcgU2hpcCg0KTtcbmNvbnN0IHBsYXllckNydWlzZXIgPSBuZXcgU2hpcCgzKTtcbmNvbnN0IHBsYXllclN1Ym1hcmluZSA9IG5ldyBTaGlwKDMpO1xuY29uc3QgcGxheWVyRGVzdHJveWVyID0gbmV3IFNoaXAoMik7XG5cbi8vIENyZWF0ZSBjb21wdXRlcnMgc2hpcHNcbmNvbnN0IGNvbXB1dGVyQ2FycmllciA9IG5ldyBTaGlwKDUpO1xuY29uc3QgY29tcHV0ZXJCYXR0bGVzaGlwID0gbmV3IFNoaXAoNCk7XG5jb25zdCBjb21wdXRlckNydWlzZXIgPSBuZXcgU2hpcCgzKTtcbmNvbnN0IGNvbXB1dGVyU3VibWFyaW5lID0gbmV3IFNoaXAoMyk7XG5jb25zdCBjb21wdXRlckRlc3Ryb3llciA9IG5ldyBTaGlwKDIpO1xuXG4vLyBBbm90aGVyIHdheSBvZiBjcmVhdGluZyB0aGUgY29tcHV0ZXJTaGlwcyBhcnJheVxuLy8gY29uc3QgY29tcHV0ZXJTaGlwcyA9IHtcbi8vICAgICBjb21wdXRlckNhcnJpZXI6IG5ldyBTaGlwKDUpLFxuLy8gICAgIGNvbXB1dGVyQmF0dGxlc2hpcDogbmV3IFNoaXAoNCksXG4vLyAgICAgY29tcHV0ZXJDcnVpc2VyOiBuZXcgU2hpcCgzKSxcbi8vICAgICBjb21wdXRlclN1Ym1hcmluZTogbmV3IFNoaXAoMyksXG4vLyAgICAgY29tcHV0ZXJEZXN0cm95ZXI6IG5ldyBTaGlwKDIpLFxuLy8gICB9O1xuXG4vLyAvLyBDcmVhdGUgYXJyYXlzIGZvciBib3RoIHNldHMgb2Ygc2hpcHNcbmNvbnN0IHBsYXllclNoaXBzID0gW3BsYXllckNhcnJpZXIsIHBsYXllckJhdHRsZXNoaXAsIHBsYXllckNydWlzZXIsIHBsYXllclN1Ym1hcmluZSwgcGxheWVyRGVzdHJveWVyXTtcbmNvbnN0IGNvbXB1dGVyU2hpcHMgPSBbY29tcHV0ZXJDYXJyaWVyLCBjb21wdXRlckJhdHRsZXNoaXAsIGNvbXB1dGVyQ3J1aXNlciwgY29tcHV0ZXJTdWJtYXJpbmUsIGNvbXB1dGVyRGVzdHJveWVyXTtcblxuZXhwb3J0IHsgU2hpcCwgcGxheWVyU2hpcHMsIGNvbXB1dGVyU2hpcHMgfTtcblxuLy8gRXhhbXBsZSB1c2FnZTpcbi8vICAgY29uc3QgbXlTaGlwID0gbmV3IFNoaXAoMyk7IC8vIENyZWF0ZSBhIHNoaXAgd2l0aCBhIGxlbmd0aCBvZiAzXG4vLyAgIG15U2hpcC5oaXQoKTsgLy8gTWFyayB0aGUgc2hpcCBhcyBoaXQgb25jZVxuLy8gICBteVNoaXAuaGl0KCk7IC8vIE1hcmsgdGhlIHNoaXAgYXMgaGl0IGFnYWluXG4vLyAgIGNvbnNvbGUubG9nKG15U2hpcC5pc1N1bmsoKSk7IC8vIENoZWNrIGlmIHRoZSBzaGlwIGlzIHN1bmsgKGZhbHNlKVxuLy8gICBteVNoaXAuaGl0KCk7IC8vIE1hcmsgdGhlIHNoaXAgYXMgaGl0IHRoZSB0aGlyZCB0aW1lXG4vLyAgIGNvbnNvbGUubG9nKG15U2hpcC5pc1N1bmsoKSk7IC8vIENoZWNrIGlmIHRoZSBzaGlwIGlzIHN1bmsgKHRydWUpXG5cbi8vIEV4YW1wbGUgdXNhZ2U6XG4vLyBjb25zb2xlLmxvZyhcIkNhcnJpZXIgaXNTdW5rOlwiLCBjYXJyaWVyLmlzU3VuaygpKTsgLy8gZmFsc2Vcbi8vIGNvbnNvbGUubG9nKFwiQmF0dGxlc2hpcCBpc1N1bms6XCIsIGJhdHRsZXNoaXAuaXNTdW5rKCkpOyAvLyBmYWxzZVxuLy8gY29uc29sZS5sb2coXCJDcnVpc2VyIGlzU3VuazpcIiwgY3J1aXNlci5pc1N1bmsoKSk7IC8vIGZhbHNlXG4vLyBjb25zb2xlLmxvZyhcIlN1Ym1hcmluZSBpc1N1bms6XCIsIHN1Ym1hcmluZS5pc1N1bmsoKSk7IC8vIGZhbHNlXG4vLyBjb25zb2xlLmxvZyhcIkRlc3Ryb3llciBpc1N1bms6XCIsIGRlc3Ryb3llci5pc1N1bmsoKSk7IC8vIGZhbHNlXG4vLyBjb25zb2xlLmxvZyhcIkNvbXB1dGVyIENhcnJpZXIgaXNTdW5rOlwiLCBjb21wdXRlckNhcnJpZXIuaXNTdW5rKCkpOyAvLyBmYWxzZVxuLy8gY29uc29sZS5sb2coXCJDb21wdXRlciBCYXR0bGVzaGlwIGlzU3VuazpcIiwgY29tcHV0ZXJCYXR0bGVzaGlwLmlzU3VuaygpKTsgLy8gZmFsc2Vcbi8vIGNvbnNvbGUubG9nKFwiQ29tcHV0ZXIgQ3J1aXNlciBpc1N1bms6XCIsIGNvbXB1dGVyQ3J1aXNlci5pc1N1bmsoKSk7IC8vIGZhbHNlXG4vLyBjb25zb2xlLmxvZyhcIkNvbXB1dGVyIFN1Ym1hcmluZSBpc1N1bms6XCIsIGNvbXB1dGVyU3VibWFyaW5lLmlzU3VuaygpKTsgLy8gZmFsc2Vcbi8vIGNvbnNvbGUubG9nKFwiQ29tcHV0ZXIgRGVzdHJveWVyIGlzU3VuazpcIiwgY29tcHV0ZXJEZXN0cm95ZXIuaXNTdW5rKCkpOyAvLyBmYWxzZSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgU2hpcCwgcGxheWVyU2hpcHMsIGNvbXB1dGVyU2hpcHMgfSBmcm9tICcuL3NoaXBzJztcblxuY29uc29sZS5sb2coXCJDb21wdXRlciBDYXJyaWVyIGlzU3Vuaz9cIiwgY29tcHV0ZXJTaGlwc1swXS5pc1N1bmspOyAvLyBmYWxzZVxuY29uc29sZS5sb2coXCJDb21wdXRlciBCYXR0bGVzaGlwIGlzU3Vuaz9cIiwgY29tcHV0ZXJTaGlwc1sxXS5pc1N1bmspOyAvLyBmYWxzZVxuY29uc29sZS5sb2coXCJDb21wdXRlciBDcnVpc2VyIGlzU3Vuaz9cIiwgY29tcHV0ZXJTaGlwc1syXS5pc1N1bmspOyAvLyBmYWxzZVxuY29uc29sZS5sb2coXCJDb21wdXRlciBTdWJtYXJpbmUgaXNTdW5rP1wiLCBjb21wdXRlclNoaXBzWzNdLmlzU3Vuayk7IC8vIGZhbHNlXG5jb25zb2xlLmxvZyhcIkNvbXB1dGVyIERlc3Ryb3llciBpc1N1bms/XCIsIGNvbXB1dGVyU2hpcHNbNF0uaXNTdW5rKTsgLy8gZmFsc2UiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=