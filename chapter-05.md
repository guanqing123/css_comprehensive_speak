## 第5章 CSS效果 ##

### 5-1 box-shadow ###
#### 效果属性 ####
- "这个效果怎么实现?"
	- CSS最出彩的一部分
- box-shadow
- text-shadow
- border-radius
- background
- clip-path
#### box-shadow ####
![](https://github.com/guanqing123/css_comprehensive_speak/blob/master/chapter-05-01.png)
- 营造层次感(立体感)
- 充当没有宽度的边框
- 特殊效果

### 5-2 text-shadow ###
#### text-shadow ####
- 立体感
- 印刷品质感

### 5-3 border-radius ###
#### border-radius ####
- 圆角矩形
- 圆形
- 半圆/扇形
- 一些奇怪的角角

### 5-4 background ###
#### background ####
- 纹理、图案
- 渐变
- 雪碧图动画
- 背景图尺寸适应

### 5-5 clip-path ###
#### clip-path ####
- 对容器进行裁剪
- 常见几何图形
- 自定义路径

### 5-6 3D-transform ###
#### 3D变换 ####
- 变换 transform
- 在3D空间中进行变换

### 5-7 CSS面试真题 ###
- 如何用一个div画XXX
	- box-shadow无限投影
	- ::before
	- ::after
- 如何产生不占空间的边框
	- box-shadow
	- outline
- 如何实现圆形元素(头像)
	- border-radius: 50%
- 如何实现IOS图标的圆角
	- clip-path:(svg)
- 如何实现半圆、扇形等图形
	- border-radius组合：
	- 有无边框
	- 边框粗细
	- 圆角半径
- 如何实现背景图居中显示/不重复/改变大小
	- background-position
	- background-repeat
	- background-size(cover/contain)
- 如何平移/放大一个元素
	- transform:translateX(100px)
	- transform:scale(2)
- 如何实现3D效果
	- perspective: 500px
	- transform-style: preserve-3d;
	- transform: translate rotate ...