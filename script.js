//
const cursor = document.querySelector('.cursor');
const cursorinner = document.querySelector('.cursor2');
const lineElement = document.getElementById('line');


document.addEventListener('mousemove', function(e) {
  const x = e.clientX;
  const y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';
});

document.addEventListener('mousedown', function() {
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function() {
  cursor.classList.remove('click');
  cursorinner.classList.remove('cursorinnerhover')
});

// functions
function drawLine(elem1, elem2) {
  const element1 = elem1.getBoundingClientRect();
  const element2 = elem2.getBoundingClientRect()
  const pos1 = {
    x: element1.left + element1.width / 2,
    y: element1.top + element1.height / 2
  }
  const pos2 = {
    x: element2.left + element2.width / 2,
    y: element2.top + element2.height / 2
  }
  const distance = Math.ceil(Math.sqrt(Math.pow(pos2.x - pos1.x, 2) + Math.pow(pos2.y - pos1.y, 2)));
  const angle = Math.atan2(pos2.y - pos1.y, pos2.x - pos1.x);

  lineElement.style.top = pos1.y + 'px';
  lineElement.style.left = pos1.x + 'px';
  lineElement.style.width = distance + 'px';
  lineElement.style.transform = 'rotate(' + angle + 'rad)';
}


setInterval(() => {
  drawLine(cursor, cursorinner);
}, 16);


