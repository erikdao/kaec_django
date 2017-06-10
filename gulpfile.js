// gulpfile.js
var gulp = require('gulp');
var sass = require('gulp-sass');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');


// define the default task and add watch task to it
gulp.task('default', ['watch']);

// configure sass task
gulp.task('sass', function() {
    return gulp.src('assets/sass/main.scss')
               .pipe(sass())
               .pipe(gulpIf('*.css', cssnano()))
               .pipe(gulp.dest('kaec/static/css/'))
});

// configure watch task
gulp.task('watch', function() {
    gulp.watch('assets/sass/**/*.scss', ['sass']);
});