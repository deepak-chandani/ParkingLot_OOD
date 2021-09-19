import Vehicle from "./Vehicle";

export const HOURLY_RATE = 10;

class Ticket {
  entryDateTime: Date;
  vehicle: Vehicle;
  exitDateTime: Date;
  charges: number;

  constructor(v: Vehicle) {
    this.vehicle = v;
    this.entryDateTime = new Date();
  }

  calculateCharges() {
    // calc hours exitTime - entryTime
    const diffMs = (this.exitDateTime - this.entryDateTime) as number;
    const hours = Math.floor((diffMs % 86400000) / 3600000);
    this.charges = hours * HOURLY_RATE;
    return this.charges;
  }
}

export default Ticket;
