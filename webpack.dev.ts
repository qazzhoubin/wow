import path from "node:path"
import WebpackCommon from "./webpack.common"
import HtmlWebpackPlugin from "html-webpack-plugin"

import { Items } from "./src/data"

export default [
  WebpackCommon({
    entry: path.resolve(__dirname, "src/main.ts"),
    output: {
      clean: true,
      filename: "[name].[fullhash].js",
      path: path.resolve(__dirname, "public")
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "./src/index.twig"),
        templateParameters: {
          items: Items
        }
      })
    ]
  })]
