import {
  makeHaircut,
  moveCity,
  readNewBook, removeBook,
  updateBook, updateCompany,
  upgradeLaptop,
  UserType,
  UserWithBooksType,
  UserWithLaptopType, WithCompaniesType
} from './10';

test('reference type test', () => {
  let user: UserType = {
    name: 'Bob',
    hair: 100,
    address: {
      title: 'Minsk'
    }
  };

  const client = makeHaircut(user, 2);

  expect(user.hair).toBe(100);
  expect(client.hair).toBe(50);
  expect(client.address).toBe(user.address);

});

test('move city test', () => {
  let user: UserWithLaptopType = {
    name: 'Bob',
    hair: 100,
    address: {
      title: 'Minsk'
    },
    laptop: {
      title: 'MacBook'
    }
  };

  const movedUser = moveCity(user, 'Kiev');

  expect(user).not.toBe(movedUser);
  expect(user.address).not.toBe(movedUser.address);
  expect(user.laptop).toBe(movedUser.laptop);
  expect(movedUser.address.title).toBe('Kiev');

});


test('move upgrade laptop', () => {
  let user: UserWithLaptopType = {
    name: 'Bob',
    hair: 100,
    address: {
      title: 'Minsk'
    },
    laptop: {
      title: 'MacBook'
    }
  };

  const userWithNewLaptop = upgradeLaptop(user, 'MacBook Pro');

  expect(user).not.toBe(userWithNewLaptop);
  expect(user.laptop).not.toBe(userWithNewLaptop.laptop);
  expect(user.address).toBe(userWithNewLaptop.address);
  expect(userWithNewLaptop.laptop.title).toBe('MacBook Pro');
  expect(user.laptop.title).toBe('MacBook');

});

test('add new book to user', () => {
  let user: UserWithLaptopType & UserWithBooksType = {
    name: 'Bob',
    hair: 100,
    address: {
      title: 'Minsk'
    },
    laptop: {
      title: 'MacBook'
    },
    books: ['JS', 'React', 'Css']
  };

  const smartUser = readNewBook(user, ['TS', 'REST API']);

  expect(user).not.toBe(smartUser);
  expect(user.books).not.toBe(smartUser.books);
  expect(user.address).toBe(smartUser.address);
  expect(user.books).not.toBe(smartUser.books);
  expect(smartUser.books[3]).toBe('TS');
  expect(smartUser.books[4]).toBe('REST API');

});

test('update book', () => {
  let user: UserWithLaptopType & UserWithBooksType = {
    name: 'Bob',
    hair: 100,
    address: {
      title: 'Minsk'
    },
    laptop: {
      title: 'MacBook'
    },
    books: ['JS', 'React', 'Css']
  };

  const updatedUsersBooks = updateBook(user, 'JS', 'TS');

  expect(user).not.toBe(updatedUsersBooks);
  expect(user.books).not.toBe(updatedUsersBooks.books);
  expect(user.address).toBe(updatedUsersBooks.address);
  expect(user.books).not.toBe(updatedUsersBooks.books);
  expect(updatedUsersBooks.books[0]).toBe('TS');

});

test('remove book', () => {
  let user: UserWithLaptopType & UserWithBooksType = {
    name: 'Bob',
    hair: 100,
    address: {
      title: 'Minsk'
    },
    laptop: {
      title: 'MacBook'
    },
    books: ['JS', 'React', 'Css']
  };

  const changedUsersBooks = removeBook(user, 'JS');

  expect(user).not.toBe(changedUsersBooks);
  expect(user.books).not.toBe(changedUsersBooks.books);
  expect(user.address).toBe(changedUsersBooks.address);
  expect(user.books).not.toBe(changedUsersBooks.books);
  expect(changedUsersBooks.books.length).toBe(2);
  expect(changedUsersBooks.books[0]).toBe('React');

});


test('update company title', () => {
  let user: UserWithLaptopType & WithCompaniesType= {
    name: 'Bob',
    hair: 100,
    address: {
      title: 'Minsk'
    },
    laptop: {
      title: 'MacBook'
    },
    companies: [{id: 1, title: 'Ebam'}, {id: 2, title: 'Gugle'}, {id: 3, title: 'Urber'}]
  };

  const updatedCompanies = updateCompany(user, 1, 'EPAM');

  expect(user).not.toBe(updatedCompanies);
  expect(user.address).toBe(updatedCompanies.address);
  expect(user.companies).not.toBe(updatedCompanies.companies);
  expect(updatedCompanies.companies[0].title).toBe('EPAM');

});