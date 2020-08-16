import { baseURL } from './constants';
import axios from 'axios';

export default axios.create({
  baseURL: baseURL,
  headers: { Accept: 'application/json' },
});
