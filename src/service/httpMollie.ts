import axios from 'axios';

const baseURL = 'https://api.mollie.com/v2/';

export const customHeaders = () => ({
    Accept: 'application/json',
    Authorization: `Bearer test_TTcaJMCJRyRcpDqGGHCDF7PfAWhvgR`,
  });

const http = axios.create({
  baseURL,
  headers: customHeaders(),
});

// Add a request interceptor
http.interceptors.request.use(
  function (config) {
    // const user = getUserData();
    // if (user?.jwt) {
    //   config.headers!.Authorization = `Bearer ${user?.jwt}`;
    // }
    // Do something before request is sent
    return config;
  },
  function (error) {
    console.log('🔺', error);
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
http.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    console.log('🔺', error.message);
    if (error.message.includes('401')) {
      //   window.handleLogout()
    }
    // ":"Network Error"
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // return Promise.reject(error)
    return Promise.reject(error);
  }
);

export default http;
