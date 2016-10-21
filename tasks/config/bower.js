module.exports = function(grunt) {
  grunt.config.set('bower', {
    dev: {
      dest: '.tmp/public',
      js_dest: '.tmp/public',
      css_dest: '.tmp/public',
      fonts_dest: '.tmp/public'
    }
  });

  grunt.loadNpmTasks('grunt-bower');

};
