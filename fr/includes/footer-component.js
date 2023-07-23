class FooterComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div id="navbar-bottom-day">

    <div class="footer-left" style="cursor:pointer;" onclick="openBookplate()" aria-label="À propos de cet Earthbook">
        <div class="footer-icon-left">
            <img src="../svgs/tractatus-simple-mandala-grey.svg" width="40px" title="Plaque du Livre Tractatus Ayyew" alt="Mandala Tractatus Ayyew">
        </div>
        <div class="footer-word">à propos</div>
    </div>

    <div class="footer-middle" style="cursor:pointer" onclick="openEarthbook()" aria-label="Découvrez ce qu'est un EarthBook">
        <div class="an-earthbook">un Earthbook</div>
        <div class="what-is">Qu'est-ce que c'est</div>
        <div class="question">?</div>
    </div>

    <div class="footer-right">
        <div class="footer-icon-right">
            <a href="#top">
                <img src="../svgs/to-the-top-arrow.svg" alt="Flèche vers le haut" width="35px" title="Revenir en haut de la page" aria-label="Cliquez pour revenir en haut de la page">
            </a>
        </div>
        <div class="footer-word">haut</div>
    </div>
</div>
</div>
</div>


    `;
}
}

customElements.define('footer-component', FooterComponent);


