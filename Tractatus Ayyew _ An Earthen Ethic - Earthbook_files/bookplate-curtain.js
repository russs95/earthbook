class Bookplate extends HTMLElement{constructor(){super();}
connectedCallback(){this.innerHTML=`

    <div id="top-bookplate" class="overlay-bookplate">
    
        <a href="javascript:void(0)" class="closebtn" onclick="closeBookplate()">&times;</a>
        
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
    </div>
    
    `;}}
customElements.define('bookplate-curtain',Bookplate);