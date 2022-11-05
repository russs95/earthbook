window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  if ( document.body.scrollTop > 40 || document.documentElement.scrollTop > 40 ) {
    
    //AFTERmargin-top: -67px;
    document.getElementById("earthbook-navbar").style.height = "60px";
    document.getElementById("ct-chapter-title").style.fontSize = "1.0em";
    document.getElementById("ct-book-title").style.fontSize = "0.66em";
    document.getElementById("ct-book-title").style.marginTop = "0px";
    document.getElementById("ct-chapter-top").style.marginTop = "-50px";    
    document.getElementById("ct-chap-location").style.display = "none";
    document.getElementById("ct-word-count").style.display = "none";
    document.getElementById("book-header-logo").style.display = "none";
    document.getElementById("ct-chapter-title").style.fontWeight = "bolder";
    document.getElementById("settings-menu").style.opacity = "1";
    document.getElementById("share-menu").style.opacity = "1";
    document.getElementById("ct-chapter-top").style.height = "145px"; 
   // document.getElementById("ct-chapt-graphic").style.marginTop = "60px"; 


  } else {
    //BEFORE
    document.getElementById("earthbook-navbar").style.height = "50vh";
    document.getElementById("ct-chapter-title").style.fontSize = "";
    document.getElementById("ct-book-title").style.fontSize = "";
    document.getElementById("ct-chap-location").display = "block";
    document.getElementById("ct-word-count").style.fontSize = "";
    document.getElementById("ct-book-title").style.marginTop = "10px";
    document.getElementById("ct-chapter-top").style.marginTop = "20px";
    document.getElementById("ct-word-count").style.display = "block";
    //
    document.getElementById("book-header-logo").style.display = "none";
    document.getElementById("settings-menu").style.opacity = "0.1";
    document.getElementById("share-menu").style.opacity = "0.1";
    document.getElementById("ct-chapter-top").style.height = "50vh"; 
    //document.getElementById("ct-chapt-graphic").style.marginTop = "200px"; 

  }
}
 

  


/* Open table of contents someone clicks on the span element */
function openContents2() {
  document.getElementById("left-table-of-contents").style.width = "100%";
  document.body.style.overflowY = "hidden";
  document.body.style.maxHeight = "100vh";
}
/* Close when someone clicks on the "x" symbol inside the overlay */
function closeContents2() {
  document.getElementById("left-table-of-contents").style.width = "0%";
  document.body.style.overflowY = "unset";
  document.body.style.maxHeight = "unset";
} 