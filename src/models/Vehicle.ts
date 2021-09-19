import ParkingSpot from "./ParkingSpot";

class Vehicle {
  private licensePlate: string;
  spot?: ParkingSpot;

  constructor(licensePlate: string) {
    this.licensePlate = licensePlate;
  }

  parkedOnSpot(spot: ParkingSpot) {
    this.spot = spot;
  }

  vacateSpot() {
    this.spot = undefined;
  }
}

export default Vehicle;
