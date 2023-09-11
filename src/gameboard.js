// gameboard.js

class Gameboard {
    constructor() {
      // Initialize gameboard state
      this.gridSize = 10;
      this.missedAttacks = [];
      this.createGameboardGrid(); // Automatically insert gameboards on page load
    }
  
    // Create and append the gameboard grid to the DOM
    createGameboardGrid() {
      // Get the DOM element with the id "game-board"
      const gameBoardElement = document.getElementById('game-board');
  
      // Create two gameboards side by side
      for (let i = 0; i < 2; i++) {
        const gameboard = document.createElement('div');
        gameboard.classList.add('gameboard');
  
        // Create a 10x10 grid
        for (let row = 0; row < this.gridSize; row++) {
          for (let col = 0; col < this.gridSize; col++) {
            const cell = document.createElement('button');
            cell.classList.add('cell');
            cell.dataset.coordinates = `${row}-${col}`;
            gameboard.appendChild(cell);
          }
        }
  
        gameBoardElement.appendChild(gameboard);
      }
  
      // Add event listener to handle cell clicks
      gameBoardElement.addEventListener('click', (event) => {
        if (event.target.classList.contains('cell')) {
          const coordinates = event.target.dataset.coordinates;
          console.log(`Clicked cell coordinates: ${coordinates}`);
        }
      });
    }
  
    // Place a ship on the gameboard at specified coordinates
    placeShip(ship, coordinates) {
      // Logic to place the ship at the specified coordinates
      // You can add ship placement logic here
    }
  
    // Receive an attack and determine hit or miss
    receiveAttack(coordinates) {
      // Logic to determine if the attack hit a ship or missed
      // If hit, send the 'hit' function to the correct ship
      // If missed, record the missed attack coordinates
    }
  
    // Check if all ships on the gameboard have been sunk
    allShipsSunk() {
      // Logic to check if all ships on the gameboard have been sunk
      // You can iterate through the ships array and check their status
    }
  }
  
  export default Gameboard;
  