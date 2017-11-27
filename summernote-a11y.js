/* https://github.com/DiemenDesign/summernote-a11y */
(function(factory) {
  if(typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('jquery'));
  } else {
    factory(window.jQuery);
  }
}
(function($) {
  $.extend(true,$.summernote.lang, {
    'en-US': {
      a11y: {
        tooltip: 'Accessibility Checker'
      }
    }
  });
  $.extend($.summernote.options, {
    a11y: {
      icon: '<i id="summernote-a11y" class="note-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path d="m 6.9999997,1 c -0.620817,0 -1.125,0.50296 -1.125,1.125 0,0.62204 0.502959,1.126 1.125,1.125 0.620816,0 1.1250001,-0.50296 1.1250001,-1.125 C 8.1249998,1.50418 7.6220407,1 6.9999997,1 Z m -5.0878906,1.38867 -0.2792969,0.69727 3.8652344,1.66797 0,3.00195 L 3.9589841,12.73438 4.6621091,13 6.8398435,8.13086 l 0.3222656,0 L 9.3378903,13 10.041016,12.73438 8.5019528,7.75391 l 0,-3 3.8652352,-1.66797 -0.279297,-0.69727 -4.7128913,1.61328 -0.75,0 -4.7128906,-1.61328 z"/></svg></i>',
      langFile: '../summernote-a11y/lang/en-US.css'
    }
  });
  $.extend($.summernote.plugins, {
    'a11y':function(context) {
      var self = this;
      var ui = $.summernote.ui;
      var $note = context.layoutInfo.note;
      var $editor = context.layoutInfo.editor;
      var options = context.options;
      var lang = options.langInfo;
      $('<link/>', {
        rel: 'stylesheet',
        type: 'text/css',
        href: options.a11y.langFile
      }).appendTo('head');
      context.memo('button.a11y',function() {
        var button = ui.button({
          contents: options.a11y.icon,
          tooltip: lang.a11y.tooltip,
          click:function() {
            $('[data-original-title="Accessibility Checker"]').toggleClass('btn-success');
            $('body,.note-editable,.note-toolbar-wrapper').toggleClass('a11y');
          }
        });
        return button.render();
      });
    }
  });
}));
