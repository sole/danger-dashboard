// This script will be run each time a page is loaded

var div = document.createElement('div');
div.id = 'danger-dashboard';
div.innerHTML = '';

document.body.appendChild(div);

// Using unsafeWindow because otherwise we'll be inspecting *our*
// own add-on context window which is not actually the one web code
// runs on
// See https://developer.mozilla.org/Add-ons/SDK/Guides/Content_Scripts/Interacting_with_page_scripts#Access_objects_defined_by_page_scripts
WebComponentsSupport(unsafeWindow, displayResults);

function displayResults(results) {
	
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
}

