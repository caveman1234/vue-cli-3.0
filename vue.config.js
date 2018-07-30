var fs = require("fs");
var path = require("path");
module.exports = {

  baseUrl: process.env.NODE_ENV === "development" ? "/" : "/",
  outputDir: "dist",
  assetsDir: "src",
  pages: {
    index1: {
      entry: "src/pages/page1/entry.js",
      template: "src/pages/page1/index.html",
      filename: "pages/page1/index.html"
    },
    index2: {
      entry: "src/pages/page2/entry.js",
      template: "src/pages/page2/index.html",
      filename: "pages/page2/index.html"
    },
  },
  lintOnSave: true,
  runtimeCompiler: true,//设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
  productionSourceMap: process.env.NODE_ENV === "development" ? true : false,
  configureWebpack: {

  },
  devServer: {
    // contentBase: path.join(__dirname, "html"),
    compress: true,
    port: 9000,
    // https:true,
    proxy: {
      '/api': {
        target: 'http://182.150.55.64:8013', //测试在线
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      },
    },
    before(app) {
      app.get("/userinfo", (req, res) => {
        res.end("userinfo--");
      })
    }
  },
  parallel:true,








  css: {
    loaderOptions: {
      less: {
        data: `@import "@/styles/colors.less";`
      }
    }
  }
}