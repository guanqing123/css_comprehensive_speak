## 第2章 HTML基础强化 ##

### 2-1 HTML常见元素和理解(1) ###
#### 前端三大件 ####
- HTML 结构
	- HTML常见元素和理解
	- HTML版本
	- HTML元素分类
	- HTML元素嵌套关系
	- HTML元素默认样式和定制化
	- HTML面试真题解答
- CSS 样式
- JavaScript 行为
#### HTML常见元素 ####
- head
	- meta
		- `<meta charset="utf-8">`
		- `<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">`
	- title
	- style
	- link
	- script
	- base
		- `<base href="/">`
- body
	- div/section/article/aside/header/footer
	- p
	- span/em/strong
	- table/thead/tbody/tr/td
	- ul/ol/li/dl/dt/dd
	- a
	- form/input/select/textarea/button
#### HTML重要属性 ####
- a[href,target]
- img[src,alt]
- table td[colspan,rowspan]
- form[target,method,enctype]
- input[type,value]
- button[type]
- select>option[value]
- label[for]

### 2-2 HTML常见元素和理解(2) ###
详见 chapter-02/chapter-02-01.html

### 2-3 HTML常见元素和理解(3) ###
#### 如何理解HTML ####
- HTML“文档”
- 描述文档的“结构”
- 有区块和大纲
<pre>
&lt;section&gt;
    &lt;h1&gt;Forest elephants&lt;/h1&gt;

&lt;section&gt;
    &lt;h1&gt;Introduction&lt;/h1&gt;
    &lt;p&gt;In this section, we discuss the lesser known forest elephants.&lt;/p&gt;
&lt;/section&gt;

&lt;section&gt;
    &lt;h1&gt;Habitat&lt;/h1&gt;
    &lt;p&gt;Forest elephants do not live in trees but among them.&lt;/p&gt;
&lt;/section&gt;

&lt;aside&gt;
    &lt;p&gt;advertising block&lt;/p&gt;
&lt;/aside&gt;
&lt;/section&gt;

&lt;footer&gt;
    &lt;p&gt;(c) 2010 The Example company&lt;/p&gt;
&lt;/footer&gt;
</pre>
1. Forest elephants
	1. Introduction
	2. Habitat
	3. Section(aside)
- 工具http://h5o.github.io/
	- HTML5 Outliner

### 2-4 HTML版本 ###
- HTML4/4.01(SGML)
- XHTML(XML)
- HTML5

<table>
   <tr>
        <th width=33% bgcolor=rgb(0,180,255)>HTML4</th>
        <th width=33% bgcolor=rgb(0,180,255)>XHTML</th>
        <th width=33% bgcolor=rgb(0,180,255)>HTML5</th>
   </tr>
   <tr>
        <td >标签允许不结束 </td>
        <td >标签必须结束</td>
        <td >标签允许不结束</td>
   </tr>
   <tr>
        <td>属性不带引号</td>
        <td>属性必须带引号</td>
        <td>属性不用带引号</td>
   </tr>
   <tr>
        <td>标签属性可大写</td>
        <td>标签属性必须小写</td>
        <td>标签属性可大写</td>
   </tr>
   <tr>
        <td>Boolean属性可省略值</td>
        <td>Boolean属性必须写值</td>
        <td>Boolean属性可省略值</td>
   </tr>
</table>

- XHTML
	- 详见 chapter-02-03.xhtml
- HTML5
	- 详见 chapter-02-04.html

#### HTML5新增内容 ####
- 新区块标签
	- section
	- article
	- nav
	- aside
- 表单增强
	- 日期、时间、搜索
	- 表单验证
	- Placeholder 自动聚焦
#### HTML5新增语义 ####
- header / footer 头尾
- section / article 区域
- nav 导航
- aside 不重要内容
- em / strong 强调
- i icon

### 2-5 元素分类 ###
#### HTML元素分类 ####
- 按默认样式分
	- 块级 block
	- 行内 inline
	- inline-block
- 按内容分
	![](https://github.com/guanqing123/css_comprehensive_speak/blob/master/chapter-02-01.png)