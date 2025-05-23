class ReadCurtain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="read-curtain" class="read-overlay">
    

      <div class="read-overlay-content">
      
           
                <div class="read-book-pic">

                  <img src="../covers/read-cover.webp" loading="lazy" alt="Read the Tractatus Ayyew in a variety of formats." title="Read the Tractatus Ayyew in a variety of formats.">
                
                  </div>

                  <div class="read-book-icon">
                     <img src="../icons/reader.svg" width="100px" height="100px" alt="Read the Tractatus Ayyew in a variety of formats." title="Read the Tractatus Ayyew in a variety of formats.">
                  </div>
                

                  <div class="read-book-info">
                    <div class="read-book-info-title">Read. Freely.</div>
                    <div class="read-book-info-text">
                      The Earthbook version of the Tractatus Ayyew is freely available.  Read here and now on the web. Alternatively, you can download the PDF version or purchase the eBook version in EPUB format.
                    </div>

                    <div class="button-row-read2">
                      <a href="preamble.html">
                      <div id="read-btn" class="action-btn">

                        <i style="background-image: url(../icons/web.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px;"></i>Earthbook (Read here on web)
                        
                      </div>
                      </a>
                    </div>

                    <div class="button-row-read">

                      <div id="buy-btn" class="action-btn" style="cursor:pointer;" onclick="openBuy()">
                      <i style="background-image: url(../icons/buy.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px;"></i>eBook</a>
                      </div>
                        
                      <a href="../books/Tractatus Ayyew - Earthen Ethics - Book 1.pdf" target="_blank">
                      <div id="pdf-btn" class="action-btn"><i style="background-image: url(../icons/pdf.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 2px;"></i> PDF</div>
                      </a>

                    
                     </div>

                  </div>
               
              


            <div class="bottom-close-button" style="cursor:pointer; bottom: -56px;" onclick="closeRead()" aria-label="Click to close this pop-up page">
            <img src="../svgs/left-x.svg" alt="Buy page close button">
        </div>
      </div>
            
    </div>

    `;
}
}

customElements.define('read-curtain', ReadCurtain);


