class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="navbar-day">
        <div id="menu-button">
            <span style="cursor:pointer" onclick="openContents()"><img src="../svgs/right-menu.svg"></span>
            <!--<span style="cursor:pointer" onclick="openContents()">&#9776;</span>-->
        </div>

        <span style="cursor:pointer" onclick="openBookplate()">
        <div id="mandala-day">
       
        </div>
        </span>
        

        <div id="bookplate-content"> 
          <h1 class="bookplate-title">Tractatus Ayyew</h1>

          <h2 class="bookplate-subtitle"><i>An Earthen Ethics</i></h2>

      


          <h3 class="bookplate-authors">Banayan & Russell Maier</h3>

          <h4 class="bookplate-motto"><i>Ad Pax Ayyew</i></h4>

          <h4 class="bookplate-year">M M X X I I</h4>

          <!--<div id="line" style="width: 30%; margin: 10px auto;"></div>-->
          <div id="sub-earthbook"><h5>earthBook edition</h5></div>  
          
          
        </div>
        <div id="bookplate-button" style="cursor:pointer" onclick="closeBookplate()"><span><img src="../svgs/up-arrow.svg" style="width:100px;"></span></div>
       
        <div id="menu-settings">
        <span style="cursor:pointer" onclick="openSettings()"><img src="../svgs/left-menu.svg"></span>
        <!-- <span style="cursor:pointer" onclick="openSettings()">&#9881;</span>-->
    </div>
       
       
       
       
       
       
       
       
       
       
  

    `;
}
}

customElements.define('header-component', Header);


/*     
       
       
       
        <div id="book-title">
            <div id="main-title">Tractatus Ayyew</div>
            <div id="sub-title"><i>An Earthen Ethics</i></div>
            <div id="sub-earthbook">earthBook edition</div>
        </div></span>
    
        <div id="menu-settings">
        <span style="cursor:pointer" onclick="openSettings()"><img src="../svgs/left-menu.svg"></span>
        <!-- <span style="cursor:pointer" onclick="openSettings()">&#9881;</span>-->
    </div>
    </div>*/