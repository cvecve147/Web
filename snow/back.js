var bgs = ['http://somesnow.lionfree.net/img/%E8%83%8C%E6%99%AF1.jpg',
	        'http://somesnow.lionfree.net/img/%E8%83%8C%E6%99%AF2.jpg',
	        'http://somesnow.lionfree.net/img/%E8%83%8C%E6%99%AF3.jpg',
	        'http://somesnow.lionfree.net/img/%E8%83%8C%E6%99%AF4.jpg',
	        'http://somesnow.lionfree.net/img/%E8%83%8C%E6%99%AF5.jpg',
	        'http://somesnow.lionfree.net/img/%E8%83%8C%E6%99%AF6.jpg'],
		bgidx = 0;

	function dynamicBg () {
		if ($('.frame')[0] && $('.frame').css('display') != 'none') return;
		var $target = $('div[data-url="/people.html"] .center')[0]?
			$('div[data-url="/people.html"] .center').eq(0)
				: $('div[data-role="page"]')[0]?
			$('div[data-role="page"]').eq(0)
				: $('body'),
			bg = $('<img src="'+bgs[bgidx]+'" style="position: fixed; left: 0; top: 0; width: '+($('body').outerWidth(true) || $(window).outerWidth(true))+'px; height: '+($('body').outerHeight(true) || $(window).outerHeight(true))+'px; z-index: -100000; display: none;" class="dynamic-bg"></img>');
		bgidx++;
		if (bgidx >= bgs.length) bgidx = 0;
		// 移掉舊的
		$('.dynamic-bg').fadeOut(1000, null, function () {
			$(this).remove();
		});
		// 加入新的
		$target.append(bg);
		if (bg.height() == 0) {
			bg.css('height', '100%');
		}
		bg.fadeIn(500);
	}
	
	dynamicBg();
	setInterval(dynamicBg,6000);