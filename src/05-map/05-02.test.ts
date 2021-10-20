import {CityType} from "../02-objects/02-02";
import {getGreetingsForStreet, getStreetsTitlesOfHouses, getStreetTitlesOfGovernmentBuildings} from './05';

let city: CityType;

beforeEach(() => {
  city = {
    title: 'New York',
    houses: [
      {
        buildAt: 2012, repaired: false, address: {
          street: {
            title: 'White Street'
          }, number: 100
        }
      },
      {
        buildAt: 2008, repaired: false, address: {
          street: {
            title: 'Happy Street'
          }, number: 100
        }
      },
      {
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

test('list of streets titles of government buildings', () => {
  let streetsNames = getStreetTitlesOfGovernmentBuildings(city.governmentBuildings);

  expect(streetsNames.length).toBe(2);
  expect(streetsNames[0]).toBe('Central Str.');
  expect(streetsNames[1]).toBe('South Str.');
})

test('list of streets titles', () => {
  let streets = getStreetsTitlesOfHouses(city.houses);

  expect(streets.length).toBe(3);
  expect(streets[0]).toBe('White Street');
  expect(streets[1]).toBe('Happy Street');
  expect(streets[2]).toBe('Happy Street');
})

test('create greeting messages for streets', () => {
  let greetings = getGreetingsForStreet(city.houses);

  expect(greetings.length).toBe(3);
  expect(greetings[0]).toBe('Hello White Street citizen!');
  expect(greetings[1]).toBe('Hello Happy Street citizen!');
  expect(greetings[2]).toBe('Hello Happy Street citizen!');
})