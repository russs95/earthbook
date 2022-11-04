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

                  <img src="../photos/cover-epub-400px.webp" alt="The Epub version of the book is best for iphone and android ereaders." title="The Epub version of the book is best for iphone and android ereaders.">

                  <div class="book-buy-info">
                  <div class="buy-book-info-title">Ebook Edition</div>
                  <div class="buy-book-info-text">The optimal format for iPhones and Android e-Book apps.<Br><b>Price: 10$ USD</b></div>

                  <div id="smart-button-container">
                  <div style="text-align: center;">
                    <div id="paypal-button-container"></div>
                  </div>
                </div>

                <!--<a href="link" class="action-btn" style="cursor:pointer; width:90%;"><i style="background-image: url(../icons/buy.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px;"></i>Buy: 10$</a>-->


              <script src="https://www.paypal.com/sdk/js?client-id=ARxl4xAwtTlVO5a-mo7DafJUm6jcBsjn5BUSlLvwocvyzOhIA0eACTv-6htl&enable-funding=venmo&currency=USD" data-sdk-integration-source="button-factory"></script>
              

                  </div>
                </div>
              </div>
              

              
              <div class="buy-book">
                <div class="book-listing">
                  <img src="../photos/cover-print-400px.webp"  alt="The print version of the book" title="The print version of the book">
                  <div class="book-buy-info">
                  <div class="buy-book-info-title">Print Edition</div>

                  <div class="buy-book-info-text">The print edition of the book is on its way.  Preorder yours.</div>

                    <a href="link" class="action-btn" style="cursor:pointer; width:90%;"><i style="background-image: url(../icons/buy.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px;"></i>Pre-order: 10$</a>

                  </div>
                </div>
              </div>
              

             
              <div class="buy-book">
                <div class="book-listing">
                  <img src="../photos/cover-mobi-400px.webp"  alt="The Kindle format, and for other select eReaders" title="The Kindle format, and for other select eReaders">
                    
                  <div class="book-buy-info">
                  <div class="buy-book-info-title">Kindle Edition</div>
                  <div class="buy-book-info-text">The Mobi format which works best on Amazon e-readers.</div>
                      <a href="link" class="action-btn" style="cursor:pointer; width:90%;"><i style="background-image: url(../icons/buy.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px;"></i>Buy: 10$</a>
                  </div>
                  
                </div>
              </div>
            </div>

            <div id="bottom-close-button">
            <span style="cursor:pointer" onclick="closeBuy()"><img src="../svgs/left-x.svg"></span>
        </div>
      </div>
            
    </div>
    

    `;
}
}

customElements.define('buy-curtain', BuyCurtain);



    function initPayPalButton() {
      paypal.Buttons({
        style: {
          shape: 'pill',
          color: 'black',
          layout: 'horizontal',
          label: 'buynow',
          
        },

        createOrder: function(data, actions) {
          return actions.order.create({
            purchase_units: [{"description":"Tractatus Ayyew - Epub Edition","amount":{"currency_code":"USD","value":10}}]
          });
        },

        onApprove: function(data, actions) {
          return actions.order.capture().then(function(orderData) {
            
            // Full available details
            console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

            // Show a success message within this page, e.g.
            const element = document.getElementById('paypal-button-container');
            element.innerHTML = '';
            element.innerHTML = '<h3>Thank you for your payment!</h3>';

            // Or go to another URL:  actions.redirect('thank_you.html');
            
          });
        },

        onError: function(err) {
          console.log(err);
        }
      }).render('#paypal-button-container');
    }
    initPayPalButton();

  