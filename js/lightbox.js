$.fn.lightbox = function() {

	$(this).click(function(e) {
		//stop browser default action
		e.preventDefault();


		var image_href = $(this).attr('href');
		var text = $(this).attr('data-title');
		var close = '<i class="fa fa-times-circle fa-2x"></i>';
		var lightbox = 
			'<div id="lightbox">' +
				'<div id="content">' + 
					'<img src="' + image_href + '" class="active">' + close +
					'<p id="title">' + text + '</p>' +
				'</div>' +
			'</div>';	

			
		// bring in lightbox			
		$(lightbox).hide().appendTo('body').fadeIn(200);	

		// to remove lightbox
		var lightbg = $('#lightbox');

		lightbg.click(function(){
			$(this).fadeOut(300, function() {
				$(this).remove();
			});
		});		

		close.click(function(){
			$(this).fadeOut(300, function() {
				$(this).remove();
			});
		});

		$(document).keyup(function(e){
			if (e.keyCode == 27) {
				$(lightbg).fadeOut(300, function() {
				$(this).remove();
			});
		}



		});
	});



}


	