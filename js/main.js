jQuery(function() {
	$('.top').resizable({
		handleSelector: '.top-resize',
		resizeWidth: false
	})

	$('#left').resizable({
		handleSelector: '.left-resize',
		resizeHeight: false
	})

	$('.panel-management').on('click', 'li', function(e) {
        var $this = $(this);
        var parentUL = $this.parent();
        var tabContent = $('.container-management');
        if($this.hasClass('active')) {
            return false;
        }
        parentUL.children().removeClass('active');
        $this.addClass('active');
        tabContent.find('.management-tab').hide();
        var showById = $( $this.find('a').attr('href'));
        tabContent.find(showById).fadeIn(400);  
        e.preventDefault();
    });

    $('.panel-management li').first().addClass('active');
    $('.management-tab').first().show();

    $('.folders').on('click', 'li', function(e) {
        var $this = $(this);
        var parentUL = $this.parent();
        var tabContent = $('.folder-content');
        if($this.hasClass('active')) {
            return false;
        }
        parentUL.children().removeClass('active');
        $this.addClass('active');
        tabContent.find('.folder-tab').hide();
        var showById = $( $this.find('a').attr('href'));
        tabContent.find(showById).fadeIn(400);  
        e.preventDefault();
    });

    $('.folders li').first().addClass('active');
    $('.folder-tab').first().show();

    var dragContainer1 = document.querySelector('#my-media .folder-tab-container'),
    	dragContainer2 = document.querySelector('#project-media .folder-tab-container');

    var dragOptions = {
    	copy: function(el, source) {
    		return source === dragContainer1 || source === dragContainer2;
    	},
    	accepts: function(el, target) {
    		return target !== dragContainer1 && target !== dragContainer2;
    	}
    }

    dragula([dragContainer1, dragContainer2, document.querySelector('#bottom')], dragOptions);

    var video = $('video')[0];

    $('[data-action="play"]').click(function(e) {
    	var $this = $(this);
    	if($this.hasClass('fa-play')) {
    		$this.removeClass('fa-play').addClass('fa-pause');
    		video.play();
    	} else {
    		$this.removeClass('fa-pause').addClass('fa-play');
    		video.pause();
    	}
    	e.preventDefault();
    })

    $('[data-action="backward"]').click(function(e) {
    	video.currentTime -= 10
    	e.preventDefault();
    })

    $('[data-action="forward"]').click(function(e) {
    	video.currentTime += 10
    	e.preventDefault();
    })

    $('[data-action="stop"]').click(function(e) {
    	var play = $('[data-action="play"]');
    	if(play.hasClass('fa-pause')) {
    		play.removeClass('fa-pause').addClass('fa-play');
    		video.pause();
    	}
    	video.currentTime = 0
    	e.preventDefault();
    })
})