export {};
test('get completed tasks', () => {
  const tasks = [
    {id: 1, task: 'Bread', isDone: true},
    {id: 2, task: 'Milk', isDone: false},
    {id: 3, task: 'Jam', isDone: false},
    {id: 4, task: 'Butter', isDone: true},
    {id: 5, task: 'Cheese', isDone: true}
  ]

  const filteredTasks = tasks.filter(task => task.isDone);

  expect(filteredTasks.length).toBe(3);
  expect(filteredTasks[0].id).toBe(1);
  expect(filteredTasks[1].id).toBe(4);
})