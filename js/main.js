// jQuery for page scrolling feature (jQuery Easing)
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 75
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Close responsive menu on item click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});

var velocity = 0.1;

function update(){ 
    var pos = $(window).scrollTop(); 
    $('section').each(function() { 
        var $element = $(this);
        var height = $element.height()-18;
        $(this).css('backgroundPosition', '100% ' + Math.round((height - pos) * velocity) + 'px'); 
    });
};

$(window).bind('scroll', update);