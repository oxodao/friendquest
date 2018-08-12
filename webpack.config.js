let Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()

    .addEntry('main', './app/index.js')

    .enableSassLoader()
    .autoProvidejQuery()
    .enableSourceMaps(!Encore.isProduction())
;

module.exports = Encore.getWebpackConfig();
