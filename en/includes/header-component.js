class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="earthbook-navbar">
        <div id="settings-menu" style="cursor:pointer" onclick="openSettings()">
            <span ><img src="../svgs/left-menu.svg"></span>
        </div>

        <span style="cursor:pointer" onclick="openContents()">
        <div id="book-header-logo"></div>
        </span>
        
        
        <div id="book-title" style="background-size: 60%;">
            <div id="main-title" onclick="openContents()" style="padding: 40px 10px 18px; font-size: 3.2em;">Tractatus Ayyew</div>
            <div id="sub-title" onclick="openContents()"><i>An Earthen Ethics</i></div>
            <div id="sub-earthbook" onclick="openEarthbook()">earthBook edition</div>
        </div>

        <div id="share-menu">
        <span style="cursor:pointer" onclick="openShare()"><img src="../svgs/right-menu.svg"></span>
    </div>
      
    `;
}
}

customElements.define('header-component', Header);
