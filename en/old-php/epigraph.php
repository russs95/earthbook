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
$page_number = "3";
$page_title = "Epigraph | Tractatus Ayyew - An Earthbook";
$chap_name = "Epigraph";
$chap_number = "Book One, ";?>?>

<head>

<?php require_once ("../header.php");?>

<!--META TAGS
Must be updated for each page-->

<meta property="article:modified_time" content="2023-02-20T09:14:13+00:00">

<meta name="keywords" content="epigraph, introduction, stories, nature, history, dapay, Earth ethics, earthen ethics, earth, ethics, tractatus ayyew, igorot, indigenous philosophy, philosophy, Earth,green, green ethics, environmental ethics, deep ecology, ecological, ethics, Régis Debray, Le siècle vert, Un changement de civilisation, The Green Age, A Change of Civilizations"> 
<meta name="description" content="Another world is being born right in front of our eyes:  a whole new spirit in the way we think, hope and fear...">


<meta name="twitter:label1" content="Est. reading time">
<meta name="twitter:data1" content="1 minutes"> 
	
<!-- Facebook Open Graph Tags for social sharing-->

<meta property="og:description"   content="Another world is being born right in front of our eyes:  a whole new spirit in the way we think, hope and fear...">



<style>
  

@media screen and (max-width: 699px) {
    .ct-chapter-quote {
      width: 87%;
      font-size: 1em;
    }
    .ct-quote-source {
      width: 80%;
      font-size: 0.9em;
    }

    #ct-chapt-graphic {
      height: 40vh;
      margin-top: 8vh;
    }

  }

  @media screen and (min-width: 700px) and (max-width: 1324px) {
    .ct-chapter-quote {
      width: 70%;
      font-size: 1.7em;
    }
    .ct-quote-source {
      width: 70%;
      font-size: 1.1em;
    }
  }
    
  @media screen and (min-width: 1325px) {
    .ct-chapter-quote {
    width: 50%;
    font-size: 1.7em;
    }
    .ct-quote-source {
      width: 50%;
      font-size: 1.0em;
    }

    #ct-main {margin-bottom: 375px;}
  }

</style>


</head>


<!--Main HTML Begins-->

<BODY class="accessibility-plugin-ac">
 <!--TOUR-CURTAIN-->
<tour-curtain></tour-curtain>
<subscription-curtain></subscription-curtain>


<div id="underlayer" class="accessibility-plugin-ac">

  <div id="top"></div>

<!--HEADER NAVBAR-->
<header-component></header-component>

<div id="ct-chapter-top">
  <button type=button id="ct-tc-menu" onclick="openContents()" style="background-color:var(--header-footer);" aria-label="Open Table of Contents"></button>
  <div class="ct-holder" style="cursor:pointer;" onclick="openContents()">
      <div id="ct-chapter-title">Epigraph</div>   
      <div id="ct-book-title">Tractatus Ayyew</div>
      <div id="ct-chap-location">Book One</div>
      <div id="ct-word-count"><i>67 words</i></div>
    </div>
</div>


<!-- Page Title Section-->


<div id="ct-chapt-graphic" class="background-000">
    <div class="ct-chapter-quote">
      “Another world is being born right in front of our eyes:  a whole new spirit in the way we think, hope and fear.  The ecological anguish that gives its color to this new age announces nothing less for our civilization than all-encompassing change.  First History passed, now Nature is next.  This is the moment to take green seriously.”
    </div>
    
  </div>

<div id="up-arrow"></div>

<div id="ct-main">

<div class="ct-quote-source" style="width:100% !important;">
    ― Régis Debray, <i>Le siècle vert. Un changement de civilisation</i><br><br>(<i>The Green Age: A Change of Civilizations</i>)
    </div>
    <br><br><br><br><br><br>
</div><!--closes page text content-->


<?php require_once ("includes/eco-curtain.php");?>

<?php require_once ("includes/comments.php");?>

<?php require_once ("includes/search.php");?>

<!--Footer Next Chapter Section: Requires customization-->
<div id="footer-chapter" style="margin-bottom: 0px;">

<div class="footer-size">

  <div class="footer-left">

   <!-- <div id="footer-icon-left" style="cursor:pointer;" onclick="openFooter()"></div>-->

 
    <div class="next-section">
          <div class="next-sec">Next:</div>
          <div class="sec-name"><i>1 | Imagine</i></div>
      </div>

    </div>
    

    <div class="footer-right">
   
      <a href="imagine.php"><div class="next-button">Next ➔</div></a>

    </div>
    </div>

  <?php require_once ("includes/chapTER-footer.php");?>



</body>
</html>

