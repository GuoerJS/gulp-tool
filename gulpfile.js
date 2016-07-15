var gulp = require('gulp'),
    babel = require('gulp-babel'),
    less = require('gulp-less'),//less编译
    minifycss = require('gulp-minify-css'),//css压缩
    del = require('del'),//删除
    concat = require('gulp-concat'), // 合并文件
    uglify = require('gulp-uglify');//js压缩

// // 压缩js文件
// gulp.task('minijs',function(){
//     gulp.src('src/js/*.js')
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/js'));
// });
// // 编译ES6语法
// gulp.task('babel', function () {
//     return gulp.src('src/js/*.js')
//         .pipe(babel({
//           presets: ['es2015']
//         }))
//         .pipe(gulp.dest('dist/js'));
// });
// //编译less,并压缩编译后的css
// gulp.task('cmpless_minicss',function(){
//     gulp.src('src/less/*.less')
//         .pipe(less())
//         .pipe(minifycss())
//         .pipe(gulp.dest('dist/css'));
// });
// //压缩前，先删除目录里的内容
// gulp.task('clean', function(cb) {
//     del(['dist/css', 'dist/js'], cb)
// });
// //实时监听文件修改并自动执行数组中的任务列表
// gulp.task('auto',function(){
//     gulp.watch(['src/js/*.js','src/less/*.less'],['clean','babel','cmpless_minicss']);
// });
// //默认任务，命令行中键入"gulp"并按下回车键便可运行
// gulp.task('default',function(){
//     gulp.start('clean','babel','cmpless_minicss','auto');
// });

// 合并 