var gulp = require('gulp'),
    util = require('gulp-util'),
    tsc = require('gulp-typescript'),
    mocha = require('gulp-mocha'),
    runSequence = require('run-sequence');

gulp.task('compile-ts', ['compile-server', 'compile-client', 'compile-protractor']);

gulp.task('compile-server', function () {
    return gulp.src(['./**/*.ts', '!./node_modules/**', '!./typings/**', '!./public/**/*.ts', '!./test-ui/*.ts'])
      .pipe(tsc({
        module: "commonjs",
        target: "ES5"
      }))
      .on('error', util.log)
      .pipe(gulp.dest('./'));
});

gulp.task('compile-client', function () {
  return gulp.src(['./public/**/*.ts'])
      .pipe(tsc({
        module: "amd",
        target: "ES5"
      }))
      .on('error', util.log)
      .pipe(gulp.dest('./public'));
});

gulp.task('compile-protractor', function () {
  return gulp.src(['./test-ui/*.ts'])
      .pipe(tsc({
        module: "commonjs",
        target: "ES5"
      }))
      .on('error', util.log)
      .pipe(gulp.dest('./test-ui'));
});

gulp.task('test', function () {
    return gulp.src('./test/*.js', { read: false })
        // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({ reporter: 'spec' }))
        .on('error', util.log);
});

gulp.task('watch', function () {
    gulp.watch(['./**/*.ts'], function () {
        runSequence('compile-ts', 'test');
    });
});

gulp.task('default', function () {
    runSequence('compile-ts', 'test', 'watch');
});