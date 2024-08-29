const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  publicPath: '/', // Ensures assets are served correctly
  outputDir: 'dist', // Default output directory for build files
};
