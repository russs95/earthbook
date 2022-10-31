


class FooterChapter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

  
<div id="footer-chapter" style="margin-bottom: 0px;">

  <div class="footer-size">
    
    <div class="footer-left">

      <div id="footer-icon-left" style="cursor:pointer;" onclick="openFooter()"></div>
      
      <!--
      <div class="footer-icon-left" style="cursor:pointer;" onclick="openBookplate()">
        <img src="../svgs/tractatus-simple-mandala-grey.svg" width="40px" title="Tractatus Ayyew bookplate">
      </div>-->
     
      <div class="next-section">
          <div class="next-sec">Next section:</div>
          <div class="sec-name"><i>Quick Start | Three Summaries</i></div>
      </div>

      
    </div>
    
    <div class="footer-right">
   
      <a href="quickstart.html"><div class="next-button">Next ➔</div></a>

      <!--<a href="preamble.html"><div class="prev-button">￩ Previous</div></a>-->

    </div>
  </div>
</div>
<!--
<div id="footer-settings">
  <a href="index.html"><div class="footer-settings-icon" style="cursor:pointer" ><img src="../icons/dash.svg"></div></a>

  <div class="footer-settings-icon" style="cursor:pointer" onclick="openBookplate()"><img src="../svgs/tractatus-simple-mandala-grey.svg" title="Tractatus Ayyew bookplate"></div>
  
  <div class="footer-settings-icon"><img src="../icons/buy.svg" style="cursor:pointer" onclick="openBuy()"></div>

  <div class="footer-settings-icon"><img src="../icons/settings.svg" style="cursor:pointer" onclick="openSettings()"></div>

  <div class="footer-settings-icon"><img src="../icons/share.svg" style="cursor:pointer" onclick="openShare()"></div>

  <div class="footer-settings-icon"><img src="../icons/content.svg" style="cursor:pointer" onclick="openShare()"></div>

  <a href="#top"><div class="footer-settings-icon"><img src="../svgs/to-the-top-arrow.svg"></div></a>
  <div class="footer-settings-icon" style="cursor:pointer" onclick="openEarthbook()">What is an Earthbook?</div>
</div>-->

    `;
}
}

customElements.define('footer-chapter', FooterChapter);

function openFooter() {
  var x = document.getElementById("footer-chapter");
  if (x.style.marginBottom === "0px") {
    x.style.marginBottom = "155px";
  
  } else {
    x.style.marginBottom = "0px";

    var y = document.getElementById("footer-icon-left");
    if (y.style.width === "40px") {
      y.style.height = "160px";
    
    } else {
      y.style.width = "60px";

  }
}
}


/*next:
 x.style.background = "url(svgs/footer-settings-button-over.svg) no-repeat center;";*/