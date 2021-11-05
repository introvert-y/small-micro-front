module.exports = {
  lintOnSave: false,
  configureWebpack: {
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      disableHostCheck: true,
      sockPort: 8861,
      sockHost: "localhost"
    },
    externals: ["vue", "vue-router", /^@study\/.+/]
  },
  filenameHashing: false
};
