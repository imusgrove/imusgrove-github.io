/*  Gulp will be used for development and deployment tasks, 
such as minification of code, translating SCSS into SASS & CSS,
and reloading after a save.See the README.md for gulp commands.
*/
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var reload = browserSync.reload;

gulp.task('serve', function () {
  /* Serve files from the root of the project */
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("*.html").on("change", reload);
});

// gulp.task('sass', function () {
//     return gulp.src('scss/main.scss')
//         .pipe(sass()) // Converts Sass to CSS with gulp-sass
//         .pipe(gulp.dest('css'))
// });

/* Compiles SCSS files from /scss into /css */
gulp.task('sass', function() {
  return gulp.src('scss/main.scss')
  .pipe(sass())

  .pipe(gulp.dest('css'))
  .pipe(browserSync.reload({
      stream: true
  }))
});

/* Runs sass & serve methods. Watches for changes and reloads. */
gulp.task('dev', ['serve', 'sass'], function () {
  gulp.watch('scss/*.scss', ['sass']);
  gulp.watch('*.html');
});