$(function() {
  $('video.video').draggable({
      helper:'clone'
  });
  $('div.video').droppable({
      hoverClass: 'dropHere',
      drop: function(event, ui) {
        $(this.children[0].children[0]).replaceWith($('<video>' + ui.draggable.html() + '</video>'));
      }
  });
});
