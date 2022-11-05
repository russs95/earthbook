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

var clipboard = new ClipboardJS('.btn');
    
clipboard.on('success', function (e) {
  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);
});

clipboard.on('error', function (e) {
  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);
});




/* -------------------------------------------------------------------------- */

/*	1. Curtain Overlays

/* -------------------------------------------------------------------------- */



/* LEFT SETTINGS OVERLAY */
function openSettings() {
  document.getElementById("left-settings-overlay").style.width = "100%";
  document.body.style.overflowY = "hidden";
  //document.body.style.maxHeight = "100vh";

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
  document.body.style.maxHeight = "100vh";
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
    document.body.style.maxHeight = "100vh";
 
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
  document.getElementById("buy-curtain").style.height = "100vh";
  document.body.style.overflowY = "hidden";
  document.body.style.maxHeight = "100vh";

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
  document.getElementById("top-bookplate").style.height = "100vh";
  document.body.style.overflowY = "hidden";
  document.body.style.maxHeight = "100vh";
  document.getElementById("sub-earthbook").style.display = "block";
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
  }

  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeEarthbook() {
    document.getElementById("bottom-earthbook").style.height = "0%";
    document.body.style.overflowY = "unset";
  } 




  /*Still in use??





  /* Open settings when someone clicks on the span element
function openBookplate() {
  document.getElementById("navbar-day").style.height = "100vh";
  document.getElementById("bookplate-content").style.display = "contents";
  document.getElementById("mandala-day").style.width = "";
  document.getElementById("mandala-day").style.background = "";
  document.body.style.overflowY = "hidden";
  document.getElementById("bookplate-button").style.display = "unset";
  document.getElementById("book-title").style.display = "none";
  document.getElementById("menu-button").style.display = "none";
  document.getElementById("menu-settings").style.display = "none";
  document.getElementById("mandala-day").style.display = "block";
  document.getElementById("mandala-day").style.width = "170px";
  document.getElementById("mandala-day").style.height = "170px";
  //document.getElementById("mandala-day").style.width = "100%";
   //document.getElementById("mandala-day").style.background = "url('../svgs/tractatus-mandala-full-black.svg') center no-repeat";
   //document.getElementById("mandala-day").style.backgroundSize = "constrain";

}
/* Close when someone clicks on the "x" symbol inside the overlay 
function closeBookplate() {
  document.getElementById("navbar-day").style.height = "65px";
  document.getElementById("navbar-day").style.overflowY = "unset";
  document.getElementById("bookplate-content").style.display = "none";
  document.getElementById("mandala-day").style.width = "60px";
  document.getElementById("mandala-day").style.background = "url('../svgs/tractatus-simple-mandala.svg') center no-repeat";
  document.getElementById("mandala-day").style.backgroundSize ="contain";
  document.getElementById("navbar-day").style.position = "fixed";

  //document.getElementById("menu-settings").style.right = "-85px";
  //document.getElementById("menu-button").style.margin = "0px 0px 0px -35px";
  document.body.style.overflowY = "unset";
  document.getElementById("bookplate-button").style.display = "none";
  document.getElementById("menu-button").style.display = "unset";
  document.getElementById("menu-settings").style.display = "unset";
} 



/* -------------------------------------------------------------------------- */

/*	1. Night and Day Mode

/* -------------------------------------------------------------------------- */



/*NIGHT AND DAY VIEWS
This function switches over all the relevant divs to their day or night equivalent


var preference = window.matchMedia('(prefers-color-scheme: dark)');
if (preference.matches) {
	// A dark color scheme preference is set so we add the class from our html element
	document.documentElement.classList.add('darkmode');


    var element = document.body;
    element.classList.add("dark-mode");
    var element = document.getElementById("navbar-day");
    element.classList.add("navbar-night");
    var element = document.getElementById("buy-btn");
    element.classList.add("action-btn-night");
    var element = document.getElementById("read-btn");
    element.classList.add("action-btn-night");
    var element = document.getElementById("pdf-btn");
    element.classList.add("action-btn-night");
    var element = document.getElementById("containerSepia");
    element.classList.toggle("container-night");
    var element = document.getElementById("containerBrightness");
    element.classList.toggle("container-night");
    var element = document.getElementById("containerContrast");
    element.classList.toggle("container-night");
    var element = document.getElementById("left-settings-overlay");
    element.classList.toggle("overlay-settings-night");
    var element = document.getElementById("navbar-day");
    element.classList.toggle("overlay-bookplate-night");
    var element = document.getElementById("mandala-day");
    element.classList.toggle("mandala-night");
    var element = document.getElementById("menu-settings");
    element.classList.toggle("menu-settings-night");
    var element = document.getElementById("menu-button");
    element.classList.toggle("menu-button-night");
    var element = document.getElementById("languages");
    element.classList.toggle("languages-night");
    var element = document.getElementById("bookplate-button");
    element.classList.toggle("bookplate-button-night");
    var element = document.getElementById("line");
    element.classList.toggle("line-night");
    var element = document.getElementById("navbar-bottom-day");
    element.classList.toggle("navbar-bottom-night");
    var element = document.getElementById("left-table-of-contents");
    element.classList.toggle("left-table-of-contents-night");
    
    var element = document.getElementById("bookplate-content");
    element.classList.toggle("bookplate-content-night");
    var element = document.getElementById("book-box");
    element.classList.toggle("book-box-night");
    var element = document.getElementById("main-title");
    element.classList.toggle("main-title-night");
    var element = document.getElementById("book-title");
    element.classList.toggle("book-title-night");
    var element = document.getElementById("underlayer");
    element.classList.toggle("dark-mode");
    var element = document.getElementById("bottom-earthbook");
    element.classList.toggle("dark-mode");
    var element = document.getElementById("virtue-box");
    element.classList.toggle("virtue-box-night");

  } else {
    // No dark color scheme preference is set so we remove the class from our html element
    document.documentElement.classList.remove('darkmode');
  }
*/



/*DARK OFF
 function toggleDark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var element = document.getElementById("earthbook-navbar");
    element.classList.toggle("navbar-night");
    var element = document.getElementById("buy-btn");
    element.classList.toggle("action-btn-night");
    var element = document.getElementById("read-btn");
    element.classList.toggle("action-btn-night");
    var element = document.getElementById("pdf-btn");
    element.classList.toggle("action-btn-night");
    var element = document.getElementById("containerSepia");
    element.classList.toggle("container-night");
    var element = document.getElementById("containerBrightness");
    element.classList.toggle("container-night");
    var element = document.getElementById("containerContrast");
    element.classList.toggle("container-night");
    var element = document.getElementById("left-settings-overlay");
    element.classList.toggle("overlay-settings-night");
    var element = document.getElementById("earthbook-navbar");
    element.classList.toggle("overlay-bookplate-night");
    var element = document.getElementById("mandala-day");
    element.classList.toggle("mandala-night");
    var element = document.getElementById("bookplate-img");
    element.classList.toggle("bookplate-img-night");
    var element = document.getElementById("menu-settings");
    element.classList.toggle("menu-settings-night");
    var element = document.getElementById("menu-button");
    element.classList.toggle("menu-button-night");
    var element = document.getElementById("languages");
    element.classList.toggle("languages-night");
    //var element = document.getElementById("bookplate-button");
    //element.classList.toggle("bookplate-button-night");
    var element = document.getElementById("line");
    element.classList.toggle("line-night");
    var element = document.getElementById("navbar-bottom-day");
    element.classList.toggle("navbar-bottom-night");
    var element = document.getElementById("left-table-of-contents");
    element.classList.toggle("left-table-of-contents-night");
    
    var element = document.getElementById("bookplate-content");
    element.classList.toggle("bookplate-content-night");
    var element = document.getElementById("book-box");
    element.classList.toggle("book-box-night");
    var element = document.getElementById("main-title");
    element.classList.toggle("main-title-night");
    var element = document.getElementById("book-title");
    element.classList.toggle("book-title-night");
    var element = document.getElementById("underlayer");
    element.classList.toggle("dark-mode");
    var element = document.getElementById("bottom-earthbook");
    element.classList.toggle("dark-mode");
    var element = document.getElementById("virtue-box");
    element.classList.toggle("virtue-box-night");
    var element = document.getElementById("top-bookplate");
    element.classList.toggle("top-bookplate-night");
    var element = document.getElementById("bookplate-content");
    element.classList.toggle("bookplate-content-night");
    var element = document.getElementById("bookplate-img");
    element.classList.toggle("bookplate-img-night");
  } 

*/


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

/*	4. Misc

/* -------------------------------------------------------------------------- */



