const { i18n } = require('./next-i18next.config');
const path = require('path')


module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  i18n,

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
