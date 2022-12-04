<!--Welcome to the EarthBook Source code!  Composed of nothing but CSS, javascript and html the EarthBook format can be forked and used as the frame for your own book.  Just fill in your content.

Concept and first version by Russell Maier, October 24th, 2022.  First used for the book Tractus Ayyew - An Earthen Ethics (all forked generic versions of the Earthbook are requested to leave this book in as the place holder text)

Design by Russell Maier

CSS Version 0.7.3
Original Author:  Russell Maier
License: GNU General Public License v2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html
All files, unless otherwise stated, are released under the GNU General Public
License version 2.0 (https://www.gnu.org/licenses/gpl-2.0.html)
See full project repository at: https://github.com/russs95/earthbook
*/
-->


<!DOCTYPE html>
<html lang="en" manifest="../offline.appcache">

<head>

<meta charset="UTF-8"> 
<meta name="viewport" content="width=device-width, initial-scale=1">


 <!--Page Icons-->
 <link rel="apple-touch-icon" sizes="180x180" href="../favicons/apple-touch-icon.png">
 <link rel="icon" type="image/png" sizes="32x32" href="../favicons/favicon-32x32.png">
 <link rel="icon" type="image/png" sizes="16x16" href="../favicons/favicon-16x16.png">
 <link rel="manifest" href="../favicons/site.webmanifest">


<!--META TAGS-->

<title>Tractatus Ayyew | An Earthen Ethic - Earthbook</title>

<meta name="keywords" content="Earth ethics, earthen ethics, earth, ethics, tractatus ayyew, igorot, indigenous philosophy, philosophy, Earth, green ethics, environmental ethics, deep ecology, ecological, ethics"> 

<meta name="description" content="A Theory of Grey & Green based on Earth's example.">

<meta name="author" content="Earthen.io">
<meta property="og:type" content="book" />
<meta property="article:modified_time" content="2022-10-24T09:14:13+00:00" />
<meta property="og:image:type" content="image/png" />
<meta name="author" content="Tractatus Ayyew | An Earthen Ethic - Earthbook" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:label1" content="Est. reading time" />
<meta name="twitter:data1" content="2 hours" /> 
	
<!-- Facebook Open Graph Tags for social sharing-->
<meta property="og:site_name" content="Tractatus Ayyew" />
<meta property="article:publisher" content="Earthen.io" />
<meta property="og:url"           content="https://book.earthen.io/en/">
<meta property="og:type"          content="website">
<meta property="og:title"         content="Tractatus Ayyew - An Earthen Ethics">
<meta property="og:description"   content="By Banayan Angway & Russell Maier  | Earthbook Edition."/>
<meta property="og:image"         content="https://book.earthen.io/photos/earth-book-cover-1000px.jpg"/>
<meta property="og:image:width" content="1000" />
<meta property="og:image:height" content="1500" />
<meta property="og:image:alt"     content="The Earth and its geometric pattern floating in space"/>
  <meta property="og:locale" content="en_GB" />




  <!-- Style Sheets -->
<link rel="preload" href="../light.css?v1.4" as="style" onload="this.rel='stylesheet'">
<link rel="preload" href="../style-sheet.css?v1.4" as="style" onload="this.rel='stylesheet'">
<link rel="preload" href="../acessibilidade.css" as="style" onload="this.rel='stylesheet'">

<link rel="stylesheet" href="../light.css" media="(prefers-color-scheme: no-preference), (prefers-color-scheme: light)">
 <link rel="stylesheet" href="../dark.css" media="(prefers-color-scheme: dark)">
 
 <link rel="preload" as="image" href="https://book.earthen.io/photos/cover-500px.webp">
  <link rel="preload" as="image" href="https://book.earthen.io/svgs/left-menu.svg">
<link rel="preload" as="image" href="https://book.earthen.io/svgs/right-menu.svg">

 <!-- Fonts
The requisite typography for the page-->

<link rel="preconnect" href="../fonts/">
<link rel="preconnect" href="../fonts/" crossorigin> 
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Mulish loads first for first page view-->

<link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;500&display=swap" rel="stylesheet" media="print" onload="this.media='all'"> 

 <!--INCLUDES -->
 
<script src="../index-javascripts.js"></script>
<script src="../universal-javascript.js"></script>
<script type="module" src="https://unpkg.com/dark-mode-toggle" defer></script>
<script src="../clip/dist/clipboard.min.js" defer></script>
<script src="../accessibility.js" defer></script>


<!--1--><script src="includes/header-component.js" type="text/javascript"></script>



<!--Preload graphics   media="(max-width: 700px)"-->

<link rel="preload" as="image" href="../svgs/tractatus-mandala-full-grey.svg">

<link rel="preload" as="image" href="../icons/reader.svg">
<link rel="preload" as="image" href="../icons/pdf.svg">
<link rel="preload" as="image" href="../icons/buy.svg">
<link rel="preload" as="image" href="../svgs/tractatus-mandala-full-white.svg">
<link rel="preload" as="image" href="../svgs/my-book-header-logo-night.svg">
<link rel="preload" as="image" href="../svgs/my-book-header-logo-day.svg">


<!--END OF GENERIC CONTENT-->

<!--PAGE LINKS

**** Must be updated for each unique page ****-->

<link rel="canonical" href="https://book.earthen.io/en/"> 
<link rel="alternate" href="https://book.earthen.io/en/" hreflang="en" />
<link rel="alternate" href="https://book.earthen.io/en/" hreflang="x-default" />
<!--<link rel="alternate" href="https://book.earthen.io/fr/" hreflang="fr" />
<link rel="alternate" href="https://book.earthen.io/es/" hreflang="es" />
<link rel="alternate" href="https://book.earthen.io/id/" hreflang="id" />-->

<!--META TAGS
Must be updated for each page-->


<title>Tractatus Ayyew | An Earthen Ethic - Earthbook</title>

<meta name="keywords" content="Earth ethics, earthen ethics, earth, ethics, tractatus ayyew, igorot, indigenous philosophy, philosophy, Earth, green ethics, environmental ethics, deep ecology, ecological, ethics"> 

<meta name="description" content="A Theory of Grey & Green based on Earth's example.">


<meta name="twitter:label1" content="Est. reading time" />
<meta name="twitter:data1" content="3 minutes" /> 
	
<!-- Facebook Open Graph Tags for social sharing-->
<meta property="og:url"           content="https://tractatus.earthen.io/en">
<meta property="og:title"         content="Tractatus Ayyew | An Earthen Ethic - Earthbook">
<meta property="og:description"   content="Welcome to the Earthbook edition of the Tractatus Ayyew"/>


<style>

</style>

</head>



<BODY class="accessibility-plugin-ac">
    <div id="underlayer">

    <a name="top"></a>


<!--HEADER NAVBAR-->
<header-component></header-component>

<!-- PAGE CONTENT-->

<div id="main-page">
<!-- The flexible grid (content) -->
	<div id="row">
        <div id="side">

            <img src="https://book.earthen.io/photos/cover-500px.webp" width="300px" height="415px" alt="Tractatus Ayyew - EarthBook Cover">

            <div class="welcome-to">Welcome to the <b><span style="cursor:pointer; text-decoration:underline;" onclick="openEarthbook()">EarthBook</span></b> edition of the Tractatus Ayyew.</div>

            <div class="button-row">
                <div id="read-btn" class="action-btn"  style="cursor:pointer;" onclick="openRead()"><i style="background-image: url(../icons/reader.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px;"></i> Read</a></div>
                <div id="buy-btn" class="action-btn" style="cursor:pointer;" onclick="openBuy()"><i style="background-image: url(../icons/buy.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px;"></i> Buy</a></div>
                <div id="pdf-btn" class="action-btn" style="cursor:pointer;" onclick="openEarthbook()"><i style="background-image: url(../icons/about.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 2px;"></i> About</a></div>
                
            </div>

            <?php require_once ("../manage.php");?>
        </div>


 <!--2--><script src="includes/settings-curtain.js" type="text/javascript" defer></script>
 <!--3--><script src="includes/content-curtain.js" type="text/javascript" defer></script>
 <!--4--><script src="includes/share-curtain.js" type="text/javascript" defer></script>
 <!--5--><script src="includes/buy-curtain.js" type="text/javascript" defer></script>
 <!--6--><script src="includes/bookplate-curtain.js" type="text/javascript" defer></script>
 <!--7--><script src="includes/earthbook-curtain.js" type="text/javascript" defer></script>
 <!--8a--><script src="includes/footer-component.js" type="text/javascript" defer></script>
<!--9--><script src="includes/read-curtain.js" type="text/javascript" defer></script>

 
<?php require_once ("includes/eco-curtain.php");?>

		<div id="main">


            <div class="lead-text">
            As we become more and more aware of the ecological crises triggered by our modern age, we long to green our ways.  However, what does 'green' actually mean and what exactly should it require?  Inspired by magnificent creatures, great cultures and our planet's pattern this book lays out an ethics anchored in Earth's example.
            </div>

            <div id="line" style="margin-top: 15px"  class="no-mobile"></div>

            <div id="book-box" class="book-box-day">

                <div class="book-box-header">Introduction</div>

                <a href="preamble.php">
                <div class="chapter-top">
                    <div class="earth-buller"></div>    
                    <div class="chapter-name">Preamble</div>
                    <div class="word-count"><i>431 words</i></div>
                </div>
                </a>

              <a href="preface.php">
                <div class="chapter-middle">  
                    <div class="chapter-name">Preface</div>
                    <div class="word-count"><i>557 words</i></div>
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

                <a href="plastic1.html">
                <div class="chapter-middle">  
                    <div class="chapter-name">Plastic 1.0</div>
                    <div class="word-count"><i>623 words</i></div>
                </div>
                </a>

                <a href="stellar.html">
                <div class="chapter-middle">
                    <div class="chapter-name">A Stellar Story</div>
                    <div class="word-count"><i>1,021 words</i></div>
                </div>
                </a>

                <a href="patterns.html">
                    <div class="chapter-middle">
                        <div class="chapter-name">Patterns of Process</div>
                        <div class="word-count"><i>837 words</i></div>
                </div>
                </a>

                <a href="kincentric.html">
                    <div class="chapter-middle">
                        <div class="chapter-name">Kindred Relations</div>
                        <div class="word-count"><i>1,508 words</i></div>
                </div>
                </a>

                <a href="nature.html">
                    <div class="chapter-middle">
                        <div class="chapter-name">Nature's Fallacy</div>
                        <div class="word-count"><i>973 words</i></div>
                </div>
                </a>

                <a href="earthen.html"><div class="chapter-bottom">
                    <div class="chapter-name">The Earthen Ways</div>
                    <div class="word-count"><i>784 words</i></div>
                </div>
                </a>
            

                <div class="book-box-header">Book Two</div>

            
                <a href="cycles.html">
                <div class="chapter-top">    
                    <div class="chapter-name">1  |  Cycles that Spiral</div>
                    <div class="word-count"><i>1,682 words</i></div>
                </div>
                </a>

                <a href="energy.html">
                <div class="chapter-middle">  
                    <div class="chapter-name">2  |  The Salmon's Spiral</div>
                    <div class="word-count"><i>2,294 words</i></div>
                </div>
                </a>

                <a href="not-published.php">
                <div class="chapter-middle">
                    <div class="chapter-name">3  |  The Ammonite's Example</div>
                    <div class="word-count"><i>not yet published</i></div>
                </div>
                </a>

                <a href="not-published.php">
                    <div class="chapter-middle">
                        <div class="chapter-name">4  |  The Polyp's Pattern</div>
                        <div class="word-count"><i>not yet published</i></div>
                    </div>
                    </a>

                <a href="not-published.php">
                    <div class="chapter-bottom">
                        <div class="chapter-name">5  |  The Means of the Mycorrhyzal's</div>
                        <div class="word-count"><i>not yet published</i></div>
                </div>
                </a>

            

                <div class="book-box-header">Book Three</div>

                
                <a href="not-published.php">
                <div class="chapter-top">    
                    <div class="chapter-name">Plastic 2.0</div>
                    <div class="word-count"><i>not yet published</i></div>
                </div>
            </a>
                

                <a href="not-published.php">
                <div class="chapter-middle">  
                    <div class="chapter-name">Plastic Sequestration</div>
                    <div class="word-count"><i>not yet published</i></div>
                </div>
            </a>
                
                <a href="not-published.php">
                <div class="chapter-middle">  
                    <div class="chapter-name">Petro-capital Transition</div>
                    <div class="word-count"><i>not yet published</i></div>
                </div>
                    
                <a href="not-published.php">
                <div class="chapter-bottom">
                    <div class="chapter-name">Ad Pax Ayyew</div>
                    <div class="word-count"><i>not yet published</i></div>
                </div>
            </a>
                


                <div class="book-box-header">Appendix</div>

                <a href="summaries.php">
                <div class="chapter-bottom">
                    <div class="chapter-name">Summaries</div>
                    <div class="word-count"><i>501 words</i></div>
                </div>
            
                <a href="dedication.html">
                <div class="chapter-top">    
                    <div class="chapter-name">Dedication</div>
                    <div class="word-count"><i>26 words</i></div>
                </div>
            </a>

                <a href="accounting.html">
                <div class="chapter-middle">  
                    <div class="chapter-name">Ecological Accounting</div>
                    <div class="word-count"><i>48 words</i></div>
                </div>
            </a>

                <a href="for-earth">
                <div class="chapter-middle">  
                    <div class="chapter-name">For-Earth Enterprise</div>
                    <div class="word-count"><i>20 words</i></div>
                </div>
            </a>
                
                <a href="acknowledgements.html">
                <div class="chapter-middle">  
                    <div class="chapter-name">Acknowledgements</div>
                    <div class="word-count"><i>218 words</i></div>
                </div>
            </a>
                
                <a href="writing.html">
                <div class="chapter-middle">  
                    <div class="chapter-name">Writing & Publishing</div>
                    <div class="word-count"><i>80 words</i></div>
                </div>
            </a>
                
                <a href="authors.html">
                <div class="chapter-middle">  
                    <div class="chapter-name">Banayan & Russell</div>
                    <div class="word-count"><i>153 words</i></div>
                </div>
            </a>
                
                <a href="bibliography.html">
                <div class="chapter-middle">  
                    <div class="chapter-name">Select Bibliography</div>
                    <div class="word-count"><i>740 words</i></div>
                </div>
            </a>

                <a href="glossary.html">
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

