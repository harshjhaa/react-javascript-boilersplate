const path = require("path");
const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map", // for generating source-map of our code
  devServer: {
    port: 3010,
    static: {
      directory: path.resolve(__dirname, "..", "./public"), // Set your content base directory
      watch: true,
    },
    hot: true,
    open: true,
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("Harsh"),
    }),
  ],
};
