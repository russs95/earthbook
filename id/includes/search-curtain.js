class SearchCurtain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="right-search-overlay" class="search-overlay">

    <div id="right-close-button">
        <span style="cursor:pointer" onclick="closeSearch(), clearResults()"><img src="../svgs/right-x.svg" alt="Tutup halaman"></span>
    </div>
      <div class="search-overlay-content">

            <div>
                <h1>Pencarian Earthbook</h1>
                <p style="text-align:center">Cari semua bab, lampiran, dan glosarium Earthbook ini.</p>
            </div>

            <div class="search-box" style="padding-bottom:15%;">
              <div class="copy-section">
                <input id="search_input" type="text" placeholder="Masukkan kata pencarian..." aria-label="Masukkan kata kunci...">
                <button class="btn" style="padding:22px 0px 22px 0px;" onclick="EarthbookSearch(['glossary.json', 'chapters-index.json'])" aria-label="Tombol Cari"><i style="background-image: url(../icons/search-white.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 2px;"></i></button>
              </div>
              <div id="search_results"><h6 style="color:grey;">Definisi glosarium ditampilkan terlebih dahulu</h6></div>
            </div>

          </div>
    </div>
    </div>

    `;
}
}

customElements.define('search-curtain', SearchCurtain);
