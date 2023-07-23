class FooterComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="navbar-bottom-day">

        <div class="footer-left" style="cursor:pointer;" onclick="openBookplate()" aria-label="About this Earthbook">
             <div class="footer-icon-left">
             <img src="../svgs/tractatus-simple-mandala-grey.svg" width="40px" title="Tractatus Ayyew Bookplate" alt="Tractatus Ayyew Mandala">
            </div> <div class="footer-word">about</div>
        </div>



        <div class="footer-middle" style="cursor:pointer" onclick="openEarthbook()" aria-label="Learn what an EarthBook is">
            <div class="an-earthbook">an Earthbook</div>
            <div class="what-is">What is</div>
            <div class="question">?</div>
        </div>

    
        <div class="footer-right">
        
            <div class="footer-icon-right">
            <a href="#top"><img src="../svgs/to-the-top-arrow.svg" alt="Up arrow" width="35px" title="Back to the top of the page" aria-label="Click to go back to the top of the page"></div></a>
            <div class="footer-word">top</div>
        </div>
</div>

</div>
  
    
</div>

    `;
}
}

customElements.define('footer-component', FooterComponent);


