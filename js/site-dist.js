$(function(){"use strict";var e={blacklist:"form",scroll:!0,debug:!1,prefetch:!0,cacheLength:4,onStart:{duration:800,render:function(e){e.addClass("is-exiting"),a.restartCSSAnimations()}},onReady:{duration:400,render:function(e,a){e.removeClass("is-exiting"),e.html(a)}},onAfter:function(e){e.onPageLoad()}},a=$("#main").smoothState(e).data("smoothState")}),function(R){R.fn.onPageLoad=function(){function a(){R("body").hasClass("menu-open")&&(R("body").removeClass("menu-open"),window.location.hash="")}function e(e){document.title=e}function t(){R(this).attr("size",R(this).val().length)}Splitting(),ScrollOut({targets:".ev",threshold:.5,once:!0,cssProps:{viewportY:!0,visibleY:!0},onShown:function(e){var a=R(e).find(".wiper"),t=R(e).find(".scale-wrap");0!==a.length&&(TweenMax.to(a,1,{scaleX:0,transformOrigin:"100% 0%",ease:Expo.easeInOut}),TweenMax.to(t,1.4,{x:"-50%",autoAlpha:1,ease:Expo.easeOut}))}}),ScrollOut({targets:".g-wrap",threshold:.2,onShown:function(e){R(e).hasClass("dk")&&(b.play(),h.play(),y.play(),console.log("dk >")),R(e).hasClass("bb8")?(D.timeScale(1.3).play(),u.play(),console.log("bb8 >")):R(e).hasClass("tf")?(O.play(),d.play(),console.log("tf >")):R(e).hasClass("lamp")?(I.play(),w.play(),console.log("lamp >")):R(e).hasClass("bwave")&&(u.play(),N.play(),V.play(),console.log("bwave >"))},onHidden:function(e){R(e).hasClass("dk")?(b.pause(),h.pause(),y.pause(),console.log("dk <")):R(e).hasClass("bb8")?(D.pause(),u.pause(),console.log("bb8 <")):R(e).hasClass("tf")?(O.pause(),d.pause(),console.log("tf <")):R(e).hasClass("lamp")?(I.pause(),w.pause(),console.log("lamp <")):R(e).hasClass("bwave")&&(u.pause(),N.pause(),V.pause(),console.log("bwave <"))}}),R("#contactform").validate({rules:{email:"required",name:"required",message:"required"},messages:{email:"",name:"",message:""}}),R("#sendMessage").on("click",function(){if(R("#contactform").valid())return R.ajax({url:"//formspree.io/arktosdesign@gmail.com",method:"POST",data:R("#contactform").serialize(),dataType:"json"}),TweenMax.set(R(".success-form"),{autoAlpha:0,scale:1.2,y:30,transformOrigin:"50% 50%"}),TweenMax.to(R("#contactform"),.4,{autoAlpha:0,ease:Power2.easeInOut}),TweenMax.to(R(".success-form"),.8,{autoAlpha:1,scale:1,y:0,delay:.2,ease:Power2.easeInOut}),!1}),R(function(){"use strict";var e=R(".snl");R(".main-menu ul li a").click(function(){R(this).parent().addClass("active").siblings().removeClass("active"),e.css({"stroke-dasharray":"0 390","stroke-dashoffset ":"0"})}),R(".main-menu ul li").find("a").hover(function(){R(this).hasClass("about-page")?e.css({"stroke-dasharray":"116 390","stroke-dashoffset":"0"}):R(this).hasClass("work-page")?e.css({"stroke-dasharray":"116 390","stroke-dashoffset":"-129"}):R(this).hasClass("contact-page")&&e.css({"stroke-dasharray":"116 390","stroke-dashoffset":"-266"})},function(){e.css({"stroke-dasharray":"0 390","stroke-dashoffset ":"0"})})}),R(".menu-toggle").click(function(){R("body").hasClass("menu-open")?a():(R("body").addClass("menu-open"),location.hash="main-menu")}),R(document).keyup(function(e){27==e.keyCode&&window.location.hash&&a()}),R(".logo a, .link").click(function(){R("body").hasClass("menu-open")?(R("body").addClass("out"),a()):R("body").addClass("no-p")}),R("a").click(function(){TweenMax.to(R(".top-menu"),.1,{boxShadow:"0px 1px 6px rgba(0,0,0,0)",ease:Power1.easeOut})}),R(window).bind("hashchange",function(){null!=location.hash&&""!=location.hash||a()}),R(function(){R("main").hasClass("ind-pp")&&setTimeout(function(){var e,a,t,o;e="https://arktosdesign.github.io",a=function(e){e?(R(".ind-pp").find(".status-online").show(),R(".ind-pp").find(".status-offline").hide()):(R(".ind-pp").find(".status-online").hide(),R(".ind-pp").find(".status-offline").show())},t=setTimeout(function(){a(!1)},5e3),(o=document.createElement("img")).onload=function(){clearTimeout(t),a(!0)},o.onerror=function(){clearTimeout(t),a(!1)},o.src=e+"/favicon.ico"},500)}),R(function(){navigator.vibrate=navigator.vibrate||navigator.webkitVibrate||navigator.mozVibrate||navigator.msVibrate,navigator.vibrate&&(R(".logo a, a.button, a.a-button, .t-button, .menu-toggle, ul.links li, .vbt").click(function(){navigator.vibrate(20)}),R("nav a").click(function(){navigator.vibrate(10)}))});var o=R(document).find("title").text(),s="👋 "+o;R(window).on("focus",function(){e(o)}).on("blur",function(){e(s)}),R('input[type="text"], input[type="email"]').keyup(t).each(t),function(){var e=document.querySelectorAll(".expanding"),a=function(e){e.style.height="auto",e.style.overflow="hidden",e.style.height=e.scrollHeight+e.offset+"px",e.style.overflow=""},t=function(e){e&&(e.offset=window.opera?e.offsetHeight+parseInt(window.getComputedStyle(e,null).getPropertyValue("border-top-width")):e.offsetHeight-e.clientHeight,a(e),e.addEventListener&&(e.addEventListener("input",function(){a(e)}),e.addEventListener("mouseup",function(){a(e)})),e.attachEvent&&e.attachEvent("onkeyup",function(){a(e)}))};document.querySelectorAll||(e=function(e,a,t){var o=new Array;t=t||"*";var s=(a=a||document).getElementsByTagName(t),n=s.length,r=new RegExp("(^|\\s)"+e+"(\\s|$)");for(i=0,j=0;i<n;i++)r.test(s[i].className)&&(o[j]=s[i],j++);return o}("expanding"));for(var i=0;i<e.length;i++)t(e[i])}();var n=R(".scroll-circ"),r=R(".scroll-lines");scrollDown=new TimelineMax({repeat:-1,repeatDelay:.1}),scrollDown.to(n,1,{autoAlpha:0,y:14,scale:.2,transformOrigin:"50% 50%",ease:Power2.easeInOut}).to(r,1,{strokeDashoffset:-36,ease:Power2.easeInOut},"-=1").to(n,0,{autoAlpha:0,y:0,scale:1,transformOrigin:"50% 50%",ease:Power2.easeInOut}).to(n,.3,{autoAlpha:1,ease:Power0.easeNone}),scrollDown.play();var i=CustomEase.create("custom","M0,0,C0.2,0,0.354,0.276,0.507,0.512,0.653,0.737,0.798,1,1,1"),l=R(".blob-one"),u=new TimelineMax({repeat:-1,repeatDelay:0,yoyo:!0,paused:!0});u.to(l,4.5,{attr:{d:"M374.5,134c0,61-96.7,91-200.5,91S2.5,145.5,2.5,104C2.5,54,102.2,4,206,4S374.5,73,374.5,134z"},ease:i}).to(l,4.5,{attr:{d:"M374.5,104c0,61-131.7,121-235.5,121S2.5,133.5,2.5,92C2.5,42,80.2,4,184,4S374.5,43,374.5,104z"},ease:i}).to(l,4.5,{attr:{d:"M374.5,108c0,61-104.7,117-208.5,117S2.5,146.5,2.5,105C2.5,55,121.2,4,225,4S374.5,47,374.5,108z"},ease:i}).to(l,4.5,{attr:{d:"M374.5,124c0,61-74.7,101-178.5,101S2.5,131.5,2.5,90C2.5,40,84.2,4,188,4S374.5,63,374.5,124z"},ease:i}).to(l,4.5,{attr:{d:"M374.5,121c0,61-115.7,104-219.5,104S2.5,138.5,2.5,97C2.5,47,50.2,4,154,4S374.5,60,374.5,121z"},ease:i});var c=R(".blob-two"),d=new TimelineMax({repeat:-1,repeatDelay:0,yoyo:!0,paused:!0});d.to(c,4.5,{attr:{d:"M374.5,108c0,61-104.7,117-208.5,117S2.5,146.5,2.5,105C2.5,55,121.2,4,225,4S374.5,47,374.5,108z"},ease:i}).to(c,4.5,{attr:{d:"M374.5,134c0,61-96.7,91-200.5,91S2.5,145.5,2.5,104C2.5,54,102.2,4,206,4S374.5,73,374.5,134z"},ease:i}).to(c,4.5,{attr:{d:"M372,85c0,61-89.2,136-193,136S0,152.5,0,111C0,61,75.2,0,179,0S372,24,372,85z"},ease:i}).to(c,4.5,{attr:{d:"M374.5,104c0,61-131.7,121-235.5,121S2.5,133.5,2.5,92C2.5,42,80.2,4,184,4S374.5,43,374.5,104z"},ease:i}).to(c,4.5,{attr:{d:"M374.5,121c0,61-115.7,104-219.5,104S2.5,138.5,2.5,97C2.5,47,50.2,4,154,4S374.5,60,374.5,121z"},ease:i});var p=R(".blob-three"),w=new TimelineMax({repeat:-1,repeatDelay:0,yoyo:!0,paused:!0});w.to(p,4.5,{attr:{d:"M374.5,104c0,61-131.7,121-235.5,121S2.5,133.5,2.5,92C2.5,42,80.2,4,184,4S374.5,43,374.5,104z"},ease:i}).to(p,4.5,{attr:{d:"M374.5,93c0,61-136.7,132-240.5,132S2.5,168.5,2.5,127C2.5,77,94.2,4,198,4S374.5,32,374.5,93z"},ease:i}).to(p,4.5,{attr:{d:"M374.5,108c0,61-104.7,117-208.5,117S2.5,146.5,2.5,105C2.5,55,121.2,4,225,4S374.5,47,374.5,108z"},ease:i}).to(p,4.5,{attr:{d:"M374.5,121c0,61-115.7,104-219.5,104S2.5,138.5,2.5,97C2.5,47,50.2,4,154,4S374.5,60,374.5,121z"},ease:i}).to(p,4.5,{attr:{d:"M374.5,124c0,61-74.7,101-178.5,101S2.5,131.5,2.5,90C2.5,40,84.2,4,188,4S374.5,63,374.5,124z"},ease:i});var f=R(".screen-elements"),m=R(".screen-elements path"),h=new TimelineMax({paused:!0,yoyo:!0,repeat:-1,repeatDelay:0}),y=new TimelineMax({paused:!0,yoyo:!0,repeat:-1,repeatDelay:2});h.to(f,.06,{opacity:.8,ease:"linear"}),TweenMax.set(m,{autoAlpha:0,transformOrigin:"0% 50%"}),y.staggerTo(m,.9,{autoAlpha:1,ease:Power1.easeIn},.56);var g=R(".dk26"),b=new TimelineMax({paused:!0,yoyo:!0,repeat:-1,repeatDelay:0});b.to(g,.26,{scale:.82,transformOrigin:"50% 50%",ease:Elastic.easeOut.config(.6,.3)});var x=R(".tf-knob"),v=R(".tf-fader"),O=new TimelineMax({paused:!0,yoyo:!0,repeat:-1,repeatDelay:0});O.staggerTo(v,.9,{y:-20,ease:Power1.easeIn},.22).staggerTo(v,.9,{y:26,ease:Power1.easeIn}).staggerTo(v,.9,{y:0,ease:Power1.easeIn},.12).staggerTo(x,.6,{rotation:93,transformOrigin:"85% 15%",ease:Power3.easeInOut},.12,"-=3").staggerTo(x,.8,{rotation:220,transformOrigin:"85% 15%",ease:Power3.easeInOut},.1),R(".tfp").click(function(e){var a=R('<div class="pop">').css({left:e.pageX+"px",top:e.pageY+"px"}).append(R('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" viewBox="0 0 114 114.7" style="enable-background:new 0 0 114 114.7;" xml:space="preserve"><line class="fcb-stroke" x1="57" y1="0" x2="57" y2="8.9"/><line class="fcb-stroke" x1="57" y1="114.7" x2="57" y2="105.8"/><line class="fcb-stroke" x1="16.8" y1="97.6" x2="23.1" y2="91.3"/><line class="fcb-stroke" x1="98.6" y1="95.5" x2="92.3" y2="89.2"/><line class="fcb-stroke" x1="16.8" y1="16.4" x2="23.1" y2="22.7"/><line class="fcb-stroke" x1="100.7" y1="19.8" x2="94.4" y2="26.2"/><line class="fcb-stroke" x1="0" y1="57" x2="8.9" y2="57"/><line class="fcb-stroke" x1="114" y1="57" x2="105.1" y2="57"/></svg>')).appendTo(document.body);setTimeout(function(){a.remove()},300)});var P=R(".lamp-s"),C=R(".lamp-bl-1"),T=R(".lamp-bl-2"),I=new TimelineMax({paused:!0,repeat:-1,repeatDelay:0});I.staggerTo(P,5,{y:-36,x:-.9,scale:1.1,rotation:-4.2,transformOrigin:"50% 50%",ease:Power4.easeInOut},.08).staggerTo(P,6,{y:0,x:0,scale:1,rotation:0,transformOrigin:"50% 50%",ease:Power4.easeInOut},.08).to(T,4,{opacity:.15,scaleX:1.8,rotation:5,transformOrigin:"50% 50%",ease:Power3.easeInOut},"-=10").to(C,4,{opacity:0,scaleX:2,rotation:-5,transformOrigin:"50% 50%",ease:Power3.easeInOut},"-=10.3").to(T,4,{opacity:.15,scaleX:1,rotation:0,transformOrigin:"50% 50%",ease:Power3.easeInOut},"-=5").to(C,4,{opacity:.1,scaleX:1,rotation:0,transformOrigin:"50% 50%",ease:Power3.easeInOut},"-=5");var k=R(".bb8-head"),M=R(".bb8-body"),S=R(".bb8-main"),A=R(".bb8-shadow"),z=R(".bb8-lines line"),D=new TimelineMax({paused:!0,repeat:-1,repeatDelay:1,delay:1.7});TweenMax.set(k,{rotation:0,transformOrigin:"32% 163%"}),TweenMax.set(M,{rotation:0,transformOrigin:"50% 50%"}),D.to(k,.3,{rotation:5,ease:Power1.easeInOut}).to(k,.3,{rotation:-5,ease:Power1.easeInOut}).to(k,.3,{rotation:4,ease:Power1.easeInOut}).to(k,.3,{rotation:0,ease:Power1.easeInOut}).to(M,.3,{rotation:-4,ease:Power1.easeInOut},"-=1.2").to(M,.3,{rotation:4,ease:Power1.easeInOut},"-=0.9").to(M,.3,{rotation:-2,ease:Power1.easeInOut},"-=0.6").to(M,.3,{rotation:0,ease:Power1.easeInOut},"-=0.3").to([S,A],.3,{x:-4,ease:Power1.easeInOut},"-=1.2").to([S,A],.3,{x:4,ease:Power1.easeInOut},"-=0.9").to([S,A],.3,{x:-3,ease:Power1.easeInOut},"-=0.6").to([S,A],.3,{x:0,ease:Power1.easeInOut},"-=0.3").to(k,1,{rotation:-30,ease:Power1.easeInOut},"+=1").to([S,A],1.4,{x:-13,ease:Power2.easeInOut},"-=0.6").to(M,13,{rotation:-5400,ease:Power1.easeInOut},"-=1.2").staggerTo(z,6,{strokeDashoffset:-1092,ease:Power0.easeNone},.18,"-=10").to(k,1.2,{rotation:-20,ease:Power1.easeInOut},"-=10.6").to(k,1.2,{rotation:-29,ease:Power1.easeInOut},"-=9").to(k,1.2,{rotation:-22,ease:Power1.easeInOut},"-=7.3").to(k,1.2,{rotation:-29,ease:Power1.easeInOut},"-=5.6").to(k,3,{rotation:20,ease:Power1.easeInOut},"-=4.2").to(k,1,{rotation:0,ease:Power1.easeInOut},"-=1.1").to([S,A],2,{x:0,ease:Power2.easeInOut},"-=3.3").to(k,.2,{rotation:7,ease:Power1.easeInOut},"+=0.9").to(k,.2,{rotation:-7,ease:Power1.easeInOut}).to(k,.2,{rotation:5,ease:Power1.easeInOut}).to(k,.2,{rotation:0,ease:Power1.easeInOut});var E=R(".bArm"),L=R(".bw13"),N=new TimelineMax({paused:!0,repeat:-1,delay:1.7,repeatDelay:0}),V=new TimelineMax({paused:!0,repeat:-1,delay:1.7,repeatDelay:.8});TweenMax.set(E,{transformOrigin:"95% 92%"}),N.staggerTo(L,.6,{opacity:0,ease:Power0.easeNone},.062).staggerTo(L,.6,{opacity:1,ease:Power0.easeNone},.062,"-=0.9"),V.to(E,.2,{rotation:-7,ease:Power1.easeInOut}).to(E,.2,{rotation:7,ease:Power1.easeInOut}).to(E,.2,{rotation:-5,ease:Power1.easeInOut}).to(E,.2,{rotation:4,ease:Power1.easeInOut}).to(E,.2,{rotation:-6,ease:Power1.easeInOut}).to(E,.2,{rotation:6,ease:Power1.easeInOut}).to(E,.2,{rotation:-7,ease:Power1.easeInOut}).to(E,.2,{rotation:4,ease:Power1.easeInOut}).to(E,.2,{rotation:-5,ease:Power1.easeInOut}).to(E,.2,{rotation:6,ease:Power1.easeInOut}).to(E,.2,{rotation:-5,ease:Power1.easeInOut}).to(E,.2,{rotation:0,ease:Power1.easeInOut}).to(E,1,{x:420,ease:Power1.easeInOut},"+=0.6").to(E,.6,{rotation:-22,ease:Power1.easeInOut},"-=1").to(E,1.2,{x:0,ease:Power0.easeNone},"+=1.7").to(E,.6,{rotation:0,ease:Power0.easeNone},"-=0.6"),R(".scroll-down svg, .scrollDown").click(function(){R([document.documentElement,document.body]).animate({scrollTop:R("#sectionTwo").offset().top-48},780)}),R(".btt").click(function(){R([document.documentElement,document.body]).animate({scrollTop:R("header").offset().top},780)}),TweenMax.set(R(".video-holder"),{autoAlpha:0,transformOrigin:"50% 50%"}),R(".work-item").mouseover(function(){R(this).find("#video").get(0).play().currentTime=0,TweenMax.to(R(this).find("video"),.6,{autoAlpha:1,ease:Power3.easeOut}),TweenMax.to(R(this).find(".video-holder"),.8,{autoAlpha:1,scale:1,ease:Power3.easeOut})}),R(".work-item").mouseout(function(){R(this).find("#video").get(0).pause(),TweenMax.to(R(this).find("video"),.6,{autoAlpha:0,ease:Power3.easeOut}),TweenMax.to(R(this).find(".video-holder"),.6,{autoAlpha:0,scale:1.08,ease:Power4.easeOut})});var X=0,q=120,H=992,$=6;R(".fd, .fp").addClass("faded"),R(".btn-1, .for-header svg").addClass("fiu"),R("main").hasClass("home")?(u.play(),b.play(),h.play(),y.play()):R("main").hasClass("about")?(D.timeScale(1.3).play(),u.play()):R("main").hasClass("contact")&&(N.play(),V.play(),u.play(),d.timeScale(.7).play(),R(".header-links").addClass("uiu")),R("body").removeClass("out"),R("body").hasClass("no-p")&&R("body").removeClass("no-p"),a(),R(function(){if(R("div").hasClass("rellax"))new Rellax(".rellax")}),window.addEventListener("scroll",_.throttle(function(){console.log("scrolling");var e=R(".scroll-down"),a=R(".left-cta, .right-cta"),t=R(".footer-an");if(1<R(window).scrollTop()?TweenMax.to(e,.18,{autoAlpha:0,ease:Power0.easeIn}):TweenMax.to(e,.2,{autoAlpha:1,ease:Power0.easeOut}),R(window).scrollTop()+R(window).height()>R(document).height()-620?TweenMax.to(a,.2,{autoAlpha:0,ease:Power0.easeOut}):TweenMax.to(a,.2,{autoAlpha:1,ease:Power0.easeOut}),R(window).scrollTop()+R(window).height()>R(document).height()-180?TweenMax.to(t,.3,{autoAlpha:1,y:0,ease:Power2.easeOut}):TweenMax.to(t,.3,{autoAlpha:0,y:50,ease:Power2.easeOut}),!R(".top-menu").hasClass("expanded")){var o=R(this).scrollTop(),s=Math.abs(o-X);q<o?(H<o&&(R(".top-menu").hasClass("detached")||R(".top-menu").addClass("detached")),$<=s&&(X<o?R(".top-menu").hasClass("invisible")||R(".top-menu").addClass("invisible"):R(".top-menu").hasClass("invisible")&&R(".top-menu").removeClass("invisible"))):o<=0&&R(".top-menu").removeClass().addClass("top-menu"),X=o}},300,{leading:!0,trailing:!0}))}}(jQuery),$(document).ready(function(){$("body").onPageLoad()});