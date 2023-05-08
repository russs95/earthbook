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
$page_number = "14";
$page_title = "The Mollusc's Means |  Book two | Tratatus Ayyew - Earthbook";?>

<head>

<?php require_once ("../header.php");?>


<!--META TAGS
Must be updated for each page-->

<meta property="article:modified_time" content="2023-02-21T09:10:13+00:00">
<meta name="keywords" content="mollusc, means, matter, spiral, principle 3"> 
<meta name="description" content="Earthen Principle No.3: Earth’s cycles tend towards the inwards concentration of matter.">


<meta name="twitter:label1" content="Est. reading time" />
<meta name="twitter:data1" content="16 minutes" /> 
	
<!-- Facebook Open Graph Tags for social sharing-->
<meta property="og:title"         content="The Mollusc's Means of Matter | Book Two  | Tratatus Ayyew - Earthbook.">
<meta property="og:description"   content="Earthen Principle No.3: Earth’s cycles tend towards the inwards concentration of matter."/>


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
  <button type=button id="ct-tc-menu" onclick="openContents()" style="background-color:var(--header-footer);" aria-label="Open Table of Contents"></button>
  <div class="ct-holder" style="cursor:pointer;" onclick="openContents()">
        <div id="ct-chapter-title">The Mollusc's Means</div>   
        <div id="ct-book-title">Tractatus Ayyew</div>
        <div id="ct-chap-location">Earthen Principle No. 3</div>
        <div id="ct-word-count"><i>Book Two | 2,307 words</i></div>
      </div>
  </div>

  <?php require_once ("includes/eco-curtain.php");?>

<!-- Page Title Section-->

  <div id="ct-chapt-graphic" class="background-10">
    <div class="ct-chapter-quote">
      <span style="background-color:var(--nav-bar-accent);
 padding:0.1em 0.2em;">“Earth’s cycles tend towards the inwards concentration of matter.”</span>
    </div>
    <div class="ct-quote-source">
     ― Earthen Ethic No.3
    </div>
  </div>

  <div id="up-arrow"></div>


  <div id="ct-main">


<!-- MAIN TEXT CONTENT of the Page
  For footnotes, use these numbers:  ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ⁶⁰  “ ” ³¹⁰ ²⁶ ⁴⁷ ⁵⁴
-->
  

<div class="page-paragraph">
    <p id="58-up"><i>
    Three hundred million years ago, Earth’s oceans were full of swimming swirls of carbon and calcium.  Just as fish are ubiquitous in every ocean today, for millions of years the ancient ammonite, were equally widespread.  Famous for its fossilized shell, the now extinct mollusk had much in common with today’s clams and oysters.  Similar to its modern mollusks descendants, the ammonite sieved loose minerals out of the water to synthesis its shell.  And just like its descendants, so too did every ammonite share the same fate.  At the end of its life, it would fall to the bottom of the ocean where over time its shell was buried by the constant rain of other carcasses and excretions.  As the accumulation of detritus on the sea floor grew, so do its pressure on all the matter below.  Steadily, all the carbon and calcium that each ammonite and other marine organisms had gathered was compacted into stone. Over millions of years, the lives of trillions of ammonites, spun countless tons of bicarbonate into geological sequestration.  Not only did this contribute to the vast limestone deposits of today, over time, this relentless subtraction of carbon reduced the net acidity of the oceans, making the waters more hospitable, and livable for countless other creatures. <a href="#footnotes">⁵⁸</a> </i>
     </p></div>
    <br><br>
     <div id="line" style="margin-bottom: 30px;"></div>
<br><br>
    <div>
    <div class="lead-page-paragraph">
    THE WAY IN WHICH THE ANCIENT AMMONITE managed its matter to make its home, while steadily enriching the common home that it shared with other creatures, is an example that can guide and inspire us today.  In our last chapter, we saw how the outward spin of energy is characteristic of Earth’s pattern.  Now, observing the pattern of the Amonite and countless other molluscs we can discern Earth’s characteristic inwards spin of matter towards subtraction and concentration-- the third facet of Earth’s cosmological pattern.  With the help of this earthen Ethic we can make sense of the enrichment wrought by the way kincentric cultures managed their material resources and surpluses.  Learning from them, the Ammonite and Earth we gain a guide to manage our own material processes and cycles.  With the help of this third Earthen ethic we can evaluate our modern use of carbon and other elements to be sure they are green.</div>
      </div>

    <div class="page-paragraph">

      <p>To fully understand this third aspect of Earth's cosmological character, let us return one more time to the primordial beginnings of our planet for a closer look.</p>


      <p>As we saw earlier, Earth and its planetary siblings formed five billion years ago as stellar debris steadily swirled together-- a process of material coalescence that has in fact, has never ceased.  Even today, asteroids of all sizes continue to rain down upon Earth, adding to its mass.</p>


      <p id="59-up">And even today the swirl has never ceased.</p>


      <p>On our planet, as on others, geology, atmosphere and oceans all continue to spin and spiral– powered by the ever arriving blaze of the sun.<a href="#footnotes" title="text", onclick="openFootnotes()">⁶⁰</a></p>

      <p id="60-up">On every planet, vortexes unfold with their own unique geometry determined by their unique combination of matter and energy (its orbit, spin, chemistry, magnetosphere, mass, momentum and more). From Venus sulfuric acid dipole vortexes, to Jupiters' polygonal vortex patterns of hydrogen and helium, to Saturn's hexagonal hydrogen polar vortex, the way each planet spirals its matter is a direct reflection of its cosmological character-- in particular the swirl of its primary elements.</p>
      
      <p>Just as on Venus, Jupiter and Saturn the particular chemistry of certain elements dominated their character, so too on Earth.    </p>

     <p>As the early Earthen cycles of atmosphere and ocean spin they tended towards ever more concentrated carbon configurations that ever better dissipated the sun's blaze.  Steadily, as early cellular systems unfurled, they figured out how to gather loose carbon from the atmosphere to build their bodies.  Steadily, as early organisms evolved, their own intricate patterns of carbon began to unfurl.  Steadily,  as generations of plants, fungi animals and insects lived and died, their biomass was covered up by the fall of the next.</p>

     <p>Although these organisms all added CO2 back into their environment through their exhalations and excretions, with each cycle of life and death, they tended to concentrate slightly more carbon than they let out loose.  Be it on the floor of an ocean or  a forest, slowly and steadily, layers of life were buried one upon the other.  Over hundreds of millions of years, the inexorable accumulation of these ancient organisms became  compacted deep underground.</p>

     <p>With the life cycles of innumerable organisms systematically subtracting more carbon than they added, soon vast quantities were stored out of the atmosphere and into geological storage.  With so much carbon removed from Earth’s early atmosphere, its climate began to cool.</p>

     <p>During the reign of the Ammonites, the subtraction of carbon from the cycles of plants, trees, forests and algae was so substantial that it lead to million of year ice ages.  Despite such extremes however, this pattern of steady subtraction served to counter balance inevitable planetary moments of release– such as forest fires, volcanoes and meteor strikes.  In this way, over the course of the planet's last 600 million years, as trillions of carbon-based organisms lived and died, on the whole the planet's climate tended steadily towards stabilization.  </p>

     <p>And even more life was able to flourish in abundance and diversity.</p>

     <p>The ammonite, was a particularly magnificent embodiment of this Earthen pattern.  </p>

     <p>Just like Earth, the cycles of the Ammonite were net-subtractive role.  As their shells, bodies and excretions fell downwards, more and more carbon was subtracted and secured under the ocean floor.  This enabled the ocean to absorb more carbon from the atmosphere.  Over time the spiral of the Ammonite’s life-cycle lead to the sequestration of countless tons of carbon into geological storage.  Today, parts of Earth's vast limestone deposits are their legacy— as well as atmosphere and oceans containing far less carbon than before.  In this way,  the Ammonite made not only made their own home, they made their common home livable and more hospitable for others.</p>

     <p>We find also this Earth pattern reflected within the processes of kincentric cultures. </p>


     <!---UPDATED TO HERE-->

     <p>As we saw in our first Earthen Ethic, the lives of the Igorot people of Northern Luzon are guided by their Ayyew ethos.  Within the Igorot culture one of the most respected virtues is the degree to a which a man or women’s efforts are in sync the cycles of life around them.  This ethos applied especially to foraging and farming and excess matter that would result from them. </p>

     <p>Whether rice stalks, burned rice, leaves, or excrement there was always something left over.  Throughout their villages, there were however, always pig pens-- Lomeng.  Most homes in fact, had their own Lomeng, but these were much more than pig stalls.  There left over food, overcooked rice, grass clippings were fed to the pigs-- and used as toilets.  The pigs would consume almost everything given to them, growing fat and providing rich manure to fertilize the gardens. In this way, the pigs further consumed and condensed all the excess matter that was fed them.  In so doing, the excess matter from their daily routines and agricultural cycles was consumed and concentrated by the pigs, generating both rich pig manure and eventually pork.</p>

     <p>Nations such as the Haida, Dakelh, and the Wetʼsuwetʼen, among many others, are renowned for the ecological vitality of the lands they have long presided over.  They have lived side by side the salmon for countless generations– and learned from them.  Seeing the salmon as ecological elders, they wove the salmon's dispersion lessons into the stories, morals and languages of their culture.</p>

     <p id ="62-up">In Haida stories, the Salmon were seen as a type of people.  They taught important lessons about respecting one another.  In particular, that the bones of the Salmon were always to be dispersed back to the rivers just as the Salmon’s bodies were to be dispersed among the community.</p>

     <p>In Wetʼsuwetʼen culture, this ethic of dispersion was codified in tradition.  The first Salmon caught of the season would be shared with every member of the community, meticulously ensuring that every morsel was consumed and each bone returned to the water.</p>

     <p>In the Dakelh culture, dispersion was embodied in their Carrier language. Grammatically, it is impossible to speak of 'my salmon' only of 'our salmon'.1  </p>

     <p>In the deep resonance in the distributive ways of the Igorots, Haida, Wet’su’weten, Babine the Salmon and the the Earth, we find our second Earth ethic. </p>

     <p>For the Haida, Dakelh, and the Wetʼsuwetʼen an ethic of take only what is needed, and distribute what is taken underlaid their ways of life– making no distinction between economy and ecology.  Just as we saw in the Igorot Ayyew ethos, honor and respect were gained not by wealth itself, but by its flow; not by how much was gathered, but by how much was given back to both people and the land.</p>

    <p>In the deep resonance in the distributive ways of the Igorots, Haida, Wetʼsuwetʼen, Dakelh, the Salmon and the Earth, we find our second Earth ethic. </p>

    <p>Just as the Earth tended its cycles towards the spin of energy outwards to the benefit of all, so too must we intend and achieve with our own. Only when the intention and the result of our cyclical processes is the net-outwards distribution of energy, is this Earthen ethic met.  Only then can our enterprises be considered an ecological contribution— and green.</p>

    <p>As we strive to ensure our modern enterprises are green, the second Earthen ethic shows us that their pattern of energy is key. </p>

    <p>When it comes to our enterprises, their pattern of energy management is determined by the purpose for which the enterprise is established.  The for-what of an enterprise determines how and why it receives revenues and expends expenses— as well as the how and why of its ecological give and take.</p>

    <p>While most enterprises operate with the purpose of meeting human wants and needs— such as for the provision of products and for the delivery of services— often modern enterprises are structured for a deeper reason.
     </p>

     <p>Certain enterprises are established by their owners for the purpose of profit: generating more energy than they give back.  This excess energy, although often sourced ecologically, is defined strictly in financial terms. While these for-profit enterprises may provide products, services and even ecological benefits, their structure dictates that their financial surpluses are directed to their owners (or shareholders as the case may be) at the end of each financial cycle. The result is a process of accumulation that over many financial cycles, steadily depletes the ecological and social systems of which it is part.</p>

     <p>In this way, the energetic inclination of a for-profit enterprise, spins in opposition to the pattern of the Earth.  No matter how green-intentioned, no matter how green its short-term impacts may seem, its management of energy is the very opposite of ecological contribution.</p>

     <p>Of course, not all modern enterprises operate for-profit. </p>

     <p>Today, more and more enterprises are aware of the depleting dynamic of profit in-and-of-itself.  In order to contribute to their social and ecological environment, many enterprises choose a ‘not-for-profit’ energetic structure.  These enterprises strive to return all their revenues back to the pursuit of their social or ecological purpose.</p>

     <p>However, insofar as a not-for-profit enterprise remains fully immersed within the paradigm of profit— where energy is accounted for strictly as revenues and expenses— their energetic structure is insufficient to be green.  </p>

     <p>While an enterprise may ensure that all its revenues go out to its social or ecological purpose, insofar as its energy is accounted for solely in financial terms, it will fail to account for its ecological give and take.  In particular: its give and take of carbon, its support or depletion of biodiversity and its raising or lowering of awareness (our next three Earthen ethics).   In this way, a not-for-profit enterprise may return all of its financial energy back to its purpose, yet still be complicit in the systematic depletion of the ecosystems, biomes and the biosphere of which it is part.</p>

     <p>In other words, without both not-for-profit and net-green intentions— and an accounting of both— an enterprise cannot be green.   </p>

     <p>While in the short-term, an enterprise may sequester much carbon, plant many trees and support many species; without an accounting thereof, one cannot be certain, whether these impacts are in fact a net-contribution.  It could well be that more carbon is emitted, more trees are cut, and more species are depleted to achieve these results!  </p>

     <p>However, the path to net-green has never been clearer.  </p>

     <p>Just as a shoal of salmon direct all their energy towards their out-to-all journey home, our green-intentioned enterprises must direct all their energy towards an out-to-all-purpose.</p>


     <p>Learning from kincentric cultures, such a purpose must embrace both the social and the ecological, recognizing that both, from the perspective of the Earth, are one and the same. This dual not-for-profit and net-green intention, must be declared and accounted for— ensuring that all the enterprises revenues go towards this for-Earth purpose and that all the other Earthen ethics are fully met.</p>

     <p>That said, the outwards spiral of energy is only half of the Earth's spiral pattern of enrichment. </p>

     <p>There is yet the matter... of our matter.</p>

     <p>Our next Earthen ethic.</p>

     <br><br>

  
     </div><!--closes page text content, then loads page curtains:-->

<?php require_once ("includes/eco-curtain.php");?>

<?php require_once ("includes/comments.php");?>

<div id="right-search-overlay" class="search-overlay">

<div id="right-close-button">
    <span style="cursor:pointer" onclick="closeSearch()"><img src="../svgs/right-x.svg" alt="Close page button"></span>
</div>
  <div class="search-overlay-content" >
        
        <div>
            <h1 class="accessibility-plugin-ac">Earthbook Java Search</h1> 
            <p>Search the Tracatus Ayyew.</p>
        </div>
      
        <div class="search-box" style="padding-bottom:15%;">
  <div class="copy-section">
    <input id="search_input" type="text" placeholder="Enter search term..." aria-label="Enter search term">   
    <button class="btn" style="padding:22px 0px 22px 0px;" onclick="EarthbookSearch()" aria-label="Search Button"><i style="background-image: url(../icons/search-white.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 2px;"></i></button> 
  </div>  
  <div id="search_results"></div>
</div>

      </div>
</div>
</div>  

<script>
 function EarthbookSearch() {
  // Get the search query from the input field
  var query = document.getElementById("search_input").value.toLowerCase();

  // Load the JSON file
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Parse the JSON data
      var posts = JSON.parse(this.responseText);

      // Filter the posts that match the search query
      var outputPosts = [];
      for (var i = 0; i < posts.length; i++) {
        var post = posts[i];
        if ((post.keywords && post.keywords.toLowerCase().includes(query)) || (post.chap_description && post.chap_description.toLowerCase().includes(query))) {
          outputPosts.push(post);
        }
      }
      console.log(outputPosts.length);

      console.log(outputPosts);


      // Get the container where the results will be displayed
      var resultsContainer = document.getElementById("search_results");

      // Clear the previous search results
      resultsContainer.innerHTML = "";

      // If no results are found, display a message
      if (outputPosts.length == 0) {
        resultsContainer.innerHTML = "<p>Sorry, no results were found for \"" + query + "\".</p>";
      } else {
        // Iterate over the results and append them to the container
        for (var i = 0; i < outputPosts.length; i++) {
          resultsContainer.innerHTML += "<div class=\"tc-item\"><div id='result_" + i + "' style=\"display:flex; text-align:left; padding: 23px;\"><div class=\"chapter_pic\" style=\"width=100px; margin-right:10px;\"><img src=\"" + outputPosts[i].image_url + "\" width=\"100px\" height=\"100px\"></div><div class=\"chapter-name-search\"><b style=\"font-size:larger;\"><a href='" + outputPosts[i].url + "'>" + outputPosts[i].title + "</b><br><span style=\"font-size:small, color:grey;\">" + outputPosts[i].chapter + "  |  " + outputPosts[i].book + "  |  " + outputPosts[i].words + " words  |  " + outputPosts[i].language + "<br><span style=\"font-size:medium;font-family:'CooperLt',serif;\">" + outputPosts[i].chap_description + "</span><br><span style=\"font-size:smaller;color:grey;\">" + outputPosts[i].url + "</span></a></div>";
        }
      }
    }
  };
  xmlhttp.open("GET", "book-index-en.json", true);
  xmlhttp.send();

  // Display an alert to confirm that the search input was picked up
  //alert("Searching for \"" + query + "\"");
}



</script>


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
        <div class="footnote-text">For an an account of the Igorots remarkable ecological synchrony see: William Henry Scott, (1959) <i>Some Calendars of Northern Luzon</i>, American Anthropologist 60(3):563 - 570 </div>
        </a>

        <a href="#59-up" class="footnote">   
        <div class="footnote-number">59.</div>
        <div class="footnote-text">Entropy research by theoretical physicists posit a pattern of adaptive dissipation in the way matter organizes itself in the presence of sustained energy inputs. Meanwhile, parallel breakthroughs in cosmological epistemology help make sense of the Earth’s unfolding kinetic character. </div>
        </a>

        <a href="#60-up" class="footnote">   
        <div class="footnote-number">60.</div>
        <div class="footnote-text">“The earth is more like an eddy in a river through which flows of matter continuously stream. It is replenished and depleted in a vortical cosmic dance. — Thomas Nail, (2021) <i>A Theory of the Earth</i>
        </div>
        </a>

        <a href="#55-up" class="footnote">   
        <div class="footnote-number">61.</div>
        <div class="footnote-text">Jeremy L. England et al., <i>Dissipative adaptation in driven self-assembly</i>, (Nature Nanotechnology, 2015)  
        </div>
        </a>

        <a href="#56-up" class="footnote">   
        <div class="footnote-number">62.</div>
        <div class="footnote-text">The term ‘technical nutrient’ was first proposed by William McDonough in a theory of circular design that embodies the conceptual geometric problem we highlight here.  See: William McDonough, Michael Braungart (2002), <i>Cradle to Cradle - Remaking the Way We Make Things</i>, North Point Press.   
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
