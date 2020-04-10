const path = require("path");

function resolveRealPath(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: "/",
  outputDir: "dist",
  lintOnSave: true,
  runtimeCompiler: false,
  transpileDependencies: [],
  productionSourceMap: process.env.NODE_ENV !== "production",

  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },

  chainWebpack: (config) => {
    config.resolve.alias
      .set("@views", resolveRealPath("src/views"))
      .set("@assets", resolveRealPath("src/assets"))
      .set("@router", resolveRealPath("src/router"))
      .set("@mixins", resolveRealPath("src/mixins"))
      .set("@components", resolveRealPath("src/components"));
  },

  parallel: require("os").cpus().length > 1,
};
