module.exports = {
  apps: [
    {
      name: 'bmart-api',
      script:
        'node ./node_modules/nodemon/bin/nodemon --exec ts-node -r tsconfig-paths/register ./src/main.ts --config nodemon.json',
      watch: true,
      ignore_watch: ['node_modules', '.vscode', '.github', 'scripts', '.next', '.storybook'],
      out_file: './logs/out.log',
      error_file: './logs/error.log',
    },
  ],
};
