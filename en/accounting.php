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
$page_number = "105";
$page_title = "Ecological Accounting | Tractatus Ayyew - An Earthbook";?>

<head>

<?php require_once ("../header.php");?>


<!--META TAGS
Must be updated for each page-->

<meta property="article:modified_time" content="2023-02-28T09:10:13+00:00">
<meta name="keywords" content="regen report, regen, regenerativity, report, ecological, accounting, carbon, co2, biodiversity, plastic, impact, disclosure, ecological accounting, eco accounting"> 
<meta name="description" content="The carbon, plastic and biodiversity ecological accounting of this Earthbook's writing and publishing">
<meta property="og:description"   content="The carbon, plastic and biodiversity ecological accounting of the book's writing and publishing."/>


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
  letter-spacing: 0px;
    }


    .document-holder {
      display:flex;
      background: #80808026;
      border-radius: 12px;
      flex-direction:row;
      border: 1px dashed #80808061;
      margin-top: 20px;
      margin-bottom: 20px;
    }

    .doc-text-small {
      font-family:'CooperLt';
      text-align:left;
      padding:0px 10px 10px 10px;
      color: var(--drop-cap);
      line-height: 1.3;
    }

    .doc-text-main {
      font-family:'Mulish', sans-serif;
      font-size:1.3em;
      padding:10px;
      text-align:left;
      color: var(--text-color);
    }

    @media screen and (min-width: 701px) {
      .doc-text-small {
        font-size:1em;
      }
      .doc-text-main {
        font-size:1.3em;
      }
    }

    @media screen and (max-width: 700px) {
      .doc-text-small {
        font-size:0.7em;
      }
      .doc-text-main {
        font-size:1em;
      }
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
        <div id="ct-chapter-title">Ecological Accounting</div>   
        <div id="ct-book-title">Tractatus Ayyew</div>
       <div id="ct-chap-location">Annual Regen Reports</div>
        <div id="ct-word-count"><i>Appendix</i></div>
      </div>
  </div>

<!-- Page Title Section-->

  <div id="ct-chapt-graphic" class="background-000">
  <img src="../icons/eco.svg" style="width:35%; height:35%; margin:auto;  text-align:center">
  </div>

  <?php require_once ("includes/eco-curtain.php");?>
  <div id="up-arrow"></div>
  <div id="ct-main">



<!-- MAIN TEXT CONTENT of the Page
  For footnotes, use these numbers:  ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ⁶⁰  “ ” ³¹⁰ ²⁶ ⁴⁷ ⁵⁴
-->


<div class="lead-page-paragraph">

  <p style="margin-top:-50px;">-50
    The ecological impact of the printing, publishing and reading of the <i>Tractatus Ayyew</i> is tracked, accounted and disclosed.  Download our annual Regeneral Reports here:<br><br>
  </p>   
  
  
  
  <div class="document-holder">

      <div class="doc-image" style="width:fit-content; padding:10px">
      <img src="../webp/impact-report-100px.webp">
      </div>
      
      <div class="doc-texts">
        <div class="doc-text-main"><a href="https://files.earthen.io/s/ioobYWRRKGEpPp4" target="_blank" aria-label="The Regen Report for our book" alt="Banner declaring our For-Earth intention">Tracatus Ayyew Writing & Publishing</a></div>
        <div class="doc-text-small"><a href="https://files.earthen.io/s/ioobYWRRKGEpPp4" target="_blank"><b>2021 Regen Report</b> | PDF |  554kb | Issued 12/02/2022</a></div>
      </div>
  </div>

  <div class="document-holder">
      <div class="doc-image" style="width:fit-content; padding:10px">
      <img src="../webp/impact-report-100px.webp">
      </div>

    <div class="doc-texts" style="display:flex;flex-direction:column;justify-content:center;padding-right: 20px;">
        <div class="doc-text-main"><!--<a href="https://files.earthen.io/s/ioobYWRRKGEpPp4" target="_blank" aria-label="The Regen Report for our book" alt="Banner declaring our For-Earth intention">-->Tracatus Ayyew Writing & Publishing</div>
        <div class="doc-text-small"><!--<a href="https://files.earthen.io/s/ioobYWRRKGEpPp4" target="_blank">--><b>2022 Regen Report</b> | PDF | Feb 2023 release pending</b></div>
    </div>

  </div>


  <br><br><br><br>


  
    </div><!--closes page text content-->

          
  </div><!--Closes main content block-->

  <!--Footer Next Chapter Section: Requires customization-->
  <div id="footer-chapter" style="margin-bottom: 0px;">

    <div class="footer-size">
    
      <div class="footer-left">

        <div id="footer-icon-left" style="cursor:pointer;" onclick="openFooter2()"></div>
    
     
        <div class="next-section">
            <div class="next-sec">Next:</div>
            <div class="sec-name"><i>For-Earth Enterprise</i></div>
        </div>

      </div>
    

      <div class="footer-right">
    
        <a href="for-earth.php"><div class="next-button">Next ➔</div></a>

      </div>
    </div>
  </div>

  <?php require_once ("includes/chap-footer.php");?>



</body>
</html>

