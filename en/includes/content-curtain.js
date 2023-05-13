class ContentCurtain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="table-of-contents" class="overlay-tc">

    <div id="top-close-button">
        <a href="index.php"><img src="../icons/home.svg" alt="Home Button" style="padding-right:10px;padding-left:10px;"></a> 
        <img src="../svgs/bottom-x.svg" alt="Close Button" style="padding-left:10px;cursor:pointer" onclick="closeContents()">
        <img src="../icons/search.svg?v=3" alt="Search" style="padding-left:12px;padding-right:15px;cursor:pointer" onclick="closeContents(), openSearch()">
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

                    <a href="preamble.php">
                    <div class="tc-item">
                        <div class="chapter-name-tc">Preamble</div>
                        <div class="word-count-tc"><i>431 words</i></div>
                    </div></a>

                    <a href="preface.php">
                    <div class="tc-item">
                        <div class="chapter-name-tc">Preface</div>
                        <div class="word-count-tc"><i>1,220 words</i></div>
                    </div></a>

                    <a href="imagine.php">
                    <div class="tc-item">
                        <div class="chapter-name-tc">Imagine</div>
                        <div class="dotted-line"></div>
                        <div class="word-count-tc"><i>1,095 words</i></div>
                    </div>
                    </a>

                    <a href="plastic.php">
                    <div class="tc-item">
                        <div class="chapter-name-tc">Plastic 1.0</div>
                        <div class="dotted-line"></div>
                        <div class="word-count-tc"><i>623 words</i></div>
                    </div>
                    </a>

                    <a href="stellar.php">
                    <div class="tc-item">
                        <div class="chapter-name-tc">An Interstellar Story</div>
                        <div class="dotted-line"></div>
                        <div class="word-count-tc"><i>1,021 words</i></div>
                    </div>
                    </a>

                    <a href="patterns.php">
                    <div class="tc-item">
                    <div class="chapter-name-tc">Patterns of Process</div>
                    <div class="dotted-line"></div>
                    <div class="word-count-tc"><i>837 words</i></div>
                    </div>
                    </a>

                    <a href="kincentric.php">
                    <div class="tc-item">
                    <div class="chapter-name-tc">Kindred Relations</div>
                    <div class="dotted-line"></div>
                    <div class="word-count-tc"><i>1,508 words</i></div>
                    </div>
                    </a>

                    <a href="nature.php">
                    <div class="tc-item">
                    <div class="chapter-name-tc">Nature's Fallacy</div>
                    <div class="dotted-line"></div>
                    <div class="word-count-tc"><i>973 words</i></div>
                    </div>
                    </a>

                    <a href="earthen.php">
                    <div class="tc-item">
                        <div class="chapter-name-tc">The Earthen Ways</div>
                        <div class="dotted-line"></div>
                        <div class="word-count-tc"><i>784 words</i></div>
                        
                    </div>
                    </a>


                    <div class="tc-button-row">
                        <a href="index.php" style="height: 24px; flex-grow: 1"><div id="tour-btn" class="action-btn" ><i style="background-image: url(../icons/tour.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 3px;"></i> Tour</div></a>

                        <div id="buy-btn" class="action-btn" onclick="openBuy()" style="height: 24px;flex-grow: 1"><i style="background-image: url(../icons/buy.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px; cursor:pointer;"></i> Buy</div>

                        <div id="buy-btn" class="action-btn" onclick="guidedTour()" style="height: 22px;flex-grow: 1"><i style="background-image: url(../icons/about.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px; cursor:pointer;"></i></div>

                        <div id="buy-btn" class="action-btn" onclick="openEco()" style="height: 24px;flex-grow: 1"><i style="background-image: url(../icons/eco-green.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 0px; cursor:pointer;"></i></div>
                    
                       
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
