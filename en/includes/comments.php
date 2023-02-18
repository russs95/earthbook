
<div id="bottom-comments-overlay" class="comments-overlay">

<div id="right-close-button2">
    <span style="cursor:pointer" onclick="closeComments()"><img src="../svgs/right-x.svg" alt="Close page button"></span>
</div>
  <div class="comments-overlay-content" >
  <h6><?php echo $page_title; ?></h6>
        
        <?php
$cmtx_identifier = '<?php echo $page_number; ?>';
$cmtx_reference  = '<?php echo $name; ?>';
$cmtx_folder     = '/comments/';
require($_SERVER['DOCUMENT_ROOT'] . $cmtx_folder . '/frontend/index.php');
?>

</div>
</div>  