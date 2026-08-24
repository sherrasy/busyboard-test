module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { browsers: ['last 2 versions'] } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],
  plugins: [
    process.env.NODE_ENV === 'development' && 'react-refresh/babel',
  ].filter(Boolean),
};
