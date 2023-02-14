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

<?php session_start(); ?>  <!--NEW-->

<!DOCTYPE html>

<meta charset="UTF-8"> 

<!-- this grabs the language identifier for the page so that it can used in the meta and canonical url variables.  It also grabs the page name.-->
<?php require_once ("lang.php");

echo <<<_END
<html lang="$lang" manifest="../offline.appcache">
_END;

$parts = explode ("/", $_SERVER['SCRIPT_NAME']);
$name = $parts [count($parts)-1];
if (strcmp($name, "index.php") == 0)
$name = "";
?>


<head>


<?php require_once ("../header.php");
$title = "Energy";
$page_title = "The Salmon's Spin | Tratatus Ayyew - Earthbook";?>



<!--END OF GENERIC CONTENT-->

<!--META TAGS
Must be updated for each page-->

<title>The Salmon's Spin | Tratatus Ayyew - Earthbook</title>
<meta name="keywords" content="salmon, spin, energy, inwards, capital, currency, for-profit, not-for-profit, earth enterprise, for Earth, forEarth, Haida, Dakelh, Wetʼsuwetʼen, nutrients, roe, dispersal, concentration, Earthen, Igorots, Ayyew, cycles that spiral, spiral design, linear vs circular, circular, green, Earthen ethics, principle two, Earthen principles, Earthen, cosmology, planetary character, Earth's character, "> 
<meta name="description" content="Earthen Principle No.2: Observe how Earth’s cycles tend towards the outwards dissipation of energy.">


<meta name="twitter:label1" content="Est. reading time" />
<meta name="twitter:data1" content="16 minutes" /> 
	
<!-- Facebook Open Graph Tags for social sharing-->
<meta property="og:title"         content="The Salmon's Spin |  Book two | Tratatus Ayyew - Earthbook.">
<meta property="og:description"   content="Earthen Principle No.2: Observe how Earth’s cycles tend towards the outwards dissipation of energy."/>


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
        <div id="ct-chapter-title">The Salmon's Spin</div>   
        <div id="ct-book-title">Tractatus Ayyew</div>
        <div id="ct-chap-location">Earthen Principle No. 2</div>
        <div id="ct-word-count"><i>Book Two | 2,307 words</i></div>
      </div>
  </div>

  <?php require_once ("includes/eco-curtain.php");?>
	
 <?php require_once ("includes/search.php");?>

 <?php require_once ("includes/comments.php");?>


 

<!-- Page Title Section-->

  <div id="ct-chapt-graphic" class="background-9">
    <div class="ct-chapter-quote">
      <span style="background-color:var(--nav-bar-accent);
 padding:0.1em 0.2em;">“Earth’s cycles tend towards the outwards dissipation of energy.”</span>
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

<div class="page-paragraph">
    <p id="58-up"><i>
    Thirteen thousand years ago, with the retreat of trillion ton ice-sheets from North America's Pacific coast, all that remained was barren desolation.  However, in the lingering streams of glacial melt, the revitalization had already begun.   Proliferating river by river down the warming coast, the adventurous ancestors of today's Salmon swan inland to deposit their eggs.  Ever since, season after season, their energizing cyle has spun. Each Spring, salmon hatch-lings emerge out of the rocky river bed. The tiny fish consume insects and waterborne lavae and gather their strength.  Come summer, they set out on a journey to the ocean. Once arrived, they feast on nutrient rich marine life. Then, after several years, when they have reached their full size and strength, they head home.  As millions of Salmon retrace their river route an entire ecosystem revels in their return. Bears, eagles and humans gather for grand fishing feasts.  Even the bugs partake! The remnants of consumed carcasses nourish the very insects upon which the salmon first fed.  Meanwhile, those salmon that slipped by continue to the waters where they were born.  Using the last of their strength, they deposit their eggs in the gravel.  The salmon then die; their decomposing bodies provide a blast of valuable nitrogen and phosphorus to what is today a thriving inland biome of tens of thousands of species-- a final nutrient-rich gift to the river ecosystem that their roe will soon run.<a id="58-up" href="#footnotes" title="Haggan, N., Turner, N.J., Carpenter, J., Jones, J.T., Menzies, C. and Mackie, Q., 12,000+ years of change: Linking traditional and modern ecosystem science in the Pacific Northwest (2004, UBC Fisheries Centre, Vancouver BC) p4: 'As the ice retreated, some 10,000 stocks of salmon colonized 3,600 rivers and
streams in what is now British Columbia.'" onclick="openFootnotes()">⁵⁸</a> </i>
     </p></div>
    <br><br>
     <div id="line" style="margin-bottom: 30px;"></div>
<br><br>
    <div>
    <div class="lead-page-paragraph">
    OVER THE LAST MILLENIA, <a href="kincentric.php" title="We develop the concept of kentricism as a philosophical term for indegenous ecological thinking in chapter 4">kincentric cultures</a> have lived side by side the Salmon and observed thier masterful management of energy.  Seeing the salmon as kin— <i>elders with whom a common home is shared</i>— these cultures were able to gain both ecological understanding and ethical inspiration.  Today, as we strive to ensure that our modern enterprises are green, we too have much to learn from the ways of the salmon— in particular, the way in which their distribution of energy enriched the ecosystems of which they were a part. As we will see, the Salmon’s outward spiral of energy emulates the vortical pattern by which Earth has greened the biosphere.  <!--As we shall see, it is also a pattern that underlies the ethics, traditions and language of the various kincentric cultures that have long lived beside the salmon.-->  The outward-spiral geometry of this pattern,  provides the basis for our second Earthen ethic.  With its help, we can make sense of the depletion wrought by our modern for-profit and not-for-profit enterprises.  Then using this ethic, we can follow in the footsteps of kicentric cultures to lay out the requisite energetic structure for our enterprises that are keen to be green.</div>
      </div>

    <div class="page-paragraph">

      <p>To begin, we must return once again to our planet's primordial origins and take a closer look at Earth pattern of energy management.</p>


      <p id="59-up">As we saw in Earth's <a href="stellar.php" title="See our chapter on Earth's four billion year story, and how are plastic comes from it">stellar story</a>, over the last four billion years of our planet's unfolding, the energy of the Sun's relentless blaze coursed through Earth's cycles of geology, ocean and atmosphere. Driven by the rigid dictates of thermodynamics and guided by Earth's unique cosmological character, cycles unfurled that ever better dissipated the Sun's energy. Configurations of matter organically emerged that gathered, converted, stored, then dispersed energy ever outwards towards equilibrium.<a href="#footnotes" title="There is theoretical evidence that this is the consequence of vortical unfolding on a sphererical surface with the proper conditions: Guillaume Gauthier et al, (2019) Giant vortex clusters in a two-dimensional quantum fluid, Science https://www.science.org/doi/10.1126/science.aat5718" onclick="openFootnotes()">⁵⁹</a></p>

      <p>Soon the sun’s shine was being stored in complex, energy-dense molecules such as fats, proteins and carbohydrates that were interchangeable among cellular systems. As one organism lived and died, it was consumed by its fellows and the energy embodied within its nutrients was passed on. As organisms gained the energy of those before them, they reproduced and proliferated. In this way, each cycle of life steadily spun its nutrient energy outwards to other organisms all across the planet’s surface.</p>

      <div class="quote"><p>“‘The world is a vampire’ as The Smashing Pumpkins sang: a vampire living from the death of the sun. The universe must die to keep living.”</p></div>
      <p style="text-align:right;font-size:0.9em; margin-top:-10px; margin-bottom:20px"> —Thomas Nail, <i>Theory of the Earth</i>, Standford University Press.</p><br><br>

      <p id="60-up">With countless life cycles spinning, collectives of organisms became systems unto themselves.  These systems of systems then spun their energy upwards again. From organism to ecosystem, from ecosystem to biome, energy was spiraled ever outwards towards the enrichment of all.<a href="#footnotes" title="'The thermo-
dynamic transfer of energy into and out of non-­equilibrium states is what has allowed the earth to emerge, persist, and distinguish itself from other aspects of the cosmos.' Thomas Nail, A Theory of the Earth, (Standford University Press, 2021) Chap.1 p.21" onclick="openFootnotes()">⁶⁰</a></p>

      <p>And Earth’s biosphere blossomed!</p>
      
      <p>Looking closely at the life cycle of the salmon, we can see that their pattern is a magnificent reflection of Earth’s.</p>

     <p id="61-up">Just as Earth’s accumulation of solar energy powers its planetary processes, the salmon’s steady accumulation of nutrient energy powers its life process. As it eats, nutrient energy is gathered and converted into the fish's fats and proteins while carbohydrates power its swim. Then, just as Earthen cycles disperse energy out to all, so too did the cycles of the Salmon:  as the salmon are preyed upon and consumed, their accumulated nutrients are spun outwards to the broader system of which they are a part.<a href="#footnotes" title="Thomas P. Quinn, The Behavior and Ecology of Pacific Salmon and Trout, Second Edition (University of Washington Press,
Seattle, 2018) Chapter 7: The Ecology of Spawning Salmon and Their Carcasses. p 167: '...observations and experiments showed that salmon carcasses enhance algal growth and insect density in streams. Wipfli et al. (1998) reported that reaches of a stream in southeast Alaska accessible to pink salmon had fifteen times more biofilm (microbes covering rocks) and twenty-five times higher densities of macroinvertebrates than reaches of the creek not accessible to salmon.'">⁶¹</a></p>

     <p id="62-up">In this way, over the course of a single cycle, a batch of Salmon distribute more nutrients out to their ecosystem than they keep for themselves.  From a single batch of 2000 to 5200 eggs (weighing only several kilograms) the resulting salmon can accumulate a biomass of several tons.  Yet from this great concentrated mass of complex nutrients, at the end of a batch’s cycle only 20-50 salmon return to spawn.  In the end, only several kilograms of eggs remain for the next cycle to begin-- the rest having been widely dispersed into the inland ecosystem.<a href="#footnotes" title="Davidson, John & May, Travis & Good, Christopher & Waldrop, Thomas & Kenney, Patrick & Terjesen, Bendik & Summerfelt, Steven. (2016). Production of market-size North American strain Atlantic salmon Salmo salar in a land-based recirculation aquaculture system using freshwater. Aquacultural Engineering. 74. 10.1016/j.aquaeng.2016.04.007.">⁶²</a></p>

     

     <p id="63-up">Not only did this pattern contribute to a common home for many creatures to thrive, the spiral continually optimized the conditions for the Salmon’s own subsequent generations!<a href="#footnotes" title="Thomas P. Quinn, The Behavior and Ecology of Pacific Salmon and Trout, Second Edition (University of Washington Press,
Seattle, 2018) Chapter 7: Carcasses. p 182: '...Research using stable isotopes has shown that the marine-derived nutrients in the salmon carcasses contribute strongly to aquatic and terrestrial ecosystems, affecting bears and other wildlife; juvenile salmon, trout, and other fishes...'">⁶³</a></p>

<br><img src="https://earthen.io/content/images/2022/06/Salmon-Chart---1200px-2.png" width="100%" alt="Thomas P. Quinn, The Behavior and Ecology of Pacific Salmon and Trout, Second Edition (University of Washington Press,
Seattle, 2018) Chapter 7: Carcasses. p 182: '...Research using stable isotopes has shown that the marine-derived nutrients in the salmon carcasses contribute strongly to aquatic and terrestrial ecosystems, affecting bears and other wildlife; juvenile salmon, trout, and other fishes...'"><br>

     <p>Through this virtuous cycle, the salmon proliferated in rivers up and down the North Pacific coast of America, contributing to the inexorable enrichment of the land.</p>

     <p>Today, as we focus our efforts on reducing the ecological harm of our modern enterprises, it is critical to recall that humans also played a part in the flourishing of the continent’s coast over the last twelve thousand years.</p>

     <p>All this time, nations such the Wetʼsuwetʼen, have lived side by side the salmon– and learned from them.  Seeing the salmon as ecological elders, they wove the salmon's example of energy management into the stories, morals and languages of their culture.</p>
<!--
     <p>In Haida stories, the Salmon were seen as a type of people who taught important lessons about respecting one another.  In particular, that the bones of the Salmon were always to be dispersed back to the rivers just as the Salmon’s bodies were to be dispersed among the community.</p>-->

     <p>In Wetʼsuwetʼen culture, an ethic of energetic dispersion was integrated into their stories, values and traditions.  The salmon were for them, a type of people (the Salmon people) who visited each year.  The very first Salmon caught each season would be shared with every member of the community.  In this tradition, every morsel of the fish was meticulously distributed among the people and every bone returned to the water.  In this way, harvested fish are fundamentally a collective resource for the benefit of all.  This spirit of outwards energetic flow was embodied in their language: grammatically it is impossible to speak of 'my caught salmon'.<a id="64-up" href="#footnotes" title="'For the Gitksan and Wet'suwet'en, as for other traditional peoples, the various beliefs about the relationship of humans to the land and to the resources which sustain the people are rich and multifaceted, integrated into all aspects of society. They do not have a reductionist perspective which allows separation of the biological from the moral or mythical. Adherence to a wide variety of practices which we might separate into biological and spiritual realms is seen as necessary for the maintenance of the relationship of the people and the land with its plants and animals which sustain human life.  Conservation is interactive with ideology. As Anderson points out, it is in the realm of ideology and myth, which entrain the emotions, that the motivation to defer present gratification for the future common good is obtained. Myths or teaching stories imbue lessons on conservation, which makes possible long term sustainable adaptation, with sufficient emotional loading to make them memorable and to inspire people to put the lessons contained in them into practice.'  Leslie M. Johnson Gottesfeld (1994), Conservation, Territory, and Traditional Beliefs: An Analysis of Gitksan and Wet'suwet'en Subsistence, Northwest British Columbia, Canada. Human Ecology, p20." onclick="openFootnotes()">⁶4</a>
     

     <p>In this way, much as we saw in the Igorot Ayyew ethos, benefit and abundance were not measured by individual accumulation, but rather by how much was given back to the land and the people.<a id="65-up" href="#footnotes" title="The Wetsuweten were not alone in this way.  Virtually all first nations of the Pacific Northwest held a concept of wealth that was defined not by what one accumulated, but of what one gave away embodied in the the 'potlach' ceremony.  In this widespread tradition, the a community would gather to distribute gifts of all kinds.   The express purpose of these ceremonies was energetic dispersal out-to-all.   All who attended, understood well the ceremony and intention.  Within the context of the potlach, honor and respect was gained not by the wealth itself, but by its flow, not by how much was gathered, but by how much was gifted awaollowing the example of kincentric cultures, the salmon and the Earth we must arrange the financial structure of our aspiring green enterprises accordingly.'" onclick="openFootnotes()">⁶5</a></p>


     <p>In the deep resonance in the distributive ways of the Wet’su’weten, Igorots and Earth, we find our second Earth ethic.</p>

     <p>Just as the Earth tended its cycles towards the spin of energy outwards to the benefit of all, so too must we intend and achieve with our own. Only when the intention and the result of our cyclical processes is the net-outwards distribution of energy, is this Earthen ethic met.  Only then can our enterprises be considered an ecological contribution— and green.</p>

     <p>As we strive to ensure our modern enterprises are green, the second Earthen ethic shows us that their pattern of energy is key.</p>

     <p>Most importantly, we must expand our concept of capital and currency.</p>

     <p>Just as we move on from our old view of humans as separate and exceptional to the biosphere, so too must we move on from a similar view of our enterprises.  With an understanding of the inextricable immersion of our economies within Earth’s systems, we can see the capital and currency that energize our enterprises also operate as subset energy systems of the biosphere. Whereas an organism manages energy in the form of proteins, fats and carbohydrates, an enterprise manages assets, capital and currency.  Whereas an organism manages its give and take of nutrients over seasonal cycles, an enterprises manages its revenues and expenses over fiscal cycles. Whether organism or enterprise, ecology or economy, as their cycles spin, their particular give and take of energy creates a pattern all their own—  especially in the inclination of their cycles.<a id="66-up" href="#footnotes" title=" Suh, Sangwon. (2004). Materials and energy flows in industry and ecosystem networks. The International Journal of Life Cycle Assessment. 9. 335-336. 10.1007/BF02979425. Materials and energy flow analysis (MEFA) has been widely utilized in ecology and economics, occupying unique positions in both disciplines." onclick="openFootnotes()">⁶6</a></p>

     <p>When it comes to our enterprises, their pattern of energy management is determined by the purpose for which the enterprise is established.  The <i>for-what</i> of an enterprise determines how and why it receives revenues and expends expenses— as well as the how and why of its ecological give and take.</p>

    <p>While most enterprises operate with the purpose of meeting human wants and needs— such as for the provision of products and for the delivery of services— often modern enterprises are structured for a deeper reason.</p>

    <p>Certain enterprises are established by their owners for the purpose of profit: generating more energy than they give back.  This excess energy, although often sourced ecologically, is defined strictly in financial terms. While these for-profit enterprises may provide products, services and even ecological benefits, their structure dictates that their financial surpluses are directed to their owners (or shareholders as the case may be) at the end of each financial cycle. The result is a process of accumulation that over many financial cycles, steadily depletes the ecological and social systems of which it is part.
</p>



    <p>In this way, the energetic inclination of a for-profit enterprise, spins in opposition to the pattern of Earth.  No matter how green-intentioned, no matter how green its short-term impacts may seem, its management of energy is the very opposite of ecological contribution.<a id="67-up" href="#footnotes" title="Hinton and McCluran, in their book present a compelling argument of the extractive nature of for-profit business.  They propose this ethic of generative determination: “...in order to determine whether business is generative (contributing to the health of the whole economy) or extractive (taking away from the health of the whole economy), one must ask the question, “Who profits from the profit?”” Jennifer Hinton, Donnie Maclurcan, (2016) How on Earth, Post Growth Institute." onclick="openFootnotes()">⁶7</a></p>

    <p>Of course, not all modern enterprises operate for-profit.</p>

    <p>Today, more and more enterprises are aware of the depleting dynamic of profit in-and-of-itself.  In order to contribute to their social and ecological environment, many enterprises choose a ‘not-for-profit’ energetic structure.  These enterprises strive to return all their revenues back to the pursuit of their social or ecological purpose.
     </p>

     <p>However, insofar as a not-for-profit enterprise remains fully immersed within the paradigm of profit— where energy is accounted for strictly as revenues and expenses— their energetic structure is insufficient to be green.</p>

     <p>While an enterprise may ensure that all its revenues go out to its social or ecological purpose, insofar as its energy is accounted for solely in financial terms, it will fail to account for its ecological give and take.  In particular: its give and take of carbon, its support or depletion of biodiversity and its raising or lowering of awareness (our next three Earthen ethics).   In this way, a not-for-profit enterprise may return all of its financial energy back to its purpose, yet still be complicit in the systematic depletion of the ecosystems, biomes and the biosphere of which it is part.
</p>

     <p>In other words, without both not-for-profit and net-green intentions— and an accounting of both— an enterprise cannot be green.  
</p>

     <p>While in the short-term, an enterprise may sequester much carbon, plant many trees and support many species; without an accounting thereof, one cannot be certain, whether these impacts are in fact a net-contribution.  It could well be that more carbon is emitted, more trees are cut, and more species are depleted to achieve these results!  
</p>

     <p>However, the path to net-green has never been clearer.</p>


     <img src="https://earthen.io/content/images/2022/08/Profit-vs-For-Earth-Final-1500px-1.png" width="100%">

     <p>Just as a shoal of salmon directs all their energy towards their out-to-all journey home, our green-intentioned enterprises must direct all their energy towards an out-to-all-purpose.</p>

     <p>Learning from kincentric cultures, such a purpose must embrace both the social and the ecological, recognizing that both, from the perspective of Earth, are one and the same. This dual not-for-profit and net-green intention, must be declared and accounted for— ensuring that all the enterprises revenues go towards this for-Earth purpose and that all the other Earthen ethics are fully met.   </p>

     <p>That said, the outwards spiral of energy is only half of Earth's spiral pattern of enrichment.</p>

     <p>There is yet the matter... of our matter.</p>


     <p>Our next Earthen ethic.</p>

     <br><br>

  
    </div><!--closes page text content-->


<!--FOOTNOTES SECTION-->

    <div class="footnote-section" style="z-index:8;">

      <div id="line" style="border-style: dotted; border-color: grey; border-width: 1px; margin-bottom: 20px; width:105%; text-align:left;"></div>

      <div id="footnotes" style="cursor:pointer;display:flex;font-variant-caps: all-petite-caps; color:grey;" onclick="openFootnotes()">
            
        <div id="footnotes-arrow" style="">
        </div>
        
        <div class="footnotes-title">Chapter Footnotes</div>
      
      </div>

      <div id="footer-reveal-container" style="height:200px;transition:0.4s;" >

        <div id="footnotes-reveal" style="height:200px; overflow-y: clip; transition:0.4s;margin-bottom:0px;/*transition-delay: 0.4s;*/">
      
       <a href="#58-up" class="footnote">   
        <div class="footnote-number">58.</div>
        <div class="footnote-text">Haggan, N., Turner, N.J., Carpenter, J., Jones, J.T., Menzies, C. and Mackie, Q., <i>12,000+ years of change: Linking traditional and modern ecosystem science in the Pacific Northwest</i> (2004, UBC Fisheries Centre, Vancouver BC) p4: 'As the ice retreated, some 10,000 stocks of salmon colonized 3,600 rivers and streams in what is now British Columbia.</div>
        </a>

        <a href="#59-up" class="footnote">   
        <div class="footnote-number">59.</div>
        <div class="footnote-text">There is theoretical evidence that this is the consequence of vortical unfolding on a sphererical surface with the proper conditions: Guillaume Gauthier et al, (2019) Giant vortex clusters in a two-dimensional quantum fluid, Science https://www.science.org/doi/10.1126/science.aat5718</div>
        </a>

        <a href="#60-up" class="footnote">   
        <div class="footnote-number">60.</div>
        <div class="footnote-text">'The thermo-dynamic transfer of energy into and out of non-­equilibrium states is what has allowed the earth to emerge, persist, and distinguish itself from other aspects of the cosmos.' Thomas Nail, <i>A Theory of the Earth</i>, (Standford University Press, 2021) Chap.1 p.21</i>
        </div>
        </a>

        <a href="#61-up" class="footnote">   
        <div class="footnote-number">61.</div>
        <div class="footnote-text">Thomas P. Quinn, <i>The Behavior and Ecology of Pacific Salmon and Trout</i>, Second Edition (University of Washington Press, Seattle, 2018) Chapter 7: The Ecology of Spawning Salmon and Their Carcasses. p 167: '...observations and experiments showed that salmon carcasses enhance algal growth and insect density in streams. Wipfli et al. (1998) reported that reaches of a stream in southeast Alaska accessible to pink salmon had fifteen times more biofilm (microbes covering rocks) and twenty-five times higher densities of macroinvertebrates than reaches of the creek not accessible to salmon.  
        </div>
        </a>

        <a href="#62-up" class="footnote">   
        <div class="footnote-number">62.</div>
        <div class="footnote-text">Davidson, John & May, Travis & Good, Christopher & Waldrop, Thomas & Kenney, Patrick & Terjesen, Bendik & Summerfelt, Steven. (2016). Production of market-size North American strain Atlantic salmon Salmo salar in a land-based recirculation aquaculture system using freshwater. Aquacultural Engineering. 74. 10.1016/j.aquaeng.2016.04.007. 
        </div>
        </a>

        <a href="#62-up" class="footnote">   
        <div class="footnote-number">62.</div>
        <div class="footnote-text">Hinton and Maclurcan, in their book present a compelling argument of the extractive nature of for-profit business.  They propose this ethic of generative determination: “...in order to determine whether business is generative (contributing to the health of the whole economy) or extractive (taking away from the health of the whole economy), one must ask the question, “Who profits from the profit?”” Jennifer Hinton, Donnie Maclurcan, (2016) How on Earth, Post Growth Institute. 
        </div>
        </a>





        
      </div>
  </div>



    <div id="footnotes-concealer" style="background-image: linear-gradient(rgba(255,0,0,0), var(--background-color));
height: 150px;
width: 100%;
margin-top: -150px;
z-index: 10;
position: absolute;
right: 0;
left: 0;
transition:0.4s">
    </div>

    </div><!--Closes footnote section-->
          
  </div><!--Closes main content block-->

  <!--Footer Next Chapter Section: Requires customization-->
  <div id="footer-chapter" style="margin-bottom: 0px;">

    <div class="footer-size">
    
      <div class="footer-left">

       <!-- <div id="footer-icon-left" style="cursor:pointer;" onclick="openFooter()"></div>-->
    
     
        <div class="next-section">
            <div class="next-sec">Next chapter:</div>
            <div class="sec-name"><i>3 | The Mollusk's Means</i></div>
        </div>

      </div>
    

      <div class="footer-right">
    
        <a href="unpublished.php"><div class="next-button">Next ➔</div></a>

      </div>
    </div>

  <?php require_once ("includes/chapTER-footer.php");?>


</div>


</body>
</html>

