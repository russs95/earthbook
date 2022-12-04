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


 <!--Page Components
All the page components required to build this page-->

 <!--1--><script src="includes/header-component.js" type="text/javascript" preload></script>
 <!--2--><script src="includes/settings-curtain.js" type="text/javascript" defer></script>
 <!--3--><script src="includes/content-curtain.js" type="text/javascript" defer></script>
 <!--4--><script src="includes/share-curtain.js" type="text/javascript" defer></script>
 <!--5--><script src="includes/buy-curtain.js" type="text/javascript" defer></script>
 <!--6--><script src="includes/bookplate-curtain.js" type="text/javascript" defer></script>
 <!--7--><script src="includes/earthbook-curtain.js" type="text/javascript" defer></script>
 <!--8b--><script src="includes/footer-chapter.js" type="text/javascript" defer></script>


<!--END OF GENERIC CONTENT-->

<!--META TAGS
Must be updated for each page-->

<title>Imagine | Tratatus Ayyew - Earthbook</title>
<meta name="keywords" content="Imagine, a green new world, Earth ethics, earthen ethics, earth, ethics, tractatus ayyew, igorot, indigenous philosophy, philosophy, Earth, green ethics, environmental ethics, deep ecology, ecological, ethics"> 
<meta name="description" content="Imagine a world where the very way we live is steadily enriching the ecosystems of which we are part.">


<meta name="twitter:label1" content="Est. reading time" />
<meta name="twitter:data1" content="6 minutes" /> 
	
<!-- Facebook Open Graph Tags for social sharing-->
<meta property="og:url"           content="https://tractatus.earthen.io/en/imagine.php">
<meta property="og:title"         content="Imagine | Tratatus Ayyew - Earthbook.">
<meta property="og:description"   content="Imagine a world where the very way we live is steadily enriching the ecosystems of which we are part."/>



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
        <div id="ct-chapter-title">Imagine</div>
        <div id="ct-book-title">Tractatus Ayyew</div>
        <div id="ct-chap-location">Book One | Chapter One</div>
        <div id="ct-word-count"><i>1,095 words</i></div>
      </div>
  </div>


<!-- Page Title Section-->

  <div id="ct-chapt-graphic" class="background-1">

  </div>




<!--CONTENTS MENU-->
<content-curtain></content-curtain>

<!--SETTINGS-MENU-->
<settings-curtain></settings-curtain>

<!--BOOK PLATE-->
<bookplate-curtain></bookplate-curtain>

<!--ABOUT EARTHBOOK-->
<earthbook-curtain></earthbook-curtain>

<!--SHARE-MENU-->
<share-curtain></share-curtain>

<!--BUY-CURTAIN-->
<buy-curtain></buy-curtain>

<!--ECO-CURTAIN
<eco-curtain></eco-curtain>-->
 
<?php require_once ("includes/eco-curtain.php");?>
 

<div id="up-arrow"></div>

  <div id="ct-main">


<!-- MAIN TEXT CONTENT of the Page
  For footnotes, use these numbers:  ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ 
-->

     

      <div class="page-paragraph"><p><i>
      Imagine a world where the way we live is steadily enriching the ecosystems of which we are part.  It is a world where our households and communities, just by thriving, make the biosphere a more abundant, vibrant and hospitable home for us and all our kindred creatures.  Rather than strive to reduce our environmental harm, in this world we strive to maximize our ecological contributions.  To do so, the way we manage our matter and energy has shifted accordingly.  No longer do our enterprises operate merely in circles—  so too do they spiral; with each spin overpaying its ecological debt and dispersing its surpluses.   No longer do our enterprises merely reduce the amount of carbon and other elements they let loose— so too do they capture and secure more than they release.  And, no longer do we merely admire the tapestry of life around us— so too do we play an active role in its vitalization as we share space other organisms.  As we all thrive together in this common home, the awareness of our ecological interconnection ever augments, and with it, the sync of our cycles of enterprise and ecosystem, economy and biome, humanity and biosphere— a harmony rising up with us towards the stars.</i></p>
     </div>
     <br><br>

     <div id="line"></div>
     <br><br><br>

<div>
     <div class="lead-page-paragraph">

      TODAY, as we become more and more aware of the degradation and depletion inherent in our modern world, we yearn to amend our mistakes and to improve our ways.  However, as our homes and enterprises unite in resolution, never before has it been more important to recognize that the foundations of the new green age to which we aspire have already been laid.  Dismissed and all but forgotten by our modern civilization, nations ancient and ongoing have long mastered their ecological integration to achieve great heights of social and ecological harmony, abundance and vitality. Only to the extent that we can recognize these enlightened moments, we can imagine our own.  And insofar as we can imagine, the realization of a green world world for all is not nearly as distant as many of us despair.
      </p>

    </div>


      <p id="3-up">Inspired by the verdant legacy of Banayan’s people, the Igorots of Northern Luzon<a href="#footnotes">³</a>, she and I have to come to see that the potential for authentic green participation unites us all as humans— and even deeper, our longing to do so. </p>

      <p>Across cultures and continents, we long to contribute to that which we are part:  to sync with those with whom we sing; to harmonize with those with whom we relate; to enrich the communities in which we partake.  Consequently, as the parts we play in our local ecosystems and global biomes becomes clearer, so too does our yearning to participate positively in them and contribute to a common harmony, vitality and abundance.  
      </p>

      <p>Indeed, Banayan and I have come to see that the transition to households, communities and enterprises that are in-and-of-themselves ecological contributions is the next stage of an epic planetary story whose direction is, quite literally, in our hands.</p>

      <p>So how do we arrive at this thriving common home for all that that we all long to see?</p>

      <p>One word:</p>

      <p>Plastic.</p>

      <p>Therein this problematic modern material lies our way forward.</p>

      <p>As it must be. </p>
      
      <p id="4-up">Gardeners have long observed that the problem is always the solution—  weeds, pests and pollutants are always, with a shift of perspective and approach, the very nutrients, fertilizers and medicines that bring a struggling garden to thrive.<a href="#footnotes">⁴</a></p>

      <p>Like nothing else, plastic embodies the definitive facets of our modern moment.   Derived from ancient fossilized carbon, plastic allows us to touch the primordial story that has enabled our own.  Bought and sold, plastic is a physical manifestation of the petro-capital economy that powers our global age.  Crafted by humans, entirely for humans, plastic is a shimmering reflection of our modern, human centered civilization.</p>

     <p>In this way, our plastic is in fact a mirror. </p>

     <p>And an opportunity.</p>
     
     <p>By confronting plastic's full billion year story, we can face our own within the same frame.</p>

     <p>Then, in seeing our reflection with unprecedented lucidity, we can know our plastic— and ourselves— anew.</p>

     <p>Above all, we can renew our ecological understanding of positive human participation: <i>what green should really mean.</i></p>

     <p>Banayan and I, in struggling to manage our own plastic positively, have come to see that the current concept of green is lacking and incomplete.  Seen through the lens of the  ecological ayyew ethos of her people, we observe that the modern ethic of green is merely about reducing harm— while the concept of contribution has remained all but un-imagined.  It is a view of human ecological potential that sharply contradicts the lived experience of Banayan and her people.</p>

     <p>As we shall see in the chapters ahead, ecological contribution has in fact been the overwhelming tendency on Earth— a unique planetary pattern of matter and energy that, from the very beginning, has permeated all of Earth's processes, cycles and systems.</p>

     <p>And our own.</p>

     <p>To the extent that this Earthen pattern has been reflected within the values and virtues of certain cultures, the societies that have ensued have systematically enriched the ecosystems of which they are a part.</p>

     <p>Conversely, to the extent that a culture’s pattern has differed, systematic depletion and degradation have been the inexorable result.</p>

     <p>The discernment of this Earthen pattern, shall be our chief task in the Tractatus Ayyew.</p>

     <p>Through the combination of our two ancestral perspectives, Banayan’s Igorot heritage and my European, her indigenous culture and my settler, her agrarian upbringing and my industrial, we will investigate the shortcomings of our modern ethical understanding. In particular, the long buried metaphysical misconceptions at the very root of all modern ecological malaise.</p>

     <p>With ancient error excised, we shall then lay out a new theory of green based upon the cosmological character of our planet.</p>

     <p>Guided by the insights of great green nations, the ways of magnificently contributive creatures and the latest insights of scientists, we shall lay out each of the principles that composes the Earth’s five-fold pattern of ecological enrichment.</p>

     <p>The resulting Earthen ethics will help us to make sense of our modern processes, technologies and enterprises— a means by which we can discern that which is enriching (<i>what is green</i>) from that what is depleting (<i>what is grey</i>); and that which is a contribution— from that which is not.</p>

      <p>In this way, with Earth’s example as our guide to green, can move forward with unprecedented clarity and confidence to embody the geometry of contribution in all our processes, cycles and systems.  </p>

     <p>Let us start with that troublesome material we so love to hate.</p>
  
    </div><!--closes page text content-->

<!--FOOTNOTES SECTION-->

    <div class="footnote-section">

      <div id="line" style="border-style: solid; border-width: 1px; margin-bottom: 30px; width:70%; text-align:left;"></div>

      <p id="footnotes" style="font-variant-caps: all-petite-caps; color:grey">Chapter Footnotes</p>
      
    

    
      <a href="#3-up" class="footnote">   
      <div class="footnote-number" id="3-down">3.</div>
      <div class="footnote-text">In particular the Igorot Ayyew ecological ethos.  See: Banayan Angway, Cordillera Administrative Region Indigenous Peoples Education Curriculum K-12 (Bontoc, Mountain Prov., CAR; Philippines Department of Education, 2014).  </div>
      </a>

      <a href="#4-up" class="footnote">   
      <div class="footnote-number">4.</div>
      <div class="footnote-text">The first principle of permaculture.  Bill Mollison, Principles from Permaculture a Designers' Manual, (Tagari Publishers: 1988).</div>
      </a>



    </div><!--Closes footnote section-->
          
  </div><!--Closes main content block-->

  <!--Footer Next Chapter Section: Requires customization-->
  <div id="footer-chapter" style="margin-bottom: 0px;">

    <div class="footer-size">
    
      <div class="footer-left">

        <div id="footer-icon-left" style="cursor:pointer;" onclick="openFooter()"></div>
    
     
        <div class="next-section">
            <div class="next-sec">Next chapter:</div>
            <div class="sec-name"><i>Plastic 1.0</i></div>
        </div>

      </div>
    

      <div class="footer-right">
    
        <a href="plastic1.html"><div class="next-button">Next ➔</div></a>

      </div>
    </div>
  </div>

  <footer-chapter></footer-chapter>
          
  <div id="containerSepia"></div>
  <div id="containerContrast"></div>
  <div id="containerBrightness"></div>

</div>
<!--
<script type="text/javascript">app_id="63549d9864728f002225d0dc";distribution_key="dist_2";</script><script type="text/javascript" src="https://loader.knack.com/63549d9864728f002225d0dc/dist_2/knack.js" defer></script>-->

</body>
</html>

