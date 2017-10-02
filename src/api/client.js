const BASE_URL = 'https://jsonplaceholder.typicode.com';

const absolute = url => BASE_URL + url;
const baseConfig = {};
const extend = (...configs) => Object.assign({}, baseConfig, ...configs);

export function get(url, config = {}) {
  return fetch(absolute(url), extend(config)).then(response => response.json());
}

export function post(url, data, config = {}) {
  return fetch(
    absolute(url),
    extend(config, {
      method: 'POST',
      data,
    }),
  ).then(response => response.json());
}
