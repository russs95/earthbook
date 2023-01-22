
              <?php   
   
// search query   
$search = $_GET[ "search" ];   
   
// number of previously loaded results   
$offset = $_GET[ "loaded" ];   
   
// declare database credentials   
$host = "localhost";   
$user = "ecobricks_earthbook";   
$password = "ayyewhhh";   
$dbName = "ecobricks_tractatus";   
   
// connect to database   
$con = new mysqli( $localhost, $ecobricks_earthbook, $ayyew, $ecobricks_tractatus );   
   
// query the database, limiting results to 10 at a time starting from last loaded result   
$sql = 'SELECT * FROM post WHERE MATCH( title, description, keywords ) AGAINST( "' . $search . '" ) LIMIT ' . $offset . ', 10;';   
$result = $con->query( $sql );   
   
// declare array variable to store results   
$output = array();   
   
if( $result->num_rows > 0 ) {   
    while( $row = $result->fetch_assoc() ){   
        // add row to output array in the form of an associative array   
        $output[] = array( "title" => $row[ "title" ], "description" => $row[ "description" ], "url" => $row[ "url" ] );   
    }   
}   
$con->close();   
   
// convert to JSON and output   
echo( json_encode( $output ) );   
   
?>
