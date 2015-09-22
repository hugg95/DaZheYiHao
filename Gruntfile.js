module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ['public/less/']
                },
                files: {
                    'public/css/style.css': 'public/less/style.less'
                }
            }
        },
        watch: {
            less: {
                files: ['public/less/*.less'],
                tasks: ['less']
            },
            js: {
                files: ['public/js/*.js'],
                tasks: ['webpack']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

}
