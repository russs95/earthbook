<!--EARTHBOOK CHAPTER PAGE - TEMPLATE

PHP Page Version 1.0.0
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

<meta charset="UTF-8"> 
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta property="article:modified_time" content="2022-12-03T09:14:13+00:00" />

<!--BOOK META TAGS
These tags will be consistent for the whole book-->

<meta property="og:site_name" content="Tractatus Ayyew" />
<meta property="article:publisher" content="Earthen.io" />
<meta name="author" content="Russell Maier & Banayan Angway">
<meta property="og:type" content="book" />
<link rel="apple-touch-icon" sizes="180x180" href="../favicons/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="../favicons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="../favicons/favicon-16x16.png">
<link rel="manifest" href="../favicons/site.webmanifest">

<meta name="twitter:card" content="summary" />
<meta property="og:type"          content="book">
<meta property="og:image"         content="https://book.earthen.io/covers/earth-book-cover-1000px.jpg"/>
<meta property="og:image:type" content="image/png" />
<meta property="og:image:width" content="1000px" />
<meta property="og:image:height" content="1500px" />

<meta property="og:locale" content="en_GB" />

 <!-- Style Sheets   
All the css needed for this page-->
 
 
 <!--<link  rel="stylesheet" type="text/css" href="../style-sheet.css?v1.3">
<link rel="stylesheet" href="../acessibilidade.css" />
<link rel="stylesheet" type="text/css" href="../stylesheet-chapter.css">-->

<link rel="preload" href="../style-sheet.css?v1.6" as="style" onload="this.rel='stylesheet'">
<link rel="preload" href="../light.css?v1.5" as="style" onload="this.rel='stylesheet'">
<link rel="preload" href="../acessibilidade.css" as="style" onload="this.rel='stylesheet'">
<link rel="preload" href="../stylesheet-chapter.css" as="style" onload="this.rel='stylesheet'">
<link rel="preload" as="image" href="../svgs/up-arrow-dark.svg">
<link rel="preload" as="image" href="../svgs/up-arrow-light.svg">

<link rel="stylesheet" href="../light.css" media="(prefers-color-scheme: no-preference), (prefers-color-scheme: light)">
 <link rel="stylesheet" href="../dark.css" media="(prefers-color-scheme: dark)">
 


 <!-- INCLUDES
 Main Scripts-->   

 <script src="../content-javascript.js" defer></script>
 <script src="../universal-javascript.js" defer></script>
 <script src="../clip/dist/clipboard.min.js"></script>
 <script src="../accessibility.js" defer></script>
 <script type="module" src="https://unpkg.com/dark-mode-toggle" async></script>
 
 <!-- Arc CDN Script without delay
<script async src="https://arc.io/widget.min.js#Z7EC7Cze"></script>-->



 <!--Page Components
All the page components required to build this page-->

 <!--1--><script src="includes/header-component.js" type="text/javascript" preload></script>
 <!--2--><script src="includes/settings-curtain.js" type="text/javascript" defer></script>
 <!--3--><script src="includes/content-curtain.js" type="text/javascript" defer></script>
 <!--4--><script src="includes/share-curtain.js" type="text/javascript" defer></script>
 <!--5--><script src="includes/buy-curtain.js" type="text/javascript" defer></script>
 <!--6--><script src="includes/bookplate-curtain.js" type="text/javascript" defer></script>
 <!--7--><script src="includes/earthbook-curtain.js" type="text/javascript" defer></script>
 <!--8b--><script src="includes/footer-chapter.js" type="text/javascript" defer></script>


 <!-- Fonts
The requisite typography for the page-->

<link rel="preconnect" href="../fonts/">
<link rel="preconnect" href="../fonts/" crossorigin> 
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Mulish loads first for first page view-->

<link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;500&display=swap" rel="stylesheet" media="print" onload="this.media='all'"> 

	
<!--Preload graphics-->
<link rel="preload" as="image" href="../svgs/footer-settings-button.svg">
<link rel="preload" as="image" href="../svgs/footer-settings-button-over.svg">
<link rel="preload" as="image" href="../svgs/footer-settings-button-up.svg">


<!--END OF GENERIC CONTENT-->

<!--PAGE LINKS

**** Must be updated for each unique page ****-->

<link rel="canonical" href="https://book.earthen.io/en/epigraph.php"> 
<link rel="alternate" href="https://book.earthen.io/en/epigraph.php" hreflang="en" />
<link rel="alternate" href="http://book.org/en/epigraph.php" hreflang="x-default" />
<!--<link rel="alternate" href="https://book.earthen.io/fr/epigraph.php" hreflang="fr" />
<link rel="alternate" href="https://book.earthen.io/es/epigraph.php" hreflang="es" />
<link rel="alternate" href="https://book.earthen.io/id/epigraph.php" hreflang="id" />-->

<!--META TAGS
Must be updated for each page-->

<title>Epigraph | Tratatus Ayyew - Earthbook</title>
<meta name="keywords" content="epigraph, introduction, stories, dapay, Earth ethics, earthen ethics, earth, ethics, tractatus ayyew, igorot, indigenous philosophy, philosophy, Earth, green ethics, environmental ethics, deep ecology, ecological, ethics"> 
<meta name="description" content="Another world is being born right in front of our eyes:  a whole new spirit in the way we think, hope and fear...">


<meta name="twitter:label1" content="Est. reading time" />
<meta name="twitter:data1" content="3 minutes" /> 
	
<!-- Facebook Open Graph Tags for social sharing-->
<meta property="og:url"           content="https://tractatus.earthen.io/en/epigraph.php">
<meta property="og:title"         content="Epigraph | Tratatus Ayyew - Earthbook.">
<meta property="og:description"   content="Another world is being born right in front of our eyes:  a whole new spirit in the way we think, hope and fear..."/>



<style>
  

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
      <div id="ct-chapter-title">Epigraph</div>   
      <div id="ct-book-title">Tractatus Ayyew</div>
      <div id="ct-chap-location">Introduction</div>
      <div id="ct-word-count"><i>67 words</i></div>
    </div>
</div>


<!--CONTENTS MENU-->
<content-curtain></content-curtain>

<!--SETTINGS-MENU-->
<settings-curtain></settings-curtain>

<!--BOOK PLATE-->
<bookplate-curtain></bookplate-curtain>

<!--ABOUT EARTHBOOK-->
<earthbook-curtain></earthbook-curtain>

<!--SHARE-MENU-->
<share-curtain></share-curtain>

<!--BUY-CURTAIN-->
<buy-curtain></buy-curtain>

<!--ECO-CURTAIN-->
 
<?php require_once ("includes/eco-curtain.php");?>
 



<!-- Page Title Section-->


<div id="ct-chapt-graphic" class="background-000">
    <div class="ct-chapter-quote">
      “Another world is being born right in front of our eyes:  a whole new spirit in the way we think, hope and fear.  The ecological anguish that gives its color to this new age announces nothing less for our civilization than all-encompassing change.  First History passed, now Nature is next.  This is the moment to take green seriously.”
    </div>
    <div class="ct-quote-source">
     ― Régis Debray, <i>The Green Age: A Change of Civilizations</i><a href="#footnotes">²</a>
    </div>
  </div>

<div id="up-arrow"></div>

<div id="ct-main">

   <div class="footnote-section">

    <div id="line" style="border-style: solid; border-width: 1px; margin-bottom: 30px; width:70%; text-align:left;"></div>

    <p id="footnotes" style="font-variant-caps: all-petite-caps; color:grey">Chapter Footnotes</p>
  
    <a href="#2-up" class="footnote">   
      <div class="footnote-number">2.</div>
      <div class="footnote-text">Régis Debray, Le siècle vert. Un changement de civilisation (Editions Gallimard, 2020)</div>
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

<footer-chapter></footer-chapter>



</body>
</html>

