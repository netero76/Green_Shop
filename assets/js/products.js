// ========================
// Green Shop Products
// ========================

'use strict';

const products = [
    {
      id: 1,
      title: "خلطة المشاط بزيت اللوز المر",
      price: 89,
      oldPrice: 99,
      categories: ["beauty","hair"],
      type: ["best-seller","new-arrival"],
      rating: 4,
      badge: "new",
      image: "./assets/images/products/herbal_oil.jpeg",
      description: `تركيبة فاخرة من المشاط الطبيعي وزيت اللوز المر الأصلي،
                  مُصمّمة بعناية لتغذية الشعر بعمق واستعادة قوته ولمعانه.

                  ✔️ تغذية مكثفة لفروة الرأس
                  ✔️ تعزيز نمو الشعر وتقليل التساقط
                  ✔️ شعر صحي، ناعم وقوي من الجذور حتى الأطراف
                  💯 مكونات طبيعية مختارة بعناية، بدون أي مواد كيميائية
                  👩‍🦱 مناسبة لجميع أنواع الشعر

                  ✨ نتائج ملموسة مع الاستعمال المنتظم`
    },
    {
      id: 2,
      title: "بذور الكوجي + محلول حبوب القاح",
      price: 79,
      categories: ["health"],
      type: ["new-arrival"],
      rating: 4.5,
      badge: "new",
      image: "./assets/images/products/nakhl.jpeg",
      description: `         مزيج طبيعي راقٍ من بذور الكوجي وحبوب القاح،  
                  مصمّم لدعم التوازن الغذائي وتعزيز الحيوية اليومية.

                  ✔️ يساهم في تعويض نقص الحديد  
                  ✔️ يدعم الطاقة والنشاط العام للجسم  
                  ✔️ يساعد على تقليل الإحساس بالتعب والإرهاق  
                  🌿 تركيبة طبيعية عالية الجودة  

                  ✨ خيار مثالي لمن يبحث عن دعم صحي متوازن بأسلوب طبيعي
    `},
    {
      id: 3,
      title: "بخاخ المفاصل الطبيعي",
      price: 49,
      oldPrice: 60,
      categories: ["health"],
      type: ["promotion"],
      rating: 3,
      badge: "sale",
      image: "./assets/images/products/scorpion.jpeg",
      description: `        بخاخ طبيعي فاخر للعناية بالمفاصل،  
          تم تطويره للمساعدة على تخفيف الآلام واستعادة الراحة الحركية.

          ✔️ يساهم في تقليل آلام الركبة والكتف والظهر  
          ✔️ يدعم مرونة المفاصل ويخفف من التصلب  
          ✔️ مناسب للاستعمال اليومي  
          🌿 تركيبة طبيعية لطيفة وفعّالة  

          🚚 توصيل سريع إلى جميع المدن`
    },
  {
    id: 4,
    title: "الحرقوص: لمسة جمالية طبيعية للحواجب",
    price: 19,
    oldPrice: 50,
    categories: ["women", "beauty", "hair"],
    type: ["deal-of-the-day"],
    rating: 4.5,
    badge: "sale",
    image: "./assets/images/products/eye.jpeg",
    description: `✨ الحرقوص، سر الحواجب المثالية ✨
  احصلي على لون غني وطبيعي لحواجبك، واملئي الفراغات بشكل مذهل.  
  ✔️ لون داكن طبيعي يدوم طويلاً  
  ✔️ ملء الفراغات بشكل متناسق  
  ✔️ ثبات طويل الأمد طوال اليوم  
  ✔️ آمن ومناسب لجميع أنواع البشرة  
  💚 لمسة جمال طبيعية تعكس إشراقة عينيك`
  },
  {
    id: 5,
    title: "مكمل مخصص للرجال",
    price: 59,
    oldPrice: 69,
    categories: ["men"],
    type: [],
    rating: 4,
    badge: "Best",
    image: "./assets/images/products/super_viga.jpeg",
    description: `💪 مكمل طبيعي للرجال، لتعزيز الحيوية والطاقة 💪
  صُمّم لدعم الأداء اليومي والثقة بنفسك بطريقة طبيعية.  
  ✔️ يعزز القوة والنشاط  
  ✔️ يدعم الأداء ويزيد الطاقة  
  ✔️ طريقة استخدام سهلة وآمنة  
  🌿 تركيبة طبيعية 100% بلا مواد صناعية`
  },
  {
    id: 6,
    title: "كريم لبان الذكر الأصلي",
    price: 59,
    categories: ["women","men","beauty", "skin"],
    type: [],
    badge: "Seller",
    rating: 4,
    image: "./assets/images/products/creme_louban.jpeg",
    description: `🌟 كريم لبان الذكر الأصلي 🌟
  احصلي على بشرة مشدودة ومتألقة بشكل طبيعي.  
  ✔️ شدّ فعال للبشرة  
  ✔️ يقلل من التجاعيد والخطوط الدقيقة  
  ✔️ يمنح إشراقة ونضارة طبيعية  
  ✔️ مناسب للوجه والرقبة  
  👩‍🦰 مثالي للنساء والرجال  
  `
  },
  {
    id: 7,
    title: "عسل القولون العصبي",
    price: 40,
    oldPrice: 50,
    categories: ["health"],
    type: [],
    badge: "best",
    rating: 4.5,
    image: "./assets/images/products/9olon.jpeg",
    description: `🌱 عسل القولون العصبي 🌱
  راحة وهدوء لجهازك الهضمي من أول استعمال.  
  ✔️ يساعد على توازن الجهاز الهضمي  
  ✔️ تخفيف الانتفاخ والشعور بعدم الراحة  
  ✔️ تركيبة طبيعية بلا أي مواد كيميائية  
  💛 استمتع بالراحة الطبيعية كل يوم`
  },
  {
    id: 8,
    title: "زيت الحشيش الطبيعي",
    price: 89,
    oldPrice: 99,
    categories: ["women","men", "beauty", "hair"],
    type: [],
    rating: 5,
    badge: "best",
    type: "best-seller",
    image: "./assets/images/products/zit_hachich.jpeg",
    description: `🌿 زيت الحشيش الطبيعي 100% 🌿
  العناية المثالية لشعرك بطريقة طبيعية وفعّالة.  
  ✔️ يقوي الشعر من الجذور  
  ✔️ يعزز طول الشعر ولمعانه  
  ✔️ يقلل التقصف والتساقط  
  🔹 مناسب للرجال والنساء  
  `
  },
  {
    id: 9,
    title: "زيت الزعفران الأصلي",
    price: 79,
    oldPrice: 99,
    categories: ["women","beauty", "skin"],
    type: ["promotion"],
    rating: 4.5,
    badge: "sale",
    image: "./assets/images/products/zit_ze3fran.jpeg",
    description: `🌸 زيت الزعفران الأصلي 🌸
  سر البشرة المتألقة والمشرقة بشكل طبيعي.  
  ✔️ توحيد لون البشرة ومنح إشراقة طبيعية  
  ✔️ ترطيب عميق وتغذية فعّالة  
  ✔️ مناسب للعناية بالبشرة والجسم
  `
  },
   {
    id: 10,
    title: "كريم المفاصل بالعكبر",
    price: 55,
    oldPrice: 75,
    categories: ["health","men","women"],
    type: ["promotion"],
    rating: 4,
    badge:"New",
    image: "./assets/images/products/propolis.jpeg",
    description: ` 
  ✔️ كيساعد على تخفيف الألم
  ✔️ كيرخي العضلات المشدودة
  ✔️ مناسب للبرد والتعب اليومي
  ✔️ مناسب للكبار والرياضيين
  📦 التوصيل بالمجان
  `
  },
   {
    id: 11,
    title: "منتج طبيعي لتجديد الحيوية والنشاط",
    price: 99,
    categories: ["health","men"],
    type: [],
    rating: 3.5,
    badge:"For Men",
    image: "./assets/images/products/eniola.jpeg",
    description: ` 
  هل تشعر بالإرهاق والتعب في حياتك الزوجية؟
هل فقدت الشعور بالنشاط والحيوية اليومية؟

منتجنا الطبيعي مصمم خصيصاً لك:

✨ **المميزات:**
✔️ تركيبة طبيعية 100% آمنة وفعالة
✔️ يعيد النشاط والحيوية بشكل طبيعي
✔️ يساعد في تحسين جودة الحياة الزوجية
✔️ نتائج مرئية مع الاستخدام المنتظم
✔️ بدون آثار جانبية

🚚 **التوصيل السريع**
📍 توصيل مجاني لجميع مدن المغرب
  `
  },
   {
    id: 12,
    title: "شامبو الأطفال المضاد للقمل والصيبان ",
    price: 59,
    oldPrice: 70,
    categories: ["kids","hair"],
    type: ["new-arrival"],
    rating: 4.5,
    badge:"Sale",
    image: "./assets/images/products/lotion.jpeg",
    description: ` 
🧒✨ لوسيون_مضاد_للقمل_للأطفال
✔️ كيقضيو على القمل والصيبان من أول استعمال
✔️ تركيبة لطيفة على فروة رأس الأطفال
✔️ بلا مواد قاصحة
✔️ مناسب للاستعمال المدرسي
🔒 آمن للأطفال
🚚 توصيل لجميع المدن
⚠️ ملاحظة مهمة : للاستعمال الخارجي فقط
  `
  },
   {
    id: 13,
    title:"شامبو مضاد للقشرة | فروة نظيفة وشعر لامع",
    price: 59,
    categories: ["men","women","hair"],
    type: ["new-arrival"],
    rating: 4.5,
    badge:"Natural",
    image: "./assets/images/products/shampoo_hachich.jpeg",
    description: ` 
القشرة مشكلة شائعة؟ حلها بسيط!

✔️ يقضي على القشرة نهائياً
✔️ يوقف الحكة والتهيج
✔️ فروة نظيفة وشعر لامع
✔️ نتائج من الاستعمال الأول

🚚 توصيل لجميع المدن
  `
  }
  ];

//products rendering
const templates = {
  'best-seller': (product) => `
    <div class="showcase">
      <a class="showcase-img-box">
        <img src="${product.image}" alt="${product.title}" class="showcase-img" width="75" height="75">
      </a>
      <div class="showcase-content">
        <a><h4 class="showcase-title">${product.title}</h4></a>
        <div class="showcase-rating">
          ${generateStarRating(product.rating)}
        </div>
        <div class="price-box">
          <del>${product.oldPrice}dh</del>
          <p class="price">${product.price}dh</p>
        </div>
        <button class="add-to-cart" onclick="addToCart(${product.id})">
          Add to Cart
        </button>
      </div>
    </div>
  `,
  
  'new-arrival': (product) => `
    <div class="showcase">
      <a class="showcase-img-box">
        <img src="${product.image}" alt="${product.title}" class="showcase-img" width="70" onclick="openLightbox('${product.image}')">
      </a>
      <div class="showcase-content">
        <a><h4 class="showcase-title">${product.title}</h4></a>
        <a class="showcase-category">${product.categories}</a>
        <div class="price-box">
          <p class="price">${product.price}dh</p>
        </div>
        <button class="add-to-cart" onclick="addToCart(${product.id})">
          Add to Cart
        </button>
      </div>
    </div>
  `,
  
  'promotion': (product) => `
    <div class="showcase">
      <a class="showcase-img-box">
        <img src="${product.image}" alt="${product.title}" class="showcase-img" width="70" onclick="openLightbox('${product.image}')">
      </a>
      <div class="showcase-content">
        <a><h4 class="showcase-title">${product.title}</h4></a>
        <a class="showcase-category" >${product.categories}</a>
        <div class="price-box">
          <p class="price">${product.price}dh</p>
          ${product.oldPrice ? `<del>${product.oldPrice}dh</del>` : ""}
        </div>
        <button class="add-to-cart" onclick="addToCart(${product.id})">
          Add to Cart
        </button>
      </div>
    </div>
  `,
  
  'deal-of-the-day': (product) => `
    <div class="showcase">
      <div class="showcase-banner">
        <img src="${product.image}" alt="${product.title}" class="showcase-img" onclick="openLightbox('${product.image}')">
      </div>
      <div class="showcase-content">
        <div class="showcase-rating">
          ${generateStarRating(product.rating)}
        </div>
        <a><h3 class="showcase-title">${product.title}</h3></a>
        <p class="showcase-desc">${product.description}</p>
        <div class="price-box">
          <p class="price">${product.price}dh</p>
          ${product.oldPrice ? `<del>${product.oldPrice}dh</del>` : ""}
        </div>
        <button class="add-to-cart" onclick="addToCart(${product.id})">
          Add to Cart
        </button>
        <div class="showcase-status">
          <div class="wrapper">
            <p>already sold: <b>25</b></p>
            <p>available: <b>90</b></p>
          </div>
          <div class="showcase-status-bar"></div>
        </div>
        <div class="countdown-box" data-endtime="2025-12-31T23:59:59">
          <p class="countdown-desc">Hurry Up! Offer ends in:</p>
          <div class="countdown">
            <div class="countdown-content"><p class="display-number">00</p><p class="display-text">Days</p></div>
            <div class="countdown-content"><p class="display-number">00</p><p class="display-text">Hours</p></div>
            <div class="countdown-content"><p class="display-number">00</p><p class="display-text">Min</p></div>
            <div class="countdown-content"><p class="display-number">00</p><p class="display-text">Sec</p></div>
          </div>
        </div>
      </div>
    </div>
  `,
  
  'all-products': (product) => `
    <div class="showcase">
      <div class="showcase-banner">
        <img src="${product.image}" alt="${product.title}" width="300" class="product-img default" onclick="openLightbox('${product.image}')">
        <img src="${product.image}" alt="${product.title}" width="300" class="product-img hover" onclick="openLightbox('${product.image}')">
        <p class="showcase-badge angle Green">${product.badge}</p>
        <div class="showcase-actions">
          <button class="btn-action" id="previewBtn" onclick="openLightbox('${product.image}')"><ion-icon name="eye-outline"></ion-icon></button>
        </div>
      </div>
      <div class="showcase-content">
        <a  class="showcase-category">${product.title}</a>
        <a ><h3 class="showcase-title">${product.description}</h3></a>
        <div class="showcase-rating">
          ${generateStarRating(product.rating)}
        </div>
        <div class="price-box">
          <p class="price">${product.price}dh</p>
          ${product.oldPrice ? `<del>${product.oldPrice}dh</del>` : ""}
        </div>
        <button class="add-to-cart" onclick="addToCart(${product.id})">
          Add to Cart
        </button>
      </div>
    </div>
  `
};