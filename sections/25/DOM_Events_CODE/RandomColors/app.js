// const button = document.querySelector('button');
// const h1 = document.querySelector('h1');

// button.addEventListener('click', function () {
//     const newColor = makeRandColor();
//     document.body.style.backgroundColor = newColor;
//     h1.innerText = newColor;
// })

// const makeRandColor = () => {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     return `rgb(${r}, ${g}, ${b})`;
// }

// my code below

function getColor() {
  let eightBit = Math.floor(Math.random() * 255);
  return eightBit;
}

const btn = document.querySelector("button");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");

body.style.display = 'flex'
body.style.flexDirection = 'column';
body.style.alignItems = 'center';



btn.addEventListener("click", () => {
  let color = `${getColor()},${getColor()},${getColor()}`;

    body.style.backgroundColor = `rgb(${color})`;
    h1.innerText = `rgb(${color})`
});
