
/*---------------------------------------------------



BOOK NOTES FUNCTIONS



------------------------------------------------*/

/*RECREATE from the cache the hilights*/

//alert('Script started');

document.addEventListener("DOMContentLoaded", function(event) {
   // alert('DOM fully loaded and parsed');
    recreateHighlights();
});
     
    
    /*ATTEMPT TO REESTABLISHED PAGE HIGHLIGHTS ON RELOAD*/
    
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



    

let currentId = 0;

function generateId() {
    currentId += 1;
    return String(currentId).padStart(3, '0');
}

function checkSelectedText() {
    const selection = window.getSelection();

    // Prepare palette for potential position adjustments
    const palette = document.getElementById('bookNotePalette');

// Check if any text is selected
if (!selection.rangeCount || selection.isCollapsed) {
    // Get the current bottom value of the palette
    const currentBottom = window.getComputedStyle(palette).bottom;

    // If the current bottom isn't set to '-10px', set it to '-500px'
    if (currentBottom !== "-10px") {
        palette.style.bottom = '-500px';  // No text selected
    }
    return;
}


    const selectedRange = selection.getRangeAt(0);
    const startContainerParent = selectedRange.startContainer.parentNode;
    const endContainerParent = selectedRange.endContainer.parentNode;

    // Check if the selection is within the #ct-main element
    const ctMainElement = document.getElementById('ct-main');
    if (!ctMainElement.contains(startContainerParent) || !ctMainElement.contains(endContainerParent)) {
        palette.style.bottom = '-500px';  // Selected text not within ct-main
        alert("text not in ct-main");
        return;
    }

    // Check if the selection does not span more than one paragraph
    if (startContainerParent !== endContainerParent) {
        //palette.style.bottom = '-200px';  // Selected text spans multiple paragraphs
        alert("Sorry!  Currently you can't select and highlight text in more than one paragraph to make a book note");
        selection.removeAllRanges();

        return;
    }

    palette.style.bottom = '-390px';  // Valid text selected within constraints
}

// We only need one set of event listeners, so removing the duplicated ones
document.addEventListener('mouseup', checkSelectedText);
document.addEventListener('touchend', checkSelectedText);



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

    // Change button text and style ✓
    const button = document.getElementById('copyBtn');
    button.style.color = 'green';
    //button.style.backgroundImage = 'none';
    button.textContent = 'Copied!!';

    // Slide down and hide the palette
    setTimeout(() => {
        const palette = document.getElementById('bookNotePalette');
        palette.style.bottom = '-500px'; // Slide down to hide the palette

        // After an additional 2 second, reset the button text
        setTimeout(() => {
            button.textContent = 'Copy';
            button.style.color = 'var(--thin-border-color)';
            //button.style.background = 'var(--deeper-accent-color) url(icons/copy.svg) 15px center no-repeat;';
        }, 1000);
    }, 2000);
}




/* MAIN FUNCTION TO PROCESS A SELECTION HIGHLIGHT*/
function highlightBooknote(color) {
    const selection = window.getSelection();
    const highlightColor = color;
    const userNote = "";
    const publicNote = "No";

    if (selection.rangeCount > 0) {
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
    saveTextDiv.style.color = 'green';
    saveTextDiv.style.fontWeight = 'bold';
    saveTextDiv.textContent = 'Saved!';

    setTimeout(() => {
        const palette = document.getElementById('bookNotePalette');
        palette.style.bottom = '-500px';

        setTimeout(() => {
            saveTextDiv.textContent = 'Save:';
            saveTextDiv.style.color = 'var(--thin-border-color)';
            saveTextDiv.style.fontWeight = 'normal';
        }, 1000);
    }, 2000);
}


document.getElementById('highlightSaveButton').addEventListener('click', highlightBooknote);




/* ATTEMPT TO REMOVE HIGHLIGHTS AFTER A CLIC*/

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


/*
// Add click event listeners for each highlight class
const highlightClasses = ['highlight-green', 'highlight-red', 'highlight-yellow'];

highlightClasses.forEach(className => {
    document.querySelectorAll(`.${className}`).forEach(element => {
        element.addEventListener('click', removeHighlight);
    });
});

*/



/*
// Make sure this is after recreateSelection
document.addEventListener('click', removeHighlight);
*/

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
    a.download = 'booknotes.json';  // Suggest a filename for the download

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
                recreateBooknotes();

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
        
        <span style="padding-top: 10px; color:grey; font-size:smaller">— Noted ${bookNote.BNdateTime}: : ${bookNote.userNote}</span>
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
    const lastNote = bookNotes.reduce((prev, current) => (prev.id > current.id) ? prev : current);

    lastNote.userNote = userNoteText;
    saveBookNotesToLocalStorage(bookNotes);

    appendAnnotationTitle(lastNote);  // Update the title of the highlight span

    const annotateButton = document.getElementById("annotate-button");
    const bookNotePalette = document.getElementById("bookNotePalette");

    annotateButton.textContent = "Saved!";
    
    setTimeout(() => {
        bookNotePalette.style.bottom = "-500px";
        annotateButton.textContent = "Annotate";
        document.getElementById("userAnnotation").value = "";
    }, 1000);
}

function appendAnnotationTitle(lastNote) {
    const spanWithLatestHighlight = document.querySelector(`span[data-id='${lastNote.id}']`);
    if (spanWithLatestHighlight) {
        spanWithLatestHighlight.title = `Noted: ${lastNote.userNote} --${lastNote.BNdateTime} (click to remove this Booknote)`;
        
        // Find the container of the span (assuming it's the nearest parent 'P' tag)
        let containerNode = spanWithLatestHighlight.parentNode;
        while (containerNode.nodeName !== 'P' && containerNode.parentNode !== null) {
            containerNode = containerNode.parentNode;
        }

        // Update the containerHTML attribute
        lastNote.containerHTML = containerNode.outerHTML;

        // Save the updated bookNotes array back to local storage
        saveBookNotesToLocalStorage(bookNotes);
    }
}


document.getElementById("userAnnotation").addEventListener("keydown", function(e) {
    if (e.keyCode === 13 && e.target.value.trim() !== "") {
        e.preventDefault();
        appendAnnotation();
    }
});
