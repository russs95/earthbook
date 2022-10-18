class ContentCurtain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="left-table-of-contents" class="overlay-tc">
<a href="javascript:void(0)" class="closebtn" onclick="closeContents()">&times;</a>
    <div class="overlay-content-tc">
            <div class="tc-list">

                <div class="contents-title">Table of Contents</div>
                <div id="line" style="width: 30%;margin: auto;margin-bottom: 10px;margin-top:15px;"></div>
                <a href="#">Preamble</a>
                <a href="#">Preface</a>
                <a href="#">Quick Start </a>
                <a href="#" style="font-variant-caps: small-caps;letter-spacing: 5px;font-weight: bold;">Book One</a>
                <a href="#">1. Imagine</a>
                <a href="#">2. Plastic 1.0</a>
                <a href="#">3. Plastic Stellar Story</a>
                <a href="#">4. Patterns of Process</a>
                <a href="#">5. Kindred Relations</a>
                <a href="#">6. Nature's Fallacy</a>
                <a href="#">7. The Ways of the Earth</a><br><br>
                <img src="../svgs/earthen-logo-dark-grey.svg" width="100px">
                
            
            
        <!--<input type="checkbox" id="darkmode-toggle" onclick="toggleDark()"/>
        <label for="darkmode-toggle" style="text-align: center;margin: auto;"></label>
                                                     -->                
            </div>
        </div>
    </div>
</div>

    `;
}
}

customElements.define('content-curtain', ContentCurtain);