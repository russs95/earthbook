class FooterComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="navbar-bottom-day">
        <div class="footer-left" style="cursor:pointer;" onclick="openBookplate()">
        <div style="padding-right:5px"><img src="../svgs/tractatus-simple-mandala.svg" width="40px"></div>
        <div>about</div>
    </div>


    <div class="footer-middle" style="cursor:pointer" onclick="openEarthbook()">
        <div class="an-earthbook">an Earthbook</div>
        <div class="what-is"><i>What is</i></div>
        <div class="question">?</div>
    </div>

    <div class="footer-right">
        <div style="padding-left:5px"><a href="#top"><img src="../svgs/to-the-top-arrow.svg" width="30px"></a></div>
        <div>top</div>
    </div>
</div>

</div>
    <div id="containerSepia"></div>
    <div id="containerBrightness"></div>
    <div id="containerContrast"></div>
</div>

    `;
}
}

customElements.define('footer-component', FooterComponent);