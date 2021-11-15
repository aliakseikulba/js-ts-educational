export type UserType = {
  name: string
  hair: number
  address: {
    title: string
  }
}

export type LaptopType = {
  title: string
}

export type UserWithLaptopType = UserType & {
  laptop: LaptopType
}

export function makeHaircut(u: UserType, volume: number) {
  const copy = {
    ...u,
    hair: u.hair / volume
  };
  return copy;
}