class Earthbook extends HTMLElement{constructor(){super();}
connectedCallback(){this.innerHTML=`
  <div id="bottom-earthbook" class="overlay-earthbook">
    <a href="javascript:void(0)" class="closebtn" onclick="closeEarthbook()">&times;</a>

      <div class="overlay-content-earthbook">         
            <div>
                <h1>Earthbooks are for readers, writers & Earth.</h1>
                <h3>Earthbooks embody the principles of regenerative and Earthen social and ecological principles in their writing and publishing.</h3>
            </div>

            <div id="virtue-box">

                <div class="virtue"><img src="../svgs/icon-opensource.svg" title="Open Source" alt="testing"><div class="virtue-desc">Both the earthBook and manuscript source and content are available under a GNU license on Github.</div>
                </div>

                <div class="virtue"><img src="../svgs/icon-biodiversity.svg"><div class="virtue-desc">A list of the species supported by the physical space of the book's enterprise is tracked and disclosed.</div>
                </div>

                <div class="virtue"><img src="../svgs/icon-ecoaccounting.svg"><div class="virtue-desc">The ecological accounting of the enterprise of writing and publishing are tracked and disclosed.</div>
                </div>

                <div class="virtue"><img src="../svgs/icon-for-earth.svg"><div class="virtue-desc">The net impact of the writing and publishing of the book was the subtraction of carbon.</div>
                </div>

                <div class="virtue"><img src="../svgs/icon-carbonseq.svg"><div class="virtue-desc">The enterprise of writing and publishing this book is not-for-profit and for-Earth.</div>
                </div>

                <div class="virtue"><img src="../svgs/icon-creativecommons.svg"><div class="virtue-desc">The code and content of this book are licensed under a Creative Commons BY-SA-ND 4.0 License.</div>
                </div>

                <div class="virtue"><img src="../svgs/icon-readfreely.svg"><div class="virtue-desc">This book is available to read freely online and as a downloadable PDF.</div>
                </div>

                <div class="virtue"><img src="../svgs/icon-revenue.svg"><div class="virtue-desc">Purchasing this book generates revenue direct to the author with no intermediaries.</div>
                </div>

                <div class="virtue"><img src="../svgs/icon-accessibility.svg"><div class="virtue-desc">Earthbooks are designed from the ground up to be easy on the eyes, accessible, and multi-lingual.</div>
                </div>

            </div>

            <div><h3><i>The Medium is the Message.</i></h3></div>

   
	      <div id="wcb" class="carbonbadge wcb-d"></div>
	      <script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js" defer></script>
        <br>
        <!--
        <div><a rel="license" href="https://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons BY SA 4.0 License" style="border-width:0" src="icons/cc-by-sa.svg" width="200px" height="45px" loading="lazy"/> </a>
        </div>-->
        
            
    </div>
</div>

    `;}}
customElements.define('earthbook-curtain',Earthbook);