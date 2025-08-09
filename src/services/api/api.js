import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5020/api',
});

export default api;
