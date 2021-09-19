import ParkingSpot from "./ParkingSpot";

class Floor {
  id: string;
  number: number;
  totalSpots: number;
  spots: ParkingSpot[] = [];

  constructor(number: number, totalSpots: number) {
    this.number = number;
    this.totalSpots = totalSpots;
  }

  getAvailableSpotsCount(): number {
    return this.spots.reduce((acc, s) => {
      if (s.isFree()) {
        acc++;
      }
      return acc;
    }, 0);
  }
}

export default Floor;
