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

const coverDoor = document.querySelector(".cover-door");
const coverImage = document.querySelector(".cover-image");

const handleScroll = () => {
  console.log(window.scrollY);
  if (window.scrollY <= 400) {
    let scale = window.scrollY === 0 ? 1 : 1 + window.scrollY / 100;
    let imageScale = window.scrollY === 0 ? 1 : 1 + window.scrollY / 1000;
    let translateY = -window.scrollY;
    coverDoor.style.transform = `scale(${scale}) translateY(${translateY}px)`;
    coverImage.style.transform = `scale(${imageScale})`;
    coverImage.style.top = `${window.scrollY / 5}px`;
  }
  if (window.scrollY <= 900) {
    coverImage.style.top = `${window.scrollY / 5}px`;
  }
};

window.addEventListener('scroll', handleScroll);
