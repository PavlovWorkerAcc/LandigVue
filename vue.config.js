const { defineConfig } = require('@vue/cli-service')
let history = require('connect-history-api-fallback');
module.exports = defineConfig({
  publicPath: "/LandigVue/",
  transpileDependencies: true,
})
