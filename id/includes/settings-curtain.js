class SettingsCurtain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="left-settings-overlay" class="overlay-settings">

    <div id="left-close-button">
            <span style="cursor:pointer" onclick="closeSettings()" aria-label="Tutup halaman pengaturan"><img src="../svgs/left-x.svg" alt="Tutup pengaturan"></span>
        </div>

    <div class="overlay-content-settings">

        <div id="languages">
            <a href="../en/index.html" aria-label="Beralih ke versi Bahasa Inggris">
                <div class="language-selector">EN</div></a>


                <a href="../fr/index.html" class="language-selector" title="Traduction en progres!" aria-label="Traduction en progres">FR</a>

                <a href="../id/index.html" class="language-selector" title="Versi Bahasa Indonesia" aria-label="Versi Bahasa Indonesia" style="font-weight:bold;">ID</a>

            </div>


        <div id="text-adjust">
            <button id="increase-font-size" aria-label="Perbesar Ukuran Teks" onclick="adjustFontSize('accessibility-plugin-ac', 'increase')">+A</button>
            <button id="normal-font-size" aria-label="Kembalikan Ukuran Teks ke Default" onclick="adjustFontSize('accessibility-plugin-ac', 'normal')">A</button>
            <button id="decrease-font-size" aria-label="Perkecil Ukuran Teks" onclick="adjustFontSize('accessibility-plugin-ac', 'decrease')">A-</button>
          </div>


          <div class="settings-label">
          <div class="accessibility-plugin-ac">Kontras</div>
        </div>
        <input aria-label="Kontras" type="range" id="contrast-range-scale" min="0" max="100" value="60" onchange="setReadability()">

        <div class="settings-label">
          <div class="accessibility-plugin-ac">Sepia</div>
        </div>
        <input aria-label="Sepia" type="range" id="sepia-range-scale" min="0" max="100" value="0" onchange="setReadability()">

        <div class="settings-label">
          <div class="accessibility-plugin-ac">Kecerahan</div>
        </div>
        <input aria-label="Kecerahan" type="range" id="brightness-range-scale" min="0" max="100" value="60" onchange="setReadability()">

        <button id="reset-settings" onclick="reset2Default()" style="width: 200px; margin: 30px auto 50px auto; cursor:pointer; padding:6px;">⟲ Reset ke Default</button>


          <div class="compro-toggle">

          <div class="settings-label">
          <div class="accessibility-plugin-ac">Pilih mode Malam atau Siang:</div>
          </div>

            <dark-mode-toggle
            id="dark-mode-toggle-5" style="padding:10px;font-size:small;"
            class="slider"
            legend=""
            remember="Ingat untuk semua halaman:"
            appearance="toggle">
            </dark-mode-toggle>

          </div>
        </div>
</div>

    `;
}
}

customElements.define('settings-curtain', SettingsCurtain);
