class ContentCurtain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="table-of-contents" class="overlay-tc">

     <div id="top-close-button">
         <a href="index.html" aria="Accueil"><img src="../icons/home.svg" alt="Bouton d'accueil" style="padding-right:10px;padding-left:10px;"></a>
         <img src="../svgs/bottom-x.svg" alt="Fermer le bouton" style="padding-left:10px;cursor:pointer" onclick="closeContents()">
         <img src="../icons/search.svg?v=3" alt="Rechercher" style="padding-left:12px;padding-right:15px;cursor:pointer" onclick="closeContents(), openSearch()">
     </div>
        
         <div class="overlay-content-tc">

                 

                     <div class="contents-title-box">
   <div class="contents-title">Livres et contenu</div>
   <div class="contents-books123">
     <div class="tc-a-book content-button" id="button-one" style="border-right:1px gray solid;">Un</div>
     <div class="tc-a-book content-button" id="button-two" style="border-right:1px gray solid;">Deux</div>
     <div class="tc-a-book content-button" id="button-three" style="border-right:1px gray solid;">Trois</div>
     <div class="tc-a-book content-button" id="button-appx">Appx</div>
   </div>
</div>


                     <div id="appx-book-one">

                         <a href="preambule.html">
                         <div class="tc-item">
                             <div class="chapter-name-tc">Préambule</div>
                             <div class="word-count-tc"><i>431 mots</i></div>
                         </div></a>

                         <a href="lepreface.html">
                         <div class="tc-item">
                             <div class="chapter-name-tc">Préface</div>
                             <div class="word-count-tc"><i>1,220 mots</i></div>
                         </div></a>

                         <a href="imaginer.html">
                         <div class="tc-item">
                             <div class="chapter-name-tc">Imaginer</div>
                             <div class="ligne pointillée"></div>
                             <div class="word-count-tc"><i>1,095 mots</i></div>
                         </div>
                         </a>

                         <a href="inedite.html">
                         <div class="tc-item">
                             <div class="chapter-name-tc">Plastique 1.0</div>
                             <div class="ligne pointillée"></div>
                             <div class="word-count-tc"><i>623 mots</i></div>
                         </div>
                         </a>

                         <a href="stellaire.php">
                         <div class="tc-item">
                             <div class="chapter-name-tc">Une histoire interstellaire</div>
                             <div class="ligne pointillée"></div>
                             <div class="word-count-tc"><i>1,021 mots</i></div>
                         </div>
                         </a>

                         <a href="motifs.php">
                         <div class="tc-item">
                         <div class="chapter-name-tc">Modèles de processus</div>
                         <div class="ligne pointillée"></div>
                         <div class="word-count-tc"><i>837 mots</i></div>
                         </div>
                         </a>

                         <a href="kincentric.php">
                         <div class="tc-item">
                         <div class="chapter-name-tc">Relations apparentées</div>
                         <div class="ligne pointillée"></div>
                         <div class="word-count-tc"><i>1,508 mots</i></div>
                         </div>
                         </a>

                         <a href="nature.php">
                         <div class="tc-item">
                         <div class="chapter-name-tc">Le sophisme de la nature</div>
                         <div class="ligne pointillée"></div>
                         <div class="word-count-tc"><i>973 mots</i></div>
                         </div>
                         </a>

                         <a href="terre.php">
                         <div class="tc-item">
                             <div class="chapter-name-tc">Les chemins terrestres</div>
                             <div class="ligne pointillée"></div>
                             <div class="word-count-tc"><i>784 mots</i></div>
                            
                         </div>
                         </a>
                     </div>



                     <div id="appx-book-two" style="display:none;">
                         
                     
                     <a href="epigraph-2.php">
                     <div class="tc-item">
                         <div class="chapter-name-tc">Epigraph II</div>
                         <div class="word-count-tc"><i>45 mots</i></div>
                     </div></a>
                     
                     <a href="spirales.php">
                     <div class="tc-item">
                         <div class="chapter-name-tc">Cycles en spirale</div>
                         <div class="word-count-tc"><i>1,682 mots</i></div>
                     </div></a>
                     
                     <a href="spirales.php">
                         <div class="tc-item">
                             <div class="chapter-name-tc">Cycles en spirale</div>
                             <div class="word-count-tc"><i>1,682 mots</i></div>
                         </div></a>

                        
                         <a href="énergie.php">
                         <div class="tc-item">
                             <div class="chapter-name-tc">Le tour du saumon</div>
                             <div class="word-count-tc"><i>2,294 mots</i></div>
                         </div></a>

                         <a href="unpublished.php">
                         <div class="tc-item">
                             <div class="chapter-name-tc">La manière du mollusque</div>
                             <div class="ligne pointillée"></div>
                             <div class="word-count-tc"><i>non publié</i></div>
                         </div>
                         </a>

                         <a href="unpublished.php">
                         <div class="tc-item">
                             <div class="chapter-name-tc">Le motif du polype</div>
                             <div class="ligne pointillée"></div>
                             <div class="word-count-tc"><i>non publié</i></div>
                         </div>
                         </a>

                         <a href="unpublished.php">
                         <div class="tc-item">
                             <div class="chapter-name-tc">Les moyens du myccorhyzien</div>
                             <div class="ligne pointillée"></div>
                             <div class="word-count-tc"><i>nnpublié</i></div>
                         </div>
                         </a>

                     </div>

                     <div id="appx-book-three" style="display:none;">
                     <a href="epigraph-3.php">
                     <div class="tc-item">
                         <div class="chapter-name-tc">Epigraph III</div>
                         <div class="word-count-tc"><i>56</i></div>
                     </div></a>
                     
                     <a href="unpublished.php">
                         <div class="tc-item">
                             <div class="chapter-name-tc">Plastique 2.0</div>
                             <div class="word-count-tc"><i>non publié</i></div>
                         </div></a>

                         <a href="unpublished.php">
                         <div class="tc-item">
                             <div class="chapter-name-tc">Séquestration du plastique</div>
                             <div class="word-count-tc"><i>non publié</i></div>
                         </div></a>

                         <a href="unpublished.php">
                         <div class="tc-item">
                             <div class="chapter-name-tc">Transition pétro-capitale</div>
                             <div class="ligne pointillée"></div>
                             <div class="word-count-tc"><i>non publié</i></div>
                         </div>
                         </a>

                         <a href="unpublished.php">
                         <div class="tc-item">
                             <div class="chapter-name-tc">Ad Pax Ayyew</div>
                             <div class="ligne pointillée"></div>
                             <div class="word-count-tc"><i>non publié</i></div>
                         </div>
                         </a>

                         <a href="unpublished.php">
                         <div class="tc-item">
                             <div class="chapter-name-tc">Les moyens du myccorhyzien</div>
                             <div class="ligne pointillée"></div>
                             <div class="word-count-tc"><i>non publié</i></div>
                         </div>
                         </a>

                     </div>

                     <div id="appx-book-appx" style="display:none ;">
                        
                         <a href="resumes.html">
                         <div class="tc-item">
                             <div class="chapter-name-tc">Résumés</div>
                             <div class="word-count-tc"><i>501 mots</i></div>
                         </div></a>

                         <a href="dedicace.html">
                         <div class="tc-item">
                             <div class="chapter-name-tc">Dédicace</div>
                             <div class="word-count-tc"><i>26 mots</i></div>
                         </div></a>


                         <a href="pour-terre.html">
                         <div class="tc-item">
                             <div class="chapter-name-tc">Déclaration pour la Terre</div>
                             <div class="ligne pointillée"></div>
                             <div class="word-count-tc"><i>54 mots</i></div>
                         </div>
                         </a>

                         <a href="gratitude.html">
                         <div class="tc-item">
                             <div class="chapter-name-tc">Gratitude</div>
                             <div class="ligne pointillée"></div>
                             <div class="word-count-tc"><i>541 mots</i></div>
                         </div>
                         </a>

                         <a href="publication.html">
                         <div class="tc-item">
                             <div class="chapter-name-tc">Publication</div>
                             <div class="ligne pointillée"></div>
                             <div class="word-count-tc"><i>133 mots</i></div>
                         </div>
                         </a>

                         <a href="auteurs.html">
                         <div class="tc-item">
                             <div class="chapter-name-tc">Auteurs</div>
                             <div class="ligne pointillée"></div>
                             <div class="word-count-tc"><i>218 mots</i></div>
                         </div>
                         </a>

                         <a href="declarations.html">
                         <div class="tc-item">
                             <div class="chapter-name-tc">Déclarations</div>
                             <div class="ligne pointillée"></div>
                             <div class="word-count-tc"><i>367 mots</i></div>
                         </div>
                         </a>

                         <a href="biblio.html">
                         <div class="tc-item">
                             <div class="chapter-name-tc">Bibliographie</div>
                             <div class="ligne pointillée"></div>
                             <div class="word-count-tc"><i>740 mots</i></div>
                         </div>
                         </a>

                         <a href="glossaire.html">
                         <div class="tc-item">
                             <div class="chapter-name-tc">Glossaire</div>
                             <div class="ligne pointillée"></div>
                             <div class="word-count-tc"><i>342 mots</i></div>
                         </div>
                         </a>


                     </div>


                  
                     <div class="tc-button-row">
                     <a href="index.html" style="height: 24px; flex-grow: 1"><div id="tour-btn" class="action-btn" ><i style="background-image: url(../icons/home.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 3px;"></i></div></a>

                     <div id="buy-btn" class="action-btn" onclick="closeContents(), guidedTour()" style="height: 24px;flex-grow: 1"><i style="background-image: url(../icons/tour.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px; cursor:pointer;"></i> Tour</div>

                     <div id="buy-btn" class="action-btn" onclick="openBuy()" style="height: 24px;flex-grow: 1"><i style="background-image: url(../icons/buy.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px; cursor:pointer;"></i></div>

                     <div id="buy-btn" class="action-btn" onclick="openBookplate()" style="height: 22px;flex-grow: 1"><i style="background-image: url(../icons/about.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px; cursor:pointer;"></i></div>

                     <div id="buy-btn" class="action-btn" onclick="openEco()" style="height: 24px;flex-grow: 1"><i style="background-image: url(../icons/eco-green.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 0px; cursor:pointer;"></i></div>
                      
                       
                         </div>

             <br><br>
                 </div>
                 </div>
                

             </div>

     </div>


    `;
}
}

customElements.define('content-curtain', ContentCurtain);




document.addEventListener("DOMContentLoaded", function() {
    // Show the initial content on page load
    showContent("one");
  
    // Add click event listeners to the buttons
    document.getElementById("button-one").addEventListener("click", function() {
      showContent("one");
    });
  
    document.getElementById("button-two").addEventListener("click", function() {
      showContent("two");
    });
  
    document.getElementById("button-three").addEventListener("click", function() {
      showContent("three");
    });
  
    document.getElementById("button-appx").addEventListener("click", function() {
      showContent("appx");
    });
  });
  
  function showContent(content) {
    // Hide all content divs
    document.getElementById("appx-book-one").style.display = "none";
    document.getElementById("appx-book-two").style.display = "none";
    document.getElementById("appx-book-three").style.display = "none";
    document.getElementById("appx-book-appx").style.display = "none";
  
    // Show the selected content div
    document.getElementById(`appx-book-${content}`).style.display = "block";
  
    // Change the color of the corresponding word to red
    const buttons = document.getElementsByClassName("content-button");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.color = "grey"; // Set all buttons to gray by default
    }
  
    // Set the selected button to red
    document.getElementById(`button-${content}`).style.color = "var(--text-color)";
  }
  
