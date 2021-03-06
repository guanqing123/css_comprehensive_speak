## 第7章 预处理器 ##

### 7-1 介绍 ###
#### CSS预处理器 ####
- 基于CSS的另一种语言
- 通过工具编译成CSS
- 添加了很多CSS不具备的特性
- 能提升CSS文件的组织
- {less} vs Sass
	- less 基于node写的,是用js写的,所以编译比较快
	- sass 是用ruby写的,编译比较慢
#### CSS预处理器功能 ####
- 嵌套 反映层级和约束
- 变量和计算 减少重复代码
- Extend 和 Mixin 代码片段(类似js函数)
- 循环 适用于复杂有规律的样式
- import CSS文件模块化

### 7-2 less嵌套 ###
#### 下载less编译器 ####
<pre>
npm init

npm install less -D

chapter-07\node_modules\.bin>lessc ../../1-nest.less

输出到 1-nest.css 文件
chapter-07\node_modules\.bin>lessc ../../1-nest.less>../../1-nest.css
</pre>
#### 1-nest.less ####
<pre>
body{
    padding:0;
    margin:0;
}

.wrapper{
    background:white;

    .nav{
        font-size: 12px;
    }
    .content{
        font-size: 14px;
        &:hover{  //平级,相当于: .content:hover
            background:red;
        }
    }
}
</pre>

### 7-3 sass嵌套(1) ###
#### 下载sass编译器 ####
<pre>
npm i node-sass -D

输出到 1-nest-scss.css 文件
chapter-07\node_modules\.bin>node-sass ../../1-nest.scss>../../1-nest-scss.css
</pre>
#### 1-nest.scss ####
<pre>
body{
    padding:0;
    margin:0;
}

.wrapper{
    background:white;

    .nav{
        font-size: 12px;
    }
    .content{
        font-size: 14px;
        &:hover{
            background:red;
        }
    }
}
</pre>

### 7-4 sass嵌套(2) ###
<pre>
expanded 会把输出的样式结构打开

chapter-07\node_modules\.bin>node-sass --output-style expanded ../../1-nest.scss>../../1-nest-scss-expanded.css
</pre>

### 7-5 less变量 ###
#### variable.less ####
<pre>
@fontSize: 12px;
@bgColor: red;

body{
    padding:0;
    margin:0;
}

.wrapper{
    background:lighten(@bgColor, 40%);

    .nav{
        font-size: @fontSize;
    }
    .content{
        // 如果是乘法 就不用写 px 单位
        font-size: @fontSize + 2px;
        &:hover{
            background:@bgColor;
        }
    }
}
</pre>

### 7-6 sass变量 ###
#### variable.scss ####
<pre>
$fontSize: 12px;
$bgColor: red;

body{
    padding:0;
    margin:0;
}

.wrapper{
    background:lighten($bgColor, 40%);

    .nav{
        font-size: $fontSize;
    }
    .content{
        font-size: $fontSize + 2px;
        &:hover{
            background:$bgColor;
        }
    }
}
</pre>
#### 编译 ####
<pre>
chapter-07\node_modules\.bin>node-sass --output-style expanded ../../2-variable.scss>../../2-variable-scss.css
</pre>

### 7-7 less mixin ###
#### mixin.less ####
<pre>
@fontSize: 12px;
@bgColor: red;

.box{
    color:green;
}
// 这里加()和不加都没有关系,但是加了box就不会被编译出来
.box(){
	color:green;
}

.box1{
    .box();
    line-height: 2em;
}
.box2{
    .box();
    line-height: 3em;
}

.block(@fontSize){
    font-size: @fontSize;
    border: 1px solid #ccc;
    border-radius: 4px;
}


body{
    padding:0;
    margin:0;
}

.wrapper{
    background:lighten(@bgColor, 40%);

    .nav{
        .block(@fontSize);
    }
    .content{
        .block(@fontSize + 2px);
        &:hover{
            background:red;
        }
    }
}
</pre>
#### 编译 ####
<pre>
chapter-07\node_modules\.bin>lessc ../../3-mixin.less>../../3-mixin.css
</pre>

### 7-8 sass mixin ###
#### mixin.scss ####
<pre>

$fontSize: 12px;
$bgColor: red;

@mixin block($fontSize){
    font-size: $fontSize;
    border: 1px solid #ccc;
    border-radius: 4px;
}

body{
    padding:0;
    margin:0;
}

.wrapper{
    background:lighten($bgColor, 40%);

    .nav{
        @include block($fontSize);
    }
    .content{
        @include block($fontSize + 2px);
        &:hover{
            background:red;
        }
    }
}
</pre>
#### 编译 ####
<pre>
chapter-07\node_modules\.bin>node-sass --output-style expanded ../../3-mixin.scss>  ../../3-mixin-scss.css
</pre>

### 7-9 less extend ###
#### extend.less ####
<pre>
@fontSize: 12px;
@bgColor: red;

.block{
    font-size: @fontSize;
    border: 1px solid #ccc;
    border-radius: 4px;
}

body{
    padding:0;
    margin:0;
}

.wrapper{
    background:lighten(@bgColor, 40%);

    .nav:extend(.block){
        color: #333;
    }
    .content{	// .content:extend(.block){}等价于.content{&:extend(.block);}
        &:extend(.block);
        &:hover{
            background:red;
        }
    }
}
</pre>
#### 编译 ####
<pre>
lessc ../../4-extend.less ../../4-extend.css
</pre>

### 7-10 sass extend ###
#### extend.scss ####
<pre>
$fontSize: 12px;
$bgColor: red;

.block{
    font-size: $fontSize;
    border: 1px solid #ccc;
    border-radius: 4px;
}

body{
    padding:0;
    margin:0;
}

.wrapper{
    background:lighten($bgColor, 40%);

    .nav{
        @extend .block;
        color: #333;
    }
    .content{
        @extend .block;
        &:hover{
            background:red;
        }
    }
}
</pre>
#### 编译 ####
<pre>
chapter-07\node_modules\.bin>node-sass --output-style expanded ../../4-extend.scss> ../../4-extend-scss.css
</pre>
#### Extend 和 Mixin 的区别 ####
作用都是在样式内部完成样式的复用，但最后代码编译后生成的结果不同，Mixin是直接把代码复制过来，而Extend是把选择器提取出来把公共的样式写在一起，减少了很多一样的代码。

### 7-11 less loop ###
#### loop.less ####
<pre>
.gen-col(@n) when (@n > 0){
    .gen-col(@n - 1);
    .col-@{n}{
        width: 1000px/12*@n;
    }
}

.gen-col(12);
</pre>
#### 编译 ####
<pre>
lessc ../../5-loop.less> ../../5-loop.css
</pre>

### 7-12 sass loop ###
#### loop.scss ####
<pre>
 @mixin gen-col($n){
     @if $n > 0 {
         @include gen-col($n - 1);
         .col-#{$n}{
             width: 1000px/12*$n;
         }
     }
 }

 @include gen-col(12);
</pre>
<pre>
@for $i from 1 through 12 {
    .col-#{$i} {
        width: 1000px/12*$i;
    }
}
</pre>
#### 编译 ####
<pre>
chapter-07\node_modules\.bin>node-sass --output-style expanded ../../5-loop.scss> ../../5-loop-scss.css
</pre>

### 7-13 less import ###
#### import-main.less ####
<pre>
@import "import-variable";
@import "import-module1";
@import "import-module2";
</pre>
#### import-variable.less ####
<pre>
@themeColor: blue;
@fontSize: 14px;
</pre>
#### import-module1.less ####
<pre>
.module1{
    .box{
        font-size:@fontSize + 2px;
        color:@themeColor;
    }
    .tips{
        font-size:@fontSize;
        color:lighten(@themeColor, 40%);
    }
}
</pre>
#### import-module2.less ####
<pre>
.module2{
    .box{
        font-size:@fontSize + 4px;
        color:@themeColor;
    }
    .tips{
        font-size:@fontSize + 2px;
        color:lighten(@themeColor, 20%);
    }
}
</pre>
#### 编译 ####
<pre>
chapter-07\node_modules\.bin>lessc ../../import-main.less> ../../import-main.css
</pre>
#### import-main.css ####
<pre>
.module1 .box {
  font-size: 16px;
  color: blue;
}
.module1 .tips {
  font-size: 14px;
  color: #ccccff;
}
.module2 .box {
  font-size: 18px;
  color: blue;
}
.module2 .tips {
  font-size: 16px;
  color: #6666ff;
}
</pre>

### 7-14 sass import ###
#### import-main.scss ####
<pre>
@import "import-variable";
@import "import-module1";
@import "import-module2";
</pre>
#### import-variable.scss ####
<pre>
$themeColor: blue;
$fontSize: 14px;
</pre>
#### import-module1.scss ####
<pre>
.module1{
    .box{
        font-size:$fontSize + 2px;
        color:$themeColor;
    }
    .tips{
        font-size:$fontSize;
        color:lighten($themeColor, 40%);
    }
}
</pre>
#### import-module2.scss ####
<pre>
.module2{
    .box{
        font-size:$fontSize + 4px;
        color:$themeColor;
    }
    .tips{
        font-size:$fontSize + 2px;
        color:lighten($themeColor, 20%);
    }
}
</pre>
#### 编译 ####
<pre>
chapter-07\node_modules\.bin>node-sass --output-style expanded ../../import-main.scss> ../../import-main-scss.css
</pre>
#### import-main-scss.css ####
<pre>
.module1 .box {
  font-size: 16px;
  color: blue;
}

.module1 .tips {
  font-size: 14px;
  color: #ccccff;
}

.module2 .box {
  font-size: 18px;
  color: blue;
}

.module2 .tips {
  font-size: 16px;
  color: #6666ff;
}
</pre>

### 7-15 预处理器框架(1) ###
#### CSS预处理器框架 ####
- SASS - Compass
- Less - Lesshat/EST
- 提供现成的mixin
- 类似JS类库 封装常用功能

### 7-16 预处理器框架(2) ###
### est.less ###
<pre>
@import "est/all";

@support-ie-version: 7;
@use-autoprefixer: false;

.global-reset();

.box{
    .inline-block();
    .opacity(60);
    height: 100px;
    background: green;
    margin:10px;
}
.left{
    float:left;
    .clearfix();
}


.row{
    .make-row();
    .col{
        .make-column(1/4);
        background:red;
        height: 100px;
    }
}
.my-triangle{
    margin:100px;
    // width:100px;
    // height:200px;
    // border: 1px solid red;
}
.my-triangle::after{
    content: ' ';
    .triangle(top left, 100px, red, side);
}
</pre>

### 7-17 真题 ###
#### CSS面试真题 ####
- 常见的CSS预处理器
	- Less(Node.js)
	- Sass(Ruby 有Node版本)
- 预处理器的作用
	- 帮助更好地组织CSS代码
	- 提高代码复用率
	- 提升可维护性
- 预处理器的能力
	- 嵌套 反映层级和约束
	- 变量和计算 减少重复代码
	- Extend 和 Mixin 代码片段
	- 循环 适用于复杂有规律的样式
	- import CSS文件模块化
- 预处理器的优缺点
	- 优点：提高代码复用率和可维护性
	- 缺点：需要引入编译过程 有学习成本