const selectables = document.querySelectorAll('.selectable');
const languageContainer = document.querySelector('.language-options');
const optionsContainer = document.querySelector('.options');
selectables.forEach((selectable) => {
  const selected = selectable.querySelector('.selected');
  selected.addEventListener('click', () => {
    if (selectable.classList.contains('open')) {
      selectable.classList.remove('open');
    } else {
      selectable.classList.add('open');
    }
  });
})

let languageOptions = optionsContainer.querySelectorAll(".language-option");
languageOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const language = option.textContent;
    languageContainer.setAttribute('selected', language);
    option.textContent = selected.querySelector('.language-option').textContent;
    selected.querySelector('.language-option').textContent = language;
    languageContainer.classList.remove('open');
  });
});