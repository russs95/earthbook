<!--EARTHBOOK CHAPTER PAGE TEMPLATE

PHP Page Version 1.0.1
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

<title>Summaries | Tratatus Ayyew - Earthbook</title>
<meta name="keywords" content="Earth ethics, earthen ethics, earth, ethics, tractatus ayyew, igorot, indigenous philosophy, philosophy, Earth, green ethics, environmental ethics, deep ecology, ecological, ethics"> 
<meta name="description" content="A Theory of Grey & Green based on Earth's example.">


<meta name="twitter:label1" content="Est. reading time" />
<meta name="twitter:data1" content="4 minutes" /> 
	
<!-- Facebook Open Graph Tags for social sharing-->
<meta property="og:title"         content="Summaries | Tratatus Ayyew - An Earthbook">
<meta property="og:description"   content="A short sentence, a long sentence and a paragraph summary of Earthen ethics."/>


<style>
  /*
  #ct-chapt-graphic {
  background: url(svgs/tractatus-mandala-full-grey.svg) no-repeat center;
background-size: contain;
background-position-y: 200px;
}
*/

#ct-chapt-graphic {height: 10vh;}

#ct-chapter-title {
      padding-top: 45px;
      font-size: 10vmin;
      letter-spacing: 3px; 
    }

</style>

</head>

<!--MAIN HTML Begins-->

<BODY class="accessibility-plugin-ac" style="max-width:100%; overflow-x:hidden;">
<div id="underlayer">

  <a name="top"></a>

  <!--HEADER NAVBAR-->
  <header-component></header-component>

  <div id="ct-chapter-top">
      <div id="ct-tc-menu" onclick="openContents()"></div>
      <div class="ct-holder" style="cursor:pointer;" onclick="openContents()">
        <div id="ct-chapter-title">Summaries</div>   
        <div id="ct-book-title">Tractatus Ayyew</div>
        <div id="ct-chap-location">Introduction</div>
        <div id="ct-word-count"><i>540 words</i></div>
      </div>
  </div>

<!-- Page Title Section-->

  <div id="ct-chapt-graphic">
  </div>




  <div id="ct-main">


<!-- MAIN TEXT CONTENT of the Page
  For footnotes, use these numbers:  ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ 
-->
 

    <div class="page-paragraph">


      <h2>1. A short sentence</h2>
      <p>The Earthen ethics concept of 'green' can be summed up in a simple proposition:
      </p>

      <div class="quote"><p>A process is green to the extent that it is an ecological contribution and it is an ecological contribution to the extent that it follows Earth's example.</p></div>
      <br>
      <a name="long"></a>
      <h2>2. A longer sentence</h2>
      
      <p>By adding 'must' we have then have the basic Earthen ethic: </p>

      <div class="quote"><p>To be an ecological contribution a process must embody Earth’s pattern of concentrating matter and dispersing energy to cyclically enrich the vibrancy, diversity and consciousness of the system of which it is a part.
      </p></div>

      <br>
      <a name="paragraph"></a>
      <h2>3. A paragraph</h2>
      
      <p>Now, let’s place it within the contemporary context we shall be shortly be exploring:</p>

      <div class="quote"><p>As we become more and more aware of the ecological degradation caused by our modern age, we long to amend and to green our ways.  Of all our ecological crises, plastic pollution is particularly representative of our modern planetary predicament.  As a fossil-fuel by-product, plastic embodies a direct connection to both the biosphere's multi-billion year pattern of enrichment and our modern pattern of depletion.  By retracing plastic’s full multi-billion year story, we can observe the sharp contrast in these two patterns.  In particular, the ways in which Earth’s spiraled its matter and energy to unfurl systems of ever greater vitality, diversity and consciousness.  Observing nations that have long mastered their ecological integration we can see this same pattern embodied in their cultures.  Learning from them, we can amend our modern metaphysics to recognize the human capacity for ecological contribution– and use it as our basis for green.  Then, to achieve it, our enterprises must embody Earth’s pattern in the dispersal of their energy and the concentration of their matter.  This requires announcing their for-Earth intention, and cyclically tracking, accounting and disclosing their material, energetic and diversity impacts.  Starting with our plastic, we can follow Earth's example in this way, to ensure that our processes, cycles and systems systematically enrich the vitality, diversify and consciousness of the ecosystems of which they are a part. 
      </p></div>
  
    </div><!--closes page text content-->

<!--FOOTNOTES SECTION

    <div class="footnote-section">

      <div id="line" style="border-style: solid; border-width: 1px; margin-bottom: 30px; width:70%; text-align:left;"></div>

      <p style="font-variant-caps: all-petite-caps; color:grey">Chapter Footnotes</p>
      
      <a name="2-down"></a>
      <a href="#2-up" class="footnote">   
      <div class="footnote-number">2.</div>
      <div class="footnote-text">Régis Debray, Le siècle vert. Un changement de civilisation (Editions Gallimard, 2020)</div>
      </a>-->

    </div><!--Closes footnote section-->
          
  </div><!--Closes main content block-->

  <!--Footer Next Chapter Section: Requires customization-->
  <div id="footer-chapter" style="margin-bottom: 0px;">

    <div class="footer-size">
    
      <div class="footer-left">

        <div id="footer-icon-left" style="cursor:pointer;" onclick="openFooter()"></div>
    
     
        <div class="next-section">
            <div class="next-sec">Next section:</div>
            <div class="sec-name"><i>Chapter 1 | Imagine</i></div>
        </div>

      </div>
    

      <div class="footer-right">
    
        <a href="imagine.html"><div class="next-button">Next ➔</div></a>

      </div>
    </div>
  </div>

  <footer-chapter></footer-chapter>
          
  <div id="containerSepia"></div>
  <div id="containerContrast"></div>
  <div id="containerBrightness"></div>

</div>

</body>
</html>

