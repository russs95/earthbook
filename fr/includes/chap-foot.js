class chapfoot extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
  
      
   
      <div id="footer-functions-box" style="width:100%; padding-top : 5px;">
      <div class="footer-function" >
         <div class="footer-function-main" onclick="openCode()" style="z-index:8 ;">
           <div id="code-down-arrow" style="width : 18px ; height : 18px;background : url(../icons/up-arrow.svg) no-repeat center;background-size:contain;margin : auto 15px auto 0 ;">
           </div>
           <div class="footer-function-item">
             <p>Code source</p>
           </div>
           <div class="footer-function-item-icon">
               <i style="background-image : url(../icons/code.svg);"></i>
           </div>
         </div>
         <div id="footer-function-reveal-code" style="height:0px; opacity:0;">
             <div class="github-source2" style="font-size:0.8em; font-family:Mulish;color:grey;overflow: clip;">Earthbook est open source. Contribuez, corrigez ou bifurquez le code de ce Earthbook sur Github : <a href="https://github.com/russs95/earthbook/blob/main/<?php echo ($lang); ;?>/<?php echo ( $name); ;?> " target="_blank" aria-label="Contribuez au code. Accédez au dépôt Earthbook Github pour cette page :"><br> ➔ github.com/russs95/ earthbook/blob/main /<?php echo ($lang); ;?>/<?php echo ($nom); ;?></a>
             </div>
           </div>
      </div>
            <!--
         <div class="footer-function" >
             <div class="footer-function-main" onclick="openComments()" style="z-index:9;">
                
                 <div id="comments-out" style="width : 18px ; height : 18px;background : url(../icons/plus.svg) no-repeat center;background-size:contain;margin : auto 15px auto 0 ;">
                 </div>
      
                 <div class="footer-function-item">
                   <p>Citer / Commenter</p>
                 </div>
      
                 <div class="footer-function-item-icon">
                     <i style="background-image : url(../icons/comments.svg);"></i>
                 </div>
               </div>
             </div>
           -->
      
         <div class="footer-function">
           <div class="footer-function-main" style="z-index:10 ;" onclick="openFooter2()">
             <div id="footer-arrow" style="width:18px;height:18px;background:url(../icons/down-arrow.svg) no-repeat center ; background-size:contain;margin : auto 10px auto 0 ;"></div>
               <div class="footer-function-item"><p>Outils et ressources</p></div>
               <div class="footer-function-item-icon">
               <i style="background-image : url(../icons/settings.svg);"></i>
               </div>
             </div>
           </div>
         </div>
      </div>
          
      <div id="footer-settings">
           <div class="footer-size" style="height:58px; z-index:0 !important;">
               <div style=""><button type="button" class="footer-settings-icon" style="cursor:pointer" aria-label="Retour à la page d'accueil" title="Retour à la page d'accueil" onclick= "location.href='index.html'" ><img src="../icons/home.svg" alt="icône de la page d'accueil"></button></div>
           <!--
               <div style=""><button type="button" class="footer-settings-icon" style="cursor:pointer" onclick="openBookplate()" aria-label="Cliquez pour ouvrir l'ex-libris">< img src="../svgs/my-book-header-logo-grey.svg" title="Page de titre du Tractatus Ayyew" alt="Tractatus Ayyew Mandala"></button></div>-->
          
               <div style=""><button type="button" class="footer-settings-icon"><img src="../icons/buy.svg" style="cursor:pointer" onclick="openBuy( )" alt="Icône d'achat" aria-label="Cliquez pour accéder à la page d'achat" title="Cliquez pour accéder à la page d'achat"></button></div>
          
               <div style=""><button type="button" class="footer-settings-icon"><img src="../icons/search.svg?v=2" alt="Icône Paramètres" style= "cursor:pointer" onclick="openSearch()" aria-label="Cliquez pour ajuster les paramètres de lecture du livre" title="Cliquez pour ajuster les paramètres de lecture du livre"></button></div>
          
               <div style=""><button type="button" class="footer-settings-icon"><img src="../icons/share.svg" alt="share icon" style="cursor:pointer " onclick="openShare()" aria-label="Cliquez pour copier le lien du earthBook à partager" title="Cliquez pour copier le lien du earthBook à partager"></button></div>
          
               <div style=""><button type="button" class="footer-settings-icon"><img src="../icons/tour.svg" alt="Visite guidée" style="cursor:pointer " onclick="guidedTour()" aria-label="Cliquez pour une visite rapide des fonctionnalités d'Earthbook" title="Cliquez pour une visite rapide des fonctionnalités d'Earthbook"></button></div>
          
               <div style=""><button type="button" class="footer-settings-icon"><img src="../svgs/to-the-top-arrow.svg" alt="Vers le haut de la page" style="cursor:pointer" onclick="location.href='#top'" aria-label="Aller en haut de la page"></button></div>
          
           <!--
               <div><button type="button" class="footer-settings-icon"><img src="../icons/content.svg" alt="Icône Table des matières" style="cursor:pointer" onclick ="openContents()" aria-label="Cliquez pour afficher la table des matières d'EarthBook" title="Cliquez pour afficher la table des matières d'EarthBook"></button></div>-->
      
               <div style="flex-grow:4; text-align : right ;"><button type="button" class="footer-settings-icon"><img src="../icons/eco-green. svg" alt="Notre suivi, comptabilité et divulgation écologiques" title="Notre suivi, comptabilité et divulgation écologiques" style="cursor:pointer;" aria-label="Comptabilité écologique" onclick="openEco()"></button></div>
    
               </div>
      
           <div class="footer-size" style="height:30px;">
               <div><button type="button" class="footer-settings-icon" style="cursor:pointer; text-align:left; flex-grow:1; padding-right:8px; padding-top : 10px; rembourrage en bas : 0px ;" onclick="openEarthbook()" aria-label="Apprenez ce qu'est un Earthbook">Qu'est-ce qu'un Earthbook ?</button>
               </div>
               <div class="github-source" style="margin-right : 0px ;">Le support est le message.</div>
           </div>
      </div>

      
      `;
  }
  }
  
  customElements.define('chap-foot', chapfoot);
  
  