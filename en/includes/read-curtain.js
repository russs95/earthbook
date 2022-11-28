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

                  <div class="read-book-info">
                    <div class="read-book-info-title">Read. Freely.</div>
                    <div class="read-book-info-text">
                      The Earthbook version of the Tractatus Ayyew is freely available.  Read now on the web (we'll set you up so you can read both online and off). Alternatively, you can download the PDF version or purchase the eBook versions in EPUB or MOBI formats.
                    </div>

                    <div class="button-row-read">
                      <a href="preamble.html">
                      <div id="read-btn" class="action-btn">

                        <i style="background-image: url(../icons/reader.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px;"></i>Web
                        
                      </div>
                      </a>

                      <div id="buy-btn" class="action-btn" style="cursor:pointer;" onclick="openBuy()">
                      <i style="background-image: url(../icons/buy.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px;"></i>eBook</a>
                      </div>
                        
                      <a href="https://files.earthen.io/s/ZjS9TgWk5Tr7b4q" target="_blank">
                      <div id="pdf-btn" class="action-btn"><i style="background-image: url(../icons/pdf.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 2px;"></i> PDF</div>
                      </a>

                    
                     </div>

                  </div>
               
              


            <div id="bottom-close-button" style="cursor:pointer" onclick="closeRead()" aria-label="Click to close this pop-up page">
            <img src="../svgs/left-x.svg" alt="Buy page close button">
        </div>
      </div>
            
    </div>

    `;
}
}

customElements.define('read-curtain', ReadCurtain);


