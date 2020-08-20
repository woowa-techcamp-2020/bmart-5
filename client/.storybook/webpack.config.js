const path = require('path');

module.exports = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@pages': path.resolve(__dirname, '../src/pages'),
    '@components': path.resolve(__dirname, '../src/components'),
    '@commons': path.resolve(__dirname, '../src/commons'),
    '@utils': path.resolve(__dirname, '../src/utils'),
  };

  return config;
};
