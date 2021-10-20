import {manType} from './Destructuring';

let man: manType;

beforeEach(() => {
  man = {
    name: 'Nick',
    age: 26,
    lessons: [{title: '1'}, {title: '2'}],
    address: {title: 'J. Lenona'}
  }
})

test('',() => {

const {age,lessons} = man;
const {title} = man.address;

expect(age).toBe(26);
expect(lessons.length).toBe(2);
expect(title).toBe('J. Lenona')
})

test('', () => {
const [l1, l2] = man.lessons;

expect(l1.title).toBe('1');
expect(l2.title).toBe('2');
})