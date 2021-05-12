/* Put your javascript in here */
const width = 130;
const count = 3;

const list = carousel.querySelector('ul');
const listItems = carousel.querySelectorAll('li');

let position = 0;

carousel.querySelector('.prev').onclick = function() {
  position += width * count;
  position = Math.min(position, 0);
  list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {
  position -= width * count;
  position = Math.max(position, -width * (listItems.length - count));
  list.style.marginLeft = position + 'px';
};