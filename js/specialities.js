const accordions = document.querySelectorAll(".accordion");
accordions.forEach((accordion) => {
    accordion.addEventListener('click', () => {
        const active = document.querySelector('.accordion.active');
        if (active && active !== accordion) {
            active.classList.remove('active');
            active.querySelector('.accordion-panel').style.maxHeight = null;
        }
        accordion.classList.toggle('active');
        const panel = accordion.querySelector('.accordion-panel');
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
});