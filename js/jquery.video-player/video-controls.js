$(function() {

	var play = $('i.fa-play');
	var pause = $('i.fa-pause');
	var fullScreen = $('i.fa-expand');
	var video = $('div.wrap video')[0];

	$('i.fa-play').on('click', function(event){
		console.log('click');
		$(this).css('display', 'none');
		$('i.fa-pause').css('display', 'block');
		$('div.wrap video')[0].play();
	});

	$('i.fa-pause').on('click', function(event){
		$(this).css('display', 'none');
		$('i.fa-play').css('display', 'block');
		$('div.wrap video')[0].pause();
	});

	$('i.fa-expand').on("click", function() {
		if ($('div.wrap video')[0].requestFullscreen) {
			$('div.wrap video')[0].requestFullscreen();
		} else if ($('div.wrap video')[0].mozRequestFullScreen) {
			$('div.wrap video')[0].mozRequestFullScreen(); // Firefox
		} else if ($('div.wrap video')[0].webkitRequestFullscreen) {
			$('div.wrap video')[0].webkitRequestFullscreen(); // Chrome and Safari
		}
	});
});
