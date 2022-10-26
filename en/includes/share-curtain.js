class ShareCurtain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="right-share-overlay" class="share-overlay">
    
    <a href="javascript:void(0)" class="closebtn" onclick="closeShare()">&times;</a>
    
    <div class="share-overlay-content">
            
            <div class="lead-page-paragraph">
                <p class="accessibility-plugin-ac">Earthbooks are made for sharing.  Copy and share the link to this chapter:</p></div>
            
           

        
        </div>                                                              
</div>

    `;
}
}

customElements.define('share-curtain', ShareCurtain);