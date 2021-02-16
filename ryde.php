<?php
//$env = getenv("mysql://bd647197a172ad:a5f7622f@us-cdbr-iron-east-05.cleardb.net/heroku_8995ffa5c160baf?reconnect=true");
$url = parse_url("mysql://bd647197a172ad:a5f7622f@us-cdbr-iron-east-05.cleardb.net/heroku_8995ffa5c160baf?reconnect=true");
$server = $url["host"];
$username = $url["user"];
$password = $url["pass"];
$dbname = substr($url["path"], 1);

$conn = new mysqli($server, $username, $password, $dbname);
mysqli_select_db($dbname);
if ($conn->connect_error) {
 
    die("Connection failed: " . $conn->connect_error);
   } 
    
   $sql = "SELECT * FROM taxis";
    
   $result = $conn->query($sql);
    
   if ($result->num_rows >0) {
    
    
    while($row[] = $result->fetch_assoc()) {
    
    $tem = $row;
    
    $json = json_encode($tem);
    
    
    }
    
   } else {
    echo "No Results Found.";
   }
    echo $json;
   $conn->close();
?>