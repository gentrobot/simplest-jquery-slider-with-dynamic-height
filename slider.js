$(function () {
	'use strict';

	var $container = $('#container'), //cache elements used more than once
	$c = function (x) { return $container.children(x); }; //shortcut to save some typing and get better performance

	$('#next').click(function () {
		if ($c('.currentRight').length) { // don't bother with > 0
			$c('.current').
				animate({left: '-100px'}).
				toggleClass('current currentLeft'). //use toggleClass instead of multiple add/removes
				next().
				animate({left: '0px'}).
				toggleClass('currentRight current');
		}
		return false; //stops the hashchange
	});

	$('#previous').click(function () {
		if ($c('.currentLeft').length) {
			$c('.current').
				animate({left: '100px'}).
				toggleClass('current currentRight').
				prev().
				animate({left: '0px'}).
				toggleClass('currentLeft current');
		}
		return false;
	});

	$('#add').click(function () {
		var ht;
		$c('.current').append('More<br>');

		//use the maximum height of all container children instead of just the current element
		ht = Math.max.apply(window, $container.children().map(function () {
			return $(this).height(); //use height function instead of css('height')
		}).get()); //get converts map to array

		$container.css('height', ht);
		return false;
	});
});
