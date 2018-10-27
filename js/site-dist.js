$(function(){"use strict";var t={scroll:!0,debug:!0,prefetch:!0,cacheLength:1,onStart:{duration:600,render:function(t){t.addClass("is-exiting"),e.restartCSSAnimations()}},onReady:{duration:600,render:function(t,e){t.removeClass("is-exiting"),t.html(e)}},onAfter:function(t){t.onPageLoad()}},e=$("#main").smoothState(t).data("smoothState")}),function(c){c.fn.onPageLoad=function(){c(".fd, .fp").addClass("faded"),Splitting(),ScrollOut({cssProps:{viewportY:!0,visibleY:!0},targets:".ev",threshold:.6,once:!0}),c(function(){"use strict";var e,a,o;o=c("#slide-line"),c(".main-menu ul li a").click(function(){var t=c(this);t.parent().addClass("active").siblings().removeClass("active"),o.data("origLeft",t.position().left).data("origWidth",t.parent().width())}),c(".main-menu ul li").find("a").hover(function(){var t=c(this).find("span");e=t.position().left,a=t.parent().width(),o.css({left:e,width:a})},function(){o.css({width:"0"})})}),c("a.button, a.a-button, .menu-toggle, ul.links li").click(function(){navigator.vibrate([20])}),c(function(){var e,a="👋🐻";c(window).focus(function(){e&&(document.title=e)}).blur(function(){var t=c("title").text();t!=a&&(e=t),document.title=a})}),c(function(){var t=navigator.userAgent;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(t))return!1;/Chrome/i.test(t)&&c(function(){c.attractHover(".attract",{proximity:14,magnetism:2})})}),c(".scroll-down svg").click(function(){c([document.documentElement,document.body]).animate({scrollTop:c("#sectionTwo").offset().top},780)}),anime.timeline({autoplay:!0,loop:!0}).add({targets:".scroll-down .scroll-circ",opacity:{value:[1,0],duration:1300,easing:"easeInOutQuart"},translateY:{value:[0,14],duration:1300,easing:"easeInOutQuint"},scale:{value:[1,.2],duration:1600,easing:"easeInOutQuint"}}).add({targets:".scroll-down .scroll-lines",strokeDashoffset:[0,-36],duration:1500,offset:"-=1400",easing:[.645,.045,.02,.995]}).add({targets:".scroll-down .scroll-circ",offset:"-=700",opacity:{value:[0,1],duration:700,easing:"easeInOutQuart"},translateY:{value:[14,0],duration:0,easing:"linear"},scale:{value:[.2,1],duration:0,easing:"linear"}});var o=anime.timeline({loop:!0,autoplay:!1});o.add({targets:".tf-fader",translateY:[0,-77,110,0],duration:3280,easing:"easeInQuart",delay:function(t,e,a){return 300*e}}).add({targets:".tf-knob",rotate:[{value:function(){return anime.random(-0,260)}},{value:function(){return anime.random(-0,93)}},{value:function(){return anime.random(-0,202)}},{value:0}],duration:3180,easing:"easeOutQuart",delay:function(t,e,a){return 90*e},offset:"-=3080"}),c(".tfp").click(function(t){var e=c('<div class="pop">').css({left:t.pageX+"px",top:t.pageY+"px"}).append(c('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" viewBox="0 0 114 114.7" style="enable-background:new 0 0 114 114.7;" xml:space="preserve"><line class="fcb-stroke" x1="57" y1="0" x2="57" y2="8.9"/><line class="fcb-stroke" x1="57" y1="114.7" x2="57" y2="105.8"/><line class="fcb-stroke" x1="16.8" y1="97.6" x2="23.1" y2="91.3"/><line class="fcb-stroke" x1="98.6" y1="95.5" x2="92.3" y2="89.2"/><line class="fcb-stroke" x1="16.8" y1="16.4" x2="23.1" y2="22.7"/><line class="fcb-stroke" x1="100.7" y1="19.8" x2="94.4" y2="26.2"/><line class="fcb-stroke" x1="0" y1="57" x2="8.9" y2="57"/><line class="fcb-stroke" x1="114" y1="57" x2="105.1" y2="57"/></svg>')).appendTo(document.body);setTimeout(function(){e.remove()},300)});var n=anime.timeline({autoplay:!1,loop:!0});n.add({targets:".bb8-head",rotate:[0,5,-5,3,0],duration:1900,easing:"easeInOutCubic",offset:"+=200"}).add({targets:".bb8-body",rotate:[0,-4,4,-2,0],duration:1900,easing:"easeInOutCubic",offset:"-=1870"}).add({targets:".bb8-main, .bb8-shadow",translateX:[0,-4,4,-4,0],duration:1900,easing:"easeInOutCubic",offset:"-=1900"}).add({targets:".bb8-head",rotate:[0,-28,-28,-25,-28,-25],duration:6960,easing:[.38,.17,.12,1.03],offset:"+=50"}).add({targets:".bb8-body",rotate:"-15turn",duration:10200,easing:[.3,0,.58,.9955],offset:"-=5500"}).add({targets:".bb8-main, .bb8-shadow",translateX:[0,-13],duration:1400,easing:[.67,.035,.72,.995],offset:"-=10500"}).add({targets:".bb8-main, .bb8-shadow",translateX:[-13,0],duration:2800,easing:[.67,.035,.72,.995],offset:"-=3300"}).add({targets:".bb8-head",rotate:[-28,12,0],duration:6400,easing:[.645,.045,.355,1],offset:"-=4700"}).add({targets:".bb8-head",rotate:[0,4,-4,2,-2,0],duration:900,easing:[.645,.045,.355,1],offset:"+=200"}).add({targets:".bb8-lines line",strokeDashoffset:[-95,-1092],duration:5100,easing:"linear",delay:function(t,e,a){return 350*e},offset:"-=10600"});var s=anime.timeline({autoplay:!1,loop:!0});s.add({targets:".lamp-s",translateY:[0,-80,0],translateX:[0,-3,0],scale:[1,1.1,1],rotate:[0,-4,4,-4,0],duration:13e3,easing:[.455,.03,.515,.955],delay:function(t,e,a){return 160*e}});var i=anime.timeline({autoplay:!1,loop:!0}).add({targets:".lamp-bl-2",opacity:[.15,.25,.06,.15],scaleX:[1,1.3,1],rotate:[0,5,0],duration:1e4,easing:"easeInOutQuart"}).add({targets:".lamp-bl-1",opacity:[.1,.02,.02,.1],scaleX:[1,1.9,1],rotate:[0,-5,0],duration:1e4,easing:"easeInOutQuart",offset:"-=9840"}),t=c(".menu-toggle"),e=c(".top-menu");t.click(function(){c(this).hasClass("toggled")?(t.removeClass("toggled"),scrollPosition=c(window).scrollTop(),3<scrollPosition&&setTimeout(function(){e.addClass("sc-sh")},350),c("body").hasClass("no-of")&&c("body").removeClass("no-of")):(t.addClass("toggled"),c("body").addClass("no-of"),e.hasClass("sc-sh")&&e.removeClass("sc-sh"))});var a,l=3,r=0,d=5,u=e.outerHeight();setInterval(function(){a&&(!function(){var t=c(this).scrollTop();Math.abs(r-t)<=d||(r<t&&u<t?e.addClass("is-hidden"):t+c(window).height()<c(document).height()&&e.removeClass("is-hidden"),r=t)}(),a=!1)},1),c.fn.isInViewport=function(){var t=c(this).offset().top,e=t+c(this).outerHeight(),a=c(window).scrollTop(),o=a+c(window).height();return a<e&&t<o},c(window).on("scroll",function(){a=!0,c(window).scrollTop()>l?(e.addClass("sc-sh"),c(".scroll-down").addClass("fout")):(e.removeClass("sc-sh"),c(".scroll-down").removeClass("fout")),c(window).scrollTop()+c(window).height()>c(document).height()-180?c(".footer-an").addClass("in-f"):c(".footer-an").removeClass("in-f"),c(window).scrollTop()+c(window).height()>c(document).height()-420?c(".left-cta").addClass("fadeo"):c(".left-cta").removeClass("fadeo")}),c("a").click(function(){c(".top-menu").hasClass("sc-sh")&&c(".top-menu").removeClass("sc-sh")}),ScrollOut({targets:".bb8",threshold:.5,onShown:function(t,e,a){n.play(),console.log("bb8 is playing")},onHidden:function(t,e,a){n.pause(),console.log("bb8 is paused")}}),ScrollOut({targets:".tf",threshold:.5,onShown:function(t,e,a){o.play(),console.log("TF is playing")},onHidden:function(t,e,a){o.pause(),console.log("TF is paused")}}),ScrollOut({targets:".lamp",threshold:.5,onShown:function(t,e,a){i.play(),s.play(),console.log("Lamp is playing")},onHidden:function(t,e,a){i.pause(),s.pause(),console.log("Lamp is paused")}}),setTimeout(function(){n.play()},1400)}}(jQuery),$(document).ready(function(){$("body").onPageLoad()}),$(window).on("beforeunload",function(){$(window).scrollTop(0)});