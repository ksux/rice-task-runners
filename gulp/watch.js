var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('watch', ['browser-sync'], function() {
  gulp.watch('src/**/*.{css,less}', ['styles']);
  gulp.watch('src/**/*.{js,json}', ['scripts', browserSync.reload]);
  gulp.watch('src/**/*.html', ['copy', browserSync.reload]);
});
