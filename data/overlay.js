// This script will be run each time a page is loaded

var div = document.createElement('div');
div.innerHTML = 'danger dashboard';
div.id = 'danger-dashboard';

document.body.appendChild(div);

// what IS available?
// custom elements (document.registerElement)
// html imports (link rel=import)
// shadow dom (document.createShadowRoot)
// HTML templates
// color code: orange = polyfilled, red = no, green = native (also add some pattern / letter for colorblind devs!)
WebComponentsSupport(function(results) {

	var feats = [];
	var keys = Object.keys(results);
	keys.forEach(function(k) {
		var v = results[k];
		var availability = v.available ? 'Y' : 'N';
		var nativeness = '';
		if(v.available) {
			if(v.implementation === 'native') {
				nativeness = 'N';
			} else {
				nativeness = 'P';
			}
			nativeness = ' (' + nativeness + ')';
		}
		feats.push(k + ': ' + availability + nativeness );
	});

	div.innerHTML = feats.join(' / ');

});

