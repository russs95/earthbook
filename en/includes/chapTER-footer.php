<div id="footer-functions-box" style="width:100%; padding-top: 5px;">



<div class="footer-function" >
        <div class="footer-function-main" onclick="openCode()" style="z-index:8;">
            
            <div id="code-down-arrow" style="width: 18px; height: 18px;background: url(../icons/up-arrow.svg) no-repeat center;background-size:contain;margin: auto 15px auto 0;">
            </div>

            <div class="footer-function-item">
              <p>Source Code</p>
            </div>

            <div class="footer-function-item-icon"> 
                <i style="background-image: url(../icons/code.svg);"></i>
            </div>

        </div>

        <div id="footer-function-reveal-code" style="height:0px; opacity:0;">
            <div class="github-source2" style="font-size:0.8em; font-family:Mulish;color:grey;overflow: clip;">Earthbook's are open source. Contribute, correct or fork this Earthbook's code on Github: <a href="https://github.com/russs95/earthbook/blob/main/<?php echo ($lang); ;?>/<?php echo ($name); ;?> " target="_blank" aria-label="Contribute to the code. Go to the Earthbook Github repository for this page:"><br> ➔ github.com/russs95/ earthbook/blob/main/<?php echo ($lang); ;?>/<?php echo ($name); ;?></a>
            </div>
         </div>
      </div>

      <div class="footer-function" >
        <div class="footer-function-main" onclick="openComments()" style="z-index:9;">
            
            <div id="comments-out" style="width: 18px; height: 18px;background: url(../icons/plus.svg) no-repeat center;background-size:contain;margin: auto 15px auto 0;">
            </div>

            <div class="footer-function-item">
              <p>Comments</p>
            </div>

            <div class="footer-function-item-icon"> 
                <i style="background-image: url(../icons/comments.svg);"></i>
            </div>

        </div> 
      </div>


      
      <div class="footer-function">
        <div class="footer-function-main" style="z-index:10;" onclick="openFooter2()">
        
          <div id="footer-arrow" style="width:18px;height:18px;background:url(../icons/down-arrow.svg) no-repeat center; background-size:contain;margin: auto 10px auto 0;"></div>

            <div class="footer-function-item"><p>Earthbook Resources</p></div>
            <div class="footer-function-item-icon">
            <i style="background-image: url(../icons/settings.svg);"></i>
            </div>
          </div>
        </div>
        </div>


      

    </div>


  
<div id="footer-settings">

<div class="footer-size" style="height:70px;">

  <div><a class="footer-settings-icon" style="cursor:pointer" aria-label="Click to return to the homepage" href="index.php"><img src="../icons/home.svg" alt="home page icon"></a></div>

  <div class="footer-settings-icon" style="cursor:pointer" onclick="openBookplate()" aria-label="Click to open the bookplate"><img src="../svgs/my-book-header-logo-grey.svg" title="Tractatus Ayyew bookplate" alt="Tractatus Ayyew Mandala"></div>
  
  <div class="footer-settings-icon"><img src="../icons/buy.svg" style="cursor:pointer" onclick="openBuy()" alt="Buy icon" aria-label="Click to go to ebook purchase page"></div>

  <div class="footer-settings-icon"><img src="../icons/search.svg" alt="Settings icon" style="cursor:pointer" onclick="openSearch()" aria-label="Click to adjust book reading settings"></div>

  <div class="footer-settings-icon"><img src="../icons/share.svg" alt="share icon" style="cursor:pointer" onclick="openShare()" aria-label="Click to copy the link of the earthBook to share"></div>

  <div class="footer-settings-icon"><img src="../icons/eco.svg" alt="Eco Accounting icon" style="cursor:pointer" onclick="openEco()" aria-label="Click to view CO2 site audit"></div>

  <div class="footer-settings-icon"><img src="../icons/content.svg" alt="Table of Contents icon" style="cursor:pointer" onclick="openContents()" aria-label="Click to view EarthBook Table of Contents"></div>

 
  <div class="footer-settings-icon" style="flex-grow:4; align-self:center;"> <a href="#top"><img src="../svgs/to-the-top-arrow.svg" alt="To the top of the page" title="To the top of the page" style="cursor:pointer;" aria-label="Go to top of page"></a></div>

</div>

<div class="footer-size" style="height:30px;">

    <div class="footer-settings-icon" style="cursor:pointer; text-align:left; flex-grow:1; padding-right:8px; padding-top: 20px;padding-bottom: 0px;" onclick="openEarthbook()" aria-label="Learn what an Earthbook is">What is an Earthbook?
    </div>

    <div class="github-source">The Medium is the Message.
    </div>

</div>
</div>

<?php require_once ("includes/eco-curtain.php");?>

<?php require_once ("includes/comments.php");?>

<?php require_once ("includes/search.php");?>

  <div id="containerSepia"></div>
  <div id="containerContrast"></div>
  <div id="containerBrightness"></div>
  
