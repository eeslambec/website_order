/* ============================================================
   ApexGoods — Application Logic & Localization (EN / RU)
   ============================================================ */

// ─── SVG Fallback Generator (Ensures 100% resilient photo display) ───
function getProductFallbackSvg(category, title) {
  const themes = {
    audio: {
      bg1: '#1e1b4b', bg2: '#312e81', accent: '#818cf8',
      icon: '<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>'
    },
    wearables: {
      bg1: '#064e3b', bg2: '#047857', accent: '#34d399',
      icon: '<circle cx="12" cy="12" r="7"/><polyline points="12 9 12 12 13.5 13.5"/><path d="M16.51 17.35l-.35 3.83a2 2 0 01-2 1.82H9.83a2 2 0 01-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 019.83 1h4.35a2 2 0 012 1.82l.35 3.83"/>'
    },
    office: {
      bg1: '#1e293b', bg2: '#334155', accent: '#94a3b8',
      icon: '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>'
    },
    charging: {
      bg1: '#431407', bg2: '#7c2d12', accent: '#fb923c',
      icon: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>'
    }
  };
  const t = themes[category] || themes.audio;
  const safeTitle = (title || 'ApexGoods').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400" width="500" height="400"><defs><linearGradient id="g_${category}" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${t.bg1}"/><stop offset="100%" stop-color="${t.bg2}"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g_${category})"/><circle cx="250" cy="170" r="72" fill="${t.accent}" opacity="0.14"/><g transform="translate(217, 137) scale(2.8)" fill="none" stroke="${t.accent}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${t.icon}</g><text x="250" y="308" text-anchor="middle" fill="#f8fafc" font-family="-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif" font-size="17" font-weight="600">${safeTitle}</text><text x="250" y="336" text-anchor="middle" fill="${t.accent}" font-family="-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif" font-size="12" font-weight="700" letter-spacing="2">APEXGOODS</text></svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

const PRODUCTS = [
  // 1. Audio & Headphones
  {
    id: 1,
    category: 'audio',
    name: 'SonicPro Over-Ear Headphones',
    name_ru: 'Накладные наушники SonicPro',
    desc: 'Immersive 40mm drivers with active noise cancellation and 30-hour battery life.',
    desc_ru: 'Полноразмерные драйверы 40 мм с активным шумоподавлением и 30 часами автономной работы.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
  },
  {
    id: 2,
    category: 'audio',
    name: 'AirPulse Wireless Earbuds',
    name_ru: 'Беспроводные наушники AirPulse',
    desc: 'Ultra-lightweight true wireless earbuds with spatial audio and IPX5 water resistance.',
    desc_ru: 'Сверхлегкие TWS-наушники с пространственным звуком и влагозащитой IPX5.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500&q=80',
  },
  {
    id: 3,
    category: 'audio',
    name: 'BassDrop Portable Speaker',
    name_ru: 'Портативная колонка BassDrop',
    desc: 'Compact Bluetooth speaker delivering rich 360° sound with 12-hour playtime.',
    desc_ru: 'Компактный Bluetooth-динамик с насыщенным звуком 360° и 12 часами воспроизведения.',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80',
  },
  {
    id: 4,
    category: 'audio',
    name: 'StudioMix USB Microphone',
    name_ru: 'Студийный USB-микрофон StudioMix',
    desc: 'Broadcast-quality condenser microphone with cardioid pickup and zero-latency monitoring.',
    desc_ru: 'Конденсаторный микрофон студийного качества с кардиоидной диаграммой и нулевой задержкой.',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500&q=80',
  },

  // 2. Smart Wearables
  {
    id: 5,
    category: 'wearables',
    name: 'PulseTrack Fitness Band',
    name_ru: 'Фитнес-браслет PulseTrack',
    desc: 'Advanced health monitoring with heart rate, SpO2, sleep tracking, and 14-day battery.',
    desc_ru: 'Мониторинг здоровья: пульс, кислород в крови SpO2, трекинг сна и 14 дней работы.',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&q=80',
  },
  {
    id: 6,
    category: 'wearables',
    name: 'NovaSmart Watch Pro',
    name_ru: 'Смарт-часы NovaSmart Pro',
    desc: 'Premium smartwatch with AMOLED display, GPS, and over 100 workout modes.',
    desc_ru: 'Премиальные смарт-часы с AMOLED-дисплеем, GPS и более чем 100 режимами тренировок.',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&q=80',
  },
  {
    id: 7,
    category: 'wearables',
    name: 'LensVue Smart Glasses',
    name_ru: 'Умные очки LensVue',
    desc: 'Lightweight smart glasses with built-in speakers, mic, and UV protection lenses.',
    desc_ru: 'Легкие умные очки со встроенными динамиками, микрофоном и защитой от ультрафиолета.',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80',
  },
  {
    id: 8,
    category: 'wearables',
    name: 'LoopBand Minimalist Tracker',
    name_ru: 'Минималистичный трекер LoopBand',
    desc: 'Sleek ring-style tracker for steps, calories, and sleep — no screen, no distractions.',
    desc_ru: 'Стильный трекер активности для шагов, калорий и сна — без лишних экранов и отвлечений.',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
  },

  // 3. Desk & Office Gear
  {
    id: 9,
    category: 'office',
    name: 'ErgoLift Laptop Stand',
    name_ru: 'Подставка для ноутбука ErgoLift',
    desc: 'Adjustable aluminum stand with ventilation slots for laptops up to 17 inches.',
    desc_ru: 'Регулируемая алюминиевой подставка с вентиляцией для ноутбуков диагональю до 17 дюймов.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&q=80',
  },
  {
    id: 10,
    category: 'office',
    name: 'ClickPro Wireless Mouse',
    name_ru: 'Беспроводная мышь ClickPro',
    desc: 'Precision ergonomic mouse with silent clicks, 4000 DPI sensor, and USB-C charging.',
    desc_ru: 'Эргономичная бесшумная мышь с сенсором 4000 DPI и быстрой зарядкой через USB-C.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80',
  },
  {
    id: 11,
    category: 'office',
    name: 'GlowDesk LED Bar Light',
    name_ru: 'LED-лампа для монитора GlowDesk',
    desc: 'Adaptive monitor light bar with touch controls and auto-dimming ambient sensor.',
    desc_ru: 'Умная лампа на монитор с сенсорным управлением и датчиком освещенности.',
    price: 54.99,
    image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=500&q=80',
  },
  {
    id: 12,
    category: 'office',
    name: 'TypeMaster Mechanical Keyboard',
    name_ru: 'Механическая клавиатура TypeMaster',
    desc: 'Hot-swappable switches with RGB backlighting, PBT keycaps, and wireless connectivity.',
    desc_ru: 'Горячая замена свитчей, настраиваемая RGB-подсветка, PBT-кейкапы и беспроводной режим.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80',
  },

  // 4. Charging & Power
  {
    id: 13,
    category: 'charging',
    name: 'VoltPad 3-in-1 Charger',
    name_ru: 'Беспроводная станция 3-в-1 VoltPad',
    desc: 'Qi-certified wireless charging pad for phone, earbuds, and watch simultaneously.',
    desc_ru: 'Qi-станция для одновременной беспроводной зарядки смартфона, наушников и часов.',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=500&q=80',
  },
  {
    id: 14,
    category: 'charging',
    name: 'PowerCore 20K Battery Pack',
    name_ru: 'Аккумулятор PowerCore 20K',
    desc: 'Ultra-slim 20,000mAh power bank with 65W PD fast charging and dual USB-C ports.',
    desc_ru: 'Тонкий повербанк на 20 000 мАч с быстрой зарядкой Power Delivery 65W и двумя портами USB-C.',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=80',
  },
  {
    id: 15,
    category: 'charging',
    name: 'MagSnap Car Mount Charger',
    name_ru: 'Автомобильный держатель MagSnap',
    desc: 'Magnetic car mount with 15W wireless charging and 360° rotation for any phone.',
    desc_ru: 'Магнитный автомобильный держатель с быстрой зарядкой 15W и свободным вращением на 360°.',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1616440347437-b1c73416efc2?w=500&q=80',
  },
  {
    id: 16,
    category: 'charging',
    name: 'TurboGaN 100W Wall Charger',
    name_ru: 'Сетевое зарядное устройство TurboGaN 100W',
    desc: 'Compact GaN charger with 3 ports delivering up to 100W — powers laptops & phones.',
    desc_ru: 'Компактный адаптер GaN с 3 портами мощностью до 100W для быстрой зарядки ноутбуков и телефонов.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&q=80',
  },
];

// ─── Translations (EN / RU) ──────────────────────────────────
const TRANSLATIONS = {
  en: {
    // Nav
    nav_home: 'Home',
    nav_catalog: 'Catalog',
    nav_about: 'About Us',
    nav_contacts: 'Contacts',
    search_placeholder: 'Search products…',

    // Hero
    hero_tag_new: 'New arrivals',
    hero_tag_sub: 'fresh drops every week',
    hero_title: 'Elevate Your Everyday with Premium Tech Accessories',
    hero_desc: 'Curated gear for the modern lifestyle. From studio-grade audio to smart wearables — discover products that blend form and function.',
    hero_cta: 'Explore Catalog',
    feature_shipping: 'Free Shipping',
    feature_warranty: '2-Year Warranty',
    feature_returns: 'Easy Returns',
    feature_payment: 'Secure Payment',

    // Catalog
    catalog_tag: 'Our Collection',
    catalog_title: 'Premium Products',
    catalog_desc: 'Explore our curated collection of premium tech accessories designed for modern living.',
    cat_all: 'All Products',
    cat_audio: 'Audio & Headphones',
    cat_wearables: 'Smart Wearables',
    cat_office: 'Desk & Office Gear',
    cat_charging: 'Charging & Power',
    btn_add_to_cart: 'Add to Cart',
    btn_added: '✓ Added',
    no_products: 'No products found.',

    // About
    about_tag: 'Who We Are',
    about_title: 'Crafted for People Who Care About Details',
    about_p1: 'At ApexGoods, we believe that great accessories shouldn\'t be an afterthought. Every product in our catalog is rigorously tested and hand-picked to ensure it meets our exacting standards of quality, design, and usability.',
    about_p2: 'Founded in 2021, we\'ve grown from a small curated shop into a trusted destination for thousands of discerning buyers who want products that look incredible and perform even better.',
    stat_customers: 'Happy customers',
    stat_products: 'Products curated',
    stat_rating: 'Average rating',

    // Contacts
    contacts_tag: 'Reach Out',
    contacts_title: 'Get in Touch',
    contacts_desc: 'Have a question or need help? We\'d love to hear from you.',
    contacts_info_title: 'Contact Information',
    contact_email_label: 'Email',
    contact_phone_label: 'Phone',
    contact_hours_label: 'Working Hours',
    contact_hours_value: 'Mon — Fri: 9:00 AM – 7:00 PM<br/>Sat: 10:00 AM – 5:00 PM<br/>Sun: Closed',
    contact_address_label: 'Address',
    contact_address_value: '1420 Tech Park Drive, Suite 200<br/>San Francisco, CA 94107',
    form_title: 'Send Us a Message',
    form_name_label: 'Full Name',
    form_name_placeholder: 'John Doe',
    form_name_error: 'Please enter your name',
    form_email_label: 'Email Address',
    form_email_placeholder: 'john@example.com',
    form_email_error: 'Please enter a valid email',
    form_message_label: 'Message',
    form_message_placeholder: 'How can we help?',
    form_message_error: 'Please enter a message',
    form_submit: 'Send Message',
    toast_message_sent: 'Message sent! We\'ll get back to you soon.',

    // Footer
    footer_desc: 'Premium lifestyle and tech accessories, curated for people who care about quality and design.',
    footer_shop: 'Shop',
    footer_company: 'Company',
    footer_support: 'Support',
    footer_careers: 'Careers',
    footer_press: 'Press',
    footer_help: 'Help Center',
    footer_shipping: 'Shipping',
    footer_returns: 'Returns',
    footer_warranty: 'Warranty',
    footer_copyright: '© 2026 ApexGoods. All rights reserved.',
    footer_designed: 'Designed with care.',

    // Cart
    cart_title: 'Your Cart',
    cart_empty_html: 'Your cart is empty.<br/>Start shopping to add items!',
    cart_subtotal: 'Subtotal',
    cart_shipping_label: 'Shipping',
    cart_shipping_free: 'Free',
    cart_total: 'Total',
    cart_checkout: 'Proceed to Checkout',
    toast_added_to_cart: 'added to cart!',
    cart_remove_item: 'Remove item',

    // Checkout
    checkout_title: 'Checkout',
    checkout_contact: 'Contact Details',
    checkout_phone_label: 'Phone Number',
    checkout_phone_placeholder: '+1 (555) 000-0000',
    checkout_phone_error: 'Please enter a valid phone number',
    checkout_continue_delivery: 'Continue to Delivery →',
    checkout_delivery_title: 'Delivery Method',
    delivery_standard: 'Standard Courier',
    delivery_standard_desc: '3-5 business days · Free',
    delivery_express: 'Express Delivery',
    delivery_express_desc: '1-2 business days · $9.99',
    delivery_pickup: 'Store Pickup',
    delivery_pickup_desc: 'Available same day · Free',
    checkout_payment_title: 'Payment Method',
    payment_card: 'Credit / Debit Card',
    payment_card_desc: 'Visa, Mastercard, Amex',
    payment_cod: 'Cash on Delivery',
    payment_cod_desc: 'Pay when you receive',
    payment_apple: 'Apple Pay',
    payment_apple_desc: 'Quick and secure (Demo)',
    checkout_back: '← Back',
    checkout_place_order: 'Place Order →',

    // Order Confirmation (Step 3)
    checkout_step3_header: 'Order Confirmed!',
    order_confirmed_title: 'Thank You for Your Order!',
    order_confirmed_p1: 'We\'ve received your order and will process it shortly. A confirmation email has been sent to',
    order_label_delivery: 'Delivery:',
    order_label_payment: 'Payment:',
    order_express_shipping: 'Express Shipping',
    order_total_label: 'Total',
    btn_continue_shopping: 'Continue Shopping',
  },

  ru: {
    // Nav
    nav_home: 'Главная',
    nav_catalog: 'Каталог',
    nav_about: 'О нас',
    nav_contacts: 'Контакты',
    search_placeholder: 'Поиск товаров…',

    // Hero
    hero_tag_new: 'Новинки',
    hero_tag_sub: 'свежие поступления каждую неделю',
    hero_title: 'Премиальные аксессуары и гаджеты на каждый день',
    hero_desc: 'Отобранные аксессуары для современного стиля жизни. От студийного звука до умных гаджетов — откройте технологии, сочетающие стиль и надежность.',
    hero_cta: 'Перейти в каталог',
    feature_shipping: 'Бесплатная доставка',
    feature_warranty: 'Гарантия 2 года',
    feature_returns: 'Простой возврат',
    feature_payment: 'Безопасная оплата',

    // Catalog
    catalog_tag: 'Наша коллекция',
    catalog_title: 'Премиальные товары',
    catalog_desc: 'Исследуйте нашу коллекцию аксессуаров премиум-класса, созданных для повседневной жизни.',
    cat_all: 'Все товары',
    cat_audio: 'Аудио и наушники',
    cat_wearables: 'Умные гаджеты',
    cat_office: 'Для офиса и стола',
    cat_charging: 'Зарядные устройства',
    btn_add_to_cart: 'В корзину',
    btn_added: '✓ Добавлено',
    no_products: 'Товары не найдены.',

    // About
    about_tag: 'О нас',
    about_title: 'Создано для тех, кто ценит детали',
    about_p1: 'В ApexGoods мы уверены, что качественные аксессуары имеют решающее значение. Каждый продукт в каталоге проходит строгий отбор и тестирование, соответствуя высшим стандартам дизайна и надежности.',
    about_p2: 'С момента основания в 2021 году мы выросли из небольшого магазина в надежный выбор для тысяч клиентов, ценящих безупречный дизайн и высокое качество.',
    stat_customers: 'Довольных клиентов',
    stat_products: 'Отобранных товаров',
    stat_rating: 'Средняя оценка',

    // Contacts
    contacts_tag: 'Свяжитесь с нами',
    contacts_title: 'Контакты',
    contacts_desc: 'Есть вопросы или нужна консультация? Напишите нам, мы всегда рады помочь.',
    contacts_info_title: 'Контактная информация',
    contact_email_label: 'Эл. почта',
    contact_phone_label: 'Телефон',
    contact_hours_label: 'Часы работы',
    contact_hours_value: 'Пн — Пт: 9:00 – 19:00<br/>Сб: 10:00 – 17:00<br/>Вс: Выходной',
    contact_address_label: 'Адрес',
    contact_address_value: 'Технопарк Драйв 1420, офис 200<br/>Сан-Франциско, CA 94107',
    form_title: 'Напишите нам',
    form_name_label: 'Ваше имя',
    form_name_placeholder: 'Иван Иванов',
    form_name_error: 'Пожалуйста, введите ваше имя',
    form_email_label: 'Электронная почта',
    form_email_placeholder: 'ivan@example.com',
    form_email_error: 'Пожалуйста, введите корректный email',
    form_message_label: 'Сообщение',
    form_message_placeholder: 'Чем мы можем помочь?',
    form_message_error: 'Пожалуйста, напишите сообщение',
    form_submit: 'Отправить сообщение',
    toast_message_sent: 'Спасибо! Ваше сообщение успешно отправлено.',

    // Footer
    footer_desc: 'Премиальные аксессуары и современные гаджеты для тех, кто ценит высокое качество и безупречный стиль.',
    footer_shop: 'Каталог',
    footer_company: 'Компания',
    footer_support: 'Поддержка',
    footer_careers: 'Вакансии',
    footer_press: 'Пресса',
    footer_help: 'Центр помощи',
    footer_shipping: 'Доставка',
    footer_returns: 'Возврат',
    footer_warranty: 'Гарантия',
    footer_copyright: '© 2026 ApexGoods. Все права защищены.',
    footer_designed: 'Создано с заботой.',

    // Cart
    cart_title: 'Корзина',
    cart_empty_html: 'Ваша корзина пуста.<br/>Выберите понравившиеся товары в каталоге!',
    cart_subtotal: 'Сумма',
    cart_shipping_label: 'Доставка',
    cart_shipping_free: 'Бесплатно',
    cart_total: 'Итого',
    cart_checkout: 'Оформить заказ',
    toast_added_to_cart: 'добавлено в корзину!',
    cart_remove_item: 'Удалить товар',

    // Checkout
    checkout_title: 'Оформление заказа',
    checkout_contact: 'Контактные данные',
    checkout_phone_label: 'Номер телефона',
    checkout_phone_placeholder: '+7 (999) 000-0000',
    checkout_phone_error: 'Пожалуйста, введите корректный номер телефона',
    checkout_continue_delivery: 'Перейти к доставке →',
    checkout_delivery_title: 'Способ доставки',
    delivery_standard: 'Стандартный курьер',
    delivery_standard_desc: '3-5 рабочих дней · Бесплатно',
    delivery_express: 'Экспресс-доставка',
    delivery_express_desc: '1-2 рабочих дня · $9.99',
    delivery_pickup: 'Самовывоз',
    delivery_pickup_desc: 'Доступно сегодня · Бесплатно',
    checkout_payment_title: 'Способ оплаты',
    payment_card: 'Банковская карта',
    payment_card_desc: 'Visa, Mastercard, МИР',
    payment_cod: 'Оплата при получении',
    payment_cod_desc: 'Оплата курьеру при вручении',
    payment_apple: 'Apple Pay',
    payment_apple_desc: 'Быстро и безопасно (Демо)',
    checkout_back: '← Назад',
    checkout_place_order: 'Подтвердить заказ →',

    // Order Confirmation (Step 3)
    checkout_step3_header: 'Заказ оформлен!',
    order_confirmed_title: 'Спасибо за ваш заказ!',
    order_confirmed_p1: 'Мы получили ваш заказ и приступили к обработке. Письмо с подтверждением отправлено на',
    order_label_delivery: 'Доставка:',
    order_label_payment: 'Оплата:',
    order_express_shipping: 'Экспресс-доставка',
    order_total_label: 'Итого',
    btn_continue_shopping: 'Продолжить покупки',
  },
};

const CATEGORY_NAMES = {
  en: {
    audio: 'Audio & Headphones',
    wearables: 'Smart Wearables',
    office: 'Desk & Office Gear',
    charging: 'Charging & Power',
  },
  ru: {
    audio: 'Аудио и наушники',
    wearables: 'Умные гаджеты',
    office: 'Для офиса и стола',
    charging: 'Зарядные устройства',
  },
};

// ─── State ────────────────────────────────────────────────────
let currentLang = localStorage.getItem('apexgoods_lang') || 'en';
let cart = [];
let currentCategory = 'all';
let checkoutStep = 1;

// Helper to get translated string
function t(key) {
  return TRANSLATIONS[currentLang]?.[key] || TRANSLATIONS['en'][key] || key;
}

// ─── DOM Elements ─────────────────────────────────────────────
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const header            = $('#header');
const hamburger         = $('#hamburger');
const mobileNav         = $('#mobileNav');
const productGrid       = $('#productGrid');
const categoryTabs      = $('#categoryTabs');
const cartBtn           = $('#cartBtn');
const cartBadge         = $('#cartBadge');
const cartOverlay       = $('#cartOverlay');
const cartDrawer        = $('#cartDrawer');
const cartClose         = $('#cartClose');
const cartBody          = $('#cartBody');
const cartEmpty         = $('#cartEmpty');
const cartFooter        = $('#cartFooter');
const cartCount         = $('#cartCount');
const cartSubtotal      = $('#cartSubtotal');
const cartShipping      = $('#cartShipping');
const cartTotal         = $('#cartTotal');
const checkoutBtn       = $('#checkoutBtn');
const checkoutModal     = $('#checkoutModal');
const modalClose        = $('#modalClose');
const toast             = $('#toast');
const toastText         = $('.toast__text');
const searchInput       = $('#searchInput');
const searchToggle      = $('#searchToggle');
const mobileSearch      = $('#mobileSearch');
const mobileSearchInput = $('#mobileSearchInput');

// ─── Header scroll ───────────────────────────────────────────
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
});

// ─── Mobile navigation ──────────────────────────────────────
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileNav.classList.toggle('open');
  if (mobileSearch) mobileSearch.classList.remove('open');
});

mobileNav.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
  });
});

// ─── Mobile search toggle ────────────────────────────────────
if (searchToggle) {
  searchToggle.addEventListener('click', () => {
    mobileSearch.classList.toggle('open');
    if (mobileSearch.classList.contains('open')) {
      setTimeout(() => mobileSearchInput.focus(), 100);
    }
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
  });
}

// ─── Active nav highlighting ─────────────────────────────────
const sections = ['hero', 'catalog', 'about', 'contacts'];
const navLinks = $$('.nav-desktop a, .mobile-nav a');

function updateActiveNav() {
  let current = '';
  sections.forEach((id) => {
    const sec = document.getElementById(id);
    if (sec && sec.getBoundingClientRect().top < window.innerHeight / 3) {
      current = id;
    }
  });
  navLinks.forEach((link) => {
    link.classList.toggle('active', link.dataset.nav === current);
  });
}
window.addEventListener('scroll', updateActiveNav);

// ─── Localization Engine ─────────────────────────────────────
function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem('apexgoods_lang', lang);
  document.documentElement.lang = lang;

  // Update language switcher active buttons
  $$('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update static text elements
  $$('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val) {
      if (key === 'contact_hours_value' || key === 'contact_address_value' || key === 'cart_empty_html') {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    }
  });

  // Update placeholder attributes
  $$('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = t(key);
    if (val) el.placeholder = val;
  });

  // Re-render dynamic elements
  renderProducts(currentCategory, searchInput.value.trim());
  updateCartUI();

  // If checkout modal is open
  if (checkoutModal.classList.contains('open')) {
    $('#modalTitle').textContent = checkoutStep === 3 ? t('checkout_step3_header') : t('checkout_title');
    if (checkoutStep === 3) {
      renderConfirmation();
    }
  }
}

// Bind language switcher buttons (header & mobile menu)
document.addEventListener('click', (e) => {
  const langBtn = e.target.closest('.lang-btn');
  if (langBtn && langBtn.dataset.lang) {
    setLanguage(langBtn.dataset.lang);
  }
});

// ─── Render products ─────────────────────────────────────────
function renderProducts(filter = 'all', search = '') {
  let items = filter === 'all' ? [...PRODUCTS] : PRODUCTS.filter((p) => p.category === filter);

  if (search) {
    const q = search.toLowerCase();
    items = items.filter((p) => {
      const matchEn = p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
      const matchRu = (p.name_ru || '').toLowerCase().includes(q) || (p.desc_ru || '').toLowerCase().includes(q);
      return matchEn || matchRu;
    });
  }

  const categoryDict = CATEGORY_NAMES[currentLang] || CATEGORY_NAMES.en;

  productGrid.innerHTML = items.length
    ? items.map((p) => {
        const name = currentLang === 'ru' ? p.name_ru : p.name;
        const desc = currentLang === 'ru' ? p.desc_ru : p.desc;
        const catLabel = categoryDict[p.category] || p.category;

        const fallbackSrc = getProductFallbackSvg(p.category, name);

        return `
          <article class="product-card" data-id="${p.id}">
            <div class="product-card__img">
              <img src="${p.image}" alt="${name}" loading="lazy" onerror="this.onerror=null;this.src=this.dataset.fallback;" data-fallback="${fallbackSrc}" />
              <span class="product-card__category">${catLabel}</span>
            </div>
            <div class="product-card__body">
              <h3 class="product-card__name">${name}</h3>
              <p class="product-card__desc">${desc}</p>
              <div class="product-card__footer">
                <span class="product-card__price">$${p.price.toFixed(2)}</span>
                <button class="add-to-cart-btn" data-id="${p.id}" id="add-btn-${p.id}">${t('btn_add_to_cart')}</button>
              </div>
            </div>
          </article>
        `;
      }).join('')
    : `<p style="grid-column:1/-1;text-align:center;color:var(--clr-text-muted);padding:3rem 0;">${t('no_products')}</p>`;

  // Bind add-to-cart buttons
  productGrid.querySelectorAll('.add-to-cart-btn').forEach((btn) => {
    btn.addEventListener('click', () => addToCart(Number(btn.dataset.id)));
  });
}

// ─── Category tabs ───────────────────────────────────────────
categoryTabs.addEventListener('click', (e) => {
  const tab = e.target.closest('.category-tab');
  if (!tab) return;
  $$('.category-tab').forEach((t) => t.classList.remove('active'));
  tab.classList.add('active');
  currentCategory = tab.dataset.category;
  renderProducts(currentCategory, searchInput.value.trim());
});

// ─── Search ──────────────────────────────────────────────────
let searchTimer;
function handleSearch(value) {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    renderProducts(currentCategory, value.trim());
  }, 200);
}

searchInput.addEventListener('input', () => {
  if (mobileSearchInput) mobileSearchInput.value = searchInput.value;
  handleSearch(searchInput.value);
});

if (mobileSearchInput) {
  mobileSearchInput.addEventListener('input', () => {
    searchInput.value = mobileSearchInput.value;
    handleSearch(mobileSearchInput.value);
  });
}

// ─── Cart logic ──────────────────────────────────────────────
function addToCart(productId) {
  const existing = cart.find((c) => c.id === productId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: productId, qty: 1 });
  }
  updateCartUI();

  const product = PRODUCTS.find((p) => p.id === productId);
  const prodName = currentLang === 'ru' ? product.name_ru : product.name;
  showToast(`"${prodName}" ${t('toast_added_to_cart')}`);

  // Button feedback
  const btn = $(`#add-btn-${productId}`);
  if (btn) {
    btn.classList.add('added');
    btn.textContent = t('btn_added');
    setTimeout(() => {
      btn.classList.remove('added');
      btn.textContent = t('btn_add_to_cart');
    }, 1400);
  }
}

function removeFromCart(productId) {
  cart = cart.filter((c) => c.id !== productId);
  updateCartUI();
}

function updateQty(productId, delta) {
  const item = cart.find((c) => c.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
    return;
  }
  updateCartUI();
}

function getCartTotals() {
  let subtotal = 0;
  cart.forEach((ci) => {
    const product = PRODUCTS.find((p) => p.id === ci.id);
    subtotal += product.price * ci.qty;
  });
  return { subtotal, shipping: 0, total: subtotal };
}

function updateCartUI() {
  const totalItems = cart.reduce((s, c) => s + c.qty, 0);
  cartBadge.textContent = totalItems;
  cartBadge.classList.toggle('visible', totalItems > 0);
  cartBadge.classList.remove('pop');
  void cartBadge.offsetWidth; // force reflow
  if (totalItems > 0) cartBadge.classList.add('pop');

  cartCount.textContent = totalItems;

  if (cart.length === 0) {
    cartEmpty.style.display = 'flex';
    cartFooter.style.display = 'none';
    cartBody.querySelectorAll('.cart-item').forEach((el) => el.remove());
    return;
  }

  cartEmpty.style.display = 'none';
  cartFooter.style.display = 'block';

  // Render cart items
  const existingItems = cartBody.querySelectorAll('.cart-item');
  existingItems.forEach((el) => el.remove());

  cart.forEach((ci) => {
    const product = PRODUCTS.find((p) => p.id === ci.id);
    const prodName = currentLang === 'ru' ? product.name_ru : product.name;
    const fallbackSrc = getProductFallbackSvg(product.category, prodName);
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <div class="cart-item__img">
        <img src="${product.image}" alt="${prodName}" onerror="this.onerror=null;this.src=this.dataset.fallback;" data-fallback="${fallbackSrc}" />
      </div>
      <div class="cart-item__info">
        <div class="cart-item__name">${prodName}</div>
        <div class="cart-item__price">$${product.price.toFixed(2)}</div>
        <div class="cart-item__controls">
          <button class="qty-btn" data-id="${ci.id}" data-delta="-1" aria-label="Decrease quantity">−</button>
          <span class="cart-item__qty">${ci.qty}</span>
          <button class="qty-btn" data-id="${ci.id}" data-delta="1" aria-label="Increase quantity">+</button>
        </div>
      </div>
      <button class="cart-item__remove" data-id="${ci.id}" aria-label="${t('cart_remove_item')}">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    `;
    cartBody.appendChild(div);
  });

  // Bind qty and remove buttons
  cartBody.querySelectorAll('.qty-btn').forEach((btn) => {
    btn.addEventListener('click', () => updateQty(Number(btn.dataset.id), Number(btn.dataset.delta)));
  });
  cartBody.querySelectorAll('.cart-item__remove').forEach((btn) => {
    btn.addEventListener('click', () => removeFromCart(Number(btn.dataset.id)));
  });

  // Totals
  const totals = getCartTotals();
  cartSubtotal.textContent = `$${totals.subtotal.toFixed(2)}`;
  cartShipping.textContent = totals.shipping === 0 ? t('cart_shipping_free') : `$${totals.shipping.toFixed(2)}`;
  cartTotal.textContent = `$${totals.total.toFixed(2)}`;
}

// ─── Cart drawer open/close ─────────────────────────────────
function openCart() {
  cartOverlay.classList.add('open');
  cartDrawer.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  cartOverlay.classList.remove('open');
  cartDrawer.classList.remove('open');
  document.body.style.overflow = '';
}
cartBtn.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

// Close cart / modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (checkoutModal.classList.contains('open')) {
      closeCheckout();
    } else if (cartDrawer.classList.contains('open')) {
      closeCart();
    }
  }
});

// ─── Checkout modal ─────────────────────────────────────────
function openCheckout() {
  closeCart();
  checkoutStep = 1;
  updateCheckoutStep();
  checkoutModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCheckout() {
  checkoutModal.classList.remove('open');
  document.body.style.overflow = '';
}

checkoutBtn.addEventListener('click', openCheckout);
modalClose.addEventListener('click', closeCheckout);
checkoutModal.addEventListener('click', (e) => {
  if (e.target === checkoutModal) closeCheckout();
});

// Checkout step navigation
function updateCheckoutStep() {
  $$('.checkout-step').forEach((s) => s.classList.remove('active'));
  $(`#step${checkoutStep}`).classList.add('active');

  $$('.step-dot').forEach((dot) => {
    const s = Number(dot.dataset.step);
    dot.classList.toggle('active', s === checkoutStep);
    dot.classList.toggle('done', s < checkoutStep);
  });

  $('#modalTitle').textContent = checkoutStep === 3 ? t('checkout_step3_header') : t('checkout_title');
}

// Step 1 → 2
$('#step1Next').addEventListener('click', () => {
  if (!validateStep1()) return;
  checkoutStep = 2;
  updateCheckoutStep();
});

// Step 2 → 3 (Place order)
$('#step2Next').addEventListener('click', () => {
  checkoutStep = 3;
  renderConfirmation();
  updateCheckoutStep();
});

// Step 2 ← Back
$('#step2Back').addEventListener('click', () => {
  checkoutStep = 1;
  updateCheckoutStep();
});

// Radio card selection
['deliveryGroup', 'paymentGroup'].forEach((groupId) => {
  const group = document.getElementById(groupId);
  if (!group) return;
  group.querySelectorAll('.radio-card').forEach((card) => {
    card.addEventListener('click', () => {
      group.querySelectorAll('.radio-card').forEach((c) => c.classList.remove('selected'));
      card.classList.add('selected');
      card.querySelector('input').checked = true;
    });
  });
});

// Validation helpers
function validateStep1() {
  let valid = true;
  const name  = $('#checkoutName');
  const phone = $('#checkoutPhone');
  const email = $('#checkoutEmail');

  // Name
  if (!name.value.trim()) {
    name.classList.add('error');
    $('#checkoutNameError').classList.add('visible');
    valid = false;
  } else {
    name.classList.remove('error');
    $('#checkoutNameError').classList.remove('visible');
  }

  // Phone
  const phonePattern = /^[\d\s\+\-\(\)]{7,}$/;
  if (!phonePattern.test(phone.value.trim())) {
    phone.classList.add('error');
    $('#checkoutPhoneError').classList.add('visible');
    valid = false;
  } else {
    phone.classList.remove('error');
    $('#checkoutPhoneError').classList.remove('visible');
  }

  // Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    email.classList.add('error');
    $('#checkoutEmailError').classList.add('visible');
    valid = false;
  } else {
    email.classList.remove('error');
    $('#checkoutEmailError').classList.remove('visible');
  }

  return valid;
}

// Render order confirmation
function renderConfirmation() {
  const orderId = 'APX-' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substring(2, 5).toUpperCase();
  const totals = getCartTotals();

  const deliveryChecked = document.querySelector('input[name="delivery"]:checked');
  const paymentChecked  = document.querySelector('input[name="payment"]:checked');
  const deliveryMethod  = deliveryChecked ? deliveryChecked.value : 'standard';
  const paymentMethod   = paymentChecked ? paymentChecked.value : 'card';

  const deliveryLabels = {
    standard: t('delivery_standard'),
    express: t('delivery_express'),
    pickup: t('delivery_pickup'),
  };
  const paymentLabels = {
    card: t('payment_card'),
    cod: t('payment_cod'),
    apple: t('payment_apple'),
  };

  let shippingCost = 0;
  if (deliveryMethod === 'express') shippingCost = 9.99;

  const finalTotal = totals.subtotal + shippingCost;

  let itemsHtml = cart.map((ci) => {
    const p = PRODUCTS.find((pr) => pr.id === ci.id);
    const prodName = currentLang === 'ru' ? p.name_ru : p.name;
    return `<div class="order-summary-item"><span>${prodName} × ${ci.qty}</span><span>$${(p.price * ci.qty).toFixed(2)}</span></div>`;
  }).join('');

  if (shippingCost > 0) {
    itemsHtml += `<div class="order-summary-item"><span>${t('order_express_shipping')}</span><span>$${shippingCost.toFixed(2)}</span></div>`;
  }
  itemsHtml += `<div class="order-summary-item"><span>${t('order_total_label')}</span><span>$${finalTotal.toFixed(2)}</span></div>`;

  const userEmail = $('#checkoutEmail').value || 'client@example.com';

  $('#step3').innerHTML = `
    <div class="order-confirmation">
      <div class="order-confirmation__icon">✓</div>
      <h3>${t('order_confirmed_title')}</h3>
      <p>${t('order_confirmed_p1')} <strong>${userEmail}</strong>.</p>
      <div class="order-number">${currentLang === 'ru' ? 'Заказ' : 'Order'} #${orderId}</div>
      <div class="order-summary-list">${itemsHtml}</div>
      <p style="margin-bottom:var(--sp-3);text-align:left;font-size:var(--fs-sm);">
        <strong>${t('order_label_delivery')}</strong> ${deliveryLabels[deliveryMethod]}<br/>
        <strong>${t('order_label_payment')}</strong> ${paymentLabels[paymentMethod]}
      </p>
      <button class="btn-primary" id="confirmDone" style="max-width:280px;margin:0 auto;">${t('btn_continue_shopping')}</button>
    </div>
  `;

  $('#confirmDone').addEventListener('click', () => {
    cart = [];
    updateCartUI();
    closeCheckout();
    $('#checkoutName').value = '';
    $('#checkoutPhone').value = '';
    $('#checkoutEmail').value = '';
    resetCheckoutSelections();
  });
}

// Reset radio selections to defaults
function resetCheckoutSelections() {
  ['deliveryGroup', 'paymentGroup'].forEach((groupId) => {
    const group = document.getElementById(groupId);
    if (!group) return;
    group.querySelectorAll('.radio-card').forEach((card, i) => {
      card.classList.toggle('selected', i === 0);
      card.querySelector('input').checked = i === 0;
    });
  });
}

// ─── Contact form ────────────────────────────────────────────
$('#contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;
  const name    = $('#contactName');
  const email   = $('#contactEmail');
  const message = $('#contactMessage');

  if (!name.value.trim()) {
    name.classList.add('error');
    $('#contactNameError').classList.add('visible');
    valid = false;
  } else {
    name.classList.remove('error');
    $('#contactNameError').classList.remove('visible');
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    email.classList.add('error');
    $('#contactEmailError').classList.add('visible');
    valid = false;
  } else {
    email.classList.remove('error');
    $('#contactEmailError').classList.remove('visible');
  }

  if (!message.value.trim()) {
    message.classList.add('error');
    $('#contactMessageError').classList.add('visible');
    valid = false;
  } else {
    message.classList.remove('error');
    $('#contactMessageError').classList.remove('visible');
  }

  if (valid) {
    showToast(t('toast_message_sent'));
    name.value = '';
    email.value = '';
    message.value = '';
  }
});

// ─── Toast ───────────────────────────────────────────────────
let toastTimer;
function showToast(msg) {
  toastText.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

// ─── Scroll reveal ───────────────────────────────────────────
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

function observeReveals() {
  $$('.reveal:not(.visible)').forEach((el) => observer.observe(el));
}

// ─── Smooth scroll for nav links ─────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 72;
      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  });
});

// ─── Initialize Application ─────────────────────────────────
setLanguage(currentLang);
observeReveals();
updateActiveNav();
