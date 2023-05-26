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
$page_number = "4";
$page_title = "Imagine | Tractatus Ayyew - An Earthbook";
$chap_name = "Imagine";
$chap_number = "Bk 1, Chap. 1, ";?>

<head>

<?php require_once ("../header.php");?>


<!--META TAGS
Must be updated for each page-->

<meta property="article:modified_time" content="2023-04-28T09:10:13+00:00">

<meta name="keywords" content="imagine, a green new world, plastic, green, Earth ethics, earthen ethics, earth, ethics, tractatus ayyew, igorot, indigenous philosophy, philosophy, permaculture, bill molison, green ethics, environment, deep ecology, ecological, ethics"> 
<meta name="description" content="Imagine a world where the very way we live is steadily enriching the ecosystems of which we are part.">


<meta name="twitter:label1" content="Est. reading time">
<meta name="twitter:data1" content="6 minutes"> 
	

<meta property="og:description"   content="Imagine a world where the very way we live is steadily enriching the ecosystems of which we are part.">

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
  <button type=button id="ct-tc-menu" onclick="openContents()" aria-label="Open Table of Contents" style="background-color:var(--header-footer);"></button>
  <div class="ct-holder" style="cursor:pointer;" onclick="openContents()">
        <div id="ct-chapter-title">Imagine</div>
        <div id="ct-book-title">Tractatus Ayyew</div>
        <div id="ct-chap-location">Book One | Chapter One</div>
        <div id="ct-word-count"><i>1,095 words</i></div>
      </div>
  </div>


<!-- Page Title Section-->

  <div id="ct-chapt-graphic" class="background-1">

  </div>
 

<div id="up-arrow"></div>

  <div id="ct-main">


<div id="chap-notice">
  <div id="close-notice" onclick="closeWelcomeNotice()">&times;</div>
  <div id="chap-notice-text">
    Looks like its your first time opening this book!  Before you get going, consider taking the quick <a class="java-link" onclick="guidedTour(), closeWelcomeNotice()" aria-label="Open About Screen" title="Learn more about what an Earthbook is">Earthbook features tour</a> and be sure to <a class="java-link" onclick="openSettings(), closeWelcomeNotice()" aria-label="Open Settings" title="Adjust for your eyes">optimize ±</a> the page for your eyes.
  </div>
</div>


<!-- MAIN TEXT CONTENT of the Page
  For footnotes, use these numbers:  ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹  ⁰
-->

    
      <div class="page-paragraph"><p><i>
      Imagine a world where the way we live is steadily enriching the ecosystems of which we are part.  It is a world where our households and communities, just by thriving, make the biosphere a more abundant, vibrant and hospitable home for us and for all.  Rather than strive to reduce our environmental harm, in this world we have come together to maximize our ecological contribution.  To do so, the way we manage our matter and energy has shifted.  No longer do our enterprises operate merely in circles—  so too do they spiral; each spin overpaying its debts and dispersing its surpluses.   No longer do our enterprises merely reduce the amount of carbon and other elements they let loose— so too do they capture and concentrate them.  No longer do we merely strive to concerve and protect the planet's tapestry of organisms and ecosystems— so too do we play a part in its vitality and diversification.  As we all thrive together in this common home, the awareness of our interconnection ever augments, and with it, the sync of our cycles of enterprise and ecosystem, economy and biome, humanity and biosphere— a harmony rising up with us towards the stars.</i></p>
     </div>
     <br><br>

     <div id="line"></div>
     <br><br><br>

<div>
     <div class="lead-page-paragraph">

     TODAY, AS WE BECOME more and more aware of the ecological degradation inherent to our modern world, we yearn to amend our mistakes and to improve our ways.  However, as our homes and enterprises unite in a common planet passion, never before has it been more important to recognize that the way forward has already been cleared and its path tread.  Dismissed and all but forgotten by our modern civilization, nations ancient and ongoing have long mastered their ecological integration to achieve heights of harmony that our modern world view has been unable to grasp or even conceive. Only to the extent that we can recognize these enlightened moments, can we ever imagine our own.  And insofar as we can imagine it, the realization of a green age for all is not nearly as distant as many of us are tempted despair.

    </div>



      <p id="3-up">Inspired by the verdant legacy of Banayan’s people, the Igorots of Northern Luzon<a href="#footnotes" title="In particular the Igorot Ayyew ecological ethos.  See: Banayan Angway, Cordillera Administrative Region Indigenous Peoples Education Curriculum K-12</i>(Bontoc, Mountain Prov., CAR; Philippines Department of Education, 2014)." >³</a>, she and I have to come to see that the longing and the potential for ecological contribution unites us all on planet Earth.</p>

      <p>Across cultures and continents, we long to contribute to that which we are part: to add to the communities in which we belong, to harmonize with our neighbours, to sync with those with whom we sing.  Consequently, as the parts we play in our local ecosystems and global biomes becomes clearer, so too does our yearning to participate positively in them and contribute to their harmony, vitality and abundance.  
      </p>

      <p>Indeed, Banayan and I have come to see that the transition to households, communities and enterprises that are in-and-of-themselves ecological contributions is the next stage of an epic planetary story whose direction is, quite literally, in our hands.</p>

      <p>So how do we arrive at this thriving common home that we all long to see?</p>

      <p>One word:</p>

      <p><i>Plastic.</i></p>

      <p>Therein this problematic modern material lies our way forward.</p>

      <p>As it must be. </p>
      
      <p id="4-up">Gardeners have long observed that the problem is always the solution—  weeds, pests and pollutants are always, with a shift of perspective and approach, the very nutrients, fertilizers and medicines that bring a struggling garden to thrive.<a href="#footnotes" title="The problem is always the solution.  See: Bill Mollison, <i>Principles from Permaculture a Designers' Manual</i>, (Tagari Publishers: 1988).">⁴</a></p>

      <p>Like nothing else, plastic embodies the definitive facets of our modern moment.   Derived from ancient fossilized carbon, plastic allows us to touch the primordial story that has enabled our own.  Bought and sold, plastic is a physical manifestation of the petro-capital economy that powers our global age.  Crafted by humans, entirely for humans, plastic is a vivid reflection of our modern, human-centered civilization.</p>

     <p>In this way, our plastic is in fact a mirror. </p>

     <p>And an opportunity.</p>
     
     <p>By confronting plastic's full billion year story, we can face our own within the same frame.</p>

     <p>Then, in seeing our reflection with unprecedented clarity, we can know our plastic— and ourselves— anew.</p>

     <p>Above all, we can renew our understanding of positive human ecological participation: <i>what green should really mean.</i></p>

     <p>Banayan and I, in struggling to manage our own plastic positively, have come to see that the contemporary concept of green is lacking and incomplete.</p>
     
     <p>Seen through the lens of the  ecological ayyew ethos of her people, we observe that the modern ethic of green is merely about reducing <i>harm</i>— while the concept of <i>contribution</i> has remained all but un-imagined.</p>
     
     <p>It is a view of human ecological potential that sharply contradicts the lived experience of Banayan and her ancestors.</p>

     <p>As we shall see in the chapters ahead, ecological contribution has in fact been the overwhelming tendency on Earth— a unique planetary pattern of matter and energy that, from the very beginning, has permeated all of Earth's processes, cycles and systems.</p>

     <p>And our own.</p>

     <p>To the extent that this Earthen pattern has been reflected within the values and virtues of a culture, the societies that have ensued have systematically enriched the ecosystems of which they are a part.</p>

     <p>Conversely, to the extent that a culture’s pattern has differed from Earth’s, systematic depletion and degradation have been the inexorable result.</p>

     <p>The discernment of this Earthen pattern, shall be our chief task in the <i>Tractatus Ayyew.</i></p>

     <p>Through the combination of our two ancestral perspectives, Banayan’s Igorot heritage and my European, her indigenous culture and my settler, her agrarian upbringing and my industrial, we will investigate the shortcomings of our modern ethical understanding. In particular, the misconceived human exceptionalism that we observe is at the root of all our modern ecological malaise.</p>

     <p>With this ontological error excised, we shall then lay out a new theory of green anchored upon the cosmological character of our planet.</p>

     <p>Guided by the insights of great green nations, the ways of magnificently contributive creatures and the latest insights of Earth science, we shall lay out each of the principles that composes our planet’s five-fold pattern of ecological enrichment.</p>

     <p>The resulting <i>Earthen ethics</i> will help us to make sense of our modern processes, technologies and enterprises by providing a means by which we can discern that which is enriching from that which is degrading; that which is an ecological contribution from that which is a depletion; and that which is <i>green</i> from that which is <i>grey</i>.</p>

      <p>In this way, with Earth’s example as our guide to green, can move forward with unprecedented clarity and confidence to embody the geometry of contribution in all our processes, cycles and systems.<a href="#footnotes" title="'We can think of our current civilization-- its technical and sociopolitical infrastructure, its ideology and beliefs-- as an operating system, much like the software that runs our computers.  Now we need to reboot and install a new system software'.  Daniel Pinchbeck, How Soon is Now: From Personal Initiation to Global Transformation, (Publisher: Watkins Publishing, 2017) Chapter 2, p.105">⁵</a></p>

     <p>To begin, let us turn to that troublesome material we so love to hate.</p>
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
        

    
      <a href="#3-up" class="footnote">   
      <div class="footnote-number" id="3-down">3.</div>
      <div class="footnote-text">In particular the Igorot Ayyew ecological ethos.  See: Banayan Angway, <i>Cordillera Administrative Region Indigenous Peoples Education Curriculum K-12</i>(Bontoc, Mountain Prov., CAR; Philippines Department of Education, 2014).  </div>
      </a>

      <a href="#4-up" class="footnote">   
      <div class="footnote-number">4.</div>
      <div class="footnote-text">The first principle of permaculture.  Bill Mollison, <i>Principles from Permaculture a Designers' Manual</i>, (Tagari Publishers: 1988).</div>
      </a>

	<a href="#5-up" class="footnote">   
      <div class="footnote-number">5.</div>
      <div class="footnote-text">"We can think of our current civilization-- its technical and sociopolitical infrastructure, its ideology and beliefs-- as an operating system, much like the software that runs our computers.  Now we need to reboot and install a new system software".  Daniel Pinchbeck, <i>How Soon is Now: From Personal Initiation to Global Transformation</i>, (Publisher: Watkins Publishing, 2017) Chapter 2, p.105</div>
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
            <div class="sec-name"><i>Plastic 1.0</i></div>
        </div>

      </div>
    

      <div class="footer-right">
    
        <a href="plastic.php" title="Go to the next chapter" aria-label="Go to the next chapter"><div class="next-button">Next ➔</div></a>

</div>
</div>

    
<?php require_once ("includes/chapTER-footer.php");?>


</div>
</body>
</html>

