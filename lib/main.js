var data = require('sdk/self').data;
var pageMod = require('sdk/page-mod');
var self = require('sdk/self');
var preferences = require('sdk/preferences/service');
var WC_PREF = 'dom.webcomponents.enabled';

pageMod.PageMod({
	include: '*',
	contentScriptFile: [
		self.data.url('WebComponentsSupport.js'),
		self.data.url('overlay.js')
	],
	contentStyleFile: self.data.url('style.css'),
	onAttach: startListening
});


function startListening(worker) {
	var port = worker.port;
	
	port.on('setWCEnabled', function(value) {
		preferences.set(WC_PREF, value);
		updateWCEnabled(port, value);
	});

	port.on('getWCEnabled', function() {
		updateWCEnabled(port, preferences.get(WC_PREF, false));
	});
}

function updateWCEnabled(port, enabled) {
	port.emit('updateWCEnabled', enabled);
}
