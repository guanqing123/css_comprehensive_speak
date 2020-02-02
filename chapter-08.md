## 第8章 Bootstrap ##

### 8-1 Bootstrap介绍 ###
#### Bootstrap 4 ####
- 兼容IE10+
- 使用flexbox布局
- 抛弃Nomalize.css
- 提供布局和reboot版本
#### Bootstrap ####
- 基础样式
- 常用组件
- JS插件

### 8-2 Bootstrap基本用法(1) ###
- bootstrap.css
	- 全模块
- bootstrap-grid.css
	- 网格
- bootstrap-reboot.css
	- 基本样式和reset样式

### 8-3 Bootstrap基本用法(2) ###
参考 chapter-08/1-basic.html

### 8-4 Bootstrap JS组件 ###
- 用于组件交互
	- dropdown (下拉)
	- modal (弹窗)
	- ...
- jQuery
- Popper.js
- bootstrap.js
- 使用方式：
	- 基于data-*属性
	- 基于JS API
#### 实例 ####
参考 chapter-08/1-js.html

### 8-5 Bootstrap 响应式布局 ###
![](https://github.com/guanqing123/css_comprehensive_speak/blob/master/chapter-08-01.png)
#### 示例 ####
参考 chapter-08/2-responsive.html

### 8-6 Bootstrap 定制化 ###
- 使用CSS同名类覆盖
	- 参考 chapter-08/3-custom.html
- 修改源码重新构建
	- 编译：
		- chapter-08\node_modules\.bin>node-sass --output-style expended ../../bootstrap-custom/scss/bootstrap.scss> ../../bootstrap-custom/dist/css/bootstrap.css
	- 参考 chapter-08/4-custom.html
- 引用scss源文件 修改变量(mixin方式)
	- custom.scss
		<pre>
		  $primary: orange;
		  @import './bootstrap-custom/scss/bootstrap';
		</pre>
	- 编译
		- node-sass ../../custom.scss > ../../custom.css
	- 实例
		- chapter-08/5-custom.html

### 8-7 CSS真题 ###
#### CSS面试真题 ####
- Bootstrap的优缺点
	- 优点：CSS代码结构合理 现成的样式可以直接用
	- 缺点：定制较为繁琐 体积大
- Bootstrap如何实现响应式布局
	- 原理：通过media query设置不同分辨率的class
	- 使用：为不同分辨率选择不同的网格class
- 如何基于Bootstrap定制自己的样式
	- 使用CSS同名类覆盖
	- 修改源码重新构建
	- 引用scss源文件 修改变量