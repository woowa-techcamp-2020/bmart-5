module.exports = {
  apps: [
    {
      name: 'bmart-api',
      script: 'ts-node -r tsconfig-paths/register ./src/main.ts',
      watch: true,
      ignore_watch: [
        'logs',
        'node_modules',
        '.vscode',
        '.github',
        'scripts',
        '.next',
        '.storybook',
      ],
      out_file: './logs/out.log',
      error_file: './logs/error.log',
    },
  ],
};
