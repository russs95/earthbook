class ContentCurtain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="left-table-of-contents" class="overlay-tc">
        
        <a href="javascript:void(0)" class="closebtn" onclick="closeContents()">&times;</a>
        
        <div class="overlay-content-tc">

            <div><h2>BOOK ONE</h2></div>
            <div class="contents-title">Table of Contents</div>
            
            <a href="preface">
            <div class="tc-item">
              <div class="magic-circle"></div>
              <div class="chapter-name-tc">Preface</div>
              <div class="dotted-line"></div>
              <div class="word-count-tc"><i>8 words</i></div>
            </div></a>

            <a href="quickstart">
            <div class="tc-item">
                <div class="chapter-name-tc">Quick start</div>
                <div class="word-count-tc"><i>35 words</i></div>
            </div></a>

            <a href="imagine">
            <div class="tc-item">
                <div class="chapter-name-tc">Imagine</div>
                <div class="dotted-line"></div>
                <div class="word-count-tc"><i>1,095 words</i></div>
            </div>
            </a>

            <a href="plastic1">
            <div class="tc-item">
                <div class="chapter-name-tc">Plastic 1.0</div>
                <div class="dotted-line"></div>
                <div class="word-count-tc"><i>623 words</i></div>
            </div>
            </a>

            <a href="stellar">
            <div class="tc-item">
                <div class="chapter-name-tc">A Stellar Story</div>
                <div class="dotted-line"></div>
                <div class="word-count-tc"><i>1,021 words</i></div>
            </div>
            </a>

            <a href="patterns">
              <div class="tc-item">
              <div class="chapter-name-tc">Patterns of Process</div>
              <div class="dotted-line"></div>
              <div class="word-count-tc"><i>837 words</i></div>
            </div>
            </a>

            <a href="kincentric">
            <div class="tc-item">
              <div class="chapter-name-tc">Kindred Relations</div>
              <div class="dotted-line"></div>
              <div class="word-count-tc"><i>1,508 words</i></div>
            </div>
            </a>

            <a href="nature">
            <div class="tc-item">
              <div class="chapter-name-tc">Nature's Fallacy</div>
              <div class="dotted-line"></div>
              <div class="word-count-tc"><i>973 words</i></div>
            </div>
            </a>

            <a href="earthen-ways">
            <div class="tc-item">
                <div class="chapter-name-tc">The Earthen Ways</div>
                <div class="dotted-line"></div>
                <div class="word-count-tc"><i>784 words</i></div>
                
            </div>
            </a>
        <!--
            <img src="../svgs/earthen-logo-dark-grey.svg" width="100px">
          </div>-->
                
                 
            
        </div>
    </div>


    `;
}
}

customElements.define('content-curtain', ContentCurtain);