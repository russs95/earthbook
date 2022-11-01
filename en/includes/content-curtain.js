class ContentCurtain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="table-of-contents" class="overlay-tc">

    <div id="top-close-button">
        <span style="cursor:pointer" onclick="closeContents()"><img src="../svgs/bottom-x.svg"></span>
    </div>
        
        <div class="overlay-content-tc">

                    <div class="contents-title-box">
                        <div class="contents-title">Books & Contents</div>
                        <div class="contents-books123">
                            <div class="tc-a-book" style="border-right:1px gray solid";>One</div>
                            <div class="tc-a-book" style="border-right:1px gray solid; color:grey;">Two</div>
                            <div class="tc-a-book" style="color:grey;">Three</div>
                        </div>
                    </div>

                    <a href="preamble.html">
                    <div class="tc-item">
                        <div class="chapter-name-tc">Preamble</div>
                        <div class="word-count-tc"><i>244 words</i></div>
                    </div></a>

                    <a href="preface.html">
                    <div class="tc-item">
                        <div class="chapter-name-tc">Preface</div>
                        <div class="word-count-tc"><i>823 words</i></div>
                    </div></a>

                    <a href="quickstart.html">
                    <div class="tc-item">
                        <div class="chapter-name-tc">Quickstart</div>
                        <div class="word-count-tc"><i>212 words</i></div>
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


                    <div class="tc-button-row">
                    <a href="index.html" style="height: 24px; flex-grow: 1"><div id="read-btn" class="action-btn" ><i style="background-image: url(../icons/dash.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 3px;"></i> Dashboard</div></a>

                       <!-- <div><img src="../photos/cover-500px.webp" alt="Tractatus Ayyew - EarthBook" style="width: 100px;border-radius: 5px;"></div>-->

                     
                        <div id="buy-btn" class="action-btn" onclick="openBuy()" style="height: 24px;flex-grow: 1"><i style="background-image: url(../icons/buy.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px; cursor:pointer;"></i> Buy</div>
                
                        <div id="pdf-btn" class="action-btn" style="height: 24px; flex-grow: 1"><a href="pdf"><i style="background-image: url(../icons/pdf.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 2px;"></i> PDF</a></div>

                        <!--<div id="knack-dist_2"><div class="action-btn" style="height: 24px; flex-grow: 1">Get our updates...</div>-->
                        </div>

            <br><br>
                </div>
                </div>
                

            </div>

          <!--  <div id="tc-button" style="cursor:pointer" onclick="closeContents()"><span><img src="../svgs/up-arrow.svg" style="width:100px;"></span></div>-->

    </div>


    `;
}
}

customElements.define('content-curtain', ContentCurtain);