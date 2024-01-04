module.exports = {
  presets: [
    // ...other presets
    '@babel/preset-typescript',
  ],
  plugins: [
    ['module-resolver',
      {
        root: ['./'
        ],
        alias: {
          '@': './src', // Example for '@/' alias
        },
      }
    ],
  ],
};
