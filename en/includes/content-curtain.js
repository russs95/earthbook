class ContentCurtain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="table-of-contents" class="overlay-tc">

    <div id="top-close-button">
        <a href="index.html"><img src="../icons/home.svg" alt="Home Button" style="padding-right:10px;padding-left:10px;"></a> 
        <img src="../svgs/bottom-x.svg" alt="Close Button" style="padding-left:10px;cursor:pointer" onclick="closeContents()">
        <img src="../icons/search.svg?v=3" alt="Search" style="padding-left:12px;padding-right:15px;cursor:pointer" onclick="closeContents(), openSearch()">
    </div>
        
        <div class="overlay-content-tc">

                 

                    <div class="contents-title-box">
  <div class="contents-title">Books & Contents</div>
  <div class="contents-books123">
    <div class="tc-a-book" id="button-one" style="border-right:1px gray solid;">One</div>
    <div class="tc-a-book" id="button-two" style="border-right:1px gray solid; color:grey;">Two</div>
    <div class="tc-a-book" id="button-three" style="border-right:1px gray solid; color:grey;">Three</div>
    <div class="tc-a-book" id="button-appx" style="color:grey;">Appx</div>
  </div>
</div>


                    <div id="appx-book-one">

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
                    </div>



                    <div id="appx-book-two" style="display: none;">
                        <a href="spirals.php">
                        <div class="tc-item">
                            <div class="chapter-name-tc">Cycles that Spiral</div>
                            <div class="word-count-tc"><i>1,682 words</i></div>
                        </div></a>

                        <a href="preface.php">
                        <div class="tc-item">
                            <div class="chapter-name-tc">The Salmon's Spin</div>
                            <div class="word-count-tc"><i>2,294 words</i></div>
                        </div></a>

                        <a href="unpublished.php">
                        <div class="tc-item">
                            <div class="chapter-name-tc">The Manner of the Mollusk</div>
                            <div class="dotted-line"></div>
                            <div class="word-count-tc"><i>Unpublished</i></div>
                        </div>
                        </a>

                        <a href="unpublished.php">
                        <div class="tc-item">
                            <div class="chapter-name-tc">The Polyp's Pattern</div>
                            <div class="dotted-line"></div>
                            <div class="word-count-tc"><i>Unpublished</i></div>
                        </div>
                        </a>

                        <a href="unpublished.php">
                        <div class="tc-item">
                            <div class="chapter-name-tc">The Means of the Myccorhyzal</div>
                            <div class="dotted-line"></div>
                            <div class="word-count-tc"><i>Unpublished</i></div>
                        </div>
                        </a>

                    </div>

                    <div id="appx-book-three" style="display: none;">
                        <a href="unpublished.php">
                        <div class="tc-item">
                            <div class="chapter-name-tc">Plastic 2.0</div>
                            <div class="word-count-tc"><i>unpublished</i></div>
                        </div></a>

                        <a href="unpublished.php">
                        <div class="tc-item">
                            <div class="chapter-name-tc">Plastic Sequestration</div>
                            <div class="word-count-tc"><i>unpublished</i></div>
                        </div></a>

                        <a href="unpublished.php">
                        <div class="tc-item">
                            <div class="chapter-name-tc">Petro-Capital Transition</div>
                            <div class="dotted-line"></div>
                            <div class="word-count-tc"><i>Unpublished</i></div>
                        </div>
                        </a>

                        <a href="unpublished.php">
                        <div class="tc-item">
                            <div class="chapter-name-tc">Ad Pax Ayyew</div>
                            <div class="dotted-line"></div>
                            <div class="word-count-tc"><i>Unpublished</i></div>
                        </div>
                        </a>

                        <a href="unpublished.php">
                        <div class="tc-item">
                            <div class="chapter-name-tc">The Myccorhyzal's Means</div>
                            <div class="dotted-line"></div>
                            <div class="word-count-tc"><i>Unpublished</i></div>
                        </div>
                        </a>

                    </div>

                    <div id="appx-book-appx" style="display: none;">
                        
                        <a href="summaries.php">
                        <div class="tc-item">
                            <div class="chapter-name-tc">Summaries</div>
                            <div class="word-count-tc"><i>501</i></div>
                        </div></a>

                        <a href="dedication.php">
                        <div class="tc-item">
                            <div class="chapter-name-tc">Dedication</div>
                            <div class="word-count-tc"><i>26</i></div>
                        </div></a>


                        <a href="for-earth.php">
                        <div class="tc-item">
                            <div class="chapter-name-tc">For-Earth Declaration</div>
                            <div class="dotted-line"></div>
                            <div class="word-count-tc"><i>54</i></div>
                        </div>
                        </a>

                        <a href="acknowledgements.php">
                        <div class="tc-item">
                            <div class="chapter-name-tc">Acknowledgements</div>
                            <div class="dotted-line"></div>
                            <div class="word-count-tc"><i>541 words</i></div>
                        </div>
                        </a>

                        <a href="publishing.php">
                        <div class="tc-item">
                            <div class="chapter-name-tc">Publishing</div>
                            <div class="dotted-line"></div>
                            <div class="word-count-tc"><i>133 words</i></div>
                        </div>
                        </a>

                        <a href="authors.php">
                        <div class="tc-item">
                            <div class="chapter-name-tc">Authors</div>
                            <div class="dotted-line"></div>
                            <div class="word-count-tc"><i>218 words</i></div>
                        </div>
                        </a>

                        <a href="declaration.php">
                        <div class="tc-item">
                            <div class="chapter-name-tc">Declarations</div>
                            <div class="dotted-line"></div>
                            <div class="word-count-tc"><i>367 words</i></div>
                        </div>
                        </a>

                        <a href="bibliography.php">
                        <div class="tc-item">
                            <div class="chapter-name-tc">Bibliography</div>
                            <div class="dotted-line"></div>
                            <div class="word-count-tc"><i>740 words</i></div>
                        </div>
                        </a>

                        <a href="glossary.php">
                        <div class="tc-item">
                            <div class="chapter-name-tc">Glossary</div>
                            <div class="dotted-line"></div>
                            <div class="word-count-tc"><i>342 words</i></div>
                        </div>
                        </a>


                    </div>


                    <div class="tc-button-row">
                        <a href="index.html" style="height: 24px; flex-grow: 1"><div id="tour-btn" class="action-btn" ><i style="background-image: url(../icons/home.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 3px;"></i></div></a>

                        <div id="buy-btn" class="action-btn" onclick="closeContents(), guidedTour()" style="height: 24px;flex-grow: 1"><i style="background-image: url(../icons/tour.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px; cursor:pointer;"></i> Tour</div>

                        <div id="buy-btn" class="action-btn" onclick="openBuy()" style="height: 24px;flex-grow: 1"><i style="background-image: url(../icons/buy.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px; cursor:pointer;"></i> Buy</div>

                        <div id="buy-btn" class="action-btn" onclick="openBookplate()" style="height: 22px;flex-grow: 1"><i style="background-image: url(../icons/about.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px; cursor:pointer;"></i></div>

                        <div id="buy-btn" class="action-btn" onclick="openEco()" style="height: 24px;flex-grow: 1"><i style="background-image: url(../icons/eco-green.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 0px; cursor:pointer;"></i></div>
                    
                       
                        </div>

            <br><br>
                </div>
                </div>
                

            </div>

         <!--   <div>
            <button type="button" class="bottom-close-button" style="cursor:pointer" onclick="closeBuy()" aria-label="Click to close this pop-up page">
              <img src="../svgs/bottom-x.svg" alt="Close page button">
            </button>
          </div>-->
    </div>


    `;
}
}

customElements.define('content-curtain', ContentCurtain);

document.addEventListener("DOMContentLoaded", function() {
  // Show the initial content on page load
  showContent("one");

  // Add click event listeners to the buttons
  document.getElementById("button-one").addEventListener("click", function() {
    showContent("one");
  });

  document.getElementById("button-two").addEventListener("click", function() {
    showContent("two");
  });

  document.getElementById("button-three").addEventListener("click", function() {
    showContent("three");
  });

  document.getElementById("button-appx").addEventListener("click", function() {
    showContent("appx");
  });
});

function showContent(content) {
  // Hide all content divs
  document.getElementById("appx-book-one").style.display = "none";
  document.getElementById("appx-book-two").style.display = "none";
  document.getElementById("appx-book-three").style.display = "none";
  document.getElementById("appx-book-appx").style.display = "none";

  // Show the selected content div
  document.getElementById(`appx-book-${content}`).style.display = "block";
}

