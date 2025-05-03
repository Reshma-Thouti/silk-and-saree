<?php
$host = "localhost";
$username = "root";
$password = "";
$database = "saree_store";

// Enable error reporting (only for development)
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Optional: echo connection success (only for testing)
echo "Connected successfully";
?>
