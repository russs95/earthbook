class BuyCurtain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="buy-curtain" class="buy-overlay">
    

      <div class="buy-overlay-content">
      
      <!--<h2>Buy the eBook or print edition.</h2>-->
            
            <div class="three-books">
              <div class="buy-book">
                <div class="book-listing">

                  <img src="../photos/cover-epub-400px.webp" alt="The Epub version of the book is best for iphone and android ereaders." title="The Epub version of the book is best for iphone and android ereaders.">

                  <div class="book-buy-info">
                  <div class="buy-book-info-title">Ebook Edition</div>
                  <div class="buy-book-info-text">The optimal reading format for iPhones and Android e-Book apps.</div>

                    <a href="paypal" class="action-btn" style="cursor:pointer; width:90%;"><i style="background-image: url(../icons/buy.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px;"></i>10$</a>

                  </div>
                </div>
              </div>
              

              
              <div class="buy-book">
                <div class="book-listing">
                  <img src="../photos/cover-print-400px.webp"  alt="The print version of the book" title="The print version of the book">
                  <div class="book-buy-info">
                  <div class="buy-book-info-title">Print Edition</div>

                  <div class="buy-book-info-text">The print version of the book is on its way.  Preorder here.</div>

                    <a href="paypal" class="action-btn" style="cursor:pointer; width:90%;"><i style="background-image: url(../icons/buy.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px;"></i>10$</a>

                  </div>
                </div>
              </div>
              

             
              <div class="buy-book">
                <div class="book-listing">
                  <img src="../photos/cover-mobi-400px.webp"  alt="The Kindle format, and for other select eReaders" title="The Kindle format, and for other select eReaders">
                    
                  <div class="book-buy-info">
                  <div class="buy-book-info-title"><h4>Kindle Edition</h4></div>
                  <div class="buy-book-info-text"><h6>The Mobi format which works best on Amazon e-readers.</h6></div>
                      <a href="paypal" class="action-btn" style="cursor:pointer; width:90%;"><i style="background-image: url(../icons/buy.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px;"></i>10$</a>
                  </div>
                  
                </div>
              </div>
            </div>

            <div id="bottom-close-button">
            <span style="cursor:pointer" onclick="closeBuy()"><img src="../svgs/left-x.svg"></span>
        </div>

           <!-- <div><p>Prices in USD.  Processing through Paypal.</p></div>-->
        </div>
            
    </div>
    

    `;
}
}

customElements.define('buy-curtain', BuyCurtain);