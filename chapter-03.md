## 第3章 CSS基础 ##

### 3-1 选择器(1) ###
#### CSS基础 ####
- Cascading Style Sheet
- 层叠样式表
#### 基本规则 ####
<pre>
选择器{
  属性：值；
  属性：值
}
</pre>
- 选择器
	- 用于匹配HTML元素
	- 有不同的匹配规则
	- 多个选择器可叠加
#### 选择器 ####
- 用于匹配HTML元素
- 分类和权重
- 解析方式和性能
- 值得关注的选择器
#### 选择器分类 ####
- 元素选择器 a{}
- 伪元素选择器 ::before{}
- 类选择器 .link{}
- 属性选择器 [type=radio]{}
- 伪类选择器 :hover{}
- ID选择器 #id{}
- 组合选择器 [type=checkbox] + label{}
- 否定选择器 :not(.link){}
- 通用选择器 *{}
#### 选择器权重 ####
- ID选择器 #id{} +100
- 类 属性 伪类 +10
- 元素 伪元素 +1
- 其他选择器 +0
#### 计算一个不进位的数字 ####
- `#`id .link a[href]
	- #id + 100
	- .link +10
	- a +1
	- [href] +0
	- 结果：111
- `#`id .link.active
	- #id + 100
	- .link +10
	- .active +10
	- 结果：120

### 3-2 选择器(2) ###
#### 选择器权重 ####
- !important 优先级最高
- 元素属性 优先级高(写在元素style上的样式)
- 相同权重 后写的生效

### 3-3 非布局样式(字体) ###
- 字体、字重、颜色、大小、行高
- 背景、边框
- 滚动、换行
- 粗体、斜体、下划线
- 其他
#### 字体 ####
- 字体族
	- serif sans-serif monospace cursive fantasy
- 多字体fallback
- 网络字体、自定义字体
- iconfont 
	- https://www.iconfont.cn/
- demo
	- chapter-03-03.html
	
### 3-4 非布局样式(行高) ###
- 行高的构成
- 行高相关的现象和方案
- 行高的调整

#### 排版 ####
- 底线
- 顶线
- 基线 默认对齐方式

#### 图片间隙问题 ####
<pre>
&lt;div style="background:red"&gt;
    &lt;span&gt;文字&lt;/span&gt;
    &lt;img src="test.png"/&gt;
&lt;/div&gt;
</pre>
<pre>
图片与底线之间有空隙,啥原因造成的。
原因：img相当于inline的元素,inline的元素就要遵守行高的构成.他会按照baseline对齐.基线与底线之间是有一段间隙的.
缝隙大小视字体大小而定,如果字体大小是 12px;那么缝隙大小就在 3px左右,这就是经典的 “图片3px缝隙问题”
解决方法一：vertical-align:bottom;按底线对齐
方法二：display:block;
</pre>

### 3-5 非布局样式(背景) ###
#### 背景 ####
- 背景颜色
- 渐变色背景
- 多背景叠加
- 背景图片和属性(雪碧图)
- base64和性能优化
- 多分辨率适配

### 3-6 非布局样式(边框)###
#### 边框 ####
- 边框的属性：线型 大小 颜色
- 边框背景图
- 边框衔接 (三角形)
	- `<div class="c3"></div>`
	- <pre>.c3{
            width:0px;
            height: 200px;
            border-bottom:30px solid red;
            border-left:30px solid transparent;
            border-right:30px solid transparent;
        }</pre>

### 3-7 非布局样式(滚动) ###
#### 滚动 ####
- 滚动行为和滚动条
- ![](https://github.com/guanqing123/css_comprehensive_speak/blob/master/chapter-03-01.png)

### 3-8 非布局样式(文本折行) ###
#### 文字折行 ####
- overflow-wrap(word-wrap) 通用换行控制
	- 是否保留单词
- word-break 针对多字节文字
	- 中文句子也是单词
- white-space 空白处是否断行
	- 如何让一个很长的文本不换行 white-space: nowrap;

### 3-9 非布局样式(装饰性属性及其它) ###
#### 装饰性属性及其它 ####
- 字重(粗体) font-weight
- 斜体 font-style:itatic
- 下划线 text-decoration
- 指针 cursor

### 3-10 hack和案例一 ###
#### CSS Hack ####
- Hack即不合法但生效的写法
- 主要用于区分不同浏览器
- 缺点：难理解 难维护 易失效
- 替代方案：特性检测
- 替代方案：针对性加class
- <pre>body{
		width:200px;
		width:180px\9;
	}</pre>

### 3-11 hack和案例二 ###
#### 案例 - checkbox ####
- chapter-03>13-checkbox.html
#### 案例 - tabs ####
#### 案例 - tree ####
- [css tree](https://www.thecssninja.com/demo/css_tree/#)

### 3-12 面试题(1) ###
#### CSS面试真题 ####
- 1.CSS样式(选择器)的优先级
	- 计算权重确定
	- !important
	- 内联样式
	- 后写的优先级高
- 2.雪碧图的作用
	- 减少HTTP请求数 提高加载性能
	- 有一些情况下可以减少图片大小
- 3.自定义字体的使用场景
	- 宣传/品牌/banner等固定文案
	- 字体图标

### 3-13 面试题(2) ###
#### CSS面试题 ####
- 4.base64的使用
	- 用于减少HTTP请求
	- 适用于小图片
	- base64的体积约为原图4/3
- 5.伪类和伪元素的区别?
	- 伪类表状态
	- 伪元素是真的有元素
	- 前者单冒号，后者双冒号
- 6.如何美化checkbox
	- label[for]和id
	- 隐藏原生input
	- :checked + label