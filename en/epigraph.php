<!--EARTHBOOK CHAPTER PAGE TEMPLATE

PHP Page Version 1.0.2
Design by Russell Maier
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
if (strcmp($name, "welcome.php") == 0)
$name = "";?>

<head>


<?php require_once ("../header.php");?>



<!--END OF GENERIC CONTENT-->

<!--META TAGS
Must be updated for each page-->

<title>Epigraph | Tratatus Ayyew - Earthbook</title>
<meta name="keywords" content="epigraph, introduction, stories, dapay, Earth ethics, earthen ethics, earth, ethics, tractatus ayyew, igorot, indigenous philosophy, philosophy, Earth, green ethics, environmental ethics, deep ecology, ecological, ethics"> 
<meta name="description" content="Another world is being born right in front of our eyes:  a whole new spirit in the way we think, hope and fear...">


<meta name="twitter:label1" content="Est. reading time" />
<meta name="twitter:data1" content="3 minutes" /> 
	
<!-- Facebook Open Graph Tags for social sharing-->
<meta property="og:title"         content="Epigraph | Tratatus Ayyew - Earthbook.">
<meta property="og:description"   content="Another world is being born right in front of our eyes:  a whole new spirit in the way we think, hope and fear..."/>



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

</style>


</head>


<!--Main HTML Begins-->

<BODY class="accessibility-plugin-ac">
  <div id="underlayer">

    <a name="top"></a>

<!--HEADER NAVBAR-->
<header-component></header-component>

<div id="ct-chapter-top">
    <div id="ct-tc-menu" onclick="openContents()"></div>
    <div class="sero" style="cursor:pointer;" onclick="openContents()">
      <div id="ct-chapter-title">Epigraph</div>   
      <div id="ct-book-title">Tractatus Ayyew</div>
      <div id="ct-chap-location">Book One</div>
      <div id="ct-word-count"><i>67 words</i></div>
    </div>
</div>


 
<?php require_once ("includes/eco-curtain.php");?>
 



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
    <br><br>

          
    </div><!--Closes main content block-->
  
    <!--Footer Next Chapter Section: Requires customization-->

<div id="footer-chapter" style="margin-bottom: 0px;">

  <div class="footer-size">
    
    <div class="footer-left">

      <div id="footer-icon-left" style="cursor:pointer;" onclick="openFooter()"></div>
    
     
      <div class="next-section">
          <div class="next-sec">Next:</div>
          <div class="sec-name"><i>Chapter 1 | Imagine</i></div>
      </div>

    </div>
    

    <div class="footer-right">
   
      <a href="imagine.php"><div class="next-button">Next ➔</div></a>

    </div>
  </div>
</div>

<?php require_once ("includes/chap-footer.php");?>


</body>
</html>

