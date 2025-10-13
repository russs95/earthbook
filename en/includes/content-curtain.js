class ContentCurtain extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <nav id="table-of-contents" class="overlay-tc"
         itemscope itemtype="https://schema.org/TableOfContents"
         role="navigation" aria-label="Table of Contents">

      <div id="top-close-button">
        <a href="index.html"><img src="../icons/home.svg" alt="Home Button" style="padding-right:10px;padding-left:10px;"></a> 
        <img src="../svgs/bottom-x.svg" alt="Close Button" style="padding-left:10px;cursor:pointer" onclick="closeContents()">
        <img src="../icons/search.svg?v=3" alt="Search" style="padding-left:12px;padding-right:15px;cursor:pointer" onclick="closeContents(), openSearch()">
      </div>
      
      <div class="overlay-content-tc">

        <div class="contents-title-box">
          <div class="contents-title" itemprop="name">Tractatus Ayyew | Table of Contents</div>
          <div class="contents-books123" role="tablist">
            <button id="button-one" role="tab" aria-controls="appx-book-one" aria-selected="true">Book One</button>
            <button id="button-two" role="tab" aria-controls="appx-book-two" aria-selected="false">Book Two</button>
            <button id="button-three" role="tab" aria-controls="appx-book-three" aria-selected="false">Book Three</button>
            <button id="button-appx" role="tab" aria-controls="appx-book-appx" aria-selected="false">Appendix</button>
          </div>
        </div>

        <!-- BOOK ONE -->
        <div id="appx-book-one" itemscope itemtype="https://schema.org/ItemList" itemprop="hasPart" aria-label="Book One chapters">
          <meta itemprop="name" content="Book One | The Beginning">

          <a href="preamble.html" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <meta itemprop="position" content="1" />
            <div class="tc-item">
              <div class="chapter-name-tc" itemprop="name">Preamble</div>
              <div class="word-count-tc"><i itemprop="wordCount">431 words</i></div>
              <meta itemprop="item" content="https://book.earthen.io/en/preamble.html" />
            </div>
          </a>

          <a href="preface.html" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <meta itemprop="position" content="2" />
            <div class="tc-item">
              <div class="chapter-name-tc" itemprop="name">Preface</div>
              <div class="word-count-tc"><i itemprop="wordCount">1,220 words</i></div>
              <meta itemprop="item" content="https://book.earthen.io/en/preface.html" />
            </div>
          </a>

          <a href="epigraph-1.html" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <meta itemprop="position" content="3" />
            <div class="tc-item">
              <div class="chapter-name-tc" itemprop="name">Epigraph</div>
              <div class="word-count-tc"><i itemprop="wordCount">65 words</i></div>
              <meta itemprop="item" content="https://book.earthen.io/en/epigraph-1.html" />
            </div>
          </a>

          <a href="imagine.html" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <meta itemprop="position" content="4" />
            <div class="tc-item">
              <div class="chapter-name-tc" itemprop="name">Imagine</div>
              <div class="word-count-tc"><i itemprop="wordCount">1,095 words</i></div>
              <meta itemprop="item" content="https://book.earthen.io/en/imagine.html" />
            </div>
          </a>

          <a href="plastic1.html" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <meta itemprop="position" content="5" />
            <div class="tc-item">
              <div class="chapter-name-tc" itemprop="name">Plastic 1.0</div>
              <div class="word-count-tc"><i itemprop="wordCount">623 words</i></div>
              <meta itemprop="item" content="https://book.earthen.io/en/plastic1.html" />
            </div>
          </a>

          <a href="stellar.html" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <meta itemprop="position" content="6" />
            <div class="tc-item">
              <div class="chapter-name-tc" itemprop="name">An Interstellar Story</div>
              <div class="word-count-tc"><i itemprop="wordCount">1,021 words</i></div>
              <meta itemprop="item" content="https://book.earthen.io/en/stellar.html" />
            </div>
          </a>

          <a href="patterns.html" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <meta itemprop="position" content="7" />
            <div class="tc-item">
              <div class="chapter-name-tc" itemprop="name">Patterns of Process</div>
              <div class="word-count-tc"><i itemprop="wordCount">837 words</i></div>
              <meta itemprop="item" content="https://book.earthen.io/en/patterns.html" />
            </div>
          </a>

          <a href="kincentric.html" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <meta itemprop="position" content="8" />
            <div class="tc-item">
              <div class="chapter-name-tc" itemprop="name">Kindred Relations</div>
              <div class="word-count-tc"><i itemprop="wordCount">1,508 words</i></div>
              <meta itemprop="item" content="https://book.earthen.io/en/kincentric.html" />
            </div>
          </a>

          <a href="nature.html" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <meta itemprop="position" content="9" />
            <div class="tc-item">
              <div class="chapter-name-tc" itemprop="name">Nature's Fallacy</div>
              <div class="word-count-tc"><i itemprop="wordCount">973 words</i></div>
              <meta itemprop="item" content="https://book.earthen.io/en/nature.html" />
            </div>
          </a>

          <a href="earthen.html" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <meta itemprop="position" content="10" />
            <div class="tc-item">
              <div class="chapter-name-tc" itemprop="name">The Earthen Ways</div>
              <div class="word-count-tc"><i itemprop="wordCount">784 words</i></div>
              <meta itemprop="item" content="https://book.earthen.io/en/earthen.html" />
            </div>
          </a>
        </div>

        <!-- Continue: Book Two, Book Three, Appendix sections -->
        <!-- You can copy the Book One markup and replace chapter names, positions, and links accordingly -->

        <!-- Bottom Button Row -->
        <div class="tc-button-row" role="group" aria-label="Quick actions">
          <a href="index.html" aria-label="Home button"><div id="tour-btn" class="action-btn"><i style="background-image:url(../icons/home.svg);width:22px;height:22px;display:inline-block;background-size:22px;margin-bottom:-3px;margin-right:3px;"></i></div></a>
          <div id="buy-btn" class="action-btn" onclick="closeContents(), guidedTour()" aria-label="Take the guided tour"><i style="background-image:url(../icons/tour.svg);width:22px;height:22px;display:inline-block;background-size:22px;margin-bottom:-3px;margin-right:5px;"></i>Tour</div>
          <div id="buy-btn" class="action-btn" onclick="openBuy()" aria-label="Buy the book"><i style="background-image:url(../icons/buy.svg);width:22px;height:22px;display:inline-block;background-size:22px;margin-bottom:-3px;margin-right:5px;"></i></div>
          <div id="buy-btn" class="action-btn" onclick="openBookplate()" aria-label="About this book"><i style="background-image:url(../icons/about.svg);width:22px;height:22px;display:inline-block;background-size:22px;margin-bottom:-3px;margin-right:5px;"></i></div>
          <div id="buy-btn" class="action-btn" onclick="openEco()" aria-label="See ecological report"><i style="background-image:url(../icons/eco-green.svg);width:22px;height:22px;display:inline-block;background-size:22px;margin-bottom:-3px;margin-right:0px;"></i></div>
        </div>
      </div>
    </nav>
    `;

        // --- JSON-LD for AI / Search engines ---
        const tocJSONLD = {
            "@context": "https://schema.org",
            "@type": "TableOfContents",
            "name": "Tractatus Ayyew Table of Contents",
            "inLanguage": "en",
            "isPartOf": {
                "@type": "Book",
                "name": "Tractatus Ayyew",
                "publisher": "Earthen.io",
                "url": "https://book.earthen.io",
                "bookFormat": "EBook"
            },
            "hasPart": [
                {
                    "@type": "ItemList",
                    "name": "Book One",
                    "itemListOrder": "Ascending",
                    "itemListElement": [
                        {"@type": "BookChapter","position":1,"name":"Preamble","url":"https://book.earthen.io/en/preamble.html","wordCount":431},
                        {"@type": "BookChapter","position":2,"name":"Preface","url":"https://book.earthen.io/en/preface.html","wordCount":1220},
                        {"@type": "BookChapter","position":3,"name":"Epigraph","url":"https://book.earthen.io/en/epigraph-1.html","wordCount":65},
                        {"@type": "BookChapter","position":4,"name":"Imagine","url":"https://book.earthen.io/en/imagine.html","wordCount":1095},
                        {"@type": "BookChapter","position":5,"name":"Plastic 1.0","url":"https://book.earthen.io/en/plastic1.html","wordCount":623},
                        {"@type": "BookChapter","position":6,"name":"An Interstellar Story","url":"https://book.earthen.io/en/stellar.html","wordCount":1021},
                        {"@type": "BookChapter","position":7,"name":"Patterns of Process","url":"https://book.earthen.io/en/patterns.html","wordCount":837},
                        {"@type": "BookChapter","position":8,"name":"Kindred Relations","url":"https://book.earthen.io/en/kincentric.html","wordCount":1508},
                        {"@type": "BookChapter","position":9,"name":"Nature's Fallacy","url":"https://book.earthen.io/en/nature.html","wordCount":973},
                        {"@type": "BookChapter","position":10,"name":"The Earthen Ways","url":"https://book.earthen.io/en/earthen.html","wordCount":784}
                    ]
                }
            ]
        };
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(tocJSONLD, null, 2);
        document.head.appendChild(script);
    }
}

customElements.define('content-curtain', ContentCurtain);

// --- Interaction Logic ---
document.addEventListener("DOMContentLoaded", function() {
    showContent("one");

    document.getElementById("button-one").addEventListener("click", () => showContent("one"));
    document.getElementById("button-two").addEventListener("click", () => showContent("two"));
    document.getElementById("button-three").addEventListener("click", () => showContent("three"));
    document.getElementById("button-appx").addEventListener("click", () => showContent("appx"));
});

function showContent(content) {
    ["one","two","three","appx"].forEach(id => {
        document.getElementById(`appx-book-${id}`).style.display = "none";
        document.getElementById(`button-${id}`).setAttribute("aria-selected","false");
    });
    document.getElementById(`appx-book-${content}`).style.display = "block";
    document.getElementById(`button-${content}`).setAttribute("aria-selected","true");
}
