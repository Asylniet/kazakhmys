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
  if (window.innerWidth <= 690) {
    const headerMiddle = document.querySelector('.header-middle');
    header.appendChild(headerMiddle);
  } else {
    const headerBottom = document.querySelector('.header-bottom-wrapper');
    header.appendChild(headerBottom);

    document.querySelector('header-component').classList.remove('open');
    document.querySelector('html').classList.remove('locked');
  }
}


window.addEventListener('DOMContentLoaded', () => {
  responsiveHeader();
  const selectables = document.querySelectorAll('.selectable');
  selectables.forEach((selectable) => {
    const selected = selectable.querySelector('.selected');
    selected.addEventListener('click', () => {
      toggleSelectable(selectable);
    });

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
  hamburger.addEventListener('click', () => {
    header.classList.toggle('open');
    document.querySelector('html').classList.toggle('locked');
  });

  window.addEventListener('resize', () => {
    if (document.activeElement.tagName.toLocaleLowerCase() != 'input') {
      responsiveHeader();
    }
  })

});
