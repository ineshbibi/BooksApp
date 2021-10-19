import axios from 'axios';

export default axios.create({
  baseURL: 'http://nyx.vima.ekt.gr:3000/api/books',
  headers: {
    'Content-type': 'application/json'
  },
});
