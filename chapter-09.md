## 第9章 CSS工程化方案 ##

### 9-1 PostCSS介绍 ###
#### CSS工程化 ####
- 组织
- 优化
- 构建
- 维护
#### PostCSS ####
CSS -> PostCSS(解析转换) -> CSS

![](https://github.com/guanqing123/css_comprehensive_speak/blob/master/chapter-09-01.png)

- PostCSS本身只有解析能力
- 各种神奇的特性全靠插件
- 目前至少有200多个插件
	- import 模块合并
	- autoprefixier 自动加前缀
	- cssnano 压缩代码
	- cssnext 使用CSS新特性
	- precss 变量、 mixin、 循环等

### 9-2 PostCSS插件的使用(1) ###
#### 安装PostCSS编译工具 ####
<pre>
npm init
npm install postcss-cli
</pre>
#### 01-postcss.css ####
<pre>
*{
    margin: 0;
    padding: 0;
}
.box{
    box-shadow: 0 0 3px rgba(255,255,255, .3);
}
</pre>
#### 编译 ####
<pre>
chapter-09\node_modules\.bin>postcss ../../src/01-postcss.css -o ../../build/01-postcss.css

console log You did not set any plugins, parser, or stringifier.
</pre>
#### 结论分析 ####
输出的 build/01-postcss.css 与 src/01-postcss.css 一样,是因为没有安装插件。 如何在 src/01-postcss.css里面加一些错误的东西, postcss 编译的时候会报错,说明 postcss 还是在编译的。

#### autoprefixer插件 ####
<pre>
npm i autoprefixer
</pre>
#### postcss.config.js ####
<pre>
const autoprefixer = require('autoprefixer');
module.exports = {
    plugins: [
        autoprefixer({
            overrideBrowserslist: [
                "last 1 version",
                "> 0%",
                "IE 10"
            ]
        })
    ]
}
地址：https://github.com/browserslist/browserslist#queries
</pre>
#### src/02-plugins-main.css ####
<pre>
.box{
    box-shadow: 0 0 3px rgba(255,255,255, .3);
}
</pre>
#### 编译 ####
<pre>
chapter-09\node_modules\.bin>postcss ../../src/02-plugins-main.css -o ../../build/02-plugins-main.css
</pre>
#### build/02-plugins-main.css ####
<pre>
.box{
    -webkit-box-shadow: 0 0 3px rgba(255,255,255, .3);
       -moz-box-shadow: 0 0 3px rgba(255,255,255, .3);
            box-shadow: 0 0 3px rgba(255,255,255, .3);
}
</pre>

#### postcss-import插件 ####
<pre>
npm install postcss-import
</pre>
#### postcss.config.js ####
<pre>
const autoprefixer = require('autoprefixer');
const atImport = require('postcss-import');
module.exports = {
    plugins: [
        atImport,
        autoprefixer({
            overrideBrowserslist: [
                "last 1 version",
                "Firefox > 1"
                // "> 0%",
                // "IE 10"
            ]
        })
    ]
}
</pre>
#### src/02-plugins-main.css ####
<pre>
@import "./02-plugins-module.css";

.box{
    box-shadow: 0 0 3px rgba(255,255,255, .3);
}
</pre>
#### src/02-plugins-module.css ####
<pre>
*{
    margin: 0;
    padding: 0;
}
</pre>
#### 编译 ####
<pre>
chapter-09\node_modules\.bin>postcss ../../src/02-plugins-main.css -o ../../build/02-plugins-main.css
</pre>
#### build/02-plugins-main.css ####
<pre>
*{
    margin: 0;
    padding: 0;
}

.box{
    -moz-box-shadow: 0 0 3px rgba(255,255,255, .3);
         box-shadow: 0 0 3px rgba(255,255,255, .3);
}
</pre>

### 9-3 PostCSS插件的使用(2) ###
#### cssnano插件 ####
<pre>
npm install cssnano
</pre>
#### postcss.config.js ####
<pre>
const autoprefixer = require('autoprefixer');
const atImport = require('postcss-import');
const cssnano = require('cssnano');
module.exports = {
    plugins: [
        atImport,
        autoprefixer({
            overrideBrowserslist: [
                "last 1 version",
                "Firefox > 1"
                // "> 0%",
                // "IE 10"
            ]
            // browsers: ['> 0%']
        }),
        cssnano
    ]
}
</pre>
#### 编译 ####
<pre>
chapter-09\node_modules\.bin>postcss ../../src/02-plugins-main.css -o ../../build/02-plugins-main.css
</pre>
报错：
<pre>
{ BrowserslistError: Unknown browser query `basedir=$(dirname "$(echo "$0" | sed -e 's`. Maybe you are using old Browserslist or made typo in query.
    at unknownQuery (C:\guanqing\practise\git\css_comprehensive_speak\chapter-09\node_modules\browserslist\index.js:244:10)
    at C:\guanqing\practise\git\css_comprehensive_speak\chapter-09\node_modules\browserslist\index.js:331:11
    at Array.reduce (<anonymous>)
    at resolve (C:\guanqing\practise\git\css_comprehensive_speak\chapter-09\node_modules\browserslist\index.js:277:18)
    at browserslist (C:\guanqing\practise\git\css_comprehensive_speak\chapter-09\node_modules\browserslist\index.js:401:21)
    at cleanBrowsersList (C:\guanqing\practise\git\css_comprehensive_speak\chapter-09\node_modules\caniuse-api\dist\utils.js:59:59)
    at setBrowserScope (C:\guanqing\practise\git\css_comprehensive_speak\chapter-09\node_modules\caniuse-api\dist\index.js:26:43)
    at Object.<anonymous> (C:\guanqing\practise\git\css_comprehensive_speak\chapter-09\node_modules\caniuse-api\dist\index.js:88:1)
    at Module._compile (internal/modules/cjs/loader.js:776:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:787:10)
  name: 'BrowserslistError',
  message:
   'Unknown browser query `basedir=$(dirname "$(echo "$0" | sed -e \'s`. Maybe you are using old Browserslist or made typo in query.',
  browserslist: true }
</pre>

### 9-4 cssnext ###
#### 插件安装 ####
<pre>
npm i postcss-cssnext
</pre>
#### postcss.config.js ####
<pre>
const cssnext = require('postcss-cssnext');
module.exports = {
    plugins: [
        cssnext
    ]
}
</pre>
#### src/03-cssnext.css ####
<pre>
:root{
    --mainColor: red;
    --danger-theme: {
        color: white;
        background-color: red;
    };
}

a{
    color: var(--mainColor);
}

.danger{
    @apply --danger-theme;
}
</pre>
#### 编译 ####
<pre>
chapter-09\node_modules\.bin>postcss ../../src/03-cssnext.css -o ../../build/03-cssnext.css
</pre>
#### build/03-cssnext.css ####
a{
  color: red;
}

.danger{
  color: white;
  background-color: red;
}

### 9-5 precss ###
- 变量
- 条件(if)
- 循环
- Mixin Extend
- import
- 属性值引用
#### precss插件安装 ####
<pre>
npm i precss
</pre>
#### postcss.config.js ####
<pre>
const precss = require('precss');
module.exports = {
    plugins: [
        precss
    ]
}
</pre>
#### src/04-precss.css ####
<pre>

$blue: #056ef0;
$column: 200px;

.menu {
    width: calc(4 * $column);
}

.menu_link {
    background: $blue;
    width: $column;
}

.notice--clear {
    @if 3 < 5 {
        background: green;
    }
    @else {
        background: blue;
    }
}

@for $i from 1 to 3 {
    .b-$i { width: $(i)px; }
}
</pre>
#### 编译 ####
<pre>
chapter-09\node_modules\.bin>postcss ../../src/04-precss.css -o ../../build/04-precss.css
</pre>
#### build/04-precss.css ####
<pre>
.menu {
  width: calc(4 * 200px);
}
.menu_link {
  background: #056ef0;
  width: 200px;
}
.notice--clear {
  background: green;
}
.b-1 { width: 1px; }
.b-2 { width: 2px; }
.b-3 { width: 3px; }
</pre>

### 9-6 gulp-postcss ###
#### PostCSS支持的构建工具 ####
- CLI命令行工具
- webpack postcss-loader
- Gulp gulp-postcss
- Grunt grunt-postcss
- Rollup rollup-postcss
- ......
### gulpfile.js ###
<pre>
const gulp = require('gulp');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const atImport = require('postcss-import');

gulp.task('postcss', function(){
  var postcss = require('gulp-postcss');
 
  return gulp.src('src/02-plugins-main.css')
      .pipe(postcss([
         atImport,
         autoprefixer({
             browsers:['last 2 versions']
         }),
         cassnano
      ]))
      .pipe(gulp.dest('build/'));
});
</pre>

### 9-7 webpack ###
- JS是整个应用的核心入口
- 一切资源均由JS管理依赖
- 一切资源均由webpack打包
#### 安装webpack ####
<pre>
npm i webpack
</pre>
#### src/05-webpack-module.js ####
<pre>
module.exports = {
    say: function () {
        console.log('hello from module');
    }
}
</pre>
#### src/05-webpack-main.js ####
<pre>
var module = require('./05-webpack-module');
module.say();
</pre>
#### webpack打包 ####
<pre>
chapter-09>webpack ./src/05-webpack-main.js -o ./build/05-webpack-main.js --mode development
</pre>
#### build/05-webpack-main.js ####
生成
#### chapter-09/05-webpack-main.html ####
引用 build/05-webpack.main.js
控制台输出 hello from module

### 9-8 webpack处理CSS ###
#### 插件安装 ####
<pre>
npm i css-loader style-loader
</pre>
#### 06-webpack-css.css ####
<pre>
body{
    color: red;
}
</pre>
#### 06-webpack-main.js ####
<pre>
require('./06-webpack-css.css');

console.log('hello');
</pre>
#### webpack.config.js ####
<pre>
module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    }
}
</pre>
#### 编译 ####
<pre>
chapter-09>webpack ./src/06-webpack-main.js -o ./build/06-webpack-main.js --mode development
</pre>
#### build/06-webpack-main.js ####
生成
#### chapter-09/06-webpack-css.html ####
引用 build/06-webpack.main.js
控制台输出 hello
内容显示 红色

### 9-9 css-modules和extract-text-plugin ###
#### css-modules ####
查询参数 modules 会启用 CSS 模块规范。
默认情况下，这将启用局部作用域 CSS。
#### 07-webpack-component.css ####
<pre>
.p {
    font-size: 16px;
    color: #999;
}
.red {
    color: red;
}
.green {
    color: green;
}
</pre>
#### 07-webpack-componet.js ####
<pre>
var styles = require('./07-webpack-component.css');

exports.init = function ($dom) {
    $dom.innerHTML = '&lt;p class="'+styles.p+'"&gt;我是一个自给自足的组件&lt;/p&gt;' +
        '&lt;p class="'+styles.p+' '+styles.red+'"&gt;我有时是红的&lt;/p&gt;' +
        '&lt;p class="'+styles.p+' '+styles.green+'"&gt;有时候是绿的&lt;/p&gt;';
}
</pre>
#### 07-webpack-main.js ####
<pre>
const component = require('./07-webpack-component');

document.addEventListener('DOMContentLoaded', function () {
    component.init(document.querySelector('#component'));
});
</pre>
#### webpack.config.js ####
<pre>
{
    test: /\.css$/,
    use: [
        { loader: 'style-loader' },
        {
            loader: 'css-loader',
            options: {
                modules: true
            }
        }
    ]
}
</pre>
#### 编译 ####
<pre>
chapter-09>webpack ./src/07-webpack-main.js -o ./build/07-webpack-main.js --mode development
</pre>
#### build/07-webpack-main.js ####
生成
#### chapter-09/07-webpack-main.html ####
引用 build/07-webpack.main.js

#### extract-text-webpack-plugin ####
注意：webpack3.* 支持
<pre>
npm install extract-text-webpack-plugin --save-dev
</pre>
#### webpack.config.js ####
<pre>
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
               /*use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]*/
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('07-webpack-main.css')
    ]
}
</pre>
#### 编译 ####
<pre>
chapter-09>.\node_modules\.bin\webpack src/07-webpack-main.js build/07-webpack-main.js
</pre>

### 9-10 webpack小结 ###
#### webpack和CSS ####
- css-loader 将CSS变成JS
- style-loader 将JS样式插入head
- ExtractTextPlugin 将CSS从JS中提取出来
- css modules 解决CSS命名冲突的问题
- less-loader sass-loader 各类预处理器
- postcss-loader PostCSS处理

### 9-11 CSS面试真题 ###
- 如何解决CSS模块化问题
	- Less Sass等CSS预处理器
	- PostCSS插件(postcss-import/precss等)
	- webpack处理CSS(css-loader + style-loader)
- PostCSS可以做什么?
	- 取决于插件可以做什么
	- autoprefixer cssnext precss等 兼容性处理
	- import模块合并
	- css语法检查 兼容性检查
	- 压缩文件
- CSS modules是做什么的,如何使用
	- 解决类名冲突的问题
	- 使用PostCSS或者webpack等构建工具进行编译
	- 在HTML模板中使用编译过程产生的类名
- 为什么使用JS来引用、加载CSS
	- JS作为入口,管理资源有天然优势
	- 将组件的结构、样式、行为封装到一起,增强内聚
	- 可以做更多处理(webpack)

