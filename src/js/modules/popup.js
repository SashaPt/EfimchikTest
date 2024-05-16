export const controlScroll = (target) => {
  const page = document.querySelector('html');
  if (target.classList.contains('visible')) {
    page.classList.add('no-scroll');
  } else {
    page.classList.remove('no-scroll');
  }
};

export const popup = (element, btns) => {
  if (element && btns.length) {
    btns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        element.classList.toggle('visible');
        controlScroll(element);
      });
    });
  }
};
