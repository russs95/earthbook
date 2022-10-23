class ScreenComponents extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            
  

  

    `;
}
}

customElements.define('screen-components', ScreenComponents);

