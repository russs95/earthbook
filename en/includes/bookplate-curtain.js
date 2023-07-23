class Bookplate extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="top-bookplate" class="overlay-bookplate">

    <div class="overlay-content-bookplate">

        <div id="bookplate-img" alt="The Tractatus Ayyew Mandala"></div>

        <div id="bookplate-content"> 
          <h1 class="bookplate-title">Tractatus Ayyew</h1>

          <h2 class="bookplate-subtitle"><i>An Earthen Ethics</i></h2>

          <h3 class="bookplate-authors">Banayan Angway & Russell Maier</h3>

          <h4 class="bookplate-motto"><i>Ad Pax Ayyew</i></h4>

          <h4 class="bookplate-year">M M X X I I</h4>

          <div id="sub-earthbook"><h5>earthBook edition</h5></div> 
          
          <!--<div id="line" style="width:50%; margin:auto"></div>-->

          <h6 style="color:grey">Composed in Kalinga, Philippines and Bali, Indonesia. First presented at the Bandung Spirit Conference 12.02.2021, Université Le Havre. Earthen.io edition 22.02.2022, Earthbook edition 22.12.22. Copyright Russell Maier & Banayan Angway.</h6>
          
          <div>
          <button type="button" class="bottom-close-button" style="cursor:pointer; bottom:-20px;z-index:100;" onclick="closeBookplate()" aria-label="Click to close this pop-up page">
            <img src="../svgs/bottom-x.svg" alt="Close curtain button">
          </button>
        </div>
                                                                 
    
    
    `;
}
}

customElements.define('bookplate-curtain', Bookplate);


/* Version 2 



        <div class="overlay-content-bookplate">

            

                <div id="mandala-day" class="tc-list">
                    <img src="../svgs/tractatus-mandala-full-black.svg">
                </div>
                
                <div>
                <h1 class="bookplate-title">Tractatus Ayyew</h1>
            
                <h2 class="bookplate-subtitle"><i>An Earthen Ethics</i></h2>
            
                <h3 class="bookplate-authors">Banayan & Russell Maier</h3>
            
                <h4 class="bookplate-motto"><i>Ad Pax Ayyew</i></h4>
            
                <p><i>Towards a green world for humanity <br>& a thriving common home for all.</i></p>

                <h5 class="bookplate-year">M M X X I I</h5>
                

                <div id="line" style="width: 30%; margin: auto;"></div>
            
                <h6 class="bookplate-publisher">Print, eBook, & EarthBook published by Earthen.io<br>First presented at the Bandung Spirit Conference in 2021</h6>
                </div>
             
        </div>           









<div id="mandala-day" class="tc-list">
<img src="../svgs/tractatus-mandala-full-black.svg">
</div>

<div>
<h1 class="bookplate-title">Tractatus Ayyew</h1>

<h2 class="bookplate-subtitle"><i>An Earthen Ethics</i></h2>

<h3 class="bookplate-authors">Banayan & Russell Maier</h3>

<h4 class="bookplate-motto"><i>Ad Pax Ayyew</i></h4>

<p><i>Towards a green world for humanity <br>& a thriving common home for all.</i></p>

<h5 class="bookplate-year">M M X X I I</h5>


<div id="line" style="width: 30%; margin: auto;"></div>

<h6 class="bookplate-publisher">Print, eBook, & EarthBook published by Earthen.io<br>First presented at the Bandung Spirit Conference in 2021</h6>



</div>*/