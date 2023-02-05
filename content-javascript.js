window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  if ( document.body.scrollTop > 40 || document.documentElement.scrollTop > 40 ) {
    
    //AFTERmargin-top: -67px;
    document.getElementById("earthbook-navbar").style.height = "60px";
    document.getElementById("ct-chapter-title").style.fontSize = "1.0em";
    document.getElementById("ct-book-title").style.fontSize = "0.66em";
    document.getElementById("ct-book-title").style.marginTop = "0px";
    document.getElementById("ct-chapter-top").style.marginTop = "-100px";    
    document.getElementById("ct-chap-location").style.display = "none";
    document.getElementById("ct-word-count").style.display = "none";
    document.getElementById("book-header-logo").style.display = "none";
    document.getElementById("ct-chapter-title").style.fontWeight = "bolder";
    document.getElementById("settings-menu").style.opacity = "1";
    document.getElementById("share-menu").style.opacity = "1";
    document.getElementById("ct-chapter-top").style.height = "145px"; 
    document.getElementById("ct-chapt-graphic").style.paddingTop = "50vh"; 


  } else {
    //BEFORE
    document.getElementById("earthbook-navbar").style.height = "50vh";
    document.getElementById("ct-chapter-title").style.fontSize = "";
    document.getElementById("ct-book-title").style.fontSize = "";
    document.getElementById("ct-chap-location").style.display = "block";
    document.getElementById("ct-word-count").style.fontSize = "";
    document.getElementById("ct-book-title").style.marginTop = "10px";
    document.getElementById("ct-chapter-top").style.marginTop = "0px";
    document.getElementById("ct-word-count").style.display = "block";
    //
    document.getElementById("book-header-logo").style.display = "none";
    document.getElementById("settings-menu").style.opacity = "0.1";
    document.getElementById("share-menu").style.opacity = "0.1";
    document.getElementById("ct-chapter-top").style.height = "50vh"; 
    document.getElementById("ct-chapt-graphic").style.paddingTop = "50vh"; 

  }
}
 


function openFooter() {
  var x = document.getElementById("footer-chapter");
  var y = document.getElementById("footer-icon-left");
  if (x.style.marginBottom === "0px") {
    x.style.marginBottom = "150px";
    y.style.background = "url(../svgs/footer-settings-button-up.svg) no-repeat left";
    y.style.backgroundSize = "contain";
 
  
  } else {
    x.style.marginBottom = "0px";
    y.style.background = "url(../svgs/footer-settings-button.svg) no-repeat left";
    y.style.backgroundSize = "contain";

}
}


function openCode() {
  var x = document.getElementById("footer-function-reveal-code");
 // var y = document.getElementById("footer-icon-left");
  if (x.style.height === "0px") {
    x.style.opacity = "1";
    x.style.height ="100px";
   // y.style.background = "url(../svgs/footer-settings-button-up.svg) no-repeat left";
   // y.style.backgroundSize = "contain";
 
  
  } else {
    x.style.opacity = "0";
    x.style.height ="0px";
   // y.style.background = "url(../svgs/footer-settings-button.svg) no-repeat left";
   // y.style.backgroundSize = "contain";
}
}