import {UserType} from './10';

function makeHaircut(u: UserType, volume: number) {
  const copy = {
    ...u,
    hair: u.hair / volume
  };
  return copy;
}

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