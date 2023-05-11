class SearchCurtain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="right-search-overlay" class="search-overlay">

    <div id="right-close-button">
        <span style="cursor:pointer" onclick="closeSearch(), clearResults()"><img src="../svgs/right-x.svg" alt="Close page button"></span>
    </div>
      <div class="search-overlay-content" style="">
            
            <div>
                <h1 class="accessibility-plugin-ac">Earthbook Search</h1> 
                <p>Search all chapters, appendixes and the glossary of this Earthbook.</p>
            </div>
          
            <div class="search-box" style="padding-bottom:15%;">
      <div class="copy-section">
        <input id="search_input" type="text" placeholder="Enter search term..." aria-label="Enter keywords...">   
        <button class="btn" style="padding:22px 0px 22px 0px;" onclick="EarthbookSearch('glossary.json')" aria-label="Search Button"><i style="background-image: url(../icons/search-white.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 2px;"></i></button> 
      </div>  
      <div id="search_results"><h6>Glossarry keyword definitions are shown first</h6></div>
    </div>
    
          </div>
    </div>
    </div>  


    `;
}
}

customElements.define('search-curtain', SearchCurtain);


