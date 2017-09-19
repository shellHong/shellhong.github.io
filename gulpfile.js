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
var babel = require('gulp-babel');

var isProd = process.env.NODE_ENV === 'production';

var outPath = {
  clear: './export',
  css: './export/css',
  html: './export/views',
  index: './',
  js: './export/js',
  images: './export/images',
  files: './export/files',
  r: './export/r',
  r_images: './export/r/images',
  r_js: './export/r/js',
  r_css: './export/r/css',
  navccc: './navccc'
};

var srcPath = {
  scss: './src/scss/**/*.scss',
  css: './src/css/**/*.css',
  js: './src/js/**/*.js',
  r_images: './src/r/images/**/*',
  r_css: './src/r/css/**/*.css',
  r_js: './src/r/js/**/*.js',
  swig: ['./src/views/**/*.html', '!./src/views/**/_*.html'],
  r_swig: ['./src/r/**/*.html', '!./src/r/**/_*.html'],
  index: ['./src/index.html'],
  images: ['./src/images/**/*'],
  files: './src/files/**/*',
  r: './src/r/**/**',
  navxxx: ['./navxxx/*.html', '!./navxxx/_*.html']
};

var effectSrc = {
  scss: './src/effect/**/*.scss',
  js: './src/effect/**/*.js',
  images: './src/effect/**/img/*',
  html: './src/effect/**/*.html'
};

var effectOut = './effect';

var browsers = ['> 1%', 'ie >= 9', 'last 2 versions', 'Android >= 4.4'];

gulp.task('scss', function() {
  return gulp.src(srcPath.scss)
    .pipe(sass({
      compress: isProd
    }))
    .pipe(autoprefixer({
      browsers: browsers
    }))
    .pipe(md5(8, outPath.html + '/**/*.html'))
    .pipe(gulp.dest(outPath.css));
});

gulp.task('scss_index', function() {
  return gulp.src(srcPath.scss)
    .pipe(sass({
      compress: isProd
    }))
    .pipe(autoprefixer({
      browsers: browsers
    }))
    .pipe(md5(8, `${outPath.index}index.html`))
    .pipe(gulp.dest(outPath.css));
});

gulp.task('effect_html', function() {
  var g = gulp.src(effectSrc.html)
    .pipe(gulp.dest(effectOut));
});

gulp.task('effect_js', function() {
  var g = gulp.src(effectSrc.js)
    .pipe(babel())
    .pipe(md5(8, `${effectOut}/**/*.html`));
  if (isProd) {
    g = g.pipe(uglify());
  }
  return g.pipe(gulp.dest(effectOut));
});

gulp.task('effect_scss', function() {
  return gulp.src(effectSrc.scss)
    .pipe(sass({
      compress: isProd
    }))
    .pipe(autoprefixer({
      browsers: browsers
    }))
    .pipe(md5(8, `${effectOut}/**/*.html`))
    .pipe(gulp.dest(effectOut));
});

gulp.task('effect_img', function() {
  var g = gulp.src(effectSrc.images)
    .pipe(md5(8, `${effectOut}/**/*.html`))
    .pipe(gulp.dest(effectOut));
});

gulp.task('css', function() {
  var g = gulp.src(srcPath.css)
    .pipe(md5(8, outPath.html + '/**/*.html'));
  if (isProd) {
    g = g.pipe(uglifycss());
  }
  return g.pipe(gulp.dest(outPath.css));
});

gulp.task('css_nav', function() {
  var g = gulp.src(srcPath.css)
    .pipe(md5(8, outPath.navccc + '/**/*.html'));
  if (isProd) {
    g = g.pipe(uglifycss());
  }
});

gulp.task('css_index', function() {
  var g = gulp.src(srcPath.css)
    .pipe(md5(8, `${outPath.index}index.html`));
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
gulp.task('r_swig', function() {
  var g = gulp.src(srcPath.r_swig)
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
  return g.pipe(gulp.dest(outPath.r));
});

gulp.task('nav_swig', function() {
  var g = gulp.src(srcPath.navxxx)
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
  return g.pipe(gulp.dest(outPath.navccc));
});

gulp.task('swig_index', function() {
  var g = gulp.src(srcPath.index)
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
  return g.pipe(gulp.dest(outPath.index));
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

gulp.task('del:dirPath_index', function() {
  return del(`${outPath.index}index.html`, {
    force: true,
  });
});

gulp.task('del:effect', function() {
  return del(effectOut, {
    force: true,
  });
});

gulp.task('del:navccc', function() {
  return del(outPath.navccc, {
    force: true,
  });
});

gulp.task('hash:css', ['swig'], function() {
  gulp.start(['scss', 'css', 'scss_index', 'css_index', 'css_nav']);
});

gulp.task('hash:js', function() {
  var g = gulp.src(srcPath.js)
    .pipe(md5(8, outPath.html + '/**/*.html'));
  if (isProd) {
    g = g.pipe(uglify());
  }
  return g.pipe(gulp.dest(outPath.js));
});

gulp.task('js_nav', function() {
  var g = gulp.src(srcPath.js)
    .pipe(md5(8, outPath.navccc + '/**/*.html'));
  if (isProd) {
    g = g.pipe(uglify());
  }
});

gulp.task('hash:js_index', function() {
  var g = gulp.src(srcPath.js)
    .pipe(md5(8, `${outPath.index}index.html`));
  if (isProd) {
    g = g.pipe(uglify());
  }
  return g.pipe(gulp.dest(outPath.js));
});

gulp.task('hash:img1', function() {
  var g = gulp.src(srcPath.images)
    .pipe(md5(8, outPath.html + '/**/*.html'))
    .pipe(gulp.dest(outPath.images));
});
gulp.task('hash:img2', function() {
  var g = gulp.src(srcPath.images)
    .pipe(md5(8, outPath.css + '/**/*.css'))
    .pipe(gulp.dest(outPath.images));
});

gulp.task('hash:img_index', function() {
  var g = gulp.src(srcPath.images)
    .pipe(md5(8, `${outPath.index}index.html`))
    .pipe(gulp.dest(outPath.images));
});

gulp.task('r_js', function() {
  var g = gulp.src(srcPath.r_js)
    .pipe(gulp.dest(outPath.r_js));
});
gulp.task('r_css', function() {
  var g = gulp.src(srcPath.r_css)
    .pipe(gulp.dest(outPath.r_css));
});
gulp.task('r_images', function() {
  var g = gulp.src(srcPath.r_images)
    .pipe(gulp.dest(outPath.r_images));
});

//1
gulp.task('swig_task', ['del:dirPath', 'del:dirPath_index', 'del:navccc'], function() {
  gulp.start(['swig', 'swig_index', 'r_swig', 'nav_swig']);
});

//2
gulp.task('css_task', ['hash:css', 'files']);

//3、webpack

//4
gulp.task('js_task', ['hash:js', 'hash:js_index', 'js_nav']);

//5
gulp.task('images_task', ['hash:img1', 'hash:img2', 'hash:img_index', 'r_css', 'r_js', 'r_images']);

//6
gulp.task('del:index', function() {
  return del('./index/', {
    force: true,
  });
});
