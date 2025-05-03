document.addEventListener('DOMContentLoaded', function() {
    // Sample product data
    const products = [
        {
            id: 1,
            title: "Kanjivaram Silk Saree",
            price: 8999,
            originalPrice: 11999,
            image: "https://via.placeholder.com/300x400?text=Kanjivaram+Silk",
            images: [
                "https://via.placeholder.com/600x800?text=Kanjivaram+Silk+1",
                "https://via.placeholder.com/600x800?text=Kanjivaram+Silk+2",
                "https://via.placeholder.com/600x800?text=Kanjivaram+Silk+3"
            ],
            category: "silk",
            description: "Authentic Kanjivaram silk saree with golden zari work. Handwoven by master weavers from Tamil Nadu. Perfect for weddings and special occasions.",
            rating: 4.8,
            reviews: 124,
            inStock: true,
            isNew: true,
            colors: ["Red", "Green", "Gold"],
            sku: "KANJ-001"
        },
        {
            id: 2,
            title: "Banarasi Silk Saree",
            price: 12999,
            originalPrice: 15999,
            image: "https://via.placeholder.com/300x400?text=Banarasi+Silk",
            images: [
                "https://via.placeholder.com/600x800?text=Banarasi+Silk+1",
                "https://via.placeholder.com/600x800?text=Banarasi+Silk+2"
            ],
            category: "banarasi",
            description: "Traditional Banarasi silk saree with intricate designs and silver zari work. A timeless piece that adds grace to any occasion.",
            rating: 4.9,
            reviews: 89,
            inStock: true,
            isNew: false,
            colors: ["Blue", "Purple"],
            sku: "BANA-002"
        },
        {
            id: 3,
            title: "Cotton Printed Saree",
            price: 2499,
            image: "https://via.placeholder.com/300x400?text=Cotton+Printed",
            images: [
                "https://via.placeholder.com/600x800?text=Cotton+Printed+1",
                "https://via.placeholder.com/600x800?text=Cotton+Printed+2",
                "https://via.placeholder.com/600x800?text=Cotton+Printed+3",
                "https://via.placeholder.com/600x800?text=Cotton+Printed+4"
            ],
            category: "cotton",
            description: "Lightweight cotton saree with beautiful prints. Ideal for daily wear and casual occasions. Comfortable and easy to drape.",
            rating: 4.5,
            reviews: 210,
            inStock: true,
            isNew: true,
            colors: ["Yellow", "Pink", "White"],
            sku: "COTT-003"
        },
        {
            id: 4,
            title: "Bridal Silk Saree",
            price: 15999,
            originalPrice: 19999,
            image: "https://via.placeholder.com/300x400?text=Bridal+Silk",
            images: [
                "https://via.placeholder.com/600x800?text=Bridal+Silk+1"
            ],
            category: "bridal",
            description: "Exclusive bridal silk saree with heavy embroidery and gold zari work. A showstopper for your special day.",
            rating: 5.0,
            reviews: 56,
            inStock: true,
            isNew: false,
            colors: ["Red", "Maroon"],
            sku: "BRID-004"
        },
        {
            id: 5,
            title: "Chanderi Silk Saree",
            price: 7499,
            originalPrice: 8999,
            image: "https://via.placeholder.com/300x400?text=Chanderi+Silk",
            images: [
                "https://via.placeholder.com/600x800?text=Chanderi+Silk+1",
                "https://via.placeholder.com/600x800?text=Chanderi+Silk+2"
            ],
            category: "silk",
            description: "Elegant Chanderi silk saree with delicate patterns. Lightweight yet rich in texture, perfect for semi-formal occasions.",
            rating: 4.7,
            reviews: 78,
            inStock: true,
            isNew: true,
            colors: ["Peach", "Cream"],
            sku: "CHAN-005"
        },
        {
            id: 6,
            title: "Cotton Kanchipuram Saree",
            price: 3499,
            image: "https://via.placeholder.com/300x400?text=Cotton+Kanchipuram",
            images: [
                "https://via.placeholder.com/600x800?text=Cotton+Kanchipuram+1",
                "https://via.placeholder.com/600x800?text=Cotton+Kanchipuram+2"
            ],
            category: "cotton",
            description: "Traditional cotton Kanchipuram saree with border. Comfortable for daily wear with a traditional look.",
            rating: 4.3,
            reviews: 92,
            inStock: false,
            isNew: false,
            colors: ["Green", "Blue"],
            sku: "KANC-006"
        },
        {
            id: 7,
            title: "Banarasi Brocade Saree",
            price: 10999,
            originalPrice: 13999,
            image: "https://via.placeholder.com/300x400?text=Banarasi+Brocade",
            images: [
                "https://via.placeholder.com/600x800?text=Banarasi+Brocade+1",
                "https://via.placeholder.com/600x800?text=Banarasi+Brocade+2"
            ],
            category: "banarasi",
            description: "Luxurious Banarasi brocade saree with gold work. A regal piece that never goes out of style.",
            rating: 4.9,
            reviews: 67,
            inStock: true,
            isNew: false,
            colors: ["Purple", "Black"],
            sku: "BROC-007"
        },
        {
            id: 8,
            title: "Tussar Silk Saree",
            price: 6999,
            image: "https://via.placeholder.com/300x400?text=Tussar+Silk",
            images: [
                "https://via.placeholder.com/600x800?text=Tussar+Silk+1",
                "https://via.placeholder.com/600x800?text=Tussar+Silk+2"
            ],
            category: "silk",
            description: "Pure Tussar silk saree with ethnic motifs. The natural texture gives it a unique rustic elegance.",
            rating: 4.6,
            reviews: 115,
            inStock: true,
            isNew: true,
            colors: ["Orange", "Brown"],
            sku: "TUSS-008"
        }
    ];

    // DOM Elements
    const productContainer = document.getElementById('product-container');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const sortSelect = document.getElementById('sort-by');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const cartIcon = document.getElementById('cart-icon');
    const cartCount = document.getElementById('cart-count');
    const wishlistIcon = document.getElementById('wishlist-icon');
    const wishlistCount = document.getElementById('wishlist-count');
    const cartModal = document.getElementById('cart-modal');
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const quickViewModal = document.getElementById('quick-view-modal');
    const closeButtons = document.querySelectorAll('.close');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const checkoutBtn = document.getElementById('checkout-btn');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const switchToRegister = document.getElementById('switch-to-register');
    const switchToLogin = document.getElementById('switch-to-login');
    const backToTopBtn = document.getElementById('back-to-top');
    const loadingSpinner = document.getElementById('loading-spinner');

    // State
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    let displayedProducts = 8;
    let currentFilter = 'all';
    let currentSort = 'default';

    // Initialize the page
    function init() {
        renderProducts(products.slice(0, displayedProducts));
        updateCartCount();
        updateWishlistCount();
        setupEventListeners();
    }

    // Render products based on filter and sort
    function renderProducts(productsToRender) {
        // Clear existing products
        productContainer.innerHTML = '';
        
        // Apply sorting
        const sortedProducts = sortProducts(productsToRender);
        
        // Render each product
        sortedProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.dataset.category = product.category;
            
            // Calculate discount percentage if there's an original price
            const discount = product.originalPrice 
                ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
                : 0;
            
            // Generate star rating HTML
            const fullStars = Math.floor(product.rating);
            const halfStar = product.rating % 1 >= 0.5 ? 1 : 0;
            const emptyStars = 5 - fullStars - halfStar;
            
            let ratingHTML = '';
            for (let i = 0; i < fullStars; i++) {
                ratingHTML += '<i class="fas fa-star"></i>';
            }
            if (halfStar) {
                ratingHTML += '<i class="fas fa-star-half-alt"></i>';
            }
            for (let i = 0; i < emptyStars; i++) {
                ratingHTML += '<i class="far fa-star"></i>';
            }
            
            // Check if product is in wishlist
            const isInWishlist = wishlist.some(item => item.id === product.id);
            
            productCard.innerHTML = `
                <div class="product-image-container">
                    ${product.isNew ? '<span class="product-badge">New</span>' : ''}
                    ${discount > 0 ? <span class="product-badge" style="left: ${product.isNew ? '70px' : '10px'}">${discount}% Off</span> : ''}
                    ${!product.inStock ? '<span class="product-badge out-of-stock">Out of Stock</span>' : ''}
                    <img src="${product.image}" alt="${product.title}" class="product-image">
                    <div class="product-actions">
                        <button class="product-action-btn quick-view" data-id="${product.id}">
                            <i class="far fa-eye"></i>
                        </button>
                        <button class="product-action-btn ${isInWishlist ? 'in-wishlist' : ''}" data-id="${product.id}" data-action="wishlist">
                            <i class="${isInWishlist ? 'fas' : 'far'} fa-heart"></i>
                        </button>
                    </div>
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <div class="product-price">
                        <span class="current-price">₹${product.price.toLocaleString()}</span>
                        ${product.originalPrice ? <span class="original-price">₹${product.originalPrice.toLocaleString()}</span> : ''}
                        ${discount > 0 ? <span class="discount">${discount}% OFF</span> : ''}
                    </div>
                    <div class="product-rating">
                        ${ratingHTML} (${product.reviews})
                    </div>
                    <button class="add-to-cart" data-id="${product.id}" ${!product.inStock ? 'disabled' : ''}>
                        ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                    <button class="quick-view-btn" data-id="${product.id}">Quick View</button>
                </div>
            `;
            
            productContainer.appendChild(productCard);
        });
    }

    // Sort products based on current sort option
    function sortProducts(products) {
        switch(currentSort) {
            case 'price-low':
                return [...products].sort((a, b) => a.price - b.price);
            case 'price-high':
                return [...products].sort((a, b) => b.price - a.price);
            case 'popular':
                return [...products].sort((a, b) => b.rating - a.rating);
            case 'newest':
                return [...products].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
            default:
                return products;
        }
    }

    // Filter products based on current filter
    function filterProducts() {
        if (currentFilter === 'all') {
            return products.slice(0, displayedProducts);
        } else {
            return products.filter(product => product.category === currentFilter).slice(0, displayedProducts);
        }
    }

    // Search products
    function searchProducts(query) {
        const filtered = products.filter(product => 
            product.title.toLowerCase().includes(query.toLowerCase()) || 
            product.description.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        );
        return filtered.slice(0, displayedProducts);
    }

    // Set up event listeners
    function setupEventListeners() {
        // Filter buttons
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                currentFilter = button.dataset.filter;
                displayedProducts = 8;
                renderProducts(filterProducts());
                updateLoadMoreButton();
            });
        });
        
        // Sort select
        sortSelect.addEventListener('change', () => {
            currentSort = sortSelect.value;
            renderProducts(filterProducts());
        });
        
        // Search functionality
        searchBtn.addEventListener('click', () => {
            const query = searchInput.value.trim();
            if (query) {
                displayedProducts = 8;
                renderProducts(searchProducts(query));
                updateLoadMoreButton();
            }
        });
        
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = searchInput.value.trim();
                if (query) {
                    displayedProducts = 8;
                    renderProducts(searchProducts(query));
                    updateLoadMoreButton();
                }
            }
        });
        
        // Load more button
        loadMoreBtn.addEventListener('click', () => {
            displayedProducts += 4;
            renderProducts(filterProducts());
            updateLoadMoreButton();
        });
        
        // Product interactions (delegated events)
        productContainer.addEventListener('click', (e) => {
            // Add to cart
            if (e.target.classList.contains('add-to-cart') || e.target.closest('.add-to-cart')) {
                const productId = parseInt(e.target.dataset.id || e.target.closest('.add-to-cart').dataset.id);
                addToCart(productId);
            }
            
            // Quick view
            if (e.target.classList.contains('quick-view-btn') || e.target.closest('.quick-view-btn') || 
                e.target.classList.contains('quick-view') || e.target.closest('.quick-view')) {
                const productId = parseInt(
                    e.target.dataset.id || 
                    e.target.closest('[data-id]').dataset.id
                );
                openQuickViewModal(productId);
            }
            
            // Wishlist
            if (e.target.dataset.action === 'wishlist' || e.target.closest('[data-action="wishlist"]')) {
                const btn = e.target.dataset.action === 'wishlist' ? e.target : e.target.closest('[data-action="wishlist"]');
                const productId = parseInt(btn.dataset.id);
                toggleWishlist(productId);
            }
        });
        
        // Cart icon
        cartIcon.addEventListener('click', (e) => {
            e.preventDefault();
            openCartModal();
        });
        
        // Wishlist icon
        wishlistIcon.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Wishlist feature will be implemented soon!');
        });
        
        // Modal close buttons
        closeButtons.forEach(button => {
            button.addEventListener('click', () => {
                document.querySelectorAll('.modal').forEach(modal => {
                    modal.style.display = 'none';
                });
            });
        });
        
        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                document.querySelectorAll('.modal').forEach(modal => {
                    modal.style.display = 'none';
                });
            }
        });
        
        // Checkout button
        checkoutBtn.addEventListener('click', () => {
            if (cart.length > 0) {
                showLoading();
                setTimeout(() => {
                    hideLoading();
                    alert('Thank you for your purchase! Your order has been placed.');
                    cart = [];
                    updateCart();
                    cartModal.style.display = 'none';
                }, 1500);
            }
        });
        
        // Auth modal switches
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            registerModal.style.display = 'none';
            loginModal.style.display = 'block';
        });
        
        registerBtn.addEventListener('click', (e) => {
            e.preventDefault();
            loginModal.style.display = 'none';
            registerModal.style.display = 'block';
        });
        
        switchToRegister.addEventListener('click', (e) => {
            e.preventDefault();
            loginModal.style.display = 'none';
            registerModal.style.display = 'block';
        });
        
        switchToLogin.addEventListener('click', (e) => {
            e.preventDefault();
            registerModal.style.display = 'none';
            loginModal.style.display = 'block';
        });
        
        // Back to top button
        window.addEventListener('scroll', toggleBackToTopButton);
        backToTopBtn.addEventListener('click', scrollToTop);
        
        // Login form submission
        document.getElementById('login-form').addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real app, you would validate and send to server
            alert('Login functionality will be implemented in backend integration');
            loginModal.style.display = 'none';
        });
        
        // Register form submission
        document.getElementById('register-form').addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real app, you would validate and send to server
            alert('Registration functionality will be implemented in backend integration');
            registerModal.style.display = 'none';
        });
    }

    // Add product to cart
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        
        if (!product) return;
        
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }
        
        updateCart();
        showAddToCartFeedback();
    }

    // Toggle product in wishlist
    function toggleWishlist(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;
        
        const index = wishlist.findIndex(item => item.id === productId);
        
        if (index === -1) {
            wishlist.push({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image
            });
            showFeedback('Added to wishlist');
        } else {
            wishlist.splice(index, 1);
            showFeedback('Removed from wishlist');
        }
        
        updateWishlist();
        renderProducts(filterProducts()); // Re-render to update wishlist icons
    }

    // Update cart in UI and localStorage
    function updateCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        renderCartItems();
    }

    // Update wishlist in UI and localStorage
    function updateWishlist() {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        updateWishlistCount();
    }

    // Update cart count in header
    function updateCartCount() {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
    }

    // Update wishlist count in header
    function updateWishlistCount() {
        wishlistCount.textContent = wishlist.length;
    }

    // Render cart items in modal
    function renderCartItems() {
        if (cart.length === 0) {
            emptyCartMessage.style.display = 'block';
            cartItemsContainer.innerHTML = '';
            cartTotal.textContent = '₹0';
            cartSubtotal.textContent = '₹0';
            return;
        }
        
        emptyCartMessage.style.display = 'none';
        
        let itemsHTML = '';
        let subtotal = 0;
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;
            
            itemsHTML += `
                <div class="cart-item" data-id="${item.id}">
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.title}">
                    </div>
                    <div class="cart-item-details">
                        <div class="cart-item-title">${item.title}</div>
                        <div class="cart-item-price">₹${item.price.toLocaleString()}</div>
                    </div>
                    <div class="cart-item-actions">
                        <div class="quantity-btn decrease-quantity">-</div>
                        <span>${item.quantity}</span>
                        <div class="quantity-btn increase-quantity">+</div>
                        <div class="remove-item"><i class="fas fa-times"></i></div>
                    </div>
                </div>
            `;
        });
        
        cartItemsContainer.innerHTML = itemsHTML;
        cartSubtotal.textContent = ₹${subtotal.toLocaleString()};
        cartTotal.textContent = ₹${subtotal.toLocaleString()};
        
        // Add event listeners to quantity buttons
        document.querySelectorAll('.decrease-quantity').forEach(button => {
            button.addEventListener('click', decreaseQuantity);
        });
        
        document.querySelectorAll('.increase-quantity').forEach(button => {
            button.addEventListener('click', increaseQuantity);
        });
        
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', removeItem);
        });
    }

    // Quantity adjustment functions
    function decreaseQuantity(e) {
        const itemId = parseInt(e.target.closest('.cart-item').dataset.id);
        const item = cart.find(item => item.id === itemId);
        
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            cart = cart.filter(item => item.id !== itemId);
        }
        
        updateCart();
    }

    function increaseQuantity(e) {
        const itemId = parseInt(e.target.closest('.cart-item').dataset.id);
        const item = cart.find(item => item.id === itemId);
        
        item.quantity += 1;
        updateCart();
    }

    function removeItem(e) {
        const itemId = parseInt(e.target.closest('.cart-item').dataset.id);
        cart = cart.filter(item => item.id !== itemId);
        updateCart();
    }

    // Open cart modal
    function openCartModal() {
        renderCartItems();
        cartModal.style.display = 'block';
    }

    // Open quick view modal
    function openQuickViewModal(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;
        
        // Calculate discount percentage if there's an original price
        const discount = product.originalPrice 
            ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
            : 0;
        
        // Generate star rating HTML
        const fullStars = Math.floor(product.rating);
        const halfStar = product.rating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStar;
        
        let ratingHTML = '';
        for (let i = 0; i < fullStars; i++) {
            ratingHTML += '<i class="fas fa-star"></i>';
        }
        if (halfStar) {
            ratingHTML += '<i class="fas fa-star-half-alt"></i>';
        }
        for (let i = 0; i < emptyStars; i++) {
            ratingHTML += '<i class="far fa-star"></i>';
        }
        
        // Generate color options
        let colorOptions = '';
        product.colors.forEach(color => {
            colorOptions += <option value="${color}">${color}</option>;
        });
        
        // Generate additional images
        let additionalImages = '';
        product.images.forEach((image, index) => {
            additionalImages += `
                <div class="thumbnail ${index === 0 ? 'active' : ''}">
                    <img src="${image}" alt="${product.title}">
                </div>
            `;
        });
        
        const quickViewHTML = `
            <div class="quick-view-image">
                <div class="main-image">
                    <img src="${product.images[0]}" alt="${product.title}">
                </div>
                <div class="image-thumbnails">
                    ${additionalImages}
                </div>
            </div>
            <div class="quick-view-details">
                <h2 class="quick-view-title">${product.title}</h2>
                <div class="quick-view-price">
                    ₹${product.price.toLocaleString()}
                    ${product.originalPrice ? <span class="original-price">₹${product.originalPrice.toLocaleString()}</span> : ''}
                    ${discount > 0 ? <span class="discount">${discount}% OFF</span> : ''}
                </div>
                <div class="quick-view-rating">
                    ${ratingHTML} <span>${product.reviews} reviews</span>
                </div>
                <div class="quick-view-description">
                    <p>${product.description}</p>
                    <ul>
                        <li><strong>SKU:</strong> ${product.sku}</li>
                        <li><strong>Availability:</strong> ${product.inStock ? 'In Stock' : 'Out of Stock'}</li>
                        <li><strong>Category:</strong> ${product.category.charAt(0).toUpperCase() + product.category.slice(1)} Sarees</li>
                    </ul>
                </div>
                <div class="color-selector">
                    <label for="color">Color:</label>
                    <select id="color">
                        ${colorOptions}
                    </select>
                </div>
                <div class="quantity-selector">
                    <label>Quantity:</label>
                    <div class="quantity-controls">
                        <button class="quantity-btn decrease">-</button>
                        <input type="number" class="quantity-input" value="1" min="1">
                        <button class="quantity-btn increase">+</button>
                    </div>
                </div>
                <div class="quick-view-actions">
                    <button class="btn add-to-cart" data-id="${product.id}" ${!product.inStock ? 'disabled' : ''}>
                        ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                    <button class="btn wishlist-btn" data-id="${product.id}">
                        ${wishlist.some(item => item.id === product.id) ? 'In Wishlist' : 'Add to Wishlist'}
                    </button>
                </div>
            </div>
        `;
        
        document.getElementById('quick-view-content').innerHTML = quickViewHTML;
        
        // Add event listeners for quick view modal
        const thumbnails = document.querySelectorAll('.image-thumbnails .thumbnail');
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                thumbnails.forEach(t => t.classList.remove('active'));
                thumbnail.classList.add('active');
                document.querySelector('.main-image img').src = thumbnail.querySelector('img').src;
            });
        });
        
        document.querySelector('.quick-view-details .add-to-cart').addEventListener('click', () => {
            const quantity = parseInt(document.querySelector('.quantity-input').value);
            addToCartWithQuantity(product.id, quantity);
        });
        
        document.querySelector('.quick-view-details .wishlist-btn').addEventListener('click', () => {
            toggleWishlist(product.id);
            quickViewModal.style.display = 'none';
        });
        
        // Quantity controls in quick view
        document.querySelector('.quantity-btn.decrease').addEventListener('click', () => {
            const input = document.querySelector('.quantity-input');
            if (parseInt(input.value) > 1) {
                input.value = parseInt(input.value) - 1;
            }
        });
        
        document.querySelector('.quantity-btn.increase').addEventListener('click', () => {
            const input = document.querySelector('.quantity-input');
            input.value = parseInt(input.value) + 1;
        });
        
        quickViewModal.style.display = 'block';
    }

    // Add to cart with specific quantity
    function addToCartWithQuantity(productId, quantity) {
        const product = products.find(p => p.id === productId);
        
        if (!product) return;
        
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                quantity: quantity
            });
        }
        
        updateCart();
        showAddToCartFeedback();
        quickViewModal.style.display = 'none';
    }

    // Show feedback when item is added to cart or wishlist
    function showFeedback(message) {
        const feedback = document.createElement('div');
        feedback.className = 'feedback-message';
        feedback.textContent = message;
        document.body.appendChild(feedback);
        
        setTimeout(() => {
            feedback.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            feedback.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(feedback);
            }, 300);
        }, 2000);
    }

    function showAddToCartFeedback() {
        showFeedback('Item added to cart!');
    }

    // Update load more button visibility
    function updateLoadMoreButton() {
        let filteredProducts = [];
        
        if (searchInput.value.trim()) {
            filteredProducts = searchProducts(searchInput.value.trim());
        } else if (currentFilter === 'all') {
            filteredProducts = products;
        } else {
            filteredProducts = products.filter(product => product.category === currentFilter);
        }
        
        loadMoreBtn.style.display = displayedProducts >= filteredProducts.length ? 'none' : 'block';
    }

    // Toggle back to top button
    function toggleBackToTopButton() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }

    // Scroll to top
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Show loading spinner
    function showLoading() {
        loadingSpinner.style.display = 'flex';
    }

    // Hide loading spinner
    function hideLoading() {
        loadingSpinner.style.display = 'none';
    }

    // Initialize the app
    init();
});

// Add some styles for the feedback message dynamically
const style = document.createElement('style');
style.textContent = `
    .feedback-message {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #4CAF50;
        color: white;
        padding: 15px 25px;
        border-radius: 4px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transform: translateY(100px);
        opacity: 0;
        transition: transform 0.3s, opacity 0.3s;
        z-index: 1000;
    }
    
    .feedback-message.show {
        transform: translateY(0);
        opacity: 1;
    }
    
    .product-badge {
        position: absolute;
        top: 10px;
        left: 10px;
        background-color: #b76e79;
        color: white;
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 0.8rem;
        z-index: 1;
    }
    
    .product-badge.out-of-stock {
        background-color: #333;
    }
    
    .image-thumbnails {
        display: flex;
        gap: 10px;
        margin-top: 10px;
    }
    
    .thumbnail {
        width: 60px;
        height: 60px;
        border: 2px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        cursor: pointer;
    }
    
    .thumbnail.active {
        border-color: #b76e79;
    }
    
    .thumbnail img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .quick-view-details .original-price {
        text-decoration: line-through;
        color: #999;
        margin-left: 10px;
        font-size: 1.2rem;
    }
    
    .quick-view-details .discount {
        color: #4CAF50;
        margin-left: 10px;
        font-weight: 500;
    }
    
    .quick-view-details .quick-view-rating span {
        color: #777;
        font-size: 0.9rem;
        margin-left: 5px;
    }
    
    .quick-view-details ul {
        margin: 15px 0;
        padding-left: 20px;
    }
    
    .quick-view-details ul li {
        margin-bottom: 8px;
    }
    
    .color-selector, .quantity-selector {
        margin: 20px 0;
    }
    
    .color-selector select, .quantity-controls {
        margin-top: 8px;
    }
    
    .color-selector select {
        padding: 8px 15px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
    
    .quantity-controls {
        display: flex;
        align-items: center;
    }
    
    .quantity-btn {
        width: 35px;
        height: 35px;
        background-color: #f0f0f0;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
    }
    
    .quantity-input {
        width: 50px;
        text-align: center;
        margin: 0 5px;
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
    
    .quick-view-actions {
        display: flex;
        gap: 15px;
        margin-top: 20px;
    }
    
    .quick-view-actions .btn {
        flex: 1;
    }
    
    .wishlist-btn {
        background-color: #f0f0f0;
        color: #333;
    }
    
    .wishlist-btn:hover {
        background-color: #e0e0e0;
    }
    
    .product-action-btn.in-wishlist {
        color: #b76e79;
    }
`;
document.head.appendChild(style);



// User Authentication Functionality
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const forgotPasswordModal = document.getElementById('forgot-password-modal');
    const successMessage = document.getElementById('auth-success-message');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const forgotPasswordForm = document.getElementById('forgot-password-form');
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const switchToRegister = document.getElementById('switch-to-register');
    const switchToLogin = document.getElementById('switch-to-login');
    const forgotPasswordLink = document.getElementById('forgot-password');
    const switchToLoginFromForgot = document.getElementById('switch-to-login-from-forgot');
    const successOkBtn = document.getElementById('success-ok-btn');
    const accountDropdown = document.querySelector('.account-dropdown');
    const logoutBtn = document.createElement('a');
    
    // User state
    let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
    
    // Initialize authentication
    function initAuth() {
        updateAuthUI();
        setupAuthEventListeners();
    }
    
    // Update UI based on authentication state
    function updateAuthUI() {
        if (currentUser) {
            // User is logged in
            accountDropdown.innerHTML = `
                <a href="#account"><i class="far fa-user"></i> ${currentUser.name.split(' ')[0]} <i class="fas fa-chevron-down"></i></a>
                <div class="dropdown-content">
                    <a href="#" id="my-account">My Account</a>
                    <a href="#" id="my-orders">My Orders</a>
                    <a href="#" id="my-wishlist">Wishlist</a>
                    <a href="#" id="logout-btn">Logout</a>
                </div>
            `;
        } else {
            // User is not logged in
            accountDropdown.innerHTML = `
                <a href="#account"><i class="far fa-user"></i> Account <i class="fas fa-chevron-down"></i></a>
                <div class="dropdown-content">
                    <a href="#" id="login-btn">Login</a>
                    <a href="#" id="register-btn">Register</a>
                </div>
            `;
        }
    }
    
    // Set up authentication event listeners
    function setupAuthEventListeners() {
        // Login/Register buttons in nav
        document.addEventListener('click', function(e) {
            if (e.target.id === 'login-btn' || e.target.closest('#login-btn')) {
                e.preventDefault();
                registerModal.style.display = 'none';
                forgotPasswordModal.style.display = 'none';
                loginModal.style.display = 'block';
            }
            
            if (e.target.id === 'register-btn' || e.target.closest('#register-btn')) {
                e.preventDefault();
                loginModal.style.display = 'none';
                forgotPasswordModal.style.display = 'none';
                registerModal.style.display = 'block';
            }
            
            if (e.target.id === 'logout-btn' || e.target.closest('#logout-btn')) {
                e.preventDefault();
                logout();
            }
        });
        
        // Modal switches
        switchToRegister.addEventListener('click', (e) => {
            e.preventDefault();
            loginModal.style.display = 'none';
            registerModal.style.display = 'block';
        });
        
        switchToLogin.addEventListener('click', (e) => {
            e.preventDefault();
            registerModal.style.display = 'none';
            loginModal.style.display = 'block';
        });
        
        forgotPasswordLink.addEventListener('click', (e) => {
            e.preventDefault();
            loginModal.style.display = 'none';
            forgotPasswordModal.style.display = 'block';
        });
        
        switchToLoginFromForgot.addEventListener('click', (e) => {
            e.preventDefault();
            forgotPasswordModal.style.display = 'none';
            loginModal.style.display = 'block';
        });
        
        // Close modals
        document.querySelectorAll('.close').forEach(button => {
            button.addEventListener('click', () => {
                document.querySelectorAll('.modal').forEach(modal => {
                    modal.style.display = 'none';
                });
            });
        });
        
        // Success message OK button
        successOkBtn.addEventListener('click', (e) => {
            e.preventDefault();
            hideSuccessMessage();
        });
        
        // Form submissions
        loginForm.addEventListener('submit', handleLogin);
        registerForm.addEventListener('submit', handleRegister);
        forgotPasswordForm.addEventListener('submit', handleForgotPassword);
        
        // Password strength indicator
        const passwordInput = document.getElementById('register-password');
        if (passwordInput) {
            passwordInput.addEventListener('input', updatePasswordStrength);
        }
    }
    
    // Handle login form submission
    function handleLogin(e) {
        e.preventDefault();
        
        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value.trim();
        const rememberMe = document.getElementById('remember-me').checked;
        
        // Reset errors
        document.getElementById('login-email-error').textContent = '';
        document.getElementById('login-password-error').textContent = '';
        
        // Validate inputs
        let isValid = true;
        
        if (!email) {
            document.getElementById('login-email-error').textContent = 'Email is required';
            isValid = false;
        } else if (!isValidEmail(email)) {
            document.getElementById('login-email-error').textContent = 'Please enter a valid email';
            isValid = false;
        }
        
        if (!password) {
            document.getElementById('login-password-error').textContent = 'Password is required';
            isValid = false;
        }
        
        if (!isValid) return;
        
        // In a real app, you would send this to your backend
        // For demo purposes, we'll use localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            // Successful login
            currentUser = {
                name: user.name,
                email: user.email
            };
            
            // Save to localStorage
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            
            // If remember me is checked, save email to localStorage
            if (rememberMe) {
                localStorage.setItem('rememberedEmail', email);
            } else {
                localStorage.removeItem('rememberedEmail');
            }
            
            // Show success message
            showSuccessMessage('Login Successful', 'You have successfully logged in to your account.');
            
            // Close modal
            loginModal.style.display = 'none';
            
            // Update UI
            updateAuthUI();
        } else {
            // Failed login
            document.getElementById('login-password-error').textContent = 'Invalid email or password';
        }
    }
    
    // Handle register form submission
    function handleRegister(e) {
        e.preventDefault();
        
        const name = document.getElementById('register-name').value.trim();
        const email = document.getElementById('register-email').value.trim();
        const password = document.getElementById('register-password').value.trim();
        const confirmPassword = document.getElementById('register-confirm-password').value.trim();
        const agreeTerms = document.getElementById('agree-terms').checked;
        
        // Reset errors
        document.getElementById('register-name-error').textContent = '';
        document.getElementById('register-email-error').textContent = '';
        document.getElementById('register-password-error').textContent = '';
        document.getElementById('register-confirm-password-error').textContent = '';
        document.getElementById('agree-terms-error').textContent = '';
        
        // Validate inputs
        let isValid = true;
        
        if (!name) {
            document.getElementById('register-name-error').textContent = 'Full name is required';
            isValid = false;
        }
        
        if (!email) {
            document.getElementById('register-email-error').textContent = 'Email is required';
            isValid = false;
        } else if (!isValidEmail(email)) {
            document.getElementById('register-email-error').textContent = 'Please enter a valid email';
            isValid = false;
        }
        
        if (!password) {
            document.getElementById('register-password-error').textContent = 'Password is required';
            isValid = false;
        } else if (password.length < 8) {
            document.getElementById('register-password-error').textContent = 'Password must be at least 8 characters';
            isValid = false;
        }
        
        if (!confirmPassword) {
            document.getElementById('register-confirm-password-error').textContent = 'Please confirm your password';
            isValid = false;
        } else if (password !== confirmPassword) {
            document.getElementById('register-confirm-password-error').textContent = 'Passwords do not match';
            isValid = false;
        }
        
        if (!agreeTerms) {
            document.getElementById('agree-terms-error').textContent = 'You must agree to the terms';
            isValid = false;
        }
        
        if (!isValid) return;
        
        // Check if user already exists
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some(u => u.email === email);
        
        if (userExists) {
            document.getElementById('register-email-error').textContent = 'Email is already registered';
            return;
        }
        
        // Create new user (in a real app, you would send this to your backend)
        const newUser = {
            name,
            email,
            password // In a real app, you would hash this password
        };
        
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        
        // Automatically log the user in
        currentUser = {
            name,
            email
        };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        // Show success message
        showSuccessMessage('Registration Successful', 'Your account has been created successfully.');
        
        // Close modal
        registerModal.style.display = 'none';
        
        // Update UI
        updateAuthUI();
    }
    
    // Handle forgot password form submission
    function handleForgotPassword(e) {
        e.preventDefault();
        
        const email = document.getElementById('forgot-email').value.trim();
        
        // Reset error
        document.getElementById('forgot-email-error').textContent = '';
        
        // Validate email
        if (!email) {
            document.getElementById('forgot-email-error').textContent = 'Email is required';
            return;
        }
        
        if (!isValidEmail(email)) {
            document.getElementById('forgot-email-error').textContent = 'Please enter a valid email';
            return;
        }
        
        // In a real app, you would send a reset link to the email
        // For demo purposes, we'll just show a success message
        showSuccessMessage('Reset Link Sent', 'If an account exists with this email, you will receive a password reset link.');
        
        // Close modal
        forgotPasswordModal.style.display = 'none';
    }
    
    // Logout function
    function logout() {
        currentUser = null;
        localStorage.removeItem('currentUser');
        updateAuthUI();
        showSuccessMessage('Logged Out', 'You have been successfully logged out.');
    }
    
    // Show success message
    function showSuccessMessage(title, message) {
        document.getElementById('success-title').textContent = title;
        document.getElementById('success-message').textContent = message;
        successMessage.classList.add('show');
    }
    
    // Hide success message
    function hideSuccessMessage() {
        successMessage.classList.remove('show');
    }
    
    // Validate email format
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Update password strength indicator
    function updatePasswordStrength() {
        const password = document.getElementById('register-password').value;
        const strengthBars = document.querySelectorAll('.strength-bar');
        const strengthText = document.querySelector('.strength-text');
        
        // Reset
        strengthBars.forEach(bar => {
            bar.style.backgroundColor = '#eee';
        });
        strengthText.textContent = '';
        
        if (!password) return;
        
        // Calculate strength
        let strength = 0;
        
        // Length
        if (password.length >= 8) strength += 1;
        if (password.length >= 12) strength += 1;
        
        // Complexity
        if (/[A-Z]/.test(password)) strength += 1;
        if (/[0-9]/.test(password)) strength += 1;
        if (/[^A-Za-z0-9]/.test(password)) strength += 1;
        
        // Cap at 4
        strength = Math.min(strength, 4);
        
        // Update UI
        for (let i = 0; i < strength; i++) {
            strengthBars[i].style.backgroundColor = getStrengthColor(strength);
        }
        
        strengthText.textContent = getStrengthText(strength);
        strengthText.style.color = getStrengthColor(strength);
    }
    
    function getStrengthColor(strength) {
        switch(strength) {
            case 1: return '#e74c3c'; // Weak (red)
            case 2: return '#f39c12'; // Moderate (orange)
            case 3: return '#3498db'; // Good (blue)
            case 4: return '#2ecc71'; // Strong (green)
            default: return '#eee';
        }
    }
    
    function getStrengthText(strength) {
        switch(strength) {
            case 1: return 'Weak';
            case 2: return 'Moderate';
            case 3: return 'Good';
            case 4: return 'Strong';
            default: return '';
        }
    }
    
    // Initialize authentication when DOM is loaded
    initAuth();
    
    // Check for remembered email on page load
    window.addEventListener('load', function() {
        const rememberedEmail = localStorage.getItem('rememberedEmail');
        if (rememberedEmail) {
            document.getElementById('login-email').value = rememberedEmail;
            document.getElementById('remember-me').checked = true;
        }
    });
});
// API Base URL
const API_BASE_URL = 'http://localhost:5000/api';

// Auth Functions
async function registerUser(userData) {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return await response.json();
  } catch (error) {
    console.error('Registration error:', error);
    return { status: 'error', message: 'Network error' };
  }
}

async function loginUser(credentials) {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
      credentials: 'include'
    });
    return await response.json();
  } catch (error) {
    console.error('Login error:', error);
    return { status: 'error', message: 'Network error' };
  }
}

// Product Functions
async function getProducts(filter = {}) {
  try {
    const query = new URLSearchParams(filter).toString();
    const response = await fetch(`${API_BASE_URL}/products?${query}`);
    return await response.json();
  } catch (error) {
    console.error('Fetch products error:', error);
    return { status: 'error', message: 'Failed to fetch products' };
  }
}

// Cart Functions
async function getCart() {
  try {
    const response = await fetch(`${API_BASE_URL}/cart`, {
      credentials: 'include'
    });
    return await response.json();
  } catch (error) {
    console.error('Get cart error:', error);
    return { status: 'error', message: 'Failed to get cart' };
  }
}

async function addToCart(item) {
  try {
    const response = await fetch(`${API_BASE_URL}/cart/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
      credentials: 'include'
    });
    return await response.json();
  } catch (error) {
    console.error('Add to cart error:', error);
    return { status: 'error', message: 'Failed to add to cart' };
  }
}

// DOM Event Listeners
document.addEventListener('DOMContentLoaded', function() {
  // Login Form
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
      
      const result = await loginUser({ email, password });
      if (result.status === 'success') {
        localStorage.setItem('token', result.token);
        alert('Login successful!');
        window.location.reload();
      } else {
        alert(result.message || 'Login failed');
      }
    });
  }

  // Register Form
  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const name = document.getElementById('register-name').value;
      const email = document.getElementById('register-email').value;
      const password = document.getElementById('register-password').value;
      const confirmPassword = document.getElementById('register-confirm-password').value;
      
      if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }

      const result = await registerUser({ name, email, password });
      if (result.status === 'success') {
        alert('Registration successful! Please login.');
        document.getElementById('login-form').style.display = 'block';
        registerForm.style.display = 'none';
      } else {
        alert(result.message || 'Registration failed');
      }
    });
  }

  // Load products on page load
  loadProducts();
});

async function loadProducts() {
  const result = await getProducts();
  if (result.status === 'success') {
    renderProducts(result.data.products);
  } else {
    console.error(result.message);
  }
}

function renderProducts(products) {
  const container = document.getElementById('product-container');
  if (!container) return;

  container.innerHTML = products.map(product => `
    <div class="product-card">
      <img src="${product.images[0] || 'https://via.placeholder.com/300x400?text=No+Image'}" alt="${product.name}">
      <h3>${product.name}</h3>
      <div class="price">
        ${product.discountPrice ? 
          `<span class="original-price">₹${product.price}</span>
           <span class="discounted-price">₹${product.discountPrice}</span>` :
          `<span>₹${product.price}</span>`
        }
      </div>
      <button class="add-to-cart" data-id="${product._id}">Add to Cart</button>
    </div>
  `).join('');

  // Add event listeners to Add to Cart buttons
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', async function() {
      const productId = this.getAttribute('data-id');
      const result = await addToCart({ productId, quantity: 1 });
      if (result.status === 'success') {
        updateCartCount(result.data.cart.items.length);
        alert('Product added to cart!');
      } else {
        alert(result.message || 'Failed to add to cart');
      }
    });
  });
}

function updateCartCount(count) {
  const cartCount = document.getElementById('cart-count');
  if (cartCount) cartCount.textContent = count;
}
// Initialize wishlist if empty
if (!localStorage.getItem('wishlist')) {
    localStorage.setItem('wishlist', JSON.stringify([]));
}

// Update wishlist counter
function updateWishlistCount() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist'));
    document.querySelectorAll('.wishlist-count').forEach(el => {
        el.textContent = wishlist.length;
    });
}

// Add/remove from wishlist
function toggleWishlist(productId, productName, productPrice, productImage) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist'));
    
    // Check if product already exists
    const existingIndex = wishlist.findIndex(item => item.id === productId);
    
    if (existingIndex === -1) {
        // Add to wishlist
        wishlist.push({
            id: productId,
            name: productName,
            price: productPrice,
            image: productImage
        });
    } else {
        // Remove from wishlist
        wishlist.splice(existingIndex, 1);
    }
    
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistCount();
    return existingIndex === -1; // Returns true if added, false if removed
}

// Handle wishlist button clicks
document.addEventListener('click', function(e) {
    if (e.target.closest('.wishlist-btn')) {
        e.preventDefault();
        const btn = e.target.closest('.wishlist-btn');
        const productId = btn.dataset.productId;
        const productCard = btn.closest('.product-card');
        
        // Get product details (modify based on your HTML structure)
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('p').textContent;
        const productImage = productCard.querySelector('img').src;
        
        const wasAdded = toggleWishlist(productId, productName, productPrice, productImage);
        
        // Update button appearance
        if (wasAdded) {
            btn.innerHTML = '<i class="fas fa-heart"></i> In Wishlist';
            btn.classList.add('active');
        } else {
            btn.innerHTML = '<i class="far fa-heart"></i> Add to Wishlist';
            btn.classList.remove('active');
        }
    }
});

// Initialize counter on page load
updateWishlistCount();
document.addEventListener('DOMContentLoaded', function() {
    // Ensure cart link works properly
    const cartLink = document.querySelector('.cart-link');
    if (cartLink) {
        cartLink.addEventListener('click', function(e) {
            e.preventDefault(); // First stop any default behavior
            window.location.href = 'cart.html'; // Force redirect
        });
    }
});