class SearchCurtain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div id="right-search-overlay" class="search-overlay">

      <div id="right-close-button">
        <span style="cursor:pointer" onclick="closeSearch(), clearResults()"><img src="../svgs/right-x.svg" alt="Bouton de fermeture de la page"></span>
      </div>
      
      <div class="search-overlay-content">
        <div>
          <h1>Recherche Earthbook</h1> 
          <p style="text-align:center">Recherchez tous les chapitres, les annexes et le glossaire de cet Earthbook.</p>
        </div>
        
        <div class="search-box" style="padding-bottom:15%;">
          <div class="copy-section">
            <input id="search_input" type="text" placeholder="Entrez un terme de recherche..." aria-label="Entrez des mots-clés...">   
            <button class="btn" style="padding:22px 0px 22px 0px;" onclick="EarthbookSearch(['glossary.json', 'chapters-index.json'])" aria-label="Bouton de recherche"><i style="background-image: url(../icons/search-white.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 2px;"></i></button> 
          </div>  
          <div id="search_results"><h6 style="color:grey;">Les définitions du glossaire sont affichées en premier</h6></div>
        </div>
      </div>
      
    </div>
    `;
  }
}

customElements.define('search-curtain', SearchCurtain);
