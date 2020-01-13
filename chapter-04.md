## 第4章 CSS布局 ##

### 4-1 布局简介 ###
#### CSS布局 ####
- CSS知识体系的重中之重
- 早期以table为主(简单)
- 后来以技巧性布局为主(难)
- 现在有flexbox/grid(偏简单)
- 响应式布局是必备知识
#### 常用布局方法 ####
- table表格布局
- float浮动 + margin
- inline-block 布局
- flexbox 布局

### 4-2 布局方式(表格) ###
#### html ####
<pre>
&lt;div class="table"&gt;
    &lt;div class="table-row"&gt;
        &lt;div class="left table-cell"&gt;
            左
        &lt;/div&gt;
        &lt;div class="right table-cell"&gt;
            右
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</pre>
#### css ####
<pre>
.table{
    margin-top:20px;
    display: table;
    width:800px;
    height:200px;
}
.table-row{
    display: table-row;
}
.table-cell{
    vertical-align: center;
    display: table-cell;
}
</pre>

### 4-3 一些布局属性 ###
#### 盒模型 ####
![](https://github.com/guanqing123/css_comprehensive_speak/blob/master/chapter-04-01.png)

#### display / position ####
- 确定元素的显示类型
	- block/inline/inline-block
	- block，inline和inline-block概念和区别
		- 总体概念
			- block和inline这两个概念是简略的说法，完整确切的说应该是 block-level elements (块级元素) 和 inline elements (内联元素)。block元素通常被现实为独立的一块，会单独换一行；inline元素则前后不会产生换行，一系列inline元素都在一行内显示，直到该行排满。
			- 大体来说HTML元素各有其自身的布局级别（block元素还是inline元素）：
				- 常见的块级元素有 DIV, FORM, TABLE, P, PRE, H1~H6, DL, OL, UL 等。
				- 常见的内联元素有 SPAN, A, STRONG, EM, LABEL, INPUT, SELECT, TEXTAREA, IMG, BR 等。
			- block元素可以包含block元素和inline元素；但inline元素只能包含inline元素。要注意的是这个是个大概的说法，每个特定的元素能包含的元素也是特定的，所以具体到个别元素上，这条规律是不适用的。比如 P 元素，只能包含inline元素，而不能包含block元素。 
			- 一般来说，可以通过display:inline和display:block的设置，改变元素的布局级别。
		- block，inline和inlinke-block细节对比
			- display:block
				- block元素会独占一行，多个block元素会各自新起一行。默认情况下，block元素宽度自动填满其父元素宽度。
				- block元素可以设置width,height属性。块级元素即使设置了宽度,仍然是独占一行。
				- block元素可以设置margin和padding属性。
			- display:inline
				- inline元素不会独占一行，多个相邻的行内元素会排列在同一行里，直到一行排列不下，才会新换一行，其宽度随元素的内容而变化。
				- inline元素设置width,height属性无效。
				- inline元素的margin和padding属性，水平方向的padding-left, padding-right, margin-left, margin-right都产生边距效果；但竖直方向的padding-top, padding-bottom, margin-top, margin-bottom不会产生边距效果。
			- display:inline-block
				- 简单来说就是将对象呈现为inline对象，但是对象的内容作为block对象呈现。之后的内联对象会被排列在同一行内。比如我们可以给一个link（a元素）inline-block属性值，使其既具有block的宽度高度特性又具有inline的同行特性。
		- 补充说明
			- 一般我们会用display:block，display:inline或者display:inline-block来调整元素的布局级别，其实display的参数远远不止这三种，仅仅是比较常用而已。
			- IE（低版本IE）本来是不支持inline-block的，所以在IE中对内联元素使用display:inline-block，理论上IE是不识别的，但使用display:inline-block在IE下会触发layout，从而使内联元素拥有了display:inline-block属性的表象。
- 确定元素的位置
	- static/relative/absolute/fixed

### 4-4 flexbox布局  ###
- 弹性盒子
- 盒子本来就是并列的
- 指定宽度即可

### 4-5 float布局 ###
- 元素“浮动”
- 脱离文档流
- 但不脱离文本流
#### float元素特性 ####
- 对自身的影响
	- 形成"块"(BFC)
	- 位置尽量靠上
	- 位置尽量靠左(右)
- 对兄弟的影响
	- 上面贴非float元素
	- 旁边贴float元素
	- 不影响其它块级元素位置
	- 影响其它块级元素内部文本
- 对父级元素的影响
	- 从布局上“消失”
	- 高度塌陷

### 4-6 inline-block布局 ###
#### inline-block ####
- 像文本一样排block元素
- 没有清除浮动等问题
- 需要处理间隙

### 4-7 响应式布局(1) ###
#### 响应式设计和布局 ####
- 在不同设备上正常使用
- 一般主要处理屏幕大小问题
- 主要方法：
	- 隐藏 + 拆行 + 自适应空间
	- rem / viewport / media query

### 4-8 响应式布局(2) ###

### 4-9 主流网站使用的布局方式 ###

### 4-10 CSS面试题 ###
#### CSS面试真题 ####
- 实现两栏(三栏)布局的方法
	- 表格布局
	- float + margin布局
	- inline-block布局
	- flexbox布局
- position:absolute/fixed有什么区别?
	- 前者相对于最近的absolute/relative
	- 后者相对于屏幕(viewport)
- display:inline-block的间隙
	- 原因：字符间距
	- 解决：消灭字符或者消灭间距
- 如何清除浮动
	- 让盒子负责自己的布局
	- overflow:hidden(auto)
	- ::after{clear:both}
- 如何适配移动端页面?
	- viewport
	- rem/viewport/media query
	- 设计上：隐藏 折行 自适应