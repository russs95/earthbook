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

                <br><br>


            <dark-mode-toggle
            id="dark-mode-toggle-5"
            class="slider"
            legend="Dark Slider"
            remember="Remember this"
            appearance="toggle"
          ></dark-mode-toggle>
                            </div>


                            
           <!-- <div id="languages">
            <a href="../en/index.html" aria-label="Switch to the English version"><div class="language-selector">EN</div></a>
                <div class="language-selector" title="Désolé, pas encore traduit !" aria-label="French not yet active">FR</div>
                <div class="language-selector" title="Maaf, belum diterjemahkan!" aria-label="Indonesian not active">IN</div>
            </div> -->

        

   

            <div id="text-adjust">
            <button id="increase-font-size" aria-label="Increase Text Size" onclick="adjustFontSize('accessibility-plugin-ac', 'increase')">+A</button>
            <button id="normal-font-size" aria-label="Return Text Size to Default" onclick="adjustFontSize('accessibility-plugin-ac', 'normal')">A</button>
            <button id="decrease-font-size" aria-label="Decrease Text Size" onclick="adjustFontSize('accessibility-plugin-ac', 'decrease')">A-</button>
          </div>
          
            


            <div class="settings-label" >
            <div class="accessibility-plugin-ac">Contrast</div>
          </div>
          <input aria-label="Contrast" type="range" id="contrast-range-scale" min="0" max="100" value="100" onchange="setReadability()">
          
          <div class="settings-label">
            <div class="accessibility-plugin-ac">Sepia</div>
          </div>
          <input aria-label="Sepia" type="range" id="sepia-range-scale" min="0" max="100" value="0" onchange="setReadability()">
          
          <div class="settings-label">
            <div class="accessibility-plugin-ac">Brightness</div>
          </div>
          <input aria-label="Brightness" type="range" id="brightness-range-scale" min="0" max="100" value="100" onchange="setReadability()">
        
          
          <button onclick="reset2Default()" style="width: 200px;
          margin: 30px auto 0px auto;">Reset to Defaults</button>
        </div>                                                              
</div>

    `;
}
}

customElements.define('settings-curtain', SettingsCurtain);