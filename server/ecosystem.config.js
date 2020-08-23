module.exports = {
  apps: [
    {
      name: 'bmart-api',
      script: 'node ./node_modules/ts-node/dist/bin.js -r tsconfig-paths/register ./src/main.ts',
      watch: false,
      out_file: './logs/out.log',
      error_file: './logs/error.log',
    },
  ],
};
