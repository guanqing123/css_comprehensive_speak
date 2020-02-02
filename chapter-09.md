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