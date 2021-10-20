export type StreetType = {
  title: string
}

export type AddressType = {
  street: StreetType
  number?: number
}

export type BuildingsType ={
  type: 'HOSPITAL' | 'FIRE-STATION'
  budget: number
  staffCount: number
  address: AddressType
}

export type HousesType = {
  id?: number
  buildAt: number
  repaired: boolean
  address: AddressType
}

export type CityType = {
  title: string
  houses: Array<HousesType>
  governmentBuildings: Array<BuildingsType>
  citizensNumber: number
}