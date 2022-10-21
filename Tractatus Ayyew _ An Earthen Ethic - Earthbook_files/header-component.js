class Header extends HTMLElement{constructor(){super();}
connectedCallback(){this.innerHTML=`

    <div id="navbar-day">
        <div id="menu-button">
            <span style="cursor:pointer" onclick="openContents()"><img src="../svgs/right-menu.svg"></span>
            <!--<span style="cursor:pointer" onclick="openContents()">&#9776;</span>-->
        </div>

        <span style="cursor:pointer" onclick="openBookplate()">
        <div id="book-title">
            <div id="main-title">Tractatus Ayyew</div>
            <div id="sub-title"><i>An Earthen Ethics</i></div>
            <div id="sub-earthbook">earthBook edition</div>
        </div></span>
    
        <div id="menu-settings">
        <span style="cursor:pointer" onclick="openSettings()"><img src="../svgs/left-menu.svg"></span>
        <!-- <span style="cursor:pointer" onclick="openSettings()">&#9881;</span>-->
    </div>
    </div>

    `;}}
customElements.define('header-component',Header);