// State Management
const state = {
  currentUser: null,
  currentRole: null,
  cart: [],
  favorites: [],
  loyaltyPoints: 250,
  orders: [],
  notifications: [],
  reviews: [],
  appliedPromo: null,
  riderAssignments: {},
  productSalesStats: {},
  registeredUsers: [
    { 
      id: 1, 
      name: 'Demo Customer', 
      email: 'customer@shop.com', 
      password: 'pass123', 
      phone: '+63 912 345 6789',
      role: 'customer', 
      orders: 0, 
      loyaltyPoints: 250,
      createdAt: new Date().toISOString()
    },
    { 
      id: 2, 
      name: 'Demo Staff', 
      email: 'staff@shop.com', 
      password: 'pass123', 
      phone: '+63 912 345 6790',
      role: 'staff', 
      orders: 0, 
      loyaltyPoints: 0,
      createdAt: new Date().toISOString()
    },
    { 
      id: 3, 
      name: 'Demo Admin', 
      email: 'admin@shop.com', 
      password: 'pass123', 
      phone: '+63 912 345 6791',
      role: 'admin', 
      orders: 0, 
      loyaltyPoints: 0,
      createdAt: new Date().toISOString()
    },
    { 
      id: 4, 
      name: 'Demo Rider', 
      email: 'rider@shop.com', 
      password: 'pass123', 
      phone: '+63 912 345 6792',
      role: 'rider', 
      orders: 0, 
      loyaltyPoints: 0,
      createdAt: new Date().toISOString()
    }
  ],
  products: [
    // Watches
    { 
      id: 1, 
      name: 'Classic Leather Watch', 
      price: 2499, 
      stock: 25, 
      category: 'Watches', 
      image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400',
      description: 'Elegant leather watch with premium craftsmanship',
      rating: 4.5,
      reviews: 128,
      sizes: ['Standard'],
      colors: ['Brown', 'Black'],
      brand: 'TimeMaster'
    },
    { 
      id: 2, 
      name: 'Smart Watch Pro', 
      price: 8999, 
      stock: 15, 
      category: 'Watches', 
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
      description: 'Advanced smartwatch with fitness tracking',
      rating: 4.8,
      reviews: 256,
      sizes: ['40mm', '44mm'],
      colors: ['Silver', 'Black', 'Gold'],
      brand: 'TechTime'
    },
    { 
      id: 3, 
      name: 'Luxury Gold Watch', 
      price: 15999, 
      stock: 8, 
      category: 'Watches', 
      image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=400',
      description: 'Premium gold-plated luxury timepiece',
      rating: 4.9,
      reviews: 89,
      sizes: ['Standard'],
      colors: ['Gold'],
      brand: 'LuxeTime'
    },
    { 
      id: 4, 
      name: 'Sport Digital Watch', 
      price: 1899, 
      stock: 30, 
      category: 'Watches', 
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400',
      description: 'Durable sports watch for active lifestyle',
      rating: 4.3,
      reviews: 342,
      sizes: ['Standard'],
      colors: ['Black', 'Blue', 'Red'],
      brand: 'SportPro'
    },
    
    // Bags
    { 
      id: 5, 
      name: 'Leather Backpack', 
      price: 3499, 
      stock: 20, 
      category: 'Bags', 
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
      description: 'Spacious leather backpack for daily use',
      rating: 4.6,
      reviews: 198,
      sizes: ['Medium', 'Large'],
      colors: ['Brown', 'Black', 'Tan'],
      brand: 'UrbanCarry'
    },
    { 
      id: 6, 
      name: 'Designer Handbag', 
      price: 5999, 
      stock: 12, 
      category: 'Bags', 
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400',
      description: 'Elegant designer handbag for special occasions',
      rating: 4.7,
      reviews: 156,
      sizes: ['Standard'],
      colors: ['Black', 'Red', 'Beige'],
      brand: 'LuxeBag'
    },
    { 
      id: 7, 
      name: 'Travel Duffel Bag', 
      price: 2799, 
      stock: 18, 
      category: 'Bags', 
      image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=400',
      description: 'Large capacity travel bag with multiple compartments',
      rating: 4.4,
      reviews: 223,
      sizes: ['Large', 'X-Large'],
      colors: ['Navy', 'Black', 'Gray'],
      brand: 'TravelPro'
    },
    { 
      id: 8, 
      name: 'Crossbody Bag', 
      price: 1999, 
      stock: 25, 
      category: 'Bags', 
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400',
      description: 'Compact crossbody bag perfect for everyday use',
      rating: 4.5,
      reviews: 287,
      sizes: ['Small', 'Medium'],
      colors: ['Black', 'Brown', 'Pink'],
      brand: 'StyleBag'
    },
    
    // Shoes
    { 
      id: 9, 
      name: 'Running Sneakers', 
      price: 3999, 
      stock: 35, 
      category: 'Shoes', 
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
      description: 'High-performance running shoes with cushioning',
      rating: 4.7,
      reviews: 412,
      sizes: ['7', '8', '9', '10', '11'],
      colors: ['White', 'Black', 'Blue'],
      brand: 'RunFast'
    },
    { 
      id: 10, 
      name: 'Casual Loafers', 
      price: 2499, 
      stock: 22, 
      category: 'Shoes', 
      image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=400',
      description: 'Comfortable leather loafers for casual wear',
      rating: 4.4,
      reviews: 178,
      sizes: ['7', '8', '9', '10', '11'],
      colors: ['Brown', 'Black', 'Tan'],
      brand: 'ComfortWalk'
    },
    { 
      id: 11, 
      name: 'High Heels', 
      price: 3299, 
      stock: 15, 
      category: 'Shoes', 
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400',
      description: 'Elegant high heels for formal occasions',
      rating: 4.6,
      reviews: 145,
      sizes: ['6', '7', '8', '9'],
      colors: ['Black', 'Red', 'Nude'],
      brand: 'ElegantStep'
    },
    { 
      id: 12, 
      name: 'Leather Boots', 
      price: 4999, 
      stock: 10, 
      category: 'Shoes', 
      image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400',
      description: 'Durable leather boots for all seasons',
      rating: 4.8,
      reviews: 234,
      sizes: ['7', '8', '9', '10', '11'],
      colors: ['Brown', 'Black'],
      brand: 'BootCraft'
    },
    
    // Clothes
    { 
      id: 13, 
      name: 'Cotton T-Shirt', 
      price: 599, 
      stock: 50, 
      category: 'Clothes', 
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
      description: '100% cotton comfortable t-shirt',
      rating: 4.3,
      reviews: 567,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['White', 'Black', 'Gray', 'Navy'],
      brand: 'BasicWear'
    },
    { 
      id: 14, 
      name: 'Denim Jeans', 
      price: 1899, 
      stock: 40, 
      category: 'Clothes', 
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
      description: 'Classic denim jeans with perfect fit',
      rating: 4.5,
      reviews: 389,
      sizes: ['28', '30', '32', '34', '36'],
      colors: ['Blue', 'Black', 'Light Blue'],
      brand: 'DenimCo'
    },
    { 
      id: 15, 
      name: 'Summer Dress', 
      price: 2299, 
      stock: 28, 
      category: 'Clothes', 
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400',
      description: 'Light and breezy summer dress',
      rating: 4.6,
      reviews: 298,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Floral', 'White', 'Yellow'],
      brand: 'SummerStyle'
    },
    { 
      id: 16, 
      name: 'Formal Blazer', 
      price: 4599, 
      stock: 15, 
      category: 'Clothes', 
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400',
      description: 'Professional blazer for business occasions',
      rating: 4.7,
      reviews: 167,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Navy', 'Gray'],
      brand: 'FormalWear'
    }
  ],
  promoCodes: [
    { code: 'FIRST20', discount: 20, type: 'percentage', minPurchase: 1000, active: true },
    { code: 'FIRST50', discount: 50, type: 'fixed', minPurchase: 500, active: true },
    { code: 'SAVE100', discount: 100, type: 'fixed', minPurchase: 2000, active: true },
    { code: 'WELCOME15', discount: 15, type: 'percentage', minPurchase: 0, active: true }
  ],
  salesData: [
    { day: 'Mon', sales: 12500 },
    { day: 'Tue', sales: 18900 },
    { day: 'Wed', sales: 15200 },
    { day: 'Thu', sales: 22400 },
    { day: 'Fri', sales: 28600 },
    { day: 'Sat', sales: 32100 },
    { day: 'Sun', sales: 26800 }
  ]
};

// Navigation Configurations
const navConfigs = {
  customer: [
    { id: 'browse', label: 'Browse Products', icon: '🏪' },
    { id: 'favorites', label: 'My Favorites', icon: '❤️' },
    { id: 'orders', label: 'My Orders', icon: '📦' },
    { id: 'loyalty', label: 'Loyalty Points', icon: '⭐' },
    { id: 'reviews', label: 'My Reviews', icon: '⭐' },
    { id: 'profile', label: 'My Profile', icon: '👤' },
    { id: 'about', label: 'About Us', icon: 'ℹ️' }
  ],
  staff: [
    { id: 'staff-dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'staff-orders', label: 'Manage Orders', icon: '📋' },
    { id: 'staff-inventory', label: 'Inventory', icon: '📦' },
    { id: 'staff-reviews', label: 'Product Reviews', icon: '⭐' }
  ],
  admin: [
    { id: 'admin-dashboard', label: 'Analytics', icon: '📈' },
    { id: 'admin-orders', label: 'All Orders', icon: '📋' },
    { id: 'admin-inventory', label: 'Inventory Control', icon: '📦' },
    { id: 'admin-users', label: 'User Management', icon: '👥' },
    { id: 'admin-promos', label: 'Promo Codes', icon: '🎫' },
    { id: 'admin-reviews', label: 'Reviews Management', icon: '⭐' },
    { id: 'admin-settings', label: 'Business Settings', icon: '⚙️' }
  ],
  rider: [
    { id: 'rider-deliveries', label: 'My Deliveries', icon: '🚚' },
    { id: 'rider-history', label: 'Delivery History', icon: '📜' }
  ]
};

// Utility Functions
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  const icon = type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ';
  
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span class="toast-message">${message}</span>
  `;
  
  document.getElementById('toastContainer').appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function updateCartBadge() {
  const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cartBadge').textContent = count;
}

function updateLoyaltyPoints() {
  document.getElementById('pointsValue').textContent = state.loyaltyPoints;
}

function updateFavoritesBadge() {
  const badge = document.getElementById('favoritesBadge');
  if (badge) {
    badge.textContent = state.favorites.length;
    if (state.favorites.length > 0) {
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  }
}

function getStockBadge(stock) {
  if (stock === 0) return '<span class="stock-badge out-of-stock">Out of Stock</span>';
  if (stock < 15) return '<span class="stock-badge low-stock">Low Stock</span>';
  return '<span class="stock-badge in-stock">In Stock</span>';
}

// Auth Form Switching
document.getElementById('showSignup').addEventListener('click', () => {
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById('signupForm').classList.remove('hidden');
  document.getElementById('authSubtitle').textContent = 'Create your account to get started';
});

document.getElementById('showLogin').addEventListener('click', () => {
  document.getElementById('signupForm').classList.add('hidden');
  document.getElementById('loginForm').classList.remove('hidden');
  document.getElementById('authSubtitle').textContent = 'Welcome Back! Sign in to continue';
});

// Sign Up Handler
document.getElementById('signupForm').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const role = document.getElementById('signupRole').value;
  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const phone = document.getElementById('signupPhone').value;
  const password = document.getElementById('signupPassword').value;
  const confirmPassword = document.getElementById('signupConfirmPassword').value;
  const agreeTerms = document.getElementById('agreeTerms').checked;
  
  // Validation
  if (password !== confirmPassword) {
    showToast('Passwords do not match!', 'error');
    return;
  }
  
  if (password.length < 6) {
    showToast('Password must be at least 6 characters!', 'error');
    return;
  }
  
  if (!agreeTerms) {
    showToast('Please agree to the Terms & Conditions', 'error');
    return;
  }
  
  // Check if email already exists
  const existingUser = state.registeredUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (existingUser) {
    showToast('Email already registered! Please login.', 'error');
    return;
  }
  
  // Create new user
  const newUser = {
    id: state.registeredUsers.length + 1,
    name: name,
    email: email,
    password: password,
    phone: phone,
    role: role,
    orders: 0,
    loyaltyPoints: role === 'customer' ? 100 : 0, // Welcome bonus for customers
    createdAt: new Date().toISOString()
  };
  
  state.registeredUsers.push(newUser);
  
  showToast('Account created successfully! Please login.', 'success');
  
  // Switch to login form
  document.getElementById('signupForm').classList.add('hidden');
  document.getElementById('loginForm').classList.remove('hidden');
  document.getElementById('authSubtitle').textContent = 'Welcome Back! Sign in to continue';
  
  // Pre-fill login form
  document.getElementById('loginEmail').value = email;
  document.getElementById('loginRole').value = role;
  
  // Reset signup form
  document.getElementById('signupForm').reset();
});

// Login Handler
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const role = document.getElementById('loginRole').value;
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  
  // Find user
  const user = state.registeredUsers.find(u => 
    u.email.toLowerCase() === email.toLowerCase() && 
    u.password === password &&
    u.role === role
  );
  
  if (!user) {
    showToast('Invalid credentials! Please check your email, password, and role.', 'error');
    return;
  }
  
  // Set current user
  state.currentUser = user;
  state.currentRole = user.role;
  state.loyaltyPoints = user.loyaltyPoints;
  
  // Hide login, show app
  document.getElementById('loginScreen').classList.add('hidden');
  document.getElementById('mainApp').classList.remove('hidden');
  
  // Update user display
  document.getElementById('userInitial').textContent = user.name.charAt(0).toUpperCase();
  document.getElementById('userName').textContent = user.name;
  document.getElementById('userRole').textContent = user.role.charAt(0).toUpperCase() + user.role.slice(1);
  
  // Show/hide customer-only elements
  const customerElements = document.querySelectorAll('.customer-only');
  customerElements.forEach(el => {
    if (user.role === 'customer') {
      el.classList.remove('hidden');
    } else {
      el.classList.add('hidden');
    }
  });
  
  if (user.role === 'customer') {
    updateLoyaltyPoints();
    updateFavoritesBadge();
  }
  
  renderNavigation(user.role);
  renderView(navConfigs[user.role][0].id);
  
  showToast(`Welcome back, ${user.name}!`, 'success');
  
  // Reset login form
  document.getElementById('loginForm').reset();
});

// Logout Handler
document.getElementById('logoutBtn').addEventListener('click', () => {
  const userName = state.currentUser ? state.currentUser.name : 'User';
  
  // Save user data before logout
  if (state.currentUser) {
    const userIndex = state.registeredUsers.findIndex(u => u.id === state.currentUser.id);
    if (userIndex !== -1) {
      state.registeredUsers[userIndex].loyaltyPoints = state.loyaltyPoints;
      state.registeredUsers[userIndex].orders = state.orders.length;
    }
  }
  
  // Clear current session
  state.currentUser = null;
  state.currentRole = null;
  state.cart = [];
  state.favorites = [];
  
  // Reset UI
  document.getElementById('mainApp').classList.add('hidden');
  document.getElementById('loginScreen').classList.remove('hidden');
  document.getElementById('userDropdown').classList.add('hidden');
  
  // Reset forms
  document.getElementById('loginForm').reset();
  document.getElementById('signupForm').reset();
  document.getElementById('signupForm').classList.add('hidden');
  document.getElementById('loginForm').classList.remove('hidden');
  document.getElementById('authSubtitle').textContent = 'Welcome Back! Sign in to continue';
  
  showToast(`Goodbye, ${userName}! Logged out successfully.`, 'info');
});

// User Menu Toggle
document.getElementById('userMenuBtn').addEventListener('click', () => {
  document.getElementById('userDropdown').classList.toggle('hidden');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.user-menu')) {
    document.getElementById('userDropdown').classList.add('hidden');
  }
});

// Menu Toggle
document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('closed');
  document.getElementById('mainContent').classList.toggle('expanded');
});

// Cart Button
document.getElementById('cartBtn').addEventListener('click', () => {
  renderView('cart');
});

// Render Navigation
function renderNavigation(role) {
  const nav = document.getElementById('sidebarNav');
  nav.innerHTML = navConfigs[role].map(item => `
    <div class="nav-item" data-view="${item.id}">
      <span>${item.icon}</span>
      <span>${item.label}</span>
    </div>
  `).join('');
  
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      const view = e.currentTarget.dataset.view;
      renderView(view);
      
      document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
      e.currentTarget.classList.add('active');
      
      // Close sidebar on mobile
      if (window.innerWidth <= 1024) {
        document.getElementById('sidebar').classList.add('closed');
      }
    });
  });
  
  document.querySelector('.nav-item').classList.add('active');
}

// Render Views
function renderView(view) {
  const content = document.getElementById('mainContent');
  
  switch(view) {
    case 'browse':
      renderBrowse(content);
      break;
    case 'favorites':
      renderFavorites(content);
      break;
    case 'orders':
      renderOrders(content);
      break;
    case 'loyalty':
      renderLoyalty(content);
      break;
    case 'reviews':
      renderCustomerReviews(content);
      break;
    case 'profile':
      renderProfile(content);
      break;
    case 'about':
      renderAbout(content);
      break;
    case 'cart':
      renderCart(content);
      break;
    case 'checkout':
      renderCheckout(content);
      break;
    case 'staff-dashboard':
      renderStaffDashboard(content);
      break;
    case 'staff-orders':
      renderStaffOrders(content);
      break;
    case 'staff-inventory':
      renderStaffInventory(content);
      break;
    case 'staff-reviews':
      renderStaffReviews(content);
      break;
    case 'admin-dashboard':
      renderAdminDashboard(content);
      break;
    case 'admin-orders':
      renderAdminOrders(content);
      break;
    case 'admin-inventory':
      renderAdminInventory(content);
      break;
    case 'admin-users':
      renderAdminUsers(content);
      break;
    case 'admin-promos':
      renderAdminPromos(content);
      break;
    case 'admin-reviews':
      renderAdminReviews(content);
      break;
    case 'admin-settings':
      renderAdminSettings(content);
      break;
    case 'rider-deliveries':
      renderRiderDeliveries(content);
      break;
    case 'rider-history':
      renderRiderHistory(content);
      break;
  }
}

// Browse Products
function renderBrowse(content) {
  content.innerHTML = `
    <div class="products-header">
      <h2>Browse Products</h2>
      <p style="color: var(--text-light);">Discover our latest collection of watches, bags, shoes, and clothes</p>
      
      <div class="filters">
        <select class="filter-select" id="categoryFilter">
          <option value="all">All Categories</option>
          <option value="Watches">Watches</option>
          <option value="Bags">Bags</option>
          <option value="Shoes">Shoes</option>
          <option value="Clothes">Clothes</option>
        </select>
        
        <select class="filter-select" id="sortFilter">
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
          <option value="name">Name: A-Z</option>
        </select>
        
        <input type="number" class="filter-select" id="priceFilter" placeholder="Max Price" style="width: 150px;">
      </div>
    </div>
    
    <div class="products-grid" id="productsGrid"></div>
  `;
  
  renderProducts();
  
  document.getElementById('categoryFilter').addEventListener('change', renderProducts);
  document.getElementById('sortFilter').addEventListener('change', renderProducts);
  document.getElementById('priceFilter').addEventListener('input', renderProducts);
}

function renderProducts() {
  const category = document.getElementById('categoryFilter').value;
  const sort = document.getElementById('sortFilter').value;
  const maxPrice = document.getElementById('priceFilter').value;
  
  let products = [...state.products];
  
  // Filter by category
  if (category !== 'all') {
    products = products.filter(p => p.category === category);
  }
  
  // Filter by price
  if (maxPrice) {
    products = products.filter(p => p.price <= parseInt(maxPrice));
  }
  
  // Sort
  if (sort === 'price-low') {
    products.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-high') {
    products.sort((a, b) => b.price - a.price);
  } else if (sort === 'name') {
    products.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === 'rating') {
    products.sort((a, b) => b.rating - a.rating);
  }
  
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = products.map(product => `
    <div class="product-card" onclick="viewProductDetails(${product.id})">
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <div class="product-info">
        <div class="product-header">
          <h3 class="product-name">${product.name}</h3>
          <button class="favorite-btn ${state.favorites.includes(product.id) ? 'active' : ''}" data-id="${product.id}" onclick="event.stopPropagation(); toggleFavorite(${product.id})">
            ${state.favorites.includes(product.id) ? '❤️' : '🤍'}
          </button>
        </div>
        <p class="product-category">${product.brand} • ${product.category}</p>
        <div style="display: flex; align-items: center; gap: 5px; margin: 8px 0;">
          <span style="color: #f59e0b;">⭐</span>
          <span style="font-weight: 600;">${product.rating}</span>
          <span style="color: var(--text-light); font-size: 0.9rem;">(${product.reviews})</span>
        </div>
        <div class="product-footer">
          <span class="product-price">₱${product.price.toLocaleString()}</span>
          ${getStockBadge(product.stock)}
        </div>
        <button class="btn-add-cart" data-id="${product.id}" ${product.stock === 0 ? 'disabled' : ''} onclick="event.stopPropagation(); addToCart(${product.id})">
          ${product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
        </button>
      </div>
    </div>
  `).join('');
}

function viewProductDetails(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;
  
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-content" style="max-width: 900px;">
      <button class="modal-close" onclick="this.parentElement.parentElement.remove()">✕</button>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">
        <div>
          <img src="${product.image}" alt="${product.name}" style="width: 100%; border-radius: 12px;">
          <div style="display: flex; gap: 10px; margin-top: 15px;">
            ${product.colors.map(color => `
              <div style="width: 40px; height: 40px; border-radius: 50%; background: ${color.toLowerCase()}; border: 2px solid var(--border); cursor: pointer;"></div>
            `).join('')}
          </div>
        </div>
        <div>
          <h2 style="font-size: 2rem; margin-bottom: 10px;">${product.name}</h2>
          <p style="color: var(--text-light); margin-bottom: 10px;">${product.brand}</p>
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 15px;">
            <span style="color: #f59e0b; font-size: 1.2rem;">⭐</span>
            <span style="font-weight: 600; font-size: 1.1rem;">${product.rating}</span>
            <span style="color: var(--text-light);">(${product.reviews} reviews)</span>
          </div>
          <p style="color: var(--text); margin-bottom: 20px; line-height: 1.6;">${product.description}</p>
          <div style="font-size: 2rem; font-weight: 700; color: var(--primary); margin-bottom: 20px;">₱${product.price.toLocaleString()}</div>
          
          <div style="margin-bottom: 20px;">
            <label style="font-weight: 600; display: block; margin-bottom: 10px;">Select Size:</label>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              ${product.sizes.map(size => `
                <button class="size-option" style="padding: 10px 20px; border: 2px solid var(--border); border-radius: 8px; background: var(--surface); cursor: pointer; transition: all 0.3s;" onclick="this.parentElement.querySelectorAll('.size-option').forEach(el => el.style.borderColor = 'var(--border)'); this.style.borderColor = 'var(--primary)';">${size}</button>
              `).join('')}
            </div>
          </div>
          
          <div style="margin-bottom: 20px;">
            <label style="font-weight: 600; display: block; margin-bottom: 10px;">Available Colors:</label>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              ${product.colors.map(color => `
                <span style="padding: 8px 16px; border: 2px solid var(--border); border-radius: 20px; font-size: 0.9rem;">${color}</span>
              `).join('')}
            </div>
          </div>
          
          ${getStockBadge(product.stock)}
          
          <div style="display: flex; gap: 10px; margin-top: 20px;">
            <button class="btn-primary" style="flex: 1;" onclick="addToCart(${product.id}); showToast('Added to cart!', 'success');" ${product.stock === 0 ? 'disabled' : ''}>
              Add to Cart
            </button>
            <button class="btn-secondary" style="flex: 1;" onclick="addToCart(${product.id}); renderView('checkout');" ${product.stock === 0 ? 'disabled' : ''}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
      
      <div style="margin-top: 40px; border-top: 2px solid var(--border); padding-top: 30px;">
        <h3 style="font-size: 1.5rem; margin-bottom: 20px;">Customer Reviews</h3>
        <div style="display: flex; flex-direction: column; gap: 15px;">
          ${generateSampleReviews(product.id).map(review => `
            <div style="padding: 15px; background: var(--background); border-radius: 12px;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                <div>
                  <strong>${review.userName}</strong>
                  <div style="color: #f59e0b; margin-top: 5px;">${'⭐'.repeat(review.rating)}</div>
                </div>
                <span style="color: var(--text-light); font-size: 0.9rem;">${review.date}</span>
              </div>
              <p style="color: var(--text-light);">${review.comment}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

function generateSampleReviews(productId) {
  const reviews = [
    { userName: 'John D.', rating: 5, comment: 'Excellent quality! Highly recommended.', date: '2 days ago' },
    { userName: 'Sarah M.', rating: 4, comment: 'Good product, fast delivery.', date: '1 week ago' },
    { userName: 'Mike R.', rating: 5, comment: 'Perfect fit and great value for money!', date: '2 weeks ago' }
  ];
  return reviews;
}

function addToCart(productId) {
  const product = state.products.find(p => p.id === productId);
  const cartItem = state.cart.find(item => item.id === productId);
  
  if (cartItem) {
    if (cartItem.quantity < product.stock) {
      cartItem.quantity++;
      showToast('Quantity updated in cart', 'success');
    } else {
      showToast('Maximum stock reached', 'error');
      return;
    }
  } else {
    state.cart.push({ ...product, quantity: 1 });
    showToast('Added to cart', 'success');
  }
  
  updateCartBadge();
}

function toggleFavorite(productId) {
  const index = state.favorites.indexOf(productId);
  if (index > -1) {
    state.favorites.splice(index, 1);
    showToast('Removed from favorites', 'info');
  } else {
    state.favorites.push(productId);
    showToast('Added to favorites', 'success');
  }
  updateFavoritesBadge();
  renderProducts();
}

// Favorites
function renderFavorites(content) {
  const favoriteProducts = state.products.filter(p => state.favorites.includes(p.id));
  
  if (favoriteProducts.length === 0) {
    content.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">❤️</div>
        <h3>No Favorites Yet</h3>
        <p>Start adding products to your favorites!</p>
        <button class="btn-primary" onclick="renderView('browse')">Browse Products</button>
      </div>
    `;
    return;
  }
  
  content.innerHTML = `
    <div class="products-header">
      <h2>My Favorites</h2>
      <p style="color: var(--text-light);">${favoriteProducts.length} items saved</p>
    </div>
    
    <div class="products-grid">
      ${favoriteProducts.map(product => `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}" class="product-image">
          <div class="product-info">
            <div class="product-header">
              <h3 class="product-name">${product.name}</h3>
              <button class="favorite-btn active" data-id="${product.id}">❤️</button>
            </div>
            <p class="product-category">${product.category}</p>
            <div class="product-footer">
              <span class="product-price">₱${product.price.toLocaleString()}</span>
              ${getStockBadge(product.stock)}
            </div>
            <button class="btn-add-cart" data-id="${product.id}" ${product.stock === 0 ? 'disabled' : ''}>
              ${product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  
  document.querySelectorAll('.btn-add-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(e.target.dataset.id);
      addToCart(id);
    });
  });
  
  document.querySelectorAll('.favorite-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(e.target.dataset.id);
      toggleFavorite(id);
      renderFavorites(content);
    });
  });
}

// Cart
function renderCart(content) {
  if (state.cart.length === 0) {
    content.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🛒</div>
        <h3>Your Cart is Empty</h3>
        <p>Add some products to get started!</p>
        <button class="btn-primary" onclick="renderView('browse')">Start Shopping</button>
      </div>
    `;
    return;
  }
  
  let subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 150;
  let discount = 0;
  
  if (state.appliedPromo) {
    if (state.appliedPromo.type === 'percentage') {
      discount = Math.floor(subtotal * (state.appliedPromo.discount / 100));
    } else {
      discount = state.appliedPromo.discount;
    }
  }
  
  const total = subtotal - discount + deliveryFee;
  
  content.innerHTML = `
    <div class="products-header">
      <h2>Shopping Cart  </h2>
      <p style="color: var(--text-light);">${state.cart.length} items in your cart</p>
    </div>
    
    <div class="cart-container">
      <div class="cart-items">
        ${state.cart.map((item, index) => `
          <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
              <div class="cart-item-header">
                <h3 class="cart-item-name">${item.name}</h3>
                <button class="btn-remove" data-index="${index}">🗑️</button>
              </div>
              <p class="cart-item-details">${item.category} • ₱${item.price.toLocaleString()}</p>
              <div class="quantity-controls">
                <button class="qty-btn" data-index="${index}" data-action="decrease">-</button>
                <span class="qty-value">${item.quantity}</span>
                <button class="qty-btn" data-index="${index}" data-action="increase">+</button>
                <span class="cart-item-price">₱${(item.price * item.quantity).toLocaleString()}</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
      
      <div class="order-summary">
        <h3>Order Summary</h3>
        
        <div class="summary-row">
          <span>Subtotal</span>
          <span>₱${subtotal.toLocaleString()}</span>
        </div>
        
        <div class="summary-row">
          <span>Delivery Fee</span>
          <span>₱${deliveryFee}</span>
        </div>
        
        ${discount > 0 ? `
          <div class="summary-row" style="color: var(--success);">
            <span>Discount (${state.appliedPromo.code})</span>
            <span>-₱${discount.toLocaleString()}</span>
          </div>
        ` : ''}
        
        <div class="summary-row total">
          <span>Total</span>
          <span>₱${total.toLocaleString()}</span>
        </div>
        
        <div class="promo-section">
          <label style="font-weight: 600; margin-bottom: 5px; display: block;">Promo Code</label>
          <div class="promo-input-group">
            <input type="text" id="promoInput" class="promo-input" placeholder="Enter code">
            <button class="btn-apply" id="applyPromo">Apply</button>
          </div>
          <div id="promoMessage"></div>
        </div>
        
        <button class="btn-checkout" id="checkoutBtn">Proceed to Checkout</button>
      </div>
    </div>
  `;
  
  document.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const index = parseInt(e.target.dataset.index);
      const action = e.target.dataset.action;
      
      if (action === 'increase') {
        if (state.cart[index].quantity < state.cart[index].stock) {
          state.cart[index].quantity++;
        } else {
          showToast('Maximum stock reached', 'error');
          return;
        }
      } else {
        if (state.cart[index].quantity > 1) {
          state.cart[index].quantity--;
        } else {
          return;
        }
      }
      
      updateCartBadge();
      renderCart(content);
    });
  });
  
  document.querySelectorAll('.btn-remove').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const index = parseInt(e.target.dataset.index);
      state.cart.splice(index, 1);
      updateCartBadge();
      renderCart(content);
      showToast('Item removed from cart', 'info');
    });
  });
  
  document.getElementById('applyPromo').addEventListener('click', () => {
    const code = document.getElementById('promoInput').value.toUpperCase();
    const message = document.getElementById('promoMessage');
    
    const promo = state.promoCodes.find(p => p.code === code && p.active);
    
    if (promo) {
      if (subtotal >= promo.minPurchase) {
        state.appliedPromo = promo;
        message.className = 'promo-message success';
        if (promo.type === 'percentage') {
          message.textContent = `✓ ${promo.discount}% discount applied!`;
        } else {
          message.textContent = `✓ ₱${promo.discount} discount applied!`;
        }
        showToast('Promo code applied successfully', 'success');
        renderCart(content);
      } else {
        message.className = 'promo-message error';
        message.textContent = `✕ Minimum purchase of ₱${promo.minPurchase} required`;
        showToast('Minimum purchase not met', 'error');
      }
    } else if (code) {
      message.className = 'promo-message error';
      message.textContent = '✕ Invalid promo code';
      showToast('Invalid promo code', 'error');
    }
  });
  
  document.getElementById('checkoutBtn').addEventListener('click', () => {
    renderView('checkout');
  });
}

// Checkout
function renderCheckout(content) {
  let subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let deliveryFee = 150;
  let discount = 0;
  
  if (state.appliedPromo) {
    if (state.appliedPromo.type === 'percentage') {
      discount = Math.floor(subtotal * (state.appliedPromo.discount / 100));
    } else {
      discount = state.appliedPromo.discount;
    }
  }
  
  const total = subtotal - discount + deliveryFee;
  
  // Pre-fill with user data if available
  const userName = state.currentUser ? state.currentUser.name : '';
  const userPhone = state.currentUser ? state.currentUser.phone : '';
  
  content.innerHTML = `
    <div class="products-header">
      <h2>Checkout</h2>
      <p style="color: var(--text-light);">Complete your order - Review and confirm delivery details</p>
    </div>
    
    <div class="cart-container">
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div class="order-summary">
          <h3>📍 Delivery Information</h3>
          <p style="color: var(--text-light); font-size: 0.9rem; margin-top: 5px;">Please provide accurate delivery details</p>
          <div style="display: flex; flex-direction: column; gap: 15px; margin-top: 20px;">
            <div class="form-group">
              <label style="display: flex; align-items: center; gap: 5px;">
                <span style="color: var(--error);">*</span>
                Full Name
              </label>
              <input 
                type="text" 
                id="deliveryName" 
                class="promo-input" 
                placeholder="Enter your full name" 
                value="${userName}"
                required
                style="width: 100%;">
              <small style="color: var(--text-light); font-size: 0.85rem;">Name of person receiving the order</small>
            </div>
            
            <div class="form-group">
              <label style="display: flex; align-items: center; gap: 5px;">
                <span style="color: var(--error);">*</span>
                Phone Number
              </label>
              <input 
                type="tel" 
                id="deliveryPhone" 
                class="promo-input" 
                placeholder="+63 912 345 6789" 
                value="${userPhone}"
                required
                pattern="[+]?[0-9]{10,13}"
                style="width: 100%;">
              <small style="color: var(--text-light); font-size: 0.85rem;">We'll call this number for delivery updates</small>
            </div>
            
            <div class="form-group">
              <label style="display: flex; align-items: center; gap: 5px;">
                <span style="color: var(--error);">*</span>
                Complete Address
              </label>
              <textarea 
                id="deliveryAddress" 
                class="promo-input" 
                rows="3" 
                placeholder="House/Unit No., Street Name, Barangay, City/Municipality, Province" 
                required
                style="width: 100%; resize: vertical;"></textarea>
              <small style="color: var(--text-light); font-size: 0.85rem;">Include landmarks for easier delivery</small>
            </div>
            
            <div class="form-group">
              <label>Additional Notes (Optional)</label>
              <textarea 
                id="deliveryNotes" 
                class="promo-input" 
                rows="2" 
                placeholder="e.g., Gate code, special instructions, preferred delivery time" 
                style="width: 100%; resize: vertical;"></textarea>
            </div>
          </div>
        </div>
        
        <div class="order-summary">
          <h3>🚚 Delivery Zone</h3>
          <p style="color: var(--text-light); font-size: 0.9rem; margin-top: 5px;">Select your delivery area</p>
          <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 15px;">
            <label class="zone-option" style="display: flex; align-items: center; gap: 10px; padding: 15px; border: 2px solid var(--border); border-radius: 8px; cursor: pointer; transition: all 0.3s;">
              <input type="radio" name="zone" value="zone1" checked onchange="updateDeliveryFee()">
              <div style="flex: 1;">
                <div style="font-weight: 600; font-size: 1.05rem;">📍 Zone 1 - Metro Manila</div>
                <div style="font-size: 0.9rem; color: var(--text-light); margin-top: 3px;">Makati, Manila, Quezon City, Pasig, Taguig</div>
                <div style="display: flex; gap: 15px; margin-top: 8px;">
                  <span style="color: var(--primary); font-weight: 600;">₱150</span>
                  <span style="color: var(--text-light);">⏱️ 30-45 mins</span>
                </div>
              </div>
            </label>
            
            <label class="zone-option" style="display: flex; align-items: center; gap: 10px; padding: 15px; border: 2px solid var(--border); border-radius: 8px; cursor: pointer; transition: all 0.3s;">
              <input type="radio" name="zone" value="zone2" onchange="updateDeliveryFee()">
              <div style="flex: 1;">
                <div style="font-weight: 600; font-size: 1.05rem;">📍 Zone 2 - Greater Manila</div>
                <div style="font-size: 0.9rem; color: var(--text-light); margin-top: 3px;">Caloocan, Parañaque, Las Piñas, Muntinlupa</div>
                <div style="display: flex; gap: 15px; margin-top: 8px;">
                  <span style="color: var(--primary); font-weight: 600;">₱250</span>
                  <span style="color: var(--text-light);">⏱️ 1-2 hours</span>
                </div>
              </div>
            </label>
            
            <label class="zone-option" style="display: flex; align-items: center; gap: 10px; padding: 15px; border: 2px solid var(--border); border-radius: 8px; cursor: pointer; transition: all 0.3s;">
              <input type="radio" name="zone" value="zone3" onchange="updateDeliveryFee()">
              <div style="flex: 1;">
                <div style="font-weight: 600; font-size: 1.05rem;">📍 Zone 3 - Provincial</div>
                <div style="font-size: 0.9rem; color: var(--text-light); margin-top: 3px;">Cavite, Laguna, Rizal, Bulacan</div>
                <div style="display: flex; gap: 15px; margin-top: 8px;">
                  <span style="color: var(--primary); font-weight: 600;">₱350</span>
                  <span style="color: var(--text-light);">⏱️ 2-3 hours</span>
                </div>
              </div>
            </label>
          </div>
        </div>
        
        <div class="order-summary">
          <h3>⏰ Delivery Schedule</h3>
          <p style="color: var(--text-light); font-size: 0.9rem; margin-top: 5px;">When would you like to receive your order?</p>
          <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 15px;">
            <label class="schedule-option" style="display: flex; align-items: center; gap: 10px; padding: 15px; border: 2px solid var(--border); border-radius: 8px; cursor: pointer; transition: all 0.3s;">
              <input type="radio" name="schedule" value="asap" checked>
              <div style="flex: 1;">
                <div style="font-weight: 600; font-size: 1.05rem;">🚀 ASAP (As Soon As Possible)</div>
                <div style="font-size: 0.9rem; color: var(--text-light); margin-top: 3px;">Delivery within estimated time based on your zone</div>
              </div>
            </label>
            
            <label class="schedule-option" style="display: flex; align-items: center; gap: 10px; padding: 15px; border: 2px solid var(--border); border-radius: 8px; cursor: pointer; transition: all 0.3s;">
              <input type="radio" name="schedule" value="1-3h">
              <div style="flex: 1;">
                <div style="font-weight: 600; font-size: 1.05rem;">⏱️ Scheduled (1-3 hours)</div>
                <div style="font-size: 0.9rem; color: var(--text-light); margin-top: 3px;">Delivery between 1-3 hours from now</div>
              </div>
            </label>
            
            <label class="schedule-option" style="display: flex; align-items: center; gap: 10px; padding: 15px; border: 2px solid var(--border); border-radius: 8px; cursor: pointer; transition: all 0.3s;">
              <input type="radio" name="schedule" value="tomorrow">
              <div style="flex: 1;">
                <div style="font-weight: 600; font-size: 1.05rem;">🌅 Tomorrow Morning</div>
                <div style="font-size: 0.9rem; color: var(--text-light); margin-top: 3px;">Delivery between 8:00 AM - 12:00 PM tomorrow</div>
              </div>
            </label>
          </div>
        </div>
        
        <div class="order-summary">
          <h3>💳 Payment Method</h3>
          <p style="color: var(--text-light); font-size: 0.9rem; margin-top: 5px;">Choose how you want to pay</p>
          <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 15px;">
            <label class="payment-option" style="display: flex; align-items: center; gap: 10px; padding: 15px; border: 2px solid var(--border); border-radius: 8px; cursor: pointer; transition: all 0.3s;">
              <input type="radio" name="payment" value="cod" checked>
              <div style="flex: 1;">
                <div style="font-weight: 600; font-size: 1.05rem;">💵 Cash on Delivery</div>
                <div style="font-size: 0.9rem; color: var(--text-light); margin-top: 3px;">Pay with cash when you receive your order</div>
              </div>
              <span style="background: var(--background); padding: 5px 10px; border-radius: 12px; font-size: 0.85rem; color: var(--success); font-weight: 600;">Recommended</span>
            </label>
            
            <label class="payment-option" style="display: flex; align-items: center; gap: 10px; padding: 15px; border: 2px solid var(--border); border-radius: 8px; cursor: pointer; transition: all 0.3s;">
              <input type="radio" name="payment" value="card">
              <div style="flex: 1;">
                <div style="font-weight: 600; font-size: 1.05rem;">💳 Credit/Debit Card</div>
                <div style="font-size: 0.9rem; color: var(--text-light); margin-top: 3px;">Visa, Mastercard, American Express</div>
              </div>
            </label>
            
            <label class="payment-option" style="display: flex; align-items: center; gap: 10px; padding: 15px; border: 2px solid var(--border); border-radius: 8px; cursor: pointer; transition: all 0.3s;">
              <input type="radio" name="payment" value="wallet">
              <div style="flex: 1;">
                <div style="font-weight: 600; font-size: 1.05rem;">📱 E-Wallet</div>
                <div style="font-size: 0.9rem; color: var(--text-light); margin-top: 3px;">GCash, PayMaya, GrabPay</div>
              </div>
            </label>
          </div>
        </div>
      </div>
      
      <div class="order-summary" style="position: sticky; top: 100px;">
        <h3>📋 Order Summary</h3>
        
        <div style="margin: 20px 0; max-height: 200px; overflow-y: auto;">
          ${state.cart.map(item => `
            <div class="summary-row" style="border-bottom: 1px solid var(--border); padding: 8px 0;">
              <span style="font-size: 0.95rem;">${item.name} x${item.quantity}</span>
              <span style="font-weight: 600;">₱${(item.price * item.quantity).toLocaleString()}</span>
            </div>
          `).join('')}
        </div>
        
        <div style="border-top: 2px solid var(--border); padding-top: 15px;">
          <div class="summary-row">
            <span>Subtotal</span>
            <span>₱${subtotal.toLocaleString()}</span>
          </div>
          
          ${discount > 0 ? `
            <div class="summary-row" style="color: var(--success);">
              <span>Discount (${state.appliedPromo.code})</span>
              <span>-₱${discount.toLocaleString()}</span>
            </div>
          ` : ''}
          
          <div class="summary-row">
            <span>Delivery Fee</span>
            <span id="deliveryFeeDisplay">₱${deliveryFee}</span>
          </div>
          
          <div class="summary-row total" style="margin-top: 15px; padding-top: 15px; border-top: 2px solid var(--border);">
            <span>Total Amount</span>
            <span id="totalDisplay">₱${total.toLocaleString()}</span>
          </div>
        </div>
        
        <div style="background: var(--background); padding: 12px; border-radius: 8px; margin: 15px 0;">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 5px;">
            <span style="font-size: 1.2rem;">⭐</span>
            <span style="font-weight: 600;">Earn Loyalty Points</span>
          </div>
          <div style="font-size: 0.9rem; color: var(--text-light);">
            You'll earn <strong style="color: var(--primary);">${Math.floor(total / 10)} points</strong> from this order!
          </div>
        </div>
        
        <button class="btn-checkout" id="placeOrderBtn" style="font-size: 1.1rem; padding: 18px;">
          🛍️ Place Order - ₱<span id="btnTotalDisplay">${total.toLocaleString()}</span>
        </button>
        <button class="btn-secondary" onclick="renderView('cart')" style="width: 100%; margin-top: 10px;">
          ← Back to Cart
        </button>
        
        <div style="margin-top: 15px; padding: 12px; background: #fef3c7; border-radius: 8px; border-left: 4px solid var(--warning);">
          <div style="font-size: 0.85rem; color: var(--text);">
            <strong>📌 Note:</strong> Please review all information before placing your order. Make sure your delivery address and contact number are correct.
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Add input validation styling
  const inputs = document.querySelectorAll('#deliveryName, #deliveryPhone, #deliveryAddress');
  inputs.forEach(input => {
    input.addEventListener('blur', function() {
      if (this.value.trim() === '') {
        this.style.borderColor = 'var(--error)';
      } else {
        this.style.borderColor = 'var(--primary)';
      }
    });
    
    input.addEventListener('input', function() {
      if (this.value.trim() !== '') {
        this.style.borderColor = 'var(--border)';
      }
    });
  });
  
  // Add hover effects to options
  document.querySelectorAll('.zone-option, .schedule-option, .payment-option').forEach(option => {
    option.addEventListener('mouseenter', function() {
      this.style.borderColor = 'var(--primary)';
      this.style.background = 'var(--background)';
    });
    
    option.addEventListener('mouseleave', function() {
      if (!this.querySelector('input').checked) {
        this.style.borderColor = 'var(--border)';
        this.style.background = 'var(--surface)';
      }
    });
    
    const radio = option.querySelector('input[type="radio"]');
    radio.addEventListener('change', function() {
      document.querySelectorAll(`.${option.className.split(' ')[0]}`).forEach(opt => {
        opt.style.borderColor = 'var(--border)';
        opt.style.background = 'var(--surface)';
      });
      if (this.checked) {
        option.style.borderColor = 'var(--primary)';
        option.style.background = 'var(--background)';
      }
    });
  });
  
  // Set initial selected state
  document.querySelectorAll('input[type="radio"]:checked').forEach(radio => {
    const option = radio.closest('.zone-option, .schedule-option, .payment-option');
    if (option) {
      option.style.borderColor = 'var(--primary)';
      option.style.background = 'var(--background)';
    }
  });
  
  document.getElementById('placeOrderBtn').addEventListener('click', () => {
    const fullName = document.getElementById('deliveryName').value.trim();
    const phone = document.getElementById('deliveryPhone').value.trim();
    const address = document.getElementById('deliveryAddress').value.trim();
    const notes = document.getElementById('deliveryNotes').value.trim();
    const zone = document.querySelector('input[name="zone"]:checked').value;
    const schedule = document.querySelector('input[name="schedule"]:checked').value;
    const payment = document.querySelector('input[name="payment"]:checked').value;
    
    // Validation
    if (!fullName) {
      showToast('Please enter your full name', 'error');
      document.getElementById('deliveryName').focus();
      document.getElementById('deliveryName').style.borderColor = 'var(--error)';
      return;
    }
    
    if (!phone) {
      showToast('Please enter your phone number', 'error');
      document.getElementById('deliveryPhone').focus();
      document.getElementById('deliveryPhone').style.borderColor = 'var(--error)';
      return;
    }
    
    // Validate phone format
    const phoneRegex = /^[+]?[0-9]{10,13}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
      showToast('Please enter a valid phone number (10-13 digits)', 'error');
      document.getElementById('deliveryPhone').focus();
      document.getElementById('deliveryPhone').style.borderColor = 'var(--error)';
      return;
    }
    
    if (!address) {
      showToast('Please enter your complete delivery address', 'error');
      document.getElementById('deliveryAddress').focus();
      document.getElementById('deliveryAddress').style.borderColor = 'var(--error)';
      return;
    }
    
    if (address.length < 20) {
      showToast('Please provide a more detailed address (minimum 20 characters)', 'error');
      document.getElementById('deliveryAddress').focus();
      document.getElementById('deliveryAddress').style.borderColor = 'var(--error)';
      return;
    }
    
    // Get delivery fee based on zone
    const zoneFees = { zone1: 150, zone2: 250, zone3: 350 };
    const finalDeliveryFee = zoneFees[zone];
    const finalTotal = subtotal - discount + finalDeliveryFee;
    
    const order = {
      id: Date.now(),
      items: [...state.cart],
      total: finalTotal,
      subtotal: subtotal,
      discount: discount,
      deliveryFee: finalDeliveryFee,
      status: 'pending',
      date: new Date().toISOString(),
      progress: 0,
      customer: {
        id: state.currentUser.id,
        name: fullName,
        phone: phone,
        address: address,
        email: state.currentUser.email,
        notes: notes
      },
      delivery: {
        zone: zone,
        schedule: schedule,
        riderId: null,
        riderName: null
      },
      payment: payment
    };
    
    state.orders.unshift(order);
    const pointsEarned = Math.floor(finalTotal / 10);
    state.loyaltyPoints += pointsEarned;
    
    // Update product stock
    state.cart.forEach(item => {
      const product = state.products.find(p => p.id === item.id);
      if (product) {
        product.stock -= item.quantity;
      }
    });
    
    state.cart = [];
    state.appliedPromo = null;
    
    updateCartBadge();
    updateLoyaltyPoints();
    
    // Show success message with order details
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-content">
        <div style="text-align: center; padding: 20px;">
          <div style="font-size: 4rem; margin-bottom: 15px;">✅</div>
          <h2 style="color: var(--success); margin-bottom: 10px;">Order Placed Successfully!</h2>
          <p style="color: var(--text-light); margin-bottom: 20px;">Thank you for your order, ${fullName}!</p>
          
          <div style="background: var(--background); padding: 20px; border-radius: 12px; text-align: left; margin-bottom: 20px;">
            <div style="font-weight: 600; margin-bottom: 15px; font-size: 1.1rem;">Order Details:</div>
            <div style="display: grid; gap: 10px;">
              <div style="display: flex; justify-content: space-between;">
                <span style="color: var(--text-light);">Order ID:</span>
                <strong>#${order.id}</strong>
              </div>
              <div style="display: flex; justify-content: space-between;">
                <span style="color: var(--text-light);">Total Amount:</span>
                <strong style="color: var(--primary);">₱${finalTotal.toLocaleString()}</strong>
              </div>
              <div style="display: flex; justify-content: space-between;">
                <span style="color: var(--text-light);">Payment:</span>
                <strong>${payment === 'cod' ? 'Cash on Delivery' : payment === 'card' ? 'Card' : 'E-Wallet'}</strong>
              </div>
              <div style="display: flex; justify-content: space-between;">
                <span style="color: var(--text-light);">Points Earned:</span>
                <strong style="color: var(--primary);">⭐ ${pointsEarned} points</strong>
              </div>
            </div>
          </div>
          
          <div style="background: #d1fae5; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <div style="font-weight: 600; color: var(--success); margin-bottom: 5px;">📱 We'll keep you updated!</div>
            <div style="font-size: 0.9rem; color: var(--text);">
              We'll send updates to <strong>${phone}</strong>
            </div>
          </div>
          
          <button class="btn-primary" onclick="this.closest('.modal-overlay').remove(); renderView('orders')" style="width: 100%; margin-bottom: 10px;">
            View My Orders
          </button>
          <button class="btn-secondary" onclick="this.closest('.modal-overlay').remove(); renderView('browse')" style="width: 100%;">
            Continue Shopping
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  });
}

// Update delivery fee function
function updateDeliveryFee() {
  const zone = document.querySelector('input[name="zone"]:checked').value;
  const zoneFees = { zone1: 150, zone2: 250, zone3: 350 };
  const newDeliveryFee = zoneFees[zone];
  
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let discount = 0;
  
  if (state.appliedPromo) {
    if (state.appliedPromo.type === 'percentage') {
      discount = Math.floor(subtotal * (state.appliedPromo.discount / 100));
    } else {
      discount = state.appliedPromo.discount;
    }
  }
  
  const newTotal = subtotal - discount + newDeliveryFee;
  
  document.getElementById('deliveryFeeDisplay').textContent = `₱${newDeliveryFee}`;
  document.getElementById('totalDisplay').textContent = `₱${newTotal.toLocaleString()}`;
  document.getElementById('btnTotalDisplay').textContent = newTotal.toLocaleString();
}

// Orders
function renderOrders(content) {
  if (state.orders.length === 0) {
    content.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📦</div>
        <h3>No Orders Yet</h3>
        <p>Start shopping to see your orders here!</p>
        <button class="btn-primary" onclick="renderView('browse')">Browse Products</button>
      </div>
    `;
    return;
  }
  
  content.innerHTML = `
    <div class="products-header">
      <h2>My Orders</h2>
      <p style="color: var(--text-light);">${state.orders.length} orders</p>
    </div>
    
    <div style="display: flex; flex-direction: column; gap: 20px;">
      ${state.orders.map(order => `
        <div class="order-card">
          <div class="order-header">
            <div>
              <div class="order-id">Order #${order.id}</div>
              <div class="order-date">${new Date(order.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</div>
              ${order.delivery && order.delivery.riderName ? `
                <div style="margin-top: 5px; color: var(--primary); font-size: 0.9rem;">
                  🚚 Rider: ${order.delivery.riderName}
                </div>
              ` : ''}
            </div>
            <span class="status-badge ${order.status}">${order.status.charAt(0).toUpperCase() + order.status.slice(1)}</span>
          </div>
          
          <div class="order-progress">
            <div class="progress-step ${order.progress >= 0 ? order.progress === 0 ? 'active' : 'completed' : ''}">
              <div class="progress-icon">⏳</div>
              <div class="progress-label">Pending</div>
              <div class="progress-line"></div>
            </div>
            <div class="progress-step ${order.progress >= 1 ? order.progress === 1 ? 'active' : 'completed' : ''}">
              <div class="progress-icon">✓</div>
              <div class="progress-label">Confirmed</div>
              <div class="progress-line"></div>
            </div>
            <div class="progress-step ${order.progress >= 2 ? order.progress === 2 ? 'active' : 'completed' : ''}">
              <div class="progress-icon">📦</div>
              <div class="progress-label">Preparing</div>
              <div class="progress-line"></div>
            </div>
            <div class="progress-step ${order.progress >= 3 ? order.progress === 3 ? 'active' : 'completed' : ''}">
              <div class="progress-icon">🚚</div>
              <div class="progress-label">Out for Delivery</div>
              <div class="progress-line"></div>
            </div>
            <div class="progress-step ${order.progress >= 4 ? 'completed' : ''}">
              <div class="progress-icon">✓</div>
              <div class="progress-label">Delivered</div>
            </div>
          </div>
          
          <div class="order-items">
            ${order.items.map(item => `
              <div class="order-item">
                <span>${item.name} x${item.quantity}</span>
                <span>₱${(item.price * item.quantity).toLocaleString()}</span>
              </div>
            `).join('')}
          </div>
          
          <div class="order-total">
            <span>Total</span>
            <span>₱${order.total.toLocaleString()}</span>
          </div>
          
          ${order.status === 'delivered' ? `
            <div style="background: #d1fae5; padding: 12px; border-radius: 8px; margin-top: 10px; text-align: center; color: var(--success); font-weight: 600;">
              ✓ Delivered on ${order.deliveredAt ? new Date(order.deliveredAt).toLocaleDateString() : 'N/A'}
            </div>
          ` : ''}
          
          <button class="btn-reorder" onclick="reorderItems(${order.id})">Reorder</button>
        </div>
      `).join('')}
    </div>
  `;
}

function reorderItems(orderId) {
  const order = state.orders.find(o => o.id === orderId);
  if (order) {
    order.items.forEach(item => {
      const product = state.products.find(p => p.id === item.id);
      if (product && product.stock > 0) {
        addToCart(item.id);
      }
    });
    showToast('Items added to cart!', 'success');
    renderView('cart');
  }
}

// Loyalty Points
function renderLoyalty(content) {
  content.innerHTML = `
    <div class="products-header">
      <h2>Loyalty Points</h2>
      <p style="color: var(--text-light);">Earn rewards with every purchase</p>
    </div>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-bottom: 30px;">
      <div style="background: linear-gradient(135deg, var(--primary), var(--secondary)); border-radius: 16px; padding: 40px; color: white;">
        <h3 style="font-size: 1.2rem; margin-bottom: 10px; opacity: 0.9;">Your Points Balance</h3>
        <div style="font-size: 4rem; font-weight: 700; margin: 20px 0;">⭐ ${state.loyaltyPoints}</div>
        <p style="opacity: 0.9;">Earn 1 point for every ₱10 spent</p>
      </div>
      
      <div class="order-summary">
        <h3>How to Earn Points</h3>
        <div style="display: flex; flex-direction: column; gap: 15px; margin-top: 20px;">
          <div style="display: flex; align-items: start; gap: 10px;">
            <span style="font-size: 1.5rem;">🛍️</span>
            <div>
              <div style="font-weight: 600;">Make Purchases</div>
              <div style="font-size: 0.9rem; color: var(--text-light);">Earn 1 point per ₱10 spent</div>
            </div>
          </div>
          <div style="display: flex; align-items: start; gap: 10px;">
            <span style="font-size: 1.5rem;">🎁</span>
            <div>
              <div style="font-weight: 600;">Special Promotions</div>
              <div style="font-size: 0.9rem; color: var(--text-light);">Bonus points during sales</div>
            </div>
          </div>
          <div style="display: flex; align-items: start; gap: 10px;">
            <span style="font-size: 1.5rem;">👥</span>
            <div>
              <div style="font-weight: 600;">Refer Friends</div>
              <div style="font-size: 0.9rem; color: var(--text-light);">Get 100 points per referral</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="data-table">
      <div class="table-header">
        <h3>Points History</h3>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th style="text-align: right;">Points</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${new Date().toLocaleDateString()}</td>
            <td>Welcome Bonus</td>
            <td style="text-align: right; color: var(--success); font-weight: 600;">+250</td>
          </tr>
          ${state.orders.map(order => `
            <tr>
              <td>${new Date(order.date).toLocaleDateString()}</td>
              <td>Order #${order.id}</td>
              <td style="text-align: right; color: var(--success); font-weight: 600;">+${Math.floor(order.total / 10)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

// About Us
function renderAbout(content) {
  content.innerHTML = `
    <div class="about-container">
      <div class="about-hero">
        <h2>About ShopHub</h2>
        <p>Your trusted fashion destination for quality products</p>
      </div>
      
      <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200" alt="Store" class="about-image">
      
      <div class="mission-vision">
        <div class="mv-card">
          <h3>🎯 Our Mission</h3>
          <p>
            To provide our customers with the finest selection of watches, bags, shoes, and clothing 
            at competitive prices. We are committed to delivering exceptional quality, outstanding 
            customer service, and a seamless shopping experience that exceeds expectations.
          </p>
          <p style="margin-top: 15px;">
            We believe in making fashion accessible to everyone while maintaining the highest 
            standards of product quality and customer satisfaction. Our mission is to be your 
            go-to destination for all your fashion needs.
          </p>
        </div>
        
        <div class="mv-card">
          <h3>🚀 Our Vision</h3>
          <p>
            To become the leading e-commerce platform in the Philippines, recognized for our 
            extensive product range, innovative shopping features, and unwavering commitment 
            to customer satisfaction.
          </p>
          <p style="margin-top: 15px;">
            We envision a future where shopping is not just a transaction, but an experience 
            that brings joy and convenience to every customer. Through continuous innovation 
            and dedication to excellence, we aim to set new standards in online retail.
          </p>
        </div>
      </div>
      
      <div style="margin-top: 40px; background: var(--surface); border: 2px solid var(--border); border-radius: 16px; padding: 30px;">
        <h3 style="font-size: 1.8rem; margin-bottom: 20px; text-align: center;">Why Choose Us?</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; margin-top: 30px;">
          <div style="text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 10px;">✓</div>
            <h4 style="font-size: 1.2rem; margin-bottom: 10px;">Quality Products</h4>
            <p style="color: var(--text-light);">Carefully curated selection of premium items</p>
          </div>
          <div style="text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 10px;">🚚</div>
            <h4 style="font-size: 1.2rem; margin-bottom: 10px;">Fast Delivery</h4>
            <p style="color: var(--text-light);">Quick and reliable shipping nationwide</p>
          </div>
          <div style="text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 10px;">💳</div>
            <h4 style="font-size: 1.2rem; margin-bottom: 10px;">Secure Payment</h4>
            <p style="color: var(--text-light);">Multiple safe payment options available</p>
          </div>
          <div style="text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 10px;">⭐</div>
            <h4 style="font-size: 1.2rem; margin-bottom: 10px;">Loyalty Rewards</h4>
            <p style="color: var(--text-light);">Earn points with every purchase</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Staff Dashboard
function renderStaffDashboard(content) {
  const pendingOrders = state.orders.filter(o => o.status === 'confirmed' || o.status === 'preparing').length;
  const lowStock = state.products.filter(p => p.stock < 15).length;
  const completedToday = state.orders.filter(o => o.status === 'delivered').length;
  
  content.innerHTML = `
    <div class="products-header">
      <h2>Staff Dashboard</h2>
      <p style="color: var(--text-light);">Manage orders and inventory</p>
    </div>
    
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon orders">📋</div>
        <div class="stat-info">
          <h4>Pending Orders</h4>
          <div class="stat-value">${pendingOrders}</div>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon average">⚠️</div>
        <div class="stat-info">
          <h4>Low Stock Items</h4>
          <div class="stat-value">${lowStock}</div>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon customers">✓</div>
        <div class="stat-info">
          <h4>Completed Today</h4>
          <div class="stat-value">${completedToday}</div>
        </div>
      </div>
    </div>
    
    <div class="data-table">
      <div class="table-header">
        <h3>Recent Activity</h3>
      </div>
      <div style="padding: 20px;">
        ${state.orders.slice(0, 5).map(order => `
          <div style="display: flex; align-items: center; gap: 15px; padding: 15px; background: var(--background); border-radius: 8px; margin-bottom: 10px;">
            <div style="width: 50px; height: 50px; background: var(--primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; color: white;">
              ${order.status === 'delivered' ? '✓' : '📦'}
            </div>
            <div style="flex: 1;">
              <div style="font-weight: 600;">Order #${order.id}</div>
              <div style="font-size: 0.9rem; color: var(--text-light);">${new Date(order.date).toLocaleString()}</div>
            </div>
            <span class="status-badge ${order.status}">${order.status.charAt(0).toUpperCase() + order.status.slice(1)}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Staff Orders
function renderStaffOrders(content) {
  content.innerHTML = `
    <div class="products-header">
      <h2>Order Management</h2>
      <p style="color: var(--text-light);">View and update order status</p>
    </div>
    
    <div class="data-table">
      <div class="table-header">
        <h3>All Orders</h3>
        <div class="table-actions">
          <select class="filter-select" id="staffOrderFilter">
            <option value="all">All Orders</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="preparing">Preparing</option>
            <option value="delivering">Out for Delivery</option>
            <option value="delivered">Delivered</option>
          </select>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Items</th>
            <th>Total</th>
            <th>Status</th>
            <th style="text-align: right;">Actions</th>
          </tr>
        </thead>
        <tbody id="staffOrdersTable">
          ${renderStaffOrdersTable()}
        </tbody>
      </table>
    </div>
  `;
  
  document.getElementById('staffOrderFilter').addEventListener('change', () => {
    document.getElementById('staffOrdersTable').innerHTML = renderStaffOrdersTable();
  });
}

function renderStaffOrdersTable() {
  const filter = document.getElementById('staffOrderFilter')?.value || 'all';
  let orders = state.orders;
  
  if (filter !== 'all') {
    orders = orders.filter(o => o.status === filter);
  }
  
  return orders.map(order => `
    <tr>
      <td>#${order.id}</td>
      <td>${new Date(order.date).toLocaleDateString()}</td>
      <td>${order.items.length} items</td>
      <td>₱${order.total.toLocaleString()}</td>
      <td><span class="status-badge ${order.status}">${order.status.charAt(0).toUpperCase() + order.status.slice(1)}</span></td>
      <td style="text-align: right;">
        <div class="action-btns">
          <button class="btn-icon edit" onclick="showStaffOrderStatusModal(${order.id})">Change Status</button>
          <button class="btn-icon" style="background: #dbeafe; color: #1e40af;" onclick="viewOrderDetails(${order.id})">View</button>
        </div>
      </td>
    </tr>
  `).join('');
}

function showStaffOrderStatusModal(orderId) {
  const order = state.orders.find(o => o.id === orderId);
  if (!order) return;
  
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-content" style="max-width: 700px;">
      <button class="modal-close" onclick="this.parentElement.parentElement.remove()">✕</button>
      <h2 style="margin-bottom: 20px;">Manage Order #${order.id}</h2>
      
      <div style="background: var(--background); padding: 20px; border-radius: 12px; margin-bottom: 20px;">
        <h3 style="margin-bottom: 15px;">Customer Information</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
          <div>
            <div style="color: var(--text-light); font-size: 0.9rem;">Name</div>
            <div style="font-weight: 600;">${order.customer.name}</div>
          </div>
          <div>
            <div style="color: var(--text-light); font-size: 0.9rem;">Phone</div>
            <div style="font-weight: 600;">${order.customer.phone}</div>
          </div>
          <div style="grid-column: 1 / -1;">
            <div style="color: var(--text-light); font-size: 0.9rem;">Address</div>
            <div style="font-weight: 600;">${order.customer.address}</div>
          </div>
        </div>
      </div>
      
      <div style="margin-bottom: 20px;">
        <h3 style="margin-bottom: 15px;">Order Items</h3>
        ${order.items.map(item => `
          <div style="display: flex; justify-content: space-between; padding: 10px; background: var(--background); border-radius: 8px; margin-bottom: 8px;">
            <span>${item.name} x${item.quantity}</span>
            <span style="font-weight: 600;">₱${(item.price * item.quantity).toLocaleString()}</span>
          </div>
        `).join('')}
        <div style="display: flex; justify-content: space-between; padding: 15px; background: var(--primary); color: white; border-radius: 8px; margin-top: 10px; font-weight: 700; font-size: 1.1rem;">
          <span>Total</span>
          <span>₱${order.total.toLocaleString()}</span>
        </div>
      </div>
      
      <div>
        <h3 style="margin-bottom: 15px;">Update Order Status</h3>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          <label style="display: flex; align-items: center; gap: 10px; padding: 15px; border: 2px solid var(--border); border-radius: 8px; cursor: pointer; ${order.status === 'pending' ? 'background: var(--background); border-color: var(--primary);' : ''}">
            <input type="radio" name="orderStatus" value="pending" ${order.status === 'pending' ? 'checked' : ''}>
            <div>
              <div style="font-weight: 600;">⏳ Pending</div>
              <div style="font-size: 0.9rem; color: var(--text-light);">Order is waiting for confirmation</div>
            </div>
          </label>
          
          <label style="display: flex; align-items: center; gap: 10px; padding: 15px; border: 2px solid var(--border); border-radius: 8px; cursor: pointer; ${order.status === 'confirmed' ? 'background: var(--background); border-color: var(--primary);' : ''}">
            <input type="radio" name="orderStatus" value="confirmed" ${order.status === 'confirmed' ? 'checked' : ''}>
            <div>
              <div style="font-weight: 600;">✓ Confirmed</div>
              <div style="font-size: 0.9rem; color: var(--text-light);">Order confirmed and ready to prepare</div>
            </div>
          </label>
          
          <label style="display: flex; align-items: center; gap: 10px; padding: 15px; border: 2px solid var(--border); border-radius: 8px; cursor: pointer; ${order.status === 'preparing' ? 'background: var(--background); border-color: var(--primary);' : ''}">
            <input type="radio" name="orderStatus" value="preparing" ${order.status === 'preparing' ? 'checked' : ''}>
            <div>
              <div style="font-weight: 600;">📦 Preparing</div>
              <div style="font-size: 0.9rem; color: var(--text-light);">Order is being prepared</div>
            </div>
          </label>
          
          <label style="display: flex; align-items: center; gap: 10px; padding: 15px; border: 2px solid var(--border); border-radius: 8px; cursor: pointer; ${order.status === 'delivering' ? 'background: var(--background); border-color: var(--primary);' : ''}">
            <input type="radio" name="orderStatus" value="delivering" ${order.status === 'delivering' ? 'checked' : ''}>
            <div>
              <div style="font-weight: 600;">🚚 Out for Delivery</div>
              <div style="font-size: 0.9rem; color: var(--text-light);">Ready for rider pickup</div>
            </div>
          </label>
        </div>
      </div>
      
      <button class="btn-primary" style="margin-top: 20px; width: 100%;" onclick="updateStaffOrderStatus(${order.id})">Update Order Status</button>
    </div>
  `;
  document.body.appendChild(modal);
}

function updateStaffOrderStatus(orderId) {
  const order = state.orders.find(o => o.id === orderId);
  const selectedStatus = document.querySelector('input[name="orderStatus"]:checked').value;
  
  if (order) {
    order.status = selectedStatus;
    const statusMap = { pending: 0, confirmed: 1, preparing: 2, delivering: 3, delivered: 4 };
    order.progress = statusMap[selectedStatus];
    
    // Track product sales when delivered
    if (selectedStatus === 'delivered') {
      order.items.forEach(item => {
        if (!state.productSalesStats[item.id]) {
          state.productSalesStats[item.id] = { name: item.name, quantity: 0, revenue: 0 };
        }
        state.productSalesStats[item.id].quantity += item.quantity;
        state.productSalesStats[item.id].revenue += item.price * item.quantity;
      });
    }
    
    showToast('Order status updated successfully', 'success');
    document.querySelector('.modal-overlay').remove();
    renderView('staff-orders');
  }
}

function viewOrderDetails(orderId) {
  const order = state.orders.find(o => o.id === orderId);
  if (order) {
    showToast(`Viewing order #${orderId}`, 'info');
  }
}

// Staff Inventory
function renderStaffInventory(content) {
  content.innerHTML = `
    <div class="products-header">
      <h2>Inventory Management</h2>
      <p style="color: var(--text-light);">Monitor and manage stock levels</p>
    </div>
    
    <div class="data-table">
      <div class="table-header">
        <h3>Product Inventory</h3>
      </div>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Category</th>
            <th>Price</th>
            <th style="text-align: right;">Stock</th>
            <th style="text-align: right;">Status</th>
            <th style="text-align: right;">Actions</th>
          </tr>
        </thead>
        <tbody>
          ${state.products.map(product => `
            <tr>
              <td><img src="${product.image}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 8px;"></td>
              <td style="font-weight: 600;">${product.name}</td>
              <td>${product.category}</td>
              <td>₱${product.price.toLocaleString()}</td>
              <td style="text-align: right; font-weight: 600;">${product.stock}</td>
              <td style="text-align: right;">${getStockBadge(product.stock)}</td>
              <td style="text-align: right;">
                <div class="action-btns">
                  <button class="btn-icon" style="background: #d1fae5; color: var(--success);" onclick="showStaffRestockModal(${product.id})">Restock</button>
                  <button class="btn-icon delete" onclick="staffMarkOutOfStock(${product.id})">Out of Stock</button>
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function showStaffRestockModal(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;
  
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-content">
      <button class="modal-close" onclick="this.parentElement.parentElement.remove()">✕</button>
      <h2 style="margin-bottom: 20px;">Restock Product</h2>
      
      <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px; padding: 15px; background: var(--background); border-radius: 12px;">
        <img src="${product.image}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 8px;">
        <div>
          <div style="font-weight: 600; font-size: 1.2rem;">${product.name}</div>
          <div style="color: var(--text-light);">${product.category}</div>
          <div style="margin-top: 5px;">Current Stock: <strong style="color: ${product.stock < 15 ? 'var(--error)' : 'var(--success)'};">${product.stock} units</strong></div>
        </div>
      </div>
      
      <div class="form-group">
        <label>Add Stock Quantity</label>
        <input type="number" id="staffRestockQuantity" class="promo-input" placeholder="Enter quantity to add" min="1" value="50" style="width: 100%;">
      </div>
      
      <div style="display: flex; gap: 10px; margin-top: 20px;">
        <button class="btn-primary" style="flex: 1;" onclick="staffRestockProduct(${product.id})">Restock Product</button>
        <button class="btn-secondary" style="flex: 1;" onclick="this.closest('.modal-overlay').remove()">Cancel</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

function staffRestockProduct(productId) {
  const product = state.products.find(p => p.id === productId);
  const quantity = parseInt(document.getElementById('staffRestockQuantity').value);
  
  if (product && quantity > 0) {
    product.stock += quantity;
    showToast(`${product.name} restocked with ${quantity} units. New stock: ${product.stock}`, 'success');
    document.querySelector('.modal-overlay').remove();
    renderView('staff-inventory');
  } else {
    showToast('Please enter a valid quantity', 'error');
  }
}

function staffMarkOutOfStock(productId) {
  const product = state.products.find(p => p.id === productId);
  if (product && confirm(`Mark "${product.name}" as out of stock?\n\nThis will set stock to 0 and customers won't be able to order this product.`)) {
    product.stock = 0;
    showToast(`${product.name} marked as out of stock`, 'info');
    renderView('staff-inventory');
  }
}

// Admin Dashboard
function renderAdminDashboard(content) {
  const totalSales = state.salesData.reduce((sum, day) => sum + day.sales, 0);
  const totalOrders = state.orders.length;
  const activeCustomers = state.registeredUsers.filter(u => u.role === 'customer').length;
  const avgOrderValue = totalOrders > 0 ? Math.floor(totalSales / totalOrders) : 0;
  const maxSales = Math.max(...state.salesData.map(d => d.sales));
  
  content.innerHTML = `
    <div class="products-header">
      <h2>Analytics Dashboard</h2>
      <p style="color: var(--text-light);">Overview of your business performance</p>
    </div>
    
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon sales">💰</div>
        <div class="stat-info">
          <h4>Total Sales</h4>
          <div class="stat-value">₱${totalSales.toLocaleString()}</div>
          <div class="stat-change positive">+12% from last week</div>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon orders">📦</div>
        <div class="stat-info">
          <h4>Total Orders</h4>
          <div class="stat-value">${totalOrders}</div>
          <div class="stat-change positive">+8% from last week</div>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon customers">👥</div>
        <div class="stat-info">
          <h4>Active Customers</h4>
          <div class="stat-value">${activeCustomers}</div>
          <div class="stat-change positive">+5% from last week</div>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon average">📊</div>
        <div class="stat-info">
          <h4>Avg Order Value</h4>
          <div class="stat-value">₱${avgOrderValue.toLocaleString()}</div>
          <div class="stat-change positive">+3% from last week</div>
        </div>
      </div>
    </div>
    
    <div class="chart-container">
      <h3>Weekly Sales Trend</h3>
      <div class="chart">
        ${state.salesData.map(day => `
          <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
            <div class="chart-bar" style="height: ${(day.sales / maxSales) * 100}%;">
              <div class="chart-value">₱${(day.sales / 1000).toFixed(1)}k</div>
            </div>
            <div class="chart-label">${day.day}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Admin Orders
function renderAdminOrders(content) {
  content.innerHTML = `
    <div class="products-header">
      <h2>Order Management</h2>
      <p style="color: var(--text-light);">View and manage all orders</p>
    </div>
    
    <div class="data-table">
      <div class="table-header">
        <h3>All Orders</h3>
        <div class="table-actions">
          <select class="filter-select">
            <option>All Status</option>
            <option>Confirmed</option>
            <option>Preparing</option>
            <option>Delivering</option>
            <option>Delivered</option>
          </select>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Items</th>
            <th>Total</th>
            <th>Status</th>
            <th style="text-align: right;">Actions</th>
          </tr>
        </thead>
        <tbody>
          ${state.orders.map(order => `
            <tr>
              <td>#${order.id}</td>
              <td>${state.currentUser ? state.currentUser.name : 'Customer'}</td>
              <td>${new Date(order.date).toLocaleDateString()}</td>
              <td>${order.items.length} items</td>
              <td>₱${order.total.toLocaleString()}</td>
              <td><span class="status-badge ${order.status}">${order.status.charAt(0).toUpperCase() + order.status.slice(1)}</span></td>
              <td style="text-align: right;">
                <div class="action-btns">
                  <button class="btn-icon edit" onclick="updateOrderStatus(${order.id})">Update</button>
                  <button class="btn-icon" style="background: #dbeafe; color: #1e40af;">View</button>
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

// Admin Inventory
function renderAdminInventory(content) {
  content.innerHTML = `
    <div class="products-header">
      <h2>Inventory Control</h2>
      <p style="color: var(--text-light);">Manage product stock levels and details</p>
    </div>
    
    <div class="data-table">
      <div class="table-header">
        <h3>Product Inventory</h3>
        <div class="table-actions">
          <button class="btn-secondary" onclick="showAddProductModal()">+ Add New Product</button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Category</th>
            <th>Price</th>
            <th style="text-align: right;">Stock</th>
            <th style="text-align: right;">Status</th>
            <th style="text-align: right;">Actions</th>
          </tr>
        </thead>
        <tbody>
          ${state.products.map(product => `
            <tr>
              <td><img src="${product.image}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 8px;"></td>
              <td style="font-weight: 600;">${product.name}</td>
              <td>${product.category}</td>
              <td>₱${product.price.toLocaleString()}</td>
              <td style="text-align: right; font-weight: 600;">${product.stock}</td>
              <td style="text-align: right;">${getStockBadge(product.stock)}</td>
              <td style="text-align: right;">
                <div class="action-btns">
                  <button class="btn-icon edit" onclick="showEditProductModal(${product.id})">Edit</button>
                  <button class="btn-icon" style="background: #fef3c7; color: #92400e;" onclick="showRestockModal(${product.id})">Restock</button>
                  <button class="btn-icon delete" onclick="markOutOfStock(${product.id})">Out of Stock</button>
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function showRestockModal(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;
  
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-content">
      <button class="modal-close" onclick="this.parentElement.parentElement.remove()">✕</button>
      <h2 style="margin-bottom: 20px;">Restock Product</h2>
      <p style="color: var(--text-light); margin-bottom: 20px;">${product.name}</p>
      <p style="margin-bottom: 20px;">Current Stock: <strong>${product.stock}</strong></p>
      
      <div class="form-group">
        <label>Add Stock Quantity</label>
        <input type="number" id="restockQuantity" class="promo-input" placeholder="Enter quantity to add" min="1" value="50" style="width: 100%;">
      </div>
      
      <button class="btn-primary" style="margin-top: 20px;" onclick="restockProduct(${product.id})">Restock Product</button>
    </div>
  `;
  document.body.appendChild(modal);
}

function restockProduct(productId) {
  const product = state.products.find(p => p.id === productId);
  const quantity = parseInt(document.getElementById('restockQuantity').value);
  
  if (product && quantity > 0) {
    product.stock += quantity;
    showToast(`${product.name} restocked with ${quantity} units`, 'success');
    document.querySelector('.modal-overlay').remove();
    renderView('admin-inventory');
  }
}

function markOutOfStock(productId) {
  const product = state.products.find(p => p.id === productId);
  if (product && confirm(`Mark ${product.name} as out of stock?`)) {
    product.stock = 0;
    showToast(`${product.name} marked as out of stock`, 'info');
    renderView('admin-inventory');
  }
}

function showEditProductModal(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;
  
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-content" style="max-width: 700px;">
      <button class="modal-close" onclick="this.parentElement.parentElement.remove()">✕</button>
      <h2 style="margin-bottom: 20px;">Edit Product</h2>
      
      <form id="editProductForm" style="display: flex; flex-direction: column; gap: 15px;">
        <div class="form-group">
          <label>Product Name</label>
          <input type="text" id="editProductName" class="promo-input" value="${product.name}" required style="width: 100%;">
        </div>
        
        <div class="form-group">
          <label>Price (₱)</label>
          <input type="number" id="editProductPrice" class="promo-input" value="${product.price}" required style="width: 100%;">
        </div>
        
        <div class="form-group">
          <label>Category</label>
          <select id="editProductCategory" class="promo-input" style="width: 100%;">
            <option value="Watches" ${product.category === 'Watches' ? 'selected' : ''}>Watches</option>
            <option value="Bags" ${product.category === 'Bags' ? 'selected' : ''}>Bags</option>
            <option value="Shoes" ${product.category === 'Shoes' ? 'selected' : ''}>Shoes</option>
            <option value="Clothes" ${product.category === 'Clothes' ? 'selected' : ''}>Clothes</option>
          </select>
        </div>
        
        <div class="form-group">
          <label>Image URL</label>
          <input type="url" id="editProductImage" class="promo-input" value="${product.image}" required style="width: 100%;">
          <small style="color: var(--text-light);">Enter a valid image URL</small>
        </div>
        
        <div class="form-group">
          <label>Description</label>
          <textarea id="editProductDescription" class="promo-input" rows="3" style="width: 100%; resize: vertical;">${product.description}</textarea>
        </div>
        
        <div class="form-group">
          <label>Brand</label>
          <input type="text" id="editProductBrand" class="promo-input" value="${product.brand}" required style="width: 100%;">
        </div>
        
        <button type="submit" class="btn-primary">Save Changes</button>
      </form>
    </div>
  `;
  document.body.appendChild(modal);
  
  document.getElementById('editProductForm').addEventListener('submit', (e) => {
    e.preventDefault();
    updateProduct(productId);
  });
}

function updateProduct(productId) {
  const product = state.products.find(p => p.id === productId);
  if (product) {
    product.name = document.getElementById('editProductName').value;
    product.price = parseInt(document.getElementById('editProductPrice').value);
    product.category = document.getElementById('editProductCategory').value;
    product.image = document.getElementById('editProductImage').value;
    product.description = document.getElementById('editProductDescription').value;
    product.brand = document.getElementById('editProductBrand').value;
    
    showToast('Product updated successfully', 'success');
    document.querySelector('.modal-overlay').remove();
    renderView('admin-inventory');
  }
}

function showAddProductModal() {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-content" style="max-width: 700px;">
      <button class="modal-close" onclick="this.parentElement.parentElement.remove()">✕</button>
      <h2 style="margin-bottom: 20px;">Add New Product</h2>
      
      <form id="addProductForm" style="display: flex; flex-direction: column; gap: 15px;">
        <div class="form-group">
          <label>Product Name</label>
          <input type="text" id="newProductName" class="promo-input" placeholder="Enter product name" required style="width: 100%;">
        </div>
        
        <div class="form-group">
          <label>Price (₱)</label>
          <input type="number" id="newProductPrice" class="promo-input" placeholder="Enter price" required style="width: 100%;">
        </div>
        
        <div class="form-group">
          <label>Category</label>
          <select id="newProductCategory" class="promo-input" style="width: 100%;">
            <option value="Watches">Watches</option>
            <option value="Bags">Bags</option>
            <option value="Shoes">Shoes</option>
            <option value="Clothes">Clothes</option>
          </select>
        </div>
        
        <div class="form-group">
          <label>Initial Stock</label>
          <input type="number" id="newProductStock" class="promo-input" placeholder="Enter stock quantity" value="50" required style="width: 100%;">
        </div>
        
        <div class="form-group">
          <label>Image URL</label>
          <input type="url" id="newProductImage" class="promo-input" placeholder="https://example.com/image.jpg" required style="width: 100%;">
        </div>
        
        <div class="form-group">
          <label>Description</label>
          <textarea id="newProductDescription" class="promo-input" rows="3" placeholder="Enter product description" style="width: 100%; resize: vertical;"></textarea>
        </div>
        
        <div class="form-group">
          <label>Brand</label>
          <input type="text" id="newProductBrand" class="promo-input" placeholder="Enter brand name" required style="width: 100%;">
        </div>
        
        <button type="submit" class="btn-primary">Add Product</button>
      </form>
    </div>
  `;
  document.body.appendChild(modal);
  
  document.getElementById('addProductForm').addEventListener('submit', (e) => {
    e.preventDefault();
    addNewProduct();
  });
}

function addNewProduct() {
  const newProduct = {
    id: state.products.length + 1,
    name: document.getElementById('newProductName').value,
    price: parseInt(document.getElementById('newProductPrice').value),
    stock: parseInt(document.getElementById('newProductStock').value),
    category: document.getElementById('newProductCategory').value,
    image: document.getElementById('newProductImage').value,
    description: document.getElementById('newProductDescription').value,
    brand: document.getElementById('newProductBrand').value,
    rating: 4.5,
    reviews: 0,
    sizes: ['Standard'],
    colors: ['Default']
  };
  
  state.products.push(newProduct);
  showToast('Product added successfully', 'success');
  document.querySelector('.modal-overlay').remove();
  renderView('admin-inventory');
}

// Admin Users
function renderAdminUsers(content) {
  content.innerHTML = `
    <div class="products-header">
      <h2>User Management</h2>
      <p style="color: var(--text-light);">Manage all registered users - Total: ${state.registeredUsers.length}</p>
    </div>
    
    <div class="data-table">
      <div class="table-header">
        <h3>All Registered Users</h3>
        <div class="table-actions">
          <select class="filter-select" id="userRoleFilter">
            <option value="all">All Roles</option>
            <option value="customer">Customer</option>
            <option value="staff">Staff</option>
            <option value="admin">Admin</option>
            <option value="rider">Rider</option>
          </select>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
            <th style="text-align: right;">Orders</th>
            <th style="text-align: right;">Loyalty Points</th>
            <th style="text-align: right;">Joined</th>
            <th style="text-align: right;">Actions</th>
          </tr>
        </thead>
        <tbody id="usersTableBody">
          ${renderUsersTable()}
        </tbody>
      </table>
    </div>
  `;
  
  document.getElementById('userRoleFilter').addEventListener('change', (e) => {
    const filter = e.target.value;
    document.getElementById('usersTableBody').innerHTML = renderUsersTable(filter);
  });
}

function renderUsersTable(filter = 'all') {
  let users = state.registeredUsers;
  
  if (filter !== 'all') {
    users = users.filter(u => u.role === filter);
  }
  
  return users.map(user => `
    <tr>
      <td style="font-weight: 600;">${user.name}</td>
      <td>${user.email}</td>
      <td>${user.phone}</td>
      <td><span class="role-badge">${user.role}</span></td>
      <td style="text-align: right;">${user.orders}</td>
      <td style="text-align: right;">${user.loyaltyPoints}</td>
      <td style="text-align: right;">${new Date(user.createdAt).toLocaleDateString()}</td>
      <td style="text-align: right;">
        <div class="action-btns">
          <button class="btn-icon" style="background: #dbeafe; color: #1e40af;" onclick="viewUserDetails(${user.id})">View</button>
          <button class="btn-icon delete" onclick="deleteUser(${user.id})">Delete</button>
        </div>
      </td>
    </tr>
  `).join('');
}

function viewUserDetails(userId) {
  const user = state.registeredUsers.find(u => u.id === userId);
  if (user) {
    showToast(`Viewing details for ${user.name}`, 'info');
  }
}

function deleteUser(userId) {
  const user = state.registeredUsers.find(u => u.id === userId);
  if (user && confirm(`Are you sure you want to delete ${user.name}?`)) {
    const index = state.registeredUsers.findIndex(u => u.id === userId);
    state.registeredUsers.splice(index, 1);
    showToast('User deleted successfully', 'success');
    renderView('admin-users');
  }
}

// Rider Deliveries
function renderRiderDeliveries(content) {
  const pendingDeliveries = state.orders.filter(o => o.status === 'delivering' && !state.riderAssignments[o.id]);
  const acceptedDeliveries = state.orders.filter(o => o.status === 'delivering' && state.riderAssignments[o.id] === state.currentUser.id);
  
  content.innerHTML = `
    <div class="products-header">
      <h2>🚚 My Delivery Assignments</h2>
      <p style="color: var(--text-light);">${acceptedDeliveries.length} active deliveries • ${pendingDeliveries.length} available assignments</p>
    </div>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 30px;">
      <div class="stat-card">
        <div class="stat-icon orders">📦</div>
        <div class="stat-info">
          <h4>Active Deliveries</h4>
          <div class="stat-value">${acceptedDeliveries.length}</div>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon customers">👥</div>
        <div class="stat-info">
          <h4>Customers Assigned</h4>
          <div class="stat-value">${acceptedDeliveries.length}</div>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon average">💰</div>
        <div class="stat-info">
          <h4>Potential Earnings</h4>
          <div class="stat-value">₱${(acceptedDeliveries.length * 150).toLocaleString()}</div>
        </div>
      </div>
    </div>
    
    ${acceptedDeliveries.length === 0 && pendingDeliveries.length === 0 ? `
      <div class="empty-state">
        <div class="empty-icon">🚚</div>
        <h3>No Delivery Assignments</h3>
        <p>You don't have any delivery assignments at the moment. New orders will appear here when they're ready for delivery.</p>
      </div>
    ` : `
      ${acceptedDeliveries.length > 0 ? `
        <div style="margin-bottom: 40px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px;">
            <h3 style="font-size: 1.5rem; color: var(--primary); display: flex; align-items: center; gap: 10px;">
              <span>✓</span>
              <span>My Active Deliveries</span>
              <span style="background: var(--primary); color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.9rem;">${acceptedDeliveries.length}</span>
            </h3>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(450px, 1fr)); gap: 25px;">
            ${acceptedDeliveries.map((order, index) => {
              const customer = order.customer;
              const deliveryZone = order.delivery.zone === 'zone1' ? 'Metro Manila' : order.delivery.zone === 'zone2' ? 'Greater Manila' : 'Provincial';
              const estimatedTime = order.delivery.zone === 'zone1' ? '30-45 mins' : order.delivery.zone === 'zone2' ? '1-2 hours' : '2-3 hours';
              
              return `
              <div class="order-card" style="border: 3px solid var(--primary); box-shadow: 0 8px 25px var(--shadow); background: linear-gradient(to bottom, var(--surface) 0%, var(--background) 100%);">
                <!-- Assignment Header -->
                <div style="background: linear-gradient(135deg, var(--primary), var(--secondary)); color: white; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
                  <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
                    <div>
                      <div style="font-size: 0.85rem; opacity: 0.9; margin-bottom: 5px;">Delivery Assignment #${index + 1}</div>
                      <div style="font-size: 1.5rem; font-weight: 700;">Order #${order.id}</div>
                    </div>
                    <div style="background: rgba(255,255,255,0.2); padding: 8px 16px; border-radius: 20px; font-weight: 600;">
                      🚚 Active
                    </div>
                  </div>
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; font-size: 0.9rem;">
                    <div>
                      <div style="opacity: 0.8; margin-bottom: 3px;">📍 Zone</div>
                      <div style="font-weight: 600;">${deliveryZone}</div>
                    </div>
                    <div>
                      <div style="opacity: 0.8; margin-bottom: 3px;">⏱️ Est. Time</div>
                      <div style="font-weight: 600;">${estimatedTime}</div>
                    </div>
                  </div>
                </div>

                <!-- Customer Assignment Card -->
                <div style="background: white; border: 2px solid var(--primary); border-radius: 12px; padding: 20px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(74, 222, 128, 0.1);">
                  <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
                    <div style="width: 60px; height: 60px; border-radius: 50%; background: linear-gradient(135deg, var(--primary), var(--secondary)); display: flex; align-items: center; justify-content: center; color: white; font-size: 1.8rem; font-weight: 700; flex-shrink: 0;">
                      ${customer.name.charAt(0).toUpperCase()}
                    </div>
                    <div style="flex: 1;">
                      <div style="font-size: 0.85rem; color: var(--text-light); margin-bottom: 3px;">👤 Customer Assigned</div>
                      <div style="font-size: 1.3rem; font-weight: 700; color: var(--text);">${customer.name}</div>
                    </div>
                  </div>
                  
                  <div style="display: grid; gap: 12px; padding: 15px; background: var(--background); border-radius: 8px;">
                    <div style="display: flex; align-items: center; gap: 12px;">
                      <span style="font-size: 1.3rem;">📞</span>
                      <div style="flex: 1;">
                        <div style="font-size: 0.8rem; color: var(--text-light); margin-bottom: 2px;">Phone Number</div>
                        <a href="tel:${customer.phone}" style="font-weight: 600; color: var(--primary); text-decoration: none; font-size: 1.05rem;">${customer.phone}</a>
                      </div>
                      <button onclick="contactCustomer('${customer.phone}')" style="padding: 8px 16px; background: var(--primary); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; transition: all 0.3s;">Call</button>
                    </div>
                    
                    <div style="display: flex; align-items: center; gap: 12px;">
                      <span style="font-size: 1.3rem;">📧</span>
                      <div style="flex: 1;">
                        <div style="font-size: 0.8rem; color: var(--text-light); margin-bottom: 2px;">Email Address</div>
                        <div style="font-weight: 600; color: var(--text); font-size: 0.95rem;">${customer.email}</div>
                      </div>
                    </div>
                    
                    <div style="display: flex; align-items: start; gap: 12px;">
                      <span style="font-size: 1.3rem;">📍</span>
                      <div style="flex: 1;">
                        <div style="font-size: 0.8rem; color: var(--text-light); margin-bottom: 2px;">Delivery Address</div>
                        <div style="font-weight: 600; color: var(--text); line-height: 1.5;">${customer.address}</div>
                      </div>
                    </div>
                    
                    ${customer.notes ? `
                      <div style="display: flex; align-items: start; gap: 12px; padding-top: 12px; border-top: 1px solid var(--border);">
                        <span style="font-size: 1.3rem;">📝</span>
                        <div style="flex: 1;">
                          <div style="font-size: 0.8rem; color: var(--text-light); margin-bottom: 2px;">Special Instructions</div>
                          <div style="font-weight: 600; color: var(--warning); line-height: 1.5;">${customer.notes}</div>
                        </div>
                      </div>
                    ` : ''}
                  </div>
                </div>

                <!-- Order Details -->
                <div style="margin-bottom: 20px;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
                    <h4 style="font-size: 1.1rem; color: var(--text);">📦 Order Items</h4>
                    <span style="background: var(--background); padding: 4px 12px; border-radius: 12px; font-size: 0.85rem; font-weight: 600;">${order.items.length} items</span>
                  </div>
                  <div style="display: flex; flex-direction: column; gap: 8px;">
                    ${order.items.map(item => `
                      <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; background: white; border: 1px solid var(--border); border-radius: 8px;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                          <div style="width: 8px; height: 8px; background: var(--primary); border-radius: 50%;"></div>
                          <span style="font-weight: 600;">${item.name}</span>
                          <span style="color: var(--text-light);">×${item.quantity}</span>
                        </div>
                        <span style="color: var(--primary); font-weight: 700;">₱${(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                    `).join('')}
                  </div>
                </div>

                <!-- Payment Info -->
                <div style="background: ${order.payment === 'cod' ? '#fef3c7' : '#d1fae5'}; border: 2px solid ${order.payment === 'cod' ? 'var(--warning)' : 'var(--success)'}; border-radius: 12px; padding: 15px; margin-bottom: 20px;">
                  <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 10px;">
                    <span style="font-size: 1.5rem;">${order.payment === 'cod' ? '💵' : order.payment === 'card' ? '💳' : '📱'}</span>
                    <div>
                      <div style="font-size: 0.85rem; color: var(--text-light);">Payment Method</div>
                      <div style="font-weight: 700; font-size: 1.1rem; color: var(--text);">
                        ${order.payment === 'cod' ? 'Cash on Delivery' : order.payment === 'card' ? 'Card (Paid)' : 'E-Wallet (Paid)'}
                      </div>
                    </div>
                  </div>
                  ${order.payment === 'cod' ? `
                    <div style="background: rgba(255,255,255,0.5); padding: 10px; border-radius: 6px; font-size: 0.9rem;">
                      <strong>⚠️ Collect Payment:</strong> ₱${order.total.toLocaleString()} from customer
                    </div>
                  ` : `
                    <div style="background: rgba(255,255,255,0.5); padding: 10px; border-radius: 6px; font-size: 0.9rem; color: var(--success);">
                      <strong>✓ Already Paid:</strong> No collection needed
                    </div>
                  `}
                </div>

                <!-- Total & Actions -->
                <div style="background: linear-gradient(135deg, var(--primary), var(--secondary)); color: white; padding: 20px; border-radius: 12px; margin-bottom: 15px;">
                  <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                      <div style="font-size: 0.9rem; opacity: 0.9; margin-bottom: 5px;">Total Order Value</div>
                      <div style="font-size: 2rem; font-weight: 700;">₱${order.total.toLocaleString()}</div>
                    </div>
                    <div style="text-align: right;">
                      <div style="font-size: 0.9rem; opacity: 0.9; margin-bottom: 5px;">Your Earnings</div>
                      <div style="font-size: 1.5rem; font-weight: 700;">₱150</div>
                    </div>
                  </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                  <button class="btn-checkout" onclick="showDeliveryConfirmation(${order.id})" style="background: var(--success); font-weight: 700; padding: 14px;">
                    ✓ Mark Delivered
                  </button>
                  <button class="btn-secondary" onclick="contactCustomer('${customer.phone}')" style="font-weight: 700; padding: 14px;">
                    📞 Call Customer
                  </button>
                </div>
                
                <div style="margin-top: 12px; text-align: center;">
                  <button onclick="showDeliveryMap(${order.id})" style="width: 100%; padding: 12px; background: white; border: 2px solid var(--primary); color: var(--primary); border-radius: 8px; font-weight: 600; cursor: pointer; transition: all 0.3s;">
                    🗺️ View Delivery Route
                  </button>
                </div>
              </div>
            `}).join('')}
          </div>
        </div>
      ` : ''}
      
      ${pendingDeliveries.length > 0 ? `
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px;">
            <h3 style="font-size: 1.5rem; color: var(--text); display: flex; align-items: center; gap: 10px;">
              <span>📋</span>
              <span>Available Delivery Assignments</span>
              <span style="background: var(--warning); color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.9rem;">${pendingDeliveries.length}</span>
            </h3>
          </div>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 20px;">
            ${pendingDeliveries.map(order => {
              const customer = order.customer;
              const deliveryZone = order.delivery.zone === 'zone1' ? 'Metro Manila' : order.delivery.zone === 'zone2' ? 'Greater Manila' : 'Provincial';
              const deliveryFee = order.delivery.zone === 'zone1' ? 150 : order.delivery.zone === 'zone2' ? 250 : 350;
              const estimatedTime = order.delivery.zone === 'zone1' ? '30-45 mins' : order.delivery.zone === 'zone2' ? '1-2 hours' : '2-3 hours';
              
              return `
              <div class="order-card" style="border: 2px solid var(--border); transition: all 0.3s; cursor: pointer;" onmouseenter="this.style.borderColor='var(--primary)'; this.style.transform='translateY(-5px)'" onmouseleave="this.style.borderColor='var(--border)'; this.style.transform='translateY(0)'">
                <div style="background: var(--background); padding: 15px; border-radius: 12px; margin-bottom: 15px;">
                  <div style="display: flex; justify-content: between; align-items: start; margin-bottom: 12px;">
                    <div style="flex: 1;">
                      <div style="font-size: 0.85rem; color: var(--text-light); margin-bottom: 3px;">New Assignment Available</div>
                      <div style="font-size: 1.3rem; font-weight: 700;">Order #${order.id}</div>
                    </div>
                    <span class="status-badge preparing">Available</span>
                  </div>
                  
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 15px;">
                    <div style="padding: 10px; background: white; border-radius: 8px;">
                      <div style="font-size: 0.8rem; color: var(--text-light); margin-bottom: 3px;">📍 Zone</div>
                      <div style="font-weight: 600; color: var(--text);">${deliveryZone}</div>
                    </div>
                    <div style="padding: 10px; background: white; border-radius: 8px;">
                      <div style="font-size: 0.8rem; color: var(--text-light); margin-bottom: 3px;">⏱️ Est. Time</div>
                      <div style="font-weight: 600; color: var(--text);">${estimatedTime}</div>
                    </div>
                  </div>
                </div>

                <!-- Customer Preview -->
                <div style="background: white; border: 1px solid var(--border); border-radius: 12px; padding: 15px; margin-bottom: 15px;">
                  <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                    <div style="width: 45px; height: 45px; border-radius: 50%; background: var(--primary); display: flex; align-items: center; justify-content: center; color: white; font-size: 1.2rem; font-weight: 700;">
                      ${customer.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div style="font-size: 0.8rem; color: var(--text-light);">Customer</div>
                      <div style="font-weight: 700; color: var(--text);">${customer.name}</div>
                    </div>
                  </div>
                  
                  <div style="display: flex; flex-direction: column; gap: 8px; padding: 12px; background: var(--background); border-radius: 8px; font-size: 0.9rem;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                      <span>📞</span>
                      <span style="color: var(--text-light);">${customer.phone}</span>
                    </div>
                    <div style="display: flex; align-items: start; gap: 8px;">
                      <span>📍</span>
                      <span style="color: var(--text-light); line-height: 1.4;">${customer.address.substring(0, 50)}${customer.address.length > 50 ? '...' : ''}</span>
                    </div>
                  </div>
                </div>

                <!-- Order Summary -->
                <div style="margin-bottom: 15px;">
                  <div style="font-weight: 600; margin-bottom: 10px; color: var(--text);">📦 ${order.items.length} Items</div>
                  <div style="display: flex; flex-direction: column; gap: 6px;">
                    ${order.items.slice(0, 3).map(item => `
                      <div style="display: flex; justify-content: space-between; padding: 8px; background: var(--background); border-radius: 6px; font-size: 0.9rem;">
                        <span>${item.name} ×${item.quantity}</span>
                        <span style="font-weight: 600;">₱${(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                    `).join('')}
                    ${order.items.length > 3 ? `
                      <div style="text-align: center; color: var(--text-light); font-size: 0.85rem; padding: 5px;">
                        +${order.items.length - 3} more items
                      </div>
                    ` : ''}
                  </div>
                </div>

                <!-- Earnings -->
                <div style="display: flex; justify-content: space-between; padding: 15px; background: linear-gradient(135deg, #d1fae5, #a7f3d0); border-radius: 12px; margin-bottom: 15px;">
                  <div>
                    <div style="font-size: 0.85rem; color: var(--text-light); margin-bottom: 3px;">Your Earnings</div>
                    <div style="font-size: 1.5rem; font-weight: 700; color: var(--success);">₱${deliveryFee}</div>
                  </div>
                  <div style="text-align: right;">
                    <div style="font-size: 0.85rem; color: var(--text-light); margin-bottom: 3px;">Order Total</div>
                    <div style="font-size: 1.2rem; font-weight: 700; color: var(--text);">₱${order.total.toLocaleString()}</div>
                  </div>
                </div>

                <!-- Actions -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                  <button class="btn-checkout" onclick="showAcceptDeliveryModal(${order.id})" style="font-weight: 700;">
                    ✓ Accept
                  </button>
                  <button class="btn-secondary" onclick="showDeliveryPreview(${order.id})" style="font-weight: 700;">
                    👁️ Details
                  </button>
                </div>
              </div>
            `}).join('')}
          </div>
        </div>
      ` : ''}
    `}
  `;
}

function showAcceptDeliveryModal(orderId) {
  const order = state.orders.find(o => o.id === orderId);
  if (!order) return;
  
  const customer = order.customer;
  const deliveryZone = order.delivery.zone === 'zone1' ? 'Metro Manila' : order.delivery.zone === 'zone2' ? 'Greater Manila' : 'Provincial';
  const deliveryFee = order.delivery.zone === 'zone1' ? 150 : order.delivery.zone === 'zone2' ? 250 : 350;
  
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-content" style="max-width: 600px;">
      <button class="modal-close" onclick="this.parentElement.parentElement.remove()">✕</button>
      
      <div style="text-align: center; margin-bottom: 25px;">
        <div style="font-size: 3rem; margin-bottom: 10px;">🚚</div>
        <h2 style="margin-bottom: 10px;">Accept Delivery Assignment?</h2>
        <p style="color: var(--text-light);">Review the delivery details before accepting</p>
      </div>
      
      <!-- Customer Assignment -->
      <div style="background: linear-gradient(135deg, var(--primary-light), var(--primary)); color: white; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
          <div style="width: 60px; height: 60px; border-radius: 50%; background: white; display: flex; align-items: center; justify-content: center; color: var(--primary); font-size: 1.8rem; font-weight: 700;">
            ${customer.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <div style="font-size: 0.9rem; opacity: 0.9; margin-bottom: 3px;">Customer Assignment</div>
            <div style="font-size: 1.5rem; font-weight: 700;">${customer.name}</div>
          </div>
        </div>
        
        <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 8px;">
          <div style="display: grid; gap: 10px; font-size: 0.95rem;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span>📞</span>
              <span>${customer.phone}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 10px;">
              <span>📧</span>
              <span>${customer.email}</span>
            </div>
            <div style="display: flex; align-items: start; gap: 10px;">
              <span>📍</span>
              <span style="line-height: 1.5;">${customer.address}</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Order Details -->
      <div style="background: var(--background); padding: 20px; border-radius: 12px; margin-bottom: 20px;">
        <h3 style="margin-bottom: 15px; color: var(--text);">📦 Order #${order.id}</h3>
        <div style="display: grid; gap: 12px;">
          <div style="display: flex; justify-content: space-between; padding-bottom: 10px; border-bottom: 1px solid var(--border);">
            <span style="color: var(--text-light);">Delivery Zone:</span>
            <span style="font-weight: 600;">${deliveryZone}</span>
          </div>
          <div style="display: flex; justify-content: space-between; padding-bottom: 10px; border-bottom: 1px solid var(--border);">
            <span style="color: var(--text-light);">Items:</span>
            <span style="font-weight: 600;">${order.items.length} items</span>
          </div>
          <div style="display: flex; justify-content: space-between; padding-bottom: 10px; border-bottom: 1px solid var(--border);">
            <span style="color: var(--text-light);">Order Total:</span>
            <span style="font-weight: 600; color: var(--primary);">₱${order.total.toLocaleString()}</span>
          </div>
          <div style="display: flex; justify-content: space-between; padding-bottom: 10px; border-bottom: 1px solid var(--border);">
            <span style="color: var(--text-light);">Payment Method:</span>
            <span style="font-weight: 600;">${order.payment === 'cod' ? '💵 Cash on Delivery' : order.payment === 'card' ? '💳 Card' : '📱 E-Wallet'}</span>
          </div>
          <div style="display: flex; justify-content: space-between; padding-top: 10px;">
            <span style="color: var(--text-light); font-size: 1.1rem;">Your Earnings:</span>
            <span style="font-weight: 700; color: var(--success); font-size: 1.3rem;">₱${deliveryFee}</span>
          </div>
        </div>
      </div>
      
      <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid var(--warning);">
        <div style="font-weight: 600; margin-bottom: 5px;">⚠️ Commitment Required</div>
        <div style="font-size: 0.9rem; color: var(--text);">
          By accepting this delivery, you commit to delivering the order to <strong>${customer.name}</strong> at the specified address. 
          Please ensure you can complete this delivery.
        </div>
      </div>
      
      <div style="display: flex; gap: 12px;">
        <button class="btn-primary" style="flex: 1; padding: 16px; font-size: 1.05rem;" onclick="acceptDelivery(${order.id})">
          ✓ Accept Assignment
        </button>
        <button class="btn-secondary" style="flex: 1; padding: 16px; font-size: 1.05rem;" onclick="this.closest('.modal-overlay').remove()">
          Cancel
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

function showDeliveryPreview(orderId) {
  const order = state.orders.find(o => o.id === orderId);
  if (!order) return;
  
  const customer = order.customer;
  
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-content" style="max-width: 700px;">
      <button class="modal-close" onclick="this.parentElement.parentElement.remove()">✕</button>
      <h2 style="margin-bottom: 20px;">Delivery Assignment Preview</h2>
      
      <div style="background: var(--background); padding: 20px; border-radius: 12px; margin-bottom: 20px;">
        <h3 style="margin-bottom: 15px;">👤 Customer Information</h3>
        <div style="display: grid; gap: 12px;">
          <div><strong>Name:</strong> ${customer.name}</div>
          <div><strong>Phone:</strong> ${customer.phone}</div>
          <div><strong>Email:</strong> ${customer.email}</div>
          <div><strong>Address:</strong> ${customer.address}</div>
          ${customer.notes ? `<div><strong>Notes:</strong> ${customer.notes}</div>` : ''}
        </div>
      </div>
      
      <div style="background: var(--background); padding: 20px; border-radius: 12px; margin-bottom: 20px;">
        <h3 style="margin-bottom: 15px;">📦 Order Items</h3>
        ${order.items.map(item => `
          <div style="display: flex; justify-content: space-between; padding: 10px; background: white; border-radius: 8px; margin-bottom: 8px;">
            <span>${item.name} ×${item.quantity}</span>
            <span style="font-weight: 600;">₱${(item.price * item.quantity).toLocaleString()}</span>
          </div>
        `).join('')}
      </div>
      
      <button class="btn-primary" style="width: 100%;" onclick="this.closest('.modal-overlay').remove(); showAcceptDeliveryModal(${order.id})">
        Accept This Delivery
      </button>
    </div>
  `;
  document.body.appendChild(modal);
}

function showDeliveryMap(orderId) {
  const order = state.orders.find(o => o.id === orderId);
  if (!order) return;
  
  showToast('🗺️ Opening map navigation to customer location...', 'info');
  // In a real app, this would open Google Maps or similar
}

function showDeliveryConfirmation(orderId) {
  const order = state.orders.find(o => o.id === orderId);
  if (!order) return;
  
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-content">
      <button class="modal-close" onclick="this.parentElement.parentElement.remove()">✕</button>
      <h2 style="margin-bottom: 20px;">Confirm Delivery</h2>
      
      <div style="text-align: center; margin: 30px 0;">
        <div style="font-size: 4rem; margin-bottom: 15px;">✓</div>
        <h3 style="margin-bottom: 10px;">Mark Order #${order.id} as Delivered?</h3>
        <p style="color: var(--text-light);">Confirm that you have successfully delivered this order to ${order.customer.name}</p>
      </div>
      
      <div style="background: var(--background); padding: 15px; border-radius: 12px; margin-bottom: 20px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
          <span>Order Total:</span>
          <span style="font-weight: 600;">₱${order.total.toLocaleString()}</span>
        </div>
        <div style="display: flex; justify-content: space-between; padding-top: 10px; border-top: 2px solid var(--border);">
          <span style="font-weight: 600;">Payment Method:</span>
          <span style="font-weight: 600; color: var(--primary);">${order.payment === 'cod' ? 'Cash on Delivery' : order.payment === 'card' ? 'Card (Paid)' : 'E-Wallet (Paid)'}</span>
        </div>
      </div>
      
      ${order.payment === 'cod' ? `
        <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid var(--warning);">
          <div style="font-weight: 600; margin-bottom: 5px;">💰 Cash Collection</div>
          <div style="font-size: 0.9rem; color: var(--text-light);">
            Make sure you have collected ₱${order.total.toLocaleString()} from the customer before marking as delivered.
          </div>
        </div>
      ` : ''}
      
      <div style="display: flex; gap: 10px;">
        <button class="btn-primary" style="flex: 1; background: var(--success);" onclick="markAsDelivered(${order.id})">✓ Confirm Delivery</button>
        <button class="btn-secondary" style="flex: 1;" onclick="this.closest('.modal-overlay').remove()">Cancel</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

function contactCustomer(phone) {
  showToast(`Calling ${phone}...`, 'info');
  // In a real app, this would initiate a phone call
}

function acceptDelivery(orderId) {
  const order = state.orders.find(o => o.id === orderId);
  if (order) {
    state.riderAssignments[orderId] = state.currentUser.id;
    order.delivery.riderId = state.currentUser.id;
    order.delivery.riderName = state.currentUser.name;
    order.delivery.acceptedAt = new Date().toISOString();
    
    // Close modal if open
    const modal = document.querySelector('.modal-overlay');
    if (modal) modal.remove();
    
    showToast(`✓ Delivery assignment accepted! Customer: ${order.customer.name}`, 'success');
    
    // Show success notification with customer info
    setTimeout(() => {
      showToast(`📍 Navigate to: ${order.customer.address}`, 'info');
    }, 1500);
    
    renderView('rider-deliveries');
  }
}

function rejectDelivery(orderId) {
  showToast('Delivery declined', 'info');
}

function markAsDelivered(orderId) {
  const order = state.orders.find(o => o.id === orderId);
  if (order) {
    order.status = 'delivered';
    order.progress = 4;
    order.deliveredAt = new Date().toISOString();
    order.deliveredBy = state.currentUser.name;
    
    delete state.riderAssignments[orderId];
    
    // Track product sales
    order.items.forEach(item => {
      if (!state.productSalesStats[item.id]) {
        state.productSalesStats[item.id] = { name: item.name, quantity: 0, revenue: 0 };
      }
      state.productSalesStats[item.id].quantity += item.quantity;
      state.productSalesStats[item.id].revenue += item.price * item.quantity;
    });
    
    // Close modal if open
    const modal = document.querySelector('.modal-overlay');
    if (modal) modal.remove();
    
    showToast(`Order #${orderId} marked as delivered successfully! 🎉`, 'success');
    renderView('rider-deliveries');
  }
}

// Rider History
function renderRiderHistory(content) {
  const myDeliveries = state.orders.filter(o => 
    o.status === 'delivered' && 
    o.delivery && 
    o.delivery.riderId === state.currentUser.id
  );
  
  const totalEarnings = myDeliveries.length * 150; // ₱150 per delivery
  
  content.innerHTML = `
    <div class="products-header">
      <h2>Delivery History</h2>
      <p style="color: var(--text-light);">${myDeliveries.length} completed deliveries</p>
    </div>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 30px;">
      <div class="stat-card">
        <div class="stat-icon sales">📦</div>
        <div class="stat-info">
          <h4>Total Deliveries</h4>
          <div class="stat-value">${myDeliveries.length}</div>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon customers">💰</div>
        <div class="stat-info">
          <h4>Total Earnings</h4>
          <div class="stat-value">₱${totalEarnings.toLocaleString()}</div>
        </div>
      </div>
    </div>
    
    ${myDeliveries.length === 0 ? `
      <div class="empty-state">
        <div class="empty-icon">📦</div>
        <h3>No Delivery History</h3>
        <p>Your completed deliveries will appear here</p>
      </div>
    ` : `
      <div class="data-table">
        <div class="table-header">
          <h3>My Completed Deliveries</h3>
        </div>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Delivered Date</th>
              <th>Items</th>
              <th style="text-align: right;">Order Amount</th>
              <th style="text-align: right;">Delivery Fee</th>
              <th style="text-align: right;">Status</th>
            </tr>
          </thead>
          <tbody>
            ${myDeliveries.map(order => `
              <tr>
                <td style="font-weight: 600;">#${order.id}</td>
                <td>${order.customer.name}</td>
                <td>${order.deliveredAt ? new Date(order.deliveredAt).toLocaleString() : 'N/A'}</td>
                <td>${order.items.length} items</td>
                <td style="text-align: right;">₱${order.total.toLocaleString()}</td>
                <td style="text-align: right; color: var(--success); font-weight: 600;">₱150</td>
                <td style="text-align: right;"><span class="status-badge delivered">✓ Delivered</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `}
  `;
}

// Search functionality
document.getElementById('searchInput').addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  if (query && state.currentRole === 'customer') {
    const results = state.products.filter(p => 
      p.name.toLowerCase().includes(query) || 
      p.category.toLowerCase().includes(query)
    );
    
    if (results.length > 0) {
      renderView('browse');
    }
  }
});

// Customer Reviews
function renderCustomerReviews(content) {
  content.innerHTML = `
    <div class="products-header">
      <h2>My Reviews</h2>
      <p style="color: var(--text-light);">Share your experience with products</p>
    </div>
    
    <div class="empty-state">
      <div class="empty-icon">⭐</div>
      <h3>No Reviews Yet</h3>
      <p>Purchase products to leave reviews!</p>
      <button class="btn-primary" onclick="renderView('browse')">Browse Products</button>
    </div>
  `;
}

// Customer Profile
function renderProfile(content) {
  const user = state.currentUser;
  content.innerHTML = `
    <div class="products-header">
      <h2>My Profile</h2>
      <p style="color: var(--text-light);">Manage your account information</p>
    </div>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">
      <div class="order-summary">
        <h3>Personal Information</h3>
        <div style="display: flex; flex-direction: column; gap: 15px; margin-top: 20px;">
          <div class="form-group">
            <label>Full Name</label>
            <input type="text" class="promo-input" value="${user.name}" style="width: 100%;">
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="email" class="promo-input" value="${user.email}" style="width: 100%;" disabled>
          </div>
          <div class="form-group">
            <label>Phone Number</label>
            <input type="tel" class="promo-input" value="${user.phone}" style="width: 100%;">
          </div>
          <button class="btn-primary">Update Profile</button>
        </div>
      </div>
      
      <div class="order-summary">
        <h3>Account Statistics</h3>
        <div style="display: flex; flex-direction: column; gap: 20px; margin-top: 20px;">
          <div style="display: flex; justify-content: space-between; padding: 15px; background: var(--background); border-radius: 8px;">
            <span>Total Orders</span>
            <strong>${state.orders.length}</strong>
          </div>
          <div style="display: flex; justify-content: space-between; padding: 15px; background: var(--background); border-radius: 8px;">
            <span>Loyalty Points</span>
            <strong style="color: var(--primary);">⭐ ${state.loyaltyPoints}</strong>
          </div>
          <div style="display: flex; justify-content: space-between; padding: 15px; background: var(--background); border-radius: 8px;">
            <span>Favorite Items</span>
            <strong>${state.favorites.length}</strong>
          </div>
          <div style="display: flex; justify-content: space-between; padding: 15px; background: var(--background); border-radius: 8px;">
            <span>Member Since</span>
            <strong>${new Date(user.createdAt).toLocaleDateString()}</strong>
          </div>
        </div>
      </div>
    </div>
    
    <div class="order-summary" style="margin-top: 30px;">
      <h3>Change Password</h3>
      <div style="display: flex; flex-direction: column; gap: 15px; margin-top: 20px;">
        <div class="form-group">
          <label>Current Password</label>
          <input type="password" class="promo-input" style="width: 100%;">
        </div>
        <div class="form-group">
          <label>New Password</label>
          <input type="password" class="promo-input" style="width: 100%;">
        </div>
        <div class="form-group">
          <label>Confirm New Password</label>
          <input type="password" class="promo-input" style="width: 100%;">
        </div>
        <button class="btn-secondary">Change Password</button>
      </div>
    </div>
  `;
}

// Staff Reviews
function renderStaffReviews(content) {
  content.innerHTML = `
    <div class="products-header">
      <h2>Product Reviews</h2>
      <p style="color: var(--text-light);">Monitor customer feedback</p>
    </div>
    
    <div class="data-table">
      <div class="table-header">
        <h3>Recent Reviews</h3>
      </div>
      <div style="padding: 20px;">
        <div class="empty-state">
          <div class="empty-icon">⭐</div>
          <h3>No Reviews Yet</h3>
          <p>Customer reviews will appear here</p>
        </div>
      </div>
    </div>
  `;
}

// Admin Promos
function renderAdminPromos(content) {
  content.innerHTML = `
    <div class="products-header">
      <h2>Promo Code Management</h2>
      <p style="color: var(--text-light);">Create and manage promotional codes</p>
    </div>
    
    <div class="data-table">
      <div class="table-header">
        <h3>Active Promo Codes</h3>
        <button class="btn-secondary" onclick="showAddPromoModal()">Add New Promo</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Discount</th>
            <th>Type</th>
            <th>Min Purchase</th>
            <th>Status</th>
            <th style="text-align: right;">Actions</th>
          </tr>
        </thead>
        <tbody>
          ${state.promoCodes.map(promo => `
            <tr>
              <td style="font-weight: 600;">${promo.code}</td>
              <td>${promo.type === 'percentage' ? promo.discount + '%' : '₱' + promo.discount}</td>
              <td><span class="role-badge">${promo.type}</span></td>
              <td>₱${promo.minPurchase.toLocaleString()}</td>
              <td><span class="status-badge ${promo.active ? 'delivered' : 'confirmed'}">${promo.active ? 'Active' : 'Inactive'}</span></td>
              <td style="text-align: right;">
                <div class="action-btns">
                  <button class="btn-icon edit" onclick="togglePromoStatus('${promo.code}')">Toggle</button>
                  <button class="btn-icon delete" onclick="deletePromo('${promo.code}')">Delete</button>
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function togglePromoStatus(code) {
  const promo = state.promoCodes.find(p => p.code === code);
  if (promo) {
    promo.active = !promo.active;
    showToast(`Promo ${promo.active ? 'activated' : 'deactivated'}`, 'success');
    renderView('admin-promos');
  }
}

function deletePromo(code) {
  if (confirm(`Delete promo code ${code}?`)) {
    const index = state.promoCodes.findIndex(p => p.code === code);
    state.promoCodes.splice(index, 1);
    showToast('Promo code deleted', 'success');
    renderView('admin-promos');
  }
}

function showAddPromoModal() {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-content">
      <button class="modal-close" onclick="this.parentElement.parentElement.remove()">✕</button>
      <h2 style="margin-bottom: 20px;">Add New Promo Code</h2>
      <form id="addPromoForm" style="display: flex; flex-direction: column; gap: 15px;">
        <div class="form-group">
          <label>Promo Code</label>
          <input type="text" id="promoCode" class="promo-input" placeholder="e.g., SAVE20" required style="width: 100%;">
        </div>
        <div class="form-group">
          <label>Discount Type</label>
          <select id="promoType" class="promo-input" style="width: 100%;">
            <option value="percentage">Percentage</option>
            <option value="fixed">Fixed Amount</option>
          </select>
        </div>
        <div class="form-group">
          <label>Discount Value</label>
          <input type="number" id="promoDiscount" class="promo-input" placeholder="e.g., 20" required style="width: 100%;">
        </div>
        <div class="form-group">
          <label>Minimum Purchase (₱)</label>
          <input type="number" id="promoMinPurchase" class="promo-input" placeholder="e.g., 1000" required style="width: 100%;">
        </div>
        <button type="submit" class="btn-primary">Create Promo Code</button>
      </form>
    </div>
  `;
  document.body.appendChild(modal);
  
  document.getElementById('addPromoForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const newPromo = {
      code: document.getElementById('promoCode').value.toUpperCase(),
      type: document.getElementById('promoType').value,
      discount: parseInt(document.getElementById('promoDiscount').value),
      minPurchase: parseInt(document.getElementById('promoMinPurchase').value),
      active: true
    };
    
    state.promoCodes.push(newPromo);
    showToast('Promo code created successfully', 'success');
    modal.remove();
    renderView('admin-promos');
  });
}

// Admin Reviews
function renderAdminReviews(content) {
  content.innerHTML = `
    <div class="products-header">
      <h2>Reviews Management</h2>
      <p style="color: var(--text-light);">Moderate customer reviews</p>
    </div>
    
    <div class="data-table">
      <div class="table-header">
        <h3>All Reviews</h3>
      </div>
      <div style="padding: 20px;">
        <div class="empty-state">
          <div class="empty-icon">⭐</div>
          <h3>No Reviews Yet</h3>
          <p>Customer reviews will appear here</p>
        </div>
      </div>
    </div>
  `;
}

// Admin Settings
function renderAdminSettings(content) {
  content.innerHTML = `
    <div class="products-header">
      <h2>Business Settings</h2>
      <p style="color: var(--text-light);">Manage your business configuration</p>
    </div>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 30px;">
      <div class="order-summary">
        <h3>Store Information</h3>
        <div style="display: flex; flex-direction: column; gap: 15px; margin-top: 20px;">
          <div class="form-group">
            <label>Store Name</label>
            <input type="text" class="promo-input" value="ShopHub" style="width: 100%;">
          </div>
          <div class="form-group">
            <label>Contact Email</label>
            <input type="email" class="promo-input" value="support@shophub.com" style="width: 100%;">
          </div>
          <div class="form-group">
            <label>Contact Phone</label>
            <input type="tel" class="promo-input" value="+63 912 345 6789" style="width: 100%;">
          </div>
          <button class="btn-primary">Save Changes</button>
        </div>
      </div>
      
      <div class="order-summary">
        <h3>Delivery Settings</h3>
        <div style="display: flex; flex-direction: column; gap: 15px; margin-top: 20px;">
          <div class="form-group">
            <label>Zone 1 Fee (₱)</label>
            <input type="number" class="promo-input" value="150" style="width: 100%;">
          </div>
          <div class="form-group">
            <label>Zone 2 Fee (₱)</label>
            <input type="number" class="promo-input" value="250" style="width: 100%;">
          </div>
          <div class="form-group">
            <label>Zone 3 Fee (₱)</label>
            <input type="number" class="promo-input" value="350" style="width: 100%;">
          </div>
          <button class="btn-primary">Save Changes</button>
        </div>
      </div>
    </div>
    
    <div class="chart-container">
      <h3>Product Sales Analytics</h3>
      <div style="display: flex; gap: 20px; margin: 20px 0;">
        <button class="btn-secondary" onclick="renderProductSalesChart()">View Sales Chart</button>
        <button class="btn-secondary" onclick="renderTopProducts()">Top Products</button>
      </div>
      <div id="analyticsContent"></div>
    </div>
  `;
  
  renderProductSalesChart();
}

function renderProductSalesChart() {
  const content = document.getElementById('analyticsContent');
  if (!content) return;
  
  const deliveredOrders = state.orders.filter(o => o.status === 'delivered');
  const ordersByDay = {};
  
  deliveredOrders.forEach(order => {
    const day = new Date(order.date).toLocaleDateString('en-US', { weekday: 'short' });
    ordersByDay[day] = (ordersByDay[day] || 0) + 1;
  });
  
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const maxOrders = Math.max(...days.map(day => ordersByDay[day] || 0), 1);
  
  content.innerHTML = `
    <div style="margin-top: 20px;">
      <h4 style="margin-bottom: 20px;">Orders Delivered This Week</h4>
      <div class="chart">
        ${days.map(day => `
          <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
            <div class="chart-bar" style="height: ${((ordersByDay[day] || 0) / maxOrders) * 100}%; min-height: 20px;">
              <div class="chart-value">${ordersByDay[day] || 0}</div>
            </div>
            <div class="chart-label">${day}</div>
          </div>
        `).join('')}
      </div>
      
      <div style="margin-top: 40px; padding: 20px; background: var(--background); border-radius: 12px;">
        <h4 style="margin-bottom: 15px;">Summary</h4>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
          <div>
            <div style="color: var(--text-light); font-size: 0.9rem;">Total Delivered</div>
            <div style="font-size: 2rem; font-weight: 700; color: var(--primary);">${deliveredOrders.length}</div>
          </div>
          <div>
            <div style="color: var(--text-light); font-size: 0.9rem;">Total Revenue</div>
            <div style="font-size: 2rem; font-weight: 700; color: var(--primary);">₱${deliveredOrders.reduce((sum, o) => sum + o.total, 0).toLocaleString()}</div>
          </div>
          <div>
            <div style="color: var(--text-light); font-size: 0.9rem;">Avg Order Value</div>
            <div style="font-size: 2rem; font-weight: 700; color: var(--primary);">₱${deliveredOrders.length > 0 ? Math.floor(deliveredOrders.reduce((sum, o) => sum + o.total, 0) / deliveredOrders.length).toLocaleString() : 0}</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderTopProducts() {
  const content = document.getElementById('analyticsContent');
  if (!content) return;
  
  const sortedProducts = Object.values(state.productSalesStats).sort((a, b) => b.quantity - a.quantity);
  
  if (sortedProducts.length === 0) {
    content.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📊</div>
        <h3>No Sales Data Yet</h3>
        <p>Sales data will appear here once orders are delivered</p>
      </div>
    `;
    return;
  }
  
  const maxQuantity = sortedProducts[0]?.quantity || 1;
  
  content.innerHTML = `
    <div style="margin-top: 20px;">
      <h4 style="margin-bottom: 20px;">Top Selling Products</h4>
      <div style="display: flex; flex-direction: column; gap: 15px;">
        ${sortedProducts.slice(0, 10).map((product, index) => `
          <div style="display: flex; align-items: center; gap: 15px; padding: 15px; background: var(--background); border-radius: 12px;">
            <div style="font-size: 1.5rem; font-weight: 700; color: var(--primary); min-width: 40px;">#${index + 1}</div>
            <div style="flex: 1;">
              <div style="font-weight: 600; margin-bottom: 5px;">${product.name}</div>
              <div style="width: 100%; height: 8px; background: var(--border); border-radius: 4px; overflow: hidden;">
                <div style="width: ${(product.quantity / maxQuantity) * 100}%; height: 100%; background: linear-gradient(to right, var(--primary), var(--secondary)); transition: width 0.3s;"></div>
              </div>
            </div>
            <div style="text-align: right; min-width: 120px;">
              <div style="font-weight: 700; font-size: 1.2rem;">${product.quantity} sold</div>
              <div style="color: var(--text-light); font-size: 0.9rem;">₱${product.revenue.toLocaleString()}</div>
            </div>
          </div>
        `).join('')}
      </div>
      
      <div style="margin-top: 30px; padding: 20px; background: var(--background); border-radius: 12px;">
        <h4 style="margin-bottom: 15px;">Product Performance</h4>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
          <div>
            <div style="color: var(--text-light); font-size: 0.9rem;">Total Products Sold</div>
            <div style="font-size: 2rem; font-weight: 700; color: var(--primary);">${sortedProducts.reduce((sum, p) => sum + p.quantity, 0)}</div>
          </div>
          <div>
            <div style="color: var(--text-light); font-size: 0.9rem;">Total Product Revenue</div>
            <div style="font-size: 2rem; font-weight: 700; color: var(--primary);">₱${sortedProducts.reduce((sum, p) => sum + p.revenue, 0).toLocaleString()}</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Initialize
window.addEventListener('load', () => {
  console.log('ShopHub E-Commerce Platform Loaded');
  
  // Initialize some sample sales data for demo
  if (Object.keys(state.productSalesStats).length === 0) {
    state.productSalesStats = {
      1: { name: 'Classic Leather Watch', quantity: 45, revenue: 112455 },
      2: { name: 'Smart Watch Pro', quantity: 38, revenue: 341962 },
      9: { name: 'Running Sneakers', quantity: 52, revenue: 207948 },
      13: { name: 'Cotton T-Shirt', quantity: 67, revenue: 40133 },
      5: { name: 'Leather Backpack', quantity: 31, revenue: 108469 }
    };
  }
});
