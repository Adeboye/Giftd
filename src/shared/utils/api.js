import jsonp from 'jsonp';

const defaults = {
  baseURL: 'https://openapi.etsy.com/v2/listings/active.js?',
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': 'm0i4npy1ghes9kj18n7hayu2'
  }
};

const api = (variables = { limit: 10, taxonomy_id: 562, api_key: 'm0i4npy1ghes9kj18n7hayu2' }) => {
  const params = { ...variables, api_key: 'm0i4npy1ghes9kj18n7hayu2', includes: 'Images:1:0' };
  return new Promise((resolve, reject) => {
    jsonp(`${defaults.baseURL}${new URLSearchParams(params)}`, {}, (err, data) => {
      if (err) {
        return reject(new Error(err));
      }

      return resolve(data);
    });
  });
};

export default api;
