class FooterComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="navbar-bottom-day">

        <div class="footer-left" style="cursor:pointer;" onclick="openBookplate2()">
             <div class="footer-icon-left">
             <img src="../svgs/tractatus-simple-mandala.svg" width="40px">
            </div> <div class="footer-word">about</div>
        </div>



    <div class="footer-middle" style="cursor:pointer" onclick="openEarthbook()">
        <div class="an-earthbook">an Earthbook</div>
        <div class="what-is">What is</div>
        <div class="question">?</div>
    </div>

    
    <div class="footer-right">
       
        <div class="footer-icon-right">
        <a href="#top"><img src="../svgs/to-the-top-arrow.svg" width="35px"></div></a>
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