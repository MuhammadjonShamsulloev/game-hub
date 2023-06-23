import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '42e190d062874c03b10cb8d718f7d13d',
  },
});
