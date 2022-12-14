<!--EARTHBOOK CHAPTER PAGE TEMPLATE

PHP Page Version 1.0.2
Design by Russell Maier
License: GNU General Public License v2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html
All files, unless otherwise stated, are released under the GNU General Public
License version 2.0 (https://www.gnu.org/licenses/gpl-2.0.html)
See full project repository at: https://github.com/russs95/earthbook
*/
-->


<!-- PHP starts by laying out canonical URLs for the page and language -->

<!DOCTYPE html>

<meta charset="UTF-8"> 

<!-- this grabs the language identifier for the page so that it can used in the meta and canonical url variables.  It also grabs the page name.-->
<?php require_once ("lang.php");

echo <<<_END
<html lang="$lang" manifest="../offline.appcache">
_END;

$parts = explode ("/", $_SERVER['SCRIPT_NAME']);
$name = $parts [count($parts)-1];
if (strcmp($name, "welcome.php") == 0)
$name = "";?>

<head>


<?php require_once ("../header.php");?>

<!--END OF GENERIC CONTENT-->


<!--META TAGS
Must be updated for each page-->

<title>Authors | Tratatus Ayyew - Earthbook</title>
<meta name="keywords" content="authors, russell, maier, banayan, irene, angway "> 

<meta name="description" content="About the authors of the Tractatus Ayyew">

	
<!-- Facebook Open Graph Tags for social sharing-->
<meta property="og:title"         content="Authors | Tratatus Ayyew - Earthbook.">
<meta property="og:description"   content="About the authors of the Tractatus Ayyew"/>

<style>
  


  #ct-chapter-title {
      /*padding-top: 45px;
      */font-size: 10vmin;
      letter-spacing: 2px;
      
    }

</style>

</head>

<!--MAIN HTML Begins-->

<BODY class="accessibility-plugin-ac" style="max-width:100%; overflow-x:hidden;">
<div id="underlayer">

  <a id="top"></a>

  <!--HEADER NAVBAR-->
  <header-component></header-component>

  <div id="ct-chapter-top">
      <div id="ct-tc-menu" onclick="openContents()"></div>
      <div class="ct-holder" style="cursor:pointer;" onclick="openContents()">
        <div id="ct-chapter-title">The Authors</div>   
        <div id="ct-book-title">Declaration of Interests</div>
       <div id="ct-chap-location">Tractatus Ayyew</div>
        <div id="ct-word-count"><i>Appendix</i></div>
      </div>
  </div>

  <?php require_once ("includes/eco-curtain.php");?>


<!-- Page Title Section-->

  <div id="ct-chapt-graphic" class="background-000">

  </div>

  <div id="up-arrow"></div>


  <div id="ct-main">




<!-- MAIN TEXT CONTENT of the Page
  For footnotes, use these numbers:  ?? ?? ?? ??? ??? ??? ??? ??? ??? ??????  ??? ??? ??????? ????? ?????? ??????
-->

        <h2>Banayan Angway</h2>

        <div class="page-paragraph">

        <p>Banayan was the superintendent of Kalinga Mt. Province DEPED from 2015-2021.  She oversaw the development of the Indigenous Culture component of the Kalinga and Mt. Province curriculum's where she integrated and developed the Ayyew concept into textbooks and lessons.    As the indigenous peoples education coordinator for Mountain Province from 2011-2015 Banayan facilitated planning, implementation and evaluation of related activities that made her program known nationwide.</p> 

        </div>
        <br><br>

        <h2>Russell Maier</h2>

        <div class="page-paragraph">
        <p>Russell is an inventor and regenerative philosopher, currently based in Gianyar, Indonesia.  Russell is one of the principals of the Global Ecobrick Alliance and writes regularly on Earthen.io.  He travels around South East Asia observing the impact of human systems on biological diversity, in order to maximize human ecological contribution.</p>
      
      </div>
      <br><br>

      <div id="line"></div>
     <br><br><br>

     <h2>Declation of Interests & Funding</h2>

     <div class="page-paragraph">

     <p>Banayan and Russell are co-founders of the <a href="https://ecobricks.org/about" target="_blank">Global Ecobrick Alliance</a>.  Banyan is a paid employee of the Cordillera Adminstrative Region of the Philippines Department of Education (Kalinga Province).  Russell receives commissions on GEA trainer and is an active principal in the organization.</p>
        <p>Neither Russell or Banayan received any grants, sponsorships from any organizations, companies, governments or corporations in the writing of the Tractatus Ayyew or at any time for any other work.  A private donation by Trisha Joe of 2500$ USD was received in 2020 to purchase the <a href="/writing.php">Librem laptop</a> and  upon which this work was written.  A second donation of 3000$ by the same supporter was received to publish the <i>Tractatus Ayyew Earthbook edition</i> in 2022.</p>
        

      </div>
  
    </div><!--closes page text content-->

          
  </div><!--Closes main content block-->

  <!--Footer Next Chapter Section: Requires customization-->
  <div id="footer-chapter" style="margin-bottom: 0px;">

    <div class="footer-size">
    
      <div class="footer-left">

        <div id="footer-icon-left" style="cursor:pointer;" onclick="openFooter()"></div>
    
     
        <div class="next-section">
            <div class="next-sec">Next chapter:</div>
            <div class="sec-name"><i>Bibliography</i></div>
        </div>

      </div>
    

      <div class="footer-right">
    
        <a href="bibliography.php"><div class="next-button">Next ???</div></a>

      </div>
    </div>
  </div>

  

<?php require_once ("includes/chap-footer.php");?>


</body>
</html>

