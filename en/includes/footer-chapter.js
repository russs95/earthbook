


class FooterChapter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

  


<div id="footer-settings">

  <div class="footer-size" style="height:100px;">

    <div class="footer-settings-icon" style="cursor:pointer" ><a href="index.html"><img src="../icons/dash.svg"></a></div>

    <div class="footer-settings-icon" style="cursor:pointer" onclick="openBookplate()"><img src="../svgs/my-book-header-logo-grey.svg" title="Tractatus Ayyew bookplate"></div>
    
    <div class="footer-settings-icon"><img src="../icons/buy.svg" style="cursor:pointer" onclick="openBuy()"></div>

    <div class="footer-settings-icon"><img src="../icons/settings.svg" style="cursor:pointer" onclick="openSettings()"></div>

    <div class="footer-settings-icon"><img src="../icons/share.svg" style="cursor:pointer" onclick="openShare()"></div>

    <div class="footer-settings-icon"><img src="../icons/content.svg" style="cursor:pointer" onclick="openShare()"></div>

   
    <div class="footer-settings-icon" style="cursor:pointer; text-align:center; flex-grow:5; padding-right:8px; align-self:center;" onclick="openEarthbook()">What is an Earthbook?</a></div>

    <div class="footer-settings-icon"> <a href="#top"><img src="../svgs/to-the-top-arrow.svg" alt="To the top of the page" title="To the top of the page"></div></a>

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
  if (x.style.marginBottom === "0px") {
    x.style.marginBottom = "100px";
  
  } else {
    x.style.marginBottom = "0px";
}
}

function arrowUp() {
var y = document.getElementById("footer-icon-left");
if (y.style.background === "url(svgs/footer-settings-button-over.svg) no-repeat left;") {
  y.style.background = "url(svgs/footer-settings-button-up.svg) no-repeat left;";

} else {
  y.style.background = "url(svgs/footer-settings-button.svg) no-repeat left;";

}
}

/*next:
 x.style.background = "url(svgs/footer-settings-button-over.svg) no-repeat center;";*/