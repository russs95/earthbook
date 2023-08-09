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




  /* WELCOME NOTICE for first time visitors */


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




/*---------------------------------------------------



BOOK NOTES FUNCTIONS



------------------------------------------------*/



let currentId = 0;

function generateId() {
    currentId += 1;
    return String(currentId).padStart(3, '0');
}

    
function checkSelectedText() {
    const selection = window.getSelection();

    // Check if any text is selected
    if (!selection.rangeCount || selection.isCollapsed) {
        return;
    }

    const selectedRange = selection.getRangeAt(0);
    const startContainerParent = selectedRange.startContainer.parentNode;
    const endContainerParent = selectedRange.endContainer.parentNode;

    // Check if the selection is within the #ct-main element
    const ctMainElement = document.getElementById('ct-main');
    if (!ctMainElement.contains(startContainerParent) || !ctMainElement.contains(endContainerParent)) {
        return;
    }

    // Check if the selection does not span more than one paragraph
    if (startContainerParent !== endContainerParent) {
        return;
    }

    saveBookNotePalette();
}

document.addEventListener('mouseup', checkSelectedText);
document.addEventListener('touchend', checkSelectedText);



/* simple version

function checkSelectedText() {
    let selectedText = window.getSelection().toString();
    if (selectedText) { // If some text is selected
        saveBookNotePalette();
    }
}*/

document.addEventListener('mouseup', checkSelectedText);
document.addEventListener('touchend', checkSelectedText);



document.addEventListener('mouseup', function(e) {
    let selectedText = window.getSelection().toString();
    if (selectedText) { // If some text is selected
        saveBookNotePalette();
    }
});


/* Show the Booknotes pallette on text selection, hides after 5 seconds.*/

let paletteTimeout;

function saveBookNotePalette() {
    const palette = document.getElementById('bookNotePalette');
    palette.style.bottom = '-30px'; // Slide up to show the palette

    // Set a timeout to slide down the palette after 5 seconds
    paletteTimeout = setTimeout(() => {
        palette.style.bottom = '-200px'; // Slide down to hide the palette
    }, 5000);

    // Event listeners to clear the timeout if there's interaction with the palette
    palette.addEventListener('click', clearPaletteTimeout);
    palette.addEventListener('mouseenter', clearPaletteTimeout);
}

function clearPaletteTimeout() {
    clearTimeout(paletteTimeout);
}



/*COPY TEXT */

document.getElementById('copyBtn').addEventListener('click', function() {
    let selectedText = window.getSelection().toString();
    copyToClipboard(selectedText);
});

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    // Change button text and style
    const button = document.getElementById('copyBtn');
    button.style.color = 'green';
    button.textContent = '✓ Copied!';

    // Slide down and hide the palette
    setTimeout(() => {
        const palette = document.getElementById('bookNotePalette');
        palette.style.bottom = '-200px'; // Slide down to hide the palette

        // After an additional second, reset the button text
        setTimeout(() => {
            button.textContent = 'Copy';
            button.style.color = 'var(--text-color)';
        }, 1000);
    }, 800);
}




/* MAIN FUNCTION TO PROCESS A SELECTION HIGHLIGHT*/

function highlightBooknote(color) {
    const selection = window.getSelection();

    // Variables for the new requirements
    const highlightColor = color;
    const userNote = "This is an example user note that can be added to the BookNotes for people to read";
    const publicNote = "No";

    // If there's selected text
    if (selection.rangeCount > 0) {
        const selectedRange = selection.getRangeAt(0);
        const span = document.createElement("span");

        // Set the appropriate highlight class based on the color
        switch (highlightColor) {
            case 'green':
                span.classList.add("highlight-green");
                break;
            case 'red':
                span.classList.add("highlight-red");
                break;
            case 'yellow':
                span.classList.add("highlight-yellow");
                break;
            default:
                console.warn(`Unknown highlight color: ${highlightColor}`);
                return; // Exit the function
        }

        span.title = "Click to remove BookNote"; 
        span.alt = "Highlight"; 

        const id = generateId();
        span.dataset.id = id;
        selectedRange.surroundContents(span);

        let startContainerNode = selectedRange.startContainer;
        while (startContainerNode.nodeName !== 'P' && startContainerNode.parentNode !== null) {
            startContainerNode = startContainerNode.parentNode;
        }

        const startContainer = startContainerNode.id;
        const containerHTML = startContainerNode.innerHTML;
        const storedText = selection.toString();

        alert(
            `Start Container: ${startContainer}\n` +
            `Stored Text: ${storedText}\n` +
            `Container HTML: ${containerHTML}`
        );

        const charCount = storedText.length;
        const now = new Date();
        const BNdateTime = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}T${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        const noteChapter = chapName;

        let bookNotes = getBookNotesFromLocalStorage();

        const bookNote = {
            id,
            book,
            chapNo,
            chapName,
            chaptURL,
            startContainer,
            containerHTML,
            storedText,
            noteChapter,
            charCount,
            BNdateTime,
            highlightColor, // Added
            userNote,       // Added
            publicNote      // Added
        };

        bookNotes.push(bookNote);
        saveBookNotesToLocalStorage(bookNotes);

        console.log('BookNote saved:', bookNote);
        selection.removeAllRanges();
        updateButtonAndPalette();
    }
}


// Sub-function to get existing bookNotes or an empty array if none exist
function getBookNotesFromLocalStorage() {
    try {
        return JSON.parse(localStorage.getItem('bookNotes')) || [];
    } catch (error) {
        console.error('Error reading bookNotes from local storage:', error);
        return [];
    }
}

// Sub-function to save bookNotes to local storage
function saveBookNotesToLocalStorage(bookNotes) {
    try {
        localStorage.setItem('bookNotes', JSON.stringify(bookNotes));
    } catch (error) {
        console.error('Error saving bookNotes to local storage:', error);
    }
}


// Sub-function to update button visuals and behavior post-highlighting

function updateButtonAndPalette() {
    const saveTextDiv = document.getElementById('save-text');
    saveTextDiv.style.color = 'green';
    saveTextDiv.style.fontWeight = 'bold';
    saveTextDiv.textContent = '✓ Saved!';

    setTimeout(() => {
        const palette = document.getElementById('bookNotePalette');
        palette.style.bottom = '-200px';

        setTimeout(() => {
            saveTextDiv.textContent = 'Save:';
            saveTextDiv.style.color = 'var(--thin-border-color)';
            saveTextDiv.style.fontWeight = 'normal';
        }, 1000);
    }, 1000);
}


document.getElementById('highlightSaveButton').addEventListener('click', highlightBooknote);




/* ATTEMPT TO REMOVE HIGHLIGHTS AFTER A CLIC*/

function removeHighlight(event) {
    const element = event.target;
    alert('hello!');
    
    // Check if the clicked element has any of the highlight classes
    if (element.classList.contains('highlight-green') ||
        element.classList.contains('highlight-red') ||
        element.classList.contains('highlight-yellow')) {
        
        const id = element.dataset.id;

        // Get the bookNotes from local storage
        let bookNotes = JSON.parse(localStorage.getItem('bookNotes')) || [];

        // Find the index of the bookNote with the given id
        const index = bookNotes.findIndex(bookNote => bookNote.id === id);

        if (index !== -1) {
            // If the bookNote was found, remove it
            bookNotes.splice(index, 1);

            // Save the updated array back to local storage
            localStorage.setItem('bookNotes', JSON.stringify(bookNotes));

            console.log('BookNote removal success');
        } else {
            console.log('BookNote removal failed');
        }

        // Replace the span with its text content
        const text = document.createTextNode(element.textContent);
        element.parentNode.replaceChild(text, element);
    }
}

// Add a click event listener to the document
document.addEventListener('click', removeHighlight);



/*ATTEMPT TO REESTABLISHED PAGE HIGHLIGHTS ON RELOAD*/

function recreateHighlights() {
    const bookNotes = JSON.parse(localStorage.getItem('bookNotes')) || [];
    alert('Hi!');

    bookNotes.forEach(note => {
        const { containerHTML, startContainer, id } = note;

        if (containerHTML && startContainer && id) {
            try {
                // Find the element by the saved ID
                const container = document.getElementById(startContainer);

                if (container) {
                    container.innerHTML = containerHTML; // Replace the innerHTML with the saved HTML (with highlights)
                } else {
                    console.error('Error: Container element not found for the following book note:', note);
                }
            } catch (err) {
                console.error('An error occurred while recreating highlights for the following book note:', note);
                console.error(err);
            }
        } else {
            console.warn('Warning: Incomplete book note data. Ignoring the following book note:', note);
        }
    });
}
window.onload = function() {
    recreateHighlights();
}

// Make sure this is after recreateSelection
document.addEventListener('click', removeHighlight);


function createElementWithAttributes(type, attributes = {}) {
    const element = document.createElement(type);
    for (const key in attributes) {
        if (attributes.hasOwnProperty(key)) {
            element[key] = attributes[key];
        }
    }
    return element;
}



/* THIS CREATES THE BOOK NOTES CURTAIN and list of svaed highlights*/

function bookNotesCreator() {
    // Retrieve existing bookNotes from local storage
    let bookNotes;
    try {
        bookNotes = JSON.parse(localStorage.getItem('bookNotes')) || [];
    } catch (e) {
        console.error('Error parsing bookNotes from localStorage:', e);
        bookNotes = [];
    }

    // Get the book-notes-list div
    const bookNotesListDiv = document.getElementById('book-notes-list');

    // Clear existing children
    bookNotesListDiv.innerHTML = '';

    // Iterate through each book note and create the HTML structure
    bookNotes.forEach((bookNote, index) => {
        const bookNoteDiv = createElementWithAttributes('div', { id: `booknote-${index + 1}` });

        const tcItemDiv = createElementWithAttributes('div', { className: 'tc-item' });

        const chapterNameDiv = createElementWithAttributes('div', {
            className: 'chapter-name-bn',
            textContent: bookNote.storedText
        });

        const wordCountDiv = createElementWithAttributes('div', { className: 'word-count-tc' });

        const chapterLink = createElementWithAttributes('a', { href: bookNote.chaptURL });
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




/*RESETS all boonotes cache, clear page of highlights*/


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


