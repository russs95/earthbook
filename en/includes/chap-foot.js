class chapfoot extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
  
      
   
    <div id="footer-functions-box" style="width:100%; padding-top: 5px;">
      <div class="footer-function">
        <div class="footer-function-main" onclick="openCode()" style="z-index:8;">
          <div id="code-down-arrow" style="width: 18px; height: 18px;background: url(../icons/up-arrow.svg) no-repeat center;background-size:contain;margin: auto 15px auto 0;">
          </div>
          <div class="footer-function-item">
            <p>Code source</p>
          </div>
          <div class="footer-function-item-icon"> 
            <i style="background-image: url(../icons/code.svg);"></i>
          </div>
        </div>
        <div id="footer-function-reveal-code" style="height:0px; opacity:0;">
          <div class="github-source2" style="font-size:0.8em; font-family:Mulish;color:grey;overflow: clip;">
            Les Earthbook sont open source. Contribuez, corrigez ou bifurquez le code de cet Earthbook sur Github : <a href="https://github.com/russs95/earthbook/blob/main/<?php echo ($lang); ;?>/<?php echo ($name); ;?>" target="_blank" aria-label="Contribuer au code. Accéder au dépôt Github d'Earthbook pour cette page :"><br> ➔ github.com/russs95/earthbook/blob/main/<?php echo ($lang); ;?>/<?php echo ($name); ;?></a>
          </div>
        </div>
      
      
        <div class="footer-function">
          <div class="footer-function-main" style="z-index:10;" onclick="openFooter2()">
            <div id="footer-arrow" style="width:18px;height:18px;background:url(../icons/down-arrow.svg) no-repeat center; background-size:contain;margin: auto 10px auto 0;"></div>
            <div class="footer-function-item">
              <p>Outils et Ressources</p>
            </div>
            <div class="footer-function-item-icon">
              <i style="background-image: url(../icons/settings.svg);"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div id="footer-settings">
      <div class="footer-size" style="height:58px; z-index:0 !important;">

        <div style=""><button type="button" class="footer-settings-icon" style="cursor:pointer" aria-label="Retour à la page d'accueil" title="Retour à la page d'accueil" onclick="location.href='index.html'"><img src="../icons/home.svg" alt="icône de la page d'accueil"></button></div>
        
        <div style=""><button type="button" class="footer-settings-icon" style="cursor:pointer" onclick="openBuy()" aria-label="Cliquez pour accéder à la page d'achat"><img src="../icons/buy.svg" alt="icône d'achat" title="Cliquez pour accéder à la page d'achat"></button></div>
        
        <div style=""><button type="button" class="footer-settings-icon"><img src="../icons/search.svg?v=2" alt="icône des paramètres" style="cursor:pointer" onclick="openSearch()" aria-label="Cliquez pour ajuster les paramètres de lecture du livre" title="Cliquez pour ajuster les paramètres de lecture du livre"></button></div>
        
        <div style=""><button type="button" class="footer-settings-icon"><img src="../icons/share.svg" alt="icône de partage" style="cursor:pointer" onclick="openShare()" aria-label="Cliquez pour copier le lien de l'Earthbook à partager" title="Cliquez pour copier le lien de l'Earthbook à partager"></button></div>

        <div style=""><button type="button" class="footer-settings-icon"><img src="../icons/content.svg" alt="icône de partage" style="cursor:pointer" onclick="openBooknotes(), bookNotesCreator()" aria-label="Cliquez pour copier le lien de l'Earthbook à partager" title="Cliquez pour copier le lien de l'Earthbook à partager"></button></div>
        
        <div style=""><button type="button" class="footer-settings-icon"><img src="../icons/tour.svg" alt="Visite guidée" style="cursor:pointer" onclick="guidedTour()" aria-label="Cliquez pour une visite rapide des fonctionnalités d'Earthbook" title="Cliquez pour une visite rapide des fonctionnalités d'Earthbook"></button></div>
        
        <div style=""><button type="button" class="footer-settings-icon"><img src="../svgs/to-the-top-arrow.svg" alt="Revenir en haut de la page" style="cursor:pointer" onclick="location.href='#top'" aria-label="Aller en haut de la page"></button></div>
        
        <div style="flex-grow:4; text-align: right;"><button type="button" class="footer-settings-icon"><img src="../icons/eco-green.svg" alt="Notre suivi, comptabilité et divulgation écologiques" title="Notre suivi, comptabilité et divulgation écologiques" style="cursor:pointer;" aria-label="Ouvrir la comptabilité écologique" onclick="openEco()"></button></div>

      </div>
    
      <div class="footer-size" style="height:30px;">
        <div><button type="button" class="footer-settings-icon" style="cursor:pointer; text-align:left; flex-grow:1; padding-right:8px; padding-top: 10px;padding-bottom: 0px;" onclick="openEarthbook()" aria-label="Apprenez ce qu'est un Earthbook">Qu'est-ce qu'un Earthbook ?</button></div>
        <div class="github-source" style="margin-right: 0px;">Le Medium est le Message.</div>
      </div>

    </div>

  




      
      `;
  }
  }
  
  customElements.define('chap-foot', chapfoot);
  
  
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
  