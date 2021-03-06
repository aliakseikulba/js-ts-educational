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

type CompanyType = { id: number, title: string };

export type WithCompaniesType = {
  companies: Array<CompanyType>
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
  };
  return copy;
}

export function upgradeLaptop(user: UserWithLaptopType, laptopName: string) {
  const copy = {
    ...user,
    laptop: {
      ...user.laptop,
      title: 'MacBook Pro'
    }
  };

  return copy;
}

export function readNewBook(user: UserWithLaptopType & UserWithBooksType, newBooks: Array<string>) {
  const copy = {
    ...user,
    books: [...user.books, ...newBooks]
  };

  return copy;
}

export const updateBook = (user: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) => {
  return {
    ...user,
    books: user.books.map(b => b === oldBook ? newBook : b)
  };
};

export const removeBook = (user: UserWithLaptopType & UserWithBooksType, bookToDelete: string) => ({
  ...user,
  books: user.books.filter(b => b !== bookToDelete)
});

export const updateCompany = (user: UserWithLaptopType & WithCompaniesType, id: number, newTitle: string) => {
  return {
    ...user,
    companies: user.companies.map(c => c.id === id ? {...c, title: newTitle} : c)
  };
};

export const updateCompanyTitle2 = (companies: {[key: string]: Array<CompanyType>},
                                    username: string,
                                    companyID: number,
                                    newTitle: string) => {
  let companiesCopy = {...companies}
  companiesCopy[username] = companiesCopy[username].map(c => c.id === companyID ? {...c, title: newTitle} : c)

  return companiesCopy;
};