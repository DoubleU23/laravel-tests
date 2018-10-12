const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

var isHMR = process.argv.includes('--hot') === true;

// console.log('HMR:    ', isHMR);

mix
    // .webpackConfig({ devtool: 'cheap-module-eval-source-map'})
    .options({
        clearConsole: true
        // extractVueStyles: isHMR ? false : 'css/components.css'
    })
    // .js('resources/sass/app.scss.vue', 'public/js/')
    .js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
;

// if (process.argv.includes('--watch') || process.argv.includes('--watch-poll')) {

// }

// if (!isHMR) {
//     mix
//         .sass('resources/sass/app.scss', 'public/css')
//         .combine(
//             ['public/css/app.css', 'public/css/components.css'],
//             'public/css/combined.css'
//         )
//         .browserSync('homestead.test')
//         .then(stats => console.log('Compiled! #2'))
//     ;
// }
// else {

// }



