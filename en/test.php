<?php
    $page_title = "";
    $metatags = get_meta_tags("http://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']);
    if (isset($metatags['title'])) {
        $page_title = $metatags['title'];
    }
?>

<html>
    <head>
    <title>The Salmon's Spin | Tratatus Ayyew - Earthbook</title>
</head>
<body>
<!-- Later in the page, you can print the title wherever you want -->
<h1><?php echo $page_title; ?></h1>
</body>
</html>