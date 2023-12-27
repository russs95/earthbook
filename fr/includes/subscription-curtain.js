class subscriptionCurtain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

  
    <div id="registration-footer">
    <div class="reg-top-section" onclick="sendUpRegistration()">
      <div class="reg-buffer" style="width:100%;height:50px"></div>
      <button id="reg-up-button" ></button>
    </div>
    <div class="registration-footer-holder">
      <div id="progress-bar"></div>
      <button id="reg-down-button" onclick="sendDownRegistration()" >
        <img src="../svgs/down-arrow.svg" alt="Pas d'inscription">
      </button>
      
      <div id="email-registration">
        <div class="registration-box">
          <div class="reg-img">
            <img src="../svgs/earthcal-banner.svg" height="150" width="150" alt="Calendrier TerreCycles de Earthen.io">
          </div>
          <div class="reg-texts">
            <div class="reg-header">Allez plus loin.</div>
            <div class="reg-subtitle">Inscrivez-vous à Earthen.io</div>
            <form id="emailForm" class="reg-field" style="display:flex; flex-flow:row;">
              <label for="email"></label>
              <input type="email" name="email" required placeholder="Votre e-mail..." class="email-input">
              <input type="text" name="name" required placeholder="Votre nom..." class="name-input">
              <div class="reg-complete-text" id="reg-status"></div>
              <input type="submit" value="➔" class="register-button" id="reg-status-icon" onclick="handleFormSubmit(event)">
            </form>
            <div class="reg-sub">Accédez à notre newsletter et à EarthCal, notre calendrier révolutionnaire basé sur les principes Igorot et Terre.</div>
          </div>
        </div>
      </div>
    </div>
    </div>
    


    `;
}
}

customElements.define('subscription-curtain', subscriptionCurtain);


