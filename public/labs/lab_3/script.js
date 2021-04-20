/* Put your javascript in here */
function arrayMethod() {
  const array1 = ['images/onigiri_1.png', 'images/onigiri_2.png', 'images/onigiri_3.png', 'images/onigiri_4.png', 'images/roll_1.png', 'images/roll_2.png', 'images/roll_3.png'];
  const listContainer = document.createElement('ul');
  listContainer.className = 'images'
  const target = document.querySelector('.gallery');
  target.appendChild(listContainer);

  array1.forEach((png) => {
    const listItem = document.createElement('li');
    listContainer.appendChild(listItem);
    const listImg = document.createElement('img');
    listImg.setAttribute("src", png);
    listItem.append(listImg);

    console.log('done')
  });
}

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

window.onload = arrayMethod;