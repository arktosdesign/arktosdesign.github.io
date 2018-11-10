$(function(){
  'use strict';
  var $page = $('#main'),
      options = {
        scroll: true,
        debug: false,
        prefetch: true,
        cacheLength: 4, // The number of pages to cache
        onStart: {
          duration: 700,
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

    $(function() {
      'use strict';
      var $sineLine;
      var $sineLine = $(".snl");
      $('.main-menu ul li a').click(function() {
        var $this = $(this);
        $this.parent().addClass('active').siblings().removeClass('active');
        $sineLine.css({'stroke-dasharray' : '0 390', 'stroke-dashoffset ' : '0'});
      });
      $('.main-menu ul li').find('a').hover(function() {
        if ($(this).hasClass("about-page")) {
          $sineLine.css({'stroke-dasharray' : '116 390', 'stroke-dashoffset' : '0'});
        }
        else if ($(this).hasClass("work-page")) {
          $sineLine.css({'stroke-dasharray' : '116 390', 'stroke-dashoffset' : '-129'});
        }
        else if ($(this).hasClass("contact-page")) {
          $sineLine.css({'stroke-dasharray' : '116 390', 'stroke-dashoffset' : '-266'});
        }
      }, function() {
        $sineLine.css({'stroke-dasharray' : '0 390', 'stroke-dashoffset ' : '0'});
      });
    });


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
        else {
          $("body").addClass("no-p");
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

    var bearStars = anime({
      autoplay: false,
      loop: true,
      targets: '.bw13',
      opacity: [
        { value: 1},
        { value: function() { return anime.random(0.2, 0.6); }},
        { value: 1},
      ],
      easing: 'linear',
      duration: 700,
      delay: function(el, i, l) {return i * 120;},
    });

    var bearWave = anime.timeline({autoplay: false, loop: true})
    bearWave
    .add({
      targets: '.bArm',
      rotate: [0,-7,7,-4,3,-5,4,-6,6,-4,4,-3,1,0],
      easing: 'easeInOutCubic',
      duration: 2400,
    })
    .add({
      targets: '.bArm',
      translateX: {
        value: [0,420],
        duration: 1800,
        easing: 'easeInCubic'
      },
      rotate: {
        value: [0,-22],
        duration: 1100,
        easing: 'easeInOutCubic',
        delay: 300
      },
      offset: '+=200'
    })
    .add({
      targets: '.bArm',
      translateX: {
        value: [420,0],
        duration: 1800,
        easing: 'easeOutCubic'
      },
      rotate: {
        value: [-22,0],
        duration: 900,
        easing: 'easeInOutCubic',
        delay: 350
      },
      offset: '+=1200'
    })
    .add({
      targets: 'bArm',
      translateX: [0,0],
      duration: 1200,
      easing: 'linear'
    })



var scrollCirc = $(".scroll-circ"),
    scrollLines = $(".scroll-lines");
    scrollDown = new TimelineMax({repeat: -1, repeatDelay: 0, yoyo: false});
    scrollDown
    .to(scrollCirc, 1, {autoAlpha: 0, y: 14, scale: 0.2, transformOrigin: '50% 50%', ease:Power2.easeInOut})
    .to(scrollLines, 1, {strokeDashoffset: -36, ease:Power2.easeInOut}, '-=1')
    .to(scrollCirc, 0, {autoAlpha: 0, y: 0, scale: 1, transformOrigin: '50% 50%', ease:Power2.easeInOut})
    .to(scrollCirc, 0.3, {autoAlpha: 1, ease:Power0.easeNone});
    scrollDown.play();
    $(".scroll-down svg, .scrollDown").click(function() {
      $([document.documentElement, document.body]).animate({
        scrollTop: $("#sectionTwo").offset().top -177
      }, 780);
    });

  var ease = CustomEase.create("custom", "M0,0,C0.2,0,0.354,0.276,0.507,0.512,0.653,0.737,0.798,1,1,1");
  var blobOnePath = $(".blob-one"),
      blobOne = new TimelineMax({repeat: -1, repeatDelay: 0, yoyo: true, paused: true});
      blobOne
      .to(blobOnePath, 4.5, { attr:{d: 'M374.5,134c0,61-96.7,91-200.5,91S2.5,145.5,2.5,104C2.5,54,102.2,4,206,4S374.5,73,374.5,134z'}, ease: ease})
      .to(blobOnePath, 4.5, { attr:{d: 'M374.5,104c0,61-131.7,121-235.5,121S2.5,133.5,2.5,92C2.5,42,80.2,4,184,4S374.5,43,374.5,104z'}, ease: ease})
      .to(blobOnePath, 4.5, { attr:{d: 'M374.5,108c0,61-104.7,117-208.5,117S2.5,146.5,2.5,105C2.5,55,121.2,4,225,4S374.5,47,374.5,108z'}, ease: ease})
      .to(blobOnePath, 4.5, { attr:{d: 'M374.5,124c0,61-74.7,101-178.5,101S2.5,131.5,2.5,90C2.5,40,84.2,4,188,4S374.5,63,374.5,124z'}, ease: ease})
      .to(blobOnePath, 4.5, { attr:{d: 'M374.5,121c0,61-115.7,104-219.5,104S2.5,138.5,2.5,97C2.5,47,50.2,4,154,4S374.5,60,374.5,121z'}, ease: ease});

  var blobTwoPath = $(".blob-two"),
      blobTwo = new TimelineMax({repeat: -1, repeatDelay: 0, yoyo: true, paused: true});
      blobTwo
      .to(blobTwoPath, 4.5, { attr:{d: 'M374.5,108c0,61-104.7,117-208.5,117S2.5,146.5,2.5,105C2.5,55,121.2,4,225,4S374.5,47,374.5,108z'}, ease: ease})
      .to(blobTwoPath, 4.5, { attr:{d: 'M374.5,134c0,61-96.7,91-200.5,91S2.5,145.5,2.5,104C2.5,54,102.2,4,206,4S374.5,73,374.5,134z'}, ease: ease})
      .to(blobTwoPath, 4.5, { attr:{d: 'M372,85c0,61-89.2,136-193,136S0,152.5,0,111C0,61,75.2,0,179,0S372,24,372,85z'}, ease: ease})
      .to(blobTwoPath, 4.5, { attr:{d: 'M374.5,104c0,61-131.7,121-235.5,121S2.5,133.5,2.5,92C2.5,42,80.2,4,184,4S374.5,43,374.5,104z'}, ease: ease})
      .to(blobTwoPath, 4.5, { attr:{d: 'M374.5,121c0,61-115.7,104-219.5,104S2.5,138.5,2.5,97C2.5,47,50.2,4,154,4S374.5,60,374.5,121z'}, ease: ease});

  var blobThreePath = $(".blob-three"),
      blobThree = new TimelineMax({repeat: -1, repeatDelay: 0, yoyo: true, paused: true});
      blobThree
      .to(blobThreePath, 4.5, { attr:{d: 'M374.5,104c0,61-131.7,121-235.5,121S2.5,133.5,2.5,92C2.5,42,80.2,4,184,4S374.5,43,374.5,104z'}, ease: ease})
      .to(blobThreePath, 4.5, { attr:{d: 'M374.5,93c0,61-136.7,132-240.5,132S2.5,168.5,2.5,127C2.5,77,94.2,4,198,4S374.5,32,374.5,93z'}, ease: ease})
      .to(blobThreePath, 4.5, { attr:{d: 'M374.5,108c0,61-104.7,117-208.5,117S2.5,146.5,2.5,105C2.5,55,121.2,4,225,4S374.5,47,374.5,108z'}, ease: ease})
      .to(blobThreePath, 4.5, { attr:{d: 'M374.5,121c0,61-115.7,104-219.5,104S2.5,138.5,2.5,97C2.5,47,50.2,4,154,4S374.5,60,374.5,121z'}, ease: ease})
      .to(blobThreePath, 4.5, { attr:{d: 'M374.5,124c0,61-74.7,101-178.5,101S2.5,131.5,2.5,90C2.5,40,84.2,4,188,4S374.5,63,374.5,124z'}, ease: ease});

  var tfKnob = $(".tf-knob"),
      tfFader = $(".tf-fader"),
      triggerFinger = new TimelineMax({paused: true, yoyo: true, repeat: -1, repeatDelay: 0});

      triggerFinger
      .staggerTo(tfFader, 0.9, {y: -20, ease:Power1.easeIn}, 0.22)
      .staggerTo(tfFader, 0.9, {y: 26, ease:Power1.easeIn})
      .staggerTo(tfFader, 0.9, {y: 0, ease:Power1.easeIn}, 0.12)
      .staggerTo(tfKnob, 0.6, {rotation: 93, transformOrigin: '85% 15%', ease:Power3.easeInOut}, 0.12, '-=3')
      .staggerTo(tfKnob, 0.8, {rotation: 220, transformOrigin: '85% 15%', ease:Power3.easeInOut}, 0.1);

      $(".tfp").click(function(e){
        var pop = $('<div class="pop">')
          .css({"left": e.pageX + 'px',"top": e.pageY + 'px'})
          .append($('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" viewBox="0 0 114 114.7" style="enable-background:new 0 0 114 114.7;" xml:space="preserve"><line class="fcb-stroke" x1="57" y1="0" x2="57" y2="8.9"/><line class="fcb-stroke" x1="57" y1="114.7" x2="57" y2="105.8"/><line class="fcb-stroke" x1="16.8" y1="97.6" x2="23.1" y2="91.3"/><line class="fcb-stroke" x1="98.6" y1="95.5" x2="92.3" y2="89.2"/><line class="fcb-stroke" x1="16.8" y1="16.4" x2="23.1" y2="22.7"/><line class="fcb-stroke" x1="100.7" y1="19.8" x2="94.4" y2="26.2"/><line class="fcb-stroke" x1="0" y1="57" x2="8.9" y2="57"/><line class="fcb-stroke" x1="114" y1="57" x2="105.1" y2="57"/></svg>'))
          .appendTo(document.body);
        setTimeout(function() {pop.remove();}, 300);
      });

  var lampS = $(".lamp-s"),
      lampBgOne = $(".lamp-bl-1"),
      lampBgTwo = $(".lamp-bl-2"),
      lamp = new TimelineMax({paused: true, repeat: -1, repeatDelay: 0});
      lamp
      .staggerTo(lampS, 5, {y: -36, x: -0.9, scale: 1.1, rotation: -4, transformOrigin: '50% 50%', ease: Power4.easeInOut}, 0.08)
      .staggerTo(lampS, 6, {y: 0, x: 0, scale: 1, rotation: 4, transformOrigin: '50% 50%', ease: Power4.easeInOut}, 0.08)
      .to(lampBgTwo, 4, {opacity: 0.15, scaleX: 1.8, rotation: 5, transformOrigin: '50% 50%', ease: Power3.easeInOut}, '-=10')
      .to(lampBgOne, 4, {opacity: 0, scaleX: 2, rotation: -5, transformOrigin: '50% 50%', ease: Power3.easeInOut}, '-=10.3')
      .to(lampBgTwo, 4, {opacity: 0.25, scaleX: 1, rotation: 0, transformOrigin: '50% 50%', ease: Power3.easeInOut}, '-=5')
      .to(lampBgOne, 4, {opacity: 0.15, scaleX: 1, rotation: 0, transformOrigin: '50% 50%', ease: Power3.easeInOut}, '-=5');














    $(".work-item").mouseover(function(){
      $(this).find(".video-holder").addClass("video-in");
      $(this).find("#video").get(0).play().currentTime = 0;

    });
    $(".work-item").mouseout(function(){
      $(this).find(".video-holder").removeClass("video-in");
      $(this).find("#video").get(0).pause();
    });

    $(function() {
      var message = "👋🐻 Arktos Design";
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





  function ctaCheck() {
    if($(window).scrollTop() + $(window).height() > $(document).height() - 420) {
      $(".left-cta, .right-cta").addClass("fadeo");
    }
    else {
      $(".left-cta, .right-cta").removeClass("fadeo");
    }
  }
  function bringFooter() {
    if($(window).scrollTop() + $(window).height() > $(document).height() - 130) {
      $(".footer-an").addClass("in-f");
    }
    else {
      $(".footer-an").removeClass("in-f");
    }
  }


 window.requestAnimFrame=(function(){return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback,element){window.setTimeout(callback, 1000 / 60);};})(); window.requestTimeout=function(fn, delay){if( !window.requestAnimationFrame && !window.webkitRequestAnimationFrame && !(window.mozRequestAnimationFrame && window.mozCancelRequestAnimationFrame) && !window.oRequestAnimationFrame && !window.msRequestAnimationFrame) return window.setTimeout(fn, delay); var start=new Date().getTime(), handle=new Object(); function loop(){var current=new Date().getTime(), delta=current - start; delta >=delay ? fn.call() : handle.value=requestAnimFrame(loop);}; handle.value=requestAnimFrame(loop); return handle;}; window.clearRequestTimeout=function(handle){window.cancelAnimationFrame ? window.cancelAnimationFrame(handle.value) : window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(handle.value) : window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(handle.value) : window.mozCancelRequestAnimationFrame ? window.mozCancelRequestAnimationFrame(handle.value) : window.oCancelRequestAnimationFrame? window.oCancelRequestAnimationFrame(handle.value) : window.msCancelRequestAnimationFrame ? window.msCancelRequestAnimationFrame(handle.value) : clearTimeout(handle);};


  navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
  if (navigator.vibrate) {
    $(".logo a, a.button, a.a-button, .t-button, .menu-toggle, ul.links li, .vbt").click(function(){
      navigator.vibrate(20);
    });
    $("nav a").click(function(){
      navigator.vibrate(10);
    });
  }

  $(window).on('scroll', function() {
    navShadow();
    bringFooter();
    ctaCheck();
  });

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
     if($(el).hasClass("bb8")) {
       bbEight.play();
       blobOne.play();
       console.log("bb8 >");
     }
     else if($(el).hasClass("tf")) {
       triggerFinger.play();
       blobTwo.play();
       console.log("tf >");
     }
     else if($(el).hasClass("lamp")) {
       lamp.play();
       blobThree.play();
       console.log("lamp >");
     }
     else if($(el).hasClass("bwave")) {
       blobOne.play();
       bearWave.play();
       bearStars.play();
       console.log("bwave >");
     }
    },
    onHidden: function(el) {
      if( $(el).hasClass("bb8") ) {
        bbEight.pause();
        blobOne.pause();
        console.log("bb8 <");
      }
      else if($(el).hasClass("tf")) {
        triggerFinger.pause();
        blobTwo.pause();
        console.log("tf <");
      }
      else if($(el).hasClass("lamp")) {
        lamp.pause();
        blobThree.pause();
        console.log("lamp <");
      }
      else if($(el).hasClass("bwave")) {
        blobOne.pause();
        bearWave.pause();
        bearStars.pause();
        console.log("bwave <");
      }
    }
  });



  $(function(){
    if($("div").hasClass("rellax")) {
      var rellax = new Rellax('.rellax');
    }
  });
  //init top anims
  function landingAnims() {
    if($("main").hasClass("home")) {
      blobOne.play();
    }
    else if($("main").hasClass("about")) {
      bbEight.play();
      blobOne.play();
    }
    else if($("main").hasClass("contact")) {
      bearWave.play();
      bearStars.play();
      blobOne.play();
      $(".header-links").addClass("uiu");
    }
  }
  function playLandingAnims() {
    requestTimeout(landingAnims, 900);
    $(".btn-1, .for-header svg").addClass("fiu");
  }

  function menuReset() {
    if( $("body").hasClass("out") ) {
      $("body").removeClass("out");
    }
    else if ( $("body").hasClass("no-p") ){
      $("body").removeClass("no-p");
    }
    closeMenu();
  }

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
