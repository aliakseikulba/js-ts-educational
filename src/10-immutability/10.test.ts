import {makeHaircut, UserType, UserWithLaptopType} from './10';

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

  const movedUser = moveUser(user, 'Kiev');

  expect(user).not.toBe(movedUser);
  expect(user.address).not.toBe(movedUser.address);
  expect(user.laptop).toBe(movedUser.laptop);
  expect(movedUser.address.title).toBe('Kiev')

});