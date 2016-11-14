(function($) {

  function scrollToElement() {
    // Add smooth scrolling to all links
    $('a').on('click', function(event) {

      if (this.hash !== '') {
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){

        window.location.hash = hash;
        });
      }
    });
  }

  function navControl() {
    let $btnOpen = $('.dp-btn--menu');
    let $btnClose = $('.dp-btn--close');
    let $menu = $('.dp-nav')
    let $dim = $('.dim')

    $btnOpen.on('click', function() {

      if (menuIsOpen() == true) {
        $menu.css(
          {
            'opacity': '0',
            'pointer-events': 'none'
          }
        );
        $dim.css('opacity', '0');
        $btnOpen.find('svg').addClass('dp-animation--shrinkIn')
                            .removeClass('dp-animation--shrinkOut');
        $btnClose.find('svg').addClass('dp-animation--shrinkOut')
                             .removeClass('dp-animation--shrinkIn');
      } else {
        $menu.css(
          {
            'opacity': '1',
            'pointer-events': 'all'
          }
        );
        $dim.css('opacity', '0.8');
        $btnOpen.find('svg').addClass('dp-animation--shrinkOut')
                            .removeClass('dp-animation--shrinkIn');
        $btnClose.find('svg').addClass('dp-animation--shrinkIn')
                             .removeClass('dp-animation--shrinkOut');
      }
    });

    function menuIsOpen() {
      if ($menu.css('opacity') == 0) {
        return false
      } else {
        return true
      }
    };
  }

  function initiateCarousel() {
    let $btns = $('.carousel-btn')
    let $left = $('.carousel-btn--left')
    let $right = $('.carousel-btn--right')
    let objectWidth = $('.carousel-el').width()
    let $wrapper = $('.carousel-wrapper')

    $btns.on('click', function() {
      let actualPosition = $wrapper.css('transform').split(', ')[4]
      let $th = $(this)
      let direction = isBtnValid($th)

      console.log(actualPosition + " " + objectWidth + " " + parseInt(actualPosition) - parseInt(objectWidth) );

      if (direction == "left") {
        let moveBy = actualPosition - objectWidth
        console.log(moveBy);
        $wrapper.css("transform", "matrix(1, 0, 0, 1, " + moveBy + ", 0)");
      } else if (direction == "right") {
        let moveBy = objectWidth + actualPosition
        console.log(moveBy);
        $wrapper.css("transform", "matrix(1, 0, 0, 1, " + moveBy + ", 0)");
      } else {
        return
      }
    })

    function isBtnValid(el) {
      if (el.is($left)) {
        return "right";
      } else if (el.is($right)) {
        return "left";
      } else {
        return
      }
    }
  }



  // Global callbacks
  // ==============================================================::||:>
  scrollToElement();
  navControl();
  initiateCarousel();


})(window.$);
