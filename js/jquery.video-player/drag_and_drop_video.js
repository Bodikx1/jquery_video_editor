$(function() {
  $('video.video').draggable({
      helper:'clone'
  });
  $('div.video').droppable({
      hoverClass: 'dropHere'
      ,drop: function(event, ui) {
        $(this.children[0]).replaceWith($('<video controls="controls">' + ui.draggable.html() + '</video>'));
      }
  });
});
