
<?php   
   
// search query   
$search = $_GET[ "search" ];   
   
// number of previously loaded results   
$offset = $_GET[ "loaded" ];   
   
// declare database credentials   
$host = "localhost:3306";   
$user = "ecobricks_earthbook";   
$password = "ayyew";   
$dbName = "ecobricks_tractatus";   
   
// connect to database   
$con = new mysqli( $host, $user, $password, $dbName );  



if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the search query and loaded results from the URL
$search = isset($_GET['search']) ? $_GET['search'] : '';
$loaded = isset($_GET['loaded']) ? $_GET['loaded'] : 0;

// Set the number of results per page
$resultsPerPage = 10;

// Prepare the SQL query to search both titleIndex and keywordsIndex columns
$sql = "SELECT * FROM your_table_name WHERE titleIndex LIKE ? OR keywordsIndex LIKE ? LIMIT ?, ?";

$stmt = $conn->prepare($sql);
$searchParam = "%" . $search . "%";
$stmt->bind_param("ssii", $searchParam, $searchParam, $loaded, $resultsPerPage);

$stmt->execute();
$result = $stmt->get_result();

// Fetch results and output them as JSON
$output = array();
while ($row = $result->fetch_assoc()) {
    $output[] = $row;
}

echo json_encode($output);

$stmt->close();
$conn->close();
?>


