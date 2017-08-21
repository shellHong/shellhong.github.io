var gulp = require('gulp');
var sass = require('gulp-sass');
var swig = require('gulp-swig');
var webpack = require('webpack');
var gutil = require('gulp-util');
var autoprefixer = require('gulp-autoprefixer');
var del = require('del');
var rename = require('gulp-rename');
var md5 = require("gulp-md5-plus");
var fs = require('fs');

var outPath = {
  clear: './export',
  css: './export/css',
  html: './export/views',
  js: './export/js',
  images: './export/images',
  files: './export/files'
};

var srcPath = {
  scss: './src/scss/**/*.scss',
  js: './src/js/*.js',
  swigFull: './src/views/**/*.html',
  swig: ['./src/views/**/*.html', '!./src/views/_*.html'],
  images: ['./src/images/**/*'],
  files: './src/files/**/*'
};

var browsers = ['> 1%', 'ie >= 9', 'last 2 versions', 'Android >= 4.4'];

gulp.task('scss', function() {
  return gulp.src(srcPath.scss)
              .pipe(sass({ compress: true }))
              .pipe(autoprefixer({browsers: browsers}))
              .pipe(md5(8, outPath.html + '/*.html'))
              .pipe(gulp.dest(outPath.css));
});

gulp.task('scss:watch', function() {
  return gulp.watch(srcPath.scss, ['scss']);
});

gulp.task('swig', function() {
  return gulp.src(srcPath.swig)
             .pipe(swig({
                defaults: {
                 cache: false,
                 locals: {}
               }
             }))
             .pipe(gulp.dest(outPath.html));
});

gulp.task('swig:watch', function() {
  return gulp.watch(srcPath.swigFull, ['swig']);
});

gulp.task('images', function() {
  return gulp.src(srcPath.images)
             .pipe(gulp.dest(outPath.images));
});

gulp.task('files', function() {
  return gulp.src(srcPath.files)
             .pipe(gulp.dest(outPath.files));
});

gulp.task('del:dirPath', function() {
  return del(outPath.clear, {
    force: true,
  });
});

gulp.task('hash:css', ['swig'], function() {
  gulp.start(['scss']);
});

gulp.task('hash:js', function() {
  return gulp.src(outPath.js + '/*.js')
             .pipe(md5(8, outPath.html + '/*.html'))
             .pipe(gulp.dest(outPath.js));
});

gulp.task('hash:img', function() {
  var g = gulp.src(outPath.images + '/**/*')
              .pipe(md5(8, outPath.html + '/*.html'))
              .pipe(md5(8, outPath.css + '/*.css'))
              .pipe(gulp.dest(outPath.images));
});

//1
gulp.task('swig', ['del:dirPath'], function() {
  gulp.start(['swig']);
});

//2
gulp.task('css', ['hash:css', 'images', 'files']);

//3、webpack

//4
gulp.task('js', ['hash:js']);

//5
gulp.task('images', ['hash:img']);
