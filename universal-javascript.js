/*TRACTATUS AYYEW BOOKAPP VERSION 1.0

JAVASCRIPT Version 1.0.1
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


/*ROLL CALL*/

  // setPageLanguageFromCache();
  // alert(currentLanguage);
  // var currentLanguage = 'en';
  // switchLanguage(currentLanguage);

  

window.onload = function() {
  // var siteName = 'tractatus-ayyew'; 
  window.subSource = 'tractatus-ayyew'; // Make subSource globally accessible
  document.getElementById("search_input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      EarthbookSearch();
    }
  });
};




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
 
 
 
 
 
 
 /* -------------------------------------------------------------------------- */
 
 /*	1. Curtain Overlays
 
 /* -------------------------------------------------------------------------- */
 
 
 
 /* BOTTOM COMMENTS OVERLAY 
 
 Triggers the full screen chapter comments*/
 
 function openComments() {
   document.getElementById("bottom-comments-overlay").style.height = "101vh";
   document.body.style.overflowY = "hidden";
   document.getElementById("right-close-button2").style.position = "fixed";
   //document.body.style.maxHeight = "101vh";
 
   var modal = document.getElementById('bottom-comments-overlay');
 
 function modalShow () {
    modal.setAttribute('tabindex', '0');
    modal.focus();
 }
 
 function focusRestrict ( event ) {
   document.addEventListener('focus', function( event ) {
     if ( modalOpen && !modal.contains( event.target ) ) {
       event.stopPropagation();
       modal.focus();
     }
   }, true);
 }
 }
 
 /* Close when someone clicks on the "x" symbol inside the overlay */
 function closeComments() {
   document.getElementById("bottom-comments-overlay").style.height = "0%";
   document.body.style.overflowY = "unset";
   document.getElementById("right-close-button2").style.position = "absolute";
 
 } 
 
 
 
 
 /* BOOKPLATE OVERLAY
 
 Opens the bookplate overlay from the top up*/
 
 function openBookplate() {
   document.getElementById("top-bookplate").style.height = "100%";
   document.body.style.overflowY = "hidden";
  // document.body.style.maxHeight = "101vh";
   document.getElementById("sub-earthbook").style.display = "block!important";
   document.getElementById("bookplate-img").style.display = "block";
 
   var modal = document.getElementById('top-bookplate');
 
 function modalShow () {
    modal.setAttribute('tabindex', '0');
    modal.focus();
 }
 
 function focusRestrict ( event ) {
   document.addEventListener('focus', function( event ) {
     if ( modalOpen && !modal.contains( event.target ) ) {
       event.stopPropagation();
       modal.focus();
     }
   }, true);
 }
 }
 
 /* Close when someone clicks on the "x" symbol inside the overlay 
 
 NOT YET TRANSFRERED TO ESCAPE SCRIPT*/
 
 function closeBookplate() {
   document.getElementById("top-bookplate").style.height = "0%";
   document.body.style.overflowY = "unset";
   //document.body.style.maxHeight = "unset";
   document.getElementById("sub-earthbook").style.display = "none";
   document.getElementById("bookplate-button").style.display = "none";
   document.getElementById("bookplate-img").style.display = "none";
 
 } 
 
 
 
 /* RIGHT SEARCH OVERLAY 
 
 Triggers the right search panel*/
 
 function openSearch() {
   document.getElementById("right-search-overlay").style.width = "100%";
   document.body.style.overflowY = "clip";
  /* document.body.style.maxHeight = "101vh";*/
 
  var modal = document.getElementById('right-search-overlay');
 
 function modalShow () {
    modal.setAttribute('tabindex', '0');
    modal.focus();
 }
 
 function focusRestrict ( event ) {
   document.addEventListener('focus', function( event ) {
     if ( modalOpen && !modal.contains( event.target ) ) {
       event.stopPropagation();
       modal.focus();
     }
   }, true);
 }
 
 }
 
 /* Close when someone clicks on the "x" symbol inside the overlay */
 function closeSearch() {
   document.getElementById("right-search-overlay").style.width = "0%";
   document.body.style.overflowY = "unset";
  /* document.body.style.maxHeight = "unset";*/
 } 
 
  
 
 
 
 
 /*READ OVERLAY
 Opens up the Earthbook overlay from the bottom up*/
 
   /* Open settings when someone clicks on the span element */
   function openRead() {
     document.getElementById("read-curtain").style.height = "101vh";
     document.body.style.overflowY = "hidden";
     //document.body.style.maxHeight = "101vh";
 
     var modal = document.getElementById('read-curtain');
 
     function modalShow () {
        modal.setAttribute('tabindex', '0');
        modal.focus();
     }
     
     function focusRestrict ( event ) {
       document.addEventListener('focus', function( event ) {
         if ( modalOpen && !modal.contains( event.target ) ) {
           event.stopPropagation();
           modal.focus();
         }
       }, true);
     }
     }
   
 
   /* Close when someone clicks on the "x" symbol inside the overlay */
   function closeRead() {
     document.getElementById("read-curtain").style.height = "0%";
     document.body.style.overflowY = "unset";
     //document.body.style.maxHeight = "unset";
   } 
 
 
 
 
 /* RIGHT SHARE OVERLAY 
 
 Triggers the right share link panel*/
 
 function openShare() {
   document.getElementById("right-share-overlay").style.width = "100%";
   document.body.style.overflowY = "hidden";
   //document.body.style.maxHeight = "101vh";
 
   var modal = document.getElementById('right-share-overlay');
 
 function modalShow () {
    modal.setAttribute('tabindex', '0');
    modal.focus();
 }
 
 function focusRestrict ( event ) {
   document.addEventListener('focus', function( event ) {
     if ( modalOpen && !modal.contains( event.target ) ) {
       event.stopPropagation();
       modal.focus();
     }
   }, true);
 }
 }
 
 
 
 /* Close when someone clicks on the "x" symbol inside the overlay */
 function closeShare() {
   document.getElementById("right-share-overlay").style.width = "0%";
   document.body.style.overflowY = "unset";
   //document.body.style.maxHeight = "unset";
 
 } 
 
 
 
 
 /* LEFT SETTINGS OVERLAY */
 function openSettings() {
   document.getElementById("left-settings-overlay").style.width = "100%";
   document.body.style.overflowY = "hidden";
   // document.body.style.maxHeight = "101vh";
   //document.getElementById("underlayer").filter.width = "blur(3px)";

 
  var modal = document.getElementById('left-settings-overlay');
 
 function modalShow () {
    modal.setAttribute('tabindex', '0');
    modal.focus();
 }
 
 function focusRestrict ( event ) {
   document.addEventListener('focus', function( event ) {
     if ( modalOpen && !modal.contains( event.target ) ) {
       event.stopPropagation();
       modal.focus();
     }
   }, true);
 }
 }
 
 
 /* Close when someone clicks on the "x" symbol inside the overlay */
 function closeSettings() {
   document.getElementById("left-settings-overlay").style.width = "0%";
   document.body.style.overflowY = "unset";
   document.body.style.maxHeight = "unset";
   document.getElementById("reset-settings").innerHTML = "⟲ Reset to Defaults";



 } 
 
 
 
 /* TABLE OF CONTENTS OVERLAY
 Triggers the downwards swing of the TC*/
 
 function openContents() {
   document.getElementById("table-of-contents").style.height = "100%";
   //document.getElementById("table-of-contents").style.overflowY = "hidden";
   document.body.style.overflowY = "hidden";
   //document.body.style.maxHeight = "101vh";
 
   var modal = document.getElementById('table-of-contents');
 
 function modalShow () {
    modal.setAttribute('tabindex', '0');
    modal.focus();
 }
 
 function focusRestrict ( event ) {
   document.addEventListener('focus', function( event ) {
     if ( modalOpen && !modal.contains( event.target ) ) {
       event.stopPropagation();
       modal.focus();
     }
   }, true);
 }
 
 }
 /* Triggers the upwards reset of the TC */
 
 function closeContents() {
   document.getElementById("table-of-contents").style.height = "0%";
   //document.getElementById("table-of-contents").style.overflowY = "unset";
   document.body.style.overflowY = "unset";
   //document.body.style.maxHeight = "unset";
 } 
 
 
 
 
 /* BOOKNOTES OVERLAY
 Triggers the downwards swing of the TC*/
 
 function openBooknotes() {
  document.getElementById("booknotes-curtain").style.height = "100%";
  //document.getElementById("table-of-contents").style.overflowY = "hidden";
  document.body.style.overflowY = "hidden";
  //document.body.style.maxHeight = "101vh";
  var modal = document.getElementById('booknotes-curtain');

function modalShow () {
   modal.setAttribute('tabindex', '0');
   modal.focus();
}

function focusRestrict ( event ) {
  document.addEventListener('focus', function( event ) {
    if ( modalOpen && !modal.contains( event.target ) ) {
      event.stopPropagation();
      modal.focus();
    }
  }, true);
}

}
/* Triggers the upwards reset of the TC */

function closeBooknotes() {
  document.getElementById("booknotes-curtain").style.height = "0%";
  //document.getElementById("table-of-contents").style.overflowY = "unset";
  document.body.style.overflowY = "unset";
  //document.body.style.maxHeight = "unset";
} 

 
   /* BUY OVERLAY 
   
 Triggers the right buy panel*/
 
//  function openBuy() {
//    document.getElementById("buy-curtain").style.height = "100%";
//    document.body.style.overflowY = "hidden";
   
//  var modal = document.getElementById('buy-curtain');
 
//  function modalShow () {
//     modal.setAttribute('tabindex', '0');
//     modal.focus();
//  }
 
 
//  function focusRestrict ( event ) {
//    document.addEventListener('focus', function( event ) {
//      if ( modalOpen && !modal.contains( event.target ) ) {
//        event.stopPropagation();
//        modal.focus();
//      }
//    }, true);
//  }
//  }

function openBuy() {
  window.location.href = 'buy.html';
}

 
 /* Close when someone clicks on the "x" symbol inside the overlay */
 function closeBuy() {
   document.getElementById("buy-curtain").style.height = "0%";
   document.body.style.overflowY = "unset";
 } 
 
 
 
 
 
 /*EARTHBOOK OVERLAY
 
 Opens up the Earthbook overlay from the bottom up*/
 
 
   /* Open settings when someone clicks on the span element */
   function openEarthbook() {
     document.getElementById("bottom-earthbook").style.height = "100%";
     document.body.style.overflowY = "hidden";
     /*document.body.style.maxHeight = "101vh";*/
     document.getElementById("medium-message").style.opacity = "1";
     document.getElementById("fore").style.opacity = "1";
 
     var modal = document.getElementById('bottom-earthbook');
 
 function modalShow () {
    modal.setAttribute('tabindex', '0');
    modal.focus();
 }
 
 function focusRestrict ( event ) {
   document.addEventListener('focus', function( event ) {
     if ( modalOpen && !modal.contains( event.target ) ) {
       event.stopPropagation();
       modal.focus();
     }
   }, true);
 }
 }
   
 
   /* Close when someone clicks on the "x" symbol inside the overlay */
   function closeEarthbook() {
     document.getElementById("bottom-earthbook").style.height = "0%";
     document.body.style.overflowY = "unset";
     /*document.body.style.maxHeight = "unset";*/
     document.getElementById("medium-message").style.transitionDelay = "2s";
     document.getElementById("medium-message").style.opacity = "0";
     document.getElementById("fore").style.opacity = "0";
   } 
 
 
  /*ECO OVERLAY
 
 Opens up the Earthbook overlay from the bottom up*/
 
 
   /* Open settings when someone clicks on the span element */
   function openEco() {
     document.getElementById("eco-curtain2").style.height = "100%";
     document.body.style.overflowY = "hidden";
     /*document.body.style.maxHeight = "101vh";*/
     
     var modal = document.getElementById('eco-curtain2');
 
     function modalShow () {
       modal.setAttribute('tabindex', '0');
       modal.focus();
    }
    
    function focusRestrict ( event ) {
      document.addEventListener('focus', function( event ) {
        if ( modalOpen && !modal.contains( event.target ) ) {
          event.stopPropagation();
          modal.focus();
        }
      }, true);
    }
    }
 
   /* Close when someone clicks on the "x" symbol inside the overlay */
   function closeEco() {
     document.getElementById("eco-curtain2").style.height = "0%";
     document.body.style.overflowY = "unset";
   } 
 
 
 /*Key close all curtains*/
 
 function modalCloseComments ( e ) {
   if ( !e.keyCode || e.keyCode === 27 ) {
     document.getElementById("bottom-comments-overlay").style.height = "0%";
     document.getElementById("eco-curtain2").style.height = "0%";
     document.getElementById("right-close-button2").style.position = "absolute";
     document.getElementById("bottom-earthbook").style.height = "0%";
 
     document.getElementById("medium-message").style.transitionDelay = "2s";
     document.getElementById("medium-message").style.opacity = "0";
 
     document.getElementById("buy-curtain").style.height = "0%";
     document.getElementById("table-of-contents").style.height = "0%";
     document.getElementById("book-notes-curtain").style.height = "0%";

     document.getElementById("right-share-overlay").style.width = "0%";
 
     document.getElementById("top-bookplate").style.height = "0%";
   document.getElementById("sub-earthbook").style.display = "none";
   document.getElementById("bookplate-button").style.display = "none";
   document.getElementById("bookplate-img").style.display = "none";
   document.getElementById("left-settings-overlay").style.width = "0%";
   document.getElementById("read-curtain").style.height = "0%";
 
 
   }
 }
 document.addEventListener('keydown', modalCloseComments);
 
 
 
 
 
 /* -------------------------------------------------------------------------- */
 
 /*	3. Screen Adjustments
 
 /* -------------------------------------------------------------------------- */
 
 function setReadability() {
  const brightnessInput = document.getElementById("brightness-range-scale").value;
  const contrastInput = document.getElementById("contrast-range-scale").value;
  const sepia = document.getElementById("sepia-range-scale").value;

  const brightness = 40 + (brightnessInput / 100) * 100;
  const contrast = 40 + (contrastInput / 100) * 100;

  document.documentElement.style.filter = `brightness(${brightness}%) contrast(${contrast}%) sepia(${sepia}%)`;

  localStorage.setItem('brightnessInput', brightnessInput);
  localStorage.setItem('contrastInput', contrastInput);
  localStorage.setItem('sepia', sepia);
}


document.addEventListener("DOMContentLoaded", function() {
  const brightnessInput = localStorage.getItem('brightnessInput') || 60;
  const contrastInput = localStorage.getItem('contrastInput') || 60;
  const sepia = localStorage.getItem('sepia') || 0;
  const userSetFontSize = localStorage.getItem('userSetFontSize') || 16;
  const navbarHeight = localStorage.getItem('navbarHeight') || 60;

  document.getElementById("brightness-range-scale").value = brightnessInput;
  document.getElementById("contrast-range-scale").value = contrastInput;
  document.getElementById("sepia-range-scale").value = sepia;

  const brightness = 40 + (brightnessInput / 100) * 100;
  const contrast = 40 + (contrastInput / 100) * 100;

  document.documentElement.style.filter = `brightness(${brightness}%) contrast(${contrast}%) sepia(${sepia}%)`;

  adjustFontSize('accessibility-plugin-ac', null);
  setNavbarHeight(navbarHeight);
});



function adjustFontSize(className, change) {
  const elements = document.querySelectorAll(`.${className}`);
  let userSetFontSize = parseFloat(localStorage.getItem('userSetFontSize')) || null;

  if (change === 'increase') {
    userSetFontSize += 2;
  } else if (change === 'decrease') {
    userSetFontSize -= 2;
  } else if (change === 'normal') {
    userSetFontSize = 16;
  }

  localStorage.setItem('userSetFontSize', userSetFontSize);

  elements.forEach(element => {
    element.style.fontSize = `${userSetFontSize}px`;
  });

  const navbarHeight = parseFloat(localStorage.getItem('navbarHeight')) || 60;
  setNavbarHeight(navbarHeight + (change === 'increase' ? 3 : change === 'decrease' ? -3 : 0));
}

function setNavbarHeight(height) {
  const navbar = document.querySelector('#earthbook-navbar');
  navbar.style.minHeight = `${height}px`;
  localStorage.setItem('navbarHeight', height);
}





/*

function adjustFontSize(className, change) {
  const body = document.querySelector('body');
  const elements = body.querySelectorAll(`.${className}`);
  const navbar = document.getElementById('earthbook-navbar');

  elements.forEach(element => {
    let fontSize = window.getComputedStyle(element).getPropertyValue('font-size');
    fontSize = parseFloat(fontSize);

    if (change === 'increase') {
      fontSize += 1;
    } else if (change === 'decrease') {
      fontSize -= 1;
    } else if (change === 'normal') {
      fontSize = 16;
    }

    element.style.fontSize = `${fontSize}px`;
  });

  let navbarHeight = window.getComputedStyle(navbar).getPropertyValue('height');
  navbarHeight = parseFloat(navbarHeight) + 3;
  navbar.style.minHeight = `${navbarHeight}px`;
}

*/
 
 /* -------------------------------------------------------------------------- */
 
 /*	4. SEARCH
 /* -------------------------------------------------------------------------- */
 
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





function clearResults() {
  var searchInput = document.getElementById('search_input');
  var resultsContainer = document.getElementById('search_results');
  var overlayContent = document.querySelector('.search-overlay-content');
  searchInput.value = '';
  resultsContainer.innerHTML = '';
  overlayContent.style.height = '';
  overlayContent.style.marginTop = '';

}


/*----------------------------

GUIDED TOUR


----------------------------*/

function closeTour() {
  // Get the modal and set its display to "block" to show it
  var modal = document.getElementById("guided-tour");
  modal.style.display = "none";
  document.getElementById("underlayer").classList.remove("blur");
}


function guidedTour() {
  // Get the modal and set its display to "block" to show it
  var modal = document.getElementById("guided-tour");
  modal.style.display = "block";

  // Add the "blur" class to the page content to visually distinguish it from the modal
  document.getElementById("underlayer").classList.add("blur");

  // Get the close button and set its onclick function to hide the modal and remove the "blur" class from the page content
  var closeButton = document.querySelector(".close");
  closeButton.onclick = function() {
    modal.style.display = "none";
    document.getElementById("underlayer").classList.remove("blur");
  }

    // Get all the "information" elements (which contain the tour content) and set the currentInfo variable to 0 (the first element)
  var information = document.querySelectorAll(".information");
  var currentInfo = 0;

  // Define a function to show the nth "information" element and hide the current one
  function showInfo(infoIndex) {
    // Check that the requested index is within the bounds of the array before attempting to show the information panel
    if (infoIndex >= 0 && infoIndex < information.length) {
      information[currentInfo].style.display = "none";
      information[infoIndex].style.display = "block";
      currentInfo = infoIndex;
    }
  }

  // Set the onclick function for the first "Next" button to show the second "information" element
  document.querySelector(".next:first-of-type").onclick = function() {
    showInfo(1);
  };

  // Set the onclick function for the second "Next" button to show the third "information" element
  document.querySelector("#information-two .next").onclick = function() {
    showInfo(2);
  };

  // Set the onclick function for the third "Next" button to show the fourth "information" element
  document.querySelector("#information-three .next").onclick = function() {
    showInfo(3);
  };

  // Set the onclick function for the fourth "Next" button to show the fifth "information" element
  document.querySelector("#information-four .next").onclick = function() {
    showInfo(4);
  };

    // Set the onclick function for the fith "Next" button to show the six "information" element
    document.querySelector("#information-five .next").onclick = function() {
      showInfo(5);
    };

  // Set the onclick function for the fifth "Next" button to hide the modal and remove the "blur" class from the page content
  document.querySelector("#information-six .next").onclick = function() {
    modal.style.display = "none";
    document.getElementById("underlayer").classList.remove("blur");
    showInfo(0);
  };

// Set the onclick function for the "Back" button in the third "information" element to show the second "information" element
document.querySelector("#information-two .back").onclick = function() {
showInfo(0);
};
// Set the onclick function for the "Back" button in the third "information" element to show the second "information" element
document.querySelector("#information-three .back").onclick = function() {
showInfo(1);
};

// Set the onclick function for the "Back" button in the fourth "information" element to show the third "information" element
document.querySelector("#information-four .back").onclick = function() {
showInfo(2);
};

// Set the onclick function for the "Back" button in the fifth "information" element to show the fourth "information" element
document.querySelector("#information-five .back").onclick = function() {
showInfo(3);
};

// Set the onclick function for the "Back" button in the fifth "information" element to show the fourth "information" element
document.querySelector("#information-six .back").onclick = function() {
  showInfo(4);
  };

}


function reset2Default() {
  // Reset the default values
  const hideNotice = false;
  const brightnessInput = 60;
  const contrastInput = 60;
  const sepia = 0;
  const userSetFontSize = 16;
  const navbarHeight = 60;

  // Store the values in the browser cache (localStorage)
  localStorage.setItem("hideNotice", hideNotice);
  localStorage.setItem("brightnessInput", brightnessInput);
  localStorage.setItem("contrastInput", contrastInput);
  localStorage.setItem("sepia", sepia);
  localStorage.setItem("userSetFontSize", userSetFontSize);
  localStorage.setItem("navbarHeight", navbarHeight);

  // Update the UI with the default values
  document.getElementById("brightness-range-scale").value = brightnessInput;
  document.getElementById("contrast-range-scale").value = contrastInput;
  document.getElementById("sepia-range-scale").value = sepia;
  
  const brightness = 40 + (brightnessInput / 100) * 100;
  const contrast = 40 + (contrastInput / 100) * 100;

  document.documentElement.style.filter = `brightness(100%) contrast(100%) sepia(${sepia}%)`;

  //adjustFontSize('accessibility-plugin-ac', 'normal');
  document.getElementById('earthbook-navbar').style.minHeight = `${navbarHeight}px`;

  document.getElementById("reset-settings").innerHTML = "&#10003; Settings Reset";

  //remove tokens
  localStorage.removeItem('showCounter');
  localStorage.removeItem('earthenRegistration');

  console.log("showCounter and earthenRegistration data cleared from local storage.");
}




