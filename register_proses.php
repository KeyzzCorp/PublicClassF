<?php

session_start();

$nama = $_POST['nama'];
$username = $_POST['username'];
$password = $_POST['password'];

$db = new mysqli("localhost", "username", "password", "database_name");

$query = "SELECT * FROM users WHERE username = '$username'";
$result = $db->query($query);

if ($result->num_rows > 0) {
    echo "Username sudah ada!";
    exit;
}

$query = "INSERT INTO users (nama, username, password) VALUES ('$nama', '$username', '$password')";
$db->query($query);

if ($db->affected_rows > 0) {
    echo "User berhasil didaftarkan!";
} else {
    echo "Gagal mendaftarkan user!";
}

$db->close();
