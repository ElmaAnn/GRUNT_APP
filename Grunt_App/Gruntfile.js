module.exports=function(grunt){
    const sass = require('node-sass');
    // grunt.registerTask('speak',function(){
    //     console.log("i am speaking")
    // })
    grunt.initConfig({        
        eslint: {  
            options: {
                configFile: 'conf/eslint.json'
            },
            target: ['src/index.js']
        },        
        sass: {   
            options: {
                implementation: sass,
                sourceMap: true
            },
            build: {
                files: {
                    'build/css/style.css': 'src/style.scss' //target:dest
                }
            }
        },  
        uglify: {
            build: {
              files: {
                'build/js/output.min.js': ['src/index.js']
              }
            }
        },
        watch: {   
            js: {
              files: ['src/index.js','src/style.scss'],
              tasks: ['sass','eslint','uglify'],
              options: {
                spawn: false,
              },
            },
        }
      });
      grunt.loadNpmTasks('grunt-contrib-concat');
      grunt.loadNpmTasks('grunt-contrib-watch');
      grunt.loadNpmTasks('grunt-contrib-concat');
      grunt.loadNpmTasks('grunt-contrib-uglify');
      grunt.loadNpmTasks('grunt-sass');
      grunt.loadNpmTasks('grunt-eslint');
      grunt.registerTask('default',['watch','concat','uglify','sass','eslint'])
}