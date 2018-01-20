(function ($, window, document) {

  $(function () {
    menu.init();
  });

  var menu = {
    $el : $('.js-menu'),
    triggerClass: '.js-menu-trigger',
    init: function() {
      if (!this.$el.length) return;
      $(this.triggerClass).on('click', this.toggle);
      this.clone();
    },
    toggle: function() {
      $('html').toggleClass('menu-open');
      // $(document).trigger("menu:open");
    },
    clone: function() {
      // @todo: clone all elements
      // dynamic markup
      // sort by data-menu-order
    }
  }

  // $(document).on('menu:open', function(){
  //   console.log('MAGIC WOW');
  // });
  
}(window.jQuery, window, document));