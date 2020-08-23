module.exports = {
  apps: [
    {
      name: 'bmart-web',
      script: './node_modules/next/dist/bin/next start --port 80',
      watch: false,
      out_file: './logs/out.log',
      error_file: './logs/error.log',
    },
  ],
};
