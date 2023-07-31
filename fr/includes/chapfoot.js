class chapfoot extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
  
      no content
                                                                   
      
      
      `;
  }
  }
  
  customElements.define('chapfoot', chapfoot);
  
  