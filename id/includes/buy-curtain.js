class BuyCurtain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="buy-curtain" class="buy-overlay">

      <div class="buy-overlay-content">

            <div class="three-books">
              <div class="buy-book">
                <div class="book-listing">

                  <img src="../photos/cover-epub-400px.webp" loading="lazy" alt="Versi Epub buku ini terbaik untuk eReader iPhone dan Android." title="Versi Epub buku ini terbaik untuk eReader iPhone dan Android.">

                  <div class="book-buy-info">
                    <div class="buy-book-info-title">Edisi eBook</div>
                    <div class="buy-book-info-text">Format Epub ideal untuk Kindle, iPhone &amp; pembaca Android.</div>

                    <a href="https://buy.stripe.com/28og1Z9OS3f7eqc6op" class="action-btn" style="cursor:pointer; width:90%;" aria-label="Klik untuk membeli epub seharga 10$"><i style="background-image: url(../assets/icons/buy.svg); width:20px; height:20px;display: inline-block;background-size: 20px;margin-bottom: -3px;margin-right: 5px;"></i>Beli: 10$</a>

                  </div>
                </div>
              </div>


              <div class="buy-book">
                <div class="book-listing">
                  <img src="../photos/cover-print-400px.webp" loading="lazy" alt="Versi cetak buku" title="Versi cetak buku">
                  <div class="book-buy-info">
                    <div class="buy-book-info-title">Edisi Cetak</div>

                    <div class="buy-book-info-text">Edisi cetak Buku Satu Tractatus Ayyew sedang dalam perjalanan. Pesan lebih awal.</div>

                    <a href="https://buy.stripe.com/9AQ2b90eicPH3LyfZ0" class="action-btn" style="cursor:pointer; width:90%;" aria-label="Klik untuk membeli versi cetak seharga 10$ USD"><i style="background-image: url(../assets/icons/buy.svg); width:20px; height:20px;display: inline-block;background-size: 20px;margin-bottom: -3px;margin-right: 5px;"></i>Pra-pesan: 10$</a>

                  </div>
                </div>
              </div>


              <div class="buy-book">
                <div class="book-listing">
                  <img src="../photos/cover-grattitude-400px.webp" loading="lazy" alt="Pembelian retroaktif untuk mendukung dan berterima kasih kepada penulis" title="Pembelian retroaktif untuk mendukung dan berterima kasih kepada penulis" >

                  <div class="book-buy-info">
                  <div class="buy-book-info-title">Beli Retroaktif</div>
                  <div class="buy-book-info-text">Sudah membaca versi gratis? Lakukan pembelian retroaktif untuk mendukung penulis.</div>
                      <a href="https://buy.stripe.com/aEU7vt3qu9Dveqc5kn" class="action-btn" style="cursor:pointer; width:90%;" aria-label="Lakukan pembelian rasa syukur retroaktif"><i style="background-image: url(../assets/icons/buy.svg); width:20px; height:20px;display: inline-block;background-size: 20px;margin-bottom: -3px;margin-right: 5px;"></i>± Pembayaran</a>
                  </div>

                </div>
              </div>
            </div>

            <div>
            <button type="button" class="bottom-close-button" style="cursor:pointer" onclick="closeBuy()" aria-label="Klik untuk menutup halaman pop-up ini">
              <img src="../svgs/bottom-x.svg" alt="Tombol tutup halaman">
            </button>
          </div>
      </div>

    </div>

    `;
}
}

customElements.define('buy-curtain', BuyCurtain);
