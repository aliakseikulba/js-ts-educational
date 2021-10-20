import {CityType} from "../02-objects/02-02";
import {demolishHouseOnTheStreet, rightBuildings} from './04';

let city: CityType;

beforeEach(() => {
  city = {
    title: 'New York',
    houses: [
      {
        id: 1,
        buildAt: 2012, repaired: false, address: {
          street: {
            title: 'White Street'
          }, number: 100
        }
      },
      {
        id: 2,
        buildAt: 2008, repaired: false, address: {
          street: {
            title: 'Happy Street'
          }, number: 100
        }
      },
      {
        id: 3,
        buildAt: 2020, repaired: false, address: {
          street: {
            title: 'Happy Street'
          }, number: 101
        }
      }
    ],
    governmentBuildings: [
      {
        type: 'HOSPITAL', budget: 200000, staffCount: 200, address: {
          street: {
            title: 'Central Str.'
          }
        }
      },
      {
        type: 'FIRE-STATION', budget: 500000, staffCount: 1000, address: {
          street: {
            title: 'South Str.'
          }
        }
      }
    ],
    citizensNumber: 1000000
  }
})

test('skip houses should be destroyed', () => {
  demolishHouseOnTheStreet(city, 'Happy Street');

  expect(city.houses.length).toBe(1);
  expect(city.houses[0].id).toBe(1);
})

test('buildings with correct staff count', () => {
  let buildings = rightBuildings(
    city.governmentBuildings,
    500);

  expect(buildings.length).toBe(1);
  expect(buildings[0].type).toBe('FIRE-STATION')
})