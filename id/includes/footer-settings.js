class footSettings extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="footer-settings">

    <div class="footer-size" style="height:58px;">

      <div class="footer-icon"><button type="button" class="footer-settings-icon" style="cursor:pointer" aria-label="Kembali ke beranda" title="Kembali ke beranda" onclick="location.href='index.html'" ><img src="../assets/icons/home.svg" alt="ikon beranda"></button></div>

    <!--Bookplate -->
      <div style=""><button type="button" class="footer-settings-icon" style="cursor:pointer" onclick="openBookplate()" aria-label="Klik untuk membuka halaman judul"><img src="../assets/svgs/my-book-header-logo-grey.svg" title="Halaman judul Tractatus Ayyew" alt="Mandala Tractatus Ayyew"></button></div>


      <div class="footer-icon"><button type="button" class="footer-settings-icon"><img src="../assets/icons/buy.svg" style="cursor:pointer" onclick="openBuy()" alt="Ikon beli" aria-label="Beli buku" title="Beli buku"></button></div>

      <div class="footer-icon"><button type="button" class="footer-settings-icon"><img src="../assets/icons/search.svg?v=2" alt="Ikon cari" style="cursor:pointer" onclick="openSearch()" aria-label="Cari Earthbook" title="Cari Earthbook"></button></div>

      <div class="footer-icon"><button type="button" class="footer-settings-icon"><img src="../assets/icons/share.svg" alt="ikon bagikan" style="cursor:pointer" onclick="openShare()" aria-label="Klik untuk menyalin tautan Earthbook untuk dibagikan" title="Klik untuk menyalin tautan Earthbook untuk dibagikan"></button></div>

      <div class="footer-icon"><button type="button" class="footer-settings-icon"><img src="../assets/icons/tour.svg" alt="Tur Terpandu" style="cursor:pointer" onclick="guidedTour()" aria-label="Klik untuk tur fitur Earthbook singkat" title="Klik untuk tur fitur Earthbook singkat"></button></div>

      <div class="footer-icon"><button type="button" class="footer-settings-icon"><img src="../assets/svgs/to-the-top-arrow.svg" alt="Ke atas halaman" style="cursor:pointer" onclick="location.href='#top'" aria-label="Pergi ke atas halaman"></button></div>

      <div class="footer-icon"><button type="button" class="footer-settings-icon"><img src="../assets/icons/booknotes.svg" alt="Ikon catatan buku" style="cursor:pointer" onclick="updateBNResetButton(),openBooknotes(), bookNotesCreator()" aria-label="Klik untuk melihat Catatan Buku Anda" title="Klik untuk melihat Catatan Buku Anda"></button></div>


      <div class="footer-icon" style="text-align: right;">
      <button type="button" class="footer-settings-icon"><img src="../assets/icons/eco-green.svg" alt="Pelacakan, Akuntansi, dan Pengungkapan Ekologis Kami" title="Pelacakan, Akuntansi, dan Pengungkapan Ekologis Kami" style="cursor:pointer;" aria-label="Buka Akuntansi Ekologis" onclick="openEco()"></button></div>

    </div>

    <div class="footer-size" style="height:30px;">

        <div><button type="button" class="footer-settings-icon" style="cursor:pointer; text-align:left; width:fit-content;flex-grow:1; padding-right:8px; padding-top: 10px;padding-bottom: 0px;" onclick="openEarthbook()" aria-label="Pelajari apa itu Earthbook">Apa itu Earthbook?</button>
        </div>

        <div class="github-source" style="margin-right: 0px;">Medium adalah Pesan.
        </div>

    </div>
    </div>


    `;
}
}

customElements.define('footer-settings', footSettings);
