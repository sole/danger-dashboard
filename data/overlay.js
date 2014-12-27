// This script will be run each time a page is loaded

// Inspired by Dr. Jenn Schiffer
// https://twitter.com/jennschiffer/status/402822075317878784
var toTheFuckingMoon = '100000';

var div = document.createElement('div');
div.innerHTML = 'danger dashboard';

document.body.appendChild(div);

div.style.position = 'absolute';
div.style.right = '0px';
div.style.bottom = '0px';
div.style.zIndex = toTheFuckingMoon;
