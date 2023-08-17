class chapfoot extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
  
     
      <div id="footer-functions-box" style="width:100%; padding-top: 5px;background-color:var(--header-footer);">



        <div class="footer-function" >
          <div class="footer-function-main" onclick="openCode()" style="z-index:8;">
            
            <div id="code-down-arrow" style="width: 18px; height: 18px;background: url(../icons/up-arrow.svg) no-repeat center;background-size:contain;margin: auto 15px auto 0;">
            </div>

            <div class="footer-function-item">
              <p>Le code source</p>
            </div>

            <div class="footer-function-item-icon"> 
                <i style="background-image: url(../icons/code.svg);"></i>
            </div>

          </div>

          <div id="footer-function-reveal-code" style="height:0px; opacity:0;">
              <div class="github-source2" style="font-size:0.8em; font-family:Mulish;color:grey;overflow: clip;">
              Earthbook est open source. Contribuez, corrigez ou bifurquez le code de ce Earthbook sur Github :
                  <span id="git-code-url"><a href="https://github.com/russs95/earthbook/blob/main/ " target="_blank" aria-label="Open source code"><br> ➔ github.com/russs95/earthbook/blob/main/</a></span>
              </div>
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

            <div class="footer-function-item"><p>Outils et ressources</p></div>
            <div class="footer-function-item-icon">
                <i style="background-image: url(../icons/settings.svg);"></i>
            </div>
          </div>
        </div>
      </div>

      
      `;
  }
  }
  

  
  customElements.define('chap-foot', chapfoot);
  
  
  function updateGitCodeURL() {

    var gitURL = `https://github.com/russs95/earthbook/blob/main/${lang}/${chaptURL}`;
    var gitDisplayURL = `github.com/russs95/earthbook/blob/main/${lang}/${chaptURL}`;
    
    var gitLinkHTML = `<a href="${gitURL}" target="_blank" aria-label="Contribute to the code. Go to the Earthbook Github repository for this page:"><br> ➔ ${gitDisplayURL}</a>`;
    
    document.getElementById("git-code-url").innerHTML = gitLinkHTML;
}

// Call the function to execute it
updateGitCodeURL();
