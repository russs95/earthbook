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

<title>The Five Earthen Ways | Tratatus Ayyew - Earthbook</title>
<meta name="keywords" content="Earthen ethics, five principles, Earthen principles, Earthen, cosmology, planetary character, Earth's character, "> 
<meta name="description" content="In our planet's relentless shift from grey to green over the eons we can observe five principles that compose Earth’s pattern of process.">


<meta name="twitter:label1" content="Est. reading time" />
<meta name="twitter:data1" content="8 minutes" /> 
	
<!-- Facebook Open Graph Tags for social sharing-->
<meta property="og:title"         content="The Five Earthen Ways | Tratatus Ayyew - Earthbook.">
<meta property="og:description"   content="In our planet's relentless shift from grey to green over the eons we can observe five principles that compose Earth’s pattern of process."/>


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
        <div id="ct-chapter-title">The Earthen Ways</div>   
        <div id="ct-book-title">Tractatus Ayyew</div>
        <div id="ct-chap-location">Book One | Chapter Seven</div>
        <div id="ct-word-count"><i>784 words</i></div>
      </div>
  </div>

  <?php require_once ("includes/eco-curtain.php");?>

<!-- Page Title Section-->

  <div id="ct-chapt-graphic" class="background-7"></div>

  <div id="up-arrow"></div>

  <div id="ct-main">

<!-- MAIN TEXT CONTENT of the Page
  For footnotes, use these numbers:  ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ⁰  “ ” ³¹⁰ ²⁶ ⁴⁷ ⁵⁴
-->

     <div class="lead-page-paragraph">
        For too long we have assumed the earth beneath us to be a static and stable constant. In fact, it is anything but.  The flow of cosmic matter and momentum that first formed our planet has never ceased its spiral.  With no vestige of a beginning and no prospect of an end<a href="#footnotes">⁵²</a>, the ever unfolding confluence of Earth’s unique combination of matter and energy, composes a cosmological pattern of process all its own.  Indeed, in our entire galaxy we know of no other entity that has so thoroughly realized the very ecological enrichment to which we now so aspire to replicate. 
     </div>

    <div class="page-paragraph">

    <p>Truly, the transformation of our once barren planet into a thriving biosphere is the penultimate example of <i>green</i>.</p>

      <p>In the same way that kincentric societies have been guided by the example of ancient masters of ecological integration, so too can we be guided by the example of Earth. </p>

      <p>Observing the planet’s shift over the eons from grey to green we can discern an underlying pattern in the Earth’s ways.<a href="#footnotes">⁵³</a>  In the resonance of our scientific and kincentric knowing, we can discern five principles that compose the Earth’s underlying pattern of process:</p>


      <p>1. <i>The Earth’s processes tend towards cycles that spiral.</i></p>
  
      <p>2. <i>The Earth’s cycles tend towards the outwards dissipation of energy.</i></p>

      <p>3.<i>The Earth’s cycles tend towards the inwards concentration of matter.</i></p>
      
      <p>4. <i>The Earth’s spirals of energy and matter tend toward diverse systems.</i></p>
      
      <p>5. <i>The Earth’s systems tend towards ever greater consciousness of their interconnection.</i></p>



      <p id="54-up">From organism to ecosystem, from biome to biosphere, we are surrounded with the verdant consequences of these primordial principles unfurling through space and time.  Whether the process is minute or massive, ancient or ongoing, in looking closely, we can glimpse the same Earthen ways reflected and embodied— a microcosm of the macro— within every organism and ecosystem.  Within the life-cycles of everything from a forest to a tree, a bird to a flea, we can observe the tendencies of Earth’s character expressed— a vast symphony of a trillion processes, cycles and systems all tending towards a more resilient, livable, vibrant and abundant biosphere for all.<a href="#footnotes">⁵⁴</a></p>

      <p id="55-up">While there are hints of these tendencies upon other planets, upon ours, they definitively incline the cycles of matter and energy<a href="#footnotes">⁵⁵</a>, setting Earth apart in their clarity of expression and consequence.</p>
      
      <p>Yet Earth is not in this way an exception.  Given the unique stellar confluence of every planet, each has its own unique cosmological configuration and character.  From the endless storms of Jupiter to the endemic volcanoes of Venus to the very color of Mars, each planet’s character tends towards its own expressions of surface, ocean and atmosphere.</p>

     <p id="56-up">Nevertheless, each planet’s tendencies are not hard and fast rules.  Not all storms on Jupiter turn to giant red spots, not all Venusian mountains erupt and not all rocks on Mars are red.  Likewise, not all of the Earth’s cycles express Earthen tendencies with equal clarity and consequence.<a href="#footnotes">⁵⁶</a></p>

     <p id="57-up">In this way, over the eons, certain Earthen organisms and ecosystems have come to express the Earth’s tendencies more than others.<a href="#footnotes">⁵⁷</a></p>

     <p>And so too certain cultures and societies.</p>

     <p>In the next five chapters, we shall examine five Earthen phenomena that have attained an exceptional magnificence in their geometric expression of one of the five facets of the Earth’s cosmological character.  With the help of various kincentric cultures and the guidance of contemporary physics, biology and astronomy we will examine the ways of the Igorots, the cycles of the salmon, the manner of mollusks, the diversification of ancient oceans and the consciousness of a mycorrhizal forest.  Each shall aid us in discerning the essence of a particular Earthen principle, and together reveal the full character of ecological contribution.</p>

     <p>What we shall call an <i>Earthen ethics.</i></p>

     <p>Applying these Earthen ethics, we can confidently discern and define what is <i>green</i> (what is an ecological contribution) and what is <i>grey</i> (what is not).</p>

     <p>What is green is that which embodies the five-fold geometry of Earthen principles and leads to processes, cycles and systems that are more vibrant, stable, resilient, abundant and conscious.</p>

     <p>What is grey is that which conflicts with any one of the Earthen principles, leading to the opposite— lowering consciousness, reducing biome abundance, vibrancy and stability, and decreasing resiliency. </p>

     <p>Let us move forward now to discern in detail the five parameters of ecological enrichment on planet Earth— the requisite five pillars of a green age for humans, and a thriving common home for all.</p>
     <br><br>

  
    </div><!--closes page text content-->

<!--FOOTNOTES SECTION-->

    <div class="footnote-section">

      <div id="line" style="border-style: solid; border-width: 1px; margin-bottom: 30px; width:70%; text-align:left;"></div>

      <p id="footnotes" style="font-variant-caps: all-petite-caps; color:grey">Chapter Footnotes</p>
      
        <a href="#52-up" class="footnote">   
        <div class="footnote-number">52.</div>
        <div class="footnote-text">Thomas Hutton, <i>A Theory of the Earth</i>, Royal Society of Edinburgh, (Transactions of the Royal Society of Edinburgh, 1788) Vol. 1.</div>
        </a>

        <a href="#53-up" class="footnote">   
        <div class="footnote-number">53.</div>
        <div class="footnote-text">As outlined in chapter 6, we take the view of the Earth as a self-contained, planetary system in which humans and their systems are subset.  In this way, when we allude to "following Earth's example" we are mindful of the 'naturalistic fallacy' (i.e. because it is natural to do things a certain way, we ought to do things that way).  While this fallacy certainly pertains to is/ought arguments between two independent systems (i.e. 'the human world' and 'the natural world'), the fallacy loses in relevance when one system is acknowledged to be a subset of the other.  In such a case, a three part is/ought/if statement is possible on certain characteristics of the whole:  a system is a certain way; its parts ought to embody that way if both are to operate as they should.  i.e. the wall is solid and strong, and so ought be its bricks if both the bricks and wall are to stand.  The plant is growing towards the sun, and so ought its leaves if it is to thrive.  Consequently, we categorically avoid the dichotomy of 'natural' systems and human systems. Instead, throughout the Tractatus Ayyew we view human processes as an ecological subset of the Earth's biosphere.</div>
        </a>

        <a href="#54-up" class="footnote">   
        <div class="footnote-number">54.</div>
        <div class="footnote-text">It is important to note we do not lay any claim to why or how the Earth came to its particular cosmological character.  We are simply observing the net change of the planet from its barren (grey) state to its biosphere (green) state.  Whether the Earth’s characteristic ways were laid by coincidence, a divine being, many beings, or a sentient planet is a separate matter. 
        </div>
        </a>

        <a href="#55-up" class="footnote">   
        <div class="footnote-number">55.</div>
        <div class="footnote-text">Here we are not oblivious to the great extinctions, cataclysms and ice ages that have occurred over the Earth’s history. Rather, we are surveying the full history of the Earth and observing its net tendencies.  We observe that even when great regressions of the biosphere are taken into account, these are secondary to an overall process of greening.  
        </div>
        </a>

        <a href="#56-up" class="footnote">   
        <div class="footnote-number">56.</div>
        <div class="footnote-text">In fact, some processes may in fact run contrary to the overall cyclical tendency.  However, these processes are always a minority— otherwise they themselves would be the tendency.   
        </div>
        </a>

        <a href="#55-up" class="footnote">   
        <div class="footnote-number">57.</div>
        <div class="footnote-text">Although it is beyond the scope of the Tractatus, a logical extension of our argument is that Earth’s patterns are in fact the requisite tendencies for the unfurling of life on any planet.  In this interpretation, the Earth’s ways are not unique to Earth, but rather the Earth embodies the ideal cosmological context for these tendencies to express themselves.  While this requires far more proof to be established than is available, should it be true, it would not be antithetical to the Earthen ethics developed in the Tractatus.  Rather it would simply place them in a broader context. 
        </div>
        </a>




    </div><!--Closes footnote section-->
          
  </div><!--Closes main content block-->

  <!--Footer Next Chapter Section: Requires customization-->
  <div id="footer-chapter" style="margin-bottom: 0px;">

    <div class="footer-size">
    
      <div class="footer-left">

        <div id="footer-icon-left" style="cursor:pointer;" onclick="openFooter()"></div>
    
     
        <div class="next-section">
            <div class="next-sec">Next Chapter & Book:</div>
            <div class="sec-name"><i>Book 2 | Epigraph</i></div>
        </div>

      </div>
    

      <div class="footer-right">
    
        <a href="epigraph-2.php"><div class="next-button">Next ➔</div></a>

      </div>
    </div>
  </div>

  <?php require_once ("includes/chap-footer.php");?>

</div>


</body>
</html>

