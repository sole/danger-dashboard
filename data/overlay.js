// This script will be run each time a page is loaded

var div = document.createElement('div');
div.innerHTML = 'danger dashboard';
div.id = 'danger-dashboard';

document.body.appendChild(div);

// what IS available?
var feats = [];

var regEl = !!document.registerElement;
feats.push('document.registerElement ? ' + ( regEl ? 'yes' : 'no' ));

div.innerHTML = feats.join(' / ');
