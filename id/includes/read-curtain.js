class ReadCurtain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="read-curtain" class="read-overlay">


      <div class="read-overlay-content">


                <div class="read-book-pic">

                  <img src="../covers/read-cover.webp" loading="lazy" alt="Baca Tractatus Ayyew dalam berbagai format." title="Baca Tractatus Ayyew dalam berbagai format.">

                  </div>

                  <div class="read-book-icon">
                     <img src="../assets/icons/reader.svg" width="100px" height="100px" alt="Baca Tractatus Ayyew dalam berbagai format." title="Baca Tractatus Ayyew dalam berbagai format.">
                  </div>


                  <div class="read-book-info">
                    <div class="read-book-info-title">Baca. Bebas.</div>
                    <div class="read-book-info-text">
                      Versi Earthbook dari Tractatus Ayyew tersedia secara gratis. Baca di sini dan sekarang di web. Atau, Anda dapat mengunduh versi PDF atau membeli versi eBook dalam format EPUB.
                    </div>

                    <div class="button-row-read2">
                      <a href="preamble.html">
                      <div id="read-btn" class="action-btn">

                        <i style="background-image: url(../assets/icons/web.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px;"></i>Earthbook (Baca di web)

                      </div>
                      </a>
                    </div>

                    <div class="button-row-read">

                      <div id="buy-btn" class="action-btn" style="cursor:pointer;" onclick="openBuy()">
                      <i style="background-image: url(../assets/icons/buy.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px;"></i>eBook
                      </div>

                      <a href="../books/Tractatus Ayyew - Earthen Ethics - Book 1.pdf" target="_blank">
                      <div id="pdf-btn" class="action-btn"><i style="background-image: url(../assets/icons/pdf.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 2px;"></i> PDF</div>
                      </a>


                     </div>

                  </div>



            <div class="bottom-close-button" style="cursor:pointer; bottom: -56px;" onclick="closeRead()" aria-label="Klik untuk menutup halaman pop-up ini">
            <img src="../assets/svgs/left-x.svg" alt="Tombol tutup halaman beli">
        </div>
      </div>

    </div>

    `;
}
}

customElements.define('read-curtain', ReadCurtain);
