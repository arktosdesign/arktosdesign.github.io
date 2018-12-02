$(function(){"use strict";var e={blacklist:"form",scroll:!0,debug:!1,prefetch:!0,cacheLength:7,onStart:{duration:1200,render:function(e){e.addClass("is-exiting"),a.restartCSSAnimations()}},onReady:{duration:600,render:function(e,a){e.removeClass("is-exiting"),e.html(a)}},onAfter:function(e){e.onPageLoad()}},a=$("#main").smoothState(e).data("smoothState")}),function(Q){Q.fn.onPageLoad=function(){function a(){Q("body").hasClass("menu-open")&&(Q("body").removeClass("menu-open"),window.location.hash="")}function e(e,a){var t=setTimeout(function(){a(!1)},5e3),o=document.createElement("img");o.onload=function(){clearTimeout(t),a(!0)},o.onerror=function(){clearTimeout(t),a(!1)},o.src=e+"/favicon.ico"}function t(e){document.title=e}function o(){Q(this).attr("size",Q(this).val().length)}var s=Q("#video-1");Splitting(),ScrollOut({targets:".ev",threshold:.5,once:!0,cssProps:{viewportY:!0,visibleY:!0},onShown:function(e){var a=Q(e).find(".wiper"),t=Q(e).find(".scale-wrap");0!==a.length&&(TweenMax.to(t,1.4,{x:"-50%",autoAlpha:1,ease:Expo.easeOut}),TweenMax.to(a,1,{scaleX:0,transformOrigin:"100% 0%",ease:Expo.easeInOut})),Q(e).hasClass("vi-1")&&s[0].play()}}),ScrollOut({targets:".g-wrap",threshold:.2,onShown:function(e){Q(e).hasClass("dk")&&(P.play(),x.play(),b.play(),console.log("dk >")),Q(e).hasClass("bb8")?($.timeScale(1.3).play(),w.play(),console.log("bb8 >")):Q(e).hasClass("tf")?(I.play(),h.play(),console.log("tf >")):Q(e).hasClass("lamp")?(A.play(),y.play(),console.log("lamp >")):Q(e).hasClass("bwave")&&(w.play(),q.play(),H.play(),console.log("bwave >"))},onHidden:function(e){Q(e).hasClass("dk")?(P.pause(),x.pause(),b.pause(),console.log("dk <")):Q(e).hasClass("bb8")?($.pause(),w.pause(),console.log("bb8 <")):Q(e).hasClass("tf")?(I.pause(),h.pause(),console.log("tf <")):Q(e).hasClass("lamp")?(A.pause(),y.pause(),console.log("lamp <")):Q(e).hasClass("bwave")&&(w.pause(),q.pause(),H.pause(),console.log("bwave <"))}}),Q("#contactform").validate({rules:{email:"required",name:"required",message:"required"},messages:{email:"",name:"",message:""}});var n=Q(".fs-dk-vid"),i=Q(".fs-mob-vid");TweenMax.set(i,{autoAlpha:0}),TweenMax.set(n,{autoAlpha:1}),Q(".fs-desktop").click(function(){Q("#video-1")[0].play(),Q("#video-2")[0].pause(),Q(this).addClass("active-vid").siblings().removeClass("active-vid"),TweenMax.to(n,.6,{autoAlpha:1,ease:Power1.easeOut}),TweenMax.to(i,.6,{autoAlpha:0,ease:Power1.easeOut})}),Q(".fs-mobile").click(function(){Q("#video-2")[0].play(),Q("#video-1")[0].pause(),Q(this).addClass("active-vid").siblings().removeClass("active-vid"),TweenMax.to(i,.6,{autoAlpha:1,ease:Power1.easeOut}),TweenMax.to(n,.6,{autoAlpha:0,ease:Power1.easeOut})}),Q("#sendMessage").on("click",function(){if(Q("#contactform").valid())return Q.ajax({url:"//formspree.io/arktosdesign@gmail.com",method:"POST",data:Q("#contactform").serialize(),dataType:"json"}),TweenMax.set(Q(".success-form"),{autoAlpha:0,scale:1.2,y:30,transformOrigin:"50% 50%"}),TweenMax.to(Q("#contactform"),.4,{autoAlpha:0,ease:Power2.easeInOut}),TweenMax.to(Q(".success-form"),.8,{autoAlpha:1,scale:1,y:0,delay:.2,ease:Power2.easeInOut}),!1}),Q(function(){"use strict";var e=Q(".snl");Q(".main-menu ul li a").click(function(){Q(this).parent().addClass("active").siblings().removeClass("active"),e.css({"stroke-dasharray":"0 390","stroke-dashoffset ":"0"})}),Q(".main-menu ul li").find("a").hover(function(){Q(this).hasClass("about-page")?e.css({"stroke-dasharray":"116 390","stroke-dashoffset":"0"}):Q(this).hasClass("work-page")?e.css({"stroke-dasharray":"116 390","stroke-dashoffset":"-129"}):Q(this).hasClass("contact-page")&&e.css({"stroke-dasharray":"116 390","stroke-dashoffset":"-266"})},function(){e.css({"stroke-dasharray":"0 390","stroke-dashoffset ":"0"})})}),Q(".menu-toggle").click(function(){Q("body").hasClass("menu-open")?a():(Q("body").addClass("menu-open"),location.hash="main-menu")}),Q(document).keyup(function(e){27==e.keyCode&&window.location.hash&&a()}),Q(".logo a, .link").click(function(){Q("body").hasClass("menu-open")?(Q("body").addClass("out"),a()):Q("body").addClass("no-p")}),Q("a").click(function(){TweenMax.to(Q(".top-menu"),.1,{boxShadow:"0px 1px 6px rgba(0,0,0,0)",ease:Power1.easeOut})}),Q(window).bind("hashchange",function(){null!=location.hash&&""!=location.hash||a()}),Q(function(){Q("main").hasClass("ind-pp")&&setTimeout(function(){e("http://arktosdesign.github.io",function(e){e?(Q(".ind-pp").find(".status-online").show(),Q(".ind-pp").find(".status-offline").hide()):(Q(".ind-pp").find(".status-online").hide(),Q(".ind-pp").find(".status-offline").show())})},200)}),Q(function(){Q("main").hasClass("ind-dt")&&setTimeout(function(){e("http://daytanner.co.uk",function(e){e?(Q(".ind-dt").find(".status-online").show(),Q(".ind-dt").find(".status-offline").hide()):(Q(".ind-dt").find(".status-online").hide(),Q(".ind-dt").find(".status-offline").show())})},200)}),Q(function(){Q("main").hasClass("ind-tc")&&setTimeout(function(){e("http://tecnodiagnostics.co.uk",function(e){e?(Q(".ind-tc").find(".status-online").show(),Q(".ind-tc").find(".status-offline").hide()):(Q(".ind-tc").find(".status-online").hide(),Q(".ind-tc").find(".status-offline").show())})},200)}),Q(function(){navigator.vibrate=navigator.vibrate||navigator.webkitVibrate||navigator.mozVibrate||navigator.msVibrate,navigator.vibrate&&(Q(".logo a, a.button, a.a-button, .t-button, .menu-toggle, ul.links li, .vbt").click(function(){navigator.vibrate(20)}),Q("nav a").click(function(){navigator.vibrate(10)}))});var r=Q(document).find("title").text(),l="👋 "+r;Q(window).on("focus",function(){t(r)}).on("blur",function(){t(l)}),Q('input[type="text"], input[type="email"]').keyup(o).each(o),function(){var e=document.querySelectorAll(".expanding"),a=function(e){e.style.height="auto",e.style.overflow="hidden",e.style.height=e.scrollHeight+e.offset+"px",e.style.overflow=""},t=function(e){e&&(e.offset=window.opera?e.offsetHeight+parseInt(window.getComputedStyle(e,null).getPropertyValue("border-top-width")):e.offsetHeight-e.clientHeight,a(e),e.addEventListener&&(e.addEventListener("input",function(){a(e)}),e.addEventListener("mouseup",function(){a(e)})),e.attachEvent&&e.attachEvent("onkeyup",function(){a(e)}))};document.querySelectorAll||(e=function(e,a,t){var o=new Array;t=t||"*";var s=(a=a||document).getElementsByTagName(t),n=s.length,i=new RegExp("(^|\\s)"+e+"(\\s|$)");for(r=0,j=0;r<n;r++)i.test(s[r].className)&&(o[j]=s[r],j++);return o}("expanding"));for(var r=0;r<e.length;r++)t(e[r])}();var u=Q(".scroll-circ"),c=Q(".scroll-lines");scrollDown=new TimelineMax({repeat:-1,repeatDelay:.1}),scrollDown.to(u,1,{autoAlpha:0,y:14,scale:.2,transformOrigin:"50% 50%",ease:Power2.easeInOut}).to(c,1,{strokeDashoffset:-36,ease:Power2.easeInOut},"-=1").to(u,0,{autoAlpha:0,y:0,scale:1,transformOrigin:"50% 50%",ease:Power2.easeInOut}).to(u,.3,{autoAlpha:1,ease:Power0.easeNone}),scrollDown.play();var d=CustomEase.create("custom","M0,0,C0.2,0,0.354,0.276,0.507,0.512,0.653,0.737,0.798,1,1,1"),p=Q(".blob-one"),w=new TimelineMax({repeat:-1,repeatDelay:0,yoyo:!0,paused:!0});w.to(p,4.5,{attr:{d:"M374.5,134c0,61-96.7,91-200.5,91S2.5,145.5,2.5,104C2.5,54,102.2,4,206,4S374.5,73,374.5,134z"},ease:d}).to(p,4.5,{attr:{d:"M374.5,104c0,61-131.7,121-235.5,121S2.5,133.5,2.5,92C2.5,42,80.2,4,184,4S374.5,43,374.5,104z"},ease:d}).to(p,4.5,{attr:{d:"M374.5,108c0,61-104.7,117-208.5,117S2.5,146.5,2.5,105C2.5,55,121.2,4,225,4S374.5,47,374.5,108z"},ease:d}).to(p,4.5,{attr:{d:"M374.5,124c0,61-74.7,101-178.5,101S2.5,131.5,2.5,90C2.5,40,84.2,4,188,4S374.5,63,374.5,124z"},ease:d}).to(p,4.5,{attr:{d:"M374.5,121c0,61-115.7,104-219.5,104S2.5,138.5,2.5,97C2.5,47,50.2,4,154,4S374.5,60,374.5,121z"},ease:d});var f=Q(".blob-two"),h=new TimelineMax({repeat:-1,repeatDelay:0,yoyo:!0,paused:!0});h.to(f,4.5,{attr:{d:"M374.5,108c0,61-104.7,117-208.5,117S2.5,146.5,2.5,105C2.5,55,121.2,4,225,4S374.5,47,374.5,108z"},ease:d}).to(f,4.5,{attr:{d:"M374.5,134c0,61-96.7,91-200.5,91S2.5,145.5,2.5,104C2.5,54,102.2,4,206,4S374.5,73,374.5,134z"},ease:d}).to(f,4.5,{attr:{d:"M372,85c0,61-89.2,136-193,136S0,152.5,0,111C0,61,75.2,0,179,0S372,24,372,85z"},ease:d}).to(f,4.5,{attr:{d:"M374.5,104c0,61-131.7,121-235.5,121S2.5,133.5,2.5,92C2.5,42,80.2,4,184,4S374.5,43,374.5,104z"},ease:d}).to(f,4.5,{attr:{d:"M374.5,121c0,61-115.7,104-219.5,104S2.5,138.5,2.5,97C2.5,47,50.2,4,154,4S374.5,60,374.5,121z"},ease:d});var m=Q(".blob-three"),y=new TimelineMax({repeat:-1,repeatDelay:0,yoyo:!0,paused:!0});y.to(m,4.5,{attr:{d:"M374.5,104c0,61-131.7,121-235.5,121S2.5,133.5,2.5,92C2.5,42,80.2,4,184,4S374.5,43,374.5,104z"},ease:d}).to(m,4.5,{attr:{d:"M374.5,93c0,61-136.7,132-240.5,132S2.5,168.5,2.5,127C2.5,77,94.2,4,198,4S374.5,32,374.5,93z"},ease:d}).to(m,4.5,{attr:{d:"M374.5,108c0,61-104.7,117-208.5,117S2.5,146.5,2.5,105C2.5,55,121.2,4,225,4S374.5,47,374.5,108z"},ease:d}).to(m,4.5,{attr:{d:"M374.5,121c0,61-115.7,104-219.5,104S2.5,138.5,2.5,97C2.5,47,50.2,4,154,4S374.5,60,374.5,121z"},ease:d}).to(m,4.5,{attr:{d:"M374.5,124c0,61-74.7,101-178.5,101S2.5,131.5,2.5,90C2.5,40,84.2,4,188,4S374.5,63,374.5,124z"},ease:d});var g=Q(".screen-elements"),v=Q(".screen-elements path"),x=new TimelineMax({paused:!0,yoyo:!0,repeat:-1,repeatDelay:0}),b=new TimelineMax({paused:!0,yoyo:!0,repeat:-1,repeatDelay:2});x.to(g,.06,{opacity:.8,ease:"linear"}),TweenMax.set(v,{autoAlpha:0,transformOrigin:"0% 50%"}),b.staggerTo(v,.9,{autoAlpha:1,ease:Power1.easeIn},.56);var O=Q(".dk26"),P=new TimelineMax({paused:!0,yoyo:!0,repeat:-1,repeatDelay:0});P.to(O,.26,{scale:.82,transformOrigin:"50% 50%",ease:Elastic.easeOut.config(.6,.3)});var C=Q(".tf-knob"),T=Q(".tf-fader"),I=new TimelineMax({paused:!0,yoyo:!0,repeat:-1,repeatDelay:0});I.staggerTo(T,.9,{y:-20,ease:Power1.easeIn},.22).staggerTo(T,.9,{y:26,ease:Power1.easeIn}).staggerTo(T,.9,{y:0,ease:Power1.easeIn},.12).staggerTo(C,.6,{rotation:93,transformOrigin:"85% 15%",ease:Power3.easeInOut},.12,"-=3").staggerTo(C,.8,{rotation:220,transformOrigin:"85% 15%",ease:Power3.easeInOut},.1),Q(".tfp").click(function(e){var a=Q('<div class="pop">').css({left:e.pageX+"px",top:e.pageY+"px"}).append(Q('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" viewBox="0 0 114 114.7" style="enable-background:new 0 0 114 114.7;" xml:space="preserve"><line class="fcb-stroke" x1="57" y1="0" x2="57" y2="8.9"/><line class="fcb-stroke" x1="57" y1="114.7" x2="57" y2="105.8"/><line class="fcb-stroke" x1="16.8" y1="97.6" x2="23.1" y2="91.3"/><line class="fcb-stroke" x1="98.6" y1="95.5" x2="92.3" y2="89.2"/><line class="fcb-stroke" x1="16.8" y1="16.4" x2="23.1" y2="22.7"/><line class="fcb-stroke" x1="100.7" y1="19.8" x2="94.4" y2="26.2"/><line class="fcb-stroke" x1="0" y1="57" x2="8.9" y2="57"/><line class="fcb-stroke" x1="114" y1="57" x2="105.1" y2="57"/></svg>')).appendTo(document.body);setTimeout(function(){a.remove()},300)});var k=Q(".lamp-s"),M=Q(".lamp-bl-1"),S=Q(".lamp-bl-2"),A=new TimelineMax({paused:!0,repeat:-1,repeatDelay:0});A.staggerTo(k,5,{y:-36,x:-.9,scale:1.1,rotation:-4.2,transformOrigin:"50% 50%",ease:Power4.easeInOut},.08).staggerTo(k,6,{y:0,x:0,scale:1,rotation:0,transformOrigin:"50% 50%",ease:Power4.easeInOut},.08).to(S,4,{opacity:.15,scaleX:1.8,rotation:5,transformOrigin:"50% 50%",ease:Power3.easeInOut},"-=10").to(M,4,{opacity:0,scaleX:2,rotation:-5,transformOrigin:"50% 50%",ease:Power3.easeInOut},"-=10.3").to(S,4,{opacity:.15,scaleX:1,rotation:0,transformOrigin:"50% 50%",ease:Power3.easeInOut},"-=5").to(M,4,{opacity:.1,scaleX:1,rotation:0,transformOrigin:"50% 50%",ease:Power3.easeInOut},"-=5");var z=Q(".bb8-head"),D=Q(".bb8-body"),E=Q(".bb8-main"),L=Q(".bb8-shadow"),N=Q(".bb8-lines line"),$=new TimelineMax({paused:!0,repeat:-1,repeatDelay:1,delay:1.7});TweenMax.set(z,{rotation:0,transformOrigin:"32% 163%"}),TweenMax.set(D,{rotation:0,transformOrigin:"50% 50%"}),$.to(z,.3,{rotation:5,ease:Power1.easeInOut}).to(z,.3,{rotation:-5,ease:Power1.easeInOut}).to(z,.3,{rotation:4,ease:Power1.easeInOut}).to(z,.3,{rotation:0,ease:Power1.easeInOut}).to(D,.3,{rotation:-4,ease:Power1.easeInOut},"-=1.2").to(D,.3,{rotation:4,ease:Power1.easeInOut},"-=0.9").to(D,.3,{rotation:-2,ease:Power1.easeInOut},"-=0.6").to(D,.3,{rotation:0,ease:Power1.easeInOut},"-=0.3").to([E,L],.3,{x:-4,ease:Power1.easeInOut},"-=1.2").to([E,L],.3,{x:4,ease:Power1.easeInOut},"-=0.9").to([E,L],.3,{x:-3,ease:Power1.easeInOut},"-=0.6").to([E,L],.3,{x:0,ease:Power1.easeInOut},"-=0.3").to(z,1,{rotation:-30,ease:Power1.easeInOut},"+=1").to([E,L],1.4,{x:-13,ease:Power2.easeInOut},"-=0.6").to(D,13,{rotation:-5400,ease:Power1.easeInOut},"-=1.2").staggerTo(N,6,{strokeDashoffset:-1092,ease:Power0.easeNone},.18,"-=10").to(z,1.2,{rotation:-20,ease:Power1.easeInOut},"-=10.6").to(z,1.2,{rotation:-29,ease:Power1.easeInOut},"-=9").to(z,1.2,{rotation:-22,ease:Power1.easeInOut},"-=7.3").to(z,1.2,{rotation:-29,ease:Power1.easeInOut},"-=5.6").to(z,3,{rotation:20,ease:Power1.easeInOut},"-=4.2").to(z,1,{rotation:0,ease:Power1.easeInOut},"-=1.1").to([E,L],2,{x:0,ease:Power2.easeInOut},"-=3.3").to(z,.2,{rotation:7,ease:Power1.easeInOut},"+=0.9").to(z,.2,{rotation:-7,ease:Power1.easeInOut}).to(z,.2,{rotation:5,ease:Power1.easeInOut}).to(z,.2,{rotation:0,ease:Power1.easeInOut});var V=Q(".bArm"),X=Q(".bw13"),q=new TimelineMax({paused:!0,repeat:-1,delay:1.7,repeatDelay:0}),H=new TimelineMax({paused:!0,repeat:-1,delay:1.7,repeatDelay:.8});TweenMax.set(V,{transformOrigin:"95% 92%"}),q.staggerTo(X,.6,{opacity:0,ease:Power0.easeNone},.062).staggerTo(X,.6,{opacity:1,ease:Power0.easeNone},.062,"-=0.9"),H.to(V,.2,{rotation:-7,ease:Power1.easeInOut}).to(V,.2,{rotation:7,ease:Power1.easeInOut}).to(V,.2,{rotation:-5,ease:Power1.easeInOut}).to(V,.2,{rotation:4,ease:Power1.easeInOut}).to(V,.2,{rotation:-6,ease:Power1.easeInOut}).to(V,.2,{rotation:6,ease:Power1.easeInOut}).to(V,.2,{rotation:-7,ease:Power1.easeInOut}).to(V,.2,{rotation:4,ease:Power1.easeInOut}).to(V,.2,{rotation:-5,ease:Power1.easeInOut}).to(V,.2,{rotation:6,ease:Power1.easeInOut}).to(V,.2,{rotation:-5,ease:Power1.easeInOut}).to(V,.2,{rotation:0,ease:Power1.easeInOut}).to(V,1,{x:420,ease:Power1.easeInOut},"+=0.6").to(V,.6,{rotation:-22,ease:Power1.easeInOut},"-=1").to(V,1.2,{x:0,ease:Power0.easeNone},"+=1.7").to(V,.6,{rotation:0,ease:Power0.easeNone},"-=0.6"),Q(".scroll-down svg, .scrollDown").click(function(){Q([document.documentElement,document.body]).animate({scrollTop:Q("#sectionTwo").offset().top-48},780)}),Q(".btt").click(function(){Q([document.documentElement,document.body]).animate({scrollTop:Q("header").offset().top},780)}),TweenMax.set(Q(".video-holder"),{autoAlpha:0,transformOrigin:"50% 50%"}),Q(".work-item").mouseover(function(){Q(this).find("#video").get(0).play().currentTime=0,TweenMax.to(Q(this).find("video"),.6,{autoAlpha:1,ease:Power3.easeOut}),TweenMax.to(Q(this).find(".video-holder"),.8,{autoAlpha:1,scale:1,ease:Power3.easeOut})}),Q(".work-item").mouseout(function(){Q(this).find("#video").get(0).pause(),TweenMax.to(Q(this).find("video"),.6,{autoAlpha:0,ease:Power3.easeOut}),TweenMax.to(Q(this).find(".video-holder"),.6,{autoAlpha:0,scale:1.08,ease:Power4.easeOut})});var R=0,Y=120,B=992,G=6;Q(".fd, .fp").addClass("faded"),Q(".btn-1, .for-header svg").addClass("fiu"),Q("main").hasClass("home")?(w.play(),P.play(),x.play(),b.play()):Q("main").hasClass("about")?($.timeScale(1.3).play(),w.play()):Q("main").hasClass("contact")&&(q.play(),H.play(),w.play(),h.timeScale(.7).play(),Q(".header-links").addClass("uiu")),Q("body").removeClass("out"),Q("body").hasClass("no-p")&&Q("body").removeClass("no-p"),a(),Q(function(){if(Q("div").hasClass("rellax"))new Rellax(".rellax")});new LazyLoad({elements_selector:".lazy"});window.addEventListener("scroll",_.throttle(function(){console.log("scrolling");var e=Q(".scroll-down"),a=Q(".left-cta, .right-cta"),t=Q(".footer-an");if(1<Q(window).scrollTop()?TweenMax.to(e,.18,{autoAlpha:0,ease:Power0.easeIn}):TweenMax.to(e,.2,{autoAlpha:1,ease:Power0.easeOut}),Q(window).scrollTop()+Q(window).height()>Q(document).height()-620?TweenMax.to(a,.2,{autoAlpha:0,ease:Power0.easeOut}):TweenMax.to(a,.2,{autoAlpha:1,ease:Power0.easeOut}),Q(window).scrollTop()+Q(window).height()>Q(document).height()-180?TweenMax.to(t,.3,{autoAlpha:1,y:0,ease:Power2.easeOut}):TweenMax.to(t,.3,{autoAlpha:0,y:50,ease:Power2.easeOut}),!Q(".top-menu").hasClass("expanded")){var o=Q(this).scrollTop(),s=Math.abs(o-R);Y<o?(B<o&&(Q(".top-menu").hasClass("detached")||Q(".top-menu").addClass("detached")),G<=s&&(R<o?Q(".top-menu").hasClass("invisible")||Q(".top-menu").addClass("invisible"):Q(".top-menu").hasClass("invisible")&&Q(".top-menu").removeClass("invisible"))):o<=0&&Q(".top-menu").removeClass().addClass("top-menu"),R=o}},300,{leading:!0,trailing:!0}),{passive:!0})}}(jQuery),$(document).ready(function(){$("body").onPageLoad()}),$(window).on("beforeunload",function(){$(window).scrollTop(0)});