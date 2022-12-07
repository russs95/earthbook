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

<title>Accounting | Tratatus Ayyew - Earthbook</title>
<meta name="keywords" content="ecological, accounting, carbon, co2, biodiversity, plastic,impact, disclosure, ecological accounting, eco accounting"> 

<meta name="description" content="The carbon, plastic and biodiversity ecological accounting of the book's writing and publishing">

	
<!-- Facebook Open Graph Tags for social sharing-->
<meta property="og:url"           content="https://tractatus.earthen.io/en/cycles.html">
<meta property="og:title"         content="Accounting | Tratatus Ayyew - Earthbook.">
<meta property="og:description"   content="The carbon, plastic and biodiversity ecological accounting of the book's writing and publishing."/>


<style>
  

@media screen and (max-width: 699px) {
    .ct-chapter-quote {
      width: 87%;
      font-size: 1.4em;
    }
    .ct-quote-source {
      width: 80%;
      font-size: 0.8em;
    }
  }

  @media screen and (min-width: 700px) and (max-width: 1324px) {
    .ct-chapter-quote {
      width: 70%;
      font-size: 1.8em;
    }
    .ct-quote-source {
      width: 70%;
      font-size: 1em;
    }
  }
    
  @media screen and (min-width: 1325px) {
    .ct-chapter-quote {
    width: 50%;
    font-size: 2em;
    text-shadow: 0px 0px 12px var(--slider);
    }
    .ct-quote-source {
      width: 50%;
      font-size: 1em;
    }
  }

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
        <div id="ct-chapter-title">Eco Accounting</div>   
        <div id="ct-book-title">Tractatus Ayyew</div>
       <div id="ct-chap-location">Regen Reports</div>
        <div id="ct-word-count"><i>Appendix</i></div>
      </div>
  </div>

<!-- Page Title Section-->

  <div id="ct-chapt-graphic" class="background-000">
  <img src="../icons/eco.svg" style="width:20%; height:20%;">
  </div>

  <?php require_once ("includes/eco-curtain.php");?>

  <div id="ct-main">

  <div id="up-arrow"></div>


<!-- MAIN TEXT CONTENT of the Page
  For footnotes, use these numbers:  ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ⁶⁰  “ ” ³¹⁰ ²⁶ ⁴⁷ ⁵⁴
-->


<div class="page-paragraph">

  <p>
    The ecological impact of the printing, publishing and reading of the <i>Tractatus Ayyew</i> is tracked, accounted and disclosed.  Download the <i>2022 Tractatus Ayyew Regen Report</i> here:  
<a href="https://files.earthen.io/s/ioobYWRRKGEpPp4" target="_blank">https://files.earthen.io/s/ioobYWRRKGEpPp4</a>
  </p>
  <br><br><br><br>

  
    </div><!--closes page text content-->

          
  </div><!--Closes main content block-->

  <!--Footer Next Chapter Section: Requires customization-->
  <div id="footer-chapter" style="margin-bottom: 0px;">

    <div class="footer-size">
    
      <div class="footer-left">

        <div id="footer-icon-left" style="cursor:pointer;" onclick="openFooter()"></div>
    
     
        <div class="next-section">
            <div class="next-sec">Next:</div>
            <div class="sec-name"><i>For-Earth Enterprise</i></div>
        </div>

      </div>
    

      <div class="footer-right">
    
        <a href="for-earth.php"><div class="next-button">Next ➔</div></a>

      </div>
    </div>
  </div>

  <?php require_once ("includes/chap-footer.php");?>



</body>
</html>

