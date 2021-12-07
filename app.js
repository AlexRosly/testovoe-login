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

  square.addEventListener('mouseover', () => setColor(square));

  square.addEventListener('mouseleave', () => removeColor(square));

  board.append(square);
}

function setColor(elemetn) {
  const color = getRandomColor();
  elemetn.style.backgroundColor = color;
  elemetn.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(elemetn) {
  elemetn.style.backgroundColor = '#1d1d1d';
  elemetn.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
  const idx = Math.floor(Math.random() * colors.length);
  return colors[idx];
}
