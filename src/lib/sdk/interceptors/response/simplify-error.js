export default (error) => {
  if (! error.response) return Promise.reject(error);

  error.custom = {
    code: error.response.data.statusCode,
  }

  if (error.response.data?.errorType) {
    error.custom.type = error.response.data.errorType;
  }

  if (error.response.data?.message) {
    error.custom.message = error.response.data.message;
  }

  return Promise.reject(error);
};
