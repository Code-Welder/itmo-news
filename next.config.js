module.exports = {
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'ru',
  },
  images: {
    domains: ['news.itmo.ru'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}