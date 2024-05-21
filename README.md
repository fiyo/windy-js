# Windy-js 风效果模拟


<p style="text-align: center">
  <a href="https://choosealicense.com/licenses/mit">
		<img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License">
	</a>
</p>

模拟天气预报中风的效果功能，可以根据风的方向、风力改变粒子的运动方向和速度。

## 使用方法
具体可参照 ```index.html``` 页面。

### 1、定义画布

```html
<canvas id="canvas"></canvas>
```

### 2、引用脚本

```html
<script src="js/windy-js.js"></script>
```
### 3、使用
```js
// 测试，更改这些值以调整风向和强度

const windAngle = 180; // windAngle变量：风向角（以度为单位）（0表示右侧，90表示下方，180表示左侧，270表示上方）
const windStrength = 10.5; // windStrength变量：风力大小，更改此值以调整风力

windyanimate(windAngle, windStrength);// 调用粒子动画方法
```

可以根据天气预报接口，动态改变 ```windyanimate(windAngle, windStrength)```方法的参数，模拟真实风场效果。


## 贡献指南

欢迎各种形式贡献，不仅以代码的形式，还包含：

- 错误报告
- 文件


## 关于我

Windy-js 是开源和免费的。如果对您有用，就亮个小星星支持一下吧。

**作者：Yunjie Ge**



