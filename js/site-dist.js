$(function(){"use strict";var e={blacklist:"form",scroll:!0,debug:!1,prefetch:!0,repeatDelay:1200,cacheLength:8,onStart:{duration:1300,render:function(e){e.addClass("is-exiting"),a.restartCSSAnimations()}},onReady:{duration:700,render:function(e,a){e.removeClass("is-exiting"),e.html(a)}},onAfter:function(e){e.onPageLoad()}},a=$("#main").smoothState(e).data("smoothState")}),function(F){F.fn.onPageLoad=function(){function a(){F("body").hasClass("menu-open")&&(F("body").removeClass("menu-open"),window.location.hash="")}function e(e){document.title=e}function o(){F(this).attr("size",F(this).val().length)}Splitting();new LazyLoad({elements_selector:".lazy",threshold:300});var t=document.querySelector(".top-menu");new Headroom(t,{offset:220,tolerance:{up:0,down:0},classes:{initial:"topmenu--fixed",pinned:"slideDown",unpinned:"slideUp",top:"top",notTop:"not-top"}}).init();var s=F("#video-1"),n=F(".scale-wrap"),r=F(".wiper");TweenMax.set(n,{autoAlpha:0,x:"-80%",scale:1}),TweenMax.to(r,{scaleX:1.05,transformOrigin:"100% 0%"}),ScrollOut({targets:".ev",threshold:.25,once:!0,cssProps:{viewportY:!0,visibleY:!0},onShown:function(e){var a=F(e).find(".wiper"),o=F(e).find(".scale-wrap");0!==a.length&&(TweenMax.to(a,1.3,{scaleX:0,transformOrigin:"100% 0%",ease:Expo.easeInOut}),TweenMax.to(o,1.7,{x:"-50%",autoAlpha:1,ease:Expo.easeOut})),F(e).hasClass("vi-1")&&s[0].play()}}),ScrollOut({targets:".g-wrap",threshold:.25,onShown:function(e){F(e).hasClass("dk")&&(C.play(),T.play(),k.play(),dkScreen.play(),console.log("dk >")),F(e).hasClass("bb8")?(Y.timeScale(1.3).play(),m.play(),console.log("bb8 >")):F(e).hasClass("tf")?(z.play(),y.play(),console.log("tf >")):F(e).hasClass("lamp")?(N.play(),x.play(),console.log("lamp >")):F(e).hasClass("bwave")&&(m.play(),G.play(),Q.play(),console.log("bwave >"))},onHidden:function(e){F(e).hasClass("dk")?(C.pause(),T.pause(),k.pause(),dkScreen.pause(),console.log("dk <")):F(e).hasClass("bb8")?(Y.pause(),m.pause(),console.log("bb8 <")):F(e).hasClass("tf")?(z.pause(),y.pause(),console.log("tf <")):F(e).hasClass("lamp")?(N.pause(),x.pause(),console.log("lamp <")):F(e).hasClass("bwave")&&(m.pause(),G.pause(),Q.pause(),console.log("bwave <"))}}),F(function(){"use strict";var e=F(".snl");F(".main-menu ul li a").click(function(){F(this).parent().addClass("active").siblings().removeClass("active"),e.css({"stroke-dasharray":"0 390","stroke-dashoffset ":"0"})}),F(".main-menu ul li").find("a").hover(function(){F(this).hasClass("about-page")?e.css({"stroke-dasharray":"116 390","stroke-dashoffset":"0"}):F(this).hasClass("work-page")?e.css({"stroke-dasharray":"116 390","stroke-dashoffset":"-129"}):F(this).hasClass("contact-page")&&e.css({"stroke-dasharray":"116 390","stroke-dashoffset":"-266"})},function(){e.css({"stroke-dasharray":"0 390","stroke-dashoffset ":"0"})})});var i=F(".top-menu");F("#contactform").validate({rules:{email:"required",name:"required",message:"required"},messages:{email:"",name:"",message:""}});var l=F(".fs-dk-vid"),u=F(".fs-mob-vid");TweenMax.set(u,{autoAlpha:0}),TweenMax.set(l,{autoAlpha:1}),F(".fs-desktop").click(function(){F("#video-1")[0].play(),F("#video-2")[0].pause(),F(this).addClass("active-vid").siblings().removeClass("active-vid"),TweenMax.to(l,.6,{autoAlpha:1,ease:Power1.easeOut}),TweenMax.to(u,.6,{autoAlpha:0,ease:Power1.easeOut})}),F(".fs-mobile").click(function(){F("#video-2")[0].play(),F("#video-1")[0].pause(),F(this).addClass("active-vid").siblings().removeClass("active-vid"),TweenMax.to(u,.6,{autoAlpha:1,ease:Power1.easeOut}),TweenMax.to(l,.6,{autoAlpha:0,ease:Power1.easeOut})}),F("#sendMessage").on("click",function(){if(F("#contactform").valid())return F.ajax({url:"//formspree.io/arktosdesign@gmail.com",method:"POST",data:F("#contactform").serialize(),dataType:"json"}),TweenMax.set(F(".success-form"),{autoAlpha:0,scale:1.2,y:30,transformOrigin:"50% 50%"}),TweenMax.to(F("#contactform"),.4,{autoAlpha:0,ease:Power2.easeInOut}),TweenMax.to(F(".success-form"),.8,{autoAlpha:1,scale:1,y:0,delay:.2,ease:Power2.easeInOut}),!1}),F(".menu-toggle").click(function(){F("body").hasClass("menu-open")?a():(F("body").addClass("menu-open"),location.hash="main-menu")}),F(document).keyup(function(e){27==e.keyCode&&window.location.hash&&a()}),F(".logo a, .link").click(function(){F("body").hasClass("menu-open")?(F("body").addClass("out"),a()):F("body").addClass("no-p")}),F("a").click(function(){TweenMax.to(i,.2,{boxShadow:"0px 1px 8px rgba(0,0,0,0)",ease:Power2.easeOut})}),F(window).bind("hashchange",function(){null!=location.hash&&""!=location.hash||a()}),F(function(){navigator.vibrate=navigator.vibrate||navigator.webkitVibrate||navigator.mozVibrate||navigator.msVibrate,navigator.vibrate&&(F(".logo a, a.button, a.a-button, .t-button, .menu-toggle, ul.links li, .vbt").click(function(){navigator.vibrate(20)}),F("nav a").click(function(){navigator.vibrate(10)}))});var c=F(document).find("title").text(),d="👋 "+c;F(window).on("focus",function(){e(c)}).on("blur",function(){e(d)}),F('input[type="text"], input[type="email"]').keyup(o).each(o),function(){var e=document.querySelectorAll(".expanding"),a=function(e){e.style.height="auto",e.style.overflow="hidden",e.style.height=e.scrollHeight+e.offset+"px",e.style.overflow=""},o=function(e){e&&(e.offset=window.opera?e.offsetHeight+parseInt(window.getComputedStyle(e,null).getPropertyValue("border-top-width")):e.offsetHeight-e.clientHeight,a(e),e.addEventListener&&(e.addEventListener("input",function(){a(e)}),e.addEventListener("mouseup",function(){a(e)})),e.attachEvent&&e.attachEvent("onkeyup",function(){a(e)}))};document.querySelectorAll||(e=function(e,a,o){var t=new Array;o=o||"*";var s=(a=a||document).getElementsByTagName(o),n=s.length,r=new RegExp("(^|\\s)"+e+"(\\s|$)");for(i=0,j=0;i<n;i++)r.test(s[i].className)&&(t[j]=s[i],j++);return t}("expanding"));for(var i=0;i<e.length;i++)o(e[i])}();var p=F(".scroll-circ"),w=F(".scroll-lines");(U=new TimelineMax({repeat:-1,repeatDelay:.1})).to(p,1,{autoAlpha:0,y:14,scale:.2,transformOrigin:"50% 50%",ease:Power2.easeInOut}).to(w,1,{strokeDashoffset:-36,ease:Power2.easeInOut},"-=1").to(p,0,{autoAlpha:0,y:0,scale:1,transformOrigin:"50% 50%",ease:Power2.easeInOut}).to(p,.3,{autoAlpha:1,ease:Power0.easeNone}),U.play();var f=F(".blob-one"),m=new TimelineMax({repeat:-1,repeatDelay:0,yoyo:!0,paused:!0});m.to(f,3.8,{attr:{d:"M374.5,134c0,61-96.7,91-200.5,91S2.5,145.5,2.5,104C2.5,54,102.2,4,206,4S374.5,73,374.5,134z"},ease:Power1.easeInOut}).to(f,3.8,{attr:{d:"M374.5,104c0,61-131.7,121-235.5,121S2.5,133.5,2.5,92C2.5,42,80.2,4,184,4S374.5,43,374.5,104z"},ease:Power1.easeInOut}).to(f,3.8,{attr:{d:"M374.5,108c0,61-104.7,117-208.5,117S2.5,146.5,2.5,105C2.5,55,121.2,4,225,4S374.5,47,374.5,108z"},ease:Power1.easeInOut}).to(f,3.8,{attr:{d:"M374.5,124c0,61-74.7,101-178.5,101S2.5,131.5,2.5,90C2.5,40,84.2,4,188,4S374.5,63,374.5,124z"},ease:Power1.easeInOut}).to(f,3.8,{attr:{d:"M374.5,121c0,61-115.7,104-219.5,104S2.5,138.5,2.5,97C2.5,47,50.2,4,154,4S374.5,60,374.5,121z"},ease:Power1.easeInOut});var h=F(".blob-two"),y=new TimelineMax({repeat:-1,repeatDelay:0,yoyo:!0,paused:!0});y.to(h,3.8,{attr:{d:"M374.5,108c0,61-104.7,117-208.5,117S2.5,146.5,2.5,105C2.5,55,121.2,4,225,4S374.5,47,374.5,108z"},ease:Power1.easeInOut}).to(h,3.8,{attr:{d:"M374.5,134c0,61-96.7,91-200.5,91S2.5,145.5,2.5,104C2.5,54,102.2,4,206,4S374.5,73,374.5,134z"},ease:Power1.easeInOut}).to(h,3.8,{attr:{d:"M372,85c0,61-89.2,136-193,136S0,152.5,0,111C0,61,75.2,0,179,0S372,24,372,85z"},ease:Power1.easeInOut}).to(h,3.8,{attr:{d:"M374.5,104c0,61-131.7,121-235.5,121S2.5,133.5,2.5,92C2.5,42,80.2,4,184,4S374.5,43,374.5,104z"},ease:Power1.easeInOut}).to(h,3.8,{attr:{d:"M374.5,121c0,61-115.7,104-219.5,104S2.5,138.5,2.5,97C2.5,47,50.2,4,154,4S374.5,60,374.5,121z"},ease:Power1.easeInOut});var g=F(".blob-three"),x=new TimelineMax({repeat:-1,repeatDelay:0,yoyo:!0,paused:!0});x.to(g,3.8,{attr:{d:"M374.5,104c0,61-131.7,121-235.5,121S2.5,133.5,2.5,92C2.5,42,80.2,4,184,4S374.5,43,374.5,104z"},ease:Power1.easeInOut}).to(g,3.8,{attr:{d:"M374.5,93c0,61-136.7,132-240.5,132S2.5,168.5,2.5,127C2.5,77,94.2,4,198,4S374.5,32,374.5,93z"},ease:Power1.easeInOut}).to(g,3.8,{attr:{d:"M374.5,108c0,61-104.7,117-208.5,117S2.5,146.5,2.5,105C2.5,55,121.2,4,225,4S374.5,47,374.5,108z"},ease:Power1.easeInOut}).to(g,3.8,{attr:{d:"M374.5,121c0,61-115.7,104-219.5,104S2.5,138.5,2.5,97C2.5,47,50.2,4,154,4S374.5,60,374.5,121z"},ease:Power1.easeInOut}).to(g,3.8,{attr:{d:"M374.5,124c0,61-74.7,101-178.5,101S2.5,131.5,2.5,90C2.5,40,84.2,4,188,4S374.5,63,374.5,124z"},ease:Power1.easeInOut});var O=F(".screen-elements"),v=F(".screen-elements path"),P=F(".dk-ears"),b=F(".ear-1"),I=F(".ear-2"),T=new TimelineMax({paused:!0,yoyo:!0,repeat:-1,repeatDelay:0}),k=new TimelineMax({paused:!0,yoyo:!0,repeat:-1,repeatDelay:0});dkScreen=new TimelineMax({paused:!0,yoyo:!0,repeat:-1,repeatDelay:2}),T.to(O,.06,{opacity:.8,ease:"linear"}),TweenMax.set(v,{autoAlpha:0,transformOrigin:"0% 50%"}),TweenMax.set(b,{rotation:"0",transformOrigin:"30% 74%"}),TweenMax.set(I,{rotation:"0",transformOrigin:"70% 74%"}),dkScreen.staggerTo(v,.9,{autoAlpha:1,ease:Power1.easeIn},.56),k.staggerTo(P,.45,{rotation:"22",ease:Power1.easeIn},.1).staggerTo(P,.45,{rotation:"-22",ease:Power1.easeIn},.1).staggerTo(P,.45,{rotation:"0",ease:Power1.easeIn},.1);var M=F(".dk26"),C=new TimelineMax({paused:!0,yoyo:!0,repeat:-1,repeatDelay:0});C.to(M,.26,{scale:.82,transformOrigin:"50% 50%",ease:Elastic.easeOut.config(.6,.3)});var S=F(".tf-knob"),A=F(".tf-fader"),z=new TimelineMax({paused:!0,yoyo:!0,repeat:-1,repeatDelay:0});z.staggerTo(A,.9,{y:-20,ease:Power1.easeIn},.22).staggerTo(A,.9,{y:26,ease:Power1.easeIn}).staggerTo(A,.9,{y:0,ease:Power1.easeIn},.12).staggerTo(S,.6,{rotation:93,transformOrigin:"85% 15%",ease:Power3.easeInOut},.12,"-=3").staggerTo(S,.8,{rotation:220,transformOrigin:"85% 15%",ease:Power3.easeInOut},.1),F(".tfp").click(function(e){var a=F('<div class="pop">').css({left:e.pageX+"px",top:e.pageY+"px"}).append(F('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" viewBox="0 0 114 114.7" style="enable-background:new 0 0 114 114.7;" xml:space="preserve"><line class="fcb-stroke" x1="57" y1="0" x2="57" y2="8.9"/><line class="fcb-stroke" x1="57" y1="114.7" x2="57" y2="105.8"/><line class="fcb-stroke" x1="16.8" y1="97.6" x2="23.1" y2="91.3"/><line class="fcb-stroke" x1="98.6" y1="95.5" x2="92.3" y2="89.2"/><line class="fcb-stroke" x1="16.8" y1="16.4" x2="23.1" y2="22.7"/><line class="fcb-stroke" x1="100.7" y1="19.8" x2="94.4" y2="26.2"/><line class="fcb-stroke" x1="0" y1="57" x2="8.9" y2="57"/><line class="fcb-stroke" x1="114" y1="57" x2="105.1" y2="57"/></svg>')).appendTo(document.body);setTimeout(function(){a.remove()},300)});var D=F(".lamp-s"),E=F(".lamp-bl-1"),L=F(".lamp-bl-2"),N=new TimelineMax({paused:!0,repeat:-1,repeatDelay:0});N.to(D,5,{y:-36,x:-.9,scale:1.1,rotation:-4.2,transformOrigin:"50% 50%",ease:Power4.easeInOut}).to(D,6,{y:0,x:0,scale:1,rotation:0,transformOrigin:"50% 50%",ease:Power4.easeInOut}).to(L,4,{opacity:.15,scaleX:1.8,rotation:5,transformOrigin:"50% 50%",ease:Power3.easeInOut},"-=10").to(E,4,{opacity:0,scaleX:2,rotation:-5,transformOrigin:"50% 50%",ease:Power3.easeInOut},"-=10.3").to(L,4,{opacity:.15,scaleX:1,rotation:0,transformOrigin:"50% 50%",ease:Power3.easeInOut},"-=5").to(E,4,{opacity:.1,scaleX:1,rotation:0,transformOrigin:"50% 50%",ease:Power3.easeInOut},"-=5");var X=F(".bb8-head"),$=F(".bb8-body"),q=F(".bb8-main"),H=F(".bb8-shadow"),V=F(".bb8-lines line"),Y=new TimelineMax({paused:!0,repeat:-1,repeatDelay:1,delay:1.7});TweenMax.set(X,{rotation:0,transformOrigin:"32% 163%"}),TweenMax.set($,{rotation:0,transformOrigin:"50% 50%"}),Y.to(X,.3,{rotation:5,ease:Power1.easeInOut}).to(X,.3,{rotation:-5,ease:Power1.easeInOut}).to(X,.3,{rotation:4,ease:Power1.easeInOut}).to(X,.3,{rotation:0,ease:Power1.easeInOut}).to($,.3,{rotation:-4,ease:Power1.easeInOut},"-=1.2").to($,.3,{rotation:4,ease:Power1.easeInOut},"-=0.9").to($,.3,{rotation:-2,ease:Power1.easeInOut},"-=0.6").to($,.3,{rotation:0,ease:Power1.easeInOut},"-=0.3").to([q,H],.3,{x:-4,ease:Power1.easeInOut},"-=1.2").to([q,H],.3,{x:4,ease:Power1.easeInOut},"-=0.9").to([q,H],.3,{x:-3,ease:Power1.easeInOut},"-=0.6").to([q,H],.3,{x:0,ease:Power1.easeInOut},"-=0.3").to(X,1,{rotation:-30,ease:Power1.easeInOut},"+=1").to([q,H],1.4,{x:-13,ease:Power2.easeInOut},"-=0.6").to($,13,{rotation:-5400,ease:Power1.easeInOut},"-=1.2").staggerTo(V,6,{strokeDashoffset:-1092,ease:Power0.easeNone},.18,"-=10").to(X,1.2,{rotation:-20,ease:Power1.easeInOut},"-=10.6").to(X,1.2,{rotation:-29,ease:Power1.easeInOut},"-=9").to(X,1.2,{rotation:-22,ease:Power1.easeInOut},"-=7.3").to(X,1.2,{rotation:-29,ease:Power1.easeInOut},"-=5.6").to(X,3,{rotation:20,ease:Power1.easeInOut},"-=4.2").to(X,1,{rotation:0,ease:Power1.easeInOut},"-=1.1").to([q,H],2,{x:0,ease:Power2.easeInOut},"-=3.3").to(X,.2,{rotation:7,ease:Power1.easeInOut},"+=0.9").to(X,.2,{rotation:-7,ease:Power1.easeInOut}).to(X,.2,{rotation:5,ease:Power1.easeInOut}).to(X,.2,{rotation:0,ease:Power1.easeInOut});var R=F(".bArm"),B=F(".bw13"),G=new TimelineMax({paused:!0,repeat:-1,delay:1.7,repeatDelay:0}),Q=new TimelineMax({paused:!0,repeat:-1,delay:1.7,repeatDelay:.8});TweenMax.set(R,{transformOrigin:"95% 92%"}),G.staggerTo(B,.6,{opacity:0,ease:Power0.easeNone},.062).staggerTo(B,.6,{opacity:1,ease:Power0.easeNone},.062,"-=0.9"),Q.to(R,.2,{rotation:-7,ease:Power1.easeInOut}).to(R,.2,{rotation:7,ease:Power1.easeInOut}).to(R,.2,{rotation:-5,ease:Power1.easeInOut}).to(R,.2,{rotation:4,ease:Power1.easeInOut}).to(R,.2,{rotation:-6,ease:Power1.easeInOut}).to(R,.2,{rotation:6,ease:Power1.easeInOut}).to(R,.2,{rotation:-7,ease:Power1.easeInOut}).to(R,.2,{rotation:4,ease:Power1.easeInOut}).to(R,.2,{rotation:-5,ease:Power1.easeInOut}).to(R,.2,{rotation:6,ease:Power1.easeInOut}).to(R,.2,{rotation:-5,ease:Power1.easeInOut}).to(R,.2,{rotation:0,ease:Power1.easeInOut}).to(R,1,{x:420,ease:Power1.easeInOut},"+=0.6").to(R,.6,{rotation:-22,ease:Power1.easeInOut},"-=1").to(R,1.2,{x:0,ease:Power0.easeNone},"+=1.7").to(R,.6,{rotation:0,ease:Power0.easeNone},"-=0.6"),TweenMax.set(F(".video-holder"),{autoAlpha:0,transformOrigin:"50% 50%"}),F(".work-item").mouseover(function(){F(this).find("#video").get(0).play().currentTime=0,TweenMax.to(F(this).find("video"),.6,{autoAlpha:1,ease:Power3.easeOut}),TweenMax.to(F(this).find(".video-holder"),.8,{autoAlpha:1,scale:1,ease:Power3.easeOut})}),F(".work-item").mouseout(function(){F(this).find("#video").get(0).pause(),TweenMax.to(F(this).find("video"),.6,{autoAlpha:0,ease:Power3.easeOut}),TweenMax.to(F(this).find(".video-holder"),.6,{autoAlpha:0,scale:1.08,ease:Power4.easeOut})});var U=F(".scrollDown");U.click(function(){F([document.documentElement,document.body]).animate({scrollTop:F("#sectionTwo").offset().top-48},780)}),F(".btt").click(function(){F([document.documentElement,document.body]).animate({scrollTop:F("header").offset().top},780)}),F(".fd, .fp").addClass("faded"),F(".btn-1, .for-header svg").addClass("fiu"),F("main").hasClass("home")?(m.play(),C.play(),T.play(),dkScreen.play(),k.play()):F("main").hasClass("about")?(Y.timeScale(1.3).play(),m.play()):F("main").hasClass("contact")&&(G.play(),Q.play(),m.play(),y.timeScale(.7).play(),F(".header-links").addClass("uiu")),F("body").removeClass("out"),F("body").hasClass("no-p")&&F("body").removeClass("no-p"),a(),F(function(){if(F("div").hasClass("rellax"))new Rellax(".rellax")}),window.addEventListener("scroll",_.throttle(function(){var e=F(".scroll-down"),a=F(".left-cta, .right-cta");220<F(window).scrollTop()?(TweenMax.to(e,.18,{autoAlpha:0,ease:Power0.easeIn}),TweenMax.to(i,.2,{boxShadow:"0px 1px 8px rgba(0,0,0,0.16)",ease:Power2.easeOut})):(TweenMax.to(e,.2,{autoAlpha:1,ease:Power0.easeOut}),TweenMax.to(i,.2,{boxShadow:"0px 1px 8px rgba(0,0,0,0)",ease:Power2.easeOut})),F(window).scrollTop()+F(window).height()>F(document).height()-620?TweenMax.to(a,.2,{autoAlpha:0,ease:Power0.easeOut}):TweenMax.to(a,.2,{autoAlpha:1,ease:Power0.easeOut}),0===window.pageYOffset&&t.classList.remove("slideDown")},350,{leading:!0,trailing:!0}))}}(jQuery),$(document).ready(function(){$("body").onPageLoad()}),$(window).on("beforeunload",function(){$(window).scrollTop(0)});