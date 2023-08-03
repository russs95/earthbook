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

    </div>

<div id="booknotes-curtain" class="overlay-tc">

    <div class="top-close-button">
        <a href="index.html"><img src="../icons/home.svg" alt="Bouton d'accueil" style="padding-right:10px;padding-left:10px;"></a>
        <img src="../svgs/bottom-x.svg" alt="Fermer le bouton" style="padding-left:10px;cursor:pointer" onclick="closeBooknotes()">
        <img src="../icons/search.svg?v=3" alt="Rechercher" style="padding-left:12px;padding-right:15px;cursor:pointer" onclick="closeBooknotes(), openSearch()">
    </div>
       
    <div class="overlay-content-tc">

        <div class="contents-title-box">
            <div class="contents-title">Your Saved</div>
            <div class="contents-books123"><div class="tc-a-book content-button">BOOK NOTES</div></div>
        </div>
        <div id="book-notes-list">

           <!-- <div id="booknote-1">
                
                <div class="tc-item">
                    <div class="chapter-name-tc">"storeNoteText"</div>
                    <div class="word-count-tc"><a href="chaptURL"><i>Chapter "chapNo": "chapName"</i> |  "book" </a><br>"charCount" characters | Saved "BNdateTime"</div>
                </div>
                
            </div>
        -->


        

        </div>
    

        <div class="tc-button-row">
            <a href="index.html" style="height: 24px; flex-grow: 1"><div id="tour-btn" class="action-btn" ><i style="background-image: url(../icons/home.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 3px;"></i></div></a>

            <div id="buy-btn" class="action-btn" onclick="closeContents(), guidedTour()" style="height: 24px;flex-grow: 1"><i style="background-image: url(../icons/tour.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px; cursor:pointer;"></i> Tour</div>

            <div id="buy-btn" class="action-btn" onclick="openBuy()" style="height: 24px;flex-grow: 1"><i style="background-image: url(../icons/buy.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px; cursor:pointer;"></i></div>

            <div id="buy-btn" class="action-btn" onclick="openBookplate()" style="height: 22px;flex-grow: 1"><i style="background-image: url(../icons/about.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px; cursor:pointer;"></i></div>

            <div id="buy-btn" class="action-btn" onclick="openEco()" style="height: 24px;flex-grow: 1"><i style="background-image: url(../icons/eco-green.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 0px; cursor:pointer;"></i></div>
            
            
        </div>
    </div>
</div>
    

      
      `;
  }
  }
  
  customElements.define('chap-foot', chapfoot);
  
  