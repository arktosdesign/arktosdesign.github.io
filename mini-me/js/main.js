gsap.set(".mini-me__ear--right", { transformOrigin: "0% 50%" });
gsap.set(".mini-me__ear--left", { transformOrigin: "100% 50%" });


let xPosition;
let yPosition;

let height;
let width;

function percentage(partialValue, totalValue) {
  return (100 * partialValue) / totalValue;
}

function updateScreenCoords(event) {
  xPosition = event.clientX;
  yPosition = event.clientY;
  
}

let storedXPosition = 0;
let storedYPosition = 0;

const minime = {
  shadow: document.querySelector('.mini-me__shadow'),
  ear: document.querySelectorAll('.mini-me__ear'),
  head: document.querySelector('.mini-me__head'),
  facials: document.querySelector('.mini-me__facials'),
  eyebrows: document.querySelector('.mini-me__eyebrows'),
  moustache: document.querySelector('.mini-me__moustache'),
  beard: document.querySelector('.mini-me__beard'),
  eyesOpen: document.querySelector('.mini-me__eyes-open'),
  eyesClosed: document.querySelector('.mini-me__eyes-closed'),
  hairBack: document.querySelector('.mini-me__hair-back'),
  hairFront: document.querySelector('.mini-me__hair-front'),
};

function animateFace() {
  if (!xPosition) return;
  // important, only recalculating if the value changes
  if (storedXPosition === xPosition && storedYPosition === yPosition) return;
  // range from -50 to 50
  x = percentage(xPosition, width) - 50;
  y = percentage(yPosition, height) - 50;

  // range from -20 to 80
  yHigh = percentage(yPosition, height) - 20;
  // range from -80 to 20
  yLow = percentage(yPosition, height) - 80;

  gsap.to(minime.head, {
    yPercent: yLow / 30,
    xPercent: x / 30
  });
  gsap.to(minime.beard, {
    yPercent: yLow / 25,
    xPercent: x / 25
  });
  gsap.to(minime.hairBack, {
    yPercent: y / 40,
    xPercent: x / 40
  });
  gsap.to(minime.hairFront, {
    yPercent: yHigh / 12,
    xPercent: x / 16
  });  
  gsap.to([minime.eyesOpen, minime.eyesClosed], {
    yPercent: yHigh / 3,
    xPercent: x / 5
  });
  gsap.to(minime.shadow, {
    yPercent: (yLow / 20) * -1,
    xPercent: (x / 20) * -1
  });
  gsap.to(minime.ear, {
    yPercent: (y / 5) * -1,
    xPercent: (x / 10) * -1
  });
  gsap.to(minime.eyebrows, {
    yPercent: y * 2.5,
    xPercent: x / 8
  });
  gsap.to(minime.facials, {
    yPercent: y / 4,
    xPercent: x / 3
  });
  gsap.to(minime.moustache, {
    yPercent: y / 1.5,
    xPercent: x / 4
  });

  storedXPosition = xPosition;
  storedYPosition = yPosition;
}


gsap.set(minime.eyesOpen, {
  autoAlpha: 0
});

var blinking = new gsap.timeline({ repeat: -1, repeatDelay: 4 });

blinking
.to(minime.eyesClosed, {
  autoAlpha: 0,
  duration: 0.5,
  ease: "steps(1)",
})
.to(minime.eyesOpen, {
  autoAlpha: 1,
  duration: 0.5,
  ease: "steps(1)",
}, '-=0.5');


// function being called at the end of main timeline
function addMouseEvent() {
  const safeToAnimate = window.matchMedia("(prefers-reduced-motion: no-preference)").matches;

  if (safeToAnimate) {
    window.addEventListener("mousemove", updateScreenCoords);

    // gsap's RAF, falls back to set timeout
    gsap.ticker.add(animateFace);
  }
}

// update if browser resizes
function updateWindowSize() {
  height = window.innerHeight;
  width = window.innerWidth;
}
updateWindowSize();
window.addEventListener("resize", updateWindowSize);
addMouseEvent();