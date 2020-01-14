## 第6章 CSS动画 ##

### 6-1 动画介绍 ###
#### CSS动画 ####
- 动画原理
	- 视觉暂留作用
	- 画面逐渐变化
#### 动画的作用 ####
- 愉悦感
- 引起注意
- 掩饰
#### CSS中的动画类型 ####
- transition补间动画
- keyframe关键帧动画
- 逐帧动画

### 6-2 transition动画(1) ###
#### 补间动画 ####
- 位置 - 平移
	- (left/right/margin/transform)
- 方位 - 旋转(transform)
- 大小 - 缩放(transform)
- 透明度(opacity)
- 其它 - 线性变换(transform)
#### timing(easing) ####
- 定义动画进度和时间的关系

### 6-3 transition动画(2) ###
- transition-timing-function
	-  https://matthewlein.com/tools/ceaser
	-  cubic-bezier(0.815, -0.600, 0.000, 1.535)

### 6-4 关键帧动画 ###
- A -> B -> C
	- 相当于多个补间动画
	- 与元素状态的变化无关
	- 定义更加灵活

### 6-5 逐帧动画 ###
#### 逐帧动画 ####
- A -> B -> C
	- 适用于无法补间计算的动画
	- 资源较大
	- 使用steps()

### 6-6 CSS面试真题 ###
- CSS动画的实现方式有几种
	- transition
	- keyframes(animation)
- 过渡动画和关键帧动画的区别
	- 过渡动画需要有状态变化
	- 关键帧动画不需要状态变化
	- 关键帧动画能控制更精细
- 如何实现逐帧动画
	- 使用关键帧动画
	- 去掉补间(steps)
- CSS动画的性能
	- 性能不坏
	- 部分情况下优于JS
	- 但JS可以做到更好
	- 部分高危属性
		- box-shadow等