<!DOCTYPE html>

<!--EARTHBOOK - An open source, Earth & Human Friendly Book format
Read the book.  Improve, translate or comment on the content.  Or fork the code and publish your own.  

Chapter Template Version 1.1
Created by Russell Maier for the Tractatus Ayyew: Earthen Ethics.

License: GNU General Public License v2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html
All files, unless otherwise stated, are released under the GNU General Public
License version 2.0 (https://www.gnu.org/licenses/gpl-2.0.html)
See full project repository at: https://github.com/russs95/earthbook
*/
-->


<!-- this grabs the language identifier for the page so that it can used in the meta and canonical url variables.  It also grabs the page name.  manifest="../offline.appcache-->

<?php require_once ("lang.php");

echo <<<_END
<html lang="$lang">
_END;?>

<!-- this sets PHP variables for the pages that will be used later on-->

<?php 
$parts = explode ("/", $_SERVER['SCRIPT_NAME']);
$name = $parts [count($parts)-1];
if (strcmp($name, "index.php") == 0)
$name = "";
$page_number = "106";
$page_title = "Page not found | 404 Error  | Earthbook";?>

<head>

<?php require_once ("../header.php");?>


<!--META TAGS
Must be updated for each page-->

<meta property="article:modified_time" content="2023-02-28T09:10:13+00:00">
<meta name="keywords" content="page not found, 404 error, error, search again"> 
<meta name="description" content="Sorry we couldn't find a page at this URL in this Earthbook">
<meta property="og:description"   content="Sorry we couldn't find a page at this URL in this Earthbook"/>


<style>
  

@media screen and (max-width: 699px) {
    .ct-chapter-quote {
      width: 87%;
      font-size: 1.4em;
    }
    .ct-quote-source {
      width: 80%;
      font-size: 0.8em;
    }
  }

  @media screen and (min-width: 700px) and (max-width: 1324px) {
    .ct-chapter-quote {
      width: 70%;
      font-size: 1.8em;
    }
    .ct-quote-source {
      width: 70%;
      font-size: 1em;
    }
  }
    
  @media screen and (min-width: 1325px) {
    .ct-chapter-quote {
    width: 50%;
    font-size: 2em;
    text-shadow: 0px 0px 12px var(--slider);
    }
    .ct-quote-source {
      width: 50%;
      font-size: 1em;
    }
  }

  #ct-chapter-title {
    font-size: 10vmin;
      letter-spacing: 2px;
    }


  .bullet {
    width:22px;
    height:22px;
    display: inline-block;
    padding-right: 6px;
    margin-bottom: -3px;
  }

</style>

</head>

<!--MAIN HTML Begins-->

<BODY class="accessibility-plugin-ac" style="max-width:100%; overflow-x:hidden;">
<div id="underlayer">

  <a id="top"></a>

  <!--HEADER NAVBAR-->
  <header-component></header-component>

  <div id="ct-chapter-top">
  <button type=button id="ct-tc-menu" onclick="openContents()" aria-label="Open Table of Contents"></button>
  <div class="ct-holder" style="cursor:pointer;" onclick="openContents()">
        <div id="ct-chapter-title">Page not found</div>   
        <div id="ct-book-title">404 Error</div>
       <div id="ct-chap-location">Tractatus Ayyew | An Earthen Ethics</div>
        <div id="ct-word-count"><i>Earthbook</i></div>
      </div>
  </div>

  <?php require_once ("includes/eco-curtain.php");?>


<div id="ct-chapt-graphic" class="background-000">
<div class="ct-chapter-quote"><i>
The requested page (<!--#echo var="REQUEST_URI" -->) couldn't be matched with any other in the EarthBook.  Check the URL for errors or mispellings.
</i>
</div>
</div>

<div id="up-arrow"></div>
<div id="ct-main">

  <div>
               
    <h3>You can try searching the EarthBook to find what you're looking for...</h3> 
  </div>
          
  <div class="search-box" style="padding-bottom:15%;">
              <div class="copy-section">
                <input id="search_input" type="text" placeholder="Enter search term..." aria-label="Enter keywords...">   
                <button class="btn" style="padding:22px 0px 22px 0px;" onclick="EarthbookSearch(['glossary.json', 'chapters-index.json'])" aria-label="Search Button"><i style="background-image: url(../icons/search-white.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 2px;"></i></button> 
              </div>  
              <div id="search_results"></div>
            </div>

      <br><br><br><br><div id="chap-notice" style="display:none;"></div>
     
<div class="ct-quote-source" style="width:100% !important;">
    Book Two and Three of the <i>Tractatus Ayyew</i> is not yet published. Subscribe to Earthen to be notified of new chapter releases.

    <br><br></div>
  <div style="text-align: center;">
    <?php require_once ("../manage.php");?>
</div>

          
  </div><!--Closes main content block-->

  <!--Footer Next Chapter Section: Requires customization-->
  <div id="footer-chapter" style="margin-bottom: 0px;">

    <div class="footer-size">
    
      <div class="footer-left">

        <div id="footer-icon-left" style="cursor:pointer;" onclick="openFooter2()"></div>
    
     
        <div class="next-section">
            <div class="next-sec">Go to:</div>
            <div class="sec-name"><i>Earthbook Dashboard</i></div>
        </div>

      </div>
    

      <div class="footer-right">
    
        <a href="index.php"><div class="next-button">Home ➔</div></a>

      </div>
    </div>
  </div>

  <?php require_once ("includes/chap-footer.php");?>



</body>

<script>


function EarthbookSearch(jsonFiles) {
  // Get the search query from the input field
  var query = document.getElementById("search_input").value.toLowerCase();
  var overlayContent = document.querySelector('.search-overlay-content');
  overlayContent.style.height = 'fit-content';
  overlayContent.style.marginTop = '8%';


  // Load the JSON files
  var posts = [];
  var numFilesLoaded = 0;
  for (var i = 0; i < jsonFiles.length; i++) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // Parse the JSON data
        var data = JSON.parse(this.responseText);
        posts = posts.concat(data);

        // Increment the number of files that have been loaded
        numFilesLoaded++;

        // If all files have been loaded, filter the posts
        if (numFilesLoaded == jsonFiles.length) {
          // Filter the posts that match the search query
          var outputPosts = [];
          for (var j = 0; j < posts.length; j++) {
            var post = posts[j];
            if ((post.keywords && post.keywords.toLowerCase().includes(query)) || (post.chap_description && post.chap_description.toLowerCase().includes(query))) {
              outputPosts.push(post);
            }
          }
          console.log(outputPosts.length);

          console.log(outputPosts);


          // Get the container where the results will be displayed
          var resultsContainer = document.getElementById("search_results");

          // Clear the previous search results
          resultsContainer.innerHTML = "";

          // If no results are found, display a message
          if (outputPosts.length == 0) {
            resultsContainer.innerHTML = "<p>Sorry, no results were found for \"" + query + "\".</p>";
          } else {
            // Iterate over the results and append them to the container
            for (var k = 0; k < outputPosts.length; k++) {
              resultsContainer.innerHTML += "<div class=\"tc-item\"><div id='result_" + k + "' style=\"display:flex; text-align:left; padding: 20px;\"><div class=\"chapter_pic\" style=\"width=100px; margin-right:10px;display:block;\"><img src=\"" + outputPosts[k].image_url + "\" width=\"100px\" height=\"100px\"></div><div class=\"chapter-name-search\"><b style=\"font-size:x-large;margin-bottom:12px;display:block;\"><a href='" + outputPosts[k].url + "'>" + outputPosts[k].title + "</b><span style=\"font-size:smaller;color:var(--drop-cap)!important;margin-top:10px;display:block;\">" + outputPosts[k].chapter + "  |  " + outputPosts[k].book + "  |  " + outputPosts[k].words + " words  |  " + outputPosts[k].language + "</span><span style=\"font-size:medium;font-family:'CooperLt',serif;margin-top:10px;display:block;\">" + outputPosts[k].chap_description + "</span><span style=\"font-size:smaller;color:grey;margin-top:10px;display:block;\">" + outputPosts[k].url + "</span></a></div>";
            }
          }
        }
      }
    };
    xmlhttp.open("GET", jsonFiles[i], true);
    xmlhttp.send();
  }
}


window.onload = function() {
  document.getElementById("search_input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      EarthbookSearch(['glossary.json', 'chapters-index.json']);
    }
  });
};


function clearResults() {
  var searchInput = document.getElementById('search_input');
  var resultsContainer = document.getElementById('search_results');
  var overlayContent = document.querySelector('.search-overlay-content');
  searchInput.value = '';
  resultsContainer.innerHTML = '';
  overlayContent.style.height = '';
  overlayContent.style.marginTop = '';

}
</script>
</html>

