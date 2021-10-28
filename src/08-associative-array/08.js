/*
const user1 = {
  name: 'Pit',
  age: 32,
  address: {
    country: 'USA',
    city: {
      title: 'NY'
    }
  }
}
console.log(user1.address.city.title);
console.log(user1['address']['city']['title']);


const users = ['Brad', 'Pitt', 'Nik', 'Mike'];
console.log(users['0']);
console.log(users['map'](item => item.toUpperCase()));


const usersObj = {
  '0': 'user1',
  '1': 'user2',
  '2': 'user3',
  '3': 'user4'
}

console.log(usersObj[0]); //user1
console.log(usersObj['0']); //user1

console.log(Object.keys(usersObj)); //[ '0', '1', '2', '3' ]
console.log(Object.values(usersObj)); //[ 'user1', 'user2', 'user3', 'user4' ]

usersObj[null] = 'propertyyyy';
console.log(usersObj);
*/


const users = {
  '123': {id: 123, name: 'Nik'},
  '456': {id: 456, name: 'Mike'},
  '1300': {id: 1300, name: 'Brad'},
  '790': {id: 790, name: 'Pitt'}
}

const user = {id: 15, name: 'Bob'}
users[user.id] = user;
console.log(users);

// delete users[user.id];
// console.log(users);

users[user.id].name = 'Vitya';
console.log(users);