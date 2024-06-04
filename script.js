const box = document.querySelector("#main-container");
const colorcode = document.getElementById("container");

const randomColorGenerator = () => {
  colorCodes = "0123456789ABCDEF";
  let randomColor = "#";
  for (let index = 0; index < 6; index++) {
    randomIndex = Math.floor(Math.random() * 16);
    randomColor += colorCodes[randomIndex];
  }

  return randomColor;
};
box.style.backgroundColor = randomColorGenerator();
document.addEventListener("keyup", (event) => {
  if (event.code === "Space") {
    colorcode.innerHTML =
      randomColorGenerator() +
      `<p class="attribution">
    Coded by <a href="https://github.com/Ganeshdojo" target="_blank">Ganesh</a>.
</p>`;
    box.style.backgroundColor = randomColorGenerator();
  }
});
