/* eslint-disable */
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");

const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = (env) => {
  const config = {
    entry: "./src/brokencompass.js",
    mode: "production",
    resolve: {
      extensions: [".js", ".json"],
    },
    output: {
      filename: "system.js",
      path: path.resolve(__dirname, "dist"),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "prettier-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                url: false,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new StylelintPlugin(),
      new CleanWebpackPlugin(),
      new CopyPlugin({
        patterns: [{ from: "system" }],
      }),
      new ESLintPlugin(),
    ],
  };

  return config;
};
