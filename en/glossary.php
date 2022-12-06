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

<title>Glossary | Tratatus Ayyew - Earthbook</title>
<meta name="keywords" content="sources, biblioraphy, tractatus ayyew, references, Ayyew, Biome, Biosphere, Biodiversity, Ecology, Green, earth, Earth, Grey, Earthen, Ecological Contribution, Ecological Consciousness, Fossil Fuels, Igorot, Petro-Capital Economy, Plastic Sequestration, Plastic’s Stellar Story, Plastic 1.0, Plastic 2.0, Regenerative, cosmological character, kan'ka'nue, wet'su'weten, dapay, "> 

<meta name="description" content="A list of the key terms and their definitions as they are used throughout the Tractatus Ayyew">

	
<!-- Facebook Open Graph Tags for social sharing-->
<meta property="og:title"         content="Glossary | Tratatus Ayyew - Earthbook.">
<meta property="og:description"   content="A list of the key terms and their definitions as they are used throughout the Tractatus Ayyew"/>


<style>
  

  #ct-chapter-title {
      /*padding-top: 45px;
      */font-size: 10vmin;
      letter-spacing: 2px;
      
    }

    i {font-weight: bold;
      font-family: "CooperLtMedium";}

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
        <div id="ct-chapter-title">Glossary</div>   
        <div id="ct-book-title">Tractatus Ayyew</div>
       <div id="ct-chap-location"><br>An Earthen Ethics</div>
        <div id="ct-word-count"><i>Appendix</i></div>
      </div>
  </div>

<!-- Page Title Section-->

  <div id="ct-chapt-graphic" class="background-00">
    <div class="ct-chapter-quote">
      Key terms and their definitions.
    </div>
    <div class="ct-quote-source">
    </div>
  </div>

  <?php require_once ("includes/eco-curtain.php");?>

  <div id="ct-main">

  <div id="up-arrow"></div>


<!-- MAIN TEXT CONTENT of the Page
  For footnotes, use these numbers:  ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ⁶⁰  “ ” ³¹⁰ ²⁶ ⁴⁷ ⁵⁴
-->

<div class="page-paragraph">

<p><i>Ayyew</i>:  The Igorot virtue of ever increasing one’s sync with ecological cycles.
</p>

<p><i>Biome</i>:  An ecosystem of ecosystems.  A principal ecosystem of a biosphere.  
</p>

<p><i>Biosphere</i>:  The all encompassing ecology of a planet (usually that of Earth).
</p>

<p><i>Biodiversity</i>:  The variety and plurality of species in a biological system.
</p>

<p><i>Cosmological Character</i>:  The unique history, configuration and composition of each planet that gives it its characteristic pattern of processe.</p>

<p><i>Dapay</i>:  The central stone plaza of every Igorot village that is used for ceremonies, feasts and story telling.</p>


<p><i>earth</i>:   Soil, ground [lower case ‘e’].  Used with an article (i.e. “the”)
</p>

<p><i>Earth</i>:  The third planet orbiting the sun [upper case ‘E’].  Used without an article.
</p>

<p><i>Earthen</i>:  Of the character of the Earth. [Capital ‘E’] 
</p>

<p><i>earthen</i>:  Of the earth (i.e. soil, ground) [lowercase ‘e’] 
</p>

<p><i>Earthen Ethics</i>:  A ethical framework for discerning the ecological color of an act, process or enterprise based on the example of Earth.</p>

<p><i>Earth Enterprise</i>:  An enterprise that strives first and foremost to enrich the biosphere by following Earth’s example.</p>

<p><i>Ecological Contribution</i>:  A process that fully embodies the principles of Earthen ethics.  A green ecological impact.</p>

<p><i>Ecological Consciousness</i>:  An awareness of one’s interconnection to the cycles of life near and far, old and new, local and global. </p>

<p><i>Ecology</i>:  A biological system; a part of a biome.
</p>

<p><i>Green</i>:  An ecological contribution: a process that follows Earth’s example by embodying all the Earthen principles.</p> 

<p><i>Grey</i>:  A depleting ecological impact:  a process that fails to embody all the Earthen principles.</p>

<p><i>Fossil Fuels</i>: A modern term to described the Earth’s ancient compacted carbon stores.
</p>

<p><i>Igorot</i>:  The people of the highlands of northern Luzon, in the West Philippines Sea.
</p>

<p><i>Kan’ka’nue</i>:  The language of the Igorots.</p>

<p><i>Petro-Capital Economy</i>:  An economy whose flow and generation of capital is powered by petroleum energy.</p>

<p><i>Plastic Sequestration:</i>  Plastic sequestration is the process of concentrating and compacting plastic to create short term building blocks that secure and store plastic over the long-term, in a not-for-profit process that raises consciousness, supports biodiversity and is net-subtractive.</p>

<p><i>Plastic’s Stellar Story</i>:  The four billion year view of plastic as carbon sequestered by the Earth, and de-compacted by humans.</p>

<p><i>Plastic 1.0:</i>  The paradigm of plastic as human made and managed.</p>

<p><i>Plastic 2.0: </i> The paradigm of plastic as a part of the Earth’s billion year process of cultivating the biosphere and as representation of our petro-capital economy.</p>

<p><i>Regenerative</i>:  A greening process whose subtractive impact is over twice that of its additive impact.</p>

     </p>
     <br><br>

  
    </div><!--closes page text content-->

          
  </div><!--Closes main content block-->

  <!--Footer Next Chapter Section: Requires customization-->
  <div id="footer-chapter" style="margin-bottom: 0px;">

    <div class="footer-size">
    
      <div class="footer-left">

        <div id="footer-icon-left" style="cursor:pointer;" onclick="openFooter()"></div>
    
     
        <div class="next-section">
            <div class="next-sec">Back to the Start</div>
            <div class="sec-name"><i>Preamble</i></div>
        </div>

      </div>
    

      <div class="footer-right">
    
        <a href="preamble.php"><div class="next-button">The Start ➔</div></a>

      </div>
    </div>
  </div>

  <?php require_once ("includes/chap-footer.php");?>

</body>
</html>

