const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

const babelConf = require("./babel.conf");
const templates = require("./templates")

module.exports = (evn, arg) => {
  const isProd = arg.mode === "production";

  return {
    entry: "./src/index.js",

    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },

    devtool: "source-map",

    devServer: {
      contentBase: "./dist",
    },

    module: {
      rules: [
        // rules for js
        isProd ? { ...babelConf } : {},
        // rules for styles
        {
          test: /\.(css|sass|scss)$/i,
          use: [
            miniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
            "postcss-loader",
          ],
        },

        // rules for images
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
          generator: {
            filename: "static/images/[hash][ext][query]",
          },
        },

        // rules for fonts
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
          generator: {
            filename: "static/fonts/[hash][ext][query]",
          },
        },

        // rules for temaplates
        {
          test: /\.hbs$/i,
          loader: "handlebars-loader",
        },
      ],
    },

    plugins: [new miniCssExtractPlugin(), ...templates],
  };
};
