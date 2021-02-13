/* Put your javascript in here */
function arrayMethod() {
  const array1 = ['onigiri_1.png', 'onigiri_2.png', 'onigiri_3.png', 'onigiri_4.png', 'roll_1.png', 'roll_2.png', 'roll_3.png'];
  const listContainer = document.createElement('ul');
  /* listContainer.className = 'images' */
  const target = document.querySelector('.gallery');
  target.append(listContainer);

  array1.forEach((png) => {
    const listItem = document.createElement('li');
    /* listContainer.append(listItem); */
    /* const listImg = document.createElement('img'); */
    listItem.innerText = png;
    listContainer.append(listItem);
  });
}

window.onload = arrayMethod;

const width = 130;
const count = 3;

const list = carousel.querySelector('ul');
const listElems = carousel.querySelectorAll('li');

let position = 0;

carousel.querySelector('.prev').onclick = function() {
  position += width * count;
  position = Math.min(position, 0);
  list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {
  position -= width * count;
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};