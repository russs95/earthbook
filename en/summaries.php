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
$page_number = "103";
$page_title = "Summaries | Tractatus Ayyew - An Earthbook";?>

<head>

<?php require_once ("../header.php");?>


<!--META TAGS
Must be updated for each page-->

<meta property="article:modified_time" content="2023-02-28T09:10:13+00:00">
<meta name="keywords" content="summaries, sentence, paragraph, earth ethics, earthen ethics, earth, ethics, tractatus ayyew, igorot, indigenous philosophy, philosophy, Earth, green ethics, environmental ethics, deep ecology, ecological, ethics"> 
<meta name="description" content="A short sentence, a long sentence and a paragraph summary of Earthen ethics.">


<meta name="twitter:label1" content="Est. reading time" />
<meta name="twitter:data1" content="4 minutes" /> 
<meta property="og:description"   content="A short sentence, a long sentence and a paragraph summary of Earthen ethics."/>


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
      padding-top: 45px;
      font-size: 10vmin;
      letter-spacing: 3px; 
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
  <button type=button id="ct-tc-menu" onclick="openContents()" aria-label="Open Table of Contents"></button>
  <div class="ct-holder" style="cursor:pointer;" onclick="openContents()">
        <div id="ct-chapter-title">Summaries</div>   
        <div id="ct-book-title">Tractatus Ayyew</div>
        <div id="ct-chap-location">Appendix</div>
        <div id="ct-word-count"><i>540 words</i></div>
      </div>
  </div>

<!-- Page Title Section-->
<?php require_once ("includes/eco-curtain.php");?>


<!-- Page Title Section-->

  <div id="ct-chapt-graphic" class="background-000">
  <div class="ct-chapter-quote">
    A short sentence, long sentence & paragraph summary of Earthen Ethics.
  </div>
  </div>
  
  <div id="up-arrow"></div>

  <div id="ct-main">


<!-- MAIN TEXT CONTENT of the Page
  For footnotes, use these numbers:  ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ 
-->
 

    <div class="page-paragraph">


      <h2>1. A short sentence</h2>
      <p>The Earthen ethics concept of 'green' can be summed up in a simple two part proposition:
      </p>

      <div class="quote"><p>A process is green to the extent that it is an ecological contribution and it is an ecological contribution to the extent that it follows Earth's example.</p></div>
      <br>
      <a name="long"></a>
      <h2>2. A longer sentence</h2>
      
      <p>By adding 'must' we have the core Earthen ethic: </p>

      <div class="quote"><p>To be an ecological contribution a process must embody Earth’s pattern of concentrating matter and dispersing energy to cyclically enrich the vibrancy, diversity and consciousness of the system of which it is a part.
      </p></div>

      <br>
      <a name="paragraph"></a>
      <h2>3. A paragraph</h2>
      
      <p>Now, let’s place it within within our contemporary context:</p>

      <div class="quote"><p>As we become more and more aware of the ecological degradation caused by our modern age, we long to amend our ways. Of all our ecological crises, plastic pollution is particularly representative of our challenge. As a fossil-fuel by-product, plastic embodies a direct connection to both the biosphere's multi-billion year pattern of enrichment and our modern pattern of depletion. By retracing plastic’s and Earth's primordial story, we can observe the sharp contrast in these two patterns. In particular, the ways in which Earth’s spiraled its matter inwards and energy outwards to unfurl ever greater vitality, diversity and consciousness. Learning from cultures that have long embodied this very pattern to master their own ecological integration, we can amend our metaphysics to recognize ecological contribution as our basis for green.  Accordingly, we can ensure that our processes, cycles and systems embody Earth’s pattern of energy and matter management, declare their for-Earth intention, vitalize biodiversity and raise awareness of their ecological impact.  Starting with our plastic, we can follow Earth's example in this way to ensure that our enterprises systematically enrich the ecosystems of which they are a part. 
      </p></div>
  
    </div><!--closes page text content-->
          
  </div><!--Closes main content block-->

  <!--Footer Next Chapter Section: Requires customization-->
  <div id="footer-chapter" style="margin-bottom: 0px;">

    <div class="footer-size">
    
      <div class="footer-left">

        <div id="footer-icon-left" style="cursor:pointer;" onclick="openFooter2()"></div>
    
     
        <div class="next-section">
            <div class="next-sec">Next:</div>
            <div class="sec-name"><i>Dedication</i></div>
        </div>

      </div>
    

      <div class="footer-right">
    
        <a href="dedication.php"><div class="next-button">Next ➔</div></a>

      </div>
    </div>
  </div>


  <?php require_once ("includes/chap-footer.php");?>


</div>

</body>
</html>

