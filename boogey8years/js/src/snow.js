
$(document).ready(function(){
    var w = window.innerWidth , h = window.innerHeight,
		mainDiv = document.getElementById("main"),
		sizes = ["small", "medium", "large"],
		types = ["full", "opaque", "opaque--lg", "full", "opqaue"],
		snowflakes = 25;

    for (var i = 0; i < snowflakes; i++) {
        var snowflakeDiv = document.createElement('div');
        var sizeIndex = Math.ceil(Math.random() * 3) -1; //get random number between 0 and 2
        var size = sizes[sizeIndex]; //get random size
        var typeIndex = Math.ceil(Math.random() * 5) -1;
        var type = types[typeIndex];
        gsap.set(snowflakeDiv, {attr: {class: 'snowflake' + ' ' + type + ' ' + size}, x: R(0,w), y: R(-200,-150) });
        mainDiv.appendChild(snowflakeDiv);
        snowing(snowflakeDiv);
    }
            
    function snowing(element) {
      gsap.to(element, R(5,12), {y: h+100, ease: Linear.easeNone, repeat:-1, delay: -15});
      gsap.to(element, R(4,8), {x: '+=100', repeat: -1, yoyo: true, ease: Sine.easeInOut});
      gsap.to(element, R(2,8), {rotation: R(0,360), repeat: -1, yoyo: true, ease:Sine.easeInOut, delay: -5});
    };

    function R(min,max) {
      return min + Math.random() * (max-min)
    };
});


// (function ($) {


//   $(function () {
    
//     // Contains the items you want to parallax.
//     var main = document.getElementById('main');
    
//     // The elements you want to parallax.
//     var mouse = document.getElementsByClassName('mouse');
    
//     // Use this value to adjust the amount of parallax in response to mouse movement.
//     var fixer = 0.0030;
    
//     document.addEventListener("mousemove", function(event){
        
//         // get the mouseX - negative on left, positive on right
//         var pageX =  event.pageX - (main.getBoundingClientRect().width * 0.5);
        
//         // same here, get the y. use console.log(pageY) to see the values
//         var pageY =  event.pageY - (main.getBoundingClientRect().height * 0.5);  

        
//         for (i = 0; i < mouse.length; i++) {
//             var item = mouse[i];
//             var speedX = item.getAttribute("data-speed-x");
//             var speedY = item.getAttribute("data-speed-y");
                        
//             gsap.to(item, {
//                 x: (item.offsetLeft + pageX * speedX ) * fixer,
//                 y: (item.offsetTop + pageY * speedY) * fixer,
//                 duration: 1.2,
//                 ease: "power1.out"
//             });
            
//         }
//     });

//   });
// })(jQuery);