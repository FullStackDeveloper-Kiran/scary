const bottomJaw = document.getElementById("bottom-skull");
const skullContainer = document.getElementById("skull-container");
const eyes = document.querySelectorAll(".eyes");
//open mouth
function mouseOver() {
  bottomJaw.style.animation = "openMouth 1s forwards";
  input0.style.animation = "showInput 1s forwards";
}
document.body.addEventListener("dblclick", () => {
  closeMouth();
});
function closeMouth() {
  bottomJaw.style.animation = "closeMouth 1s forwards";
  input0.style.animation = "hideInput 1s forwards";
}
skullContainer.onmouseover = () => {
  mouseOver();
};
skullContainer.onmouseout = () => {
  closeMouth();
};
eyes.forEach((eye, index) => {
  setTimeout(() => {
    eyes[index].style.animation = " eyes 10s linear 2s forwards";
  }, 4000);
});