import Floor from "./Floor";
import Vehicle from "./Vehicle";

class ParkingSpot {
  floor: Floor;
  number: number; // spot number on floor, where vehicle can be parked
  vehicle?: Vehicle;

  constructor(floor: Floor, number: number) {
    this.floor = floor;
    this.number = number;
  }

  isFree(): boolean {
    return !Boolean(this.vehicle);
  }
}

export default ParkingSpot;
