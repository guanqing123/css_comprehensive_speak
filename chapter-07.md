## 第7章 预处理器 ##

### 7-1 介绍 ###
#### CSS预处理器 ####
- 基于CSS的另一种语言
- 通过工具编译成CSS
- 添加了很多CSS不具备的特性
- 能提升CSS文件的组织
- {less} vs Sass
#### CSS预处理器功能 ####
- 嵌套 反映层级和约束
- 变量和计算 减少重复代码
- Extend和Mixin 代码片段
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