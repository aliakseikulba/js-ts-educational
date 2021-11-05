export {}

test('reference typ test', () => {

  const address = {
    city: 'Minsk'
  }

  const user1 = {
    name: 'Jessica',
    age: 25,
    userAddress: address
  }

  const user2 = {
    name: 'Ivan',
    age: 28,
    userAddress: address
  }


  const users = [user1, user2, {name: 'Sara', age: 23, userAddress: address}]

  expect(user1.userAddress).toBe(user2.userAddress);
  expect(user1.userAddress.city).toBe('Minsk');


  const letters = ['c', 'a', 'e', 'd', 'b']

  sortArr(letters);

  expect(letters).toEqual(['c', 'a', 'e', 'd', 'b']);

})

const sortArr = (arr: Array<string>) => {
  const copy = [...arr].sort();
}