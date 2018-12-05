$(function(){"use strict";var e={blacklist:"form",scroll:!0,debug:!1,prefetch:!0,repeatDelay:1200,cacheLength:8,onStart:{duration:1300,render:function(e){e.addClass("is-exiting"),a.restartCSSAnimations()}},onReady:{duration:700,render:function(e,a){e.removeClass("is-exiting"),e.html(a)}},onAfter:function(e){e.onPageLoad()}},a=$("#main").smoothState(e).data("smoothState")}),function(J){J.fn.onPageLoad=function(){function a(){J("body").hasClass("menu-open")&&(J("body").removeClass("menu-open"),window.location.hash="")}function e(e,a){var t=setTimeout(function(){a(!1)},5e3),o=document.createElement("img");o.onload=function(){clearTimeout(t),a(!0)},o.onerror=function(){clearTimeout(t),a(!1)},o.src=e+"/favicon.ico"}function t(e){document.title=e}function o(){J(this).attr("size",J(this).val().length)}Splitting();var s=J("#video-1");J(function(){"use strict";var e=J(".snl");J(".main-menu ul li a").click(function(){J(this).parent().addClass("active").siblings().removeClass("active"),e.css({"stroke-dasharray":"0 390","stroke-dashoffset ":"0"})}),J(".main-menu ul li").find("a").hover(function(){J(this).hasClass("about-page")?e.css({"stroke-dasharray":"116 390","stroke-dashoffset":"0"}):J(this).hasClass("work-page")?e.css({"stroke-dasharray":"116 390","stroke-dashoffset":"-129"}):J(this).hasClass("contact-page")&&e.css({"stroke-dasharray":"116 390","stroke-dashoffset":"-266"})},function(){e.css({"stroke-dasharray":"0 390","stroke-dashoffset ":"0"})})});var n=J(".top-menu");J("#contactform").validate({rules:{email:"required",name:"required",message:"required"},messages:{email:"",name:"",message:""}});var i=J(".fs-dk-vid"),r=J(".fs-mob-vid");TweenMax.set(r,{autoAlpha:0}),TweenMax.set(i,{autoAlpha:1}),J(".fs-desktop").click(function(){J("#video-1")[0].play(),J("#video-2")[0].pause(),J(this).addClass("active-vid").siblings().removeClass("active-vid"),TweenMax.to(i,.6,{autoAlpha:1,ease:Power1.easeOut}),TweenMax.to(r,.6,{autoAlpha:0,ease:Power1.easeOut})}),J(".fs-mobile").click(function(){J("#video-2")[0].play(),J("#video-1")[0].pause(),J(this).addClass("active-vid").siblings().removeClass("active-vid"),TweenMax.to(r,.6,{autoAlpha:1,ease:Power1.easeOut}),TweenMax.to(i,.6,{autoAlpha:0,ease:Power1.easeOut})}),J("#sendMessage").on("click",function(){if(J("#contactform").valid())return J.ajax({url:"//formspree.io/arktosdesign@gmail.com",method:"POST",data:J("#contactform").serialize(),dataType:"json"}),TweenMax.set(J(".success-form"),{autoAlpha:0,scale:1.2,y:30,transformOrigin:"50% 50%"}),TweenMax.to(J("#contactform"),.4,{autoAlpha:0,ease:Power2.easeInOut}),TweenMax.to(J(".success-form"),.8,{autoAlpha:1,scale:1,y:0,delay:.2,ease:Power2.easeInOut}),!1}),J(".menu-toggle").click(function(){J("body").hasClass("menu-open")?a():(J("body").addClass("menu-open"),location.hash="main-menu")}),J(document).keyup(function(e){27==e.keyCode&&window.location.hash&&a()}),J(".logo a, .link").click(function(){J("body").hasClass("menu-open")?(J("body").addClass("out"),a()):J("body").addClass("no-p")}),J("a").click(function(){TweenMax.to(n,.1,{boxShadow:"0px 1px 6px rgba(0,0,0,0)",ease:Power1.easeOut})}),J(window).bind("hashchange",function(){null!=location.hash&&""!=location.hash||a()}),J(function(){J("main").hasClass("ind-pp")&&setTimeout(function(){e("http://arktosdesign.github.io",function(e){e?(J(".ind-pp").find(".status-online").show(),J(".ind-pp").find(".status-offline").hide()):(J(".ind-pp").find(".status-online").hide(),J(".ind-pp").find(".status-offline").show())})},200)}),J(function(){J("main").hasClass("ind-dt")&&setTimeout(function(){e("http://daytanner.co.uk",function(e){e?(J(".ind-dt").find(".status-online").show(),J(".ind-dt").find(".status-offline").hide()):(J(".ind-dt").find(".status-online").hide(),J(".ind-dt").find(".status-offline").show())})},200)}),J(function(){J("main").hasClass("ind-tc")&&setTimeout(function(){e("http://tecnodiagnostics.co.uk",function(e){e?(J(".ind-tc").find(".status-online").show(),J(".ind-tc").find(".status-offline").hide()):(J(".ind-tc").find(".status-online").hide(),J(".ind-tc").find(".status-offline").show())})},200)}),J(function(){navigator.vibrate=navigator.vibrate||navigator.webkitVibrate||navigator.mozVibrate||navigator.msVibrate,navigator.vibrate&&(J(".logo a, a.button, a.a-button, .t-button, .menu-toggle, ul.links li, .vbt").click(function(){navigator.vibrate(20)}),J("nav a").click(function(){navigator.vibrate(10)}))});var l=J(document).find("title").text(),u="👋 "+l;J(window).on("focus",function(){t(l)}).on("blur",function(){t(u)}),J('input[type="text"], input[type="email"]').keyup(o).each(o),function(){var e=document.querySelectorAll(".expanding"),a=function(e){e.style.height="auto",e.style.overflow="hidden",e.style.height=e.scrollHeight+e.offset+"px",e.style.overflow=""},t=function(e){e&&(e.offset=window.opera?e.offsetHeight+parseInt(window.getComputedStyle(e,null).getPropertyValue("border-top-width")):e.offsetHeight-e.clientHeight,a(e),e.addEventListener&&(e.addEventListener("input",function(){a(e)}),e.addEventListener("mouseup",function(){a(e)})),e.attachEvent&&e.attachEvent("onkeyup",function(){a(e)}))};document.querySelectorAll||(e=function(e,a,t){var o=new Array;t=t||"*";var s=(a=a||document).getElementsByTagName(t),n=s.length,i=new RegExp("(^|\\s)"+e+"(\\s|$)");for(r=0,j=0;r<n;r++)i.test(s[r].className)&&(o[j]=s[r],j++);return o}("expanding"));for(var r=0;r<e.length;r++)t(e[r])}();var c=J(".scroll-circ"),d=J(".scroll-lines");(Y=new TimelineMax({repeat:-1,repeatDelay:.1})).to(c,1,{autoAlpha:0,y:14,scale:.2,transformOrigin:"50% 50%",ease:Power2.easeInOut}).to(d,1,{strokeDashoffset:-36,ease:Power2.easeInOut},"-=1").to(c,0,{autoAlpha:0,y:0,scale:1,transformOrigin:"50% 50%",ease:Power2.easeInOut}).to(c,.3,{autoAlpha:1,ease:Power0.easeNone}),Y.play();var p=CustomEase.create("custom","M0,0,C0.2,0,0.354,0.276,0.507,0.512,0.653,0.737,0.798,1,1,1"),f=J(".blob-one"),w=new TimelineMax({repeat:-1,repeatDelay:0,yoyo:!0,paused:!0});w.to(f,4.5,{attr:{d:"M374.5,134c0,61-96.7,91-200.5,91S2.5,145.5,2.5,104C2.5,54,102.2,4,206,4S374.5,73,374.5,134z"},ease:p}).to(f,4.5,{attr:{d:"M374.5,104c0,61-131.7,121-235.5,121S2.5,133.5,2.5,92C2.5,42,80.2,4,184,4S374.5,43,374.5,104z"},ease:p}).to(f,4.5,{attr:{d:"M374.5,108c0,61-104.7,117-208.5,117S2.5,146.5,2.5,105C2.5,55,121.2,4,225,4S374.5,47,374.5,108z"},ease:p}).to(f,4.5,{attr:{d:"M374.5,124c0,61-74.7,101-178.5,101S2.5,131.5,2.5,90C2.5,40,84.2,4,188,4S374.5,63,374.5,124z"},ease:p}).to(f,4.5,{attr:{d:"M374.5,121c0,61-115.7,104-219.5,104S2.5,138.5,2.5,97C2.5,47,50.2,4,154,4S374.5,60,374.5,121z"},ease:p});var h=J(".blob-two"),m=new TimelineMax({repeat:-1,repeatDelay:0,yoyo:!0,paused:!0});m.to(h,4.5,{attr:{d:"M374.5,108c0,61-104.7,117-208.5,117S2.5,146.5,2.5,105C2.5,55,121.2,4,225,4S374.5,47,374.5,108z"},ease:p}).to(h,4.5,{attr:{d:"M374.5,134c0,61-96.7,91-200.5,91S2.5,145.5,2.5,104C2.5,54,102.2,4,206,4S374.5,73,374.5,134z"},ease:p}).to(h,4.5,{attr:{d:"M372,85c0,61-89.2,136-193,136S0,152.5,0,111C0,61,75.2,0,179,0S372,24,372,85z"},ease:p}).to(h,4.5,{attr:{d:"M374.5,104c0,61-131.7,121-235.5,121S2.5,133.5,2.5,92C2.5,42,80.2,4,184,4S374.5,43,374.5,104z"},ease:p}).to(h,4.5,{attr:{d:"M374.5,121c0,61-115.7,104-219.5,104S2.5,138.5,2.5,97C2.5,47,50.2,4,154,4S374.5,60,374.5,121z"},ease:p});var y=J(".blob-three"),g=new TimelineMax({repeat:-1,repeatDelay:0,yoyo:!0,paused:!0});g.to(y,4.5,{attr:{d:"M374.5,104c0,61-131.7,121-235.5,121S2.5,133.5,2.5,92C2.5,42,80.2,4,184,4S374.5,43,374.5,104z"},ease:p}).to(y,4.5,{attr:{d:"M374.5,93c0,61-136.7,132-240.5,132S2.5,168.5,2.5,127C2.5,77,94.2,4,198,4S374.5,32,374.5,93z"},ease:p}).to(y,4.5,{attr:{d:"M374.5,108c0,61-104.7,117-208.5,117S2.5,146.5,2.5,105C2.5,55,121.2,4,225,4S374.5,47,374.5,108z"},ease:p}).to(y,4.5,{attr:{d:"M374.5,121c0,61-115.7,104-219.5,104S2.5,138.5,2.5,97C2.5,47,50.2,4,154,4S374.5,60,374.5,121z"},ease:p}).to(y,4.5,{attr:{d:"M374.5,124c0,61-74.7,101-178.5,101S2.5,131.5,2.5,90C2.5,40,84.2,4,188,4S374.5,63,374.5,124z"},ease:p});var v=J(".screen-elements"),b=J(".screen-elements path"),x=new TimelineMax({paused:!0,yoyo:!0,repeat:-1,repeatDelay:0}),O=new TimelineMax({paused:!0,yoyo:!0,repeat:-1,repeatDelay:2});x.to(v,.06,{opacity:.8,ease:"linear"}),TweenMax.set(b,{autoAlpha:0,transformOrigin:"0% 50%"}),O.staggerTo(b,.9,{autoAlpha:1,ease:Power1.easeIn},.56);var P=J(".dk26"),C=new TimelineMax({paused:!0,yoyo:!0,repeat:-1,repeatDelay:0});C.to(P,.26,{scale:.82,transformOrigin:"50% 50%",ease:Elastic.easeOut.config(.6,.3)});var T=J(".tf-knob"),k=J(".tf-fader"),I=new TimelineMax({paused:!0,yoyo:!0,repeat:-1,repeatDelay:0});I.staggerTo(k,.9,{y:-20,ease:Power1.easeIn},.22).staggerTo(k,.9,{y:26,ease:Power1.easeIn}).staggerTo(k,.9,{y:0,ease:Power1.easeIn},.12).staggerTo(T,.6,{rotation:93,transformOrigin:"85% 15%",ease:Power3.easeInOut},.12,"-=3").staggerTo(T,.8,{rotation:220,transformOrigin:"85% 15%",ease:Power3.easeInOut},.1),J(".tfp").click(function(e){var a=J('<div class="pop">').css({left:e.pageX+"px",top:e.pageY+"px"}).append(J('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" viewBox="0 0 114 114.7" style="enable-background:new 0 0 114 114.7;" xml:space="preserve"><line class="fcb-stroke" x1="57" y1="0" x2="57" y2="8.9"/><line class="fcb-stroke" x1="57" y1="114.7" x2="57" y2="105.8"/><line class="fcb-stroke" x1="16.8" y1="97.6" x2="23.1" y2="91.3"/><line class="fcb-stroke" x1="98.6" y1="95.5" x2="92.3" y2="89.2"/><line class="fcb-stroke" x1="16.8" y1="16.4" x2="23.1" y2="22.7"/><line class="fcb-stroke" x1="100.7" y1="19.8" x2="94.4" y2="26.2"/><line class="fcb-stroke" x1="0" y1="57" x2="8.9" y2="57"/><line class="fcb-stroke" x1="114" y1="57" x2="105.1" y2="57"/></svg>')).appendTo(document.body);setTimeout(function(){a.remove()},300)});var M=J(".lamp-s"),S=J(".lamp-bl-1"),A=J(".lamp-bl-2"),z=new TimelineMax({paused:!0,repeat:-1,repeatDelay:0});z.staggerTo(M,5,{y:-36,x:-.9,scale:1.1,rotation:-4.2,transformOrigin:"50% 50%",ease:Power4.easeInOut},.08).staggerTo(M,6,{y:0,x:0,scale:1,rotation:0,transformOrigin:"50% 50%",ease:Power4.easeInOut},.08).to(A,4,{opacity:.15,scaleX:1.8,rotation:5,transformOrigin:"50% 50%",ease:Power3.easeInOut},"-=10").to(S,4,{opacity:0,scaleX:2,rotation:-5,transformOrigin:"50% 50%",ease:Power3.easeInOut},"-=10.3").to(A,4,{opacity:.15,scaleX:1,rotation:0,transformOrigin:"50% 50%",ease:Power3.easeInOut},"-=5").to(S,4,{opacity:.1,scaleX:1,rotation:0,transformOrigin:"50% 50%",ease:Power3.easeInOut},"-=5");var D=J(".bb8-head"),E=J(".bb8-body"),L=J(".bb8-main"),N=J(".bb8-shadow"),$=J(".bb8-lines line"),V=new TimelineMax({paused:!0,repeat:-1,repeatDelay:1,delay:1.7});TweenMax.set(D,{rotation:0,transformOrigin:"32% 163%"}),TweenMax.set(E,{rotation:0,transformOrigin:"50% 50%"}),V.to(D,.3,{rotation:5,ease:Power1.easeInOut}).to(D,.3,{rotation:-5,ease:Power1.easeInOut}).to(D,.3,{rotation:4,ease:Power1.easeInOut}).to(D,.3,{rotation:0,ease:Power1.easeInOut}).to(E,.3,{rotation:-4,ease:Power1.easeInOut},"-=1.2").to(E,.3,{rotation:4,ease:Power1.easeInOut},"-=0.9").to(E,.3,{rotation:-2,ease:Power1.easeInOut},"-=0.6").to(E,.3,{rotation:0,ease:Power1.easeInOut},"-=0.3").to([L,N],.3,{x:-4,ease:Power1.easeInOut},"-=1.2").to([L,N],.3,{x:4,ease:Power1.easeInOut},"-=0.9").to([L,N],.3,{x:-3,ease:Power1.easeInOut},"-=0.6").to([L,N],.3,{x:0,ease:Power1.easeInOut},"-=0.3").to(D,1,{rotation:-30,ease:Power1.easeInOut},"+=1").to([L,N],1.4,{x:-13,ease:Power2.easeInOut},"-=0.6").to(E,13,{rotation:-5400,ease:Power1.easeInOut},"-=1.2").staggerTo($,6,{strokeDashoffset:-1092,ease:Power0.easeNone},.18,"-=10").to(D,1.2,{rotation:-20,ease:Power1.easeInOut},"-=10.6").to(D,1.2,{rotation:-29,ease:Power1.easeInOut},"-=9").to(D,1.2,{rotation:-22,ease:Power1.easeInOut},"-=7.3").to(D,1.2,{rotation:-29,ease:Power1.easeInOut},"-=5.6").to(D,3,{rotation:20,ease:Power1.easeInOut},"-=4.2").to(D,1,{rotation:0,ease:Power1.easeInOut},"-=1.1").to([L,N],2,{x:0,ease:Power2.easeInOut},"-=3.3").to(D,.2,{rotation:7,ease:Power1.easeInOut},"+=0.9").to(D,.2,{rotation:-7,ease:Power1.easeInOut}).to(D,.2,{rotation:5,ease:Power1.easeInOut}).to(D,.2,{rotation:0,ease:Power1.easeInOut});var X=J(".bArm"),q=J(".bw13"),H=new TimelineMax({paused:!0,repeat:-1,delay:1.7,repeatDelay:0}),R=new TimelineMax({paused:!0,repeat:-1,delay:1.7,repeatDelay:.8});TweenMax.set(X,{transformOrigin:"95% 92%"}),H.staggerTo(q,.6,{opacity:0,ease:Power0.easeNone},.062).staggerTo(q,.6,{opacity:1,ease:Power0.easeNone},.062,"-=0.9"),R.to(X,.2,{rotation:-7,ease:Power1.easeInOut}).to(X,.2,{rotation:7,ease:Power1.easeInOut}).to(X,.2,{rotation:-5,ease:Power1.easeInOut}).to(X,.2,{rotation:4,ease:Power1.easeInOut}).to(X,.2,{rotation:-6,ease:Power1.easeInOut}).to(X,.2,{rotation:6,ease:Power1.easeInOut}).to(X,.2,{rotation:-7,ease:Power1.easeInOut}).to(X,.2,{rotation:4,ease:Power1.easeInOut}).to(X,.2,{rotation:-5,ease:Power1.easeInOut}).to(X,.2,{rotation:6,ease:Power1.easeInOut}).to(X,.2,{rotation:-5,ease:Power1.easeInOut}).to(X,.2,{rotation:0,ease:Power1.easeInOut}).to(X,1,{x:420,ease:Power1.easeInOut},"+=0.6").to(X,.6,{rotation:-22,ease:Power1.easeInOut},"-=1").to(X,1.2,{x:0,ease:Power0.easeNone},"+=1.7").to(X,.6,{rotation:0,ease:Power0.easeNone},"-=0.6"),TweenMax.set(J(".video-holder"),{autoAlpha:0,transformOrigin:"50% 50%"}),J(".work-item").mouseover(function(){J(this).find("#video").get(0).play().currentTime=0,TweenMax.to(J(this).find("video"),.6,{autoAlpha:1,ease:Power3.easeOut}),TweenMax.to(J(this).find(".video-holder"),.8,{autoAlpha:1,scale:1,ease:Power3.easeOut})}),J(".work-item").mouseout(function(){J(this).find("#video").get(0).pause(),TweenMax.to(J(this).find("video"),.6,{autoAlpha:0,ease:Power3.easeOut}),TweenMax.to(J(this).find(".video-holder"),.6,{autoAlpha:0,scale:1.08,ease:Power4.easeOut})});var Y=J(".scrollDown");Y.click(function(){J([document.documentElement,document.body]).animate({scrollTop:J("#sectionTwo").offset().top-48},780)}),J(".btt").click(function(){J([document.documentElement,document.body]).animate({scrollTop:J("header").offset().top},780)}),J(".fd, .fp").addClass("faded"),J(".btn-1, .for-header svg").addClass("fiu"),J("main").hasClass("home")?(w.play(),C.play(),x.play(),O.play()):J("main").hasClass("about")?(V.timeScale(1.3).play(),w.play()):J("main").hasClass("contact")&&(H.play(),R.play(),w.play(),m.timeScale(.7).play(),J(".header-links").addClass("uiu")),J("body").removeClass("out"),J("body").hasClass("no-p")&&J("body").removeClass("no-p"),a(),J(function(){if(J("div").hasClass("rellax"))new Rellax(".rellax")});new LazyLoad({elements_selector:".lazy",threshold:600,callback_enter:function(e){console.log("loadedimg")}});var B=0,G=120,Q=992,F=6;ScrollOut({targets:".ev",threshold:.5,once:!0,cssProps:{viewportY:!0,visibleY:!0},onShown:function(e){var a=J(e).find(".wiper"),t=J(e).find(".scale-wrap");0!==a.length&&(TweenMax.to(t,1.4,{x:"-50%",autoAlpha:1,ease:Expo.easeOut}),TweenMax.to(a,1,{scaleX:0,transformOrigin:"100% 0%",ease:Expo.easeInOut})),J(e).hasClass("vi-1")&&s[0].play()}}),ScrollOut({targets:".g-wrap",threshold:.2,onShown:function(e){J(e).hasClass("dk")&&(C.play(),x.play(),O.play(),console.log("dk >")),J(e).hasClass("bb8")?(V.timeScale(1.3).play(),w.play(),console.log("bb8 >")):J(e).hasClass("tf")?(I.play(),m.play(),console.log("tf >")):J(e).hasClass("lamp")?(z.play(),g.play(),console.log("lamp >")):J(e).hasClass("bwave")&&(w.play(),H.play(),R.play(),console.log("bwave >"))},onHidden:function(e){J(e).hasClass("dk")?(C.pause(),x.pause(),O.pause(),console.log("dk <")):J(e).hasClass("bb8")?(V.pause(),w.pause(),console.log("bb8 <")):J(e).hasClass("tf")?(I.pause(),m.pause(),console.log("tf <")):J(e).hasClass("lamp")?(z.pause(),g.pause(),console.log("lamp <")):J(e).hasClass("bwave")&&(w.pause(),H.pause(),R.pause(),console.log("bwave <"))}}),window.addEventListener("scroll",_.throttle(function(){console.log("scrolling");var e=J(".scroll-down"),a=J(".left-cta, .right-cta");if(J(".footer-an"),1<J(window).scrollTop()?TweenMax.to(e,.18,{autoAlpha:0,ease:Power0.easeIn}):TweenMax.to(e,.2,{autoAlpha:1,ease:Power0.easeOut}),J(window).scrollTop()+J(window).height()>J(document).height()-620?TweenMax.to(a,.2,{autoAlpha:0,ease:Power0.easeOut}):TweenMax.to(a,.2,{autoAlpha:1,ease:Power0.easeOut}),!n.hasClass("expanded")){var t=J(this).scrollTop(),o=Math.abs(t-B);G<t?(Q<t&&(n.hasClass("detached")||n.addClass("detached")),F<=o&&(B<t?n.hasClass("invisible")||n.addClass("invisible"):n.hasClass("invisible")&&n.removeClass("invisible"))):t<=0&&n.removeClass().addClass("top-menu"),B=t}},350,{leading:!0,trailing:!0}))}}(jQuery),$(document).ready(function(){$("body").onPageLoad()}),$(window).on("beforeunload",function(){$(window).scrollTop(0)});