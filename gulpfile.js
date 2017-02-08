var browserify  = require('browserify'),
    gulp        = require('gulp'),
    uglify      = require('gulp-uglify'),
    source      = require('vinyl-source-stream'),
    buffer      = require('vinyl-buffer'),
    notify      = require("gulp-notify"),
    gulpif      = require("gulp-if"),
    cssmin      = require('gulp-cssmin'),
    order       = require('gulp-order'),
    concat      = require('gulp-concat'),
    imagemin    = require('gulp-imagemin'),
    pngquant    = require('imagemin-pngquant');


const paths = {
    client: {
        img: {
            src: "./server/src/img/**/*",
            dest: "./public/img"
        },
        js: {
            src: "./client/app/index.js",
            dest: "./public/js",
            watch: "./client/**/*.js"
        },
        css: {
            src: ["./client/app/**/**/*.css", "./server/src/css/*.css"],
            dest: "./public/css",
            watch: ["./server/src/css/**/*.js", "./client/app/**/**/*.css"]
        },
        assets: {
            src: './server/src/assets/**/*',
            dest: './public/assets'
        },
        tests: {
            src: './client/app/**/*.js'
        }
    }
};

gulp.task('img', function () {
    return gulp.src(paths.client.img.src)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(paths.client.img.dest));
});

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
    'img',
    'watch'
];

const build = [
    'js',
    'css',
    'assets',
    'img'
];

gulp.task('default', defaults);
gulp.task('build', build);