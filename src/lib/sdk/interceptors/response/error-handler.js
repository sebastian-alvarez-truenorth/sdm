export default (instance) => async (error) => {
  try {
    if (
      error.custom?.type === 'TOKEN_EXPIRED' &&
      error.config.url === '/auth/refresh-token'
    ) {
      throw error;
    }

    if (error.custom?.type === 'TOKEN_EXPIRED') {
      await instance.Auth.refreshToken();
      return instance.transports.rest.rawCall(error.config);
    }

    throw error;
  } catch (e) {
    return Promise.reject(e);
  }
};
