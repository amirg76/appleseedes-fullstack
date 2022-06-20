import axios from 'axios';

let url = 'http://localhost:5000/api/users';

if (process.env.NODE_ENV === 'production') {
  url = '/api/users';
}

export const userAPI = axios.create({
  baseURL: url,
});
