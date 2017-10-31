### 页面构成  ###

#### stage 舞台 ####
1. `body` 渐变背景图，构成星空的深色背景
2. 星空漂浮移动的星星点点，是一张背景图，使用`moving` `animation` 
3. 冰山，由3张冰山图片构成，根据冰山高度依次向后层叠布局，最终呈现出层次的感觉,冰山先放大后缩小，给人从近处移动到远处的体验
4. 极光，外层容器（固定宽度 高度，`em` 单位），内部有14张极光背景图，通过设置每一张图片的`aurora` `animation`
5. e, 是一张立体静态图片，旁边纸屑是一张透明图，纸屑分散在透明图上，静态显示；有转动的纸屑，每张纸屑一张背景图，绝对定位，`animation` 转动。moon转动轨道是一张静态图
6. 熊，


[参考](http://www.w3cplus.com/css3/css3-3d-transform.html)

#### CSS3 3D位移（translateZ() 和 translate3d()） ####


    transform: rotate | scale | skew | translate |matrix;
    
    translate3d(tx,ty,tz) 

使一个元素在三维空间移动，使用三维向量的坐标定义元素在每个方向移动多少。

1. `tx`：代表横向坐标位移向量的长度；
2. `ty`：代表纵向坐标位移向量的长度；
3. `tz`：代表Z轴位移向量的长度。此值不能是一个百分比值，如果取值为百分比值，将会认为无效值。

当 `z` 轴值越大时，元素也离观看者更近，从视觉上元素就变得更大；反之其值越小时，元素也离观看者更远，从视觉上元素就变得更小。

    translateZ(t)

1. `t`：指的是 `Z` 轴的向量位移长度。(200px/-200px)

`translateZ()` 函数仅让元素在Z轴进行位移，当其值越大时，元素离观看者越近，视觉上元素放大，反之元素缩小。

`translateZ()` 函数在实际使用中等同于 `translate3d(0,0,tz)`。

#### animation ####

    animation: name duration timing-function delay iteration-count direction;
    animation-name: 规定需要绑定到选择器的 keyframe 名称。。
    animation-duration: 规定完成动画所花费的时间，以秒或毫秒计。
    animation-timing-function:  规定动画的速度曲线。(2s/linear/ease/ease-in/ease-out/ease-in-out/cubic-bezier(n,n,n,n))
    animation-delay:  规定在动画开始之前的延迟。
    animation-iteration-count: 规定动画应该播放的次数。
    animation-direction: 规定是否应该轮流反向播放动画。
    animation-fill-mode: 属性规定动画在播放之前或之后，其动画效果是否可见。
	animation-play-state: 规定动画正在运行还是暂停。 paused|running;
    
	animation-fill-mode: none|forwards|backwards|both;
	none: 不改变默认行为。
	forwards: 当动画完成后，保持最后一个属性值（在最后一个关键帧中定义）。
	backwards: 在 animation-delay 所指定的一段时间内，在动画显示之前，应用开始属性值（在第一个关键帧中定义）。
	both: 向前和向后填充模式都被应用。

#### perspective ####

设置元素被查看位置的视图

当为元素定义 perspective 属性时，其子元素会获得透视效果，而不是元素本身。

存在与否决定了你所看到的是2次元的还是3次元的，也就是是2D transform还是3D transform. 


#### transform-style: flat|preserve-3d; ####

	flat	子元素将不保留其 3D 位置。
	preserve-3d	子元素将保留其 3D 位置。
	
	Firefox 支持 transform-style 属性。 IE不支持
    Chrome、Safari 和 Opera 支持替代的 -webkit-transform-style 属性。


	
	


