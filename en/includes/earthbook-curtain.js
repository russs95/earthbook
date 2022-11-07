class Earthbook extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
  <div id="bottom-earthbook" class="overlay-earthbook">
    


      <div class="overlay-content-earthbook">         
            <div>
                <h1>Earthbooks are for readers, writers & Earth.</h1>
                <h3>An Earthbook embodies the principles of regenerative social and ecological principles in its writing, publishing and presentation.</h3>
            </div>

            <div id="virtue-box">

                <div class="virtue"><img src="../svgs/icon-opensource.svg" width="100%" height="100%" title="Open Source" alt="Open Source"><div class="virtue-desc">Both the earthBook and manuscript source and content are available under a GNU license on Github.</div>
                </div>

                <div class="virtue"><img src="../svgs/icon-biodiversity.svg"  width="100%" height="100%" title="Supporting Biodiveristy" alt="Supporting Biodiversity"><div class="virtue-desc">A list of the species supported by the physical space of the book's enterprise is tracked and disclosed.</div>
                </div>

                <div class="virtue"><img src="../svgs/icon-ecoaccounting.svg"  width="100%" height="100%" title="Ecological Accounting Kept" alt="Ecological Accounting Kept"><div class="virtue-desc">Throughout the enterprise of writing and publishing an Earthbook ecological impacts are tracked and accounted for.</div>
                </div>

                <div class="virtue"><img src="../svgs/icon-for-earth.svg"  width="100%" height="100%" title="For-Earth Enterprise" alt="For-earth Enterprise"><div class="virtue-desc">The net impact of the writing and publishing of the book was the subtraction of carbon.</div>
                </div>

                <div class="virtue"><img src="../svgs/icon-carbonseq.svg"  width="100%" height="100%" title="Net-Subtractive Carbon Impact" alt="Net-Subtractive Carbon Impact"><div class="virtue-desc">The enterprise of writing and publishing this book is not-for-profit and for-Earth.</div>
                </div>

                <div class="virtue"><img src="../svgs/icon-creativecommons.svg"  width="100%" height="100%" title="Creative Commons" alt="Creative Commons License"><div class="virtue-desc">The code and content of this book are licensed under a Creative Commons BY-SA-ND 4.0 License.</div>
                </div>

                <div class="virtue"><img src="../svgs/icon-readfreely.svg"  width="100%" height="100%" title="Read Freely" alt="Read Freely"><div class="virtue-desc">This book is available to read freely online and as a downloadable PDF.</div>
                </div>
 
                <div class="virtue"><img src="../svgs/icon-revenue.svg"  width="100%" height="100%" title="Support Independent Publishing" alt="Support Independent Publishing"><div class="virtue-desc">Purchasing this book generates revenue direct to the author with no intermediaries.</div>
                </div>

                <div class="virtue"><img src="../svgs/icon-accessibility.svg"  width="100%" height="100%" title="Accessibility Maximized" alt="Accessibility Maximized"><div class="virtue-desc">Earthbooks are designed from the ground up to be easy on the eyes, accessible, and multi-lingual.</div>
                </div>

            </div>

            <div><h2><i>The Medium is the Message.</i></h2></div>

   
            <div id="wcb" class="carbonbadge wcb-d"></div>
	      
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