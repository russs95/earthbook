class EcoCurtain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
 

    <div id="eco-curtain2" class="eco-overlay">
    <div class="overlay-content-eco">         
          
      <div class="eco-header">The Earthbook's format is hand-coded from the ground up to be green.</div>
  
      <div class="eco-text">
      In an Earthbook's writing & publishing, its carbon, plastic and biodiversity impacts are tracked, accounted and disclosed.  See this Earthbook's full <a href="https://files.earthen.io/s/ioobYWRRKGEpPp4" target="_blank" aria-label="The Regen Report for our book">Regenerativity Report.</a>
      </div>
  
      <a href="https://files.earthen.io/s/ioobYWRRKGEpPp4" target="_blank" aria-label="The Regen Report for our book">
      <div><img src="../banners/forearth-dark-350px.png" alt="Banner declaring our For-Earth intention" style="width:300px;"></div></a>
  
       <div id="wcb" class="carbonbadge wcb-d"></div>
  
      <div class="eco-medium">The medium is the message.</div>
  
      
              <button type="button" class="bottom-close-button" style="cursor:pointer" onclick="closeBuy()" aria-label="Click to close this pop-up page">
                <img src="../svgs/bottom-x.svg" alt="Close page button">
              </button>
            </div>
    
  </div>
  

    `;
}
}

customElements.define('eco-curtain', EcoCurtain);

