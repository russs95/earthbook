class subscriptionCurtain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="registration-footer" style="opacity:0">

<div class="reg-top-section">
    <button id="reg-up-button"  onclick="sendUpRegistration()" aria-label="Inscription à la Newsletter" data-lang-id="105-subscription-registration"></button>
</div>
<div class="registration-footer-holder">
    <div id="progress-bar"></div>
    <button id="reg-down-button" onclick="sendDownRegistration()" aria-label="Masquer l'inscription à la Newsletter" data-lang-id="106-hide-subscription-registration">
        <img src="../svgs/down-arrow.svg" alt="Masquer l'inscription à la Newsletter Earthen" data-lang-id="107-hide-subscription-image-alt">
    </button>
    
      <div id="email-registration">
          <div class="registration-box">
              <div class="reg-img">
                  <img src="../svgs/subscription-side-image.svg" data-lang-id="108-subscription-image-alt-desktop" class="desktop" height="200" width="200" alt="Inscription à la Newsletter Ecobrick Earthen">
                <!-- <img src="../svgs/richard-and-team-night.svg" data-lang-id="109-subscription-image-alt-mobile" class="mobile" height="140" width="200" alt="Inscription à la Newsletter Ecobrick Earthen"> -->
              </div>

              <!--REGISTRATION TEXTS-->

              <div id="reg-registration-texts">
                  <div class="reg-header" data-lang-id="110-subscription-title">Abonnez-vous à Earthen</div>
                  <div class="reg-subtitle" data-lang-id="111-subscription-subtitle">Suivez notre travail régénératif et nos actualités en vous abonnant à notre newsletter Earthen.</div>
                
                  <form id="emailForm" class="reg-field" style="display:flex; flex-flow:row;">
                  <label for="email"></label>
                  <input type="email" name="email" required placeholder="Votre e-mail..." class="email-input" data-lang-id="112-subscription-email-placeholder">
                  <input type="text" name="name" required placeholder="Votre nom..." class="name-input" data-lang-id="113-subscription-name-placeholder">
                  <div class="reg-complete-text" id="reg-status"></div>
                  <input type="submit" value="➔" class="register-button" id="reg-status-icon" onclick="handleFormSubmit(event)">
                  </form>
                  <div class="reg-sub" style="flex-flow: row;">
                      <div class="earthen-icon"></div>
                      <div id="reg-explanation" data-lang-id="114-subscription-caption">Nous envoyons une nouvelle une fois par mois ou selon <a href="javascript:void(0)" onclick="previewPrivacy()">notre stricte politique de confidentialité</a>.</div>
                  </div>
                  <div class="reg-sub" style="flex-flow: row;">
                      <div id="reg-sub-checker">
                          <input type="checkbox" id="reg-sub-checkbox" onclick="checkBoxActivated()">
                          <label for="reg-sub-checkbox" data-lang-id="115-subscription-do-not-show-again">Je me suis déjà inscrit ou je ne suis pas intéressé - ne plus afficher</label>
                      </div>
                  </div>
              </div>

              <!--PRIVACY STATEMENT-->

              <div id="reg-privacy-texts">
                  <div class="reg-header" data-lang-id="116-privacy-title">Vos données sont en sécurité</div>
                  <div class="reg-privacy-subtitle" data-lang-id="117-privacy-subtitle">En tant qu'entreprise terrestre à but non lucratif par principe, nous ne participons à aucune publicité de tiers, ni ne connectons vos données à des plateformes sociales qui le font. Vos données ne seront ni vendues ni échangées. Nous utilisons fièrement Ghost.org pour notre newsletter - une plateforme open source à but non lucratif que nous hébergeons sur nos propres serveurs. Nos newsletters sont envoyées généralement une fois par mois, nous nous engageons à ne pas dépasser plus d'une par semaine.</div>
                  <div style="display:flex; flex-flow:row;width:fit-content;margin:-10px 10% 0px auto;">
                      <div class="full-privacy-policy-link">
                          <a href="https://earthen.io/privacy/" target="_blank" data-lang-id="118-full-privacy-link">Notre politique de confidentialité complète</a>
                      </div>
                      <button class="btn" onclick="previewPrivacy()" style="height:fit-content; padding:10px 15px 10px 15px;border-radius:10px;" type="button" aria-label="Retour à l'inscription">OK</button>                      
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


