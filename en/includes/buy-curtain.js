class BuyCurtain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="buy-curtain" class="buy-overlay">
    
    <div id="right-close-button">
    <span style="cursor:pointer" onclick="closeBuy()"><img src="../svgs/right-x.svg"></span>
</div>
  <!--  <a href="javascript:void(0)" class="closebtn" onclick="closeBuy()">&times;</a>-->
    
      <div class="buy-overlay-content">
      
      <h2>Buy the eBook or print edition.</h2>
            
            <div class="three-books">
              <div class="buy-book">
                <div class="book-listing">

                  <img src="../photos/cover-epub-400px.webp" alt="The Epub version of the book is best for iphone and android ereaders." title="The Epub version of the book is best for iphone and android ereaders.">

                  <div class="book-buy-info">
                    <p><b>Ebook Edition</b><p>
                    <h6>The optimal reading format for iPhones and Android e-Book apps.</h6>

                    <a href="paypal" class="action-btn" style="cursor:pointer; width:90%;"><i style="background-image: url(../icons/buy.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px;"></i> Buy: 10$</a>

                  </div>
                </div>
              </div>
              

              
              <div class="buy-book">
                <div class="book-listing">
                  <img src="../photos/cover-print-400px.webp"  alt="The print version of the book" title="The print version of the book">
                  <div class="book-buy-info">
                  <p><b>Print Edition</b><p>

                    <h6>The print version of the book is coming soon.  </h6>

                    <a href="paypal" class="action-btn" style="cursor:pointer; width:90%;"><i style="background-image: url(../icons/buy.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px;"></i> Pre-Order: 10$</a>

                  </div>
                </div>
              </div>
              

             
              <div class="buy-book">
                <div class="book-listing">
                  <img src="../photos/cover-mobi-400px.webp"  alt="The Kindle format, and for other select eReaders" title="The Kindle format, and for other select eReaders">
                    
                  <div class="book-buy-info">
                  <p><b>Kindle Edition</b><p>
                      <h6>The Mobi format which works best on Amazon e-readers.</h6>
                      <a href="paypal" class="action-btn" style="cursor:pointer; width:90%;"><i style="background-image: url(../icons/buy.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px;"></i> Buy: 10$</a>
                  </div>
                  
                </div>
              </div>
            </div>

           <!-- <div><p>Prices in USD.  Processing through Paypal.</p></div>-->
        </div>
            
    </div>
    

    `;
}
}

customElements.define('buy-curtain', BuyCurtain);