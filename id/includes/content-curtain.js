class ContentCurtain extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const bookOneChapters = [
            { position: 1, name: "Pembukaan", wordCount: 431, url: "https://book.earthen.io/en/preamble.html" },
            { position: 2, name: "Kata Pengantar", wordCount: 1220, url: "https://book.earthen.io/en/preface.html" },
            { position: 3, name: "Epigraf", wordCount: 65, url: "https://book.earthen.io/id/epigraf-1.html" },
            { position: 4, name: "Bayangkan", wordCount: 1095, url: "https://book.earthen.io/en/imagine.html" },
            { position: 5, name: "Plastik 1.0", wordCount: 623, url: "https://book.earthen.io/en/plastic1.html" },
            { position: 6, name: "Kisah Antarbintang", wordCount: 1021, url: "https://book.earthen.io/en/stellar.html" },
            { position: 7, name: "Pola-Pola Proses", wordCount: 837, url: "https://book.earthen.io/en/patterns.html" },
            { position: 8, name: "Hubungan Kerabat", wordCount: 1508, url: "https://book.earthen.io/en/kincentric.html" },
            { position: 9, name: "Kekeliruan Alam", wordCount: 973, url: "https://book.earthen.io/en/nature.html" },
            { position: 10, name: "Cara-Cara Earthen", wordCount: 784, url: "https://book.earthen.io/en/earthen.html" }
        ];

        const bookTwoChapters = [
            { position: 1, name: "Epigraf II", wordCount: 51, url: "https://book.earthen.io/id/epigraf-2.html" },
            { position: 2, name: "Siklus yang Berputar", wordCount: 1682, url: "https://book.earthen.io/en/spirals.html" },
            { position: 3, name: "Putaran Salmon", wordCount: 2294, url: "https://book.earthen.io/en/energy.html" },
            { position: 4, name: "Cara Moluska", wordCount: 2322, url: "https://book.earthen.io/en/matter.html" },
            { position: 5, name: "Pola Polip", wordCount: 1782, url: "https://book.earthen.io/en/diversification.html" },
            { position: 6, name: "Cara Mikoriza", wordCount: 1685, url: "https://book.earthen.io/en/awareness.html" }
        ];

        const bookThreeChapters = [
            { position: 1, name: "Epigraf III", wordCount: 58, url: "https://book.earthen.io/en/epigraph-3.html" },
            { position: 2, name: "Plastik 2.0", url: "https://book.earthen.io/id/belum-diterbitkan.html", wordText: "Belum Diterbitkan" },
            { position: 3, name: "Sekuestrasi Plastik", url: "https://book.earthen.io/id/belum-diterbitkan.html", wordText: "Belum Diterbitkan" },
            { position: 4, name: "Transisi Petro-Modal", url: "https://book.earthen.io/id/belum-diterbitkan.html", wordText: "Belum Diterbitkan" },
            { position: 5, name: "Ad Pax Ayyew", url: "https://book.earthen.io/id/belum-diterbitkan.html", wordText: "Belum Diterbitkan" },
            { position: 6, name: "Cara Mikoriza", url: "https://book.earthen.io/id/belum-diterbitkan.html", wordText: "Belum Diterbitkan" }
        ];

        const appendixChapters = [
            { position: 1, name: "Ringkasan", wordCount: 501, url: "https://book.earthen.io/en/summaries.html" },
            { position: 2, name: "Dedikasi", wordCount: 26, url: "https://book.earthen.io/id/dedikasi.html" },
            { position: 3, name: "Akuntansi Ekologis", wordCount: 54, url: "https://book.earthen.io/id/akuntansi.html" },
            { position: 4, name: "Deklarasi Untuk-Bumi", wordCount: 54, url: "https://book.earthen.io/id/untuk-bumi.html" },
            { position: 5, name: "Ucapan Terima Kasih", wordCount: 541, url: "https://book.earthen.io/id/penghargaan.html" },
            { position: 6, name: "Penerbitan", wordCount: 133, url: "https://book.earthen.io/id/penerbitan.html" },
            { position: 7, name: "Para Penulis", wordCount: 218, url: "https://book.earthen.io/id/penulis.html" },
            { position: 8, name: "Deklarasi", wordCount: 367, url: "https://book.earthen.io/id/deklarasi.html" },
            { position: 9, name: "Bibliografi", wordCount: 740, url: "https://book.earthen.io/id/bibliografi.html" },
            { position: 10, name: "Glosarium", wordCount: 342, url: "https://book.earthen.io/id/glosarium.html" }
        ];

        const bookSections = [
            { name: "Buku Satu", metaName: "Buku Satu | Permulaan", chapters: bookOneChapters },
            { name: "Buku Dua", metaName: "Buku Dua", chapters: bookTwoChapters },
            { name: "Buku Tiga", metaName: "Buku Tiga", chapters: bookThreeChapters },
            { name: "Lampiran", metaName: "Lampiran", chapters: appendixChapters }
        ];

        this.innerHTML = `
    <nav id="table-of-contents"
         class="overlay-tc"
         role="navigation"
         aria-label="Daftar Isi Tractatus Ayyew"
         itemscope itemtype="https://schema.org/TableOfContents"
         aria-live="polite">

      <!-- Tombol Atas -->
      <div id="top-close-button" role="toolbar" aria-label="Kontrol atas">
        <a href="index.html" role="button" aria-label="Ke Beranda">
          <img src="../assets/icons/home.svg" alt="Beranda" style="padding-right:10px;padding-left:10px;">
        </a>
        <img src="../svgs/bottom-x.svg" alt="Tutup Daftar Isi"
             role="button" tabindex="0" aria-pressed="false"
             style="padding-left:10px;cursor:pointer"
             onclick="closeContents()" onkeydown="if(event.key==='Enter'||event.key===' ')closeContents()">
        <img src="../assets/icons/search.svg?v=3" alt="Cari buku ini"
             role="button" tabindex="0"
             style="padding-left:12px;padding-right:15px;cursor:pointer"
             onclick="closeContents(); openSearch()"
             onkeydown="if(event.key==='Enter'||event.key===' ') {closeContents(); openSearch();}">
      </div>

      <div class="overlay-content-tc">

        <p role="doc-subtitle" aria-label="Tentang Daftar Isi" class="visually-hidden">
          Jelajahi tiga buku <cite>Tractatus Ayyew</cite>. Gunakan tombol panah untuk berpindah buku dan tombol Tab untuk berpindah bab.
        </p>

        <!-- Tab Buku -->
        <div class="contents-title-box">
          <div class="contents-title" itemprop="name">Daftar Isi</div>
          <div class="contents-books123"
               role="tablist"
               aria-label="Bagian Buku Tractatus Ayyew">
            <div class="tc-a-book content-button"
                 id="button-one"
                 role="tab"
                 aria-controls="appx-book-one"
                 aria-selected="true"
                 tabindex="0"
                 aria-label="Buku Satu"
                 style="border-right:1px gray solid;">Buku 1</div>
            <div class="tc-a-book content-button"
                 id="button-two"
                 role="tab"
                 aria-controls="appx-book-two"
                 aria-selected="false"
                 tabindex="-1"
                 aria-label="Buku Dua"
                 style="border-right:1px gray solid;">2</div>
            <div class="tc-a-book content-button"
                 id="button-three"
                 role="tab"
                 aria-controls="appx-book-three"
                 aria-selected="false"
                 tabindex="-1"
                 aria-label="Buku Tiga"
                 style="border-right:1px gray solid;">3</div>
            <div class="tc-a-book content-button"
                 id="button-appx"
                 role="tab"
                 aria-controls="appx-book-appx"
                 aria-selected="false"
                 tabindex="-1"
                 aria-label="Lampiran">Lamp</div>
          </div>
        </div>

        <!-- BUKU SATU -->
        <div id="appx-book-one"
             role="tabpanel"
             aria-labelledby="button-one"
             aria-label="Bab-bab Buku Satu"
             itemscope itemtype="https://schema.org/ItemList"
             itemprop="hasPart">
          <meta itemprop="name" content="Buku Satu | Permulaan">

          ${bookOneChapters.map(chapter => this.chapterLink(chapter)).join("\n          ")}
        </div>

        <!-- BUKU DUA -->
        <div id="appx-book-two"
             role="tabpanel"
             aria-labelledby="button-two"
             aria-label="Bab-bab Buku Dua"
             itemscope itemtype="https://schema.org/ItemList"
             itemprop="hasPart"
             hidden>
          <meta itemprop="name" content="Buku Dua">

          ${bookTwoChapters.map(chapter => this.chapterLink(chapter)).join("\n          ")}
        </div>

        <!-- BUKU TIGA -->
        <div id="appx-book-three"
             role="tabpanel"
             aria-labelledby="button-three"
             aria-label="Bab-bab Buku Tiga"
             itemscope itemtype="https://schema.org/ItemList"
             itemprop="hasPart"
             hidden>
          <meta itemprop="name" content="Buku Tiga">

          ${bookThreeChapters.map(chapter => this.chapterLink(chapter)).join("\n          ")}
        </div>

        <!-- LAMPIRAN -->
        <div id="appx-book-appx"
             role="tabpanel"
             aria-labelledby="button-appx"
             aria-label="Bab-bab Lampiran"
             itemscope itemtype="https://schema.org/ItemList"
             itemprop="hasPart"
             hidden>
          <meta itemprop="name" content="Lampiran">

          ${appendixChapters.map(chapter => this.chapterLink(chapter)).join("\n          ")}
        </div>

        <!-- Tombol Bawah -->
        <div class="tc-button-row" role="group" aria-label="Kontrol akses cepat">
          <div id="tour-button" class="action-btn"
               role="button" tabindex="0"
               aria-label="Ikuti tur terpandu"
               onclick="closeContents(); guidedTour();"
               onkeydown="if(event.key==='Enter'||event.key===' ') {closeContents(); guidedTour();}"
               style="height:24px;flex-grow:1">
            <i style="background-image:url(../assets/icons/tour.svg);width:22px;height:22px;display:inline-block;background-size:22px;margin-bottom:-3px;margin-right:5px;"></i>
            <span class="action-btn-label">Tur</span>
          </div>

          <div id="buy-button" class="action-btn"
               role="button" tabindex="0"
               aria-label="Beli buku"
               onclick="openBuy();"
               onkeydown="if(event.key==='Enter'||event.key===' ') openBuy();"
               style="height:24px;flex-grow:1">
            <i style="background-image:url(../assets/icons/buy.svg);width:22px;height:22px;display:inline-block;background-size:22px;margin-bottom:-3px;margin-right:5px;"></i>
            <span class="action-btn-label">Beli</span>
          </div>

          <div id="about-button" class="action-btn"
               role="button" tabindex="0"
               aria-label="Tentang buku ini"
               onclick="openBookplate();"
               onkeydown="if(event.key==='Enter'||event.key===' ') openBookplate();"
               style="height:24px;flex-grow:1">
            <i style="background-image:url(../assets/icons/about.svg);width:22px;height:22px;display:inline-block;background-size:22px;margin-bottom:-3px;margin-right:5px;"></i>
            <span class="action-btn-label">Tentang</span>
          </div>

          <div id="eco-button" class="action-btn"
               role="button" tabindex="0"
               aria-label="Lihat laporan ekologis"
               onclick="openEco();"
               onkeydown="if(event.key==='Enter'||event.key===' ') openEco();"
               style="height:24px;flex-grow:1">
            <i style="background-image:url(../assets/icons/eco-green.svg);width:22px;height:22px;display:inline-block;background-size:22px;margin-bottom:-3px;margin-right:0px;"></i>
            <span class="action-btn-label">Eko</span>
          </div>
        </div>
      </div>
    </nav>
    `;

        const tocJSONLD = {
            "@context": "https://schema.org",
            "@type": "TableOfContents",
            "name": "Daftar Isi Tractatus Ayyew",
            "inLanguage": "id",
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

        this.setupTabs();
    }

    chapterLink({ position, name, url, wordCount, wordText, wordLabel = 'kata' }) {
        const hasNumericCount = typeof wordCount === 'number' && !Number.isNaN(wordCount);
        const displayText = hasNumericCount ? `${wordCount} ${wordLabel}` : (wordText || '');
        const wordCountMarkup = displayText ? `
        <div class="word-count-tc"><i${hasNumericCount ? ' itemprop="wordCount"' : ''}>${displayText}</i></div>` : '';

        return `
    <a href="${url}"
       role="link"
       aria-label="Bab ${position}: ${name}${displayText ? ` — ${displayText}` : ''}"
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
