const canvas = document.getElementById("scene");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
function drawSky() {
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

}
function drawSun() {
    ctx.beginPath();
    ctx.arc(canvas.width - 100, 100, 50, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();
}

function drawGrass() {
    ctx.fillStyle - "green";
    ctx.fillRect(0, canvas.height - 100, canvas.width, 100);
}

function drawCloud(x, y) {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2);
    ctx.arc(x + 40, y, 40, 0, Math.PI *2);
    ctx.arc(x + 80, y, 30, 0, Math.PI * 2);
    ctx.fill();
}

function drawBird(x, y) {
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.quadraticCurveTo(x + 10, y - 10, x + 20, y);
    ctx.quadraticCurveTo(x + 30, y - 10, x + 40, y);
    ctx.stroke();


}

let cloudX = 0, birdX = 0;
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSky();
    drawSun();
    drawGrass();
    drawCloud(cloudX, 100);
    drawCloud(cloudX + 300, 150);
    drawCloud(cloudX + 600, 120);
    cloudX += 1;
    if (cloudX > canvas.width) cloudX = 100;
    drawBird(birdX + 200);
    drawBird(birdX + 200, 220);
    birdX += 2;
    if (birdX > canvas.width) birdX = -50;
    requestAnimationFrame(animate);
    
}
animate();
    

