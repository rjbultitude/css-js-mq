if (typeof console._commandLineAPI !== 'undefined') {
    console.API = console._commandLineAPI;
} 
else if (typeof console._inspectorCommandLineAPI !== 'undefined') {
    console.API = console._inspectorCommandLineAPI;
} 
else if (typeof console.clear !== 'undefined') {
    console.API = console;
}


function getBreakPoint() {
    return window.getComputedStyle(document.body, ':after').getPropertyValue('content').replace(/['"]+/g, '');
}

function checkBp(currentBreakPoint) {
	if (currentBreakPoint === 'super-wide') {
  		console.API.clear();
      console.log('do something with super wide');
    }
    else if (currentBreakPoint === 'wide') {
  		console.API.clear();
      console.log('do something with wide');
    }
    else if (currentBreakPoint === 'medium') {
    	console.API.clear();
      console.log('do something with medium');
    }
    else if (currentBreakPoint === 'narrow') {
    	console.API.clear();
      console.log('do something with narrow');
    }
    else {
    		console.API.clear();
        console.log('do something at all other breakpoints');
    }
}

//call immediately. could be in document.onload
checkBp(getBreakPoint());

//call onresize
window.addEventListener('resize', function() {
  checkBp(getBreakPoint());
});