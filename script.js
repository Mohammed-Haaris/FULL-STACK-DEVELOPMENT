/** @format */

const colors = ["green", "red", "yellow", "violet", "blue", "orange"];
const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  colors.textcontent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
