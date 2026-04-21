class bookNotes extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `


<div id="booknotes-curtain" class="overlay-tc">

<div class="top-close-button">
    <a href="index.html"><img src="../icons/home.svg" alt="Tombol beranda" style="padding-right:10px;padding-left:10px;"></a>
    <img src="../svgs/bottom-x.svg" alt="Tutup" style="padding-left:10px;cursor:pointer" onclick="closeBooknotes()">
    <img src="../icons/search.svg?v=3" alt="Cari" style="padding-left:12px;padding-right:15px;cursor:pointer" onclick="closeBooknotes(), openSearch()">
</div>

<div class="overlay-content-tc" style="min-height:80%;">

    <div class="contents-title-box">
        <div class="contents-title">Catatan Buku</div>
        <div class="contents-books123"><div class="tc-a-book content-button">TERSIMPAN</div></div>
    </div>
    <div id="book-notes-list">




    </div>

        <div style="margin:auto;">
            <button id="reset-settings-bn" onclick="resetBookNotes()" style="width: 200px;margin: 30px auto 20px auto; cursor:pointer; padding:6px;">Belum Ada Catatan</button>

            <div id="instructions-bn" style="font-family:Mulish;color:grey;">Selamat datang di panel Catatan Buku Anda! Sepertinya Anda belum memiliki catatan atau anotasi. Saat membaca, sorot teks isi buku. Cari panel pop-up di bagian bawah layar dan pilih warna atau pilih pensil untuk memberi anotasi. Nanti, klik teks yang disorot untuk menambahkan catatan tambahan atau menyalin atau membuat kutipan.</div>
        </div>

        <div id="collaborative-editing" style="width:80%; padding:20px;background:var(--background-color); border-radius: 10px;margin: auto;margin-top:80px;">

        <br></br>
            <h3 style="font-family:Mulish;margin:0px">Pengeditan Bersama</h3>

            <h6 style="margin:16px auto 10px auto;">Catatan Buku memungkinkan penulis dan editor bekerja sama pada earthbook yang aktif. Ekspor dan unduh catatan buku Anda untuk berbagi semua sorotan dan anotasi dengan pembaca lain.</h6>

            <button id="booknotes-download" onclick="downloadBooknotes()" aria-label="Ekspor Catatan Buku">
            ▼ Ekspor Catatan Buku
            </button>

            <h6 style="margin: 25px 0px 0px 5px;">Impor dan unggah Catatan Buku dari pembaca lain ke perangkat Anda untuk melihatnya.</h6>

            <div id="booknotes-export" style="width:380px; padding:10px;margin: 10px auto 15px auto;background-color:var(--slider);
            border-radius: 10px;width:fit-content;">

                <input id="jsonUpload" type="file" accept=".json" aria-label="Pilih file JSON Catatan Buku">
                 <button id="booknotes-upload-go" onclick="uploadBooknotes()" aria-label="Impor file Catatan Buku">▲ Impor Catatan Buku</button>
            </div>

            <br><br>

    </div>
</div>
</div>

<!-- MENU PALET CATATAN BUKU -->

<div id="bookNotePalette" class="palette-hidden">
   <div class="main-pallette-buttons" id="palletteBar">
        <div  class="highlight-buttons">
            <div id="save-text" class="pallette-text">Simpan:</div>
            <button class="color-btn" onclick="highlightBooknote('green')" style="background:green" aria-label="Sorot Teks Hijau" title="Sorot & Simpan Hijau"></button>
            <button class="color-btn" onclick="highlightBooknote('red')" style="background:red" aria-label="Sorot Teks Merah" title="Sorot & Simpan Merah"></button>
            <button class="color-btn" onclick="highlightBooknote('blue')" style="background:#2daee5" aria-label="Sorot Teks Biru" title="Sorot & Simpan Biru"></button>
        </div>

        <button aria-label="Tambah anotasi" id="booknotesBtn" class="pallette-btn" onclick="highlightBooknote('yellow')">
            <div class="pallette-text" style="color:yellow">Anotasi</div>
        </button>
        <button aria-label="Lihat Catatan Buku Anda" id="viewBooknotesBtn" class="pallette-btn" onclick="updateBNResetButton(),openBooknotes(), bookNotesCreator()">
            <div class="pallette-text">Catatan</div>
        </button>
    </div>

    <div id="annotationEntry" style="width: 90%;
    margin: 20px auto 20px auto;">
    <textarea id="userAnnotation" placeholder="Tambahkan anotasi Anda di sini..."></textarea>
    <button id="annotate-button" style="padding: 8px 15px;cursor:pointer;margin-right:8px;" onclick="appendAnnotation()">Anotasi</button>
    <button id="annotate-cancel" style="padding: 8px 15px;cursor:pointer;"  onclick="cancelAnnotation()">Batal</button>
    </div>
</div>



<!-- PEMBERITAHUAN BAB -->


<div id="chap-notice">
<div id="close-notice" onclick="closeWelcomeNotice()">&times;</div>
<div id="chap-notice-text">
💡  Sepertinya ini pertama kalinya Anda membuka buku ini! Sebelum mulai, pertimbangkan untuk mengikuti <a class="java-link" onclick="guidedTour(), closeWelcomeNotice()" aria-label="Buka Layar Tentang" title="Pelajari lebih lanjut tentang apa itu Earthbook">tur fitur Earthbook</a> singkat dan pastikan untuk <a class="java-link" onclick="openSettings(), closeWelcomeNotice()" aria-label="Buka Pengaturan" title="Sesuaikan untuk mata Anda">mengoptimalkan ±</a> halaman untuk mata Anda.
</div>
</div>


      `;
  }
  }

  customElements.define('booknotes-curtain', bookNotes);
