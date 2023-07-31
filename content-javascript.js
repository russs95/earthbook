window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  if ( document.body.scrollTop > 40 || document.documentElement.scrollTop > 40 ) {
    
    //AFTERmargin-top: -67px;
    document.getElementById("earthbook-navbar").style.height = "60px";
    document.getElementById("ct-chapter-title").style.fontSize = "1.0em";
    document.getElementById("ct-book-title").style.fontSize = "0.66em";
    document.getElementById("ct-book-title").style.marginTop = "0px";
    document.getElementById("ct-chapter-top").style.marginTop = "-86px";    
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
 



  function closeWelcomeNotice() {
    document.getElementById("chap-notice-text").style.display = "none";
    var noticeDiv = document.getElementById("chap-notice");
    var height = noticeDiv.offsetHeight;
    var intervalId = setInterval(function() {
      height -= 10; // Adjust the decrement value to control the speed of the animation
      noticeDiv.style.height = height + "px";
      if (height <= 0) {
        clearInterval(intervalId);
        noticeDiv.style.display = "none";
        localStorage.setItem("hideNotice", "true"); // Store the choice in localStorage
      }
    }, 10); // Adjust the interval value to control the smoothness of the animation
  }

  window.addEventListener("DOMContentLoaded", function() {
    var hideNotice = localStorage.getItem("hideNotice");
    if (hideNotice === "true") {
      document.getElementById("chap-notice").style.display = "none";
    }
  });


/*
function closeWelcomeNotice() {
  document.getElementById("chap-notice").style.display = "none";
  localStorage.setItem("hideNotice", "true"); // Store the choice in localStorage
}

window.addEventListener("DOMContentLoaded", function() {
  var hideNotice = localStorage.getItem("hideNotice");
  if (hideNotice === "true") {
    document.getElementById("chap-notice").style.display = "none";
  }
});
*/



