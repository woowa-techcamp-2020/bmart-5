const withImages = require('next-images');
const path = require('path');
require('dotenv').config({
  path: path.join(__dirname, '../shared/.env'),
});

const publicRuntimeConfig = {
  API_END_POINT: process.env.API_END_POINT,
  NODE_ENV: process.env.NODE_ENV,
};

module.exports = withImages({
  publicRuntimeConfig,
  devIndicators: {
    autoPrerender: true,
  },
});
