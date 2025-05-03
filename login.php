<?php
include 'login_register_db.php';

$error = '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $conn->real_escape_string($_POST['email']);
    $password = $_POST['password'];
    
    // Validation
    if (empty($email) || empty($password)) {
        $error = "Both fields are required";
    } else {
        // Check if user exists in saree_store/details table
        $sql = "SELECT * FROM saree_store.details WHERE email='$email'";
        $result = $conn->query($sql);
        
        if ($result->num_rows > 0) {
            $user = $result->fetch_assoc();
            
            // Verify the password against the hashed password in database
            if (password_verify($password, $user['password'])) {
                session_start();
                $_SESSION['user_email'] = $email;
                $_SESSION['user_id'] = $user['id']; // Store user ID in session if needed
                header("Location: index.php");
                exit();
            } else {
                $error = "Invalid email or password";
            }
        } else {
            $error = "Email not registered";
        }
    }
    
    $conn->close();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Saree Store</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #6d28d9;
            --primary-dark: #5b21b6;
            --error: #ef4444;
            --success: #10b981;
            --text: #374151;
            --light-gray: #f3f4f6;
            --white: #ffffff;
            --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body {
            font-family: 'Poppins', sans-serif;
            background-color: var(--light-gray);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
            background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            color: var(--text);
        }
        
        .auth-container {
            background-color: var(--white);
            border-radius: 12px;
            box-shadow: var(--shadow);
            padding: 2.5rem;
            width: 100%;
            max-width: 450px;
            animation: fadeIn 0.5s ease-in-out;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .auth-title {
            font-size: 1.8rem;
            font-weight: 600;
            color: var(--primary);
            margin-bottom: 1.5rem;
            text-align: center;
        }
        
        .form-group {
            margin-bottom: 1.5rem;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
        }
        
        .form-group input {
            width: 100%;
            padding: 0.8rem 1rem;
            border: 1px solid #d1d5db;
            border-radius: 8px;
            font-size: 1rem;
            transition: border-color 0.3s, box-shadow 0.3s;
        }
        
        .form-group input:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(109, 40, 217, 0.1);
        }
        
        .error-message {
            color: var(--error);
            font-size: 0.875rem;
            margin-top: 0.25rem;
            height: 1rem;
        }
        
        .auth-button {
            width: 100%;
            padding: 0.9rem;
            background-color: var(--primary);
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.3s;
            margin-top: 0.5rem;
        }
        
        .auth-button:hover {
            background-color: var(--primary-dark);
        }
        
        .auth-links {
            display: flex;
            justify-content: space-between;
            margin-top: 1.5rem;
            font-size: 0.875rem;
        }
        
        .auth-links a {
            color: var(--primary);
            text-decoration: none;
            transition: color 0.3s;
        }
        
        .auth-links a:hover {
            color: var(--primary-dark);
            text-decoration: underline;
        }
        
        .register-link {
            text-align: right;
        }
    </style>
</head>
<body>
    <div class="auth-container">
        <h1 class="auth-title">Welcome Back</h1>
        
        <?php if ($error): ?>
            <div class="error-message" style="text-align: center; margin-bottom: 1.5rem; color: var(--error);"><?php echo $error; ?></div>
        <?php endif; ?>
        
        <form id="loginForm" method="POST" action="login.php">
            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" required value="<?php echo isset($_POST['email']) ? htmlspecialchars($_POST['email']) : ''; ?>">
                <div id="emailError" class="error-message"></div>
            </div>
            
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required>
                <div id="passwordError" class="error-message"></div>
            </div>
            
            <button type="submit" class="auth-button">Sign In</button>
        </form>
        
        <div class="auth-links">
            <div class="back-link">
                <a href="index.php">← Back to Home</a>
            </div>
            <div class="register-link">
                Don't have an account? <a href="register.php">Sign Up</a>
            </div>
        </div>
    </div>

    <script>
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            // Clear previous errors
            document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            let isValid = true;
            
            if (!email) {
                document.getElementById('emailError').textContent = 'Please enter your email';
                isValid = false;
            } else if (!/^\S+@\S+\.\S+$/.test(email)) {
                document.getElementById('emailError').textContent = 'Please enter a valid email';
                isValid = false;
            }
            
            if (!password) {
                document.getElementById('passwordError').textContent = 'Please enter your password';
                isValid = false;
            } else if (password.length < 6) {
                document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
                isValid = false;
            }
            
            if (!isValid) {
                e.preventDefault();
            }
        });
    </script>
</body>
</html>