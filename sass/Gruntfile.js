//包装函数
module.exports = function(grunt) {

  //任务配置，所有插件的配置信息
  grunt.initConfig({

    //获取package.json的信息
    pkg:grunt.file.readJSON('package.json'),  

    //图片压缩
    imagemin:{
      dist:{
        options:{
          optimizationLevel: 3 //定义 PNG 图片优化水平    （1）
        },
        files:[{
          expand: true,// 开启动态扩展
          cwd: 'images/', // 当前工作路径
          src: ['**/*.{png,jpg,jpeg}'],// 要出处理的文件格式(images下的所有png,jpg,gif)
          dest: 'dest/images/'   // 优化后的图片保存位置，覆盖旧图片，并且不作提示
        }]
      }
    },
    
    //concat(文件合并)插件的配置信息
    concat:{
      options:{
        stripBanners:true, //合并时允许输出头部信息
        banner:'/*!<%= pkg.name %>-<%= pkg.version %>-'+'<%=grunt.template.today("yyyy-mm-dd") %> */'
      },
      cssConcat:{
        src:['css/*.css'],
        dest:'dest/css/<%= pkg.name %>-<%= pkg.version %>.css' //dest 是目的地输出
      },
      jsConcat:{
        src:'js/ls.js',
        dest:'dest/js/<%=pkg.name %>-<%= pkg.version %>.js'
      }
    },

    // uglify(js压缩)插件的配置信息
    uglify:{
      options:{
        stripBanners:true, //合并时允许输出头部信息
        banner:'/*!<%= pkg.name %>-<%= pkg.version %>-'+'<%=grunt.template.today("yyyy-mm-dd") %> */\n'//加注释
      },
      build:{
        src:'dest/js/ls_validate.js',//被压缩文件的路径
        dest:'dest/js/ls_validate.min.js' //被压缩后的文件路径
      }
    },

    //cssmin(css压缩)插件的配置信息
    cssmin:{
      options:{
        stripBanners:true, //合并时允许输出头部信息
        banner:'/*!<%= pkg.name %>-<%= pkg.version %>-'+'<%=grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build:{
        src:'dest/css/<%= pkg.name %>-<%= pkg.version %>.css',//压缩是要压缩合并了的
        dest:'dest/css/<%= pkg.name %>-<%= pkg.version %>.min.css' //dest 是目的地输出
      }
    },


    //jshint(js语法验证)插件的配置信息
    jshint:{
      options:{
        jshintrc:'.jshintrc'
      },
      build:['Gruntfile.js','js/ls_validate.js']
    },

    //csslint
    // csslint:{
    //   options:{
    //     csslintrc:'csslint'
    //   },
    //   build:['css/*css']
    // },

    //watch(实时监控文件变化)插件的配置信息
    watch: {
      files: ['css/*.css','js/*.js'],//监控哪些文件的变化
      tasks:['concat','cssmin','uglify'],//一旦变化，执行哪些插件任务
      options:{spawn:false}
    }

  });

  //加载插件
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin'); 

  //告诉grunt当我们在终端输入grunt时需要做些什么
  grunt.registerTask('default', ['imagemin']);
  // grunt.registerTask('default',['concat','cssmin','uglify','watch']);//先进行语法检查，如果没有问题，再合并，再压缩
  // grunt.registerTask('image', ['imagemin']); 
};