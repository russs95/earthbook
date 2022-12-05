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

<!--END OF GENERIC CONTENT-->

<!--META TAGS
Must be updated for each page-->

<title>A Stellar Story | Tratatus Ayyew - Earthbook</title>
<meta name="keywords" content="Plastic, 1.0, plastic pollution, petro-capital economy, human nature, nature of plastic, "> 
<meta name="description" content="A brief history of plastic's stellar origins, Earth's creation and humanity's rise.">


<meta name="twitter:label1" content="Est. reading time" />
<meta name="twitter:data1" content="6 minutes" /> 
	
<!-- Facebook Open Graph Tags for social sharing-->
<meta property="og:title"         content="A Stellar Story | Tratatus Ayyew - Earthbook.">
<meta property="og:description"   content="A brief history of plastic's stellar origins, Earth's creation and humanity's rise."/>


<style>

  #ct-chapter-title {
      padding-top: 45px;
      font-size: 11vmin;
      letter-spacing: 5px;
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
        <div id="ct-chapter-title">A Stellar Story</div>
        <div id="ct-book-title">Tractatus Ayyew</div>
        <div id="ct-chap-location">Book One | Chapter Three</div>
        <div id="ct-word-count"><i>1,133 words</i></div>
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
        OVER 5 BILLION YEARS AGO, IN A CLOUD OF INTERSTELLAR DUST our solar system swirled together. As cosmic matter collided and coalesced, growing ever denser, our sun ignited.  Within the remaining spiraling debris, further matter and momentum began to merge—  falling into orbit as dense clumps around our young star.  As each gained cohesion and coherence, the planets of our solar system came to be.<a href="footnotes">¹³</a>  Steadily, each planet arrived at its own unique combination of matter and momentum— of solar distance and spin, of elemental abundance and chemical composition, of axial tilt and surface temperature— a planetary cosmological character that just as it coalesced, so too it began to unfold.
     </div>

    <div class="page-paragraph">

    <p id="14-up">Like its siblings, our planet began as a barren, desolate place.  For Earth’s first two billion years, its atmosphere was full of carbon dioxide, making its climate hot, harsh and unstable.<a href="footnotes">¹⁴</a> For eons, the planet’s surface was distinguished solely by raw Earthen cycles: the ebb and flow of tectonic plates, of ocean currents and atmospheric flows.  However, as these primordial cycles spun under the relentless shine of the sun, Earth began to further express itself. </p>

      <p id="15-up">For as the sun shone down, entropy demanded dissipation.<a href="footnotes">¹⁵</a>  Like the run of rain down a hillside cascading into the twists and turns of a stream, the sun’s ever arriving blaze cascaded across Earth’s surface.  Just as a mountain’s contoured character leads to streams and rivers that are all its own, so too the Earth’s planetary character led to processes, cycles and systems all its own.</p>


      <p id="16-up">Following the rigid dictates of thermodynamics, Earth’s cycles tended their spin towards ever better dissipations of energy.  Determined and driven by its unique cosmology, steadily new chemical combinations unfolded to better disperse the sun’s blaze.  Steadily, large cycles fractured into a thousand smaller ones, and those then into a million more.   Steadily, the tiniest cycles whirled together into systems that began to drive themselves onward.<a href="footnotes">¹⁶</a>  Steadily, these systems unfurled into cells, organisms and eventually, into ecosystems.<a href="footnotes">¹⁷</a></p>

      <p id="18-up">As ever more effective patterns of dissipation emerged, plants rapidly dispersed across the planet's surface. In capturing carbon out of the air, they were able to use it to build their bodies and to capture and hold energy. Plants began to compose leaves, flowers and towering trunks while other organisms discerned how to decompose them. Soon forests, fields and fungi covered the planet.  Animals, algae and dinosaurs, all made from intricate patterns of carbon, emerged.  As these creatures lived and died their carbon matter was spun from one organism into another while their nutrient energy spiraled outwards through ecological networks across the planet’s surface.<a href="footnotes">¹⁸</a></p>

      <p>As time passed, one generation was covered up by the next.  Whether on the floor of an ocean or a forest, slowly and steadily, layers of life were buried under silt and sediment.  Over hundreds of millions of years, the Earth compressed and compacted the biomass of these ancient organisms— indefinitely concentrating and securing their carbon deeper and deeper underground.</p>

      <p id ="19-up">Although these organisms all breathed out carbon dioxide, their lives tended to subtract more carbon into the ground than they added back into the air.  With more and more organisms subtracting, soon great quantities of carbon were removed out of the atmosphere.  With more carbon being sequestered all the time, the Earth's climate stabilized<a href="footnotes">¹⁹</a>— and organisms of all kinds flourished. As they did so, they interacted and adapted. And as they adapted, they diversified and intertwined.  A vibrant planetary matrix of mutual support emerged, ushering in one of the most stable periods in the planet’s history.</p>

      <p>Cradled by the verdant abundance, a variety of bipedal apes emerged from the forests— and we sapiens shuffled onto the scene.</p>

      <p>As we struggled to survive, our awareness of our environment steadily increased.</p>

      <p>In short order, we figured out fire.</p>
      
      <p>First, we started by burning wood to warm our caves. Then to heat our homes. Then to fire our forges.  It wasn’t long then that we discovered the Earth’s carbon stores. </p>

      <p>We realized that they were far richer in energy.</p>

     <p>Some of us (but certainly not all of us) began to unearth this ancient carbon— what we came to call coal, natural gas and petroleum.  As many of us got better and better at extracting and burning it, ancient carbon came to turn our wheels, power our our machines, and fuel our factories. As it came to drive entire towns, cities and economies, we gave it a new name: <i>fossil fuels</i>. </p>

     <p id="20-up">However, despite the neat name, compacted carbon deposits were never themselves fuels!  To make them so required refinement— a process that always resulted in a residual sludge that could not be used.<a href="footnotes">²⁰</a>  With nowhere to go, these chemicals began to pile up.<a href="footnotes">²¹</a></p>


     <p>We soon realized that the leftovers could be used to create.  With a little chemistry, polymers could be produced—and with a little more; an endless array of marvelous materials.</p>

     <p>Plastics had arrived.</p>

     <p id="22-up">Soon, we were solving all sorts of problems by making all sorts of amazing things.  No longer did elephants need to be killed to make ivory billiard balls.<a href="footnotes">²²</a>  No longer were expensive silver plates required to take a photograph.<a href="footnotes">²³</a>  No longer was the shelf life of fresh food limited to a few days.<a href="footnotes">²⁴</a>  Plastics enabled not only a slew of new products and technologies, but so too new ways to reduce expenses, increase revenues and accrue capital.</p>

     <p>Powered by the ever increasing flow of petroleum and of profits, our industries grew and grew.  As industry expanded, so did the extraction, the refinement, and the economies based upon it all. As they all spun faster, there was always that little bit that couldn’t be processed.  This led to industry producing more and more plastic at lesser and lesser cost. </p>

     <p>As we consumed one plastic product after another, we tried our best to reuse and recycle each one.  However, there was already so much cheap new plastic, there was no profit in processing the old— it was much easier, and lucrative, to burn it, dump it or send it somewhere else.</p>

     <p id="25-up">Soon there was so much plastic that it began to spill out of our homes, enterprises and industry.    In growing alarm we watched as our plastic clogged rivers, filled seas and piled into great smoking mountains.<a href="footnotes">²⁵</a>  The particles of plastic were everywhere— inside fish, plants and animals— and our bodies.</p>

     <p>Shocked, shamed and determined, industry strove to convince themselves, and everyone else, that there was a solution just around the corner.</p>

     <p>Enterprises worked valiantly to improve their processes, products and packaging. New technologies were launched that were less harmful, less polluting and less damaging. </p>

     <p>Yet after turning many corners, improving efficiencies and expanding capacities, harmful, polluting and damaging our processes remained.</p>

     <p>Unabated, the grey flows of plastic and pollution continued to grow.</p>

     <p>And so too our despair.</p>

  
    </div><!--closes page text content-->

<!--FOOTNOTES SECTION-->

    <div class="footnote-section">

      <div id="line" style="border-style: solid; border-width: 1px; margin-bottom: 30px; width:70%; text-align:left;"></div>

      <p id="footnotes" style="font-variant-caps: all-petite-caps; color:grey">Chapter Footnotes</p>
      
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

       



    </div><!--Closes footnote section-->
          
  </div><!--Closes main content block-->

  <!--Footer Next Chapter Section: Requires customization-->
  <div id="footer-chapter" style="margin-bottom: 0px;">

    <div class="footer-size">
    
      <div class="footer-left">

        <div id="footer-icon-left" style="cursor:pointer;" onclick="openFooter()"></div>
    
     
        <div class="next-section">
            <div class="next-sec">Next chapter:</div>
            <div class="sec-name"><i>Patterns of Process</i></div>
        </div>

      </div>
    

      <div class="footer-right">
    
        <a href="patterns.html"><div class="next-button">Next ➔</div></a>

      </div>
    </div>
  </div>

  <footer-chapter></footer-chapter>
          
  <div id="containerSepia"></div>
  <div id="containerContrast"></div>
  <div id="containerBrightness"></div>

</div>


</body>
</html>

