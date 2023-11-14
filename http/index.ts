import axios from 'axios';

export const API_URL = process.env.NODE_ENV === 'production' ? 'http://localhost:3000/api' : 'http://localhost:3000/api';

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
});

export default $api;
