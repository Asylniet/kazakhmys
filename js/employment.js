window.addEventListener('DOMContentLoaded', function () {
    const imageWrapper = document.querySelector('.image-wrapper');
    const expand = document.querySelector('.expand');
    const close = document.querySelector('.close');
    const bg = document.querySelector('.background');

    expand.addEventListener('click', function () {
        imageWrapper.classList.add('popup');
        document.querySelector('html').classList.add('locked');
    });

    close.addEventListener('click', function () {
        imageWrapper.classList.remove('popup');
        document.querySelector('html').classList.remove('locked');
    });
    bg.addEventListener('click', function () {
        imageWrapper.classList.remove('popup');
        document.querySelector('html').classList.remove('locked');
    });
});