function clear(e){
	var c = document.getElementById("slate");
	var width = c.getAttribute("width")
	var height = c.getAttribute("height")
	var ctx = c.getContext('2d');
	ctx.clearRect(0,0,width,height); 
}

function draw(e){
	var c = document.getElementById("slate");
	var ctx = c.getContext('2d');

  	var x = event.x - c.offsetLeft;
  	var y = event.y - c.offsetTop;

	ctx.fillStyle = "#ff0000";
	ctx.fillRect(x-25,y-35,50,70);
}


var b = document.getElementById("b");
b.addEventListener("click",clear)

var c = document.getElementById("slate");
c.addEventListener("click",draw)



