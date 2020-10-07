// 生产环境
const path = require('path');

module.exports = {
  env: {
    NODE_ENV: '"production"',
  },

  mini: {
    postcss: {
      cssModules: {
        enable: true,
        config: {
          namingPattern: 'module',
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
  alias: {
    '@/src': path.resolve(__dirname, '..', 'src'),
  },
  h5: {},
  defineConstants: {
    global_preFixUrl: '"https://m.daodao.pro"',
  },
};
