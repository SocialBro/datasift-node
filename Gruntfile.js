/*jshint debug:true, forin:true, noarg:true, noempty:true, eqeqeq:true, loopfunc:true, bitwise:true, strict:false,
undef:true, unused:true, curly:true, browser:true, jquery:true, node:true, indent:4, maxerr:50, globalstrict:true */

module.exports = function (grunt) {

	grunt.initConfig({
		jshint: {
			all: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('default', ['jshint']);
};