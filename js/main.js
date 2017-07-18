jQuery(function() {
	$('.top').resizable({
		handleSelector: '.top-resize',
		resizeWidth: false
	})

	$('#left').resizable({
		handleSelector: '.left-resize',
		resizeHeight: false
	})
})