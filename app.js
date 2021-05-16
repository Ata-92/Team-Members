// const wrapper = document.querySelector(".wrapper-off");
// const toggles = document.querySelectorAll("svg");
// toggles[1].style.display = "none";

// toggles.forEach((toggle, index) => {
//   toggle.addEventListener("click", () => {
//     toggle.style.display = "none";
//     toggles[1 - index].style.display = "initial";
//     wrapper.classList.toggle("wrapper-on");
//   })
// })



// const wrapper = document.querySelector(".wrapper-off");
// const icon = document.getElementsByTagName("i")[0];

// icon.addEventListener("click", () => {
//   icon.classList.toggle("fa-toggle-on");
//   wrapper.classList.toggle("wrapper-on");
// });



const wrapper = document.querySelector(".wrapper-off");
const input = document.querySelector("input");

input.addEventListener("click", () => {
  wrapper.classList.toggle("wrapper-on");
});
