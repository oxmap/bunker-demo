function setClass() {
  document.getElementsByClassName(
    "text"
  )[0].innerHTML = `
    Ширина экрана = ${window.innerWidth} (7680)</br> 
    Высота экрана = ${window.innerHeight} (2160)</br>
    Масштаб = ${devicePixelRatio} (1)</br>
    `;
}

setClass();

window.addEventListener(
  "resize",
  function () {
    setClass();
  },
  true
);