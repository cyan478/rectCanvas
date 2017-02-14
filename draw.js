function clear(e){
	var c = document.getElementById("slate");
	var width = c.getAttribute("width")
	var height = c.getAttribute("height")
	var ctx = c.getContext('2d');
	ctx.clearRect(0,0,width,height); 
}

/* RECT */
function drawRect(e){
	var c = document.getElementById("slate");
	var ctx = c.getContext('2d');

  	var x = event.x - c.offsetLeft;
  	var y = event.y - c.offsetTop;

	ctx.fillStyle = "#ff0000";
	ctx.fillRect(x-25,y-35,50,70);
}


/* CONNECT THE DOTS */
function drawDots(e){
	var c = document.getElementById("slate");
	var ctx = c.getContext('2d');

  	var x = event.x - c.offsetLeft;
  	var y = event.y - c.offsetTop;
	//ctx.beginPath();
	ctx.fillStyle = "red";
	ctx.arc(x,y,10,0,2*Math.PI);
	ctx.fill();

	ctx.stroke();
	//ctx.closePath();
	//ctx.stroke();
	ctx.moveTo(x,y)


}

/*
var c = document.getElementById("slate");
var ctx = c.getContext('2d');
ctx.beginPath();
//origin is in top left corner
ctx.moveTo(0,300);
ctx.lineTo(150,150);
ctx.lineTo(300,300);
ctx.stroke();

- arcTo( centerX , centerY , radius , startAngle , endAngle )
  - ex: arcTo(250,150,50,0,2*Math.PI);
- arc( centerX , centerY , radius , startAngle , endAngle )
  - draws line/radius to startAngle
*/


var b = document.getElementById("b");
b.addEventListener("click",clear)

var c = document.getElementById("slate");
c.addEventListener("click",drawDots) //draw function



