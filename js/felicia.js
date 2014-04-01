$.fn.felicia = function(options) {

	var settings = $.extend({
		color:"#000",
		fontSize:"24px",
		lineHeight:"32px"
	}, options);

	return this.css({
		color: settings.color,
		fontSize: settings.fontSize,
		lineHeight: settings.lineHeight
	});
}