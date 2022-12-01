function toggleSelectable(selectable) {
  if (selectable.classList.contains('open')) {
    selectable.classList.remove('open');
  } else {
    selectable.classList.add('open');
  }
}

const selectables = document.querySelectorAll('.selectable');
const optionsContainer = document.querySelector('.options');
selectables.forEach((selectable) => {
  const selected = selectable.querySelector('.selected');
  selected.addEventListener('click', () => {
    toggleSelectable(selectable);
  });

  // Close selectable dropdown if clicked outside of selectable element
  document.addEventListener('click', function(event) {
    if(!selectable.contains(event.target)) {
      selectable.classList.remove('open');
    };
  });
});

const languageContainer = document.querySelector('.language-options');
let languageOptions = optionsContainer.querySelectorAll(".language-option");
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