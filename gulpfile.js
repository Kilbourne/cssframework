var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass', function () {
  gulp.src('inuit.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./bundle/'));
});
gulp.task('concat-inuit', function() {
  return gulp.src([

  	])
    .pipe(concat('inuit.scss'))
    .pipe(gulp.dest('./bundle/'));
});