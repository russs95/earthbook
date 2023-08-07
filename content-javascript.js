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


   // Function to open the welcome notice
   function openWelcomeNotice() {
    // Check if hideNotice is set to true in the browser cache (localStorage)
    const hideNotice = localStorage.getItem("hideNotice");
    if (!hideNotice || hideNotice !== "true") {
      // Set the display property to block to show the notice
      document.getElementById("chap-notice").style.display = "block";

      // Trigger a reflow to force the transition to work
      void document.getElementById("chap-notice").offsetHeight;

      // Set the height property to 'fit-content' to smoothly transition the height
      document.getElementById("chap-notice").style.height = "fit-content";
    }
  }

  // Call the openWelcomeNotice function after 5 seconds of page load
  setTimeout(openWelcomeNotice, 5000);




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


/*

let highlightClass = 'highlight';
let preHighlightClass = 'pre-highlight';
let selectedRange;


document.addEventListener("DOMContentLoaded", function() {


function getSelectedRange() {
        if (window.getSelection) {
            let sel = window.getSelection();
            if (sel.rangeCount) {
                return sel.getRangeAt(0);
            }
        } else if (document.selection && document.selection.createRange) {
            return document.selection.createRange();
        }
        return null;
    }

function clearSelection() {
        if (window.getSelection) {
            window.getSelection().removeAllRanges();
        } else if (document.selection) {
            document.selection.empty();
        }
    }



function handleDesktopSelection() {
    const spanDelay = 1000; //  delay before removing user's text selection
    const removeSpanDelay = 3000; //  delay before removing the span formatting

    selectedRange = getSelectedRange();
    if (selectedRange && selectedRange.toString().trim().length > 0) {
      let span = document.createElement('span');
      span.classList.add('pre-highlight'); // Add the class for the transition effect
      span.title = "Click this text to highlight and save.";
      span.textContent = selectedRange.toString(); // Preserve the selected text content

      // Add the alt attribute (optional but recommended for accessibility)
      span.setAttribute('alt', "Click this text to highlight and save.");

      selectedRange.deleteContents();
      selectedRange.insertNode(span);

      // Remove the user's text selection after 3 seconds
      setTimeout(clearSelection, spanDelay);

      // Remove the span formatting after 3 seconds if not clicked
      setTimeout(() => {
        if (!span.clicked) {
          const parent = span.parentNode;
          parent.replaceChild(document.createTextNode(span.textContent), span);
        }
      }, removeSpanDelay);
    }
  }

  // Add a click event listener to the document to detect if the span is clicked
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('pre-highlight')) {
      event.target.clicked = true;
      alert('pass to handledesktopselection');
    }
  });



  function handleMobileSelection() {
    selectedRange = getSelectedRange();
  
    const spanDelay = 5000; //  delay before removing user's text selection
    const removeSpanDelay = 10000; //  delay before removing the span formatting

    selectedRange = getSelectedRange();
    if (selectedRange && selectedRange.toString().trim().length > 0) {
      let span = document.createElement('span');
      span.classList.add('pre-highlight'); // Add the class for the transition effect
      span.title = "Double click this text to highlight and save.";
      span.textContent = selectedRange.toString(); // Preserve the selected text content

      // Add the alt attribute (optional but recommended for accessibility)
      span.setAttribute('alt', "Doublelick this text to highlight and save.");

      selectedRange.deleteContents();
      selectedRange.insertNode(span);

      // Remove the user's text selection after 3 seconds
      setTimeout(clearSelection, spanDelay);

      // Remove the span formatting after 3 seconds if not clicked
      setTimeout(() => {
        if (!span.clicked) {
          const parent = span.parentNode;
          parent.replaceChild(document.createTextNode(span.textContent), span);
        }
      }, removeSpanDelay);
    }
  

  
  }

  

  document.addEventListener('mouseup', handleDesktopSelection);
  document.addEventListener('touchend', handleMobileSelection);


// Add both click and touchend listeners
document.addEventListener('click', handleHighlightEvent);
document.addEventListener('touchend', handleHighlightEvent);



        
    
  
     // This function is triggered when an event occurs. It checks if the event's target (the element that triggered the event)
// has a certain CSS class (preHighlightClass or highlightClass). If it does, it removes preHighlightClass and toggles 
// the highlightClass (adds the class if it doesn't have it, and removes it if it does).
function handleHighlightEvent(e) {
  if (e.target.classList.contains(preHighlightClass) || e.target.classList.contains(highlightClass)) {
    e.target.classList.remove(preHighlightClass);
    e.target.classList.toggle(highlightClass);

      
          // If the target element contains the highlight class, this means the text has been selected for highlighting. 
// The function then creates a range object to select the contents of the target node and get the user's selection.
// If there is a selection, it removes all ranges from the selection and adds the new range.
    if (e.target.classList.contains(highlightClass)) {
      const range = document.createRange();
      range.selectNodeContents(e.target);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);

      // If there is a selection range, the function gets the first range and calculates the start offset of the selection, 
// i.e., where the selection starts in the text. This is done by iterating over all text nodes in the parent node 
// of the start container of the selected range and adding their lengths to the startOffset. The final startOffset 
// is increased by the startOffset of the selectedRange itself.

            if (selection.rangeCount > 0) {
              const selectedRange = selection.getRangeAt(0);
              const startContainer = selectedRange.startContainer.parentNode.id;
      
              // Calculate startOffset considering only text nodes inside the selected paragraph
              let startOffset = 0;
              let node = selectedRange.startContainer.parentNode.firstChild;
              while (node && node !== selectedRange.startContainer) {
                if (node.nodeType === Node.TEXT_NODE) {
                  startOffset += node.length;
                }
                node = node.nextSibling;
              }
              startOffset += selectedRange.startOffset;
      
              const storedNoteText = selection.toString();
              const charCount = storedNoteText.length; // Counting characters
              const now = new Date();
              const BNdateTime = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}T${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
              const noteChapter = chapName; // Using the global variable
      
              // Retrieve existing bookNotes from local storage
              let bookNotes = JSON.parse(localStorage.getItem('bookNotes')) || [];
      
              // New highlight object
              const bookNote = {
                book,
                chapNo,
                chapName,
                chaptURL,
                startContainer,
                startOffset,
                storedNoteText,
                noteChapter,
                charCount,
                BNdateTime
              };
      
              // Add the new highlight to the array
              bookNotes.push(bookNote);
      
              // Save the updated array back to local storage
              localStorage.setItem('bookNotes', JSON.stringify(bookNotes));
      
              // Log to console instead of alert
              console.log('BookNote saved:', bookNote);

             
            }
            
            //updateBNResetButton();
            e.target.title = "This quotation is saved in your Book Notes";
            window.getSelection().removeAllRanges();
          } else {
            setTimeout(() => removeHighlight(e), 1000);
          }
        }
      }
      




function removeHighlight() {
  const highlightClass = 'highlight';

  // Define the click handler function
  function handleClick(event) {
    const span = event.target.closest('.' + highlightClass);
    if (span) {
      const text = span.textContent; // Store the span's text content

      // Replace the span's outerHTML with its textContent
      // This effectively removes the span and leaves only the text
      span.outerHTML = text;

      // Remove the corresponding book note from the array
      let bookNotes = JSON.parse(localStorage.getItem('bookNotes')) || [];
      bookNotes = bookNotes.filter(note => {
        return !(note.startContainer === span.parentNode.id && note.storedNoteText.length === text.length);
      });

      localStorage.setItem('bookNotes', JSON.stringify(bookNotes));
    }
  }

  // Add the click event listener to elements with the highlight class
  const elementsWithHighlight = document.querySelectorAll('.' + highlightClass);
  elementsWithHighlight.forEach(element => {
    element.addEventListener('click', handleClick);
  });

  // Add the touchend event listener to elements with the highlight class
  elementsWithHighlight.forEach(element => {
    element.addEventListener('touchend', handleClick);
  });
}


});

*/

  /*
    // Check if the selection is within the div with id 'ct-main'
    if (selectedRange && selectedRange.commonAncestorContainer.closest('#ct-main') && selectedRange.toString().trim().length > 0) {
      let span = document.createElement('span');
      span.style.cursor = 'pointer';
      span.classList.add(preHighlightClass);
      span.title = "Click this text to highlight and save.";
      selectedRange.surroundContents(span);
      clearSelection();
    }*/

function bookNotesCreator() {
// Retrieve existing bookNotes from local storage
const bookNotes = JSON.parse(localStorage.getItem('bookNotes')) || [];

// Get the book-notes-list div
const bookNotesListDiv = document.getElementById('book-notes-list');

// Clear existing children
bookNotesListDiv.innerHTML = '';

// Iterate through each book note and create the HTML structure
bookNotes.forEach((bookNote, index) => {
const bookNoteDiv = document.createElement('div');
bookNoteDiv.id = `booknote-${index + 1}`;

const tcItemDiv = document.createElement('div');
tcItemDiv.className = 'tc-item';

const chapterNameDiv = document.createElement('div');
chapterNameDiv.className = 'chapter-name-bn';
chapterNameDiv.textContent = bookNote.storedNoteText;

const wordCountDiv = document.createElement('div');
wordCountDiv.className = 'word-count-tc';

const chapterLink = document.createElement('a');
chapterLink.href = bookNote.chaptURL;
chapterLink.innerHTML = `<i>${bookNote.chapName}</i><br>
<span style="font-size:small;">${bookNote.book}, Chapt.${bookNote.chapNo}<br>
${bookNote.charCount} characters<br>
${bookNote.BNdateTime}</span>`;

wordCountDiv.appendChild(chapterLink);

tcItemDiv.appendChild(chapterNameDiv);
tcItemDiv.appendChild(wordCountDiv);

bookNoteDiv.appendChild(tcItemDiv);

bookNotesListDiv.appendChild(bookNoteDiv);
});
}


function recreateSelection() {
  const bookNotes = JSON.parse(localStorage.getItem('bookNotes')) || [];

  bookNotes.forEach(note => {
    const { storedNoteText, startContainer, startOffset } = note;

    if (storedNoteText && startContainer && startOffset !== null) {
      try {
        // Find the element by the saved ID
        const container = document.getElementById(startContainer);

        if (container) {
          // Traverse through text nodes to find the correct position
          let node = container.firstChild;
          let currentOffset = 0;

          while (node) {
            if (node.nodeType === Node.TEXT_NODE) {
              if (currentOffset + node.length >= startOffset) {
                break;
              }
              currentOffset += node.length;
            }
            node = node.nextSibling;
          }

          if (node) {
            const range = document.createRange();
            range.setStart(node, startOffset - currentOffset);
            range.setEnd(node, startOffset - currentOffset + storedNoteText.length);

            const span = document.createElement('span');
            span.className = 'highlight';
            span.textContent = storedNoteText;

            range.deleteContents();
            range.insertNode(span);

            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            selection.collapseToEnd();
          } else {
            console.error('Error: Stored text not found for the following book note:', note);
          }
        } else {
          console.error('Error: Container element not found for the following book note:', note);
        }
      } catch (err) {
        console.error('An error occurred while recreating selection for the following book note:', note);
        console.error(err);
      }
    } else {
      console.warn('Warning: Incomplete book note data. Ignoring the following book note:', note);
    }
  });
}


// Attach the showAlertWithCharacterCount and recreateSelection functions to the window load event
window.addEventListener('load', function () {
// showAlertWithCharacterCount();
recreateSelection();
});



function resetBookNotes() {
  // Clear the booknotes array from local storage
  localStorage.removeItem('bookNotes');

  // Clear the content of the book-notes-list div
  const bookNotesListDiv = document.getElementById('book-notes-list');
  bookNotesListDiv.innerHTML = '';

  // Remove the span formatting from all spans with class "highlight"
  const allHighlightSpans = document.querySelectorAll('span.highlight');
  allHighlightSpans.forEach(span => {
    const textNode = document.createTextNode(span.textContent);
    span.parentNode.replaceChild(textNode, span);
  });

  // Update the text inside the reset-settings-bn div
  const resetSettingsBnDiv = document.getElementById('reset-settings-bn');
  resetSettingsBnDiv.textContent = 'No BookNotes saved';

  // Update the text inside the instruction-bn div
  const instructionBnDiv = document.getElementById('instructions-bn');
  instructionBnDiv.textContent = 'Highlight then click text in the Earthbook to save it to your Booknotes';
}

function updateBNResetButton() {
  // Check if there are any entries in the bookNotes array
  const bookNotes = JSON.parse(localStorage.getItem('bookNotes')) || [];
  const hasBookNotes = bookNotes.length > 0;
  console.log('Has book notes:', hasBookNotes);

  if (hasBookNotes) {
    // Clear the content of the instruction-bn div
    const instructionBnDiv = document.getElementById('instructions-bn');
    instructionBnDiv.textContent = '';

    // Add the text "⟲ Clear All BookNotes" to the reset-settings-bn div
    const resetSettingsBnDiv = document.getElementById('reset-settings-bn');
    resetSettingsBnDiv.textContent = '⟲ Clear All BookNotes';
  }
}

