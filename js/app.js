function toggleSelectable(selectable) {
  if (selectable.classList.contains('open')) {
    selectable.classList.remove('open');
  } else {
    selectable.classList.add('open');
  }
}

function responsiveHeader() {
  const contact1 = document.querySelector('.contact1');
  const contact2 = document.querySelector('.contact2');
  const contact3 = document.querySelector('.contact3');
  const contact3Wrapper = document.querySelector('.contact3-wrapper');

  if (window.innerWidth <= 770) {
    [contact2, contact3Wrapper].forEach((container) => {
      const children = [].slice.call(container.children);
      children.forEach((child) => {
        contact1.appendChild(child);
      });
    })
  } else {
    const contact2Children = [].slice.call(contact1.children).slice(3);
    contact2Children.forEach((child) => {
      contact2.appendChild(child);
    });

    contact3Wrapper.appendChild(contact3);
  }

  const header = document.querySelector('header');
  const additionalLinksWrapper = document.querySelector('.additionalLinksWrapper');
  const headerBottom = document.querySelector('.header-bottom-wrapper');

  const languageTopHolder = document.querySelector('.language-top-holder');
  const languageMiddleHolder = document.querySelector('.language-middle-holder');
  const changeLanguage = document.querySelector('.language-options');

  const locationWrapper = document.querySelector('.locationWrapper');
  const location = document.querySelector('.locationLink');
  if (window.innerWidth <= 690) {
    const headerMiddle = document.querySelector('.header-middle');
    const additionalLinks = additionalLinksWrapper.querySelectorAll('.additionalLink');
    header.appendChild(headerMiddle);
    additionalLinks.forEach((link) => {
      link.classList.add('just-link');
      headerBottom.querySelector('.header-bottom').appendChild(link);
    });

    contact1.appendChild(location);

    languageTopHolder.appendChild(changeLanguage);
  } else {
    const additionalLinks = document.querySelectorAll('.additionalLink');
    additionalLinks.forEach((link) => {
      link.classList.remove('just-link');
      additionalLinksWrapper.appendChild(link);
    })
    header.appendChild(headerBottom);

    document.querySelector('header-component').classList.remove('open');
    document.querySelector('html').classList.remove('locked');

    locationWrapper.appendChild(location);

    languageMiddleHolder.appendChild(changeLanguage);
  }
}


window.addEventListener('DOMContentLoaded', () => {
  responsiveHeader();
  const selectables = document.querySelectorAll('.selectable');
  selectables.forEach((selectable) => {
    const selected = selectable.querySelector('.selected');
    if (window.matchMedia("(any-hover: none)").matches) {
      selected.addEventListener('click', () => {
        toggleSelectable(selectable);
      });
    } else {
      selected.addEventListener('mouseover', () => {
        selectable.classList.add('open');
      });

      selectable.addEventListener('mouseleave', () => {
        selectable.classList.remove('open');
      });
    }


    // Close selectable dropdown if clicked outside of selectable element
    document.addEventListener('click', function (event) {
      if (!selectable.contains(event.target)) {
        selectable.classList.remove('open');
      };
    });
  });

  const languageContainer = document.querySelector('.language-options');
  let languageOptions = document.querySelectorAll(".language-option");
  languageOptions.forEach((option) => {
    const selected = languageContainer.querySelector('.selected');
    option.addEventListener("click", () => {
      const language = option.textContent;
      languageContainer.setAttribute('selected', language);
      option.textContent = selected.querySelector('.language-option').textContent;
      selected.querySelector('.language-option').textContent = language;
      languageContainer.classList.remove('open');
    });
  });

  const header = document.querySelector('header-component');
  const hamburger = document.querySelector('.hamburger-wrapper');
  const changeLanguage = document.querySelector('.language-options');
  hamburger.addEventListener('click', () => {
    header.classList.toggle('open');
    document.querySelector('html').classList.toggle('locked');
    changeLanguage.classList.toggle('visible');
  });

  window.addEventListener('resize', () => {
    if (document.activeElement.tagName.toLocaleLowerCase() != 'input') {
      responsiveHeader();
    }
  });
});
