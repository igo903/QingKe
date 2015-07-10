

// gulp.task('default', function() {
//   // place code for your default task here
// });


var less = require('gulp-less');
var path = require('path');
var watchLess = require('gulp-watch-less');



var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');



var LessPluginCleanCSS = require('less-plugin-clean-css'),
    cleancss = new LessPluginCleanCSS({ advanced: true })


gulp.task('less', function() {
  return gulp.src('./less/q*.less')
  	.pipe(less())
    .pipe(gulp.dest('./css'))
    .pipe(rename({suffix: '.min'}))
    // .pipe(less({
    //     plugins: [cleancss]
    //   }))
    .pipe(minifycss())
    .pipe(gulp.dest('./css'))
    .pipe(notify({ message: 'Styles task complete' }));
});



