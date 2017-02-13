function clear(e){
	var c = document.getElementById("slate");
	var ctx = c.getContext('2d');
	ctx.clearRect(0,0,500,500); 
}

b.addEventListener("click",clear)

function draw(e){
	var c = document.getElementById("slate");
	var ctx = c.getContext('2d');
	ctx.fillStyle = "#ff0000";
	ctx.fillRect(50,50,100,200);
}

var c = document.getElementById("slate");
var ctx = c.getContext('2d');
ctx.fillStyle = "#ff0000";
ctx.fillRect(50,50,100,200);




function clear(e){
	ctx.clearRect(0,0,500,500); 
}

