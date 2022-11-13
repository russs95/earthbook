


class FooterChapter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

  
<div id="footer-settings">

  <div class="footer-size" style="height:70px;">

    <div class="footer-settings-icon" style="cursor:pointer" ><a href="index.php"><img src="../icons/home.svg"></a></div>

    <div class="footer-settings-icon" style="cursor:pointer" onclick="openBookplate()"><img src="../svgs/my-book-header-logo-grey.svg" title="Tractatus Ayyew bookplate"></div>
    
    <div class="footer-settings-icon"><img src="../icons/buy.svg" style="cursor:pointer" onclick="openBuy()"></div>

    <div class="footer-settings-icon"><img src="../icons/settings.svg" style="cursor:pointer" onclick="openSettings()"></div>

    <div class="footer-settings-icon"><img src="../icons/share.svg" style="cursor:pointer" onclick="openShare()"></div>

    <div class="footer-settings-icon"><img src="../icons/eco.svg" style="cursor:pointer" onclick="openEco()"></div>

    <div class="footer-settings-icon"><img src="../icons/content.svg" style="cursor:pointer" onclick="openContents()"></div>

   
   

    <div class="footer-settings-icon" style="flex-grow:4; align-self:center;"> <a href="#top"><img src="../svgs/to-the-top-arrow.svg" alt="To the top of the page" title="To the top of the page" style="cursor:pointer;"></div></a>

  </div>
  
  <div class="footer-size" style="height:30px;">

    <div class="footer-settings-icon" style="cursor:pointer; text-align:left; flex-grow:1; padding-right:8px; padding-top: 20px;
    padding-bottom: 0px;" onclick="openEarthbook()">What is an Earthbook?</a></div>

    <div class="github-source">Page source code:<br>
    <a href="https://github.com/russs95/earthbook/" target="_blank">github.com/russs95/earthbook/</a></div>
  </div>



</div>

</div>
    <div id="containerSepia"></div>
    <div id="containerContrast"></div>
    <div id="containerBrightness"></div>
    
</div>



    `;
}
}

customElements.define('footer-chapter', FooterChapter);


function openFooter() {
  var x = document.getElementById("footer-chapter");
  var y = document.getElementById("footer-icon-left");
  if (x.style.marginBottom === "0px") {
    x.style.marginBottom = "150px";
    y.style.background = "url(../svgs/footer-settings-button-up.svg) no-repeat left";
    y.style.backgroundSize = "contain";
 
  
  } else {
    x.style.marginBottom = "0px";
    y.style.background = "url(../svgs/footer-settings-button.svg) no-repeat left";
    y.style.backgroundSize = "contain";

}
}

/*
function arrowUp() {
var y = document.getElementById("footer-icon-left");
if (y.style.backgroundSize === "45px") {
  y.style.background = "url(../svgs/footer-settings-button-up.svg) no-repeat left";
  y.style.backgroundSize = "46px";

} else {
  y.style.background = "url(../svgs/footer-settings-button.svg) no-repeat left";
  y.style.backgroundSize = "45px";

}
}*/

/*next:
 x.style.background = "url(svgs/footer-settings-button-over.svg) no-repeat center;";
 
 url(svgs/footer-settings-button-up.svg) no-repeat left;
 
function arrowUp() {
var y = document.getElementById("footer-icon-left");
if (y.style.background === "url(svgs/footer-settings-button-over.svg) no-repeat left;") {
  y.style.

} else {
  y.style.background = "url(svgs/footer-settings-button.svg) no-repeat left;";

}
}

*/