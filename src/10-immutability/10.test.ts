import {makeHaircut, moveCity, upgradeLaptop, UserType, UserWithLaptopType} from './10';

test('reference type test', () => {
 let user: UserType = {
   name: 'Bob',
   hair: 100,
   address: {
     title: 'Minsk'
   }
  }

  const client = makeHaircut(user, 2);

 expect(user.hair).toBe(100);
 expect(client.hair).toBe(50);
 expect(client.address).toBe(user.address)

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
  }

  const movedUser = moveCity(user, 'Kiev');

  expect(user).not.toBe(movedUser);
  expect(user.address).not.toBe(movedUser.address);
  expect(user.laptop).toBe(movedUser.laptop);
  expect(movedUser.address.title).toBe('Kiev')

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
  }

  const userWithNewLaptop = upgradeLaptop(user, 'MacBook Pro');

  expect(user).not.toBe(userWithNewLaptop);
  expect(user.laptop).not.toBe(userWithNewLaptop.laptop);
  expect(user.address).toBe(userWithNewLaptop.address);
  expect(userWithNewLaptop.laptop.title).toBe('MacBook Pro');
  expect(user.laptop.title).toBe('MacBook');

});