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
                    <div class="buy-book-info-title">eBook Edition</div>
                    <div class="buy-book-info-text">Ideal for Kindles, iPhones & Android readers.  Only available in English.</div>

                    <a href="https://buy.stripe.com/28og1Z9OS3f7eqc6op" class="action-btn" style="cursor:pointer; width:90%;" aria-label="Click to buy the epub book for 10$"><i style="background-image: url(../icons/buy.svg); width:20px; height:20px;display: inline-block;background-size: 20px;margin-bottom: -3px;margin-right: 5px;"></i>Buy: 10$</a>

                  </div>
                </div>
              </div>
              

              
              <div class="buy-book">
                <div class="book-listing">
                  <img src="../photos/cover-print-400px.webp" loading="lazy" alt="The print version of the book" title="The print version of the book">
                  <div class="book-buy-info">
                    <div class="buy-book-info-title">Print Edition</div>

                    <div class="buy-book-info-text">The English print edition of Book One of the Tractatus Ayyew is on its way.  Preorder yours.</div>

                    <a href="https://buy.stripe.com/9AQ2b90eicPH3LyfZ0" class="action-btn" style="cursor:pointer; width:90%;" aria-label="Click to buy the print version of the book for 10$ USD"><i style="background-image: url(../icons/buy.svg); width:20px; height:20px;display: inline-block;background-size: 20px;margin-bottom: -3px;margin-right: 5px;"></i>Pre-order: 10$</a>

                  </div>
                </div>
              </div>
              

              <div class="buy-book">
              <div class="book-listing">
                <img src="../photos/cover-gratitude-600px.webp" loading="lazy" alt="Achat rétroactif pour soutenir et remercier les auteurs" title="Achat rétroactif pour soutenir et remercier les auteurs">
                
                <div class="book-buy-info">
                  <div class="buy-book-info-title">Achat rétroactif</div>
                  <div class="buy-book-info-text">Vous avez déjà lu la version gratuite ? Effectuez un achat rétroactif pour soutenir les auteurs.</div>
                  <a href="https://buy.stripe.com/aEU7vt3qu9Dveqc5kn" class="action-btn" style="cursor:pointer; width:90%;" aria-label="Effectuer un achat de gratitude rétroactif"><i style="background-image: url(../icons/buy.svg); width:20px; height:20px;display: inline-block;background-size: 20px;margin-bottom: -3px;margin-right: 5px;"></i>± Paiement</a>
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


