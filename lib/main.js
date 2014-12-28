var data = require('sdk/self').data;
var pageMod = require('sdk/page-mod');
var self = require('sdk/self');

pageMod.PageMod({
	include: '*',
	contentScriptFile: [
		self.data.url('WebComponentsSupport.js'),
		self.data.url('overlay.js')
	],
	contentStyleFile: self.data.url('style.css')
});
