class bookNotes extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
  
  
<div id="booknotes-curtain" class="overlay-tc">

<div class="top-close-button">
    <a href="index.html"><img src="../icons/home.svg" alt="Bouton d'accueil" style="padding-right:10px;padding-left:10px;"></a>
    <img src="../svgs/bottom-x.svg" alt="Fermer le bouton" style="padding-left:10px;cursor:pointer" onclick="closeBooknotes()">
    <img src="../icons/search.svg?v=3" alt="Rechercher" style="padding-left:12px;padding-right:15px;cursor:pointer" onclick="closeBooknotes(), openSearch()">
</div>
   
<div class="overlay-content-tc" style="min-height:80%;">

    <div class="contents-title-box">
        <div class="contents-title">Your Saved</div>
        <div class="contents-books123"><div class="tc-a-book content-button">BOOK NOTES</div></div>
    </div>
    <div id="book-notes-list">




    </div>

        <div style="margin:auto;">
            <button id="reset-settings-bn" onclick="resetBookNotes()" style="width: 200px;
        margin: 30px auto 20px auto; cursor:pointer; padding:6px;">No Booknotes Saved</button>
            <div id="instructions-bn" style="font-family:Mulish;color:grey;">Highlight, then click any text in the Earthbook to save it to your Booknotes.</div>
        <div id="booknotes-export" style="width:380px; padding:10px,height:100px;background-color:grey;">
            <input type="file" id="jsonUpload" accept=".json"><br>
            <button onclick="uploadBooknotes()">Upload Booknotes</button>
        </div>

    </div>

    <div class="tc-button-row" style="margin-top:auto;">
        <a href="index.html" style="height: 24px; flex-grow: 1"><div id="tour-btn" class="action-btn" ><i style="background-image: url(../icons/home.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 3px;"></i></div></a>

        <div id="buy-btn" class="action-btn" onclick="closeContents(), guidedTour()" style="height: 24px;flex-grow: 1"><i style="background-image: url(../icons/tour.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px; cursor:pointer;"></i> Tour</div>

        <div id="buy-btn" class="action-btn" onclick="openBuy()" style="height: 24px;flex-grow: 1"><i style="background-image: url(../icons/buy.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px; cursor:pointer;"></i></div>

        <div id="buy-btn" class="action-btn" onclick="openBookplate()" style="height: 22px;flex-grow: 1"><i style="background-image: url(../icons/about.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px; cursor:pointer;"></i></div>

        <div id="buy-btn" class="action-btn" onclick="openEco()" style="height: 24px;flex-grow: 1"><i style="background-image: url(../icons/eco-green.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 0px; cursor:pointer;"></i></div>
        
        
    </div>
</div>
</div>


<!-- BOOKNOTES MENU PALLETTE-->

<div id="bookNotePalette" class="palette-hidden">
    <div class="highlight-buttons">
        <div id="save-text" class="pallette-text">Save:
        </div>
        <button class="color-btn" onclick="highlightBooknote('green')" style="background:green"></button>
        <button class="color-btn" onclick="highlightBooknote('red')" style="background:red"></button>
        <button class="color-btn" onclick="highlightBooknote('yellow')" style="background:yellow"></button>
        <button class="color-btn" style="background:grey" onclick="recreateHighlights()">
        </button>
        
    </div>
    <button id="copyBtn" class="pallette-btn">
        <div class="pallette-text">Copy:</div>
    </button> 
    <button id="booknotesBtn" class="pallette-btn" onclick="updateBNResetButton(),openBooknotes(), bookNotesCreator()">
        <div class="pallette-text">Your Booknotes</div>
    </button>
   
    
</div>

<!-- CHAPT NOTICE-->


<div id="chap-notice">
<div id="close-notice" onclick="closeWelcomeNotice()">&times;</div>
<div id="chap-notice-text">
💡  Looks like its your first time opening this book!  Before you get going, consider taking the quick <a class="java-link" onclick="guidedTour(), closeWelcomeNotice()" aria-label="Open About Screen" title="Learn more about what an Earthbook is">Earthbook features tour</a> and be sure to <a class="java-link" onclick="openSettings(), closeWelcomeNotice()" aria-label="Open Settings" title="Adjust for your eyes">optimize ±</a> the page for your eyes.
</div>
</div>




      
      `;
  }
  }
  
  customElements.define('booknotes-curtain', bookNotes);
  
  
  