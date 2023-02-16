/*TRACTATUS AYYEW BOOKAPP VERSION 1.0

JAVASCRIPT Version 1.0
Original Author:  Russell Maier
License: GNU General Public License v2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html
All files, unless otherwise stated, are released under the GNU General Public
License version 2.0 (https://www.gnu.org/licenses/gpl-2.0.html)
See full project repository at: https://github.com/russs95/earthbook

Here are all the scripts useScripts used on all Earthbook pages to pull in the various screen overlays
*/



/*--------------------------------------------------------------
>>> TABLE OF CONTENTS:
----------------------------------------------------------------
	1.  Overlay Curtains
	2.  TOP Earthbook Navigation Bar
  3.	LEFT Settings Curtain
	4. 	RIGHT Share Curtain
	5. 	BOTTOM Bookplate 
  6.  Main page content 
	6.	Footer
	7.      Forms
	8. 	Notifications
	9. 	Needs Review
	10.  	New

*/


 // If `prefers-color-scheme` is not supported, fall back to light mode.
 // In this case, light.css will be downloaded with `highest` priority.

 if (window.matchMedia('(prefers-color-scheme)').media === 'not all') {
 document.documentElement.style.display = 'none';
 document.head.insertAdjacentHTML(
 'beforeend',
 '<link rel="stylesheet" href="/light.css" onload="document.documentElement.style.display = ``">'
 );
 }

 const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
 darkModeMediaQuery.addListener((e) => {
 const darkModeOn = e.matches;
 console.log(`Dark mode is ${darkModeOn ? '🌒 on' : '☀️ off'}.`);
 });






/*Conditionally either load the light or the dark stylesheet. The matching file
 will be downloaded with `highest`, the non-matching file with `lowest`
 priority. If the browser doesn't support `prefers-color-scheme`, the media
 query is unknown and the files are downloaded with `lowest` priority (but
 above I already force `highest` priority for my default light experience).
-->*/

/*
$(function() {
  $('#footer-icon-left ').click(function() {
    $(this).css('background-image', 'url(svgs/footer-settings-button-up.png)');
  });
});*/



/* COPY FUNTION ON SHARE CURTAIN */






/* -------------------------------------------------------------------------- */

/*	1. Curtain Overlays

/* -------------------------------------------------------------------------- */



/* LEFT SETTINGS OVERLAY */
function openSettings() {
  document.getElementById("left-settings-overlay").style.width = "100%";
  document.body.style.overflowY = "hidden";
  document.body.style.maxHeight = "101vh";

}
/* Close when someone clicks on the "x" symbol inside the overlay */
function closeSettings() {
  document.getElementById("left-settings-overlay").style.width = "0%";
  document.body.style.overflowY = "unset";
  document.body.style.maxHeight = "unset";
  document.body.style.height = "unset";} 

 
/* TABLE OF CONTENTS OVERLAY
Triggers the downwards swing of the TC*/

function openContents() {
  document.getElementById("table-of-contents").style.height = "100%";
  document.getElementById("table-of-contents").style.overflowY = "hidden";
  document.body.style.overflowY = "hidden";
  document.body.style.maxHeight = "101vh";
}
/* Triggers the upwards reset of the TC */

function closeContents() {
  document.getElementById("table-of-contents").style.height = "0%";
  document.getElementById("table-of-contents").style.overflowY = "unset";
  document.body.style.overflowY = "unset";
  document.body.style.maxHeight = "unset";
} 

/* RIGHT SHARE OVERLAY 

Triggers the right share link panel*/

function openShare() {
    document.getElementById("right-share-overlay").style.width = "100%";
    document.body.style.overflowY = "hidden";
    document.body.style.maxHeight = "101vh";
 
  }

/* Close when someone clicks on the "x" symbol inside the overlay */
  function closeShare() {
    document.getElementById("right-share-overlay").style.width = "0%";
    document.body.style.overflowY = "unset";
    document.body.style.maxHeight = "unset";

  } 

/* BUY SHARE OVERLAY 
  
Triggers the right share link panel*/

function openBuy() {
  document.getElementById("buy-curtain").style.height = "101vh";
  document.body.style.overflowY = "hidden";
  document.body.style.maxHeight = "101vh";

}


/* Close when someone clicks on the "x" symbol inside the overlay */
function closeBuy() {
  document.getElementById("buy-curtain").style.height = "0vh";
  document.body.style.overflowY = "unset";
  document.body.style.maxHeight = "unset";
} 


/* BOOKPLATE OVERLAY

Opens the bookplate overlay from the top up*/

function openBookplate() {
  document.getElementById("top-bookplate").style.height = "101vh";
  document.body.style.overflowY = "hidden";
  document.body.style.maxHeight = "101vh";
  document.getElementById("sub-earthbook").style.display = "block!important";
  document.getElementById("bookplate-img").style.display = "block";
}
/* Close when someone clicks on the "x" symbol inside the overlay */
function closeBookplate() {
  document.getElementById("top-bookplate").style.height = "0%";
  document.body.style.overflowY = "unset";
  document.body.style.maxHeight = "unset";
  document.getElementById("sub-earthbook").style.display = "none";
  document.getElementById("bookplate-button").style.display = "none";
  document.getElementById("bookplate-img").style.display = "none";

} 

/*EARTHBOOK OVERLAY

Opens up the Earthbook overlay from the bottom up*/


  /* Open settings when someone clicks on the span element */
  function openEarthbook() {
    document.getElementById("bottom-earthbook").style.height = "100%";
    document.body.style.overflowY = "hidden";
    /*document.body.style.maxHeight = "101vh";*/
  }

  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeEarthbook() {
    document.getElementById("bottom-earthbook").style.height = "0%";
    document.body.style.overflowY = "unset";
    /*document.body.style.maxHeight = "unset";*/
  } 



/* RIGHT SEARCH OVERLAY 

Triggers the right share link panel*/

function openSearch() {
  document.getElementById("right-search-overlay").style.width = "100%";
  document.body.style.overflowY = "hidden";
  //document.body.style.maxHeight = "101vh";

}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeSearch() {
  document.getElementById("right-search-overlay").style.width = "0%";
  document.body.style.overflowY = "unset";
  //document.body.style.maxHeight = "unset";

} 

  /*ECO OVERLAY

Opens up the Earthbook overlay from the bottom up*/


  /* Open settings when someone clicks on the span element */
  function openEco() {
    document.getElementById("eco-curtain2").style.height = "101vh";
    document.body.style.overflowY = "hidden";
    document.body.style.maxHeight = "101vh";
  }

  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeEco() {
    document.getElementById("eco-curtain2").style.height = "0%";
    document.body.style.overflowY = "unset";
    document.body.style.maxHeight = "unset";
  } 


/*READ OVERLAY

Opens up the Earthbook overlay from the bottom up*/


  /* Open settings when someone clicks on the span element */
  function openRead() {
    document.getElementById("read-curtain").style.height = "101vh";
    document.body.style.overflowY = "hidden";
    document.body.style.maxHeight = "101vh";
  }

  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeRead() {
    document.getElementById("read-curtain").style.height = "0%";
    document.body.style.overflowY = "unset";
    document.body.style.maxHeight = "unset";
  } 






/* BOTTOM COMMENTS OVERLAY 

Triggers the full screen chapter comments*/

function openComments() {
  document.getElementById("bottom-comments-overlay").style.height = "101vh";
  document.body.style.overflowY = "hidden";
  document.getElementById("right-close-button").style.position = "fixed";
  //document.body.style.maxHeight = "101vh";

}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeComments() {
  document.getElementById("bottom-comments-overlay").style.height = "0%";
  document.body.style.overflowY = "unset";
  document.getElementById("right-close-button").style.position = "absolute";
  //document.body.style.maxHeight = "unset";

} 



/* -------------------------------------------------------------------------- */

/*	3. Screen Adjustments

/* -------------------------------------------------------------------------- */

/*max-height:100vh; overflow:hidden;*/

 function Sepia(e)
{
var containerSepia = document.body;
var val = e.value;
containerSepia.setAttribute("style", "filter: sepia("+val+"%); height: 100vh; overflow-y: hidden;");
}

function Contrast(e)
{
var containerContrast = document.body;
var val = e.value;
containerContrast.setAttribute("style", "filter: contrast("+val+"%); height: 100vh; overflow-y: hidden;");
}

function Brightness(e)
{
var containerBrightness = document.body;
var val = e.value;
containerBrightness.setAttribute("style", "filter: brightness("+val+"%); height: 100vh; overflow-y: hidden;");

}



/* -------------------------------------------------------------------------- */

/*	4. SEARCH
/* -------------------------------------------------------------------------- */



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
                resultsContainer.innerHTML += "<div class=\"tc-item\"><div id='result_" + i + "' style=\"display:flex; text-align:left; padding: 23px;\"><div class=\"chapter_pic\" style=\"width=100px; margin-right:10px;\"><img src=\"" + outputPosts[ i ].image_url + "\" width=\"100px\" height=\"100px\"></div><div class=\"chapter-name-search\"><span style=\"font-size:small, color:grey;\">" + outputPosts[ i ].chapter + "  |  " + outputPosts[ i ].book + "  |  Words: " + outputPosts[ i ].words + "  |  " + outputPosts[ i ].language + "<b style=\"font-size:larger;\"><a href='" + outputPosts[ i ].url + "'>" + outputPosts[ i ].title + "</b><br><span style=\"font-size:medium;\">" + outputPosts[ i ].chap_description + "</span><br><span style=\"font-size:smaller;\">" + outputPosts[ i ].url + "</span></a></div>;";  
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
