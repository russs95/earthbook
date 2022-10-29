class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="earthbook-navbar">
        <div id="settings-menu">
            <span style="cursor:pointer" onclick="openSettings()"><img src="../svgs/left-menu.svg"></span>
        </div>

        <span style="cursor:pointer" onclick="openContents()">
        <div id="book-header-logo"></div>
        </span>
        
        
        <div id="book-title" style="background-size: 60%;" onclick="openContents()">
            <div id="main-title" style="padding: 40px 10px 18px; font-size: 3.2em;">Tractatus Ayyew</div>
            <div id="sub-title"><i>An Earthen Ethics</i></div>
            <div id="sub-earthbook">earthBook edition</div>
        </div>

        <div id="share-menu">
        <span style="cursor:pointer" onclick="openShare()"><img src="../svgs/right-menu.svg"></span>
    </div>
      
       
       
       
       
       
       
       
       
  

    `;
}
}

customElements.define('header-component', Header);

      /* <div id="bookplate-content"> 
          <h1 class="bookplate-title">Tractatus Ayyew</h1>

          <h2 class="bookplate-subtitle"><i>An Earthen Ethics</i></h2>

          <h3 class="bookplate-authors">Banayan & Russell Maier</h3>

          <h4 class="bookplate-motto"><i>Ad Pax Ayyew</i></h4>

          <h4 class="bookplate-year">M M X X I I</h4>

          <div id="sub-earthbook"><h5>earthBook edition</h5></div>  
          
          
        </div>
        <div id="bookplate-button" style="cursor:pointer" onclick="closeBookplate()"><span><img src="../svgs/up-arrow.svg" style="width:100px;"></span></div>
       -->*/