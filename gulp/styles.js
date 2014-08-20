var gulp = require('gulp');
var less = require('gulp-less');
var prefix = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');

gulp.task('styles', function() {
  return gulp.src([
      './node_modules/normalize.css/normalize.css',
      './src/styles/main.less'
    ])
    .pipe(less({
      compress: true
    }))
    .pipe(prefix())
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('./dist/assets'))
    .pipe(browserSync.reload({
      stream: true
    }));
});
