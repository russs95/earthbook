


class FooterChapter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

  
<div id="footer-chapter">

<div class="footer-size">
  <div class="footer-left">

    <a href="#top"><div class="footer-icon-left">
      <img src="../svgs/to-the-top-arrow.svg" width="35px" title="Back to the top">
     </div></a>
     
    <div class="footer-icon-left" style="cursor:pointer;" onclick="openBookplate()">
      <img src="../svgs/tractatus-simple-mandala-grey.svg" width="40px" title="Tractatus Ayyew bookplate">
     </div>
     
      <div class="next-section">
          <div class="next-sec">Next section:</div>
          <div class="sec-name"><i>Quick Start | Three Summaries</i></div>
        </div>
  </div>
  <div class="footer-right">
   
    <a href="quickstart.html"><div class="next-button">Next ➔</div></a>
    <!--<a href="preface.html"><div class="prev-button">￩ Previous</div></a>-->
  </div>
</div>
</div>


    `;
}
}

customElements.define('footer-chapter', FooterChapter);

