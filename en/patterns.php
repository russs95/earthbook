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

<title>Patterns of Process | Tractatus Ayyew - Earthbook</title>
<meta name="keywords" content="patterns of process, cosmological character, planetary patterns, pattern, patterns, blocks, judgements, despair, depletion, enrichment, plastic, carbon emissions, petro-capital economy, human nature, nature of plastic, jevon's paradox, jevon"> 
<meta name="description" content="Observing our and Earth's evolution we can discern two patterns at play.  Rather than be mired in self-judgment at our play with carbon, we can be dazzled by Earth’s.">


<meta name="twitter:label1" content="Est. reading time" />
<meta name="twitter:data1" content="8 minutes" /> 
	
<!-- Facebook Open Graph Tags for social sharing-->
<meta property="og:title"         content="Patterns of Process | Tractatus Ayyew - Earthbook.">
<meta property="og:description"   content="Rather than be mired in self-judgment at our play with carbon, we can be dazzled by Earth’s."/>


<style>
  


  #ct-chapter-title {
      padding-top: 45px;
      font-size: 10vmin;
      letter-spacing: 1px;
      
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
        <div id="ct-chapter-title">Patterns <i style="font-variant-caps:normal; font-size:0.8em">of</i> Process</div>   
        <div id="ct-book-title">Tractatus Ayyew</div>
        <div id="ct-chap-location">Book One | Chapter Four</div>
        <div id="ct-word-count"><i>837 words</i></div>
      </div>
  </div>

  <?php require_once ("includes/eco-curtain.php");?>

<!-- Page Title Section-->

  <div id="ct-chapt-graphic" class="background-4"></div>

  <div id="up-arrow"></div>

  <div id="ct-main">


<!-- MAIN TEXT CONTENT of the Page
  For footnotes, use these numbers:  ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ⁰  “ ” ³⁰ ²⁶
-->


     <div class="lead-page-paragraph">
        OVER THE LAST FOUR BILLION YEARS, the singular combination of our planet's orbit, spin, composition and chemistry has played out.  As this unique configuration of matter and energy has unfolded, a once barren rock has transformed into the thriving biosphere that is our common home today.  Of all that we know of other planets in our solar system and galaxy, it is an extraordinary and epic story.  However, what makes the story even more remarkable is that the tellers of the tale are thoroughly part of it.
     </div>

    <div class="page-paragraph">

    <p>Our telling of Earth's tale is only possible through a vast and unique confluence of matter and energy; the spiral of carbon into ever more concentrated and complex configurations, the dispersion of the sun's energy into ever more diverse organisms and ecosystems; and through it all the inexorable unfolding of consciousness in a myriad of forms.  Powered by ancient compacted carbon, our last centuries of science have been able to illuminate both Earth’s story and our own.</p>

      <p>From this vast vantage we must revisit our judgments of ourselves and of plastic.</p>


      <p>Rather than be mired in despair at our modern moment of ecological depletion we can be awed by Earth’s momentous act of ecological enrichment!</p>

      <p id="26-up">The way our planet— as a uniquely configured cosmological system— has managed its matter and energy has led to the steady greening of its surface; the cultivation of ever greater diversity, vibrancy and abundance of life.<a href="#footnotes">²⁶</a>  And finally, through the resulting emergence of consciousness, we have been propelled to the telling and pondering of the story itself.</p>

      <p>So, where do we go from here?</p>

      <p>First, let us hold fast to our vantage and the vast view it affords.</p>

      <p id="27-up">From here we can observe another pivotal planetary phenomenon. Aside from meteor strikes and massive volcanoes, it is a phenomenon unseen on the planet for millions of years.  Because of the doings of modern humanity, never before have Earth’s processes, cycles and systems so abruptly added more carbon into the atmosphere than they removed.<a href="#footnotes">²⁷</a></p>

      <p>The ensuing decline of the vitality and diversity of the biosphere is a direct challenge to our last century of carbon play.</p>

      <p>Much like a child building with blocks for the first time, we have much to learn from our moment. After the thrill of assembling a grand construction, when the pieces inevitably tumble down, when the results aren’t as intended, the upset youngster invariably blames themselves and the blocks.</p>

      <p>Of course, neither are to blame!</p>
      
      <p>Only through the first fall can the child grasp how the play is played.</p>

      <p>There is no other way.</p>

     <p id="28-up">Likewise, our disruption of ecological cycles is not a consequence of our nature any more than it is the nature of carbon.<a href="#footnotes">²⁸</a>  Rather, it is the way of our play: the fundamental pattern by which our processes have managed their energy and their matter. </p>

     <p id="29-up">As we saw in plastic’s story, our modern processes have increasingly intended patterns of energy and matter that have dispersed carbon, concentrated energy, reduced biodiversity and stifled ecological awareness.  In sharp contrast, Earth's processes have inexorably tended towards just the opposite:  the concentration of carbon, the dispersal of energy, the increase of diversity and the cultivation of consciousness. Whereas our modern pattern of process has degraded ecosystems, Earth’s has systematically enriched them— making them ever more diverse, vibrant and abundant.<a href="#footnotes">²⁹</a></p>

     <p id="30-up">Like a despairing and determined child on a second-go at blocks, we’re trying harder than ever before. With a shame at our failings, we have our heads down, striving valiantly to build stronger and higher: to make our processes less polluting, less damaging, less grey. However, no matter how hard we have striven, our polluting has continued to increase unabated.  Over time, any improvements in the efficiency of our grey processes have been inevitably eclipsed by their very proliferation and increase. For with the underlying pattern of our processes unchanged, even if they are less harmful— <i>harmful they remain</i>.<a href="#footnotes">³⁰</a></p>

     <p>Banayan and I have come to see that it is time to raise our heads from the toil.</p>

     <p>And the judgment.</p>

     <p>Again, rather than despair, we can be awed.</p>

     <p>Our once-in-a-million-years phenomenon of additive carbon usage is in fact a tremendous opportunity.</p>

     <p>For the first time, with our usage of carbon as a foil, the difference between our modern ways and of Earth’s can be observed with unprecedented clarity.  In the stark contrast of patterns, we can begin to discern the cosmological character that has underlaid the Earth’s transformation of a barren planet into a thriving biosphere: the pattern by which Earth has managed its matter and energy through processes, cycles and systems towards the enrichment of all.</p>

     <p id="31-up">And in a similar way, through our modern society’s ecological dissonance, so too can our modern gaze can now recognize those societies—  ancient and ongoing— that have long attained resonance with Earth’s pattern and character.<a href="#footnotes">³¹</a></p>

     <p>Nations that just by thriving, enriched the vitality, diversity and abundance of the ecosystems of which they were part.</p>

     <p>Nations that, just like Earth, cultivated common homes for all.</p>

     <p>Unabated, the grey flows of plastic and pollution continued to grow.</p>

     <p>And so too our despair.</p>

  
    </div><!--closes page text content-->

<!--FOOTNOTES SECTION-->

    <div class="footnote-section">

      <div id="line" style="border-style: solid; border-width: 1px; margin-bottom: 30px; width:70%; text-align:left;"></div>

      <p id="footnotes" style="font-variant-caps: all-petite-caps; color:grey">Chapter Footnotes</p>
      
        <a href="#26-up" class="footnote">   
        <div class="footnote-number">26.</div>
        <div class="footnote-text">Going forward we will refer to Earth in ways that imply agency (i.e. “Earth managed its matter”). While it is more than possible to conceive Earth as a sentient entity, a divine being, or the active creation of a divine being(s), such claims are beyond the scope of this essay. Instead we imply agency simply in as much as any singular self-contained system has its own unique patterns, character and tendencies.  i.e. “Big Ben kept time”, “Mont Blanc stood tall”, “Uranus spins slowly around the sun”.</div>
        </a>

        <a href="#27-up" class="footnote">   
        <div class="footnote-number">27.</div>
        <div class="footnote-text">“The present atmospheric content [of CO2] exceeds anything Earth has experienced in the last million years and possibly the last 20 million years” David Beerling, The Emerald Planet, (Oxford University Press, 2017). </div>
        </a>

        <a href="#28-up" class="footnote">   
        <div class="footnote-number">28.</div>
        <div class="footnote-text">Are humans inherently destructive or contributory?  Competitive or collaborative?  In the chapters ahead, we take a firm position in this ongoing debate:  in discarding the empirically and rationally untenable view of humans as central and exceptional to the biosphere, and instead as subsets systems within it, our Earthen character becomes clear.  See:  Rutger Bregman, Humankind: A Hopeful History, (Little, Brown and Company, 2019).
        </div>
        </a>

        <a href="#29-up" class="footnote">   
        <div class="footnote-number">29.</div>
        <div class="footnote-text">Here and throughout the Tractatus, we refer to the cumulative four billion years of the Earth’s history. Over the full period of the Earth’s history, there have been tremendous swings in the abundance and diversity of the biosphere– extinctions, depletion and lulls where for millions of years life was severely stifled. However, despite these declines, we observe that on the whole the net-biodiversity and abundance of the biosphere has steadily increased.  We will examine each facet of the planet’s net-enrichment in the five chapters of book 2.</div>
        </a>

        <a href="#30-up" class="footnote">   
        <div class="footnote-number" id="30-down">30.</div>
        <div class="footnote-text">Hope is often placed on increases in efficiency to decrease the cumulative environmental impact of human processes (i.e. “more efficient coal powered steam engines will decrease London’s pollution”). However, historically, advances in technological efficiency have in fact resulted in increased environmental impact.  This is known as Jevon’s Paradox: as efficiency increases, so too does the adoption and spread of the technology, inevitably leading to a net-increase in environmental impact.  Our argument is complimentary: we observe that processes, cycles and systems have an inherent pattern that will unfold regardless of efficiency or scale.</div>
        </a>

        <a href="#31-up" class="footnote">   
        <div class="footnote-number" id="30-down">31.</div>
        <div class="footnote-text">See Banayan’s work laying out a the context and definition of the Igorot Ayyew Ethos:  Banayan Angway, Cordillera Administrative Region Indigenous Peoples Education Curriculum K-12 (Bontoc, Mountain Prov., CAR; Philippines Department of Education, 2014). </div>
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
            <div class="sec-name"><i>Kindred Relations</i></div>
        </div>

      </div>
    

      <div class="footer-right">
    
        <a href="kincentric.php"><div class="next-button">Next ➔</div></a>

      </div>
    </div>
  </div>

  <?php require_once ("includes/chap-footer.php");?>


</body>
</html>

