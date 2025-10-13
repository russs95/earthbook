class ContentCurtain extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <nav id="table-of-contents"
         class="overlay-tc"
         role="navigation"
         aria-label="Table of Contents for Tractatus Ayyew"
         itemscope itemtype="https://schema.org/TableOfContents"
         aria-live="polite">

      <!-- Top Buttons -->
      <div id="top-close-button" role="toolbar" aria-label="Top controls">
        <a href="index.html" role="button" aria-label="Go to Home">
          <img src="../icons/home.svg" alt="Home" style="padding-right:10px;padding-left:10px;">
        </a> 
        <img src="../svgs/bottom-x.svg" alt="Close Table of Contents"
             role="button" tabindex="0" aria-pressed="false"
             style="padding-left:10px;cursor:pointer"
             onclick="closeContents()" onkeydown="if(event.key==='Enter'||event.key===' ')closeContents()">
        <img src="../icons/search.svg?v=3" alt="Search this book"
             role="button" tabindex="0"
             style="padding-left:12px;padding-right:15px;cursor:pointer"
             onclick="closeContents(); openSearch()"
             onkeydown="if(event.key==='Enter'||event.key===' ') {closeContents(); openSearch();}">
      </div>

      <div class="overlay-content-tc">

        <p role="doc-subtitle" aria-label="About the Table of Contents">
          Navigate the three books of <cite>Tractatus Ayyew</cite>. Use the arrow keys to switch books and the Tab key to move through chapters.
        </p>

        <!-- Book Tabs -->
        <div class="contents-title-box">
          <div class="contents-title" itemprop="name">Tractatus Ayyew | Table of Contents</div>
          <div class="contents-books123"
               role="tablist"
               aria-label="Book Sections of Tractatus Ayyew">
            <button id="button-one" role="tab" aria-controls="appx-book-one" aria-selected="true" tabindex="0">Book One</button>
            <button id="button-two" role="tab" aria-controls="appx-book-two" aria-selected="false" tabindex="-1">Two</button>
            <button id="button-three" role="tab" aria-controls="appx-book-three" aria-selected="false" tabindex="-1">Three</button>
            <button id="button-appx" role="tab" aria-controls="appx-book-appx" aria-selected="false" tabindex="-1">Appx</button>
          </div>
        </div>

        <!-- BOOK ONE -->
        <div id="appx-book-one"
             role="tabpanel"
             aria-labelledby="button-one"
             aria-label="Chapters in Book One"
             itemscope itemtype="https://schema.org/ItemList"
             itemprop="hasPart">
          <meta itemprop="name" content="Book One | The Beginning">

          ${this.chapterLink(1,"Preamble",431,"https://book.earthen.io/en/preamble.html")}
          ${this.chapterLink(2,"Preface",1220,"https://book.earthen.io/en/preface.html")}
          ${this.chapterLink(3,"Epigraph",65,"https://book.earthen.io/en/epigraph-1.html")}
          ${this.chapterLink(4,"Imagine",1095,"https://book.earthen.io/en/imagine.html")}
          ${this.chapterLink(5,"Plastic 1.0",623,"https://book.earthen.io/en/plastic1.html")}
          ${this.chapterLink(6,"An Interstellar Story",1021,"https://book.earthen.io/en/stellar.html")}
          ${this.chapterLink(7,"Patterns of Process",837,"https://book.earthen.io/en/patterns.html")}
          ${this.chapterLink(8,"Kindred Relations",1508,"https://book.earthen.io/en/kincentric.html")}
          ${this.chapterLink(9,"Nature's Fallacy",973,"https://book.earthen.io/en/nature.html")}
          ${this.chapterLink(10,"The Earthen Ways",784,"https://book.earthen.io/en/earthen.html")}
        </div>

        <!-- Future Books -->
        <div id="appx-book-two" role="tabpanel" aria-labelledby="button-two" aria-label="Chapters in Book Two" hidden></div>
        <div id="appx-book-three" role="tabpanel" aria-labelledby="button-three" aria-label="Chapters in Book Three" hidden></div>
        <div id="appx-book-appx" role="tabpanel" aria-labelledby="button-appx" aria-label="Appendix Chapters" hidden></div>

        <!-- Bottom Buttons -->
        <div class="tc-button-row" role="group" aria-label="Quick access controls">
         
          <div id="tour-button" class="action-btn"
               role="button" tabindex="0"
               aria-label="Take a guided tour"
               onclick="closeContents(); guidedTour();"
               onkeydown="if(event.key==='Enter'||event.key===' ') {closeContents(); guidedTour();}">
            <i style="background-image:url(../icons/tour.svg);width:22px;height:22px;display:inline-block;background-size:22px;margin-bottom:-3px;margin-right:5px;"></i>Tour
          </div>
          <div id="buy-button" class="action-btn"
               role="button" tabindex="0"
               aria-label="Buy the book"
               onclick="openBuy();"
               onkeydown="if(event.key==='Enter'||event.key===' ') openBuy();">
            <i style="background-image:url(../icons/buy.svg);width:22px;height:22px;display:inline-block;background-size:22px;margin-bottom:-3px;margin-right:5px;"></i>
          </div>
          <div id="about-button" class="action-btn"
               role="button" tabindex="0"
               aria-label="About this book"
               onclick="openBookplate();"
               onkeydown="if(event.key==='Enter'||event.key===' ') openBookplate();">
            <i style="background-image:url(../icons/about.svg);width:22px;height:22px;display:inline-block;background-size:22px;margin-bottom:-3px;margin-right:5px;"></i>
          </div>
          <div id="eco-button" class="action-btn"
               role="button" tabindex="0"
               aria-label="View ecological report"
               onclick="openEco();"
               onkeydown="if(event.key==='Enter'||event.key===' ') openEco();">
            <i style="background-image:url(../icons/eco-green.svg);width:22px;height:22px;display:inline-block;background-size:22px;margin-bottom:-3px;margin-right:0px;"></i>
          </div>
        </div>
      </div>
    </nav>
    `;

        // Inject JSON-LD into <head> for AI parsing
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
                        {"@type":"BookChapter","position":1,"name":"Preamble","url":"https://book.earthen.io/en/preamble.html","wordCount":431},
                        {"@type":"BookChapter","position":2,"name":"Preface","url":"https://book.earthen.io/en/preface.html","wordCount":1220},
                        {"@type":"BookChapter","position":3,"name":"Epigraph","url":"https://book.earthen.io/en/epigraph-1.html","wordCount":65},
                        {"@type":"BookChapter","position":4,"name":"Imagine","url":"https://book.earthen.io/en/imagine.html","wordCount":1095},
                        {"@type":"BookChapter","position":5,"name":"Plastic 1.0","url":"https://book.earthen.io/en/plastic1.html","wordCount":623},
                        {"@type":"BookChapter","position":6,"name":"An Interstellar Story","url":"https://book.earthen.io/en/stellar.html","wordCount":1021},
                        {"@type":"BookChapter","position":7,"name":"Patterns of Process","url":"https://book.earthen.io/en/patterns.html","wordCount":837},
                        {"@type":"BookChapter","position":8,"name":"Kindred Relations","url":"https://book.earthen.io/en/kincentric.html","wordCount":1508},
                        {"@type":"BookChapter","position":9,"name":"Nature's Fallacy","url":"https://book.earthen.io/en/nature.html","wordCount":973},
                        {"@type":"BookChapter","position":10,"name":"The Earthen Ways","url":"https://book.earthen.io/en/earthen.html","wordCount":784}
                    ]
                }
            ]
        };
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(tocJSONLD, null, 2);
        document.head.appendChild(script);

        // Initialize accessibility logic
        this.setupTabs();
    }

    // Helper to create chapter links
    chapterLink(pos, name, words, url) {
        return `
    <a href="${url}"
       role="link"
       aria-label="Chapter ${pos}: ${name} — ${words} words"
       itemprop="itemListElement"
       itemscope itemtype="https://schema.org/ListItem">
      <meta itemprop="position" content="${pos}" />
      <div class="tc-item">
        <div class="chapter-name-tc" itemprop="name">${name}</div>
        <div class="word-count-tc"><i itemprop="wordCount">${words} words</i></div>
        <meta itemprop="item" content="${url}" />
      </div>
    </a>`;
    }

    setupTabs() {
        const tabButtons = document.querySelectorAll('[role="tab"]');
        const tabPanels = document.querySelectorAll('[role="tabpanel"]');

        // Keyboard navigation between tabs
        tabButtons.forEach((tab, idx) => {
            tab.addEventListener("click", () => this.activateTab(idx));
            tab.addEventListener("keydown", e => {
                if (e.key === "ArrowRight") this.activateTab((idx + 1) % tabButtons.length);
                if (e.key === "ArrowLeft") this.activateTab((idx - 1 + tabButtons.length) % tabButtons.length);
                if (e.key === "Enter" || e.key === " ") tab.click();
            });
        });

        this.activateTab(0);

        // Helper to activate tab by index
        this.activateTab = (index) => {
            tabButtons.forEach((tab, i) => {
                const selected = i === index;
                tab.setAttribute("aria-selected", selected);
                tab.setAttribute("tabindex", selected ? "0" : "-1");
                tabPanels[i].hidden = !selected;
            });
        };
    }
}

customElements.define('content-curtain', ContentCurtain);
