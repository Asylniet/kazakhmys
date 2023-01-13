window.addEventListener('DOMContentLoaded', function () {
  const newsPerPage = 9;
  const newsWrapper = document.querySelector('.news-block-wrapper');
  const newsList = document.querySelectorAll('.news-block');
  const news = Array.from(newsList);
  for (let i = 1; i <= news.length; i += newsPerPage) {
    const chunk = news.slice(i - 1, i - 1 + newsPerPage);
    const page = document.createElement('div');
    page.classList.add('page');
    if (i === 1) page.classList.add('active');
    page.setAttribute('index', (i - 1) / newsPerPage + 1);
    chunk.forEach((el) => {
      page.appendChild(el);
    })
    newsWrapper.appendChild(page);
  }
  const pagination = document.querySelector('.pagination');
  const pages = Math.ceil(news.length / newsPerPage);

  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');

  const first = document.querySelector('.first');
  const last = document.querySelector('.last');
  const first_dot = document.querySelector('.first_dot');
  const second_dot = document.querySelector('.second_dot');

  function buildPagination() {
    if (pages > 1) {
      first.classList.remove('hidden');
      last.classList.remove('hidden');
      last.setAttribute('index', pages);
      last.innerText = pages;
    }
    if (pages <= 2) next.classList.add('hidden');
    for (let index = 2; index < pages; index++) {
      const button = document.createElement('button');
      button.innerText = index;
      button.setAttribute('index', index);
      pagination.appendChild(button);
      if (pages > 6) second_dot.classList.remove('hidden');
      if (index > 5 && index !== pages) {
        button.classList.add('hidden');
      }
    }
  }

  function reshapePagination(active) {
    document.querySelector('button.active').classList.remove('active');
    getByIndex(active).classList.add('active');

    document.querySelector('.page.active').classList.remove('active');
    document.querySelector(`.page[index="${active}"]`).classList.add('active');
    active > 1 && pages > 2 ? prev.classList.remove('hidden') : prev.classList.add('hidden');
    active == pages || pages < 3 ? next.classList.add('hidden') : next.classList.remove('hidden');

    active > 4 ? first_dot.classList.remove('hidden') : first_dot.classList.add('hidden');
    active >= pages - 2 || pages <= 6 ? second_dot.classList.add('hidden') : second_dot.classList.remove('hidden');
    for (let index = 1; index < pages - 1; index++) {
      if (index >= +active - 3 && index <= +active + 1 || index == +active) {
        buttons[index].classList.remove('hidden');
      } else {
        buttons[index].classList.add('hidden');
      }
    }
    if (active <= 4) {
      for (let index = 1; index <= 4; index++) {
        buttons[index].classList.remove('hidden');
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

  prev.addEventListener('click', function () {
    reshapePagination(+getActive() - 1);
  });
  next.addEventListener('click', function () {
    reshapePagination(+getActive() + 1);
  });
});

function getByIndex(index) {
  return document.querySelector(`button[index="${index}"]`);
}

function getActive() {
  return document.querySelector('button.active').getAttribute('index');
}