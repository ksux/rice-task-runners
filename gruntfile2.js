// example of a traditional grunt file (without using load-grunt-config)
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            default: {
                src: ['<%= project.dest %>']
            }
        },
        copy: {
            default: {
                files: [
                    {expand: true,
                        cwd: '<%= project.src %>',
                        src: ['**'],
                        dest: '<%= project.dest %>'}
                ]
            }
        },
        less: {
            default: {
                options: {
                    compress: true
                },
                files: [
                    {expand: true,
                        src: ['<%= project.less %>'],
                        ext: '.css'}
                ]
            }
        },
        autoprefixer: {
            main: {
                src: '<%= project.css %>'
            }
        },
        concat: {
            css: {
                src: ['<%= project.css %>'],
                dest: '<%= project.dest %>rice<%= pkg.version %>.css'
            },
            js: {
                src: ['<%= project.js %>'],
                dest: '<%= project.dest %>rice<%= pkg.version %>.js'
            }
        },
        browserSync: {
            bsFiles: {
                src: '<%= project.dest %>rice<%= pkg.version %>.css'
            },
            options: {
                server: {
                    baseDir: "./dist"
                },
                notify: false
            }
        },
        watch: {
            options: {
                spawn: true
            },
            default: {
                files: ['<%= project.src %>/**/*'],
                tasks: ['reload']
            }
        },
        project: {
            src: 'src/',
            dest: 'dist/',
            css: '<%= project.dest %>styles/**/*.css',
            less: '<%= project.dest %>styles/**/*.less',
            styles: '<%= project.dest %>styles/**/*.{css,less}',
            js: '<%= project.dest %>scripts/**/*.js'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-newer');

    grunt.registerTask('reload', ['newer:copy', 'newer:less', 'newer:autoprefixer', 'concat']);
    grunt.registerTask('styles', ['less', 'autoprefixer', 'concat']);
    grunt.registerTask('build', ['clean', 'copy', 'styles']);
    grunt.registerTask('default', ['build', 'watch']);
}