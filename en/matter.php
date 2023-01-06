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

<title>The Salmon's Spin | Tratatus Ayyew - Earthbook</title>
<meta name="keywords" content="Salmon, spin, energy, inwards, for-profit, not-for-profit, earth enterprise, for Earth, Earthen, Igorots, Ayyew, cycles that spiral, spiral design, linear vs circular, circular, green, energy, matter, Earthen ethics, five principles, Earthen principles, Earthen, cosmology, planetary character, Earth's character, "> 
<meta name="description" content="The Earth’s cycles tend towards the outwards dissipation of energy.">


<meta name="twitter:label1" content="Est. reading time" />
<meta name="twitter:data1" content="16 minutes" /> 
	
<!-- Facebook Open Graph Tags for social sharing-->
<meta property="og:title"         content="Cycles that Spiral | Tratatus Ayyew - Earthbook.">
<meta property="og:description"   content="Observe the way the Earth tends its processes towards cycles that spiral."/>


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
      text-shadow: 0px 0px 10px var(--slider);
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
        <div id="ct-chapter-title">The Mollusc's Means</div>   
        <div id="ct-book-title">Tractatus Ayyew</div>
        <div id="ct-chap-location">Earthen Principle No. 3 | Energy</div>
        <div id="ct-word-count"><i>Book Two | 2,307 words</i></div>
      </div>
  </div>

  <?php require_once ("includes/eco-curtain.php");?>

<!-- Page Title Section-->

  <div id="ct-chapt-graphic" class="background-8">
    <div class="ct-chapter-quote">
      <span style="background-color:var(--nav-bar-accent);
 padding:0.1em 0.2em;">“The Earth’s cycles tend towards the inwards concentration of matter.”</span>
    </div>
    <div class="ct-quote-source">
     ― Earthen Ethic No.2
    </div>
  </div>

  <div id="up-arrow"></div>


  <div id="ct-main">


<!-- MAIN TEXT CONTENT of the Page
  For footnotes, use these numbers:  ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ⁶⁰  “ ” ³¹⁰ ²⁶ ⁴⁷ ⁵⁴
-->
    <script async src="https://cse.google.com/cse.js?cx=951aeb2e56c834f88">
</script>
<div class="gcse-search"></div>

<div class="page-paragraph">
    <p id="58-up"><i>
    Twelve thousand years ago, as trillion ton ice sheets retreated leaving nothing but rocks and rivers, the salmon found their niche on North America's Pacific coast.  There, hundreds of kilometers inland, they began a seasonal cycle that has spun to this day.  Every year, come the thaw of winter ice, tiny hatch-lings emerge from batches of eggs hidden on the bottom of streams and creeks. Over the spring, the tiny fish gather their strength, consuming insects and waterborne larvae.  Come summer, they set out on a journey downriver to the Pacific. Once arrived, they feast on nutrient rich marine life, steadily gathering fats and amassing proteins. After several years, having reached their full size and strength they are ready to head home.  In autumn, as they retrace their original river route, the waters boil with their determination– and an entire ecosystem revels in their return! Bears, eagles and humans gather for grand fishing feasts.  Even the bugs partake! Discarded carcasses nourish the very insects upon which the salmon first fed.  Meanwhile, those salmon that slip by continue to the waters where their lives began.  There, they use the last of their strength to deposit batches of roe and cover them with gravel.  With their eggs safe, the salmon die; their decomposing bodies a final nutrient-rich gift to the river ecosystem that their roe will soon run.<a href="#footnotes">⁵⁸</a> </i>
     </p></div>
    <br><br>
     <div id="line" style="margin-bottom: 30px;"></div>
<br><br>
    <div>
    <div class="lead-page-paragraph">
    FOR OVER THE LAST MILLENNIA, the Pacific Salmon have played a key role in regenerating the barren desolation left by the glaciers that once covered America's Pacific Coast.  Year after year, their cycles have relentlessly spun, inexorably distributing nutrients up and down the coastal interior.  Today, the continent's coast is a thriving biome of tens of thousands of species.  The vast and verdant transformation is a reminder to us humans of our own regenerative potential.</div>
      </div>

    <div class="page-paragraph">

      <p>As we saw in our chapter Nature's Fallacy, contrary to long held misconception, humans are not separate from 'nature'— rather, we are subset systems of the biosphere— and by extension, so too are our enterprises and economies. In this way, the masterful management of energy and matter by our Earthen kin, can provide us not just insight, but inspiration.  Indeed, as we strive to ensure that our modern enterprises are green we have much to learn from the ways of the salmon'— in particular, the way in which they manage their energy to enrich both themselves and the ecosystems of which they were a part. As we will see, the Salmon’s inward spiral of energy emulates the vortical pattern by which the Earth has greened the biosphere.  This pattern, which has long under-laid the ethics, traditions and language of kincentric cultures, provides the geometry for our second Earthen ethic.  With its help, we can make sense of the depletion wrought by the purposes for which our modern enterprises operate— and discern the requisite energetic structure for our enterprises that are keen to be green.</p>


      <p>Just as we move on from our old view of humans as separate and exceptional to the biosphere, so too must we move on from a similar view of our enterprises.  With an understanding of the inextricable immersion of our economies within the Earth’s systems, we can see the capital and currency that energize our enterprises from a fresh, planetary perspective.</p>

<!--Delete this para?-->

      <p id="59-up">Just like organisms and ecosystems, our enterprises and economies are energy systems that circulate the transmuted energy of the sun.  As each circulate energy, all operate as subset systems of the biosphere and share important parallels.1.  As each circulate energy, all operate as subset systems of the biosphere and share important parallels.<a href="#footnotes">⁵⁹</a>  Whereas an organism manages energy in the form of proteins, fats and carbohydrates, an enterprise manages assets, capital and currency.  Whereas an organism manages its give and take of nutrients over seasonal cycles, an enterprises manages its revenues and expenses over fiscal cycles.  Whether organism or enterprise, ecology or economy, as their cycles spin, their particular give and take of energy creates a pattern all their own—  especially in the inclination of their cycles.</p>



      <p>Whereas an organism manages energy in the form of proteins, fats and carbohydrates, an enterprise manages assets, capital and currency.  Whereas an organism manages its give and take of nutrients over seasonal cycles, an enterprises manages its revenues and expenses over fiscal cycles.  Whether organism or enterprise, as their processes spin, their particular give and take of energy creates a pattern all their own— especially in the inclination of their cycles.</p>

      <p id="60-up">As we saw in our last chapter, cyclic repetitions always incline in one direction or another, spiraling inward or outward; tending towards either depletion or enrichment<a href="#footnotes">⁶⁰</a>.  In order to emulate the enriching inclinations of organisms like the salmon, our enterprises must embody the same cyclical pattern— a spiral geometry that is rooted in the cosmological character of the Earth.</p>
      
      <p>To understand the underlying Earthen pattern of energy management, we must return once again to our planet's primordial origins.</p>

     <p id="61-up">Over the last four billion years of our planet's unfolding, the energy of the Sun's relentless blaze coursed through the Earth's cycles of geology, ocean and atmosphere. Driven by the rigid dictates of thermodynamics and guided by Earth's unique cosmological character, cycles unfurled that ever better dissipated the Sun's energy. Configurations of matter organically emerged that gathered, converted, stored, then dispersed energy ever outwards towards equilibrium.<a href="#footnotes">⁶⁰</a></p>

     <p>Soon the sun’s shine was being stored in complex, energy-dense molecules such as fats, proteins and carbohydrates that were interchangeable among cellular systems. As one organism lived and died, it was consumed by others and the energy embodied within its nutrients was passed on. As organisms gained the energy of those before them, they reproduced and proliferated. In this way, each cycle of life steadily spun its nutrient energy outwards to other organisms all across the planet’s surface.</p>

     <p>With countless life cycles spinning, collectives of organisms became systems unto themselves.  These systems of systems then spun their energy upwards again. From organism to ecosystem, from ecosystem to biome, energy was spiraled ever outwards towards the enrichment of all.</p>

     <p>And the biosphere blossomed.</p>

     <p>Looking closely at the life cycle of the salmon, we can see that their pattern is a magnificent reflection of the Earth’s.</p>

     <p>Just as the Earth’s accumulation of solar energy powers its planetary processes, the salmon’s steady accumulation of nutrient energy powers its life process. As it eats, nutrient energy is gathered and converted into the fish's fats and proteins while carbohydrates power its swim. Then, just as the cycles of the Earth disperse energy out to all, as the salmon are preyed upon and consumed, their accumulated nutrients are spun outwards to their ecosystem.</p>

     <p>In the end, a batch of Salmon distribute far more nutrients out to their ecosystem than they keep for themselves.  In fact, this ratio of distribution is precisely what makes the salmon so exceptional.  From a single batch of 2000 to 5200 eggs the resulting salmon can accumulate a biomass of several tons.  Yet at the end of their cycle only 20-50 salmon return to spawn, leaving only several kilograms of eggs for next cycle to begin.1 </p>

     <p>Not only does this contribute to a common home for many creatures to thrive, the spiral continually optimizes the conditions for their own subsequent generations.  In this way, the salmon proliferated in rivers up and down the North Pacific coast, contributing to the enrichment of rivers, forests and human cultures over the last twelve thousand years.1 </p>

     <p>Today, as we focus our efforts on reducing the ecological harm of our modern enterprises, we often forget that we too are organisms capable of contribution.</p>

     <p>As we saw earlier, we humans have not only lived on America’s Pacific Northwest Coast since the last ice age, we too played a key role in the ecological enrichment of the continent.</p>

     <p>Nations such as the Haida, Dakelh, and the Wetʼsuwetʼen, among many others, are renowned for the ecological vitality of the lands they have long presided over.  They have lived side by side the salmon for countless generations– and learned from them.  Seeing the salmon as ecological elders, they wove the salmon's dispersion lessons into the stories, morals and languages of their culture.</p>

     <p id ="62-up">In Haida stories, the Salmon were seen as a type of people.  They taught important lessons about respecting one another.  In particular, that the bones of the Salmon were always to be dispersed back to the rivers just as the Salmon’s bodies were to be dispersed among the community.</p>

     <p>In Wetʼsuwetʼen culture, this ethic of dispersion was codified in tradition.  The first Salmon caught of the season would be shared with every member of the community, meticulously ensuring that every morsel was consumed and each bone returned to the water.</p>

     <p>In the Dakelh culture, dispersion was embodied in their Carrier language. Grammatically, it is impossible to speak of 'my salmon' only of 'our salmon'.1  </p>

     <p>In the deep resonance in the distributive ways of the Igorots, Haida, Wet’su’weten, Babine the Salmon and the the Earth, we find our second Earth ethic. </p>

     <p>For the Haida, Dakelh, and the Wetʼsuwetʼen an ethic of take only what is needed, and distribute what is taken underlaid their ways of life– making no distinction between economy and ecology.  Just as we saw in the Igorot Ayyew ethos, honor and respect were gained not by wealth itself, but by its flow; not by how much was gathered, but by how much was given back to both people and the land.</p>

    <p>In the deep resonance in the distributive ways of the Igorots, Haida, Wetʼsuwetʼen, Dakelh, the Salmon and the Earth, we find our second Earth ethic. </p>

    <p>Just as the Earth tended its cycles towards the spin of energy outwards to the benefit of all, so too must we intend and achieve with our own. Only when the intention and the result of our cyclical processes is the net-outwards distribution of energy, is this Earthen ethic met.  Only then can our enterprises be considered an ecological contribution— and green.</p>

    <p>As we strive to ensure our modern enterprises are green, the second Earthen ethic shows us that their pattern of energy is key. </p>

    <p>When it comes to our enterprises, their pattern of energy management is determined by the purpose for which the enterprise is established.  The for-what of an enterprise determines how and why it receives revenues and expends expenses— as well as the how and why of its ecological give and take.</p>

    <p>While most enterprises operate with the purpose of meeting human wants and needs— such as for the provision of products and for the delivery of services— often modern enterprises are structured for a deeper reason.
     </p>

     <p>Certain enterprises are established by their owners for the purpose of profit: generating more energy than they give back.  This excess energy, although often sourced ecologically, is defined strictly in financial terms. While these for-profit enterprises may provide products, services and even ecological benefits, their structure dictates that their financial surpluses are directed to their owners (or shareholders as the case may be) at the end of each financial cycle. The result is a process of accumulation that over many financial cycles, steadily depletes the ecological and social systems of which it is part.</p>

     <p>In this way, the energetic inclination of a for-profit enterprise, spins in opposition to the pattern of the Earth.  No matter how green-intentioned, no matter how green its short-term impacts may seem, its management of energy is the very opposite of ecological contribution.</p>

     <p>Of course, not all modern enterprises operate for-profit. </p>

     <p>Today, more and more enterprises are aware of the depleting dynamic of profit in-and-of-itself.  In order to contribute to their social and ecological environment, many enterprises choose a ‘not-for-profit’ energetic structure.  These enterprises strive to return all their revenues back to the pursuit of their social or ecological purpose.</p>

     <p>However, insofar as a not-for-profit enterprise remains fully immersed within the paradigm of profit— where energy is accounted for strictly as revenues and expenses— their energetic structure is insufficient to be green.  </p>

     <p>While an enterprise may ensure that all its revenues go out to its social or ecological purpose, insofar as its energy is accounted for solely in financial terms, it will fail to account for its ecological give and take.  In particular: its give and take of carbon, its support or depletion of biodiversity and its raising or lowering of awareness (our next three Earthen ethics).   In this way, a not-for-profit enterprise may return all of its financial energy back to its purpose, yet still be complicit in the systematic depletion of the ecosystems, biomes and the biosphere of which it is part.</p>

     <p>In other words, without both not-for-profit and net-green intentions— and an accounting of both— an enterprise cannot be green.   </p>

     <p>While in the short-term, an enterprise may sequester much carbon, plant many trees and support many species; without an accounting thereof, one cannot be certain, whether these impacts are in fact a net-contribution.  It could well be that more carbon is emitted, more trees are cut, and more species are depleted to achieve these results!  </p>

     <p>However, the path to net-green has never been clearer.  </p>

     <p>Just as a shoal of salmon direct all their energy towards their out-to-all journey home, our green-intentioned enterprises must direct all their energy towards an out-to-all-purpose.</p>


     <p>Learning from kincentric cultures, such a purpose must embrace both the social and the ecological, recognizing that both, from the perspective of the Earth, are one and the same. This dual not-for-profit and net-green intention, must be declared and accounted for— ensuring that all the enterprises revenues go towards this for-Earth purpose and that all the other Earthen ethics are fully met.</p>

     <p>That said, the outwards spiral of energy is only half of the Earth's spiral pattern of enrichment. </p>

     <p>There is yet the matter... of our matter.</p>

     <p>Our next Earthen ethic.</p>

     <br><br>

  
    </div><!--closes page text content-->

<!--FOOTNOTES SECTION-->

    <div class="footnote-section">

      <div id="line" style="border-style: solid; border-width: 1px; margin-bottom: 30px; width:70%; text-align:left;"></div>

      <p id="footnotes" style="font-variant-caps: all-petite-caps; color:grey">Chapter Footnotes</p>
      
        <a href="#58-up" class="footnote">   
        <div class="footnote-number">58.</div>
        <div class="footnote-text">For an an account of the Igorots remarkable ecological synchrony see: William Henry Scott, (1959) <i>Some Calendars of Northern Luzon</i>, American Anthropologist 60(3):563 - 570 </div>
        </a>

        <a href="#59-up" class="footnote">   
        <div class="footnote-number">59.</div>
        <div class="footnote-text">Entropy research by theoretical physicists posit a pattern of adaptive dissipation in the way matter organizes itself in the presence of sustained energy inputs. Meanwhile, parallel breakthroughs in cosmological epistemology help make sense of the Earth’s unfolding kinetic character. </div>
        </a>

        <a href="#60-up" class="footnote">   
        <div class="footnote-number">60.</div>
        <div class="footnote-text">“The earth is more like an eddy in a river through which flows of matter continuously stream. It is replenished and depleted in a vortical cosmic dance. — Thomas Nail, (2021) <i>A Theory of the Earth</i>
        </div>
        </a>

        <a href="#55-up" class="footnote">   
        <div class="footnote-number">61.</div>
        <div class="footnote-text">Jeremy L. England et al., <i>Dissipative adaptation in driven self-assembly</i>, (Nature Nanotechnology, 2015)  
        </div>
        </a>

        <a href="#56-up" class="footnote">   
        <div class="footnote-number">62.</div>
        <div class="footnote-text">The term ‘technical nutrient’ was first proposed by William McDonough in a theory of circular design that embodies the conceptual geometric problem we highlight here.  See: William McDonough, Michael Braungart (2002), <i>Cradle to Cradle - Remaking the Way We Make Things</i>, North Point Press.   
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
            <div class="next-sec">Next chapter:</div>
            <div class="sec-name"><i>3 | The Mollusk's Means</i></div>
        </div>

      </div>
    

      <div class="footer-right">
    
        <a href="unpublished.php"><div class="next-button">Next ➔</div></a>

      </div>
    </div>
  </div>

  <?php require_once ("includes/chap-footer.php");?>


</div>


</body>
</html>
