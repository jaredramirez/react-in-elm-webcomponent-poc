const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");

const entryNames = {
  components: "components",
  bundle: "bundle"
};

module.exports = {
  entry: {
    [entryNames.components]: "./src/components.js",
    [entryNames.bundle]: "./src/index.js"
  },
  mode: "development",
  output: {
    path: __dirname + "/dist",
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|elm-stuff)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        use: {
          loader: "elm-webpack-loader",
          options: {}
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "React in Elm",
      template: "public/index.html"
    }),
    new ScriptExtHtmlWebpackPlugin({
      module: entryNames.components
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000
  }
};
