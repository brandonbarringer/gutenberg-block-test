const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const entryArray = glob.sync('./blocks/*/src/index.js');

const entryObject = entryArray.reduce((acc, item) => {
  const name = item.replace('/src/index.js', '');
  acc[name] = item;
  return acc;
}, {});


module.exports = (env, options) => {
  return {
    entry: entryObject,
    output: {
      filename: '[name]/dist/index.js',
      path: path.resolve(__dirname)
    },

    module: {
      rules: [
        {
          test: /\.jsx$|\.es6$|\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [ "@wordpress/default" ],
            }
          },
          exclude: /node_modules/
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [ require( 'autoprefixer' ) ]
                }
              }
            },
            {
              loader: 'sass-loader',
              options: {
                // Prefer `dart-sass`
                implementation: require('sass'),
              },
            }
          ],
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: (url, resourcePath, context) => {
                  const relativePath = path.relative(context, resourcePath);
                  return relativePath.replace('/src/', '/dist/');
                }
              }
            }
          ]
        },
      ],
    },

    resolve: {
      alias: {
       blocks: path.resolve(__dirname, 'blocks'),
       theme: path.resolve(__dirname, 'theme')
      }
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name]/dist/css/style.css',
        chunkFilename: '[id].css'
      })
    ],

  }
};
