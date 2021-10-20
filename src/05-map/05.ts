import {BuildingsType, HousesType} from '../02-objects/02-02';

export const getStreetTitlesOfGovernmentBuildings = (buildings: Array<BuildingsType>) => {
return buildings.map(b => b.address.street.title);
}

export const getStreetsTitlesOfHouses = (houses: Array<HousesType>) => {
  return houses.map(h => h.address.street.title);
}

export const getGreetingsForStreet = (houses: Array<HousesType>) => {
  return houses.map(h => `Hello ${h.address.street.title} citizen!`);
}