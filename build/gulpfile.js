'use strict';

var gulp = require('gulp'),
sass = require('gulp-sass'),
rename = require('gulp-rename');

var pathfile = {
	sass: "../src/scss/*.scss",
	css: "../src/css"
};

var external = ['../src/bower_components/grid-scss/src/scss'];

gulp.task('sass', function() {

	return gulp.src(pathfile.sass)
		   .pipe(sass(
		   			{
		   				includePaths: external,
		   				outputStyle: 'compressed' 
		   			}).on('error', sass.logError))
		   .pipe(rename(
		   			{ 	
		   				basename: 'app',
		   				suffix: '.min' 
		   			}))
		   .pipe(gulp.dest(pathfile.css));

});

gulp.task('watch',  function() {

	gulp.watch(pathfile.sass, ['sass']);

});

