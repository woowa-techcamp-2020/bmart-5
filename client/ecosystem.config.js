module.exports = {
  apps: [
    {
      name: 'bmart-web',
      script:
        './node_modules/next/dist/bin/next build && ./node_modules/next/dist/bin/next start --port 80',
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
