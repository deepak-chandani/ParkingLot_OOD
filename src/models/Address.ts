class Address {
  geolocation: GeoLocation;
  city: string;
  state: string;
  country: string;
}

export default Address;

type GeoLocation = {
  latitude: number;
  longitude: number;
};
