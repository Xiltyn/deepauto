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
    let inactive = {'opacity': 0, 'pointer-events': 'none'}
    let active = {'opacity': 1, 'pointer-events': 'all'}
    let dimmed = {'opacity': 0.8, 'pointer-events': 'all'}

    fixMenuOnScroll();

    $btnOpen.on('click', function() {

      if (menuIsOpen() == true) {
        $menu.css(inactive);
        $dim.css(inactive);
        $btnOpen.find('svg').addClass('dp-animation--shrinkIn')
                            .removeClass('dp-animation--shrinkOut');
        $btnClose.find('svg').addClass('dp-animation--shrinkOut')
                             .removeClass('dp-animation--shrinkIn');

      } else {
        $menu.css(active);
        $dim.css(dimmed);
        $btnOpen.find('svg').addClass('dp-animation--shrinkOut')
                            .removeClass('dp-animation--shrinkIn');
        $btnClose.find('svg').addClass('dp-animation--shrinkIn')
                             .removeClass('dp-animation--shrinkOut');
      }

      $dim.on('click', function() {
        $menu.css(inactive);
        $dim.css(inactive);
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
    }

    function fixMenuOnScroll() {
      let scrollTop = $(window).scrollTop(),
      $rankingOffset = $('.dp-nav').offset().top,
      $distanceRanking = $rankingOffset;

      var $scrollRanking = $(window).scroll(function() {
        let  $ranking = ($distanceRanking - scrollTop);
          if ($scrollRanking.scrollTop() > $ranking) {
              $('.dp-nav').addClass('fixed')
          } else {
              $('.dp-nav').removeClass('fixed')
          }
      });
    }
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

    setWrapperWidth();
    setInitialFocus();
    setFocus();

    $btns.on('click', function() {
      let $objects = $('.carousel-el')
      let objectWidth = $objects.width()
      let actualPosition = parseInt($wrapper.css('transform').split(', ')[4])
      let $th = $(this)
      let direction = isBtnValid($th)
      let focus = $('focus')


      if (direction == 'left') {

        changeFocus(direction);
        setFocus();
        blockNav(focus)

      } else if (direction == 'right') {

        changeFocus(direction);
        setFocus();
        blockNav(focus)

      } else {

        return

      }
    })

    function setWrapperWidth() {
      let $objects = $('.carousel-el')
      let objectWidth = $objects.width()
      let elementsNumber = countElements($objects)
      let wrapperWidth = elementsNumber * objectWidth

      $wrapper.css('width', wrapperWidth);

    }

    function setInitialFocus() {
      let $objects = $('.carousel-el')
      let elementsNumber = countElements($objects)
      let middleElement = ~~( elementsNumber / 2 )

      $objects.each(function() {
        let $th = $(this)

        if ($th.index() == middleElement) {
          $th.addClass('focus')
        }
      })

    }

    function setFocus() {
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

        $wrapper.css('transform', 'matrix(1, 0, 0, 1, ' + moveBy + ', 0)');

    }

    function isBtnValid(el) {
      if (el.is($left)) {
        return 'right';

      } else if (el.is($right)) {
        return 'left';

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

      if (status == 'left') {
        next.addClass('focus')

      } else if (status == 'right') {
        prev.addClass('focus')

      } else {
        return
      }
    }

    function blockNav() {
      let $objects = $('.carousel-el')
      let first = $objects.first()
      let last = $objects.last()
      let inactive = {'opacity': 0, 'pointer-events': 'none'}
      let active = {'opacity': 1, 'pointer-events': 'all'}


      if (first.hasClass('focus')) {
        $left.css(inactive)

      } else if (last.hasClass('focus')) {
        $right.css(inactive)

      } else if (!first.hasClass('focus') && !last.hasClass('focus')){
        $left.css(active)
        $right.css(active)


      }
    }

    function countElements(el) {
      let count = 0

      for (var i = 0; i < el.length; i++) {
        count++
      }
      return count

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
