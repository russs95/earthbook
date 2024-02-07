class subscriptionCurtain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

  
    <div id="registration-footer" style="opacity:0">


    <div class="reg-top-section">
        <button id="reg-up-button"  onclick="sendUpRegistration()" aria-label="Newsletter Registration" data-lang-id="105-subscription-registration"></button>
    </div>
    <div class="registration-footer-holder">
        <div id="progress-bar"></div>
        <button id="reg-down-button" onclick="sendDownRegistration()" aria-label="Hide Newsletter Registration" data-lang-id="106-hide-subscription-registration">
            <img src="../svgs/down-arrow.svg" alt="Hide Earthen Newsletter registration" data-lang-id="107-hide-subscription-image-alt">
        </button>
        
          <div id="email-registration">
              <div class="registration-box">
                  <div class="reg-img">
                      <img src="../svgs/subscription-side-image.svg" data-lang-id="108-subscription-image-alt-desktop" class="desktop" height="200" width="200" alt="Earthen Ecobrick Newsletter subscription">
                    <!-- <img src="../svgs/richard-and-team-night.svg" data-lang-id="109-subscription-image-alt-mobile" class="mobile" height="140" width="200" alt="Earthen Ecobrick Newsletter subscription"> -->
                  </div>
    
                  <!--REGISTRATION TEXTS-->
    
                  <div id="reg-registration-texts">
                      <div class="reg-header" data-lang-id="110-subscription-title">Subscribe to Earthen</div>
                      <div class="reg-subtitle" data-lang-id="111-subscription-subtitle">Follow our regenerative work and news by subscribing to our Earthen newsletter.</div>
                    
                      <form id="emailForm" class="reg-field" style="display:flex; flex-flow:row;">
                      <label for="email"></label>
                      <input type="email" name="email" required placeholder="Your e-mail..." class="email-input" data-lang-id="112-subscription-email-placeholder">
                      <input type="text" name="name" required placeholder="Your name..." class="name-input" data-lang-id="113-subscription-name-placeholder">
                      <div class="reg-complete-text" id="reg-status"></div>
                      <input type="submit" value="➔" class="register-button" id="reg-status-icon" onclick="handleFormSubmit(event)">
                      </form>
                      <div class="reg-sub" style="flex-flow: row;">
                          <div class="earthen-icon"></div>
                          <div id="reg-explanation" data-lang-id="114-subscription-caption">We send out a news once every month or so according to <a href="javascript:void(0)" onclick="previewPrivacy()">our strict privacy policy</a>.</div>
                      </div>
                      <div class="reg-sub" style="flex-flow: row;">
                          <div id="reg-sub-checker">
                              <input type="checkbox" id="reg-sub-checkbox" onclick="checkBoxActivated()">
                              <label for="reg-sub-checkbox" data-lang-id="115-subscription-do-not-show-again">I've already signed up or I am not interested - don't show again</label>
                          </div>
                      </div>
                  </div>
    
                  <!--PRIVACY STATEMENT-->
    
                  <div id="reg-privacy-texts">
                      <div class="reg-header" data-lang-id="116-privacy-title">Your Data is Safe</div>
                      <div class="reg-privacy-subtitle" data-lang-id="117-privacy-subtitle">As a not-for-profit Earth enterprise on principle we do partake in any 3rd party advertising, nor connect your data to social platforms that do.  Your data will not be sold or exchanged.  We proudly use Ghost.org's for our newsletter-- a not-for-profit open source platform which we host on our own servers.  Our newsletters are sent usually once a month, we commit to not exceeding more than one a week.</div>
                      <div style="display:flex; flex-flow:row;width:fit-content;margin:-10px 10% 0px auto;">
                          div class="full-privacy-policy-link">
                          <a href="https://earthen.io/privacy/" target="_blank" data-lang-id="118-full-privacy-link">Our Full Privacy Policy</a>
                          </div>
                          <button class="btn" onclick="previewPrivacy()" style="height:fit-content; padding:10px 15px 10px 15px;border-radius:10px;" type="button" aria="Go back to registration">OK</button>                      
                      </div>
                  </div>
    
    
              </div>
          </div>
    </div>
    </div>



    `;
}
}

customElements.define('subscription-curtain', subscriptionCurtain);



