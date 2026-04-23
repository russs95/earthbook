class subscriptionCurtain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `


    <div id="registration-footer" style="opacity:0">


    <div class="reg-top-section">
        <button id="reg-up-button"  onclick="sendUpRegistration()" aria-label="Pendaftaran Newsletter" data-lang-id="105-subscription-registration"></button>
    </div>
    <div class="registration-footer-holder">
        <div id="progress-track">
            <div id="progress-bar"></div>
        </div>
        <button id="reg-down-button" onclick="sendDownRegistration()" aria-label="Sembunyikan Pendaftaran Newsletter" data-lang-id="106-hide-subscription-registration">
            <img src="../assets/svgs/down-arrow.svg" alt="Sembunyikan pendaftaran Newsletter Earthen" data-lang-id="107-hide-subscription-image-alt">
        </button>

          <div id="email-registration">
              <div class="registration-box">
                  <div class="reg-img">
                      <img src="../assets/svgs/subscription-side-image.svg" data-lang-id="108-subscription-image-alt-desktop" class="desktop" height="200" width="200" alt="Langganan Newsletter Earthen Ecobrick">
                  </div>

                  <!--TEKS PENDAFTARAN-->

                  <div id="reg-registration-texts">
                      <div class="reg-header" data-lang-id="110-subscription-title">Berlangganan Earthen</div>
                      <div class="reg-subtitle" data-lang-id="111-subscription-subtitle">Ikuti pekerjaan dan berita regeneratif kami dengan berlangganan newsletter Earthen kami.</div>

                      <form id="emailForm" class="reg-field" style="display:flex; flex-flow:row;">
                      <label for="email"></label>
                      <input type="email" name="email" required placeholder="Email Anda..." class="email-input" data-lang-id="112-subscription-email-placeholder">
                      <input type="text" name="name" required placeholder="Nama Anda..." class="name-input" data-lang-id="113-subscription-name-placeholder">
                      <div class="reg-complete-text" id="reg-status"></div>
                      <input type="submit" value="➔" class="register-button" id="reg-status-icon" onclick="handleSubscriptionSubmit(event)">
                      </form>
                      <div class="reg-sub" style="flex-flow: row;">
                          <div class="earthen-icon"></div>
                          <div id="reg-explanation" data-lang-id="114-subscription-caption">Kami mengirim berita sekali setiap bulan atau lebih sesuai dengan <a href="javascript:void(0)" onclick="previewPrivacy()">kebijakan privasi ketat kami</a>.</div>
                      </div>
                      <div class="reg-sub" style="flex-flow: row;">
                          <div id="reg-sub-checker">
                              <input type="checkbox" id="reg-sub-checkbox" onclick="checkBoxActivated()">
                              <label for="reg-sub-checkbox" data-lang-id="115-subscription-do-not-show-again">Saya sudah mendaftar atau tidak tertarik - jangan tampilkan lagi</label>
                          </div>
                      </div>
                  </div>

                  <!--PERNYATAAN PRIVASI-->

                  <div id="reg-privacy-texts">
                      <div class="reg-header" data-lang-id="116-privacy-title">Data Anda Aman</div>
                      <div class="reg-privacy-subtitle" data-lang-id="117-privacy-subtitle">Sebagai perusahaan Bumi nirlaba, kami TIDAK mengikuti iklan pihak ketiga apa pun, dan tidak menghubungkan data Anda ke platform sosial yang melakukannya. Data Anda tidak akan dijual atau ditukar. Kami dengan bangga menggunakan Ghost.org untuk newsletter kami — platform sumber terbuka nirlaba yang kami hosting di server kami sendiri. Newsletter kami biasanya dikirimkan sekali sebulan, kami berkomitmen untuk tidak melebihi lebih dari satu per minggu.</div>
                      <div style="display:flex; flex-flow:row;width:fit-content;margin:-10px 10% 0px auto;">
                          <div class="full-privacy-policy-link">
                          <a href="https://earthen.io/privacy/" target="_blank" data-lang-id="118-full-privacy-link">Kebijakan Privasi Lengkap Kami</a>
                          </div>
                          <button class="btn" onclick="previewPrivacy()" style="height:fit-content; padding:10px 15px 10px 15px;border-radius:10px;" type="button" aria-label="Kembali ke pendaftaran">OK</button>
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
