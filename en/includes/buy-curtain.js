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

                  <img src="../photos/cover-epub-400px.webp" loading="lazy" alt="The Epub version of the book is best for iphone and android eReaders." title="The Epub version of the book is best for iphone and android eReaders.">

                  <div class="book-buy-info">
                    <div class="buy-book-info-title">Ebook Edition</div>
                    <div class="buy-book-info-text">The Epub format is ideal for Kindles, iPhones & Android readers.</div>

                    <a href="https://buy.stripe.com/28og1Z9OS3f7eqc6op" class="action-btn" style="cursor:pointer; width:90%;" aria-label="Click to buy the epub book for 10$"><i style="background-image: url(../icons/buy.svg); width:20px; height:20px;display: inline-block;background-size: 20px;margin-bottom: -3px;margin-right: 5px;"></i>Buy: 10$</a>

                  </div>
                </div>
              </div>
              

              
              <div class="buy-book">
                <div class="book-listing">
                  <img src="../photos/cover-print-400px.webp" loading="lazy" alt="The print version of the book" title="The print version of the book">
                  <div class="book-buy-info">
                    <div class="buy-book-info-title">Print Edition</div>

                    <div class="buy-book-info-text">The print edition of Book One of the Tractatus Ayyew is on its way.  Preorder yours.</div>

                    <a href="https://buy.stripe.com/9AQ2b90eicPH3LyfZ0" class="action-btn" style="cursor:pointer; width:90%;" aria-label="Click to buy the print version of the book for 10$ USD"><i style="background-image: url(../icons/buy.svg); width:20px; height:20px;display: inline-block;background-size: 20px;margin-bottom: -3px;margin-right: 5px;"></i>Pre-order: 10$</a>

                  </div>
                </div>
              </div>
              

             
              <div class="buy-book">
                <div class="book-listing">
                  <img src="../photos/cover-grattitude-600px.webp" loading="lazy" alt="Retroactive purcase to support and thank the authors" title="Retroactive purcase to support and thank the authors" >
                    
                  <div class="book-buy-info">
                  <div class="buy-book-info-title">Retroactive Buy</div>
                  <div class="buy-book-info-text">Already read the free version? Make a retroactive purchase to support the authors.</div>
                      <a href="https://buy.stripe.com/aEU7vt3qu9Dveqc5kn" class="action-btn" style="cursor:pointer; width:90%;" aria-label="Make a retroactive gratitude purchase"><i style="background-image: url(../svgs/left-menu.svg); width:20px; height:20px;display: inline-block;background-size: 20px;margin-bottom: -3px;margin-right: 5px;"></i>Payment</a>
                  </div>
                  
                </div>
              </div>
            </div>

            <div>
            <button type="button" class="bottom-close-button" style="cursor:pointer" onclick="closeBuy()" aria-label="Click to close this pop-up page">
              <img src="../svgs/bottom-x.svg" alt="Close page button">
            </button>
          </div>
      </div>
            
    </div>

    `;
}
}

customElements.define('buy-curtain', BuyCurtain);


