import {StudentType} from "../02-objects/02";
import {addSkill, doesStudentLiveInCity, makeStudentActive} from "./03";

let student: StudentType;
beforeEach(() => {
  student = {
    id: 11,
    name: 'Alexey',
    age: 26,
    isActive: false,
    address: {
      streetTitle: 'SomeStreet',
      city: {
        cityTitle:'Minsk',
        countryTitle: 'Belarus'
      }
    },
    technologies: [
      {
        id: 1,
        title: 'CSS'
      },
      {
        id: 2,
        title: 'JS'
      },
      {
        id: 3,
        title: 'REACT'
      },
    ]
  }
})

test('new skill should be added to student', () => {

  expect(student.technologies.length).toBe(3);

  addSkill(student, 'TS');

  expect(student.technologies.length).toBe(4);
  expect(student.technologies[3].title).toBe('TS');
  expect(student.technologies[3].id).toBeDefined();

})

test('student should be active', () => {

  expect(student.isActive).toBe(false);

  makeStudentActive(student);

  expect(student.isActive).toBe(true);

})

test('does student live ib city', () => {

  let result1 = doesStudentLiveInCity(student, "Moscow");
  let result2 = doesStudentLiveInCity(student, "Minsk");

  expect(result1).toBe(false);
  expect(result2).toBe(true);
})