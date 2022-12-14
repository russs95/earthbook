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

<title>Bibliography | Tratatus Ayyew - Earthbook</title>
<meta name="keywords" content="sources, biblioraphy, tractatus ayyew, references,"> 
<meta name="description" content="Biblioraphy of sources for the Tractatus Ayyew">

	
<!-- Facebook Open Graph Tags for social sharing-->
<meta property="og:title"         content="Bibilography | Tratatus Ayyew - Earthbook.">
<meta property="og:description"   content="Biblioraphy of sources for the Tractatus Ayyew"/>


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
        <div id="ct-chapter-title">Bibliography</div>   
        <div id="ct-book-title">Tractatus Ayyew</div>
       <div id="ct-chap-location">An Earthen Ethics</div>
       <div id="ct-word-count"><i>Sources & References</i></div>
      </div>
  </div>

  <?php require_once ("includes/eco-curtain.php");?>

  <div id="ct-chapt-graphic" class="background-000"></div>

  
  <div id="up-arrow"></div>
  <div id="ct-main">

  


<!-- MAIN TEXT CONTENT of the Page
  For footnotes, use these numbers:  ?? ?? ?? ??? ??? ??? ??? ??? ??? ??????  ??? ??? ??????? ????? ?????? ??????
-->

<div class="page-paragraph">

    <p>Sources listed in order of appearance in the book.</p>
    <br>

    <div id="line" style="margin-top: 15px"></div>

    <br><br><br>
    
    <p>R??gis Debray, <i>Le si??cle vert. Un changement de civilisation</i> (Editions Gallimard, 2020) 

        <p>Bill Mollison, <i>Principles from Permaculture a Designers' Manual</i>, (Tagari Publishers: 1988).</p>
        
       <p>Daniel Pinchbeck, Sting, Russell Brand <i>How Soon is Now: From Personal Initiation to Global Transformation</i>, (Publisher: Watkins Publishing, 2017)</p>
	
	<p><i>Sustainable Packaging: Consumer View</i>, (Global Web Index: 2020)</p>
        
       <p> R. Geyer, et al., <i>Production, use and fate of all plastics ever made </i>(Science Advances, 2017) Vol. 3, no. 7.</p>
        
        <p>Ansje Lohr, Heidi Savelli, Raoul Beunen, Marco Kalz, Ad Ragas, Frank Van Belleghem, <i>Solutions for global marine litter pollution</i>,  (sciencedirect.com: Current opinion in Environmental Sustainability, Vol 28, October 2017) 90-99</p>
        
        <p><i>Plastic & Climate: The Hidden Costs of a Plastic Planet</i> (Center for International Environmental Law, 2019).</p>
        
         <p>Russell Maier, <i>Recycling: The Evil Illusion</i>, (Medium.com, 2016).</p>
        
	<p>Mike Pearl, <i>Climate Despair Is Making People Give Up on Life</i> (Vice Magazine, 2019).</p>
        
	<p>D. Gilford et al, <i>The Emotional Toll of Climate Change on Science Professionals</i>, (2019) </p>
        
        <p>Steven W. Running, <i>The 5 Stages of Climate Grief</i> (University of Montana, Missoula: Numerical Terradynamic Simulation Group Publications: 2017).</p>
        
        <p>Guido Tonelli, <i>Genesis: The Story of How Everything Began</i>, trans. Erica Segre, Simon Carnell (Farrar, Straus and Giroux, 2021).</p>
        
        <p>Rye, R., Kuo, P.HO., and Holland,H.D., <i>Atmospheric carbon dioxide concentrations before 2.2 billion years ago</i> (Nature,  1995), 379, 6013-75.</p> 
        
        <p>Thomas Nail, <i>Theory of the Earth</i> (Standford University Press, 2021).</p>
        
        <p>Jeremy L. England et al. (2015), <i>In the beginning: The full story of life on Earth can finally be told</i>. (NewScientist, 2019). </p> 
        
        <p>Bekker, A., Holland,Wang, P. et al., <i>Dating the rise of atmospheric oxygen</i>, (Nature, 2004) 427, 117-20.</p>
        
        <p>David M. Raup and J. John Sepkoski, Jr., <i>Mass Extinctions in the Marine Fossil Record</i>, (American Association for the Advancement of Science, 1982) Vol 215, Issue 4539.</p>
        
	<p> <i>UK Oil consumption</i>, (British Plastics Federation, 2008), Ref PD/LFH/19/8/08. </p>
        
        <p>Russell Maier, Ani Himawati, <i>The Rise of the Regenerative Ecobrick Movement</i>, (Le Havre University: Bandung Spirit Conference, 2019).</p>
        
        <p>Susan Freinkel, <i>Plastic: A Toxic Love Story</i>, (Houghton Mifflin Publishing Company, 2011), p7.  </p>
        
        <p>Carmen Nobel, <i>How Cellophane Changed the Way We Shop for Food</i>, (Harvard Business School, 2017).</p>
         
        <p><i>Beyond Storms & Droughts: The Psychological Impacts of Climate</i> (American Psychologists Association, 2014). </p> 
        
         <p><i>Mental Health and Our Changing Climate: Impacts, Implications, and Guidance  </i>(American Psychologists Association, 2017).</p>
        
        <p>David Beerling, (2007) <i>The Emerald Planet, Oxford University Press</i></p>
        
	<p>Rutger Bergman, <i>Humankind: A Hopeful History</i>, (Little, Brown and Company, 2019).</p>
        
        <p>Dobyns, Henry F., An Appraisal of Techniques with a New Hemispheric Estimate, (Current Anthropology, 1966) Issue 7, no. 4 : p395???416. </p>
        
        <p>Charles C. Man, <i>1491</i>, (Vintage Publishing, 2006).</p>
        
        <p>C. Ballard, <i>The Salmon Weir on Green River in Western Washington</i>, (Davidson Journal of Anthropology, 1957) Vol. 3 No. 1, Summer, pp. 37-54.</p>
        
        <p>George Vancouver, <i>A Voyage of Discovery to the North Pacific Ocean, and Round the World</i>, vol. 2 (London: G. G. and J. Robinson, Paternoster-Row; and J. Edwards, Pall-Mall, 1798), 220???28, 288???89. Chapter 4, 2nd of May 1792</p>
        
        <p>Gabriel Popkin, <i>Forest Gardens Show how native land stewardship can outdo nature,</i> (National Geographic: 2021)</p>
        
        <p>Campbell, S. K., and V. L. Butler, <i>Archaeological Evidence for Resilience of Pacific Northwest Salmon Populations and the Socioecological System over the last ~7,500 years</i>, (Ecology & Science, 2021) Vol. 15, No. 1, Art. 17</p>
        
        <p>A. Groesbeck AS, Rowell K, Lepofsky D, Salomon AK, <i>Ancient Clam Gardens Increased Shellfish Production: Adaptive Strategies from the Past Can Inform Food Security Today</i>, (PLoS ONE, 2014) 9(3): e91235.</p>
        
	<p> David Graeber, David Wengrow, <i>The Dawn of Everything: A New History of Humanity</i>, (Signal Publishing, 2021).</p>
        
	<p>Jack D. Forbes, <i>Indigenous Americans: Spirituality and Ecos</i>, (D??dalus, 2021).</p>
        
        <p>Enrique Salm??n, <i>Kincentric Ecology: Indigenous Perceptions of the Human-Nature Relationship</i>, Ecological Applications, (Ecological Society of America, Oct., 2000)  Vol. 10, No. 5, pp. 1327-1332.</p>
        
	<p>Berkes, F., <i>Sacred Ecolog</i>. Third edition. ??(New York: Routledge 2012) Chapter 5, p.105.</p>

        <p>Carolyn Merchant, <i>The Death of Nature: Women, Ecology and the Scientific Revolution</i>, (Harper & Row, 1980).</p>
        
        <p>Theodore Hieber, <i>Retranslating Genesis 1???2: Reconnecting Biblical Thought and Contemporary Experience</i> (Sage Journals, 2019) Vol 70, Issue 3.</p>
       
	
	<p>Timothy Morton, Ecology without Nature: Rethinking Environmental Aesthetics, (Harvard University Press, (2007).</p> 	
        
       <p>Seline Meijer, People and nature blur in the world's indigenous languages, (IUCN: Planet at the Crossroads, 2017).</p>
        
        <p>Thomas Hutton, <i>A Theory of the Earth</i>, Royal Society of Edinburgh, (Transactions of the Royal Society of Edinburgh, 1788) Vol. 1.</p>

     </p>
     <br><br>

  
    </div><!--closes page text content-->

          
  </div><!--Closes main content block-->

  <!--Footer Next Chapter Section: Requires customization-->
  <div id="footer-chapter" style="margin-bottom: 0px;">

    <div class="footer-size">
    
      <div class="footer-left">

        <div id="footer-icon-left" style="cursor:pointer;" onclick="openFooter()"></div>
    
     
        <div class="next-section">
            <div class="next-sec">Next:</div>
            <div class="sec-name"><i>Glossary</i></div>
        </div>

      </div>
    

      <div class="footer-right">
    
        <a href="glossary.php"><div class="next-button">Next ???</div></a>

      </div>
    </div>
  </div>

  <?php require_once ("includes/chap-footer.php");?>



</body>
</html>

