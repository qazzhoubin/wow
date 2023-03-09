import path from "node:path"
import WebpackCommon from "./webpack.common"
import HtmlWebpackPlugin from "html-webpack-plugin"

export default [
  WebpackCommon({
    mode: "development",
    entry: path.resolve(__dirname, "src/server.ts"),
    output: {
      filename: "server.js",
      path: path.resolve(__dirname, "public")
    }
  }),
  WebpackCommon({
    mode: "development",
    entry: path.resolve(__dirname, "src/main.ts"),
    output: {
      filename: "[name].[hash:8].js",
      path: path.resolve(__dirname, "public")
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "./src/index.html")
      })
    ]
  })]
