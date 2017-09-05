(() => {
  'use strict';
})();

import gulp from "gulp";
import browserify from "browserify";
import source from "vinyl-source-stream";
import del from "del";
import mocha from "gulp-mocha"; 
//import babel from "gulp-babel";
import watch from "gulp-watch";
import nodemon from "gulp-nodemon";




gulp.task('default', ['clean'], () => {
  gulp.start('clean', 'build-js', 'copy-css');
});

gulp.task('clean', () => {
  return del(['public/js/*', 'public/css/*']);
});

gulp.task('build-js', () => {
  
  return browserify("dev/js/app.js")
    .transform("babelify")
    .bundle()
    .pipe(source("app.js"))
    .pipe(gulp.dest("public/js/"));
});


gulp.task('copy-css', () => {
  return gulp.src('dev/css/**/*.css')
    .pipe(gulp.dest('public/css/'));
});


var nodemonOptions = {
    watch: ['dev/*'], 
    tasks: function (changedFiles) {
	var tasks = [];
	console.log('CHANGED FILES');
	console.log(changedFiles);
	
     if (!changedFiles) return tasks;
	tasks.push('clean');

	tasks.push('build-js');

	tasks.push('copy-css');
  	
    return tasks
  }
};


gulp.task('start',  () => {
    nodemon(nodemonOptions)
        .on('restart',  function () {
            console.log('restarted!')
        });
});