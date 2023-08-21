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
  <div class="tour-image"><img src="../svgs/earthbook.svg" title="Read Freely" alt="Welcome to an Earthbook"></div>  
    <div class="modal-header">A Quick Tour</div>
    <div class="modal-description">Welcome to our Earthbook!  You've never quite read a book like this before.  Get to know how an Earthbook works with this little guided tour...</div>
    <button class="next">Next ➔</button>
  </div>

  <div id="information-two" style="display:none;" class="information">
  <div class="tour-image"><img src="../svgs/icon-accessibility.svg"  style="margin:auto" title="Human Friendly" alt="Read Freely"></div>  
    <div class="modal-header">Human Friendly</div>
    <div class="modal-description">Earthbooks are designed from the ground up to be easy on the eyes, accessible, and multi-lingual. Using the <b>±</b> button in the top left corner to adjust the Earthbook's accessibility settings.</div>
    <button class="back">↩ Back</button>
    <button class="next">Next ➔</button>
  </div>
  
  <div id="information-three" style="display:none;" class="information">
  <div class="tour-image"><img src="../svgs/icon-ecoaccounting.svg"    title="Planet Friendly" alt="Read Freely"></div>  

    <div class="modal-header">Earth Friendly</div>
    <div class="modal-description">Throughout the writing and publishing of an Earthbook, the carbon, plastic and biodiversity impacts are tracked live and annually. To see for yourself, look for the green icon in the tools sections at the bottom of each chapter.</div>
    <button class="back">↩ Back</button>
    <button class="next">Next ➔</button>
  </div>

  
  <div id="information-four" style="display:none;" class="information">
  <div class="tour-image"><img src="../svgs/icon-opensource.svg" title="Read Freely" alt="Read Freely"></div>  
    <div class="modal-header">Open Source</div>
    <div class="modal-description">The EarthBook source code is open to review, improve and fork on <a class="java-link" href="https://github.com/russs95/earthbook/" target="_blank">Github</a>. This means that publishing an Earthbook is open to anyone anywhere.  Look for the source code link in the tools section at the bottom of each chapter.  </div>
    <button class="back">↩ Back</button>
    <button class="next">Next ➔</button>
  </div>
  
  <div id="information-five" style="display:none;" class="information">
  <div class="tour-image"><img src="../icons/booknotes.svg" title="Reading Tools" alt="Read Freely"></div>  
    <div class="modal-header">Reading Tools</div>
    <div class="modal-description">Earthbooks have a powerful set of tools under the hood!   Select text to highlight, copy, save or annotate.  Hover or tap on any footnote to view.  Use the top right button to cite and share.  Open the toolbox in the page footer to access the search, source code or accounting panels.</div>
    <button class="back">↩ Back</button>
    <button class="next">Next ➔</button>
  </div>

  <div id="information-six" style="display:none;" class="information" class="information">
  <div class="tour-image"><img src="../svgs/icon-revenue.svg"  title="Buy the eBook" alt="But the eBook"></div>  

    <div class="modal-header">Buyable</div>
    <div class="modal-description">Like this Earthbook?  You <span class="java-link" onclick="closeTour(),openBuy()"> can buy</span> the eBook version for your digital library and eReader.  Earthbooks are 100% independent of corporate middlemen. 97% of the proceeds of Ebook sales go to the authors.</div>
    <button class="back">↩ Back</button>
    <button class="back" onclick="closeTour(),openEarthbook()"><i style="background-image: url(../icons/tour.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 3px;"></i> Earthbook Principles</button>
    <button class="back" onclick="closeTour(),openBuy()"><i style="background-image: url(../icons/buy.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 3px;"></i> Buy</button>
    <button class="next">✓ Finish</button>



  </div>
</div>
</div>



<!--HIGHLIGHTER-->


<div id="highlight-viewer" class="modal" style="background:var(--highlight-modal);">
  <div id="quotation-title">Your BookNote &nbsp;<div id="bookNoteID"></div></div>
  <div id="close-x">&times;</div>
  <div class="highlight-viewer-content">
   
    <div class="quotation-box">
        
        <div id="the-quote"></div>
    
    </div>
   
    <div class="quote-info">
      <span style="font-size:small; color:grey;padding-bottom:10px;">Source Data:</span>
      <div style="font-size:medium;padding-bottom:10px;">
        <div id="noteChapter"></div>
        <div id="book"></div>
        
      </div>
        <div id="date" style="font-size:small"></div>
        <div id="charCount" style="font-size:small"></div>
        <div id="publicNote" style="font-size:small"></div>
        
  
    </div>
    <textarea id="userNote" class="user-annotation" placeholder="Click to annotate this highlight..."></textarea>
    
    <button id="saveBtn" style="display:none;" aria-label="Save" onclick="appendAnnotation2(), alert('hello!)">Save Annotation</button>
    <div class="quotation-button-row">
      <button aria-label="Copier la sélection" id="copyBtn" class="quotation-btn" class="pallette-text">
        Copier
      </button> 
      <button id="clearBtn" aria-label="Clear Highlight" class="quotation-btn" >Clear</button>
     <!-- <button id="cancelBtn" aria-label="Cancel" class="pallette-btn">Cancel</button>-->
      <button id="citeBtn" aria-label="Cite" class="quotation-btn">Cite</button>
    </div>
  </div>
  </div>



    `;
}
}

customElements.define('tour-curtain', TourCurtain);


