/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// gameboard.js
var Gameboard = /*#__PURE__*/function () {
  function Gameboard() {
    _classCallCheck(this, Gameboard);
    // Initialize gameboard state
    this.gridSize = 10;
    this.missedAttacks = [];
    this.createGameboardGrid(); // Automatically insert gameboards on page load
  }

  // Create and append the gameboard grid to the DOM
  _createClass(Gameboard, [{
    key: "createGameboardGrid",
    value: function createGameboardGrid() {
      // Get the DOM element with the id "game-board"
      var gameBoardElement = document.getElementById('game-board');

      // Create two gameboards side by side
      for (var i = 0; i < 2; i++) {
        var gameboard = document.createElement('div');
        gameboard.classList.add('gameboard');
        gameboard.id = "gameboard-".concat(i);

        // Create a 10x10 grid
        for (var row = 0; row < this.gridSize; row++) {
          for (var col = 0; col < this.gridSize; col++) {
            var cell = document.createElement('button');
            cell.classList.add('cell');
            cell.dataset.coordinates = "".concat(row, "-").concat(col);
            cell.dataset.gameboardIndex = i;
            gameboard.appendChild(cell);
          }
        }
        gameBoardElement.appendChild(gameboard);
      }

      // Add event listener to handle cell clicks
      gameBoardElement.addEventListener('click', function (event) {
        if (event.target.classList.contains('cell')) {
          var coordinates = event.target.dataset.coordinates;
          var gameboardIndex = event.target.dataset.gameboardIndex;
          console.log("Clicked cell coordinates: ".concat(coordinates, " | ").concat(gameboardIndex));
        }
      });
    }

    // Place a ship on the gameboard at specified coordinates
  }, {
    key: "placeShip",
    value: function placeShip(ship, coordinates) {
      // Logic to place the ship at the specified coordinates
      // You can add ship placement logic here
    }

    // Receive an attack and determine hit or miss
  }, {
    key: "receiveAttack",
    value: function receiveAttack(coordinates) {
      // Logic to determine if the attack hit a ship or missed
      // If hit, send the 'hit' function to the correct ship
      // If missed, record the missed attack coordinates
    }

    // Check if all ships on the gameboard have been sunk
  }, {
    key: "allShipsSunk",
    value: function allShipsSunk() {
      // Logic to check if all ships on the gameboard have been sunk
      // You can iterate through the ships array and check their status
    }
  }]);
  return Gameboard;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);

/***/ }),

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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// ship.js
var Ship = /*#__PURE__*/function () {
  function Ship(length) {
    _classCallCheck(this, Ship);
    this.length = length;
    this.hits = 0;
    this.isSunk = false;
  }
  _createClass(Ship, [{
    key: "hit",
    value: function hit() {
      if (!this.isSunk) {
        this.hits++;
        if (this.hits === this.length) {
          this.isSunk = true;
        }
      }
    }
  }]);
  return Ship;
}(); // Create players ships
var playerCarrier = new Ship(5);
var playerBattleship = new Ship(4);
var playerCruiser = new Ship(3);
var playerSubmarine = new Ship(3);
var playerDestroyer = new Ship(2);

// Create computers ships
var computerCarrier = new Ship(5);
var computerBattleship = new Ship(4);
var computerCruiser = new Ship(3);
var computerSubmarine = new Ship(3);
var computerDestroyer = new Ship(2);

// Another way of creating the computerShips array
// const computerShips = {
//     computerCarrier: new Ship(5),
//     computerBattleship: new Ship(4),
//     computerCruiser: new Ship(3),
//     computerSubmarine: new Ship(3),
//     computerDestroyer: new Ship(2),
//   };

// // Create arrays for both sets of ships
var playerShips = [playerCarrier, playerBattleship, playerCruiser, playerSubmarine, playerDestroyer];
var computerShips = [computerCarrier, computerBattleship, computerCruiser, computerSubmarine, computerDestroyer];


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
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");


document.addEventListener('DOMContentLoaded', function () {
  var gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_1__["default"]();
});
console.log("Computer Carrier isSunk?", _ships__WEBPACK_IMPORTED_MODULE_0__.computerShips[0].length); // false
console.log("Computer Battleship isSunk?", _ships__WEBPACK_IMPORTED_MODULE_0__.computerShips[1].isSunk); // false
console.log("Computer Cruiser isSunk?", _ships__WEBPACK_IMPORTED_MODULE_0__.computerShips[2].isSunk); // false
console.log("Computer Submarine isSunk?", _ships__WEBPACK_IMPORTED_MODULE_0__.computerShips[3].isSunk); // false
console.log("Computer Destroyer isSunk?", _ships__WEBPACK_IMPORTED_MODULE_0__.computerShips[4].isSunk); // false
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3JFVCxPQUFPLENBQUNDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRXFCLGlEQUFhLENBQUMsQ0FBQyxDQUFDLENBQUNiLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDbEVULE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDRCQUE0QixFQUFFcUIsaURBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQ2IsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNwRVQsT0FBTyxDQUFDQyxHQUFHLENBQUMsNEJBQTRCLEVBQUVxQixpREFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDYixNQUFNLENBQUMsQ0FBQyxDQUFDLFEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2FtZWJvYXJkLmpzXG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAvLyBJbml0aWFsaXplIGdhbWVib2FyZCBzdGF0ZVxuICAgICAgdGhpcy5ncmlkU2l6ZSA9IDEwO1xuICAgICAgdGhpcy5taXNzZWRBdHRhY2tzID0gW107XG4gICAgICB0aGlzLmNyZWF0ZUdhbWVib2FyZEdyaWQoKTsgLy8gQXV0b21hdGljYWxseSBpbnNlcnQgZ2FtZWJvYXJkcyBvbiBwYWdlIGxvYWRcbiAgICB9XG4gIFxuICAgIC8vIENyZWF0ZSBhbmQgYXBwZW5kIHRoZSBnYW1lYm9hcmQgZ3JpZCB0byB0aGUgRE9NXG4gICAgY3JlYXRlR2FtZWJvYXJkR3JpZCgpIHtcbiAgICAgIC8vIEdldCB0aGUgRE9NIGVsZW1lbnQgd2l0aCB0aGUgaWQgXCJnYW1lLWJvYXJkXCJcbiAgICAgIGNvbnN0IGdhbWVCb2FyZEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1ib2FyZCcpO1xuICBcbiAgICAgIC8vIENyZWF0ZSB0d28gZ2FtZWJvYXJkcyBzaWRlIGJ5IHNpZGVcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGdhbWVib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBnYW1lYm9hcmQuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkJyk7XG4gICAgICAgIGdhbWVib2FyZC5pZCA9IGBnYW1lYm9hcmQtJHtpfWA7XG4gIFxuICAgICAgICAvLyBDcmVhdGUgYSAxMHgxMCBncmlkXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMuZ3JpZFNpemU7IHJvdysrKSB7XG4gICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy5ncmlkU2l6ZTsgY29sKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgICAgICAgY2VsbC5kYXRhc2V0LmNvb3JkaW5hdGVzID0gYCR7cm93fS0ke2NvbH1gO1xuICAgICAgICAgICAgY2VsbC5kYXRhc2V0LmdhbWVib2FyZEluZGV4ID0gaTtcbiAgICAgICAgICAgIGdhbWVib2FyZC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGdhbWVCb2FyZEVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2FtZWJvYXJkKTtcbiAgICAgIH1cbiAgXG4gICAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gaGFuZGxlIGNlbGwgY2xpY2tzXG4gICAgICBnYW1lQm9hcmRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZWxsJykpIHtcbiAgICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmNvb3JkaW5hdGVzO1xuICAgICAgICAgIGNvbnN0IGdhbWVib2FyZEluZGV4ID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuZ2FtZWJvYXJkSW5kZXg7XG4gICAgICAgICAgY29uc29sZS5sb2coYENsaWNrZWQgY2VsbCBjb29yZGluYXRlczogJHtjb29yZGluYXRlc30gfCAke2dhbWVib2FyZEluZGV4fWApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIFxuICAgIC8vIFBsYWNlIGEgc2hpcCBvbiB0aGUgZ2FtZWJvYXJkIGF0IHNwZWNpZmllZCBjb29yZGluYXRlc1xuICAgIHBsYWNlU2hpcChzaGlwLCBjb29yZGluYXRlcykge1xuICAgICAgLy8gTG9naWMgdG8gcGxhY2UgdGhlIHNoaXAgYXQgdGhlIHNwZWNpZmllZCBjb29yZGluYXRlc1xuICAgICAgLy8gWW91IGNhbiBhZGQgc2hpcCBwbGFjZW1lbnQgbG9naWMgaGVyZVxuICAgIH1cbiAgXG4gICAgLy8gUmVjZWl2ZSBhbiBhdHRhY2sgYW5kIGRldGVybWluZSBoaXQgb3IgbWlzc1xuICAgIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpIHtcbiAgICAgIC8vIExvZ2ljIHRvIGRldGVybWluZSBpZiB0aGUgYXR0YWNrIGhpdCBhIHNoaXAgb3IgbWlzc2VkXG4gICAgICAvLyBJZiBoaXQsIHNlbmQgdGhlICdoaXQnIGZ1bmN0aW9uIHRvIHRoZSBjb3JyZWN0IHNoaXBcbiAgICAgIC8vIElmIG1pc3NlZCwgcmVjb3JkIHRoZSBtaXNzZWQgYXR0YWNrIGNvb3JkaW5hdGVzXG4gICAgfVxuICBcbiAgICAvLyBDaGVjayBpZiBhbGwgc2hpcHMgb24gdGhlIGdhbWVib2FyZCBoYXZlIGJlZW4gc3Vua1xuICAgIGFsbFNoaXBzU3VuaygpIHtcbiAgICAgIC8vIExvZ2ljIHRvIGNoZWNrIGlmIGFsbCBzaGlwcyBvbiB0aGUgZ2FtZWJvYXJkIGhhdmUgYmVlbiBzdW5rXG4gICAgICAvLyBZb3UgY2FuIGl0ZXJhdGUgdGhyb3VnaCB0aGUgc2hpcHMgYXJyYXkgYW5kIGNoZWNrIHRoZWlyIHN0YXR1c1xuICAgIH1cbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuICAiLCIvLyBzaGlwLmpzXG5cbmNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICB0aGlzLmhpdHMgPSAwO1xuICAgICAgdGhpcy5pc1N1bmsgPSBmYWxzZTtcbiAgICB9XG4gIFxuICAgIGhpdCgpIHtcbiAgICAgIGlmICghdGhpcy5pc1N1bmspIHtcbiAgICAgICAgdGhpcy5oaXRzKys7XG4gICAgICAgIGlmICh0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5pc1N1bmsgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuLy8gQ3JlYXRlIHBsYXllcnMgc2hpcHNcbmNvbnN0IHBsYXllckNhcnJpZXIgPSBuZXcgU2hpcCg1KTtcbmNvbnN0IHBsYXllckJhdHRsZXNoaXAgPSBuZXcgU2hpcCg0KTtcbmNvbnN0IHBsYXllckNydWlzZXIgPSBuZXcgU2hpcCgzKTtcbmNvbnN0IHBsYXllclN1Ym1hcmluZSA9IG5ldyBTaGlwKDMpO1xuY29uc3QgcGxheWVyRGVzdHJveWVyID0gbmV3IFNoaXAoMik7XG5cbi8vIENyZWF0ZSBjb21wdXRlcnMgc2hpcHNcbmNvbnN0IGNvbXB1dGVyQ2FycmllciA9IG5ldyBTaGlwKDUpO1xuY29uc3QgY29tcHV0ZXJCYXR0bGVzaGlwID0gbmV3IFNoaXAoNCk7XG5jb25zdCBjb21wdXRlckNydWlzZXIgPSBuZXcgU2hpcCgzKTtcbmNvbnN0IGNvbXB1dGVyU3VibWFyaW5lID0gbmV3IFNoaXAoMyk7XG5jb25zdCBjb21wdXRlckRlc3Ryb3llciA9IG5ldyBTaGlwKDIpO1xuXG4vLyBBbm90aGVyIHdheSBvZiBjcmVhdGluZyB0aGUgY29tcHV0ZXJTaGlwcyBhcnJheVxuLy8gY29uc3QgY29tcHV0ZXJTaGlwcyA9IHtcbi8vICAgICBjb21wdXRlckNhcnJpZXI6IG5ldyBTaGlwKDUpLFxuLy8gICAgIGNvbXB1dGVyQmF0dGxlc2hpcDogbmV3IFNoaXAoNCksXG4vLyAgICAgY29tcHV0ZXJDcnVpc2VyOiBuZXcgU2hpcCgzKSxcbi8vICAgICBjb21wdXRlclN1Ym1hcmluZTogbmV3IFNoaXAoMyksXG4vLyAgICAgY29tcHV0ZXJEZXN0cm95ZXI6IG5ldyBTaGlwKDIpLFxuLy8gICB9O1xuXG4vLyAvLyBDcmVhdGUgYXJyYXlzIGZvciBib3RoIHNldHMgb2Ygc2hpcHNcbmNvbnN0IHBsYXllclNoaXBzID0gW3BsYXllckNhcnJpZXIsIHBsYXllckJhdHRsZXNoaXAsIHBsYXllckNydWlzZXIsIHBsYXllclN1Ym1hcmluZSwgcGxheWVyRGVzdHJveWVyXTtcbmNvbnN0IGNvbXB1dGVyU2hpcHMgPSBbY29tcHV0ZXJDYXJyaWVyLCBjb21wdXRlckJhdHRsZXNoaXAsIGNvbXB1dGVyQ3J1aXNlciwgY29tcHV0ZXJTdWJtYXJpbmUsIGNvbXB1dGVyRGVzdHJveWVyXTtcblxuZXhwb3J0IHsgU2hpcCwgcGxheWVyU2hpcHMsIGNvbXB1dGVyU2hpcHMgfTtcblxuLy8gRXhhbXBsZSB1c2FnZTpcbi8vICAgY29uc3QgbXlTaGlwID0gbmV3IFNoaXAoMyk7IC8vIENyZWF0ZSBhIHNoaXAgd2l0aCBhIGxlbmd0aCBvZiAzXG4vLyAgIG15U2hpcC5oaXQoKTsgLy8gTWFyayB0aGUgc2hpcCBhcyBoaXQgb25jZVxuLy8gICBteVNoaXAuaGl0KCk7IC8vIE1hcmsgdGhlIHNoaXAgYXMgaGl0IGFnYWluXG4vLyAgIGNvbnNvbGUubG9nKG15U2hpcC5pc1N1bmsoKSk7IC8vIENoZWNrIGlmIHRoZSBzaGlwIGlzIHN1bmsgKGZhbHNlKVxuLy8gICBteVNoaXAuaGl0KCk7IC8vIE1hcmsgdGhlIHNoaXAgYXMgaGl0IHRoZSB0aGlyZCB0aW1lXG4vLyAgIGNvbnNvbGUubG9nKG15U2hpcC5pc1N1bmsoKSk7IC8vIENoZWNrIGlmIHRoZSBzaGlwIGlzIHN1bmsgKHRydWUpXG5cbi8vIEV4YW1wbGUgdXNhZ2U6XG4vLyBjb25zb2xlLmxvZyhcIkNhcnJpZXIgaXNTdW5rOlwiLCBjYXJyaWVyLmlzU3VuaygpKTsgLy8gZmFsc2Vcbi8vIGNvbnNvbGUubG9nKFwiQmF0dGxlc2hpcCBpc1N1bms6XCIsIGJhdHRsZXNoaXAuaXNTdW5rKCkpOyAvLyBmYWxzZVxuLy8gY29uc29sZS5sb2coXCJDcnVpc2VyIGlzU3VuazpcIiwgY3J1aXNlci5pc1N1bmsoKSk7IC8vIGZhbHNlXG4vLyBjb25zb2xlLmxvZyhcIlN1Ym1hcmluZSBpc1N1bms6XCIsIHN1Ym1hcmluZS5pc1N1bmsoKSk7IC8vIGZhbHNlXG4vLyBjb25zb2xlLmxvZyhcIkRlc3Ryb3llciBpc1N1bms6XCIsIGRlc3Ryb3llci5pc1N1bmsoKSk7IC8vIGZhbHNlXG4vLyBjb25zb2xlLmxvZyhcIkNvbXB1dGVyIENhcnJpZXIgaXNTdW5rOlwiLCBjb21wdXRlckNhcnJpZXIuaXNTdW5rKCkpOyAvLyBmYWxzZVxuLy8gY29uc29sZS5sb2coXCJDb21wdXRlciBCYXR0bGVzaGlwIGlzU3VuazpcIiwgY29tcHV0ZXJCYXR0bGVzaGlwLmlzU3VuaygpKTsgLy8gZmFsc2Vcbi8vIGNvbnNvbGUubG9nKFwiQ29tcHV0ZXIgQ3J1aXNlciBpc1N1bms6XCIsIGNvbXB1dGVyQ3J1aXNlci5pc1N1bmsoKSk7IC8vIGZhbHNlXG4vLyBjb25zb2xlLmxvZyhcIkNvbXB1dGVyIFN1Ym1hcmluZSBpc1N1bms6XCIsIGNvbXB1dGVyU3VibWFyaW5lLmlzU3VuaygpKTsgLy8gZmFsc2Vcbi8vIGNvbnNvbGUubG9nKFwiQ29tcHV0ZXIgRGVzdHJveWVyIGlzU3VuazpcIiwgY29tcHV0ZXJEZXN0cm95ZXIuaXNTdW5rKCkpOyAvLyBmYWxzZSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgU2hpcCwgcGxheWVyU2hpcHMsIGNvbXB1dGVyU2hpcHMgfSBmcm9tICcuL3NoaXBzJztcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IGdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgfSk7XG5cbmNvbnNvbGUubG9nKFwiQ29tcHV0ZXIgQ2FycmllciBpc1N1bms/XCIsIGNvbXB1dGVyU2hpcHNbMF0ubGVuZ3RoKTsgLy8gZmFsc2VcbmNvbnNvbGUubG9nKFwiQ29tcHV0ZXIgQmF0dGxlc2hpcCBpc1N1bms/XCIsIGNvbXB1dGVyU2hpcHNbMV0uaXNTdW5rKTsgLy8gZmFsc2VcbmNvbnNvbGUubG9nKFwiQ29tcHV0ZXIgQ3J1aXNlciBpc1N1bms/XCIsIGNvbXB1dGVyU2hpcHNbMl0uaXNTdW5rKTsgLy8gZmFsc2VcbmNvbnNvbGUubG9nKFwiQ29tcHV0ZXIgU3VibWFyaW5lIGlzU3Vuaz9cIiwgY29tcHV0ZXJTaGlwc1szXS5pc1N1bmspOyAvLyBmYWxzZVxuY29uc29sZS5sb2coXCJDb21wdXRlciBEZXN0cm95ZXIgaXNTdW5rP1wiLCBjb21wdXRlclNoaXBzWzRdLmlzU3Vuayk7IC8vIGZhbHNlIl0sIm5hbWVzIjpbIkdhbWVib2FyZCIsIl9jbGFzc0NhbGxDaGVjayIsImdyaWRTaXplIiwibWlzc2VkQXR0YWNrcyIsImNyZWF0ZUdhbWVib2FyZEdyaWQiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImdhbWVCb2FyZEVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaSIsImdhbWVib2FyZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpZCIsImNvbmNhdCIsInJvdyIsImNvbCIsImNlbGwiLCJkYXRhc2V0IiwiY29vcmRpbmF0ZXMiLCJnYW1lYm9hcmRJbmRleCIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidGFyZ2V0IiwiY29udGFpbnMiLCJjb25zb2xlIiwibG9nIiwicGxhY2VTaGlwIiwic2hpcCIsInJlY2VpdmVBdHRhY2siLCJhbGxTaGlwc1N1bmsiLCJTaGlwIiwibGVuZ3RoIiwiaGl0cyIsImlzU3VuayIsImhpdCIsInBsYXllckNhcnJpZXIiLCJwbGF5ZXJCYXR0bGVzaGlwIiwicGxheWVyQ3J1aXNlciIsInBsYXllclN1Ym1hcmluZSIsInBsYXllckRlc3Ryb3llciIsImNvbXB1dGVyQ2FycmllciIsImNvbXB1dGVyQmF0dGxlc2hpcCIsImNvbXB1dGVyQ3J1aXNlciIsImNvbXB1dGVyU3VibWFyaW5lIiwiY29tcHV0ZXJEZXN0cm95ZXIiLCJwbGF5ZXJTaGlwcyIsImNvbXB1dGVyU2hpcHMiXSwic291cmNlUm9vdCI6IiJ9