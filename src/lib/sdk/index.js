import { rest } from '../transports';

import { addAuthorizationHeader } from './interceptors/request';

import {
  proxyOkResponse,
  simplifyError,
  errorHandler,
} from './interceptors/response'

import * as Resources from './resources';

import config from './config';

const ServicingDashboardSDK = () => {
  const transports = {
    rest: rest(config)
  };

  const instance = {
    transports,
    Borrower: Resources.Borrower(transports),
    Loan: Resources.Loan(transports),
  };

  // TODO: Enable this for addding JWT token add to each request
  /*
  transports.rest.setRequestInterceptor(
    addAuthorizationHeader
  );
  */

  transports.rest.setResponseInterceptor(
    proxyOkResponse,
    simplifyError
  );

  transports.rest.setResponseInterceptor(
    proxyOkResponse,
    errorHandler(instance)
  );

  return instance;
};

export default ServicingDashboardSDK;
