// Dependencies
var    gulp = require('gulp'),
    rename = require("gulp-rename")
    uglify = require('gulp-uglify');

gulp.task('minify-js', async function () {
    gulp.src('source/*.js')
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('build/'))
});
