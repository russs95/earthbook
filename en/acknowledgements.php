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

<title>Acknowledgements | Tratatus Ayyew - Earthbook</title>
<meta name="keywords" content="acknowledgements, thank yous, grattitude, credits "> 

<meta name="description" content="Biblioraphy of sources for the Tractatus Ayyew">

	
<!-- Facebook Open Graph Tags for social sharing-->
<meta property="og:title"         content="Acknowledgements | Tratatus Ayyew - Earthbook.">
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
        <div id="ct-chapter-title">Acknowledgements</div>   
        <div id="ct-book-title">Tractatus Ayyew</div>
       <div id="ct-chap-location">An Earthen Ethics</div>
        <div id="ct-word-count"><i>Appendix</i></div>
      </div>
  </div>

<!-- Page Title Section-->

  <div id="ct-chapt-graphic" class="background-000">
    <div class="ct-chapter-quote">
      Credits, Inspiration & Gratitude
    </div>
  </div>

  <?php require_once ("includes/eco-curtain.php");?>
  <div id="up-arrow"></div>
  <div id="ct-main">

 

<!-- MAIN TEXT CONTENT of the Page
  For footnotes, use these numbers:  ?? ?? ?? ??? ??? ??? ??? ??? ??? ??????  ??? ??? ??????? ????? ?????? ??????
-->
<div class="lead-page-paragraph">

WHAT FIRST BEGAN as conversation, became a school project, then a program, then a curriculum. Eventually, an essay emerged. Then another and another. And finally, the book you have before you. Along this decade long journey, our thoughts have been touched and propelled by countless contributions from the folks who have assisted and accompanied us along our journey. 

</div>


<div class="page-paragraph">

  <p>
  First and foremost we are grateful to our invisible beginnings: our ancestors, both of our own lineages and those of other kincentric cultures around the world that have touched and inspired us. Their accumulated wisdom serves as the bedrock upon which we have built. 
  </p>

    <p>And of course, there are numerous friends, family and colleagues who have been of invaluable assistance along our way.</p>
    
    <p>Thank you to our Igorot and Wet???su???weten brothers and sisters whose examples have inspired us: James, Jed, Sir Ernesto, Jake and the Sabangan guides.  Thank you to Trisha for her support, encouragement, listening and friendship. Thank you to Shiloh Vermaack and Richard Goldsmith for the relentless reviews of every chapter, not once but twice and sometimes thrice.  Thank you to Nicole and Vaughn for the in-depth reading and encouragement.  Thank you to Mel for the reminder that our ancestry, in particular its contrasts, was not just a side note, but a principal theme. Thank you to James and Ruth for their support and insights from the Bulkley Valley. Thank you to Rolf and Chris Maier for their scathing critiques and reviews that had a profound effect on our direction.  Thank you to Ani for her fathomless patience with the piles of pages and infinite coffee cups that accompanied this process.
        </p> 

        <p>Chapter banners, Eagle & Salmon No.1 and No.2, Frog and Sun by Wet???suwet???en artist James Madam. </p>

        <p>Photos of Igorot culture by Gladys Maxim.  Chapter 9 photos by Robert Brodey.</p>

        <p>Thank you to Thumas Hutton and Thomas Nail, both of whom wrote a book entitled <i>???A Theory of the Earth???</i>.  Although each book were published quite independently (the first in 1788 and the second in 2021!) both greatly inspired and encouraged our own work an theory.  </p>

        <p>Thank you to Mark Donnovan and Donnie McCluharan, with whom a conversation inspired the insights of Chapter 9. </p>
        
        <p>Thank you to Balaji Srinivasan, whose ???web app??? version of his book The Network State inspired our development of the Earthbook concept and code.</p>

        <p>Thank you to Enrique Salmon for his pioneering work developing the concept of ???kincentric ecology??? as a means of distinguishing Rar??muri metaphysics (and that of other fist nations) from modern views of nature.  His work and term underlie our term ???kincentric culture??? and have been invaluable to advancing our theory.</p>

        <p>Russell acknowledges the land of Banjar Sumampan, Gianyar, Indonesia, the ancestral home of the Balinese, as base for the writing and publishing of this book.</p>


  
    </div><!--closes page text content-->

          
  </div><!--Closes main content block-->

  <!--Footer Next Chapter Section: Requires customization-->
  <div id="footer-chapter" style="margin-bottom: 0px;">

    <div class="footer-size">
    
      <div class="footer-left">

        <div id="footer-icon-left" style="cursor:pointer;" onclick="openFooter()"></div>
    
     
        <div class="next-section">
            <div class="next-sec">Next chapter:</div>
            <div class="sec-name"><i>Writing & Publishing</i></div>
        </div>

      </div>
    

      <div class="footer-right">
    
        <a href="writing.php"><div class="next-button">Next ???</div></a>

      </div>
    </div>
  </div>

  <?php require_once ("includes/chap-footer.php");?>



</div>


</body>
</html>

