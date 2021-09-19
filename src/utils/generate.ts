import faker from "faker";
import Address from "../models/Address";
import Floor from "../models/Floor";
import ParkingLot from "../models/ParkingLot";
import ParkingSpot from "../models/ParkingSpot";

function buildFloor(number: number, spotCount: number) {
  const floor = new Floor(number, spotCount);

  const spots = [];
  for (let i = 1; i <= spotCount; i++) {
    const s = new ParkingSpot(floor, i);
    spots.push(s);
  }

  floor.spots = spots;
  return floor;
}

function buildAddress() {
  const address = new Address();
  address.city = faker.address.city();
  address.state = faker.address.state();
  address.country = faker.address.country();

  return address;
}

function buildParkingLot(floorCount: number, spotCount: number): ParkingLot {
  const address = buildAddress();
  const parkingLot = new ParkingLot(address, []);

  for (let i = 0; i < floorCount; i++) {
    const floor = buildFloor(i, spotCount);
    parkingLot.addFloor(floor);
  }

  return parkingLot;
}

export { buildParkingLot };
