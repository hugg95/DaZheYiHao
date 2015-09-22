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
                options: ['less']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
}
