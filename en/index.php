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
$page_title = "Tractatus Ayyew | An Earthen Ethic - Earthbook Edition";?>

<head>


<?php require_once ("../header2.php");?>


<!--META TAGS
Must be updated for each page-->

<meta property="article:modified_time" content="2023-02-21T09:14:13+00:00">

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
<meta property="og:site_name" content="Tractatus Ayyew" />
<meta property="article:publisher" content="Earthen.io" />
<meta property="og:type"          content="book">
<meta property="og:title"         content="Tractatus Ayyew - An Earthen Ethics">
<meta property="og:description"   content="By Banayan Angway & Russell Maier  | Earthbook Edition."/>

 <!--SPECIAL INDEX INCLUDES -->

 <link rel="preload" as="image" href="https://book.earthen.io/photos/cover-500px.webp">

 <script src="../index-javascripts.js"></script>
 <script src="includes/footer-chapter.js" defer></script>-->
<!--9--><script src="includes/read-curtain.js" type="text/javascript" defer></script>



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
    <div id="underlayer">

    <a name="top"></a>


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
                <div id="read-btn" class="action-btn"  style="cursor:pointer;" onclick="openRead()"><i style="background-image: url(../icons/reader.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px;"></i> Read</a></div>
                <div id="buy-btn" class="action-btn" style="cursor:pointer;" onclick="openBuy()"><i style="background-image: url(../icons/buy.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px;"></i> Buy</a></div>
                <div id="pdf-btn" class="action-btn" style="cursor:pointer;" onclick="openBookplate()"><i style="background-image: url(../icons/about.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 2px;"></i> About</a></div>
                 
            </div>

            <?php require_once ("../manage.php");?>

        </div>
 
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

