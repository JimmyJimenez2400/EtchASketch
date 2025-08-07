//16x16, start smaller with 2x2.
const container = document.querySelector('.divContainer');

function constructChildDivs() {
  const div = document.createElement('div'); //our div creator
  div.style.outline = '2px solid red';
  div.style.height = '20px';
  div.style.width = '20px';

  div.setAttribute('class', 'childDiv');

  return div;
}

function generateSquareDivs(div) {
  container.appendChild(div);
}

generateSquareDivs(constructChildDivs());
