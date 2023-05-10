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
      <div class="search-overlay-content" style=" transition: height 0.5s ease-in-out;">
            
            <div>
                <h1 class="accessibility-plugin-ac">Earthbook Search</h1> 
                <p>Search all chapters and appendixes...</p>
            </div>
          
            <div class="search-box" style="padding-bottom:15%;">
      <div class="copy-section">
        <input id="search_input" type="text" placeholder="Enter search term..." aria-label="Enter keywords...">   
        <button class="btn" style="padding:22px 0px 22px 0px;" onclick="EarthbookSearch()" aria-label="Search Button"><i style="background-image: url(../icons/search-white.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 2px;"></i></button> 
      </div>  
      <div id="search_results"></div>
    </div>
    
          </div>
    </div>
    </div>  


    `;
}
}

customElements.define('search-curtain', SearchCurtain);


