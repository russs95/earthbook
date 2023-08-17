class footSettings extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
  
      <div id="footer-settings">

      <div class="footer-size" style="height:58px;">
      
        <div class="footer-icon"><button type="button" class="footer-settings-icon" style="cursor:pointer" aria-label="Return to the homepage" title="Return to the homepage" onclick="location.href='index.html'" ><img src="../icons/home.svg" alt="home page icon"></button></div>
      
      <!--
        <div style=""><button type="button" class="footer-settings-icon" style="cursor:pointer" onclick="openBookplate()" aria-label="Click to open the bookplate"><img src="../svgs/my-book-header-logo-grey.svg" title="Tractatus Ayyew title page" alt="Tractatus Ayyew Mandala"></button></div>
        -->
        
        <div class="footer-icon"><button type="button" class="footer-settings-icon"><img src="../icons/buy.svg" style="cursor:pointer" onclick="openBuy()" alt="Buy icon" aria-label="Click to go to the purchase page" title="Click to go to the purchase page"></button></div>
      
        <div class="footer-icon"><button type="button" class="footer-settings-icon"><img src="../icons/search.svg?v=2" alt="Settings icon" style="cursor:pointer" onclick="openSearch()" aria-label="Click to adjust book reading settings" title="Click to adjust book reading settings"></button></div>
      
        <div class="footer-icon"><button type="button" class="footer-settings-icon"><img src="../icons/share.svg" alt="share icon" style="cursor:pointer" onclick="openShare()" aria-label="Click to copy the link of the earthBook to share" title="Click to copy the link of the earthBook to share"></button></div>
      
        <div class="footer-icon"><button type="button" class="footer-settings-icon"><img src="../icons/tour.svg" alt="Guided Tour" style="cursor:pointer" onclick="guidedTour()" aria-label="Click for a quick Earthbook features tour" title="Click for a quick Earthbook features tour"></button></div>
      
        <div class="footer-icon"><button type="button" class="footer-settings-icon"><img src="../svgs/to-the-top-arrow.svg" alt="To the top of page" style="cursor:pointer" onclick="location.href='#top'" aria-label="Go to top of page"></button></div>
      
        <div class="footer-icon"><button type="button" class="footer-settings-icon"><img src="../icons/booknotes.svg" alt="Booknotes icon" style="cursor:pointer" onclick="updateBNResetButton(),openBooknotes(), bookNotesCreator()" aria-label="Click to view your Book notes" title="Click to view your Booknotes"></button></div>
      
       
        <div class="footer-icon" style="text-align: right;">
        <button type="button" class="footer-settings-icon"><img src="../icons/eco-green.svg" alt="Our Ecological Tracking, Accounting and disclosure" title="Our Ecological Tracking, Accounting and disclosure" style="cursor:pointer;" aria-label="Open Ecological Accounting" onclick="openEco()"></button></div>
      
      </div>
      
      <div class="footer-size" style="height:30px;">
      
          <div><button type="button" class="footer-settings-icon" style="cursor:pointer; text-align:left; width:fit-content;flex-grow:1; padding-right:8px; padding-top: 10px;padding-bottom: 0px;" onclick="openEarthbook()" aria-label="Learn what an Earthbook is">What is an Earthbook?</button>
          </div>
      
          <div class="github-source" style="margin-right: 0px;">The Medium is the Message.
          </div>
      
      </div>
      </div>

      
      `;
  }
  }
  
  customElements.define('footer-settings', footSettings);
  
  
  