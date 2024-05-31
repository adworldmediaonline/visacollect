import axios from 'axios';

const axiosInstance = axios.create({
  // old account
  // baseURL: 'https://nqcfsdj9u6.us-east-1.awsapprunner.com/',
  // new account
  baseURL: 'https://b6zsgkcqfp.us-east-1.awsapprunner.com/',
  // baseURL: 'http://localhost:8090/',
  timeout: 30000,
});

export default axiosInstance;
