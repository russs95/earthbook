

<html>
    <head>
    <title>The Salmon's Spin | Tratatus Ayyew - Earthbook</title>
</head>
<body>
<!-- Later in the page, you can print the title wherever you want -->


<?php
   function page_title($url) {
    $page = file_get_contents($url);
    if ($page===false) {
        echo "Failed to retrieve $url";
    }
    if (preg_match('~<h1 class="page-title">(.*?)<\/h1>~is', $page, $matches)) {
        return strip_tags($matches[0]);
    }
}
?>


</body>
</html>