module.exports = {
  test: /\.js$/i,
  exclude: /(node_modules)/,
  use: [
    {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        plugins: ["@babel/plugin-transform-arrow-functions"],
      },
    },
  ],
};
