class SettingsCurtain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="right-settings" class="overlay-settings">
    
    <a href="javascript:void(0)" class="closebtn" onclick="closeSettings()">&times;</a>
    
    <div class="overlay-content-settings">

        <div class="tc-list">

        
            
     
            
            <div class="lead-page-paragraph">
                <p class="accessibility-plugin-ac">Adjust the display of the EarthBook.</p></div>
            

            <div id="text-adjust">
        <button id="increase-plugin-ac">+A</button>
        <button id="normal-plugin-ac">A</button>
        <button id="decrease-plugin-ac">A-</button>
    </div>

            <div class="settings-label"><div class="accessibility-plugin-ac">Toggle Dark Mode</div></div>
        <input type="checkbox" id="darkmode-toggle" onclick="toggleDark()"/>
        <label for="darkmode-toggle" style="text-align: center;margin: auto;"></label>
        <br><br>

        <div class="settings-label"><div class="accessibility-plugin-ac">+ Sepia  -</div></div>
        <input type="range" id="brightness-range" min="0" max="100" value="50" onchange="Sepia(this)">

        <div class="settings-label"><div class="accessibility-plugin-ac">+   Contrast  -</div></div>
        <input type="range" id="brightness-range" min="0" max="100" value="50" onchange="Contrast(this)">

        <div class="settings-label"><div class="accessibility-plugin-ac">+   Brightness  -</div></div>
        <input type="range" id="brightness-range" min="0" max="100" value="50" onchange="Brightness(this)"> 
        <br><br>
        <div class="settings-label"><div class="accessibility-plugin-ac">Select Language</div></div>

        <div class="languages">
        <div class="language-selector">EN</div>
        <div class="language-selector">FR</div>
        <div class="language-selector">IN</div>
    </div> 

        
    </div>                                                                
</div>

    `;
}
}

customElements.define('settings-curtain', SettingsCurtain);