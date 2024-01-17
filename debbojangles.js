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

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

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
