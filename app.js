const board = document.querySelector('#board');
const colors = [
  'tomato',
  'azure',
  'black',
  'teal',
  'tan',
  'blueviolet',
  'brown',
];
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  // square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseover', setColor);

  // square.addEventListener('mouseleave', () => removeColor(square));
  square.addEventListener('mouseleave', removeColor);

  board.append(square);
}

// function setColor(elemetn) {
//   const color = getRandomColor();
//   elemetn.style.backgroundColor = color;
//   elemetn.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
// }
function setColor(e) {
  const element = e.target;
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

// function removeColor(elemetn) {
//   elemetn.style.backgroundColor = '#1d1d1d';
//   elemetn.style.boxShadow = '0 0 2px #000';
// }
function removeColor(e) {
  const element = e.target;

  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #000';
}

// function getRandomColor() {
//   const idx = Math.floor(Math.random() * colors.length);
//   return colors[idx];
// }
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
