'use strict';

$(document).ready(init);

function init() {

	window.onscroll = function() {
	    var viewportHieght = window.innerHeight || document.documentElement.clientHeight;

	    // get ratio of scroll depth to screen size and use that to fade div
	    var fade = 1 - ((getScrollTop() / viewportHieght) * 2);

		document.getElementById('banner').style.opacity = '' + fade;
	}

	$('#learn-more').on('click', function(e) {
	    $('html, body').stop().animate({
	        'scrollTop': $('#main-content').offset().top
	    }, 600, 'swing');
	});
	
    console.log('ready');
}

// get scroll offset
function getScrollTop() {
	var doc = document.documentElement;
	return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
}