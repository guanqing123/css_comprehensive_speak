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