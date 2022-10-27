class ShareCurtain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `


    <div id="right-share-overlay" class="share-overlay">
    
    <a href="javascript:void(0)" class="closebtn" onclick="closeShare()">&times;</a>
    
    <div class="share-overlay-content">
            
            <div>
                <h1 class="accessibility-plugin-ac">Earthbooks are made for sharing.</h1> 
                <h3> Copy and share the link to this chapter...</h3></div>
                
               
                <!--<div class="copy-url" class="copy-box">--><div id="page-url"  style="border-left-color: orange;"></div>
     <button
       class="btn"
       data-clipboard-action="copy"
       data-clipboard-target="#page-url"
     >
       Copy
     </button></div>

    <h4>Or copy the main URL of the book:</h4>
    <div class="copy-url"><div id="page-url-main" class="copy-box" style="border-left-color: rgb(0, 255, 34);">https://book.earthen.io</div>

     <button
       class="btn"
       data-clipboard-action="copy"
       data-clipboard-target="#page-url-main"
       onclick="closeShare()"
     >  Copy
    </button></div>
    <div><h5 style="font-size: 1em">The content of this Earthbook is under a creative commons license.  This means you can freely share the links to this page, quote passages, download and share the PDF as long as you attribute it to this Earthbook.  In addition, you can access the EarthBooks source code and content on Github where you can fork this book to make your own (or to create a translation of this one).</h5></div>
</div>


    `;
}
}

customElements.define('share-curtain', ShareCurtain);