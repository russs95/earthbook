class ContentCurtain extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const bookOneChapters = [
            { position: 1, name: "Preamble", wordCount: 431, url: "https://book.earthen.io/en/preamble.html" },
            { position: 2, name: "Preface", wordCount: 1220, url: "https://book.earthen.io/en/preface.html" },
            { position: 3, name: "Epigraph", wordCount: 65, url: "https://book.earthen.io/en/epigraph-1.html" },
            { position: 4, name: "Imagine", wordCount: 1095, url: "https://book.earthen.io/en/imagine.html" },
            { position: 5, name: "Plastic 1.0", wordCount: 623, url: "https://book.earthen.io/en/plastic1.html" },
            { position: 6, name: "An Interstellar Story", wordCount: 1021, url: "https://book.earthen.io/en/stellar.html" },
            { position: 7, name: "Patterns of Process", wordCount: 837, url: "https://book.earthen.io/en/patterns.html" },
            { position: 8, name: "Kindred Relations", wordCount: 1508, url: "https://book.earthen.io/en/kincentric.html" },
            { position: 9, name: "Nature's Fallacy", wordCount: 973, url: "https://book.earthen.io/en/nature.html" },
            { position: 10, name: "The Earthen Ways", wordCount: 784, url: "https://book.earthen.io/en/earthen.html" }
        ];

        const bookTwoChapters = [
            { position: 1, name: "Epigraph II", wordCount: 51, url: "https://book.earthen.io/en/epigraph-2.html" },
            { position: 2, name: "Cycles that Spiral", wordCount: 1682, url: "https://book.earthen.io/en/spirals.html" },
            { position: 3, name: "The Salmon's Spin", wordCount: 2294, url: "https://book.earthen.io/en/energy.html" },
            { position: 4, name: "The Manner of the Mollusk", wordCount: 2322, url: "https://book.earthen.io/en/matter.html" },
            { position: 5, name: "The Polyp's Pattern", wordCount: 1782, url: "https://book.earthen.io/en/diversification.html" },
            { position: 6, name: "The Means of the Myccorhyzal", wordCount: 1685, url: "https://book.earthen.io/en/awareness.html" }
        ];

        const bookThreeChapters = [
            { position: 1, name: "Epigraph III", wordCount: 58, url: "https://book.earthen.io/en/epigraph-3.html" },
            { position: 2, name: "Plastic 2.0", url: "https://book.earthen.io/en/unpublished.html", wordText: "Unpublished" },
            { position: 3, name: "Plastic Sequestration", url: "https://book.earthen.io/en/unpublished.html", wordText: "Unpublished" },
            { position: 4, name: "Petro-Capital Transition", url: "https://book.earthen.io/en/unpublished.html", wordText: "Unpublished" },
            { position: 5, name: "Ad Pax Ayyew", url: "https://book.earthen.io/en/unpublished.html", wordText: "Unpublished" },
            { position: 6, name: "The Myccorhyzal's Means", url: "https://book.earthen.io/en/unpublished.html", wordText: "Unpublished" }
        ];

        const appendixChapters = [
            { position: 1, name: "Summaries", wordCount: 501, url: "https://book.earthen.io/en/summaries.html" },
            { position: 2, name: "Dedication", wordCount: 26, url: "https://book.earthen.io/en/dedication.html" },
            { position: 3, name: "For-Earth Declaration", wordCount: 54, url: "https://book.earthen.io/en/for-earth.html" },
            { position: 4, name: "Acknowledgements", wordCount: 541, url: "https://book.earthen.io/en/acknowledgements.html" },
            { position: 5, name: "Publishing", wordCount: 133, url: "https://book.earthen.io/en/publishing.html" },
            { position: 6, name: "Authors", wordCount: 218, url: "https://book.earthen.io/en/authors.html" },
            { position: 7, name: "Declarations", wordCount: 367, url: "https://book.earthen.io/en/declaration.html" },
            { position: 8, name: "Bibliography", wordCount: 740, url: "https://book.earthen.io/en/bibliography.html" },
            { position: 9, name: "Glossary", wordCount: 342, url: "https://book.earthen.io/en/glossary.html" }
        ];

        const bookSections = [
            { name: "Book One", metaName: "Book One | The Beginning", chapters: bookOneChapters },
            { name: "Book Two", metaName: "Book Two", chapters: bookTwoChapters },
            { name: "Book Three", metaName: "Book Three", chapters: bookThreeChapters },
            { name: "Appendix", metaName: "Appendix", chapters: appendixChapters }
        ];

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
          <img src="../assets/icons/home.svg" alt="Home" style="padding-right:10px;padding-left:10px;">
        </a> 
        <img src="../svgs/bottom-x.svg" alt="Close Table of Contents"
             role="button" tabindex="0" aria-pressed="false"
             style="padding-left:10px;cursor:pointer"
             onclick="closeContents()" onkeydown="if(event.key==='Enter'||event.key===' ')closeContents()">
        <img src="../assets/icons/search.svg?v=3" alt="Search this book"
             role="button" tabindex="0"
             style="padding-left:12px;padding-right:15px;cursor:pointer"
             onclick="closeContents(); openSearch()"
             onkeydown="if(event.key==='Enter'||event.key===' ') {closeContents(); openSearch();}">
      </div>

      <div class="overlay-content-tc">

        <p role="doc-subtitle" aria-label="About the Table of Contents" class="visually-hidden">
          Navigate the three books of <cite>Tractatus Ayyew</cite>. Use the arrow keys to switch books and the Tab key to move through chapters.
        </p>

        <!-- Book Tabs -->
        <div class="contents-title-box">
          <div class="contents-title" itemprop="name">Table of Contents</div>
          <div class="contents-books123"
               role="tablist"
               aria-label="Book Sections of Tractatus Ayyew">
            <div class="tc-a-book content-button"
                 id="button-one"
                 role="tab"
                 aria-controls="appx-book-one"
                 aria-selected="true"
                 tabindex="0"
                 aria-label="Book One"
                 style="border-right:1px gray solid;">Book 1</div>
            <div class="tc-a-book content-button"
                 id="button-two"
                 role="tab"
                 aria-controls="appx-book-two"
                 aria-selected="false"
                 tabindex="-1"
                 aria-label="Book Two"
                 style="border-right:1px gray solid;">2</div>
            <div class="tc-a-book content-button"
                 id="button-three"
                 role="tab"
                 aria-controls="appx-book-three"
                 aria-selected="false"
                 tabindex="-1"
                 aria-label="Book Three"
                 style="border-right:1px gray solid;">3</div>
            <div class="tc-a-book content-button"
                 id="button-appx"
                 role="tab"
                 aria-controls="appx-book-appx"
                 aria-selected="false"
                 tabindex="-1"
                 aria-label="Appendix">Apx</div>
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

          ${bookOneChapters.map(chapter => this.chapterLink(chapter)).join("\n          ")}
        </div>

        <!-- BOOK TWO -->
        <div id="appx-book-two"
             role="tabpanel"
             aria-labelledby="button-two"
             aria-label="Chapters in Book Two"
             itemscope itemtype="https://schema.org/ItemList"
             itemprop="hasPart"
             hidden>
          <meta itemprop="name" content="Book Two">

          ${bookTwoChapters.map(chapter => this.chapterLink(chapter)).join("\n          ")}
        </div>

        <!-- BOOK THREE -->
        <div id="appx-book-three"
             role="tabpanel"
             aria-labelledby="button-three"
             aria-label="Chapters in Book Three"
             itemscope itemtype="https://schema.org/ItemList"
             itemprop="hasPart"
             hidden>
          <meta itemprop="name" content="Book Three">

          ${bookThreeChapters.map(chapter => this.chapterLink(chapter)).join("\n          ")}
        </div>

        <!-- APPENDIX -->
        <div id="appx-book-appx"
             role="tabpanel"
             aria-labelledby="button-appx"
             aria-label="Appendix Chapters"
             itemscope itemtype="https://schema.org/ItemList"
             itemprop="hasPart"
             hidden>
          <meta itemprop="name" content="Appendix">

          ${appendixChapters.map(chapter => this.chapterLink(chapter)).join("\n          ")}
        </div>

        <!-- Bottom Buttons -->
        <div class="tc-button-row" role="group" aria-label="Quick access controls">
          <!--<a href="index.html"
             style="height:24px;flex-grow:1"
             aria-label="Go to Home">
            <div id="home-button" class="action-btn">
              <i style="background-image:url(../assets/icons/home.svg);width:22px;height:22px;display:inline-block;background-size:22px;margin-bottom:-3px;margin-right:3px;"></i>
            </div>
          </a>-->

          <div id="tour-button" class="action-btn"
               role="button" tabindex="0"
               aria-label="Take a guided tour"
               onclick="closeContents(); guidedTour();"
               onkeydown="if(event.key==='Enter'||event.key===' ') {closeContents(); guidedTour();}"
               style="height:24px;flex-grow:1">
            <i style="background-image:url(../assets/icons/tour.svg);width:22px;height:22px;display:inline-block;background-size:22px;margin-bottom:-3px;margin-right:5px;"></i>
            <span class="action-btn-label">Tour</span>
          </div>

          <div id="buy-button" class="action-btn"
               role="button" tabindex="0"
               aria-label="Buy the book"
               onclick="openBuy();"
               onkeydown="if(event.key==='Enter'||event.key===' ') openBuy();"
               style="height:24px;flex-grow:1">
            <i style="background-image:url(../assets/icons/buy.svg);width:22px;height:22px;display:inline-block;background-size:22px;margin-bottom:-3px;margin-right:5px;"></i>
            <span class="action-btn-label">Buy</span>
          </div>

          <div id="about-button" class="action-btn"
               role="button" tabindex="0"
               aria-label="About this book"
               onclick="openBookplate();"
               onkeydown="if(event.key==='Enter'||event.key===' ') openBookplate();"
               style="height:24px;flex-grow:1">
            <i style="background-image:url(../assets/icons/about.svg);width:22px;height:22px;display:inline-block;background-size:22px;margin-bottom:-3px;margin-right:5px;"></i>
            <span class="action-btn-label">About</span>
          </div>

          <div id="eco-button" class="action-btn"
               role="button" tabindex="0"
               aria-label="View ecological report"
               onclick="openEco();"
               onkeydown="if(event.key==='Enter'||event.key===' ') openEco();"
               style="height:24px;flex-grow:1">
            <i style="background-image:url(../assets/icons/eco-green.svg);width:22px;height:22px;display:inline-block;background-size:22px;margin-bottom:-3px;margin-right:0px;"></i>
            <span class="action-btn-label">Eco</span>
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
            "hasPart": bookSections.map(section => this.itemListJSONLD(section.name, section.chapters))
        };
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(tocJSONLD, null, 2);
        document.head.appendChild(script);

        // Initialize accessibility logic
        this.setupTabs();
    }

    // Helper to create chapter links
    chapterLink({ position, name, url, wordCount, wordText, wordLabel = 'words' }) {
        const hasNumericCount = typeof wordCount === 'number' && !Number.isNaN(wordCount);
        const displayText = hasNumericCount ? `${wordCount} ${wordLabel}` : (wordText || '');
        const wordCountMarkup = displayText ? `
        <div class="word-count-tc"><i${hasNumericCount ? ' itemprop="wordCount"' : ''}>${displayText}</i></div>` : '';

        return `
    <a href="${url}"
       role="link"
       aria-label="Chapter ${position}: ${name}${displayText ? ` — ${displayText}` : ''}"
       itemprop="itemListElement"
       itemscope itemtype="https://schema.org/ListItem">
      <meta itemprop="position" content="${position}" />
      <div class="tc-item">
        <div class="chapter-name-tc" itemprop="name">${name}</div>${wordCountMarkup}
        <meta itemprop="item" content="${url}" />
      </div>
    </a>`;
    }

    itemListJSONLD(name, chapters) {
        return {
            "@type": "ItemList",
            "name": name,
            "itemListOrder": "Ascending",
            "itemListElement": chapters.map(chapter => this.chapterJSONLD(chapter))
        };
    }

    chapterJSONLD({ position, name, url, wordCount, wordText }) {
        const entry = {
            "@type": "BookChapter",
            "position": position,
            "name": name,
            "url": url
        };

        if (typeof wordCount === 'number' && !Number.isNaN(wordCount)) {
            entry.wordCount = wordCount;
        } else if (wordText) {
            entry.description = wordText;
        }

        return entry;
    }

    setupTabs() {
        const tabButtons = Array.from(this.querySelectorAll('[role="tab"]'));
        const tabPanels = tabButtons.map(tab => {
            const panelId = tab.getAttribute("aria-controls");
            return this.querySelector(`#${panelId}`);
        });

        const activateTab = (index) => {
            tabButtons.forEach((tab, i) => {
                const selected = i === index;
                tab.setAttribute("aria-selected", selected ? "true" : "false");
                tab.setAttribute("tabindex", selected ? "0" : "-1");
                const panel = tabPanels[i];
                if (panel) {
                    panel.hidden = !selected;
                }
            });
        };

        const focusTab = (index) => {
            const tab = tabButtons[index];
            if (tab) {
                tab.focus();
            }
        };

        // Keyboard navigation between tabs
        tabButtons.forEach((tab, idx) => {
            tab.addEventListener("click", () => activateTab(idx));
            tab.addEventListener("keydown", e => {
                if (e.key === "ArrowRight") {
                    e.preventDefault();
                    const nextIndex = (idx + 1) % tabButtons.length;
                    activateTab(nextIndex);
                    focusTab(nextIndex);
                } else if (e.key === "ArrowLeft") {
                    e.preventDefault();
                    const prevIndex = (idx - 1 + tabButtons.length) % tabButtons.length;
                    activateTab(prevIndex);
                    focusTab(prevIndex);
                } else if (e.key === "Home") {
                    e.preventDefault();
                    activateTab(0);
                    focusTab(0);
                } else if (e.key === "End") {
                    e.preventDefault();
                    const lastIndex = tabButtons.length - 1;
                    activateTab(lastIndex);
                    focusTab(lastIndex);
                } else if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    activateTab(idx);
                }
            });
        });

        activateTab(0);
        this.activateTab = activateTab;
    }
}

customElements.define('content-curtain', ContentCurtain);
