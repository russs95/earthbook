class SettingsCurtain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="left-settings-overlay" class="overlay-settings">

    <div id="left-close-button">
            <span style="cursor:pointer" onclick="closeSettings()" aria-label="Click to close settings page"><img src="../svgs/left-x.svg" alt="Close settings button"></span>
        </div>
    
    <div class="overlay-content-settings">
            
                <div class="compro-toggle">
                <dark-mode-toggle
                id="dark-mode-toggle-1"
                legend=""
                appearance="switch"
                dark="Dark"
                light="Light&nbsp;&nbsp;&nbsp;"
                remember="Remember this"
                ></dark-mode-toggle>
                            </div>
                            
           <!-- <div id="languages">
            <a href="../en/index.html" aria-label="Switch to the English version"><div class="language-selector">EN</div></a>
                <div class="language-selector" title="Désolé, pas encore traduit !" aria-label="French not yet active">FR</div>
                <div class="language-selector" title="Maaf, belum diterjemahkan!" aria-label="Indonesian not active">IN</div>
            </div> -->

        

            <div id="text-adjust">
                <button id="increase-plugin-ac" aria-label="Increase Text Size">+A</button>
                <button id="normal-plugin-ac" aria-label="Return Text Size to Default">A</button>
                <button id="decrease-plugin-ac" aria-label="Decrease Text Size">A-</button>
            </div>
            


            <div class="settings-label" >
            <div class="accessibility-plugin-ac">Contrast</div>
          </div>
          <input aria-label="Contrast" type="range" id="contrast-range-scale" min="0" max="100" value="100" step=20 list=tickmarks>
          <datalist id=tickmarks>
          <option>0</option>
          <option>20</option>
          <option>40</option>
          <option>60</option>
          <option>80</option>
          <option>100</option>
          </datalist onchange="setReadability()">
          
          <div class="settings-label">
            <div class="accessibility-plugin-ac">Sepia</div>
          </div>
          <input aria-label="Sepia" type="range" id="sepia-range-scale" min="0" max="100" value="0" onchange="setReadability()">
          
          <div class="settings-label">
            <div class="accessibility-plugin-ac">Brightness</div>
          </div>
          <input aria-label="Brightness" type="range" id="brightness-range-scale" min="0" max="100" value="100" onchange="setReadability()">
        
          
            
        </div>                                                              
</div>

    `;
}
}

customElements.define('settings-curtain', SettingsCurtain);