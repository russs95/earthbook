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

<title>Preface | Tratatus Ayyew - An Earthbook</title>
<meta name="keywords" content="Preface, introduction, stories, dapay, Earth ethics, earthen ethics, earth, ethics, tractatus ayyew, igorot, indigenous philosophy, philosophy, Earth, green ethics, environmental ethics, deep ecology, ecological, ethics"> 
<meta name="description" content="A Theory of Grey & Green based on Earth's example.">


<meta name="twitter:label1" content="Est. reading time" />
<meta name="twitter:data1" content="3 minutes" /> 
	
<!-- Facebook Open Graph Tags for social sharing-->
<meta property="og:title"         content="Preface | Tratatus Ayyew - Earthbook.">
<meta property="og:description"   content="The tale of the Tractatus and its Ayyew inspiration."/>


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
  <div id="underlayer">

    <a name="top"></a>

<!--HEADER NAVBAR-->
<header-component></header-component>

<div id="ct-chapter-top">
    <div id="ct-tc-menu" onclick="openContents()"></div>
    <div class="sero" style="cursor:pointer;" onclick="openContents()">
      <div id="ct-chapter-title">Preface</div>   
      <div id="ct-book-title">Tractatus Ayyew</div>
      <div id="ct-chap-location">Introduction</div>
      <div id="ct-word-count"><i>1,220 words</i></div>
    </div>
</div>
 
<?php require_once ("includes/eco-curtain.php");?>
 



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
      
    <p>For centuries, the tribes of the region, collectively known as the Igorots, had thrived in fierce independence from the rest of the Filipino archipelago. Insulated by a rugged chain of verdant mountains, the Igorots have remained largely immune to three hundred years of colonization further South. However, over the last decades, modern goods have reached even the most remote villages. Whereas the leaves, wood and vines that had long served as functional materials were entirely biodegradable, now strange modern materials stubbornly refused to degrade when discarded.</p>

    <p>However, the Igorots had not been sitting idly by.</p>
    
    <p>In the Igorot society, the art of ecological integration is highly esteemed— in much the same way that painting or sculpture is in other cultures. Consequently, the region had become a hot-bed of up-cycling innovations. In town, old tires were being cut up to make remarkably functional chairs and tables. In the mines, used dynamite cable was being woven to make traditional backpacks. In homes, straws and wrappers were being used to weave mats, purses, wallets and containers of all kinds.  </p>

   <p>Both myself and Banayan were so fascinated by this upcycling movement, that we had become part of it ourselves. Whereas Banayan had been developing arts and crafts education, I was involved in improving designs to make saleable products. However, in the face of the ever-growing flow of discarded plastic, our success was limited. As the legal stand-off in Bontoc intensified, we realized that securing plastic out of the environment was far more vital than making or teaching handicrafts. </p>
    
    <p>It just so happened that my colleagues and I had been experimenting with a new   technique from South America in which plastic bottles were packed full of sand to make building blocks. Providentially, the river sand pit and the local dump-site were side by side. After making several sand bottle-bricks, we decided to try packing them with plastic instead.</p>

   <p>The experiment was a success!</p>
   
   <p>Not only were we able to make bottle-bricks that were just as effective as those packed with sand, we’d been able to secure a great deal of plastic that would have otherwise scattered into the river.</p>

   <p>At my home, I began to experiment with packing my own used plastic into a bottle. I made a small garden with the result. Everyone was delighted. The nearby school, which was struggling to dispose the plastic of hundreds of students, asked to be shown how it was done. After a day of packing plastic, making bricks and building a composter, I and the community were excited to this alternative to burning and dumping plastic in the river.</p>
  
   <p>As the technique began to spread to other schools, Banayan stepped in. She realized the potential for raising the awareness of the ecological impacts of plastic. We worked together to create a reporting system and a guidebook. Through her coordination, what was soon to be called ‘ecobricking’ spread out to hundreds of schools in the province.</p>

   <p>And then to thousands.</p>

   <p>With a year, as the entire Northern Philippines department of education, the Catholic and Protestant Churches, and various municipal and provincial governments came on board, ecobricking fast became an alternative for millions of Filipinos to manage their plastic.</p>

   <p>Banayan and I have watched with both joy and trepidation as the ecobrick movement has spread.</p>

   <p>While at first it seemed a great victory that so much plastic was being contained and secured from contaminating the river, the matter was far from settled. We were to learn that the persistence of plastic is a multifaceted social and physical phenomenon:  Much as we may wish, it does not disappear after we dispose of it— nor when we put it in a bottle.</p>

   <p>As the ecobrick movement spread, we observed that often, in providing a solution for plastic, the continued consumption of plastic was legitimized.</p>

   <p>In some schools we observed a jump in the purchase of soft-drinks in order to procure bottles for ecobricking. In other locations we observed an increase in junk food consumption so that their would be wrappers to pack.<p>

  <p>We also began to observe troubling building applications.</p>

  <p>Some local governments put their ecobricks to use in gardens in which they were fully exposed to the sun. After several years, the bottles had disintegrated and all the plastic inside had scattered. In other cases, a similar fate was destined by the improper use of cement as a mortar in ecobrick constructions.</p>

    <p>Banayan and I, observing these phenomena, were troubled. Were ecobricks truly being of ecological service? 
</p>
      
    <p>Over the last decade these questions have compelled us to re-examine not only ecobricks as a 'solution to plastic', but so too what constitutes an 'ecological solution' in the first place.</p>

    <p>As a short-hand for ecological solutions, the term 'green' has come to figure prominently in our reflections.</p> 
    
    <p>Specifically, we’ve come to ask ourselves: <i>What in fact should green really mean?</i></p>



    <p>While Banayan and I continue to ecobrick our own used plastic, our suspicion has grown that solving plastic (and being ‘green’) is not just about new techniques and technologies. Just as significant as <i>what</i> we do is <i>how and why</i> we do it.  In this aspect, our conviction has coalesced: the wisdom traditions of ancient indigenous cultures<a href="#footnotes">¹</a> are of critical relevance to the how and why of our modern attempts at green.</p>

    <p>Our title reflects these two approaches and perspectives that Banayan and my ancestries each offer.</p>
    
    <p>In Latin, the word <i>tractatus</i> refers to the philosophical tradition of a treatise— a systematic exposition of a particular concept.  In Kan'kan'ue, the language of the Igorots, the word <i>ayyew</i> refers to the virtue of cyclic ecological integration that guides their culture.</p>

    <p>It is this <i>ayyew ethos</i> which inspires and guides the theory of green and grey presented in the three books of the <i>Tractatus Ayyew</i> ahead.</p>

    <p>In Book One we clear the ground and establish the foundation of our Earth anchored ethics.</p>

    <p>In Book Two we dedicate a chapter to each of the five Earthen ethics. </p>

    <p>In Book Three we conclude with a five-fold Earthen solution for plastic.</p>

    <p>In this way, through eighteen chapters that each present a functional facet of green enterprise, the <i>Tractatus Ayyew</i> aims to be a tool kit rather than a manifesto.</p>

    <p>It is our hope that through the example of plastic’s resolve, other grey challenges may transition, with confidence and clarity, to the Earthen way of green.</p>

  </div>

   <div class="footnote-section">

    <div id="line" style="border-style: solid; border-width: 1px; margin-bottom: 30px; width:70%; text-align:left;"></div>
  
    <a name="1-down"></a>
    <p style="font-variant-caps: all-petite-caps; color:grey">Chapter Footnotes</p>
    <a href="1-up" class="footnote" aria-label="View the original footnoted passage">
        
            <div class="footnote-number">1.</div>
            <div class="footnote-text">Later, to be more philosophically precise we will use the term ‘kincentric knowing’ and refer to ‘kincentric cultures’.</div>
        </a>
     
      </div><!--Closes footnote section-->
          
    </div><!--Closes main content block-->
  
    <!--Footer Next Chapter Section: Requires customization-->

<div id="footer-chapter" style="margin-bottom: 0px;">

  <div class="footer-size">
    
    <div class="footer-left">

      <div id="footer-icon-left" style="cursor:pointer;" onclick="openFooter()"></div>
    
     
      <div class="next-section">
          <div class="next-sec">Next:</div>
          <div class="sec-name"><i>Epigraph</i></div>
      </div>

    </div>
    
    <div class="footer-right">
   
      <a href="epigraph.php"><div class="next-button">Next ➔</div></a>

    </div>
  </div>
</div>

<?php require_once ("includes/chap-footer.php");?>
	  
<div id="footer-settings">

<div class="footer-size" style="height:70px;">
	
	<p style="font-variant-caps: all-petite-caps; color:grey">Reader Comments</p>
	
</div>

<div class="footer-size" style="height:70px;">
	
	<p style="font-variant-caps: all-petite-caps; color:grey">Search Book</p>
	
</div>
<div class="footer-size" style="height:70px;">
	
	<p style="font-variant-caps: all-petite-caps; color:grey">Contribute</p>
	
</div>


</body>
</html>

