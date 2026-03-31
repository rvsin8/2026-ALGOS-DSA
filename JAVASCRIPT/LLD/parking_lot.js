/**
 * Design a Parking Lot System
 *
 * Requirements:
 * - The parking lot should have multiple levels, each level with a certain number of parking spots.
 * - The parking lot should support different types of vehicles, such as cars, motorcycles, and trucks.
 * - Each parking spot should be able to accommodate a specific type of vehicle.
 * - The system should assign a parking spot to a vehicle upon entry and release it when the vehicle exits.
 * - The system should track the availability of parking spots and provide real-time information to customers.
 * - The system should handle multiple entry and exit points and support concurrent access.
 *
 * Expected Design:
 * - ParkingLot class should follow the Singleton pattern so only one parking lot instance exists.
 * - ParkingFloor class should represent one level of the parking lot and contain parking spots.
 * - ParkingSpot class should represent an individual spot and track whether it is occupied.
 * - Vehicle should be an abstract/base class extended by Car, Motorcycle, and Truck.
 * - VehicleSize enum (or equivalent constant object) should define supported vehicle sizes/types.
 *
 * Optional Extensions:
 * - Factory Pattern for creating vehicles
 * - Observer Pattern for notifying users about spot availability
 *
 * Goal:
 * Implement the system in JavaScript with clean object-oriented design,
 * keeping Low-Level Design interview expectations in mind.
 * 
 * Entities
 *  > ParkingLot - class
 *    - parkVehicle(vehicle)
 *    - unparkVehicle(licensePlate)
 *    - getAvailability()
 *  > ParkingSpot - class
 *    - canFitVehicle(vehicle)
 *    - park(vehicle)
 *    - unpark()
 *    - isAvailable()
 *  > ParkingLevel - class
 *    - parkVehicle(vehicle)
 *    - unparkVehicle(licensePlate)
 *    - getAvailableSpots()
 *  > Vehicle - class
 *  
 * Relationships
    > ParkingLot has many ParkingLevels
    > ParkingLevel has many ParkingSpots
    > ParkingSpot holds one Vehicle (or null)
    > Vehicle has subtypes: Car, Truck, Motorcycle
 */

const VehicleSize = {
  MOTORCYCLE: 1,
  CAR: 2,
  TRUCK: 3
};

class Vehicle {
  constructor(licensePlate, size) {
    this.licensePlate = licensePlate;
    this.size = size;
  }
};

class Car extends Vehicle {
  constructor(plate) {
    super(plate, VehicleSize.CAR)
  }
};

class Truck extends Vehicle {
  constructor(plate) {
    super(plate, VehicleSize.TRUCK)
  }
};

class Motorcycle extends Vehicle {
  constructor(plate) {
    super(plate, VehicleSize.MOTORCYCLE)
  }
};

class ParkingSpot {
  constructor(id, size) {
    this.id = id;
    this.size = size;
    this.vehicle = null;
  }

  canFitVehicle(vehicle) {
    return this.vehicle === null && vehicle.size <= this.size
  }

  park(vehicle) {
    if (this.canFitVehicle(vehicle)) {
      this.vehicle = vehicle;
      return true;
    }
    return false;
  }

  unpark() {
    this.vehicle = null;
  }

  isAvailable() {
    return this.vehicle === null;
  }

  getAvailableSpots() {
    return this.spots.filter(s => s.isAvailable()).length;
  }
};

class ParkingLevel { //review
  constructor(id, spots) {
    this.id = id;
    this.spots = spots;
  }

  parkVehicle(vehicle) { //review
    for (let spot of this.spots) {
      if (spot.park(vehicle)) return spot;
    }
    return null;
  }

  unparkVehicle(licensePlate) {
      for (let spot of this.spots) {
        if (spot.vehicle?.licensePlate === licensePlate) {
          spot.unpark();
          return true;
        }
      }
    return false;
  }

  getAvailableSpots() {
    return this.spots.filter(s => s.isAvailable()).length;
  }
};


class ParkingLot {
  constructor() {
    if (ParkingLot.instance) return ParkingLot.instance;
    this.levels = [];
    ParkingLot.instance = this;
  }

  addLevel(level) {
    this.levels.push(level);
  }

  parkVehicle(vehicle) {
    for (let level of this.levels) {
      const spot = level.parkVehicle(vehicle);
      if (spot) {
        console.log(`Parked at Level ${level.id}, Spot ${spot.id}`);
        return spot;
      }
    }
    console.log("No spot available");
    return null;
  }

  unparkVehicle(licensePlate) {
    for (let level of this.levels) {
      if (level.unparkVehicle(licensePlate)) {
        console.log("Unparked");
        return true
      }
    }
    console.log("Vehicle not found");
    return false;
  }

  getAvailability() {
    return this.levels.map(level => ({
      levelId: level.id,
      available: level.getAvailableSpots(),
    }))
  }
};

const lot = new ParkingLot();

const level1 = new ParkingLevel(1, [
  new ParkingSpot(1, VehicleSize.MOTORCYCLE),
  new ParkingSpot(2, VehicleSize.CAR),
  new ParkingSpot(3, VehicleSize.TRUCK),
]);

const level2 = new ParkingLevel(2, [
  new ParkingSpot(4, VehicleSize.CAR),
  new ParkingSpot(5, VehicleSize.TRUCK),
]);

lot.addLevel(level1);
lot.addLevel(level2);

const car = new Car("ABC123");
const bike = new Motorcycle("BIKE1");

lot.parkVehicle(car);
lot.parkVehicle(bike);

console.log(lot.getAvailability());

lot.unparkVehicle("ABC123");