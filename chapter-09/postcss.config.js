/*const autoprefixer = require('autoprefixer');
const atImport = require('postcss-import');
const cssnano = require('cssnano');*/
// const cssnext = require('postcss-cssnext');
const precss = require('precss');
module.exports = {
    plugins: [
        precss
        // cssnext
/*        atImport,
        autoprefixer({
            overrideBrowserslist: [
                "last 1 version",
                "Firefox > 1"
                // "> 0%",
                // "IE 10"
            ]
        }),
        cssnano*/
    ]
}