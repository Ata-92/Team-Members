const wrapper = document.querySelector(".wrapper-off");
const icon = document.getElementsByTagName("i")[0];

icon.addEventListener("click", () => {
  icon.classList.toggle("fa-toggle-on");
  wrapper.classList.toggle("wrapper-on");
})
