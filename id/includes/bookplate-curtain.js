class Bookplate extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="top-bookplate" class="overlay-bookplate">

    <div class="overlay-content-bookplate">

        <div id="bookplate-img" alt="Mandala Tractatus Ayyew"></div>

        <div id="bookplate-content" style="margin-bottom:35px;">
          <h1 class="bookplate-title">Tractatus Ayyew</h1>

          <h2 class="bookplate-subtitle"><i>Silbumi</i></h2>

          <h3 class="bookplate-authors">Banayan Angway &amp; Russell Maier</h3>

          <h4 class="bookplate-motto"><i>Ad Pax Ayyew</i></h4>

          <h4 class="bookplate-year">M M X X I I</h4>

          <div id="sub-earthbook"><h5>edisi earthBook</h5></div>

          <h6 style="color:grey">Disusun di Kalinga, Filipina dan Bali, Indonesia. Pertama kali dipresentasikan di Konferensi Bandung Spirit 12.02.2021, Université Le Havre. Edisi Earthen.io 22.02.2022, edisi Earthbook 22.12.22. Hak Cipta Russell Maier &amp; Banayan Angway.</h6>

          <div>
          <button type="button" class="bottom-close-button" style="cursor:pointer; bottom:-20px;z-index:100;" onclick="closeBookplate()" aria-label="Klik untuk menutup halaman pop-up ini">
            <img src="../assets/svgs/bottom-x.svg" alt="Tombol tutup">
          </button>
        </div>


    `;
}
}

customElements.define('bookplate-curtain', Bookplate);
