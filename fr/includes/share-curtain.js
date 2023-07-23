class ShareCurtain extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
  
      <div id="right-share-overlay" class="share-overlay">
  
      <div id="right-close-button">
          <span style="cursor:pointer" onclick="closeShare()"><img src="../svgs/right-x.svg" alt="Bouton de fermeture de la page"></span>
      </div>
      
        <div class="share-overlay-content">
              
              <div>
                  <h1>Partager & Citer</h1> 
                  <h3>Un Earthbook vous permet de partager facilement le livre dans son ensemble et chacun de ses chapitres.</h3>
              </div>
              
              <div class="copy-section">
                
                <div id="page-url" class="copy-box" style="border-left-color: green;" >
                </div>
              
                <button class="btn" data-clipboard-action="copy" data-clipboard-target="#page-url" onclick="confirmCopy()" aria-label="Cliquez pour copier l'URL de ce chapitre dans votre presse-papiers">
                  <div class="copy-check">
                    <div id="check" style="color:green">
                      <span>✓</span>
                    </div>
                  </div>
                  <span style="align-self:center";>Copier</span>
                </button>
                
              </div>
  
              <div id="copy-type">
              <h4>Ou copiez simplement <span href="javascript:void(0)" onclick="getMainurl()" style="text-decoration:underline;cursor:pointer;">l'URL de ce chapitre</span>.</h4>
            </div>
  
        <div><img src="../icons/cc-by-sa.svg" alt="Icône Creative Commons CC-BY-SA" style="height: 25px" title="Le contenu de l'Earthbook est sous licence Creative-Commons ND-SA-AT 4.0, ce qui signifie que vous pouvez librement partager les liens vers cette page, citer des passages, télécharger et partager le PDF - assurez-vous simplement d'attribuer l'œuvre, de partager dans les mêmes conditions et d'enregistrer votre citation."></div>
  
          <!--<h6>Assurez-vous d'utiliser l'outil de <span style="cursor:pointer;text-decoration:underline;" onclick="openComments()">citation</span> (trouvé en bas de chaque chapitre) pour enregistrer vos adaptations et références.</h6>-->
          
    </div>
  </div>  
      `;
    }
  }
  
  customElements.define('share-curtain', ShareCurtain);
  
  var clipboard = new ClipboardJS('.btn');
      
  clipboard.on('success', function (e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
  });
  
  clipboard.on('error', function (e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
  });
  
  // Inject the variables into the inner HTML
  document.getElementById("page-url").innerHTML =
    "Banayan Angway, Russell Maier, 'Le Tractatus Ayyew: D'une éthique terrestre.' (Earthen.io, Philippines, Indonesia, 2022), édition française, chapitre " + chapNo + ": " + chapName + ", " + window.location.href;
  
  function confirmCopy() {
    var x = document.getElementById("check");
    if (x.style.display === "none") {
      x.style.display = "inline";
      x.style.color = "green";
    } else {
      x.style.display = "inline";
    }
  }
  
  function getMainurl() {
    document.getElementById("page-url").innerHTML = window.location.href;
    document.getElementById("copy-type").innerHTML = '<h4>Ou copiez la <span href="javascript:void(0)" onclick="getCitation()" style="text-decoration:underline;cursor:pointer;">citation complète de ce chapitre</span>.</h4>';
  }
  
  function getCitation() {
    document.getElementById("page-url").innerHTML =
    "Banayan Angway, Russell Maier, 'Le Tractatus Ayyew: D'une éthique terrestre.' (Earthen.io, Philippines, Indonesia, 2022), édition française, chapitre " + chapNo + ": " + chapName + ", " + window.location.href;
    document.getElementById("copy-type").innerHTML = '<h4>Ou copiez simplement <span href="javascript:void(0)" onclick="getMainurl()" style="text-decoration:underline;cursor:pointer;">le URL de ce chapitre</span>.</h4>';
  }
  