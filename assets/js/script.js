'use strict';

let cart = [];
let isSingleProductView = false;
let currentCategory = "Home";
const WHATSAPP_NUMBER = "+212630008073";

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }



// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');




// mobile menu variables
document.getElementById("MobilecartBtn").onclick = () =>
    document.getElementById("checkoutOverlay").style.display = "flex";

const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

// mobile menu function
const mobileMenuCloseFunc = function () {
  mobileMenu[i].classList.remove('active');
  overlay.classList.remove('active');
}

mobileMenuOpenBtn[i].addEventListener('click', function () {
  mobileMenu[i].classList.add('active');
  overlay.classList.add('active');
});

mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
overlay.addEventListener('click', mobileMenuCloseFunc);

}


//Mobile home button

document.getElementById("homeBtn").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const nextElement = this.nextElementSibling;
    
    // Add this null check
    if (!nextElement) {
      console.log('No next sibling found');
      return;
    }

    const clickedBtn = nextElement.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {
        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');
      }

    }

    nextElement.classList.toggle('active');
    this.classList.toggle('active');

  });

}

//rating
function generateStarRating(rating) {
  const fullStars = Math.floor(rating); // Full stars
  const hasHalfStar = rating % 1 >= 0.5; // Half star if decimal >= 0.5
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars
  
  let starsHTML = '';
  
  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<ion-icon name="star"></ion-icon>';
  }
  
  // Add half star if needed
  if (hasHalfStar) {
    starsHTML += '<ion-icon name="star-half-outline"></ion-icon>';
  }
  
  // Add empty stars
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<ion-icon name="star-outline"></ion-icon>';
  }
  
  return starsHTML;
}

function renderProducts(list = null) {
  const container = document.getElementById("all-products");

  // ===== Search OR Category logic =====
  let filteredProducts = list
    ? list
    : currentCategory === "home"
      ? products
      : products.filter(p => p.categories.includes(currentCategory));

  console.log(currentCategory);
  if (filteredProducts.length === 0) {
    container.innerHTML = `<p style="opacity:.6">No products found</p>`;
    return;
  }

  container.innerHTML = filteredProducts.map(product => `
    <div class="showcase">
      <div class="showcase-banner">
        <img src="${product.image}" alt="${product.title}" width="300" class="product-img default">
        <img src="${product.image}" alt="${product.title}" width="300" class="product-img hover">
        <p class="showcase-badge angle Green">${product.badge}</p>
        <div class="showcase-actions">
          <button class="btn-action"><ion-icon name="eye-outline"></ion-icon></button>
          <button class="btn-action"><ion-icon name="bag-add-outline"></ion-icon></button>
        </div>
      </div>
      <div class="showcase-content">
        <a href="#" class="showcase-category">${product.title}</a>
        <a href="#"><h3 class="showcase-title">${product.description}</h3></a>
        <div class="showcase-rating">
          ${generateStarRating(product.rating)}
        </div>
        <div class="price-box">
          <p class="price">${product.price}dh</p>
          <del>${product.oldPrice}dh</del>
        </div>
        <button class="add-to-cart" onclick="addToCart(${product.id})">
          Add to Cart
        </button>
      </div>
    </div>
  `).join("");
}

function scrollToView(category){
  // Scroll to the All Products section
  if(category === "home"){
      setTimeout(() => {
      const productMain = document.querySelector('.desktop-menu-category-list');
      if (productMain) {
        productMain.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 10);
  }else{
      setTimeout(() => {
    const productMain = document.querySelector('.product-main');
    if (productMain) {
      productMain.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 10);
  }
}


// Render products grid
function renderProductsByType(type) {
  const container = document.getElementById(type);
  
  if (!container) {
    console.error(`Container with id "${type}" not found`);
    return;
  }

  // For all-products, show everything; otherwise filter
  const productsToShow = type === "all-products" 
    ? products 
    : products.filter(product => product.type.includes(type));

  if (productsToShow.length === 0) {
    container.innerHTML = '<div class="loading"><p>No products found</p></div>';
    return;
  }

  // Get the template function for this type
  const template = templates[type];
  
  if (!template) {
    console.error(`No template found for type: ${type}`);
    return;
  }

  container.innerHTML = productsToShow.map(template).join("");
}

// ========================
// Notifications
// ========================
let notificationContainer = document.getElementById("notificationContainer");
if (!notificationContainer) {
  notificationContainer = document.createElement("div");
  notificationContainer.id = "notificationContainer";
  notificationContainer.style.cssText = `
    position: fixed;
    bottom: 80px;
    right: 20px;
    display: flex;
    flex-direction: column-reverse; /* new notifications on top */
    gap: 10px;
    z-index: 9999;
  `;
  document.body.appendChild(notificationContainer);
}

function showNotification(text) {
  const n = document.createElement("div");

  n.innerHTML = `
    <span>${text}</span>
    <button class="view-cart-btn">View cart</button>
  `;

  n.style.cssText = `
    background:#16a34a;
    color:white;
    padding:12px 16px;
    border-radius:10px;
    font-weight:600;
    display:flex;
    align-items:center;
    gap:12px;
    box-shadow:0 10px 20px rgba(0,0,0,.15);
    transform: translateY(100px);
    opacity: 0;
    transition: transform 0.3s ease, opacity 0.3s ease;
  `;

  const btn = n.querySelector(".view-cart-btn");
  btn.style.cssText = `
    background:white;
    color:#16a34a;
    border:none;
    padding:6px 12px;
    border-radius:6px;
    font-weight:700;
    cursor:pointer;
  `;
  btn.onclick = () => {
    document.getElementById("checkoutOverlay").style.display = "flex";
    n.remove();
  };

  notificationContainer.appendChild(n);

  // Trigger slide-in
  requestAnimationFrame(() => {
    n.style.transform = "translateY(0)";
    n.style.opacity = "1";
  });

  // Auto-remove after 3s with slide-out
  setTimeout(() => {
    n.style.transform = "translateY(100px)";
    n.style.opacity = "0";
    n.addEventListener("transitionend", () => n.remove());
  }, 3000);
}


// =====================
// CART LOGIC & checkout
// =====================

function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCartUI();
  showNotification("Added to cart 🛒");
  renderCheckout();
}

function updateCartUI() {
  const badge = document.getElementById("cartBadge");
  const total = cart.reduce((sum, i) => sum + i.qty, 0);
  badge.textContent = total;
  badge.style.display = total ? "flex" : "none";

  const badgeMobile = document.getElementById("mobilecartBadge");
  const totalMobile = cart.reduce((sum, i) => sum + i.qty, 0);
  badgeMobile.textContent = totalMobile;
  badgeMobile.style.display = totalMobile ? "flex" : "none";
  
}


function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else {
    updateCartUI();
    renderCheckout();
  }
}

function renderCheckout() {
  const content = document.getElementById("checkoutContent");
  const footer = document.getElementById("checkoutFooter");
  const totalEl = document.getElementById("totalAmount");

  if (!cart.length) {
    content.innerHTML = `<p style="text-align:center">Your cart is empty</p>`;
    footer.style.display = "none";
    return;
  }

  content.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}">
      <div class="cart-item-info">
        <strong>${item.title}</strong>
        <p>${item.price * item.qty} dh</p>
        <div class="quantity-controls">
          <button onclick="changeQty(${item.id}, -1)">-</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${item.id}, 1)">+</button>
          <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
        </div>
      </div>
    </div>
  `).join("");

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  totalEl.textContent = `Total: ${total} dh`;
  footer.style.display = "block";
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCartUI();
  renderCheckout();
}

// ========================
// Tabs & Events
// ========================
function setupEventListeners() {

  // Top category tabs (All / Men / Women / etc.)
  document.querySelectorAll(".menu-title").forEach(tab => {
    tab.onclick = () => {
      document.querySelectorAll(".menu-title").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      handleCategoryClick(tab.dataset.category);
      scrollToView(tab.dataset.category);
    };
  });

  function handleCategoryClick(category) {
      isSingleProductView = false;
      currentCategory = category;

      renderProducts();
}

  // Cart modal
  document.getElementById("cartBtn").onclick = () =>
    document.getElementById("checkoutOverlay").style.display = "flex";

  document.getElementById("closeCheckout").onclick = () =>
    document.getElementById("checkoutOverlay").style.display = "none";

  document.querySelector(".checkout-btn").onclick = proceedToWhatsApp;
}

/* ========================
   Search Logic
======================== */
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

// Function to render search results
function renderSearchResults(query) {
  const container = document.getElementById("all-products"); // Or a dedicated container
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  if (!filteredProducts.length) {
    container.innerHTML = '<div class="loading"><p>No products found</p></div>';
    scrollToView("products");
    return;
  }

  // Use your existing template system if you want
  container.innerHTML = filteredProducts.map(product => templates["all-products"](product)).join("");
  scrollToView("products");
}

// Trigger search on button click
searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim();
  renderSearchResults(query);
});

// Optional: trigger search on Enter key
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const query = searchInput.value.trim();
    renderSearchResults(query);
  }
});

// ========================
// Lightbox
// ========================
function openLightbox(src) {
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox").style.display = "flex";
}
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}


// ========================
// WhatsApp Checkout
// ========================
function proceedToWhatsApp() {
  let message = "*Green Shop Order* \n\n";
  cart.forEach(i => {
    message += `• ${i.title} x${i.qty} = ${i.price * i.qty} dh\n`;
  });

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  message += `\n Total: ${total} dh\n El Kelâa des Sraghna`;

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}


// ========================
// Deal countdown
// ========================
function startCountdowns() {
  const countdownBoxes = document.querySelectorAll(".countdown-box");

  countdownBoxes.forEach(box => {
    const endTime = new Date(box.dataset.endtime).getTime();
    const daysEl = box.querySelector(".countdown-content:nth-child(1) .display-number");
    const hoursEl = box.querySelector(".countdown-content:nth-child(2) .display-number");
    const minEl = box.querySelector(".countdown-content:nth-child(3) .display-number");
    const secEl = box.querySelector(".countdown-content:nth-child(4) .display-number");

    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = endTime - now;

      if (diff <= 0) {
        daysEl.textContent = "0";
        hoursEl.textContent = "0";
        minEl.textContent = "0";
        secEl.textContent = "0";
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      daysEl.textContent = days;
      hoursEl.textContent = hours.toString().padStart(2, "0");
      minEl.textContent = minutes.toString().padStart(2, "0");
      secEl.textContent = seconds.toString().padStart(2, "0");
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
  });
}


// ========================
// Translation
// ========================
function changeLanguage(language) {
  console.log("transalting");
  if (language === 'en') {
    location.reload(); // Reload to reset to English
  } else {
    // Change the page language using Google Translate
    window.location.href = `https://translate.google.com/translate?sl=en&tl=${language}&u=${window.location.href}`;
  }
}


renderProductsByType("best-seller");
renderProductsByType("new-arrival");
renderProductsByType("promotion");
renderProductsByType("deal-of-the-day");
renderProductsByType("all-products");
setupEventListeners();
startCountdowns();


