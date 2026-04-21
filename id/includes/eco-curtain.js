class EcoCurtain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `


    <div id="eco-curtain2" class="eco-overlay">
    <div class="overlay-content-eco">

      <div class="eco-header">Format Earthbook dikode secara manual dari awal untuk menjadi hijau.</div>

      <div class="eco-text">
      Dalam penulisan dan penerbitan Earthbook, dampak karbon, plastik, dan keanekaragaman hayati dilacak, dicatat, dan diungkapkan. Lihat <a href="https://files.earthen.io/s/ioobYWRRKGEpPp4" target="_blank" aria-label="Laporan Regeneratif buku kami">Laporan Regeneratif</a> lengkap Earthbook ini.
      </div>

      <a href="https://files.earthen.io/s/ioobYWRRKGEpPp4" target="_blank" aria-label="Laporan Regeneratif buku kami">
      <div><img src="../banners/forearth-dark-350px.png" alt="Spanduk yang menyatakan niat Untuk-Bumi kami" style="width:300px;"></div></a>

       <div id="wcb" class="carbonbadge wcb-d"></div>

      <div class="eco-medium">Medium adalah Pesan.</div>


              <button type="button" class="bottom-close-button" style="cursor:pointer;z-index:100;" onclick="closeEco()" aria-label="Klik untuk menutup halaman pop-up ini">
                <img src="../svgs/bottom-x.svg" alt="Tombol tutup halaman">
              </button>
            </div>

  </div>


    `;
}
}

customElements.define('eco-curtain', EcoCurtain);
