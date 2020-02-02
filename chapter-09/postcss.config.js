const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        autoprefixer({
            overrideBrowserslist: [
                "last 1 version",
                "Firefox > 1"
                // "> 0%",
                // "IE 10"
            ]
        })
    ]
}