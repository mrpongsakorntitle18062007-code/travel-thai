// TravelThai - Complete Application Engine (Vanilla JS)

// 1. Database of 16 Curated Thai Destinations
const destinations = [
    {
        id: 1,
        title: "ดอยอินทนนท์ & กิ่วแม่ปาน",
        province: "เชียงใหม่",
        region: "north",
        category: "nature",
        badge: "ยอดดอยสูงสุด",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?auto=format&fit=crop&w=800&q=80",
        description: "สัมผัสอากาศหนาวเย็นตลอดปี ชมทะเลหมอกยามเช้า และเดินศึกษาธรรมชาติเส้นทางกิ่วแม่ปานเพื่อชมดอกกุหลาบพันปี",
        season: "พฤศจิกายน - มกราคม (หน้าหนาว)",
        highlight: "จุดชมวิวทะเลหมอกกิ่วแม่ปาน, พระมหาธาตุนภเมทนีดลและนภพลภูมิสิริ, อุณหภูมิเลขตัวเดียว"
    },
    {
        id: 2,
        title: "อ่าวมาหยา & เกาะพีพีดอน",
        province: "กระบี่",
        region: "south",
        category: "beach",
        badge: "มรดกทะเลอันดามัน",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
        description: "หาดทรายขาวเนียนละเอียด น้ำทะเลสีเขียวมรกต ล้อมรอบด้วยหน้าผาหินปูนสูงตระหง่านระดับโลก",
        season: "ธันวาคม - เมษายน (คลื่นลมสงบ)",
        highlight: "ดำน้ำตื้นดูปะการัง, ชมฝูงฉลามหูดำ, จุดชมวิวพีพีวิวพอยท์"
    },
    {
        id: 3,
        title: "อุทยานประวัติศาสตร์พระนครศรีอยุธยา",
        province: "พระนครศรีอยุธยา",
        region: "central",
        category: "culture",
        badge: "มรดกโลก UNESCO",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=800&q=80",
        description: "ย้อนรอยอารยธรรมราชธานีเก่าแก่อายุกว่า 400 ปี ชมความงดงามของสถาปัตยกรรมโบราณสถานทรงคุณค่าระดับโลก",
        season: "เที่ยวได้ตลอดทั้งปี (แนะนำช่วงเช้าและเย็น)",
        highlight: "เศียรพระพุทธรูปในรากไม้ วัดมหาธาตุ, วัดไชยวัฒนารามยามพระอาทิตย์ตกดิน, โรตีสายไหมต้นตำรับ"
    },
    {
        id: 4,
        title: "หมู่บ้านสะปัน & หุบเขาบ่อเกลือ",
        province: "น่าน",
        region: "north",
        category: "nature",
        badge: "สโลว์ไลฟ์กลางหุบเขา",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        description: "ชุมชนเล็กๆ ที่โอบล้อมด้วยขุนเขาเขียวขจี ลำธารใสไหลผ่าน เหมาะแก่การพักผ่อนตัดขาดจากความวุ่นวาย",
        season: "สิงหาคม - พฤศจิกายน (ฤดูฝน & นาข้าวเขียวขจี)",
        highlight: "สายหมอกคลอเคลียทิวเขา, บ่อเกลือโบราณ 800 ปี, คาเฟ่วิวนาขั้นบันได"
    },
    {
        id: 5,
        title: "เกาะเต่า & อ่าวนางยวน",
        province: "สุราษฎร์ธานี",
        region: "south",
        category: "beach",
        badge: "สวรรค์นักดำน้ำ",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
        description: "จุดดำน้ำลึกและน้ำตื้นชั้นนำของเอเชีย น้ำทะเลใสแจ๋ว สัตว์ทะเลชุกชุม ทั้งเต่าทะเลและฉลามวาฬ",
        season: "มีนาคม - กันยายน (ทะเลอ่าวไทยใสที่สุด)",
        highlight: "สันทรายทะเลแหวกเกาะนางยวน, ว่ายน้ำคู่กับเต่าทะเล, คอร์สเรียนดำน้ำมาตรฐานสากล"
    },
    {
        id: 6,
        title: "ย่านเมืองเก่าสงขลา & ชุมชนโบราณ",
        province: "สงขลา",
        region: "south",
        category: "culture",
        badge: "พหุวัฒนธรรม",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=80",
        description: "เดินชมตึกแถวโบราณสไตล์ชิโน-โปรตุกีส สตรีทอาร์ทสะท้อนวิถีชีวิตไทย-จีน-มุสลิม และลิ้มลองขนมโบราณ",
        season: "มกราคม - สิงหาคม",
        highlight: "โรงสีแดง หับ โห้ หิ้น, ถ่ายรูปสตรีทอาร์ทถนนนางงาม, ลิ้มรสไอศกรีมโอ่ง"
    },
    {
        id: 7,
        title: "ย่านเยาวราช & ตลาดน้อย",
        province: "กรุงเทพมหานคร",
        region: "central",
        category: "city",
        badge: "สตรีทฟู้ดระดับโลก",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80",
        description: "ไชน่าทาวน์ที่มีชีวิตชีวาที่สุด แหล่งรวมสตรีทฟู้ดระดับมิชลินไกด์ คาเฟ่เก๋ในตึกเก่า และศาลเจ้าศักดิ์สิทธิ์",
        season: "ตลอดทั้งปี (คึกคักเป็นพิเศษช่วง 18.00 - 23.00 น.)",
        highlight: "ก๋วยจั๊บนายเอ็ก, บะหมี่มังกรขาว, คาเฟ่วินเทจริมแม่น้ำเจ้าพระยาที่ตลาดน้อย"
    },
    {
        id: 8,
        title: "เขาสก & เขื่อนรัชชประภา (กุ้ยหลินเมืองไทย)",
        province: "สุราษฎร์ธานี",
        region: "south",
        category: "nature",
        badge: "ธรรมชาติสุดอัศจรรย์",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        description: "นอนแพริมน้ำท่ามกลางผืนน้ำสีเขียวมรกตและยอดเขาสูงตระหง่าน สูดอากาศบริสุทธิ์แบบไร้สัญญาณรบกวน",
        season: "ตุลาคม - เมษายน",
        highlight: "เขาสามเกลอ, ล่องเรือหางยาวส่องสัตว์ยามเช้า, พายเรือคายัคหน้าแพที่พัก"
    },
    {
        id: 9,
        title: "ย่านนิมมานเหมินท์ & ชุมชนวัดอุโมงค์",
        province: "เชียงใหม่",
        region: "north",
        category: "city",
        badge: "ฮิปสเตอร์ & คาเฟ่",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80",
        description: "ศูนย์กลางความคิดสร้างสรรค์ ร้านกาแฟ specialty coffee ชุมชนงานคราฟต์ บ้านข้างวัด และแกลเลอรีศิลปะ",
        season: "พฤศจิกายน - กุมภาพันธ์",
        highlight: "อุโมงค์โบราณวัดอุโมงค์, จิบกาแฟคั่วพิเศษ, เลือกซื้อของแฮนด์เมดบ้านข้างวัด"
    },
    {
        id: 10,
        title: "อุทยานแห่งชาติภูกระดึง",
        province: "เลย",
        region: "northeast",
        category: "adventure",
        badge: "พิสูจน์รักแท้",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
        description: "เส้นทางพิชิตหลังแป เดินป่าขึ้นเขาสูง ชมพระอาทิตย์ขึ้นผานกแอ่น และพระอาทิตย์ตกผาหล่มสักสุดคลาสสิก",
        season: "ตุลาคม - พฤษภาคม (เปิดฤดูกาลท่องเที่ยว)",
        highlight: "ผาหล่มสัก, ใบเมเปิ้ลเปลี่ยนสีสีแดงสดริมน้ำตกเพ็ญพบใหม่, กางเต็นท์รับลมหนาว"
    },
    {
        id: 11,
        title: "วัดร่องขุ่น & บ้านดำ",
        province: "เชียงราย",
        region: "north",
        category: "culture",
        badge: "พุทธศิลป์ร่วมสมัย",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1558862107-d49ef2a04d72?auto=format&fit=crop&w=800&q=80",
        description: "อลังการงานศิลป์ระดับโลก ออกแบบโดยอาจารย์เฉลิมชัย โฆษิตพิพัฒน์ ด้วยสถาปัตยกรรมสีขาวบริสุทธิ์และกระจกแวววาว",
        season: "เที่ยวได้ตลอดทั้งปี",
        highlight: "อุโบสถสีขาววิจิตรบรรจง, สะพานข้ามวัฏสงสาร, หอศิลป์เฉลิมชัย"
    },
    {
        id: 12,
        title: "อุทยานประวัติศาสตร์พิมาย",
        province: "นครราชสีมา",
        region: "northeast",
        category: "culture",
        badge: "ปราสาทหินขอมโบราณ",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80",
        description: "ปราสาทหินแบบขอมที่มีขนาดใหญ่ที่สุดในประเทศไทย อายุกว่า 900 ปี ต้นแบบสำคัญของนครวัด",
        season: "พฤศจิกายน - มีนาคม",
        highlight: "สะพานนาคราช, ทับหลังศิลาทรายแกะสลักเรื่องรามเกียรติ์, ซุ้มประตูกำแพงแก้ว"
    },
    {
        id: 13,
        title: "เกาะกูด & อ่าวคลองเจ้า",
        province: "ตราด",
        region: "east",
        category: "beach",
        badge: "อันดามันแห่งทะเลตะวันออก",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        description: "เกาะสวรรค์ที่ยังคงความสมบูรณ์ของธรรมชาติ น้ำใสจนมองเห็นฝูงปลาและพื้นทราย พายคายัคเข้าสู่ป่าชายเลนและน้ำตก",
        season: "พฤศจิกายน - พฤษภาคม",
        highlight: "พายเรือคายัคคลองเจ้า, สะพานไม้ทอดยาวสู่ทะเล, น้ำตกคลองเจ้าใสเย็น"
    },
    {
        id: 14,
        title: "น้ำตกเอราวัณ & ทางรถไฟสายมรณะ",
        province: "กาญจนบุรี",
        region: "central",
        category: "adventure",
        badge: "ธรรมชาติ & ประวัติศาสตร์",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80",
        description: "น้ำตกหินปูน 7 ชั้นที่มีน้ำสีฟ้าเขียวมรกต พร้อมเดินทางชมวิวเลียบหน้าผาบนสะพานถ้ำกระแซในตำนาน",
        season: "กันยายน - ธันวาคม",
        highlight: "ว่ายน้ำกับฝูงปลาพลวงน้ำตกชั้น 4, นั่งรถไฟเลียบหน้าผาถ้ำกระแซ, สะพานข้ามแม่น้ำแคว"
    },
    {
        id: 15,
        title: "แหลมพรหมเทพ & เมืองเก่าภูเก็ต",
        province: "ภูเก็ต",
        region: "south",
        category: "city",
        badge: "จุดชมพระอาทิตย์ตกสวยสุด",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80",
        description: "ชมแสงสุดท้ายของวันที่แหลมพรหมเทพ เดินทอดน่องถ่ายรูปตึกโบราณสีพาสเทลสไตล์เปอรานากัน และชิมอาหารมิชลินท้องถิ่น",
        season: "ธันวาคม - พฤษภาคม",
        highlight: "วิวพระอาทิตย์ตกแหลมพรหมเทพ, ถนนถลางเมืองเก่า, หมูฮ้องและโอ้เอ๋วโบราณ"
    },
    {
        id: 16,
        title: "ถนนคนเดินเชียงคาน & สกายวอล์คภูคกงิ้ว",
        province: "เลย",
        region: "northeast",
        category: "culture",
        badge: "มนต์เสน่ห์ริมโขง",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80",
        description: "วิถีสโลว์ไลฟ์ริมแม่น้ำโขง ตักบาตรข้าวเหนียวเช้าตรู่ ปั่นจักรยานเลียบแม่น้ำ และเดินชมบ้านไม้โบราณยามค่ำคืน",
        season: "พฤศจิกายน - กุมภาพันธ์ (อากาศหนาว)",
        highlight: "ตักบาตรข้าวเหนียว, ชิมข้าวจี่ทาไข่, ชมทะเลหมอกภูทอกยามเช้า"
    }
];

// 2. Preloaded Traveler Reviews (Stored in localStorage)
const defaultReviews = [
    {
        name: "กิตติพงษ์ ว.",
        place: "กิ่วแม่ปาน ดอยอินทนนท์",
        rating: 5,
        comment: "วิวทะเลหมอกสวยอลังการมากครับ คุ้มค่าที่ตื่นตั้งแต่ตี 5 อากาศหนาวจับใจ ไกด์ท้องถิ่นดูแลดีมาก",
        date: "เมื่อวานนี้"
    },
    {
        name: "แพรว นภัสวรรณ",
        place: "อ่าวมาหยา กระบี่",
        rating: 5,
        comment: "น้ำใสเหมือนสระว่ายน้ำเลยค่ะ เจ้าหน้าที่จัดการดีมากไม่ให้เหยียบปะการัง ถ่ายรูปมุมไหนก็สวยประทับใจสุดๆ",
        date: "3 วันที่แล้ว"
    },
    {
        name: "อาจารย์สมชาย",
        place: "อุทยานประวัติศาสตร์อยุธยา",
        rating: 5,
        comment: "สถาปัตยกรรมโบราณงดงามสะท้อนความรุ่งเรืองในอดีต เช่าชุดไทยถ่ายรูปที่วัดไชยวัฒนารามตอนเย็นแสงสวยมาก",
        date: "1 สัปดาห์ที่แล้ว"
    }
];

// 3. Application State
let currentCategory = 'all';
let currentSearch = '';
let currentRegionFilter = 'all';
let currentSort = 'featured';
let selectedBudgetStyle = 'standard';
let favorites = JSON.parse(localStorage.getItem('travel_favs') || '[]');
let reviews = JSON.parse(localStorage.getItem('travel_reviews') || JSON.stringify(defaultReviews));

// 4. Render Destinations with Sorting & Filtering
function renderDestinations() {
    const container = document.getElementById('cards-container');
    const emptyState = document.getElementById('empty-state');
    if (!container) return;
    
    // Filtering Logic
    let filtered = destinations.filter(item => {
        const matchCat = currentCategory === 'all' || item.category === currentCategory;
        const matchRegion = currentRegionFilter === 'all' || item.region === currentRegionFilter;
        const q = currentSearch.toLowerCase().trim();
        const matchSearch = !q || 
            item.title.toLowerCase().includes(q) || 
            item.province.toLowerCase().includes(q) || 
            item.description.toLowerCase().includes(q) ||
            item.badge.toLowerCase().includes(q);
        return matchCat && matchRegion && matchSearch;
    });

    // Sorting Logic
    if (currentSort === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
    } else if (currentSort === 'name') {
        filtered.sort((a, b) => a.title.localeCompare(b.title, 'th'));
    }

    // Empty state
    if (filtered.length === 0) {
        container.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
    }

    emptyState.classList.add('hidden');
    container.innerHTML = filtered.map(item => {
        const isFav = favorites.includes(item.id);
        return `
            <div class="travel-card bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col group">
                <div class="relative h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <img src="${item.image}" alt="${item.title}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    <span class="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1 rounded-full shadow-md">
                        ${item.badge}
                    </span>
                    <button onclick="toggleFavorite(${item.id}, event)" title="บันทึกสถานที่นี้" class="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/85 dark:bg-slate-800/85 backdrop-blur-md hover:bg-white text-rose-500 flex items-center justify-center shadow-md transition hover:scale-110 active:scale-95">
                        <i data-lucide="heart" class="w-4 h-4 ${isFav ? 'fill-rose-500' : ''}"></i>
                    </button>
                    <div class="absolute bottom-2 right-2 bg-black/70 backdrop-blur text-amber-300 text-xs px-2.5 py-1 rounded-lg flex items-center gap-1 font-semibold">
                        <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-300"></i>
                        <span>${item.rating}</span>
                    </div>
                </div>

                <div class="p-5 flex-grow flex flex-col justify-between space-y-4">
                    <div>
                        <div class="flex items-center gap-1.5 text-xs text-sky-600 dark:text-sky-400 font-semibold mb-1">
                            <i data-lucide="map-pin" class="w-3.5 h-3.5"></i>
                            <span>${item.province}</span>
                        </div>
                        <h3 class="font-heading text-base font-bold text-slate-800 dark:text-white line-clamp-1 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                            ${item.title}
                        </h3>
                        <p class="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                            ${item.description}
                        </p>
                    </div>

                    <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                        <span class="text-[11px] text-slate-400 truncate max-w-[130px]">
                            ${item.season.split('(')[0]}
                        </span>
                        <button onclick="openModal(${item.id})" class="px-3 py-1.5 bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 hover:bg-sky-600 hover:text-white rounded-xl text-xs font-semibold transition flex items-center gap-1">
                            <span>ดูรายละเอียด</span>
                            <i data-lucide="arrow-right" class="w-3 h-3"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    if (window.lucide) {
        lucide.createIcons();
    }
}

// 5. Category Filtering
function filterCategory(cat) {
    currentCategory = cat;
    document.querySelectorAll('.cat-pill').forEach(btn => {
        if (btn.dataset.cat === cat) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    renderDestinations();
}

function applyQuickRegion(region) {
    currentRegionFilter = region;
    renderDestinations();
}

function applySort(sortVal) {
    currentSort = sortVal;
    renderDestinations();
}

function applySearch() {
    const input = document.getElementById('search-input');
    if (input) currentSearch = input.value;
    renderDestinations();
    document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' });
}

function resetFilters() {
    currentCategory = 'all';
    currentSearch = '';
    currentRegionFilter = 'all';
    const searchInput = document.getElementById('search-input');
    const regionSelect = document.getElementById('quick-region-filter');
    if (searchInput) searchInput.value = '';
    if (regionSelect) regionSelect.value = 'all';
    filterCategory('all');
}

// 6. Modal Logic (Destination Detail)
function openModal(id) {
    const item = destinations.find(d => d.id === id);
    if (!item) return;

    document.getElementById('modal-img').src = item.image;
    document.getElementById('modal-img').alt = item.title;
    document.getElementById('modal-tag').textContent = item.badge;
    document.getElementById('modal-title').textContent = item.title;
    document.getElementById('modal-province').innerHTML = `<i data-lucide="map-pin" class="w-3.5 h-3.5"></i> ${item.province} (${item.region.toUpperCase()})`;
    document.getElementById('modal-desc').textContent = item.description;
    document.getElementById('modal-season').textContent = item.season;
    document.getElementById('modal-rating').innerHTML = `<i data-lucide="star" class="w-3.5 h-3.5 fill-amber-500"></i> ${item.rating} / 5.0`;
    document.getElementById('modal-highlight').textContent = item.highlight;

    const modal = document.getElementById('detail-modal');
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');

    if (window.lucide) lucide.createIcons();
}

function closeModal() {
    const modal = document.getElementById('detail-modal');
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
}

// 7. Favorites / Wishlist
function toggleFavorite(id, event) {
    if (event) event.stopPropagation();
    const index = favorites.indexOf(id);
    const item = destinations.find(d => d.id === id);
    
    if (index > -1) {
        favorites.splice(index, 1);
        showToast(`ลบ "${item?.title || 'สถานที่'}" ออกจากรายการโปรดแล้ว`, "info");
    } else {
        favorites.push(id);
        showToast(`บันทึก "${item?.title || 'สถานที่'}" ลงรายการโปรดแล้ว ❤️`, "success");
    }
    localStorage.setItem('travel_favs', JSON.stringify(favorites));
    updateFavBadge();
    renderDestinations();
}

function updateFavBadge() {
    const badge = document.getElementById('fav-badge');
    if (badge) {
        if (favorites.length > 0) {
            badge.textContent = favorites.length;
            badge.classList.remove('hidden');
        } else {
            badge.classList.add('hidden');
        }
    }
}

function openFavoritesModal() {
    const list = document.getElementById('favorites-list');
    const favItems = destinations.filter(d => favorites.includes(d.id));

    if (favItems.length === 0) {
        list.innerHTML = `
            <div class="text-center py-8 text-slate-400">
                <i data-lucide="heart-off" class="w-8 h-8 mx-auto mb-2 opacity-50"></i>
                <p class="text-sm">ยังไม่มีสถานที่ที่บันทึกไว้</p>
                <p class="text-xs mt-1">กดไอคอนหัวใจที่การ์ดสถานที่เพื่อบันทึกดูภายหลัง</p>
            </div>
        `;
    } else {
        list.innerHTML = favItems.map(item => `
            <div class="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                <div class="flex items-center gap-3">
                    <img src="${item.image}" class="w-12 h-12 rounded-lg object-cover">
                    <div>
                        <h4 class="font-heading font-semibold text-xs text-slate-800 dark:text-white">${item.title}</h4>
                        <span class="text-[11px] text-slate-500 dark:text-slate-400">${item.province}</span>
                    </div>
                </div>
                <button onclick="toggleFavorite(${item.id}); openFavoritesModal();" class="text-rose-500 hover:text-rose-700 text-xs font-semibold px-2 py-1">
                    ลบออก
                </button>
            </div>
        `).join('');
    }

    document.getElementById('favorites-modal').classList.remove('hidden');
    if (window.lucide) lucide.createIcons();
}

function closeFavoritesModal() {
    document.getElementById('favorites-modal').classList.add('hidden');
}

// 8. AI Itinerary Generator Engine
const itineraryDatabase = {
    north: {
        title: "มนต์เสน่ห์ล้านนา & สายหมอกขุนเขา",
        day1: {
            morning: "เดินทางถึงเชียงใหม่ จิบกาแฟชิลล์ๆ ย่านนิมมาน และแวะบ้านข้างวัด",
            afternoon: "ขึ้นดอยสุเทพ และมุ่งหน้าสู่อุทยานแห่งชาติดอยอินทนนท์",
            evening: "พักผ่อนโฮมสเตย์แม่กลางหลวง ทานหมูกระทะรับไอหมอกหนาว"
        },
        day2: {
            morning: "เดินศึกษาธรรมชาติเส้นทางกิ่วแม่ปาน ชมพระอาทิตย์ขึ้นและทะเลหมอก 360 องศา",
            afternoon: "ไหว้พระมหาธาตุนภเมทนีดลฯ และแวะซื้อสตรอว์เบอร์รีสดโครงการหลวง",
            evening: "แวะเดินถนนคนเดินท่าแพ ชิมข้าวซอยต้นตำรับและไส้อั่วลำแต้ๆ"
        },
        day3: {
            morning: "นั่งรถไฟหรือขับรถต่อไปยังจังหวัดน่าน ชมวิวโค้งถนนหมายเลข 3",
            afternoon: "ถึงหมู่บ้านสะปัน แวะจิบกาแฟวิวนาขั้นบันไดและลำธารใส",
            evening: "ชมบ่อเกลือสินเธาว์โบราณ 800 ปี และเดินทางกลับโดยสวัสดิภาพ"
        }
    },
    south: {
        title: "สวรรค์ทะเลอันดามัน & เสน่ห์เมืองเก่า",
        day1: {
            morning: "บินลัดฟ้าลงสนามบินกระบี่ นั่งเรือหางยาวมุ่งสู่อ่าวมาหยา เกาะพีพี",
            afternoon: "ดำน้ำตื้นดูปะการังและฝูงปลาหลากสีที่ปิเละลากูน",
            evening: "ขึ้นจุดชมวิวเกาะพีพีดอน ชมพระอาทิตย์ตกน้ำทะเลสีทอง"
        },
        day2: {
            morning: "เดินทางสู่จังหวัดภูเก็ต เดินถ่ายรูปตึกชิโน-โปรตุกีสย่านเมืองเก่า",
            afternoon: "ลิ้มลองอาหารมิชลินท้องถิ่น เช่น หมูฮ้อง โลบะ และโอ้เอ๋ว",
            evening: "ชมพระอาทิตย์ตกดินสุดโรแมนติกที่แหลมพรหมเทพ"
        },
        day3: {
            morning: "เดินทางไปเขาสก จ.สุราษฎร์ธานี ล่องเรือหางยาวในเขื่อนรัชชประภา",
            afternoon: "ถ่ายรูปแลนด์มาร์กเขาสามเกลอ (กุ้ยหลินเมืองไทย) และพายคายัค",
            evening: "เดินทางกลับสนามบินพร้อมความทรงจำทะเลใต้สุดประทับใจ"
        }
    },
    central: {
        title: "ย้อนรอยกรุงเก่า & ผจญภัยธรรมชาติกาญจนบุรี",
        day1: {
            morning: "ออกเดินทางจากกรุงเทพฯ สู่อยุธยา ไหว้พระมงคลบพิตร และชมเศียรพระในรากไม้ วัดมหาธาตุ",
            afternoon: "เช่าชุดไทยถ่ายรูปสวยๆ ณ วัดไชยวัฒนาราม และแวะทานกุ้งเผาแม่น้ำแท้ๆ",
            evening: "ลิ้มรสโรตีสายไหมเจ้าเด็ดหน้าโรงพยาบาลอยุธยา"
        },
        day2: {
            morning: "มุ่งหน้าสู่ จ.กาญจนบุรี พิชิตน้ำตกเอราวัณ 7 ชั้น เล่นน้ำสีเขียวมรกต",
            afternoon: "นั่งรถไฟประวัติศาสตร์สายมรณะ เลียบหน้าผาสูงชันที่ถ้ำกระแซ",
            evening: "พักแพริมแม่น้ำแควน้อย สัมผัสความสงบและกระแสน้ำไหลเย็น"
        },
        day3: {
            morning: "ชมสะพานข้ามแม่น้ำแคว และแวะคาเฟ่สไตล์โรงคั่วกาแฟริมน้ำ",
            afternoon: "แวะตลาดน้ำดอนหวาย ซื้อของฝากเป็ดพะโล้และขนมไทย",
            evening: "เดินทางกลับกรุงเทพฯ ด้วยความอิ่มเอมใจ"
        }
    },
    northeast: {
        title: "มนต์ฮักอีสาน & สายหมอกริมฝั่งโขง",
        day1: {
            morning: "เดินทางสู่ จ.เลย ขึ้นชมทะเลหมอกยามเช้าที่ภูทอก",
            afternoon: "เดินเล่นและถ่ายรูปสกายวอล์คเชียงคาน ชมวิวแม่น้ำสองสีไทย-ลาว",
            evening: "เดินช้อปปิ้งถนนคนเดินเชียงคาน ชิมกุ้งเสียบไม้ย่างและข้าวจี่ร้อนๆ"
        },
        day2: {
            morning: "ร่วมทำบุญตักบาตรข้าวเหนียวริมแม่น้ำโขงยามเช้าตรู่",
            afternoon: "มุ่งหน้าสู่อุทยานแห่งชาติภูกระดึง เริ่มเดินเท้าพิชิตซำแฮกสู่หลังแป",
            evening: "กางเต็นท์รับลมหนาว ทานหมูกระทะบนยอดภูกระดึง"
        },
        day3: {
            morning: "ชมพระอาทิตย์ขึ้นที่ผานกแอ่น และเดินชมใบเมเปิ้ลแดงที่น้ำตกเพ็ญพบใหม่",
            afternoon: "เดินทางลงจากภู และแวะซื้อไส้กรอกอีสาน มะขามหวานเป็นของฝาก",
            evening: "เดินทางกลับโดยสวัสดิภาพ"
        }
    }
};

function generateItinerary() {
    const region = document.getElementById('itin-region').value;
    const days = parseInt(document.getElementById('itin-days').value);
    const style = document.getElementById('itin-style').value;
    const outputContainer = document.getElementById('itin-output');

    const plan = itineraryDatabase[region] || itineraryDatabase['north'];
    
    let daysHtml = '';
    for (let i = 1; i <= days; i++) {
        const dayData = plan[`day${i}`] || plan.day1;
        daysHtml += `
            <div class="bg-slate-800/80 rounded-xl p-5 border border-slate-700 space-y-3">
                <div class="flex items-center justify-between border-b border-slate-700/80 pb-2">
                    <span class="font-heading font-bold text-sky-400 text-sm flex items-center gap-2">
                        <i data-lucide="calendar" class="w-4 h-4"></i>
                        วันที่ ${i} ของการเดินทาง
                    </span>
                    <span class="text-[11px] bg-sky-950 text-sky-300 px-2.5 py-0.5 rounded-full border border-sky-800">
                        ตารางเวลาแนะนำ
                    </span>
                </div>
                <div class="space-y-2 text-xs">
                    <div class="flex gap-2.5">
                        <span class="text-amber-400 font-semibold min-w-[32px]">เช้า:</span>
                        <p class="text-slate-300">${dayData.morning}</p>
                    </div>
                    <div class="flex gap-2.5">
                        <span class="text-sky-300 font-semibold min-w-[32px]">บ่าย:</span>
                        <p class="text-slate-300">${dayData.afternoon}</p>
                    </div>
                    <div class="flex gap-2.5">
                        <span class="text-purple-300 font-semibold min-w-[32px]">เย็น:</span>
                        <p class="text-slate-300">${dayData.evening}</p>
                    </div>
                </div>
            </div>
        `;
    }

    outputContainer.innerHTML = `
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
                <span class="text-[11px] text-amber-400 uppercase font-bold tracking-wider">AI Generated Itinerary</span>
                <h3 class="font-heading text-xl font-bold text-white mt-0.5">${plan.title} (${days} วัน)</h3>
            </div>
            <div class="flex gap-2">
                <button onclick="copyItinerary()" class="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1 border border-slate-700 transition">
                    <i data-lucide="copy" class="w-3.5 h-3.5"></i>
                    <span>คัดลอกตาราง</span>
                </button>
            </div>
        </div>

        <div class="space-y-4">
            ${daysHtml}
        </div>

        <div class="p-3.5 bg-indigo-950/60 rounded-xl border border-indigo-900/60 text-xs text-indigo-200 flex items-center gap-2">
            <i data-lucide="info" class="w-4 h-4 flex-shrink-0 text-amber-400"></i>
            <span>สามารถปรับเปลี่ยนเวลาตามสภาพการจราจรและความสะดวกของแต่ละท่านได้เลยครับ</span>
        </div>
    `;

    if (window.lucide) lucide.createIcons();
    showToast("สร้างแผนการเดินทางด้วย AI สำเร็จ!", "success");
}

function copyItinerary() {
    const container = document.getElementById('itin-output');
    if (container) {
        navigator.clipboard.writeText(container.innerText);
        showToast("คัดลอกแผนการเดินทางลงคลิปบอร์ดแล้ว!", "success");
    }
}

// 9. Trip Budget Calculator
function setStyle(style) {
    selectedBudgetStyle = style;
    document.querySelectorAll('.calc-style-btn').forEach(btn => {
        if (btn.dataset.style === style) {
            btn.classList.add('active', 'border-sky-500', 'bg-sky-500/20');
            btn.classList.remove('border-slate-700', 'bg-slate-800');
        } else {
            btn.classList.remove('active', 'border-sky-500', 'bg-sky-500/20');
            btn.classList.add('border-slate-700', 'bg-slate-800');
        }
    });
    calculateBudget();
}

function calculateBudget() {
    const region = document.getElementById('calc-region')?.value || 'north';
    const days = Math.max(1, parseInt(document.getElementById('calc-days')?.value) || 1);
    const people = Math.max(1, parseInt(document.getElementById('calc-people')?.value) || 1);

    let regionMultiplier = 1.0;
    if (region === 'south') regionMultiplier = 1.25;
    if (region === 'north') regionMultiplier = 1.05;
    if (region === 'central') regionMultiplier = 1.0;
    if (region === 'northeast') regionMultiplier = 0.85;

    let hotelRate = 700;
    let foodRate = 400;
    let transportRate = 300;

    if (selectedBudgetStyle === 'budget') {
        hotelRate = 450;
        foodRate = 250;
        transportRate = 200;
    } else if (selectedBudgetStyle === 'luxury') {
        hotelRate = 2400;
        foodRate = 1200;
        transportRate = 800;
    }

    const roomsNeeded = Math.ceil(people / 2);
    const totalHotel = Math.round(hotelRate * roomsNeeded * days * regionMultiplier);
    const totalFood = Math.round(foodRate * people * days * regionMultiplier);
    const totalTransport = Math.round(transportRate * people * days * regionMultiplier);

    const grandTotal = totalHotel + totalFood + totalTransport;
    const perPerson = Math.round(grandTotal / people);

    const totalEl = document.getElementById('total-budget');
    const perPersonEl = document.getElementById('per-person-budget');
    const hotelEl = document.getElementById('hotel-cost');
    const foodEl = document.getElementById('food-cost');
    const transportEl = document.getElementById('transport-cost');

    if (totalEl) totalEl.textContent = `฿${grandTotal.toLocaleString()}`;
    if (perPersonEl) perPersonEl.textContent = `฿${perPerson.toLocaleString()}`;
    if (hotelEl) hotelEl.textContent = `฿${totalHotel.toLocaleString()}`;
    if (foodEl) foodEl.textContent = `฿${totalFood.toLocaleString()}`;
    if (transportEl) transportEl.textContent = `฿${totalTransport.toLocaleString()}`;
}

function printBudgetSummary() {
    window.print();
}

// 10. Reviews & Community System
function renderReviews() {
    const container = document.getElementById('reviews-container');
    if (!container) return;

    container.innerHTML = reviews.map(rev => {
        let stars = '⭐'.repeat(rev.rating);
        return `
            <div class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-3">
                <div class="space-y-2">
                    <div class="flex items-center justify-between">
                        <span class="text-xs text-amber-500 font-bold">${stars}</span>
                        <span class="text-[11px] text-slate-400">${rev.date}</span>
                    </div>
                    <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed italic">
                        "${rev.comment}"
                    </p>
                </div>
                <div class="border-t border-slate-100 dark:border-slate-800 pt-3 flex items-center justify-between">
                    <div>
                        <h4 class="font-heading font-bold text-xs text-slate-800 dark:text-white">${rev.name}</h4>
                        <span class="text-[10px] text-sky-600 dark:text-sky-400 font-medium">${rev.place}</span>
                    </div>
                    <div class="w-7 h-7 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center text-xs font-bold font-heading">
                        ${rev.name.charAt(0)}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function openReviewModal() {
    document.getElementById('review-modal').classList.remove('hidden');
}

function closeReviewModal() {
    document.getElementById('review-modal').classList.add('hidden');
}

function handleReviewSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('rev-name').value;
    const place = document.getElementById('rev-place').value;
    const rating = parseInt(document.getElementById('rev-rating').value);
    const comment = document.getElementById('rev-comment').value;

    const newRev = {
        name: name,
        place: place,
        rating: rating,
        comment: comment,
        date: "เพิ่งโพสต์เมื่อสักครู่"
    };

    reviews.unshift(newRev);
    localStorage.setItem('travel_reviews', JSON.stringify(reviews));
    renderReviews();
    closeReviewModal();
    document.getElementById('review-form').reset();
    showToast("ขอบคุณสำหรับรีวิวของคุณครับ! โพสต์เรียบร้อยแล้ว", "success");
}

// 11. FAQ Accordion Toggle
function toggleFaq(id) {
    const content = document.getElementById(`faq-content-${id}`);
    const icon = document.getElementById(`faq-icon-${id}`);
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.classList.add('rotate-180');
    } else {
        content.classList.add('hidden');
        icon.classList.remove('rotate-180');
    }
}

// 12. Contact Form & Modal
function openContactModal() {
    document.getElementById('contact-modal').classList.remove('hidden');
}

function closeContactModal() {
    document.getElementById('contact-modal').classList.add('hidden');
}

function handleContactSubmit(e) {
    e.preventDefault();
    closeContactModal();
    showToast("ได้รับข้อความของคุณแล้ว เจ้าหน้าที่จะติดต่อกลับโดยเร็ว!", "success");
    e.target.reset();
}

// 13. Dark Mode Toggle
function toggleDarkMode() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('travel_theme', isDark ? 'dark' : 'light');
    updateThemeIcon();
}

function updateThemeIcon() {
    const isDark = document.documentElement.classList.contains('dark');
    const icon = document.getElementById('theme-icon');
    if (icon) {
        icon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
        if (window.lucide) lucide.createIcons();
    }
}

// 14. Toast Notification System
function showToast(message, type = "info") {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `p-3.5 px-4 rounded-2xl shadow-xl text-xs font-semibold flex items-center gap-2 transform transition-all duration-300 translate-y-4 opacity-0 pointer-events-auto ${
        type === 'success' ? 'bg-emerald-600 text-white' : 'bg-slate-900 text-white dark:bg-slate-800'
    }`;
    
    toast.innerHTML = `
        <i data-lucide="${type === 'success' ? 'check-circle' : 'info'}" class="w-4 h-4"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);
    if (window.lucide) lucide.createIcons();

    setTimeout(() => {
        toast.classList.remove('translate-y-4', 'opacity-0');
    }, 10);

    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-2');
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

// 15. Mobile Menu Toggle
function toggleMobileMenu() {
    document.getElementById('mobile-menu')?.classList.toggle('hidden');
}

// 16. Back to Top Button Observer
window.addEventListener('scroll', () => {
    const btn = document.getElementById('back-to-top');
    if (btn) {
        if (window.scrollY > 400) {
            btn.classList.remove('opacity-0', 'pointer-events-none');
            btn.classList.add('opacity-100');
        } else {
            btn.classList.add('opacity-0', 'pointer-events-none');
            btn.classList.remove('opacity-100');
        }
    }
});

// 17. Close Modals with Escape Key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
        closeFavoritesModal();
        closeContactModal();
        closeReviewModal();
    }
});

// Search input enter key
document.getElementById('search-input')?.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') applySearch();
});

// Event listeners for calculator
document.getElementById('calc-region')?.addEventListener('change', calculateBudget);
document.getElementById('calc-days')?.addEventListener('input', calculateBudget);
document.getElementById('calc-people')?.addEventListener('input', calculateBudget);

// Initialization on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    // Theme check
    if (localStorage.getItem('travel_theme') === 'dark' || 
        (!('travel_theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    }
    updateThemeIcon();

    renderDestinations();
    updateFavBadge();
    calculateBudget();
    renderReviews();
    generateItinerary(); // generate default plan
});
