window.addEventListener('DOMContentLoaded', () => {
  AdaptiveHeadings();
});

window.addEventListener('resize', () => {
  AdaptiveHeadings();
})

const AdaptiveHeadings = () => {
  const links = ['news', 'insta'];
  links.forEach((link) => {
    const linkComponent = document.querySelector(`.${link}Link`);
    const heading = document.querySelector(`.${link}Heading`);
    const wrapper = document.querySelector(`.${link}Wrapper`);
    if (window.innerWidth < 530) {
      linkComponent.classList.add('mY20');
      wrapper.appendChild(linkComponent);
    } else {
      linkComponent.classList.remove('mY20');
      heading.appendChild(linkComponent);
    }
  })
}