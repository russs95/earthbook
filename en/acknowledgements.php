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
$page_number = "107";
$page_title = "Credits & Acknowledgements | Tractatus Ayyew | Earthbook";?>

<head>

<?php require_once ("../header.php");?>


<!--META TAGS
Must be updated for each page-->

<meta property="article:modified_time" content="2023-02-28T09:10:13+00:00">
<meta name="keywords" content="acknowledgements, thank yous, grattitude, credits "> 
<meta name="description" content="Our thanks to the many who made this project possible and published.">
<meta property="og:description"   content="Our thanks to the many who made this project possible and published."/>


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
      letter-spacing: 6px;
    }

    .java-link {
    cursor:pointer; 
    border-bottom: grey 1px dashed;
  }
  
  .java-link:hover {
    cursor:pointer; 
    border-bottom: grey 1px solid;}


    #chap-notice {
 
      width:100%;
      height:fit-content;
      background-color: green;
      display:block;
      border-radius: 10px;
      margin-bottom: 20px;
    }

    .chap-notice-text {
      font-family: 'Mulish', sans-serif;
      font-size:1.1em;
      padding: 25px;
      color: var(--true);
      
    }

    #close-notice {
      
      width:20px;
      height:20px;
      display:block;
      padding: 0.5em;
      font-size:1.2em;
      line-height:1.5em;
      cursor:pointer;
      color:  var(--fainter-border-color);
    }


</style>

<script>
    function closeNotice() {
      document.getElementById("chap-notice").style.display = "none";
    }   
  </script>

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
        <div id="ct-chapter-title">Gratitude</div>   
        <div id="ct-book-title">Tractatus Ayyew</div>
       <div id="ct-chap-location">Credits & Acknowledgements</div>
        <div id="ct-word-count"><i>Appendix</i></div>
      </div>
  </div>

  <?php require_once ("includes/eco-curtain.php");?>

<?php require_once ("includes/search.php");?>


<!-- Page Title Section-->

  <div id="ct-chapt-graphic" class="background-000">
  <img src="../icons/thankyou.svg" style="width:35%; height:35%; margin:auto;  text-align:center">

  </div>


<div id="up-arrow"></div>
<div id="ct-main">

<div id="chap-notice">
  <div id="close-notice" onclick="closeNotice()"><span class="close">&times;</span></div>
  <div class="chap-notice-text">
    It looks like its your first time opening this Earthbook!  Before you get going, be sure to <b>±</b> optimize for your eyes.  We also we suggest that you take the 1 minute tour to familarize yourself with the powerful reader tools available under the hood.
  </div>
</div>




<!-- MAIN TEXT CONTENT of the Page
  For footnotes, use these numbers:  ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ⁶⁰  “ ” ³¹⁰ ²⁶ ⁴⁷ ⁵⁴
-->
<div class="lead-page-paragraph">

WHAT FIRST BEGAN as conversation, became a school project, then a program, then a curriculum. Eventually, an essay emerged. Then another and another. And finally, the Earthbook before you. Along this decade long journey, our thoughts have been touched and propelled by countless contributions from the folks who have assisted and accompanied us along our way. 

</div>


<div class="page-paragraph">

  <p>First and foremost we are grateful for our plastic.  Without the trials and tribulations of trying to figure out what to do with it— the physical and philosophical journeys it pollutions and solutions have sparked for us— this book would never have begun.</p> 

  <p>
  That said, we are grateful to our invisible beginnings: our ancestors, both of our own lineages and those of other kincentric cultures around the world that have touched and inspired our struggle with the meaning of green. Their accumulated wisdom serves as the bedrock upon which we have built. 
  </p>

    <p>Along our journey, countless friends, family and colleagues who have been of invaluable assistance in our undertaking.</p>

    <p>Thank you to Pi Villaraza who was instrumental in energizing our early connection and collaboration.  He pointed us towards the use of Igorot and Filipino wisdom traditions to both undergird our work with plastic and to guide the social spread that followed.</p>

    <p>Un grand merci to Fabrice Garrigues for his dedication and efforts in the French translation of the Tractatus Ayyew and for rich evenings of family, wine and philosophy that accompanied it. Thanks to George Beurnier for his dinners that supplemented our efforts, and for his friendship and encouragement in the quest towards plastic’s resolve—  and billiard excellency.</p>

    <p>Un grand merci a les deux Frère Jacques de l'Abbey de Scourmont.  First, thank you to Frère Jacques senior for his gift of th Laudato si' encyclical (of which the concept of a "common home" helped to inspire and guide our work) and to his heartwarming persistence acquiring an early version of our French translation without our knowing!  Thank you to Frère Jacques junior for his early review and sourcing Catholic feedback and critic so that we could ensure our work resonates with the Laudato si' movement.</p>
       
    <p>Thank you to Trisha for her support, encouragement, listening and friendship. Thank you to Shiloh Vermaack and Richard Goldsmith for the relentless reviews of every chapter, not once but twice and sometimes thrice.  Thank you to Nicole and Vaughn for the in-depth reading and encouragement.  Thank you to Mel for the reminder that our ancestry, in particular its contrasts, was not just a side note, but a principal theme. Thank you to James and Ruth for their support and insights from the Bulkley Valley. Thank you to Rolf and Chris for their scathing early reviews.  Their invaluable critiques had a profound effect on our direction.  Thank you to Ani for her fathomless patience with the piles of pages and infinite coffee cups that accompanied this process.
        </p> 

        <p>Thank you to our Igorot and Wet’su’weten brothers and sisters whose examples have inspired us: James, Jed, Sir Ernesto, Jake and the Sabangan guides.</p>

        <p>Chapter banners, Eagle & Salmon No.1 and No.2, Frog and Sun by Wet’su’weten artist James Madam. </p>

        <p>Photos of Igorot culture on Earthen.io by Gladys Maxim.  Chapter 9 photos by Robert Brodey.</p>

        <p>Thank you to Thumas Hutton and Thomas Nail, both of whom wrote a book entitled <i>“A Theory of the Earth”</i>.  Although each book were published quite independently (the first in 1788 and the second in 2021!) both greatly inspired and encouraged our own work an theory.  </p>

        <p id="steve">Thank you to Mark Donnovan and Donnie Maclurcan, with whom a conversation inspired the insights of Chapter 9. </p>

        <p>Thank you to Stephen DeMeulenaere for the steamy conversations on the parrallels of capital and carbs, fats and fiat that was invaluable in shaping our ideas of Earthen energetics in <a href="energy.php">Chapter 9</a>.</p>
        
        <p>Thank you to Balaji Srinivasan. Though a good deal of our ideas are in direct opposition, the “web app” version of his book <a href="https://thenetworkstate.com" target="_blank">The Network State</a> nonetheless inspired us to aline our publishing platform and our principles and inspired our development of the Earthbook concept.</p>

        <p>Thank you to Enrique Salmon for his pioneering work developing the concept of “kincentric ecology” as a means of distinguishing Rarámuri metaphysics (and that of other fist nations) from the modern concept of 'nature'.  His work and his term underlie our use of the phrase ‘kincentric culture’ and have been invaluable to advancing our theory.</p>

        <p>Russell acknowledges the land of Banjar Sumampan, Gianyar, Indonesia, the ancestral home of the Balinese, as base for the writing and publishing of this book.</p>
        
        <p>Banayan acknowledge the land of the Igorot people and their wisdom tradition which inspired, nurtured and enabled this book, her oversight and contribution.</p>
        <div>
          

        <div id="line" style="border-style: dashed; border-width: 1px; margin-bottom: 40px; margin-top: 55px; width:100%; text-align:left;"></div>

        <div class="lead-page-paragraph">Thank you to the open source developers and their various projects upon which the <a class="java-link" onclick="openEarthbook()" aria-label="Open About Screen" title="Learn more about what an Earthbook is"><i>Earthbook</i></a> platform is built.</div>

        <div class="page-paragraph">
        
        <p>Thank you to <a href="www.fabiodeveloper.com">Fábio Almeida</a> for his Accessibilidade CSS script which enables readers to <a class="java-link" onclick="openSettings()" aria-label="Open Settings" title="Open Accessibility Setting"><i>increase and decrease the text</i></a> of the EarthBook.</p>
        
        <p>Thank you to Zeno Rocha for his continued development of <a href="https://clipboardjs.com">ClipboardJS</a>, the elegant Javascript on our <a class="java-link" onclick="openShare()" aria-label="Open Sharing" title="Open Sharing"><i>Share page.</i></a></p>
          
        <p>Thank you to <a href="https://dewaweb.com">DewaWeb Indonesia</a> who are generously hosting this EarthBook project without charge on their Singapore servers.</p>
        
        <p>Thank you to <a href="https://www.websitecarbon.com">WebsiteCarbon </a> who enable the automated <a class="java-link" onclick="openEco()" aria-label="Open Settings" title="Open Ecological Tracking"><i>carbon impact auditing</i></a> of each Earthbook page.</p>

       
        
        <p>Thank you to Stephen for his <a href="https://commentics.com">Commentics</a> PHP code base which powers the Earthbook chapter comments.</p>
        
        <p>Thank you to Thomas Steiner for his <a href="https://github.com/GoogleChromeLabs/dark-mode-toggle">Dark Mode Toggle code</a> which powers the <a class="java-link" onclick="openSettings()" aria-label="Open Settings" title="Open Accessibility Setting"><i>Night/Day</i></a> mode swithching of the Earthbook.</p>
        </div>
    

        


  
    </div><!--closes page text content-->

          
  </div><!--Closes main content block-->

  <!--Footer Next Chapter Section: Requires customization-->
  <div id="footer-chapter" style="margin-bottom: 0px;">

    <div class="footer-size">
    
      <div class="footer-left">

        <div id="footer-icon-left" style="cursor:pointer;" onclick="openFooter2()"></div>
    
     
        <div class="next-section">
            <div class="next-sec">Next appendix:</div>
            <div class="sec-name"><i>The Publishing</i></div>
        </div>

      </div>
    

      <div class="footer-right">
    
        <a href="publishing.php"><div class="next-button">Next ➔</div></a>

      </div>
    </div>
  </div>

  <?php require_once ("includes/chap-footer.php");?>



</div>


</body>
</html>

