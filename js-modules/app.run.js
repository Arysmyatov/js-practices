(function(){
	App.modules.run = function (box) {
	    box.slowRunning = function (e) { 
	    	document.write("slow running for " + e + " <br/>"); 
		}
	    box.fastRunning = function (elem, event) { 
	    	document.write("fast running " + e + " <br/>"); 
	    }
	}
})()