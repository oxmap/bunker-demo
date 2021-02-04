function setClass() {
  document.getElementsByClassName(
    "text"
  )[0].innerHTML = `
    Ширина экрана = ${window.innerWidth}</br> 
    Высота экрана = ${window.innerHeight}</br></br>
    Ширина фрейма = ${self.innerWidth}</br>
    Высота фрейма = ${self.innerHeight}</br>
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