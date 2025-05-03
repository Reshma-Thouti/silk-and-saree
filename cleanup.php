<?php
include 'login_register_db.php';

echo "<h2>Starting Database Cleanup</h2>";

// 1. Create backup table (safety first)
echo "<p>Creating backup table...</p>";
if ($conn->query("CREATE TABLE IF NOT EXISTS saree_store.details_backup AS SELECT * FROM saree_store.details")) {
    echo "<p style='color:green'>✓ Backup created: saree_store.details_backup</p>";
} else {
    echo "<p style='color:red'>✗ Backup failed: " . $conn->error . "</p>";
    exit;
}

// 2. Create temporary table with unique emails
echo "<p>Creating temporary table with unique entries...</p>";
$sql = "CREATE TABLE saree_store.temp_details AS 
        SELECT MIN(id) as id, fullname, email, password 
        FROM saree_store.details 
        GROUP BY email";

if ($conn->query($sql)) {
    $count = $conn->query("SELECT COUNT(*) FROM saree_store.temp_details")->fetch_row()[0];
    echo "<p style='color:green'>✓ Temporary table created with $count unique entries</p>";
} else {
    echo "<p style='color:red'>✗ Temp table creation failed: " . $conn->error . "</p>";
    exit;
}

// 3. Drop original table
echo "<p>Dropping original table...</p>";
if ($conn->query("DROP TABLE saree_store.details")) {
    echo "<p style='color:green'>✓ Original table dropped</p>";
} else {
    echo "<p style='color:red'>✗ Failed to drop original table: " . $conn->error . "</p>";
    exit;
}

// 4. Rename temporary table
echo "<p>Renaming temporary table...</p>";
if ($conn->query("RENAME TABLE saree_store.temp_details TO saree_store.details")) {
    echo "<p style='color:green'>✓ Table renamed successfully</p>";
} else {
    echo "<p style='color:red'>✗ Rename failed: " . $conn->error . "</p>";
    exit;
}

// 5. Add constraints
echo "<p>Adding constraints...</p>";
$alterSql = [
    "ALTER TABLE saree_store.details ADD PRIMARY KEY (id)",
    "ALTER TABLE saree_store.details MODIFY id INT AUTO_INCREMENT",
    "ALTER TABLE saree_store.details ADD CONSTRAINT unique_email UNIQUE (email)"
];

foreach ($alterSql as $sql) {
    if ($conn->query($sql)) {
        echo "<p style='color:green'>✓ Success: " . htmlspecialchars($sql) . "</p>";
    } else {
        echo "<p style='color:red'>✗ Failed: " . htmlspecialchars($sql) . " - " . $conn->error . "</p>";
    }
}

// Verification
echo "<h3>Verification</h3>";
$result = $conn->query("SELECT email, COUNT(*) as count FROM saree_store.details GROUP BY email HAVING count > 1");
if ($result->num_rows > 0) {
    echo "<p style='color:red'>✗ Verification failed - duplicates still exist</p>";
} else {
    echo "<p style='color:green'>✓ Verification passed - no duplicate emails found</p>";
}

$conn->close();
echo "<h2 style='color:green'>Cleanup Complete!</h2>";
?>