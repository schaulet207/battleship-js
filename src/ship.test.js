// ship.test.js

// Import the Ship class from the ship module (adjust the path as needed)
import { Ship } from './ships';

// Describe the test suite for the Ship class
describe('Ship Class', () => {
  let ship; // Declare a variable to hold the Ship instance

  // Before each test case, create a new Ship instance with a length of 3
  beforeEach(() => {
    ship = new Ship(3);
  });

  // Test case: Ship should be initialized with the correct length
  it('should be initialized with the correct length', () => {
    expect(ship.length).toBe(3);
  });

  // Test case: Ship should be initially not sunk
  it('should be initially not sunk', () => {
    expect(ship.isSunk).toBe(false);
  });

  // Test case: Ship should increase hits when hit() is called
  it('should increase hits when hit() is called', () => {
    ship.hit();
    expect(ship.hits).toBe(1);
  });

  // Test case: Ship should be sunk when hit() is called enough times
  it('should be sunk when hit() is called enough times', () => {
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk).toBe(true);
  });

  // Test case: Ship should not be sunk when hit() is called less than its length
  it('should not be sunk when hit() is called less than its length', () => {
    ship.hit();
    ship.hit();
    expect(ship.isSunk).toBe(false);
  });

  // Test case: Ship should not allow further hits when it is sunk
  it('should not allow further hits when it is sunk', () => {
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit(); // Attempting to hit when already sunk
    expect(ship.hits).toBe(3); // Hits should remain at 3
  });
});
