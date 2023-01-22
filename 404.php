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

<title>Page not found | Tratatus Ayyew - Earthbook</title>
<meta name="keywords" content="Salmon, spin, energy, inwards, for-profit, not-for-profit, earth enterprise, for Earth, Earthen, Igorots, Ayyew, cycles that spiral, spiral design, linear vs circular, circular, green, energy, matter, Earthen ethics, five principles, Earthen principles, Earthen, cosmology, planetary character, Earth's character, "> 
<meta name="description" content="Sorry:  We couldn't find the specified page on the server.">


<meta name="twitter:label1" content="Est. reading time" />
<meta name="twitter:data1" content="1 minutes" /> 
	
<!-- Facebook Open Graph Tags for social sharing-->
<meta property="og:title"         content="Page not found | Tratatus Ayyew - Earthbook.">
<meta property="og:description"   content="Sorry:  We couldn't find the specified page on the server."/>

          
</head>

<!--MAIN HTML Begins-->

<BODY class="accessibility-plugin-ac" style="max-width:100%; overflow-x:hidden;">
<div id="underlayer">

  <a id="top"></a>
          
          
          

╔═══╗                          ╔╗      ╔═══╗              ╔╗
║╔═╗║                         ╔╝╚╗     ║╔══╝              ║║
║╚═╝║╔══╗ ╔══╗╔══╗    ╔═╗ ╔══╗╚╗╔╝     ║╚══╗╔══╗╔╗╔╗╔═╗ ╔═╝║
║╔══╝╚ ╗║ ║╔╗║║╔╗║    ║╔╗╗║╔╗║ ║║      ║╔══╝║╔╗║║║║║║╔╗╗║╔╗║
║║   ║╚╝╚╗║╚╝║║║═╣    ║║║║║╚╝║ ║╚╗    ╔╝╚╗  ║╚╝║║╚╝║║║║║║╚╝║
╚╝   ╚═══╝╚═╗║╚══╝    ╚╝╚╝╚══╝ ╚═╝    ╚══╝  ╚══╝╚══╝╚╝╚╝╚══╝
          ╔═╝║                                              
          ╚══╝                                              
              _v->#H#P? "':o<>\_
          .,dP` `''  "'-o.+H6&MMMHo_
        oHMH9'         `?&bHMHMMMMMMHo.
      oMP"' '           ooMP*#&HMMMMMMM?.
    ,M*          -     `*MSdob//`^&##MMMH\
   d*'                .,MMMMMMH#o>#ooMMMMMb
  HM-                :HMMMMMMMMMMMMMMM&HM[R\
 d"Z\.               9MMMMMMMMMMMMMMMMM[HMM|:
-H    -              MMMMMMMMMMMMMMMMMMMbMP' :
:??Mb#               `9MMMMMMMMMMMMMMMMMMH#! .
: MMMMH#,              "*""""`#HMMMMMMMMMMH  -
||MMMMMM6\.                    {MMMMMMMMMH'  :
:|MMMMMMMMMMHo                 `9MMMMMMMM'   .
. HMMMMMMMMMMP'                 !MMMMMMMM    `
- `#MMMMMMMMM                   HMMMMMMM*,/  :
 :  ?MMMMMMMF                   HMMMMMM',P' :
  .  HMMMMR'                    {MMMMP' ^' -
   : `HMMMT                     iMMH'     .'
    -.`HMH                               .
      -:*H                            . '
        -`\,,    .                  .-
          ' .  _                 .-`
              '`~\.__,obb#q==~'''
              
          </div>
          </body>
          </html>
