const themeDir = __dirname + '/../../';

module.exports = {
    plugins: [
        require('postcss-import')({
            path: [themeDir]
        }),
        require('tailwindcss')(themeDir + 'assets/css/tailwind.config.js'),
        require('@fullhuman/postcss-purgecss')({
            content: [
                themeDir + 'layouts/**/*.html',
                themeDir + '/content/**/*.html',
                'layouts/**/*.html',
                'content/**/*.html',
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
            fontFace: true
        }),
        require('autoprefixer')({
            grid: true
        }),
        require('postcss-reporter'),
    ]
}
