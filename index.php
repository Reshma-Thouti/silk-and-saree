
<!DOCTYPE html>
<!-- Your existing index.html content -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Silk & Style - Premium Sarees</title>
    <link rel="stylesheet" href="sty1.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Top Bar -->
    <div class="top-bar">
        <div class="container">
            <div class="top-bar-content">
                <div class="shipping-info">
                    <i class="fas fa-truck"></i> Pick up your favourites
                </div>
                <div class="top-links">
                    <a href="#"><i class="fas fa-phone-alt"></i> +91 6309556714</a>
                    <a href="#"><i class="fas fa-envelope"></i> shopat@silkandstyle.com</a>
                </div>
            </div>
        </div>
    </div>

    <!-- Header -->
    <header class="elegant-header">
        <div class="container">
            <nav class="main-nav">
                <div class="logo">
                    <h1>Silk & Style</h1>
                    <p>Traditional Elegance, Modern Fashion</p>
                </div>
                
                <div class="search-bar">
                    <input type="text" placeholder="Search sarees..." id="search-input">
                    <button id="search-btn"><i class="fas fa-search"></i></button>
                </div>
                
                <ul class="nav-links">
                    <li class="mega-menu-trigger"><a href="#home">Home</a></li>
                    <li class="mega-menu-trigger">
                        <a href="#products">Products <i class="fas fa-chevron-down"></i></a>
                        <div class="mega-menu">
                            <div class="mega-menu-content">
                                <div class="mega-menu-column">
                                    <h4>By Fabric</h4>
                                    <ul>
                                        <li><a href="silk.html">Silk Sarees</a></li>
                                        <li><a href="cotton.html">Cotton Sarees</a></li>
                                        <li><a href="banaras.html">Banarasi Sarees</a></li>
                                        <li><a href="bridal.html">Bridal Sarees</a></li>
                                        
                                    </ul>
                                </div>
                                <div class="mega-menu-column">
                                    <h4>By Occasion</h4>
                                    <ul>
                                        <li><a href="#">Wedding Sarees</a></li>
                                        <li><a href="#">Party Wear</a></li>
                                        <li><a href="#">Festive Wear</a></li>
                                    </ul>
                                </div>
                               
                                <div class="mega-menu-column">
                                    <h4>Featured</h4>
                                    <div class="featured-product">
                                       
                                        <a href="customization.html" class="btn-small">Own<br>Customization</a>
					<a href="design.html" class="btn-small">Your Designs</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li class="account-dropdown">
                        <a href="#account"><i class="far fa-user"></i> Account <i class="fas fa-chevron-down"></i></a>
                        <div class="dropdown-content">
                            <a href="http://localhost/myproject/login.php" id="login-btn">Login</a>
                            <a href="http://localhost/myproject/register.php" id="register-btn">Register</a>
                            <a href="wishlist.html">Wishlist</a>
                        </div>
                        
                       
                        
                    </li>
                    <li>
                        <a href="wishlist.html" id="wishlist-icon">wishlist</a>
                            <i class="far fa-heart"></i>
                            
                        </a>
                    </li>
                    <li>
                        <a href="cart.html" id="cart-icon">cart</a>
                            <i class="fas fa-shopping-cart"></i>
                            
                        </a>
                    </li>
                </ul>
                
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="minimal-hero" id="home">
        <div class="container">
            <div class="hero-content">
                <h2>Experience timeless elegance with drapes handcrafted for the 'Beautiful' YOU.</h2>
                <p>Discover our exclusive collection of handwoven sarees from across India</p>
                <a onclick="window.location.href='Explore.html'" class="explore-btn">Explore Now</a>
            </div>
        </div>
    </section>

    <!-- Main Content -->
    <main>
        <!-- Categories Section -->
        <section class="categories-section">
            <div class="container">
                <div class="section-header">
                    <h2>Shop By Category</h2>
                    <p>Browse our carefully curated collections</p>
                </div>
                <div class="categories-grid">
                    <div class="category-card">
                        <img src="Images\img5.jpg" alt="Silk Sarees">
                        <div class="category-overlay">
                            <h3>Silk Sarees</h3>
                            <a href="silk.html" class="btn-small">View Collection</a>
                        </div>
                    </div>
                    <div class="category-card">
                        
                        <img src="Images\img2.jpg" alt="Cotton Sarees">
                        <div class="category-overlay">
                            <h3>Cotton Sarees</h3>
                            <a href="cotton.html" class="btn-small">View Collection</a>
                        </div>
                    </div>
                    <div class="category-card">
                        <img src="Images\img3.jpg" alt="Banarasi Sarees">
                        <div class="category-overlay">
                            <h3>Banarasi Sarees</h3>
                            <a href="banaras.html" class="btn-small">View Collection</a>
                        </div>
                    </div>
                    <div class="category-card">
                        <img src="Images\img4.jpg" alt="Bridal Sarees">
                        <div class="category-overlay">
                            <h3>Bridal Sarees</h3>
                            <a href="bridal.html" class="btn-small">View Collection</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Products Section -->
        <section class="products-section" id="products">
            <div class="container">
                <div class="section-header">
                    <h2>Our Featured Products</h2>
                    <p>Handpicked sarees from master weavers</p>
                </div>
                
                <div class="product-filters">
                    <div class="filter-group">
                        <button class="filter-btn active" data-filter="all">All</button>
                        <button class="filter-btn" onclick="window.location.href='silk.html'" data-filter="silk">Silk</button>
                        <button class="filter-btn" onclick="window.location.href='cotton.html'" data-filter="cotton">Cotton</button>
                        <button class="filter-btn"  onclick="window.location.href='banaras.html '" data-filter="banarasi">Banarasi</button>
                        <button class="filter-btn" onclick="window.location.href='bridal.html'" data-filter="bridal">Bridal</button>
                    </div>
                    <div class="sort-options">
                        <label for="sort-by">Sort by:</label>
                        <select id="sort-by">
                            <option value="default">Default</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="popular">Most Popular</option>
                            <option value="newest">Newest First</option>
                        </select>
                    </div>
                </div>
                
                <div class="product-grid" id="product-container">
                    <!-- Products will be loaded here by JavaScript -->
                </div>
                
                <div class="load-more">
                    <button id="load-more-btn" class="btn">Load More</button>
                </div>
            </div>
        </section>

        <!-- Special Offer Banner -->
        <section class="offer-banner">
            <div class="container">
                <div class="offer-content">
                    <h3>Summer Special Offer</h3>
                    <h2>Get 20% Off on All Cotton Sarees</h2>
                    <p>Use code: <span>COTTON20</span> at checkout</p>
                    <a href="#" class="btn">Shop Now</a>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section class="testimonials-section">
            <div class="container">
                <div class="section-header">
                    <h2>What Our Customers Say</h2>
                    <p>Trusted by thousands of saree lovers</p>
                </div>
                
                <div class="testimonials-grid">
                    <div class="testimonial-card">
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <p class="testimonial-text">"The silk saree I bought is absolutely gorgeous! The quality exceeded my expectations and the delivery was super fast."</p>
                        <div class="customer-info">
                            <img src="https://randomuser.me/api/portraits/women/43.jpg" alt="Priya Sharma">
                            <div>
                                <h4>Priya Sharma</h4>
                                <p>Delhi</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="testimonial-card">
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        <p class="testimonial-text">"Excellent customer service and fast delivery. The packaging was beautiful and the saree was exactly as shown in the pictures."</p>
                        <div class="customer-info">
                            <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Anjali Patel">
                            <div>
                                <h4>Anjali Patel</h4>
                                <p>Mumbai</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="testimonial-card">
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <p class="testimonial-text">"I've ordered multiple sarees from Silk & Style and each one has been perfect. Their collection is amazing and prices are reasonable."</p>
                        <div class="customer-info">
                            <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Riya Gupta">
                            <div>
                                <h4>Riya Gupta</h4>
                                <p>Bangalore</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Newsletter Section -->
        <section class="newsletter-section">
            <div class="container">
                <div class="newsletter-content">
                    <div class="newsletter-text">
                        <h3>Subscribe to Our Newsletter</h3>
                        <p>Get updates on new collections, exclusive offers and saree styling tips</p>
                    </div>
                    <div class="newsletter-form">
                        <input type="email" placeholder="Your email address">
                        <button class="btn">Subscribe</button>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-grid">
                <div class="footer-column">
                    <h3>Silk & Style</h3>
                    <p>Traditional Elegance, Modern Fashion</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-pinterest-p"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                
                <div class="footer-column">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                
                <div class="footer-column">
                    <h4>Customer Service</h4>
                    <ul>
                        <li><a href="#">Shipping Policy</a></li>
                        <li><a href="#">Return Policy</a></li>
                        <li><a href="#">Size Guide</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Track Order</a></li>
                    </ul>
                </div>
                
                <div class="footer-column">
                    <h4>Contact Us</h4>
                    <ul class="contact-info">
                        <li><i class="fas fa-map-marker-alt"></i> 123 Saree Street, Mumbai, India</li>
                        <li><i class="fas fa-phone-alt"></i> +91 9876543210</li>
                        <li><i class="fas fa-envelope"></i> info@silkandstyle.com</li>
                    </ul>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2023 Silk & Style. All Rights Reserved.</p>
                <div class="payment-methods">
                    <img src="https://via.placeholder.com/40x25?text=Visa" alt="Visa">
                    <img src="https://via.placeholder.com/40x25?text=MC" alt="Mastercard">
                    <img src="https://via.placeholder.com/40x25?text=PayPal" alt="PayPal">
                    <img src="https://via.placeholder.com/40x25?text=UPI" alt="UPI">
                </div>
            </div>
        </div>
    </footer>

    <!-- Back to Top Button -->
    <button id="back-to-top" title="Go to top"><i class="fas fa-arrow-up"></i></button>

    <!-- Login Modal -->
    <div id="login-modal" class="modal">
        <div class="modal-content auth-modal">
            <span class="close">&times;</span>
            <h2>Login to Your Account</h2>
            <form id="login-form">
                <div class="form-group">
                    <label for="login-email">Email</label>
                    <input type="email" id="login-email" required>
                </div>
                <div class="form-group">
                    <label for="login-password">Password</label>
                    <input type="password" id="login-password" required>
                </div>
                <div class="form-options">
                    <label>
                        <input type="checkbox"> Remember me
                    </label>
                    <a href="#" class="forgot-password">Forgot password?</a>
                </div>
                <button type="submit" class="btn">Login</button>
                <p class="auth-switch">Don't have an account? <a href="#" id="switch-to-register">Register</a></p>
            </form>
            <div class="social-login">
                <p>Or login with</p>
                <div class="social-buttons">
                    <button class="social-btn google"><i class="fab fa-google"></i> Google</button>
                    <button class="social-btn facebook"><i class="fab fa-facebook-f"></i> Facebook</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Register Modal -->
    <div id="register-modal" class="modal">
        <div class="modal-content auth-modal">
            <span class="close">&times;</span>
            <h2>Create an Account</h2>
            <form id="register-form">
                <div class="form-group">
                    <label for="register-name">Full Name</label>
                    <input type="text" id="register-name" required>
                </div>
                <div class="form-group">
                    <label for="register-email">Email</label>
                    <input type="email" id="register-email" required>
                </div>
                <div class="form-group">
                    <label for="register-password">Password</label>
                    <input type="password" id="register-password" required>
                </div>
                <div class="form-group">
                    <label for="register-confirm-password">Confirm Password</label>
                    <input type="password" id="register-confirm-password" required>
                </div>
                <div class="form-group">
                    <label>
                        <input type="checkbox" required> I agree to the <a href="#">Terms & Conditions</a>
                    </label>
                </div>
                <button type="submit" class="btn">Register</button>
                <p class="auth-switch">Already have an account? <a href="#" id="switch-to-login">Login</a></p>
            </form>
        </div>
    </div>

    <!-- Quick View Modal -->
    <div id="quick-view-modal" class="modal">
        <div class="modal-content quick-view-modal">
            <span class="close">&times;</span>
            <div class="quick-view-content" id="quick-view-content">
                <!-- Content will be loaded by JavaScript -->
            </div>
        </div>
    </div>

    <!-- Cart Modal -->
    <div id="cart-modal" class="modal">
        <div class="modal-content cart-modal">
            <span class="close">&times;</span>
            <h2>Your Shopping Cart</h2>
            <div id="cart-items">
                <!-- Cart items will be loaded here -->
                <p id="empty-cart-message">Your cart is empty</p>
            </div>
            <div class="cart-total">
                <div class="cart-summary">
                    <div class="summary-row">
                        <span>Subtotal:</span>
                        <span id="cart-subtotal">₹0</span>
                    </div>
                    <div class="summary-row">
                        <span>Shipping:</span>
                        <span id="cart-shipping">Calculated at checkout</span>
                    </div>
                    <div class="summary-row total">
                        <span>Total:</span>
                        <span id="cart-total">₹0</span>
                    </div>
                </div>
                <button id="checkout-btn" class="btn">Proceed to Checkout</button>
                <a href="#" class="continue-shopping">Continue Shopping</a>
            </div>
        </div>
    </div>

    <!-- Loading Spinner -->
    <div class="loading-spinner" id="loading-spinner">
        <div class="spinner"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>

<!-- Login Modal -->
<div id="login-modal" class="modal">
    <div class="modal-content auth-modal">
        <span class="close">&times;</span>
        <h2>Login to Your Account</h2>
        <form id="login-form">
            <div class="form-group">
                <label for="login-email">Email</label>
                <input type="email" id="login-email" required>
                <div class="error-message" id="login-email-error"></div>
            </div>
            <div class="form-group">
                <label for="login-password">Password</label>
                <input type="password" id="login-password" required>
                <div class="error-message" id="login-password-error"></div>
            </div>
            <div class="form-options">
                <label>
                    <input type="checkbox" id="remember-me"> Remember me
                </label>
                <a href="#" class="forgot-password" id="forgot-password">Forgot password?</a>
            </div>
            <button type="submit" class="btn">Login</button>
            <p class="auth-switch">Don't have an account? <a href="#" id="switch-to-register">Register</a></p>
        </form>
        <div class="social-login">
            <p>Or login with</p>
            <div class="social-buttons">
                <button type="button" class="social-btn google"><i class="fab fa-google"></i> Google</button>
                <button type="button" class="social-btn facebook"><i class="fab fa-facebook-f"></i> Facebook</button>
            </div>
        </div>
    </div>
</div>

<!-- Register Modal -->
<div id="register-modal" class="modal">
    <div class="modal-content auth-modal">
        <span class="close">&times;</span>
        <h2>Create an Account</h2>
        <form id="register-form">
            <div class="form-group">
                <label for="register-name">Full Name</label>
                <input type="text" id="register-name" required>
                <div class="error-message" id="register-name-error"></div>
            </div>
            <div class="form-group">
                <label for="register-email">Email</label>
                <input type="email" id="register-email" required>
                <div class="error-message" id="register-email-error"></div>
            </div>
            <div class="form-group">
                <label for="register-password">Password</label>
                <input type="password" id="register-password" required>
                <div class="error-message" id="register-password-error"></div>
                <div class="password-strength">
                    <span class="strength-bar"></span>
                    <span class="strength-bar"></span>
                    <span class="strength-bar"></span>
                    <span class="strength-text"></span>
                </div>
            </div>
            <div class="form-group">
                <label for="register-confirm-password">Confirm Password</label>
                <input type="password" id="register-confirm-password" required>
                <div class="error-message" id="register-confirm-password-error"></div>
            </div>
            <div class="form-group">
                <label>
                    <input type="checkbox" id="agree-terms" required> I agree to the <a href="#">Terms & Conditions</a>
                </label>
                <div class="error-message" id="agree-terms-error"></div>
            </div>
            <button type="submit" class="btn">Register</button>
            <p class="auth-switch">Already have an account? <a href="#" id="switch-to-login">Login</a></p>
        </form>
    </div>
</div>

<!-- Forgot Password Modal -->
<div id="forgot-password-modal" class="modal">
    <div class="modal-content auth-modal">
        <span class="close">&times;</span>
        <h2>Reset Your Password</h2>
        <form id="forgot-password-form">
            <div class="form-group">
                <label for="forgot-email">Email</label>
                <input type="email" id="forgot-email" required>
                <div class="error-message" id="forgot-email-error"></div>
            </div>
            <button type="submit" class="btn">Send Reset Link</button>
            <p class="auth-switch">Remember your password? <a href="#" id="switch-to-login-from-forgot">Login</a></p>
        </form>
    </div>
</div>

<!-- Success Message (hidden by default) -->
<div id="auth-success-message" class="auth-success-message">
    <div class="success-content">
        <i class="fas fa-check-circle"></i>
        <h3 id="success-title">Success!</h3>
        <p id="success-message"></p>
        <button class="btn" id="success-ok-btn">OK</button>
        <script src="script.js"></script>
    </div>
</div>