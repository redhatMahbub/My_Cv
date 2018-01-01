(function($) {
	jQuery(document).ready(function(){
		$('.sidebarbtn').click(function(){
			$('.sidebar-menu').toggleClass('active');
			$('.sidebarbtn').toggleClass('toggle');
		});
	});
})(jQuery);
