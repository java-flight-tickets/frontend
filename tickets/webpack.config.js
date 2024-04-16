const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require('path');
const { dependencies } = require("./package.json");

module.exports = {
  entry: "./src/entry.js",
  mode: "development",
  output: {
    filename: '[name].bundle.js',
    publicPath: "http://localhost:3002/",
  },
  devServer: {
    port: 3002
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "TicketApp",
      filename: "remoteEntry.js",
      exposes: {
        "./Ticket": "./src/App.js",
      },
      shared: {
        ...dependencies,
        react: { singleton: true, requiredVersion: dependencies["react"] },
        "react-dom": { singleton: true, requiredVersion: dependencies["react-dom"] },
        "react-router-dom": { singleton: true, requiredVersion: dependencies["react-router-dom"] },
      },
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  target: "web",
};
