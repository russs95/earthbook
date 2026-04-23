class FooterComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="navbar-bottom-day">

        <div class="footer-left" style="cursor:pointer;" onclick="openBookplate()" aria-label="Tentang Earthbook ini">
             <div class="footer-icon-left">
             <img src="../assets/svgs/tractatus-simple-mandala-grey.svg" width="40px" title="Halaman judul Tractatus Ayyew" alt="Mandala Tractatus Ayyew">
            </div> <div class="footer-word">tentang</div>
        </div>



        <div class="footer-middle" style="cursor:pointer" onclick="openEarthbook()" aria-label="Pelajari apa itu EarthBook">

        </div>


        <div class="footer-right">

            <div class="footer-icon-right">
            <a href="#top"><img src="../assets/svgs/to-the-top-arrow.svg" alt="Panah ke atas" width="35px" title="Kembali ke atas halaman" aria-label="Klik untuk kembali ke atas halaman"></div></a>
            <div class="footer-word">atas</div>
        </div>
</div>

</div>


</div>

    `;
}
}

customElements.define('footer-component', FooterComponent);
