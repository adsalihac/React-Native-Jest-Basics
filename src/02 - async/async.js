import axios from 'axios'

const fetchData = async (id) => {
    const results = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    return results.data
}

// console.log(fetchData(1))

module.exports = fetchData;