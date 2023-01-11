window.addEventListener('DOMContentLoaded', function () {
  const newsPerPage = 1;
  const news = document.querySelectorAll('.news-block');
  const pagination = document.querySelector('.pagination');
  const pages = Math.ceil(news.length / newsPerPage);

  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');

  function buildPagination() {
    if (pages <= 5) {
      next.classList.add('hidden');
    }
    for (let index = 2; index < pages; index++) {
      const button = document.createElement('button');
      button.innerText = index;
      button.setAttribute('index', index);
      pagination.appendChild(button);
      if (pages > 5) document.querySelector('.second_dot').classList.remove('hidden');
      if (index > 4 && index !== pages) {
        button.classList.add('hidden');
      }
    }
    document.querySelector('.last').setAttribute('index', pages);
    document.querySelector('.last').innerText = pages;
  }

  function reshapePagination(active) {
    document.querySelector('button.active').classList.remove('active');
    getByIndex(active).classList.add('active');
    active > 1 ? prev.classList.remove('hidden') : prev.classList.add('hidden');
    active == pages ? next.classList.add('hidden') : next.classList.remove('hidden');

    if (active > 2) {

      for (let index = 1; index < pages - 1; index++) {
        // console.log(index, active - 3, +active + 1);
        if (index >= +active - 2 && index <= +active + 1 || index == +active) {
          buttons[index].classList.remove('hidden');
          console.log(buttons[index].getAttribute('index'));
        } else {
          console.log(buttons[index].getAttribute('index'), 'hidden');
          buttons[index].classList.add('hidden');
        }
      }
    }
  }

  buildPagination();
  const buttons = document.querySelectorAll('button[index]');
  buttons.forEach((button) => {
    button.addEventListener('click', function () {
      reshapePagination(button.getAttribute('index'));
    });
  });
});

function getByIndex(index) {
  return document.querySelector(`button[index="${index}"]`);
}