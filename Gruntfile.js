module.exports = function(grunt) {
    grunt.initConfig({
        ts: {
            default : {
                tsconfig: './tsconfig.json'
                // или src: ["**/*.ts", "!node_modules/**"];
            }
        },
        copy: {
            requirejs: {
                src: './node_modules/requirejs/require.js',
                dest: './dist/lib/require.js'
            },
            index: {
                src: './index.html',
                dest: './dist/index.html'
            },
        },
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks("grunt-ts");
    grunt.registerTask("default", ["ts", "copy"]);
};