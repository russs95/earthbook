class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="earthbook-navbar">
        <div id="settings-menu" >
            <button type="button" style="cursor:pointer; background:none;border:none;" onclick="openSettings()" aria-label="Open Settings"><img src="../svgs/left-menu.svg" alt="Settings icon"></button>
        </div>

        <button type="button" style="cursor:pointer; background:none;border:none;" onclick="openContents()" aria-label="Open Contents">
        <div id="book-header-logo"></div>
        </button>
        
        
        <div id="book-title" style="background-size: 60%;">
          <button type="button" style="cursor:pointer; background:none;border:none;" onclick="openContents()" aria-label="Open Table of Contents">
            <div id="main-title" style="padding: 40px 10px 18px; font-size: 3.2em;" >Tractatus Ayyew</div>
            <div id="sub-title"><i>An Earthen Ethics</i></div>
            <div id="sub-earthbook">earthbook edition</div>
          </button>
        </div>

        <div id="share-menu">
        <button type="button" style="cursor:pointer; background:none;border:none;" onclick="updateBNResetButton(),openBooknotes(), bookNotesCreator()" aria-label="Open Booknotes Link"><img src="../icons/booknotes-topmenu.svg" alt="Share icon"></button>
        </div>
    </div>


    <div id="registration-footer">
    <div id="progress-bar"></div>
    <div id="email-registration">
        <p>Please signup to go deeper</p>
        <input type="text" placeholder="What is your email?" id="email-input">
        <button id="register-button">Register</button>
    </div>
</div>

      
    `;
}
}

customElements.define('header-component2', Header);
