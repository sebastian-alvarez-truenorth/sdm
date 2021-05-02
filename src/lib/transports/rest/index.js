import axios from 'axios';

import get from './get';
import post from './post';

const generateHeaders = ({
  type = 'application/json'
} = {}) => {
  const headers = {
    Accept: `${type}`,
    'Content-Type': `${type}`,
    'Access-Control-Allow-Origin': '*',
    'X-Requested-With': 'XMLHttpRequest',
  };

  return headers;
};

export default ({ baseURL }) => {
  const core = axios.create({
    baseURL,
    headers: generateHeaders(),
    mode: 'cors',
  });

  return ({
    rawCall: (config) => core(config),
    get: (url, params, config) => get(core, url, params, config),
    post: (url, body, config) => post(core, url, body, config),
    setRequestInterceptor: (fn) => core.interceptors.request.use(fn),
    setResponseInterceptor: (fnOk, fnErr) => core.interceptors.response.use(fnOk, fnErr),
  });
};
