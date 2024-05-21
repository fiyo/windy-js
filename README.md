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

### 2、定义粒子脚本

```js
<script>
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
​
    let particles = [];
    const particleCount = 100; // 设定粒子数量
​
    // 定义粒子类
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.radius =  1;
            this.color = 'blue'; // 粒子的颜色，这里用了蓝色，如果页面景为深色，此处可以改为白色（white）粒子
            this.speed = {
                magnitude:  1, // 粒子运动速度
                angle:  360 // 粒子运动角度
            };
        }
​
        update(windAngle, windStrength) {
            // 将风的角度转换为弧度
            windAngle = windAngle * Math.PI / 180;
​
            // 基于风效应更新粒子位置
            const windX = Math.cos(windAngle) * windStrength;
            const windY = Math.sin(windAngle) * windStrength;
            this.x += (Math.cos(this.speed.angle * Math.PI / 180) * this.speed.magnitude) + windX;
            this.y += (Math.sin(this.speed.angle * Math.PI / 180) * this.speed.magnitude) + windY;
​
            // 判断是否到达边缘，并重置粒子位置
            if (this.x < 0) {
                this.x = canvas.width;
            }
            if (this.x > canvas.width) {
                this.x = 0;
            }
            if (this.y < 0) {
                this.y = canvas.height;
            }
            if (this.y > canvas.height) {
                this.y = 0;
            }
        }
        // 绘制粒子的方法
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }
​
    // 创建粒子
    function init() {
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }
​
    // 循环动画
    function windyanimate(windAngle, windStrength) {
        requestAnimationFrame(() => windyanimate(windAngle, windStrength));
        ctx.clearRect(0, 0, canvas.width, canvas.height);
​
        // 通过更新粒子模拟风的效果
        particles.forEach(particle => {
            particle.update(windAngle, windStrength);
            particle.draw();
        });
    }
​
    init();

</script>
```
### 3、绘制粒子
```js
    // 测试，更改这些值以调整风向和强度

    const windAngle = 180; // windAngle变量：风向角（以度为单位）（0表示右侧，90表示下方，180表示左侧，270表示上方）

    const windStrength = 10.5; // windStrength变量：风力大小，更改此值以调整风力
    //调用粒子动画方法
    windyanimate(windAngle, windStrength);
```

可以根据天气预报接口，动态改变 ```windyanimate(windAngle, windStrength)```方法的参数，模拟真实风场效果。


## 贡献指南

欢迎各种形式贡献，不仅以代码的形式，还包含：

- 错误报告
- 文件


## 关于我

Windy-js 是开源和免费的。

**作者：Yunjie Ge**



