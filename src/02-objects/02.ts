type StudentType = {
  name: string
  age: number
  isActive: boolean
  address: AddressType
  technologies: Array<TechType>
}

type AddressType = {
  streetTitle: string
  city: LocalCityType
}

type LocalCityType = {
  cityTitle: string
  countryTitle: string
}

type TechType = {
  id: number
  title: string
}

const student: StudentType = {
  name: 'Alexey',
  age: 26,
  isActive: true,
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

console.log(student.name);
console.log(student.age);
console.log(student.isActive);
console.log(student.address.streetTitle);
console.log(student.address.city.cityTitle);
console.log(student.technologies[2].title);
