import { Configuration } from "webpack"
import { Configuration as ServerConfiguration } from "webpack-dev-server"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import CssMinimizerPlugin from "css-minimizer-webpack-plugin"

interface WebpackConfiguration extends Configuration{
    devServer?:ServerConfiguration;
}

export default function (config:WebpackConfiguration):WebpackConfiguration {
  return Object.assign<Partial<WebpackConfiguration>, Partial<WebpackConfiguration>>(
    {
      module: {
        rules: [
          {
            test: /\.tsx?/,
            loader: "ts-loader"
          },
          {
            test: /\.(png|gif|jpe?g)/,
            loader: "url-loader"
          },
          {
            test: /\.less$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
          }
        ]
      },
      resolve: {
        extensions: [".ts", ".tsx", ".js"]
      },
      optimization: {
        minimizer: [
          new CssMinimizerPlugin()
        ]
      }
    },
    config
  )
}
