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
