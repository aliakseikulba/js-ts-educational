import {BuildingsType, CityType} from '../02-objects/02-02';

export const demolishHouseOnTheStreet = (city: CityType, street: 'Happy Street') => {
city.houses = city.houses.filter(h => h.address.street.title !== street );
}

export const rightBuildings = (buildings: Array<BuildingsType>, number: 500) => {
 return buildings.filter(b => b.staffCount > number);
}