const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "study",
    projectName: "styleguide",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: ["vue-loader"],
        },
      ],
    },
    externals: ["vue", "vue-router"],
    plugins: [new VueLoaderPlugin()],
  });
};
