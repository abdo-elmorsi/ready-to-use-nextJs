const path = require('path')

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

/*  i18n: {
    locales: ["ar", "en"],
    defaultLocale: "ar",
  },*/
/*  exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    }
  },*/
}
