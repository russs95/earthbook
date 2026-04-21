class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="earthbook-navbar">
        <div id="settings-menu" >
            <button type="button" style="cursor:pointer; background:none;border:none;" onclick="openSettings()" aria-label="Buka Pengaturan"><img src="../svgs/left-menu.svg" alt="Ikon pengaturan"></button>
        </div>

        <button type="button" style="cursor:pointer; background:none;border:none;" onclick="openContents()" aria-label="Buka Daftar Isi">
        <div id="book-header-logo"></div>
        </button>


        <div id="book-title" style="background-size: 60%;">
          <button type="button" style="cursor:pointer; background:none;border:none;" onclick="openContents()" aria-label="Buka Daftar Isi">
            <div id="main-title" style="padding: 40px 10px 18px; font-size: 3.2em;" >Tractatus Ayyew</div>
            <div id="sub-title"><i>Silabumi</i></div>
            <div id="sub-earthbook">edisi earthbook</div>
          </button>
        </div>

        <div id="share-menu">
        <button type="button" style="cursor:pointer; background:none;border:none;" onclick="updateBNResetButton(),openBooknotes(), bookNotesCreator()" aria-label="Buka Catatan Buku"><img src="../icons/booknotes-topmenu.svg" alt="Ikon berbagi"></button>
        </div>
    </div>

    `;
}
}

customElements.define('header-component', Header);
