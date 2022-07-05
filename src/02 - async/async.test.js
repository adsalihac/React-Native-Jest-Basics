import fetchData from './async'

// test('should return correct todo', async () => {
//     fetchData(1).then(todo => {
//         expect(todo.id).toBe(1);
//     });
// });

test('should return correct todo', async () => {
    const todo = await fetchData(1);
    expect(todo.id).toBe(1);
});