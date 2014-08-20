var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('scripts', function() {
  return browserify({
      entries: './src/scripts/index.js',
      debug: true
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist/assets'));
});
