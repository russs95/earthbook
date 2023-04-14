<!DOCTYPE html>

<!--EARTHBOOK - An open source, Earth & Human Friendly Book format
Read the book.  Improve, translate or comment on the content.  Or fork the code and publish your own.  

Chapter Template Version 1.1
Created by Russell Maier for the Tractatus Ayyew: Earthen Ethics.

License: GNU General Public License v2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html
All files, unless otherwise stated, are released under the GNU General Public
License version 2.0 (https://www.gnu.org/licenses/gpl-2.0.html)
See full project repository at: https://github.com/russs95/earthbook
*/
-->


<!-- this grabs the language identifier for the page so that it can used in the meta and canonical url variables.  It also grabs the page name.  manifest="../offline.appcache-->

<?php require_once ("lang.php");

echo <<<_END
<html lang="$lang">
_END;?>

<!-- this sets PHP variables for the pages that will be used later on-->

<?php 
$parts = explode ("/", $_SERVER['SCRIPT_NAME']);
$name = $parts [count($parts)-1];
if (strcmp($name, "index.php") == 0)
$name = "";
$page_number = "9";
$page_title = "Nature's Fallacy | Tractatus Ayyew - An Earthbook";
$chap_name = "Nature's Fallacy";
$chap_number = "Bk 1, Chap. 6, ";?>

<head>


<?php require_once ("../header.php");?>


<!--META TAGS
Must be updated for each page-->

<meta property="article:modified_time" content="2023-02-21T09:14:13+00:00">
<meta name="keywords" content="Nature's fallacy, nature, environment, problem with nature, humancentric, humancentricism, human, centric, kincentric, greek, roman, environ, harm reduction, natural, natural world, anthropocentric "> 
<meta name="description" content="Beneath modern environmentalism and its 'conservation of nature' lies a fundamental error that destines even the greenest of intentions to grey.">


<meta name="twitter:label1" content="Est. reading time">
<meta name="twitter:data1" content="8 minutes"> 
	
<meta property="og:description"   content="Beneath our modern environmentalism lurks a fundamental ontological error that destines even the greenest of intentions to grey."/>


<style>
  

  #ct-chapter-title {
      /*padding-top: 45px;
      font-size: 10vmin;*/
      letter-spacing: 4px;
      
    }

</style>

</head>


<!--MAIN HTML Begins-->

<BODY class="accessibility-plugin-ac" style="max-width:100%; overflow-x:hidden;">
<div id="underlayer">

<div id="top"></div>

  <!--HEADER NAVBAR-->
  <header-component></header-component>

  <div id="ct-chapter-top">
  <button type=button id="ct-tc-menu" onclick="openContents()" aria-label="Open Table of Contents" style="background-color:var(--header-footer);" ></button>
  <div class="ct-holder" style="cursor:pointer;" onclick="openContents()">
        <div id="ct-chapter-title">Nature's Fallacy</div>   
        <div id="ct-book-title">Tractatus Ayyew</div>
        <div id="ct-chap-location">Book One | Chapter Six</div>
        <div id="ct-word-count"><i>973 words</i></div>
      </div>
  </div>

  <?php require_once ("includes/eco-curtain.php");?>


<!-- Page Title Section-->

  <div id="ct-chapt-graphic" class="background-6"></div>

  <div id="up-arrow"></div>

  <div id="ct-main">


<!-- MAIN TEXT CONTENT of the Page
  For footnotes, use these numbers:  ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ⁰  “ ” ³¹⁰ ²⁶ ⁴⁷ ⁵⁰
-->

     <div class="lead-page-paragraph">
        IN SHARP CONTRAST TO KINCENTRIC NATIONS ANCIENT AND ONGOING, our modern view of the world is based solely on the teachings of our fellow humans. From philosophers to prophets, priests to kings, scientists to seers, human teachers have entirely shaped our modern relationship to the biosphere— what is known all too often as ‘nature’.  Upon this way of knowing, we have established the means by which we discern good from bad, right from wrong and, incidentally, focused our modern ideologies upon fulfilling human needs over those of all Earth's other inhabitants. However practical and successful this human-centric paradigm has been for the prosperity of humanity, the foundational fallacy at its core has meant that without an upgrade in our view of the world, we are wholly incapable of acheiving the ecological harmony we so long for today. 
     </div>

    <div class="page-paragraph">

    <p>As we saw in our last chapter, kincentric nations were founded on an altogether different way of knowing.  Rather than learn solely from humans, these societies recognized the plants and animals around them as kin, elders, and teachers.  Today, as we come to recognize the connection between their kincentric ontology and their pattern of ecological enrichment, we can glimpse the pattern of depletion within our own— and isolate the ontological error that distorts our modern view of the world. </p>

      <p>From Greek stories of human-gods ruling the world, to Roman legends of humans dominating it, western society has put humans upon a pedestal.  From early astronomers declaring that the sun spun around the earth, to biblical interpretations declaring man’s dominion over earth and all its creatures, humanity’s centrality and exceptionalism has become lodged in the depths of western collective consciousness.  Over the centuries, as modern philosophy, religion, ethics and science have evolved they have built layer upon layer on top of this ancient foundation.</p>


      <p>Today, we know better.</p>

      <p>After centuries of science, biologists have long dismissed that humans are at the top of life’s tree.  Likewise, astronomers have long disproved that the Earth is the center of the cosmos.  Here, contemporary science and ancient kincentricism align.  Both agree that humans, plants and animals all share ancestry and origins, action and consequence, connection and dependence.  Both concur that no organism is central or separate to the others: like a tapestry each and every one are inextricable parts of the whole.</p>

      <p>However despite unequivocal dismissal, the axioms of man’s centrality and separateness have remained and persisted, buried in the depths of our modern ideologies.  Just as a building is often built upon the forgotten foundations of one that came long before, these ancient errors tilt and incline our modern intellectual edifices that continue to stand upon them.</p>

      <p>Although our modern ideologies may claim vast differences and boast of scientific savvy, all too often they share a common foundation.  From capitalism to communism, our modern views of the world remain anchored in the same archaic axiom of human exceptionalism.</p>

      <p>Nowhere is this more clear than in the way our modern ideologies speak of 'the natural world'.   From neoliberalism to socialism the very words that each use to describe the organisms and ecosystems, biomes and biosphere that they so long to love, most reveals their deep moorings in antiquated human-centric assumption.</p>
      
      <p>Indeed, there is no word more imbued with the cumbersome weight of ancient metaphysical misconception than that of ‘nature’.    This term, used so poetically by environmentalists and conservationists to protect and preserve ‘the natural’ world, is alas seeped in irredeemable dualistic fallacy:  the ancient error of delineating man and nature, culture and ecology, the natural and the human.</p>
      <!--The preferred term of organizations as wide ranging as the World Economic Forum to the World Wildlife Federation, -->

      <p id="47-up">Upon this stark division not only is modern society built, but so too our most fervent environmental attempts and endeavors.  Derived from the Middle-English term <i>environ</i>, meaning to circle or surround, ‘the environment’ has come to mean, that which is around us humans, but not that which is us.<a href="#footnotes" title="Russell received a personal account from Robert Muller, three time under-secretary of general of the UN, who in discussions with UN Secretary General U Thant during the 1960’s, selected the word ‘environment’ (which had no political meaning at the time) as a term for the world’s growing ecological concerns. The term was used for the 1972 <i>United Nations Conference on the Human Environment</i>, in Stockholm, giving ‘environmentalism’ its modern political meaning." onclick="openFootnotes()">⁴⁷</a></p>

      <p id="48-up">Over the last decades, feminists<a href="#footnotes" title="Carolyn Merchant, 'The Death of Nature: Women, Ecology and the Scientific Revolution', (Harper & Row, 1980)." onclick="openFootnotes()">⁴⁸</a>, theologians<a href="#footnotes" title="“A tradition of translation [of the word ‘dominion’ in Genesis] has inscribed the dualistic, anthropocentric, and hierarchical cast of Western philosophy and theology into the biblical text. Careful attention to the world of the text, and translations that reflect that world authentically, can open up new (“old”) readings that are more ecologically sound and sensitive.” See: Theodore Hieber, 'Retranslating Genesis 1–2: Reconnecting Biblical Thought and Contemporary Experience', (Sage Journals, 2019) Vol 70, Issue 3." onclick="openFootnotes()">⁴⁹</a> and philosophers<a href="#footnotes" onclick="openFootnotes()" title="Timothy Morton, 'Ecology without Nature: Rethinking Environmental Aesthetics', (Harvard University Press, (2007).">⁵⁰</a> have observed that the modern environmental ethics that results from this foundation (laws, sustainability guidelines, UN goals, etc.) are thus locked into a perspective of human-time, human-space and human-needs, and consequently: of human rights, interests and economy. From this view, ‘nature’ is inevitably objectified as something with which humanity is ever interacting: managing, dominating, stewarding. Our environmental endeavors that follow, thus strive to reduce their harm, to protect and to conserve the ‘natural’ world from human touch and contamination.</p>
      
      <p>Alas, from this reasoning, human ecological integration is an impossibility.  As such, the very notion of human ecological contribution has remained all but unimagined by environmentalists and industrialists alike.</p>

     <p id="51-up">Banayan and I observe that not only are the axioms of this logic flawed, its conclusions run contrary to the lived and ancestral experience of her people and that of countless other kincentric nations ancient and ongoing:  cultures in which the concept of ‘nature’ is both absent and fundamentally antithetical.<a href="#footnotes" onclick="openFootnotes()" title="In Banayan's Kan'kan'ue language there is no word for 'nature'.  The closest term is 'batawa' which denotes the world around without separating people from other beings.  This observation is shared by speakers of other indigenous languages.  See:  Seline Meijer, 'People and nature blur in the world's indigenous languages', (IUCN: Planet at the Crossroads, 2017).  Also see: E. Salmon, 'Kincentric Ecology', 2000.">⁵¹</a></p>

     <p>We also observe that the effort of preserving and protecting ‘nature’ is likewise doomed to the very fate it aims to avoid.  Conserving and protecting one part of a system (i.e. an organism or ecosystem) at the exclusion of others, in the end, always fails.  As the neighboring parts degrade, so too will the whole, and with it, inevitably, so too all its parts.</p>

     <p>To move forward towards authentic green contributions, we must thus first thoroughly excise human exceptionalism and its crooked conclusions from our view of the world.</p>

     <p>To do so, the concept of ‘nature’ must crumble like the ancient rusted chain that it is.</p>

     <p>Only then, can we shatter the mind forged manacles of antiquated, anthropocentric cosmology and open the door to the ecological regeneration to which our moment so urgently calls.</p>

     <p>Only then can we too see the plants and animals around us as kin, elders and masters of ecological integration– teachers from whom we can learn to vitalize our own contributive potential.</p>

     <p>And only then can we see that the greatest teacher of all has been waiting for us all a long.</p><br>
    
    
  </div><!--closes page text content, then loads page curtains:-->

<?php require_once ("includes/eco-curtain.php");?>

<?php require_once ("includes/comments.php");?>

<?php require_once ("includes/search.php");?>


<!--FOOTNOTES SECTION-->

  <div class="footnote-section" style="z-index:8;">

    <div class="footnote-line" style="border-style: dotted; border-color: grey; border-width: 1px; margin-bottom: 20px; width:100%; text-align:left;"></div>

    <div id="footnotes" style="cursor:pointer;display:flex;font-variant-caps: all-petite-caps; color:grey;" onclick="openFootnotes()">
          
      <div id="footnotes-arrow"></div>
      
      <div class="footnotes-title">Chapter Footnotes</div>
    
    </div>

    <div id="footer-reveal-container" style="height:200px;transition:0.4s;" >

      <div id="footnotes-reveal" style="height:200px; overflow-y: clip; transition:0.4s;margin-bottom:0px;transition-delay: 0.4s;">
        <a href="#47-up" class="footnote">   
        <div class="footnote-number">47.</div>
        <div class="footnote-text">Russell received a personal account from Robert Muller, three time under-secretary of general of the UN, who in discussions with UN Secretary General U Thant during the 1960’s, selected the word ‘environment’ (which had no political meaning at the time) as a term for the world’s growing ecological concerns. The term was used for the 1972 <i>United Nations Conference on the Human Environment</i>, in Stockholm, giving ‘environmentalism’ its modern political meaning.</div>
        </a>

        <a href="#47-up" class="footnote">   
        <div class="footnote-number">48.</div>
        <div class="footnote-text">Carolyn Merchant, <i>The Death of Nature: Women, Ecology and the Scientific Revolution</i>, (Harper & Row, 1980).</div>
        </a>

        <a href="#47-up" class="footnote">   
        <div class="footnote-number">49.</div>
        <div class="footnote-text">“A tradition of translation [of the word ‘dominion’ in Genesis] has inscribed the dualistic, anthropocentric, and hierarchical cast of Western philosophy and theology into the biblical text. Careful attention to the world of the text, and translations that reflect that world authentically, can open up new (“old”) readings that are more ecologically sound and sensitive.” See: Theodore Hieber, <i>Retranslating Genesis 1–2: Reconnecting Biblical Thought and Contemporary Experience</i>, (Sage Journals, 2019) Vol 70, Issue 3.
        </div>
        </a>

        <a href="#47-up" class="footnote">   
        <div class="footnote-number">50.</div>
        <div class="footnote-text">Timothy Morton, <i>Ecology without Nature: Rethinking Environmental Aesthetics</i>, (Harvard University Press, (2007).  
        </div>
        </a>

        <a href="#51-up" class="footnote">   
        <div class="footnote-number" id="3-down">51.</div>
        <div class="footnote-text">In Banayan's Kan'kan'ue language there is no word for 'nature'.  The closest term is 'batawa' which denotes the world around without separating people from other beings.  This observation is shared by speakers of other indigenous languages.  See:  Seline Meijer, <i>People and nature blur in the world's indigenous languages</i>, (IUCN: Planet at the Crossroads, 2017).  Also see: E. Salmon, <i>Kincentric Ecology</i>, 2000.</div>
        </a>

        


        </div>
  </div>



    <div id="footnotes-concealer"></div>

    </div><!--Closes footnote section-->
          
  </div><!--Closes main content block-->

  <!--Footer Next Chapter Section: Requires customization-->
  <div id="footer-chapter" style="margin-bottom: 0px;">

    <div class="footer-size">
    
      <div class="footer-left">
    
     
        <div class="next-section">
          <div class="next-sec">Next:</div>
            <div class="sec-name"><i>7 | Earthen Ways</i></div>
        </div>

      </div>
    

      <div class="footer-right">
    
        <a href="earthen.php" title="Go to the next chapter" aria-label="Go to the next chapter"><div class="next-button">Next ➔</div></a>

</div>
</div>

    
<?php require_once ("includes/chapTER-footer.php");?>


</div>
</body>
</html>
</html>

