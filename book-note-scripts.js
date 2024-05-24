
/*---------------------------------------------------

BOOK NOTES FUNCTIONS

------------------------------------------------*/


let lastUsedBookNoteId = null;


/*RECREATE from the cache the hilights*/

document.addEventListener("DOMContentLoaded", function(event) {
   // alert('DOM fully loaded and parsed');
    recreateHighlights();
});
     
    
    /*RE-ESTABLISHED PAGE HIGHLIGHTS ON RELOAD*/
    
    function recreateHighlights() {
    
    const bookNotes = JSON.parse(localStorage.getItem('bookNotes')) || [];
    bookNotes.forEach(note => {
        const { containerHTML, startContainer, id } = note;
    
        if (containerHTML && startContainer && id) {
            try {
                // Find the element by the saved ID
                const container = document.getElementById(startContainer);
    
                if (container) {
                    container.innerHTML = containerHTML; // Replace the innerHTML with the saved HTML (with highlights)
                } else {
                   // console.error('Error: Container element not found for the following book note:', note);
                }
            } catch (err) {
                console.error('An error occurred while recreating highlights for the following book note:', note);
                //console.error(err);
            }
        } else {
            console.warn('Warning: Incomplete book note data. Ignoring the following book note:', note);
        }
    });
    }



// ID GENERATOR with 3 zeros

function generateId() {
    const storedBookNotes = getBookNotesFromLocalStorage();

    if (storedBookNotes && storedBookNotes.length > 0) {
        // Convert all the existing IDs to numbers, find the maximum value, and add 1
        const newIdNumber = Math.max(...storedBookNotes.map(note => Number(note.id))) + 1;
        return String(newIdNumber).padStart(3, '0');
    } else {
        // If bookNotes is empty or doesn't exist, start with ID '001'
        return '001';
    }
}

function getBookNotesFromLocalStorage() {
    return JSON.parse(localStorage.getItem('bookNotes')) || [];
}




let lastSelectedText = '';
let lastSelectedRange = null;

//CHECKS TO SEE IF THE TEXT CAN BE HIGHLIGHTED
function checkSelectedText() {
    const selection = window.getSelection();
    
    // Reset the last selected range and text
   // lastSelectedRange = null;
  //  lastSelectedText = '';
    
    // Check if any text is selected
    if (!selection.rangeCount || selection.isCollapsed) {
        hidePaletteIfNeeded();
        return;
    }
    
    lastSelectedText = selection.toString();
    lastSelectedRange = selection.getRangeAt(0);

    if (isSelectionValid(lastSelectedRange)) {
        document.getElementById('palletteBar').style.display = "flex";
        document.getElementById('bookNotePalette').style.bottom = '-370px';  // Valid text selected within constraints
    } else {
        selection.removeAllRanges();
    }
}

function hidePaletteIfNeeded() {
    const palette = document.getElementById('bookNotePalette');
    const currentBottom = window.getComputedStyle(palette).bottom;
    if (currentBottom !== "-10px") {
        palette.style.bottom = '-500px';
    }
}

function isSelectionValid(range) {
    const startContainerParent = range.startContainer.parentNode;
    const endContainerParent = range.endContainer.parentNode;
    
    // Check if the selection is within the #ct-main element
    const ctMainElement = document.getElementById('ct-main');
    if (!ctMainElement.contains(startContainerParent) || !ctMainElement.contains(endContainerParent)) {
        return false;
    }

    // Check if the selection does not span more than one paragraph
    if (startContainerParent !== endContainerParent) {
        alert("Sorry!  Currently you can't select and highlight text in more than one paragraph or that contains more than one style.");
        return false;
    }
    
    return true;
}


// Event listeners to listen for text being selected.  Is this sufficient for iphones?
document.addEventListener('mouseup', checkSelectedText);
//document.addEventListener('touchend', checkSelectedText);

document.addEventListener('touchend', function() {
    setTimeout(function() {  // Using a timeout to ensure the selection is processed
        const selection = window.getSelection().toString();
        if (selection.length > 0) {
            // Call your function here
            checkSelectedText();
        }
    }, 1);
});


document.addEventListener('touchend', function(event) {
    setTimeout(function() {
        const selection = window.getSelection().toString();
        if (selection.length > 0) {
            // Prevent default behavior (like showing the context menu)
            //event.preventDefault();

            // Call your function here
            checkSelectedText();
        }
    }, 1);
});



/*COPY TEXT */
document.getElementById('copyBtn').addEventListener('click', function() {
    copyToClipboard(lastSelectedText);
});



function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    // Change button text and style ✓
    if (window.matchMedia("(min-width: 701px)").matches) {
        // Change button text and style for devices with a max-width of 699px
        const button = document.getElementById('copyBtn');
        //button.style.color = 'green';
        //button.style.backgroundImage = 'none';
        button.textContent = ' ✓ Copied!';

         // After an additional 2 second, reset the button text
         setTimeout(() => {
            button.textContent = 'Copy';
            button.style.color = 'var(--subdued-text)';
            //button.style.background = 'var(--deeper-accent-color) url(icons/copy.svg) 15px center no-repeat;';
        }, 2000);
    }

      // Change button text and style ✓
      if (window.matchMedia("(max-width: 700px)").matches) {
        // Change button text and style for devices with a max-width of 699px
        const button = document.getElementById('copyBtn');
        button.style.backgroundColor = 'green';
        //button.style.backgroundImage = 'none';
        //button.textContent = ' ✓ Copied!';

         // After an additional 2 second, reset the button text
         setTimeout(() => {
            button.style.backgroundColor = 'var(--deeper-accent-color)';

            //button.style.background = 'var(--deeper-accent-color) url(icons/copy.svg) 15px center no-repeat;';
        }, 200);
    }

    // Slide down and hide the palette
    setTimeout(() => {
        const palette = document.getElementById('bookNotePalette');
        palette.style.bottom = '-500px'; // Slide down to hide the palette
    }, 1200);
}




document.addEventListener('DOMContentLoaded', function() {
    const colorButtons = document.querySelectorAll('.color-btn');

    colorButtons.forEach(btn => {
        btn.addEventListener('click', function(event) {
            const colorString = event.target.getAttribute('data-color');
            highlightBooknote(colorString);
        });
    });
});

function highlightBooknote(color) {
    const textToHighlight = lastSelectedText;

    if (textToHighlight.length > 0 && lastSelectedRange) {
        const span = document.createElement("span");

        switch (color) {
            case 'green':
                span.classList.add("highlight-green");
                break;
            case 'red':
                span.classList.add("highlight-red");
                break;
            case 'blue':
                span.classList.add("highlight-blue");
                break;
            case 'yellow':
                span.classList.add("highlight-yellow");
                break;
            default:
                console.warn(`Unknown highlight color: ${color}`);
                return;
        }

        span.title = "Click to view BookNote"; 
        span.alt = "Highlight"; 

        const id = generateId();
        span.dataset.id = id;
        span.setAttribute('onclick', `viewHighlightInfo('${id}')`);

        lastSelectedRange.surroundContents(span);

        let startContainerNode = lastSelectedRange.startContainer;
        while (startContainerNode.nodeName !== 'P' && startContainerNode.parentNode !== null) {
            startContainerNode = startContainerNode.parentNode;
        }

        const startContainer = startContainerNode.id;
        const containerHTML = startContainerNode.innerHTML;
        const storedText = textToHighlight;

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
            highlightColor: color,
            userNote: "",
            publicNote: "No"
        };

        bookNotes.push(bookNote);
        saveBookNotesToLocalStorage(bookNotes);
        console.log('BookNote saved:', bookNote);

        window.getSelection().removeAllRanges();

        if (color !== 'yellow') {
            updateButtonAndPalette();
        } else {
            // Adjust the height of the palette for 'yellow' case
            document.getElementById('bookNotePalette').style.bottom = "-10px";
            document.getElementById('palletteBar').style.display = "none";
            lastUsedBookNoteId = id;  // Store the last used ID
        }

        // Clear the lastSelectedRange to ensure no accidental re-highlighting.
        lastSelectedRange = null;
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
        const containerHTML = JSON.stringify(bookNotes);
        localStorage.setItem('bookNotes', containerHTML);
        
    } catch (error) {
        console.error('Error saving bookNotes to local storage:', error);
    }
}


// Sub-function to update button visuals and behavior post-highlighting

function updateButtonAndPalette() {
    const saveTextDiv = document.getElementById('save-text');
    saveTextDiv.style.color = 'green';
    saveTextDiv.style.fontWeight = 'bold';
    saveTextDiv.textContent = 'Saved!';

    setTimeout(() => {
        const palette = document.getElementById('bookNotePalette');
        palette.style.bottom = '-500px';

        setTimeout(() => {
            saveTextDiv.textContent = 'Save:';
            saveTextDiv.style.backgroundColor = 'none';
            saveTextDiv.style.fontWeight = 'normal';
            saveTextDiv.style.color = 'var(--text-color)';

        }, 1000);
    }, 2000);
}


//document.getElementById('highlightSaveButton').addEventListener('click', highlightBooknote);



/* REMOVE HIGHLIGHTS AFTER A CLIC ON THE HIGHLIGHT*/

function removeHighlight(event) {
    const element = event.target;
    
    // Check if the clicked element has any of the highlight classes
    if (element.classList.contains('highlight-green') ||
    element.classList.contains('highlight-red') ||
    element.classList.contains('highlight-blue') ||
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



function createElementWithAttributes(type, attributes = {}) {
    const element = document.createElement(type);
    for (const key in attributes) {
        if (attributes.hasOwnProperty(key)) {
            element[key] = attributes[key];
        }
    }
    return element;
}



/*RESETS all boonotes cache, clear page of highlights*/

function resetBookNotes() {
    // Ask the user for confirmation before proceeding
    const confirmation = window.confirm("This will delete all your saved highlights and annotations for all chapters of the Earthbook. Are you sure you want to proceed?");
    
    // If the user clicks "OK", proceed with the reset
    if (confirmation) {
      // Clear the booknotes array from local storage
      localStorage.removeItem('bookNotes');
  
      // Clear the content of the book-notes-list div
      const bookNotesListDiv = document.getElementById('book-notes-list');
      bookNotesListDiv.innerHTML = '';
  
      // Remove the span formatting from all spans with the specified highlight classes
      const highlightClasses = ['highlight-red', 'highlight-yellow', 'highlight-blue', 'highlight-green'];
      const selector = highlightClasses.map(cls => `span.${cls}`).join(', ');
  
      const allHighlightSpans = document.querySelectorAll(selector);
      allHighlightSpans.forEach(span => {
          const textNode = document.createTextNode(span.textContent);
          span.parentNode.replaceChild(textNode, span);
      });
  
      // Update the text inside the reset-settings-bn div
      const resetSettingsBnDiv = document.getElementById('reset-settings-bn');
      resetSettingsBnDiv.textContent = 'No BookNotes are saved';
  
      // Update the text inside the instruction-bn div
      const instructionBnDiv = document.getElementById('instructions-bn');
      instructionBnDiv.textContent = 'Highlight then click text in the Earthbook to save it to your Booknotes';
    } else {
      // If the user clicks "Cancel", do nothing
      console.log('Reset cancelled by the user.');
    }
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





/* Download Booknotes */


function downloadBooknotes() {
    // 1. Retrieve the data from localStorage
    const bookNotes = localStorage.getItem('bookNotes');

    // 2. Convert the JSON data to a Blob
    const blob = new Blob([bookNotes], { type: "application/json" });

    // 3. Generate a download link
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';  // Hide the link
    a.href = url;
    a.download = 'my-tractatus-ayyew-booknotes.json';  // Suggest a filename for the download

    // Append the anchor to the document and trigger a click to start the download
    document.body.appendChild(a);
    a.click();

    // 5. Clean up: remove the anchor and revoke the Blob URL
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}


/*UPload Booknotes */

function uploadBooknotes() {
    const input = document.getElementById('jsonUpload');

    if (!input.files.length) {
        alert('Please select a file to upload.');
        return;
    }

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        try {
            // 3. Parse the data to ensure it's valid JSON
            const jsonData = JSON.parse(event.target.result);

            // Validation - Make sure the data is in the format you expect
            // (Add more checks as needed based on your data structure)
            if (Array.isArray(jsonData)) {
                // 4. Save to localStorage
                localStorage.setItem('bookNotes', JSON.stringify(jsonData));
                alert('Booknotes uploaded successfully!  All imported annotations and highlights will now be added to the Earthbook.');

                // You might want to call your function to re-render the booknotes on the page
                recreateHighlights();
                closeBooknotes();

            } else {
                alert('Invalid file format. Please upload a valid booknotes JSON file.');
            }
        } catch (e) {
            alert('There was an error reading the file. Please ensure it is a valid JSON file.');
        }
    };

    // 2. Read the file
    reader.readAsText(file);
}



/*---------------------

BOOK NOTES CREATOR SCRIPTS


-------------------*/



/*
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

    // • Iterate through each book note and create the HTML structure
    bookNotes.forEach((bookNote, index) => {
        const bookNoteDiv = createElementWithAttributes('div', { id: `booknote-${index + 1}` });
        const tcItemDiv = createElementWithAttributes('div', { className: 'tc-item' });

        const chapterNameDiv = createElementWithAttributes('div', { className: 'chapter-name-bn' });

        const bulletColor = bookNote.highlightColor === 'blue' ? '#2daee5' : bookNote.highlightColor;
        
        const bulletSpanHtml = `<div style="display:flex;flex-flow:row;"><span style="padding-right:5px;color:${bulletColor};">●   </span>`;
        
        
        chapterNameDiv.innerHTML = bulletSpanHtml + ` "${bookNote.storedText}"</div><span style="padding-top: 10px; color:grey;font-size:smaller"> — Noted ${bookNote.BNdateTime}: ${bookNote.userNote}</span>`;


        

        const wordCountDiv = createElementWithAttributes('div', { className: 'word-count-tc' });
        const chapterLink = createElementWithAttributes('a', { href: bookNote.chaptURL });
        chapterLink.innerHTML = `<i>${bookNote.chapName}</i><br>
        <span style="font-size:small;">${bookNote.book}, Chapt.${bookNote.chapNo}<br>
        ${bookNote.charCount} chars.</span>`;

        wordCountDiv.appendChild(chapterLink);
        tcItemDiv.appendChild(chapterNameDiv);
        tcItemDiv.appendChild(wordCountDiv);
        bookNoteDiv.appendChild(tcItemDiv);
        bookNotesListDiv.appendChild(bookNoteDiv);
    });
}

*/



//Modular version

function bookNotesCreator() {
    const bookNotes = getBookNotesFromLocalStorage();

    const bookNotesListDiv = document.getElementById('book-notes-list');
    bookNotesListDiv.innerHTML = '';

    bookNotes.forEach((bookNote, index) => {
        const bookNoteDiv = createBookNoteDiv(bookNote, index);
        bookNotesListDiv.appendChild(bookNoteDiv);
    });
}

function getBookNotesFromLocalStorage() {
    let bookNotes;
    try {
        bookNotes = JSON.parse(localStorage.getItem('bookNotes')) || [];
    } catch (e) {
        console.error('Error parsing bookNotes from localStorage:', e);
        bookNotes = [];
    }
    return bookNotes;
}

function createBookNoteDiv(bookNote, index) {
    const bookNoteDiv = createElementWithAttributes('div', { id: `booknote-${index + 1}` });
    const tcItemDiv = createElement('div', 'tc-item');
    const chapterNameDiv = createElement('div', 'chapter-name-bn');

    const bulletColor = bookNote.highlightColor === 'blue' ? '#2daee5' : bookNote.highlightColor;

    chapterNameDiv.innerHTML = `
        <div style="display:flex; flex-flow:row;">
            <span style="padding-right:5px;color:${bulletColor};">●</span>
            "${bookNote.storedText}"
        </div>
        
        <span style="padding-top: 10px; color:grey; font-size:smaller">— Noted ${bookNote.BNdateTime}: ${bookNote.userNote}</span>
    `;

    const wordCountDiv = createWordCountDiv(bookNote);

    tcItemDiv.appendChild(chapterNameDiv);
    tcItemDiv.appendChild(wordCountDiv);
    bookNoteDiv.appendChild(tcItemDiv);

    return bookNoteDiv;
}

function createWordCountDiv(bookNote) {
    const div = createElement('div', 'word-count-tc');
    div.innerHTML = `
        <a href="${bookNote.chaptURL}">
            <i>${bookNote.chapName}</i><br>
            <span style="font-size:small;">${bookNote.book}, Chapt.${bookNote.chapNo}</span>
        </a>
    `;
    return div;
}

function createElement(tag, className = '') {
    const element = document.createElement(tag);
    if (className) {
        element.className = className;
    }
    return element;
}

function createElementWithAttributes(tag, attributes) {
    const element = document.createElement(tag);
    for (const key in attributes) {
        if (key === 'textContent') {
            element.textContent = attributes[key];
        } else {
            element.setAttribute(key, attributes[key]);
        }
    }
    return element;
}



/*ANNOTATION*/


function appendAnnotation() {
    const userNoteText = document.getElementById("userAnnotation").value;

    if (userNoteText.trim() === "") {
        return;  // Return if the textarea is empty
    }

    const bookNotes = getBookNotesFromLocalStorage();

    // Find the book note using the global lastUsedBookNoteId variable
    const lastNote = bookNotes.find(note => note.id === lastUsedBookNoteId);

    // Safety check
    if (!lastNote) {
        console.error(`No book note found with ID: ${lastUsedBookNoteId}`);
        return;
    }

    // Update the userNote property of the lastNote with the userNoteText
    lastNote.userNote = userNoteText;

    // Save the updated bookNotes back to local storage
    saveBookNotesToLocalStorage(bookNotes);

    appendAnnotationTitle();

    const annotateButton = document.getElementById("annotate-button");
    const bookNotePalette = document.getElementById("bookNotePalette");

    annotateButton.textContent = "Saved!";
    annotateButton.style.color = 'yellow';
    annotateButton.style.fontWeight = 'bold';
    
    setTimeout(() => {
        bookNotePalette.style.bottom = "-500px";
        annotateButton.textContent = "Annotate";
        document.getElementById("userAnnotation").value = "";
    }, 1000);
}



function appendAnnotationTitle() {

    const bookNotes = getBookNotesFromLocalStorage();
    // Find the book note using the global lastUsedBookNoteId variable
    const lastNote = bookNotes.find(note => note.id === lastUsedBookNoteId);
    
    // Safety check
    if (!lastNote) {
        console.error(`No book note found with ID: ${lastUsedBookNoteId}`);
        return;
    }

    const spanWithLatestHighlight = document.querySelector(`span[data-id='${lastNote.id}']`);
    if (spanWithLatestHighlight) {
        spanWithLatestHighlight.title = `Noted: "${lastNote.userNote}" - ${lastNote.BNdateTime}
        `;
        
        // Find the container of the span (assuming it's the nearest parent 'P' tag)
        let containerNode = spanWithLatestHighlight.parentNode;
        while (containerNode && containerNode.nodeName !== 'P' && containerNode.parentNode !== null) {
            containerNode = containerNode.parentNode;
        }
/*
        // Safety check
        if (containerNode && containerNode.nodeName === 'P') {
            // Update the containerHTML attribute
            lastNote.containerHTML = containerNode.outerHTML;

            // Find the book note in the array and update it (in case lastNote is not a reference)
            const noteToUpdate = bookNotes.find(note => note.id === lastNote.id);
            if (noteToUpdate) {
                noteToUpdate.containerHTML = lastNote.containerHTML;
            }

            // Save the updated bookNotes array back to local storage
            saveBookNotesToLocalStorage(bookNotes);

            
        }
   */ }
}




document.getElementById("userAnnotation").addEventListener("keydown", function(e) {
    if (e.keyCode === 13 && e.target.value.trim() !== "") {
        e.preventDefault();
        appendAnnotation(lastUsedBookNoteId);
    }
});



function cancelAnnotation() {
    const bookNotePalette = document.getElementById("bookNotePalette");
    bookNotePalette.style.bottom = "-500px";
}




document.getElementById('palletteBar').addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('color-btn')) {
        const colorStyle = event.target.style.backgroundColor;
        let color;

        // Mapping the background color to the color name
        switch (colorStyle) {
            case 'green':
                color = 'green';
                break;
            case 'red':
                color = 'red';
                break;
            case 'rgb(45, 174, 229)':  // This is the RGB equivalent of #2daee5
                color = 'blue';
                break;
            default:
                return;
        }
        highlightBooknote(color);
    }
    
    if (event.target && event.target.id === 'copyBtn') {
        // Place code to copy text here if any...
    }

    if (event.target && event.target.id === 'booknotesBtn') {
        highlightBooknote('yellow');
    }

    if (event.target && event.target.id === 'viewBooknotesBtn') {
        updateBNResetButton();
        openBooknotes();
        bookNotesCreator();
    }
});


//VIEW HIGHLIGHT


function adjustFontSizeForSpanContent() {
    const container = document.getElementById("the-quote");
    const targetSpan = container ? container.querySelector("span") : null;

    if (!container || !targetSpan) {
        console.error("Cannot find the necessary elements.");
        return;
    }

    let fontSize = parseInt(window.getComputedStyle(container).fontSize);

    const isOverflowing = () => 
        targetSpan.scrollHeight > container.offsetHeight || 
        targetSpan.scrollWidth > container.offsetWidth;
    
    const hasExtraSpace = () => 
        targetSpan.scrollHeight < container.offsetHeight * 0.8 && 
        targetSpan.scrollWidth < container.offsetWidth * 0.8; // 0.8 can be adjusted

    const maxFontSize = 72; // Adjust as needed
    const minFontSize = 10; // Adjust as needed

    // Increase font size if there's extra space
    while (hasExtraSpace() && fontSize < maxFontSize) {
        fontSize++;
        container.style.fontSize = fontSize + "px";
    }

    // Reduce font size if content overflows
    while (isOverflowing() && fontSize > minFontSize) {
        fontSize--;
        container.style.fontSize = fontSize + "px";
    }

    // Logging the applied font size for debugging purposes
    console.log(`Font size applied to the-quote: ${fontSize}px`);
}





function viewHighlightInfo(bookNoteId) {
    const bookNotes = JSON.parse(localStorage.getItem('bookNotes'));
    const highlight = bookNotes.find(note => note.id === bookNoteId);
    
    if (highlight) {

     // Add the blur class to the underlayer
     document.getElementById("underlayer").classList.add("blur");
        const quoteContainer = document.getElementById("the-quote");
        
        // Added code to wrap content with <span> and appropriate class
        const highlightedSpan = document.createElement('span');
        highlightedSpan.classList.add(`highlight-${highlight.highlightColor}`);
        highlightedSpan.textContent = highlight.storedText;
        quoteContainer.textContent = '“';  // Start quote
        quoteContainer.appendChild(highlightedSpan);
        quoteContainer.append('”');  // End quote
        
        document.getElementById("book").textContent = highlight.book;
        document.getElementById("noteChapter").textContent = highlight.noteChapter;
        document.getElementById("date").textContent = `Noted: ${highlight.BNdateTime}`;
        document.getElementById("charCount").textContent = `Characters: ${highlight.charCount}`;
        document.getElementById("publicNote").textContent = `Public note: ${highlight.publicNote}`;
        document.getElementById("userNote").value = highlight.userNote;
        document.getElementById("highlight-viewer").style.display = "block";
        document.getElementById("bookNoteID").textContent = highlight.id;
        
        styleUserNote();
       // Call the adjustFontSize function after setting the content
       adjustFontSizeForSpanContent();

    }
}


//EDIT THE ANNOTATION FUNCTION 
function styleUserNote() {
    const userNoteTextarea = document.getElementById("userNote");
    const annotationEditButton = document.getElementById("saveBtn");

    if (!userNoteTextarea.value.trim()) {
        annotationEditButton.style.display = "none"; // Hide the button if the textarea is empty
    } else {
        annotationEditButton.style.display = "block"; // Show the button if there's content
    }
}



//SHOW SAVE BUTTON
const userNoteTextarea = document.getElementById("userNote");
const annotationEditButton = document.getElementById("saveBtn");

// The focus event remains mostly the same, just ensuring that the button is shown
userNoteTextarea.addEventListener("focus", function() {
    annotationEditButton.style.display = "block";
});

// The blur event will call the modified styleUserNote function
userNoteTextarea.addEventListener("blur", styleUserNote);



document.getElementById("close-x").addEventListener("click", function() {
    document.getElementById("highlight-viewer").style.display = "none";
    
    // Remove the blur class from the underlayer
    document.getElementById("underlayer").classList.remove("blur");
});



document.getElementById("copyBtn").addEventListener("click", function() {
    const copyBtn = document.getElementById("copyBtn");
    const text = document.getElementById("the-quote").textContent;
    
    const textarea = document.createElement("textarea");
    textarea.textContent = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    
    // Change the button text and background color
    copyBtn.textContent = "Copied!";
    copyBtn.style.backgroundColor = "green";
    copyBtn.style.color = "black";


    // Wait for 2 seconds
    setTimeout(() => {
        document.getElementById("highlight-viewer").style.display = "none";
        // Remove the blur class from the underlayer
        document.getElementById("underlayer").classList.remove("blur");
    }, 2000);

    // Wait for 3 seconds, then revert the button text and background
    setTimeout(() => {
        copyBtn.textContent = "Copy";  // Change this to your original button label if it's different
        copyBtn.style.removeProperty("background-color");  // use the hyphenated "background-color" instead of "backgroundColor"
    }, 2500);
});



/*
document.getElementById("cancelBtn").addEventListener("click", function() {
    document.getElementById("highlight-viewer").style.display = "none";
     // Remove the blur class from the underlayer
     document.getElementById("underlayer").classList.remove("blur");
});
*/




// CLEAR HIGHLIGHT 2

function removeHighlight2(dataId) {
    // Ensure dataId is a string and is trimmed
    dataId = String(dataId).trim();

    spanId = dataId;
    
    // 1. Find and remove the highlight from the DOM
    const spanToReplace = document.querySelector(`span[data-id="${spanId}"]`);

   // alert(`dataId: ${dataId}\n spanId: ${spanId}\nSpan Content: ${spanToReplace ? spanToReplace.textContent : 'Span not found!'}`);
        
    if (spanToReplace) {
        const parent = spanToReplace.parentNode;
        const spanContent = spanToReplace.innerHTML;
        parent.innerHTML = parent.innerHTML.replace(spanToReplace.outerHTML, spanContent);
    }

    // 2. Remove the highlight from the localStorage
    const bookNotes = JSON.parse(localStorage.getItem('bookNotes'));
    const newBookNotes = bookNotes.filter(note => String(note.id) !== dataId);
    localStorage.setItem('bookNotes', JSON.stringify(newBookNotes));
}

// Event listener for the clearBtn
document.getElementById("clearBtn").addEventListener("click", function() {
    const clearBtn = document.getElementById("clearBtn");
    const dataId = document.getElementById("bookNoteID").textContent.trim();

    // Change the button text and background color
    clearBtn.textContent = "Cleared!";
    clearBtn.style.backgroundColor = "green";
    clearBtn.style.color = "white";

    removeHighlight2(dataId);

    // Wait for 2 seconds
    setTimeout(() => {
        document.getElementById("highlight-viewer").style.display = "none";
        // Remove the blur class from the underlayer
        document.getElementById("underlayer").classList.remove("blur");
    }, 900);

    // Wait for 3 seconds, then revert the button text and background
    setTimeout(() => {
        clearBtn.textContent = "Clear";
        clearBtn.style.removeProperty("background-color");
        clearBtn.style.removeProperty("color");

    }, 2000);
});







// CITATION CLICK

function citeHighlight(dataId) {
    const bookNotes = JSON.parse(localStorage.getItem('bookNotes'));
    const highlight = bookNotes.find(note => note.id === dataId);

    if (highlight) {
        const citation = `"${highlight.storedText}" -- Banayan Angway, Russell Maier, 'Tractatus Ayyew: An Earthen Ethics' (Earthen.io, Philippines, Indonesia, 2022), Chap. '${highlight.book}', '${highlight.noteChapter}' ${window.location.href}`;

        // Copy the citation string to clipboard
        const textarea = document.createElement("textarea");
        textarea.textContent = citation;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
    }
}


// Event listener for the citeBtn
document.getElementById("citeBtn").addEventListener("click", function() {
    const citeBtn = document.getElementById("citeBtn");
    const dataId = document.getElementById("bookNoteID").textContent.trim();  // Making sure to trim the text content
    
    citeHighlight(dataId);
    
    // Change the button text and background color
    citeBtn.textContent = "Citation Copied!";
    citeBtn.style.backgroundColor = "green";
    
    // Wait for 2 seconds
    setTimeout(() => {
        document.getElementById("highlight-viewer").style.display = "none";
        // Remove the blur class from the underlayer
        document.getElementById("underlayer").classList.remove("blur");
    }, 2000);

    // Wait for 3 seconds, then revert the button text and background
    setTimeout(() => {
        citeBtn.textContent = "Cite";  // Change this to your original button label if it's different
        citeBtn.style.removeProperty("background-color");  // note the hyphenated "background-color" instead of "backgroundColor"
    }, 3000);
});





//SAVE ANNOTATION 2
function appendAnnotation2() {
    // Get the user's annotation from the textarea
    const userNoteText = document.getElementById("userNote").value;

    if (userNoteText.trim() === "" || userNoteText === "Click to annotate this highlight...") {
        return;  // Return if the textarea is empty or just contains the placeholder
    }

    const bookNotes = getBookNotesFromLocalStorage();

    // Get the bookNote ID from the HTML
    const currentBookNoteId = document.getElementById("bookNoteID").innerText;
    lastUsedBookNoteId = currentBookNoteId; 
    // Find the book note using the currentBookNoteId variable
    const currentNote = bookNotes.find(note => note.id === currentBookNoteId);

    // Safety check
    if (!currentNote) {
        console.error(`No book note found with ID: ${currentBookNoteId}`);
        return;
    }

    // Update the userNote property of the currentNote with the userNoteText
    currentNote.userNote = userNoteText;

    // Save the updated bookNotes back to local storage
    saveBookNotesToLocalStorage(bookNotes);
    appendAnnotationTitle();

    const saveButton = document.getElementById("saveBtn");

    saveButton.textContent = "Annotation Saved!";
    saveButton.style.backgroundColor = 'green';
    saveButton.style.color = 'white';

    
    setTimeout(() => {
        saveButton.textContent = "Save Annotation";
        document.getElementById("highlight-viewer").style.display = "none";
        document.getElementById("underlayer").classList.remove("blur");
        saveButton.style.removeProperty("background-color");
        saveButton.style.removeProperty("color");
        document.getElementById("userNote").value = "";  // Clear out the textarea


    }, 1500);
}

// Assuming you have a function to get the book notes:
function getBookNotesFromLocalStorage() {
    try {
        return JSON.parse(localStorage.getItem('bookNotes')) || [];
    } catch (error) {
        console.error('Error fetching bookNotes from local storage:', error);
        return [];
    }
}
