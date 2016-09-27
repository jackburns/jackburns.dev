'use strict';

$(document).ready(init);

function init() {

	if(!isTouchDevice()) {
		var banner = document.getElementById('banner');
	    banner.style.position = 'fixed';

		window.onscroll = function() {
		    var viewportHieght = $(window).height();

		    // get ratio of scroll depth to screen size and use that to fade div
		    var position = $(document).scrollTop();
		    var fade = 1 - (position / viewportHieght * 2);

			banner.style.opacity = '' + fade;
		}
	}

	$('#learn-more').on('click', function(e) {
		e.preventDefault();
	    $('html, body').stop().animate({
	        'scrollTop': $('#main-content').offset().top
	    }, 600, 'swing');
	});
}

function isTouchDevice() {
	return 'ontouchstart' in window || 'onmsgesturechange' in window;
};
