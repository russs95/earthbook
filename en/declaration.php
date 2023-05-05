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
$page_number = "110";
$page_title = "Declation of Interests & Investments | Tractatus Ayyew - An Earthbook";?>

<head>

<?php require_once ("../header.php");?>


<!--META TAGS
Must be updated for each page-->

<meta property="article:modified_time" content="2023-02-28T09:10:13+00:00">
<meta name="keywords" content="declaration, financing, supporters, patrons, helpers, grants, sponsors, statement, interests, investments, connections, biases, authors, russ, russell, maier, banayan, irene, angway "> 

<meta name="description" content="A statement of the interests and investments of the authors.">

	
<!-- Facebook Open Graph Tags for social sharing-->
<meta property="og:title"         content="Declaration | Tratatus Ayyew - Earthbook.">
<meta property="og:description"   content="A statement of the interests and investments of the authors."/>

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
<!--TOUR-CURTAIN-->
<tour-curtain></tour-curtain>


  <div id="underlayer">

    <div id="top"></div>

  <!--HEADER NAVBAR-->
  <header-component></header-component>

  <div id="ct-chapter-top">
  <button type=button id="ct-tc-menu" onclick="openContents()" style="background-color:var(--header-footer);" aria-label="Open Table of Contents"></button>
  <div class="ct-holder" style="cursor:pointer;" onclick="openContents()">
        <div id="ct-chapter-title">Declaration</div>   
        <div id="ct-book-title">Investments & Interests</div>
       <div id="ct-chap-location">Tractatus Ayyew</div>
        <div id="ct-word-count"><i>Appendix</i></div>
      </div>
  </div>

  <?php require_once ("includes/eco-curtain.php");?>


<!-- Page Title Section-->

  <div id="ct-chapt-graphic" class="background-000">

  </div>

  <div id="up-arrow"></div>


  <div id="ct-main">




<!-- MAIN TEXT CONTENT of the Page
  For footnotes, use these numbers:  ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ⁶⁰  “ ” ³¹⁰ ²⁶ ⁴⁷ ⁵⁴
-->

        <h2>Banayan & Russell</h2>

     <div class="page-paragraph">

     <p>Banayan and Russell are co-founders of the <a href="https://ecobricks.org/about" target="_blank">Global Ecobrick Alliance</a>.  Banyan is a paid employee of the Cordillera Adminstrative Region of the Philippines Department of Education (Kalinga Province).  Russell receives commissions on GEA trainer and is an active principal in the organization.</p>

        <p>A private donation by Trisha Joe of 2500$ USD was received in 2020 to purchase the <a href="/writing.php">Librem laptop</a> and  upon which this work was written.  A second donation of 3000$ USD by the same supporter was received to publish the <i>Tractatus Ayyew Earthbook edition</i> in 2022.</p>

        <p>Other than the above, no grants, sponsorships or funding from any organizations, companies, governments or corporations were received by Russell or Banayan to support the writing of the <i>Tractatus Ayyew</i> or at any time for any other of their work.</p>
    

      </div>
  
    </div><!--closes page text content-->

          
  </div><!--Closes main content block-->

  <!--Footer Next Chapter Section: Requires customization-->
  <div id="footer-chapter" style="margin-bottom: 0px;">

    <div class="footer-size">
    
      <div class="footer-left">

        <div id="footer-icon-left" style="cursor:pointer;" onclick="openFooter2()"></div>
    
     
        <div class="next-section">
            <div class="next-sec">Next chapter:</div>
            <div class="sec-name"><i>Bibliography</i></div>
        </div>

      </div>
    

      <div class="footer-right">
    
        <a href="bibliography.php"><div class="next-button">Next ➔</div></a>

      </div>
    </div>
  </div>

  

<?php require_once ("includes/chap-footer.php");?>


</body>
</html>

