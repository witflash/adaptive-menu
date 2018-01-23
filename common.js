(function ($, window, document) {

  $(function () {
    menu.init();
    menu.closeMenu();
  });

  var menu = {
    $el: $('.js-menu'),
    triggerClass: '.js-menu-trigger',

    init: function() {
      if (!this.$el.length) return;
      $(this.triggerClass).on('click', this.toggle);
      this.clone();
    },

    closeMenu: function() {
      var $close = $('.js-menu-close');
      $close.on('click', this.remove);
    },

    toggle: function() {
      $('html').toggleClass('menu-open');
      // $(document).trigger("menu:open");
    },

    remove: function() {
      console.log('REMOVE CLASS');      
      $('html').removeClass('menu-open');
    },

    clone: function() {
      // @todo: clone all elements
      // dynamic markup
      // sort by data-menu-order
      var menuMobile = '.js-mobile-menu',
          menuItems = '.js-menu-item',
          wrapper = 'menu-m__item';

      $(menuItems).clone()
                  .sort(compare)
                  .removeClass()
                  .addClass(wrapper)
                  .appendTo(menuMobile);

      function compare(a, b) {
        return ($(a).data('menu-order') - $(b).data('menu-order'));
      }
      // var itemMobile = '<div class="menu-m__item">' + $(this).html() + '</div>';
      
      

    }
  }

  // $(document).on('menu:open', function(){
  //   console.log('MAGIC WOW');
  // });
  
}(window.jQuery, window, document));