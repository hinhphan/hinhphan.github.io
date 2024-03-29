const { task, src, dest, watch, series, parallel } = require("gulp");
const twig = require("gulp-twig");
const { rimraf } = require("rimraf");
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

task('resources', () => {
    return src('src/assets/**/*')
        .pipe(dest('public/assets'))
})

task('resources:watch', () => {
    watch('src/assets/**/*', series(['resources'])).on('change', reload)
})

task('twig', () => {
    delete require.cache[require.resolve("./src/data")]
    var data = require("./src/data");

    return src('src/**/[^_]*.twig')
        .pipe(twig({
            data: data.getData()
        }))
        .pipe(dest('public'))
})

task('twig:watch', () => {
    watch('src/**/*.twig', series(['twig'])).on('change', reload)
})

task('data:watch', () => {
    watch('src/data/**/*', series(['twig'])).on('change', reload)
})

task('public:clean', async () => {
    await rimraf('public')
});

task('dev:serve', () => {
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });
})

task('build', series([
    'public:clean',
    parallel([
        'resources',
        'twig'
    ]),
]))

task('dev', series([
    'public:clean',
    parallel([
        'resources',
        'twig'
    ]),
    parallel([
        'dev:serve',
        'resources:watch',
        'twig:watch',
        'data:watch',
    ]),
]))