import Address from "./Address";
import Floor from "./Floor";
import ParkingSpot from "./ParkingSpot";
import Ticket from "./Ticket";
import Vehicle from "./Vehicle";

class ParkingLot {
  address: Address;
  floors: Floor[] = [];

  constructor(address: Address, floors: Floor[]) {
    this.address = address;
    this.floors = floors;
  }

  issueTicketForVehicle(v: Vehicle) {
    const ticket = new Ticket(v);
    return ticket;
  }

  // listeners
  onSpotOccupied(spot: ParkingSpot, vehicle: Vehicle) {
    spot.vehicle = vehicle;
    vehicle.parkedOnSpot(spot);
  }

  onSpotFreed(spot: ParkingSpot) {
    spot.vehicle?.vacateSpot();
    spot.vehicle = undefined;
  }

  exitVehicle(ticket: Ticket, exitDateTime = null) {
    ticket.exitDateTime = exitDateTime ?? new Date();

    const charges = ticket.calculateCharges();
    if (ticket.vehicle.spot) {
      this.onSpotFreed(ticket.vehicle.spot);
    }

    return charges;
  }

  displayAvailability(): string[] {
    const messages: string[] = [];

    this.floors.forEach((floor) => {
      const fid = floor.number;
      const freeCount = floor.getAvailableSpotsCount();

      const m = `Floor ${fid} has ${freeCount} spots available, out of ${floor.totalSpots}`;
      messages.push(m);
    });

    return messages;
  }

  addFloor(floor: Floor) {
    this.floors.push(floor);
  }
}

export default ParkingLot;
