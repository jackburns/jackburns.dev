'use strict';

document.addEventListener('DOMContentLoaded', init, false);

function init() {
	window.onscroll = function() {
	    var viewportHieght = window.innerHeight || document.documentElement.clientHeight;

	    // get ratio of scroll depth to screen size and use that to fade div
	    var fade = 1 - ((getScrollTop() / viewportHieght) * 1.5);

		document.getElementById('banner').style.opacity = "" + fade;
	}
}

// get scroll offset
function getScrollTop() {
	var doc = document.documentElement;
	return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
}