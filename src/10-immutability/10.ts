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

export type UserWithBooksType = UserType & {
  books: Array<string>
}

export function makeHaircut(u: UserType, volume: number) {
  const copy = {
    ...u,
    hair: u.hair / volume
  };
  return copy;
}

export function moveCity(obj: UserWithLaptopType, city: string) {
  const copy = {
    ...obj,
    address: {
      ...obj.address,
      title: city
    }
  }
  return copy;
}

export function upgradeLaptop(user:UserWithLaptopType, laptopName: string ) {
  const copy  = {
    ...user,
    laptop: {
      ...user.laptop,
      title: 'MacBook Pro'
    }
  }

  return copy;
}

export function readNewBook(user: UserWithLaptopType & UserWithBooksType, newBooks: Array<string>) {
  const copy = {
    ...user,
    books: [...user.books, ...newBooks]
  }

  return copy;
}

export const updateBook = (user: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) => {
  return {
    ...user,
    books: user.books.map(b => b === oldBook ? newBook : b)
  }
}