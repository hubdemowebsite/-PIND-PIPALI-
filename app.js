/* ============================================================
   PIND & PIPALI — Application Logic
   ============================================================ */

/* ── PRODUCT DATA ── */
const PRODUCTS = {
    mango: {
        name: "Grandmother's Mango Pickle",
        origin: "Ramkela, Ludhiana",
        price: 349,
        desc: "The original. Ramkela mangoes hand-pounded with 11 sun-roasted spices in cold-pressed mustard oil. 21 days of Ludhiana sun. A jar of pure nostalgia.",
        color: "mango",
        bgGrad: "linear-gradient(135deg, #FFF3D6 0%, #FFD89B 100%)",
        emoji: "🥭",
        ingredients: [
            "Raw Ramkela Mango — hand-selected, semi-ripe",
            "Cold-pressed Mustard Oil (Kachi Ghani) — the base",
            "Fenugreek Seeds (Methi Dana) — for bitterness and depth",
            "Fennel Seeds (Saunf) — sweet aromatic layer",
            "Kalonji (Nigella Seeds) — earthy, peppery notes",
            "Red Chili Powder — Mathania variety, sun-dried",
            "Turmeric — fresh-ground from Lakadong root",
            "Asafoetida (Hing) — a pinch, for digestive balance",
            "Rock Salt (Sendha Namak) — unrefined, mineral-rich",
            "Dry Mango Powder (Amchur) — extra tartness",
            "Black Pepper — coarsely cracked"
        ],
        process: "The mangoes are hand-cut and salted for 48 hours to draw out excess moisture. The masala is stone-ground fresh and mixed with cold-pressed mustard oil heated to its smoking point (to activate the pungency), then cooled completely before mixing. The entire batch is sealed in hand-glazed terracotta barnis and placed in our open courtyard for a minimum of 21 days, turned by hand each morning at sunrise."
    },
    lime: {
        name: "Sun-Kissed Lime Pickle",
        origin: "Sweet Lime Farms, Ludhiana",
        price: 299,
        desc: "Kalinji-scented lime wedges matured for 30 days in terracotta barnis. Bright, tangy, deeply aromatic. A breakfast essential from Punjab.",
        color: "lime",
        bgGrad: "linear-gradient(135deg, #E8F5E0 0%, #C8E6A0 100%)",
        emoji: "🍋",
        ingredients: [
            "Kagzi Lime — thin-skinned, extra juicy variety",
            "Rock Salt — curing and preservation base",
            "Kalonji (Nigella Seeds) — signature lime pairing",
            "Asafoetida — digestive and aromatic depth",
            "Red Chili Powder — mild Kashmiri variety",
            "Turmeric — for colour and antiseptic properties",
            "Mustard Seeds (Rai) — whole, for crunch",
            "Cold-Pressed Mustard Oil — for the oil bath"
        ],
        process: "Limes are quartered but kept hinged at the base, packed with dry salt, and left in the sun for 7 days until they soften and the rinds turn translucent. The spice mixture is then packed into each lime, and the entire jar is submerged in warmed mustard oil. 30 days of sun-curing follow. The result: a silky, deep golden achaar with zero bitterness."
    },
    chili: {
        name: "Fiery Green Chili Pickle",
        origin: "Chili Orchards, Punjab",
        price: 329,
        desc: "Thick-cut Punjabi hari mirch stuffed with fennel, fenugreek, and dry mango powder. A bold, fire-breathing tradition on every plate.",
        color: "chili",
        bgGrad: "linear-gradient(135deg, #FFE8E8 0%, #FFBDBD 100%)",
        emoji: "🌶",
        ingredients: [
            "Thick Punjabi Green Chilies — locally sourced",
            "Fennel Seeds — coarsely crushed for stuffing",
            "Fenugreek Seeds — toasted and ground",
            "Dry Mango Powder (Amchur) — tartness for balance",
            "Red Chili Powder — extra heat, Mathania variety",
            "Turmeric — freshly ground",
            "Rock Salt — generous, for preservation",
            "Mustard Seeds — coarsely pounded",
            "Cold-Pressed Mustard Oil — warm pour finish"
        ],
        process: "Each chili is slit lengthwise without separating and packed tightly with the dry masala blend by hand. They are arranged in glass jars, and hot mustard oil is poured over the top to create a complete seal. The jars are left sealed in full sun for 14–21 days. The heat mellows, the flavours deepen, and the chilies turn from sharp to complex."
    },
    garlic: {
        name: "Lahsun Mirch Pickle",
        origin: "Ropar Garlic Farms, Punjab",
        price: 319,
        desc: "Whole garlic cloves slow-infused in black pepper, red chili, and rock salt. The one that turns any meal into a Punjabi feast.",
        color: "garlic",
        bgGrad: "linear-gradient(135deg, #EDE8F5 0%, #CDB8E8 100%)",
        emoji: "🧄",
        ingredients: [
            "Whole Garlic Cloves — freshly peeled, Ropar variety",
            "Black Peppercorns — coarsely cracked",
            "Red Chili Flakes — sun-dried and hand-crushed",
            "Rock Salt — unrefined mineral salt",
            "Bay Leaves (Tej Patta) — aromatic depth",
            "Cloves (Laung) — two whole per jar",
            "White Vinegar — small amount, for bite",
            "Cold-Pressed Mustard Oil — infused base"
        ],
        process: "Garlic cloves are peeled and sun-dried for 2 days to remove surface moisture and intensify the allium character. They are then macerated in rock salt for 24 hours before being packed into jars with the spice blend. A warm mustard oil pour seals the jar. After 28 days of sun-curing, the garlic turns from sharp to mellow, complex, and deeply savoury."
    },
    mixed: {
        name: "Punjab Mixed Achar",
        origin: "Local Punjab Farms",
        price: 379,
        desc: "Cauliflower, carrot, turnip, and raw mango — unified in a deep mustard oil masala. The taste of winter mornings in Ludhiana.",
        color: "mixed",
        bgGrad: "linear-gradient(135deg, #FFF0E0 0%, #F5CC99 100%)",
        emoji: "🥕",
        ingredients: [
            "Cauliflower Florets — blanched and sun-dried",
            "Carrots — thick-cut diagonal slices",
            "Turnip (Shalgam) — cubed, seasonal",
            "Raw Mango — for tartness and binding",
            "Ginger — julienned fine",
            "Green Chilies — whole, small variety",
            "Panch Phoron Spice Mix — five-spice blend",
            "Turmeric, Red Chili, Coriander — stone ground",
            "Rock Salt + Cold-Pressed Mustard Oil"
        ],
        process: "Each vegetable is individually prepped — some blanched, some raw — and then sun-dried for 3 days to reduce moisture and concentrate flavour. The masala is layered into the barni in stages, with oil poured at each stage to ensure even distribution. This achaar requires 25 days of curing. A true winter pickle, best eaten with makki di roti and sarson da saag."
    },
    ginger: {
        name: "Adrak Rai Pickle",
        origin: "Himachal Foothills, Punjab",
        price: 289,
        desc: "Young ginger, cut julienne and preserved in mustard seeds, turmeric, and raw cane vinegar. Light, punchy, and deeply cleansing.",
        color: "ginger",
        bgGrad: "linear-gradient(135deg, #FEF9E0 0%, #F5E099 100%)",
        emoji: "🫚",
        ingredients: [
            "Young Ginger (Adrak) — fresh, thin-skinned",
            "Black Mustard Seeds (Rai) — the star spice",
            "Turmeric — generous quantity for colour",
            "Rock Salt — natural preservative",
            "Green Chilies — 2–3 per jar",
            "Raw Cane Vinegar — light, unrefined",
            "Lemon Juice — freshly squeezed",
            "Cold-Pressed Mustard Oil — light finish"
        ],
        process: "Fresh young ginger is peeled, cut into fine julienne matchsticks and lightly salted for 6 hours. After draining the excess liquid, the ginger is combined with the mustard seed and turmeric blend. A light pour of mustard oil and cane vinegar seals the jar. Unlike heavier pickles, this one needs only 10 days of sun-curing and is best consumed within 3 months."
    },
    stuffed_chili: {
        name: "Stuffed Red Chili Pickle",
        origin: "Ludhiana Courtyard",
        price: 369,
        desc: "Jumbo red chilies hand-stuffed with a secret golden masala and cured in pure mustard oil. A festive favorite from Punjab.",
        color: "red-chili",
        bgGrad: "linear-gradient(135deg, #FFE8E8 0%, #FFBDBD 100%)",
        emoji: "🌶️",
        ingredients: [
            "Large Red Chilies — sun-dried",
            "Golden Masala Mix — stone-ground",
            "Kachi Ghani Mustard Oil",
            "Fennel & Fenugreek Seeds",
            "Amchur (Dry Mango Powder)"
        ],
        process: "Chilies are slit and stuffed with a rich masala blend, then sun-cured for 15 days until the heat is perfectly balanced."
    },
    mixed_winter: {
        name: "Mixed Winter Vegetable",
        origin: "Punjab Local Farms",
        price: 359,
        desc: "The classic winter blend of cauliflower, carrots, and turnips in a spicy, earthy mustard base. The ultimate comfort pickle.",
        color: "winter-mixed",
        bgGrad: "linear-gradient(135deg, #FFF0E0 0%, #F5CC99 100%)",
        emoji: "🥕",
        ingredients: [
            "Winter Cauliflower, Carrots, Turnips",
            "Crushed Mustard Seeds (Rai)",
            "Cold-pressed Mustard Oil",
            "Jaggery — a touch of sweetness",
            "Traditional Spices"
        ],
        process: "Vegetables are blanched and sun-dried before being tossed in a heavy masala and bottled for slow fermentation."
    }
};

/* ── TRANSLATIONS ── */
const TRANSLATIONS = {
    en: {
        collection: "Collection",
        story: "Our Story",
        process: "The Process",
        whyUs: "Why Us",
        shopNow: "Shop Now",
        explore: "Explore the Collection"
    },
    pa: {
        collection: "ਸੰਗ੍ਰਹਿ",
        story: "ਸਾਡੀ ਕਹਾਣੀ",
        process: "ਪ੍ਰਕਿਰਿਆ",
        whyUs: "ਅਸੀਂ ਕਿਉਂ",
        shopNow: "ਖਰੀਦੋ",
        explore: "ਸੰਗ੍ਰਹਿ ਦੇਖੋ"
    }
};

let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'pa' : 'en';
    document.querySelectorAll('[data-t]').forEach(el => {
        const key = el.getAttribute('data-t');
        el.textContent = TRANSLATIONS[currentLang][key];
    });
    document.getElementById('lang-toggle').textContent = currentLang === 'en' ? 'ਪੰ' : 'EN';
}

function toggleTheme() {
    document.documentElement.classList.toggle('dark');
}

document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

/* ── CART STATE ── */
let cart = [];

/* ── NAV SCROLL BEHAVIOUR ── */
(function initNav() {
    const nav = document.getElementById('main-nav');
    const hero = document.getElementById('hero');

    function updateNav() {
        const scrolled = window.scrollY > 20;
        nav.classList.toggle('scrolled', scrolled);
        // over-hero: light text when hero is visible
        const heroBottom = hero.getBoundingClientRect().bottom;
        nav.classList.toggle('over-hero', heroBottom > 60 && !scrolled);
    }

    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
})();

/* ── HAMBURGER ── */
(function initHamburger() {
    const btn = document.getElementById('hamburger');
    const mobileNav = document.getElementById('nav-mobile');
    btn.addEventListener('click', () => {
        mobileNav.classList.toggle('open');
    });
    // close on link click
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => mobileNav.classList.remove('open'));
    });
})();

/* ── CART ── */
function toggleCart() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    drawer.classList.toggle('open');
    overlay.classList.toggle('open');
}

document.getElementById('cart-btn').addEventListener('click', toggleCart);

function addToCart(name, price) {
    const existing = cart.find(i => i.name === name);
    if (existing) {
        existing.qty += 1;
    } else {
        const prod = Object.values(PRODUCTS).find(p => p.name === name);
        cart.push({ name, price, qty: 1, emoji: prod ? prod.emoji : '🫙' });
    }
    renderCart();
    showToast(`${name} added to cart!`);
}

function removeFromCart(name) {
    cart = cart.filter(i => i.name !== name);
    renderCart();
}

function renderCart() {
    const itemsEl = document.getElementById('cart-items');
    const emptyEl = document.getElementById('cart-empty');
    const footerEl = document.getElementById('cart-footer');
    const countEl = document.getElementById('cart-count');
    const totalEl = document.getElementById('cart-total-amount');

    const totalCount = cart.reduce((s, i) => s + i.qty, 0);
    const totalAmount = cart.reduce((s, i) => s + i.price * i.qty, 0);

    countEl.textContent = totalCount;

    // Remove old cart-item elements
    itemsEl.querySelectorAll('.cart-item').forEach(el => el.remove());

    if (cart.length === 0) {
        emptyEl.style.display = 'flex';
        footerEl.style.display = 'none';
        return;
    }

    emptyEl.style.display = 'none';
    footerEl.style.display = 'block';
    totalEl.textContent = `₹ ${totalAmount}`;

    // Append fresh items into cart-items container
    cart.forEach(item => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
      <div class="cart-item-icon" style="background:var(--cream-dk)">${item.emoji}</div>
      <div class="cart-item-name">${item.name}${item.qty > 1 ? ` ×${item.qty}` : ''}</div>
      <div class="cart-item-price">₹ ${item.price * item.qty}</div>
      <button class="cart-item-remove" onclick="removeFromCart('${item.name.replace(/'/g, "\\'")}')">✕</button>
    `;
        itemsEl.appendChild(div);
    });
}

/* ── TOAST ── */
function showToast(msg) {
    const toast = document.getElementById('toast');
    document.getElementById('toast-msg').textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2800);
}

/* ── PRODUCT MODAL ── */
function openProduct(id) {
    const p = PRODUCTS[id];
    if (!p) return;

    document.getElementById('modal-origin').textContent = p.origin;
    document.getElementById('modal-name').textContent = p.name;
    document.getElementById('modal-desc').textContent = p.desc;
    document.getElementById('modal-price').textContent = `₹ ${p.price}`;

    const modalImage = document.getElementById('modal-image');
    modalImage.style.background = p.bgGrad;

    // Build jar in modal
    const jarWrap = document.getElementById('modal-jar');
    jarWrap.innerHTML = `
    <div style="position:relative;text-align:center;animation:floatJar 4s ease-in-out infinite">
      <div style="width:130px;height:190px;border-radius:14px 14px 32px 32px;margin:0 auto;position:relative;overflow:hidden;border:1px solid rgba(255,255,255,.6);box-shadow:0 20px 60px rgba(0,0,0,.2),inset 0 1px 0 rgba(255,255,255,.5)">
        <div style="position:absolute;inset:0">
          <div class="jar-card-content ${p.color}-content">
            <div class="jar-ingredient ji-1"></div>
            <div class="jar-ingredient ji-2"></div>
            <div class="jar-ingredient ji-3"></div>
          </div>
        </div>
        <div class="jar-card-shine"></div>
      </div>
      <div class="jar-card-lid" style="width:142px"></div>
      <div style="font-size:2.5rem;margin-top:16px">${p.emoji}</div>
    </div>
  `;

    // Ingredients
    const ingList = document.getElementById('modal-ingredients');
    ingList.innerHTML = p.ingredients.map(i => `<li>${i}</li>`).join('');

    // Process
    document.getElementById('modal-process').textContent = p.process;

    // Add to cart button
    const addBtn = document.getElementById('modal-add-btn');
    addBtn.onclick = () => { addToCart(p.name, p.price); };

    // Show modal
    document.getElementById('modal-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('open');
    document.body.style.overflow = '';
}

// Close modal on Escape
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
});

/* ── NEWSLETTER ── */
function handleSubscribe(e) {
    e.preventDefault();
    const email = document.getElementById('email-input').value;
    if (!email) return;
    showToast(`Welcome aboard! Check ${email} for a confirmation.`);
    document.getElementById('email-input').value = '';
}

/* ── SCROLL ANIMATIONS ── */
(function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(
        '.product-card, .pillar-card, .testimonial-card, .process-step, .story-quote-block'
    ).forEach(el => {
        el.classList.add('fade-up');
        observer.observe(el);
    });
})();
