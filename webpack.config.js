const path = require("path");
const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const clientConfig = {
  entry: "./src/App.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: "css-loader",
        // exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: [
            {
                loader: 'svg-url-loader',
                options: {
                limit: 10000,
                },
            },
        ]
        //exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      }
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
  },
};

const serverConfig = {
  entry: "./server/index.js",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: "css-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: [
            {
                loader: 'svg-url-loader',
                options: {
                limit: 10000,
                },
            },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
        // use: ['style-loader', 'css-loader']
      }
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  node: {
    __dirname: false,
  },
};
module.exports = [serverConfig, clientConfig];