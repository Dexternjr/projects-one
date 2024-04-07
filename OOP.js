// Define a class named 'Car'
class Car {
  // Constructor method to initialize properties
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.speed = 0; // Default speed is 0
  }

  // Method to accelerate the car
  accelerate(speedIncrease) {
    this.speed += speedIncrease;
    console.log(`The ${this.year} ${this.make} ${this.model} is now going ${this.speed} mph.`);
  }

  // Method to brake the car
  brake(speedDecrease) {
    this.speed -= speedDecrease;
    if (this.speed < 0) {
      this.speed = 0; // Ensure speed doesn't go below 0
    }
    console.log(`The ${this.year} ${this.make} ${this.model} slowed down to ${this.speed} mph.`);
  }

  // Method to display car information
  displayInfo() {
    console.log(`Year: ${this.year}, Make: ${this.make}, Model: ${this.model}, Speed: ${this.speed} mph`);
  }
}

// Create instances of the Car class
const myCar = new Car('Toyota', 'Camry', 2020);
const anotherCar = new Car('Honda', 'Accord', 2018);

// Test the methods
myCar.accelerate(50);
myCar.brake(20);
myCar.displayInfo();

anotherCar.accelerate(30);
anotherCar.brake(10);
anotherCar.displayInfo();
