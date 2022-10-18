/* Open table of contents someone clicks on the span element */
function openContents() {
  document.getElementById("left-table-of-contents").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeContents() {
  document.getElementById("left-table-of-contents").style.width = "0%";
} 


/* Open settings when someone clicks on the span element */
function openSettings() {
    document.getElementById("right-settings").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeSettings() {
    document.getElementById("right-settings").style.width = "0%";
  } 

  /* Open settings when someone clicks on the span element */
function openBookplate() {
  document.getElementById("top-bookplate").style.height = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeBookplate() {
  document.getElementById("top-bookplate").style.height = "0%";
} 

  /* Open settings when someone clicks on the span element */
  function openEarthbook() {
    document.getElementById("bottom-earthbook").style.height = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeEarthbook() {
    document.getElementById("bottom-earthbook").style.height = "0%";
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
    var element = document.getElementById("container");
    element.classList.toggle("container-night");
 //   var element = document.getElementById("toggle-btn");
 //   element.classList.toggle("toggle-btn-night");
    var element = document.getElementById("right-settings");
    element.classList.toggle("overlay-settings-night");
 
    var element = document.getElementById("top-bookplate");
    element.classList.toggle("overlay-bookplate-night");
    var element = document.getElementById("mandala-day");
    element.classList.toggle("mandala-night");
    var element = document.getElementById("menu-settings");
    element.classList.toggle("menu-settings-night");
    var element = document.getElementById("menu-button");
    element.classList.toggle("menu-button-night");
    var element = document.getElementById("book-box");
    element.classList.toggle("book-box-night");
    var element = document.getElementById("line");
    element.classList.toggle("line-night");
    var element = document.getElementById("navbar-bottom-day");
    element.classList.toggle("navbar-bottom-night");
    var element = document.getElementById("main-title");
    element.classList.toggle("main-title-night");
    var element = document.getElementById("book-title");
    element.classList.toggle("book-title-night");
    var element = document.getElementById("left-table-of-contents");
    element.classList.toggle("left-table-of-contents-night");
  } 

  // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

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
}



 function Sepia(e)
{
var container1 = document.body;
var val = e.value;
container1.setAttribute("style", "filter: sepia("+val+"%);");
}

function Contrast(e)
{
var container2 = document.body;
var val = e.value;
container2.setAttribute("style", "filter: contrast("+val+"%);");
}

function Brightness(e)
{
var container3 = document.body;
var val = e.value;
container3.setAttribute("style", "filter: brightness("+val+"%);");
}

/*
$(function() {
  $('.chapter-top').hover(function() {
    $('.chapter-icon').css('background-color', 'yellow');
  }, function() {
    // on mouseout, reset the background colour
    $('.chapter-icon').css('background-color', '');
  });
});
*/