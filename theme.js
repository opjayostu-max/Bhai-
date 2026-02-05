const btn = document.querySelector(".theme-btn");
const icon = btn.querySelector("i");

btn.onclick = () => {
  document.body.classList.toggle("light");
  icon.className = document.body.classList.contains("light")
    ? "fa-solid fa-sun"
    : "fa-solid fa-moon";
};