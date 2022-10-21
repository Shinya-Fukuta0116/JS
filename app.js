let circle = document.getElementById("circle");
let upBtn = document.getElementById("upBtn");
let down = document.getElementById("down");

let rotateValue = circle.style.transform;
// console.log(rotateValue)
let rotateSum;

upBtn.onclick = function () {
  // 時計回りに90度
  rotateSum = rotateValue + "rotate(-90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
}
down.onclick = function () {
  // 反時計回りに90度
  rotateSum = rotateValue + "rotate(90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
}