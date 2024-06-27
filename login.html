<?php
session_start();
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = md5($_POST['password']);
    $sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
    $result = $conn->query($sql);
    
    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['username'];
        $_SESSION['level'] = $user['level'];

        $user_id = $user['id'];
        $ip_address = $_SERVER['REMOTE_ADDR'];
        $conn->query("INSERT INTO login_logs (user_id, ip_address) VALUES ('$user_id', '$ip_address')");

        header("Location: index.php");
    } else {
        $error = "Username or password is incorrect.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - User</title>
    <link rel="stylesheet" href="styles2.css">
</head>
<body>
    <div class="container">
        <h1>Login Pengguna</h1>
        <?php if (isset($error)) { echo "<p>$error</p>"; } ?>
        <form method="post">
            <input type="text" name="username" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit">Login</button>
        </form>
        <div class="create-account">
            <a href="#">Create Account</a>
        </div>
        <div class="help">
            <a href="#">Need Help?</a>
        </div>
    </div>
</body>
</html>
