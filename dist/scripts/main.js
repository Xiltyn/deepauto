"use strict";!function(s){function n(){s("a").on("click",function(n){if(""!==this.hash){n.preventDefault();var a=this.hash;s("html, body").animate({scrollTop:s(a).offset().top},800,function(){window.location.hash=a})}})}function a(){function n(){return 0!=t.css("opacity")}function a(){var n=s(window).scrollTop(),a=s(".dp-nav").offset().top,i=a,o=s(window).scroll(function(){var a=i-n;o.scrollTop()>a?s(".dp-nav").addClass("fixed"):s(".dp-nav").removeClass("fixed")})}var i=s(".dp-btn--menu"),o=s(".dp-btn--close"),t=s(".dp-nav"),e=s(".dim"),r={opacity:0,"pointer-events":"none"},c={opacity:1,"pointer-events":"all"},l={opacity:.8,"pointer-events":"all"};a(),i.on("click",function(){1==n()?(t.css(r),e.css(r),i.find("svg").addClass("dp-animation--shrinkIn").removeClass("dp-animation--shrinkOut"),o.find("svg").addClass("dp-animation--shrinkOut").removeClass("dp-animation--shrinkIn")):(t.css(c),e.css(l),i.find("svg").addClass("dp-animation--shrinkOut").removeClass("dp-animation--shrinkIn"),o.find("svg").addClass("dp-animation--shrinkIn").removeClass("dp-animation--shrinkOut")),e.on("click",function(){t.css(r),e.css(r),i.find("svg").addClass("dp-animation--shrinkIn").removeClass("dp-animation--shrinkOut"),o.find("svg").addClass("dp-animation--shrinkOut").removeClass("dp-animation--shrinkIn")})})}function i(){function n(){var n=s(".carousel-el"),a=n.width(),i=r(n),o=i*a;f.css("width",o)}function a(){var n=s(".carousel-el"),a=r(n),i=~~(a/2);n.each(function(){var n=s(this);n.index()==i&&n.addClass("focus")})}function i(){var n,a=s(".carousel-el"),i=a.width();s("focus");a.each(function(){var a=s(this);a.hasClass("focus")&&(n=a.index())});var o=!i-i*n;f.css("transform","matrix(1, 0, 0, 1, "+o+", 0)")}function o(s){return s.is(l)?"right":s.is(d)?"left":void 0}function t(n){var a=s(".focus"),i=a.next(),o=a.prev();if(a.removeClass("focus"),"left"==n)i.addClass("focus");else{if("right"!=n)return;o.addClass("focus")}}function e(){var n=s(".carousel-el"),a=n.first(),i=n.last(),o={opacity:0,"pointer-events":"none"},t={opacity:1,"pointer-events":"all"};a.hasClass("focus")?l.css(o):i.hasClass("focus")?d.css(o):a.hasClass("focus")||i.hasClass("focus")||(l.css(t),d.css(t))}function r(s){for(var n=0,a=0;a<s.length;a++)n++;return n}var c=s(".carousel-btn"),l=s(".carousel-btn--left"),d=s(".carousel-btn--right"),f=s(".carousel-wrapper");n(),a(),i(),c.on("click",function(){var n=s(".carousel-el"),a=(n.width(),parseInt(f.css("transform").split(", ")[4]),s(this)),r=o(a),c=s("focus");if("left"==r){t(r),i(),e(c)}else{if("right"!=r)return;t(r),i(),e(c)}})}n(),a(),i()}(window.$);