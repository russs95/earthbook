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

<meta property="article:modified_time" content="2023-04-21T09:10:13+00:00">
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

    .highlight {
			background-color: #fff;
			cursor: pointer;
      color: var(--slider);
		}

		.locked-highlight {
			background-color: green;
      color: var(--background-color);
      font-family: 'CooperLt', Georgia, serif;
  text-rendering: optimizeLegibility;
  font-weight: 300;
  text-align: justify;
		}

    .modal {
        display: none;
        position: fixed;
        z-index: 111;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.4);
      }
      .modal-content {
        background-color: var(--strong-border);
        margin: 15% auto;
        padding: 20px;
        border: 0.5px solid var(--thin-border-color);
        width: 80%;
        border-radius: 10px;
        text-align: center;
      }
      .close {
        color: var(--thin-border-color);
        float: right;
        font-size: 28px;
        font-weight: bold;
      }
      .close:hover,
      .close:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
      }
      .blur {
        filter: blur(5px);
        pointer-events: none;
      }
      .next {
        background-color: green;
        border: none;
        color: #fff;
        padding: 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 5px 2px;
        border-radius: 5px;
        cursor: pointer;
      }
      .back {
        background-color: green;
        border: none;
        color: #fff;
        padding: 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 5px 2px;
        border-radius: 5px;
        cursor: pointer;
      }

</style>


</head>

<!--MAIN HTML Begins  what's up doc? -->



<BODY class="accessibility-plugin-ac" style="max-width:100%; overflow-x:hidden;">



  <a id="top"></a>

  <!--HEADER NAVBAR-->
  <header-component></header-component>

  <div id="ct-chapter-top">
    <button type=button id="ct-tc-menu" onclick="openContents()" style="background-color:var(--header-footer);" aria-label="Open Table of Contents"></button>
    <div class="ct-holder" style="cursor:pointer;" onclick="openContents()">
        <div id="ct-chapter-title">The Salmon's Spin</div>   
        <div id="ct-book-title">Tractatus Ayyew</div>
        <div id="ct-chap-location">Earthen Principle No. 2</div>
        <div id="ct-word-count"><i>2,307 words |  Book 2</i></div>
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

  <div id="up-arrow"></div>



<div id="myModal" class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>

    <div id="information-one">
      <h2>Welcome to an Earthbook</h2>
      <p style="text-align:center;font-size:smaller;">You've never quite read anything like this before.  Earthbook are a new reading format designed from the ground up to be human and Earth friendly.  Check out some of the features...</p>
      <button class="next">Next ></button>
    </div>

    <div id="information-two" style="display:none;">
      <h2>Optimize Your Reading Experience</h2>
      <div class="modal-description" style="font-family:'Mulish';font-size:1.2em;text-align:center;color:var(--text-color);">Click on the top left +- menu to adjust the font size, color tint and night/day themes.</h5>
      <button class="back">Back</button>
      <button class="next">Next</button>
    </div>

    <div id="information-three" style="display:none;">
      <h2>Cite, Share & Highlight</h2>
      <p>Hit the share button on the top right.  Use it to get a formatted citation for your own work.  Select text; click to lock a hightlight.  </p>
      <button class="back">Back</button>
    </div>

    <div id="information-four" style="display:none;">
      <h2>Cite, Share & Highlight</h2>
      <p>Hit the share button on the top right.  Use it to get a formatted citation for your own work.  Select text; click to lock a hightlight.  </p>
      <button class="back">Back</button>
    </div>
  </div>
</div>


<div id="underlayer">

  <div id="ct-main">


<!-- MAIN TEXT CONTENT of the Page
  For footnotes, use these numbers:  ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ⁶⁰  “ ” ³¹⁰ ²⁶ ⁴⁷ ⁵⁴
-->

<div class="page-paragraph">
    <p id="58-up"><i>
    <a onclick="openFootnotes()">MODAL</a>Thirteen thousand years ago, as trillion-ton ice-sheets retreated from North America's Pacific coast, barren desolation reigned.  However, in the lingering glacial streams, the continent's revitalization had already begun.   Proliferating river by river down the warming coast, the adventurous ancestors of today's Salmon swan inland to deposit their eggs.  Ever since, with each season, their energizing cycle has spun. Come Spring, salmon hatchlings emerge from the rocky river bed. The tiny fish gather their strength consuming insects and waterborne larvae.  Come Summer, they set out on a journey to the ocean. Once arrived, they feast on nutrient rich marine life. Come fall, when after several years they have reached their full size and strength, they head home.  As millions of Salmon retrace their river route, an entire ecosystem revels in their return. Bears, eagles and humans gather for grand autumn fishing feasts.  Even the bugs partake! The remnants of consumed carcasses nourish the very insects upon which the salmon first fed.  Meanwhile, those salmon that slipped by, continue to the waters where they were born.  Using the last of their strength, they deposit their eggs in the gravel.  The salmon then die; their decomposition a final nutrient gift to the now rich and diverse river ecosystem that their roe will soon run.<a id="58-up" href="#footnotes" title="Haggan, N., Turner, N.J., Carpenter, J., Jones, J.T., Menzies, C. and Mackie, Q., 12,000+ years of change: Linking traditional and modern ecosystem science in the Pacific Northwest (2004, UBC Fisheries Centre, Vancouver BC) p4: 'As the ice retreated, some 10,000 stocks of salmon colonized 3,600 rivers and streams in what is now British Columbia.'" onclick="openFootnotes()">⁵⁸</a>
    </i></p>
    </div>

    <br><br>
     <div id="line" style="margin-bottom: 30px;"></div>
    <br><br>
    
    <div class="lead-page-paragraph">
    OVER THE LAST MILLENIUM, the Wet'suwet'en people of North America's Pacific coast have lived alongside the Salmon's masterful management of energy. Their view of the Salmon as an esteemed elder helped the Wet'suwet'en to gain the ecological understanding and ethical inspiration to preside over the steady, millennia-long enrichment of their land. Today, their culture and vibrant, biodiverse territory serve as an inspiration to modern enterprises that are keen to be green. Adopting their perspective, we too have much to learn from the ways of the salmon. As we shall see, the Salmon’s outward spiral of energy emulates the vortical pattern by which Earth itself greened the biosphere. This pattern, which also happens to underlie the ethics, traditions, and language of the Wet'suwet'en, the Igorots, and other kincentric cultures, provides the geometry for our second Earthen ethic.
    </div>


    <div class="page-paragraph">
      
      <p>Much like our first Earthen ethic helped us make sense of the inevitable ecological depletion of linear and circular processes, the second Earthen ethic helps us understand the inevitable grayness of our modern for-profit and not-for-profit enterprises-- and, the requisite energetic structure that our keen green enterprises must embody if they wish to follow the example of the Salmon, the Wet'suwet'en, and Earth.</p>

      <p>To begin, we must return once again to our planet's primordial origins and take a closer look at its unique pattern of energy management.</p>


      <p id="59-up">As we saw in Earth's <a href="stellar.php" title="Chapter 3: A Stellar Story">stellar story</a>, over the last four billion years the energy of the Sun's relentless blaze coursed through Earth's cycles of geology, ocean and atmosphere. Driven by the rigid dictates of thermodynamics and guided by Earth's unique cosmological character, cycles unfurled that ever better dissipated the Sun's energy. Configurations of matter organically emerged that gathered, stored, then dispersed energy ever outwards towards equilibrium.<a href="#footnotes" title="Vortical unfolding on a sphererical surface with the proper conditions can tend towards greater and greater order: Guillaume Gauthier et al, (2019) Giant vortex clusters in a two-dimensional quantum fluid, Science https://www.science.org/doi/10.1126/science.aat5718" onclick="openFootnotes()">⁵⁹</a></p>

      <p>Before long, the sun’s shine was being stored in complex, energy-dense molecules such as fats, proteins and carbohydrates that were interchangeable among cellular systems. As one organism lived and died, it was consumed by its fellows and the energy embodied within its nutrients was passed on. As organisms gained the energy of those before them, they reproduced and proliferated. In this way, each cycle of life steadily spun its nutrient energy outwards to other organisms all across the planet’s surface.</p>

      <!--<div class="quote"><p>“‘The world is a vampire’ as The Smashing Pumpkins sang: a vampire living from the death of the sun. The universe must die to keep living.”</p></div>
      <p style="text-align:right;font-size:0.9em; margin-top:-10px; margin-bottom:20px"> —Thomas Nail, <i>Theory of the Earth</i>, Standford University Press.</p><br><br>

      <p id="60-up">With countless life cycles spinning, collectives of organisms became systems unto themselves.  These systems of systems then spun their energy upwards again. From organism to ecosystem, from ecosystem to biome, energy was spiraled ever outwards towards the enrichment of all.<a href="#footnotes" title="'The thermo-
dynamic transfer of energy into and out of non-­equilibrium states is what has allowed the earth to emerge, persist, and distinguish itself from other aspects of the cosmos.' Thomas Nail, A Theory of the Earth, (Standford University Press, 2021) Chap.1 p.21" onclick="openFootnotes()">⁶⁰</a></p>-->

      <p>From organism to ecosystem, from ecosystem to biome, energy was spiraled ever outwards towards the enrichment of all.</p>
      
      <p>And Earth’s biosphere blossomed!</p>
      
      <p>Returning to the spiral of the salmon's cycles, we can see that its pattern is a magnificent reflection of Earth’s.</p>

     <p id="61-up">Just as Earth’s absorption of solar energy powers the planet's processes, the salmon’s steady absorbtion of nutrient energy powers its life process. And just as Earth spun its energy out to its biosphere, so too did the Salmon to its biome.  Consuming insects and crustaceans, the Salmon gathered nutrient energy, storing it as fats and proteins, and burning it as carbohydrates to power its swim. Then, as the firsh are preyed upon and consumed, their accumulated nutrients are spun outwards into the bellies of countless creatures, and steadily spun out to the broader system of which they are a part.<a href="#footnotes" title="Thomas P. Quinn, The Behavior and Ecology of Pacific Salmon and Trout, Second Edition (University of Washington Press, Seattle, 2018) Chapter 7: The Ecology of Spawning Salmon and Their Carcasses. p 167: '...observations and experiments showed that salmon carcasses enhance algal growth and insect density in streams. Wipfli et al. (1998) reported that reaches of a stream in southeast Alaska accessible to pink salmon had fifteen times more biofilm (microbes covering rocks) and twenty-five times higher densities of macroinvertebrates than reaches of the creek not accessible to salmon.'">⁶¹</a></p>

     <p id="62-up">In this way, over the course of a single cycle, a batch of salmon distribute more nutrients to their ecosystem than they keep for themselves. From a single batch of 2000 to 5200 eggs (weighing only a few grams each), the resulting salmon can accumulate a biomass of several tons. Yet from this concentrated mass of complex nutrients, at the end of a batch's cycle, only 20-50 salmon return to spawn. And at the end of their lifecycle, only several kilograms of eggs remain for the next cycle to begin— the other 99% of the batch's biomass having been dispersed out into the inland ecosystem in the consumed and dying salmon.<a href="#footnotes" title="Davidson, John & May, Travis & Good, Christopher & Waldrop, Thomas & Kenney, Patrick & Terjesen, Bendik & Summerfelt, Steven. (2016). Production of market-size North American strain Atlantic salmon Salmo salar in a land-based recirculation aquaculture system using freshwater. Aquacultural Engineering. 74. 10.1016/j.aquaeng.2016.04.007.">⁶²</a></p>

     

     <p id="63-up">Not only did this pattern contribute to a common home for many creatures to thrive, the spiral ever improved the conditions for the Salmon’s own subsequent generations.  <a href="#footnotes" title="Thomas P. Quinn, The Behavior and Ecology of Pacific Salmon and Trout, Second Edition (University of Washington Press,
    Seattle, 2018) Chapter 7: Carcasses. p 182: '...Research using stable isotopes has shown that the marine-derived nutrients in the salmon carcasses contribute strongly to aquatic and terrestrial ecosystems, affecting bears and other wildlife; juvenile salmon, trout, and other fishes...'">⁶³</a></p>

    <br><img src="https://earthen.io/content/images/2022/06/Salmon-Chart---1200px-2.png" width="100%" alt="Thomas P. Quinn, The Behavior and Ecology of Pacific Salmon and Trout, Second Edition (University of Washington Press, Seattle, 2018) Chapter 7: Carcasses. p 182: '...Research using stable isotopes has shown that the marine-derived nutrients in the salmon carcasses contribute strongly to aquatic and terrestrial ecosystems, affecting bears and other wildlife; juvenile salmon, trout, and other fishes...'"><br>

     <p>Through this spiral, the salmon proliferated in rivers up and down the North Pacific coast of America, contributing to the inexorable enrichment of the land.</p>

     <p>Today, <!--as we focus our efforts on reducing the ecological harm of our modern enterprises,-->as we strive to define the meaning of green for our modern endeavours and enterprises, it is critical to recall that humans also played a part in the flourishing of the pacific coast of north America over the last twelve thousand years.</p>

     <p>Over the millenia, nations such as the Wetʼsuwetʼen have lived side by side the salmon.  From their kincentric view of the world, they saw the salmon as ecological elders.  Over countless generations they learned from them.  Steadily the  Wetʼsuwetʼen wove the salmon's pattern of energy management into the stories, morals and languages of their culture-- which in turn had significant impact on the ecosystem of which their society was part.</p>


     <p>In  Wetʼsuwetʼen culture, the very first Salmon caught each season is shared with every member of the community or family unit.  In this tradition, a morsel of the fish is meticulously distributed among each member, and every bone is taken back to the water.  This dynamic was then followed in the seasonal harvest of tens of thousands of salmon: only as much as each family requires is taken, with the taken being shared among all and the discarded bones being returned to the river.  So ingrained is this spirit of  energetic management, that in their language grammatically it is impossible to speak of 'my salmon' only of 'our salmon'.</p>
      
     <p>This ethic, came to its social culmination in the <i>potlach</i> tradition that the Wet'suwet'en and every other first nation on the Pacific coast shared.  In this ceremony the community would come together to distribute food, goods and luxuries that had been accumulated by some more than others.<a id="64-up" href="#footnotes" title="'For the Gitksan and  Wetʼsuwetʼen, as for other traditional peoples, the various beliefs about the relationship of humans to the land and to the resources which sustain the people are rich and multifaceted, integrated into all aspects of society. They do not have a reductionist perspective which allows separation of the biological from the moral or mythical. Adherence to a wide variety of practices which we might separate into biological and spiritual realms is seen as necessary for the maintenance of the relationship of the people and the land with its plants and animals which sustain human life.  Conservation is interactive with ideology. As Anderson points out, it is in the realm of ideology and myth, which entrain the emotions, that the motivation to defer present gratification for the future common good is obtained. Myths or teaching stories imbue lessons on conservation, which makes possible long term sustainable adaptation, with sufficient emotional loading to make them memorable and to inspire people to put the lessons contained in them into practice.'  Leslie M. Johnson Gottesfeld (1994), Conservation, Territory, and Traditional Beliefs: An Analysis of Gitksan and Wet'suwet'en Subsistence, Northwest British Columbia, Canada. Human Ecology, p20." onclick="openFootnotes()">⁶4</a></p>  
     
     In Banayan's Igorot culture (and many other kincentric societies), such a ceremony has its parralel.  In the yearly celebration of the first rice harvest a slaughtered pig would cut up into a piece for every family of the village, which was then carried home by a representative of each on the tip of their spear.<a id="65-up" href="#footnotes" title="The  Wetʼsuwetʼen were not alone in this way.  Virtually all first nations of the Pacific Northwest held a concept of wealth that was defined not by what one accumulated, but of what one gave away embodied in the the 'potlach' ceremony.  In this widespread tradition, the a community would gather to distribute gifts of all kinds.   The express purpose of these ceremonies was energetic dispersal out-to-all.   All who attended, understood well the ceremony and intention.  Within the context of the potlach, honor and respect was gained not by the wealth itself, but by its flow, not by how much was gathered, but by how much was gifted awaollowing the example of kincentric cultures, the salmon and the Earth we must arrange the financial structure of our aspiring green enterprises accordingly.'" onclick="openFootnotes()">⁶⁵</a></p>  In this way, ceremonies set a pattern for the distribution of surplus energy that was followed in the daily life of the community.</p>


     <p>In the deep resonance of Kincentric cultures and Earth's pattern, we find our second Earthen ethic.</p>

     <p>Just as the Earth tended its cycles towards the spin of energy outwards to the benefit of all, so too must we intend and achieve with our own. Only when the intention and the result of our cyclical processes is the net-outwards distribution of energy, is this Earthen ethic met.  Only then can our enterprises be considered an ecological contribution— and green.</p>

     <p>As we strive to ensure our modern enterprises are green, the second Earthen ethic shows us that their pattern of energy is key.</p>

     <!--<p>Most importantly, we must expand our concept of capital and currency.</p>-->

     <p>As we move on from our old view of humans as separate and exceptional to the biosphere, so too must we move on from a similar view of our enterprises as seperate and exceptional to the ecological flows of energy of which they are part.  In particular, the view that the financial energy that sustains and powers our companies and corporations is seperate and somehow exceptional to Earthen planetary dynamics.  As we transition to an understanding of the inextricable immersion of our economies within Earth’s systems, we can begin to see that the financial energy with which our enterprises operate is in fact a subset energy system of the planet's biosphere.</p>
     
     <p>In this way, we can also begin to see that, like all sub-sets of a common system, there are numerous parralels between financial and ecological systems</p>
     
     <p>Whereas an organism manages its give and take of nutrients over seasonal cycles, an enterprises manages its revenues and expenses over fiscal cycles.  Whereas energy flow through an organism in the form of carbohydrates and are stored as fats and protein, within an enterprise energy flows as currency and is stored as capital and assets.  </p>
     
     <p>Through these parralels, we can observe comparable patterns.</p>
     
     <p>Whether an organism or enterprise, an ecosystem or an economy, as each system spins, their particular give and take of energy creates a spiral pattern all their own in the inclination of their cycles.  Their particular energetic spiral either inclines inwards towards the concentration of energy into themselves or outwards towards the dispersal of energy to the system that encompasses them.<a id="66-up" href="#footnotes" title="Suh, Sangwon. (2004). Materials and energy flows in industry and ecosystem networks. The International Journal of Life Cycle Assessment. 9. 335-336. 10.1007/BF02979425. Materials and energy flow analysis (MEFA) has been widely utilized in ecology and economics, occupying unique positions in both disciplines." onclick="openFootnotes()">⁶⁶</a></p>

     <p>When it comes to our enterprises, their pattern of energy management is determined by the purpose for which the enterprise is established.  The <i>for-what</i> of an enterprise determines how and why it receives revenues and expends expenses— as well as the how and why of its ecological give and take.</p>

    <p>While most enterprises operate with the purpose of meeting human wants and needs— such as for the provision of products and for the delivery of services— often modern enterprises are structured for a deeper reason.</p>

    <p>Many modern enterprises are established by their owners for <i>the purpose of profit</i>: generating more energy than they give back.  This excess energy, although often sourced ecologically, is defined strictly in financial terms. While these for-profit enterprises may provide products, services and even ecological benefits, their structure dictates that their financial surpluses are directed to their owners (or shareholders as the case may be) at the end of each financial cycle. The result is a process of accumulation that over many financial cycles, steadily depletes the ecological and social systems that encompass it.<a id="67-up" href="#footnotes" title="Hinton and Maclurcan, present a compelling argument of the extractive nature of for-profit business.  They propose this ethic of determination: “...in order to determine whether business is generative (contributing to the health of the whole economy) or extractive (taking away from the health of the whole economy), one must ask the question, 'Who profits from the profit?' Jennifer Hinton, Donnie Maclurcan, <i>How on Earth?</i>, (Post Growth Institute, 2006)" onclick="openFootnotes()">⁶⁷</a></p>


    <p>In this way, the energetic inclination of a for-profit enterprise, spins in opposition to the pattern of Earth.  No matter how green-intentioned, no matter how green its short-term impacts may seem, its management of energy is the very opposite of ecological contribution.</p>

    <p>Of course, not all modern enterprises operate <i>for-profit</i>.</p>

    <p>Today, more and more enterprises are aware of the depleting dynamic of profit in-and-of-itself.  In order to contribute to their social and ecological environment, many enterprises choose a <i>‘not-for-profit’</i> energetic structure.  These enterprises strive to return all their revenues back to the pursuit of their social or ecological purpose. </p>

     <p>However, insofar as a not-for-profit enterprise remains fully immersed within the paradigm of profit— where energy is accounted for strictly as revenues and expenses for humans— their energetic structure is insufficient to be green.</p>

     <p>While an enterprise may ensure that all its revenues go out to its social or environmental purpose, insofar as its energy is accounted for solely in financial terms, it will fail to account for its ecological give and take.  In particular: its give and take of carbon, its support or depletion of biodiversity and its raising or lowering of awareness (our next three Earthen ethics).   In this way, a not-for-profit enterprise may return all of its financial energy back to its purpose, yet still be complicit in the systematic depletion of the ecosystems, biomes and the biosphere of which it is part.</p>


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


<script>
// Function to handle click on a highlight
function handleHighlightClick(event) {
  event.stopPropagation();
  const highlight = event.target.closest(".highlight");
  if (highlight) {
    highlight.outerHTML = highlight.innerHTML;
  }
}

// Function to clear the highlights
function clearHighlights() {
  const highlights = document.querySelectorAll(".highlight");
  highlights.forEach(highlight => {
    highlight.outerHTML = highlight.innerHTML;
  });
}

// Add event listeners to all text nodes in the document
const textNodes = document.querySelectorAll("*:not(script):not(style)");
textNodes.forEach(node => {
  node.addEventListener("mouseup", () => {
    const selection = window.getSelection();
    if (selection.toString().length > 0) {
      // Clear any existing temporary highlight
      clearTemporaryHighlight();

      // Create a span element to wrap the selected text
      const span = document.createElement("span");
      span.classList.add("highlight");
      span.style.backgroundColor = "green";
      span.style.color = "var(--background-color)";
      span.title = "Click here to lock highlight";
      span.style.cursor = "pointer";
      span.textContent = selection.toString();

      // Add event listener to highlight to remove it on click
      span.addEventListener("click", handleHighlightClick);

      // Replace the selected text with the highlighted span element
      const range = selection.getRangeAt(0);
      range.deleteContents();
      range.insertNode(span);
    }
  });
});

// Function to clear the temporary highlight
function clearTemporaryHighlight() {
  const temporaryHighlight = document.querySelector(".highlight.temporary");
  if (temporaryHighlight) {
    temporaryHighlight.outerHTML = temporaryHighlight.innerHTML;
  }
}

// Add event listener to remove temporary highlight on click elsewhere on the page
document.addEventListener("click", clearTemporaryHighlight);

</script>


 <script>
 window.onscroll = function() {
  if (document.documentElement.scrollTop > 100) {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("page-content").classList.add("blur");
  }
};

var closeButton = document.querySelector(".close");
closeButton.onclick = function() {
  document.getElementById("myModal").style.display = "none";
  document.getElementById("page-content").classList.remove("blur");
};

var information = document.querySelectorAll(".modal-content > div");
var currentInfo = 0;

function showInfo(n) {
  information[currentInfo].style.display = "none";
  information[n].style.display = "block";
  currentInfo = n;
}

document.querySelector("#information-one .next").onclick = function() {
  showInfo(1);
};

document.querySelector("#information-two .next").onclick = function() {
  showInfo(2);
};

document.querySelector("#information-two .back").onclick = function() {
  showInfo(0);
};

document.querySelector("#information-three .back").onclick = function() {
  showInfo(1);
};

</script>




</body>
</html>

