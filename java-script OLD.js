/*
function myFunction(x) {
  if (x.matches) { // If media query matches
    document.body.style.backgroundColor = "yellow";
  } else {
    document.body.style.backgroundColor = "pink";
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes 


  if ((Type == 2 && PageCount == 0) || (Type == 2 && PageCount == '')) {
    PageCount = document.getElementById('<%=hfPageCount.ClientID %>').value;
}*/


function scrollFunction() {

  const mediaQuery = window.matchMedia('(max-width: 700px)')


  //AFTER
  if ((mediaQuery.matches)  || (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30)) {
    
    //document.getElementById("mandala-day").style.filter = "none";
    document.getElementById("navbar-day").style.height = "70px";
    //document.getElementById("navbar-day").style.overflowY = "unset";
    document.getElementById("mandala-day").style.width = "60px";
   document.getElementById("mandala-day").style.background = "url('../svgs/tractatus-simple-mandala.svg') center no-repeat";
    document.getElementById("mandala-day").style.backgroundSize = "contain";
    document.getElementById("mandala-day").style.display = "block"; 

   // document.getElementById("mandala-day").style.display ="contents";
    //document.getElementById("navbar-day").style.position = "fixed";
    document.getElementById("book-title").style.display = "none";
    document.getElementById("side").style.marginTop = "-100px";

  } else {
    //BEFORE
    document.getElementById("navbar-day").style.height = "200px";
    //document.getElementById("mandala-day").style.width = "";
    //document.getElementById("mandala-day").style.background = "";
    //document.getElementById("book-title").style.display = "unset";
    document.getElementById("book-title").style.display = "unset";
    document.getElementById("mandala-day").style.opacity = "0";
    document.getElementById("side").style.marginTop = "0px";

  }
}


  





 

/* Open table of contents someone clicks on the span element */
function openContents() {
  document.getElementById("left-table-of-contents").style.width = "100%";
  document.body.style.overflowY = "hidden";
  document.body.style.maxHeight = "100vh";
}
/* Close when someone clicks on the "x" symbol inside the overlay */
function closeContents() {
  document.getElementById("left-table-of-contents").style.width = "0%";
  document.body.style.overflowY = "unset";
  document.body.style.maxHeight = "unset";
} 


/* Open settings when someone clicks on the span element */
function openSettings() {
    document.getElementById("right-settings").style.width = "100%";
    document.body.style.overflowY = "hidden";
    document.body.style.maxHeight = "100vh";
 
  }
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeSettings() {
    document.getElementById("right-settings").style.width = "0%";
    document.body.style.overflowY = "unset";
    document.body.style.maxHeight = "unset";

  } 

  /* Open settings when someone clicks on the span element */
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
/* Close when someone clicks on the "x" symbol inside the overlay */
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


 function toggleDark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var element = document.getElementById("navbar-day");
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
    var element = document.getElementById("right-settings");
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
  } 

  // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};


/*



 setTimeout(() => {
      document.getElementById("main").style.position ="relative";
    
      // 👇️ if you used `display` to hide element
      // el.style.display = 'block';
    }, 2000); // 👈️ delay in milliseconds

function scrollFunction() {
  //AFTER
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar-day").style.height = "75px";
    document.getElementById("book-title").style.backgroundSize = "0%";
    document.getElementById("main-title").style.padding = "15px 10px 50px 10px";
    document.getElementById("main-title").style.fontSize = "2.2em";
    document.getElementById("menu-settings").style.margin = "8px -38px 5px 0px";
    document.getElementById("menu-button").style.margin = "8px -27px 5px -50px";
    document.getElementById("side").style.marginTop = "-100px";
  } else {
    //BEFORE
    document.getElementById("navbar-day").style.height = "208px";
    document.getElementById("book-title").style.backgroundSize = "60%";
    document.getElementById("main-title").style.padding = "40px 10px 18px 10px";
    document.getElementById("main-title").style.fontSize = "3.2em";
    document.getElementById("menu-settings").style.margin = "70px -20px 5px 0px";
    document.getElementById("menu-button").style.margin = "70px 0px 5px -35px";
    document.getElementById("side").style.marginTop = "30px";
  }
}*/



 function Sepia(e)
{
var containerSepia = document.body;
var val = e.value;
containerSepia.setAttribute("style", "filter: sepia("+val+"%); max-height:100vh; overflow-y:hidden;");


}

function Contrast(e)
{
var containerContrast = document.body;
var val = e.value;
containerContrast.setAttribute("style", "filter: contrast("+val+"%); max-height:100vh; overflow:hidden;");
}

function Brightness(e)
{
var containerBrightness = document.body;
var val = e.value;
containerBrightness.setAttribute("style", "filter: brightness("+val+"%); max-height:100vh; overflow-y:hidden;");
}

