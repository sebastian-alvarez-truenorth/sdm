//import { getUserToken } from 'utils/helpers';
const getUserToken = () => 'JWT_TOKEN';

const ROUTES_WITHOUT_AUTH = [
  '/auth/sign-in',
  '/auth/refresh-token',
  '/oauth',
  '/open-data',
];

export default (config) => {
  if (ROUTES_WITHOUT_AUTH.includes(config.url)) return config;  
  config.headers.Authorization = `Bearer ${getUserToken()}`;
  return config;
};
