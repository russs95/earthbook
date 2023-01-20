class Earthbook extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
  <div id="bottom-earthbook" class="overlay-earthbook">
    


      <div class="overlay-content-earthbook">         
            <div>
                <h1>What is an Earthbook?</h1>
                <h3>Following regenerative principles, Earthbooks are for readers, writers & Earth.  Double-tap to learn more:</h3>
                <!--Earthbook's writing & publishing embodies regenerative principles.-->
            </div>

       
            <div class="virtue-box-box">
              <div id="virtue-box-mobile">

                <div class="virtue"><img src="../svgs/icon-opensource.svg" width="100%" height="100%" title="EarthBook code is fully open-source" alt="EarthBook code is fully open-source" style="cursor:pointer" onclick="openOS()"><div id="OS" class="virtue-desc">The EarthBook source code is open to review, improvement and forking <a href="https://github.com/russs95/earthbook" aria-label="Click to go to our Github repository" target="_blank">on Github</a>.  This means that publishing an Earthbook is open to anyone anywhere.</div>
                </div>

                <div class="virtue"><img src="../svgs/icon-biodiversity.svg"  width="100%" height="100%" title="Supporting, Accountin & Tracking Biodiveristy" alt="Supporting, Accountin & Tracking Biodiveristy" style="cursor:pointer" onclick="openBio()"><div id="bio" class="virtue-desc">During the writing and publishing of this book, the species supported by the enterprise's physical space was tracked and accounted.  <a href="https://russs.net/forest" target="_blank" aria-label="Go to the author's home life list of supported species">See the publisher's full life list.</a></div>
                </div>

                <div class="virtue"><img src="../svgs/icon-ecoaccounting.svg"  width="100%" height="100%" title="Ecological Accounting Disclosure" alt="Ecological Accounting Disclosure" style="cursor:pointer" onclick="openAcc()"><div id="acc" class="virtue-desc">Throughout the enterprise of writing and publishing an Earthbook impac, the carbon, plastic and biodiversity impacts were tracked, accounted and annually disclosed.  See the full <a href="https://files.earthen.io/s/ioobYWRRKGEpPp4" target="_blank" aria-label="Click to open the PDF Regen Report for the Earthbook">Regenerativity Report.</a></div>
                </div>

              </div>

              <div id="virtue-box-mobile">

                <div class="virtue"><img src="../svgs/icon-for-earth.svg"  width="100%" height="100%" title="For-Earth Enterprise" alt="For-Earth Enterprise"  onclick="openForE()"><div id="fore" class="virtue-desc">The intention and structure of this publishing enterprise is not-for-profit, for-Earth benefit.</div>
                </div>

                <div class="virtue"><img src="../svgs/icon-carbonseq.svg"  width="100%" height="100%" title="Net-Subtractive Carbon Impact" alt="Net-Subtractive Carbon Impact"  onclick="openCo2()"><div id="co2" class="virtue-desc">An Earthbook has the lightest footprint of all reading formats. Loading-optimization and caching put an Earthbook's digital emissions in the top 10% of clean sites.<span style="cursor:pointer; text-decoration:underline;" onclick="openEco()" aria-label="View our live CO2 page audit">View live CO2e audit.</span></div>
                </div>

                <div class="virtue"><img src="../svgs/icon-creativecommons.svg"  width="100%" height="100%" title="Creative Commons" alt="Creative Commons License"  onclick="openCc()"><div id="cc" class="virtue-desc">The code and content of this book are licensed under a Creative Commons BY-SA-ND 4.0 License. <a href="https://github.com/russs95/earthbook/" target="_blank" aria-label="Access the Earthbook Github repository"> Access the Github repository.</a></div>
                </div>

            </div>

            <div id="virtue-box-mobile" style="margin-bottom:170px;">

              <div class="virtue"><img src="../svgs/icon-readfreely.svg"  width="100%" height="100%" title="Read Freely" alt="Read Freely"  onclick="openFree()"><div id="free" class="virtue-desc">This book is available to read <a href="preamble.html">freely online</a> and as a <a href="https://files.earthen.io/s/ZjS9TgWk5Tr7b4q" target="_blank" aria-label="Click to download the free PDF version of the Earthbook">free downloadable PDF</a>.</div>
              </div>

              <div class="virtue"><img src="../svgs/icon-revenue.svg"  width="100%" height="100%" title="Support Independent Publishing" alt="Support Independent Publishing" onclick="openRev()"><div id="rev" class="virtue-desc">Earthbooks are 100% independent of corporate middlemen. 97% of the proceeds of <span style="cursor:pointer; text-decoration:underline;" onclick="openBuy()" aria-label="Click to go to the buy page">Ebook sales</span> go to the authors.</div>
              </div>

              <div class="virtue"><img src="../svgs/icon-accessibility.svg"  width="100%" height="100%" title="Made as human-friendly as possible" alt="Accessibility Maximized"  style="cursor:pointer" onclick="openMax()"><div id="max" class="virtue-desc">Earthbooks are designed from the ground up to be easy on the eyes, accessible, and multi-lingual.  <span style="cursor:pointer; text-decoration:underline;" onclick="openSettings()" aria-lable="Click to adjust the Earthbook's settings">Try adjusting the Earthbook's settings.</span></div>

            </div>
          </div>
         
          <div class="medium-message">The Medium is the Message.</div>

          <span style="cursor:pointer" onclick="closeEarthbook()" aria-label="Click to close this pop-up page">
        <div id="bottom-close-button">
        <img src="../svgs/bottom-x.svg" alt="Close page button">
      </div></span>
            
    </div>
</div>

    `;
}
}

customElements.define('earthbook-curtain', Earthbook);





function openOS() {
  var x = document.getElementById("OS");
  var y = document.getElementById("bio");
  var w = document.getElementById("acc");
  var z = document.getElementById("fore");
  var a = document.getElementById("co2");
  var b = document.getElementById("cc");
  var c = document.getElementById("free");
  var d = document.getElementById("rev");
  var e = document.getElementById("max");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
    w.style.display = "none";
    z.style.display = "none";
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";

  } else {
    x.style.display = "none";
}
}



function openBio() {
  var x = document.getElementById("OS");
  var y = document.getElementById("bio");
  var w = document.getElementById("acc");
  var z = document.getElementById("fore");
  var a = document.getElementById("co2");
  var b = document.getElementById("cc");
  var c = document.getElementById("free");
  var d = document.getElementById("rev");
  var e = document.getElementById("max");
  if (y.style.display === "none") {
    x.style.display = "none";
    y.style.display = "block";
    w.style.display = "none";
    z.style.display = "none";
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";

  } else {
    y.style.display = "none";
}
}

function openAcc() {
  var x = document.getElementById("OS");
  var y = document.getElementById("bio");
  var w = document.getElementById("acc");
  var z = document.getElementById("fore");
  var a = document.getElementById("co2");
  var b = document.getElementById("cc");
  var c = document.getElementById("free");
  var d = document.getElementById("rev");
  var e = document.getElementById("max");
  if (w.style.display === "none") {
    x.style.display = "none";
    y.style.display = "none";
    w.style.display = "block";
    z.style.display = "none";
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";

  } else {
    w.style.display = "none";
}
}

function openForE() {
  var x = document.getElementById("OS");
  var y = document.getElementById("bio");
  var w = document.getElementById("acc");
  var z = document.getElementById("fore");
  var a = document.getElementById("co2");
  var b = document.getElementById("cc");
  var c = document.getElementById("free");
  var d = document.getElementById("rev");
  var e = document.getElementById("max");
  if (z.style.display === "none") {
    x.style.display = "none";
    y.style.display = "none";
    w.style.display = "none";
    z.style.display = "block";
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";

  } else {
    z.style.display = "none";
}
}

function openCo2() {
  var x = document.getElementById("OS");
  var y = document.getElementById("bio");
  var w = document.getElementById("acc");
  var z = document.getElementById("fore");
  var a = document.getElementById("co2");
  var b = document.getElementById("cc");
  var c = document.getElementById("free");
  var d = document.getElementById("rev");
  var e = document.getElementById("max");
  if (a.style.display === "none") {
    x.style.display = "none";
    y.style.display = "none";
    w.style.display = "none";
    z.style.display = "none";
    a.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";

  } else {
    a.style.display = "block";
}
}



function openCc() {
  var x = document.getElementById("OS");
  var y = document.getElementById("bio");
  var w = document.getElementById("acc");
  var z = document.getElementById("fore");
  var a = document.getElementById("co2");
  var b = document.getElementById("cc");
  var c = document.getElementById("free");
  var d = document.getElementById("rev");
  var e = document.getElementById("max");
  if (b.style.display === "none") {
    x.style.display = "none";
    y.style.display = "none";
    w.style.display = "none";
    z.style.display = "none";
    a.style.display = "none";
    b.style.display = "block";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";

  } else {
    b.style.display = "none";
}
}



function openFree() {
  var x = document.getElementById("OS");
  var y = document.getElementById("bio");
  var w = document.getElementById("acc");
  var z = document.getElementById("fore");
  var a = document.getElementById("co2");
  var b = document.getElementById("cc");
  var c = document.getElementById("free");
  var d = document.getElementById("rev");
  var e = document.getElementById("max");
  if (c.style.display === "none") {
    x.style.display = "none";
    y.style.display = "none";
    w.style.display = "none";
    z.style.display = "none";
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "block";
    d.style.display = "none";
    e.style.display = "none";

  } else {
  c.style.display = "none";
}
}


function openRev() {
  var x = document.getElementById("OS");
  var y = document.getElementById("bio");
  var w = document.getElementById("acc");
  var z = document.getElementById("fore");
  var a = document.getElementById("co2");
  var b = document.getElementById("cc");
  var c = document.getElementById("free");
  var d = document.getElementById("rev");
  var e = document.getElementById("max");
  if (d.style.display === "none") {
    x.style.display = "none";
    y.style.display = "none";
    w.style.display = "none";
    z.style.display = "none";
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "block";
    e.style.display = "none";

  } else {
    d.style.display = "none";
}
}



function openMax() {
  var x = document.getElementById("OS");
  var y = document.getElementById("bio");
  var w = document.getElementById("acc");
  var z = document.getElementById("fore");
  var a = document.getElementById("co2");
  var b = document.getElementById("cc");
  var c = document.getElementById("free");
  var d = document.getElementById("rev");
  var e = document.getElementById("max");
  if (e.style.display === "none") {
    x.style.display = "none";
    y.style.display = "none";
    w.style.display = "none";
    z.style.display = "none";
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "block";

  } else {
    e.style.display = "none";
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
