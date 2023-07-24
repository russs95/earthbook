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


    .glossary_item {
      padding-top: 1px;
      }

      .glossary-title {
       /* font-family: "CooperLtMedium";*/
        font-weight: bold;
        decoration: italic;
        font-size: xx-large;
      }

      .glossary_info {
        font-size: medium;}
      
h6 {
  margin-top: -15px;
margin-bottom: 20px;
color: var(--drop-cap);}
      

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

<div id="glossary-container" style="text-align: left;
text-justify: none;"><i>Loading glossary...</i></div>

  
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
  const response = await fetch('glossary.json?v=1.1');
  const jsonData = await response.json();
  // Sort the data alphabetically by title
  jsonData.sort((a, b) => a.title.localeCompare(b.title));
  // Get the container element
  const container = document.querySelector('#glossary-container');
  // Clear the previous contents of the container
  container.innerHTML = '';
  // Loop through the entries
  for (let i = 0; i < jsonData.length; i++) {
    const entry = jsonData[i];
    // Create the glossary item element
    const item = document.createElement('div');
    item.classList.add('glossary-item');
    item.id = entry.title;
    // Create the title element
    const title = document.createElement('i');
    title.classList.add('glossary-title');
    title.textContent = entry.title;
    // Create the description element
    const description = document.createElement('p');
    description.appendChild(title);
    description.innerHTML += '<br>' + entry.chap_description;
    // Create the keywords element
    const keywords = document.createElement('h6');
    keywords.textContent = 'Related terms: ' + entry.keywords;
    
    // Create the glossary info element
    const glossInfo = document.createElement('div');
    glossInfo.classList.add('glossary-info');
    glossInfo.appendChild(keywords);
    
    // Create the chapter element with URL if relevant_chap exists
    if (entry.relevant_chap) {
      const chapter = document.createElement('h6');
      const chapterText = document.createTextNode('Introduced in chapter: ');
      const chapterLink = document.createElement('a');
      chapterLink.textContent = entry.relevant_chap;
      chapterLink.href = entry.relevant_chap_url;
      chapter.appendChild(chapterText);
      chapter.appendChild(chapterLink);
      // Append the chapter element to glossInfo
      glossInfo.appendChild(chapter);
    }
    
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

