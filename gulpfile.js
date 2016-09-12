var browserify = require('browserify'),
    gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    notify = require("gulp-notify"),
    gulpif = require("gulp-if"),
    cssmin = require('gulp-cssmin'),
    concat = require('gulp-concat');

const paths = {
    client: {
        js: {
            src: "./client/app/index.js",
            dest: "./public/js",
            watch: "./client/**/*.js"
        },
        css: {
            src: "./server/src/css/**/*.css",
            dest: "./public/css",
            watch: "./server/src/css/**/*.js"
        },
        assets: {
            src: './server/src/assets/**/*',
            dest: './public/assets'
        }
    }
};

gulp.task('js', function () {

    const isProduction = (process.env.mode === 'production');

    return browserify(paths.client.js.src)
        .transform("babelify", {presets: ["es2015", "react"]})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(gulpif(isProduction, uglify()))
        .pipe(notify("Browserified Client App"))
        .pipe(gulp.dest(paths.client.js.dest))
});

gulp.task('css', function () {
    return gulp.src(paths.client.css.src)
        .pipe(concat('wigwam.style.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest(paths.client.css.dest));
});

gulp.task('assets', function () {
    return gulp.src(paths.client.assets.src)
        .pipe(gulp.dest(paths.client.assets.dest))
});

gulp.task('watch', function () {
    gulp.watch(paths.client.js.watch, ['js']);
    gulp.watch(paths.client.css.watch, ['css']);
    gulp.watch(paths.client.assets.src, ['assets']);
});

const defaults = [
    'js',
    'css',
    'assets',
    'watch'
];

gulp.task('default', defaults);
