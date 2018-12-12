$(function(){"use strict";var e={blacklist:"form",scroll:!0,debug:!1,prefetch:!0,repeatDelay:1200,cacheLength:8,onStart:{duration:1300,render:function(e){e.addClass("is-exiting"),a.restartCSSAnimations()}},onReady:{duration:700,render:function(e,a){e.removeClass("is-exiting"),e.html(a)}},onAfter:function(e){e.onPageLoad()}},a=$("#main").smoothState(e).data("smoothState")}),function(Q){Q.fn.onPageLoad=function(){function a(){Q("body").hasClass("menu-open")&&(Q("body").removeClass("menu-open"),window.location.hash="")}function e(e){document.title=e}function o(){Q(this).attr("size",Q(this).val().length)}Splitting();var t=Q(".work-ind-hero");TweenMax.set(t,{autoAlpha:0,y:"5%"});new LazyLoad({elements_selector:".lazy",threshold:300,callback_enter:function(e){console.log("loadedimg"),Q("div").hasClass("work-ind-hero")&&TweenMax.to(t,.77,{autoAlpha:1,delay:.5,ease:Power3.easeOut,y:"0%"})}});var s=document.querySelector(".top-menu");new Headroom(s,{offset:220,tolerance:{up:0,down:0},classes:{initial:"topmenu--fixed",pinned:"slideDown",unpinned:"slideUp",top:"top",notTop:"not-top"}}).init();var n=Q("#video-1"),r=Q(".scale-wrap"),i=Q(".wiper");TweenMax.set(r,{autoAlpha:0,x:"-80%",scale:1}),TweenMax.to(i,{scaleX:1.05,transformOrigin:"100% 0%"}),ScrollOut({targets:".ev",threshold:.25,once:!0,cssProps:{viewportY:!0,visibleY:!0},onShown:function(e){var a=Q(e).find(".wiper"),o=Q(e).find(".scale-wrap");0!==a.length&&(TweenMax.to(a,1.3,{scaleX:0,transformOrigin:"100% 0%",ease:Expo.easeInOut}),TweenMax.to(o,1.7,{x:"-50%",autoAlpha:1,ease:Expo.easeOut})),Q(e).hasClass("vi-1")&&n[0].play()}}),ScrollOut({targets:".g-wrap",threshold:.25,onShown:function(e){Q(e).hasClass("dk")&&(k.play(),b.play(),I.play(),console.log("dk >")),Q(e).hasClass("bb8")?(H.timeScale(1.3).play(),m.play(),console.log("bb8 >")):Q(e).hasClass("tf")?(S.play(),g.play(),console.log("tf >")):Q(e).hasClass("lamp")?(E.play(),O.play(),console.log("lamp >")):Q(e).hasClass("bwave")&&(m.play(),R.play(),B.play(),console.log("bwave >"))},onHidden:function(e){Q(e).hasClass("dk")?(k.pause(),b.pause(),I.pause(),console.log("dk <")):Q(e).hasClass("bb8")?(H.pause(),m.pause(),console.log("bb8 <")):Q(e).hasClass("tf")?(S.pause(),g.pause(),console.log("tf <")):Q(e).hasClass("lamp")?(E.pause(),O.pause(),console.log("lamp <")):Q(e).hasClass("bwave")&&(m.pause(),R.pause(),B.pause(),console.log("bwave <"))}}),Q(function(){"use strict";var e=Q(".snl");Q(".main-menu ul li a").click(function(){Q(this).parent().addClass("active").siblings().removeClass("active"),e.css({"stroke-dasharray":"0 390","stroke-dashoffset ":"0"})}),Q(".main-menu ul li").find("a").hover(function(){Q(this).hasClass("about-page")?e.css({"stroke-dasharray":"116 390","stroke-dashoffset":"0"}):Q(this).hasClass("work-page")?e.css({"stroke-dasharray":"116 390","stroke-dashoffset":"-129"}):Q(this).hasClass("contact-page")&&e.css({"stroke-dasharray":"116 390","stroke-dashoffset":"-266"})},function(){e.css({"stroke-dasharray":"0 390","stroke-dashoffset ":"0"})})});var l=Q(".top-menu");Q("#contactform").validate({rules:{email:"required",name:"required",message:"required"},messages:{email:"",name:"",message:""}});var u=Q(".fs-dk-vid"),c=Q(".fs-mob-vid");TweenMax.set(c,{autoAlpha:0}),TweenMax.set(u,{autoAlpha:1}),Q(".fs-desktop").click(function(){Q("#video-1")[0].play(),Q("#video-2")[0].pause(),Q(this).addClass("active-vid").siblings().removeClass("active-vid"),TweenMax.to(u,.6,{autoAlpha:1,ease:Power1.easeOut}),TweenMax.to(c,.6,{autoAlpha:0,ease:Power1.easeOut})}),Q(".fs-mobile").click(function(){Q("#video-2")[0].play(),Q("#video-1")[0].pause(),Q(this).addClass("active-vid").siblings().removeClass("active-vid"),TweenMax.to(c,.6,{autoAlpha:1,ease:Power1.easeOut}),TweenMax.to(u,.6,{autoAlpha:0,ease:Power1.easeOut})}),Q("#sendMessage").on("click",function(){if(Q("#contactform").valid())return Q.ajax({url:"//formspree.io/arktosdesign@gmail.com",method:"POST",data:Q("#contactform").serialize(),dataType:"json"}),TweenMax.set(Q(".success-form"),{autoAlpha:0,scale:1.2,y:30,transformOrigin:"50% 50%"}),TweenMax.to(Q("#contactform"),.4,{autoAlpha:0,ease:Power2.easeInOut}),TweenMax.to(Q(".success-form"),.8,{autoAlpha:1,scale:1,y:0,delay:.2,ease:Power2.easeInOut}),!1}),Q(".menu-toggle").click(function(){Q("body").hasClass("menu-open")?a():(Q("body").addClass("menu-open"),location.hash="main-menu")}),Q(document).keyup(function(e){27==e.keyCode&&window.location.hash&&a()}),Q(".logo a, .link").click(function(){Q("body").hasClass("menu-open")?(Q("body").addClass("out"),a()):Q("body").addClass("no-p")}),Q("a").click(function(){TweenMax.to(l,.2,{boxShadow:"0px 1px 8px rgba(0,0,0,0)",ease:Power2.easeOut})}),Q(window).bind("hashchange",function(){null!=location.hash&&""!=location.hash||a()}),Q(function(){navigator.vibrate=navigator.vibrate||navigator.webkitVibrate||navigator.mozVibrate||navigator.msVibrate,navigator.vibrate&&(Q(".logo a, a.button, a.a-button, .t-button, .menu-toggle, ul.links li, .vbt").click(function(){navigator.vibrate(20)}),Q("nav a").click(function(){navigator.vibrate(10)}))});var d=Q(document).find("title").text(),p="👋 "+d;Q(window).on("focus",function(){e(d)}).on("blur",function(){e(p)}),Q('input[type="text"], input[type="email"]').keyup(o).each(o),function(){var e=document.querySelectorAll(".expanding"),a=function(e){e.style.height="auto",e.style.overflow="hidden",e.style.height=e.scrollHeight+e.offset+"px",e.style.overflow=""},o=function(e){e&&(e.offset=window.opera?e.offsetHeight+parseInt(window.getComputedStyle(e,null).getPropertyValue("border-top-width")):e.offsetHeight-e.clientHeight,a(e),e.addEventListener&&(e.addEventListener("input",function(){a(e)}),e.addEventListener("mouseup",function(){a(e)})),e.attachEvent&&e.attachEvent("onkeyup",function(){a(e)}))};document.querySelectorAll||(e=function(e,a,o){var t=new Array;o=o||"*";var s=(a=a||document).getElementsByTagName(o),n=s.length,r=new RegExp("(^|\\s)"+e+"(\\s|$)");for(i=0,j=0;i<n;i++)r.test(s[i].className)&&(t[j]=s[i],j++);return t}("expanding"));for(var i=0;i<e.length;i++)o(e[i])}();var w=Q(".scroll-circ"),f=Q(".scroll-lines");(G=new TimelineMax({repeat:-1,repeatDelay:.1})).to(w,1,{autoAlpha:0,y:14,scale:.2,transformOrigin:"50% 50%",ease:Power2.easeInOut}).to(f,1,{strokeDashoffset:-36,ease:Power2.easeInOut},"-=1").to(w,0,{autoAlpha:0,y:0,scale:1,transformOrigin:"50% 50%",ease:Power2.easeInOut}).to(w,.3,{autoAlpha:1,ease:Power0.easeNone}),G.play();var h=Q(".blob-one"),m=new TimelineMax({repeat:-1,repeatDelay:0,yoyo:!0,paused:!0});m.to(h,3.8,{attr:{d:"M374.5,134c0,61-96.7,91-200.5,91S2.5,145.5,2.5,104C2.5,54,102.2,4,206,4S374.5,73,374.5,134z"},ease:Power1.easeInOut}).to(h,3.8,{attr:{d:"M374.5,104c0,61-131.7,121-235.5,121S2.5,133.5,2.5,92C2.5,42,80.2,4,184,4S374.5,43,374.5,104z"},ease:Power1.easeInOut}).to(h,3.8,{attr:{d:"M374.5,108c0,61-104.7,117-208.5,117S2.5,146.5,2.5,105C2.5,55,121.2,4,225,4S374.5,47,374.5,108z"},ease:Power1.easeInOut}).to(h,3.8,{attr:{d:"M374.5,124c0,61-74.7,101-178.5,101S2.5,131.5,2.5,90C2.5,40,84.2,4,188,4S374.5,63,374.5,124z"},ease:Power1.easeInOut}).to(h,3.8,{attr:{d:"M374.5,121c0,61-115.7,104-219.5,104S2.5,138.5,2.5,97C2.5,47,50.2,4,154,4S374.5,60,374.5,121z"},ease:Power1.easeInOut});var y=Q(".blob-two"),g=new TimelineMax({repeat:-1,repeatDelay:0,yoyo:!0,paused:!0});g.to(y,3.8,{attr:{d:"M374.5,108c0,61-104.7,117-208.5,117S2.5,146.5,2.5,105C2.5,55,121.2,4,225,4S374.5,47,374.5,108z"},ease:Power1.easeInOut}).to(y,3.8,{attr:{d:"M374.5,134c0,61-96.7,91-200.5,91S2.5,145.5,2.5,104C2.5,54,102.2,4,206,4S374.5,73,374.5,134z"},ease:Power1.easeInOut}).to(y,3.8,{attr:{d:"M372,85c0,61-89.2,136-193,136S0,152.5,0,111C0,61,75.2,0,179,0S372,24,372,85z"},ease:Power1.easeInOut}).to(y,3.8,{attr:{d:"M374.5,104c0,61-131.7,121-235.5,121S2.5,133.5,2.5,92C2.5,42,80.2,4,184,4S374.5,43,374.5,104z"},ease:Power1.easeInOut}).to(y,3.8,{attr:{d:"M374.5,121c0,61-115.7,104-219.5,104S2.5,138.5,2.5,97C2.5,47,50.2,4,154,4S374.5,60,374.5,121z"},ease:Power1.easeInOut});var x=Q(".blob-three"),O=new TimelineMax({repeat:-1,repeatDelay:0,yoyo:!0,paused:!0});O.to(x,3.8,{attr:{d:"M374.5,104c0,61-131.7,121-235.5,121S2.5,133.5,2.5,92C2.5,42,80.2,4,184,4S374.5,43,374.5,104z"},ease:Power1.easeInOut}).to(x,3.8,{attr:{d:"M374.5,93c0,61-136.7,132-240.5,132S2.5,168.5,2.5,127C2.5,77,94.2,4,198,4S374.5,32,374.5,93z"},ease:Power1.easeInOut}).to(x,3.8,{attr:{d:"M374.5,108c0,61-104.7,117-208.5,117S2.5,146.5,2.5,105C2.5,55,121.2,4,225,4S374.5,47,374.5,108z"},ease:Power1.easeInOut}).to(x,3.8,{attr:{d:"M374.5,121c0,61-115.7,104-219.5,104S2.5,138.5,2.5,97C2.5,47,50.2,4,154,4S374.5,60,374.5,121z"},ease:Power1.easeInOut}).to(x,3.8,{attr:{d:"M374.5,124c0,61-74.7,101-178.5,101S2.5,131.5,2.5,90C2.5,40,84.2,4,188,4S374.5,63,374.5,124z"},ease:Power1.easeInOut});var v=Q(".screen-elements"),P=Q(".screen-elements path"),b=new TimelineMax({paused:!0,yoyo:!0,repeat:-1,repeatDelay:0}),I=new TimelineMax({paused:!0,yoyo:!0,repeat:-1,repeatDelay:2});b.to(v,.06,{opacity:.8,ease:"linear"}),TweenMax.set(P,{autoAlpha:0,transformOrigin:"0% 50%"}),I.staggerTo(P,.9,{autoAlpha:1,ease:Power1.easeIn},.56);var T=Q(".dk26"),k=new TimelineMax({paused:!0,yoyo:!0,repeat:-1,repeatDelay:0});k.to(T,.26,{scale:.82,transformOrigin:"50% 50%",ease:Elastic.easeOut.config(.6,.3)});var M=Q(".tf-knob"),C=Q(".tf-fader"),S=new TimelineMax({paused:!0,yoyo:!0,repeat:-1,repeatDelay:0});S.staggerTo(C,.9,{y:-20,ease:Power1.easeIn},.22).staggerTo(C,.9,{y:26,ease:Power1.easeIn}).staggerTo(C,.9,{y:0,ease:Power1.easeIn},.12).staggerTo(M,.6,{rotation:93,transformOrigin:"85% 15%",ease:Power3.easeInOut},.12,"-=3").staggerTo(M,.8,{rotation:220,transformOrigin:"85% 15%",ease:Power3.easeInOut},.1),Q(".tfp").click(function(e){var a=Q('<div class="pop">').css({left:e.pageX+"px",top:e.pageY+"px"}).append(Q('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" viewBox="0 0 114 114.7" style="enable-background:new 0 0 114 114.7;" xml:space="preserve"><line class="fcb-stroke" x1="57" y1="0" x2="57" y2="8.9"/><line class="fcb-stroke" x1="57" y1="114.7" x2="57" y2="105.8"/><line class="fcb-stroke" x1="16.8" y1="97.6" x2="23.1" y2="91.3"/><line class="fcb-stroke" x1="98.6" y1="95.5" x2="92.3" y2="89.2"/><line class="fcb-stroke" x1="16.8" y1="16.4" x2="23.1" y2="22.7"/><line class="fcb-stroke" x1="100.7" y1="19.8" x2="94.4" y2="26.2"/><line class="fcb-stroke" x1="0" y1="57" x2="8.9" y2="57"/><line class="fcb-stroke" x1="114" y1="57" x2="105.1" y2="57"/></svg>')).appendTo(document.body);setTimeout(function(){a.remove()},300)});var A=Q(".lamp-s"),z=Q(".lamp-bl-1"),D=Q(".lamp-bl-2"),E=new TimelineMax({paused:!0,repeat:-1,repeatDelay:0});E.to(A,5,{y:-36,x:-.9,scale:1.1,rotation:-4.2,transformOrigin:"50% 50%",ease:Power4.easeInOut}).to(A,6,{y:0,x:0,scale:1,rotation:0,transformOrigin:"50% 50%",ease:Power4.easeInOut}).to(D,4,{opacity:.15,scaleX:1.8,rotation:5,transformOrigin:"50% 50%",ease:Power3.easeInOut},"-=10").to(z,4,{opacity:0,scaleX:2,rotation:-5,transformOrigin:"50% 50%",ease:Power3.easeInOut},"-=10.3").to(D,4,{opacity:.15,scaleX:1,rotation:0,transformOrigin:"50% 50%",ease:Power3.easeInOut},"-=5").to(z,4,{opacity:.1,scaleX:1,rotation:0,transformOrigin:"50% 50%",ease:Power3.easeInOut},"-=5");var L=Q(".bb8-head"),N=Q(".bb8-body"),X=Q(".bb8-main"),$=Q(".bb8-shadow"),q=Q(".bb8-lines line"),H=new TimelineMax({paused:!0,repeat:-1,repeatDelay:1,delay:1.7});TweenMax.set(L,{rotation:0,transformOrigin:"32% 163%"}),TweenMax.set(N,{rotation:0,transformOrigin:"50% 50%"}),H.to(L,.3,{rotation:5,ease:Power1.easeInOut}).to(L,.3,{rotation:-5,ease:Power1.easeInOut}).to(L,.3,{rotation:4,ease:Power1.easeInOut}).to(L,.3,{rotation:0,ease:Power1.easeInOut}).to(N,.3,{rotation:-4,ease:Power1.easeInOut},"-=1.2").to(N,.3,{rotation:4,ease:Power1.easeInOut},"-=0.9").to(N,.3,{rotation:-2,ease:Power1.easeInOut},"-=0.6").to(N,.3,{rotation:0,ease:Power1.easeInOut},"-=0.3").to([X,$],.3,{x:-4,ease:Power1.easeInOut},"-=1.2").to([X,$],.3,{x:4,ease:Power1.easeInOut},"-=0.9").to([X,$],.3,{x:-3,ease:Power1.easeInOut},"-=0.6").to([X,$],.3,{x:0,ease:Power1.easeInOut},"-=0.3").to(L,1,{rotation:-30,ease:Power1.easeInOut},"+=1").to([X,$],1.4,{x:-13,ease:Power2.easeInOut},"-=0.6").to(N,13,{rotation:-5400,ease:Power1.easeInOut},"-=1.2").staggerTo(q,6,{strokeDashoffset:-1092,ease:Power0.easeNone},.18,"-=10").to(L,1.2,{rotation:-20,ease:Power1.easeInOut},"-=10.6").to(L,1.2,{rotation:-29,ease:Power1.easeInOut},"-=9").to(L,1.2,{rotation:-22,ease:Power1.easeInOut},"-=7.3").to(L,1.2,{rotation:-29,ease:Power1.easeInOut},"-=5.6").to(L,3,{rotation:20,ease:Power1.easeInOut},"-=4.2").to(L,1,{rotation:0,ease:Power1.easeInOut},"-=1.1").to([X,$],2,{x:0,ease:Power2.easeInOut},"-=3.3").to(L,.2,{rotation:7,ease:Power1.easeInOut},"+=0.9").to(L,.2,{rotation:-7,ease:Power1.easeInOut}).to(L,.2,{rotation:5,ease:Power1.easeInOut}).to(L,.2,{rotation:0,ease:Power1.easeInOut});var V=Q(".bArm"),Y=Q(".bw13"),R=new TimelineMax({paused:!0,repeat:-1,delay:1.7,repeatDelay:0}),B=new TimelineMax({paused:!0,repeat:-1,delay:1.7,repeatDelay:.8});TweenMax.set(V,{transformOrigin:"95% 92%"}),R.staggerTo(Y,.6,{opacity:0,ease:Power0.easeNone},.062).staggerTo(Y,.6,{opacity:1,ease:Power0.easeNone},.062,"-=0.9"),B.to(V,.2,{rotation:-7,ease:Power1.easeInOut}).to(V,.2,{rotation:7,ease:Power1.easeInOut}).to(V,.2,{rotation:-5,ease:Power1.easeInOut}).to(V,.2,{rotation:4,ease:Power1.easeInOut}).to(V,.2,{rotation:-6,ease:Power1.easeInOut}).to(V,.2,{rotation:6,ease:Power1.easeInOut}).to(V,.2,{rotation:-7,ease:Power1.easeInOut}).to(V,.2,{rotation:4,ease:Power1.easeInOut}).to(V,.2,{rotation:-5,ease:Power1.easeInOut}).to(V,.2,{rotation:6,ease:Power1.easeInOut}).to(V,.2,{rotation:-5,ease:Power1.easeInOut}).to(V,.2,{rotation:0,ease:Power1.easeInOut}).to(V,1,{x:420,ease:Power1.easeInOut},"+=0.6").to(V,.6,{rotation:-22,ease:Power1.easeInOut},"-=1").to(V,1.2,{x:0,ease:Power0.easeNone},"+=1.7").to(V,.6,{rotation:0,ease:Power0.easeNone},"-=0.6"),TweenMax.set(Q(".video-holder"),{autoAlpha:0,transformOrigin:"50% 50%"}),Q(".work-item").mouseover(function(){Q(this).find("#video").get(0).play().currentTime=0,TweenMax.to(Q(this).find("video"),.6,{autoAlpha:1,ease:Power3.easeOut}),TweenMax.to(Q(this).find(".video-holder"),.8,{autoAlpha:1,scale:1,ease:Power3.easeOut})}),Q(".work-item").mouseout(function(){Q(this).find("#video").get(0).pause(),TweenMax.to(Q(this).find("video"),.6,{autoAlpha:0,ease:Power3.easeOut}),TweenMax.to(Q(this).find(".video-holder"),.6,{autoAlpha:0,scale:1.08,ease:Power4.easeOut})});var G=Q(".scrollDown");G.click(function(){Q([document.documentElement,document.body]).animate({scrollTop:Q("#sectionTwo").offset().top-48},780)}),Q(".btt").click(function(){Q([document.documentElement,document.body]).animate({scrollTop:Q("header").offset().top},780)}),Q(".fd, .fp").addClass("faded"),Q(".btn-1, .for-header svg").addClass("fiu"),Q("main").hasClass("home")?(m.play(),k.play(),b.play(),I.play()):Q("main").hasClass("about")?(H.timeScale(1.3).play(),m.play()):Q("main").hasClass("contact")&&(R.play(),B.play(),m.play(),g.timeScale(.7).play(),Q(".header-links").addClass("uiu")),Q("body").removeClass("out"),Q("body").hasClass("no-p")&&Q("body").removeClass("no-p"),a(),Q(function(){if(Q("div").hasClass("rellax"))new Rellax(".rellax")}),window.addEventListener("scroll",_.throttle(function(){var e=Q(".scroll-down"),a=Q(".left-cta, .right-cta");220<Q(window).scrollTop()?(TweenMax.to(e,.18,{autoAlpha:0,ease:Power0.easeIn}),TweenMax.to(l,.2,{boxShadow:"0px 1px 8px rgba(0,0,0,0.16)",ease:Power2.easeOut})):(TweenMax.to(e,.2,{autoAlpha:1,ease:Power0.easeOut}),TweenMax.to(l,.2,{boxShadow:"0px 1px 8px rgba(0,0,0,0)",ease:Power2.easeOut})),Q(window).scrollTop()+Q(window).height()>Q(document).height()-620?TweenMax.to(a,.2,{autoAlpha:0,ease:Power0.easeOut}):TweenMax.to(a,.2,{autoAlpha:1,ease:Power0.easeOut}),0===window.pageYOffset&&s.classList.remove("slideDown")},350,{leading:!0,trailing:!0}))}}(jQuery),$(document).ready(function(){$("body").onPageLoad()}),$(window).on("beforeunload",function(){$(window).scrollTop(0)});