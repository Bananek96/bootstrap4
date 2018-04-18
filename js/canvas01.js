/* jshint esversion: 6 */
const canvasElem = document.getElementById('canvas');
const ctx = canvasElem.getContext('2d');

ctx.fillRect(25, 25, 100, 100);

ctx.clearRect(45, 45, 60, 60);

for(i = 0; i<10; i++){
ctx.strokeRect(50 + i * 2, 50 + i * 2, 50 - i * 2, 50 - i * 2);
}

ctx.font = "italic bold 30px arial";
ctx.textBaseLine = "middle";
ctx.fillText("Witaj w Canvas", 5,145);

ctx.font = "italic bold 20px arial";
ctx.textBaseLine = "middle";
ctx.fillStyle = "#ff0000";
ctx.textALign = "center";
ctx.fillText("Wstawiamy XD", 70, 180);


ctx.fillStyle ="blue";
ctx.beginPath();
ctx.arc(150, 150, 50, 0, 2*Math.PI);
ctx.fill();
ctx.strokeStyle = "#ffffff";
ctx.arc(150, 150, 40, 0, 1.5*Math.PI);
ctx.stroke();
