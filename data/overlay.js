// This script will be run each time a page is loaded

var div = document.createElement('div');
div.id = 'danger-dashboard';

document.body.appendChild(div);

WebComponentsSupport(function(results) {

	var list = document.createElement('ul');
	var keys = Object.keys(results);
	keys.forEach(function(k) {
		var li = document.createElement('li');
		var v = results[k];
		
		var nativeness = '';
		if(v.available) {
			if(v.implementation === 'native') {
				li.classList.add('native');
			} else {
				li.classList.add('polyfill');
			}
		} else {
			li.classList.add('unsupported');
		}

		li.innerHTML = k;
		list.appendChild(li);
	});

	div.appendChild(list);

});

