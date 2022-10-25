class ContentCurtain2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="left-table-of-contents" class="overlay-tc">
        
        <a href="javascript:void(0)" class="closebtn" onclick="closeContents()">&times;</a>
        
        <div class="overlay-content-tc">

            <div id="row">
                <div id="side2">

                    <img src="../photos/cover-500px.webp" alt="Tractatus Ayyew - EarthBook">

                    <!--<div class="welcome-to">Welcome to the <b><span style="cursor:pointer" onclick="openEarthbook()">EarthBook</span></b> edition of the Tractatus Ayyew.</div>-->

                    <div class="button-row">
                        <div id="read-btn" class="action-btn"><a href="index.html">Dashboard</a></div>
                        <div id="buy-btn" class="action-btn"><a href="buy">🛒 Buy</a></div>
                        <div id="pdf-btn" class="action-btn"><a href="pdf"> ↓ PDF</a></div>
                    </div>
                
                    <div id="knack-dist_2"><h5 style="padding-bottom: 20px;margin-top: 30px;margin-bottom: 80px;font-size: 1em;">Get our updates...</h5></div>
                    <br><br>
                
                </div>

                <div id="main2">
                    <div class="contents-title">Book One</div>
                    
                    <a href="preface.html">
                    <div class="tc-item">
                    <div class="magic-circle"></div>
                    <div class="chapter-name-tc">Preface</div>
                    <div class="dotted-line"></div>
                    <div class="word-count-tc"><i>8 words</i></div>
                    </div></a>

                    <a href="quickstart.html">
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
                </div>
            </div>
    </div>


    `;
}
}

customElements.define('content-curtain-2', ContentCurtain2);