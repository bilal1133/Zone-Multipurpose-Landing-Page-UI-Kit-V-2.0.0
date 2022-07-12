import axios from 'axios';
// config
import { HOST_API } from '../config';

// ----------------------------------------------------------------------

export const basePath = process.env.NODE_ENV === 'production' ? HOST_API.production : HOST_API.dev;

const axiosInstance = axios.create({
  baseURL: basePath,
});

export default axiosInstance;
