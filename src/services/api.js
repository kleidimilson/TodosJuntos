import axios from 'axios';

const api = axios.create({
    baseURL: 'https://todosjuntos.netlify.app/'
});

export default api;