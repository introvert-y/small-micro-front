module.exports = {
  lintOnSave: false,
  configureWebpack: {
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      disableHostCheck: true,
      sockPort: 8863,
      sockHost: "localhost"
    },
    // externals: ["vue", "vue-router", 'element-ui', /^@study\/.+/]
  },
  filenameHashing: false
};
