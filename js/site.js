$(function(){
  'use strict';
  var $page = $('#main'),
      options = {
        scroll: true,
        debug: false,
        prefetch: true,
        cacheLength: 2, // The number of pages to cache
        onStart: {
          duration: 300,
          render: function ($container) {
            $container.addClass('is-exiting');
            smoothState.restartCSSAnimations();
          },
        },
        onReady: {
          duration: 300,
          render: function ($container, $newContent) {
            $container.removeClass('is-exiting');
            $container.html($newContent);
          },
        },
        onAfter: function($container) {
          $container.onPageLoad();
        },
      },
      smoothState = $page.smoothState(options).data('smoothState');
});

(function($) {
  $.fn.onPageLoad = function() {

    $(".fd, .fp").addClass("faded");

    Splitting();

    ScrollOut({
       targets: '.ev',
       threshold: 0.5,
       once: true,
       cssProps: {
         viewportY: true,
         visibleY: true
       }
    });
    ScrollOut({
      targets: '.g-wrap',
      threshold: 0.5,
      onShown: function(el) {
       $(el).find(".i-bg").addClass("a-run");

       if($(el).hasClass("bb8")) {
         bbEight.play();
       }
       else if($(el).hasClass("tf")) {
         triggerFinger.play();
       }
       else if($(el).hasClass("lamp")) {
         lamp.play();
         lampLights.play();
       }
      },
      onHidden: function(el) {
        $(el).find(".i-bg").removeClass("a-run");

        if( $(el).hasClass("bb8") ) {
          bbEight.pause();
        }
        else if($(el).hasClass("tf")) {
          triggerFinger.pause();
        }
        else if($(el).hasClass("lamp")) {
          lamp.pause();
          lampLights.pause();
        }
      }
    });



// Slide Line
$(function() {
  'use strict';
  var leftPos, newWidth, $slideLine;
  $slideLine = $('#slide-line');
  $('.main-menu ul li a').click(function() {
    var $this = $(this);
    $this.parent().addClass('active').siblings().removeClass('active');
    $slideLine
      .data('origLeft', $this.position().left)
      .data('origWidth', $this.parent().width());
  });
  $('.main-menu ul li').find('a').hover(function() {
    var $thisBar = $(this).find("span");
    leftPos = $thisBar.position().left;
    newWidth = $thisBar.parent().width();
    $slideLine.css({
      "left": leftPos,
      "width": newWidth
    });
  }, function() {
    $slideLine.css({'width' : '0'});
  });
});

$(".logo a, a.button, a.a-button, .t-button, .menu-toggle, ul.links li").click(function(){navigator.vibrate([20]);});
$("nav a").click(function(){navigator.vibrate([10]);});

    //menu
      var menuToggle = $(".menu-toggle");
      function openMenu() {
        $("body").addClass("menu-open");
        location.hash = "main-menu";
      }
      function closeMenu() {
        if ($("body").hasClass("menu-open")) {
          $("body").removeClass("menu-open");
          window.location.hash = '';
        }
      }
      menuToggle.click(function(){
        if ($("body").hasClass("menu-open")) {
          closeMenu();
        }
        else {
          openMenu();
        }
      });
      $(document).keyup(function(e) {
        if (e.keyCode == 27) {
          if(window.location.hash) {closeMenu();}
        }
      });
      $(".logo a, .link").click(function(){
        if ($("body").hasClass("menu-open")) {
          $("body").addClass("out");
            closeMenu();
        }
      });
      $("a").click(function(){
        if($('.top-menu').hasClass('sc-sh')) {
          $('.top-menu').removeClass('sc-sh');
        }
      });
      $(window).bind('hashchange', function () {
        if (location.hash == null || location.hash == "") {
          closeMenu();
        }
      });

    var topMenu = $(".top-menu");

    var pastNav = 3;
    function navShadow() {
      if ($(window).scrollTop() > pastNav) {
          topMenu.addClass('sc-sh');
          $(".scroll-down").addClass("fout");
      }
      else {
          topMenu.removeClass('sc-sh');
          $(".scroll-down").removeClass("fout");
      }
    }



    $(function() {
      var ua = navigator.userAgent;
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)) {
      }
      else if(/Chrome/i.test(ua)) {
        $(function() {
          $.attractHover(
            '.attract',
            {
              proximity: 16,
              magnetism: 2
            }
          );
        });
      }
    });


    $(".scroll-down svg").click(function() {
      $([document.documentElement, document.body]).animate({
        scrollTop: $("#sectionTwo").offset().top
      }, 780);
    });



    var scrollDown = anime.timeline({autoplay: true, loop: true})
    scrollDown
    .add({
      targets: '.scroll-down .scroll-circ',
      opacity: {
        value: [1,0],
        duration: 1300,
        easing: 'easeInOutQuart'
      },
      translateY: {
        value: [0,14],
        duration: 1300,
        easing: 'easeInOutQuint'
      },
      scale: {
        value: [1,0.2],
        duration: 1600,
        easing: 'easeInOutQuint'
      }
    })
    .add({
      targets: '.scroll-down .scroll-lines',
      strokeDashoffset: [0,-36],
      duration: 1500,
      offset: '-=1400',
      easing: [0.645, 0.045, 0.020, 0.995]
    })
    .add({
      targets: '.scroll-down .scroll-circ',
      offset: '-=700',
      opacity: {
        value: [0,1],
        duration: 700,
        easing: 'easeInOutQuart'
      },
      translateY: {
        value: [14,0],
        duration: 0,
        easing: 'linear'
      },
      scale: {
        value: [0.2,1],
        duration: 0,
        easing: 'linear'
      }
    })

    var bbEight = anime.timeline({autoplay: false, loop: true})
    bbEight
    .add({
      targets: '.bb8-head',
      rotate: [0,5,-5,3,0],
      duration: 1900,
      easing: 'easeInOutCubic',
      offset: '+=200'
    })
    .add({
      targets: '.bb8-body',
      rotate: [0,-4,4,-2,0],
      duration: 1900,
      easing: 'easeInOutCubic',
      offset: '-=1870'
    })
    .add({
      targets: '.bb8-main, .bb8-shadow',
      translateX: [0,-4,4,-4,0],
      duration: 1900,
      easing: 'easeInOutCubic',
      offset: '-=1900'
    })
    .add({
      targets: '.bb8-head',
      rotate: [0,-28,-28,-25,-28,-25],
      duration: 6960,
      easing: [0.380, 0.170, 0.120, 1.030],
      offset: '+=50'
    })
    .add({
      targets: '.bb8-body',
      rotate: '-10turn',
      duration: 10200,
      easing: [0.300, 0.000, 0.580, 0.9955],
      offset: '-=5500'
    })
    .add({
      targets: '.bb8-main, .bb8-shadow',
      translateX: [0,-13],
      duration: 1400,
      easing: [0.670, 0.035, 0.720, 0.995],
      offset: '-=10500'
    })
    .add({
      targets: '.bb8-main, .bb8-shadow',
      translateX: [-13,0],
      duration: 2800,
      easing: [0.670, 0.035, 0.720, 0.995],
      offset: '-=3300'
    })
    .add({
      targets: '.bb8-head',
      rotate: [-28,12,0],
      duration: 6400,
      easing: [0.645, 0.045, 0.355, 1.000],
      offset: '-=4700'
    })
    .add({
      targets: '.bb8-head',
      rotate: [0,4,-4,2,-2,0],
      duration: 900,
      easing: [0.645, 0.045, 0.355, 1.000],
      offset: '+=200'
    })
    .add({
      targets: '.bb8-lines line',
      strokeDashoffset: -1092,
      duration: 5100,
      easing: 'linear',
      delay: function(el, i, l) {return i * 350;},
      offset: '-=10600'
    })


    var triggerFinger = anime.timeline({loop: true, autoplay: false})
      triggerFinger
      .add({
        targets: '.tf-fader',
        translateY: [0,-77,110,0],
        duration: 3280,
        easing: 'easeInQuart',
        delay: function(el, i, l) {return i * 300;}
      })
      .add({
        targets: '.tf-knob',
        rotate: [
          { value: function() { return anime.random(-0, 260); }},
          { value: function() { return anime.random(-0, 93); }},
          { value: function() { return anime.random(-0, 202); }},
          { value: 0},
        ],
        duration: 3180,
        easing: 'easeOutQuart',
        delay: function(el, i, l) {return i * 90;},
        offset: '-=3080'
      });
      $(".tfp").click(function(e){
    		var pop = $('<div class="pop">')
    			.css({"left": e.pageX + 'px',"top": e.pageY + 'px'})
          .append($('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" viewBox="0 0 114 114.7" style="enable-background:new 0 0 114 114.7;" xml:space="preserve"><line class="fcb-stroke" x1="57" y1="0" x2="57" y2="8.9"/><line class="fcb-stroke" x1="57" y1="114.7" x2="57" y2="105.8"/><line class="fcb-stroke" x1="16.8" y1="97.6" x2="23.1" y2="91.3"/><line class="fcb-stroke" x1="98.6" y1="95.5" x2="92.3" y2="89.2"/><line class="fcb-stroke" x1="16.8" y1="16.4" x2="23.1" y2="22.7"/><line class="fcb-stroke" x1="100.7" y1="19.8" x2="94.4" y2="26.2"/><line class="fcb-stroke" x1="0" y1="57" x2="8.9" y2="57"/><line class="fcb-stroke" x1="114" y1="57" x2="105.1" y2="57"/></svg>'))
    			.appendTo(document.body);
    		setTimeout(function() {pop.remove();}, 300);
      });


    var lamp = anime.timeline({autoplay: false, loop: true})
    lamp
    .add ({
      targets: '.lamp-s',
      translateY: [0,-80,0],
      translateX: [0,-3,0],
      scale: [1,1.1,1],
      rotate: [0,-4,4,-4,0],
      duration: 13000,
      easing: [0.455, 0.030, 0.515, 0.955],
      delay: function(el, i, l) {return i * 160;},
    })
    var lampLights = anime.timeline({autoplay: false, loop: true})
    .add ({
      targets: '.lamp-bl-2',
      opacity: [0.15,0.25,0.06,0.15],
      scaleX: [1,1.3,1],
      rotate: [0,5,0],
      duration: 10000,
      easing: 'easeInOutQuart'
    })
    .add ({
      targets: '.lamp-bl-1',
      opacity: [0.1,0.02,0.02,0.1],
      scaleX: [1,1.9,1],
      rotate: [0,-5,0],
      duration: 10000,
      easing: 'easeInOutQuart',
      offset: '-=9840'
    })

    $(function() {
      var message = "👋🐻";
      var original;
      $(window).focus(function() {
        if (original) {
          document.title = original;
        }
      }).blur(function() {
        var title = $('title').text();
        if (title != message) {
          original = title;
        }
        document.title = message;
      });
    });


  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
  function leftCtaCheck() {
    if($(window).scrollTop() + $(window).height() > $(document).height() - 420) {
      $(".left-cta").addClass("fadeo");
    }
    else {
      $(".left-cta").removeClass("fadeo");
    }
  }
  function bringFooter() {
    if($(window).scrollTop() + $(window).height() > $(document).height() - 120) {
      $(".footer-an").addClass("in-f");
    }
    else {
      $(".footer-an").removeClass("in-f");
    }
  }
  window.requestAnimFrame = (function() {
    return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback,element){
          window.setTimeout(callback, 1000 / 60);
        };
  })();
  window.requestTimeout = function(fn, delay) {
  if( !window.requestAnimationFrame      	&&
    !window.webkitRequestAnimationFrame &&
    !(window.mozRequestAnimationFrame && window.mozCancelRequestAnimationFrame) && // Firefox 5 ships without cancel support
    !window.oRequestAnimationFrame      &&
    !window.msRequestAnimationFrame)
      return window.setTimeout(fn, delay);
  var start = new Date().getTime(),
    handle = new Object();
  function loop(){
    var current = new Date().getTime(),
      delta = current - start;
    delta >= delay ? fn.call() : handle.value = requestAnimFrame(loop);
  };
  handle.value = requestAnimFrame(loop);
  return handle;
  };
  window.clearRequestTimeout = function(handle) {
    window.cancelAnimationFrame ? window.cancelAnimationFrame(handle.value) :
    window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(handle.value) :
    window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(handle.value) : /* Support for legacy API */
    window.mozCancelRequestAnimationFrame ? window.mozCancelRequestAnimationFrame(handle.value) :
    window.oCancelRequestAnimationFrame	? window.oCancelRequestAnimationFrame(handle.value) :
    window.msCancelRequestAnimationFrame ? window.msCancelRequestAnimationFrame(handle.value) :
    clearTimeout(handle);
  };

  //init top anims
  function landingAnims() {
    if($("main").hasClass("about")) { // change to about when
      bbEight.play();
    }
  }
  function playLandingAnims() {
    requestTimeout(landingAnims, 1000);
    $(".btn-1").addClass("fiu");
  }

  function menuReset() {
    if( $("body").hasClass("out") ) {
      $("body").removeClass("out");
    }
    closeMenu();
  }
  $(window).on('scroll', function() {
    navShadow();
    bringFooter();
    leftCtaCheck();
  });

  playLandingAnims();
  menuReset();

};
}(jQuery));



$(document).ready(function() {
  $('body').onPageLoad();
});

$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});
