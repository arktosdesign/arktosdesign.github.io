$(function(){"use strict";var e={scroll:!0,debug:!1,prefetch:!0,cacheLength:2,onStart:{duration:700,render:function(e){e.addClass("is-exiting"),a.restartCSSAnimations()}},onReady:{duration:300,render:function(e,a){e.removeClass("is-exiting"),e.html(a)}},onAfter:function(e){e.onPageLoad()}},a=$("#main").smoothState(e).data("smoothState")}),function(l){l.fn.onPageLoad=function(){function a(){l("body").hasClass("menu-open")&&(l("body").removeClass("menu-open"),window.location.hash="")}function e(){l("main").hasClass("about")&&o.play()}l(".fd, .fp").addClass("faded"),Splitting(),ScrollOut({targets:".ev",threshold:.5,once:!0,cssProps:{viewportY:!0,visibleY:!0}}),ScrollOut({targets:".g-wrap",threshold:.5,onShown:function(e){l(e).find(".i-bg").addClass("a-run"),l(e).hasClass("bb8")?o.play():l(e).hasClass("tf")?i.play():l(e).hasClass("lamp")&&(s.play(),r.play())},onHidden:function(e){l(e).find(".i-bg").removeClass("a-run"),l(e).hasClass("bb8")?o.pause():l(e).hasClass("tf")?i.pause():l(e).hasClass("lamp")&&(s.pause(),r.pause())}}),l(function(){"use strict";var a,n,t;t=l("#slide-line"),l(".main-menu ul li a").click(function(){var e=l(this);e.parent().addClass("active").siblings().removeClass("active"),t.data("origLeft",e.position().left).data("origWidth",e.parent().width())}),l(".main-menu ul li").find("a").hover(function(){var e=l(this).find("span");a=e.position().left,n=e.parent().width(),t.css({left:a,width:n})},function(){t.css({width:"0"})})}),l(".logo a, a.button, a.a-button, .t-button, .menu-toggle, ul.links li").click(function(){navigator.vibrate([20])}),l("nav a").click(function(){navigator.vibrate([10])}),l(".menu-toggle").click(function(){l("body").hasClass("menu-open")?a():(l("body").addClass("menu-open"),location.hash="main-menu")}),l(document).keyup(function(e){27==e.keyCode&&window.location.hash&&a()}),l(".logo a, .link").click(function(){l("body").hasClass("menu-open")?(l("body").addClass("out"),a()):l("body").addClass("no-p")}),l("a").click(function(){l(".top-menu").hasClass("sc-sh")&&l(".top-menu").removeClass("sc-sh")}),l(window).bind("hashchange",function(){null!=location.hash&&""!=location.hash||a()});var n=l(".top-menu"),t=3;l(function(){var e=navigator.userAgent;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(e)||/Chrome/i.test(e)&&l(function(){l.attractHover(".attract",{proximity:16,magnetism:2})})}),l(".scroll-down svg").click(function(){l([document.documentElement,document.body]).animate({scrollTop:l("#sectionTwo").offset().top},780)}),anime.timeline({autoplay:!0,loop:!0}).add({targets:".scroll-down .scroll-circ",opacity:{value:[1,0],duration:1300,easing:"easeInOutQuart"},translateY:{value:[0,14],duration:1300,easing:"easeInOutQuint"},scale:{value:[1,.2],duration:1600,easing:"easeInOutQuint"}}).add({targets:".scroll-down .scroll-lines",strokeDashoffset:[0,-36],duration:1500,offset:"-=1400",easing:[.645,.045,.02,.995]}).add({targets:".scroll-down .scroll-circ",offset:"-=700",opacity:{value:[0,1],duration:700,easing:"easeInOutQuart"},translateY:{value:[14,0],duration:0,easing:"linear"},scale:{value:[.2,1],duration:0,easing:"linear"}});var o=anime.timeline({autoplay:!1,loop:!0});o.add({targets:".bb8-head",rotate:[0,5,-5,3,0],duration:1900,easing:"easeInOutCubic",offset:"+=200"}).add({targets:".bb8-body",rotate:[0,-4,4,-2,0],duration:1900,easing:"easeInOutCubic",offset:"-=1870"}).add({targets:".bb8-main, .bb8-shadow",translateX:[0,-4,4,-4,0],duration:1900,easing:"easeInOutCubic",offset:"-=1900"}).add({targets:".bb8-head",rotate:[0,-28,-28,-25,-28,-25],duration:6960,easing:[.38,.17,.12,1.03],offset:"+=50"}).add({targets:".bb8-body",rotate:"-10turn",duration:10200,easing:[.3,0,.58,.9955],offset:"-=5500"}).add({targets:".bb8-main, .bb8-shadow",translateX:[0,-13],duration:1400,easing:[.67,.035,.72,.995],offset:"-=10500"}).add({targets:".bb8-main, .bb8-shadow",translateX:[-13,0],duration:2800,easing:[.67,.035,.72,.995],offset:"-=3300"}).add({targets:".bb8-head",rotate:[-28,12,0],duration:6400,easing:[.645,.045,.355,1],offset:"-=4700"}).add({targets:".bb8-head",rotate:[0,4,-4,2,-2,0],duration:900,easing:[.645,.045,.355,1],offset:"+=200"}).add({targets:".bb8-lines line",strokeDashoffset:-1092,duration:5100,easing:"linear",delay:function(e,a,n){return 350*a},offset:"-=10600"});var i=anime.timeline({loop:!0,autoplay:!1});i.add({targets:".tf-fader",translateY:[0,-77,110,0],duration:3280,easing:"easeInQuart",delay:function(e,a,n){return 300*a}}).add({targets:".tf-knob",rotate:[{value:function(){return anime.random(-0,260)}},{value:function(){return anime.random(-0,93)}},{value:function(){return anime.random(-0,202)}},{value:0}],duration:3180,easing:"easeOutQuart",delay:function(e,a,n){return 90*a},offset:"-=3080"}),l(".tfp").click(function(e){var a=l('<div class="pop">').css({left:e.pageX+"px",top:e.pageY+"px"}).append(l('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" viewBox="0 0 114 114.7" style="enable-background:new 0 0 114 114.7;" xml:space="preserve"><line class="fcb-stroke" x1="57" y1="0" x2="57" y2="8.9"/><line class="fcb-stroke" x1="57" y1="114.7" x2="57" y2="105.8"/><line class="fcb-stroke" x1="16.8" y1="97.6" x2="23.1" y2="91.3"/><line class="fcb-stroke" x1="98.6" y1="95.5" x2="92.3" y2="89.2"/><line class="fcb-stroke" x1="16.8" y1="16.4" x2="23.1" y2="22.7"/><line class="fcb-stroke" x1="100.7" y1="19.8" x2="94.4" y2="26.2"/><line class="fcb-stroke" x1="0" y1="57" x2="8.9" y2="57"/><line class="fcb-stroke" x1="114" y1="57" x2="105.1" y2="57"/></svg>')).appendTo(document.body);setTimeout(function(){a.remove()},300)});var s=anime.timeline({autoplay:!1,loop:!0});s.add({targets:".lamp-s",translateY:[0,-80,0],translateX:[0,-3,0],scale:[1,1.1,1],rotate:[0,-4,4,-4,0],duration:13e3,easing:[.455,.03,.515,.955],delay:function(e,a,n){return 160*a}});var r=anime.timeline({autoplay:!1,loop:!0}).add({targets:".lamp-bl-2",opacity:[.15,.25,.06,.15],scaleX:[1,1.3,1],rotate:[0,5,0],duration:1e4,easing:"easeInOutQuart"}).add({targets:".lamp-bl-1",opacity:[.1,.02,.02,.1],scaleX:[1,1.9,1],rotate:[0,-5,0],duration:1e4,easing:"easeInOutQuart",offset:"-=9840"});l(function(){var a,n="👋🐻";l(window).focus(function(){a&&(document.title=a)}).blur(function(){var e=l("title").text();e!=n&&(a=e),document.title=n})}),l.fn.isInViewport=function(){var e=l(this).offset().top,a=e+l(this).outerHeight(),n=l(window).scrollTop(),t=n+l(window).height();return n<a&&e<t},window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e,a){window.setTimeout(e,1e3/60)},window.requestTimeout=function(n,t){if(!(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame&&window.mozCancelRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame))return window.setTimeout(n,t);var o=(new Date).getTime(),i=new Object;return i.value=requestAnimFrame(function e(){var a=(new Date).getTime();t<=a-o?n.call():i.value=requestAnimFrame(e)}),i},window.clearRequestTimeout=function(e){window.cancelAnimationFrame?window.cancelAnimationFrame(e.value):window.webkitCancelAnimationFrame?window.webkitCancelAnimationFrame(e.value):window.webkitCancelRequestAnimationFrame?window.webkitCancelRequestAnimationFrame(e.value):window.mozCancelRequestAnimationFrame?window.mozCancelRequestAnimationFrame(e.value):window.oCancelRequestAnimationFrame?window.oCancelRequestAnimationFrame(e.value):window.msCancelRequestAnimationFrame?window.msCancelRequestAnimationFrame(e.value):clearTimeout(e)},l(window).on("scroll",function(){l(window).scrollTop()>t?(n.addClass("sc-sh"),l(".scroll-down").addClass("fout")):(n.removeClass("sc-sh"),l(".scroll-down").removeClass("fout")),l(window).scrollTop()+l(window).height()>l(document).height()-120?l(".footer-an").addClass("in-f"):l(".footer-an").removeClass("in-f"),l(window).scrollTop()+l(window).height()>l(document).height()-420?l(".left-cta").addClass("fadeo"):l(".left-cta").removeClass("fadeo")}),requestTimeout(e,1e3),l(".btn-1").addClass("fiu"),a(),l("body").hasClass("out")?l("body").removeClass("out"):l("body").hasClass("no-p")&&l("body").removeClass("no-p"),a()}}(jQuery),$(document).ready(function(){$("body").onPageLoad()}),$(window).on("beforeunload",function(){$(window).scrollTop(0)});