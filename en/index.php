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
$page_number = "0";
$page_title = "Tractatus Ayyew | An Earthen Ethic - Earthbook Edition";
$chap_name = "";
$chap_number = "Book One";?>

<HEAD>

<link rel="canonical" href="https://book.earthen.io/<?php echo ($lang); ;?>/<?php echo ($name); ;?>"> 
<link rel="alternate" href="https://book.earthen.io/en/<?php echo ($name); ;?>" hreflang="en" >
<link rel="alternate" href="http://book.earthen.io/en/<?php echo ($name); ;?>" hreflang="x-default" >
<!--<link rel="alternate" href="https://book.earthen.io/fr/<?php echo ($name); ;?>" hreflang="fr" >
<link rel="alternate" href="https://book.earthen.io/es/<?php echo ($name); ;?>" hreflang="es" >
<link rel="alternate" href="https://book.earthen.io/id/<?php echo ($name); ;?>" hreflang="id" >-->


<meta charset="UTF-8"> 
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta property="article:modified_time" content="2023-5-03T09:14:13+00:00" >

<!--BOOK META TAGS
These tags will be consistent for the whole book-->

<title><?php echo $page_title; ?></title>


<meta property="og:site_name" content="Tractatus Ayyew" >
<meta property="article:publisher" content="Earthen.io" >
<meta name="author" content="Russell Maier & Banayan Angway">
<meta property="og:type" content="book" >
<link rel="apple-touch-icon" sizes="180x180" href="../favicons/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="../favicons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="../favicons/favicon-16x16.png">
<link rel="manifest" href="../favicons/site.webmanifest">

<meta name="twitter:card" content="summary" >
<meta property="og:type"          content="book">
<meta property="og:image"         content="https://book.earthen.io/covers/earth-book-cover-1000px.jpg">
<meta property="og:image:type" content="image/png" >
<meta property="og:image:width" content="1000px" >
<meta property="og:image:height" content="1500px" >

<meta property="og:locale" content="<?php echo ($lang); ;?>" >

<meta property="og:url" content="https://tractatus.earthen.io/<?php echo ($lang); ;?>/<?php echo ($name); ;?>">


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

 <!-- Style Sheets   
All the css needed for this page-->
 
 
 <!--<link  rel="stylesheet" type="text/css" href="../style-sheet.css?v1.3">
<link rel="stylesheet" href="../acessibilidade.css" >
<link rel="stylesheet" type="text/css" href="../stylesheet-chapter.css">-->

<link rel="preload" href="../style-sheet.css?v1.7" as="style" onload="this.rel='stylesheet'">
<link rel="preload" href="../light.css?v1.7" as="style" onload="this.rel='stylesheet'">
<link rel="preload" href="../acessibilidade.css" as="style" onload="this.rel='stylesheet'">
<link rel="preload" as="image" href="../svgs/up-arrow-dark.svg">
<link rel="preload" as="image" href="../svgs/up-arrow-light.svg">

<link rel="stylesheet" href="../light.css?v1.7" media="(prefers-color-scheme: no-preference), (prefers-color-scheme: light)">
 <link rel="stylesheet" href="../dark.css?v1.7" media="(prefers-color-scheme: dark)">
 
 <!-- INCLUDES
 Main Scripts-->   

 <script src="../universal-javascript.js" defer></script>
 <script src="../clip/dist/clipboard.min.js"></script>
 <script src="../accessibility.js" defer></script>
 <script type="module" src="https://unpkg.com/dark-mode-toggle" async></script>
 
 <!-- Arc CDN Script without delay
<script async src="https://arc.io/widget.min.js#Z7EC7Cze"></script>-->



 <!--Page Components
All the page components required to build this page-->

 <!--1--><script src="includes/header-component.js"  async></script>
  <!--2--><script src="includes/settings-curtain.js"  defer></script>
 <!--3--><script src="includes/content-curtain.js"  defer></script>
 <!--4--><script src="includes/share-curtain.js"  defer></script>
 <!--5--><script src="includes/buy-curtain.js"  defer></script>
 <!--6--><script src="includes/bookplate-curtain.js"  defer></script>
 <!--7--><script src="includes/earthbook-curtain.js"  defer></script>
 <!--8a--><script src="includes/footer-component.js" defer></script>
<!--9--><script src="includes/read-curtain.js" defer></script>
<!--10--><script src="includes/tour-curtain.js"  defer></script>
 

<!--META TAGS
Must be updated for each page-->

<meta property="og:locale" content="<?php echo ($lang); ;?>" >
<meta property="og:url" content="https://tractatus.earthen.io/<?php echo ($lang); ;?>">



<meta property="article:modified_time" content="2023-04-11-21T09:14:13+00:00">

<meta name="keywords" content="Earth ethics, earthen ethics, earth, ethics, tractatus ayyew, igorot, indigenous philosophy, philosophy, Earth, green ethics, environmental ethics, deep ecology, ecological, ethics"> 

<meta name="description" content="A Theory of Grey & Green based on Earth's example.">

<meta name="author" content="Earthen.io">
<meta property="og:type" content="book">
<meta property="og:image:type" content="image/png">
<meta name="author" content="Russell Maier & Banayan Angway">
<meta name="twitter:card" content="summary">
<meta name="twitter:label1" content="Est. reading time">
<meta name="twitter:data1" content="2 hours"> 
	
<!-- Facebook Open Graph Tags for social sharing-->
<meta property="og:site_name" content="Tractatus Ayyew">
<meta property="article:publisher" content="Earthen.io" >
<meta property="og:type"          content="book">
<meta property="og:title"         content="Tractatus Ayyew - An Earthen Ethics">
<meta property="og:description"   content="By Banayan Angway & Russell Maier  | Earthbook Edition.">

 <!--SPECIAL INDEX INCLUDES -->

 <link rel="preload" as="image" href="https://book.earthen.io/photos/cover-500px.webp">

 <script src="../index-javascripts.js"></script>
 <script src="includes/footer-chapter.js" defer></script>
<!--9<script src="includes/read-curtain.js" type="text/javascript" defer></script>-->



<!--Preload graphics   media="(max-width: 700px)"-->

<link rel="preload" as="image" href="../svgs/tractatus-mandala-full-grey.svg">
<link rel="preload" as="image" href="../icons/reader.svg">
<link rel="preload" as="image" href="../icons/pdf.svg">
<link rel="preload" as="image" href="../icons/buy.svg">
<link rel="preload" as="image" href="../svgs/tractatus-mandala-full-white.svg">
<link rel="preload" as="image" href="../svgs/my-book-header-logo-night.svg">
<link rel="preload" as="image" href="../svgs/my-book-header-logo-day.svg">


</head>



<BODY class="accessibility-plugin-ac">

<tour-curtain></tour-curtain>

    <div id="underlayer">

    <div id="top"></div>


<!--HEADER NAVBAR-->
<header-component></header-component>

<!--READ CURTAIN-->

<read-curtain></read-curtain>


<!-- PAGE CONTENT-->

<div id="main-page">
<!-- The flexible grid (content) -->
	<div id="row">
        <div id="side">

            <img src="https://book.earthen.io/photos/cover-500px.webp" width="300px" height="415px" alt="Tractatus Ayyew - EarthBook Cover">

            <div class="welcome-to">Welcome to the <span style="cursor:pointer; text-decoration: none !important;  border-bottom: grey 1px dashed ;" onclick="openEarthbook()">Earthbook</span> edition of the <i>Tractatus Ayyew: An Earthen Ethics</i>.</div>

            <div class="button-row">
                <div id="read-btn" class="action-btn"  style="cursor:pointer;" onclick="openRead()"><i style="background-image: url(../icons/reader.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px;"></i> Read</div>
                <div id="buy-btn" class="action-btn" style="cursor:pointer;" onclick="openBuy()"><i style="background-image: url(../icons/buy.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px;"></i> Buy</div>
                <div id="pdf-btn" class="action-btn" style="cursor:pointer;" onclick="openBookplate()"><i style="background-image: url(../icons/about.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 2px;"></i> About</div>
                 
            </div>

            <?php require_once ("../manage.php");?>

        </div>
 
        <?php require_once ("includes/eco-curtain.php");?>

		<div id="main">

            <div class="lead-text">
            As we become more and more aware of the ecological crises triggered by our modern age, we long to 'go green'.  However, what exactly should green mean and what should it require?  Inspired by magnificent creatures, ancient cultures and our planet's pattern the <i>Tractatus Ayyew</i> lays out an ethics anchored in Earth's example.
            </div>

            <div id="line" style="margin-top: 15px"  class="no-mobile"></div>

            <div id="book-box" class="book-box-day">

                <div class="book-box-header">Introduction</div>

                <a href="preamble.php">
                <div class="chapter-top">
                    <div class="chapter-name">Preamble</div>
                    <div class="word-count"><i>454 words</i></div>
                </div>
                </a>

              <a href="preface.php">
                <div class="chapter-middle">  
                    <div class="chapter-name">Preface</div>
                    <div class="word-count"><i>1,140 words</i></div>
                </div>
                </a>

                <a href="epigraph.php">
                <div class="chapter-bottom">
                    <div class="chapter-name">Epigraph</div>
                    <div class="word-count"><i>67 words</i></div>
                </div>
                </a>
        

                <div class="book-box-header">Book One</div>

                <a href="imagine.php">
                <div class="chapter-top">    
                    <div class="chapter-name">Imagine</div>
                    <div class="word-count"><i>1,095 words</i></div>
                </div>
                </a>

                <a href="plastic.php">
                <div class="chapter-middle">  
                    <div class="chapter-name">Plastic 1.0</div>
                    <div class="word-count"><i>623 words</i></div>
                </div>
                </a>

                <a href="stellar.php">
                <div class="chapter-middle">
                    <div class="chapter-name">An Interstellar Story</div>
                    <div class="word-count"><i>1,033 words</i></div>
                </div>
                </a>

                <a href="patterns.php">
                    <div class="chapter-middle">
                        <div class="chapter-name">Patterns of Process</div>
                        <div class="word-count"><i>837 words</i></div>
                </div>
                </a>

                <a href="kincentric.php">
                    <div class="chapter-middle">
                        <div class="chapter-name">Kindred Relations</div>
                        <div class="word-count"><i>1,508 words</i></div>
                </div>
                </a>

                <a href="nature.php">
                    <div class="chapter-middle">
                        <div class="chapter-name">Nature's Fallacy</div>
                        <div class="word-count"><i>973 words</i></div>
                </div>
                </a>

                <a href="earthen.php"><div class="chapter-bottom">
                    <div class="chapter-name">The Earthen Ways</div>
                    <div class="word-count"><i>784 words</i></div>
                </div>
                </a>
            

                <div class="book-box-header">Book Two</div>

            
                <a href="spirals.php">
                <div class="chapter-top">    
                    <div class="chapter-name">1  |  Cycles that Spiral</div>
                    <div class="word-count"><i>1,682 words</i></div>
                </div>
                </a>

                <a href="energy.php">
                <div class="chapter-middle">  
                    <div class="chapter-name">2  |  The Salmon's Spin</div>
                    <div class="word-count"><i>2,294 words</i></div>
                </div>
                </a>

                <a href="unpublished.php">
                <div class="chapter-middle">
                    <div class="chapter-name">3  |  The Manner of the Mollusk</div>
                    <div class="word-count"><i>not yet published</i></div>
                </div>
                </a>

                <a href="unpublished.php">
                    <div class="chapter-middle">
                        <div class="chapter-name">4  |  The Polyp's Pattern</div>
                        <div class="word-count"><i>not yet published</i></div>
                    </div>
                    </a>

                <a href="unpublished.php">
                    <div class="chapter-bottom">
                        <div class="chapter-name">5  |  The Means of the Mycorrhyzal's</div>
                        <div class="word-count"><i>not yet published</i></div>
                </div>
                </a>

            

                <div class="book-box-header">Book Three</div>

                
                <a href="unpublished.php">
                <div class="chapter-top">    
                    <div class="chapter-name">Plastic 2.0</div>
                    <div class="word-count"><i>not yet published</i></div>
                </div>
            </a>
                

                <a href="unpublished.php">
                <div class="chapter-middle">  
                    <div class="chapter-name">Plastic Sequestration</div>
                    <div class="word-count"><i>not yet published</i></div>
                </div>
            </a>
                
                <a href="unpublished.php">
                <div class="chapter-middle">  
                    <div class="chapter-name">Petro-capital Transition</div>
                    <div class="word-count"><i>not yet published</i></div>
                </div>
            </a>
                    
                <a href="unpublished.php">
                <div class="chapter-bottom">
                    <div class="chapter-name">Ad Pax Ayyew</div>
                    <div class="word-count"><i>not yet published</i></div>
                </div>
            </a>
                


                <div class="book-box-header">Appendix</div>

                <a href="summaries.php">
                <div class="chapter-top">
                    <div class="chapter-name">Summaries</div>
                    <div class="word-count"><i>501 words</i></div>
                </div>
                </a>
            
                <a href="dedication.php">
                <div class="chapter-middle">    
                    <div class="chapter-name">Dedication</div>
                    <div class="word-count"><i>26 words</i></div>
                </div>
            </a>

                <a href="accounting.php">
                <div class="chapter-middle">  
                    <div class="chapter-name">Ecological Accounting | Regen Reports</div>
                    <div class="word-count"><i>48 words</i></div>
                </div>
            </a>

                <a href="for-earth.php">
                <div class="chapter-middle">  
                    <div class="chapter-name">For-Earth Enterprise Declation</div>
                    <div class="word-count"><i>56 words</i></div>
                </div>
            </a>
                
                <a href="acknowledgements.php">
                <div class="chapter-middle">  
                    <div class="chapter-name">Acknowledgements, Credits & Gratitude</div>
                    <div class="word-count"><i>682 words</i></div>
                </div>
            </a>
                
                <a href="publishing.php">
                <div class="chapter-middle">  
                    <div class="chapter-name">Publishing</div>
                    <div class="word-count"><i>133 words</i></div>
                </div>
            </a>
                
                <a href="authors.php">
                <div class="chapter-middle">  
                    <div class="chapter-name">Authors & Authorship</div>
                    <div class="word-count"><i>218 words</i></div>
                </div>
            </a>

            <a href="declaration.php">
                <div class="chapter-middle">  
                    <div class="chapter-name">Declaration of Interests & Income</div>
                    <div class="word-count"><i>367 words</i></div>
                </div>
            </a>
                
                <a href="bibliography.php">
                <div class="chapter-middle">  
                    <div class="chapter-name">Select Bibliography</div>
                    <div class="word-count"><i>740 words</i></div>
                </div>
            </a>

                <a href="glossary.php">
                <div class="chapter-bottom">
                    <div class="chapter-name">Glossary</div>
                    <div class="word-count"><i>342 words</i></div>
                </div>
            </a>
    
            </div>
            <br><br><br><br>

            

</div>
            
        </div>

    
</div>


 <!--FOOTER-->
<footer-component></footer-component>


        
</div>
</body>
</html>

