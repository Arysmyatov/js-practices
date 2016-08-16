(function(){
	App.modules.walk = function (box) {
	    box.simpleWalk = function (e) { 
	    	document.write("Just simple walk for " + e + " <br/>"); 
	    }
	    box.straddle = function (e) { 
	    	document.write("walk stradle for" + e + " <br/>"); 
	    }
	}
})()