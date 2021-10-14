export type StudentType = {
  id: number
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

export const student: StudentType = {
  id:11,
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

