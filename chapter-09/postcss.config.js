const autoprefixer = require('autoprefixer');
const atImport = require('postcss-import');
const cssnano = require('cssnano');

module.exports = {
    plugins: [
        atImport,
        autoprefixer({
/*            overrideBrowserslist: [
                "last 1 version",
                "Firefox > 1"
                // "> 0%",
                // "IE 10"
            ]*/
            browsers: ['> 0%']
        }),
        cssnano
    ]
}