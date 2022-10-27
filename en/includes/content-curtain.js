class ContentCurtain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="table-of-contents" class="overlay-tc">
        
        <a href="javascript:void(0)" class="closebtn" onclick="closeContents()">&times;</a>
        
        <div class="overlay-content-tc">

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


                    <div class="tc-button-row">
                        <div id="read-btn" class="action-btn" style="height: 26px; flex-grow: 1"><a href="index.html"><i style="background-image: url(../icons/dash.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 3px;"></i> Dashboard</a></div>

                       <!-- <div><img src="../photos/cover-500px.webp" alt="Tractatus Ayyew - EarthBook" style="width: 100px;border-radius: 5px;"></div>-->

                     
                        <div id="buy-btn" class="action-btn" style="height: 26px;flex-grow: 1"><a href="buy"><i style="background-image: url(../icons/buy.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px;"></i> Buy</a></div>
                
                        <div id="pdf-btn" class="action-btn" style="height: 26px; flex-grow: 1"><a href="pdf"><i style="background-image: url(../icons/pdf.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 2px;"></i> PDF</a></div>

                        <!--<div id="knack-dist_2"><div class="action-btn" style="height: 26px; flex-grow: 1">Get our updates...</div>-->
                        </div>

            <br><br>
                </div>
                </div>
                

            </div>

            <div id="tc-button" style="cursor:pointer" onclick="closeContents()"><span><img src="../svgs/up-arrow.svg" style="width:100px;"></span></div>
    </div>


    `;
}
}

customElements.define('content-curtain', ContentCurtain);