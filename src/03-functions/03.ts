import {StudentType} from "../02-objects/02";
import {BuildingsType, CityType, HousesType} from "../02-objects/02-02";

export const sum = (a: number,b: number) => {
  return a + b;
}

export function addSkill(st: StudentType, skill: string) {
  st.technologies.push({
    id: new Date().getTime(),
    title: skill
  })
}

export function makeStudentActive(s: StudentType) {
  s.isActive = true;
}

export const doesStudentLiveInCity = (stud: StudentType, city: string ) => {
  return stud.address.city.cityTitle === city;
}

export const addMoneyToBudget = (building: BuildingsType, budget: number) => {
  building.budget += budget;
}

export const repairHouse = (house: HousesType) => {
  house.repaired = true;
}

export const toFireStaff = (building: BuildingsType, StaffCountToFire: number) => {
  building.staffCount -= StaffCountToFire;
}

export function toHireStaff(building: BuildingsType, StaffCountToHire: number) {
  building.staffCount += StaffCountToHire;
}