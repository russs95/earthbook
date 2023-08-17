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
        <div class="contents-title">Vos notes sauvegardées</div>
        <div class="contents-books123"><div class="tc-a-book content-button">BOOK NOTES</div></div>
    </div>
    <div id="book-notes-list">

    </div>

        <div style="margin:auto;">
            <button id="reset-settings-bn" onclick="resetBookNotes()" style="width: 200px;margin: 30px auto 20px auto; cursor:pointer; padding:7px;font-size: medium;">Aucune note de livre sauvegardée</button>

            <div id="instructions-bn" style="font-family:Mulish;color:grey;">Surlignez, puis cliquez sur n'importe quel texte dans le Earthbook pour le sauvegarder dans vos notes de livre.</div>
        </div>

        <div id="collaborative-editing" style="width:80%; padding:20px;background:var(--background-color); border-radius: 10px;margin: auto;margin-top:80px;">

        <br></br>
            <h3 style="font-family:Mulish;margin:0px">Édition Collaborative</h3>

            <h6 style="margin:16px auto 10px auto;">Les Earthbooks permettent aux auteurs et aux éditeurs de travailler ensemble sur la publication en direct en important et exportant vos points forts et commentaires sauvegardés. Exportez vos notes de livre pour les partager avec un autre lecteur :</h6>

            <button id="booknotes-download" onclick="downloadBooknotes()" aria-label="Télécharger les notes de livre">
            ▼ Télécharger les notes de livre
            </button>

            <h6 style="margin: 25px 0px 0px 5px;">Téléchargez sur votre appareil les notes de livre d'un autre lecteur pour les consulter.</h6>

            <div id="booknotes-export" style="width:380px; padding:10px;margin: 10px auto 15px auto;background-color:var(--slider);
            border-radius: 10px;width:fit-content;">
            
                <input id="jsonUpload" type="file" id="jsonUpload" accept=".json" aria-label="Choisissez un fichier JSON de notes de livre">
                 <button id="booknotes-upload-go" onclick="uploadBooknotes()" aria-label="Télécharger le fichier de notes de livre">▲ Télécharger le fichier de notes de livre</button>
            </div>

            <br><br>

    </div>
    
</div>
</div>

<!-- PALETTE DE NOTES DE LIVRE-->

<div id="bookNotePalette" class="palette-hidden">
   <div class="main-pallette-buttons" id="palletteBar">
        <div  class="highlight-buttons">
            <div id="save-text" class="pallette-text">Sauvegarder:</div>
            <button class="color-btn" style="background:green" data-color="green" aria-label="Surligner le texte en vert" title="Surligner & Sauvegarder en vert"></button>
<button class="color-btn" style="background:red" data-color="red" aria-label="Surligner le texte en rouge" title="Surligner & Sauvegarder en rouge"></button>
<button class="color-btn" style="background:#2daee5" data-color="#2daee5" aria-label="Surligner le texte en bleu" title="Surligner & Sauvegarder en bleu"></button>
</div>
        
        <button aria-label="Copier la sélection" id="copyBtn" class="pallette-btn">
            <div class="pallette-text">Copier</div>
        </button> 
        <button aria-label="Ajouter une annotation" id="booknotesBtn" class="pallette-btn" onclick="highlightBooknote('yellow')">
            <div class="pallette-text">Annoter</div>
        </button>
        <button aria-label="Voir vos notes de livre" id="viewBooknotesBtn" class="pallette-btn" onclick="updateBNResetButton(),openBooknotes(), bookNotesCreator()">
            <div class="pallette-text">Notes de livre</div>
        </button>
    </div>

    <div id="annotationEntry" style="width: 90%;
    margin: 20px auto 20px auto;">
    <textarea id="userAnnotation" placeholder="Ajoutez votre annotation ici..."></textarea>
    <button id="annotate-button" style="padding: 8px 15px;cursor:pointer;margin-right:8px;font-size:medium;" onclick="appendAnnotation()">Annoter</button>
    <button id="annotate-cancel" style="padding: 8px 15px;cursor:pointer;font-size:medium;"  onclick="cancelAnnotation()">Annuler</button>
    </div>
</div>

<!-- AVIS DE CHAPITRE-->

<div id="chap-notice">
<div id="close-notice" onclick="closeWelcomeNotice()">&times;</div>
<div id="chap-notice-text">
💡  Il semble que c'est votre première fois à ouvrir ce livre! Avant de commencer, envisagez de prendre le <span class="java-link" onclick="guidedTour(), closeWelcomeNotice()" title="En savoir plus sur ce qu'est un Earthbook">tour des fonctionnalités de Earthbook</span> rapide et assurez-vous de <span class="java-link"  onclick="openSettings(), closeWelcomeNotice()"  title="Ajuster pour vos yeux">optimiser ±</span> la page pour vos yeux.
</div>
</div>
      
      `;
  }
  }
  
  customElements.define('booknotes-curtain', bookNotes);
