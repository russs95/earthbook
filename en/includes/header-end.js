class HeaderEnd extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            
        <div id="menu-settings">
        <span style="cursor:pointer" onclick="openSettings()"><img src="../svgs/left-menu.svg"></span>
    </div>

    `;
}
}

customElements.define('header-end', HeaderEnd);


