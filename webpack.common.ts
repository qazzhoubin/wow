import { Configuration } from "webpack"
import { Configuration as ServerConfiguration } from "webpack-dev-server"

interface WebpackConfiguration extends Configuration{
    devServer?:ServerConfiguration;
}

export default function (config:WebpackConfiguration):WebpackConfiguration {
  return Object.assign(
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
          }
        ]
      },
      resolve: {
        extensions: [".ts", ".tsx", ".js"]
      }
    },
    config
  )
}
