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
$page_number = "112";
$page_title = "Glossary | Tractatus Ayyew - An Earthbook";?>

<head>

<?php require_once ("../header.php");?>


<!--META TAGS
Must be updated for each page-->

<meta property="article:modified_time" content="2023-02-28T09:10:13+00:00">
<meta name="keywords" content="ayyew, biome, biosphere, biodiversity, cosmological, character, dapay, earth, Eartch, Earthen, earthen, Earthen ethics, Earth Enterprise, Ecological contribution, ecological consciousness, ecology, green, grey, fossil fuels, igorot, kan'ka'nue, kankanue,petro-capital, petrocapital, economy, plastic sequestration, plastic's stellar sotry, plastic 1.0, plastic 2.0, regenerative, wet'su'weten "> 
<meta name="description" content="A list of the key terms and their definitions as they are used throughout the Tractatus Ayyew">
<meta property="og:description"   content="A list of the key terms and their definitions as they are used throughout the Tractatus Ayyew"/>


<style>
  
@media screen and (max-width: 699px) {
    .ct-chapter-quote {
      width: 80%;
      font-size: 1.4em;
    }
    .ct-quote-source {
      width: 80%;
      font-size: 0.8em;
    }
  }

  @media screen and (min-width: 700px) and (max-width: 1324px) {
    .ct-chapter-quote {
      width: 50%;
      font-size: 1.8em;
    }
    .ct-quote-source {
      width: 70%;
      font-size: 1em;
    }
  }
    
  @media screen and (min-width: 1325px) {
    .ct-chapter-quote {
    width: 40%;
    font-size: 2em;
    text-shadow: 0px 0px 12px var(--slider);
    }
    .ct-quote-source {
      width: 50%;
      font-size: 1em;
    }
  }

  #ct-chapter-title {
      /*padding-top: 45px;
      */font-size: 10vmin;
      letter-spacing: 2px;
      
    }

    i {
      font-family: "CooperLtMedium";}


      .gloss_item {}

      .gloss_info {}

      

</style>


</head>

<!--MAIN HTML Begins-->

<BODY class="accessibility-plugin-ac" style="max-width:100%; overflow-x:hidden;" onload="buildGlossary()">
<!--TOUR-CURTAIN-->
<tour-curtain></tour-curtain>


  <div id="underlayer">

    <div id="top"></div>

  <!--HEADER NAVBAR-->
  <header-component></header-component>

  <div id="ct-chapter-top">
  <button type=button id="ct-tc-menu" onclick="openContents()" style="background-color:var(--header-footer);" aria-label="Open Table of Contents"></button>
  <div class="ct-holder" style="cursor:pointer;" onclick="openContents()">
        <div id="ct-chapter-title">Glossary</div>   
        <div id="ct-book-title">Tractatus Ayyew</div>
       <div id="ct-chap-location">An Earthen Ethics</div>
        <div id="ct-word-count">Appendix</div>
      </div>
  </div>

<!-- Page Title Section <div id="ct-chapt-graphic" class="background-000">
    <div class="ct-chapter-quote">
      Key terms & their definitions.
    </div>
    <div class="ct-quote-source">
    </div>
  </div>
--><?php require_once ("includes/eco-curtain.php");?>

<div id="ct-chapt-graphic" class="background-000">
  <img src="../icons/glossary.svg" style="width:35%; height:35%; margin:auto;  text-align:center">
  </div>

  <div id="up-arrow"></div>


  <div id="ct-main">

 


 


<!-- MAIN TEXT CONTENT of the Page
  For footnotes, use these numbers:  ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ⁶⁰  “ ” ³¹⁰ ²⁶ ⁴⁷ ⁵⁴
-->
<div class="lead-page-paragraph">
Key terms & their definitions as used throught the <i>Tractatus Ayyew</i> and on Earthen.io publications.<br><br><br>
    </div>
    <div class="footnote-line" style="border-style: dotted; border-color: grey; border-width: 1px; margin-bottom: 60px; width:100%; text-align:left;"></div>


<div class="page-paragraph">

<div id="glossary-container"></div>

---------------f

<p id="ayyew"><i>Ayyew</i>: The Igorot virtue of ever increasing one’s sync with ecological cycles.</p>

<p id="biome"><i>Biome</i>: An ecosystem of ecosystems. A principal ecosystem of a biosphere.</p>

<p id="biosphere"><i>Biosphere</i>: The all-encompassing ecology of a planet (usually that of Earth).</p>

<p id="biodiversity"><i>Biodiversity</i>: The variety and plurality of species in a biological system.</p>

<p id="cosmologicalcharacter"><i>Cosmological Character</i>: The unique history, configuration, and composition of each planet that gives it its characteristic pattern of processes.</p>

<p id="dapay"><i>Dapay</i>: The central stone plaza of every Igorot village that is used for ceremonies, feasts, and storytelling.</p>

<p id="earth"><i>earth</i>: Soil, ground [lowercase ‘e’]. Used with an article (i.e. “the”)</p>

<p id="earthplanet"><i>Earth</i>: The third planet orbiting the sun [uppercase ‘E’]. Used without an article.</p>

<p id="earthen"><i>Earthen</i>: Of the character of the Earth. [Capital ‘E’]</p>

<p id="earthensoil"><i>earthen</i>: Of the earth (i.e. soil, ground) [lowercase ‘e’]</p>

<p id="earthenethics"><i>Earthen Ethics</i>: An ethical framework for discerning the ecological color of an act, process, or enterprise based on the example of Earth.</p>

<p id="earthenterprise"><i>Earth Enterprise</i>: An enterprise that strives first and foremost to enrich the biosphere by following Earth’s example.</p>

<p id="ecologicalcontribution"><i>Ecological Contribution</i>: A process that fully embodies the principles of Earthen ethics. A green ecological impact.</p>

<p id="ecologicalconsciousness"><i>Ecological Consciousness</i>: An awareness of one’s interconnection to the cycles of life near and far, old and new, local and global.</p>

<p id="ecology"><i>Ecology</i>: A biological system; a part of a biome.</p>

<p id="green"><i>Green</i>: An ecological contribution: a process that follows Earth’s example by embodying all the Earthen principles.</p>

<p id="grey"><i>Grey</i>: A depleting ecological impact: a process that fails to embody all the Earthen principles.</p>

<p id="fossilfuels"><i>Fossil Fuels</i>: A modern term to describe the Earth’s ancient compacted carbon stores.</p>

<p id="igorot"><i>Igorot</i>: The people of the highlands of northern Luzon, in the West Philippines Sea.</p>

<p id="humancentric"><i>Humancentric</i>: A view of the world in which humans are central and separate from the natural environment around them. Also, 'anthropocentric'.</p>

<p id="cyclocentric"><i>Cyclocentric</i>:  From the Greek Κύκλος for 'Cycle', we introduce the term 'cyclocentric' to describe kincentric cultures and their propensity to self organize around the sync and celebration of Earthen cycles.  We use this term in distinction to the terms 'ecocentric' or 'biocentric' which fail to capture the the importance of human/ecological synchony which characterized these particular cultures.  This term and concept are inspired by Igorot Ayyew culture.  See an  account of the Igorots remarkable ecological synchrony: William Henry Scott, (1959) Some Calendars of Northern Luzon, American Anthropologist</p>
<p id="kincentric"><i>Kincentric</i>:  In opposition to humancentric; a view of the world in which plants, humans, animals and all Earthen organisms share ancestry and origins, cycles and ecosystems.</p>
<p id="humancentric"><i>Humancentric</i>:  A view of the world in which humans are central and separate from the natural environment around them.  Also, 'anthropocentric'.</p>
<p id="petrocapital"><i>Petro-Capital Economy</i>:  An economy whose flow and generation of capital is powered by petroleum energy.</p>
<p id="sequest"><i>Plastic Sequestration:</i>  Plastic sequestration is the process of concentrating and compacting plastic to create short term building blocks that secure and store plastic over the long-term, in a not-for-profit process that raises consciousness, supports biodiversity and is net-subtractive.</p>
<p id="stellar"><i>Plastic’s Stellar Story</i>:  The four billion year view of plastic as carbon sequestered by the Earth, and de-compacted by humans.</p>
<p id="p1"><i>Plastic 1.0:</i>  The paradigm of plastic as human made and managed.</p>
<p id="p2"><i>Plastic 2.0: </i> The paradigm of plastic as a part of the Earth’s billion year process of cultivating the biosphere and as representation of our petro-capital economy.</p>
<p id="regen"><i>Regenerative</i>:  A greening process whose subtractive impact is over twice that of its additive impact.</p>
<p id="wet"><i>Wet'su'weten</i>:  Wetʼsuwetʼen are a First Nations people who live on the Bulkley River... </p>





     </p>
     <br><br>

  
    </div><!--closes page text content-->

          
  </div><!--Closes main content block-->

  <!--Footer Next Chapter Section: Requires customization-->
  <div id="footer-chapter" style="margin-bottom: 0px;">

    <div class="footer-size">
    
      <div class="footer-left">

        <div id="footer-icon-left" style="cursor:pointer;" onclick="openFooter2()"></div>
    
     
        <div class="next-section">
            <div class="next-sec">Return to:</div>
            <div class="sec-name"><i>The Dashboard</i></div>
        </div>

      </div>
    

      <div class="footer-right">
    
        <a href="index.php"><div class="next-button">Home ➔</div></a>

      </div>
    </div>
  </div>

  <?php require_once ("includes/chap-footer.php");?>


<script>

async function buildGlossary() {
  // Load the JSON data
  const response = await fetch('glossary.json');
  const jsonData = await response.json();
  // Sort the data alphabetically by title
  jsonData.sort((a, b) => a.title.localeCompare(b.title));
  // Get the container element
  const container = document.querySelector('#glossary-container');
  // Loop through the entries
  for (let i = 0; i < jsonData.length; i++) {
    const entry = jsonData[i];
    // Create the glossary item element
    const item = document.createElement('div');
    item.classList.add('glossary-item');
    item.id = entry.title;
    // Create the description element
    const description = document.createElement('p');
    const title = document.createElement('i');
    title.classList.add('glossary-title');
    title.textContent = entry.title;
    description.appendChild(title);
    description.innerHTML += `: ${entry.chap_description}`;
    // Create the glossary info element
    const glossInfo = document.createElement('div');
    glossInfo.classList.add('glossary-info');
    // Create the keywords element
    const keywords = document.createElement('h6');
    keywords.innerHTML = `Related terms: ${entry.keywords}`;
    // Create the chapter element
    const chapter = document.createElement('h6');
    chapter.innerHTML = `Introduced in chapter: ${entry.relevant_chap}`;
    // Append the elements to the glossary info
    glossInfo.appendChild(keywords);
    glossInfo.appendChild(chapter);
    // Append the elements to the item
    item.appendChild(description);
    item.appendChild(glossInfo);
    // Append the item to the container
    container.appendChild(item);
  }
}





window.addEventListener('load', function() {
      buildGlossary();
    });

</script>
</body>


</html>

