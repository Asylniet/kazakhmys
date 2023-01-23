window.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('link-component[popup-id]');
    cards.forEach((card) => {
        card.addEventListener('click', function () {
            const id = card.getAttribute('popup-id');
            document.querySelector(`.popup[id="${id}"]`).classList.add('active');
            document.querySelector('html').classList.add('locked');
        });
    });


    const popups = document.querySelectorAll('.popup');
    popups.forEach((popup) => {
        function close() {
            popup.classList.remove('active');
            document.querySelector('html').classList.remove('locked');
        }
        popup.querySelector('.close').addEventListener('click', function () {
            close();
        });

        popup.querySelector('.background').addEventListener('click', function () {
            close();
        });

        if (popup.classList.contains('tabs')) {
            function resizeBlock() {
                const active = popup.querySelector('.tab.active');
                popup.querySelector('.block').style.height = `${active.clientHeight}px`;
            }

            function moveTabs(offset) {
                const tabs = popup.querySelectorAll('.tab');
                tabs.forEach((tab, index) => {
                    tab.style.left = `calc(${(index - offset) * 100}% + 3.125rem * ${index + 1 - offset})`;
                });
            }

            resizeBlock();
            moveTabs(0);
            const next = popup.querySelector('.next');
            const prev = popup.querySelector('.prev');

            next.addEventListener('click', function () {
                popup.querySelector('.block').scroll(0, 0);
                const active = popup.querySelector('.tab.active');
                active.classList.remove('active');
                popup.querySelector(`.tab[id="${+active.getAttribute('id') + 1}"]`).classList.add('active');
                resizeBlock();
                moveTabs(1);

                prev.classList.add('active');
            });

            prev.addEventListener('click', function () {
                popup.querySelector('.block').scroll(0, 0);
                const active = popup.querySelector('.tab.active');
                active.classList.remove('active');
                popup.querySelector(`.tab[id="${+active.getAttribute('id') - 1}"]`).classList.add('active');
                resizeBlock();
                moveTabs(0);

                prev.classList.remove('active');
            });
        }

    });
});