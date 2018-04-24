/* jshint esversion: 6 */

//Draw on the Canvas With JavaScript:

//Find the Canvas Element
var canvas = document.getElementById("myCanvas");
//Create a Drawing Object
var ctx = canvas.getContext("2d");
//Draw on the Canvas
ctx.fillStyle = "#FF0000";
ctx.fillRect(0,0,150,75);

//Canvas Coordinates:

//Draw a Line
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();

//Draw a Circle
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();

//Canvas - Gradients:

//Using createLinearGradient()
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
// Create gradient
var grd=ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");
// Fill with gradient
ctx.fillStyle=grd;
ctx.fillRect(10,10,150,80);

//Using createRadialGradient():
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
// Create gradient
var grd=ctx.createRadialGradient(75,50,5,90,60,100);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");
// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);

//HTML Canvas Text:

//Using fillText()
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Hello World",10,50);

//Using strokeText()
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
ctx.strokeText("Hello World",10,50);

//Add Color and Center Text
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.font = "30px Comic Sans MS";
ctx.fillStyle = "red";
ctx.textAlign = "center";
ctx.fillText("Hello World", canvas.width/2, canvas.height/2);

//HTML Canvas Images

window.onload = function() {
   var canvas = document.getElementById("myCanvas");
   var ctx = canvas.getContext("2d");
   var img = document.getElementById("scream");
   ctx.drawImage(img, 10, 10);
};

//HTML Canvas Reference
// https://www.w3schools.com/graphics/canvas_reference.asp
