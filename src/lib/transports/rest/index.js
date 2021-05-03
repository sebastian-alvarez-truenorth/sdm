import axios from 'axios';

import get from './get';
import post from './post';

import registerMock from './mock';

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

export default ({ baseURL, isMock = false } = {}) => {
  const coreConfig = {
    baseURL,
    headers: generateHeaders(),
    mode: 'cors',
  };

  const core = axios.create(coreConfig);

  if (isMock) registerMock(core);

  return ({
    rawCall: (config) => core(config),
    get: (url, params, config) => get(core, url, params, config),
    post: (url, body, config) => post(core, url, body, config),
    setRequestInterceptor: (fn) => core.interceptors.request.use(fn),
    setResponseInterceptor: (fnOk, fnErr) => core.interceptors.response.use(fnOk, fnErr),
  });
};
