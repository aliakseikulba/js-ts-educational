import {CityType} from "../02-objects/02-02";
import {addMoneyToBudget, repairHouse, toFireStaff, toHireStaff} from "./03";


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

test('add budget for HOSPITAL', () => {
  addMoneyToBudget(city.governmentBuildings[0], 100000)

  expect(city.governmentBuildings[0].budget).toBe(300000);
})

test('add budget for FIRE_STATION', () => {
  addMoneyToBudget(city.governmentBuildings[1], 100000)

  expect(city.governmentBuildings[1].budget).toBe(600000);
})

test('Houses should be repaired', () => {
  repairHouse(city.houses[1]);

  expect(city.houses[1].repaired).toBeTruthy();
})

test('Staff should be decreased', () => {
  toFireStaff(city.governmentBuildings[0], 20);

  expect(city.governmentBuildings[0].staffCount).toBe(180)
})

test('Staff should be increased', () => {
  toHireStaff(city.governmentBuildings[0], 20);

  expect(city.governmentBuildings[0].staffCount).toBe(220)
})