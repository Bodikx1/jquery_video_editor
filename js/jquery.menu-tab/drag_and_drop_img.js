$(function() {
  $('#img-gallary a').draggable({
      helper:'clone'
  });
  $('div.second-row').droppable({
      hoverClass: 'dropHere',
      drop: function(event, ui) {
        $(this).append('<a href="#">'+ ui.draggable.html() +'</a>');
      }
  });
});
