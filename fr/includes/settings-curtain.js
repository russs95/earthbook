class SettingsCurtain extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
  
      <div id="left-settings-overlay" class="overlay-settings">
  
      <div id="left-close-button">
              <span style="cursor:pointer" onclick="closeSettings()" aria-label="Cliquez pour fermer la page des paramètres"><img src="../svgs/left-x.svg" alt="Bouton de fermeture des paramètres"></span>
          </div>
      
      <div class="overlay-content-settings">
              
          <div id="languages">
              <a href="../en/index.html" aria-label="Passer à la version anglaise">
                  <div class="language-selector">EN</div></a>
  
                
                  <a href="#" class="language-selector" title="Désolé, pas encore traduit !" aria-label="Désolé, pas encore traduit !" onclick="showFRTranslationAlert()">FR</a>
  
                  <a href="#" class="language-selector" title="Désolé, pas encore traduit !" aria-label="Indonésien non actif" onclick="showIDTranslationAlert()">IN</a>
  
              </div>
  
              <div id="text-adjust">
                  <button id="increase-font-size" aria-label="Augmenter la taille du texte" onclick="adjustFontSize('accessibility-plugin-ac', 'increase')">+A</button>
                  <button id="normal-font-size" aria-label="Revenir à la taille de texte par défaut" onclick="adjustFontSize('accessibility-plugin-ac', 'normal')">A</button>
                  <button id="decrease-font-size" aria-label="Réduire la taille du texte" onclick="adjustFontSize('accessibility-plugin-ac', 'decrease')">A-</button>
            </div>
            
              
  
  
              <div class="settings-label" >
              <div class="accessibility-plugin-ac">Contraste</div>
            </div>
            <input aria-label="Contraste" type="range" id="contrast-range-scale" min="0" max="100" value="100" onchange="setReadability()">
            
            <div class="settings-label">
              <div class="accessibility-plugin-ac">Sépia</div>
            </div>
            <input aria-label="Sépia" type="range" id="sepia-range-scale" min="0" max="100" value="0" onchange="setReadability()">
            
            <div class="settings-label">
              <div class="accessibility-plugin-ac">Luminosité</div>
            </div>
            <input aria-label="Luminosité" type="range" id="brightness-range-scale" min="0" max="100" value="100" onchange="setReadability()">
  
            
          
            
            <button id="reset-settings" onclick="reset2Default()" style="width: 200px;
            margin: 30px auto 50px auto; cursor:pointer; padding:6px;">⟲ Rétablir les paramètres par défaut.</button>
  
  
            <div class="compro-toggle">
  
            <div class="settings-label">
            <div class="accessibility-plugin-ac">Choisir le mode Nuit ou Jour :</div>
            </div>
  
              <dark-mode-toggle
              id="dark-mode-toggle-5" style="padding:10px;font-size:small;"
              class="slider"
              legend=""
              remember="Se souvenir pour toutes les pages"
              appearance="toggle">
              </dark-mode-toggle>
  
            </div>
          </div>                                                              
  </div>
  
      `;
    }
  }
  

customElements.define('settings-curtain', SettingsCurtain);


  // Function to show the alert message
  function showIDTranslationAlert() {
    alert("Maaf, belum diterjemahkan! But we're working on it.");
  }

    // Function to show the alert message with a clickable URL
function showFRTranslationAlert() {
  const url = "https://book.earthen.io/books/Tractatus-Ayyew%20_d%E2%80%99une-%C3%A9thique%20terrestre_|_Livre%20Premier_|_Angway-&-Maier.pdf";
  const message = `Désolé! Les versions EarthBook et EBook du Tractatus Ayyew ne sont pas encore prêtes. Cependant, vous pouvez télécharger la version PDF en clickant OK...`;
  if (window.confirm(message)) {
    window.location.href = url;
  }
}




function reset2Default() {
    localStorage.clear();
    const brightness = 100;
    const contrast = 100;
    const sepia = 0;
    const userSetFontSize = 16;
    const navbarHeight = 60;
  
    document.getElementById("brightness-range-scale").value = brightness;
    document.getElementById("contrast-range-scale").value = contrast;
    document.getElementById("sepia-range-scale").value = sepia;
    document.documentElement.style.filter = `brightness(${brightness}%) contrast(${contrast}%) sepia(${sepia}%)`;
  
    //adjustFontSize('accessibility-plugin-ac', 'normal');
    document.getElementById('earthbook-navbar').style.minHeight = `${navbarHeight}px`;
  
    document.getElementById("reset-settings").innerHTML = "&#10003; Paramètres réinitialisés";
  }


  
