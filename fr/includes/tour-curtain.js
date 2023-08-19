class TourCurtain extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
  
    
  <div id="guided-tour" class="modal">
  <div class="tour-content">
    <span class="close">&times;</span>
  
    <div id="information-one" class="information">
    <div class="tour-image"><img src="../svgs/earthbook.svg" title="Lire librement" alt="Bienvenue dans un Earthbook"></div>  
      <div class="modal-header">Visite guidée</div>
      <div class="modal-description">Bienvenue dans notre Earthbook ! Vous n'avez jamais lu un livre comme celui-ci auparavant. Découvrez comment fonctionne un Earthbook grâce à cette petite visite guidée...</div>
      <button class="next">Suivant ➔</button>
    </div>
  
    <div id="information-two" style="display:none;" class="information">
    <div class="tour-image"><img src="../svgs/icon-accessibility.svg"  style="margin:auto" title="Convivialité pour les humains" alt="Lire librement"></div>  
      <div class="modal-header">Convivialité pour les humains</div>
      <div class="modal-description">Les Earthbooks sont conçus dès le départ pour être agréables à lire, accessibles et multilingues. Utilisez le bouton <b>±</b> dans le coin supérieur gauche pour ajuster les paramètres d'accessibilité de l'Earthbook.</div>
      <button class="back">↩ Retour</button>
      <button class="next">Suivant ➔</button>
    </div>
    
    <div id="information-three" style="display:none;" class="information">
    <div class="tour-image"><img src="../svgs/icon-ecoaccounting.svg"    title="Respectueux de la planète" alt="Lire librement"></div>  
  
      <div class="modal-header">Respectueux de la planète</div>
      <div class="modal-description">Tout au long de l'écriture et de la publication d'un Earthbook, les impacts carbone, plastique et biodiversité sont suivis en direct et annuellement. Pour en être sûr, cherchez l'icône verte dans la section des outils en bas de chaque chapitre.</div>
      <button class="back">↩ Retour</button>
      <button class="next">Suivant ➔</button>
    </div>
  
    
    <div id="information-four" style="display:none;" class="information">
    <div class="tour-image"><img src="../svgs/icon-opensource.svg" title="Lire librement" alt="Lire librement"></div>  
      <div class="modal-header">Open Source</div>
      <div class="modal-description">Le code source de l'EarthBook est ouvert à la révision, à l'amélioration et à la dérivation sur <a class="java-link" href="https://github.com/russs95/earthbook/" target="_blank">Github</a>. Cela signifie que la publication d'un Earthbook est ouverte à tous, partout. Recherchez le lien du code source dans la section des outils en bas de chaque chapitre.</div>
      <button class="back">↩ Retour</button>
      <button class="next">Suivant ➔</button>
    </div>
    
    
    <div id="information-five" style="display:none;" class="information">
    <div class="tour-image"><img src="../svgs/shareable.svg" title="Outils de lecture" alt="Lire librement"></div>  
      <div class="modal-header">Outils de lecture</div>
      <div class="modal-description">Les Earthbooks disposent d'un ensemble puissant d'outils sous le capot ! Cliquez sur le bouton de menu en haut à droite pour partager ou citer n'importe quel chapitre. Survolez ou cliquez sur une note de bas de page pour la voir ou l'agrandir. Ouvrez la section des outils du pied de page de chaque chapitre pour accéder aux panneaux de recherche, de code et de comptabilité.</div>
      <button class="back">↩ Retour</button>
      <button class="next">Suivant ➔</button>
    </div>
  
    <div id="information-six" style="display:none;" class="information" class="information">
    <div class="tour-image"><img src="../svgs/icon-revenue.svg"  title="Acheter l'eBook" alt="Acheter l'eBook"></div>  
  
      <div class="modal-header">Achetable</div>
      <div class="modal-description">Vous aimez cet Earthbook ? Vous <span class="java-link" onclick="closeTour(),openBuy()">pouvez l'acheter</span> en version eBook pour votre bibliothèque numérique et votre liseuse. Les Earthbooks sont 100% indépendants des intermédiaires d'entreprise. 97% des recettes des ventes d'eBooks vont aux auteurs.</div>
      <button class="back">↩ Retour</button>
      <button class="back" onclick="closeTour(),openEarthbook()"><i style="background-image: url(../icons/tour.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 3px;"></i> Principes de l'Earthbook</button>
      <button class="back" onclick="closeTour(),openBuy()"><i style="background-image: url(../icons/buy.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 3px;"></i> Acheter</button>
      <button class="next">✓ Terminer</button>
  
  
  
    </div>
  </div>
  </div>
  



      `;
    }
  }
  
  customElements.define('tour-curtain', TourCurtain);
  