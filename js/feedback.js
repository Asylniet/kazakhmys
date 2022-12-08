window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            document.querySelector('.tab.active').classList.remove('active');
            tab.classList.add('active');
            const forTab = tab.getAttribute('for');
            const prevTab = document.querySelector('.tab-page.active');
            prevTab.classList.remove('active');
            document.getElementById(forTab).classList.add('active');
        });
    });
});