const path = require("path");
const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "aizon-bigfinite",
    projectName: "micro-header",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object

    resolve: {
      extensions: [".tsx", ".ts", ".js", ".jsx", ".json", ".css", ".scss"],
      alias: {
        "@src": path.resolve("./src"),
      },
    },
    module: {
      rules: [
        {
          test: /\.(s(a|c)ss)$/,
          use: [
            {
              loader: "style-loader",
            },
            {
              loader: "css-loader",
            },
            {
              loader: "sass-loader",
            },
          ],
        },
      ],
    },
  });
};
