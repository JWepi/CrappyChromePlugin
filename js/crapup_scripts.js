
var mouseX, mouseY;
var allowcrap = true;


(function() {
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        var eventDoc, doc, body;

        event = event || window.event;

        if (event.pageX == null && event.clientX != null) {
			console.log("Jesus")
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;
			
            mouseX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            mouseY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }
    }
})();

function getAllElemPos(elem){
	
	console.log(elem);
	var rect = elem[0].getBoundingClientRect();
	
	console.log("will return :");
	console.log({left:rect.left,right:rect.right,top:rect.top,bottom:rect.bottom});
	return({left:rect.left,right:rect.right,top:rect.top,bottom:rect.bottom});
	
}

function makeElemEvade(elem){
	console.log("mouse is on X="+mouseX+" and Y="+mouseY)
	var elemPos = getAllElemPos(elem);
	
	var toLeft = (mouseX < elemPos.left + ((elemPos.right - elemPos.left) / 2));
	var toTop = (mouseY < elemPos.top + ((elemPos.bottom - elemPos.top) / 2));
	
	var movingleft = (toLeft?"+":"-")+"="+(toLeft?mouseX-elemPos.left+1:elemPos.right-mouseX-1);
	var movingtop = (toTop?"+":"-")+"="+(toTop?mouseY-elemPos.top+1:elemPos.bottom-mouseY-1);
	
	console.log("going to moveleft " + movingleft + " and movetop " + movingtop);
	
	elem.animate({
		left: movingleft,
		top: movingtop,
		height: "toggle"
	}, 5000, function() {
		console.log("I moved toward " + (toTop ? "bottom" : "top") + (toLeft ? "right" : "left"))
	});
}

function makeElemEvade2(elem){
	if (allowcrap){
		var ranpix1 = Math.floor((Math.random() * 100) + 50);
		var ranpix2 = Math.floor((Math.random() * 100) + 50);
		
		var movingleft = Math.floor(Math.random() * 2) == 1;
		var movingtop = Math.floor(Math.random() * 2) == 1;
		
		if (movingleft)
			movingleft = "-=" + ranpix1 + "px";
		else
			movingleft = "+=" + ranpix1 + "px";
		
		if (movingtop)
			movingtop = "-=" + ranpix2 + "px";
		else
			movingtop = "+=" + ranpix2 + "px";
		
		if (elem.left < 0)
			movingleft 
			
		elem.animate({
			left: movingleft,
			top: movingtop
		}, 500, function() {
			console.log("You can't catch me hehehehehehe !!");
		});
	}
}

setTimeout(function(){
	$("div").hover(function(){
		//makeElemEvade2($(this))
	});
}, 500);