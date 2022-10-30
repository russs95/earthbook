


class FooterChapter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

  
<div id="footer-chapter" style="margin-bottom: 0px;">

  <div class="footer-size">
    <div class="footer-left">

      <div class="footer-icon-left" style="cursor:pointer;" onclick="openSettings()" >
      
      </div>
      <!--
      <div class="footer-icon-left" style="cursor:pointer;" onclick="openBookplate()">
        <img src="../svgs/tractatus-simple-mandala-grey.svg" width="40px" title="Tractatus Ayyew bookplate">
      </div>-->
     
      <div class="next-section">
          <div class="next-sec">Next section:</div>
          <div class="sec-name"><i>Quick Start | Three Summaries</i></div>
          
         <!-- <div class="footer-settings-button"><a href="preface.html"><i style="background-image: url(../icons/settings.svg); width:20px; height:20px;display: inline-block;background-size: 20px;margin-bottom: -4px;margin-right: 5px;"></i>Settings</a></div>-->

      </div>
      </div>
    </div>
    <div class="footer-right">
   
      <a href="quickstart.html"><div class="next-button">Next ➔</div></a>

      
    
      <!--<a href="preamble.html"><div class="prev-button">￩ Previous</div></a>-->
    </div>
  </div>
</div>

<div id="footer-settings">
  <div class="footer-settings-icon"><img src="../icons/dash.svg"></div>
  <div class="footer-settings-icon"><img src="../svgs/icon-creativecommons.svg" style="filter:invert(50%)"></div>
  <div class="footer-settings-icon"><img src="../icons/pdf.svg"></div>
  <div class="footer-settings-icon"><img src="../icons/buy.svg"></div>
  <div class="footer-settings-icon"><img src="../svgs/icon-accessibility.svg" style="filter:invert(50%)"></div>
  <div class="footer-settings-icon"><img src="../svgs/icon-ecoaccounting.svg" style="filter:invert(50%)"></div>
  <div class="footer-settings-icon"><img src="../svgs/to-the-top-arrow.svg"></div>
  <!--<div class="footer-settings-icon">What is an Earthbook?</div>-->
</div>

    `;
}
}

customElements.define('footer-chapter', FooterChapter);

function openSettings() {
  var x = document.getElementById("footer-chapter");
  if (x.style.marginBottom === "0px") {
    x.style.marginBottom = "155px";
  
  } else {
    x.style.marginBottom = "0px";
   

  }
}


/*next:
 x.style.background = "url(svgs/footer-settings-button-over.svg) no-repeat center;";*/