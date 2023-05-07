class TourCurtain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

  
<div id="guided-tour" class="modal">
<div class="tour-content">
  <span class="close">&times;</span>

  <div id="information-one" class="information">
  <div class="tour-image"><img src="../svgs/icon-readfreely.svg" title="Read Freely" alt="Welcome to an Earthbook"></div>  
    <div class="modal-header">A Quick Tour</div>
    <div class="modal-description">Welcome to our Earthbook.  You've never quite read a book like this before!  Get to know how an Earthbook works with a little guided tour...</div>
    <button class="next">Next ➔</button>
  </div>

  <div id="information-two" style="display:none;" class="information">
  <div class="tour-image"><img src="../svgs/icon-accessibility.svg"  style="margin:auto" title="Human Friendly" alt="Read Freely"></div>  
    <div class="modal-header">Human Friendly</div>
    <div class="modal-description">Earthbooks are designed from the ground up to be easy on the eyes, accessible, and multi-lingual. Using the <b>±</b> button in the top left corner to adjust the Earthbook's settings.</div>
    <button class="back">↩ Back</button>
    <button class="next">Next ➔</button>
  </div>
  
  <div id="information-three" style="display:none;" class="information">
  <div class="tour-image"><img src="../svgs/icon-ecoaccounting.svg"    title="Planet Friendly" alt="Read Freely"></div>  

    <div class="modal-header">Earth Friendly</div>
    <div class="modal-description">Throughout the writing and publishing of an Earthbook, the carbon, plastic and biodiversity impacts are tracked live and annually. Look for the green icon in the Earthbook Resources panel (at the bottom of every chapter) to see for yourself that live carbon impact of each page.</div>
    <button class="back">↩ Back</button>
    <button class="next">Next ➔</button>
  </div>
  
  <div id="information-four" style="display:none;" class="information">
  <div class="tour-image"><img src="../svgs/icon-opensource.svg" title="Read Freely" alt="Read Freely"></div>  
    <div class="modal-header">Open Source</div>
    <div class="modal-description">The EarthBook source code is open to review, improve and copy on <a class="java-link" href="https://github.com/russs95/earthbook/" target="_blank">Github</a>. This means that publishing an Earthbook is open to anyone anywhere.  Look for the source code link of each chapter in the Resources panel at the bottom of each page.  </div>
    <button class="back">↩ Back</button>
    <button class="next">Next ➔</button>
  </div>

  <div id="information-five" style="display:none;" class="information" class="information">
  <div class="tour-image"><img src="../svgs/icon-revenue.svg"  title="Buy the eBook" alt="But the eBook"></div>  

    <div class="modal-header">Buyable</div>
    <div class="modal-description">Like this Earthbook?  You <a class="java-link" onclick="closeTour(),openBuy()"> can buy</a> the eBook version for your digital library and eReader.  Earthbooks are 100% independent of corporate middlemen. 97% of the proceeds of Ebook sales go to the authors.</div>
    <button class="back">↩ Back</button>
    <button class="next">✓ Finish</button>
    <button class="back" onclick="closeTour(),openEarthbook()">+ Learn more</button>

  </div>
</div>
</div>

    `;
}
}

customElements.define('tour-curtain', TourCurtain);


