// gulpfile.js
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('assets/sass/main.scss')
               .pipe(sass())
               .pipe(gulp.dest('kaec/static/css/'))
});

gulp.task('watch', function() {
    gulp.watch('assets/sass/main.scss', ['sass']);
});