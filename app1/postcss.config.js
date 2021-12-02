module.exports = {
  plugins: {
    // postcss-selector-namespace: 给所有css添加统一前缀，然后父项目添加命名空间
    'postcss-selector-namespace': {
      namespace(css) {
        console.log('css>>>>>>>>>>>>>>', css);
        if (css.indexOf('App.vue') !== -1) {
          return '';
        }
        return 'test'
      }
    },
  }
}