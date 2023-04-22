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
$page_number = "6";
$page_title = "An Interstellar Story | Tractatus Ayyew - An Earthbook";
$chap_name = "An Interstellar Story";
$chap_number = "Bk 1, Chap. 3, ";?>

<head>


<?php require_once ("../header.php");?>


<!--META TAGS
Must be updated for each page-->

<meta property="article:modified_time" content="2023-02-25T09:14:13+00:00">

<meta name="keywords" content="cosmology, cosmological character, entropy, thermodynamics, dissipation, carbon, spiral, fossil fuels, petrocapital, economy, polymers, plastic, billiard balls, profit, recycle, recycling, technology, industry, grey, history, humanity, human "> 
<meta name="description" content="A brief history of plastic's stellar origins, Earth's creation and the rise of modern humanity's ecological relationship.">


<meta name="twitter:label1" content="Est. reading time">
<meta name="twitter:data1" content="10 minutes"> 
	
<meta property="og:description"   content="A brief history of plastic's interstellar origins, Earth's creation and humanity's rise."/>


<style>

  #ct-chapter-title {
  
      font-size: 10vmin;
      letter-spacing: 1px;
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
  <button type=button id="ct-tc-menu" onclick="openContents()" style="background-color:var(--header-footer);" aria-label="Open Table of Contents"></button>
  <div class="ct-holder" style="cursor:pointer;" onclick="openContents()">
        <div id="ct-chapter-title">An Interstellar Story</div>
        <div id="ct-book-title">Tractatus Ayyew</div>
        <div id="ct-chap-location">Book One | Chapter Three</div>
        <div id="ct-word-count"><i>1,060 words</i></div>
      </div>
  </div>

  <?php require_once ("includes/eco-curtain.php");?>


<!-- Page Title Section-->

  <div id="ct-chapt-graphic" class="background-3">
  </div>


  <div id="up-arrow"></div>


  <div id="ct-main">


<!-- MAIN TEXT CONTENT of the Page
  For footnotes, use these numbers:  ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ⁰  “ ” ¹⁰ ¹³
-->

     <div class="lead-page-paragraph" id="13-up">
        OVER 5 BILLION YEARS AGO, IN A CLOUD OF STELLAR DUST our solar system swirled together. As cosmic matter collided and coalesced, growing ever denser, our sun ignited.  Within the remaining spiraling debris, further matter and momentum began to merge—  falling into orbit as dense clumps around our young star.  As each gained cohesion and coherence, the planets of our solar system came to be. Steadily, each planet arrived at its own unique combination of energy and mass— of solar distance and spin, of elemental abundance and chemical composition, of axial tilt and surface temperature— a planetary configuration that just as it coalesced, so too it began to unfold.<a href="#footnotes" title="For an excellent account of this process see: Guido Tonelli, Genesis: The Story of How Everything Began, trans. Erica Segre, Simon Carnell (Farrar, Straus and Giroux, 2021)">¹³</a>
     </div>

    <div class="page-paragraph">

    <p id="14-up">Like all its solar system siblings, Earth was at first a barren and desolate place.  For our planet's first two billion years, its atmosphere was full of carbon dioxide, making its climate hot, harsh and unstable.<a href="#footnotes" title="“Atmospheric CO2 levels are estimated to have been 100 times what they are today 2.2 billion years ago”.  Rye, R., Kuo, P.HO., and Holland, H.D., Atmospheric carbon dioxide concentrations before 2.2 billion years ago. (Nature,  1995), 379, 6013-75. ">¹⁴</a> For eons, its surface was distinguished solely by the ebb and flow of tectonic plates, of ocean currents and atmospheric flows.  However, as these primordial cycles spun under the relentless shine of the sun, the Earth we know now began to emerge.  </p>

      <p id="15-up">For as the sun shone down, entropy demanded dissipation.<a href="#footnotes" title="“The earth is more like an eddy in a river through which flows of matter continuously stream. It is replenished and depleted in a vortical cosmic dance.” Thomas Nail, Theory of the Earth (Stanford University Press, 2021).">¹⁵</a>  Like the run of rain down a mountainside cascading into the twists and turns of a stream, the sun’s ever arriving blaze cascaded across Earth’s surface.  Just as a mountain’s contoured character leads to rivers and valley's that are all its own, so too Earth’s planetary character led to flows of energy all its own.</p>


      <p id="16-up">Driven and determined by its unique planetary configuration, Earth's cosmological character began to blossom.  Steadily, processes, cycles and systems began to unfold with a distinctly Earthen character. Hand in hand with the dictates of thermodynamics, Earth’s cycles tended their spin towards ever better dissipations of energy.  Steadily, new chemical combinations unfolded to better disperse the sun’s blaze.  <!--Steadily, the largest cycles of earth, water and air fractaled into a thousand smaller ones, and those then into a million more.-->  Steadily, the tiniest cycles whirled together into larger systems that began to drive themselves onward.<a href="#footnotes" title="Dylan T. Holden, Nicolás M. Morato, and R. Graham Cooks, Aqueous microdroplets enable abiotic synthesis and chain extension of unique peptide isomers from free amino acids (Proceedings of the National Academy of Sciences, Vol. 119 | No. 42, October 18, 2022)">¹⁶</a>  Steadily, these systems unfurled into cells, organisms and eventually, into ecosystems.<a href="#footnotes" title="This view is inspired by our ayyew interpretation of the biological implications of the second law of thermodynamics. We’ll go much deeper into this into Chapter 7.  See: Jeremy L. England et al. (2015), Dissipative adaptation in driven self-assembly (Nature Nanotechnology, 2015).">¹⁷</a></p>

      <p id="18-up">As ever more effective patterns of dissipation emerged, plants rapidly dispersed across the planet's surface. By capturing carbon out of the air, they used it to build their bodies and to gather and hold energy. Plants began to compose leaves, flowers and towering trunks while other organisms discerned how to decompose them.</p>
      
      <p>As they did so, they interacted and adapted— and as they adapted, they diversified and intertwined.  A vibrant matrix of mutual support began to weave itself across Earth's surface.</p>
      
      <p>Soon forests, fields and fungi covered the planet.  Animals, algae and dinosaurs, all made from intricate patterns of carbon, emerged.  As these creatures lived and died their carbon matter spiralled from one organism into another while their nutrient energy spiraled outwards through the web of ecosystems that came to comprise Earth's biosphere.<a href="#footnotes" title="The events of the first 3.5 billion years of evolution are coming to light at last and they include far more drama and intrigue than we ever imagined”  Michael Marshall, In the beginning: The full story of life on Earth can finally be told. (NewScientist, 2019).">¹⁸</a></p>

      <p>One after the other, each fallen generation was covered up by the next.  Whether on a forest floor or the floor of the ocean, slowly and steadily, layers of life were buried under silt and sediment.  Over hundreds of millions of years, Earth compressed and compacted the biomass of these ancient organisms— indefinitely concentrating and securing their carbon deeper and deeper underground.</p>

      <p id ="19-up">Although Earth's organisms breathed out carbon dioxide, the subtractive spin of their cycles tended to sequester more carbon into the ground than they added back into the air.  With more and more organisms living and dying, living and dying, soon great quantities of carbon were removed out of the atmosphere.  With more carbon being sequestered all the time, Earth's climate stabilized<a href="#footnotes" title="Bekker, A., Holland,Wang, P. et al., Dating the rise of atmospheric oxygen, (Nature, 2004) 427, 117-20.">¹⁹</a> and the biosphere flourished.</p>

      <p>Cradled by the verdant abundance, over the last 30 million years, a variety of bipedal apes emerged from the forests— and we sapiens shuffled onto the scene.</p>

      <p>As we struggled to survive, we figured out fire.</p>
      
      <p>First, we started by burning wood to warm our caves. Then to heat our homes. Then to fuel our forges.  It wasn’t long then til we discovered Earth’s long buried carbon stores. </p>

      <p>We realized that they were far richer in energy.</p>

     <p>Some of us (but certainly not all of us) began to unearth this ancient carbon— what we came to call coal, natural gas and petroleum.  As certain societies became better and better at extracting and burning it (those others kept-on just fine), it came to turn our wheels, power our our machines, and fuel our factories. As carbon came to drive entire economies, we gave it a new name: <i>fossil fuels</i>. </p>

     <p id="20-up">However, despite the nifty name, these fossil deposits were never at first fuels.  To make them so required refinement— an intensive process that always resulted in leftovers that could not be used.<a href="#footnotes" title="Our research indicates that 4-14% of crude oil that is processed cannot be refined into fuels.  This rate various with the geological source and chemical composition of the crude.  See: UK Oil consumption, (British Plastics Federation, 2008), Ref PD/LFH/19/8/08. Also: Russell Maier, Ani Himawati, The Rise of the Regenerative Ecobrick Movement, (Le Havre University: Bandung Spirit Conference, 2019).">²⁰</a>  With nowhere to go, these chemicals began to pile up.<a href="#footnotes" title="“Oil refineries run 24-7 and are continuously generating by-products that must be disposed of, such as ethylene gas... propylene,  acrylonitrile [and other chemicals which are ideal for making plastic].  Plastics are a small piece of the petroleum industry, representing a minor fraction of the fossil fuels we consume.  But the economic imperatives of the petroleum industry have powered the rise of Plasticville.” Susan Freinkel, Plastic: A Toxic Love Story, (Houghton Mifflin Publishing Company, 2011), p7.">²¹</a></p>


     <p>We soon realized that the residuals of refinement could be used too.  With a little chemistry, polymers could be produced—and with a little more; an endless array of marvelous materials.</p>

     <p>Plastics had arrived.</p>

     <p id="22-up">Soon, we were solving all sorts of problems by making all sorts of amazing things.  No longer did elephants need to be killed to make ivory billiard balls.<a href="#footnotes" title="With the rise in popularity of billiards during the 1850’s African elephants were being slaughtered en masse for their ivory to produce balls.  A competition to find an alternative material inspired the first experiments with petroleum by-products.">²²</a>  No longer were expensive silver plates required to take a photograph.<a href="#footnotes" title="Plastics revolutionized the early photography industry that was severely limited by bulky and expensive equipment, enabling picture taking to become a household activity.">²³</a>  No longer was the shelf life of fresh food limited to a few days.<a href="#footnotes" title="Transparent plastic film, originally developed by the cigarette industry, came to dramatically increase the shelf life of fresh foods.  Carmen Nobel, How Cellophane Changed the Way We Shop for Food, (Harvard Business School, 2017).">²⁴</a>  Plastics enabled a slew of new products and technologies— and new ways to reduce expenses, increase revenues and accrue capital.</p>

     <p>Powered by the ever increasing flow of petroleum and profit, industries grew and grew.  As they expanded, so did the extraction of carbon, the refinement, and the economies based upon it all. As it all spun faster and faster, there was always that little bit that couldn’t be processed.  This led to industry producing more and more plastic at lesser and lesser cost. </p>

     <p>As we consumed one plastic product after another, we tried our best to reuse and recycle.  However, there was already so much cheap new plastic, there was little profit in processing the old— better to burn it, dump it or send it somewhere else.</p>

     <p id="25-up">Soon there was so much plastic that it began to spill out of our homes, enterprises and industries.    With growing alarm and anxiety we watched as our plastic clogged rivers, littered beaches and piled into great smoking mountains.<a href="#footnotes" title="Observing plastic pollution and extreme weather are taking a growing emotional toll. Beyond Storms & Droughts: The Psychological Impacts of Climate (American Psychologists Association, 2014).  And:  Mental Health and Our Changing Climate: Impacts, Implications, and Guidance  (American Psychologists Association, 2017).">²⁵</a>  The particles of plastic were everywhere— inside the bodies of fish and animals— and us.<a href="#footnotes" title="'Our study is the first indication that we have polymer particles in our blood.' Heather A. Leslie, et al, Discovery and quantification of plastic particle pollution in human blood, (Environment International, 2022) Volume 163, 107199, ISSN 0160-4120">²⁶</p>

     <p>Shocked, shamed and determined, industry strove to amend their mistakes and improve their ways. Industry, did their best to convince themselves, and everyone else, that there was a solution just around the corner. Enterprises strove valiantly to make their processes, products and packaging less harmful, less polluting and less damaging.</p>

     <p>Yet after turning countless corners, despite being less harmful and polluting, polluting and harmful their processes remained.</p>

     <p>Unabated, the grey flows of plastic and pollution continued to grow.</p>

     <p>And with it, our despair.</p>

  
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
      
        
        <a href="#13-up" class="footnote">   
        <div class="footnote-number">13.</div>
        <div class="footnote-text">Guido Tonelli, Genesis: The Story of How Everything Began, trans. Erica Segre, Simon Carnell (Farrar, Straus and Giroux, 2021)</div>
        </a>

        <a href="#14-up" class="footnote">   
        <div class="footnote-number">14.</div>
        <div class="footnote-text">“Atmospheric CO2 levels are estimated to have been 100 times what they are today 2.2 billion years ago”.  Rye, R., Kuo, P.HO., and Holland, H.D., Atmospheric carbon dioxide concentrations before 2.2 billion years ago. (Nature,  1995), 379, 6013-75. </div>
        </a>

        <a href="#15-up" class="footnote">   
        <div class="footnote-number">15.</div>
        <div class="footnote-text">“The earth is more like an eddy in a river through which flows of matter continuously stream. It is replenished and depleted in a vortical cosmic dance.” Thomas Nail, Theory of the Earth (Stanford University Press, 2021).
        </div>
        </a>

        <a href="#16-up" class="footnote">   
        <div class="footnote-number">16.</div>
        <div class="footnote-text">Dylan T. Holden, Nicolás M. Morato, and R. Graham Cooks, Aqueous microdroplets enable abiotic synthesis and chain extension of unique peptide isomers from free amino acids (Proceedings of the National Academy of Sciences, Vol. 119 | No. 42, October 18, 2022)</div>
        </a>

        <a href="#16-up" class="footnote">   
        <div class="footnote-number" id="3-down">17.</div>
        <div class="footnote-text">This view is inspired by our ayyew interpretation of the biological implications of the second law of thermodynamics. We’ll go much deeper into this into Chapter 7.  See: Jeremy L. England et al. (2015), Dissipative adaptation in driven self-assembly (Nature Nanotechnology, 2015). </div>
        </a>

        <a href="#18-up" class="footnote">   
        <div class="footnote-number" id="3-down">18.</div>
        <div class="footnote-text">The events of the first 3.5 billion years of evolution are coming to light at last and they include far more drama and intrigue than we ever imagined”  Michael Marshall, In the beginning: The full story of life on Earth can finally be told. (NewScientist, 2019).</div>
        </a>

        <a href="#19-up" class="footnote">   
        <div class="footnote-number" id="3-down">19.</div>
        <div class="footnote-text">Bekker, A., Holland,Wang, P. et al., Dating the rise of atmospheric oxygen, (Nature, 2004) 427, 117-20. </div>
        </a>

        <a href="#20-up" class="footnote">   
        <div class="footnote-number" id="3-down">20.</div>
        <div class="footnote-text">Our research indicates that 4-14% of crude oil that is processed cannot be refined into fuels.  This rate various with the geological source and chemical composition of the crude.  See: UK Oil consumption, (British Plastics Federation, 2008), Ref PD/LFH/19/8/08. Also: Russell Maier, Ani Himawati, The Rise of the Regenerative Ecobrick Movement, (Le Havre University: Bandung Spirit Conference, 2019).</div>
        </a>

        <a href="#20-up" class="footnote">   
        <div class="footnote-number" id="3-down">21.</div>
        <div class="footnote-text">“Oil refineries run 24-7 and are continuously generating by-products that must be disposed of, such as ethylene gas... propylene,  acrylonitrile [and other chemicals which are ideal for making plastic].  Plastics are a small piece of the petroleum industry, representing a minor fraction of the fossil fuels we consume.  But the economic imperatives of the petroleum industry have powered the rise of Plasticville.” Susan Freinkel, Plastic: A Toxic Love Story, (Houghton Mifflin Publishing Company, 2011), p7.   </div>
        </a>

  
        <a href="#22-up" class="footnote">   
        <div class="footnote-number">22.</div>
        <div class="footnote-text">With the rise in popularity of billiards during the 1850’s African elephants were being slaughtered en masse for their ivory to produce balls.  A competition to find an alternative material inspired the first experiments with petroleum by-products.</div>
        </a>

      
      <a href="#22-up" class="footnote">   
      <div class="footnote-number">23.</div>
      <div class="footnote-text">Plastics revolutionized the early photography industry that was severely limited by bulky and expensive equipment, enabling picture taking to become a household activity.</div>
      </a>

      
      <a href="#22-up" class="footnote">   
      <div class="footnote-number">24.</div>
      <div class="footnote-text">Transparent plastic film, originally developed by the cigarette industry, came to dramatically increase the shelf life of fresh foods.  Carmen Nobel, How Cellophane Changed the Way We Shop for Food, (Harvard Business School, 2017).</div>
      </a>

      <a href="#25-up" class="footnote">   
    <div class="footnote-number">25.</div>
    <div class="footnote-text">Observing plastic pollution and extreme weather are taking a growing emotional toll. Beyond Storms & Droughts: The Psychological Impacts of Climate (American Psychologists Association, 2014).  And:  Mental Health and Our Changing Climate: Impacts, Implications, and Guidance  (American Psychologists Association, 2017).</div>
    </a>

    <a href="#25-up" class="footnote">   
    <div class="footnote-number">25.</div>
    <div class="footnote-text">"Our study is the first indication that we have polymer particles in our blood." Heather A. Leslie, et al, <i>Discovery and quantification of plastic particle pollution in human blood</i> (Environment International, 2022) Volume 163, 107199, ISSN 0160-4120</div>
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
            <div class="sec-name"><i>4 | Patterns of Process</i></div>
        </div>

      </div>
    

      <div class="footer-right">
    
        <a href="patterns.php" title="Go to the next chapter" aria-label="Go to the next chapter"><div class="next-button">Next ➔</div></a>

</div>
</div>

    
<?php require_once ("includes/chapTER-footer.php");?>


</div>
</body>
</html>

