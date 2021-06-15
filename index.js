const x = document.getElementsByClassName("list_items");
const upArrow = document.getElementById("arrow");
upArrow.addEventListener("click", () => {
  if (x[0].style.display === "none") {
    x[0].classList.add("translate");
    x[0].style.display = "flex";
  } else {
    x[0].style.display = "none";
  }
});
const frontEnd = document.getElementsByClassName("frontend")[0];
const backEnd = document.getElementsByClassName("backend")[0];
const frontArrow = document.getElementsByClassName("front_arrow")[0];
const backArrow = document.getElementsByClassName("back_arrow")[0];
frontArrow.addEventListener("click", () => {
  if (frontEnd.style.display === "none") {
    frontEnd.style.display = "block";
  } else {
    frontEnd.style.display == "none";
  }
});
backArrow.addEventListener("click", () => {
  if (backEnd.style.display === "none") {
    backEnd.style.display = "block";
  } else {
    backEnd.style.display == "none";
  }
});
