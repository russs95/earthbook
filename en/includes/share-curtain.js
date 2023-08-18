


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
                <h1>Share & Cite</h1> 
                <h3>An Earthbook enables you to easily share and cite both the book and its individual chapters.</h3>
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

            <div id="copy-type">
            <h4>Or copy just <span href="javascript:void(0)" onclick="getMainurl()" style="text-decoration:underline;cursor:pointer;">the URL for this chapter</span>.</h4>
          </div>

      <div><img src="../icons/cc-by-sa.svg" alt="Creative Commons CC-BY-SA icon" style="height: 25px" title="The content of an Earthbook is under a Creative-Commons ND-SA-AT 4.0 license which means you can freely share the links to this page, quote passages, download and share the PDF-- just be sure to attribute, share-alike and record your citation."></div>

        <!--<h6>Be sure to use the <span style="cursor:pointer;text-decoration:underline;" onclick="openComments()">citation tool</span> (found at the bottom of each chapter) to record your adaptions and references.</h6>-->
        
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


  

    // Inject the variables into the inner HTML
    document.getElementById("page-url").innerHTML =
        "Banayan Angway, Russell Maier, 'Tractatus Ayyew: An Earthen Ethics' (Earthen.io, Philippines, Indonesia, 2022), Chap. '" + chapNo + "', '" + chapName + "' " + window.location.href;



function confirmCopy() {
  var x = document.getElementById("check");
  if (x.style.display === "none") {
    x.style.display = "inline";
    x.style.color = "green";
  } else {
    x.style.display = "inline";
  }
}




function getMainurl() {
  document.getElementById("page-url").innerHTML = window.location.href;
  document.getElementById("copy-type").innerHTML = '<h4>Or copy the <span href="javascript:void(0)" onclick="getCitation()" style="text-decoration:underline;cursor:pointer;">full citation for this chapter</span>.</h4>';
}

function getCitation() {
  document.getElementById("page-url").innerHTML =
  "Banayan Angway, Russell Maier, 'Tractatus Ayyew: An Earthen Ethics' (Earthen.io, Philippines, Indonesia, 2022), Chap. '" + chapNo + "', '" + chapName + "' " + window.location.href;
  document.getElementById("copy-type").innerHTML = '<h4>Or copy just <span href="javascript:void(0)" onclick="getMainurl()" style="text-decoration:underline;cursor:pointer;">the URL for this chapter</span>.</h4>';
}

