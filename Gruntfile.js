'use strict';

module.exports = function(grunt) {
	var files = ['js/*.js'];

	grunt.initConfig({
		jsbeautifier: {
			files: files,
			options: {
				js: {
					braceStyle: 'end-expand',
					indentWithTabs: true
				}
			}
		},

		jshint: {
			files: files,
			options: grunt.file.readJSON('.jshintrc')
		},

		watch: {
			files: files,
			tasks: ['default']
		}
	});

	grunt.loadNpmTasks('grunt-jsbeautifier');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['jshint']);
};