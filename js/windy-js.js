const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
const particleCount = 100; // 设定粒子数量

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

    update(windAngle, windStrength) {
        // 将风的角度转换为弧度
        windAngle = windAngle * Math.PI / 180;

        // 基于风效应更新粒子位置
        const windX = Math.cos(windAngle) * windStrength;
        const windY = Math.sin(windAngle) * windStrength;
        this.x += (Math.cos(this.speed.angle * Math.PI / 180) * this.speed.magnitude) + windX;
        this.y += (Math.sin(this.speed.angle * Math.PI / 180) * this.speed.magnitude) + windY;

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

// 创建粒子
function init() {
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

// 循环动画
function windyanimate(windAngle, windStrength) {
    requestAnimationFrame(() => windyanimate(windAngle, windStrength));
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 通过更新粒子模拟风的效果
    particles.forEach(particle => {
        particle.update(windAngle, windStrength);
        particle.draw();
    });
}

init();