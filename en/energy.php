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
$name = "energy";
$page_number = "13";
$chap_number = "Bk 2, Chap. 2, ";
$chap_name = "The Salmon's Spin";
$page_title = "The Salmon's Spin |  Tractatus Ayyew | Earthbook Edition";?>

<head>

<?php require_once ("../header.php");?>


<!--META TAGS
Must be updated for each page-->

<meta property="article:modified_time" content="2023-05-21T09:10:13+00:00">
<meta name="keywords" content="salmon, spin, energy, inwards, capital, currency, for-profit, not-for-profit, earth enterprise, for Earth, forEarth, Haida, Dakelh, Wetʼsuwetʼen, nutrients, roe, dispersal, concentration, Earthen, Igorots, Ayyew, cycles that spiral, spiral design, linear vs circular, circular, green, Earthen ethics, principle two, Earthen principles, Earthen, cosmology, planetary character, Earth's character, "> 
<meta name="description" content="Earthen Principle No.2: Earth’s cycles tend towards the outwards dissipation of energy.">


<meta name="twitter:label1" content="Est. reading time" />
<meta name="twitter:data1" content="16 minutes" /> 
	
<!-- Facebook Open Graph Tags for social sharing-->
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

<BODY style="max-width:100%; overflow-x:hidden;">
<!--TOUR-CURTAIN-->
<tour-curtain></tour-curtain>


  <div id="underlayer" class="accessibility-plugin-ac" >

    <div id="top"></div>

  <!--HEADER NAVBAR-->
  <header-component></header-component>

  <div id="ct-chapter-top">
    <button type=button id="ct-tc-menu" onclick="openContents()" style="background-color:var(--header-footer);" aria-label="Open Table of Contents"></button>
    <div class="ct-holder" style="cursor:pointer;" onclick="openContents()">
        <div id="ct-chapter-title">The Salmon's Spin</div>   
        <div id="ct-book-title">Tractatus Ayyew</div>
        <div id="ct-chap-location">Earthen Principle No. 2</div>
        <div id="ct-word-count"><i>2,307 words</i></div>
    </div>
  </div>


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

  <div id="chap-notice">
  <div id="close-notice" onclick="closeWelcomeNotice()">&times;</div>
  <div class="chap-notice-text">
    Looks like its your first time opening this book!  Before you get going, be sure to take the <a class="java-link" onclick="guidedTour()" aria-label="Open About Screen" title="Learn more about what an Earthbook is">quick tour</a> of an Earthbook's powerful reader tools and to <a class="java-link" onclick="openSettings()" aria-label="Open Settings" title="Adjust for your eyes">optimize ±</a> the page for your eyes.
  </div>
</div>

  <div id="up-arrow"></div>
  <div id="ct-main">


<!-- MAIN TEXT CONTENT of the Page
  For footnotes, use these numbers:  ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ⁶⁰  “ ” ³¹⁰ ²⁶ ⁴⁷ ⁵⁴
-->

<div class="page-paragraph">
    <p id="58-up"><i>
    Thirteen thousand years ago, as trillion-ton ice-sheets retreated from North America's Pacific coast, barren desolation reigned.  However, in the lingering glacial streams, the continent's revitalization had already begun.   Proliferating river by river down the warming coast, the adventurous ancestors of today's Salmon swan inland to deposit their eggs.  Ever since, with each season, their energizing cycle has spun. Come Spring, salmon hatchlings emerge from the rocky river bed. The tiny fish gather their strength consuming insects and waterborne larvae.  Come Summer, they set out on a journey to the ocean. Once arrived, they feast on nutrient rich marine life. Come fall, when after several years they have reached their full size and strength, they head home.  As millions of Salmon retrace their river route, an entire ecosystem revels in their return. Bears, eagles and humans gather for grand autumn fishing feasts.  Even the bugs partake! The remnants of consumed carcasses nourish the very insects upon which the salmon first fed.  Meanwhile, those salmon that slipped by, continue to the waters where they were born.  Using the last of their strength, they deposit their eggs in the gravel.  The salmon then die; their decomposition a final nutrient gift to the now rich and diverse river ecosystem that their roe will soon run.<a id="58-up" href="#footnotes" title="Haggan, N., Turner, N.J., Carpenter, J., Jones, J.T., Menzies, C. and Mackie, Q., 12,000+ years of change: Linking traditional and modern ecosystem science in the Pacific Northwest (2004, UBC Fisheries Centre, Vancouver BC) p4: 'As the ice retreated, some 10,000 stocks of salmon colonized 3,600 rivers and streams in what is now British Columbia.'" onclick="openFootnotes()">⁵⁸</a>
    </i></p>
    </div>

    <br><br>
     <div id="line" style="margin-bottom: 30px;"></div>
    <br><br>
    
    <div class="lead-page-paragraph">
    OVER THE LAST MILLENIUM, the Wet'suwet'en people of North America's Pacific coast have lived alongside the Salmon's masterful management of energy. Observing and learning from the Salmon's example the Wet'suwet'en gained the ecological understanding and ethical inspiration to preside over the steady, millennia-long enrichment of their land. Today, we too have much to learn from the Salmon-- and from them. As we shall see, the way in which the Wet'su'weten embodied the Salmon’s outward spiral of energy into their society provides an ethic that we can follow with our keen green enterprises.  Indeed, this vortical spiral underlies the process by which Earth itself greened, and provides the basis for our second Earthen ethic.  Through its lense, we can see clearly why our modern for-profit and not-for-profit enterprises unfold an inevitable pattern of ecological depletion.  More importantly howver, with the help of the Salmon, Wet'suweten and Earth, we can lay out the requisite for-Earth structure by which our enterprises can be sure to be green.</div>
      
    <div class="page-paragraph">

      <p>To begin, let us return once again to our planet's primordial origins and take a closer look at its unique pattern of energetic flow.</p>

      <p id="59-up">As we saw in Earth's <a href="stellar.php" title="Chapter 3: A Stellar Story">stellar story</a>, over the last four billion years, the energy of the Sun's relentless blaze coursed through Earth's cycles of geology, ocean and atmosphere. Driven by the rigid dictates of thermodynamics and guided by Earth's unique cosmological character, cycles unfurled that ever better dissipated the Sun's energy. Steadily, configurations of matter organically emerged that gathered, stored, then dispersed energy ever outwards towards equilibrium.<a href="#footnotes" title="Vortical unfolding on a sphererical surface with the proper conditions can tend towards greater and greater order: Guillaume Gauthier et al, (2019) Giant vortex clusters in a two-dimensional quantum fluid, Science https://www.science.org/doi/10.1126/science.aat5718" onclick="openFootnotes()">⁵⁹</a></p>

      <p>Before long, the sun’s shine was being stored in complex, energy-dense molecules <!--such as fats, proteins and carbohydrates--> that were interchangeable among cellular systems. As organisms lived and died, their nutrients were consumed and used by others. Gaining the energy of those before them, organisms reproduced and proliferated; each cycle steadily spinning nutrient energy outwards across the planet’s surface.  From organism to ecosystem, from ecosystem to biome, energy spiraled ever outwards towards the enrichment of all.</p>

      <!--<div class="quote"><p>“‘The world is a vampire’ as The Smashing Pumpkins sang: a vampire living from the death of the sun. The universe must die to keep living.”</p></div>
      <p style="text-align:right;font-size:0.9em; margin-top:-10px; margin-bottom:20px"> —Thomas Nail, <i>Theory of the Earth</i>, Standford University Press.</p><br><br>

      <p id="60-up">With countless life cycles spinning, collectives of organisms became systems unto themselves.  These systems of systems then spun their energy upwards again. From organism to ecosystem, from ecosystem to biome, energy was spiraled ever outwards towards the enrichment of all.<a href="#footnotes" title="'The thermo-
dynamic transfer of energy into and out of non-­equilibrium states is what has allowed the earth to emerge, persist, and distinguish itself from other aspects of the cosmos.' Thomas Nail, A Theory of the Earth, (Standford University Press, 2021) Chap.1 p.21" onclick="openFootnotes()">⁶⁰</a></p>-->

      
      <p>And Earth’s biosphere blossomed!</p>
      
      <p>Returning to the spiral of the salmon's cycles, we can see that its pattern is a magnificent reflection of Earth’s.</p>

     <p id="61-up">Just as Earth’s absorption of solar energy powers the planet's processes, the salmon’s steady absorbtion of nutrient energy powers its life processes.</p>
     
     <p>Just as Earth steadily spun its energy out to the planet's biosphere, so too did the Salmon steadily spin more and more marine nutrients out into its inland biome.</p>

     <p id="63-up">And just as Earth’s cycles steadily greened the biosphere, so too did the Salmon's relentless  pattern of disperal, contributed to a vibrant common home for bears, bugs, humans and countless other creatures to thrive.</p>  
     
     <p>But perhaps must instructive of all, the Salmon's spiral ever improved the conditions for the their own subsequent generations.  As a direct consequence of this outward energetic spiral, the salmon proliferated in rivers up and down the North Pacific coast of America, contributing to the inexorable enrichment of the inland ecosystem.<a href="#footnotes" title="Thomas P. Quinn, The Behavior and Ecology of Pacific Salmon and Trout, Second Edition (University of Washington Press,
    Seattle, 2018) Chapter 7: Carcasses. p 182: '...Research using stable isotopes has shown that the marine-derived nutrients in the salmon carcasses contribute strongly to aquatic and terrestrial ecosystems, affecting bears and other wildlife; juvenile salmon, trout, and other fishes...'">⁶³</a></p></p>


<div class="chart-image" style="width:100%; padding:5px;text-align:center;margin-top:10px;">
    <img src="https://earthen.io/content/images/2022/06/Salmon-Chart---1200px-2.png" width="100%" alt="Thomas P. Quinn, The Behavior and Ecology of Pacific Salmon and Trout, Second Edition (University of Washington Press, Seattle, 2018) Chapter 7: Carcasses. p 182: '...Research using stable isotopes has shown that the marine-derived nutrients in the salmon carcasses contribute strongly to aquatic and terrestrial ecosystems, affecting bears and other wildlife; juvenile salmon, trout, and other fishes...'"><br>
          
     <h6>As we saw at the begining of the chapter, from egg to adult, Salmon absorb energy as they consume insects and crustaceans, storing their nutrients as biomass.  From a single batch of eggs (2000 to 5200 eggs (weighing only a few grams each), several hundred fish reach adulthood.  With each adult weighing between 10-15kg, the net biomass of the batch can exceed several tons.  Then, as the fish are preyed upon and consumed, their accumulated nutrients nourish countless other creatures who gain and in turn distribute these marine nutrients.At the end of the cycle, only 20-50 salmon return on average to fertilized and lay eggs— the other 99% of the batch's biomass having been dispersed out into the inland ecosystem.<a href="#footnotes" title="Thomas P. Quinn, The Behavior and Ecology of Pacific Salmon and Trout, Second Edition (University of Washington Press, Seattle, 2018) Chapter 7: The Ecology of Spawning Salmon and Their Carcasses. p 167: '...observations and experiments showed that salmon carcasses enhance algal growth and insect density in streams. Wipfli et al. (1998) reported that reaches of a stream in southeast Alaska accessible to pink salmon had fifteen times more biofilm (microbes covering rocks) and twenty-five times higher densities of macroinvertebrates than reaches of the creek not accessible to salmon.'">⁶¹  </a> <a id="62-up" href="#footnotes" title="Davidson, John & May, Travis & Good, Christopher & Waldrop, Thomas & Kenney, Patrick & Terjesen, Bendik & Summerfelt, Steven. (2016). Production of market-size North American strain Atlantic salmon Salmo salar in a land-based recirculation aquaculture system using freshwater. Aquacultural Engineering. 74. 10.1016/j.aquaeng.2016.04.007.">⁶²</a></h6>
</div>

     
   
<!--
  Indeed, over time the Salmon's cycle evolved to minimize any held over nutrients (in the form of eggs or surviving fish) and to maximize the amount of surplus energy dispersed (in the form of biomass and nutrients).

     <p>As a direct consequence of this outward energetic spiral, the salmon proliferated in rivers up and down the North Pacific coast of America, contributing to the inexorable enrichment of the land.  While bears, bugs and humans and countless other creatures also embodied this pattern of energy management, the Salmon's example is so striking, that it provides a path that we can stive to follow— our second Earthen ethic.</p>
    
    The Salmon's pattern of energy management is so striking, that it provides a path that we can stive to follow— our second Earthen ethic.-->

     <p>In the resonance of the Salmon and Earth's pattern of energy management, we find our second Earthen ethic.</p>

     <p>Just as the Salmon and Earth tended their cycles towards the spin of energy outwards to the benefit of all, so too must we intend and achieve with our own. Only when the intention and the result of our cyclical processes is the net-outwards distribution of energy, is this Earthen ethic met.  Only then can our enterprises be considered an ecological contribution— and green.</p>

     <p>To see how this way forward applies to our modern keen green enterprises, it is crucial to recognize that other cultures and societies have long walked this path and cleared the way for us to follow.  In particular, cultures that rather than see human enterprise and economy as exceptional and seperate from the biosphere, instead viewed social energy as an integrated part of a system of ecological energy flowing between kindred relations.</p>

<p>The Wetʼsuwetʼen, having lived side by side the salmon for millennia, are one such culture.  From their kincentric view of the world, they were able to appreciate the salmon as ecological elders.</p>

<p>And, as teachers.</p>

<p>Over countless generations they learned from the spirallying cycle of the Salmon.  Over the centuries, the  Wetʼsuwetʼen wove the salmon's pattern of energy management into the stories, morals and languages of their culture.<!-- which in turn had significant impact on the ecosystem of which their society was part.--></p>


<p>In  Wetʼsuwetʼen culture, the very first Salmon caught each season is shared with every member of the community or family unit.  In this tradition, a morsel of the fish is meticulously distributed among each member, and every bone is taken back to the water.  This pattern was then followed in the seasonal harvest of tens of thousands of salmon: only as much as each family requires is taken, with the taken being shared among all and the discarded bones being returned to the river.<!-- So ingrained is this spirit of energetic management, that in their language grammatically it is impossible to speak of 'my salmon' only of 'our salmon'.--></p>
 
<p>For the Wet'suwet'en, this ethic culminates in the <i>potlach</i> (a tradition they shared with virtually every other first nation on the Pacific coast).  In this seasonal ceremony the community would come together to distribute food, goods and luxuries that had been accumulated by some more than others.  The more that a family or an individual could distribute to others, the more respect was gained.<a id="64-up" href="#footnotes" title="'For the Gitksan and  Wetʼsuwetʼen, as for other traditional peoples, the various beliefs about the relationship of humans to the land and to the resources which sustain the people are rich and multifaceted, integrated into all aspects of society. They do not have a reductionist perspective which allows separation of the biological from the moral or mythical. Adherence to a wide variety of practices which we might separate into biological and spiritual realms is seen as necessary for the maintenance of the relationship of the people and the land with its plants and animals which sustain human life.  Conservation is interactive with ideology. As Anderson points out, it is in the realm of ideology and myth, which entrain the emotions, that the motivation to defer present gratification for the future common good is obtained. Myths or teaching stories imbue lessons on conservation, which makes possible long term sustainable adaptation, with sufficient emotional loading to make them memorable and to inspire people to put the lessons contained in them into practice.'  Leslie M. Johnson Gottesfeld (1994), Conservation, Territory, and Traditional Beliefs: An Analysis of Gitksan and Wet'suwet'en Subsistence, Northwest British Columbia, Canada. Human Ecology, p20." onclick="openFootnotes()">⁶4</a></p>  

<!--

<p>In Banayan's Igorot culture (and many other kincentric societies), such a ceremony has its parralel.  In the yearly celebration of the first rice harvest a slaughtered pig would cut up into a piece for every family of the village, which was then carried home by a representative of each on the tip of their spear.  As we saw in the last chapter, this pattern of energetic dispersal is a key component of their Ayyew virtue.<a id="65-up" href="#footnotes" title="The  Wetʼsuwetʼen were not alone in this way.  Virtually all first nations of the Pacific Northwest held a concept of wealth that was defined not by what one accumulated, but of what one gave away embodied in the the 'potlach' ceremony.  In this widespread tradition, the a community would gather to distribute gifts of all kinds.   The express purpose of these ceremonies was energetic dispersal out-to-all.   All who attended, understood well the ceremony and intention.  Within the context of the potlach, honor and respect was gained not by the wealth itself, but by its flow, not by how much was gathered, but by how much was gifted awaollowing the example of kincentric cultures, the salmon and the Earth we must arrange the financial structure of our aspiring green enterprises accordingly.'" onclick="openFootnotes()">⁶⁵</a></p>  -->

<p>Crucially, in Wet'suwet'en culture, no distinction was made between the dispersal of ecological and social energy.  In this way, the Wet'su'weten were able to replicate the pattern of the Salmon in their ecological and social integrations.</p>

     <!--<p>Most importantly, we must expand our concept of capital and currency.</p>-->

     <p>Learning from the example of the Wet'suwet'en, we can begin to see beyond the humancentric focus of our modern enterprises.</p>
     
     <p>Moving on from our old view of humans as separate and exceptional to the biosphere, so too can we move on from a similar view of our enterprises as seperate and exceptional to ecological flows of energy.  In particular, the view that the financial energy that sustains and powers our companies and corporations is seperate and somehow exceptional to Earthen planetary dynamics.  As we transition to an understanding of the inextricable immersion of our economies within Earth’s systems, we can begin to see that the financial energy with which our enterprises operate is in fact a subset energy system of the planet's biosphere.</p>
     
     <p>In this way, both financial and ecological systems, as subsets energy systems of Earth, are subject to the same planetary principles.</p>
     
    <!-- <p>Whereas an organism manages its give and take of nutrients over seasonal cycles, an enterprises manages its revenues and expenses over fiscal cycles.  Whereas energy flow through an organism in the form of carbohydrates and are stored as fats and protein, within an enterprise energy flows as currency and is stored as capital and assets.  </p>
     
     <p>Through these parralels, we can observe comparable patterns.</p>
     
     <p>Whether an organism or enterprise, an ecosystem or an economy, as each system spins, their particular give and take of energy creates a spiral pattern all their own in the inclination of their cycles.  Their particular energetic spiral either inclines inwards towards the concentration of energy into themselves or outwards towards the dispersal of energy to the system that encompasses them.<a id="66-up" href="#footnotes" title="Suh, Sangwon. (2004). Materials and energy flows in industry and ecosystem networks. The International Journal of Life Cycle Assessment. 9. 335-336. 10.1007/BF02979425. Materials and energy flow analysis (MEFA) has been widely utilized in ecology and economics, occupying unique positions in both disciplines." onclick="openFootnotes()">⁶⁶</a></p>-->

     <p>When it comes to our enterprises, their pattern of energy management is determined by the purpose for which the enterprise is established.  The <i>for-what</i> of an enterprise determines how and why it receives revenues and expends expenses— as well as the how and why of its ecological give and take.</p>

    <p>While most enterprises operate with the purpose of meeting human wants and needs— such as for the provision of products and for the delivery of services— often modern enterprises are structured for a deeper reason.</p>

    <p>Many modern enterprises are established by their owners for <i>the purpose of profit</i>: generating more energy than they give back.  This excess energy, although often sourced ecologically, is defined strictly in financial terms. While these for-profit enterprises may provide products, services and even ecological benefits, their structure dictates that their financial surpluses are directed to their owners (or shareholders as the case may be) at the end of each financial cycle. The result is a process of accumulation that over many financial cycles, steadily depletes the ecological and social systems that encompass it.<a id="67-up" href="#footnotes" title="Hinton and Maclurcan, present a compelling argument of the extractive nature of for-profit business.  They propose this ethic of determination: “...in order to determine whether business is generative (contributing to the health of the whole economy) or extractive (taking away from the health of the whole economy), one must ask the question, 'Who profits from the profit?' Jennifer Hinton, Donnie Maclurcan, <i>How on Earth?</i>, (Post Growth Institute, 2006)" onclick="openFootnotes()">⁶⁷</a></p>


    <p>In this way, the energetic inclination of a for-profit enterprise, spins in opposition to the pattern of Earth.  No matter how green-intentioned, no matter how green its short-term impacts may seem, its management of energy is the very opposite of ecological contribution.</p>

    <p>Of course, not all modern enterprises operate <i>for-profit</i>.</p>

    <p>Today, more and more enterprises are aware of the depleting dynamic of profit in-and-of-itself.  In order to contribute to their social and ecological environment, many enterprises choose a <i>‘not-for-profit’</i> energetic structure.  These enterprises strive to return all their revenues back to the pursuit of their social or ecological purpose. </p>

     <p>However, insofar as a not-for-profit enterprise remains fully immersed within the paradigm of profit— where energy is accounted for strictly as revenues and expenses for humans— their energetic structure is insufficient to be green.</p>

     <p>While an enterprise may ensure that all its revenues go out to its social or environmental purpose, insofar as its energy is accounted for solely in financial terms, it will fail to account for its ecological give and take.  In particular: its give and take of carbon, its support or depletion of biodiversity and its raising or lowering of awareness (our next three Earthen ethics).   In this way, a not-for-profit enterprise may return all of its financial energy back to its purpose, yet still be complicit in a dynamic of systematic ecological depletion.</p>


     <p>In other words, without both not-for-profit and an intention of contributing socially and ecologically— and an accounting and disclosure of both— an enterprise cannot be green.  
    </p>

     <p>While in the short-term, an enterprise may sequester much carbon, plant many trees and support many species; without an accounting thereof, one cannot be certain, whether these impacts are in fact a net-contribution.  It could well be that more carbon is emitted, more trees are cut, and more species are depleted to achieve these results!  
    </p>

     <p>However, the path towards net-green has never been clearer.</p>


     <img src="https://earthen.io/content/images/2022/08/Profit-vs-For-Earth-Final-1500px-1.png" width="100%">

     <p>Just as a shoal of salmon directs all their energy towards their out-to-all journey home, our green-intentioned, enterprises must direct their surplus energy towards an out-to-all-purpose.</p>

     <p>Learning from kincentric cultures, such a purpose must embrace both the social and the ecological, recognizing that both, from an Earthen view, are one and the same. This dual not-for-profit and <i>for-Earth</i> intention, must be declared and accounted for— ensuring that the enterprises revenues (in particular its surpluses) go towards this for-Earth purpose and that the other four Earthen ethics are met.   </p>

     <p>That said, the outwards spiral of energy is only half of Earth's spiral pattern of enrichment.</p>

     <p>There is yet the matter... of our matter.</p>

     <p>Our next Earthen ethic.</p>

     <br><br><br>
  
    
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

        <a href="#63-up" class="footnote">   
        <div class="footnote-number">63.</div>
        <div class="footnote-text">Thomas P. Quinn, The Behavior and Ecology of Pacific Salmon and Trout, Second Edition (University of Washington Press, Seattle, 2018) Chapter 7: Carcasses. p 182: '...Research using stable isotopes has shown that the marine-derived nutrients in the salmon carcasses contribute strongly to aquatic and terrestrial ecosystems, affecting bears and other wildlife; juvenile salmon, trout, and other fishes...'
        </div>
        </a>

        <a href="#64-up" class="footnote">   
        <div class="footnote-number">64.</div>
        <div class="footnote-text">'For the Gitksan and  Wetʼsuwetʼen, as for other traditional peoples, the various beliefs about the relationship of humans to the land and to the resources which sustain the people are rich and multifaceted, integrated into all aspects of society. They do not have a reductionist perspective which allows separation of the biological from the moral or mythical. Adherence to a wide variety of practices which we might separate into biological and spiritual realms is seen as necessary for the maintenance of the relationship of the people and the land with its plants and animals which sustain human life.  Conservation is interactive with ideology. As Anderson points out, it is in the realm of ideology and myth, which entrain the emotions, that the motivation to defer present gratification for the future common good is obtained. Myths or teaching stories imbue lessons on conservation, which makes possible long term sustainable adaptation, with sufficient emotional loading to make them memorable and to inspire people to put the lessons contained in them into practice.'  Leslie M. Johnson Gottesfeld (1994), Conservation, Territory, and Traditional Beliefs: An Analysis of Gitksan and  Wetʼsuwetʼen Subsistence, Northwest British Columbia, Canada. Human Ecology, p20.
        </div>
        </a>

        <a href="#65-up" class="footnote">   
        <div class="footnote-number">65.</div>
        <div class="footnote-text">The  Wetʼsuwetʼen were not alone in this way.  Virtually all first nations of the Pacific Northwest held a concept of wealth that was defined not by what one accumulated, but of what one gave away embodied in the the 'potlach' ceremony.  In this widespread tradition, the a community would gather to distribute gifts of all kinds.   The express purpose of these ceremonies was energetic dispersal out-to-all.   All who attended, understood well the ceremony and intention.  Within the context of the potlach, honor and respect was gained not by the wealth itself, but by its flow, not by how much was gathered, but by how much was gifted awaollowing the example of kincentric cultures, the salmon and the Earth we must arrange the financial structure of our aspiring green enterprises accordingly.' 
        </div>
        </a>

        <a href="#66-up" class="footnote">   
        <div class="footnote-number">66.</div>
        <div class="footnote-text">Suh, Sangwon. (2004). Materials and energy flows in industry and ecosystem networks. The International Journal of Life Cycle Assessment. 9. 335-336. 10.1007/BF02979425. Materials and energy flow analysis (MEFA) has been widely utilized in ecology and economics, occupying unique positions in both disciplines.
        </div>
        </a>


        <a href="#67-up" class="footnote">   
        <div class="footnote-number">67.</div>
        <div class="footnote-text">Hinton and Maclurcan, present a compelling argument of the extractive nature of for-profit business.  They propose this ethic of determination: “...in order to determine whether business is generative (contributing to the health of the whole economy) or extractive (taking away from the health of the whole economy), one must ask the question, 'Who profits from the profit?'” Jennifer Hinton, Donnie Maclurcan, <i>How on Earth?</i>, (Post Growth Institute, 2006) 
        </div>
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
            <div class="sec-name"><i>3 | The Manner of the Mollusc</i></div>
        </div>

      </div>
    

      <div class="footer-right">
    
        <a href="unpublished.php" title="Go to the next chapter" aria-label="Go to the next chapter"><div class="next-button">Next ➔</div></a>

</div>
</div>

    
<?php require_once ("includes/chapTER-footer.php");?>


</div>




</body>
</html>

