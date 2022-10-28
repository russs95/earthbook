


class ShareCurtain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="right-share-overlay" class="share-overlay">
    
    <a href="javascript:void(0)" class="closebtn" onclick="closeShare()">&times;</a>
    
      <div class="share-overlay-content">
            
            <div>
                <h1 class="accessibility-plugin-ac">Share. Freely.</h1> 
                <h3>Earthbooks are designed to enable you to easily share chapters.  Copy and share the link to this chapter...</h3>
            </div>
            
            <div class="copy-section">
              <div id="page-url" class="copy-box" style="border-left-color: orange;" >
              </div>

              
              <div class="copy-check"><div id="check" style="color:green">✓</div></div>
              <button class="btn" data-clipboard-action="copy" data-clipboard-target="#page-url" onclick="confirmCopy()">Copy</button>
              
            </div>

      <div>
        <h4>Or copy the main URL of the book:</h4>
      </div>

      <div class="copy-section">
          <div id="page-url-main" class="copy-box" style="border-left-color: rgb(0, 255, 34);">
          https://book.earthen.io
          </div>
          <div class="copy-check"><div id="check2">✔️</div></div>
          <button class="btn" data-clipboard-action="copy" data-clipboard-target="#page-url-main" onclick="confirmCopy2()">Copy</button>
      </div>
      <div>
        <h6>The content of this Earthbook is under a Creative-Commons ND-SA-AT 4.0 license .  This means you can freely share the links to this page, quote passages, download and share the PDF as long as you attribute it to this Earthbook.  In addition, you can access the EarthBooks source code and content on Github where you can fork this book to make your own (or to create a translation of this one).</h6>
      </div>
        <img src="../icons/cc-by-sa.svg" style="height: 35px">
  </div>
</div>  
    `;
}
}

customElements.define('share-curtain', ShareCurtain);

document.getElementById("page-url").innerHTML = 
"" + window.location.href;


function confirmCopy() {
  var x = document.getElementById("check");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}

function confirmCopy2() {
  var x = document.getElementById("check2");
  if (x.style.display === "none") {
    x.style.display = "block";
    x.style.color = "green";
  } else {
    x.style.display = "block";
  }
}