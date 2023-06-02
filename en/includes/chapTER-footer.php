


<div id="footer-functions-box" style="width:100%; padding-top: 5px;">



<div class="footer-function" >
        <div class="footer-function-main" onclick="openCode()" style="z-index:8;">
            
            <div id="code-down-arrow" style="width: 18px; height: 18px;background: url(../icons/up-arrow.svg) no-repeat center;background-size:contain;margin: auto 15px auto 0;">
            </div>

            <div class="footer-function-item">
              <p>Source Code</p>
            </div>

            <div class="footer-function-item-icon"> 
                <i style="background-image: url(../icons/code.svg);"></i>
            </div>

        </div>

        <div id="footer-function-reveal-code" style="height:0px; opacity:0;">
            <div class="github-source2" style="font-size:0.8em; font-family:Mulish;color:grey;overflow: clip;">Earthbook's are open source. Contribute, correct or fork this Earthbook's code on Github: <a href="https://github.com/russs95/earthbook/blob/main/<?php echo ($lang); ;?>/<?php echo ($name); ;?> " target="_blank" aria-label="Contribute to the code. Go to the Earthbook Github repository for this page:"><br> ➔ github.com/russs95/ earthbook/blob/main/<?php echo ($lang); ;?>/<?php echo ($name); ;?></a>
            </div>
         </div>
      </div>

      <div class="footer-function" >
        <div class="footer-function-main" onclick="openComments()" style="z-index:9;">
            
            <div id="comments-out" style="width: 18px; height: 18px;background: url(../icons/plus.svg) no-repeat center;background-size:contain;margin: auto 15px auto 0;">
            </div>

            <div class="footer-function-item">
              <p>Cite / Comment</p>
            </div>

            <div class="footer-function-item-icon"> 
                <i style="background-image: url(../icons/comments.svg);"></i>
            </div>

        </div> 
      </div>


      
      <div class="footer-function">
        <div class="footer-function-main" style="z-index:10;" onclick="openFooter2()">
        
          <div id="footer-arrow" style="width:18px;height:18px;background:url(../icons/down-arrow.svg) no-repeat center; background-size:contain;margin: auto 10px auto 0;"></div>

            <div class="footer-function-item"><p>Tools & Resources</p></div>
            <div class="footer-function-item-icon">
            <i style="background-image: url(../icons/settings.svg);"></i>
            </div>
          </div>
        </div>
        </div>


      

    </div>


  
<div id="footer-settings">

<div class="footer-size" style="height:58px;">

<div style=""><button type="button" class="footer-settings-icon" style="cursor:pointer" aria-label="Return to the homepage" title="Return to the homepage" onclick="location.href='index.html'" ><img src="../icons/home.svg" alt="home page icon"></button></div>

<!--
  <div style=""><button type="button" class="footer-settings-icon" style="cursor:pointer" onclick="openBookplate()" aria-label="Click to open the bookplate"><img src="../svgs/my-book-header-logo-grey.svg" title="Tractatus Ayyew title page" alt="Tractatus Ayyew Mandala"></button></div>-->
  
  <div style=""><button type="button" class="footer-settings-icon"><img src="../icons/buy.svg" style="cursor:pointer" onclick="openBuy()" alt="Buy icon" aria-label="Click to go to the purchase page" title="Click to go to the purchase page"></button></div>

  <div style=""><button type="button" class="footer-settings-icon"><img src="../icons/search.svg?v=2" alt="Settings icon" style="cursor:pointer" onclick="openSearch()" aria-label="Click to adjust book reading settings" title="Click to adjust book reading settings"></button></div>

  <div style=""><button type="button" class="footer-settings-icon"><img src="../icons/share.svg" alt="share icon" style="cursor:pointer" onclick="openShare()" aria-label="Click to copy the link of the earthBook to share" title="Click to copy the link of the earthBook to share"></button></div>

  <div style=""><button type="button" class="footer-settings-icon"><img src="../icons/tour.svg" alt="Guided Tour" style="cursor:pointer" onclick="guidedTour()" aria-label="Click for a quick Earthbook features tour" title="Click for a quick Earthbook features tour"></button></div>

  <div style=""><button type="button" class="footer-settings-icon"><img src="../svgs/to-the-top-arrow.svg" alt="To the top of page" style="cursor:pointer" onclick="location.href='#top'" aria-label="Go to top of page"></button></div>

 <!-- <div><button type="button" class="footer-settings-icon"><img src="../icons/content.svg" alt="Table of Contents icon" style="cursor:pointer" onclick="openContents()" aria-label="Click to view EarthBook Table of Contents" title="Click to view EarthBook Table of Contents"></button></div>-->

 
  <div style="flex-grow:4; text-align: right;"><button type="button" class="footer-settings-icon"><img src="../icons/eco-green.svg" alt="Our Ecological Tracking, Accounting and disclosure" title="Our Ecological Tracking, Accounting and disclosure" style="cursor:pointer;" aria-label="Open Ecological Accounting" onclick="openEco()"></button></div>

</div>

<div class="footer-size" style="height:30px;">

    <div><button type="button" class="footer-settings-icon" style="cursor:pointer; text-align:left; flex-grow:1; padding-right:8px; padding-top: 10px;padding-bottom: 0px;" onclick="openEarthbook()" aria-label="Learn what an Earthbook is">What is an Earthbook?</button>
    </div>

    <div class="github-source" style="margin-right: 0px;">The Medium is the Message.
    </div>

</div>
</div>

<!--
  <div id="containerSepia"></div>
  <div id="containerContrast"></div>
  <div id="containerBrightness"></div>
            -->

  <script>

function getMainurl() {
  document.getElementById("page-url").innerHTML = window.location.href;
}


// Function to handle click on a highlight
function handleHighlightClick(event) {
  event.stopPropagation();
  const highlight = event.target.closest(".highlight");
  if (highlight) {
    highlight.outerHTML = highlight.innerHTML;
    saveHighlights();
  }
}

// Function to clear the highlights
function clearHighlights() {
  const highlights = document.querySelectorAll(".highlight");
  highlights.forEach(highlight => {
    highlight.outerHTML = highlight.innerHTML;
  });
  saveHighlights();
}

// Function to save highlights to localStorage
function saveHighlights() {
  const highlights = document.querySelectorAll(".highlight");
  const serializedHighlights = Array.from(highlights).map(highlight => highlight.textContent);
  localStorage.setItem("highlights", JSON.stringify(serializedHighlights));
  console.log("Highlights saved:", serializedHighlights);
}

// Function to retrieve highlights from localStorage
function retrieveHighlights() {
  const serializedHighlights = localStorage.getItem("highlights");
  if (serializedHighlights) {
    const highlights = JSON.parse(serializedHighlights);
    //console.log("Highlights retrieved:", highlights);
    
    // Recreate the highlight elements
    highlights.forEach(text => {
      const span = document.createElement("span");
      span.classList.add("highlight");
      span.style.backgroundColor = "green";
      span.style.color = "var(--background-color)";
      span.title = "Lock/unlock highlight";
      span.style.cursor = "pointer";
      span.textContent = text;
      span.addEventListener("click", handleHighlightClick);
      document.body.appendChild(span);
    });
  }
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
      span.title = "Lock/unlock highlight";
      span.style.cursor = "pointer";
      span.textContent = selection.toString();

      // Add event listener to highlight to remove it on click
      span.addEventListener("click", handleHighlightClick);

      // Replace the selected text with the highlighted span element
      const range = selection.getRangeAt(0);
      range.deleteContents();
      range.insertNode(span);

      // Save the highlights
      saveHighlights();
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

// Retrieve and display the saved highlights when the page loads
window.addEventListener("load", retrieveHighlights);



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
  retrieveHighlights();
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


  
