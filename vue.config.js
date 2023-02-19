const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
<<<<<<< Updated upstream
  publicPath: process.env.NODE_ENV === 'production'
    ? '/LandigVue/'
    : '/'
=======
  publicPath: '/LandigVue/'
>>>>>>> Stashed changes
})
