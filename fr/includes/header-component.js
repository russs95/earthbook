class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="earthbook-navbar" style="background-color: var(--header-footer);">
    <div id="settings-menu">
        <button type="button" style="cursor:pointer; background:none;border:none;" onclick="openSettings()" aria-label="Ouvrir les paramètres"><img src="../svgs/left-menu.svg" alt="Icône des paramètres"></button>
    </div>

    <button type="button" style="cursor:pointer; background:none;border:none;" onclick="openContents()" aria-label="Ouvrir le sommaire">
        <div id="book-header-logo"></div>
    </button>

    <div id="book-title" style="background-size: 60%;">
        <button type="button" style="cursor:pointer; background:none;border:none;" onclick="openContents()" aria-label="Ouvrir la table des matières">
            <div id="main-title" style="padding: 40px 10px 18px; font-size: 3.2em;">Tractatus Ayyew</div>
            <div id="sub-title"><i>D'une éthique terrestre</i></div>
            <div id="sub-earthbook">édition earthbook</div>
        </button>
    </div>

    <div id="share-menu">
        <button type="button" style="cursor:pointer; background:none;border:none;" onclick="updateBNResetButton(),openBooknotes(), bookNotesCreator()" aria-label="Open Booknotes Link"><img src="../icons/booknotes-topmenu.svg" alt="Share icon"></button>
        </div>
</div>

      
    `;
}
}

customElements.define('header-component', Header);
