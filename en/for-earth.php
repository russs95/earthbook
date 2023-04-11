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
$page_number = "106";
$page_title = "For-Earth | Tractatus Ayyew - An Earthbook";?>

<head>

<?php require_once ("../header.php");?>


<!--META TAGS
Must be updated for each page-->

<meta property="article:modified_time" content="2023-02-28T09:10:13+00:00">
<meta name="keywords" content="for-earth, intention, statement, acknowledgements, thank yous, grattitude, credits "> 
<meta name="description" content="Our not-for profit, for-Earth statement of intention for our enterprise of writing and publishing this EarthBook">
<meta property="og:description"   content="Our not-for profit, for-Earth statement of intention for our enterprise of writing and publishing this EarthBook"/>


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
<div id="underlayer">

  <a id="top"></a>

  <!--HEADER NAVBAR-->
  <header-component></header-component>

  <div id="ct-chapter-top">
  <button type=button id="ct-tc-menu" onclick="openContents()" style="background-color:var(--header-footer);" aria-label="Open Table of Contents"></button>
  <div class="ct-holder" style="cursor:pointer;" onclick="openContents()">
        <div id="ct-chapter-title">For-Earth</div>   
        <div id="ct-book-title">Enterprise Declaration</div>
       <div id="ct-chap-location">Tractatus Ayyew | An Earthen Ethics</div>
        <div id="ct-word-count"><i>Appendix</i></div>
      </div>
  </div>

  <?php require_once ("includes/eco-curtain.php");?>


<!-- Page Title Section-->

  <div id="ct-chapt-graphic" class="background-000">
  <img src="../svgs/icon-for-earth.svg?v=2" style="width:35%; height:35%; margin:auto;  text-align:center">

  </div>


<div id="up-arrow"></div>
<div id="ct-main">

<!-- MAIN TEXT CONTENT of the Page
  For footnotes, use these numbers:  ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ⁶⁰  “ ” ³¹⁰ ²⁶ ⁴⁷ ⁵⁴
-->



<div class="lead-page-paragraph"> 
The author's and Earthen.io hereby declare the for-Earth, not-for-profit intention of the enterprise of writing and publishng the <i>Tracatatus Ayyew - An Earthen Ethics</i>.
</div>

<div class="page-paragraph">

  <p>
    In so doing we <a href="accounting.php">track and disclose</a> all of the ecological impacts of our enterprise and commit to acheiving a green net-impact.
  </p>

  </div>

  <div style="text-align:center;">

  <a href="https://files.earthen.io/s/ioobYWRRKGEpPp4" target="_blank" aria-label="The Regen Report for our book">
    <div><img src="../banners/forearth-dark-350px.png" width="300px" alt="Banner declaring our For-Earth intention"></div></a>
    <br>

  </div>
  
  <br><br>

  

    <div id="line" style="border-style: dashed; border-width: 1px; margin-bottom: 30px; margin-top: 55px; width:100%; text-align:left;"></div>

    <div class="page-paragraph" style="font-size: smaller; font-family:'Mulish', sans-serif;">
    <p>The concept of a For-Earth enterprise is based on the five principles of Earthen Ethics developed within the <i>Tracatus Ayyew</i>.  Learn more about each concept:</p>
  </div>


    <div class="page-paragraph" style="padding-left:20px;font-size:smaller;">
      <p><span class="bullet"></span>  In <a href="spirals.php" title="Cycles that Spiral">Chapter 8</a> we develop the concept of a net-green enterprise.</i></p>
  
      <p><span class="bullet"></span>  In <a href="energy.php" title="The Salmon's Spin">Chapter 9</a> we develop the concept of a for-Earth enterprise.</i></p>

      <p><span class="bullet"></span>  In <a href="unpublished" title="Not yet published">Chapter 10</a> we develop the subtractive carbon and plastic aspect of net-green enterprise .</i></p>
      
      <p><span class="bullet"></span>  In <a href="unpublished.php" title="The Salmon's Spin">Chapter 11</a> we develop the concept of biodiversity supportive enterprise.</i></p>
      
      <p><span class="bullet"></span>  In <a href="unpublished" title="Not yet ready">Chapter 12</a> we develop the concept of ethical obligation of green enterprise to track and disclose ecological impacts throught accounting.</i></p>
</div>
    


  
    </div><!--closes page text content-->

          
  </div><!--Closes main content block-->

  <!--Footer Next Chapter Section: Requires customization-->
  <div id="footer-chapter" style="margin-bottom: 0px;">

    <div class="footer-size">
    
      <div class="footer-left">

        <div id="footer-icon-left" style="cursor:pointer;" onclick="openFooter2()"></div>
    
     
        <div class="next-section">
            <div class="next-sec">Next:</div>
            <div class="sec-name"><i>Acknowledgements</i></div>
        </div>

      </div>
    

      <div class="footer-right">
    
        <a href="acknowledgements.php"><div class="next-button">Next ➔</div></a>

      </div>
    </div>
  </div>

  <?php require_once ("includes/chap-footer.php");?>



</body>
</html>

