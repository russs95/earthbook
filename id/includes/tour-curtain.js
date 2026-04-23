class TourCurtain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `


<div id="guided-tour" class="modal">
<div class="tour-content">
  <span class="close">&times;</span>

  <div id="information-one" class="information">
  <div class="tour-image"><img src="../svgs/earthbook.svg" title="Baca Bebas" alt="Selamat datang di Earthbook"></div>
    <div class="modal-header">Tur Singkat</div>
    <div class="modal-description">Selamat datang di Earthbook kami! Anda belum pernah membaca buku seperti ini sebelumnya. Kenali cara kerja Earthbook dengan tur terpandu singkat ini...</div>
    <button class="next">Berikutnya ➔</button>
  </div>

  <div id="information-two" style="display:none;" class="information">
  <div class="tour-image"><img src="../svgs/icon-accessibility.svg"  style="margin:auto" title="Ramah Manusia" alt="Baca Bebas"></div>
    <div class="modal-header">Ramah Pengguna</div>
    <div class="modal-description">Earthbook dirancang dari awal untuk nyaman di mata, mudah diakses, dan multibahasa. Gunakan tombol <b>±</b> di sudut kiri atas untuk menyesuaikan pengaturan aksesibilitas Earthbook.</div>
    <button class="back">↩ Kembali</button>
    <button class="next">Berikutnya ➔</button>
  </div>

  <div id="information-three" style="display:none;" class="information">
  <div class="tour-image"><img src="../svgs/icon-ecoaccounting.svg"    title="Ramah Bumi" alt="Baca Bebas"></div>

    <div class="modal-header">Ramah Bumi</div>
    <div class="modal-description">Sepanjang penulisan dan penerbitan Earthbook, dampak karbon, plastik, dan keanekaragaman hayati dilacak secara langsung dan tahunan. Untuk melihat sendiri, cari ikon hijau di bagian alat di bagian bawah setiap bab.</div>
    <button class="back">↩ Kembali</button>
    <button class="next">Berikutnya ➔</button>
  </div>


  <div id="information-four" style="display:none;" class="information">
  <div class="tour-image"><img src="../svgs/icon-opensource.svg" title="Baca Bebas" alt="Baca Bebas"></div>
    <div class="modal-header">Sumber Terbuka</div>
    <div class="modal-description">Kode sumber EarthBook terbuka untuk ditinjau, ditingkatkan, dan dimodifikasi di <a class="java-link" href="https://github.com/russs95/earthbook/" target="_blank">Github</a>. Ini berarti menerbitkan Earthbook terbuka untuk siapa saja di mana saja. Cari tautan kode sumber di bagian alat di bagian bawah setiap bab.</div>
    <button class="back">↩ Kembali</button>
    <button class="next">Berikutnya ➔</button>
  </div>

  <div id="information-five" style="display:none;" class="information">
  <div class="tour-image"><img src="../assets/icons/booknotes.svg" title="Alat Membaca" alt="Baca Bebas"></div>
    <div class="modal-header">Alat Membaca</div>
    <div class="modal-description">Earthbook memiliki seperangkat alat yang canggih! Pilih teks untuk menyorot, menyalin, menyimpan, atau memberi anotasi. Arahkan atau ketuk catatan kaki mana pun untuk melihatnya. Gunakan tombol kanan atas untuk mengutip dan berbagi. Buka kotak alat di footer halaman untuk mengakses panel pencarian, kode sumber, atau akuntansi.</div>
    <button class="back">↩ Kembali</button>
    <button class="next">Berikutnya ➔</button>
  </div>

  <div id="information-six" style="display:none;" class="information">
  <div class="tour-image"><img src="../svgs/icon-revenue.svg"  title="Beli eBook" alt="Beli eBook"></div>

    <div class="modal-header">Dapat Dibeli</div>
    <div class="modal-description">Suka Earthbook ini? Anda <span class="java-link" onclick="closeTour(),openBuy()">dapat membeli</span> versi eBook untuk perpustakaan digital dan eReader Anda. Earthbook 100% independen dari perantara korporat. 97% hasil penjualan eBook diberikan kepada para penulis.</div>
    <button class="back">↩ Kembali</button>
    <button class="back" onclick="closeTour(),openEarthbook()"><i style="background-image: url(../assets/icons/tour.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 3px;"></i> Prinsip Earthbook</button>
    <button class="back" onclick="closeTour(),openBuy()"><i style="background-image: url(../assets/icons/buy.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 3px;"></i> Beli</button>
    <button class="next">✓ Selesai</button>

  </div>
</div>
</div>



<!--PENANDA SOROTAN-->


<div id="highlight-viewer" class="modal" style="background:var(--highlight-modal);">
  <div id="quotation-title">Catatan Buku Anda &nbsp;<div id="bookNoteID"></div></div>
  <div id="close-x">&times;</div>
  <div class="highlight-viewer-content">

    <div class="quotation-box">

        <div id="the-quote"></div>

    </div>

    <div class="quote-info">
      <span style="font-size:small; color:grey;padding-bottom:10px;">Sumber sorotan:</span>
      <div style="font-size:medium;padding-bottom:10px;">
        <div id="noteChapter"></div>
        <div id="book"></div>

      </div>
        <div id="date" style="font-size:small"></div>
        <div id="charCount" style="font-size:small"></div>
        <div id="publicNote" style="font-size:small"></div>


    </div>
    <textarea id="userNote" class="user-annotation" placeholder="Klik untuk memberi anotasi pada sorotan ini..."></textarea>

    <button id="saveBtn" aria-label="Simpan" onclick="appendAnnotation2()">Simpan Anotasi</button>
    <div class="quotation-button-row">
      <button aria-label="Salin pilihan" id="copyBtn" class="quotation-btn" class="pallette-text">Salin
      </button>
      <button id="clearBtn" aria-label="Hapus Sorotan" class="quotation-btn" >Hapus</button>
      <button id="citeBtn" aria-label="Kutip" class="quotation-btn">Kutip</button>
    </div>
  </div>
  </div>


      `;
}
}

customElements.define('tour-curtain', TourCurtain);
