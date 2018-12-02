$(function(){"use strict";var e={blacklist:"form",scroll:!0,debug:!1,prefetch:!0,cacheLength:7,onStart:{duration:1200,render:function(e){e.addClass("is-exiting"),a.restartCSSAnimations()}},onReady:{duration:600,render:function(e,a){e.removeClass("is-exiting"),e.html(a)}},onAfter:function(e){e.onPageLoad()}},a=$("#main").smoothState(e).data("smoothState")}),function(G){G.fn.onPageLoad=function(){function a(){G("body").hasClass("menu-open")&&(G("body").removeClass("menu-open"),window.location.hash="")}function e(e,a){var t=setTimeout(function(){a(!1)},5e3),o=document.createElement("img");o.onload=function(){clearTimeout(t),a(!0)},o.onerror=function(){clearTimeout(t),a(!1)},o.src=e+"/favicon.ico"}function t(e){document.title=e}function o(){G(this).attr("size",G(this).val().length)}Splitting(),ScrollOut({targets:".ev",threshold:.5,once:!0,cssProps:{viewportY:!0,visibleY:!0},onShown:function(e){var a=G(e).find(".wiper"),t=G(e).find(".scale-wrap");0!==a.length&&(TweenMax.to(a,1,{scaleX:0,transformOrigin:"100% 0%",ease:Expo.easeInOut}),TweenMax.to(t,1.4,{x:"-50%",autoAlpha:1,ease:Expo.easeOut})),G(e).hasClass("vi-1")&&G("#video-1")[0].play()}}),ScrollOut({targets:".g-wrap",threshold:.2,onShown:function(e){G(e).hasClass("dk")&&(O.play(),v.play(),x.play()),G(e).hasClass("bb8")?(N.timeScale(1.3).play(),p.play()):G(e).hasClass("tf")?(T.play(),f.play()):G(e).hasClass("lamp")?(S.play(),m.play()):G(e).hasClass("bwave")&&(p.play(),X.play(),q.play())},onHidden:function(e){G(e).hasClass("dk")?(O.pause(),v.pause(),x.pause()):G(e).hasClass("bb8")?(N.pause(),p.pause()):G(e).hasClass("tf")?(T.pause(),f.pause()):G(e).hasClass("lamp")?(S.pause(),m.pause()):G(e).hasClass("bwave")&&(p.pause(),X.pause(),q.pause())}}),G("#contactform").validate({rules:{email:"required",name:"required",message:"required"},messages:{email:"",name:"",message:""}});var s=G(".fs-dk-vid"),n=G(".fs-mob-vid");TweenMax.set(n,{autoAlpha:0}),TweenMax.set(s,{autoAlpha:1}),G(".fs-desktop").click(function(){G("#video-1")[0].play(),G("#video-2")[0].pause(),G(this).addClass("active-vid").siblings().removeClass("active-vid"),TweenMax.to(s,.6,{autoAlpha:1,ease:Power1.easeOut}),TweenMax.to(n,.6,{autoAlpha:0,ease:Power1.easeOut})}),G(".fs-mobile").click(function(){G("#video-2")[0].play(),G("#video-1")[0].pause(),G(this).addClass("active-vid").siblings().removeClass("active-vid"),TweenMax.to(n,.6,{autoAlpha:1,ease:Power1.easeOut}),TweenMax.to(s,.6,{autoAlpha:0,ease:Power1.easeOut})}),G("#sendMessage").on("click",function(){if(G("#contactform").valid())return G.ajax({url:"//formspree.io/arktosdesign@gmail.com",method:"POST",data:G("#contactform").serialize(),dataType:"json"}),TweenMax.set(G(".success-form"),{autoAlpha:0,scale:1.2,y:30,transformOrigin:"50% 50%"}),TweenMax.to(G("#contactform"),.4,{autoAlpha:0,ease:Power2.easeInOut}),TweenMax.to(G(".success-form"),.8,{autoAlpha:1,scale:1,y:0,delay:.2,ease:Power2.easeInOut}),!1}),G(function(){"use strict";var e=G(".snl");G(".main-menu ul li a").click(function(){G(this).parent().addClass("active").siblings().removeClass("active"),e.css({"stroke-dasharray":"0 390","stroke-dashoffset ":"0"})}),G(".main-menu ul li").find("a").hover(function(){G(this).hasClass("about-page")?e.css({"stroke-dasharray":"116 390","stroke-dashoffset":"0"}):G(this).hasClass("work-page")?e.css({"stroke-dasharray":"116 390","stroke-dashoffset":"-129"}):G(this).hasClass("contact-page")&&e.css({"stroke-dasharray":"116 390","stroke-dashoffset":"-266"})},function(){e.css({"stroke-dasharray":"0 390","stroke-dashoffset ":"0"})})}),G(".menu-toggle").click(function(){G("body").hasClass("menu-open")?a():(G("body").addClass("menu-open"),location.hash="main-menu")}),G(document).keyup(function(e){27==e.keyCode&&window.location.hash&&a()}),G(".logo a, .link").click(function(){G("body").hasClass("menu-open")?(G("body").addClass("out"),a()):G("body").addClass("no-p")}),G("a").click(function(){TweenMax.to(G(".top-menu"),.1,{boxShadow:"0px 1px 6px rgba(0,0,0,0)",ease:Power1.easeOut})}),G(window).bind("hashchange",function(){null!=location.hash&&""!=location.hash||a()}),G(function(){G("main").hasClass("ind-pp")&&setTimeout(function(){e("http://arktosdesign.github.io",function(e){e?(G(".ind-pp").find(".status-online").show(),G(".ind-pp").find(".status-offline").hide()):(G(".ind-pp").find(".status-online").hide(),G(".ind-pp").find(".status-offline").show())})},200)}),G(function(){G("main").hasClass("ind-dt")&&setTimeout(function(){e("http://daytanner.co.uk",function(e){e?(G(".ind-dt").find(".status-online").show(),G(".ind-dt").find(".status-offline").hide()):(G(".ind-dt").find(".status-online").hide(),G(".ind-dt").find(".status-offline").show())})},200)}),G(function(){navigator.vibrate=navigator.vibrate||navigator.webkitVibrate||navigator.mozVibrate||navigator.msVibrate,navigator.vibrate&&(G(".logo a, a.button, a.a-button, .t-button, .menu-toggle, ul.links li, .vbt").click(function(){navigator.vibrate(20)}),G("nav a").click(function(){navigator.vibrate(10)}))});var r=G(document).find("title").text(),i="👋 "+r;G(window).on("focus",function(){t(r)}).on("blur",function(){t(i)}),G('input[type="text"], input[type="email"]').keyup(o).each(o),function(){var e=document.querySelectorAll(".expanding"),a=function(e){e.style.height="auto",e.style.overflow="hidden",e.style.height=e.scrollHeight+e.offset+"px",e.style.overflow=""},t=function(e){e&&(e.offset=window.opera?e.offsetHeight+parseInt(window.getComputedStyle(e,null).getPropertyValue("border-top-width")):e.offsetHeight-e.clientHeight,a(e),e.addEventListener&&(e.addEventListener("input",function(){a(e)}),e.addEventListener("mouseup",function(){a(e)})),e.attachEvent&&e.attachEvent("onkeyup",function(){a(e)}))};document.querySelectorAll||(e=function(e,a,t){var o=new Array;t=t||"*";var s=(a=a||document).getElementsByTagName(t),n=s.length,r=new RegExp("(^|\\s)"+e+"(\\s|$)");for(i=0,j=0;i<n;i++)r.test(s[i].className)&&(o[j]=s[i],j++);return o}("expanding"));for(var i=0;i<e.length;i++)t(e[i])}();var l=G(".scroll-circ"),u=G(".scroll-lines");scrollDown=new TimelineMax({repeat:-1,repeatDelay:.1}),scrollDown.to(l,1,{autoAlpha:0,y:14,scale:.2,transformOrigin:"50% 50%",ease:Power2.easeInOut}).to(u,1,{strokeDashoffset:-36,ease:Power2.easeInOut},"-=1").to(l,0,{autoAlpha:0,y:0,scale:1,transformOrigin:"50% 50%",ease:Power2.easeInOut}).to(l,.3,{autoAlpha:1,ease:Power0.easeNone}),scrollDown.play();var c=CustomEase.create("custom","M0,0,C0.2,0,0.354,0.276,0.507,0.512,0.653,0.737,0.798,1,1,1"),d=G(".blob-one"),p=new TimelineMax({repeat:-1,repeatDelay:0,yoyo:!0,paused:!0});p.to(d,4.5,{attr:{d:"M374.5,134c0,61-96.7,91-200.5,91S2.5,145.5,2.5,104C2.5,54,102.2,4,206,4S374.5,73,374.5,134z"},ease:c}).to(d,4.5,{attr:{d:"M374.5,104c0,61-131.7,121-235.5,121S2.5,133.5,2.5,92C2.5,42,80.2,4,184,4S374.5,43,374.5,104z"},ease:c}).to(d,4.5,{attr:{d:"M374.5,108c0,61-104.7,117-208.5,117S2.5,146.5,2.5,105C2.5,55,121.2,4,225,4S374.5,47,374.5,108z"},ease:c}).to(d,4.5,{attr:{d:"M374.5,124c0,61-74.7,101-178.5,101S2.5,131.5,2.5,90C2.5,40,84.2,4,188,4S374.5,63,374.5,124z"},ease:c}).to(d,4.5,{attr:{d:"M374.5,121c0,61-115.7,104-219.5,104S2.5,138.5,2.5,97C2.5,47,50.2,4,154,4S374.5,60,374.5,121z"},ease:c});var w=G(".blob-two"),f=new TimelineMax({repeat:-1,repeatDelay:0,yoyo:!0,paused:!0});f.to(w,4.5,{attr:{d:"M374.5,108c0,61-104.7,117-208.5,117S2.5,146.5,2.5,105C2.5,55,121.2,4,225,4S374.5,47,374.5,108z"},ease:c}).to(w,4.5,{attr:{d:"M374.5,134c0,61-96.7,91-200.5,91S2.5,145.5,2.5,104C2.5,54,102.2,4,206,4S374.5,73,374.5,134z"},ease:c}).to(w,4.5,{attr:{d:"M372,85c0,61-89.2,136-193,136S0,152.5,0,111C0,61,75.2,0,179,0S372,24,372,85z"},ease:c}).to(w,4.5,{attr:{d:"M374.5,104c0,61-131.7,121-235.5,121S2.5,133.5,2.5,92C2.5,42,80.2,4,184,4S374.5,43,374.5,104z"},ease:c}).to(w,4.5,{attr:{d:"M374.5,121c0,61-115.7,104-219.5,104S2.5,138.5,2.5,97C2.5,47,50.2,4,154,4S374.5,60,374.5,121z"},ease:c});var h=G(".blob-three"),m=new TimelineMax({repeat:-1,repeatDelay:0,yoyo:!0,paused:!0});m.to(h,4.5,{attr:{d:"M374.5,104c0,61-131.7,121-235.5,121S2.5,133.5,2.5,92C2.5,42,80.2,4,184,4S374.5,43,374.5,104z"},ease:c}).to(h,4.5,{attr:{d:"M374.5,93c0,61-136.7,132-240.5,132S2.5,168.5,2.5,127C2.5,77,94.2,4,198,4S374.5,32,374.5,93z"},ease:c}).to(h,4.5,{attr:{d:"M374.5,108c0,61-104.7,117-208.5,117S2.5,146.5,2.5,105C2.5,55,121.2,4,225,4S374.5,47,374.5,108z"},ease:c}).to(h,4.5,{attr:{d:"M374.5,121c0,61-115.7,104-219.5,104S2.5,138.5,2.5,97C2.5,47,50.2,4,154,4S374.5,60,374.5,121z"},ease:c}).to(h,4.5,{attr:{d:"M374.5,124c0,61-74.7,101-178.5,101S2.5,131.5,2.5,90C2.5,40,84.2,4,188,4S374.5,63,374.5,124z"},ease:c});var y=G(".screen-elements"),g=G(".screen-elements path"),v=new TimelineMax({paused:!0,yoyo:!0,repeat:-1,repeatDelay:0}),x=new TimelineMax({paused:!0,yoyo:!0,repeat:-1,repeatDelay:2});v.to(y,.06,{opacity:.8,ease:"linear"}),TweenMax.set(g,{autoAlpha:0,transformOrigin:"0% 50%"}),x.staggerTo(g,.9,{autoAlpha:1,ease:Power1.easeIn},.56);var b=G(".dk26"),O=new TimelineMax({paused:!0,yoyo:!0,repeat:-1,repeatDelay:0});O.to(b,.26,{scale:.82,transformOrigin:"50% 50%",ease:Elastic.easeOut.config(.6,.3)});var P=G(".tf-knob"),C=G(".tf-fader"),T=new TimelineMax({paused:!0,yoyo:!0,repeat:-1,repeatDelay:0});T.staggerTo(C,.9,{y:-20,ease:Power1.easeIn},.22).staggerTo(C,.9,{y:26,ease:Power1.easeIn}).staggerTo(C,.9,{y:0,ease:Power1.easeIn},.12).staggerTo(P,.6,{rotation:93,transformOrigin:"85% 15%",ease:Power3.easeInOut},.12,"-=3").staggerTo(P,.8,{rotation:220,transformOrigin:"85% 15%",ease:Power3.easeInOut},.1),G(".tfp").click(function(e){var a=G('<div class="pop">').css({left:e.pageX+"px",top:e.pageY+"px"}).append(G('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" viewBox="0 0 114 114.7" style="enable-background:new 0 0 114 114.7;" xml:space="preserve"><line class="fcb-stroke" x1="57" y1="0" x2="57" y2="8.9"/><line class="fcb-stroke" x1="57" y1="114.7" x2="57" y2="105.8"/><line class="fcb-stroke" x1="16.8" y1="97.6" x2="23.1" y2="91.3"/><line class="fcb-stroke" x1="98.6" y1="95.5" x2="92.3" y2="89.2"/><line class="fcb-stroke" x1="16.8" y1="16.4" x2="23.1" y2="22.7"/><line class="fcb-stroke" x1="100.7" y1="19.8" x2="94.4" y2="26.2"/><line class="fcb-stroke" x1="0" y1="57" x2="8.9" y2="57"/><line class="fcb-stroke" x1="114" y1="57" x2="105.1" y2="57"/></svg>')).appendTo(document.body);setTimeout(function(){a.remove()},300)});var I=G(".lamp-s"),M=G(".lamp-bl-1"),k=G(".lamp-bl-2"),S=new TimelineMax({paused:!0,repeat:-1,repeatDelay:0});S.staggerTo(I,5,{y:-36,x:-.9,scale:1.1,rotation:-4.2,transformOrigin:"50% 50%",ease:Power4.easeInOut},.08).staggerTo(I,6,{y:0,x:0,scale:1,rotation:0,transformOrigin:"50% 50%",ease:Power4.easeInOut},.08).to(k,4,{opacity:.15,scaleX:1.8,rotation:5,transformOrigin:"50% 50%",ease:Power3.easeInOut},"-=10").to(M,4,{opacity:0,scaleX:2,rotation:-5,transformOrigin:"50% 50%",ease:Power3.easeInOut},"-=10.3").to(k,4,{opacity:.15,scaleX:1,rotation:0,transformOrigin:"50% 50%",ease:Power3.easeInOut},"-=5").to(M,4,{opacity:.1,scaleX:1,rotation:0,transformOrigin:"50% 50%",ease:Power3.easeInOut},"-=5");var A=G(".bb8-head"),z=G(".bb8-body"),D=G(".bb8-main"),E=G(".bb8-shadow"),L=G(".bb8-lines line"),N=new TimelineMax({paused:!0,repeat:-1,repeatDelay:1,delay:1.7});TweenMax.set(A,{rotation:0,transformOrigin:"32% 163%"}),TweenMax.set(z,{rotation:0,transformOrigin:"50% 50%"}),N.to(A,.3,{rotation:5,ease:Power1.easeInOut}).to(A,.3,{rotation:-5,ease:Power1.easeInOut}).to(A,.3,{rotation:4,ease:Power1.easeInOut}).to(A,.3,{rotation:0,ease:Power1.easeInOut}).to(z,.3,{rotation:-4,ease:Power1.easeInOut},"-=1.2").to(z,.3,{rotation:4,ease:Power1.easeInOut},"-=0.9").to(z,.3,{rotation:-2,ease:Power1.easeInOut},"-=0.6").to(z,.3,{rotation:0,ease:Power1.easeInOut},"-=0.3").to([D,E],.3,{x:-4,ease:Power1.easeInOut},"-=1.2").to([D,E],.3,{x:4,ease:Power1.easeInOut},"-=0.9").to([D,E],.3,{x:-3,ease:Power1.easeInOut},"-=0.6").to([D,E],.3,{x:0,ease:Power1.easeInOut},"-=0.3").to(A,1,{rotation:-30,ease:Power1.easeInOut},"+=1").to([D,E],1.4,{x:-13,ease:Power2.easeInOut},"-=0.6").to(z,13,{rotation:-5400,ease:Power1.easeInOut},"-=1.2").staggerTo(L,6,{strokeDashoffset:-1092,ease:Power0.easeNone},.18,"-=10").to(A,1.2,{rotation:-20,ease:Power1.easeInOut},"-=10.6").to(A,1.2,{rotation:-29,ease:Power1.easeInOut},"-=9").to(A,1.2,{rotation:-22,ease:Power1.easeInOut},"-=7.3").to(A,1.2,{rotation:-29,ease:Power1.easeInOut},"-=5.6").to(A,3,{rotation:20,ease:Power1.easeInOut},"-=4.2").to(A,1,{rotation:0,ease:Power1.easeInOut},"-=1.1").to([D,E],2,{x:0,ease:Power2.easeInOut},"-=3.3").to(A,.2,{rotation:7,ease:Power1.easeInOut},"+=0.9").to(A,.2,{rotation:-7,ease:Power1.easeInOut}).to(A,.2,{rotation:5,ease:Power1.easeInOut}).to(A,.2,{rotation:0,ease:Power1.easeInOut});var $=G(".bArm"),V=G(".bw13"),X=new TimelineMax({paused:!0,repeat:-1,delay:1.7,repeatDelay:0}),q=new TimelineMax({paused:!0,repeat:-1,delay:1.7,repeatDelay:.8});TweenMax.set($,{transformOrigin:"95% 92%"}),X.staggerTo(V,.6,{opacity:0,ease:Power0.easeNone},.062).staggerTo(V,.6,{opacity:1,ease:Power0.easeNone},.062,"-=0.9"),q.to($,.2,{rotation:-7,ease:Power1.easeInOut}).to($,.2,{rotation:7,ease:Power1.easeInOut}).to($,.2,{rotation:-5,ease:Power1.easeInOut}).to($,.2,{rotation:4,ease:Power1.easeInOut}).to($,.2,{rotation:-6,ease:Power1.easeInOut}).to($,.2,{rotation:6,ease:Power1.easeInOut}).to($,.2,{rotation:-7,ease:Power1.easeInOut}).to($,.2,{rotation:4,ease:Power1.easeInOut}).to($,.2,{rotation:-5,ease:Power1.easeInOut}).to($,.2,{rotation:6,ease:Power1.easeInOut}).to($,.2,{rotation:-5,ease:Power1.easeInOut}).to($,.2,{rotation:0,ease:Power1.easeInOut}).to($,1,{x:420,ease:Power1.easeInOut},"+=0.6").to($,.6,{rotation:-22,ease:Power1.easeInOut},"-=1").to($,1.2,{x:0,ease:Power0.easeNone},"+=1.7").to($,.6,{rotation:0,ease:Power0.easeNone},"-=0.6"),G(".scroll-down svg, .scrollDown").click(function(){G([document.documentElement,document.body]).animate({scrollTop:G("#sectionTwo").offset().top-48},780)}),G(".btt").click(function(){G([document.documentElement,document.body]).animate({scrollTop:G("header").offset().top},780)}),TweenMax.set(G(".video-holder"),{autoAlpha:0,transformOrigin:"50% 50%"}),G(".work-item").mouseover(function(){G(this).find("#video").get(0).play().currentTime=0,TweenMax.to(G(this).find("video"),.6,{autoAlpha:1,ease:Power3.easeOut}),TweenMax.to(G(this).find(".video-holder"),.8,{autoAlpha:1,scale:1,ease:Power3.easeOut})}),G(".work-item").mouseout(function(){G(this).find("#video").get(0).pause(),TweenMax.to(G(this).find("video"),.6,{autoAlpha:0,ease:Power3.easeOut}),TweenMax.to(G(this).find(".video-holder"),.6,{autoAlpha:0,scale:1.08,ease:Power4.easeOut})});var H=0,R=120,Y=992,B=6;G(".fd, .fp").addClass("faded"),G(".btn-1, .for-header svg").addClass("fiu"),G("main").hasClass("home")?(p.play(),O.play(),v.play(),x.play()):G("main").hasClass("about")?(N.timeScale(1.3).play(),p.play()):G("main").hasClass("contact")&&(X.play(),q.play(),p.play(),f.timeScale(.7).play(),G(".header-links").addClass("uiu")),G("body").removeClass("out"),G("body").hasClass("no-p")&&G("body").removeClass("no-p"),a(),G(function(){if(G("div").hasClass("rellax"))new Rellax(".rellax")});new LazyLoad({elements_selector:".lazy"});window.addEventListener("scroll",_.throttle(function(){var e=G(".scroll-down"),a=G(".left-cta, .right-cta"),t=G(".footer-an");if(1<G(window).scrollTop()?TweenMax.to(e,.18,{autoAlpha:0,ease:Power0.easeIn}):TweenMax.to(e,.2,{autoAlpha:1,ease:Power0.easeOut}),G(window).scrollTop()+G(window).height()>G(document).height()-620?TweenMax.to(a,.2,{autoAlpha:0,ease:Power0.easeOut}):TweenMax.to(a,.2,{autoAlpha:1,ease:Power0.easeOut}),G(window).scrollTop()+G(window).height()>G(document).height()-180?TweenMax.to(t,.3,{autoAlpha:1,y:0,ease:Power2.easeOut}):TweenMax.to(t,.3,{autoAlpha:0,y:50,ease:Power2.easeOut}),!G(".top-menu").hasClass("expanded")){var o=G(this).scrollTop(),s=Math.abs(o-H);R<o?(Y<o&&(G(".top-menu").hasClass("detached")||G(".top-menu").addClass("detached")),B<=s&&(H<o?G(".top-menu").hasClass("invisible")||G(".top-menu").addClass("invisible"):G(".top-menu").hasClass("invisible")&&G(".top-menu").removeClass("invisible"))):o<=0&&G(".top-menu").removeClass().addClass("top-menu"),H=o}},300,{leading:!0,trailing:!0}))}}(jQuery),$(document).ready(function(){$("body").onPageLoad()}),$(window).on("beforeunload",function(){$(window).scrollTop(0)});