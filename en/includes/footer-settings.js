class footSettings extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="footer-settings">

  <div class="footer-size" style="height:58px;">
  
    <div class="footer-icon"><button type="button" class="footer-settings-icon" style="cursor:pointer" aria-label="Retour à la page d'accueil" title="Retour à la page d'accueil" onclick="location.href='index.html'" ><img src="../icons/home.svg" alt="Icône de la page d'accueil"></button></div>
  
    <!--
    <div style=""><button type="button" class="footer-settings-icon" style="cursor:pointer" onclick="openBookplate()" aria-label="Cliquez pour ouvrir la page de titre du livre"><img src="../svgs/my-book-header-logo-grey.svg" title="Page de titre du Tractatus Ayyew" alt="Mandala Tractatus Ayyew"></button></div>
    -->
    
    <div class="footer-icon"><button type="button" class="footer-settings-icon"><img src="../icons/buy.svg" style="cursor:pointer" onclick="openBuy()" alt="Icône d'achat" aria-label="Cliquez pour accéder à la page d'achat" title="Cliquez pour accéder à la page d'achat"></button></div>
  
    <div class="footer-icon"><button type="button" class="footer-settings-icon"><img src="../icons/search.svg?v=2" alt="Icône de paramètres" style="cursor:pointer" onclick="openSearch()" aria-label="Cliquez pour ajuster les paramètres de lecture du livre" title="Cliquez pour ajuster les paramètres de lecture du livre"></button></div>
  
    <div class="footer-icon"><button type="button" class="footer-settings-icon"><img src="../icons/share.svg" alt="Icône de partage" style="cursor:pointer" onclick="openShare()" aria-label="Cliquez pour copier le lien de l'Earthbook à partager" title="Cliquez pour copier le lien de l'Earthbook à partager"></button></div>
  
    <div class="footer-icon"><button type="button" class="footer-settings-icon"><img src="../icons/tour.svg" alt="Visite guidée" style="cursor:pointer" onclick="guidedTour()" aria-label="Cliquez pour une visite guidée rapide des fonctionnalités d'Earthbook" title="Cliquez pour une visite guidée rapide des fonctionnalités d'Earthbook"></button></div>
  
    <div class="footer-icon"><button type="button" class="footer-settings-icon"><img src="../svgs/to-the-top-arrow.svg" alt="Haut de la page" style="cursor:pointer" onclick="location.href='#top'" aria-label="Aller en haut de la page"></button></div>
  
    <div class="footer-icon"><button type="button" class="footer-settings-icon"><img src="../icons/booknotes.svg" alt="Icône de notes de livre" style="cursor:pointer" onclick="updateBNResetButton(),openBooknotes(), bookNotesCreator()" aria-label="Cliquez pour afficher vos notes de livre" title="Cliquez pour afficher vos notes de livre"></button></div>
  
   
    <div class="footer-icon" style="text-align: right;">
    <button type="button" class="footer-settings-icon"><img src="../icons/eco-green.svg" alt="Notre suivi, comptabilité et divulgation écologiques" title="Notre suivi, comptabilité et divulgation écologiques" style="cursor:pointer;" aria-label="Ouvrir la comptabilité écologique" onclick="openEco()"></button></div>
  
  </div>
  
  <div class="footer-size" style="height:30px;">
  
      <div><button type="button" class="footer-settings-icon" style="cursor:pointer; text-align:left; width:fit-content;flex-grow:1; padding-right:8px; padding-top: 10px;padding-bottom: 0px;" onclick="openEarthbook()" aria-label="Découvrez ce qu'est un Earthbook">Qu'est-ce qu'un Earthbook?</button>
      </div>
  
      <div class="github-source" style="margin-right: 0px;">La medium est le message.
      </div>
  
  </div>
</div>


    
    `;
}
}

customElements.define('footer-settings', footSettings);


