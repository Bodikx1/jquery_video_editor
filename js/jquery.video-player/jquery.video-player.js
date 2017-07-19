; (function ($) {

  var defaults = {};

  function Video(element, options){
    this.config = $.extend({}, defaults, options);
    this.element = element;

    this.init();
  }

  Video.prototype.init = function () {

    var divContainer = $('<div/>', {
      'class': 'video',
    }).appendTo(this.element);

    var divWrap = $('<div/>', {
      'class': 'wrap',
    }).appendTo(divContainer);

    var video = $('<video/>').appendTo(divWrap);

    $('<source/>', {
      'src': 'video/video.mp4',
      'type': 'video/mp4',
    }).appendTo(video);

    var controls = '<div id="video-controls"><i class="fa fa-play" aria-hidden="true"></i><i class="fa fa-pause" aria-hidden="true"></i><i class="fa fa-expand" aria-hidden="true"></i></div>';

    divWrap.append(controls);

  }

  $.fn.video = function (options) {

    new Video(this.first(), options);

    return this.first();
  }

})(jQuery);
