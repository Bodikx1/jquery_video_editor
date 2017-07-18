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
    imgList: [
      'Add New Item',
      'Photo by me.png',
      'Video by me.mov',
      'Photo by me.png'
    ],
  };

  function MenuTabs(element, optionsTabs){
    this.config = $.extend({}, defaultsTab, optionsTabs);
    this.element = element;
    this.init();
  }

  MenuTabs.prototype.init = function () {
    var namelistElement = this.config.namelistElement;

    var ulTabs = $('<ul/>',{
      'id': 'menu-tab',
    }).appendTo(this.element);

    ulTabs.on('click', function(event){
      if(event.target.tagName !== 'LI'){
        return;
      };
      $('#menu-tab li').each(function(i, elem){
         if(elem.classList.contains("active")){
          // var firstClass = elem.className.split(' ')[0];
          // var ul = $('ul .'+firstClass);
          elem.classList.remove("active");
          event.target.classList.add('active');
        } else {
          event.target.classList.add('active');
        }
      });
    });

    this.config.liList.forEach(function(elem, i){
      var li = $('<li/>', {
        'class': namelistElement[i],
      }).appendTo(ulTabs);
      var a = $('<a/>',{
          'href': '#',
        }).appendTo(li);
      a.append(elem);
    });

    $('ul#menu-tab').find("li:first").addClass('active');

  }

  function MenuDetails(element, optionsMenuDetails){
    this.config = $.extend({}, defaultsmenuDetails, optionsMenuDetails);
    this.element = element;
    this.init();
  }

  MenuDetails.prototype.init = function (){
    var ulMediaDetails = $('<ul/>', {
      'id': 'menu-media',
      'class': 'media',
    }).appendTo(this.element);
    this.config.mediaLiList.forEach(function(elem, i){
      var li = $('<li/>').appendTo(ulMediaDetails);
      var a = $('<a/>',{
          'href': '#',
          text: elem,
        }).appendTo(li);
    });

    var ulMusicDetails = $('<ul/>', {
      'id': 'menu-music',
      'class': 'music',
    }).appendTo(this.element);
    this.config.musicLiList.forEach(function(elem, i){
      var li = $('<li/>').appendTo(ulMusicDetails);
      var a = $('<a/>',{
          'href': '#',
          text: elem,
        }).appendTo(li);
    });

    var ulTextDetails = $('<ul/>', {
      'id': 'menu-text',
      'class': 'text',
    }).appendTo(this.element);
    this.config.textLiList.forEach(function(elem, i){
      var li = $('<li/>').appendTo(ulTextDetails);
      var a = $('<a/>',{
          'href': '#',
          text: elem,
        }).appendTo(li);
    });

    var ulAnimationDetails = $('<ul/>', {
      'id': 'menu-animation',
      'class': 'animation',
    }).appendTo(this.element);
    this.config.animationLiList.forEach(function(elem, i){
      var li = $('<li/>').appendTo(ulAnimationDetails);
      var a = $('<a/>',{
          'href': '#',
          text: elem,
        }).appendTo(li);
    });

    var ulSettingsDetails = $('<ul/>', {
      'id': 'menu-settings',
      'class': 'settings',
    }).appendTo(this.element);
    this.config.settingsLiList.forEach(function(elem, i){
      var li = $('<li/>').appendTo(ulSettingsDetails);
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
    this.config.imgList.forEach(function(elem, i){
      var li = $('<li/>').appendTo(ulGallary);
      var a = $('<a/>',{
          'href': '#',
        }).appendTo(li);
      var div = $('<div/>').appendTo(a);
      div.append('<i class="fa fa-picture-o" aria-hidden="true"></i>');
      a.append(elem);
    });
  }

  $.fn.menuTab = function (optionsTabs, optionsMenuDetails, optionsGalleryDetails) {

    new MenuTabs(this.first(), optionsTabs);
    new MenuDetails(this.first(), optionsMenuDetails);
    new Gallery(this.first(), optionsGalleryDetails);

    return this.first();
  }

})(jQuery);
