class Earthbook extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div id="bottom-earthbook" class="overlay-earthbook">
    


    <div class="overlay-content-earthbook">
          <div>
              <h1>Qu'est-ce qu'un Earthbook ?</h1>
              <!--<h3>Les Earthbooks sont destinés aux lecteurs, aux écrivains et à la Terre. Cliquez pour en savoir plus sur les principes directeurs :</h3>-->
              <!--L'écriture et la publication d'Earthbook incarnent des principes de régénération.-->
          </div>

    
          <div class="virtue-box-box">
            <div id="virtue-box-mobile">

              <div class="virtue"><img src="../svgs/icon-opensource.svg" width="100%" height="100%" title="Le code EarthBook est entièrement open-source" alt=" Le code EarthBook est entièrement open-source" style="cursor:pointer" onclick="openOS()"><div id="OS" class="virtue-desc">Le code source EarthBook est ouvert à la révision, à l'amélioration et au forking <a href="https://github.com/russs95/earthbook" aria-label="Cliquez pour accéder à notre référentiel Github" target="_blank">sur Github</a>. Cela signifie que la publication d'un Earthbook est ouverte à tous, où qu'ils se trouvent.</div>
              </div>

              <div class="virtue"><img src="../svgs/icon-biodiversity.svg" width="100%" height="100%" title="Soutien, comptabilité et suivi de la biodiversité" alt="Soutien , Accounting & Tracking Biodiveristy" style="cursor:pointer" onclick="openBio()"><div id="bio" class="virtue-desc">Au cours de la rédaction et de la publication de ce livre, les espèces soutenues par le l'espace physique de l'entreprise était suivi et comptabilisé. <a href="https://russs.net/forest" target="_blank" aria-label="Accéder à la liste des espèces prises en charge par l'auteur">Voir la liste complète des espèces par l'éditeur.</a></ div>
              </div>

              <div class="virtue"><img src="../svgs/icon-ecoaccounting.svg" width="100%" height="100%" title="Divulgation comptable écologique" alt="Divulgation comptable écologique" style="cursor:pointer" onclick="openAcc()"><div id="acc" class="virtue-desc">Tout au long de l'entreprise d'écriture et de publication d'un Earthbook, les impacts sur le carbone, le plastique et la biodiversité sont suivis , comptabilisés et publiés annuellement. Voir les <a href="accounting.php" aria-label="Click to open the PDF Regen Report for the Earthbook">rapports de comptabilité écologique pour ce Earthbook.</a></div>
              </div>

            </div>

            <div id="virtue-box-mobile">

              <div class="virtue"><img src="../svgs/icon-for-earth.svg" width="100%" height="100%" title="Pour-Earth Enterprise" alt="Pour -Earth Enterprise" onclick="openForE()"><div id="fore" class="virtue-desc" style="display:block;">Le support est le message : les Earthbooks sont destinés aux lecteurs, aux écrivains et à la Terre. Cliquez sur les icônes pour en savoir plus sur les principes de régénération qui guident le projet.</div>
              </div>

              <div class="virtue"><img src="../svgs/icon-carbonseq.svg" width="100%" height="100%" title="Net-Subtractive Carbon Impact" alt="Net- Impact carbone soustractif" onclick="openCo2()"><div id="co2" class="virtue-desc">Un Earthbook a l'empreinte la plus légère de tous les formats de lecture. L'optimisation du chargement et la mise en cache placent les émissions numériques d'Earthbook dans le top 10 % des sites propres. <span style="cursor:pointer; text-decoration:underline;" onclick="openEco()" aria-label="Voir notre audit de page CO2 en direct">Voir l'audit CO2e en direct.</span></div>
              </div>

              <div class="virtue"><img src="../svgs/icon-creativecommons.svg" width="100%" height="100%" title="Creative Commons" alt="Licence Creative Commons" onclick ="openCc()"><div id="cc" class="virtue-desc">Le code et le contenu de ce livre sont sous licence Creative Commons BY-SA-ND 4.0. <a href="https://github.com/russs95/earthbook/" target="_blank" aria-label="Accéder au dépôt Earthbook Github"> Accéder au dépôt Github.</a></div>
              </div>

          </div>

          <div id="virtue-box-mobile" style="margin-bottom:170px;">

            <div class="virtue"><img src="../svgs/icon-readfreely.svg" width="100%" height="100%" title="Lire librement" alt="Lire librement" onclick= "openFree()"><div id="free" class="virtue-desc">Ce livre est disponible en lecture <a href="preamble.html">librement en ligne</a> et en tant que <a href= "https://files.earthen.io/s/ZjS9TgWk5Tr7b4q" target="_blank" aria-label="Cliquez pour télécharger la version PDF gratuite du Earthbook">PDF téléchargeable gratuitement</a>.</div>
            </div>

            <div class="virtue"><img src="../svgs/icon-revenue.svg" width="100%" height="100%" title="Soutenir la publication indépendante" alt="Soutenir la publication indépendante" onclick="openRev()"><div id="rev" class="virtue-desc">Earthbooks est 100 % indépendant des intermédiaires d'entreprise. 97 % du produit de <span style="cursor:pointer; text-decoration:underline;" onclick="openBuy()" aria-label="Cliquez pour accéder à la page d'achat">Ventes d'ebooks</span> aller aux auteurs.</div>
            </div>

            <div class="virtue"><img src="../svgs/icon-accessibility.svg" width="100%" height="100%"title="Fabriqué aussi convivial que possible" alt="Accessibilité maximisée" style="cursor:pointer" onclick="openMax()"><div id="max" class="virtue-desc">Earthbooks sont conçus de A à Z pour être agréable à regarder, accessible et multilingue. <span style="cursor:pointer; text-decoration:underline;" onclick="openSettings()" aria-lable="Cliquez pour ajuster les paramètres de l'Earthbook">Essayez d'ajuster les paramètres de l'Earthbook.</span></div>

            </div>
          </div>
        </div>
        
          <div id="medium-message"><!--Le médium est le message.<br>-->
          <span style="font-size:0.7em;font-style:normal;"><a href="https://github.com/russs95/earthbook/blob/main/README.md" title="Aller à le dépôt du projet Github" target="_blank">Publier votre Earthbook.</a></span>
          </div>

          <div>
            <button type="button" class="bottom-close-button" style="cursor:pointer" onclick="closeEarthbook()" aria-label="Cliquez pour fermer cette page contextuelle">
              <img src="../svgs/bottom-x.svg" alt="Bouton Fermer la page">
            </bouton>
          </div>
           
    </div>
</div>

    `;
}
}

customElements.define('earthbook-curtain', Earthbook);





function openOS() {
  var x = document.getElementById("OS");
  var y = document.getElementById("bio");
  var w = document.getElementById("acc");
  var z = document.getElementById("fore");
  var a = document.getElementById("co2");
  var b = document.getElementById("cc");
  var c = document.getElementById("free");
  var d = document.getElementById("rev");
  var e = document.getElementById("max");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
    w.style.display = "none";
    z.style.display = "none";
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";

  } else {
    x.style.display = "none";
}
}



function openBio() {
  var x = document.getElementById("OS");
  var y = document.getElementById("bio");
  var w = document.getElementById("acc");
  var z = document.getElementById("fore");
  var a = document.getElementById("co2");
  var b = document.getElementById("cc");
  var c = document.getElementById("free");
  var d = document.getElementById("rev");
  var e = document.getElementById("max");
  if (y.style.display === "none") {
    x.style.display = "none";
    y.style.display = "block";
    w.style.display = "none";
    z.style.display = "none";
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";

  } else {
    y.style.display = "none";
}
}

function openAcc() {
  var x = document.getElementById("OS");
  var y = document.getElementById("bio");
  var w = document.getElementById("acc");
  var z = document.getElementById("fore");
  var a = document.getElementById("co2");
  var b = document.getElementById("cc");
  var c = document.getElementById("free");
  var d = document.getElementById("rev");
  var e = document.getElementById("max");
  if (w.style.display === "none") {
    x.style.display = "none";
    y.style.display = "none";
    w.style.display = "block";
    z.style.display = "none";
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";

  } else {
    w.style.display = "none";
}
}

function openForE() {
  var x = document.getElementById("OS");
  var y = document.getElementById("bio");
  var w = document.getElementById("acc");
  var z = document.getElementById("fore");
  var a = document.getElementById("co2");
  var b = document.getElementById("cc");
  var c = document.getElementById("free");
  var d = document.getElementById("rev");
  var e = document.getElementById("max");
  if (z.style.display === "none") {
    x.style.display = "none";
    y.style.display = "none";
    w.style.display = "none";
    z.style.display = "block";
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";

  } else {
    z.style.display = "none";
}
}

function openCo2() {
  var x = document.getElementById("OS");
  var y = document.getElementById("bio");
  var w = document.getElementById("acc");
  var z = document.getElementById("fore");
  var a = document.getElementById("co2");
  var b = document.getElementById("cc");
  var c = document.getElementById("free");
  var d = document.getElementById("rev");
  var e = document.getElementById("max");
  if (a.style.display === "none") {
    x.style.display = "none";
    y.style.display = "none";
    w.style.display = "none";
    z.style.display = "none";
    a.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";

  } else {
    a.style.display = "none";
}
}



function openCc() {
  var x = document.getElementById("OS");
  var y = document.getElementById("bio");
  var w = document.getElementById("acc");
  var z = document.getElementById("fore");
  var a = document.getElementById("co2");
  var b = document.getElementById("cc");
  var c = document.getElementById("free");
  var d = document.getElementById("rev");
  var e = document.getElementById("max");
  if (b.style.display === "none") {
    x.style.display = "none";
    y.style.display = "none";
    w.style.display = "none";
    z.style.display = "none";
    a.style.display = "none";
    b.style.display = "block";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";

  } else {
    b.style.display = "none";
}
}



function openFree() {
  var x = document.getElementById("OS");
  var y = document.getElementById("bio");
  var w = document.getElementById("acc");
  var z = document.getElementById("fore");
  var a = document.getElementById("co2");
  var b = document.getElementById("cc");
  var c = document.getElementById("free");
  var d = document.getElementById("rev");
  var e = document.getElementById("max");
  if (c.style.display === "none") {
    x.style.display = "none";
    y.style.display = "none";
    w.style.display = "none";
    z.style.display = "none";
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "block";
    d.style.display = "none";
    e.style.display = "none";

  } else {
  c.style.display = "none";
}
}


function openRev() {
  var x = document.getElementById("OS");
  var y = document.getElementById("bio");
  var w = document.getElementById("acc");
  var z = document.getElementById("fore");
  var a = document.getElementById("co2");
  var b = document.getElementById("cc");
  var c = document.getElementById("free");
  var d = document.getElementById("rev");
  var e = document.getElementById("max");
  if (d.style.display === "none") {
    x.style.display = "none";
    y.style.display = "none";
    w.style.display = "none";
    z.style.display = "none";
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "block";
    e.style.display = "none";

  } else {
    d.style.display = "none";
}
}



function openMax() {
  var x = document.getElementById("OS");
  var y = document.getElementById("bio");
  var w = document.getElementById("acc");
  var z = document.getElementById("fore");
  var a = document.getElementById("co2");
  var b = document.getElementById("cc");
  var c = document.getElementById("free");
  var d = document.getElementById("rev");
  var e = document.getElementById("max");
  if (e.style.display === "none") {
    x.style.display = "none";
    y.style.display = "none";
    w.style.display = "none";
    z.style.display = "none";
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "block";

  } else {
    e.style.display = "none";
}
}







/*

function openOS() {
  var x = document.getElementById("OS");
  var y = document.getElementById("footer-icon-left");
  if (x.style.marginBottom === "0px") {
    x.style.marginBottom = "150px";
    y.style.background = "url(../svgs/footer-settings-button.svg) no-repeat left";
    y.style.backgroundSize = "contain";
 
  
  } else {
    x.style.marginBottom = "0px";
    y.style.background = "url(../svgs/footer-settings-button-up.svg) no-repeat left";
    y.style.backgroundSize = "contain";

}
}

<div class="virtue-display">
              
              <div class="virtue-text1"><div class="virtue-styled">Both the earthBook and manuscript source and content are available under a GNU license on Github.</div>
              </div>

              <div class="virtue-text2">
                <div class="virtue-styled">A list of the species supported by the physical space of the book's enterprise is tracked and disclosed.</div>
              </div>
            
            </div>*/
