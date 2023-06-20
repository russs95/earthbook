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
$page_number = "11";
$page_title = "Epigraph | Book 2";?>

<head>

<?php require_once ("../header.php");?>



<!--META TAGS
Must be updated for each page-->

<meta property="article:modified_time" content="2023-06-20T09:14:13+00:00">
<meta name="keywords" content="epigraph, introduction, stories, dapay, Earth ethics, earthen ethics, earth, ethics, tractatus ayyew, igorot, indigenous philosophy, philosophy, Earth, green ethics, environmental ethics, deep ecology, ecological, ethics"> 
<meta name="description" content="“Blackfellow law different.  It never changes. Like a stone, like that hill.  The law is in the ground.”">


<meta name="twitter:label1" content="Est. reading time" />
<meta name="twitter:data1" content="3 minutes" /> 
<meta property="og:description"   content="“Blackfellow law different.  It never changes. Like a stone, like that hill.  The law is in the ground.”"/>



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
      font-size: 1.3em;
    }
  }
    
  @media screen and (min-width: 1325px) {
    .ct-chapter-quote {
    width: 50%;
    font-size: 1.7em;
    }
    .ct-quote-source {
      width: 50%;
      font-size: 1.3em;
    }
  }

    #ct-main .action-btn {
    margin: -35px auto 0px auto !important;
  }
  

</style>


</head>


<!--Main HTML Begins-->

<BODY class="accessibility-plugin-ac">
<!--TOUR-CURTAIN-->
<tour-curtain></tour-curtain>


  <div id="underlayer">

    <div id="top"></div>

<!--HEADER NAVBAR-->
<header-component></header-component>


<div id="ct-chapter-top">
  <button type=button id="ct-tc-menu" onclick="openContents()"  aria-label="Open Table of Contents"></button>

  <div class="ct-holder" style="cursor:pointer;" onclick="openContents()">
      <div id="ct-chapter-title">Epigraph</div>   
      <div id="ct-book-title">Tractatus Ayyew</div>
      <div id="ct-chap-location">Book Two</div>
      <div id="ct-word-count"><i></i></div>
    </div>
</div>


 
<?php require_once ("includes/eco-curtain.php");?>
 



<!-- Page Title Section-->


<div id="ct-chapt-graphic" class="background-000">
    <!--<div class="ct-chapter-quote">
    “If we don’t do things the right way, it poisons the outcome.”
    </div>
    
  </div>

<div id="up-arrow"></div> 

<div id="ct-main">

<div class="ct-quote-source" style="width:100% !important;">
    ― Ruthanna Emrys<br><i>A Half-Built Garden</i>-->

    <div class="ct-chapter-quote">
    “You see that hill over there?  Blackfellow law like that hill.  It never changes. Whitefellow law go this way, that way, all the time changing. Blackfellow law different.  It never changes. Like a stone, like that hill.  The law is in the ground.”
    </div>
    
  </div>

<div id="up-arrow"></div> 

<div id="ct-main">

<div class="ct-quote-source" style="width:100% !important;">
    ― Doug Cambell, Yarralin spokesperson<br><span style="font-size:smaller;">From: <i>'Dingo Makes Us Human'</i>,  by Deborah Rose Bird<br>(Cambridge University Press, New York, 2000) p. 56</span></div>


    <br><br>
    <br><br>
    <br><br>
<div class="footnote-line" style="border-style: dotted; border-color: grey; border-width: 1px; margin-bottom: 20px; width:100%; text-align:left;"></div>

<br>
<div class="ct-quote-source" style="width:100% !important;">

Note:  Book Two is still in development.  Not all chapters are deployed.  Content is continuously being revised and updated.
    </div>

    <br><br>
    <br><br>

    <br><br><br><br>
    <br><br>

    <br><br>

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
          <div class="sec-name"><i>1 | Cycles that Spiral</i></div>
      </div>

    </div>
    

    <div class="footer-right">
   
      <a href="spirals.php"><div class="next-button">Next ➔</div></a>

    </div>
    </div>

  <?php require_once ("includes/chapTER-footer.php");?>



</body>
</html>


