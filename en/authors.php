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

<title>Authors | Tratatus Ayyew - Earthbook</title>
<meta name="keywords" content="authors, russell, maier, banayan, irene, angway "> 

<meta name="description" content="About the authors of the Tractatus Ayyew">

	
<!-- Facebook Open Graph Tags for social sharing-->
<meta property="og:title"         content="Authors | Tratatus Ayyew - Earthbook.">
<meta property="og:description"   content="About the authors of the Tractatus Ayyew"/>

<style>
  


  #ct-chapter-title {
      /*padding-top: 45px;
      */font-size: 10vmin;
      letter-spacing: 2px;
      
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
      <div id="ct-tc-menu" onclick="openContents()"></div>
      <div class="ct-holder" style="cursor:pointer;" onclick="openContents()">
        <div id="ct-chapter-title">The Authors</div>   
        <div id="ct-book-title">& The Authorship</div>
       <div id="ct-chap-location">Tractatus Ayyew</div>
        <div id="ct-word-count"><i>Appendix</i></div>
      </div>
  </div>

  <?php require_once ("includes/eco-curtain.php");?>


<!-- Page Title Section-->

<div id="ct-chapt-graphic" class="background-000">
  <img src="../icons/authoring.svg" style="width:35%; height:35%; margin:auto;  text-align:center">
  </div>

  <div id="up-arrow"></div>


  <div id="ct-main">


<!-- MAIN TEXT CONTENT of the Page
  For footnotes, use these numbers:  ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ⁶⁰  “ ” ³¹⁰ ²⁶ ⁴⁷ ⁵⁴
-->

<div class="page-paragraph">

<p>The writing of the <i>Tractatus Ayyew: Earthen Ethics</i> is the culmination of a decade long dialogue and friendship between Russell Maier and Banayan Angway (read the full story in the <a href="preface.php">preface</a>).  The book is inspired by Banayan's research and articulation of the concept of <i>Ayyew</i> for the Cordilleria Administrative Region DepEd Indigenous Knowledge curriculum<a href="#footnotes" title="See: Irene Banayan Angway, Cordillera Administrative Region Indigenous Peoples Education Curriculum K-12, (Bontoc, Mountain Prov., CAR; Philippines Department of Education, 2014)">¹</a> and their experience founding the Filipino ecobrick movement.<a href="#footnotes" title="The rise of the Regenerative Ecobrick Movement | Bandung Spirit Conference | 2020 | Russell Maier, Ani Himawati | https://www.ecobricks.org/wp-content/uploads/2021/09/The-Rise-of-the-Regenerative-Ecobrick-Movement.pdf | p11">²</a></p>
  
  <p>The words of the <i>Tractatus Ayyew</i> are written by Russell with Banayan's oversight and review.  The chapter format of prefaced ecological parables is inspired by the Igorot tradition of storytelling after the Bugnas festival feast.</p> 

</div>
<br><br>

<h2>Banayan Angway</h2>

        <div class="page-paragraph">

        <p>Banayan was the superintendent of Kalinga Mt. Province DEPED from 2015-2021.  She oversaw the development of the Indigenous Culture component of the Kalinga and Mt. Province curriculum's where she integrated and developed the Ayyew concept into textbooks and lessons.    As the indigenous peoples education coordinator for Mountain Province from 2011-2015 Banayan facilitated planning, implementation and evaluation of related activities that made her program known nationwide.</p> 

        </div>
        <br><br>

        <h2>Russell Maier</h2>

        <div class="page-paragraph">
        <p>Russell is an inventor and regenerative philosopher, currently based in Gianyar, Indonesia.  Russell is one of the principals of the Global Ecobrick Alliance and writes regularly on Earthen.io.  He travels around South East Asia observing the impact of human systems on biological diversity, in order to maximize human ecological contribution.</p>
      
      </div>
      <br><br>



    <div class="footnote-section">

      <div id="line" style="border-style: solid; border-width: 1px; margin-bottom: 30px; width:100%; text-align:left;"></div>

      <p id="footnotes" style="font-variant-caps: all-petite-caps; color:grey">Section Footnotes</p>
      
  
      <a href="#1-up" class="footnote">   
      <div class="footnote-number" id="3-down">1.</div>
      <div class="footnote-text">See: Banayan Angway, <i>Cordillera Administrative Region Indigenous Peoples Education Curriculum K-12</i>(Bontoc, Mountain Prov., CAR; Philippines Department of Education, 2014).</div>
      </a>

      <a href="#2-up" class="footnote">   
      <div class="footnote-number" id="3-down">2.</div>
      <div class="footnote-text">ANi Himawati, Russell Maier, <i>The rise of the Regenerative Ecobrick Movement</i> (Bandung Spirit Conference | 2020 https://www.ecobricks.org/wp-content/uploads/2021/09/The-Rise-of-the-Regenerative-Ecobrick-Movement.pdf) | p11</div>
      </a>

   </div>

          
  </div><!--Closes main content block-->

  <!--Footer Next Chapter Section: Requires customization-->
  <div id="footer-chapter" style="margin-bottom: 0px;">

    <div class="footer-size">
    
      <div class="footer-left">

        <div id="footer-icon-left" style="cursor:pointer;" onclick="openFooter()"></div>
    
     
        <div class="next-section">
            <div class="next-sec">Next chapter:</div>
            <div class="sec-name"><i>Declaration of Author Interests & Investments</i></div>
        </div>

      </div>
    

      <div class="footer-right">
    
        <a href="declaration.php"><div class="next-button">Next ➔</div></a>

      </div>
    </div>
  </div>

  

<?php require_once ("includes/chap-footer.php");?>


</body>
</html>

