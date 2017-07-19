; (function ($) {

  var defaultsTab = {
    liList: [
      '<i class="fa fa-clone" aria-hidden="true"></i>',
      '<i class="fa fa-music" aria-hidden="true"></i>',
      '<i class="fa fa-file-o" aria-hidden="true"></i>',
      '<i class="fa fa-database" aria-hidden="true"></i>',
      '<i class="fa fa-cog" aria-hidden="true"></i>',
    ],
    namelistElement: ['media', 'music', 'text', 'animation', 'settings'],
  };

  var defaultsmenuDetails = {
    mediaLiList: [
      'My Media',
      'Project Media',
      'Add New Folder...'
    ],
    musicLiList: [
      'My Music',
      'Project Music',
      'Add New Folder...'
    ],
    textLiList: [
      'My Text',
      'Project Text',
      'Add New Folder...'
    ],
    animationLiList: [
      'My Animation',
      'Project Animation',
      'Add New Folder...'
    ],
    settingsLiList: [
      'My Settings',
      'Project Settings',
      'Add New Folder...'
    ],
  };

  var defaultsGallary = {
    videoSrc: [
      'video/video.mp4',
      'video/bear.mp4',
      'video/Deer vs Man.mp4',
      'video/Mickey Mouse.mp4',
      'video/guess.mp4',
    ]
  };

  function MenuTabs(element, optionsTabs){
    this.config = $.extend({}, defaultsTab, optionsTabs);
    this.element = element;
    this.init();
  }

  MenuTabs.prototype.init = function () {
    var configUl = $.extend({}, defaultsmenuDetails);
    var config = this.config;

    var ulTabs = $('<ul/>',{
      'id': 'menu-tab',
    }).appendTo(this.element);

    ulTabs.on('click', function(event){
      if(event.target.tagName !== 'LI'){
        return;
      };
      $('#menu-tab li').each(function(i, elem){
         if(elem.classList.contains("active")){
          elem.classList.remove("active");
          event.target.classList.add('active');
        } else {
          event.target.classList.add('active');
        }
      });
      var firstTabClass = event.target.className.split(' ')[0];
      var ulDetails = $('<ul/>', {
        'id': 'menu',
        'class': firstTabClass,
      });
      $('ul#menu').replaceWith(ulDetails);
      var name = firstTabClass+"LiList";
      console.log(configUl[name]);
      configUl[name].forEach(function(elem, i){
        var li = $('<li/>').appendTo(ulDetails);
        var a = $('<a/>',{
            'href': '#',
            text: elem,
          }).appendTo(li);
      });
    });

    this.config.liList.forEach(function(elem, i){
      var li = $('<li/>', {
        'class': config.namelistElement[i],
      }).appendTo(ulTabs);
      var a = $('<a/>',{
          'href': '#',
        }).appendTo(li);
      a.append(elem);
    });

    $('ul#menu-tab').find("li:first").addClass('active');

  }

  function MenuDetails(element, optionsMenuDetails){
    this.config = $.extend({}, defaultsmenuDetails);
    this.element = element;
    this.init();
  }

  MenuDetails.prototype.init = function (){
    var ulMediaDetails = $('<ul/>', {
      'id': 'menu',
      'class': 'media',
    }).appendTo(this.element);
    this.config.mediaLiList.forEach(function(elem, i){
      var li = $('<li/>').appendTo(ulMediaDetails);
      var a = $('<a/>',{
          'href': '#',
          text: elem,
        }).appendTo(li);
    });
  }

  function Gallery(element, optionsGalleryDetails){
    this.config = $.extend({}, defaultsGallary, optionsGalleryDetails);
    this.element = element;
    this.init();
  }

  Gallery.prototype.init = function(){
    var ulGallary = $('<ul/>', {
      'id': 'gallary',
    }).appendTo(this.element);

    this.config.videoSrc.forEach(function(elem, i){
      var li = $('<li/>').appendTo(ulGallary);
      var a = $('<a/>',{
          'href': '#',
        }).appendTo(li);

      var video = $('<video/>', {
        'controls': 'controls',
        'class': 'video',
      }).appendTo(a);

      $('<source/>', {
        'src': elem,
        'type': 'video/mp4',
      }).appendTo(video);

      a.append(elem.split('/')[1]);
    });
  }

  $.fn.menuTab = function (optionsTabs, optionsMenuDetails, optionsGalleryDetails) {

    new MenuTabs(this.first(), optionsTabs);
    new MenuDetails(this.first(), optionsMenuDetails);
    new Gallery(this.first(), optionsGalleryDetails);

    return this.first();
  }

})(jQuery);
