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

<title>Plastic 1.0 | Tractatus Ayyew - Earthbook</title>
<meta name="keywords" content="Plastic, 1.0, plastic pollution, petro-capital economy, human nature, nature of plastic, "> 
<meta name="description" content="Like no other material, plastic has been made entirely for the use and benefit of humans.">


<meta name="twitter:label1" content="Est. reading time" />
<meta name="twitter:data1" content="6 minutes" /> 
	
<!-- Facebook Open Graph Tags for social sharing-->
<meta property="og:title"         content="Plastic 1.0 | Tractatus Ayyew - Earthbook.">
<meta property="og:description"   content="Like no other material, plastic has been made entirely for the use and benefit of humans."/>


<style>
  
/*
@media screen and (max-width: 699px) {
    .ct-chapter-quote {
      width: 87%;
      font-size: 1em;
    }
    .ct-quote-source {
      width: 80%;
      font-size: 0.8em;
    }
  }

  @media screen and (min-width: 700px) and (max-width: 1324px) {
    .ct-chapter-quote {
      width: 70%;
      font-size: 1.4em;
    }
    .ct-quote-source {
      width: 70%;
      font-size: 1em;
    }
  }
    
  @media screen and (min-width: 1325px) {
    .ct-chapter-quote {
    width: 50%;
    font-size: 1.4em;
    }
    .ct-quote-source {
      width: 50%;
      font-size: 1em;
    }
  }*/

  #ct-chapter-title {
      padding-top: 45px;
      letter-spacing: 4px;
      
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
        <div id="ct-chapter-title">Plastic 1.0</div>
        <div id="ct-book-title">Tractatus Ayyew</div>
        <div id="ct-chap-location">Book One | Chapter Two</div>
        <div id="ct-word-count"><i>623 words</i></div>
      </div>
  </div>

<!-- Page Title Section-->

  <div id="ct-chapt-graphic" class="background-2">
  </div>


  <div id="ct-main">


<!-- MAIN TEXT CONTENT of the Page
  For footnotes, use these numbers:  ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ⁰  “ ” ¹⁰
-->

     <div class="lead-page-paragraph">
        LIKE NO OTHER MATERIAL, plastic has been made entirely for the use and benefit of humans.   For the last half-century we have loved it: steadily incorporating plastic into every aspect of our modern lives.  However, of no use to other creatures, plastic has come to clog ecological cycles on land, in river and at sea.  The polluting consequences of our human-centered creation is now the focus of great hate and humiliation.  Though our various other ecological crises— ocean acidification, climate change, species extinction— may be far more dire; nonetheless, as we survey sullied beaches, choked rivers and beached whales, plastic pollution certainly causes us the most shame.
     </div>

    <div class="page-paragraph">

    <p>However, through it, an awakening has begun.</p>

      <p id="5-up">Around the globe we’re realizing where our plastic, oh-so carefully segregated, is actually ending up.<a href="#footnotes">⁵</a>  Investigative journalism and scientific study has made the fate of all our plastics clear.<a href="#footnotes">⁶</a>  No matter how well we landfill it— microscopic plastic particles are ending up loose in the biosphere.<a href="#footnotes">⁷</a>  No matter how thoroughly we incinerate it—  plastic’s chemicals are leaching out into ecosystems and us.  No matter how much we recycle it— plastic’s usage, production and associated emissions<a href="#footnotes">⁸</a> rise unabated.<a href="#footnotes">⁹</a>
      </p>


      <p id="10-up">Our realization of the relentless ensuing pollution has evoked a generational despair.<a href="#footnotes">¹⁰</a>  It has led to a harsh judgment of both ourselves and of plastic as innately flawed and ecological damaging.  Many lament that both plastic and humanity seem destined to pollute, contaminate and deplete.<a href="#footnotes">¹¹</a></p>

      <p id="12-up">However, such judgments are entirely misplaced.<a href="#footnotes">¹²</a>
      </p>

      <p>While we’re now seeing clearly where our plastic ends up, this is only half the story.  Our century-long account of plastic as human-made and managed has been woefully short-sighted. Until now, we haven’t truly grasped where plastic begins– both physically and philosophically.</p>

      <p>Oft-unknown: plastic’s matter is a by-product of the extraction and refinement of the fossil carbon that powers our modern age.  And the fossil carbon itself?  It is in fact the by-product of ancient Earth’s epic unfolding into a greener and greener biosphere— an ecological act of which we have much to learn.</p>

      <p>So, while our slumber has been stirred by observing plastic’s destiny, our full awakening shall come with an understanding of its origins.  For therein plastic’s primordial story lies the key to the reversal of plastic's polluting— and, incidentally, to the reversal of all our other ecological crises.  For while plastic pollution, ocean acidification, climate change and  species extinction may seem disparate and unconnected, they share a common cause in the dissonance of Earth and modern humanity’s patterns of process.</p>

      <p>From its petroleum genesis, to the way it is made only for humans, to its dispersal into the biosphere, to its acceleration of for-profit enterprise, plastic embodies the elements of our modern ecological crises like nothing else.  Thus, as plastic passes through our hands each day, through it we can quite literally touch the paradigm that powers our age of depletion.  Through this touch, we have a unique opportunity to shift plastic’s fate— and so too shift the values and ethics that loom unseen behind it and our modern world. </p>

      <p>It is the requisite first step to ushering in a green age for humanity and thriving common home for all.</p>

      <p>For truly, if we cannot resolve the small pieces of plastic that pass through our hands each day, how can we hope to resolve the other ecological crises that loom large on our horizon? </p>
      
      <p>But to grasp this momentous opportunity, we must first transcend our judgments and condemnations of plastic— and of ourselves.</p>

      <p>To do so we must go back and look at how plastic arrived into our hands in the first place.  </p>

     <p>To do so we must start from the very beginning. </p>

  
    </div><!--closes page text content-->

<!--FOOTNOTES SECTION-->

    <div class="footnote-section">

      <div id="line" style="border-style: solid; border-width: 1px; margin-bottom: 30px; width:70%; text-align:left;"></div>

      <p id="footnotes" style="font-variant-caps: all-petite-caps; color:grey">Chapter Footnotes</p>
      
        <a href="#5-up" class="footnote">   
        <div class="footnote-number">5.</div>
        <div class="footnote-text">A report by Global Web Index found that the 'Attenborough Effect', named after the narrator of the 2018 documentary Blue Planet II, led to a 53 percent reduction in single-use plastic usage over 2019.  See: Sustainable Packaging: Consumer View, (Global Web Index: 2020)</div>
        </a>

        <a href="#5-up" class="footnote">   
        <div class="footnote-number">6.</div>
        <div class="footnote-text">In a comprehensive survey of all plastics ever made, it is estimated that 8300 million metric tons of virgin plastics have been produced worldwide; 9% of which have been recycled, 12% were incinerated and 79% have accumulated in landfills or the natural environment since 1950.  R. Geyer, et al., Production, use and fate of all plastics ever made (Science Advances, 2017) Vol. 3, no. 7.</div>
        </a>

        <a href="#5-up" class="footnote">   
        <div class="footnote-number">7.</div>
        <div class="footnote-text">“Worldwide there is a growing concern about the risks and possible adverse effects of (micro)plastics.”  See:   Ansje Lohr, Heidi Savelli, Raoul Beunen, Marco Kalz, Ad Ragas, Frank Van Belleghem, 'Solutions for global marine litter pollution',  (sciencedirect.com: Current opinion in Environmental Sustainability, Vol 28, October 2017) 90-99</div>
        </a>

        <a href="#5-up" class="footnote">   
        <div class="footnote-number">8.</div>
        <div class="footnote-text">“By 2030, CO2 emissions from the production, processing and disposal of plastic could reach 1.34 gigatons per year—equivalent to the emissions released by more than 295 new 500-megawatt coal-fired power plants.” Plastic & Climate: The Hidden Costs of a Plastic Planet (Center for International Environmental Law, 2019).</div>
        </a>

      <a href="#5-up" class="footnote">   
      <div class="footnote-number" id="3-down">9.</div>
      <div class="footnote-text">In 2016 Russell spent time working in a Canadian recycling facility.  The experience and realizations of industrially recycling’s role in the generation of plastic pollution invigorated the authors dialogue. See:  Russell Maier, Recycling: The Evil Illusion, (Medium.com, 2016).</div>
      </a>

  
      <a href="#10-up" class="footnote">   
      <div class="footnote-number">10.</div>
      <div class="footnote-text">“It's super painful to be a human being right now at this point in history." Mike Pearl, Climate Despair' Is Making People Give Up on Life (Vice Magazine, 2019).</div>
      </a>

      
      <a href="#10-up" class="footnote">   
      <div class="footnote-number">11.</div>
      <div class="footnote-text">Steven W. Running, The 5 Stages of Climate Grief (University of Montana, Missoula: Numerical Terradynamic Simulation Group Publications: 2007).</div>
      </a>

      
      <a href="#12-up" class="footnote">   
      <div class="footnote-number">12.</div>
      <div class="footnote-text">“Human beings are a disease, a cancer of this planet.” Agent Smith, The Matrix (1999).  We observe that the common modern view of humans as a super virus, is a form of human-exceptionalism.  We observe that the categorical judgment of (human-made) plastic as bad is an extension of this ontology-- the very same human-centricism that underlies our modern ideologies.    The repudiation of this ontology as both empirically and rationally fallacious is one of the principal efforts of the Tractatus Ayyew in the chapters ahead.</div>
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
            <div class="sec-name"><i>Plastic's Stellar Story</i></div>
        </div>

      </div>
    

      <div class="footer-right">
    
        <a href="stellar.html"><div class="next-button">Next ➔</div></a>

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

