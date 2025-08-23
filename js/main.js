// Language handling
let currentLang = 'en';

// DOM Elements
const languageToggle = document.getElementById('languageToggle');
const productsGrid = document.getElementById('productsGrid');
const cartIndicator = document.getElementById('cartIndicator');
const floatingCart = document.getElementById('floatingCart');
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.getElementById('modalClose');

// Cart state
let cart = [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('all');
    initializeEventListeners();
    initializeIntersectionObserver();
});

function initializeEventListeners() {
    // Language toggle
    languageToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'es' : 'en';
        languageToggle.textContent = currentLang === 'en' ? '🇪🇸 ES' : '🇬🇧 EN';
        updateTranslations();
    });

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProducts(btn.dataset.category);
        });
    });

    // Cart toggle
    cartIndicator.addEventListener('click', () => {
        floatingCart.classList.toggle('show');
    });

    // Modal close
    modalClose.addEventListener('click', () => {
        imageModal.classList.remove('show');
    });
}

function initializeIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.product-card').forEach(card => {
        observer.observe(card);
    });
}

function renderProducts(category) {
    productsGrid.innerHTML = '';
    const filteredParts = category === 'all' 
        ? parts 
        : parts.filter(part => part.category === category);

    if (filteredParts.length === 0) {
        productsGrid.innerHTML = `
            <div class="empty-state">
                <h3>${translations[currentLang].noProducts}</h3>
            </div>
        `;
        return;
    }

    filteredParts.forEach(part => {
        const card = createProductCard(part);
        productsGrid.appendChild(card);
    });
}

function createProductCard(part) {
    const card = document.createElement('div');
    card.className = 'product-card';
    // ... rest of card creation code
    return card;
}

// Add other necessary functions for cart handling, translations, etc.
