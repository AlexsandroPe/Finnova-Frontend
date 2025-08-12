import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5260/api',
});

export default api;
