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
$page_number = "200";
$page_title = "Page not Found | 404 Error | Tractatus Ayyew";?>

<head>


<?php require_once ("header.php");?>


<!--META TAGS
Must be updated for each page-->

<meta property="article:modified_time" content="2023-02-25T09:14:13+00:00">
<meta name="keywords" content="not yet published, epigraph, introduction, stories, dapay, Earth ethics, earthen ethics, earth, ethics, tractatus ayyew, igorot, indigenous philosophy, philosophy, Earth, green ethics, environmental ethics, deep ecology, ecological, ethics"> 
<meta name="description" content="This chapter hasn't yet been published.">
<meta name="twitter:label1" content="Est. reading time" />
<meta name="twitter:data1" content="1 minutes" /> 
<meta property="og:description"   content="We couldn't find the page you were looking for."/>



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
  #ct-chapter-title {
  
  font-size: 10vmin;
  letter-spacing: 1px;
}

</style>

</head>


<!--MAIN HTML Begins-->

<BODY class="accessibility-plugin-ac" style="max-width:100%; overflow-x:hidden;">
<div id="underlayer">

<div id="top"></div>

<!--HEADER NAVBAR-->
<header-component></header-component>

<div id="ct-chapter-top">
<button type=button id="ct-tc-menu" onclick="openContents()" aria-label="Open Table of Contents"></button>
<div class="ct-holder" style="cursor:pointer;" onclick="openContents()">
    <div id="ct-chapter-title">Page Not Found</div>   
      <div id="ct-book-title">404 Error</div>
      <div id="ct-chap-location">Tractatus Ayyew</div>
      <div id="ct-word-count"><i>An Earthen Ethics</i></div>
    </div>
</div>

 
<?php require_once ("includes/eco-curtain.php");?>
 
<!-- Page Title Section-->


<div id="ct-chapt-graphic" class="background-000">
    <div class="ct-chapter-quote">
    The requested page <!--#echo var="REQUEST_URI" --> couldn't be matched with any other in the EarthBook.  Check the URL for errors or mispellings.
    </div>
</div>

<div id="up-arrow"></div>

<div id="ct-main">

  <div>
                <!--<h1></h1>-->
    <h3 class="accessibility-plugin-ac">You can try searching the EarthBook to find what you're looking for...</h3> 
  </div>
          
  <div class="search-box" style="padding-bottom:15%;">
    <div class="copy-section">
      <input id="search_input" type="text" placeholder="Search...">   
         <button class="btn" style="padding:22px;" onclick="searchPosts(0)"><i style="background-image: url(../icons/search-white.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 2px;"></i></button> 
      </div>  
   
      <div id="search_results"></div>
      <br><br><br><br>
     
<div class="ct-quote-source" style="width:100% !important;">
    Book Two and Three of the <i>Tractatus Ayyew</i> is not yet published. Subscribe to Earthen to be notified of new chapter releases.

    <br><br>

    <?php require_once ("../manage.php");?>

    <br>
</div>




          
</div><!--Closes main content block-->

    
  
    <!--Footer Next Chapter Section: Requires customization-->

<div id="footer-chapter" style="margin-bottom: 0px;">

  <div class="footer-size">
    
    <div class="footer-left">

      <div id="footer-icon-left" style="cursor:pointer;" onclick="openFooter2()"></div>
    
     
      <div class="next-section">
          <div class="next-sec">Go to:</div>
          <div class="sec-name"><i>The Dashboard</i></div>
      </div>

    </div>
    

    <div class="footer-right">
   
      <a href="https://book.earthen.io/index.php"><div class="next-button">Home ➔</div></a>

    </div>
  </div>
</div>

<?php require_once ("includes/chap-footer.php");?>


</body>
</html>

