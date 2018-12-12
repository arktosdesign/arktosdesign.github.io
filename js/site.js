$(function(){
  'use strict';
  var $page = $('#main'),
      options = {
        blacklist: 'form',
        scroll: true,
        debug: false,
        prefetch: true,
        repeatDelay: 1200,
        cacheLength: 8, // The number of pages to cache
        onStart: {
          duration: 1300,
          render: function ($container) {
            $container.addClass('is-exiting');
            smoothState.restartCSSAnimations();
          },
        },
        onReady: {
          duration: 700,
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

  Splitting();

  var workHero = $('.work-ind-hero');
  TweenMax.set(workHero, {autoAlpha: 0, y: '5%'});

  var myLazyLoad = new LazyLoad({
      elements_selector: ".lazy",
      threshold: 300,
      callback_enter: function(el) {
        console.log('loadedimg');
        if($("div").hasClass("work-ind-hero")) {
          TweenMax.to(workHero, 0.77, {autoAlpha: 1, delay: 0.5, ease:Power3.easeOut, y: '0%'});
        }


      }
  });


  var headroomMenu = document.querySelector(".top-menu");

  var headroom  = new Headroom(headroomMenu, {
    "offset": 220,
    "tolerance": {
      up: 0,
      down: 0
    },
    "classes": {
      "initial": "topmenu--fixed",
      "pinned": "slideDown",
      "unpinned": "slideUp",
      "top": "top",
      "notTop" : "not-top",
    }
  });

  headroom.init();

  function onScroll() {
    // console.log("scrolling");
    var pastNav = 220,
        scrollDownEle = $(".scroll-down"),
        sideCtas = $(".left-cta, .right-cta");
    if ($(window).scrollTop() > pastNav) {
        TweenMax.to(scrollDownEle, 0.18, {autoAlpha: 0, ease:Power0.easeIn});
        TweenMax.to(topMenu, 0.2, {boxShadow: '0px 1px 8px rgba(0,0,0,0.16)', ease:Power2.easeOut});
    }
    else {
        TweenMax.to(scrollDownEle, .2, {autoAlpha: 1, ease:Power0.easeOut});
        TweenMax.to(topMenu, 0.2, {boxShadow: '0px 1px 8px rgba(0,0,0,0)', ease:Power2.easeOut});
    }
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 620) {
      TweenMax.to(sideCtas, 0.2, {autoAlpha: 0, ease:Power0.easeOut});
    }
    else {
      TweenMax.to(sideCtas, 0.2, {autoAlpha: 1, ease:Power0.easeOut});
    }
    if (window.pageYOffset === 0) {
      headroomMenu.classList.remove('slideDown')
    }
  }






  var videoOne = $("#video-1");
  var scaleWrap = $(".scale-wrap"),
      wiper = $(".wiper");
  TweenMax.set(scaleWrap, {autoAlpha: 0, x: '-80%', scale: 1});
  TweenMax.to(wiper, {scaleX: 1.05, transformOrigin: '100% 0%'});

  ScrollOut({
     targets: '.ev',
     threshold: 0.25,
     once: true,
     cssProps: {
       viewportY: true,
       visibleY: true
     },
     onShown: function(el) {
       var thisWiper = $(el).find('.wiper');
       var thisImage = $(el).find('.scale-wrap');
       if (thisWiper.length !== 0) {
         TweenMax.to(thisWiper, 1.3, {scaleX: 0, transformOrigin: '100% 0%', ease: Expo.easeInOut});
         TweenMax.to(thisImage, 1.7, {x: '-50%', autoAlpha: 1, ease: Expo.easeOut});
       }
       if ($(el).hasClass("vi-1")) {
         videoOne[0].play();
       }
     }
  });

  ScrollOut({
    targets: '.g-wrap',
    threshold: 0.25,
    onShown: function(el) {
    if ($(el).hasClass("dk")) {
      krkLoop.play();
      dkFlicker.play();
      dkScreen.play();
      console.log("dk >");
    }
     if($(el).hasClass("bb8")) {
       bbEight.timeScale(1.3).play();
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
       bearTwinkle.play();
       bearWave.play();
       console.log("bwave >");
     }
    },
    onHidden: function(el) {
      if ($(el).hasClass("dk")) {
        krkLoop.pause();
        dkFlicker.pause();
        dkScreen.pause();
        console.log("dk <");
      }
      else if($(el).hasClass("bb8")) {
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
        bearTwinkle.pause();
        bearWave.pause();
        console.log("bwave <");
      }
    }
  });






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

var topMenu = $(".top-menu");


    $("#contactform").validate({
    	rules: {
        email: "required",
        name: "required",
        message: "required"
    	},
      messages: {
        email: "",
        name: "",
        message: ""
      }
    });


    var fsDkVid = $(".fs-dk-vid"),
        fsMobVid = $(".fs-mob-vid");

    TweenMax.set(fsMobVid, {autoAlpha: 0});
    TweenMax.set(fsDkVid, {autoAlpha: 1});

    $(".fs-desktop").click(function(){
      $("#video-1")[0].play();
      $("#video-2")[0].pause();
      $(this).addClass('active-vid').siblings().removeClass('active-vid');
      TweenMax.to(fsDkVid, 0.6, {autoAlpha: 1, ease:Power1.easeOut});
      TweenMax.to(fsMobVid, 0.6, {autoAlpha: 0, ease:Power1.easeOut});
    });
    $(".fs-mobile").click(function(){
      $("#video-2")[0].play();
      $("#video-1")[0].pause();
      $(this).addClass('active-vid').siblings().removeClass('active-vid');
      TweenMax.to(fsMobVid, 0.6, {autoAlpha: 1, ease:Power1.easeOut});
      TweenMax.to(fsDkVid, 0.6, {autoAlpha: 0, ease:Power1.easeOut});
    });

    $("#sendMessage").on("click", function() {
      if($("#contactform").valid()) {
        $.ajax({
            url: "//formspree.io/arktosdesign@gmail.com",
            method: "POST",
            data: $('#contactform').serialize(),
            dataType: "json"
        });
        TweenMax.set($(".success-form"), {autoAlpha: 0, scale: 1.2, y: 30, transformOrigin:'50% 50%'});
        TweenMax.to($("#contactform"), 0.4, {autoAlpha: 0, ease:Power2.easeInOut});
        TweenMax.to($(".success-form"), 0.8, {autoAlpha: 1, scale: 1, y: 0, delay: 0.2, ease:Power2.easeInOut});
        return false;
      }
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
        TweenMax.to(topMenu, 0.2, {boxShadow: '0px 1px 8px rgba(0,0,0,0)', ease:Power2.easeOut});
      });
      $(window).bind('hashchange', function () {
        if (location.hash == null || location.hash == "") {
          closeMenu();
        }
      });


    $(function(){
      navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
      if (navigator.vibrate) {
        $(".logo a, a.button, a.a-button, .t-button, .menu-toggle, ul.links li, .vbt").click(function(){
          navigator.vibrate(20);
        });
        $("nav a").click(function(){
          navigator.vibrate(10);
        });
      }
    });

    var oldTitle = $(document).find("title").text();
    var newTitle = "👋 " + oldTitle;
    function setTitle(title){document.title = title;}
    $(window).on("focus", function(){
      setTitle(oldTitle);
    }).on("blur", function(){
      setTitle(newTitle);
    });

    function resizeInput() {
      $(this).attr('size', $(this).val().length);
    }
    $('input[type="text"], input[type="email"]')
        .keyup(resizeInput)
        .each(resizeInput);
    (function(){
      var textareas = document.querySelectorAll('.expanding'),
          resize = function(t) {
            t.style.height = 'auto';
            t.style.overflow = 'hidden';
            t.style.height = (t.scrollHeight + t.offset ) + 'px';
            t.style.overflow = '';
          },
          attachResize = function(t) {
            if ( t ) {
              t.offset = !window.opera ? (t.offsetHeight - t.clientHeight) : (t.offsetHeight + parseInt(window.getComputedStyle(t, null).getPropertyValue('border-top-width')));
              resize(t);
              if ( t.addEventListener ) {
                t.addEventListener('input', function() { resize(t); });
                t.addEventListener('mouseup', function() { resize(t); });
              }
              t['attachEvent'] && t.attachEvent('onkeyup', function() { resize(t); });
            }
          };

      if ( !document.querySelectorAll ) {
        function getElementsByClass(searchClass,node,tag) {
          var classElements = new Array();
          node = node || document;
          tag = tag || '*';
          var els = node.getElementsByTagName(tag);
          var elsLen = els.length;
          var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
          for (i = 0, j = 0; i < elsLen; i++) {
            if ( pattern.test(els[i].className) ) {
              classElements[j] = els[i];
              j++;
            }
          }
          return classElements;
        }
        textareas = getElementsByClass('expanding');
      }
      for (var i = 0; i < textareas.length; i++ ) {
        attachResize(textareas[i]);
      }
    })();

var scrollCirc = $(".scroll-circ"),
    scrollLines = $(".scroll-lines");
    scrollDown = new TimelineMax({repeat: -1, repeatDelay: 0.1});
    scrollDown
    .to(scrollCirc, 1, {autoAlpha: 0, y: 14, scale: 0.2, transformOrigin: '50% 50%', ease:Power2.easeInOut})
    .to(scrollLines, 1, {strokeDashoffset: -36, ease:Power2.easeInOut}, '-=1')
    .to(scrollCirc, 0, {autoAlpha: 0, y: 0, scale: 1, transformOrigin: '50% 50%', ease:Power2.easeInOut})
    .to(scrollCirc, 0.3, {autoAlpha: 1, ease:Power0.easeNone});
    scrollDown.play();



var blobOnePath = $(".blob-one"),
    blobOne = new TimelineMax({repeat: -1, repeatDelay: 0, yoyo: true, paused: true});
    blobOne
    .to(blobOnePath, 3.8, { attr:{d: 'M374.5,134c0,61-96.7,91-200.5,91S2.5,145.5,2.5,104C2.5,54,102.2,4,206,4S374.5,73,374.5,134z'}, ease: Power1.easeInOut})
    .to(blobOnePath, 3.8, { attr:{d: 'M374.5,104c0,61-131.7,121-235.5,121S2.5,133.5,2.5,92C2.5,42,80.2,4,184,4S374.5,43,374.5,104z'}, ease: Power1.easeInOut})
    .to(blobOnePath, 3.8, { attr:{d: 'M374.5,108c0,61-104.7,117-208.5,117S2.5,146.5,2.5,105C2.5,55,121.2,4,225,4S374.5,47,374.5,108z'}, ease: Power1.easeInOut})
    .to(blobOnePath, 3.8, { attr:{d: 'M374.5,124c0,61-74.7,101-178.5,101S2.5,131.5,2.5,90C2.5,40,84.2,4,188,4S374.5,63,374.5,124z'}, ease: Power1.easeInOut})
    .to(blobOnePath, 3.8, { attr:{d: 'M374.5,121c0,61-115.7,104-219.5,104S2.5,138.5,2.5,97C2.5,47,50.2,4,154,4S374.5,60,374.5,121z'}, ease: Power1.easeInOut});

var blobTwoPath = $(".blob-two"),
    blobTwo = new TimelineMax({repeat: -1, repeatDelay: 0, yoyo: true, paused: true});
    blobTwo
    .to(blobTwoPath, 3.8, { attr:{d: 'M374.5,108c0,61-104.7,117-208.5,117S2.5,146.5,2.5,105C2.5,55,121.2,4,225,4S374.5,47,374.5,108z'}, ease: Power1.easeInOut})
    .to(blobTwoPath, 3.8, { attr:{d: 'M374.5,134c0,61-96.7,91-200.5,91S2.5,145.5,2.5,104C2.5,54,102.2,4,206,4S374.5,73,374.5,134z'}, ease: Power1.easeInOut})
    .to(blobTwoPath, 3.8, { attr:{d: 'M372,85c0,61-89.2,136-193,136S0,152.5,0,111C0,61,75.2,0,179,0S372,24,372,85z'}, ease: Power1.easeInOut})
    .to(blobTwoPath, 3.8, { attr:{d: 'M374.5,104c0,61-131.7,121-235.5,121S2.5,133.5,2.5,92C2.5,42,80.2,4,184,4S374.5,43,374.5,104z'}, ease: Power1.easeInOut})
    .to(blobTwoPath, 3.8, { attr:{d: 'M374.5,121c0,61-115.7,104-219.5,104S2.5,138.5,2.5,97C2.5,47,50.2,4,154,4S374.5,60,374.5,121z'}, ease: Power1.easeInOut});

var blobThreePath = $(".blob-three"),
    blobThree = new TimelineMax({repeat: -1, repeatDelay: 0, yoyo: true, paused: true});
    blobThree
    .to(blobThreePath, 3.8, { attr:{d: 'M374.5,104c0,61-131.7,121-235.5,121S2.5,133.5,2.5,92C2.5,42,80.2,4,184,4S374.5,43,374.5,104z'}, ease: Power1.easeInOut})
    .to(blobThreePath, 3.8, { attr:{d: 'M374.5,93c0,61-136.7,132-240.5,132S2.5,168.5,2.5,127C2.5,77,94.2,4,198,4S374.5,32,374.5,93z'}, ease: Power1.easeInOut})
    .to(blobThreePath, 3.8, { attr:{d: 'M374.5,108c0,61-104.7,117-208.5,117S2.5,146.5,2.5,105C2.5,55,121.2,4,225,4S374.5,47,374.5,108z'}, ease: Power1.easeInOut})
    .to(blobThreePath, 3.8, { attr:{d: 'M374.5,121c0,61-115.7,104-219.5,104S2.5,138.5,2.5,97C2.5,47,50.2,4,154,4S374.5,60,374.5,121z'}, ease: Power1.easeInOut})
    .to(blobThreePath, 3.8, { attr:{d: 'M374.5,124c0,61-74.7,101-178.5,101S2.5,131.5,2.5,90C2.5,40,84.2,4,188,4S374.5,63,374.5,124z'}, ease: Power1.easeInOut});


var dkScreenEle = $(".screen-elements"),
    dkScreenPath = $(".screen-elements path"),
    dkEars = $(".dk-ears"),
    dkEarOne = $(".ear-1"),
    dkEarTwo = $(".ear-2"),
    dkFlicker = new TimelineMax({paused: true, yoyo: true, repeat: -1, repeatDelay: 0}),
    dkScreen = new TimelineMax({paused: true, yoyo: true, repeat: -1, repeatDelay: 2});

    dkFlicker
    .to(dkScreenEle, 0.06, {opacity: 0.8, ease:"linear"});

    TweenMax.set(dkScreenPath, {autoAlpha: 0, transformOrigin: '0% 50%'});
    TweenMax.set(dkEarOne, {rotation: '0', transformOrigin: '30% 74%'});
    TweenMax.set(dkEarTwo, {rotation: '0', transformOrigin: '70% 74%'});

    dkScreen
    .staggerTo(dkScreenPath, 0.9, {autoAlpha: 1, ease:Power1.easeIn}, 0.56)
    .staggerTo(dkEars, 0.3, {rotation: '10', ease:Power1.easeIn}, 0.1, "-=6")
    .staggerTo(dkEars, 0.3, {rotation: '-10', ease:Power1.easeIn}, 0.1, "-=6.3")
    .staggerTo(dkEars, 0.3, {rotation: '10', ease:Power1.easeIn}, 0.1, "-=6.6")
    .staggerTo(dkEars, 0.3, {rotation: '-10', ease:Power1.easeIn}, 0.1, "-=6.9")
    .staggerTo(dkEars, 0.3, {rotation: '0', ease:Power1.easeIn}, 0.1, "-=7.2");


var krk = $(".dk26"),
    krkLoop = new TimelineMax({paused: true, yoyo: true, repeat: -1, repeatDelay: 0});
    krkLoop
    .to(krk, 0.26, {scale:0.82, transformOrigin: '50% 50%', ease: Elastic.easeOut.config(0.6, 0.3)});


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
    .to(lampS, 5, {y: -36, x: -0.9, scale: 1.1, rotation: -4.2, transformOrigin: '50% 50%', ease: Power4.easeInOut})
    .to(lampS, 6, {y: 0, x: 0, scale: 1, rotation: 0, transformOrigin: '50% 50%', ease: Power4.easeInOut})
    .to(lampBgTwo, 4, {opacity: 0.15, scaleX: 1.8, rotation: 5, transformOrigin: '50% 50%', ease: Power3.easeInOut}, '-=10')
    .to(lampBgOne, 4, {opacity: 0, scaleX: 2, rotation: -5, transformOrigin: '50% 50%', ease: Power3.easeInOut}, '-=10.3')
    .to(lampBgTwo, 4, {opacity: 0.15, scaleX: 1, rotation: 0, transformOrigin: '50% 50%', ease: Power3.easeInOut}, '-=5')
    .to(lampBgOne, 4, {opacity: 0.1, scaleX: 1, rotation: 0, transformOrigin: '50% 50%', ease: Power3.easeInOut}, '-=5');

var bb8Head = $(".bb8-head"),
    bb8Body = $(".bb8-body"),
    bb8Main = $(".bb8-main"),
    bb8Shadow = $(".bb8-shadow"),
    bb8Lines = $(".bb8-lines line"),
    bbEight = new TimelineMax({paused: true, repeat: -1, repeatDelay: 1, delay: 1.7});

    TweenMax.set(bb8Head, {rotation: 0, transformOrigin: '32% 163%'});
    TweenMax.set(bb8Body, {rotation: 0, transformOrigin: '50% 50%'});
    bbEight
    .to(bb8Head, 0.3, {rotation: 5, ease: Power1.easeInOut})
    .to(bb8Head, 0.3, {rotation: -5, ease: Power1.easeInOut})
    .to(bb8Head, 0.3, {rotation: 4, ease: Power1.easeInOut})
    .to(bb8Head, 0.3, {rotation: 0, ease: Power1.easeInOut})
    .to(bb8Body, 0.3, {rotation: -4, ease: Power1.easeInOut}, '-=1.2')
    .to(bb8Body, 0.3, {rotation: 4, ease: Power1.easeInOut}, '-=0.9')
    .to(bb8Body, 0.3, {rotation: -2, ease: Power1.easeInOut}, '-=0.6')
    .to(bb8Body, 0.3, {rotation: 0, ease: Power1.easeInOut}, '-=0.3')
    .to([bb8Main, bb8Shadow], 0.3, {x: -4, ease: Power1.easeInOut}, '-=1.2')
    .to([bb8Main, bb8Shadow], 0.3, {x: 4, ease: Power1.easeInOut}, '-=0.9')
    .to([bb8Main, bb8Shadow], 0.3, {x: -3, ease: Power1.easeInOut}, '-=0.6')
    .to([bb8Main, bb8Shadow], 0.3, {x: 0, ease: Power1.easeInOut}, '-=0.3')
    .to(bb8Head, 1, {rotation: -30, ease: Power1.easeInOut}, '+=1')
    .to([bb8Main, bb8Shadow], 1.4, {x: -13, ease: Power2.easeInOut}, '-=0.6')
    .to(bb8Body, 13, {rotation: -5400, ease: Power1.easeInOut}, '-=1.2')
    .staggerTo(bb8Lines, 6, {strokeDashoffset: -1092, ease: Power0.easeNone}, 0.18, '-=10')
    .to(bb8Head, 1.2, {rotation: -20, ease:Power1.easeInOut}, '-=10.6')
    .to(bb8Head, 1.2, {rotation: -29, ease:Power1.easeInOut}, '-=9')
    .to(bb8Head, 1.2, {rotation: -22, ease:Power1.easeInOut}, '-=7.3')
    .to(bb8Head, 1.2, {rotation: -29, ease:Power1.easeInOut}, '-=5.6')
    .to(bb8Head, 3, {rotation: 20, ease:Power1.easeInOut}, '-=4.2')
    .to(bb8Head, 1, {rotation: 0, ease:Power1.easeInOut}, '-=1.1')
    .to([bb8Main, bb8Shadow], 2, {x: 0, ease: Power2.easeInOut}, '-=3.3')
    .to(bb8Head, 0.2, {rotation: 7, ease: Power1.easeInOut}, '+=0.9')
    .to(bb8Head, 0.2, {rotation: -7, ease: Power1.easeInOut})
    .to(bb8Head, 0.2, {rotation: 5, ease: Power1.easeInOut})
    .to(bb8Head, 0.2, {rotation: 0, ease: Power1.easeInOut});


  var bearArm = $(".bArm"),
      bearStar = $(".bw13"),
      bearTwinkle = new TimelineMax({paused: true, repeat: -1, delay: 1.7, repeatDelay: 0}),
      bearWave = new TimelineMax({paused: true, repeat: -1, delay: 1.7, repeatDelay: 0.8});
      TweenMax.set(bearArm, {transformOrigin: '95% 92%'});
      bearTwinkle
      .staggerTo(bearStar, 0.6, {opacity: 0, ease: Power0.easeNone}, 0.062)
      .staggerTo(bearStar, 0.6, {opacity: 1, ease: Power0.easeNone}, 0.062, '-=0.9');
      bearWave
      .to(bearArm, 0.2, {rotation: -7, ease:Power1.easeInOut})
      .to(bearArm, 0.2, {rotation: 7, ease:Power1.easeInOut})
      .to(bearArm, 0.2, {rotation: -5, ease:Power1.easeInOut})
      .to(bearArm, 0.2, {rotation: 4, ease:Power1.easeInOut})
      .to(bearArm, 0.2, {rotation: -6, ease:Power1.easeInOut})
      .to(bearArm, 0.2, {rotation: 6, ease:Power1.easeInOut})
      .to(bearArm, 0.2, {rotation: -7, ease:Power1.easeInOut})
      .to(bearArm, 0.2, {rotation: 4, ease:Power1.easeInOut})
      .to(bearArm, 0.2, {rotation: -5, ease:Power1.easeInOut})
      .to(bearArm, 0.2, {rotation: 6, ease:Power1.easeInOut})
      .to(bearArm, 0.2, {rotation: -5, ease:Power1.easeInOut})
      .to(bearArm, 0.2, {rotation: 0, ease:Power1.easeInOut})
      .to(bearArm, 1, {x: 420, ease:Power1.easeInOut}, '+=0.6')
      .to(bearArm, 0.6, {rotation: -22, ease:Power1.easeInOut}, '-=1')
      .to(bearArm, 1.2, {x: 0, ease:Power0.easeNone}, '+=1.7')
      .to(bearArm, 0.6, {rotation: 0, ease:Power0.easeNone}, '-=0.6');


    TweenMax.set($('.video-holder'), {autoAlpha: 0, transformOrigin: '50% 50%'});
    $(".work-item").mouseover(function(){
      $(this).find("#video").get(0).play().currentTime = 0;
      TweenMax.to($(this).find("video"), 0.6, {autoAlpha: 1, ease:Power3.easeOut});
      TweenMax.to($(this).find(".video-holder"), 0.8, {autoAlpha: 1, scale: 1, ease:Power3.easeOut});
    });
    $(".work-item").mouseout(function(){
      $(this).find("#video").get(0).pause();
      TweenMax.to($(this).find("video"), 0.6, {autoAlpha: 0, ease:Power3.easeOut});
      TweenMax.to($(this).find(".video-holder"), 0.6, {autoAlpha: 0, scale: 1.08, ease:Power4.easeOut});
    });



    var scrollDown = $(".scrollDown");
    scrollDown.click(function() {
      $([document.documentElement, document.body]).animate({
        scrollTop: $("#sectionTwo").offset().top - 48
      }, 780);
    });

    var btt = $(".btt");
    btt.click(function() {
      $([document.documentElement, document.body]).animate({
        scrollTop: $("header").offset().top
      }, 780);
    });





  function landingAnims() {
    var startTitles = $(".fd, .fp");
    startTitles.addClass("faded");

    $(".btn-1, .for-header svg").addClass("fiu");
    if($("main").hasClass("home")) {
      blobOne.play();
      krkLoop.play();
      dkFlicker.play();
      dkScreen.play();
    }
    else if($("main").hasClass("about")) {
      bbEight.timeScale(1.3).play();
      blobOne.play();
    }
    else if($("main").hasClass("contact")) {
      bearTwinkle.play();
      bearWave.play();
      blobOne.play();
      blobTwo.timeScale(0.7).play();
      $(".header-links").addClass("uiu");
    }
  }

  function menuReset() {
      $("body").removeClass("out");
    if ( $("body").hasClass("no-p") ){
      $("body").removeClass("no-p");
    }
    closeMenu();
  }

  landingAnims();
  menuReset();

  $(function(){
      if($("div").hasClass("rellax")) {
        var rellax = new Rellax('.rellax');
      }
  });


    window.addEventListener('scroll', _.throttle(onScroll, 350, { leading: true, trailing: true}));
    // window.addEventListener('scroll', _.debounce(onScroll, 200, { leading: true, trailing: true}));
    // $(window).on('scroll', _.throttle(onScroll, 350, { leading: true, trailing: true}));
};
}(jQuery));


$(document).ready(function() {
  $('body').onPageLoad();
});

$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});
