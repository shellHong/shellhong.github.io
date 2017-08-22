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
var htmlmin = require('gulp-htmlmin');
var uglifycss = require('gulp-uglifycss');
var uglify = require('gulp-uglify');

var isProd = process.env.NODE_ENV === 'production';

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
  css: './src/css/**/*.css',
  js: './src/js/**/*.js',
  swigFull: './src/views/**/*.html',
  swig: ['./src/views/**/*.html', '!./src/views/**/_*.html'],
  images: ['./src/images/**/*'],
  files: './src/files/**/*'
};

var browsers = ['> 1%', 'ie >= 9', 'last 2 versions', 'Android >= 4.4'];

gulp.task('scss', function() {
  return gulp.src(srcPath.scss)
    .pipe(sass({
      compress: isProd
    }))
    .pipe(autoprefixer({
      browsers: browsers
    }))
    .pipe(md5(8, outPath.html + '/*.html'))
    .pipe(gulp.dest(outPath.css));
});

gulp.task('css', function() {
  var g = gulp.src(srcPath.css)
    .pipe(md5(8, outPath.html + '/*.html'));
  if (isProd) {
    g = g.pipe(uglifycss());
  }
  return g.pipe(gulp.dest(outPath.css));
});

gulp.task('swig', function() {
  var g = gulp.src(srcPath.swig)
    .pipe(swig({
      defaults: {
        cache: false,
        locals: {
          isProd: true,
          version: 1
        }
      }
    }));
  if (isProd) {
    g = g.pipe(htmlmin({
      collapseWhitespace: true,
      minifyJS: true
    }));
  }
  return g.pipe(gulp.dest(outPath.html));
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
  gulp.start(['scss', 'css']);
});

gulp.task('hash:js', function() {
  var g = gulp.src(srcPath.js)
    .pipe(md5(8, outPath.html + '/*.html'));
  if (isProd) {
    g = g.pipe(uglify());
  }
  return g.pipe(gulp.dest(outPath.js));
});

gulp.task('hash:img', function() {
  var g = gulp.src(srcPath.images)
    .pipe(md5(8, outPath.html + '/*.html'))
    .pipe(md5(8, outPath.css + '/*.css'))
    .pipe(gulp.dest(outPath.images));
});

//1
gulp.task('swig_task', ['del:dirPath'], function() {
  gulp.start(['swig']);
});

//2
gulp.task('css_task', ['hash:css', 'files']);

//3、webpack

//4
gulp.task('js_task', ['hash:js']);

//5
gulp.task('images_task', ['hash:img']);
