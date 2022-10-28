class BuyCurtain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="buy-curtain" class="buy-overlay">
     
    <a href="javascript:void(0)" class="closebtn" onclick="closeBuy()">&times;</a>
    
      <div class="buy-overlay-content">
      
      <div><h2>Buy a premium format and support independent and regenerative publishing.</h2></div>
            <!--
            <div class="three-books">
              <div class="buy-book">
              <img src="../photos/cover-500px.webp" alt="Tractatus Ayyew - EarthBook" style="width:300px">
                  Read the Ebook Version
                  Free
              </div>
              
              <div class="buy-book">
              <img src="../photos/cover-500px.webp" alt="Tractatus Ayyew - EarthBook" style="width:300px">
                  Download the PDF Version
                  Free
              </div>

              <div class="buy-book">
              <img src="../photos/cover-500px.webp" alt="Tractatus Ayyew - EarthBook" style="width:300px">
                  Buy the EPUB Version
              </div>
            </div>
            
            <div class="three-books">

            <div class="buy-book">
            <img src="../photos/cover-500px.webp" alt="Tractatus Ayyew - EarthBook" style="width:300px">
                Buy the Kindle Version
            </div>

            <div class="buy-book">
            <img src="../photos/cover-500px.webp" alt="Tractatus Ayyew - EarthBook" style="width:300px">
              Buy the print version.
            </div>-->


            </div>
          </div>

    `;
}
}

customElements.define('buy-curtain', BuyCurtain);