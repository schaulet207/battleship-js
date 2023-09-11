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

        // Create a 10x10 grid
        for (var row = 0; row < this.gridSize; row++) {
          for (var col = 0; col < this.gridSize; col++) {
            var cell = document.createElement('button');
            cell.classList.add('cell');
            cell.dataset.coordinates = "".concat(row, "-").concat(col);
            gameboard.appendChild(cell);
          }
        }
        gameBoardElement.appendChild(gameboard);
      }

      // Add event listener to handle cell clicks
      gameBoardElement.addEventListener('click', function (event) {
        if (event.target.classList.contains('cell')) {
          var coordinates = event.target.dataset.coordinates;
          console.log("Clicked cell coordinates: ".concat(coordinates));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRXFCLGlEQUFhLENBQUMsQ0FBQyxDQUFDLENBQUNiLE1BQU0sQ0FBQyxDQUFDLENBQUMsUSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnYW1lYm9hcmQuanNcblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIC8vIEluaXRpYWxpemUgZ2FtZWJvYXJkIHN0YXRlXG4gICAgICB0aGlzLmdyaWRTaXplID0gMTA7XG4gICAgICB0aGlzLm1pc3NlZEF0dGFja3MgPSBbXTtcbiAgICAgIHRoaXMuY3JlYXRlR2FtZWJvYXJkR3JpZCgpOyAvLyBBdXRvbWF0aWNhbGx5IGluc2VydCBnYW1lYm9hcmRzIG9uIHBhZ2UgbG9hZFxuICAgIH1cbiAgXG4gICAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgdGhlIGdhbWVib2FyZCBncmlkIHRvIHRoZSBET01cbiAgICBjcmVhdGVHYW1lYm9hcmRHcmlkKCkge1xuICAgICAgLy8gR2V0IHRoZSBET00gZWxlbWVudCB3aXRoIHRoZSBpZCBcImdhbWUtYm9hcmRcIlxuICAgICAgY29uc3QgZ2FtZUJvYXJkRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLWJvYXJkJyk7XG4gIFxuICAgICAgLy8gQ3JlYXRlIHR3byBnYW1lYm9hcmRzIHNpZGUgYnkgc2lkZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgY29uc3QgZ2FtZWJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGdhbWVib2FyZC5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmQnKTtcbiAgXG4gICAgICAgIC8vIENyZWF0ZSBhIDEweDEwIGdyaWRcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5ncmlkU2l6ZTsgcm93KyspIHtcbiAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCB0aGlzLmdyaWRTaXplOyBjb2wrKykge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgICAgICBjZWxsLmRhdGFzZXQuY29vcmRpbmF0ZXMgPSBgJHtyb3d9LSR7Y29sfWA7XG4gICAgICAgICAgICBnYW1lYm9hcmQuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gIFxuICAgICAgICBnYW1lQm9hcmRFbGVtZW50LmFwcGVuZENoaWxkKGdhbWVib2FyZCk7XG4gICAgICB9XG4gIFxuICAgICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIGhhbmRsZSBjZWxsIGNsaWNrc1xuICAgICAgZ2FtZUJvYXJkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2VsbCcpKSB7XG4gICAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBldmVudC50YXJnZXQuZGF0YXNldC5jb29yZGluYXRlcztcbiAgICAgICAgICBjb25zb2xlLmxvZyhgQ2xpY2tlZCBjZWxsIGNvb3JkaW5hdGVzOiAke2Nvb3JkaW5hdGVzfWApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIFxuICAgIC8vIFBsYWNlIGEgc2hpcCBvbiB0aGUgZ2FtZWJvYXJkIGF0IHNwZWNpZmllZCBjb29yZGluYXRlc1xuICAgIHBsYWNlU2hpcChzaGlwLCBjb29yZGluYXRlcykge1xuICAgICAgLy8gTG9naWMgdG8gcGxhY2UgdGhlIHNoaXAgYXQgdGhlIHNwZWNpZmllZCBjb29yZGluYXRlc1xuICAgICAgLy8gWW91IGNhbiBhZGQgc2hpcCBwbGFjZW1lbnQgbG9naWMgaGVyZVxuICAgIH1cbiAgXG4gICAgLy8gUmVjZWl2ZSBhbiBhdHRhY2sgYW5kIGRldGVybWluZSBoaXQgb3IgbWlzc1xuICAgIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpIHtcbiAgICAgIC8vIExvZ2ljIHRvIGRldGVybWluZSBpZiB0aGUgYXR0YWNrIGhpdCBhIHNoaXAgb3IgbWlzc2VkXG4gICAgICAvLyBJZiBoaXQsIHNlbmQgdGhlICdoaXQnIGZ1bmN0aW9uIHRvIHRoZSBjb3JyZWN0IHNoaXBcbiAgICAgIC8vIElmIG1pc3NlZCwgcmVjb3JkIHRoZSBtaXNzZWQgYXR0YWNrIGNvb3JkaW5hdGVzXG4gICAgfVxuICBcbiAgICAvLyBDaGVjayBpZiBhbGwgc2hpcHMgb24gdGhlIGdhbWVib2FyZCBoYXZlIGJlZW4gc3Vua1xuICAgIGFsbFNoaXBzU3VuaygpIHtcbiAgICAgIC8vIExvZ2ljIHRvIGNoZWNrIGlmIGFsbCBzaGlwcyBvbiB0aGUgZ2FtZWJvYXJkIGhhdmUgYmVlbiBzdW5rXG4gICAgICAvLyBZb3UgY2FuIGl0ZXJhdGUgdGhyb3VnaCB0aGUgc2hpcHMgYXJyYXkgYW5kIGNoZWNrIHRoZWlyIHN0YXR1c1xuICAgIH1cbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuICAiLCIvLyBzaGlwLmpzXG5cbmNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICB0aGlzLmhpdHMgPSAwO1xuICAgICAgdGhpcy5pc1N1bmsgPSBmYWxzZTtcbiAgICB9XG4gIFxuICAgIGhpdCgpIHtcbiAgICAgIGlmICghdGhpcy5pc1N1bmspIHtcbiAgICAgICAgdGhpcy5oaXRzKys7XG4gICAgICAgIGlmICh0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5pc1N1bmsgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuLy8gQ3JlYXRlIHBsYXllcnMgc2hpcHNcbmNvbnN0IHBsYXllckNhcnJpZXIgPSBuZXcgU2hpcCg1KTtcbmNvbnN0IHBsYXllckJhdHRsZXNoaXAgPSBuZXcgU2hpcCg0KTtcbmNvbnN0IHBsYXllckNydWlzZXIgPSBuZXcgU2hpcCgzKTtcbmNvbnN0IHBsYXllclN1Ym1hcmluZSA9IG5ldyBTaGlwKDMpO1xuY29uc3QgcGxheWVyRGVzdHJveWVyID0gbmV3IFNoaXAoMik7XG5cbi8vIENyZWF0ZSBjb21wdXRlcnMgc2hpcHNcbmNvbnN0IGNvbXB1dGVyQ2FycmllciA9IG5ldyBTaGlwKDUpO1xuY29uc3QgY29tcHV0ZXJCYXR0bGVzaGlwID0gbmV3IFNoaXAoNCk7XG5jb25zdCBjb21wdXRlckNydWlzZXIgPSBuZXcgU2hpcCgzKTtcbmNvbnN0IGNvbXB1dGVyU3VibWFyaW5lID0gbmV3IFNoaXAoMyk7XG5jb25zdCBjb21wdXRlckRlc3Ryb3llciA9IG5ldyBTaGlwKDIpO1xuXG4vLyBBbm90aGVyIHdheSBvZiBjcmVhdGluZyB0aGUgY29tcHV0ZXJTaGlwcyBhcnJheVxuLy8gY29uc3QgY29tcHV0ZXJTaGlwcyA9IHtcbi8vICAgICBjb21wdXRlckNhcnJpZXI6IG5ldyBTaGlwKDUpLFxuLy8gICAgIGNvbXB1dGVyQmF0dGxlc2hpcDogbmV3IFNoaXAoNCksXG4vLyAgICAgY29tcHV0ZXJDcnVpc2VyOiBuZXcgU2hpcCgzKSxcbi8vICAgICBjb21wdXRlclN1Ym1hcmluZTogbmV3IFNoaXAoMyksXG4vLyAgICAgY29tcHV0ZXJEZXN0cm95ZXI6IG5ldyBTaGlwKDIpLFxuLy8gICB9O1xuXG4vLyAvLyBDcmVhdGUgYXJyYXlzIGZvciBib3RoIHNldHMgb2Ygc2hpcHNcbmNvbnN0IHBsYXllclNoaXBzID0gW3BsYXllckNhcnJpZXIsIHBsYXllckJhdHRsZXNoaXAsIHBsYXllckNydWlzZXIsIHBsYXllclN1Ym1hcmluZSwgcGxheWVyRGVzdHJveWVyXTtcbmNvbnN0IGNvbXB1dGVyU2hpcHMgPSBbY29tcHV0ZXJDYXJyaWVyLCBjb21wdXRlckJhdHRsZXNoaXAsIGNvbXB1dGVyQ3J1aXNlciwgY29tcHV0ZXJTdWJtYXJpbmUsIGNvbXB1dGVyRGVzdHJveWVyXTtcblxuZXhwb3J0IHsgU2hpcCwgcGxheWVyU2hpcHMsIGNvbXB1dGVyU2hpcHMgfTtcblxuLy8gRXhhbXBsZSB1c2FnZTpcbi8vICAgY29uc3QgbXlTaGlwID0gbmV3IFNoaXAoMyk7IC8vIENyZWF0ZSBhIHNoaXAgd2l0aCBhIGxlbmd0aCBvZiAzXG4vLyAgIG15U2hpcC5oaXQoKTsgLy8gTWFyayB0aGUgc2hpcCBhcyBoaXQgb25jZVxuLy8gICBteVNoaXAuaGl0KCk7IC8vIE1hcmsgdGhlIHNoaXAgYXMgaGl0IGFnYWluXG4vLyAgIGNvbnNvbGUubG9nKG15U2hpcC5pc1N1bmsoKSk7IC8vIENoZWNrIGlmIHRoZSBzaGlwIGlzIHN1bmsgKGZhbHNlKVxuLy8gICBteVNoaXAuaGl0KCk7IC8vIE1hcmsgdGhlIHNoaXAgYXMgaGl0IHRoZSB0aGlyZCB0aW1lXG4vLyAgIGNvbnNvbGUubG9nKG15U2hpcC5pc1N1bmsoKSk7IC8vIENoZWNrIGlmIHRoZSBzaGlwIGlzIHN1bmsgKHRydWUpXG5cbi8vIEV4YW1wbGUgdXNhZ2U6XG4vLyBjb25zb2xlLmxvZyhcIkNhcnJpZXIgaXNTdW5rOlwiLCBjYXJyaWVyLmlzU3VuaygpKTsgLy8gZmFsc2Vcbi8vIGNvbnNvbGUubG9nKFwiQmF0dGxlc2hpcCBpc1N1bms6XCIsIGJhdHRsZXNoaXAuaXNTdW5rKCkpOyAvLyBmYWxzZVxuLy8gY29uc29sZS5sb2coXCJDcnVpc2VyIGlzU3VuazpcIiwgY3J1aXNlci5pc1N1bmsoKSk7IC8vIGZhbHNlXG4vLyBjb25zb2xlLmxvZyhcIlN1Ym1hcmluZSBpc1N1bms6XCIsIHN1Ym1hcmluZS5pc1N1bmsoKSk7IC8vIGZhbHNlXG4vLyBjb25zb2xlLmxvZyhcIkRlc3Ryb3llciBpc1N1bms6XCIsIGRlc3Ryb3llci5pc1N1bmsoKSk7IC8vIGZhbHNlXG4vLyBjb25zb2xlLmxvZyhcIkNvbXB1dGVyIENhcnJpZXIgaXNTdW5rOlwiLCBjb21wdXRlckNhcnJpZXIuaXNTdW5rKCkpOyAvLyBmYWxzZVxuLy8gY29uc29sZS5sb2coXCJDb21wdXRlciBCYXR0bGVzaGlwIGlzU3VuazpcIiwgY29tcHV0ZXJCYXR0bGVzaGlwLmlzU3VuaygpKTsgLy8gZmFsc2Vcbi8vIGNvbnNvbGUubG9nKFwiQ29tcHV0ZXIgQ3J1aXNlciBpc1N1bms6XCIsIGNvbXB1dGVyQ3J1aXNlci5pc1N1bmsoKSk7IC8vIGZhbHNlXG4vLyBjb25zb2xlLmxvZyhcIkNvbXB1dGVyIFN1Ym1hcmluZSBpc1N1bms6XCIsIGNvbXB1dGVyU3VibWFyaW5lLmlzU3VuaygpKTsgLy8gZmFsc2Vcbi8vIGNvbnNvbGUubG9nKFwiQ29tcHV0ZXIgRGVzdHJveWVyIGlzU3VuazpcIiwgY29tcHV0ZXJEZXN0cm95ZXIuaXNTdW5rKCkpOyAvLyBmYWxzZSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgU2hpcCwgcGxheWVyU2hpcHMsIGNvbXB1dGVyU2hpcHMgfSBmcm9tICcuL3NoaXBzJztcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IGdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgfSk7XG5cbmNvbnNvbGUubG9nKFwiQ29tcHV0ZXIgQ2FycmllciBpc1N1bms/XCIsIGNvbXB1dGVyU2hpcHNbMF0ubGVuZ3RoKTsgLy8gZmFsc2VcbmNvbnNvbGUubG9nKFwiQ29tcHV0ZXIgQmF0dGxlc2hpcCBpc1N1bms/XCIsIGNvbXB1dGVyU2hpcHNbMV0uaXNTdW5rKTsgLy8gZmFsc2VcbmNvbnNvbGUubG9nKFwiQ29tcHV0ZXIgQ3J1aXNlciBpc1N1bms/XCIsIGNvbXB1dGVyU2hpcHNbMl0uaXNTdW5rKTsgLy8gZmFsc2VcbmNvbnNvbGUubG9nKFwiQ29tcHV0ZXIgU3VibWFyaW5lIGlzU3Vuaz9cIiwgY29tcHV0ZXJTaGlwc1szXS5pc1N1bmspOyAvLyBmYWxzZVxuY29uc29sZS5sb2coXCJDb21wdXRlciBEZXN0cm95ZXIgaXNTdW5rP1wiLCBjb21wdXRlclNoaXBzWzRdLmlzU3Vuayk7IC8vIGZhbHNlIl0sIm5hbWVzIjpbIkdhbWVib2FyZCIsIl9jbGFzc0NhbGxDaGVjayIsImdyaWRTaXplIiwibWlzc2VkQXR0YWNrcyIsImNyZWF0ZUdhbWVib2FyZEdyaWQiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImdhbWVCb2FyZEVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaSIsImdhbWVib2FyZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyb3ciLCJjb2wiLCJjZWxsIiwiZGF0YXNldCIsImNvb3JkaW5hdGVzIiwiY29uY2F0IiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJjb250YWlucyIsImNvbnNvbGUiLCJsb2ciLCJwbGFjZVNoaXAiLCJzaGlwIiwicmVjZWl2ZUF0dGFjayIsImFsbFNoaXBzU3VuayIsIlNoaXAiLCJsZW5ndGgiLCJoaXRzIiwiaXNTdW5rIiwiaGl0IiwicGxheWVyQ2FycmllciIsInBsYXllckJhdHRsZXNoaXAiLCJwbGF5ZXJDcnVpc2VyIiwicGxheWVyU3VibWFyaW5lIiwicGxheWVyRGVzdHJveWVyIiwiY29tcHV0ZXJDYXJyaWVyIiwiY29tcHV0ZXJCYXR0bGVzaGlwIiwiY29tcHV0ZXJDcnVpc2VyIiwiY29tcHV0ZXJTdWJtYXJpbmUiLCJjb21wdXRlckRlc3Ryb3llciIsInBsYXllclNoaXBzIiwiY29tcHV0ZXJTaGlwcyJdLCJzb3VyY2VSb290IjoiIn0=