import axios from 'axios';

const api = axios.create({
    baseURL: 'https://todosjuntosapi.herokuapp.com/'
});

export default api;