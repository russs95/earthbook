class EcoCurtain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
 

    <div id="eco-curtain2" class="eco-overlay">
    <div class="overlay-content-eco">         
         <!-- <div>
          <img src="../icons/eco-green.svg"  width="170px" height="170px" title="Ecological Accounting Kept" alt="Ecological Accounting Kept">
        </div>  -->
          
            <div class="eco-header">The Earthbook format is hand-coded from the ground up to be Green.</div>
  
            <div class="eco-text">
          In an Earthbook's writing & publishing, its carbon, plastic and biodiversity impacts are tracked, accounted and disclosed.  See this Earthbook's full <a href="https://files.earthen.io/s/ioobYWRRKGEpPp4" target="_blank">Regenerativity Report.</a>
        </div>
  
           
  <!--
  <a href="https://files.earthen.io/s/ioobYWRRKGEpPp4" target="_blank">
    <div><img src="../banners/disclose-light-350px.png" width="300px"></div></a>-->
  
    <a href="https://files.earthen.io/s/ioobYWRRKGEpPp4" target="_blank">
      <div><img src="../banners/forearth-dark-350px.png" width="300px"></div></a>
  
       <div id="wcb" class="carbonbadge wcb-d"></div>
  <script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js" preload></script>
           
        <br><br>
        <div class="eco-medium">The Medium is the Message.</div>
        <span style="cursor:pointer" onclick="closeEco()">
        <div>
        <button type="button" class="bottom-close-button" style="cursor:pointer" onclick="closeBuy()" aria-label="Click to close this pop-up page">
          <img src="../svgs/bottom-x.svg" alt="Close page button">
        </button>
      </div>
        </span>
    </div>
  </div>
  

    `;
}
}

customElements.define('eco-curtain', EcoCurtain);

/*
<div>

           

<a href="about"><img src="https://ecobricks.org/banners/forearth-dark-350px.png" width="325px" height="" alt="Learn more about our Earth Enterprise structure" title="Learn more about our Earth Enterprise structure" loading="lazy"></a>
<br>
</div>

<div>
    <a href="https://www.gobrik.com/#my-catalyst/enterprise-disclosure/5b8c2b0922ddfb2591bf67be/" target="_blank"><img src="https://ecobricks.org/banners/762-disclose-light-350px.png" width="325px" height="" alt="Proudly Net-Green: We track, disclose and accelerate our plastic transition. View our 2022 Report." title="Click through to see a our 2022 Plastic Transition Report" loading="lazy"></a>
</div>
</div>-->*/