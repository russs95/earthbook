class chapfoot extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
  
      
    <div id="footer-functions-box" style="width:100%; padding-top: 5px;">

        <div class="footer-function" >
            <div class="footer-function-main" onclick="openCode()" style="z-index:8;">
                
                <div id="code-down-arrow" style="width: 18px; height: 18px;background: url(../icons/up-arrow.svg) no-repeat center;background-size:contain;margin: auto 15px auto 0;">
                </div>
    
                <div class="footer-function-item">
                  <p>Source Code</p>
                </div>
    
                <div class="footer-function-item-icon"> 
                    <i style="background-image: url(../icons/code.svg);"></i>
                </div>
    
            </div>
    
        <div id="footer-function-reveal-code" style="height:0px; opacity:0;">
            <div class="github-source2" style="font-size:0.8em; font-family:Mulish;color:grey;overflow: clip;">
                Earthbook's are open source. Contribute, correct or fork this Earthbook's code on Github: <a href="https://github.com/russs95/earthbook/blob/main/en/preamble.html" target="_blank" aria-label="Contribute to the code. Go to the Earthbook Github repository for this page:"><br> ➔ github.com/russs95/ earthbook/blob/main/en/preamble.html</a>
            </div>
        </div>

        <!--
        <div class="footer-function" >
            <div class="footer-function-main" onclick="openComments()" style="z-index:9;">
                <div id="comments-out" style="width: 18px; height: 18px;background: url(../icons/plus.svg) no-repeat center;background-size:contain;margin: auto 15px auto 0;">
                </div>
                <div class="footer-function-item">
                  <p>Cite / Comment</p>
                </div>
                <div class="footer-function-item-icon"> 
                    <i style="background-image: url(../icons/comments.svg);"></i>
                </div>
            </div> 
        </div>
        -->
    
        <div class="footer-function">
            <div class="footer-function-main" style="z-index:10;" onclick="openFooter2()">
                <div id="footer-arrow" style="width:18px;height:18px;background:url(../icons/down-arrow.svg) no-repeat center; background-size:contain;margin: auto 10px auto 0;"></div>
                <div class="footer-function-item"><p>Tools & Resources</p></div>
                <div class="footer-function-item-icon">
                    <i style="background-image: url(../icons/settings.svg);"></i>
                </div>
            </div>
        </div>
    </div>
    
    
      
    <div id="footer-settings">
    
        <div class="footer-size" style="height:58px;">
    
            <div style=""><button type="button" class="footer-settings-icon" style="cursor:pointer" aria-label="Return to the homepage" title="Return to the homepage" onclick="location.href='index.html'" ><img src="../icons/home.svg" alt="home page icon"></button></div>
    
             <!--
            <div style=""><button type="button" class="footer-settings-icon" style="cursor:pointer" onclick="openBookplate()" aria-label="Click to open the bookplate"><img src="../svgs/my-book-header-logo-grey.svg" title="Tractatus Ayyew title page" alt="Tractatus Ayyew Mandala"></button></div>
            -->
      
            <div><button type="button" class="footer-settings-icon"><img src="../icons/buy.svg" style="cursor:pointer" onclick="openBuy()" alt="Buy icon" aria-label="Click to go to the purchase page" title="Click to go to the purchase page"></button></div>
    
            <div><button type="button" class="footer-settings-icon"><img src="../icons/search.svg?v=2" alt="Settings icon" style="cursor:pointer" onclick="openSearch()" aria-label="Click to adjust book reading settings" title="Click to adjust book reading settings"></button></div>
    
            <div><button type="button" class="footer-settings-icon"><img src="../icons/share.svg" alt="share icon" style="cursor:pointer" onclick="openShare()" aria-label="Click to copy the link of the earthBook to share" title="Click to copy the link of the earthBook to share"></button></div>
    
            <div><button type="button" class="footer-settings-icon"><img src="../icons/tour.svg" alt="Guided Tour" style="cursor:pointer" onclick="guidedTour()" aria-label="Click for a quick Earthbook features tour" title="Click for a quick Earthbook features tour"></button></div>
    
            <div><button type="button" class="footer-settings-icon"><img src="../svgs/to-the-top-arrow.svg" alt="To the top of page" style="cursor:pointer" onclick="location.href='#top'" aria-label="Go to top of page"></button></div>
    
            <!-- 
            <div><button type="button" class="footer-settings-icon"><img src="../icons/content.svg" alt="Table of Contents icon" style="cursor:pointer" onclick="openContents()" aria-label="Click to view EarthBook Table of Contents" title="Click to view EarthBook Table of Contents"></button></div>
            -->
    
     
            <div style="flex-grow:4; text-align: right;"><button type="button" class="footer-settings-icon"><img src="../icons/eco-green.svg" alt="Our Ecological Tracking, Accounting and disclosure" title="Our Ecological Tracking, Accounting and disclosure" style="cursor:pointer;" aria-label="Open Ecological Accounting" onclick="openEco()"></button></div>
    
        </div>
    
        <div class="footer-size" style="height:30px;">
    
            <div><button type="button" class="footer-settings-icon" style="cursor:pointer; text-align:left; flex-grow:1; padding-right:8px; padding-top: 10px;padding-bottom: 0px;" onclick="openEarthbook()" aria-label="Learn what an Earthbook is">What is an Earthbook?</button>
            </div>
    
            <div class="github-source" style="margin-right: 0px;">The Medium is the message.
        </div>
    
    </div>
    </div>
                                                                   
      
      
      `;
  }
  }
  
  customElements.define('chap-foot', chapfoot);
  
  