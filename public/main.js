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
enableDemo('demo-info');

window.addEventListener(
  "resize",
  function () {
    setClass();
  },
  true
);

function enableDemo(id) {
  disableDemo(id);
  document.querySelector(`#${id}`).style.display = 'block';
}

function disableDemo() {
  const ids = document.querySelectorAll('[id^=demo]')
  Array.prototype.forEach.call( ids, function( el ) {
    el.style.display = 'none';
  });
}

// Slider
setSlider('widthRange', 'widthInput');
setSlider('heightRange', 'heightInput');

function setSlider(rangeId, outputId) {
  const slider = document.getElementById(rangeId);
  const output = document.getElementById(outputId);
  const id = rangeId.replace('Range', ''); 
  output.value = slider.value; 
  const size = `inner${id.charAt(0).toUpperCase() + id.slice(1)}`;
  slider.value = window[size]; 
  output.value = window[size];
  output.oninput = function() {
    slider.value = this.value;
    document.querySelector('body').style[id] = `${this.value}px`;
  }
  slider.oninput = function() {
    output.value = this.value;
    document.querySelector('body').style[id] = `${this.value}px`;
  }
}
