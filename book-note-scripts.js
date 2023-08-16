
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



// ID GENERATOR with 3 zeros

let currentId = 0;

function generateId() {
    currentId += 1;
    return String(currentId).padStart(3, '0');
}

let lastSelectedText = '';


//CHECKS TO SEE IF THE TEXT CAN BE HIGHLIGHTED

function checkSelectedText() {
    const selection = window.getSelection();

    // Prepare palette for potential position adjustments
    const palette = document.getElementById('bookNotePalette');

// Check if any text is selected
if (!selection.rangeCount || selection.isCollapsed) {
    // Get the current bottom value of the palette
    const currentBottom = window.getComputedStyle(palette).bottom;

    // If the current bottom isn't set to '-10px' (annotation box is up and showing), set it to '-500px'
    if (currentBottom !== "-10px") {   
        alert('sending down!');
        palette.style.bottom = '-500px';  // No text selected
    }
    return;
}

lastSelectedText = window.getSelection().toString();
    const selectedRange = selection.getRangeAt(0);
    const startContainerParent = selectedRange.startContainer.parentNode;
    const endContainerParent = selectedRange.endContainer.parentNode;

    // Check if the selection is within the #ct-main element
    const ctMainElement = document.getElementById('ct-main');
    if (!ctMainElement.contains(startContainerParent) || !ctMainElement.contains(endContainerParent)) {
        palette.style.bottom = '-500px';  // Selected text not within ct-main
        return;
    }

    // Check if the selection does not span more than one paragraph
    if (startContainerParent !== endContainerParent) {
        //palette.style.bottom = '-200px';  // Selected text spans multiple paragraphs
        alert("Sorry!  Currently you can't select and highlight text in more than one paragraph to make a book note");
        selection.removeAllRanges();

        return;
    }

    document.getElementById('palletteBar').style.display = "flex";
    palette.style.bottom = '-390px';  // Valid text selected within constraints
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
        button.style.color = 'green';
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
            const bgColor = getComputedStyle(event.target).backgroundColor;
            highlightBooknote(bgColor);
        });
    });
});


/* MAIN FUNCTION TO PROCESS A SELECTION HIGHLIGHT*/
function highlightBooknote(color) {
    // Directly use lastSelectedText
    const textToHighlight = lastSelectedText;
    const highlightColor = color;
    const userNote = "";
    const publicNote = "No";

    if (textToHighlight.length > 0) {
        const selectedRange = selection.getRangeAt(0);
        const span = document.createElement("span");

        switch (highlightColor) {
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
                console.warn(`Unknown highlight color: ${highlightColor}`);
                return; 
        }

        span.title = "Click to remove BookNote"; 
        span.alt = "Highlight"; 
        span.setAttribute('onclick', 'removeHighlight(event)');

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
            highlightColor,
            userNote,
            publicNote
        };

        bookNotes.push(bookNote);
        saveBookNotesToLocalStorage(bookNotes);
        console.log('BookNote saved:', bookNote);

        selection.removeAllRanges();

        if (highlightColor !== 'yellow') {
            updateButtonAndPalette();
        } else {
            // Adjust the height of the palette for 'yellow' case
            document.getElementById('bookNotePalette').style.bottom = "-10px";
            document.getElementById('palletteBar').style.display = "none";
                
    lastUsedBookNoteId = id;  // Store the last used ID
        }
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
    saveTextDiv.style.backgroundColor = 'yellow !mportant';
    saveTextDiv.style.color = 'black';
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
    a.download = 'booknotes-export.json';  // Suggest a filename for the download

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
                alert('Booknotes uploaded successfully!');

                // You might want to call your function to re-render the booknotes on the page
                recreateHighlights();

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
        spanWithLatestHighlight.title = `Noted: "${lastNote.userNote}" - ${lastNote.BNdateTime} (click to remove this Booknote)`;
        
        // Find the container of the span (assuming it's the nearest parent 'P' tag)
        let containerNode = spanWithLatestHighlight.parentNode;
        while (containerNode && containerNode.nodeName !== 'P' && containerNode.parentNode !== null) {
            containerNode = containerNode.parentNode;
        }

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
    }
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
