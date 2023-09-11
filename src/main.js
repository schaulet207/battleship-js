import { Ship, playerShips, computerShips } from './ships';
import Gameboard from './gameboard';

document.addEventListener('DOMContentLoaded', () => {
    const gameboard = new Gameboard();
  });

console.log("Computer Carrier isSunk?", computerShips[0].length); // false
console.log("Computer Battleship isSunk?", computerShips[1].isSunk); // false
console.log("Computer Cruiser isSunk?", computerShips[2].isSunk); // false
console.log("Computer Submarine isSunk?", computerShips[3].isSunk); // false
console.log("Computer Destroyer isSunk?", computerShips[4].isSunk); // false