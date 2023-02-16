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
if (strcmp($name, "index.php") == 0)
$name = "";
$page_number = "1";
$page_title = "Preamble | Tractatus Ayyew - An Earthbook";?>

<head>

<?php require_once ("../header.php");?>

<!--END OF GENERIC CONTENT-->


<!--META TAGS
Must be updated for each page-->

<title><?php echo $page_title; ?></title>
<meta name="keywords" content="Preamble, introduction, stories, dapay, Earth ethics, earthen ethics, earth, ethics, tractatus ayyew, igorot, indigenous philosophy, philosophy, Earth, green ethics, environmental ethics, deep ecology, ecological, ethics, preamble, intro, "> 
<meta name="description" content="An introduction to the Earthbook edition of the Tractatus Ayyew">


<meta name="twitter:label1" content="Est. reading time" />
<meta name="twitter:data1" content="3 minutes" /> 
	
<!-- Facebook Open Graph Tags for social sharing-->
<meta property="og:url"           content="https://tractatus.earthen.io/<?php echo $lang; ?>/<?php echo $name; ?>">
<meta property="og:title"         content="<?php echo $page_title; ?>">
<meta property="og:description"   content="Welcome to the Earthbook edition of the Tractatus Ayyew"/>

<style>
  .java-link {cursor:pointer; border-bottom: grey 1px dashed ;"
  }
  
  .java-link:hover {cursor:pointer; border-bottom: grey 1px solid ;}
</style>


</head>


<!--MAIN HTML Begins-->

<BODY class="accessibility-plugin-ac">

  <div id="underlayer">

    <a name="top"></a>

<!--HEADER NAVBAR-->
<header-component></header-component>


<div id="ct-chapter-top">
  <div id="ct-tc-menu" onclick="openContents()" aria-label="Open Contents"></div>
  <div class="ct-holder" style="cursor:pointer;" onclick="openContents()" aria-label="Open the Book's Table of Contents">
    <div id="ct-chapter-title">Preamble</div>   
    <div id="ct-book-title">Tractatus Ayyew</div>
    <div id="ct-chap-location">Introduction</div>
    <div id="ct-word-count"><i>431 words</i></div>
  </div>
</div>

<?php require_once ("includes/eco-curtain.php");?>

<?php require_once ("includes/comments.php");?>

<?php require_once ("includes/search.php");?>
 

<!-- Page Title Section-->

<div id="ct-chapt-graphic" class="background-0">

</div>

<div id="up-arrow"></div>

<div id="ct-main">


<!-- MAIN TEXT CONTENT of the Page
  For footnotes, use these numbers:  ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ 
-->

<div class="lead-page-paragraph">

  IN THE CULTURE of the Igorot people of Northern Luzon in the West Philippine Sea, story telling is central. In their <i>dap'ay</i>— stone plazas at the center of every village— stories are told to introduce people, lessons and ideas. It is an example that we will follow in the pages ahead of the <i>Tractatus Ayyew</i>.</div>


<div class="page-paragraph">
    <p>To start, Banayan and I will share the story of the pollution, short-falls and questions that sparked this book's unlikely beginning. For the reader eager for an overview, we provide a short sentence, a long sentence and a paragraph that each sum up the theory of Earthen ethics that we develop in this book— found in our <a href="summaries.php" title="Jump to the three short summaries of the theory">summaries section</a>.</p>

    <p>Of course, <i>how</i> a story is told (or a theory for that matter) is just as important as the sum of its sentences.  In the dap'ay, both tale and telling were inseparably intertwined.  Stories were told after a dance or a feast with the listeners gathered around a fire; rice wine in hand.<p>

    <p>Alas, while our book can't recreate that particular context, we've nonetheless put great care into its presentation and publication.  Consequently, the <i>Tractatus Ayyew</i> is published as an <span class="java-link" onclick="openEarthbook()" aria-label="Open" title="Learn more about what an Earthbook is"><i>Earthbook</i></span>—  an Earth and reader friendly format that embodies the principles of Earthen ethics that we'll be developing in the chapters ahead.</p>

    <p>Like most theories, the <i>Tractatus Ayyew</i> progresses sequentially. However, unlike most books, the Earthbook format enables a modular arrangement of chapters each with its own URL. Consequently, each chapter of the book is written as a standalone essay so that its facet of the theory may be readily referenced and shared. For example, this section of the book can be found at book.earthen.io/<?php echo ($lang); ;?>/preamble</p>
    
    <p>To represent the modular geometry of the <i>Tractatus Ayyew</i>, each chapter begins with a mandalic representation of its place within the whole. The full theory (and each chapter’s integration within it) is represented by the mandala at the top of this page.</p>

    <p>As an Earthbook, both the content and code of the book are made freely available.  Meanwhile, the print and eReader editions of the <i>Tractatus Ayyew</i> are <span class="java-link" onclick="openBuy()" aria-label="Open" title="See book's purchase options and prices">for sale</span> here on the Earthbook site. Sales are independent of middle-men, with 97% of book sales going direct to the authors.</p>

    <p>As a self-contained platform, the Earthbook format enables the authors to track the net-ecological impact of the book's reading and publishing. The book’s for-Earth intention and its ecological accounting are publicly disclosed in the Eartbook's <span class="java-link" onclick="openEco()" aria-label="Open" title="View our impact accounting for the Earthbook's writing and publishing">regenerative reporting.</span></p>

    <p>The full content of the <i>Tractatus Ayyew</i> is under a Creative Commons, Attribution-NoDerivatives 4.0 License.   The Earthbook <a href="https://github.com/russs95/earthbook/blob/main/<?php echo ($lang); ;?>/<?php echo ($name); ;?> " target="_blank" aria-label="Go to the Earthbook Github repository">code</a> (developed first for the <i>Tractatus Ayyew</i>) is made available under a GNU 3.0 license.</p>

    </div>
          
</div><!--closes page text content-->


<!--FOOTNOTES SECTION-->


<div class="footnote-section" style="z-index:8;">

     <!-- <div id="line" style="border-style: dotted; border-color: grey; border-width: 1px; margin-bottom: 20px; width:105%; text-align:left;"></div>

      <div id="footnotes" style="cursor:pointer;display:flex;font-variant-caps: all-petite-caps; color:grey;" onclick="openFootnotes()">
            
        <div id="footnotes-arrow"></div>
        
        <div class="footnotes-title">Chapter Footnotes</div>
      
      </div>
-->
      <div id="footer-reveal-container" style="height:200px;transition:0.4s;" >

        <div id="footnotes-reveal" style="height:200px; overflow-y: clip; transition:0.4s;margin-bottom:0px;transition-delay: 0.4s;">
             </div>

  </div>



    <div id="footnotes-concealer"></div>

    </div><!-- Closes footnote section-->

</div><!--Closes main content block-->

  <!--Footer Next Chapter Section: Requires customization-->
  <div id="footer-chapter" style="margin-bottom: 0px;">

    <div class="footer-size">
    
      <div class="footer-left">

       <!-- <div id="footer-icon-left" style="cursor:pointer;" onclick="openFooter()"></div>-->
    
     
        <div class="next-section">
          <div class="next-sec">Next section:</div>
          <div class="sec-name"><i>Preface</i></div>
        </div>

      </div>
    

      <div class="footer-right">
    
        <a href="preface.php" title="Go to the next chapter" aria-label="Go to the next chapter"><div class="next-button">Next ➔</div></a>

      </div>
    </div>

  <?php require_once ("includes/chapTER-footer.php");?>


</div>


</body>
</html>


<!--

<div id="footer-chapter" style="margin-bottom: 0px;">
  <div class="footer-size">
    <div class="footer-left" >
      <div id="footer-icon-left" style="cursor:pointer;" onclick="openFooter()"; ></div> 
      <div class="next-section">
          <div class="next-sec">Next section:</div>
          <div class="sec-name"><i>Preface</i></div>
      </div>
    </div>
    <div class="footer-right">
      <a href="preface.php" aria-label="Go to the next chapter"><div class="next-button">Next ➔</div></a>
    </div>
  </div>
</div>




<?php require_once ("includes/chap-footer.php");?>-->
          

        

</body>
</html>

