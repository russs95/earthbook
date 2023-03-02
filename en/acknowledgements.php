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
$page_title = "Acknowledgements | Tractatus Ayyew - An Earthbook";?>

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
      letter-spacing: 0px;
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
  <button type=button id="ct-tc-menu" onclick="openContents()" aria-label="Open Table of Contents"></button>
  <div class="ct-holder" style="cursor:pointer;" onclick="openContents()">
        <div id="ct-chapter-title">Acknowledgements</div>   
        <div id="ct-book-title">Tractatus Ayyew</div>
       <div id="ct-chap-location">Gratitude</div>
        <div id="ct-word-count"><i>Appendix</i></div>
      </div>
  </div>

  <?php require_once ("includes/eco-curtain.php");?>


<!-- Page Title Section-->

  <div id="ct-chapt-graphic" class="background-000">
  <img src="../icons/thankyou.svg" style="width:35%; height:35%; margin:auto;  text-align:center">

  </div>


<div id="up-arrow"></div>
<div id="ct-main">

 

<!-- MAIN TEXT CONTENT of the Page
  For footnotes, use these numbers:  ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ⁶⁰  “ ” ³¹⁰ ²⁶ ⁴⁷ ⁵⁴
-->
<div class="lead-page-paragraph">

WHAT FIRST BEGAN as conversation, became a school project, then a program, then a curriculum. Eventually, an essay emerged. Then another and another. And finally, the Earthbook before you. Along this decade long journey, our thoughts have been touched and propelled by countless contributions from the folks who have assisted and accompanied us along our way. 

</div>


<div class="page-paragraph">

  <p>
  First and foremost we are grateful to our invisible beginnings: our ancestors, both of our own lineages and those of other kincentric cultures around the world that have touched and inspired us. Their accumulated wisdom serves as the bedrock upon which we have built. 
  </p>

    <p>And of course, the numerous friends, family and colleagues who have been of invaluable assistance in this undertaking.</p>
    
    
    <p>Thank you to Trisha for her support, encouragement, listening and friendship. Thank you to Shiloh Vermaack and Richard Goldsmith for the relentless reviews of every chapter, not once but twice and sometimes thrice.  Thank you to Nicole and Vaughn for the in-depth reading and encouragement.  Thank you to Mel for the reminder that our ancestry, in particular its contrasts, was not just a side note, but a principal theme. Thank you to James and Ruth for their support and insights from the Bulkley Valley. Thank you to Rolf and Chris Maier for their scathing critiques and reviews that had a profound effect on our direction.  Thank you to Ani for her fathomless patience with the piles of pages and infinite coffee cups that accompanied this process.
        </p> 

        <p>Thank you to our Igorot and Wet’su’weten brothers and sisters whose examples have inspired us: James, Jed, Sir Ernesto, Jake and the Sabangan guides.</p>

        <p>Chapter banners, Eagle & Salmon No.1 and No.2, Frog and Sun by Wet’suwet’en artist James Madam. </p>

        <p>Photos of Igorot culture on Earthen.io by Gladys Maxim.  Chapter 9 photos by Robert Brodey.</p>

        <p>Thank you to Thumas Hutton and Thomas Nail, both of whom wrote a book entitled <i>“A Theory of the Earth”</i>.  Although each book were published quite independently (the first in 1788 and the second in 2021!) both greatly inspired and encouraged our own work an theory.  </p>

        <p>Thank you to Mark Donnovan and Donnie Maclurcan, with whom a conversation inspired the insights of Chapter 9. </p>

        <p id="steve">Thank you to Stephen DeMeulenaere for the steamy conversations on the parrallels of currency and capital, fats and carbohydrates that was in valuable in our clarifying our thinking about Earthen energetics in Chapter 9.</p>
        
        <p>Thank you to Balaji Srinivasan, though a good deal of our ideas are in direct opposition to his, the “web app” version of his book <a href="https://thenetworkstate.com" target="_blank">The Network State</a> inspired our development of the Earthbook concept and code.</p>

        <p>Thank you to Enrique Salmon for his pioneering work developing the concept of “kincentric ecology” as a means of distinguishing Rarámuri metaphysics (and that of other fist nations) from modern views of nature.  His work and term underlie our term ‘kincentric culture’ and have been invaluable to advancing our theory.</p>

        <p>Thank you to the open source developers and their various projects upon which the EarthBook platform is built.</p>
        
        <p>Thank you to <a href="www.fabiodeveloper.com">Fábio Almeida</a> for his Accessibilidade CSS script which enables readers to increase and decrease the text of the EarthBook.</p>
        
        <p>Thank you to Zeno Rocha for his continued development of <a href="https://clipboardjs.com">ClipboardJS</a>, the elegant Javascript on our Share page.</p>
          
        <p>Thank you to <a href="https://dewaweb.com">DewaWeb Indonesia</a> who are generously hosting this EarthBook project without charge on their Singapore servers.</p>
        
        <p>Thank you to <a href="https://www.websitecarbon.com">WebsiteCarbon </a> who enable the automated Carbon impact auditing of each Earthbook page.</p>

        <p>Thank you to <a href="https://instructobit.com/tutorial/95/How-to-create-a-search-function-for-your-website-using-Javascript%2C-PHP-and-MySQL">Christopher Thorton</a> for his development and sharing of an elegant PHP search which is used in the EarthBook search functionality.</p>
        
        <p>Thank you to <a href="https://commentics.com">Stephen for his Commentics php code base</a> which powers the EarthBook chapter comments.</p>
        
        <p>Thank you to Thomas Steiner for his <a href="https://github.com/GoogleChromeLabs/dark-mode-toggle">Dark Mode Toggle code</a> which powers the Night/Day mode swithching of the Earthbook.</p>
    
        <p>Russell acknowledges the land of Banjar Sumampan, Gianyar, Indonesia, the ancestral home of the Balinese, as base for the writing and publishing of this book.</p>
        
        <p>Banayan acknowledge the land of the Igorot people and their wisdom tradition which inspired, nurtured and enabled this book, her oversight and contribution.</p>
        <p>


  
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

