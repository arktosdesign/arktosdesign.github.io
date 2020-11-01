$(document).ready(function(){

  function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';
    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  var $theChild = $(".the-child");
  var $heartSvg = $(".heart__svg");
  var $heartShape = $(".heart-shape");
  var $heartSvg2 = $(".heart--2__svg");
  var $heartSvgs = $(".heart__svg, .heart--2__svg");
  var $heartColour1 = $(".h0");  
  var $theChildSvg = $(".the-child__svg");
  var $theChildChild = $(".the-child__child");
  var $theChildBody = $("g.the-child__body");
  var $theChildHead = $("g.the-child__head");
  var $theChildEyesOpen = $("g.the-child__eyes--open");
  var $theChildEyesClosed = $("g.the-child__eyes--closed");
  var $theChildEyesHappy = $("g.the-child__eyes--happy");
  var $theChildArmLeft = $("g.the-child__arm--left");
  var $theChildArmRight = $("g.the-child__arm--right");
  var $lightningRect = $(".lightning__rect");
  var theChildHeadAnim = gsap.timeline({paused: true, repeat: -1, repeatDelay: 0.4})  

  gsap.set($theChildHead, {transformOrigin: '52% 50%'})
  theChildHeadAnim
  .to($theChildHead, {
    rotation: -4,
    duration: 0.3,
    ease: "power1.in"
  })
  .to($theChildHead, {
    rotation: 3,
    duration: 0.26,
    ease: "power1.in"
  }, '+=0.4')
  .to($theChildHead, {
    rotation: 0,
    duration: 0.36,
    ease: "power1.in"
  }, '+=0.12')
  var theChildBlinkAnim = gsap.timeline({paused: true, repeat: -1, repeatDelay: 1.2})
  theChildBlinkAnim
  .to($theChildEyesOpen, {
    opacity: 0,
    duration: 0.05,
    ease: "none"
  }, "+=1.8")
  .to($theChildEyesOpen, {
    opacity: 1,
    duration: 0.05,
    ease: "none"
  }, '+=0.1');

  var theChildArmsPickUp = gsap.timeline({paused: true, repeat: 0})
  theChildArmsPickUp
  .to($theChildArmLeft, {
    transformOrigin: '80% 0%',
    rotation: 120,
    duration: 0.12,
    ease: "power1.in"
  })
  .to($theChildArmRight, {
    transformOrigin: '5% 0%',
    rotation: -110,
    duration: 0.12,
    ease: "power1.in"
  }, '-=0.1')
  .to($theChildArmLeft, {
    transformOrigin: '80% 0%',
    rotation: 0,
    duration: 0.12,
    ease: "power1.in"
  }, '+=0.05')
  .to($theChildArmRight, {
    transformOrigin: '5% 0%',
    rotation: 0,
    duration: 0.12,
    ease: "power1.in"
  }, '-=0.002')

  var theChildBodyWobble = gsap.timeline({paused: true, repeat: 0})
  theChildBodyWobble
  .to($theChildBody, {
    transformOrigin: '50% 66%',
    rotation: 6,
    duration: 0.1,
    ease: "power1.in"
  })
  .to($theChildBody, {
    transformOrigin: '50% 66%',
    rotation: -5,
    duration: 0.1,
    ease: "power1.in"
  })
  .to($theChildBody, {
    transformOrigin: '50% 66%',
    rotation: 3,
    duration: 0.1,
    ease: "power1.in"
  })
  .to($theChildBody, {
    transformOrigin: '50% 66%',
    rotation: 0,
    duration: 0.1,
    ease: "power1.in"
  })

  var theChildWobble = gsap.timeline({paused: true, repeat: 0})
  theChildWobble
  .to($theChildSvg, {
    transformOrigin: '50% 50%',
    rotation: -3,    
    duration: 0.2,
    ease: "power2.in"
  })
  .to($theChildChild, {
    transformOrigin: '50% 30%',
    yPercent: 5,
    duration: 0.3,
    ease: "power2.out"
  }, '-=0.05')
  .to($theChildHead, {
    transformOrigin: '50% 30%',
    yPercent: 4,
    duration: 0.2,
    ease: "power2.out"
  }, '-=0.28')
  .to($theChildChild, {
    transformOrigin: '50% 50%',
    rotation: 0,
    duration: 0.3,    
    yPercent: 0,
    ease: "power2.in"
  })
  .to($theChildHead, {
    transformOrigin: '50% 30%',
    yPercent: 0,
    duration: 0.2,
    ease: "power2.out"
  }, '-=0.28')
  .to($theChildSvg, {
    transformOrigin: '50% 50%',
    rotation: 3,
    duration: 0.2,    
    ease: "power2.in"
  }, '-=0.1')



  gsap.set($theChildEyesHappy, {autoAlpha: 0});

  function theChildHappyFace() {
    gsap.set($theChildEyesHappy, {autoAlpha: 1})
    gsap.set($theChildEyesOpen, {autoAlpha: 0})
    gsap.set($theChildEyesClosed, {autoAlpha: 0})
  }
  function theChildNormalFace() {
    gsap.set($theChildEyesHappy, {autoAlpha: 0})
    gsap.set($theChildEyesOpen, {autoAlpha: 1})
    gsap.set($theChildEyesClosed, {autoAlpha: 1})
  }
  

  lightningStrikeAnim = gsap.timeline({paused: true, repeat: 0})
  lightningStrikeAnim
  .to($heartShape, {
    autoAlpha: 0,
    duration: 0.08,
    ease: "power4.out"
  }, '+=0.1') 
  .to($lightningRect, {
    yPercent: 200,
    duration: 0.8,
    ease: "power4.inOut"
  }, '-=0.04')

  lightningStrikeAnim.eventCallback("onComplete", function() {
    var $heartZone = $(".heart");
    var $heartZone2 = $(".heart--2");
    $heartZone.hide();
    $heartZone2.removeClass('is--hidden'); 
    gsap.to($heartSvg2, {autoAlpha: 1, duration: 0.3, ease: "power2.out"});
  });
  
  gsap.set($heartSvg2, {autoAlpha: 0, transformOrigin: '50% 50%'});


  theChildHeadAnim.play();
  theChildBlinkAnim.restart()

  gsap.set($heartSvg, {transformOrigin: '50% 50%'});

  interact('.js-dropzone').dropzone({
    accept: '#the-child',
    overlap: 0.05,
    ondropactivate: function (event) {
      gsap.to($heartSvgs, {scale: 1.35, ease: "power4.out", duration: 0.3})
      gsap.to($heartColour1, {fill: '#ebb402', ease: "power2.out", duration: 0.2})
      theChildHeadAnim.play();
      theChildBodyWobble.restart();
      theChildWobble.restart();
      event.relatedTarget.classList.add('the-child--is-dragging')
      event.target.classList.add('dragging');
    },
    ondragenter: function (event) {
      gsap.to($heartSvgs, {scale: 1.7, ease: "power4.out", duration: 0.6})
      gsap.to($heartColour1, {fill: '#D0527F', ease: "power2.out", duration: 0.4})
      theChildHappyFace();
      theChildBlinkAnim.restart();
      theChildArmsPickUp.restart();
      theChildBodyWobble.restart();
      theChildWobble.restart();
      var draggableElement = event.relatedTarget
      var dropzoneElement = event.target
      dropzoneElement.classList.add('heart--child-is-here')
      draggableElement.classList.add('the-child--is-here')
    },
    ondragleave: function (event) {
      gsap.to($heartColour1, {fill: '#ebb402', ease: "power2.out", duration: 0.2})
      gsap.to($heartSvgs, {scale: 1.35, ease: "power4.out", duration: 0.3})
      theChildNormalFace();
      theChildBlinkAnim.restart();
      event.target.classList.remove('dragging', 'heart--child-is-here', 'heart--dropped')
      event.relatedTarget.classList.remove('the-child--is-dragging', 'the-child--dropped', 'the-child--is-here')        
    },
    ondropdeactivate: function (event) {
      theChildBlinkAnim.restart();
      gsap.to($heartSvgs, {scale: 1, ease: "power4.out", duration: 0.3})
      gsap.to($heartColour1, {fill: '#ebb402', ease: "power2.in", duration: 0.1})
      theChildHeadAnim.pause();
      theChildBodyWobble.timeScale(1.1).restart();
      gsap.to($theChildHead, {rotation: 0, duration: 0.2, ease: "power2.out"})
      var draggableElement = event.relatedTarget
      var dropzoneElement = event.target               
      draggableElement.classList.remove('the-child--is-dragging')
      dropzoneElement.classList.remove('dragging')      
    },
    ondrop: function (event) {
      lightningStrikeAnim.restart();
      theChildBlinkAnim.restart()
      setTimeout(function(){
        theChildNormalFace();
        theChildBlinkAnim.restart();
      }, 600);      
      var draggableElement = event.relatedTarget
      var dropzoneElement = event.target
      dropzoneElement.classList.remove('heart--child-is-here', 'dragging')
      dropzoneElement.classList.add('heart--dropped')     
      draggableElement.classList.remove('the-child--is-dragging', 'the-child--is-here')   
      draggableElement.classList.add('the-child--dropped')
    }
  })

  var $slider = $(".slider");
  var $sliderInner = $(".slider__inner");
  $slider.hide();
  gsap.set($sliderInner, {yPercent: 200});

  var moveChild = gsap.timeline({ paused: true, repeat: 0 })
  moveChild
  .to($theChild, {
    x: '40%',
    y: '54%',
    duration: 1,
    ease: "power2.inOut"
  })
  .to($sliderInner, {
    yPercent: 0,
    duration: 0.6,
    ease: "power2.inOut"
  })

  interact('.js-dropzone--2').dropzone({
    accept: '#the-child',
    overlap: 0.05,
    ondropactivate: function (event) {
      gsap.to($heartSvgs, {scale: 1.35, ease: "power4.out", duration: 0.3})
      gsap.to($heartColour1, {fill: '#ebb402', ease: "power2.out", duration: 0.2})
      theChildHeadAnim.play();
      theChildBodyWobble.restart();
      theChildWobble.restart();
      event.relatedTarget.classList.add('the-child--is-dragging')
      event.target.classList.add('dragging');
    },
    ondragenter: function (event) {
      gsap.to($heartSvgs, {scale: 1.7, ease: "power4.out", duration: 0.6})
      gsap.to($heartColour1, {fill: '#D0527F', ease: "power2.out", duration: 0.4})
      theChildHappyFace();
      theChildBlinkAnim.restart();
      theChildArmsPickUp.restart();
      theChildBodyWobble.restart();
      theChildWobble.restart();
      var draggableElement = event.relatedTarget
      var dropzoneElement = event.target
      dropzoneElement.classList.add('heart--child-is-here')
      draggableElement.classList.add('the-child--is-here')
    },
    ondragleave: function (event) {
      gsap.to($heartColour1, {fill: '#ebb402', ease: "power2.out", duration: 0.2})
      gsap.to($heartSvgs, {scale: 1.35, ease: "power4.out", duration: 0.3})
      theChildNormalFace();
      theChildBlinkAnim.restart();
      event.target.classList.remove('dragging', 'heart--child-is-here', 'heart--dropped')
      event.relatedTarget.classList.remove('the-child--is-dragging', 'the-child--dropped', 'the-child--is-here')        
    },
    ondropdeactivate: function (event) {
      theChildBlinkAnim.restart();
      gsap.to($heartSvgs, {scale: 1, ease: "power4.out", duration: 0.3})
      gsap.to($heartColour1, {fill: '#ebb402', ease: "power2.in", duration: 0.1})
      theChildHeadAnim.pause();
      theChildBodyWobble.timeScale(1.1).restart();
      gsap.to($theChildHead, {rotation: 0, duration: 0.2, ease: "power2.out"})
      var draggableElement = event.relatedTarget
      var dropzoneElement = event.target               
      draggableElement.classList.remove('the-child--is-dragging')
      dropzoneElement.classList.remove('dragging')      
    },
    ondrop: function (event) {
      gsap.to($heartSvgs, {autoAlpha: 0, ease: "power4.out", duration: 1})
      var draggableElement = event.relatedTarget
      var dropzoneElement = event.target
      theChildNormalFace();      
      theChildBlinkAnim.restart();
      setTimeout(function(){
        theChildHeadAnim.restart();
      }, 200);
      interact('.js-drag-drop').draggable(false);      
      $slider.show();
      moveChild.restart();
    }
  })

  interact('.js-drag-drop')
    .draggable({
      inertia: true,
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: 'parent',
          endOnly: true
        }),
      ],
      autoScroll: true,
      listeners: { move: dragMoveListener }
    })
    .resizable({
      inertia: {
        resistance: 2,
        minSpeed: 100,
        endSpeed: 50
      }
    })


    var $img1 = $(".img--1");
    var $img2 = $(".img--2");
    var $img3 = $(".img--3");
    var $next1 = $(".next--1");
    var $next2 = $(".next--2");
    var $next3 = $(".next--3");
    var $sliderTitle = $(".slider__title");
    $next1.click(function(){
      $next1.hide();
      $next2.show();
      gsap.to($img1, {xPercent: -100, ease: "power3.out", duration: 0.6})
      gsap.to($img2, {xPercent: -100, ease: "power3.out", duration: 0.6})
      gsap.to($img3, {xPercent: -100, ease: "power3.out", duration: 0.6})
      $sliderTitle.text('...and always so proud of you...');
    });
    $next2.click(function(){
      $next2.hide();
      $next3.show();      
      gsap.to($img2, {xPercent: -200, ease: "power3.out", duration: 0.6})
      gsap.to($img3, {xPercent: -200, ease: "power3.out", duration: 0.6})
      $sliderTitle.text('Love from your Thomas xxxxx');      
    });
    $next3.click(function(){      
      $('.js-dropzone, .js-dropzone--2').hide();
      gsap.to($theChild, {
        x: '0%',
        y: '0%',
        duration: 0.6,
        ease: "power2.inOut"
      })
      gsap.to($sliderInner, {
        yPercent: 200,
        duration: 0.6,
        ease: "power2.inOut"
      })
      setTimeout(function(){
        $slider.hide();
        interact('.js-drag-drop').draggable(true);
      }, 600);
    });

    var $startScreen = $(".start-screen");
    var $startBtn = $("#start-btn");
    $startBtn.click(function(){
      gsap.to($startScreen, {
        yPercent: 150,
        ease: "power3.inOut",
        duration: 0.8,
        delay: 0.4
      })
    });

});