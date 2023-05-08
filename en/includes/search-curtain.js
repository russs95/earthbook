class SearchCurtain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="right-search-overlay" class="search-overlay">

    <div id="right-close-button">
        <span style="cursor:pointer" onclick="closeSearch()"><img src="../svgs/right-x.svg" alt="Close page button"></span>
    </div>
      <div class="search-overlay-content" >
            
            <div>
                <!--<h1>🔎</h1>-->
                <h1 class="accessibility-plugin-ac">Earthbook Search</h1> 
                <p>Search the Tracatus Ayyew.</p>
            </div>
          
            <div class="search-box" style="padding-bottom:15%;">
              <div class="copy-section">
          
            
              <input id="search_input" type="text" placeholder="Enter search term..." aria-label="Enter search term">   
                
              <button class="btn" style="padding:22px 0px 22px 0px;" onclick="searchPosts(0)" aria-label="Search Button"><i style="background-image: url(../icons/search-white.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 2px;"></i></button> 
            </div>  
   
            <div id="search_results"></div>  
          </div>
  </div>
</div>  


    `;
}
}

customElements.define('search-curtain', SearchCurtain);


 
function searchPosts( loadedResults ){  
       
    var query = document.getElementById( "search_input" ).value;  
      
    var resultsContainer = document.getElementById( "search_results" );  
      
    // clear results container if no previous results have been loaded  
    if( loadedResults === null ){  
     resultsContainer.innerHTML = "";  
    }  
      
    // create XMLHttpRequest object  
    var xmlhttp = new XMLHttpRequest();  
      
    // create function that is called when request is completed  
    xmlhttp.onreadystatechange = function() {  
        if ( xmlhttp.readyState === 4 && xmlhttp.status === 200 ) {  
            // fetch response text   
            var response=xmlhttp.responseText;  
            console.log(response);
            var outputPosts;   
               
            // parse response if it is valid JSON  
            try{  
                outputPosts = JSON.parse( response );  
            }  
            catch( e ){  
                return;  
            }  
              
               // iterate over results  f
               for( var i = 0; i < outputPosts.length; i++ ){  
                // append result to result container, link to url of post  
                resultsContainer.innerHTML += "<div class=\"tc-item\"><div id='result_" + i + "' style=\"display:flex; text-align:left; padding: 23px;\"><div class=\"chapter_pic\" style=\"width=100px; margin-right:10px;\"><img src=\"" + outputPosts[ i ].image_url + "\" width=\"100px\" height=\"100px\"></div><div class=\"chapter-name-search\"><b style=\"font-size:larger;\"><a href='" + outputPosts[ i ].url + "'>" + outputPosts[ i ].title + "</b><br><span style=\"font-size:small, color:grey;\">" + outputPosts[ i ].chapter + "  |  " + outputPosts[ i ].book + "  |  " + outputPosts[ i ].words + " words  |  " + outputPosts[ i ].language + "<br><span style=\"font-size:medium;font-family:'CooperLt',serif;\">" + outputPosts[ i ].chap_description + "</span><br><span style=\"font-size:smaller;color:grey;\">" + outputPosts[ i ].url + "</span></a></div>";  
            }  


            
            // add button to load more results starting from the last loaded result (remove any existing button first if one exists)  
            try{  
                document.getElementById( "load_button" ).remove();  
            }  
            catch( e ){  
                return;  
            }  
            finally{  
                resultsContainer.innerHTML += "<br><button id='load_button' onclick='searchPosts( " + ( loadedResults + outputPosts.length ) + " )'>➕ Load more</button>";  
            }  
        }  
    };  
      
    // send request to fetch searchDB.php  
    xmlhttp.open( "GET", "../searchDB.php?search=" + query + "&loaded=" + loadedResults, true );  
    xmlhttp.send();  
}

