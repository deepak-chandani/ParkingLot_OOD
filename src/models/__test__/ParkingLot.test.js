import { buildParkingLot } from "../../utils/generate";
import { HOURLY_RATE } from "../Ticket";
import Vehicle from "../Vehicle";

test("builds parkingLot with floor & spots", () => {
  const floorCount = 2;
  const spotsCount = 15;
  const parkingLot = buildParkingLot(floorCount, spotsCount);

  expect(parkingLot.floors).toHaveLength(floorCount);
  expect(parkingLot.floors[0].spots).toHaveLength(spotsCount);
});

describe("ParkingLost test", () => {
  it("should update availability properly", () => {
    const parkingLot = buildParkingLot(2, 15);

    const myBike = new Vehicle("RJ14 1234");

    const ticket = parkingLot.issueTicketForVehicle(myBike);
    expect(ticket.vehicle).toEqual(myBike);

    const floorNumber = 0;
    const spot = findFreeSpotOnFloor(parkingLot, floorNumber);
    parkingLot.onSpotOccupied(spot, myBike);

    let messages = parkingLot.displayAvailability();
    expect(messages[floorNumber]).toEqual(
      "Floor 0 has 14 spots available, out of 15"
    );

    parkingLot.onSpotFreed(spot);

    messages = parkingLot.displayAvailability();
    expect(messages[floorNumber]).toEqual(
      "Floor 0 has 15 spots available, out of 15"
    );
  });

  it("should calculate charges accurately", () => {
    const parkingLot = buildParkingLot(2, 15);
    const myDucati = new Vehicle("RJ14 1234");
    const ticket = parkingLot.issueTicketForVehicle(myDucati);

    // exiting 2 hours later
    const hoursLater = 2;
    const exitDateTime = new Date(
      ticket.entryDateTime.getTime() + hoursLater * 60 * 60 * 1000
    );
    const charges = parkingLot.exitVehicle(ticket, exitDateTime);
    expect(charges).toEqual(HOURLY_RATE * hoursLater);

    expect(ticket.charges).toEqual(charges);
  });
});

// helper fn
function findFreeSpotOnFloor(parkingLot, n) {
  for (let spot of parkingLot.floors[n].spots) {
    if (spot.isFree()) {
      return spot;
    }
  }

  throw new Error(`Could not find free spot on floor ${n}`);
}
