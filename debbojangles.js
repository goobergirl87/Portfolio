// let start = document.querySelector("#start");
// let pageBottom = document.querySelector("#page-bottom");

// start.addEventListener("click", function () {
//   pageBottom.scrollIntoView();
// });

// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

// Smooth scrolling

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//Reveal sections - not active, cause it doesn't work in Safari

// const allSections = document.querySelectorAll(".section");

// const revealSection = function (entries, observer) {
//   const [entry] = entries;
//   console.log(entry);

//   if (!entry.isIntersecting) return;
//   entry.target.classList.remove("section-hidden");
//   observer.unobserve(entry.target);
// };

// const sectionObserver = new IntersectionObserver(revealSection, {
//   root: null,
//   treshold: 0.1,
// });

// allSections.forEach(function (section) {
//   sectionObserver.observe(section);
//   section.classList.add("section-hidden");
// });

// for (let i = 0; i < 120; i++) {
//   const photoSketchPad = document.querySelector("#photoSketchPad");
//   const square = document.createElement("div");
//   square.setAttribute(
//     "style",
//     "display: flex; height: 19.155px; width: 19.155px"
//   );
//   square.classList.add("square");
//   photoSketchPad.appendChild(square);

//   square.onmousemove = function () {
//     square.style.backgroundColor = "transparent";
//   };
// }
