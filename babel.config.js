export const presets = [
  ['@babel/preset-env'],
  '@babel/preset-typescript',
  ['@babel/preset-react', { runtime: 'automatic' }],
];

export const plugins = [
  '@babel/plugin-proposal-object-rest-spred',
  [
    'transform-assets',
    {
      extensions: ['css', 'svg'],
      name: '[name].[ext]?[sha512:hash:base64:7]',
    },
  ],
];
