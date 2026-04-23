class ShareCurtain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="right-share-overlay" class="share-overlay">

    <div id="right-close-button">
        <span style="cursor:pointer" onclick="closeShare()"><img src="../svgs/right-x.svg" alt="Tutup halaman"></span>
    </div>

      <div class="share-overlay-content">

            <div>
                <h1>Bagikan &amp; Kutip</h1>
                <h3>Earthbook memungkinkan Anda dengan mudah berbagi dan mengutip buku maupun bab-bab individualnya.</h3>
            </div>

            <div class="copy-section">

              <div id="page-url" class="copy-box" style="border-left-color: green;" >
              </div>

              <button class="btn" data-clipboard-action="copy" data-clipboard-target="#page-url" onclick="confirmCopy()" aria-label="Klik untuk menyalin URL bab ini ke clipboard Anda">
                <div class="copy-check">
                  <div id="check" style="color:green">
                    <span>✓</span>
                  </div>
                </div>
                <span style="align-self:center";>Salin</span>
              </button>

            </div>

            <div id="copy-type">
            <h4>Atau salin hanya <span href="javascript:void(0)" onclick="getMainurl()" style="text-decoration:underline;cursor:pointer;">URL untuk bab ini</span>.</h4>
          </div>

      <div><img src="../assets/icons/cc-by-sa.svg" alt="Ikon Creative Commons CC-BY-SA" style="height: 25px" title="Konten Earthbook berada di bawah lisensi Creative Commons ND-SA-AT 4.0 yang berarti Anda bebas berbagi tautan ke halaman ini, mengutip bagian teks, mengunduh dan berbagi PDF — pastikan untuk memberikan atribusi, berbagi-serupa, dan mencatat kutipan Anda."></div>

  </div>
</div>
    `;
}
}

customElements.define('share-curtain', ShareCurtain);

var clipboard = new ClipboardJS('.btn');

clipboard.on('success', function (e) {
  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);
});

clipboard.on('error', function (e) {
  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);
});



    // Inject the variables into the inner HTML
    document.getElementById("page-url").innerHTML =
        "Banayan Angway, Russell Maier, 'Tractatus Ayyew: Etika Earthen' (Earthen.io, Filipina, Indonesia, 2022), Bab. '" + chapNo + "', '" + chapName + "' " + window.location.href;



function confirmCopy() {
  var x = document.getElementById("check");
  if (x.style.display === "none") {
    x.style.display = "inline";
    x.style.color = "green";
  } else {
    x.style.display = "inline";
  }
}




function getMainurl() {
  document.getElementById("page-url").innerHTML = window.location.href;
  document.getElementById("copy-type").innerHTML = '<h4>Atau salin <span href="javascript:void(0)" onclick="getCitation()" style="text-decoration:underline;cursor:pointer;">kutipan lengkap untuk bab ini</span>.</h4>';
}

function getCitation() {
  document.getElementById("page-url").innerHTML =
  "Banayan Angway, Russell Maier, 'Tractatus Ayyew: Etika Earthen' (Earthen.io, Filipina, Indonesia, 2022), Bab. '" + chapNo + "', '" + chapName + "' " + window.location.href;
  document.getElementById("copy-type").innerHTML = '<h4>Atau salin hanya <span href="javascript:void(0)" onclick="getMainurl()" style="text-decoration:underline;cursor:pointer;">URL untuk bab ini</span>.</h4>';
}
