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

const handleChangeHeader = () => {
  const header = document.querySelector("header nav");
  const footer = document.querySelector("footer");
  const scrollPosition = window.scrollY;
  const items = header.querySelectorAll("ul li a");
  const icon = header.querySelectorAll(".header-icon path");
  const logoLine = header.querySelector(".line");
  const logoCircle = header.querySelector(".circle");

  const footerHeight = footer.offsetHeight;

  const diff =
    document.body.offsetHeight - (scrollPosition + window.innerHeight);

  if (diff < footerHeight) {
    header.style.backgroundColor = "#000";
    logoLine.style.backgroundColor = "#fff";
    logoCircle.style.backgroundColor = "#fff";
    icon.forEach((i) => (i.style.fill = "#fff"));
    items.forEach((item, index) => {
      item.style.border = "1px solid #fff";
      item.style.color = "#fff";
      if (index === items.length - 1) {
        item.style.backgroundColor = "#fff";
        item.style.color = "#e68446";
        item.querySelector("svg path").style.stroke = "#e68446";
      }
    });
  } else {
    header.style.backgroundColor = "rgba(245, 245, 245, 0.16)";
    logoLine.style.backgroundColor = "#000";
    logoCircle.style.backgroundColor = "#000";
    icon.forEach((i) => (i.style.fill = "#000"));
    items.forEach((item, index) => {
      item.style.border = "1px solid #222";
      item.style.color = "#222";

      if (index === items.length - 1) {
        item.style.backgroundColor = "#222";
        item.style.color = "#fff";
        item.querySelector("svg path").style.stroke = "#fff";
      }
    });
  }
};

window.addEventListener("scroll", handleChangeHeader);

window.addEventListener("scroll", handleScroll);

// --------------  Animation  ----------------

// Cover Animation
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

// About Us Animation
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

// Service Animation
const serviceItems = document.querySelectorAll(
  "section.service .content .middle .item"
);

const serviceAnimation = gsap.timeline({ paused: true });
serviceAnimation.from(serviceItems, {
  duration: 1,
  y: 60,
  opacity: 0,
  ease: "power4.out",
  stagger: 0.5,
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
