class Earthbook extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
  <div id="bottom-earthbook" class="overlay-earthbook">
    


      <div class="overlay-content-earthbook">         
            <div>
                <h1>Earthbooks are for Readers, Writers & Earth.</h1>
                <h3>An Earthbook embodies regenerative principles in its writing, publishing & presentation.</h3>
            </div>

            <div id="virtue-box">

                <div class="virtue" style="cursor:pointer" onclick="openOS()"><img src="../svgs/icon-opensource.svg" width="100%" height="100%" title="Open Source" alt="Open Source"><div id="OS" class="virtue-desc">The EarthBook source code is open to review, improvement and forking <a href="https://github.com/russs95/earthbook">on Github</a>.  This means that publishing an Earthbook can be done by anyone anywhere.</div>
                </div>

                <div class="virtue" style="cursor:pointer" onclick="openBio()"><img src="../svgs/icon-biodiversity.svg"  width="100%" height="100%" title="Supporting Biodiveristy" alt="Supporting Biodiversity"><div id="bio" class="virtue-desc">During the writing and publishing of this book, the species supported in the enterprise physical space was tracked and accounted for.  <a href="https://russs.net/forest" target="_blank">See the publisher's full life list.</a></div>
                </div>

                <div class="virtue"><img src="../svgs/icon-ecoaccounting.svg"  width="100%" height="100%" title="Ecological Accounting Kept" alt="Ecological Accounting Kept"><div class="virtue-desc">Throughout the enterprise of writing and publishing an Earthbook impac, the carbon, plastic and biodiversity impacts were tracked, accounted and annually disclosed.  See the full <a href="https://files.earthen.io/s/ioobYWRRKGEpPp4" target="_blank">Regenerativity Report.</a></div>
                </div>

                <div class="virtue"><img src="../svgs/icon-for-earth.svg"  width="100%" height="100%" title="For-Earth Enterprise" alt="For-earth Enterprise"><div class="virtue-desc">The net impact of the writing and publishing of the book was the subtraction of carbon.</div>
                </div>

                <div class="virtue"><img src="../svgs/icon-carbonseq.svg"  width="100%" height="100%" title="Net-Subtractive Carbon Impact" alt="Net-Subtractive Carbon Impact"><div class="virtue-desc">The Earthbook format is designed from the ground up to have a minimal carbon footprint.  <div id="wcb" class="carbonbadge wcb-d"></div></div>
                </div>

                <div class="virtue"><img src="../svgs/icon-creativecommons.svg"  width="100%" height="100%" title="Creative Commons" alt="Creative Commons License"><div class="virtue-desc">The code and content of this book are licensed under a Creative Commons BY-SA-ND 4.0 License.</div>
                </div>

                <div class="virtue"><img src="../svgs/icon-readfreely.svg"  width="100%" height="100%" title="Read Freely" alt="Read Freely"><div class="virtue-desc">This book is available to read freely online and as a downloadable PDF.</div>
                </div>
 
                <div class="virtue"><img src="../svgs/icon-revenue.svg"  width="100%" height="100%" title="Support Independent Publishing" alt="Support Independent Publishing"><div class="virtue-desc">Earthbooks are 100% independent of corporate middlemen. 97% of the proceeds of the <span style="cursor:pointer" onclick="openBuy()">sales of book sales</span> go to the authors.</div>
                </div>

                <div class="virtue"><img src="../svgs/icon-accessibility.svg"  width="100%" height="100%" title="Accessibility Maximized" alt="Accessibility Maximized"><div class="virtue-desc">Earthbooks are designed from the ground up to be easy on the eyes, accessible, and multi-lingual.</div>
                </div>

            </div>

            <div id="virtue-box-mobile">

              <div class="virtue" style="cursor:pointer" onclick="openOS()"><img src="../svgs/icon-opensource.svg" width="100%" height="100%" title="Open Source" alt="Open Source"><div class="virtue-desc">The EarthBook source code is open to review, improvement and forking <a href="https://github.com/russs95/earthbook">on Github</a>.  This means that publishing an Earthbook can be done by anyone anywhere.</div>
              </div>

              <div class="virtue"><img src="../svgs/icon-biodiversity.svg"  width="100%" height="100%" title="Supporting Biodiveristy" alt="Supporting Biodiversity"><div class="virtue-desc">During the writing and publishing of this book, the species supported in the enterprise physical space was tracked and accounted for.  <a href="https://russs.net/forest" target="_blank">See the publisher's full life list.</a></div>
              </div>

              <div class="virtue"><img src="../svgs/icon-ecoaccounting.svg"  width="100%" height="100%" title="Ecological Accounting Kept" alt="Ecological Accounting Kept"><div class="virtue-desc">Throughout the enterprise of writing and publishing an Earthbook impac, the carbon, plastic and biodiversity impacts were tracked, accounted and annually disclosed.  See the full <a href="https://files.earthen.io/s/ioobYWRRKGEpPp4" target="_blank">Regenerativity Report.</a></div>
              </div>

            </div>

            <div id="virtue-box-mobile">

              <div class="virtue"><img src="../svgs/icon-for-earth.svg"  width="100%" height="100%" title="For-Earth Enterprise" alt="For-earth Enterprise"><div class="virtue-desc">The net impact of the writing and publishing of the book was the subtraction of carbon.</div>
              </div>

              <div class="virtue"><img src="../svgs/icon-carbonseq.svg"  width="100%" height="100%" title="Net-Subtractive Carbon Impact" alt="Net-Subtractive Carbon Impact"><div class="virtue-desc">The Earthbook format is designed from the ground up to have a minimal carbon footprint.  <div id="wcb" class="carbonbadge wcb-d"></div></div>
              </div>

              <div class="virtue"><img src="../svgs/icon-creativecommons.svg"  width="100%" height="100%" title="Creative Commons" alt="Creative Commons License"><div class="virtue-desc">The code and content of this book are licensed under a Creative Commons BY-SA-ND 4.0 License.</div>
              </div>

          </div>

          <div id="virtue-box-mobile" style="margin-bottom:170px;">

            <div class="virtue"><img src="../svgs/icon-readfreely.svg"  width="100%" height="100%" title="Read Freely" alt="Read Freely"><div class="virtue-desc">This book is available to read freely online and as a downloadable PDF.</div>
            </div>

            <div class="virtue"><img src="../svgs/icon-revenue.svg"  width="100%" height="100%" title="Support Independent Publishing" alt="Support Independent Publishing"><div class="virtue-desc">Earthbook are 100% independent of corporate platforms and enable author's to publish and sell their own work without a middle man.  97% of the proceeds of the <span style="cursor:pointer" onclick="openBuy()">sale of this book</span> go to the authors.</div>
            </div>

            <div class="virtue" ><img src="../svgs/icon-accessibility.svg"  width="100%" height="100%" title="Accessibility Maximized" alt="Accessibility Maximized"><div class="virtue-desc">Earthbooks are designed from the ground up to be easy on the eyes, accessible, and multi-lingual.</div>
            </div>

        </div>

            

            <div class="medium-message"><h2><i>The Medium is the Message.</i></h2></div>

   
            
	      
            <span style="cursor:pointer" onclick="closeEarthbook()">
        <div id="bottom-close-button">
        <img src="../svgs/bottom-x.svg">
      </div></span>
            
    </div>
</div>

    `;
}
}

customElements.define('earthbook-curtain', Earthbook);




function openOS() {
  var x = document.getElementById("OS");
  if (x.style.opacity === "0") {
    x.style.opacity = "1";
  
  } else {
    x.style.opacity = "0";
}
}


function openOS() {
  var x = document.getElementById("bio");
  if (x.style.opacity === "0") {
    x.style.opacity = "1";
  
  } else {
    x.style.opacity = "0";
}
}


/*

function openOS() {
  var x = document.getElementById("OS");
  var y = document.getElementById("footer-icon-left");
  if (x.style.marginBottom === "0px") {
    x.style.marginBottom = "150px";
    y.style.background = "url(../svgs/footer-settings-button.svg) no-repeat left";
    y.style.backgroundSize = "contain";
 
  
  } else {
    x.style.marginBottom = "0px";
    y.style.background = "url(../svgs/footer-settings-button-up.svg) no-repeat left";
    y.style.backgroundSize = "contain";

}
}

<div class="virtue-display">
              
              <div class="virtue-text1"><div class="virtue-styled">Both the earthBook and manuscript source and content are available under a GNU license on Github.</div>
              </div>

              <div class="virtue-text2">
                <div class="virtue-styled">A list of the species supported by the physical space of the book's enterprise is tracked and disclosed.</div>
              </div>
            
            </div>*/