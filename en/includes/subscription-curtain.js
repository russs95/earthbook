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
    <img src="../svgs/down-arrow.svg" alt="No Register">
  </button>
  
  <div id="email-registration">
    <div class="registration-box">
      <div class="reg-img">
        <img src="../svgs/earthcal-banner.svg" height="150" width="150" alt="EarthCycles Calendar from Earthen.io">
      </div>
      <div class="reg-texts">
        <div class="reg-header">Go deeper.</div>
        <div class="reg-subtitle">Sign up to Earthen.io</div>
        <form id="emailForm" class="reg-field" style="display:flex; flex-flow:row;">
          <label for="email"></label>
          <input type="email" name="email" required placeholder="Your e-mail..." class="email-input">
          <input type="text" name="name" required placeholder="Your name..." class="name-input">
          <div class="reg-complete-text" id="reg-status"></div>
          <input type="submit" value="➔" class="register-button" id="reg-status-icon" onclick="handleFormSubmit(event)">
        </form>
        <div class="reg-sub">Get access to our newsletter and to EarthCal, our revolutionary calendar based on Igorot and Earthen principles.</div>
        <div class="reg-sub" id="reg-sub-checker">
        <input type="checkbox" id="reg-sub-checkbox" onclick="checkBoxActivated()">
        <label for="reg-sub-checkbox">I've already signed up or I am not interested - don't show again</label>
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


