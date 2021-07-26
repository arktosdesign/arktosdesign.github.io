const dom = {
  shadow: document.querySelector('.grogu__shadow'),
  earLeft: document.querySelector('.grogu__ear-left'),
  earRight: document.querySelector('.grogu__ear-right'),
  head: document.querySelector('.grogu__head'),
  mouth: document.querySelector('.grogu__mouth'),
  eyesClosed: document.querySelector('.grogu__eyes-closed'),
  eyesOpen: document.querySelector('.grogu__eyes-open'),
  armLeft: document.querySelector('.grogu__arm-left'),
  armRight: document.querySelector('.grogu__arm-right'),
  collar: document.querySelector('.grogu__collar'),
  ball: document.querySelector('.ball'),
  ballInner: document.querySelector('.ball__inner')
};

gsap.set(dom.earRight, { transformOrigin: "0% 50%" });
gsap.set(dom.earLeft, { transformOrigin: "100% 50%" });
gsap.set(dom.armLeft, { transformOrigin: "50% 0%" });
gsap.set(dom.armRight, { transformOrigin: "0% 0%" });
gsap.set(dom.ballInner, { transformOrigin: "50% 50%" });

gsap.to(dom.ballInner, {
  rotation: -360,
  repeat: -1,
  duration: 4,
  ease: "none"
});


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


// Blink
gsap.set(dom.eyesOpen, {
  autoAlpha: 0
});

var blinking = new gsap.timeline({ repeat: -1, repeatDelay: 4 });

blinking
.to(dom.eyesClosed, {
  autoAlpha: 0,
  duration: 0.4,
  ease: "steps(1)",
})
.to(dom.eyesOpen, {
  autoAlpha: 1,
  duration: 0.4,
  ease: "steps(1)",
}, '-=0.4');

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

  gsap.to(dom.head, {
    yPercent: yLow / 30,
    xPercent: x / 30
  });
  gsap.to([dom.eyesOpen, dom.eyesClosed], {
    yPercent: yHigh / 8,
    xPercent: x / 14
  });
  gsap.to(dom.shadow, {
    xPercent: (x / 30) * -1
  });
  gsap.to([dom.earLeft, dom.earRight], {
    yPercent: (y / 25) * -1,
    xPercent: (x / 50) * -1
  });
  gsap.to(dom.mouth, {
    yPercent: y / 2,
    xPercent: x / 2
  });
  gsap.to(dom.collar, {
    yPercent: y / 15,
    xPercent: x / 15
  });
  gsap.to(dom.armLeft, {
    xPercent: x / 30,
    rotation: -x - y
  });
  gsap.to(dom.armRight, {
    xPercent: x / 30,
    rotation: -x - -y
  });
  storedXPosition = xPosition;
  storedYPosition = yPosition;
}


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

// Cursor
function moveCircle(e) {
  gsap.to(dom.ball, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1
  }); 
};
window.addEventListener('mousemove', moveCircle);