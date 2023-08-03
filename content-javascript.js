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


function handleSelection() {
selectedRange = getSelectedRange();

// Check if the selection is within the div with id 'ct-main'
if (selectedRange && selectedRange.commonAncestorContainer.closest('#ct-main') && selectedRange.toString().trim().length > 0) {
let span = document.createElement('span');
span.style.cursor = 'pointer';
span.classList.add(preHighlightClass);
span.title = "Click this text to highlight and save.";
selectedRange.surroundContents(span);
clearSelection();
}
}

document.addEventListener('mouseup', handleSelection);
document.addEventListener('touchend', handleSelection);

function handleHighlightEvent(e) {
if (e.target.classList.contains(preHighlightClass)) {
if (e.target.classList.contains(highlightClass)) {
  e.target.classList.remove(preHighlightClass);
} else {
  e.target.classList.add(highlightClass);
  e.target.classList.remove(preHighlightClass);

  const range = document.createRange();
  range.selectNodeContents(e.target);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);

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
    const BNdateTime = new Date().toISOString(); // Current date and time

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

  e.target.title = "This quotation is saved in your Book Notes";
  window.getSelection().removeAllRanges();
}
} else if (e.target.classList.contains(highlightClass)) {
setTimeout(() => removeHighlight(e), 1000);
}
}



// Add both click and touchend listeners
document.addEventListener('click', handleHighlightEvent);
document.addEventListener('touchend', handleHighlightEvent);




function removeHighlight(e) {
// Define a one-time click handler
function handleClick(event) {
    if (event.target.classList.contains(highlightClass)) {
    const text = event.target.textContent; // Assuming you want to replace the element with its text content
    const parentElementId = event.target.parentNode.id;
    const textLength = text.length;

    event.target.replaceWith(document.createTextNode(text)); // Remove the highlight

    // Remove the corresponding book note from the array
    let bookNotes = JSON.parse(localStorage.getItem('bookNotes')) || [];
    bookNotes = bookNotes.filter(note => {
        return !(note.startContainer === parentElementId && note.storedNoteText.length === textLength);
    });

    localStorage.setItem('bookNotes', JSON.stringify(bookNotes));
    // Since we're using the `once` option, there's no need to manually remove the listener
    }
}
// Add the one-time click handler with the `once` option
document.addEventListener('click', handleClick, { once: true });
document.addEventListener('touchend', handleClick);
}

});

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
chapterLink.innerHTML = `<i>Chapter ${bookNote.chapNo}: ${bookNote.chapName}</i> | ${bookNote.book} <br>${bookNote.charCount} characters | Saved ${bookNote.BNdateTime}`;

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
      alert('Stored text not found');
    }
  }
}
});
}

// Attach the showAlertWithCharacterCount and recreateSelection functions to the window load event
window.addEventListener('load', function () {
// showAlertWithCharacterCount();
recreateSelection();
});