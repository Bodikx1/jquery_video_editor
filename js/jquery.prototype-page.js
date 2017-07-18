; (function ($) {

  var defaults = {
    firstRow: 'first-row',
    leftBoxClass: 'left-box',
    rightBoxClass: 'right-box',
    secondRow: 'second-row',
    verticalSplitter: 'vertical-splitter',
    horizontalSplitter: 'horizontal-splitter',
  }

  function PrototypePage(element, options){
    this.config = $.extend({}, defaults, options);
    this.element = element;

    this.init();
  }

  PrototypePage.prototype.init = function () {

    var firstRow = $('<div/>',{
        'class': this.config.firstRow,
      }).appendTo(this.element);

    var leftBox = $('<div/>',{
        'class': this.config.leftBoxClass,
      }).appendTo(firstRow);

    $('<div/>',{
        'class': this.config.verticalSplitter,
      }).appendTo(firstRow);

    var rightBox = $('<div/>',{
        'class': this.config.rightBoxClass,
      }).appendTo(firstRow);

    $('<div/>',{
        'class': this.config.horizontalSplitter,
      }).appendTo(this.element);

    var secondRow = $('<div/>',{
        'class': this.config.secondRow,
      }).appendTo(this.element);

    leftBox.resizable();
    rightBox.resizable();
    firstRow.resizable();
    secondRow.resizable();
  }

  $.fn.prototypePage = function (options) {

    new PrototypePage(this.first(), options);

    return this.first();
  }

})(jQuery);
