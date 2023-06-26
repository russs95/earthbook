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
    #ct-chapter-title {
      /*padding-top: 45px;
      */font-size: 9vmin;
      letter-spacing: 0px;
      
      
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
    #ct-chapter-title {
      /*padding-top: 45px;
      */font-size: 10vmin;
      letter-spacing: 2px;
      
      
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
    #ct-chapter-title {
      /*padding-top: 45px;
      */font-size: 10vmin;
      letter-spacing: 2px;
      
      
    }
  }



 @media screen and (min-width: 700px) {


  .chart-image-desktop {
    width: 100%;
    padding: 18px;
    text-align: center;
    margin-top: 10px;
    background-color: var(--slider);
    border-radius: 8px;
    margin-left: -20px;
  }

  .chart-image-desktop img {
    width: 100%;
  }

  .chart-image-mobile {

display: none;
}
}


  @media screen and (max-width: 699px) {

  .chart-image-mobile {
    width: 100%;
    padding: 6px;
    text-align: center;
    margin-top: 10px;
    background-color: var(--slider);
    border-radius: 8px;
    
  }


  .chart-image-mobile img {
    width: 100%;
    height: auto;
  }

  .chart-image-desktop {

    display: none;
  }
  }

  .chart-caption  {
    padding: 15px 5px 15px 5px; 
    text-align: left;
    font-size: smaller;
    font-family:'Mulish', sans-serif;
    color: var(--subdued-text);
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
    <button type=button id="ct-tc-menu" onclick="openContents()" aria-label="Open Table of Contents"></button>
    <div class="ct-holder" style="cursor:pointer;overflow:clip;" onclick="openContents()">
        <div id="ct-chapter-title">The Salmon's Spin</div>   
        <div id="ct-book-title">Tractatus Ayyew</div>
        <div id="ct-chap-location">Earthen Principle No. 2</div>
        <div id="ct-word-count"><i>1,946 words</i></div>
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
  <div id="ct-main">


  <div id="chap-notice">
    <div id="close-notice" onclick="closeWelcomeNotice()">&times;</div>
    <div id="chap-notice-text">
  💡  Looks like its your first time opening this book!  Before you get going, consider taking the quick <a class="java-link" onclick="guidedTour(), closeWelcomeNotice()" aria-label="Open About Screen" title="Learn more about what an Earthbook is">Earthbook features tour</a> and be sure to <a class="java-link" onclick="openSettings(), closeWelcomeNotice()" aria-label="Open Settings" title="Adjust for your eyes">optimize ±</a> the page for your eyes.
   </div>
</div>


<!-- MAIN TEXT CONTENT of the Page
  For footnotes, use these numbers:  ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ⁶⁷  “ ” ³¹⁷²⁰ ²²⁶ ⁴⁷ ⁵⁴  — 
-->




<div class="page-paragraph">
    <p><i>
    Thirteen thousand years ago, as trillion-ton ice-sheets retreated from North America's Pacific coast, barren desolation reigned.  However, in the lingering glacial streams, the continent's revitalization had already begun.   Proliferating river by river down the warming coast, the adventurous ancestors of today's salmon swan inland to deposit their eggs.  Ever since, with each season, their energizing cycle has spun. Come Spring, the salmon roe hatch and emerge from the rocky river bed. The tiny fish gather their strength consuming insects and waterborne larvae.  Come Summer, they set out on a journey to the ocean. Once arrived they feast on nutrient rich marine life. After several years, when they have reached their full size and strength, they are ready to head home.  Come Fall, millions of salmon retrace their river route and an entire ecosystem revels in their return. Bears, eagles and humans gather for grand fishing feasts.  Even the bugs partake! The remnants of consumed carcasses nourish the very insects upon which the salmon first fed.  Meanwhile, those salmon that slipped by, continue to the waters where they were born.  Using the last of their strength, they deposit their eggs in the gravel.  The salmon then die; their decomposition a final nutrient gift to the now rich and diverse river ecosystem that their roe will soon run.
    </i></p>
    </div>

    <br><br>
     <div id="line" style="margin-bottom: 30px;"></div>
    <br><br>

    <div class="chapt-emblem" style="text-align:center;margin:40px 0px 40px 0px;" ><img src="../svgs/salmon-james-madam.svg" width="200" height="121"></div>
    
    <div class="lead-page-paragraph">
    OVER THE LAST MILLENNIUM, the Wet'suwet'en people of North America's Pacific coast have lived alongside the salmon's masterful management of energy. Observing and learning from the salmon the Wet'suwet'en gained the ecological understanding to preside over the steady enrichment of their land. Today, we too have much to learn from the salmon— and from the Wet'suwet'en. As we shall see, the way in which they patterned their lives upon the salmon’s outward spiral of energy provides a green path forward for us and our modern enterprises.  Indeed, the geometric pattern that both the Wet'suwet'en and the salmon share, mirrors the energetic pattern by which Earth itself greened.  This resonance, provides us with the basis for our second Earthen ethic.  With the help of its lens, we can observe clearly the pattern of systemic ecological depletion that underlies our modern for-profit and not-for-profit enterprises.  However, far more importantly, the geometry of the second Earthen ethic provides the foundation by which we may structure our enterprises to ensure that they are in fact social and ecological contributors.</div>
      
    <div class="page-paragraph">

      <p>To begin, let us return once again to our planet's primordial origins and take a closer look at its characteristic pattern of energetic flow.</p>

      <p id="66-up">As we saw in Earth's <a href="stellar.php" title="Chapter 3: A Stellar Story">stellar story</a>, over the last four billion years, the energy of the Sun's relentless blaze coursed through Earth's cycles of geology, ocean and atmosphere. Driven by the rigid dictates of thermodynamics and guided by Earth's unique cosmological character, cycles unfurled that ever better dissipated the Sun's energy. Steadily, configurations of matter organically emerged that gathered, stored, then dispersed energy ever outwards towards equilibrium.<a href="#footnotes" title="Vortical unfolding on a sphererical surface with the proper conditions can tend towards greater and greater order: Guillaume Gauthier et al, (2019) Giant vortex clusters in a two-dimensional quantum fluid, Science https://www.science.org/doi/10.1126/science.aat5718" onclick="openFootnotes()">⁶⁶</a></p>

      <p>Before long, the sun’s shine was being stored in complex, energy-dense molecules <!--such as fats, proteins and carbohydrates--> that were interchangeable among cellular systems. As organisms lived and died, these nutrients were consumed and used by others. Gaining the energy of those before them, organisms reproduced and proliferated; each cycle steadily spinning nutrient energy outwards across the planet’s surface.  From organism to ecosystem, from ecosystem to biome, energy spiraled ever outwards towards the enrichment of all.<a href="#footnotes" title="“The thermodynamic transfer of energy into and out of non-­equilibrium states is what has allowed the earth to emerge, persist, and distinguish itself from other aspects of the cosmos.” Thomas Nail, A Theory of the Earth, (Stanford University Press, 2021) Chap.1 p.21)" onclick="openFootnotes()">⁶⁷</p>

      <!--<div class="quote"><p>“‘The world is a vampire’ as The Smashing Pumpkins sang: a vampire living from the death of the sun. The universe must die to keep living.”</p></div>
      <p style="text-align:right;font-size:0.9em; margin-top:-10px; margin-bottom:20px"> —Thomas Nail, <i>Theory of the Earth</i>, Standford University Press.</p><br><br>

      <p id="60-up">With countless life cycles spinning, collectives of organisms became systems unto themselves.  These systems of systems then spun their energy upwards again. From organism to ecosystem, from ecosystem to biome, energy was spiraled ever outwards towards the enrichment of all.<a href="#footnotes" title="'The thermo-
dynamic transfer of energy into and out of non-­equilibrium states is what has allowed the earth to emerge, persist, and distinguish itself from other aspects of the cosmos.' Thomas Nail, A Theory of the Earth, (Standford University Press, 2021) Chap.1 p.21" onclick="openFootnotes()">⁶⁰</a></p>-->

      
      <p>And Earth’s biosphere blossomed!</p>
      
      <p>Returning to the salmon, we can see that the character of its cycles are a magnificent reflection of Earth’s.</p>

     <p>Just as Earth’s absorption of solar energy powered an endless procession of cycles across its surface, so too did the salmon's absorption of marine nutrients power the endless cycle of its generations.</p>
     
    
     <p id="68-up">Just as the Earth's cycles steadily spun the sun's energy out across the planet's surface, so too did the salmon cycles steadily spin nutrient energy out to its ecosystem.<a href="#footnotes" title="Quinn T. P., Helfield JM, Austin CS, Hovel RA, Bunn AG. A multidecade experiment shows that fertilization by salmon carcasses enhanced tree growth in the riparian zone. Ecology. 2018 Nov;99(11):2433-2441. doi: 10.1002/ecy.2453. Epub 2018 Oct 23. PMID: 30351500." onclick="openFootnotes()">⁶⁸</a></p>

     <p id="69-up">And just as Earth’s outwards energetic spiral steadily greened its biosphere, so too did the salmon's outwards dispersion of nutrients relentlessly contribute to the enrichment of its biome—  a common home for which countless other creatures could flourish.<a href="#footnotes" title="Quinn T. P., The Behavior and Ecology of Pacific Salmon and Trout, Second Edition (University of Washington Press, Seattle, 2018) Chapter 7: The Ecology of Spawning Salmon and Their Carcasses. p 167: '...observations and experiments showed that salmon carcasses enhance algal growth and insect density in streams. Wipfli et al. (1998) reported that reaches of a stream in southeast Alaska accessible to pink salmon had fifteen times more biofilm (microbes covering rocks) and twenty-five times higher densities of macroinvertebrates than reaches of the creek not accessible to salmon." onclick="openFootnotes()">⁶⁹</p>
     
     <p id="70-up">And so too the salmon!</p>
     
     <p id="71-up">As the bears, bugs, eagles and humans with whom it shared interdependence thrived, the living conditions for future salmon generations steadily improved. As the cycles of all these creatures more often than naught also spiraled outwards also, they synced, intertwined and reverberated.<a href="#footnotes" onclick="openFootnotes()" title="Hilderbrand GV, Hanley TA, Robbins CT, Schwartz CC. Role of brown bears (Ursus arctos) in the flow of marine nitrogen into a terrestrial ecosystem. Oecologia. 1999 Dec;121(4):546-550. doi: 10.1007/s004420050961. PMID: 28308364.">⁷⁰</a> Steadily the once barren coastal interior steadily flourished. Salmon populations increased and their spiraling cycle spun with ever more abundance and vitality.<a href="#footnotes" onclick="openFootnotes()" title="Thomas P. Quinn, The Behavior and Ecology of Pacific Salmon and Trout, Second Edition (University of Washington Press, Seattle, 2018) Chapter 7: Carcasses. p 182: '...Research using stable isotopes has shown that the marine-derived nutrients in the salmon carcasses contribute strongly to aquatic and terrestrial ecosystems, affecting bears and other wildlife; juvenile salmon, trout, and other fishes...'">⁷¹</a></p>

</div>


<div class="chart-image-desktop">

    <img src="../pngs/slamon-chart-wide-1200px.png" width="100%" alt="A batch Pacific Salmon roe consists of 2000-5200 eggs.   Over the course of 3-7 years, the salmon hatch, migrate to the ocean, feed, grow to full size, stop eating and return home to lay their eggs.  As members of each batch are caught or die along their journey, the marine nutrients accumulated in their bodies are dispersed to the river ecosystem.  This return is in excess of what was originally absorbed during their time in the river.">
          
     <div class="chart-caption" >'...Research using stable isotopes has shown that the marine-derived nutrients in the salmon carcasses contribute strongly to aquatic and terrestrial ecosystems, affecting bears and other wildlife; juvenile salmon, trout, and other fishes...'  — Thomas P. Quinn, <i>The Behavior and Ecology of Pacific Salmon and Trout</i>, Second Edition (University of Washington Press, Seattle, 2018) Chapter 7: Carcasses. p 182. See also: Davidson, John & May, Travis & Good, Christopher & Waldrop, Thomas & Kenney, Patrick & Terjesen, Bendik & Summerfelt, Steven. (2016). Production of market-size North American strain Atlantic salmon Salmo salar in a land-based recirculation aquaculture system using freshwater. Aquacultural Engineering. 74. 10.1016/j.aquaeng.2016.04.007.</a></div>

</div>


<div class="chart-image-mobile">

    <img src="../pngs/slamon-chart-mobile-800px.png" width="650" height="829" alt="A batch Pacific Salmon roe consists of 2000-5200 eggs.   Over the course of 3-7 years, the salmon hatch, migrate to the ocean, feed, grow to full size, stop eating and return home to lay their eggs.  As members of each batch are caught or die along their journey, the marine nutrients accumulated in their bodies are dispersed to the river ecosystem.  This return is in excess of what was originally absorbed during their time in the river.'">
          
     <div class="chart-caption">A batch Pacific salmon roe consists of 2000-5200 eggs and weights several kilograms.   Over the course of 3-7 years, the salmon hatch, migrate to the ocean, feed, grow to full size, and return home to lay their eggs.  In so doing they acheive a net biomass of several tons.  As members of each batch are caught or die along their journey, the marine nutrients accumulated in their bodies are dispersed to the river ecosystem.  This return is in excess of what was originally absorbed during their time in the river.<a href="#footnotes" onclick="openFootnotes()" title="Thomas P. Quinn, The Behavior and Ecology of Pacific Salmon and Trout, Second Edition (University of Washington Press, Seattle, 2018) Chapter 7: The Ecology of Spawning Salmon and Their Carcasses. p 167: '...observations and experiments showed that salmon carcasses enhance algal growth and insect density in streams. Wipfli et al. (1998) reported that reaches of a stream in southeast Alaska accessible to pink salmon had fifteen times more biofilm (microbes covering rocks) and twenty-five times higher densities of macroinvertebrates than reaches of the creek not accessible to salmon.'">⁶⁹</a></div>

</div>
     
   
<!--
  Indeed, over time the Salmon's cycle evolved to minimize any held over nutrients (in the form of eggs or surviving fish) and to maximize the amount of surplus energy dispersed (in the form of biomass and nutrients).

     <p>As a direct consequence of this outward energetic spiral, the salmon proliferated in rivers up and down the North Pacific coast of America, contributing to the inexorable enrichment of the land.  While bears, bugs and humans and countless other creatures also embodied this pattern of energy management, the Salmon's example is so striking, that it provides a path that we can stive to follow— our second Earthen ethic.</p>
    
    The Salmon's pattern of energy management is so striking, that it provides a path that we can stive to follow— our second Earthen ethic.-->

    <div class="page-paragraph">
   
  
<!-- HMMMMM
     <p>Here it is important emphasize that the Salmon's pattern is not different than its fellow organisms.  If we examined closely the bears, eagles, bugs, humans and algae that are the Salmon's neighbours, we would observe that each played its own parts in the regeneration of North America's barren coast by manifesting the same energtic tendencies in its life cycles.  Nor is it surprising that the Salmon emulate Earth's energetic pattern.  Indeed, it is the  energetic tendency of the Salmon (and that of all their fellow organisms) comprise the ecosystems and biomes that make up the biosphere.</p>-->

     <p>Within this great green unfolding, we find our second Earthen ethic.</p>

     <p><i>Just as the salmon and Earth tended their cycles towards the spin of energy outwards to all, so too must we intend and achieve with our own. Only when the intention and the result of our cyclical processes is the net-outwards distribution of energy, is this second Earthen ethic met.  Only then can our enterprises be considered an ecological contribution— and green.</i></p>

     <p>As we emphasized in <i>Tractatus Ayyew: Book One</i>, certain great green nations, ancient and ongoing, have long embodied this pattern of ecological contribution.  In particular: <i><a href="kincentric.php">cyclocentric cultures</a></i>.  As we saw, such societies are distinguished by their priority of syncing with the cycles of plants and animals around them— beings whom they perceived as kindred relations.  These cultures, rather than view human endeavour as exceptional and separate from their fellow creatures, instead understood all their enterprises to be congruent contributions to a shared system.</p>

    <p  id="71-up">As we saw in our <a href="spirals.php">last chapter</a>, the Igorots with their Ayyew ethos of cyclic syncing, are one such society.<a href="#footnotes" onclick="openFootnotes()" title="Chapter 8: Cycles that Spiral.  Perhaps the most poignant example of this is celebrated integration of pigs in Igorot homes and communities.  All organic waste is given to the household pigs who's manure is then distributed back to the fields after each harvest.  Come the seasonal Bugnas festival, butchered pigs are then cut up, with each community household received a piece, which they take back to their homes on the tip of a spear.">⁷²</p>

<p>And, so too the Wet'suwet'en.</p>

<p id="72-up">From the Wet'suwet'en view of the world, the salmon were not just kindred creatures.  They were ecological elders and respected teachers.<a href="#footnotes" onclick="openFootnotes()" title="For the Wet’suwet’en the example of the salmon was impossible to overlook.  Among the multitude of creatures around them, the extremes of life and death were never so dramatic as with the salmon.  In their autumn run, the vitality and numbers of the salmon would make the waters boil only for them to die and decay en masse after laying their eggs.">⁷²</a></p>

<p id="73-up">Over the millennia the Wet'suwet'en learned from the salmon. Over countless generations, they wove the salmon's spiral pattern of energy management into their stories, traditions and values<!-- which in turn had significant impact on the ecosystem of which their society was part.--><a href="#footnotes" href="#footnotes" onclick="openFootnotes()" title="'For the Gitksan and  Wetʼsuwetʼen, as for other traditional peoples, the various beliefs about the relationship of humans to the land and to the resources which sustain the people are rich and multifaceted, integrated into all aspects of society. They do not have a reductionist perspective which allows separation of the biological from the moral or mythical. Adherence to a wide variety of practices which we might separate into biological and spiritual realms is seen as necessary for the maintenance of the relationship of the people and the land with its plants and animals which sustain human life.  Conservation is interactive with ideology. As Anderson points out, it is in the realm of ideology and myth, which entrain the emotions, that the motivation to defer present gratification for the future common good is obtained. Myths or teaching stories imbue lessons on conservation, which makes possible long term sustainable adaptation, with sufficient emotional loading to make them memorable and to inspire people to put the lessons contained in them into practice.'  Leslie M. Johnson Gottesfeld (1994), Conservation, Territory, and Traditional Beliefs: An Analysis of Gitksan and Wet'suwet'en Subsistence, Northwest British Columbia, Canada. Human Ecology, p20." onclick="openFootnotes()">⁷³</a></p>


<p id="74-up">In  Wet'suwet'en culture, the very first salmon caught each Autumn is shared within the community or family unit.  In this tradition, a morsel of the fish is meticulously distributed among each member, while each and every bone is taken back and returned to the river.  This pattern is then followed in the seasonal harvest of tens of thousands of salmon. Only as much salmon required by each family is taken, while the vast majority are allowed to pass through to lay their eggs and be consumed by other creatures.  Surplus catch are shared among the community as needed, while all the bones are brought back to the water <a href="#footnotes" href="#footnotes" onclick="openFootnotes()" title="Leslie M. Johnson Gottesfeld (1994), Conservation, Territory, and Traditional Beliefs: An Analysis of Gitksan and Wet'suwet'en Subsistence, Northwest British Columbia, Canada. Human Ecology, p20.">⁷⁴</a>. So ingrained is this spirit of dispersal, that in the Wetʼsuwetʼen language the very word for 'salmon' is a grammatical exception: it is impossible to speak of 'my salmon' only of 'our salmon'.</p>
 
<p id="75-up">For the Wet'suwet'en, this ethic culminates in the <i>potlatch</i> (a tradition shared with virtually every other first nation on the North West coast and interior).  In this seasonal ceremony, the community comes together to distribute items of value, function and beauty that had been accumulated by some more than others.  Everything from food, to blankets, to jewelery to currency are brought to be gifted at the ceremony.  In the potlatch, the more that a family or an individual can distribute out to others, the more respect and honor is gained.<a href="#footnotes" href="#footnotes" onclick="openFootnotes()" title="See https://en.wikipedia.org/wiki/Potlatch for a helpful overview of this tradition.">⁷⁵</a></p>


<p>Over the millennia, by embodying this pattern in both their social and ecological ways, the Wet'suwet'en have passed a steadily richer and more abundant biome down to their children.  In their land the salmon have always returned, the bears, eagles and forest have thrived in diversity, abundance and vitality.</p>



<!--

<p>In Banayan's Igorot culture (and many other kincentric societies), such a ceremony has its parralel.  In the yearly celebration of the first rice harvest a slaughtered pig would cut up into a piece for every family of the village, which was then carried home by a representative of each on the tip of their spear.  As we saw in the last chapter, this pattern of energetic dispersal is a key component of their Ayyew virtue.<a id="65-up" href="#footnotes" title="The  Wetʼsuwetʼen were not alone in this way.  Virtually all first nations of the Pacific Northwest held a concept of wealth that was defined not by what one accumulated, but of what one gave away embodied in the the 'potlatch' ceremony.  In this widespread tradition, the a community would gather to distribute gifts of all kinds.   The express purpose of these ceremonies was energetic dispersal out-to-all.   All who attended, understood well the ceremony and intention.  Within the context of the potlatch, honor and respect was gained not by the wealth itself, but by its flow, not by how much was gathered, but by how much was gifted awaollowing the example of kincentric cultures, the salmon and the Earth we must arrange the financial structure of our aspiring green enterprises accordingly.'" onclick="openFootnotes()">⁶⁵</a></p>  

<p>The way in which Wet'suwet'en culture embodied the Salmon's pattern into both their social and ecological management of energy, is an example which today's keen green enterprises may follow to align with our second Earthen ethic.  Inspired by the Wet'suwet'en's absence of distinction between ecology and economic energy, we can address the human-centricism embedded in our view of finance and enterprise.   In particular, the view that the financial energy that sustains and powers our companies and corporations is somehow seperate and exceptional to Earthen planetary dynamics.</p>-->

<p>Today, as our modern enterprises strive to go green, the Wet'suwet'en show us the way forward.</p>

<p>Inspired by their understanding of social and ecological energy as one and the same, we can address the human-centric assumption embedded in our modern understanding of enterprise and economy.  In particular, the view that financial energy is separate and exceptional to Earthen planetary dynamics.  This modern economic axiom is a logical consequence of the deep rooted anthropocentricism that underlies the modern view of the world— an ontological foundation that, as we argued in Chapter 5,  has been long shown to be empirically faulty and scientifically fallacious.</p>

<p>And long overdue for excision.</p>

<p>With an updated understanding of our economies as inextricably immersed within Earth’s systems, we can see our financial energy flows anew.  In fact, our economy and enterprises are subset energy systems of the planet's biosphere, and, most significantly, are subject to the same planetary principles.</p>
     
    <!-- <p>Whereas an organism manages its give and take of nutrients over seasonal cycles, an enterprises manages its revenues and expenses over fiscal cycles.  Whereas energy flow through an organism in the form of carbohydrates and are stored as fats and protein, within an enterprise energy flows as currency and is stored as capital and assets.  </p>
     
     <p>Through these parralels, we can observe comparable patterns.</p>-->
     
     <p id="76-up">Whether it is an organism or enterprise, an ecosystem or an economy, as each system spins, their pattern of energetic give and take tends their cycles either inward our outward.  The spiral that emerges either inclines inwards towards the concentration of energy into themselves or outwards towards the dispersal of energy to their encompassing system.<a href="#footnotes" onclick="openFootnotes()" title="Suh, Sangwon. (2004). Materials and energy flows in industry and ecosystem networks. The International Journal of Life Cycle Assessment. 9. 335-336. 10.1007/BF02979425. Materials and energy flow analysis (MEFA) has been widely utilized in ecology and economics, occupying unique positions in both disciplines.">⁷⁶</a></p>

     <p>When it comes to our human enterprises, their pattern of energy management is determined by the purpose <i>for which</i> the enterprise is established.  The <i>for</i> of an enterprise determines how and why it receives revenues and expends expenses— as well as the how and why of its ecological give and take.</p>

    <p>While most enterprises operate with the purpose of meeting human wants and needs— such as for the provision of products and for the delivery of services, modern enterprises tend to be structured for a deeper reason. Namely, <i>for the purpose of profit</i>: generating more energy for themselves (i.e. their owners or shareholders) than they give back.  This surplus, <!--although sourced ecologically--> is defined strictly from a paradigm of financial energy: profit and loss, revenues and expenses.</p>
      
    <p  id="77-up">Within this profit paradigm, such <i>for-profit</i> enterprises may provide products, services and even environmental contributions.  However their underlying structure dictates that their financial surpluses are directed back to themselves at the end of each financial cycle. The result is an inwards spiral of accumulation that over many financial cycles, steadily depletes its encompassing ecological and social systems.<a href="#footnotes" onclick="openFootnotes()" title="Hinton and Maclurcan, present a compelling description of the extractive and depleting nature of for-profit business.  They propose this ethic of determination: “...in order to determine whether business is generative (contributing to the health of the whole economy) or extractive (taking away from the health of the whole economy), one must ask the question, 'Who profits from the profit?' Jennifer Hinton, Donnie Maclurcan, How on Earth?, (Post Growth Institute, 2006)">⁷⁷</a></p>


    <p>Such a spin is in opposition to Earth's pattern.  No matter how green-intentioned and no matter how "green" its short-term impacts may seem, the net-effect of a for-profit enterprise is inevitably that of systematic ecological depletion.</p>

    <p>Of course, not all modern enterprises operate for-profit.</p>

    <p>Today, more and more enterprises are aware of the depleting dynamic of profit in-and-of-itself.  In order to contribute socially and environmentally, many enterprises choose a <i>‘not-for-profit’</i> energetic structure.  These enterprises strive to return their financial surpluses back to the pursuit of their social or environmental purpose.</p>

     <p>However, insofar as a not-for-profit enterprise remains fully immersed within the profit paradigm— <i>where energy is accounted for strictly as financial give and take</i>— their energetic structure is insufficient to be green.</p>

     <p>While a not-for-profit enterprise may ensure that all its revenues goes out to its social or environmental purpose, insofar as its energy is accounted for solely in financial terms, it will fail to account of its ecological give and take.  In particular: its give and take of carbon, its support or depletion of biodiversity and its raising or lowering of awareness (our next three Earthen ethics).   In this way, while a not-for-profit enterprise may return all of its financial energy back to its social purpose (or even environmental purpose) without stepping out of the profit-paradigm, it fails to embody our second Earthen ethic.</p>


     <p>After all, while an enterprise may sequester much carbon and support many species— it could very well be that more carbon is emitted and more diversity depleted to achieve these short-term results! Without a systemic accounting thereof, one cannot be certain whether its net-impact is in fact a net-green contribution. 
    </p>
    
    <p>In other words, without both an intention of contributing socially and ecologically— <i>and an accounting and disclosure of both</i>— an enterprise will remain complicit in a dynamic of systematic ecological depletion.  
    </p>

     

     <p>However, with Earth's example as our guide, the path ahead has never been more clear.</p>


      <div class="chart-image-desktop">
          <img src="../pngs/forProfit-vs-forEarth-1200px.png" width="100%" alt="For-profit: An inwards spiral of financial energy over a fiscal cycle.  No ecological accounting.  VS  For-Earth: An outwards spiral of ecological and financial energy over a fiscal cycle.">
              
          <div class="chart-caption" >Over the course of a fiscal cycle, as a for-Earth enterprise's budget is spent, revenues flow inwards and expenses outwards, while the difference is directed out-to the benefit of the ecology/economy of which the enterprise is part.  The enterprises give and take of carbon, biodiversity, and other primary materials (i.e. water, plastic, lithium, etc.) is likewise managed.</div>

      </div>

      <div class="chart-image-mobile">
          <img src="../pngs/forProfit-vs-forEarth-800px.png" width="100%" alt="For-profit: An inwards spiral of financial energy over a fiscal cycle.  No ecological accounting.  VS  For-Earth: An outwards spiral of ecological and financial energy over a fiscal cycle.">
                
          <div class="chart-caption" >Over the course of a fiscal cycle, as a for-Earth enterprise's budget is spent, revenues flow inwards and expenses outwards, while the difference is directed out-to the benefit of the ecology/economy of which the enterprise is part.  The enterprises give and take of carbon, biodiversity, and other primary materials (i.e. water, plastic, lithium, etc.) is likewise managed.</div>

      </div>

      <p>Just as just as the Wet'suwet'en understood human and ecological energy as one, so too must we.  And just as a salmon's energetic pattern is embeded deep in its DNA, so too must the Earthen pattern be embodied in the very structure of our keen green enterprises.  In particular, a cyclical pattern of directing surplus energy to the benefit of both our fellow humans and our kindred relations: not-for-profit enterprises purposed for the enrichment of our common home.  Such a <i>for-Earth</i> structure must be publically declared and accounted for— ensuring that the enterprises's surpluses go towards fulfilling and meeting the other four Earthen ethics.</p>

     <p>That said, the outwards spiral of energy is only one half of Earth's spiral pattern of enrichment.</p>

     <p>There is yet the matter of our matter.</p>

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
        
        <a href="#66-up" class="footnote">   
        <div class="footnote-number">66.</div>
        <div class="footnote-text">In addition to work of Jeremy England on the second law of thermodynamics relevance to life's development discussed in our last chapter (Jeremy L. England et al., Dissipative adaptation in driven self-assembly, Nature Nanotechnology, 2015) there is indication that this is the consequence of energy vortexes unfolding upon a spherical surface: Guillaume Gauthier et al, Giant vortex clusters in a two-dimensional quantum fluid, (2019, Science) https://www.science.org/doi/10.1126/science.aat5718</div>
        </a>

        <a href="#67-up" class="footnote">   
        <div class="footnote-number">67.</div>
        <div class="footnote-text">'The thermodynamic transfer of energy into and out of non-­equilibrium states is what has allowed the earth to emerge, persist, and distinguish itself from other aspects of the cosmos.' Thomas Nail, <i>A Theory of the Earth</i>, (Stanford University Press, 2021) Chap.1 p.21)
        </div>
        </a>


        
        
       <a href="#68-up" class="footnote">   
        <div class="footnote-number">68.</div>
        <div class="footnote-text">Haggan, N., Turner, N.J., Carpenter, J., Jones, J.T., Menzies, C. and Mackie, Q., <i>12,000+ years of change: Linking traditional and modern ecosystem science in the Pacific Northwest</i> (2004, UBC Fisheries Centre, Vancouver BC) p4: 'As the ice retreated, some 10,000 stocks of salmon colonized 3,600 rivers and streams in what is now British Columbia.</div>
        </a>

        <a href="#69-up" class="footnote">   
        <div class="footnote-number">69.</div>
        <div class="footnote-text">In addition to work of Jeremy England on the second law of thermodynamics relevance to life's development discussed in our last chapter (Jeremy L. England et al., Dissipative adaptation in driven self-assembly, Nature Nanotechnology, 2015) there is indication that this is the consequence of energy vortexes unfolding upon a spherical surface: Guillaume Gauthier et al, Giant vortex clusters in a two-dimensional quantum fluid, (2019, Science) https://www.science.org/doi/10.1126/science.aat5718</div>
        </a>

      

        <a href="#70-up" class="footnote">   
        <div class="footnote-number">70.</div>
        <div class="footnote-text">Thomas P. Quinn, <i>The Behavior and Ecology of Pacific Salmon and Trout</i>, Second Edition (University of Washington Press, Seattle, 2018) Chapter 7: The Ecology of Spawning Salmon and Their Carcasses. p 167: '...observations and experiments showed that salmon carcasses enhance algal growth and insect density in streams. Wipfli et al. (1998) reported that reaches of a stream in southeast Alaska accessible to pink salmon had fifteen times more biofilm (microbes covering rocks) and twenty-five times higher densities of macroinvertebrates than reaches of the creek not accessible to salmon.  
        </div>
        </a>

        <a href="#71-up" class="footnote">   
        <div class="footnote-number">71.</div>
        <div class="footnote-text">Davidson, John & May, Travis & Good, Christopher & Waldrop, Thomas & Kenney, Patrick & Terjesen, Bendik & Summerfelt, Steven. (2016). Production of market-size North American strain Atlantic salmon Salmo salar in a land-based recirculation aquaculture system using freshwater. Aquacultural Engineering. 74. 10.1016/j.aquaeng.2016.04.007. 
        </div>
        </a>

        <a href="#72-up" class="footnote">   
        <div class="footnote-number">72.</div>
        <div class="footnote-text">Thomas P. Quinn, The Behavior and Ecology of Pacific Salmon and Trout, Second Edition (University of Washington Press, Seattle, 2018) Chapter 7: Carcasses. p 182: '...Research using stable isotopes has shown that the marine-derived nutrients in the salmon carcasses contribute strongly to aquatic and terrestrial ecosystems, affecting bears and other wildlife; juvenile salmon, trout, and other fishes...'
        </div>
        </a>

        <a href="#73-up" class="footnote">   
        <div class="footnote-number">73.</div>
        <div class="footnote-text">'For the Gitksan and  Wetʼsuwetʼen, as for other traditional peoples, the various beliefs about the relationship of humans to the land and to the resources which sustain the people are rich and multifaceted, integrated into all aspects of society. They do not have a reductionist perspective which allows separation of the biological from the moral or mythical. Adherence to a wide variety of practices which we might separate into biological and spiritual realms is seen as necessary for the maintenance of the relationship of the people and the land with its plants and animals which sustain human life.  Conservation is interactive with ideology. As Anderson points out, it is in the realm of ideology and myth, which entrain the emotions, that the motivation to defer present gratification for the future common good is obtained. Myths or teaching stories imbue lessons on conservation, which makes possible long term sustainable adaptation, with sufficient emotional loading to make them memorable and to inspire people to put the lessons contained in them into practice.'  Leslie M. Johnson Gottesfeld (1994), Conservation, Territory, and Traditional Beliefs: An Analysis of Gitksan and  Wetʼsuwetʼen Subsistence, Northwest British Columbia, Canada. Human Ecology, p20.
        </div>
        </a>

        <a href="#74-up" class="footnote">   
        <div class="footnote-number">74.</div>
        <div class="footnote-text">The  Wetʼsuwetʼen were not alone in this way.  Virtually all first nations of the Pacific Northwest held a concept of wealth that was defined not by what one accumulated, but of what one gave away embodied in the the 'potlatch' ceremony.  In this widespread tradition, the a community would gather to distribute gifts of all kinds.   The express purpose of these ceremonies was energetic dispersal out-to-all.   All who attended, understood well the ceremony and intention.  Within the context of the potlatch, honor and respect was gained not by the wealth itself, but by its flow, not by how much was gathered, but by how much was gifted awaollowing the example of kincentric cultures, the salmon and the Earth we must arrange the financial structure of our aspiring green enterprises accordingly.' 
        </div>
        </a>

        <a href="#75-up" class="footnote">   
        <div class="footnote-number">75.</div>
        <div class="footnote-text">Suh, Sangwon. (2004). Materials and energy flows in industry and ecosystem networks. The International Journal of Life Cycle Assessment. 9. 335-336. 10.1007/BF02979425. Materials and energy flow analysis (MEFA) has been widely utilized in ecology and economics, occupying unique positions in both disciplines.
        </div>
        </a>


        <a href="#76-up" class="footnote">   
        <div class="footnote-number">76.</div>
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

