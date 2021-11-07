const { i18n } = require('./next-i18next.config');
const path = require("path");

module.exports = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    i18n
    /*: {
        defaultLocale: "en",
        locales: ["en", "ar"],
    },*/
    /*  exportPathMap: async function (
          defaultPathMap,
          { dev, dir, outDir, distDir, buildId }
      ) {
        return {
          '/': { page: '/' },
        }
      },*/
};
