class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <footer class="container">
        <div class="flex spb ais g40">
            <div class="logo">
                <img src="/assests/images/logo-big.png" alt="logo">
            </div>
            <div class="flex column start info-wrapper">
                <div class="flex spb ais footer-contacts wrap">
                    <div class="contact">
                        <img src="/assests/icons/phone-yellow.svg" alt="phone">
                        <span>Приемная:</span>
                        <a href="tel:87103668407" class="underline-hover">+7 (710) 366-84-07</a>
                    </div>
                    <div class="contact">
                        <img src="/assests/icons/phone-yellow.svg" alt="phone">
                        <span>Телефон доверия:</span>
                        <a href="tel:87103675003" class="underline-hover">+7 (710) 367-50-03</a>
                    </div>
                    <div class="contact">
                        <img src="/assests/icons/email-yellow.svg" alt="mail" class="mailIcon">
                        <a href="mailto:ptk_balhash@mail.ru" class="underline-hover inline mailLink">ptk_balhash@mail.ru</a>
                    </div>
                    <div class="contact flex start">
                        <img src="/assests/icons/location-yellow.svg" alt="Адрес">
                        <a href="https://yandex.kz/maps/org/6322348238/?ll=74.981621%2C46.838819&utm_source=share&z=18" target="_blank" rel="noreferrer-noopener" class="underline-hover inline">РК, Карагандинская область, <br> г. Балхаш, ул. Абая, 36</a>
                    </div>
                </div>
                <div class="footer-nav wrap flex spb ais">
                    <div class="flex column start">
                        <div class="footer-title">
                            Полезные ресурсы
                        </div>
                        <ul>
                            <li>
                                <a href="https://egov.kz/cms/ru" target="_blank" rel="noopener noreferrer">Электронное правительство Республики казахстан</a>
                            </li>
                            <li>
                                <a href="http://adilet-group.kz/index.html" target="_blank" rel="noopener noreferrer">Юридические услуги «Әділет»</a>
                            </li>
                            <li>
                                <a href="http://178.89.241.110/library" target="_blank" rel="noopener noreferrer">Образовательная платформа для студентов</a>
                            </li>
                            <li>
                                <a href="https://kasipkor.kz/?lang=ru" target="_blank" rel="noopener noreferrer">НАО «Талап»</a>
                            </li>
                        </ul>
                    </div>
                    <div class="flex column start">
                        <div class="footer-title">
                            Навигация
                        </div>
                        <div class="flex wrap start nav-lists">
                            <ul>
                                <li>
                                    <a href="/pages/about/index.html">О колледже</a>
                                </li>
                                <li>
                                    <a href="/pages/enrollee/index.html">Абитуриенту</a>
                                </li>
                                <li>
                                    <a href="/pages/education/index.html">Обучение</a>
                                </li>
                                <li>
                                    <a href="">Педогогический состав</a>
                                </li>
                                <li>
                                    <a href="/pages/projects/index.html">Проекты</a>
                                </li>
                                <li>
                                    <a href="">Подразделения</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="/pages/student/index.html">Студенту</a>
                                </li>
                                <li>
                                    <a href="/pages/employment/index.html">Трудоустройство</a>
                                </li>
                                <li>
                                    <a href="">Навигатор профессий</a>
                                </li>
                                <li>
                                    <a href="">Партнеры</a>
                                </li>
                                <li>
                                    <a href="/pages/news/index.html">Новости</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="socialMedia">
                    <span>Мы в соц.сетях:</span>
                    <div class="flex">
                        <a href="https://t.me/call_ctnterPTK" target="_blank" rel="noopener noreferrer">
                            <img src="/assests/images/social-media/telegram.png" alt="telegram">
                        </a>
                        <a href="https://instagram.com/ptk.balkhash?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer">
                            <img src="/assests/images/social-media/instagram.png" alt="Instagram">
                        </a>
                        <a href="https://www.facebook.com/groups/1737489559799657" target="_blank" rel="noopener noreferrer">
                            <img src="/assests/images/social-media/facebook.png" alt="facebook">
                        </a>
                        <a href="https://vk.com/ptk_kazakhmys" target="_blank" rel="noopener noreferrer">
                            <img src="/assests/images/social-media/vkontakte.png" alt="VK">
                        </a>
                        <a href="https://pkkk.mycollege.kz/ru/main/index" target="_blank" rel="noopener noreferrer">
                            <img src="/assests/images/social-media/mycollege.png" alt="mycollege">
                        </a>
                        <a href="https://www.youtube.com/channel/UCIv-npQZxcmlTQzhGLv2k0w/featured" target="_blank" rel="noopener noreferrer">
                            <img src="/assests/images/social-media/youtube.png" alt="youtube">
                        </a>
                    </div>
                </div>
                <div class="terms">
                    2022 ЧУ «Политехнический колледж корпорации «Казахмыс»
                </div>
            </div>
        </div>
        <img src="/assests/images/footer-building.png" alt="Здание колледжа" class="footer-building">
    </footer>
    `;
    }
}

customElements.define("footer-component", Footer);