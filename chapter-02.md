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
	- ![](https://github.com/guanqing123/css_comprehensive_speak/blob/master/chapter-02-01.png)
	- Metadata（元数据元素）
		- 顾名思义，Metadata元素意指那些定义文档元数据信息的元素 — 其作用包括：影响文档中其它节点的展现与行为、定义文档与其它外部资源之间的关系等。以下元素属于Metadata：
		- base, link, meta, noscript, script, style, template, title
	- Flow（流式元素）
		- 所有可以放在body标签内，构成文档内容的元素均属于Flow元素。因此，除了base, link, meta, style, title等只能放在head标签内的元素外，剩下的所有元素均属于Flow元素。
		- a， abbr， address， area（如果它是map元素的后裔）， article， aside， audio， b， bdi， bdo， blockquote， br， button， canvas， cite， code， command， datalist， del， details， dfn， div， dl，em， embed， fieldset， figure， footer， form， h1， h2， h3， h4， h5， h6， header， hgroup， hr， i， iframe， img， input， ins， kbd， keygen， label， map， mark， math， menu， meter，nav， noscript， object， ol， output， p， pre， progress， q， ruby， s， samp， script， section， select， small， span， strong， style（如果该元素设置了scoped属性）， sub， sup， svg， table，textarea， time， u， ul， var， video， wbr， text
	- Sectioning（章节元素）
		- Sectioning意指定义页面结构的元素，具体包含以下四个：
		- article, aside, nav, section
	- Heading（标题元素）
		- 所有标题元素属于Heading，也即以下6个元素：
		- h1, h2, h3, h4, h5, h6
	- Phrasing（段落元素）
		- 所有可以放在p标签内，构成段落内容的元素均属于Phrasing元素。因此，所有Phrasing元素均属于Flow元素。在HTML5标准文档中，关于Phrasing元素的原始定义为：<br/>
		Phrasing content is the text of the document, as well as elements that mark up that text at the intra-paragraph level. Runs of phrasing content form paragraphs.<br/>
		对于这一定义，个人认为不应当使用“text”这一容易引起误解的词，事实上，一个元素即使不是文本，只要能包含在p标签中成为段落内容的一部分，就可以称之为Phrasing元素。
		- a（如果其只包含段落式元素）， abbr， area（如果它是map元素的后裔）， audio， b， bdi， bdo， br， button， canvas， cite， code， command， datalist， del（如果其只包含段落式元素）， dfn， em， embed， i，iframe， img， input， ins（如果其只包含段落式元素）， kbd， keygen， label， map（如果其只包含段落式元素）， mark， math， meter， noscript， object， output， progress， q， ruby， s， samp， script，select， small， span， strong， sub， sup， svg， textarea， time， u， var， video， wbr， text
		- 一个不太精确的类比是：HTML5中的Phrasing元素大致就是HTML4中所定义的inline元素。
		- Phrasing元素内部一般只能包含别的Phrasing元素。
		- 关于Phrasing元素，Stackoverflow上有一个比较精彩的问答，可供参考： http://stackoverflow.com/questions/30233447/what-is-the-difference-between-phrasing-content-and-flow-content
	- Embedded（嵌入元素）
		- 所有用于在网页中嵌入外部资源的元素均属于Embedded元素，具体包含以下9个：
		- audio, video, img, canvas, svg, iframe, embed, object, math
	- Interactive（交互元素）
		- 所有与用户交互有关的元素均属于Interactive元素。
		- a， audio（如果设置了controls属性）， button， details， embed， iframe， img（如果设置了usemap属性）， input（如果type属性不为hidden状态）， keygen， label， menu（如果type属性为toolbar状态），object（如果设置了usemap属性）， select， textarea， video（如果设置了controls属性）
	- Palpable
		- 所有应当拥有子元素的元素称之为Palpable元素。比如，br元素因不需要子元素，因此也就不属于Palpable。
	- Script-supporting
		- 自身不做任何页面展现，但与页面脚本相关的元素，具体包括2个：
		- script, template
 
### 2-6 嵌套关系 ###
#### HTML元素嵌套关系 ####
- 块级元素可以包含行内元素
- 块级元素不一定能包含块级元素
- 行内元素一般不能包含块级元素
- 但是......什么叫一般
- 为什么 a > div 是合法的?
