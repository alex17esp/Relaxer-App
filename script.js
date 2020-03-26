const container = document.getElementById("container");
const text = document.getElementById("text");

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

function breathAnimation() {
  text.innerHTML = "Inspire </br><span class='seconds'>3 Secondes</span>";

  container.className = "container grow";

  setTimeout(() => {
    text.innerHTML = "Stop";
    setTimeout(() => {
      text.innerHTML = "Expire </br> <span class='seconds'>3 Secondes</span>";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}

breathAnimation();

setInterval(breathAnimation, totalTime);
