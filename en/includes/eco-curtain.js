class EcoCurtain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
  <div id="eco-curtain" class="eco-overlay">

      <div class="overlay-content-eco">         
            <div>
                <img src="../icons/eco.svg"  width="170px" height="170px" title="Ecological Accounting Kept" alt="Ecological Accounting Kept">
            </div>
            
                <h1>Earthbooks are Green.</h1>
                <h3>An Earthbook is designed from the ground up to track, disclose and account for its net-green impact.</h3>

            <div class="eco-text">
                Throughout the enterprise of writing and publishing an Earthbook impact, the carbon, plastic and biodiversity impacts were tracked, accounted and annually disclosed.  See the full <a href="https://files.earthen.io/s/ioobYWRRKGEpPp4" target="_blank">Regenerativity Report.</a>
            </div>

            <div>
                <a href="about"><img src="https://ecobricks.org/banners/forearth-dark-350px.png" width="325px" height="" alt="Learn more about our Earth Enterprise structure" title="Learn more about our Earth Enterprise structure" loading="lazy"></a>
                <br>
                </div>

                <div>
                    <a href="https://www.gobrik.com/#my-catalyst/enterprise-disclosure/5b8c2b0922ddfb2591bf67be/" target="_blank"><img src="https://ecobricks.org/banners/762-disclose-light-350px.png" width="325px" height="" alt="Proudly Net-Green: We track, disclose and accelerate our plastic transition. View our 2022 Report." title="Click through to see a our 2022 Plastic Transition Report" loading="lazy"></a>
                </div>
            </div>

            <div><h2><i>The Medium is the Message.</i></h2></div>

            <div id="wcb" class="carbonbadge wcb-d">Test badge</div>
	      
            <span style="cursor:pointer" onclick="closeEco()">
             <div id="bottom-close-button">
                 <img src="../svgs/bottom-x.svg">
             </div></span>
            
    </div>
</div>

    `;
}
}

customElements.define('eco-curtain', EcoCurtain);

