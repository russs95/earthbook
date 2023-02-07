<div id="footer-functions-box" style="width:100%; padding-top: 5px;">

      <div class="footer-function" onclick="openSearch()" style="border-top-color: grey; border-top-style: solid;">
        <div class="footer-function-main"  >
            <div class="footer-function-item"><p>+ Search EarthBook</p></div>
            <div class="footer-function-item-icon">
                <i style="background-image: url(../icons/search.svg);"></i>
            </div>
        </div>    
    </div>

   <!--   <div class="footer-function" onclick="openComments()">
        <div class="footer-function-main">
            <div class="footer-function-item"><p>+ Reader Comments</p></div>
            <div class="footer-function-item-icon">
                <i style="background-image: url(../icons/comments.svg);"></i>
            </div>
        </div>
        <div class="footer-function-reveal"></div>
      </div>-->

      <div class="footer-function" >
        <div class="footer-function-main" onclick="openCode()">
            
            <div id="code-down-arrow" style="width: 18px; height: 18px;background: url(../icons/down-arrow.svg) no-repeat center;background-size: auto;background-size:contain;margin: auto 0 auto 0;">
            </div>

            <div class="footer-function-item">
              <p>  Source Code</p>
            </div>

            <div class="footer-function-item-icon"> 
                <i style="background-image: url(../icons/code.svg);"></i>
            </div>

        </div>

        <div id="footer-function-reveal-code" style="height:0px; opacity:;">
            <div class="github-source2" style="font-size:1em; font-family:Mulish;color:grey;z-index:9;">The medium is the message. Earthbook's are open source. Contribute, correct or fork this Earthbook's code on Github: <a href="https://github.com/russs95/earthbook/blob/main/<?php echo ($lang); ;?>/<?php echo ($name); ;?> " target="_blank" aria-label="Contribute to the code. Go to the Earthbook Github repository for this page:"><br>https://github.com/russs95/earthbook/blob/main/<?php echo ($lang); ;?>/<?php echo ($name); ;?> ➔</a>
            </div>
         </div>
                
      </div>
      
      <div class="footer-function">
        <div class="footer-function-main" style="z-index:10; onclick="openFooter()">
        
          <div id="footer-down-arrow" style="width:18px;height:18px;background:url(../icons/down-arrow.svg) no-repeat center;background-size: auto;background-size:contain;margin: auto 0 auto 0;">
          </div>
          
            <div class="footer-function-item"><p>  Earthbook Resources</p></div>
            <div class="footer-function-item-icon">
            <i style="background-image: url(../icons/settings.svg);"></i>
            </div>
          </div>
        </div>
        </div>


      

    </div>

  </div>
  
<div id="footer-settings">

<div class="footer-size" style="height:70px;">

  <div class="footer-settings-icon" style="cursor:pointer" aria-label="Click to return to the homepage" ><a href="index.php"><img src="../icons/home.svg" alt="home page icon"></a></div>

  <div class="footer-settings-icon" style="cursor:pointer" onclick="openBookplate()" aria-label="Click to open the bookplate"><img src="../svgs/my-book-header-logo-grey.svg" title="Tractatus Ayyew bookplate" alt="Tractatus Ayyew Mandala"></div>
  
  <div class="footer-settings-icon"><img src="../icons/buy.svg" style="cursor:pointer" onclick="openBuy()" alt="Buy icon" aria-label="Click to go to ebook purchase page"></div>

  <div class="footer-settings-icon"><img src="../icons/settings.svg" alt="Settings icon" style="cursor:pointer" onclick="openSettings()" aria-label="Click to adjust book reading settings"></div>

  <div class="footer-settings-icon"><img src="../icons/share.svg" alt="share icon" style="cursor:pointer" onclick="openShare()" aria-label="Click to copy the link of the earthBook to share"></div>

  <div class="footer-settings-icon"><img src="../icons/eco.svg" alt="Eco Accounting icon" style="cursor:pointer" onclick="openEco()" aria-label="Click to view CO2 site audit"></div>

  <div class="footer-settings-icon"><img src="../icons/content.svg" alt="Table of Contents icon" style="cursor:pointer" onclick="openContents()" aria-label="Click to view EarthBook Table of Contents"></div>

 
  <div class="footer-settings-icon" style="flex-grow:4; align-self:center;"> <a href="#top"><img src="../svgs/to-the-top-arrow.svg" alt="To the top of the page" title="To the top of the page" style="cursor:pointer;" aria-label="Go to the top of the page"></div></a>

</div>

<div class="footer-size" style="height:30px;">

    <div class="footer-settings-icon" style="cursor:pointer; text-align:left; flex-grow:1; padding-right:8px; padding-top: 20px;padding-bottom: 0px;" onclick="openEarthbook()" aria-label="Learn what an Earthbook is">What is an Earthbook?</a>
    </div>

    <div class="github-source">Page source code on Github:<br><a href="https://github.com/russs95/earthbook/blob/main/<?php echo ($lang); ;?>/<?php echo ($name); ;?> " target="_blank" aria-label="Go to the Earthbook Github repository">../earthbook/blob/main/<?php echo ($lang); ;?>/<?php echo ($name); ;?> ➔</a>
    </div>

</div>



</div>

</div>
  <div id="containerSepia"></div>
  <div id="containerContrast"></div>
  <div id="containerBrightness"></div>
  
</div>
