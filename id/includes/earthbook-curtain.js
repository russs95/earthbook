class Earthbook extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
  <div id="bottom-earthbook" class="overlay-earthbook">



      <div class="overlay-content-earthbook">
            <div>
                <h1>Apa itu Earthbook?</h1>
            </div>


            <div class="virtue-box-box">
              <div id="virtue-box-mobile">

                <div class="virtue"><img src="../svgs/icon-opensource.svg" width="100%" height="100%" title="Kode EarthBook sepenuhnya sumber terbuka" alt="Kode EarthBook sepenuhnya sumber terbuka" style="cursor:pointer" onclick="openOS()"><div id="OS" class="virtue-desc">Kode sumber EarthBook terbuka untuk ditinjau, ditingkatkan, dan dimodifikasi <a href="https://github.com/russs95/earthbook" aria-label="Klik untuk pergi ke repositori Github kami" target="_blank">di Github</a>. Ini berarti menerbitkan Earthbook terbuka untuk siapa saja di mana saja.</div>
                </div>

                <div class="virtue"><img src="../svgs/icon-biodiversity.svg"  width="100%" height="100%" title="Mendukung, Mencatat &amp; Melacak Keanekaragaman Hayati" alt="Mendukung, Mencatat &amp; Melacak Keanekaragaman Hayati" style="cursor:pointer" onclick="openBio()"><div id="bio" class="virtue-desc">Selama penulisan dan penerbitan buku ini, spesies yang didukung oleh ruang fisik perusahaan dilacak dan dicatat. <a href="https://russs.net/forest" target="_blank" aria-label="Pergi ke daftar kehidupan lengkap penerbit">Lihat daftar kehidupan lengkap penerbit.</a></div>
                </div>

                <div class="virtue"><img src="../svgs/icon-ecoaccounting.svg"  width="100%" height="100%" title="Pengungkapan Akuntansi Ekologis" alt="Pengungkapan Akuntansi Ekologis" style="cursor:pointer" onclick="openAcc()"><div id="acc" class="virtue-desc">Sepanjang penulisan dan penerbitan Earthbook, dampak karbon, plastik, dan keanekaragaman hayati dilacak, dicatat, dan diungkapkan setiap tahun. Lihat <a href="accounting.php" aria-label="Klik untuk membuka laporan PDF Regen untuk Earthbook">laporan akuntansi ekologis Earthbook ini.</a></div>
                </div>

              </div>

              <div id="virtue-box-mobile">

                <div class="virtue"><img src="../svgs/icon-for-earth.svg"  width="100%" height="100%" title="Perusahaan Untuk-Bumi" alt="Perusahaan Untuk-Bumi"  onclick="openForE()"><div id="fore" class="virtue-desc" style="display:block;">Medium adalah pesan: Earthbook adalah untuk pembaca, penulis, &amp; Bumi. Klik ikon untuk mempelajari prinsip-prinsip regeneratif yang memandu proyek ini.</div>
                </div>

                <div class="virtue"><img src="../svgs/icon-carbonseq.svg"  width="100%" height="100%" title="Dampak Karbon Net-Subtraktif" alt="Dampak Karbon Net-Subtraktif"  onclick="openCo2()"><div id="co2" class="virtue-desc">Earthbook memiliki jejak terkecil dari semua format membaca. Optimasi pemuatan dan caching menempatkan emisi digital Earthbook di 10% teratas situs terbersih. <span style="cursor:pointer; text-decoration:underline;" onclick="openEco()" aria-label="Lihat audit CO2 halaman langsung kami">Lihat audit CO2e langsung.</span></div>
                </div>

                <div class="virtue"><img src="../svgs/icon-creativecommons.svg"  width="100%" height="100%" title="Creative Commons" alt="Lisensi Creative Commons"  onclick="openCc()"><div id="cc" class="virtue-desc">Kode dan konten buku ini dilisensikan di bawah Lisensi Creative Commons BY-SA-ND 4.0. <a href="https://github.com/russs95/earthbook/" target="_blank" aria-label="Akses repositori Github Earthbook"> Akses repositori Github.</a></div>
                </div>

            </div>

            <div id="virtue-box-mobile" style="margin-bottom:170px;">

              <div class="virtue"><img src="../svgs/icon-readfreely.svg"  width="100%" height="100%" title="Baca Bebas" alt="Baca Bebas"  onclick="openFree()"><div id="free" class="virtue-desc">Buku ini tersedia untuk dibaca <a href="preamble.html">secara bebas daring</a> dan sebagai <a href="https://files.earthen.io/s/ZjS9TgWk5Tr7b4q" target="_blank" aria-label="Klik untuk mengunduh versi PDF gratis Earthbook">PDF yang dapat diunduh gratis</a>.</div>
              </div>

              <div class="virtue"><img src="../svgs/icon-revenue.svg"  width="100%" height="100%" title="Dukung Penerbitan Independen" alt="Dukung Penerbitan Independen" onclick="openRev()"><div id="rev" class="virtue-desc">Earthbook 100% independen dari perantara korporat. 97% hasil <span style="cursor:pointer; text-decoration:underline;" onclick="openBuy()" aria-label="Klik untuk pergi ke halaman pembelian">penjualan eBook</span> diberikan kepada para penulis.</div>
              </div>

              <div class="virtue"><img src="../svgs/icon-accessibility.svg"  width="100%" height="100%" title="Dibuat semudah mungkin untuk manusia" alt="Aksesibilitas Maksimal"  style="cursor:pointer" onclick="openMax()"><div id="max" class="virtue-desc">Earthbook dirancang dari awal untuk nyaman di mata, mudah diakses, dan multibahasa. <span style="cursor:pointer; text-decoration:underline;" onclick="openSettings()" aria-label="Klik untuk menyesuaikan pengaturan Earthbook">Coba sesuaikan pengaturan Earthbook.</span></div>

            </div>
          </div>
        </div>

          <div id="medium-message">
          <span style="font-size:0.7em;font-style:normal;"><a href="https://github.com/russs95/earthbook/blob/main/README.md" title="Pergi ke repositori proyek Github" target="_blank">Terbitkan Earthbook Anda.</a></span>
          </div>

          <div>
            <button type="button" class="bottom-close-button" style="cursor:pointer" onclick="closeEarthbook()" aria-label="Klik untuk menutup halaman pop-up ini">
              <img src="../svgs/bottom-x.svg" alt="Tombol tutup halaman">
            </button>
          </div>

    </div>
</div>

    `;
}
}

customElements.define('earthbook-curtain', Earthbook);


function openOS() {
  var x = document.getElementById("OS");
  var y = document.getElementById("bio");
  var w = document.getElementById("acc");
  var z = document.getElementById("fore");
  var a = document.getElementById("co2");
  var b = document.getElementById("cc");
  var c = document.getElementById("free");
  var d = document.getElementById("rev");
  var e = document.getElementById("max");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
    w.style.display = "none";
    z.style.display = "none";
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
  } else {
    x.style.display = "none";
}
}

function openBio() {
  var x = document.getElementById("OS");
  var y = document.getElementById("bio");
  var w = document.getElementById("acc");
  var z = document.getElementById("fore");
  var a = document.getElementById("co2");
  var b = document.getElementById("cc");
  var c = document.getElementById("free");
  var d = document.getElementById("rev");
  var e = document.getElementById("max");
  if (y.style.display === "none") {
    x.style.display = "none";
    y.style.display = "block";
    w.style.display = "none";
    z.style.display = "none";
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
  } else {
    y.style.display = "none";
}
}

function openAcc() {
  var x = document.getElementById("OS");
  var y = document.getElementById("bio");
  var w = document.getElementById("acc");
  var z = document.getElementById("fore");
  var a = document.getElementById("co2");
  var b = document.getElementById("cc");
  var c = document.getElementById("free");
  var d = document.getElementById("rev");
  var e = document.getElementById("max");
  if (w.style.display === "none") {
    x.style.display = "none";
    y.style.display = "none";
    w.style.display = "block";
    z.style.display = "none";
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
  } else {
    w.style.display = "none";
}
}

function openForE() {
  var x = document.getElementById("OS");
  var y = document.getElementById("bio");
  var w = document.getElementById("acc");
  var z = document.getElementById("fore");
  var a = document.getElementById("co2");
  var b = document.getElementById("cc");
  var c = document.getElementById("free");
  var d = document.getElementById("rev");
  var e = document.getElementById("max");
  if (z.style.display === "none") {
    x.style.display = "none";
    y.style.display = "none";
    w.style.display = "none";
    z.style.display = "block";
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
  } else {
    z.style.display = "none";
}
}

function openCo2() {
  var x = document.getElementById("OS");
  var y = document.getElementById("bio");
  var w = document.getElementById("acc");
  var z = document.getElementById("fore");
  var a = document.getElementById("co2");
  var b = document.getElementById("cc");
  var c = document.getElementById("free");
  var d = document.getElementById("rev");
  var e = document.getElementById("max");
  if (a.style.display === "none") {
    x.style.display = "none";
    y.style.display = "none";
    w.style.display = "none";
    z.style.display = "none";
    a.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
  } else {
    a.style.display = "none";
}
}

function openCc() {
  var x = document.getElementById("OS");
  var y = document.getElementById("bio");
  var w = document.getElementById("acc");
  var z = document.getElementById("fore");
  var a = document.getElementById("co2");
  var b = document.getElementById("cc");
  var c = document.getElementById("free");
  var d = document.getElementById("rev");
  var e = document.getElementById("max");
  if (b.style.display === "none") {
    x.style.display = "none";
    y.style.display = "none";
    w.style.display = "none";
    z.style.display = "none";
    a.style.display = "none";
    b.style.display = "block";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
  } else {
    b.style.display = "none";
}
}

function openFree() {
  var x = document.getElementById("OS");
  var y = document.getElementById("bio");
  var w = document.getElementById("acc");
  var z = document.getElementById("fore");
  var a = document.getElementById("co2");
  var b = document.getElementById("cc");
  var c = document.getElementById("free");
  var d = document.getElementById("rev");
  var e = document.getElementById("max");
  if (c.style.display === "none") {
    x.style.display = "none";
    y.style.display = "none";
    w.style.display = "none";
    z.style.display = "none";
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "block";
    d.style.display = "none";
    e.style.display = "none";
  } else {
  c.style.display = "none";
}
}

function openRev() {
  var x = document.getElementById("OS");
  var y = document.getElementById("bio");
  var w = document.getElementById("acc");
  var z = document.getElementById("fore");
  var a = document.getElementById("co2");
  var b = document.getElementById("cc");
  var c = document.getElementById("free");
  var d = document.getElementById("rev");
  var e = document.getElementById("max");
  if (d.style.display === "none") {
    x.style.display = "none";
    y.style.display = "none";
    w.style.display = "none";
    z.style.display = "none";
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "block";
    e.style.display = "none";
  } else {
    d.style.display = "none";
}
}

function openMax() {
  var x = document.getElementById("OS");
  var y = document.getElementById("bio");
  var w = document.getElementById("acc");
  var z = document.getElementById("fore");
  var a = document.getElementById("co2");
  var b = document.getElementById("cc");
  var c = document.getElementById("free");
  var d = document.getElementById("rev");
  var e = document.getElementById("max");
  if (e.style.display === "none") {
    x.style.display = "none";
    y.style.display = "none";
    w.style.display = "none";
    z.style.display = "none";
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "block";
  } else {
    e.style.display = "none";
}
}
