(function($) {

  // ============================================================::||:>
  // ====================== SCROLL TO ELEMENT ===================::||:>

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

  // ==================== END SCROLL TO ELEMENT =================::||:>
  // ============================================================::||:>

  // ============================================================::||:>
  // ========================= NAVIGATION =======================::||:>

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
        $dim.css(
          {
            'opacity': '0',
            'pointer-events': 'none'
          }
        );
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
        $dim.css(
          {
            'opacity': '0.8',
            'pointer-events': 'all'
          }
        );
        $btnOpen.find('svg').addClass('dp-animation--shrinkOut')
                            .removeClass('dp-animation--shrinkIn');
        $btnClose.find('svg').addClass('dp-animation--shrinkIn')
                             .removeClass('dp-animation--shrinkOut');
      }

      $dim.on('click', function() {
        $menu.css(
          {
            'opacity': '0',
            'pointer-events': 'none'
          }
        );
        $dim.css(
          {
            'opacity': '0',
            'pointer-events': 'none'
          }
        );
        $btnOpen.find('svg').addClass('dp-animation--shrinkIn')
                            .removeClass('dp-animation--shrinkOut');
        $btnClose.find('svg').addClass('dp-animation--shrinkOut')
                             .removeClass('dp-animation--shrinkIn');
      })
    });

    function menuIsOpen() {
      if ($menu.css('opacity') == 0) {
        return false
      } else {
        return true
      }
    };
  }

  // ======================= END NAVIGATION =====================::||:>
  // ============================================================::||:>

  // ============================================================::||:>
  // ========================== CAROUSEL ========================::||:>

  function initiateCarousel() {
    let $btns = $('.carousel-btn')
    let $left = $('.carousel-btn--left')
    let $right = $('.carousel-btn--right')
    let $wrapper = $('.carousel-wrapper')

    setInitialFocus();

    $btns.on('click', function() {
      let $objects = $('.carousel-el')
      let objectWidth = $objects.width()
      let actualPosition = parseInt($wrapper.css('transform').split(', ')[4])
      let $th = $(this)
      let direction = isBtnValid($th)
      let focus = $('focus')


      if (direction == "left") {
        let moveBy = actualPosition - objectWidth

        $wrapper.css("transform", "matrix(1, 0, 0, 1, " + moveBy + ", 0)");
        changeFocus(direction);
        blockNav(focus)

      } else if (direction == "right") {
        let moveBy = objectWidth + actualPosition

        $wrapper.css("transform", "matrix(1, 0, 0, 1, " + moveBy + ", 0)");
        changeFocus(direction);
        blockNav(focus)

      } else {

        return

      }
    })

    function setInitialFocus() {
      var index;
      let $objects = $('.carousel-el')
      let objectWidth = $objects.width()
      let focus = $('focus')

      $objects.each(function() {
        let $th = $(this)

        if ($th.hasClass('focus')) {
          index = $th.index()
        }

      })

        let moveBy = !objectWidth - objectWidth * index

        $wrapper.css("transform", "matrix(1, 0, 0, 1, " + moveBy + ", 0)");

    }

    function isBtnValid(el) {
      if (el.is($left)) {
        return "right";

      } else if (el.is($right)) {
        return "left";

      } else {
        return

      }
    }

    function changeFocus(status) {
      const focus = $('.focus')
      let next = focus.next()
      let prev = focus.prev()

      // console.log(focus.next());

      focus.removeClass('focus')

      if (status == "left") {
        next.addClass('focus')

      } else if (status == "right") {
        prev.addClass('focus')

      } else {
        return
      }
    }

    function blockNav() {
      let $objects = $('.carousel-el')
      let first = $objects.first()
      let last = $objects.last()
      // let last = $('.carousel-wrapper li:last')
      // let first = $('.carousel-wrapper li:first')


      if (first.hasClass('focus')) {
        $left.css('opacity', 0)

      } else if (last.hasClass('focus')) {
        $right.css('opacity', 0)

      } else if (!first.hasClass('focus') && !last.hasClass('focus')){
        $left.css('opacity', 1)
        $right.css('opacity', 1)


      }
    }

  }

  // ======================== END CAROUSEL ======================::||:>
  // ============================================================::||:>



  // ============================================================::||:>
  // ====================== GLOBAL CALLBACKS ====================::||:>

  scrollToElement();
  navControl();
  initiateCarousel();

  // ==================== END GLOBAL CALLBACKS ==================::||:>
  // ============================================================::||:>

})(window.$);
