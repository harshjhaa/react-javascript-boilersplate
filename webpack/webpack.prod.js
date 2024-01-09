const webpack = require("webpack");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "production",
  devtool: "source-map", // for generating source-map of our code
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("Jha"),
    }),
    // new BundleAnalyzerPlugin(),
  ],
};
