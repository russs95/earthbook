


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
                <h1 class="accessibility-plugin-ac">Share & Cite</h1> 
                <h3>Earthbooks are designed to enable you to easily share and cite chapters.  Copy and share the link to this chapter...</h3>
            </div>
            
            <div class="copy-section">
              
              <div id="page-url" class="copy-box" style="border-left-color: green;" >
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
<!--
            <div class="copy-section">
              
            <div id="page-citation" class="copy-box" style="border-left-color: green;" >
            
            </div>
            
          
            <button class="btn" data-clipboard-action="copy" data-clipboard-target="#page-citation" onclick="confirmCopy2()" aria-label="Click to copy this chapter's citation">
              <div class="copy-check">
                <div id="check2" style="color:green">
                  <span>✓</span>
                </div>
              </div>
              <span style="align-self:center";>Copy</span>
            </button>
            
          </div>-->

      <div>
        <h4>Or copy the <a href="javascript:void(0)" onclick="getMainurl()" style="text-decoration:underline;" aria-label="Or copy the citation for this chapter">citation for this chapter</a>.</h4>
      </div>

      <!--<div>
        <p>The content of an Earthbook is under a Creative-Commons ND-SA-AT 4.0 license which means you can freely share the links to this page, quote passages, download and share the PDF-- just be sure to attribute to this Earthbook and share in the way.</p>
      </div>-->
        <div><img src="../icons/cc-by-sa.svg" alt="Creative Commons CC-BY-SA icon" style="height: 35px" title="The content of an Earthbook is under a Creative-Commons ND-SA-AT 4.0 license which means you can freely share the links to this page, quote passages, download and share the PDF-- just be sure to attribute to this Earthbook and share in the way."></div>
  </div>
</div>  
    `;
}
}

customElements.define('share-curtain', ShareCurtain);

var clipboard = new ClipboardJS('.btn');
    
clipboard.on('success', function (e) {
  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);
});

clipboard.on('error', function (e) {
  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);
});


document.getElementById("page-url").innerHTML = 
"" + window.location.href;


function confirmCopy() {
  var x = document.getElementById("check");
  if (x.style.display === "none") {
    x.style.display = "inline";
    x.style.color = "green";
  } else {
    x.style.display = "inline";
  }
}


