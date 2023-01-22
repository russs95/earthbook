

<!--
class SearchCurtain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `-->

    <div id="right-search-overlay" class="share-overlay">

    <div id="right-close-button">
        <span style="cursor:pointer" onclick="closeSearch()"><img src="../svgs/right-x.svg" alt="Close page button"></span>
    </div>
    
      <div class="search-overlay-content">
            
            <div>
                <h1 class="accessibility-plugin-ac">Search the book</h1> 
                <!--<h3>Earthbooks are designed to enable you to easily share chapters.  Copy and share the link to this chapter...</h3>-->
            </div>
            
            <div class="search-box">
              
              <input id="search_input" type="text" placeholder="Search...">   
<button onclick="searchPosts(0)">Search</button>   
   
<div id="search results"></div>  
              
        
              
              <?php   
   
// search query   
$search = $_GET[ "search" ];   
   
// number of previously loaded results   
$offset = $_GET[ "loaded" ];   
   
// declare database credentials   
$host = "localhost";   
$user = "ecobricks_earthbook";   
$password = "ayyew";   
$dbName = "ecobricks_tractatus";   
   
// connect to database   
$con = new mysqli( $localhost, $ecobricks_earthbook, $ayyew, $ecobricks_tractatus );   
   
// query the database, limiting results to 10 at a time starting from last loaded result   
$sql = 'SELECT * FROM post WHERE MATCH( title, description, keywords ) AGAINST( "' . $search . '" ) LIMIT ' . $offset . ', 10;';   
$result = $con->query( $sql );   
   
// declare array variable to store results   
$output = array();   
   
if( $result->num_rows > 0 ) {   
    while( $row = $result->fetch_assoc() ){   
        // add row to output array in the form of an associative array   
        $output[] = array( "title" => $row[ "title" ], "description" => $row[ "description" ], "url" => $row[ "url" ] );   
    }   
}   
$con->close();   
   
// convert to JSON and output   
echo( json_encode( $output ) );   
   
?>
      </div>

      <!--<div>
        <p>The content of an Earthbook is under a Creative-Commons ND-SA-AT 4.0 license which means you can freely share the links to this page, quote passages, download and share the PDF-- just be sure to attribute to this Earthbook and share in the way.</p>
      </div>-->
        <div><img src="../icons/cc-by-sa.svg" alt="Creative Commons CC-BY-SA icon" style="height: 35px"></div>
  </div>
</div>  
    `;
}
}


<script>
  function searchPosts( loadedResults ){  
      
    var query = document.getElementById( "search_input" ).value;  
      
    var resultsContainer = document.getElementById( "search_results" );  
      
    // clear results container if no previous results have been loaded  
    if( loadedResults === 0 ){  
        resultsContainer.innerHTML = "";  
    }  
      
    // create XMLHttpRequest object  
    var xmlhttp = new XMLHttpRequest();  
      
    // create function that is called when request is completed  
    xmlhttp.onreadystatechange = function() {  
        if ( xmlhttp.readyState === 4 && xmlhttp.status === 200 ) {  
            // fetch response text   
            var response=xmlhttp.responseText;  
            var outputPosts;   
               
            // parse response if it is valid JSON  
            try{  
                outputPosts = JSON.parse( response );  
            }  
            catch( e ){  
                return;  
            }  
              
            // iterate over results  
            for( var i = 0; i < outputPosts.length; i++ ){  
                // append result to result container, link to url of post  
                resultsContainer.innerHTML += "<div id='result_" + i + "'><a href='http://" + outputPosts[ i ].url + "'><h3>" + outputPosts[ i ].title + "</h3>" + outputPosts[ i ].description + "</a><div>";  
            }  
            // add button to load more results starting from the last loaded result (remove any existing button first if one exists)  
            try{  
                document.getElementById( "load_button" ).remove();  
            }  
            catch( e ){  
                return;  
            }  
            finally{  
                resultsContainer.innerHTML += "<br><button id='load_button' onclick='searchPosts( " + ( loadedResults + outputPosts.length ) + " )'>Load more</button>";  
            }  
        }  
    };  
      
    // send request to fetch searchDB.php  
    xmlhttp.open( "GET", "searchDB.php?search=" + query + "&loaded=" + loadedResults, true );  
    xmlhttp.send();  
}
  
</script>

