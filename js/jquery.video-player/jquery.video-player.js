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

    var video = $('<video/>', {
      'controls': 'controls',
    }).appendTo(divContainer);

    $('<source/>', {
      'src': 'video/video.mp4',
      'type': 'video/mp4',
    }).appendTo(video);

  }

  $.fn.video = function (options) {

    new Video(this.first(), options);

    return this.first();
  }

})(jQuery);
