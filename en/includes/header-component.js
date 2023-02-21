class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="earthbook-navbar">
        <div id="settings-menu" >
            <button type="button" style="cursor:pointer" onclick="openSettings()" aria-label="Open Settings"><img src="https://book.earthen.io/svgs/left-menu.svg" alt="Settings icon"></button>
        </div>

        <span style="cursor:pointer" onclick="openContents()" aria-label="Open Contents">
        <div id="book-header-logo"></div>
        </span>
        
        
        <div id="book-title" style="background-size: 60%;">
            <div id="main-title" onclick="openContents()" style="padding: 40px 10px 18px; font-size: 3.2em;" aria-label="Open EarthBook Contents">Tractatus Ayyew</div>
            <div id="sub-title" onclick="openContents()"><i>An Earthen Ethics</i></div>
            <div id="sub-earthbook" onclick="openEarthbook()" aria-label="Learn what is an Earthbook">earthBook edition</div>
        </div>

        <div id="share-menu">
          <span style="cursor:pointer" onclick="openShare()" aria-label="Click to open share book tool"><img src="https://book.earthen.io/svgs/right-menu.svg" alt="Share icon"></span>
        </div>
    </div>
      
    `;
}
}

customElements.define('header-component', Header);
