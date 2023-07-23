class ReadCurtain extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
  
      <div id="read-curtain" class="read-overlay">
      
  
        <div class="read-overlay-content">
        
             
                  <div class="read-book-pic">
  
                    <img src="../covers/read-cover-FR-500px.webp" loading="lazy" alt="Lisez le Tractatus Ayyew dans une variété de formats." title="Lisez le Tractatus Ayyew dans une variété de formats.">
                  
                    </div>
  
                    <div class="read-book-icon">
                       <img src="../icons/reader.svg" width="100px" height="100px" alt="Lisez le Tractatus Ayyew dans une variété de formats." title="Lisez le Tractatus Ayyew dans une variété de formats.">
                    </div>
                  
  
                    <div class="read-book-info">
                      <div class="read-book-info-title">Lisez. Librement.</div>
                      <div class="read-book-info-text">
                        La version Earthbook du Tractatus Ayyew est disponible gratuitement. Lisez ici et maintenant sur le web. Alternativement, vous pouvez télécharger la version PDF ou acheter le version eBook en format EPUB.
                      </div>
  
                      <div class="button-row-read2">
                        <a href="preamble.php">
                        <div id="read-btn" class="action-btn">
  
                          <i style="background-image: url(../icons/web.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px;"></i>Earthbook (ici sur le web)
                          
                        </div>
                        </a>
                      </div>
  
                      <div class="button-row-read">
  
                        <div id="buy-btn" class="action-btn" style="cursor:pointer;" onclick="openBuy()">
                        <i style="background-image: url(../icons/buy.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px;"></i>eBook</a>
                        </div>
                          
                        <a href="../books/french.pdf" target="_blank">
                        <div id="pdf-btn" class="action-btn"><i style="background-image: url(../icons/pdf.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 2px;"></i> PDF</div>
                        </a>
  
                    
                       </div>
  
                    </div>
                 
                
  
  
              <div class="bottom-close-button" style="cursor:pointer; bottom: -56px;" onclick="closeRead()" aria-label="Cliquez pour fermer cette fenêtre contextuelle">
              <img src="../svgs/left-x.svg" alt="Bouton de fermeture de la page d'achat">
          </div>
        </div>
              
      </div>
  
      `;
    }
  }
  
  customElements.define('read-curtain', ReadCurtain);
  


