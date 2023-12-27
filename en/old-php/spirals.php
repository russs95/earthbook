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
$page_number = "12";
$page_title = "Cycles that Spiral | Book II |Tratatus Ayyew";?>

<head>


<?php require_once ("../header.php");?>


<!--META TAGS
Must be updated for each page-->

<meta property="article:modified_time" content="2023-28-21T09:14:13+00:00">
<meta name="keywords" content="igorots, ayyew, cycles, spirals, energy, matter, entropy, thermodynamics, jeremy england, pigs, fertilizer, rice paddy, terraces, hydrologic, linear, circular, circular design, circular economy, plastic, recycling, degrading, enriching, grey, green, gray,  linear vs circular, circular"> 
<meta name="description" content="Observe the way Earth tends its processes towards cycles that spiral.">


<meta name="twitter:label1" content="Est. reading time" />
<meta name="twitter:data1" content="12 minutes" /> 
	
<!-- Facebook Open Graph Tags for social sharing-->
<meta property="og:title"         content="Cycles that Spiral | Book II |Tratatus Ayyew">
<meta property="og:description"   content="Earth tends its processes towards cycles that spiral."/>


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

<!--TOUR-CURTAIN-->
<tour-curtain></tour-curtain>
<subscription-curtain></subscription-curtain>


  <div id="underlayer">

    <div id="top"></div>

  <!--HEADER NAVBAR-->
  <header-component></header-component>

  <div id="ct-chapter-top">
  <button type=button id="ct-tc-menu" onclick="openContents()" style="background-color:var(--header-footer);"  aria-label="Open Table of Contents"></button>
  <div class="ct-holder" style="cursor:pointer;" onclick="openContents()">
        <div id="ct-chapter-title">Cycles that Spiral</div>   
        <div id="ct-book-title">Tractatus Ayyew</div>
        <div id="ct-chap-location">Earthen Principle No. 1</div>
        <div id="ct-word-count"><i>1697 words | Book II</i></div>
      </div>
  </div>

  <?php require_once ("includes/eco-curtain.php");?>

<!-- Page Title Section-->

  <div id="ct-chapt-graphic" class="background-8">
    <div class="ct-chapter-quote">
      <span style="background-color:var(--nav-bar-accent);
 padding:0.1em 0.2em;">“Observe the way Earth tends its processes towards cycles that spiral.”</span>
    </div>
    <div class="ct-quote-source">
     ― Earthen Ethic No.1
    </div>
  </div>

  <div id="up-arrow"></div>


  <div id="ct-main">


<!-- MAIN TEXT CONTENT of the Page
  For footnotes, use these numbers:  ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ⁶⁰  “ ” ³¹⁰ ²⁶ ⁴⁷ ⁵⁴
-->

<div class="page-paragraph">
    <p id="58-up"><i>
      THE RUGGED AND THICKLY FORESTED MOUNTAINS OF NORTHERN LUZON have long been the home of the Igorot people.  For untold generations, their society has spun with the cycles of the river, fields and forest in which their communities are neatly nestled.  Each new year and the planting of rice begins with the arrival of the migratory kilin bird. Then, once the crop has turned gold and the kilin have flown back to the forest — the harvest. And then… always a little more. For after the rice has been taken home to dry, it is time for a ritual as old as the harvest itself. One by one, rocks are gathered up from the river to shore up the sides of the field. Stone by stone, the paddy is improved to better capture and disperse the flow of rain down the hillside. Season by season, the garden becomes not just a better home for rice, but a better common home for crabs, frogs, snails, mud fish and more.  Over the generations the soil's fertility increased and the harvests grew in yield.  Igorot society thrived. Rivers remained clean and clear. The forests were respected and the kilin would always return. And then the next cycle would spin —  always a little greener than before.
      
     <a href="#footnotes" title="For an an account of the Igorots remarkable ecological synchrony with the living world around them see: William Henry Scott, Some Calendars of Northern Luzon (American Anthropologist, 1959) 60(3):563 - 570" onclick="openFootnotes(), guidedTour()">⁵⁸</a> </i>
     </p></div>
    <br><br>
     <div id="line" style="margin-bottom: 30px;"></div>
<br><br>
    <div>
    <div class="lead-page-paragraph">
      TODAY as we seek to green our modern ways, we have much to learn from the way the Igorots managed their energy and matter.  At the heart of their cyclocentric culture is an ancient ecological ethos that can help us make sense of the latest breakthroughs in thermodynamic theory and planetary science.  As we shall see, both the ways of Earth and  Igorots share a geometric resonance.   Both tend their processes towards cycles that spiral and enrich. This vortical pattern underlies not only how the Igorots steadily enriched their ecosystem— but also the way our once barren planet greened. This first aspect of Earth’s cosmological character, shows us the geometric shortcomings of our modern linear and circular processes and guides our green way forward.</div>
      </div>

    <div class="page-paragraph">

      <p>To begin, we must return one more time to the origins of our solar system.</p>


      <p>As we saw in <a href="stellar.html">Earth’s Stellar Story</a>, the planets of the early solar system formed over 5 billion years ago. As each planet coalesced out of drifting stellar debris, it gained a kinetic pattern of energy and matter all its own. To this very moment, each planet’s unique combination of elements, chemistry, orbit, moons, magnetosphere and more continues to unfold. Much as a culture defines and guides all aspects of the life of its people, this cosmological character permeates all a planet’s processes. In particular those that repeat: its cycles — tending them in patterns that are unique to each planet.</p>

<!--Delete this para?-->

      <p id="59-up">In this way, our solar neighborhood has come to be. As Venus, Mars, Earth and all the other planets spun around the Sun, they absorbed and adapted to a never ending torrent of solar energy. Like rain pouring down a hillside into streams, rivers and rapids, the sun’s energy shone down upon each planet’s surface spilling into planetary cycles —  atmospheric flows, ocean currents, tectonic shifts. As the planet’s matter (soil, liquids, gasses) was spun, the resulting cycles were driven by the rigid dictates of thermodynamics.  In ways unique to each planet, the sun’s ever arriving energy was dissipated.<a href="#footnotes" onclick="openFootnotes()">⁵⁹</a></p>



      <p>Over the eons, the cycles on each planet unfolded and the character of each was expressed.</p>

      <p id="60-up">On Earth, one entropic adaptation after another began to accumulate. Just as the Igorots would shore up their terrace walls with new stones every season, each Earthen cycle tended infinitesimally towards an ever improved configuration of matter to capture energy— adding an atom here, a chemical bond there. Like rice terraces capturing, fracturing and spreading out the rain’s downward flow, Earth’s cycles did the same. As one cycle fractured into a thousand, and that into a million more, life began to unfold. Steadily, life-cycles adapted their spin towards ever more concentrated configurations of matter and ever better dissipations of energy.<a href="#footnotes" onclick="openFootnotes()">⁶⁰</a></p>
      
      <p>And, Earth greened.</p>

     <p id="61-up">While, today’s contemporary physicists and philosophers struggle to articulate the connection of life’s emergence within a thermodynamic frame<a href="#footnotes" title="Entropy research by theoretical physicists posit a pattern of adaptive dissipation in the way matter organizes itself in the presence of sustained energy inputs. Meanwhile, parallel breakthroughs in cosmological epistemology help make sense of Earth’s unfolding kinetic character." onclick="openFootnotes()">⁶¹</a>, the Igorots have a single, precise term– and with it, an ecological ethos that governs their cycle-centric culture.</p>

     <p>All aspects of Igorot life and culture are guided by the virtue of <i>ayyew</i><a href="#footnotes" title="See Banayan's work developing a contempory defintion of the concept of Ayyew: Banayan Angway, Cordillera Administrative Region Indigenous Peoples Education Curriculum K-12</i>(Bontoc, Mountain Prov., CAR; Philippines Department of Education, 2014)." onclick="openFootnotes()">³</a>. Men, women, households and communities are admired and respected to the degree in which they embody the principle. Ayyew means to not just just to be in sync with a cycle, but to tend to its spin.</p>

     <p>Children first learn the concept of ayyew at meal time. It is ayyew to finish every grain of rice on one’s plate. Not because it is a waste — rather, because it is a cycle’s crescendo. The last grain represents the culmination of one cycle and the beginning of the next — and an opportunity for a little more. As one cycle ends and another begins, there lies the chance to grow strong so that one can contribute to it: to sow the next seedling, to help with the next harvest, to add a stone to the garden’s wall.</p>

     <p>When there are leftovers from a process (burned rice, banana peels, grass cuttings, etc.) ayyew guides their transition to a subsequent cycle. Rather than simply compost the organic matter, it is more respectable, more ayyew, to feed them to the neighborhood pigs. While both methods lead to fertilizer, the resulting manure is far more concentrated in carbon and microorganisms, making it more effective at spreading over fields and gardens to disperse its nutrients out to the ecosystem at large.</p>

     <p>Finally, ayyew guides the Igorot’s relations with the land. While the destruction of the forest is despised (how can one achieve any richer system of cycling?) the long labor of transitioning a grassy slope to a bio-diverse and fertile ecosystem is admired above all. Rather than the rush of rain down the hillside, instead it is caught in a fractal of zigs and zags. This way the downward flow of the hydrologic cycle (rain-river-evaporation-and-rain-again) is dispersed outwards and ever more equitably throughout the hillside ecosystem. Each terrace is thus enriched— but ‘riches’ not just in yield.   Most especially riches of the planetary kind: ecological stability, resiliency, diversity, vitality and abundance — the very same characteristics that Earth unfurled on our once barren planet.</p>

     <p>Within the deep resonance of the Ayyew ethos and Earth’s cosmological character, lies our first Earthen ethic.</p>

     <p>As we strive to ensure that our human enterprises are green, Earth shows us the way forward. Just as Earth tended its process towards cycles that enrich, so too must we intend with our own. Only when our human processes intend and result in cycles that spiral, can they be considered ecological contributions —  and green.</p>

     <p>Today, we are realizing that our modern processes all too often result in the opposite: greying, ecological depletion. Perhaps, nowhere is this better observed than in our use of plastic. </p>

     <p>In an Igorot community the carbon-based molecules of a grain rice can be cycled from garden, to human, to pig, and back to the garden again indefinitely. Although plastic molecules are also carbon-based, its matter all too often has a one way destination. ‘Single-use’ and ‘disposable’ plastics entirely lack a plan for their circulation. Such linear products and processes are defined by linear goals: incineration, dumping, combustion, etc. In so far as these processes fail to plan for their subsequent cycle, they fail to embody the cyclical ways of Earth.</p>

     <p>To discern the color of our modern processes we must thus first ask about its end: is there an intention for subsequent cycles once the first is complete? Only when our processes have a plan for their next use, and the subsequent ones after that, can they begin to be considered ecological contributions.</p>

     <p>So what then of our circular processes— are they sufficient to be green?</p>

     <p id ="62-up">Today, many products are engineered to be circular — their next life is planned. In this way, PET bottles, carpets and casings are often designed so that when their first use comes to an end they can be recycled into something new. The materials of these products are considered indefinitely reusable ‘technical nutrients’<a href="#footnotes" title="The term ‘technical nutrient’ was first proposed by William McDonough in a theory of circular design that embodies the conceptual geometric problem we highlight here.  See: William McDonough, Michael Braungart (2002), Cradle to Cradle - Remaking the Way We Make Things, North Point Press." onclick="openFootnotes()">⁶²</a>. In this way, modern processes strive to transition to a ‘circular economy’.</p>

     <p>Insofar as such processes contain a plan for the next life of the product, their circularity is an important step towards following Earth’s cyclical ways.</p>

     <p>However, circularity is in and of itself is insufficient.</p>

     <p>After all, over the eons our neighboring planets spun in perfect circles about the sun— yet they did not green.  No matter how much solar energy arrived, Venusian cycles did fracture and cascade. No matter how sustained Mercury's spin, its matter did not spiral into ever more concentrated and complex configurations. No matter how perfect their planetary circles, systemic enrichment failed to take hold.</p>

     <p>As we have seen in the ways of Earth and the Igorots, ecological enrichment requires a tended shift— <i>always something more</i>. Another stone added to the terrace wall. Another atom of carbon added to a protein molecule. While it may be an infinitesimal addition in itself, over an indefinite series of cycles the result is, quite literally, a world of difference.  Indeed, it is the difference between depletion and enrichment, grey and green.</p>

    <p>As such, a plastic bottle may be indefinitely reusable, an economy circular, a company sustainable — yet like the surfaces of Venus and Mars, result in desolation.</p>

    <p>For in the unfolding cyclical systems of the biosphere, there are no perfect circles — only cycles that spiral outwards or inwards, contributing or degrading, enriching or depleting.</p>

    <p>As we strive to ensure our enterprises are green, not only must we plan for the subsequent cycles of our material and energetic processes, we must ensure that each iteration enriches.</p>

    <p>The requisite spiral geometry clear, we can now delve deeper into the vortical character of enrichment itself. In particular, the <i>outwards spin of energy</i> and the <i>inwards spin of our matter</i>—  our next two Earthen ethics.</p>
     </p>
     <br><br><br>
  
    
  </div><!--closes page text content, then loads page curtains:-->

<?php require_once ("includes/eco-curtain.php");?>

<?php require_once ("includes/comments.php");?>

<?php require_once ("includes/search.php");?>


<!--FOOTNOTES SECTION-->

  <div class="footnote-section" style="z-index:8;">

    <div class="footnote-line" style="border-style: dotted; border-color: grey; border-width: 1px; margin-bottom: 20px; width:100%; text-align:left;"></div>

    <div id="footnotes" style="cursor:pointer;display:flex;font-variant-caps: all-petite-caps; color:grey;" onclick="openFootnotesFooter()">
          
      <div id="footnotes-arrow"></div>
      
      <div class="footnotes-title">Chapter Footnotes</div>
    
    </div>

    <div id="footer-reveal-container" style="height:200px;transition:0.4s;" >

      <div id="footnotes-reveal" style="height:200px; overflow-y: clip; transition:0.4s;margin-bottom:0px;transition-delay: 0.4s;">
      
        <a href="#58-up" class="footnote">   
        <div class="footnote-number">58.</div>
        <div class="footnote-text">For an an account of the Igorots remarkable ecological synchrony with the cycles of the living world around them: William Henry Scott, (1959) <i>Some Calendars of Northern Luzon</i>, American Anthropologist 60(3):563 - 570 </div>
        </a>

        <a href="#59-up" class="footnote">   
        <div class="footnote-number">59.</div>
        <div class="footnote-text">Entropy research by theoretical physicists posit a pattern of adaptive dissipation in the way matter organizes itself in the presence of sustained energy inputs. Meanwhile, parallel breakthroughs in cosmological epistemology help make sense of Earth’s unfolding kinetic character. </div>
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

        <br><br><br><br>




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
            <div class="sec-name"><i>2 | The Salmon's Spin</i></div>
        </div>

      </div>
    

      <div class="footer-right">
    
        <a href="energy.php" title="Go to the next chapter" aria-label="Go to the next chapter"><div class="next-button">Next ➔</div></a>

</div>
</div>

    
<?php require_once ("includes/chapTER-footer.php");?>


</div>
</body>
</html>



