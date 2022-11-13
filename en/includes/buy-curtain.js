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

                  <img src="../photos/cover-epub-400px.webp" alt="The Epub version of the book is best for iphone and android eEeaders." title="The Epub version of the book is best for iphone and android ereaders.">

                  <div class="book-buy-info">
                    <div class="buy-book-info-title">Ebook Edition</div>
                    <div class="buy-book-info-text">The .EPUB format is ideal for  iPhones and and Android e-Book apps.</div>

                    <a href="https://buy.stripe.com/28og1Z9OS3f7eqc6op" class="action-btn" style="cursor:pointer; width:90%;" aria-label="Click to buy the epub book for 10$"><i style="background-image: url(../icons/buy.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px;"></i>Buy: 10$</a>

                  </div>
                </div>
              </div>
              

              
              <div class="buy-book">
                <div class="book-listing">
                  <img src="../photos/cover-print-400px.webp"  alt="The print version of the book" title="The print version of the book">
                  <div class="book-buy-info">
                    <div class="buy-book-info-title">Print Edition</div>

                    <div class="buy-book-info-text">The print edition of the book is on its way.  Preorder yours.</div>

                    <a href="https://buy.stripe.com/9AQ2b90eicPH3LyfZ0" class="action-btn" style="cursor:pointer; width:90%;" aria-label="Click to buy the print version of the book for 10$ USD"><i style="background-image: url(../icons/buy.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px;"></i>Pre-order: 10$</a>

                  </div>
                </div>
              </div>
              

             
              <div class="buy-book">
                <div class="book-listing">
                  <img src="../photos/cover-mobi-400px.webp"  alt="The Kindle format, and for other select eReaders" title="The Kindle format, and for Amazon eReaders" >
                    
                  <div class="book-buy-info">
                  <div class="buy-book-info-title">Kindle Edition</div>
                  <div class="buy-book-info-text">The Amazon .mobi format for Kindles.</div>
                      <a href="https://buy.stripe.com/aEU7vt9OSdTLbe03cc" class="action-btn" style="cursor:pointer; width:90%;" aria-label="Click to buy the .mobi Kindle version of the book for 10$"><i style="background-image: url(../icons/buy.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px;"></i>Buy: 10$</a>
                  </div>
                  
                </div>
              </div>
            </div>

            <div id="bottom-close-button" style="cursor:pointer" onclick="closeBuy()" aria-label="Click to close this pop-up page">
            <img src="../svgs/left-x.svg" alt="Buy page close button">
        </div>
      </div>
            
    </div>

    `;
}
}

customElements.define('buy-curtain', BuyCurtain);


