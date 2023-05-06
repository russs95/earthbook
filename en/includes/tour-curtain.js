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
  <div class="virtue"><img src="../svgs/icon-readfreely.svg"  width="30%" height="30%" style="margin:auto" title="Read Freely" alt="Read Freely"></div>  
    <div class="modal-header">A Quick Tour</div>
    <div class="modal-description">You've never quite read a book like this before!  Get to know how an Earthbook works with our little guided tour...</div>
    <button class="next">Next ➔</button>
  </div>

  <div id="information-two" style="display:none;" class="information">
  <div class="virtue"><img src="../svgs/icon-accessibility.svg"  width="30%" height="30%" style="margin:auto" title="Read Freely" alt="Read Freely"></div>  
    <div class="modal-header">Human Friendly</div>
    <div class="modal-description">Earthbooks are designed from the ground up to be easy on the eyes, accessible, and multi-lingual. Using the settings button in the top left corner to adjust the Earthbook's settings.</div>
    <button class="back">𐌂 Back</button>
    <button class="next">Next ➔</button>
  </div>
  
  <div id="information-three" style="display:none;" class="information">
  <div class="virtue"><img src="../svgs/icon-ecoaccounting.svg"  width="30%" height="30%" style="margin:auto" title="Read Freely" alt="Read Freely"></div>  

    <div class="modal-header">Earth Friendly</div>
    <div class="modal-description">Throughout the writing and publishing of an Earthbook, the carbon, plastic and biodiversity impacts are tracked live and annually. Look for the green balance icon to see for yourself!</div>
    <button class="back">𐌂 Back</button>
    <button class="next">Next ➔</button>
  </div>
  
  <div id="information-four" style="display:none;" class="information">
  <div class="virtue"><img src="../svgs/icon-opensource.svg"  width="30%" height="30%" style="margin:auto" title="Read Freely" alt="Read Freely"></div>  
    <div class="modal-header">Open Source</div>
    <div class="modal-description">The EarthBook source code is open to review, improvement and forking on Github. This means that publishing an Earthbook is open to anyone anywhere.</div>
    <button class="back">𐌂 Back</button>
    <button class="next">Next ➔</button>
  </div>

  <div id="information-five" style="display:none;" class="information" class="information">
  <div class="virtue"><img src="../svgs/icon-revenue.svg"  width="30%" height="30%" style="margin:auto" title="Read Freely" alt="Read Freely"></div>  

    <div class="modal-header">Buyable</div>
    <div class="modal-description">Like this Earthbook?  Buy the eBook versions.  Earthbooks are 100% independent of corporate middlemen. 97% of the proceeds of Ebook sales go to the authors.</div>
    <button class="back">𐌂 Back</button>
    <!--<button class="back" onclick="closeTour(),openEarthbook()">+ EarthBook Principles</button>-->
    <button class="next">✓ Finish</button>
  </div>
</div>
</div>

    `;
}
}

customElements.define('tour-curtain', TourCurtain);


