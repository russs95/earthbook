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

<title>Kindred Relations | Tratatus Ayyew - Earthbook</title>
<meta name="keywords" content="Kincentric ecology, kincentricism, kin, kindred relations, Enqrique Salmon, ecological contribution, first nations, metaphisics, cosmological character, planetary patterns, pattern, plastic, carbon emissions, petro-capital economy, human nature, nature of plastic, "> 
<meta name="description" content="We have much to learn from those cultures that, rather than deplete ecosystems, presided over their systematic enrichment.">


<meta name="twitter:label1" content="Est. reading time" />
<meta name="twitter:data1" content="8 minutes" /> 
	
<!-- Facebook Open Graph Tags for social sharing-->
<meta property="og:title"         content="Kindred Relations | Tratatus Ayyew - Earthbook.">
<meta property="og:description"   content="We have much to learn from those cultures that, rather than deplete ecosystems, presided over their systematic enrichment."/>


<style>


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

  <a id="top"></a>

  <!--HEADER NAVBAR-->
  <header-component></header-component>

  <div id="ct-chapter-top">
      <div id="ct-tc-menu" onclick="openContents()"></div>
      <div class="ct-holder" style="cursor:pointer;" onclick="openContents()">
        <div id="ct-chapter-title">Kindred Relations</div>   
        <div id="ct-book-title">Tractatus Ayyew</div>
        <div id="ct-chap-location">Book One | Chapter Five</div>
        <div id="ct-word-count"><i>1,508 words</i></div>
      </div>
  </div>

  <?php require_once ("includes/eco-curtain.php");?>

<!-- Page Title Section-->

  <div id="ct-chapt-graphic" class="background-5"></div>

  <div id="up-arrow"></div>

  <div id="ct-main">


<!-- MAIN TEXT CONTENT of the Page
  For footnotes, use these numbers:  ?? ?? ?? ??? ??? ??? ??? ??? ??? ???  ??? ??? ??????? ?????
-->

     <div class="lead-page-paragraph">
      OVER THE COURSE OF HUMAN HISTORY, certain nations have excelled far more than others at the art of ecological integration.  While some societies steadily depleted the ecosystems of which they were part, these societies steadily enriched them, increasing their synchrony with the cycles of life around them.  As we strive to discern for ourselves what green should really mean, we have much to learn from them.  In particular the recognition of the way in which they themselves learned??? their way of knowing the plants and animals around them as kin, elders and teachers.  
     </div>

    <div class="page-paragraph">

    <p>While great greening societies have thrived around the planet, there is no more dramatic an example than the nations that first inhabited the Americas.</p>

      <p id="32">Five hundred years ago, prior to the cataclysmic arrival of germs, animals and humans from Europe, the Americas were then home to hundreds of thriving, independent and prosperous nations.<a href="#footnotes">????</a>  Contemporary estimates of the population of the continents at the time range in the tens of millions to over one hundred million<a href="#footnotes">????</a> with many towns and cities ranging in size from tens of thousands to over a hundred thousand inhabitants.<a href="#footnotes">?????</a></p>


      <p>Like all nations and cities, such concentrations of humanity had a significant impact on the ecosystems and continental biomes of which they were a part.</p>

      <p id="35-up">Having settled the continent over ten thousand years ago, these nations had long acquired sophisticated hunting, fishing and gathering technologies. Also common was the use of fire to effect huge swaths of land.  In all respects, these nations were more than capable of over-hunting, overfishing, over-gathering<a href="#footnotes">?????</a> and depleting the carrying capacities of the ecosystems of which they depended.   </p>

      <p>However, over-consumption and exploitation did not occur.  Nor the depletion of the continent???s ecosystems.</p>

      <p>In fact, just the opposite.</p>

      <p>In 1492, as the first Europeans arrived on the shores of a very old ???new world??? they were shocked not only by the vastly differing societies and cultures they encountered, but so too by the vastly different fauna and flora.</p>

      <p>And their abundance.</p>

      <p>From South America to North, explorers recorded dazzled accounts of the ecological vitality they observed: Rivers overflowing with fish; grasslands filled with countless grazing beasts; forests full of animals, birds, and trees of colossal size;  coastal shoals overflowing with marine life.</p>

      <p>Alas, the newcomers lacked the conceptual ability to truly see what they were seeing.  Seeped a culture in which food largely came from single crops and domesticated animals, the explorers and colonists, mistook the abundant ecosystems they encountered to be the work of ???nature??? alone:</p>
      
      <div class="quote"><p id="36">??????the country before us exhibited every thing that bounteous nature could be expected to draw into one point of view.  As we had no reason to imagine that this country had ever been indebted for any of its decorations to the hand of man, I could not possibly believe that any uncultivated country had ever been discovered exhibiting so rich a picture.???</p></div>

      <p style="text-align:right;font-size:1em; margin-top:-10px; margin-bottom:20px">??? Captain Vancouver???s observations of the Pacific Northwest Coast in 1792<a href="#footnotes">?????</a></p>
      

     <p>Today, we know now that this inference was gravely mistaken.  Modern research has confirmed what the descendants of these nations have known all along.  The thriving ecosystems of the time were not the result of a lack of human participation, but rather the consequence of it.  ??</p>

     <p id="37">Where these nations foraged, forests are demonstrably more abundant and biodiverse than adjacent un-managed ecosystems<a href="#footnotes">?????</a>.  Where they fished, the rivers are more abundant than others<a href="#footnotes">?????</a>.  Where they sourced their shellfish and clams, the shoals host more species than adjacent un-cultivated, or ???natural???, ecosystems<a href="#footnotes">?????</a>.  The very manner that these societies interacted with an ecosystem was instrumental to its exceptional flourishing.  Even the Amazon rain-forest, long seen as the paragon of wild ???bounteous nature???, has been revealed to have been the site of pre-Columbian agriculture, gardens, towns and cities.<a href="#footnotes">??????</a></p>

     <p id="41">Significantly, the various cultural structures by which these nations came to integrate with their ecosystems were just as diverse as the ecosystems themselves.  While some were patriarchal, others were matriarchal; while some were kingdoms, others were confederacies; while some sought peace, others sought war.<a href="#footnotes">?????</a></p>

     <p id="42">However, despite the wide diversity in culture and politics, beneath it all lay a relatively consistent foundational view of themselves and the world??? especially as compared to that of the arriving Europeans<a href="#footnotes">?????</a>. In much the same way that the disparate nations of Europe shared a continental and cultural provenance, so too did the nations of the Americas. Consequently, just as the ideas of ancient Greece and Rome gave nations as disparate as England and Russia, Finland and France, a shared underlying view of ???man and nature???, so too did the first nations of the Americas have their own underlying view of the world.</p>

     <p id="43">Across the Americas, nations, clans and tribes shared an underlying metaphysics in which humans, animals and plants were understood as members of a common family.  For these nations all organisms were equally integral parts of the living land??? <i>a community of kindred relations sharing ancestry and origins</i>.<a href="#footnotes">?????</a></p>

     <p id="44">From this 'kincentric' world view, animals and plants were respected as kin: elder brothers or sisters, grandmothers or grandfathers.<a href="#footnotes">??????</a>  Then, just as one learns from a distinguished elder, these cultures paid special attention to those particularly distinguished organisms around them. Beings that in elegance, ingenuity and beauty had magnificently mastered their ecological integration.</p>

     <p>From a scientific perspective, we can today appreciate the depth of their world view.</p>

     <p>Just as brothers, sisters, aunts and uncles are parts of a family because of their shared ancestry, so too are plants, insects, animals, and humans parts of an ecological family connected by lineages that reach far back into time. ??Just as a son, parent and grandparent are subsets of a family system so too are humans, plants and animals all subsets systems of the ecosystems of which they are part.</p> 
        
     <p>In this way, just as younger and elder family members differ in their accumulation of wisdom and mastery, so too do members of an ecosystem vary in the adaption and integration to it.  From this kincentric view, plants and animals, having had millions of years longer than humans to integrate into a particular ecosystem have invaluable systemic adaptations for humans to learn from.</p>

     <p>Indeed, a salmon and an eagle, an oyster and a pine tree, all embody the culmination of hundreds of millions of years of behavioral and evolutionary trial and error??? the result of innumerable interactions, adaptations and optimizations to integrate within a particular environment. In comparison, the first humans to settle in the Americas (only a few tens of thousands of years ago!) were newcomers??? ecological younglings who had much to learn from their resident elders.</p>

     <p>And so they did.</p>

     <p>As early Americans observed the way in which the lives of plants and animals synced with the cycles of an ecosystem, tendencies were noted, characters observed and virtues discerned.  From the cooperation of crows to the diligence of a deer, from the strength of a bear to the endurance of an elk, stories about particular creature and the virtue that it most illuminated, were passed down over the generations.</p>

     <p id="45">Often, a tribe, resonating with the character of a particular creature would adopt it as their representative and guide. Almost all North American first nations contained clans that took an animal as their totem.<a href="#footnotes">??????</a> Through stories and myths, they were inspired by the animal's ecological example to lay out their clan???s principal values and ethics.</p>

     <p id="46">So grounded in values and virtues, kincentric societies were able to weave ecological mastery into the fabric of their language, grammar and values.<a href="#footnotes">??????</a> In so doing they were able to by-pass the tedious, million-year process of evolutionary trial and error and dramatically fast forward their ecological awareness, integration and collective well-being.  In this way, their cultures came to sync with the cycles of the creatures they admired most??? the migration of geese, the return of salmon, the coming and going of whales and elk.</p>

     <p>And precisely because these life-cycles continued to thrive, so could they continue to learn from them.  </p>

     <p>In a spiral of ever deeper knowing, awareness and consciousness, kincentric cultures steadily enhanced the harmony of the ecosystems of which they were part. With the momentum of millennia of compounding insights, their way of knowing steadily led to an ecological understanding of unparalleled lucidity. ??Steadily, these societies were able to effectively co-create with plants and animals a common home for all to thrive.</p>

     <p>Today, in realizing the great green feats of these nations, in turn we can learn from them and follow their example.</p>

     <p>To do so, the recognition of the power and potential of kincentric knowing is requisite. </p>

     <p>Only then can we realize its absence in our modern way of seeing the world.</p>

     <p>And only then can we understand that this hole in our modern worldview is the result of a deep metaphysical mistake: an ancient error that has for too long destined all our endeavours and enterprises to deplete and degrade.</p>
     <br><br>

  
    </div><!--closes page text content-->

<!--FOOTNOTES SECTION-->

    <div class="footnote-section">

      <div id="line" style="border-style: solid; border-width: 1px; margin-bottom: 30px; width:70%; text-align:left;"></div>

      <p id="footnotes" style="font-variant-caps: all-petite-caps; color:grey">Chapter Footnotes</p>
      
        <a href="#32-up" class="footnote">   
        <div class="footnote-number">32.</div>
        <div class="footnote-text">This biological encounter, after hundreds of thousands of years of continental ecological separation, was to have a seismic impact on the biomes and civilizations of the Americas.  Diseases spread like wildfire ahead of European explorers killing 90-95% of human populations.  Only several years later, explorers encountering the decimated villages and cities made gravely inaccurate assumptions about the sparse human habitation they observed.  Their estimations of human population and ecological consequence were thus woefully low.   Population estimates weren???t rectified until centuries later by anthropologists such as Henry Dobyns.  See footnote #33.</div>
        </a>

        <a href="#33-up" class="footnote">   
        <div class="footnote-number">33.</div>
        <div class="footnote-text">Henry Dobyns estimated a 1492 population of the Americas ranging from 90.04-112.55 million inhabitants. Dobyns, Henry F., <i>An Appraisal of Techniques with a New Hemispheric Estimate</i>, (Current Anthropology, 1966) Issue 7, no. 4 : p395???416. </div>
        </a>

        <a href="#34-up" class="footnote">   
        <div class="footnote-number">34.</div>
        <div class="footnote-text">Charles C. Man provides a comprehensive survey of his field and academic research which has revealed Mesoamerican and North American population centers exceeding 100,000 prior to the arrival of Europeans ??Charles C. Man, <i>1491</i>, (Vintage Publishing, 2006).
        </div>
        </a>

        <a href="#35-up" class="footnote">   
        <div class="footnote-number">35.</div>
        <div class="footnote-text">???With their technology the people could have captured every fish, but that would have made no sense. ??River groups agreed to remove traps periodically to allow enough fish upstream to spawn and keep the run healthy. ??Spaces between weir stakes were also calibrated to allow smaller fish to ascend unimpeded. ??The fishery was so well managed that when the settlers arrived it is estimated that returning salmon numbered in the millions.??? David M. Buerge, (2017), <i>Chief Seattle and the Town that Took his Name</i>, Sasquatch Books. Referencing: <i>The Salmon Weir on Green River in Western Washington</i>, Davidson Journal of Anthropology, Vol. 3 ???1, Summer, 1957 pp. 37???54.</div>
        </a>

        <a href="#36-up" class="footnote">   
        <div class="footnote-number" id="3-down">36.</div>
        <div class="footnote-text">George Vancouver, <i>A Voyage of Discovery to the North Pacific Ocean</i>, and Round the World, vol. 2 (London: G. G. and J. Robinson, Paternoster-Row; and J. Edwards, Pall-Mall, 1798), 220???28, 288???89. Chapter 4, 2nd of May 1792</div>
        </a>

        <a href="#37-up" class="footnote">   
        <div class="footnote-number" id="3-down">37.</div>
        <div class="footnote-text">???Patches of forest cleared and tended by indigenous communities but lost to time still show more food bounty for humans and animals than surrounding forests. [These] 'forest gardens??? show how Native land stewardship can outdo nature???, Gabriel Popkin, <i>Forest Gardens Show how native land stewardship can outdo nature</i>, (National Geographic: 2021)</div>
        </a>

        <a href="#37-up" class="footnote">   
        <div class="footnote-number" id="3-down">38.</div>
        <div class="footnote-text">???Persistence in the fishery [of salmon over the last 7,500 years] is not due simply to a lack of perturbation, but rather indicates resilience in the ecological???human system??? Campbell, S. K., and V. L. Butler, <i>Archaeological Evidence for Resilience of Pacific Northwest Salmon Populations and the Socioecological System over the last ~7,500 years</i>, (Ecology & Science, 2021) Vol. 15, No. 1, Art. 17</div>
        </a>


        <a href="#37-up" class="footnote">   
        <div class="footnote-number" id="3-down">39.</div>
        <div class="footnote-text">A. Groesbeck AS, Rowell K, Lepofsky D, Salomon AK, <i>Ancient Clam Gardens Increased Shellfish Production: Adaptive Strategies from the Past Can Inform Food Security Today</i>. (PLoS ONE, 2014) 9(3): e91235.</div>
        </a>

        <a href="#40-up" class="footnote">   
        <div class="footnote-number" id="3-down">40.</div>
        <div class="footnote-text">???They practiced agriculture here [in the Amazon] for centuries??? but instead of destroying the soil, they improved it, and that is something we don???t know how to do today...in tropical soils??? Charles C. Man, <i>1491</i>, (Vintage Publishing, 2006).  Chapter 8, quoting Bruno Glaser, Institute of Soil Science and Social Geography, University of Bayreuth, Germany.</div>
        </a>

        <a href="#41-up" class="footnote">   
        <div class="footnote-number" id="3-down">41.</div>
        <div class="footnote-text">The prevalence of a vast disparity of social structures and political systems throughout the pre-Columbian Americas (and the rest of the world) is the main argument of archaeologist and anthropologist Graeber and Wengrow.  See: David Graeber, David Wengrow, <i>The Dawn of Everything: A New History of Humanity</i>, (Signal Publishing, 2021).</div>
        </a>

        <a href="#42-up" class="footnote">   
        <div class="footnote-number" id="3-down">42.</div>
        <div class="footnote-text">For an in-depth overview of commonalities in native american spirituality see: Jack D. Forbes, <i>Indigenous Americans: Spirituality and Ecos</i>, (D??dalus, 2021).</div>
        </a>

        <a href="#43-up" class="footnote">   
        <div class="footnote-number" id="3-down">43.</div>
        <div class="footnote-text">"[it is] a view that has parallels in many other indigenous groups... a cosmology in which humans are part of a 'community of beings' within the ecological system." Berkes, F., Sacred Ecology. Third edition. ??(New York: Routledge 2012) Chapter 5, p.105.</div>
        </a>

        <a href="#43-up" class="footnote">   
        <div class="footnote-number" id="3-down">44.</div>
        <div class="footnote-text">We are applying Enrique Salmon???s term ???kincentric??? to describes cultures that relate to the plants and animals with which they share an ecosystem as kin: ???Indigenous cultural models of nature include humans as one aspect of the complexity of life.??? Enrique Salm??n, <i>Kincentric Ecology: Indigenous Perceptions of the Human-Nature Relationship</i>, Ecological Applications, (Ecological Society of America, Oct., 2000)  Vol. 10, No. 5, pp. 1327-1332.</div>
        </a>


        <a href="#45-up" class="footnote">   
        <div class="footnote-number" id="3-down">45.</div>
        <div class="footnote-text">???A North American 500 years ago could travel from the shores of the Great Lakes to the Lousiana bayous and still find settlements ??? speaking languages entirely unrelated to their own- with members of their own Bear, Elk or Beaver Clans who were obliged to host and feed them.??? David Graeber, David Wengrow, <i>The Dawn of Everything: A New History of Humanity</i>, (Signal Publishing, 2021) Chapter 4. Free People, the Origin of Cultures, p. 123</div>
        </a>

        <a href="#46-up" class="footnote">   
        <div class="footnote-number" id="3-down">46.</div>
        <div class="footnote-text">Ecological cosmology is deeply embedded in the Banayan???s Kan???kan???nue language and so too other kincentric cultures.  See: Matthew C. Bronson, <i>Lessons in the Old Language</i>, (Global Oneness Project, 2018). </div>
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
            <div class="sec-name"><i>Nature's Fallacy</i></div>
        </div>

      </div>
    

      <div class="footer-right">
    
        <a href="nature.php"><div class="next-button">Next ???</div></a>

      </div>
    </div>
  </div>


  <?php require_once ("includes/chap-footer.php");?>
  <!--<footer-chapter></footer-chapter>
          
  <div id="containerSepia"></div>
  <div id="containerContrast"></div>
  <div id="containerBrightness"></div>-->



</div>


</body>
</html>

