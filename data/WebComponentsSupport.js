(function() {

	function detectSupport(doneCallback) {

		// custom elements -> registerElement
		var regElemAvailable = !!document.registerElement;
		var regElemNative = false;
		if(regElemAvailable) {
			regElemNative = isNativeCode(document.registerElement);
		}

		// shadowDom -> createShadowRoot
		var dummyDiv = document.createElement('div');
		var shadowRootAvailable = !!dummyDiv.createShadowRoot;
		var shadowRootNative = false;
		if(shadowRootAvailable) {
			shadowRootNative = isNativeCode(dummyDiv.createShadowRoot);
		}

		// html templates
		var dummyTemplate = document.createElement('template');
		var templatesAvailable = !!(dummyTemplate.content);

		// html imports
		var IMPORT_LINK_TYPE = 'import';
		var importsMaybeAvailable = Boolean(IMPORT_LINK_TYPE in document.createElement('link'));
		var importsAvailable = false;
		var detectionTimeout = null;

		// Let's run a quick test and see if imports are actually loading anything at all.
		if(importsMaybeAvailable) {
			var dummyLink = document.createElement('link');

			var testStr = 'Supercalifragilisticexpialidocious';
			var testBlob = new Blob([testStr], { type: 'text/html' });
						
			dummyLink.rel = 'import';
			dummyLink.onload = function() {

				var importBody = dummyLink.import.body;
				if(importBody && importBody.innerHTML.search(testStr) === 0) {
					importsAvailable = true;
				}

				// Always clean up after yourself!
				removeDummyLink();

				completeDetection();
			};
			dummyLink.href = URL.createObjectURL(testBlob);
			
			// apparently doesn't start loading until appended to <head>
			document.head.appendChild(dummyLink);

			// Give it some time for browsers that won't load anything actually,
			// so we can complete the test
			detectionTimeout = window.setTimeout(completeDetection, 25);
		} else {
			// No, not available at all!
			completeDetection();
		}

		function removeDummyLink() {
			document.head.removeChild(dummyLink);
		}
		
		function completeDetection() {
			
			if(detectionTimeout) {
				clearTimeout(detectionTimeout);
				detectionTimeout = null;
			}

			var results = {
				customElements: makeSupportObject(regElemAvailable, regElemNative),
				shadowDOM: makeSupportObject(shadowRootAvailable, shadowRootNative),
				// assuming if templates are available, support is native
				// - not sure how to test this as I can't access a browser without template support
				templates: makeSupportObject(templatesAvailable, templatesAvailable),
				htmlImports: makeSupportObject(importsAvailable, importsAvailable)
			};

			doneCallback(results);
		}

	}

	function isNativeCode(fun) {
		var src = fun.toString();
		var pos = src.search(/\[native code\]/);
		return (pos !== -1);
	}

	function makeSupportObject(available, funNative) {
		var obj = {};
		obj.available = available;

		if(available) {
			obj.implementation = funNative ? 'native' : 'polyfill';
		}

		return obj;
	}

	var WebComponentsSupport = detectSupport;

	
	// Make it compatible for require.js/AMD loader(s)
	if(typeof define === 'function' && define.amd) {
		define(function() { return WebComponentsSupport; });
	} else if(typeof module !== 'undefined' && module.exports) {
		// And for npm/node.js
		module.exports = WebComponentsSupport;
	} else {
		this.WebComponentsSupport = WebComponentsSupport;
	}
})();
