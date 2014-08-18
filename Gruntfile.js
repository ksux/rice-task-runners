module.exports = function (grunt) {
    require('load-grunt-config')(grunt, {
        data: {
            project: {
                src: 'src/',
                dest: 'dist/',
                css: '<%= project.dest %>styles/**/*.css',
                less: '<%= project.dest %>styles/**/*.less',
                styles: '<%= project.dest %>styles/**/*.{css,less}',
                js: '<%= project.dest %>scripts/**/*.js'
            }
        }
    });
}