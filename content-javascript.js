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
 

function openFootnotes() {
  var w = document.getElementById("footer-reveal-container");
  var x = document.getElementById("footnotes-reveal");
  var y = document.getElementById("footnotes-arrow");
  var z = document.getElementById("footnotes-concealer");

  


  if (x.style.height === "200px") {
    w.style.height = "100%";
    x.style.height = "100%";
    x.style.marginBottom = "230px";
    y.style.background = "url(../icons/up-arrow.svg) no-repeat center";
    y.style.backgroundSize = "contain";
    z.style.opacity = "0";
    

 
  
  } else {
    w.style.height = "10%";
    x.style.height = "200px";
    x.style.marginBottom = "50px";
    y.style.background = "url(../icons/down-arrow.svg) no-repeat center";
    y.style.backgroundSize = "contain";
    z.style.opacity = "1";
}
}


function openCode() {
  var x = document.getElementById("footer-function-reveal-code");
  var y = document.getElementById("code-down-arrow");
  if (x.style.opacity === "0") {
    x.style.opacity = "1";
    x.style.height = "130px";
    y.style.background = "url(../icons/down-arrow.svg) no-repeat center";
    y.style.backgroundSize = "contain";
  
  } else {
    x.style.opacity = "0";
    x.style.height = "0px";
    y.style.background = "url(../icons/up-arrow.svg) no-repeat center";
    y.style.backgroundSize = "contain";
}
}



function openFooter2() {
  var x = document.getElementById("footer-chapter");
  var z = document.getElementById("footer-arrow");
  if (x.style.marginBottom === "0px") {
    x.style.marginBottom = "145px";
   z.style.background = "url(../icons/up-arrow.svg) no-repeat center";
  z.style.backgroundSize = "contain";
 
  } else {
    x.style.marginBottom = "0px";
  z.style.background = "url(../icons/down-arrow.svg) no-repeat center";
  z.style.backgroundSize = "contain";

}
}



// Function to handle click on a highlight
function handleHighlightClick(event) {
  event.stopPropagation();
  const highlight = event.target.closest(".highlight");
  if (highlight) {
    highlight.outerHTML = highlight.innerHTML;
  }
}

// Function to clear the highlights
function clearHighlights() {
  const highlights = document.querySelectorAll(".highlight");
  highlights.forEach(highlight => {
    highlight.outerHTML = highlight.innerHTML;
  });
}

// Add event listeners to all text nodes in the document
const textNodes = document.querySelectorAll("*:not(script):not(style)");
textNodes.forEach(node => {
  node.addEventListener("mouseup", () => {
    const selection = window.getSelection();
    if (selection.toString().length > 0) {
      // Clear any existing temporary highlight
      clearTemporaryHighlight();

      // Create a span element to wrap the selected text
      const span = document.createElement("span");
      span.classList.add("highlight");
      span.style.backgroundColor = "green";
      span.style.color = "var(--background-color)";
      span.title = "Click here to lock highlight";
      span.style.cursor = "pointer";
      span.textContent = selection.toString();

      // Add event listener to highlight to remove it on click
      span.addEventListener("click", handleHighlightClick);

      // Replace the selected text with the highlighted span element
      const range = selection.getRangeAt(0);
      range.deleteContents();
      range.insertNode(span);
    }
  });
});

// Function to clear the temporary highlight
function clearTemporaryHighlight() {
  const temporaryHighlight = document.querySelector(".highlight.temporary");
  if (temporaryHighlight) {
    temporaryHighlight.outerHTML = temporaryHighlight.innerHTML;
  }
}

// Add event listener to remove temporary highlight on click elsewhere on the page
document.addEventListener("click", clearTemporaryHighlight);



