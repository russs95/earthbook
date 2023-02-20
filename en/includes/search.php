 <div id="right-search-overlay" class="search-overlay">

    <div id="right-close-button">
        <span style="cursor:pointer" onclick="closeSearch()"><img src="../svgs/right-x.svg" alt="Close page button"></span>
    </div>
      <div class="search-overlay-content" >
            
            <div>
                <!--<h1>🔎</h1>-->
                <h1 class="accessibility-plugin-ac">Earthbook Search</h1> 
            </div>
          
            <div class="search-box" style="padding-bottom:15%;">
              <div class="copy-section">
              <label for="search_input">Search the chapters</label>
              <input placeholder="Enter search term" aria-label="Enter search term">
              <input id="search_input" type="text" placeholder="Search...">   
                
              <button class="btn" style="padding:22px 0px 22px 0px;" onclick="searchPosts(0)" aria-label="Search Button"><i style="background-image: url(../icons/search-white.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 2px;"></i></button> 
            </div>  
   
            <div id="search_results"></div>  
          </div>
  </div>
</div>  



