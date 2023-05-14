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
$page_number = "2";
$page_title = "Preface | Tractatus Ayyew - An Earthbook";
$chap_name = "Preface";?>

<head>

<?php require_once ("../header.php");?>


<!--META TAGS
Must be updated for each page-->

<meta property="article:modified_time" content="2023-02-20T09:14:13+00:00">

<meta name="keywords" content="Preface, introduction, stories, dapay, Earth ethics, earthen ethics, bontoc, philipines, igorot, russell, irene, banyan, ecobricks, plastic, indigenous philosophy, philosophy, what should green mean, deped, irene, banayan, russell, maier">
<meta name="description" content="The story behind the beginning, the writing and the title of the Tractatus Ayyew.">


<meta name="twitter:label1" content="Est. reading time">
<meta name="twitter:data1" content="4 minutes"> 


<meta property="og:description"   content="The tale of the Tractatus and its Ayyew inspiration.">


<style>


.lead-page-paragraph:first-child::first-letter {
  color: var(--pre-link-color);
  float: left;
  font-family: "CooperLt";
  font-size: 4.8em;
  line-height: 0.85;
  margin-top: -40px;
  padding-right: 7px;
  margin-left: 0px;
  margin-bottom: 5px;
  font-weight:400;
}
  
</style>
</head>


<!--Main HTML Begins-->

<BODY class="accessibility-plugin-ac">
<!--TOUR-CURTAIN-->
<tour-curtain></tour-curtain>


  <div id="underlayer" class="accessibility-plugin-ac">

    <div id="top"></div>

<!--HEADER NAVBAR-->
<header-component></header-component>

<div id="ct-chapter-top">
  <button type=button id="ct-tc-menu" onclick="openContents()" aria-label="Open Table of Contents" style="background-color:var(--header-footer);" ></button>
  <div class="ct-holder" style="cursor:pointer;" onclick="openContents()">
      <div id="ct-chapter-title">Preface</div>   
      <div id="ct-book-title">Tractatus Ayyew</div>
      <div id="ct-chap-location">Introduction</div>
      <div id="ct-word-count"><i>1,140 words</i></div>
    </div>
</div>
  



<!-- Page Title Section-->

<div id="ct-chapt-graphic" class="background-000">
  <div class="ct-chapter-quote">
    “Ayka ta man gagayam ta"<br>
    (Come, let’s tell some stories)
  </div>
  <div class="ct-quote-source">
   ― Igorot expression
   </div>
</div>

<div id="up-arrow"></div>

<div id="ct-main">



<!-- MAIN TEXT CONTENT of the Page
  For footnotes, use these numbers:  ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ 
-->
<br><br><br>
<div><div class="lead-page-paragraph">
  ALAS, not all books have beautiful beginnings.  
</div>
</div>  
<div class="page-paragraph">
   <p>In 2011, the amount of discarded sandals, sodden diapers, used bags and tossed wrappers entering the Chico River had reached a breaking point. Overwhelmed by the ever arriving slew of plastic, the downriver Filipino province of Kalinga took action to sue the upriver town of Bontoc. The mayor and governor took the charges seriously. They set about shutting down the numerous dumpsites along the river's winding course through the remote region.</p>
     
    <p>But where was all our plastic to go?</p>

    <p>For those of us living along the river, the challenge was palpable.</p>
      
    <p>For centuries, the tribes of the region, collectively known as the Igorots, had thrived in fierce independence from the rest of the Philippine archipelago. With their towns and villages nestled within a rugged chain of verdant mountains, the Igorots had remained largely insulated from three hundred years of Spanish colonization further South. However, over the last decades, modern goods had reached even the most remote villages. Whereas the leaves, wood and vines that had long served them as functional materials were entirely biodegradable, now strange modern materials stubbornly refused to degrade when discarded.</p>

    <p>However, the Igorots had not been sitting idly by.</p>
    
    <p>In the Igorot society, the art of ecological integration is highly esteemed— in much the same way that painting or sculpture is in other cultures. Consequently, the region had become a hot-bed of up-cycling innovations. In town, old tires were being cut up to make remarkably functional chairs and tables. In the mines, used dynamite cable was being woven to make traditional backpacks. In homes, straws and wrappers were being used to weave mats, purses, wallets and household items of all kinds.  </p>

   <p>Banayan and I were so fascinated by this upcycling movement, that we became part of it ourselves. While Banayan had been integrating upcycled arts and crafts into school curriculums, I was involved in improving designs to make saleable upcycled products. However, in the face of the ever-growing flow of plastics being discarded, our successes were all but insignificant. As the legal stand-off in Bontoc intensified, we realized that securing plastic out of the environment was far more vital than making or teaching handicrafts.</p>
    
    <p>It just so happened that my colleagues and I had been experimenting with a new   technique from South America in which plastic bottles were packed full of sand to make building blocks. Providentially, the river sand pit and the local dump-site were side by side. After making several sand bottle-bricks, we decided to try packing them with plastic instead.</p>

   <p>The experiment was a success!</p>
   
   <p>Not only were we able to make bottle-bricks that were just as effective as those packed with sand, we’d been able to secure a great deal of plastic that would have otherwise scattered into the river.</p>

   <p>At my home, I began to experiment with packing my own used plastic into a bottle. I made a small garden bench with the result. My neighbours and I were delighted. The nearby school, which was struggling to dispose of the plastic of hundreds of students, asked to be shown how it was done. After a day of packing plastic, making bricks and building a composter, everyone was excited by this simple alternative to burning and dumping.</p>
  
   <p>As the technique began to spread to other schools, Banayan stepped in. She realized the potential for raising the awareness of plastic's dangers. We worked together to create a reporting system and a guidebook. Through her coordination, what was soon to be called ‘ecobricking’ spread out to hundreds of schools in the province.</p>

   <p>And then to thousands.</p>

   <p>Within a year, as the entire Northern Philippines department of education, the Catholic and Protestant Churches, and various municipal and provincial governments came on board.  Even the offices of the Bontoc mayor and the provincial governor!  Over the next years, ecobricking fast became an alternative for millions of Filipinos to manage their plastic.</p>

   <p>Banayan and I have watched with both joy and trepidation as the ecobrick movement has spread.</p>

   <p>While at first it seemed a great victory that so much plastic was contained and secured from contaminating the river, the matter was far from settled. We were to learn that the persistence of plastic is a multifaceted social and physical phenomenon:  much as we may wish, it does not disappear after we dispose of it— nor when we put it in a bottle.</p>

   <p>As the ecobrick movement spread, we observed that sometimes, in providing a solution for plastic, the continued consumption of plastic was legitimized.  We also observed troubling applications of the technique.</p>

   <p>In some schools we saw a jump in the purchase of soft-drinks in order to procure bottles for ecobricking. In other locations junk food consumption increased so that there would be wrappers to pack.  Elsewhere, we observed the use of carbon-intensive cement as a mortar in ecobrick construction.</p>

    <p>Banayan and I, reflecting on these phenomena, were troubled. Were ecobricks truly being of ecological service?</p>
      
    <p>Over the last decade these questions have compelled us to re-examine not only ecobricks as a 'solution to plastic', but so too what constitutes an 'ecological solution' in the first place.</p>

    <p>As a short-hand for ecological solutions, the term 'green' has come to figure prominently in our reflections.</p> 
    
    <p>Specifically, we’ve come to ask ourselves: <i>What in fact should green really mean?</i> And, more precisely, what are its requisite parameters and principles?</p>

    <p>While Banayan and I continue to ecobrick our own used plastic, our suspicion has grown that solving plastic (and being ‘green’) is not just about new techniques and technologies. Just as significant as <i>what</i> we do is <i>how and why</i> we do it.  In this aspect, our conviction have crystalized: the wisdom traditions of ancient indigenous cultures are critical to giving meaning and substance to our contemporary concept of green.</p>

    <p>Our title reflects this merging of the modern and indigenous world views<a href="#footnotes" title="Going forward, instead of the term 'indigenous' we will use the term ‘kincentric' to specifically reference the indigenous world view which we are exploring: a particular cosmology that, although it is characterstic of most indigenous cultures, is not necessarily so.  This will be expanded upon in chapter 5.">¹</a> that our two ancestral backgrounds emobdy.</p>
    
    <p>In Latin, the word <i>tractatus</i> refers to the philosophical tradition of a treatise— a ste-by-step exposition of a particular concept.  In Kan'kan'ue, the language of the Igorots, the word <i>ayyew</i> refers to the virtue of cyclic ecological integration that guides their culture.</p>

    <p>It is this <i>ayyew ethos</i> which inspires and guides the theory of green and grey presented in the three books of the <i>Tractatus Ayyew</i> ahead.</p>

    <p>In Book One we clear the ground and establish the five-facet foundation of our Earth anchored ethics.</p>

    <p>In Book Two we dedicate a chapter to each of the five Earthen ethics. </p>

    <p>In Book Three we conclude with a five-fold Earthen solution for plastic.</p>

    <p>In this way, through eighteen chapters that each present a functional facet of green enterprise, the <i>Tractatus Ayyew</i> aims to be a tool kit rather than a manifesto.</p>

    <p>It is our hope that with the application of Earthen principles in plastic's resolve, other grey challenges may transition, with confidence and clarity, to the Earthen way of green.</p>

    </div><!--closes page text content, then loads page curtains:-->

<?php require_once ("includes/eco-curtain.php");?>

<?php require_once ("includes/comments.php");?>

<?php require_once ("includes/search.php");?>

<!--FOOTNOTES SECTION-->

    <div class="footnote-section" style="z-index:8;">

      <div id="line" style="border-style: dotted; border-color: grey; border-width: 1px; margin-bottom: 20px; width:105%; text-align:left;"></div>

      <div id="footnotes" style="cursor:pointer;display:flex;font-variant-caps: all-petite-caps; color:grey;" onclick="openFootnotes()">
            
        <div id="footnotes-arrow"></div>
        
        <div class="footnotes-title">Chapter Footnotes</div>
      
      </div>

      <div id="footer-reveal-container" style="height:200px;transition:0.4s;" >

        <div id="footnotes-reveal" style="height:200px; overflow-y: clip; transition:0.4s;margin-bottom:0px;transition-delay: 0.4s;">
        
        
        <a href="#1-up" class="footnote">   
        <div class="footnote-number">1.</div>
  
        <div class="footnote-text">Going forward, instead of the term 'indigenous' we will use the term ‘kincentric' to specifically reference the indigenous world view which we are exploring: a particular cosmology that, although it is characterstic of most indigenous cultures, is not necessarily so.  This will be expanded upon in chapter 5.
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
          <div class="sec-name"><i>Epigraph</i></div>
      </div>

    </div>
    
    <div class="footer-right">
    
    <a href="epigraph.php" title="Go to the next chapter" aria-label="Go to the next chapter"><div class="next-button">Next ➔</div></a>

  </div>
</div>

<?php require_once ("includes/chapTER-footer.php");?>


</div>
</body>
</html>button


