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
console.log('listening');
	/*port.on('setWCEnabled', function(value) {
		preferences.set(WC_PREF, value);
	});*/

	port.on('getWCEnabled', function() {
		console.log('asked about it');
		updateWCEnabled(port, preferences.get(WC_PREF, false));
	});

}

function updateWCEnabled(port, enabled) {
	port.emit('updateWCEnabled', enabled);
}
