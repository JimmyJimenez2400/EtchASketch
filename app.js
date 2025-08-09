//16x16, start smaller with 2x2.
const container = document.querySelector('.divContainer');

function constructChildDivs() {
  const div = document.createElement('div'); //our div creator
  div.style.outline = '1px solid red';

  div.setAttribute('class', 'childDiv');

  return div;
}

function generateSquareDivs() {
  let total = 0;

  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      container.appendChild(constructChildDivs());
      total++;
      console.log(total);
    }
  }

  console.log('Total is', total);
}

generateSquareDivs();
