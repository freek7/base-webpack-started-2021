const HtmlWebpackPlugin = require("html-webpack-plugin");

const indexData = require("./src/stub_data/index.data");

module.exports = [
  new HtmlWebpackPlugin({
    inject: 'body',
    title: "My first html template",
    template: "./src/templates/pages/index.hbs",
    templateParameters: indexData,
  }),
];
