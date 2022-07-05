import axios from 'axios'


const forEach = (items, callback) => {
    for(let i = 0; i < items.length; i++) {
        callback(items[i]);
    }
}

test('mock callback', () => {
    const mockCallback = jest.fn(x => 42 + x);
    forEach([0, 1], mockCallback);

    expect(mockCallback.mock.calls.length).toBe(2);

    // check all data passed to the callback

    expect(mockCallback.mock.calls[0][0]).toBe(0);

    expect(mockCallback.mock.calls[1][0]).toBe(1);

    expect(mockCallback.mock.results[0].value).toBe(42);

    expect(mockCallback.mock.results[1].value).toBe(43);
});

test('mock return', () => {
    const mock = jest.fn();

    mock.mockReturnValueOnce(true).mockReturnValueOnce(false).mockReturnValueOnce('Hello');

    const results = mock();
    const results2 = mock();
    const results3= mock();


    expect(results).toBe(true);
    expect(results2).toBe(false);
    expect(results3).toBe('Hello');

});

const fetchData = async (id) => {
    const results = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    return results.data
}

test('mock axios', async () => {
    jest.spyOn(axios, 'get').mockReturnValueOnce({
        data : {
            id : 1,
            todo : 'Hello my friend',
        }
    });

    const results = await fetchData(1);
    expect(results.todo).toBe('Hello my friend');
  
});

    // const results = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)



