class FooterComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="navbar-bottom-day">

        <div class="footer-left" style="cursor:pointer;" onclick="openBookplate()">
             <div class="footer-icon-left">
             <img src="../svgs/tractatus-simple-mandala-grey.svg" width="40px" title="Tractatus Ayyew Bookplate">
            </div> <div class="footer-word">about</div>
        </div>



    <div class="footer-middle" style="cursor:pointer" onclick="openEarthbook()">
        <div class="an-earthbook">an Earthbook</div>
        <div class="what-is">What is</div>
        <div class="question">?</div>
    </div>

    
    <div class="footer-right">
       
        <div class="footer-icon-right">
        <a href="#top"><img src="../svgs/to-the-top-arrow.svg" width="35px" title="Back to the top of the page"></div></a>
        <div class="footer-word">top</div>
    </div>
</div>

</div>
    <div id="containerSepia"></div>
    <div id="containerContrast"></div>
    <div id="containerBrightness"></div>
    
</div>

    `;
}
}

customElements.define('footer-component', FooterComponent);