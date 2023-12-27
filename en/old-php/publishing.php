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
$page_number = "108";
$page_title = "The Publishing | Tractatus Ayyew - An Earthbook";?>

<head>

<?php require_once ("../header.php");?>


<!--META TAGS
Must be updated for each page-->

<meta property="article:modified_time" content="2023-02-28T09:10:13+00:00">
<meta name="keywords" content="writing, publishing, software, accounting, fonts, typefaces, store, purchase, brikcoins"> 
<meta name="description" content="The open hardware and software used in the writing and publishing of the Earthbook.">
<meta property="og:description"   content="The open hardware and software used in the writing and publishing of the Earthbook."/>


<style>
  

@media screen and (max-width: 699px) {
    .ct-chapter-quote {
      width: 87%;
      font-size: 1.4em;
    }
    .ct-quote-source {
      width: 80%;
      font-size: 0.8em;
    }
  }

  @media screen and (min-width: 700px) and (max-width: 1324px) {
    .ct-chapter-quote {
      width: 70%;
      font-size: 1.8em;
    }
    .ct-quote-source {
      width: 70%;
      font-size: 1em;
    }
  }
    
  @media screen and (min-width: 1325px) {
    .ct-chapter-quote {
    width: 50%;
    font-size: 2em;
    text-shadow: 0px 0px 12px var(--slider);
    }
    .ct-quote-source {
      width: 50%;
      font-size: 1em;
    }
  }

  #ct-chapter-title {
    font-size: 10vmin;
      letter-spacing: 2px;
    }


  .bullet {
    width:22px;
    height:22px;
    display: inline-block;
    padding-right: 6px;
    margin-bottom: -3px;
  }

</style>

</head>

<!--MAIN HTML Begins-->

<BODY class="accessibility-plugin-ac" style="max-width:100%; overflow-x:hidden;">
<!--TOUR-CURTAIN-->
<tour-curtain></tour-curtain>
<subscription-curtain></subscription-curtain>


  <div id="underlayer">

    <div id="top"></div>
  <!--HEADER NAVBAR-->
  <header-component></header-component>

  <div id="ct-chapter-top">
  <button type=button id="ct-tc-menu" onclick="openContents()" style="background-color:var(--header-footer);"  aria-label="Open Table of Contents"></button>
  <div class="ct-holder" style="cursor:pointer;" onclick="openContents()">
        <div id="ct-chapter-title">The Publishing</div>   
        <div id="ct-book-title">Tractatus Ayyew</div>
       <div id="ct-chap-location">An Earthen Ethics</div>
        <div id="ct-word-count"><i>Appendix</i></div>
      </div>
  </div>

  <?php require_once ("includes/eco-curtain.php");?>


<!-- Page Title Section-->

  <div id="ct-chapt-graphic" class="background-000">
  <img src="../icons/publishing.svg" style="width:35%; height:35%; margin:auto;  text-align:center">

  </div>


<div id="up-arrow"></div>
<div id="ct-main">




  


<!-- MAIN TEXT CONTENT of the Page
  For footnotes, use these numbers:  ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ⁶⁰  “ ” ³¹⁰ ²⁶ ⁴⁷ ⁵⁴
-->
<div class="lead-page-paragraph" id="p0">
  
  THE TRACTATUS AYYEW was written and published using 100% open source hardware and software developed by not-for-profit enterprises. Written using <a href="https://www.libreoffice.org/" target="_blank">Libre Office</a>, using a <a href="https://puri.sm/" target="_blank">Purism Librem 13 laptop</a> running <a href="https://ubuntu.org/" target="_blank">Ubuntu</a> and a <a href="https://frame.work/" target="_blank">Framework laptop</a> running <a href="https://linuxmint.com/" target="_blank">Linux Mint</a>.  The Earthbook's cloud files for writing and all final published files are hosted on an Ubuntu server running <a href="https://nextcloud.com" target="_blank">NextCloud</a>.  
  
  </div>
  
  <div class="page-paragraph">
  
    <p id="p1">The book is for sale on the <a href="https://gobrik.com/go.php#regen" target="_blank">GoBrik store</a> where it’s sale in Brikcoins directly corresponds to the sequestration of plastic out of the biosphere.<p>
  
     <p id="p2">The book is type set in Cooper LT Light and Regular by Oswald Cooper and Bitstream as well as Mulish Light & Regular by Vernon Adams, Cyreal, Jacques Le Bailly.
    </p>
  
    <p id="p3">The enterprise of publishing the Tracatus Ayyew is <a href="for-earth.php">for-Earth</a>.  This means we disclose our <a href="accounting.php" target="_blank">Ecological accounting</a> in annual Regenerative Reports.</p>
  
    
      </div><!--closes page text content-->

          
  </div><!--Closes main content block-->

  <!--Footer Next Chapter Section: Requires customization-->
  <div id="footer-chapter" style="margin-bottom: 0px;">

    <div class="footer-size">
    
      <div class="footer-left">

        <div id="footer-icon-left" style="cursor:pointer;" onclick="openFooter2()"></div>
    
     
        <div class="next-section">
            <div class="next-sec">Next chapter:</div>
            <div class="sec-name"><i>The Authors</i></div>
        </div>

      </div>
    

      <div class="footer-right">
    
        <a href="authors.php"><div class="next-button">Next ➔</div></a>

      </div>
    </div>
  </div>

  <?php require_once ("includes/chap-footer.php");?>

</div>


</body>
</html>

