$(function(){"use strict";var a={scroll:!0,debug:!1,prefetch:!0,cacheLength:2,onStart:{duration:700,render:function(a){a.addClass("is-exiting"),e.restartCSSAnimations()}},onReady:{duration:300,render:function(a,e){a.removeClass("is-exiting"),a.html(e)}},onAfter:function(a){a.onPageLoad()}},e=$("#main").smoothState(a).data("smoothState")}),function(b){b.fn.onPageLoad=function(){function e(){b("body").hasClass("menu-open")&&(b("body").removeClass("menu-open"),window.location.hash="")}function a(){b("main").hasClass("home")?u.play():b("main").hasClass("about")?(m.play(),u.play()):b("main").hasClass("contact")&&(p.play(),v.play(),u.play())}b(".fd, .fp").addClass("faded"),ScrollOut({targets:".ev",threshold:.5,once:!0,cssProps:{viewportY:!0,visibleY:!0}}),ScrollOut({targets:".g-wrap",threshold:.5,onShown:function(a){b(a).hasClass("bb8")?(m.play(),u.play()):b(a).hasClass("tf")?(w.play(),d.play()):b(a).hasClass("lamp")?(f.play(),g.play(),c.play()):b(a).hasClass("bwave")&&(u.play(),p.play(),v.play())},onHidden:function(a){b(a).hasClass("bb8")?(m.pause(),u.pause()):b(a).hasClass("tf")?(w.pause(),d.pause()):b(a).hasClass("lamp")?(f.pause(),g.pause(),c.pause()):b(a).hasClass("bwave")&&(u.pause(),p.pause(),v.pause())}}),b(function(){"use strict";var e,t,n;n=b("#slide-line"),b(".main-menu ul li a").click(function(){var a=b(this);a.parent().addClass("active").siblings().removeClass("active"),n.data("origLeft",a.position().left).data("origWidth",a.parent().width())}),b(".main-menu ul li").find("a").hover(function(){var a=b(this).find("span");e=a.position().left,t=a.parent().width(),n.css({left:e,width:t})},function(){n.css({width:"0"})})}),b(".menu-toggle").click(function(){b("body").hasClass("menu-open")?e():(b("body").addClass("menu-open"),location.hash="main-menu")}),b(document).keyup(function(a){27==a.keyCode&&window.location.hash&&e()}),b(".logo a, .link").click(function(){b("body").hasClass("menu-open")?(b("body").addClass("out"),e()):b("body").addClass("no-p")}),b("a").click(function(){b(".top-menu").hasClass("sc-sh")&&b(".top-menu").removeClass("sc-sh")}),b(window).bind("hashchange",function(){null!=location.hash&&""!=location.hash||e()});var t=b(".top-menu"),n=3,o=window.chrome,i=window.navigator,s=i.vendor,l=void 0!==window.opr,r=-1<i.userAgent.indexOf("Edge");i.userAgent.match("CriOS")||null!=o&&"Google Inc."===s&&!1===l&&!1===r&&b(function(){b.attractHover(".attract",{proximity:16,magnetism:2})}),b(".scroll-down svg").click(function(){b([document.documentElement,document.body]).animate({scrollTop:b("#sectionTwo").offset().top},780)}),anime.timeline({autoplay:!0,loop:!0}).add({targets:".scroll-down .scroll-circ",opacity:{value:[1,0],duration:1300,easing:"easeInOutQuart"},translateY:{value:[0,14],duration:1300,easing:"easeInOutQuint"},scale:{value:[1,.2],duration:1600,easing:"easeInOutQuint"}}).add({targets:".scroll-down .scroll-lines",strokeDashoffset:[0,-36],duration:1500,offset:"-=1400",easing:[.645,.045,.02,.995]}).add({targets:".scroll-down .scroll-circ",offset:"-=700",opacity:{value:[0,1],duration:700,easing:"easeInOutQuart"},translateY:{value:[14,0],duration:0,easing:"linear"},scale:{value:[.2,1],duration:0,easing:"linear"}});var u=anime({autoplay:!1,loop:!0,targets:".blob-one",duration:3e4,easing:[.42,0,.58,1],d:[{value:"M372,85c0,61-89.2,136-193,136S0,152.5,0,111C0,61,75.2,0,179,0S372,24,372,85z"},{value:"M374.5,134c0,61-96.7,91-200.5,91S2.5,145.5,2.5,104C2.5,54,102.2,4,206,4S374.5,73,374.5,134z"},{value:"M374.5,104c0,61-131.7,121-235.5,121S2.5,133.5,2.5,92C2.5,42,80.2,4,184,4S374.5,43,374.5,104z"},{value:"M374.5,108c0,61-104.7,117-208.5,117S2.5,146.5,2.5,105C2.5,55,121.2,4,225,4S374.5,47,374.5,108z"},{value:"M374.5,124c0,61-74.7,101-178.5,101S2.5,131.5,2.5,90C2.5,40,84.2,4,188,4S374.5,63,374.5,124z"},{value:"M374.5,121c0,61-115.7,104-219.5,104S2.5,138.5,2.5,97C2.5,47,50.2,4,154,4S374.5,60,374.5,121z"},{value:"M374.5,93c0,61-136.7,132-240.5,132S2.5,168.5,2.5,127C2.5,77,94.2,4,198,4S374.5,32,374.5,93z"},{value:"M372,85c0,61-89.2,136-193,136S0,152.5,0,111C0,61,75.2,0,179,0S372,24,372,85z"}]}),d=anime({autoplay:!1,loop:!0,targets:".blob-two",duration:3e4,easing:[.42,0,.58,1],d:[{value:"M374.5,124c0,61-74.7,101-178.5,101S2.5,131.5,2.5,90C2.5,40,84.2,4,188,4S374.5,63,374.5,124z"},{value:"M374.5,108c0,61-104.7,117-208.5,117S2.5,146.5,2.5,105C2.5,55,121.2,4,225,4S374.5,47,374.5,108z"},{value:"M374.5,134c0,61-96.7,91-200.5,91S2.5,145.5,2.5,104C2.5,54,102.2,4,206,4S374.5,73,374.5,134z"},{value:"M374.5,93c0,61-136.7,132-240.5,132S2.5,168.5,2.5,127C2.5,77,94.2,4,198,4S374.5,32,374.5,93z"},{value:"M372,85c0,61-89.2,136-193,136S0,152.5,0,111C0,61,75.2,0,179,0S372,24,372,85z"},{value:"M374.5,104c0,61-131.7,121-235.5,121S2.5,133.5,2.5,92C2.5,42,80.2,4,184,4S374.5,43,374.5,104z"},{value:"M374.5,121c0,61-115.7,104-219.5,104S2.5,138.5,2.5,97C2.5,47,50.2,4,154,4S374.5,60,374.5,121z"},{value:"M374.5,124c0,61-74.7,101-178.5,101S2.5,131.5,2.5,90C2.5,40,84.2,4,188,4S374.5,63,374.5,124z"}]}),c=anime({autoplay:!1,loop:!0,targets:".blob-three",duration:3e4,easing:[.42,0,.58,1],d:[{value:"M374.5,134c0,61-96.7,91-200.5,91S2.5,145.5,2.5,104C2.5,54,102.2,4,206,4S374.5,73,374.5,134z"},{value:"M374.5,104c0,61-131.7,121-235.5,121S2.5,133.5,2.5,92C2.5,42,80.2,4,184,4S374.5,43,374.5,104z"},{value:"M374.5,93c0,61-136.7,132-240.5,132S2.5,168.5,2.5,127C2.5,77,94.2,4,198,4S374.5,32,374.5,93z"},{value:"M374.5,108c0,61-104.7,117-208.5,117S2.5,146.5,2.5,105C2.5,55,121.2,4,225,4S374.5,47,374.5,108z"},{value:"M374.5,121c0,61-115.7,104-219.5,104S2.5,138.5,2.5,97C2.5,47,50.2,4,154,4S374.5,60,374.5,121z"},{value:"M374.5,124c0,61-74.7,101-178.5,101S2.5,131.5,2.5,90C2.5,40,84.2,4,188,4S374.5,63,374.5,124z"},{value:"M372,85c0,61-89.2,136-193,136S0,152.5,0,111C0,61,75.2,0,179,0S372,24,372,85z"},{value:"M374.5,134c0,61-96.7,91-200.5,91S2.5,145.5,2.5,104C2.5,54,102.2,4,206,4S374.5,73,374.5,134z"}]}),m=anime.timeline({autoplay:!1,loop:!0});m.add({targets:".bb8-head",rotate:[0,5,-5,3,0],duration:1900,easing:"easeInOutCubic",offset:"+=200"}).add({targets:".bb8-body",rotate:[0,-4,4,-2,0],duration:1900,easing:"easeInOutCubic",offset:"-=1870"}).add({targets:".bb8-main, .bb8-shadow",translateX:[0,-4,4,-4,0],duration:1900,easing:"easeInOutCubic",offset:"-=1900"}).add({targets:".bb8-head",rotate:[0,-28,-28,-25,-28,-25],duration:6960,easing:[.38,.17,.12,1.03],offset:"+=50"}).add({targets:".bb8-body",rotate:"-10turn",duration:10200,easing:[.3,0,.58,.9955],offset:"-=5500"}).add({targets:".bb8-main, .bb8-shadow",translateX:[0,-13],duration:1400,easing:[.67,.035,.72,.995],offset:"-=10500"}).add({targets:".bb8-main, .bb8-shadow",translateX:[-13,0],duration:2800,easing:[.67,.035,.72,.995],offset:"-=3300"}).add({targets:".bb8-head",rotate:[-28,12,0],duration:6400,easing:[.645,.045,.355,1],offset:"-=4700"}).add({targets:".bb8-head",rotate:[0,4,-4,2,-2,0],duration:900,easing:[.645,.045,.355,1],offset:"+=200"}).add({targets:".bb8-lines line",strokeDashoffset:-1092,duration:5100,easing:"linear",delay:function(a,e,t){return 350*e},offset:"-=10600"});var w=anime.timeline({loop:!0,autoplay:!1});w.add({targets:".tf-fader",translateY:[0,-20,30,0],duration:2280,easing:"easeInQuad",delay:function(a,e,t){return 300*e}}).add({targets:".tf-knob",rotate:[{value:function(){return anime.random(0,260)}},{value:function(){return anime.random(0,93)}},{value:function(){return anime.random(0,173)}},{value:0}],duration:2180,easing:"easeInOutQuad",delay:function(a,e,t){return 100*e},offset:"-=2280"}),b(".tfp").click(function(a){var e=b('<div class="pop">').css({left:a.pageX+"px",top:a.pageY+"px"}).append(b('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" viewBox="0 0 114 114.7" style="enable-background:new 0 0 114 114.7;" xml:space="preserve"><line class="fcb-stroke" x1="57" y1="0" x2="57" y2="8.9"/><line class="fcb-stroke" x1="57" y1="114.7" x2="57" y2="105.8"/><line class="fcb-stroke" x1="16.8" y1="97.6" x2="23.1" y2="91.3"/><line class="fcb-stroke" x1="98.6" y1="95.5" x2="92.3" y2="89.2"/><line class="fcb-stroke" x1="16.8" y1="16.4" x2="23.1" y2="22.7"/><line class="fcb-stroke" x1="100.7" y1="19.8" x2="94.4" y2="26.2"/><line class="fcb-stroke" x1="0" y1="57" x2="8.9" y2="57"/><line class="fcb-stroke" x1="114" y1="57" x2="105.1" y2="57"/></svg>')).appendTo(document.body);setTimeout(function(){e.remove()},300)});var f=anime({loop:!0,autoplay:!1,targets:".lamp-s",translateY:[0,-36,0],translateX:[0,-.9,0],scale:[1,1.1,1],rotate:[0,-4,4,-4,0],duration:13e3,easing:[.455,.03,.515,.955],delay:function(a,e,t){return 180*e}}),g=anime.timeline({autoplay:!1,loop:!0});g.add({targets:".lamp-bl-2",opacity:[.15,.25,.06,.15],scaleX:[1,1.8,1],rotate:[0,5,0],duration:1e4,easing:"easeInOutQuart"}).add({targets:".lamp-bl-1",opacity:[.1,0,0,.1],scaleX:[1,2.1,1],rotate:[0,-5,0],duration:1e4,easing:"easeInOutQuart",offset:"-=9840"});var v=anime({autoplay:!1,loop:!0,targets:".bw13",opacity:[{value:1},{value:function(){return anime.random(.2,.6)}},{value:1}],easing:"linear",duration:700,delay:function(a,e,t){return 120*e}}),p=anime.timeline({autoplay:!1,loop:!0});if(p.add({targets:".bArm",rotate:[0,-7,7,-4,3,-5,4,-6,6,-4,4,-3,1,0],easing:"easeInOutCubic",duration:2400}).add({targets:".bArm",translateX:{value:[0,420],duration:1800,easing:"easeInCubic"},rotate:{value:[0,-22],duration:1100,easing:"easeInOutCubic",delay:300},offset:"+=200"}).add({targets:".bArm",translateX:{value:[420,0],duration:1800,easing:"easeOutCubic"},rotate:{value:[-22,0],duration:900,easing:"easeInOutCubic",delay:350},offset:"+=1200"}).add({targets:"bArm",translateX:[0,0],duration:1200,easing:"linear"}),b(function(){var e,t="👋🐻 Arktos Design";b(window).focus(function(){e&&(document.title=e)}).blur(function(){var a=b("title").text();a!=t&&(e=a),document.title=t})}),b.fn.isInViewport=function(){var a=b(this).offset().top,e=a+b(this).outerHeight(),t=b(window).scrollTop(),n=t+b(window).height();return t<e&&a<n},window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a,e){window.setTimeout(a,1e3/60)},window.requestTimeout=function(t,n){if(!(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame&&window.mozCancelRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame))return window.setTimeout(t,n);var o=(new Date).getTime(),i=new Object;return i.value=requestAnimFrame(function a(){var e=(new Date).getTime();n<=e-o?t.call():i.value=requestAnimFrame(a)}),i},window.clearRequestTimeout=function(a){window.cancelAnimationFrame?window.cancelAnimationFrame(a.value):window.webkitCancelAnimationFrame?window.webkitCancelAnimationFrame(a.value):window.webkitCancelRequestAnimationFrame?window.webkitCancelRequestAnimationFrame(a.value):window.mozCancelRequestAnimationFrame?window.mozCancelRequestAnimationFrame(a.value):window.oCancelRequestAnimationFrame?window.oCancelRequestAnimationFrame(a.value):window.msCancelRequestAnimationFrame?window.msCancelRequestAnimationFrame(a.value):clearTimeout(a)},navigator.vibrate=navigator.vibrate||navigator.webkitVibrate||navigator.mozVibrate||navigator.msVibrate,navigator.vibrate&&(b(".logo a, a.button, a.a-button, .t-button, .menu-toggle, ul.links li").click(function(){navigator.vibrate(20)}),b("nav a").click(function(){navigator.vibrate(10)})),b("div").hasClass("rellax"))new Rellax(".rellax");b(window).on("scroll",function(){b(window).scrollTop()>n?(t.addClass("sc-sh"),b(".scroll-down").addClass("fout")):(t.removeClass("sc-sh"),b(".scroll-down").removeClass("fout")),b(window).scrollTop()+b(window).height()>b(document).height()-120?b(".footer-an").addClass("in-f"):b(".footer-an").removeClass("in-f"),b(window).scrollTop()+b(window).height()>b(document).height()-420?b(".left-cta, .right-cta").addClass("fadeo"):b(".left-cta, .right-cta").removeClass("fadeo")}),Splitting(),requestTimeout(a,700),b(".btn-1").addClass("fiu"),b("body").hasClass("out")?b("body").removeClass("out"):b("body").hasClass("no-p")&&b("body").removeClass("no-p"),e()}}(jQuery),$(document).ready(function(){$("body").onPageLoad()});