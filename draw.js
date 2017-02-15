var c = document.getElementById("slate");
var ctx = c.getContext('2d');
ctx.beginPath()

function clear(e){
	var width = c.getAttribute("width")
	var height = c.getAttribute("height")
	var ctx = c.getContext('2d');
	ctx.clearRect(0,0,width,height); 
    firstPoint = true;
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

var firstPoint = true;

function makeCircle(x, y, r){

    //x -= c.offsetLeft;
  	//y -= c.offsetTop;
    
    if (firstPoint) {
      firstPoint=false;
    } else {
      ctx.lineTo(x, y);
    }

    ctx.moveTo(x + r,y);
    ctx.arc(x,y,r,0,2 * Math.PI);
    ctx.moveTo(x,y);
    ctx.fillStyle = "#ff0000";
    ctx.fill();
    ctx.stroke();
};
function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return [event.clientX - rect.left,event.clientY - rect.top]

};
c.addEventListener('click', function(e){
    var mousePos = getMousePos(c, e);
    makeCircle(mousePos[0], mousePos[1], 10);
                                        }, false);



/*
var c = document.getElementById("slate");
var ctx = c.getContext('2d');
ctx.beginPath();
//origin is in top left corner
ctx.moveTo(0,300);
ctx.lineTo(150,150);
ctx.lineTo(300,300);
ctx.stroke();


var b = document.getElementById("b");
b.addEventListener("click",clear)

*/


