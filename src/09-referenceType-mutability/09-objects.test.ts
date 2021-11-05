export {}

test('reference type test', () => {
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

  address.city = 'Boston'

  expect(user1.userAddress).toBe(user2.userAddress);
  expect(user1.userAddress.city).toBe('Boston');

})