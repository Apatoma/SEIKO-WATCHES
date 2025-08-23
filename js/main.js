// Traducciones
const translations = {
	en: {
		title: "Customize Your Seiko",
		subtitle: "Discover the best modding parts to create your dream Seiko watch. Premium quality, fast shipping.",
		cart: "Cart",
		yourSelection: "Your Selection",
		buyOnAliexpress: "Buy on AliExpress",
		footerText: "© 2025 Seiko Mod Builder. Made with ❤️ for watch enthusiasts.",
		filters: { all: "All", dial: "Dials", hands: "Hands", bezel: "Bezels", case: "Cases", strap: "Straps", crystal: "Crystals", movement: "Movements" },
		categories: { dial: "Dial", hands: "Hands", bezel: "Bezel", case: "Case", strap: "Strap", crystal: "Crystal", movement: "Movement" },
		addToCart: "Add to Cart", items: "items", item: "item", openingAliexpress: "Opening AliExpress!", noProducts: "No products found in this category."
	},
	es: {
		title: "Personaliza tu Seiko",
		subtitle: "Descubre las mejores piezas de modding para crear el reloj Seiko de tus sueños. Calidad premium, envío rápido.",
		cart: "Carrito",
		yourSelection: "Tu Selección",
		buyOnAliexpress: "Comprar en AliExpress",
		footerText: "© 2025 Seiko Mod Builder. Hecho con ❤️ para los amantes de los relojes.",
		filters: { all: "Todas", dial: "Esferas", hands: "Agujas", bezel: "Biseles", case: "Cajas", strap: "Correas", crystal: "Cristales", movement: "Movimientos" },
		categories: { dial: "Esfera", hands: "Agujas", bezel: "Bisel", case: "Caja", strap: "Correa", crystal: "Cristal", movement: "Movimiento" },
		addToCart: "Añadir al Carrito", items: "piezas", item: "pieza", openingAliexpress: "¡Abriendo AliExpress!", noProducts: "No se encontraron productos en esta categoría."
	}
};

// Datos de productos
const parts = [
	{ id:1, name:{en:"Submariner Black Dial",es:"Esfera Submariner Negra"}, price:25.99, category:"dial",
	  img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop", url:"https://es.aliexpress.com/item/1005004567890123.html" },
	{ id:2, name:{en:"Mercedes Silver Hands",es:"Agujas Mercedes Plata"}, price:15.50, category:"hands",
	  img:"https://images.unsplash.com/photo-1594736797933-d0d59a2fe5ad?w=800&h=800&fit=crop", url:"https://es.aliexpress.com/item/1005004567890124.html" },
	{ id:3, name:{en:"Pepsi Aluminum Bezel",es:"Bisel Pepsi Aluminio"}, price:35.75, category:"bezel",
	  img:"https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&h=800&fit=crop", url:"https://es.aliexpress.com/item/1005004567890125.html" },
	{ id:4, name:{en:"316L Steel Polished Case",es:"Caja 316L Acero Pulido"}, price:89.99, category:"case",
	  img:"https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&h=800&fit=crop", url:"https://es.aliexpress.com/item/1005004567890126.html" },
	{ id:5, name:{en:"NATO Olive Green Strap",es:"Correa NATO Verde Oliva"}, price:12.30, category:"strap",
	  img:"https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&h=800&fit=crop", url:"https://es.aliexpress.com/item/1005004567890127.html" },
	{ id:6, name:{en:"Explorer White Dial",es:"Esfera Explorer Blanca"}, price:28.45, category:"dial",
	  img:"https://images.unsplash.com/photo-1509048191080-d2e2678e5070?w=800&h=800&fit=crop", url:"https://es.aliexpress.com/item/1005004567890128.html" },
	{ id:7, name:{en:"Snowflake Hands",es:"Agujas Snowflake"}, price:18.75, category:"hands",
	  img:"https://images.unsplash.com/photo-1495704907664-71211775d60b?w=800&h=800&fit=crop", url:"https://es.aliexpress.com/item/1005004567890129.html" },
	{ id:8, name:{en:"GMT Blue/Black Bezel",es:"Bisel GMT Azul/Negro"}, price:42.20, category:"bezel",
	  img:"https://images.unsplash.com/photo-1606859181900-af25eb5a90b1?w=800&h=800&fit=crop", url:"https://es.aliexpress.com/item/1005004567890130.html" },
	{ id:9, name:{en:"Jubilee Steel Bracelet",es:"Correa Jubilee Acero"}, price:45.60, category:"strap",
	  img:"https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&h=800&fit=crop", url:"https://es.aliexpress.com/item/1005004567890131.html" },
	{ id:10, name:{en:"Black PVD Matte Case",es:"Caja PVD Negra Mate"}, price:95.80, category:"case",
	  img:"https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&h=800&fit=crop", url:"https://es.aliexpress.com/item/1005004567890132.html" },
	{ id:11, name:{en:"Sapphire Crystal AR Coated",es:"Cristal Zafiro con AR"}, price:38.90, category:"crystal",
	  img:"https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&h=800&fit=crop", url:"https://es.aliexpress.com/item/1005004567890133.html" },
	{ id:12, name:{en:"NH35 Automatic Movement",es:"Movimiento Automático NH35"}, price:78.50, category:"movement",
	  img:"https://images.unsplash.com/photo-1585123332905-18726e0c51e0?w=800&h=800&fit=crop", url:"https://es.aliexpress.com/item/1005004567890134.html" }
];

// DOM Elements (redefine in case script loaded deferred)
const languageToggleEl = document.getElementById('languageToggle');
const productsGrid = document.getElementById('productsGrid');
const cartIndicator = document.getElementById('cartIndicator');
const cartCountEl = document.getElementById('cartCount');
const floatingCart = document.getElementById('floatingCart');
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.getElementById('modalClose');
const cartTitleEl = document.getElementById('cartTitle');
const cartSummaryEl = document.getElementById('cartSummary');
const checkoutBtn = document.getElementById('checkoutBtn');
const heroTitle = document.getElementById('heroTitle');
const heroSubtitle = document.getElementById('heroSubtitle');
const cartText = document.getElementById('cartText');
const footerText = document.getElementById('footerText');

let currentLang = 'en';
let cart = [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
	renderProducts('all');
	bindUI();
	updateTranslations();
	updateCartUI();
});

function bindUI() {
	// Language toggle
	languageToggleEl.addEventListener('click', () => {
		currentLang = currentLang === 'en' ? 'es' : 'en';
		languageToggleEl.textContent = currentLang === 'en' ? '🇪🇸 ES' : '🇬🇧 EN';
		updateTranslations();
	});

	// Filter buttons
	document.querySelectorAll('.filter-btn').forEach(btn => {
		btn.addEventListener('click', () => {
			document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
			btn.classList.add('active');
			renderProducts(btn.dataset.category);
		});
	});

	// Cart toggle
	cartIndicator.addEventListener('click', () => {
		const open = floatingCart.classList.toggle('show');
		cartIndicator.setAttribute('aria-expanded', open ? 'true' : 'false');
	});

	// Modal close
	modalClose.addEventListener('click', closeModal);
	imageModal.addEventListener('click', (e) => { if (e.target === imageModal) closeModal(); });

	// Checkout
	checkoutBtn.addEventListener('click', () => {
		if (cart.length === 0) return alert(translations[currentLang].noProducts);
		// Abrir el primer producto en AliExpress como ejemplo
		window.open(cart[0].url, '_blank', 'noopener');
	});
}

function renderProducts(category) {
	productsGrid.innerHTML = '';
	const filtered = category === 'all' ? parts : parts.filter(p => p.category === category);
	if (filtered.length === 0) {
		productsGrid.innerHTML = `<div class="empty-state"><h3>${translations[currentLang].noProducts}</h3></div>`;
		return;
	}
	filtered.forEach(p => {
		productsGrid.appendChild(createProductCard(p));
	});
	// observar animación entrante
	const observer = new IntersectionObserver((entries) => {
		entries.forEach(en => { if (en.isIntersecting) en.target.classList.add('show'); });
	}, { threshold: 0.1 });
	document.querySelectorAll('.product-card').forEach(c => observer.observe(c));
}

function createProductCard(part) {
	const card = document.createElement('div'); card.className = 'product-card';

	const imgWrap = document.createElement('div'); imgWrap.className = 'product-image';
	const img = document.createElement('img'); img.src = part.img; img.alt = part.name[currentLang] || part.name.en;
	img.loading = 'lazy';
	imgWrap.appendChild(img);
	imgWrap.addEventListener('click', () => openModal(part.img, part.name[currentLang]));

	const name = document.createElement('div'); name.className = 'product-name'; name.textContent = part.name[currentLang];
	const category = document.createElement('div'); category.className = 'product-category'; category.textContent = translations[currentLang].categories[part.category] || part.category;
	const price = document.createElement('div'); price.className = 'product-price'; price.textContent = `$${part.price.toFixed(2)}`;

	const btn = document.createElement('button'); btn.className = 'add-to-cart-btn'; btn.textContent = translations[currentLang].addToCart;
	btn.addEventListener('click', () => addToCart(part));

	card.appendChild(imgWrap);
	card.appendChild(name);
	card.appendChild(category);
	card.appendChild(price);
	card.appendChild(btn);

	return card;
}

function openModal(src, alt) {
	modalImage.src = src; modalImage.alt = alt || '';
	imageModal.classList.add('show'); imageModal.setAttribute('aria-hidden','false');
}
function closeModal() { imageModal.classList.remove('show'); imageModal.setAttribute('aria-hidden','true'); modalImage.src = ''; }

function addToCart(part) {
	cart.push(part);
	updateCartUI();
	// muestra carrito temporalmente
	floatingCart.classList.add('show');
	setTimeout(() => floatingCart.classList.remove('show'), 2500);
}

function updateCartUI() {
	cartCountEl.textContent = cart.length;
	const total = cart.reduce((s,p) => s + p.price, 0);
	cartSummaryEl.textContent = `${cart.length} ${cart.length === 1 ? translations[currentLang].item : translations[currentLang].items} - $${total.toFixed(2)}`;
	cartTitleEl.textContent = translations[currentLang].yourSelection;
	cartText.textContent = translations[currentLang].cart;
	footerText.textContent = translations[currentLang].footerText;
	// cambiar atributo de checkout si existe un link principal
	checkoutBtn.textContent = translations[currentLang].buyOnAliexpress;
}

function updateTranslations() {
	heroTitle.textContent = translations[currentLang].title;
	heroSubtitle.textContent = translations[currentLang].subtitle;
	document.querySelectorAll('.filter-btn').forEach(btn => {
		const key = btn.dataset.category || 'all';
		btn.textContent = translations[currentLang].filters[key] || btn.textContent;
	});
	// volver a renderizar productos para actualizar nombres y botones
	renderProducts(document.querySelector('.filter-btn.active')?.dataset.category || 'all');
	updateCartUI();
}
