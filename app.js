const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragover); //вызывается когда элемент находится не посредственно на плейсхолдером
  placeholder.addEventListener('dragenter', dragenter); //заходим на территорию соседнего плейсхолдера
  placeholder.addEventListener('dragleave', dragleave); //перетащили и вышли за плейсхолдеры
  placeholder.addEventListener('drop', dragdrop); //когда отпустили
}

function dragstart(e) {
  e.target.classList.add('hold');
  setTimeout(() => e.target.classList.add('hide'), 0);
}

function dragend(e) {
  //1-st variant
  //e.target.classList.remove('hold');
  //e.target.classList.remove('hide');
  //2-d variant
  //e.target.classList.remove('hold', 'hide');
  //3-d variant
  e.target.className = 'item';
}

function dragover(e) {
  e.preventDefault();
}

function dragenter(e) {
  e.target.classList.add('hovered');
}

function dragleave(e) {
  e.target.classList.remove('hovered');
}

function dragdrop(e) {
  e.target.classList.remove('hovered');
  e.target.append(item);
}
