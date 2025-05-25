const canvas = document.getElementById("starCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
class Star {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2 + 1;
        this.velocityY = Math.random() * 2 + 1;
        this.color = "blue";
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();

    }
    
    update() {
        this.y += this.velocityY;
        if (this.y > canvas.height) {
            this.y = 0;
            this.x = Math.random() * canvas.width;

        }
    }
}

const stars = [];
for (let i = 0; i < 100; i++) {
    stars.push(new Star());

}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach((star) => {
        star.draw();
        star.update();

    });
    requestAnimationFrame(animate);
}
animate();