class ChapFoot extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
  
     WHY NOT WORK?                                                           
      
      
      `;
  }
  }
  
  customElements.define('chapfoot', ChapFoot);
  
  