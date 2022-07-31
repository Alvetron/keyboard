const keyboard  = document.querySelector('.keyboard');
const keyboardRect  = keyboard.getBoundingClientRect();

const mouseShadow = document.querySelector('.mouse-shadow');

keyboard.appendChild(mouseShadow);

keyboard.addEventListener('mouseenter', () => {
  mouseShadow.classList.add('active');
})

keyboard.addEventListener('mousemove', (e) => {
  const leftPos  = e.clientX - keyboardRect.x - (mouseShadow.clientWidth / 2)
  const topPos  = e.clientY - keyboardRect.y - (mouseShadow.clientHeight / 2)
  mouseShadow.style.left = leftPos + 'px';
  mouseShadow.style.top = topPos + 'px';
})

keyboard.addEventListener('mouseleave', () => {
  mouseShadow.classList.remove('active');
})

keyboard.addEventListener('click', () => {
  mouseShadow.classList.add('clicked');
  setTimeout(() => {
    mouseShadow.classList.remove('clicked');
  }, 100)
})