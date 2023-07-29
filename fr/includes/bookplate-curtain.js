class Bookplate extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="top-bookplate" class="overlay-bookplate">

    <div class="overlay-content-ex-libris">

        <div id="bookplate-img" alt="Le Tractatus Ayyew Mandala"></div>

        <div id="bookplate-content" style="margin-bottom:35px;">
          <h1 class="bookplate-title">Tractatus Ayyew</h1>

          <h2 class="bookplate-subtitle"><i>Une éthique terrestre</i></h2>

          <h3 class="bookplate-authors">Banayan Angway & Russell Maier</h3>

          <h4 class="bookplate-motto"><i>Ad Pax Ayyew</i></h4>

          <h4 class="bookplate-year">M M X X I I</h4>

          <div id="sub-earthbook"><h5>édition EarthBook</h5></div>
         
          <!--<div id="line" style="width:50%; margin:auto"></div>-->

          <h6 style="color:grey">Composé à Kalinga, Philippines et Bali, Indonésie. Présenté pour la première fois à la Bandung Spirit Conference 12.02.2021, Université Le Havre. Earthen.io édition 22.02.2022, Earthbook édition 22.12.22. Droits d'auteur Russell Maier & Banayan Angway.</h6>
         
          <div>
          <button type="button" class="bottom-close-button" style="cursor:pointer; bottom:-20px;z-index:100;" onclick="closeBookplate()" aria-label="Cliquez pour fermer cette page pop-up">
            <img src="../svgs/bottom-x.svg" alt="Fermer le bouton du rideau">
          </bouton>
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