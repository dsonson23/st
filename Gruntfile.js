module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/sentient.js',
        dest: 'js/sentient.min.js'
      },
      dev: {
        options: {
          beautify: true,
          mangle: false,
          compress: false,
          preserveComments: 'all'
        },
         
        src: ['src/js/jquery.js','src/js/jquery.easing.1.3.js','src/js/jquery-scroll-snap.js','src/js/bootstrap.js','src/js/sentient.js'],
        dest: 'js/sentient.js'
           
    }
  },
      sass: {
         dev: {
          options: {
             outputStyle: 'expanded'
          },
          files: {
            'css/style.css' : 'src/css/style.css'        
          }

         },
         build: {
          options: {
             outputStyle: 'compressed'
          },
          files: {
            'css/style.min.css' : 'css/style.css'
          }
         }
      },
    watch: {
      js: {
        files: ['src/js/*.js'],
        tasks: ['uglify:dev']
      },
      css: {
        files: ['src/css/*.css'],
        tasks: ['sass:dev']
      },
      html: {
        files: ['*.html'],
        tasks: ['uglify:dev']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');

  // Default task(s).
  grunt.registerTask('default', ['uglify:dev','sass:dev']);
  grunt.registerTask('build', ['uglify:build','sass:build']);

};