// Function document
const coverDoor = document.querySelector(".cover-door");
const coverImage = document.querySelector(".cover-image");

const handleScroll = () => {
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

window.addEventListener("scroll", handleScroll);

// Animation
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

const aboutUsTitle = document.querySelector(
  ".about-us-wrapper .first-part .title"
);
const aboutUsDescribe = document.querySelector(
  ".about-us-wrapper .first-part .describe"
);
const aboutUsMoreBtn = document.querySelector(
  ".about-us-wrapper .first-part .more-btn"
);

const aboutUsAnimation = gsap.timeline({ paused: true });

aboutUsAnimation
  .from(aboutUsTitle, { duration: 1.5, y: 50, opacity: 0, ease: "power4.out" })
  .from(
    aboutUsDescribe,
    { duration: 1.5, y: 80, opacity: 0, ease: "power4.out" },
    "<0.3"
  )
  .from(aboutUsMoreBtn, { opacity: 0 }, "<0.3");

gsap.to(aboutUsAnimation, {
  scrollTrigger: {
    trigger: "section.about-us",
    start: "top 40%",
    end: "bottom center",
    onEnter: () => aboutUsAnimation.play(),
    onEnterBack: () => aboutUsAnimation.play(),
  },
});

const serviceItems = document.querySelectorAll(
  "section.service .content .middle .item"
);

const serviceAnimation = gsap.timeline({ paused: true });
serviceAnimation.from(serviceItems, {
  duration: 1,
  y: 60,
  opacity: 0,
  ease: "power4.out",
  stagger: .5,
});

gsap.to(serviceAnimation, {
  scrollTrigger: {
    trigger: "section.service",
    start: "top 30%",
    end: "bottom center",
    onEnter: () => serviceAnimation.play(),
    onEnterBack: () => serviceAnimation.play(),
  },
});
