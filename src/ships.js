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

export { Ship, playerShips, computerShips };

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