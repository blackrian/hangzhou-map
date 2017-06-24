var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var less = require('gulp-less');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var px2rem = require('gulp-px2rem');
var uglify = require('gulp-uglify');

gulp.task('less2rem',function () {
    return gulp.src('../src/styles/index.less')
        .pipe(less())
        .pipe(cleanCSS())
        .pipe(px2rem())
        .pipe(rename('index.debug.css'))
        .pipe(gulp.dest('../dist/styles'));
});

gulp.task('jsmin', function () {
    gulp.src('../dist/index.js')
        .pipe(uglify())
        .pipe(rename('index.min.js'))
        .pipe(gulp.dest('../dist'));
});

gulp.task('watch',function () {
    gulp.watch('../src/styles/*.less',['less2rem'])
});

gulp.task('default', ['watch','less2rem','jsmin']);
