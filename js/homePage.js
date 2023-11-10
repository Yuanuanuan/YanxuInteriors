const coverText = document.querySelector(".cover-text");
const coverTextH1 = coverText.querySelector("h1");

const coverTextAnimation = gsap.timeline();
coverTextAnimation
  .to(coverText, {
    y: -200,
    duration: 0.5,
    opacity: 1,
    delay: 0.5,
  })
  .to(coverTextH1, { opacity: 1, duration: 0.3 });
