export default (core, url, body = {}, config = {}) => {
  return core.post(url, body, config);
};
