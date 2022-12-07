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

<title>For-Earth | Tratatus Ayyew - Earthbook</title>
<meta name="keywords" content="for-earth, intention, statement, acknowledgements, thank yous, grattitude, credits "> 

<meta name="description" content="Our not-for profit, for-Earth intention statement">

	
<!-- Facebook Open Graph Tags for social sharing-->
<meta property="og:title"         content="For-Earth | Tratatus Ayyew - Earthbook.">
<meta property="og:description"   content="Our not-for profit, for-Earth intention statement."/>


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
        <div id="ct-chapter-title">For-Earth</div>   
        <div id="ct-book-title">Tractatus Ayyew</div>
       <div id="ct-chap-location">Earthen Ethics</div>
        <div id="ct-word-count"><i>Appendix</i></div>
      </div>
  </div>

  <?php require_once ("includes/eco-curtain.php");?>


<!-- Page Title Section-->

  <div id="ct-chapt-graphic" class="background-000">
  <img src="../svgs/icon-for-earth.svg" style="width:35%; height:35%; margin:auto;  text-align:center">

  </div>


<div id="up-arrow"></div>
<div id="ct-main">




<!-- MAIN TEXT CONTENT of the Page
  For footnotes, use these numbers:  ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ⁶⁰  “ ” ³¹⁰ ²⁶ ⁴⁷ ⁵⁴
-->





<div class="page-paragraph">

  <p>
    In the disclosure of the Tractatus Ayyew’s ecological accounting and biodiversity impacts, the authors and publisher express their commitment to net-green, for-Earth enterprise.  
  </p>

  <a href="https://files.earthen.io/s/ioobYWRRKGEpPp4" target="_blank" aria-label="The Regen Report for our book">
    <div><img src="../banners/forearth-dark-350px.png" width="300px" alt="Banner declaring our For-Earth intention"></div></a>

     <div id="wcb" class="carbonbadge wcb-d"></div>
    <script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js?v=2" preload></script>

  
    </div><!--closes page text content-->

          
  </div><!--Closes main content block-->

  <!--Footer Next Chapter Section: Requires customization-->
  <div id="footer-chapter" style="margin-bottom: 0px;">

    <div class="footer-size">
    
      <div class="footer-left">

        <div id="footer-icon-left" style="cursor:pointer;" onclick="openFooter()"></div>
    
     
        <div class="next-section">
            <div class="next-sec">Next:</div>
            <div class="sec-name"><i>Acknowledgements</i></div>
        </div>

      </div>
    

      <div class="footer-right">
    
        <a href="acknowledgements.php"><div class="next-button">Next ➔</div></a>

      </div>
    </div>
  </div>

  <?php require_once ("includes/chap-footer.php");?>



</body>
</html>

