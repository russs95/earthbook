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
<html lang="en">

<head>

<meta charset="UTF-8"> 
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta property="article:modified_time" content="2022-10-31T09:14:13+00:00" />

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

 <!-- INCLUDES
 Main Scripts-->   

 <script src="../content-javascript.js" defer></script>
 <script src="../universal-javascript.js" defer></script>
 <script src="../clip/dist/clipboard.min.js" defer></script>
 <script src="../accessibility.js" defer></script>
 <script type="module" src="https://unpkg.com/dark-mode-toggle" async></script>
 
 <!-- Arc CDN Script without delay
<script async src="https://arc.io/widget.min.js#Z7EC7Cze"></script>-->


 <!-- Style Sheets   
All the css needed for this page-->
 
 
 <!--<link  rel="stylesheet" type="text/css" href="../style-sheet.css?v1.3">
<link rel="stylesheet" href="../acessibilidade.css" />
<link rel="stylesheet" type="text/css" href="../stylesheet-chapter.css">-->
<link rel="preload" href="../light.css?v1.4" as="style" onload="this.rel='stylesheet'">
<link rel="preload" href="../style-sheet.css?v1.4" as="style" onload="this.rel='stylesheet'">
<link rel="preload" href="../acessibilidade.css" as="style" onload="this.rel='stylesheet'">
<link rel="preload" href="../stylesheet-chapter.css" as="style" onload="this.rel='stylesheet'">

<link rel="stylesheet" href="../light.css" media="(prefers-color-scheme: no-preference), (prefers-color-scheme: light)">
 <link rel="stylesheet" href="../dark.css" media="(prefers-color-scheme: dark)">
 

 <!--Page Components
All the page components required to build this page-->

 <!--1--><script src="includes/header-component.js" type="text/javascript" preload></script>
 <!--2--><script src="includes/settings-curtain.js" type="text/javascript" defer></script>
 <!--3--><script src="includes/content-curtain.js" type="text/javascript" defer></script>
 <!--4--><script src="includes/share-curtain.js" type="text/javascript" defer></script>
 <!--5--><script src="includes/buy-curtain.js" type="text/javascript" defer></script>
 <!--6--><script src="includes/bookplate-curtain.js" type="text/javascript" defer></script>
 <!--7--><script src="includes/earthbook-curtain.js" type="text/javascript" defer></script>
 <!--8--><script src="includes/footer-component.js" type="text/javascript" defer></script>
 <!--8b<script src="includes/footer-chapter.js" type="text/javascript" defer></script>-->
  <!--9<script src="includes/eco-curtain.js" type="text/javascript" defer></script>-->


 <!-- Fonts
The requisite typography for the page-->

<link rel="preconnect" href="../fonts/">
<link rel="preconnect" href="../fonts/" crossorigin> 
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Mulish loads first for first page view-->

<link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;500&display=swap" rel="stylesheet" media="print" onload="this.media='all'"> 

	
<!--Preload graphics-->
<link rel="preload" as="image" href="../photos/cover-500px.webp">




<!--END OF GENERIC CONTENT-->

<!--PAGE LINKS

**** Must be updated for each unique page ****-->

<link rel="canonical" href="https://book.earthen.io/en"> 
<link rel="alternate" href="https://book.earthen.io/en" hreflang="en" />
<link rel="alternate" href="https://book.earthen.io/en" hreflang="x-default" />
<!--<link rel="alternate" href="https://book.earthen.io/fr" hreflang="fr" />
<link rel="alternate" href="https://book.earthen.io/es" hreflang="es" />
<link rel="alternate" href="https://book.earthen.io/id" hreflang="id" />-->

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

/*Dark Toggler Compromise*/

.compro-toggle {
  font-family: 'Mulish' !important;
  font-size: 1.2em;
}

[part="darkLabel"]::before {
  filter: var(--dark-mode-toggle-icon-filter, none);
  background-image: var(--dark-mode-toggle-dark-icon, url("https://googlechromelabs.github.io/dark-mode-toggle/demo/moon.png"));
  height: 30px !important;
  width: 30px!important;
  background-size: contain!important;
  margin-left: 20px!important;
}

[part="lightLabel"]::before {
  background-image: var(--dark-mode-toggle-light-icon, url("https://googlechromelabs.github.io/dark-mode-toggle/demo/sun.png"));
  height: 40px;
  width: 40px;
  background-size: contain;}

  form:nth-child(2) > fieldset:nth-child(1) > label:nth-child(5) {padding-left: 20px;
  
  }


 [part="darkLabel"]  {
  margin-left: 20px !important;
  
 }


 label  {
  margin: 20px !important;}
 

</style>



</head>



<BODY class="accessibility-plugin-ac">
    <div id="underlayer">

    <a name="top"></a>


<!--HEADER NAVBAR-->
<header-component></header-component>
    

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

<!--ECO-CURTAIN
<eco-curtain></eco-curtain>-->
 

<div id="eco-curtain2" class="eco-overlay">
  <div class="overlay-content-eco">         
        
    <div class="eco-header">The Earthbook format is hand-coded from the ground up to be Green.</div>

    <div class="eco-text">
    In an Earthbook's writing & publishing, its carbon, plastic and biodiversity impacts are tracked, accounted and disclosed.  See this Earthbook's full <a href="https://files.earthen.io/s/ioobYWRRKGEpPp4" target="_blank" aria-label="The Regen Report for our book">Regenerativity Report.</a>
    </div>

    <a href="https://files.earthen.io/s/ioobYWRRKGEpPp4" target="_blank" aria-label="The Regen Report for our book">
    <div><img src="../banners/forearth-dark-350px.png" width="300px" alt="Banner declaring our For-Earth intention"></div></a>

     <div id="wcb" class="carbonbadge wcb-d"></div>
    <script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js" preload></script>

    <div class="eco-medium">The Medium is the Message.</div>
    <span style="cursor:pointer" onclick="closeEco()" aria-label="Close">
        <div id="bottom-close-button">
            <img src="../svgs/bottom-x.svg" alt="Close button">
        </div>
    </span>
  </div>
</div>

    


<!-- PAGE CONTENT-->

<div id="main-page">
<!-- The flexible grid (content) -->
	<div id="row">
        <div id="side">

            <img src="../photos/cover-500px.webp" alt="Tractatus Ayyew - EarthBook Cover">

            <div class="welcome-to">Welcome to the <b><span style="cursor:pointer; text-decoration:underline;" onclick="openEarthbook()">EarthBook</span></b> edition of the Tractatus Ayyew.</div>

            <div class="button-row">
                <div id="read-btn" class="action-btn"><a href="preamble.html"><i style="background-image: url(../icons/reader.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px;"></i> Read</a></div>
                <div id="buy-btn" class="action-btn" style="cursor:pointer;" onclick="openBuy()"><i style="background-image: url(../icons/buy.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px;"></i> Buy</a></div>
                <div id="pdf-btn" class="action-btn"><a href="https://files.earthen.io/s/ZjS9TgWk5Tr7b4q" target="_blank"><i style="background-image: url(../icons/pdf.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 2px;"></i> PDF</a></div>
                
            </div>
          
            <!--<div id="knack-dist_2"><h5 style="padding-bottom: 20px;margin-top: 30px;margin-bottom: 80px;font-size: 1em;">Get our updates...</h5></div>
            <br><br>-->

            <?php require_once ("../manage.php");?>
          
         
        </div>

		<div id="main">


            <div class="lead-text">
            As we become more and more aware of the ecological crises triggered by our modern age, we long to green our ways.  However, what does 'green' actually mean and what exactly should it require?  Inspired by magnificent creatures, great cultures and our planet's pattern this book lays out an ethics anchored in Earth's example.
            </div>

            <div id="line" style="margin-top: 15px"  class="no-mobile"></div>

            <div id="book-box" class="book-box-day">

                <div class="book-box-header">Quick Start</div>

                <a href="preamble.html">
                <div class="chapter-top">
                    <div class="earth-buller"></div>    
                    <div class="chapter-name">Preamble</div>
                    <div class="word-count"><i>200 words</i></div>
                </div>
                </a>

              <a href="preface.html">
                <div class="chapter-middle">  
                    <div class="chapter-name">Preface</div>
                    <div class="word-count"><i>557 words</i></div>
                </div>
                </a>

                <!--<a href="quickstart.html#2">
                <div class="chapter-middle">
                    <div class="chapter-name">A long sentence</div>
                    <div class="word-count"><i>35 words</i></div>
                </div>
                </a>-->

                <a href="quickstart.html">
                <div class="chapter-bottom">
                    <div class="chapter-name">Two Sentences & a paragraph</div>
                    <div class="word-count"><i>540 words</i></div>
                </div>
                </a>
        

                <div class="book-box-header">Book One</div>

                <a href="imagine.html">
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
                        <div class="chapter-name">5  |  The Mycorrhyzal's Awareness</div>
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
            
                <a href="not-published.php">
                <div class="chapter-top">    
                    <div class="chapter-name">Dedication</div>
                    <div class="word-count"><i>26 words</i></div>
                </div>
            </a>

                <a href="not-published.php">
                <div class="chapter-middle">  
                    <div class="chapter-name">Ecological Accounting</div>
                    <div class="word-count"><i>48 words</i></div>
                </div>
            </a>

                <a href="not-published.php">
                <div class="chapter-middle">  
                    <div class="chapter-name">For-Earth Enterprise</div>
                    <div class="word-count"><i>20 words</i></div>
                </div>
            </a>
                
                <a href="not-published.php">
                <div class="chapter-middle">  
                    <div class="chapter-name">Credits & Acknowledgements</div>
                    <div class="word-count"><i>218 words</i></div>
                </div>
            </a>
                
                <a href="not-published.php">
                <div class="chapter-middle">  
                    <div class="chapter-name">Writing & Publishing</div>
                    <div class="word-count"><i>80 words</i></div>
                </div>
            </a>
                
                <a href="not-published.php">
                <div class="chapter-middle">  
                    <div class="chapter-name">Banayan & Russell</div>
                    <div class="word-count"><i>153 words</i></div>
                </div>
            </a>
                
                <a href="not-published.php">
                <div class="chapter-middle">  
                    <div class="chapter-name">Select Bibliography</div>
                    <div class="word-count"><i>728 words</i></div>
                </div>
            </a>

                <a href="not-published.php">
                <div class="chapter-bottom">
                    <div class="chapter-name">Glossary</div>
                    <div class="word-count"><i>342 words</i></div>
                </div>
            </a>
    
            </div>

            

</div>
            
        </div>

    
</div>


 <!--FOOTER-->
<footer-component></footer-component>


        
</div>
</body>
</html>

