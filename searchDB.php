<?php

// search query
$search = $_GET["search"];

// number of previously loaded results
$offset = $_GET["loaded"];

// declare database credentials
$host = "localhost:3306";
$user = "ecobricks_earthbook";
$password = "ayyew";
$dbName = "ecobricks_tractatus";

// connect to database
$con = new mysqli($host, $user, $password, $dbName);

// query the database, limiting results to 10 at a time starting from last loaded result
$sql = 'SELECT title, chap_description, keywords, url, language, chapter, book, words, image_url FROM post WHERE MATCH( title, chap_description, keywords ) AGAINST( ? IN BOOLEAN MODE ) LIMIT ?, 10;';
$stmt = $con->prepare($sql);
$stmt->bind_param("si", $search, $offset);
$stmt->execute();

$result = $stmt->get_result();

// declare array variable to store results
$output = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        // add row to output array in the form of an associative array
        $output[] = array("title" => $row["title"], "chap_description" => $row["chap_description"], "keywords" => $row["keywords"], "url" => $row["url"], "language" => $row["language"], "chapter" => $row["chapter"], "book" => $row["book"], "words" => $row["words"], "image_url" => $row["image_url"]);
    }
}

$stmt->close();
$con->close();

// convert to JSON and output
echo(json_encode($output));

?>
