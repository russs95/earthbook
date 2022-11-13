


class ShareCurtain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="right-share-overlay" class="share-overlay">

    <div id="right-close-button">
        <span style="cursor:pointer" onclick="closeShare()"><img src="../svgs/right-x.svg" alt="Close page button"></span>
    </div>
    
      <div class="share-overlay-content">
            
            <div>
                <h1 class="accessibility-plugin-ac">Share. Freely.</h1> 
                <h3>Earthbooks are designed to enable you to easily share chapters.  Copy and share the link to this chapter...</h3>
            </div>
            
            <div class="copy-section">
              
              <div id="page-url" class="copy-box" style="border-left-color: orange;" >
              </div>
            
              <button class="btn" data-clipboard-action="copy" data-clipboard-target="#page-url" onclick="confirmCopy()" aria-label="Click to copy this chapter's URL to your clipboard">
                <div class="copy-check">
                  <div id="check" style="color:green">
                    <span>✓</span>
                  </div>
                </div>
                <span style="align-self:center";>Copy</span>
              </button>
              
            </div>

      <div>
        <h4>Or copy the <a href="javascript:void(0)" onclick="getMainurl()" style="text-decoration:underline;" aria-label="Or copy the main Earthbook URL">main URL</a> of the book.</h4>
      </div>

      <div>
        <p>And... no worries!  The content of this Earthbook is under a Creative-Commons ND-SA-AT 4.0 license .  This means you can freely share the links to this page, quote passages, download and share the PDF-- just be sure to attribute to this Earthbook and share in the way.</p>
      </div>
        <div><img src="../icons/cc-by-sa.svg" alt="Creative Commons CC-BY-SA icon" style="height: 35px"></div>
  </div>
</div>  
    `;
}
}

customElements.define('share-curtain', ShareCurtain);




document.getElementById("page-url").innerHTML = 
"" + window.location.href;

function getMainurl() {
  document.getElementById("page-url").innerHTML = 
"https://book.earthen.io";
}


function confirmCopy() {
  var x = document.getElementById("check");
  if (x.style.display === "none") {
    x.style.display = "inline";
    x.style.color = "green";
  } else {
    x.style.display = "inline";
  }
}

