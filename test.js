// import axios
const axios = require('axios').default;

// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const baseURI = 'https://test-cd07b.firebaseio.com/users.json'

// const dataURI = 'https://test-cd07b.firebaseio.com/data.json'
axios.defaults.baseURL = 'https://test-cd07b.firebaseio.com/data.json'
async function getData(params) {
    try {
        // const resp = await axios.get(dataURI)
        const resp = await axios.get()
        console.log(resp.data)
    } catch (error) {
        console.log(error)
    }
}

getData()