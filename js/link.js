class Link extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const classes = this.className;
    const text = this.getAttribute('text');
    const href = this.getAttribute('href');
    const blank = this.classList.contains('blank');
    let iconColor = '000';
    if (classes.includes('primary')) {
      iconColor = '385CAD';
    } else if (classes.includes('primary2')) {
      iconColor = '00B2E3';
    } else if (classes.includes('yellow')) {
      iconColor = 'FFC600';
    }
    this.innerHTML = `
    <a ${href ? `href="${href}"` : ''} ${blank ? 'target="blank"' : ''} class="flex link ${classes}">
        <span>${text}</span>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.50044 1.2875C9.50044 1.08859 9.42143 0.897822 9.28077 0.75717C9.14012 0.616518 8.94936 0.5375 8.75044 0.5375L2.75044 0.5C2.55153 0.5 2.36076 0.579018 2.22011 0.71967C2.07946 0.860322 2.00044 1.05109 2.00044 1.25C2.00044 1.44891 2.07946 1.63968 2.22011 1.78033C2.36076 1.92098 2.55153 2 2.75044 2H6.92044L0.717942 8.2175C0.647646 8.28722 0.591851 8.37017 0.553774 8.46157C0.515698 8.55296 0.496094 8.65099 0.496094 8.75C0.496094 8.84901 0.515698 8.94704 0.553774 9.03843C0.591851 9.12983 0.647646 9.21278 0.717942 9.2825C0.787665 9.3528 0.870615 9.40859 0.96201 9.44667C1.0534 9.48475 1.15143 9.50435 1.25044 9.50435C1.34945 9.50435 1.44748 9.48475 1.53888 9.44667C1.63027 9.40859 1.71322 9.3528 1.78294 9.2825L8.00044 3.065V7.25C8.00044 7.44891 8.07946 7.63968 8.22011 7.78033C8.36076 7.92098 8.55153 8 8.75044 8C8.94936 8 9.14012 7.92098 9.28077 7.78033C9.42143 7.63968 9.50044 7.44891 9.50044 7.25V1.2875Z" fill="#${iconColor}"/>
        </svg>
    </a>
    `;
  }
}

customElements.define("link-component", Link);