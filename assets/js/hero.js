const heroData = {
  title: 'Manage, Buy & Rent Your Perfect Home',
  highlight: 'Perfect',
  description:
    'HouseHub is a smart platform to buy, sell, rent, and manage properties with ease no agents, no hidden fees.',
  backgroundImage: './assets/images/hero-bg.jpg',
  tabs: ['Buy', 'Sell', 'Rent'],
  categories: ['House', 'Apartment', 'Office', 'Townhome'],
  prices: ['500', '1000', '2000', '3000', '4000', '5000'],
};

function renderHero(data) {
  const heroRoot = document.getElementById('hero-root');
  if (!heroRoot) return;

  heroRoot.innerHTML = `
    <section class="pt-24 px-4">
      <div
        class="relative rounded-2xl overflow-hidden"
        style=" background-image: url('${data.backgroundImage}'); background-size: cover; background-position: center;"
      >
        <!-- Overlay -->
        <div class="absolute inset-0 bg-slate-800/70"></div>

        <!-- Hero Content -->
        <div class="relative max-w-xl xl:max-w-2xl mx-auto px-10 py-52 xl:py-64 text-white text-center">
          <h1 class="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
            ${data.title.replace(data.highlight, `<span class="text-green-500">${data.highlight}</span>`)}
          </h1>

          <p class="mt-4 text-lg xl:text-xl text-white/80">
            ${data.description}
          </p>
        </div>
      </div>

      <!-- Search Card -->
      <div class="relative -mt-20 md:-mt-14 px-2 pb-10">
        <div class="bg-white rounded-2xl shadow-xl max-w-7xl mx-auto">

          <div class="border-b md:flex items-center justify-between">
            <!-- Tabs -->
            <div class="flex justify-between px-6 py-4 gap-2 md:min-w-[30%]">
              ${data.tabs
                .map(
                  (tab, index) => `
                  <button
                    data-hero-tab
                    class="px-6 py-2 rounded-md font-medium transition border
                    ${index === 0 ? 'bg-green-600 text-white' : 'text-slate-700 hover:text-green-600 hover:shadow'}"
                  >
                    ${tab}
                  </button>
                `
                )
                .join('')}
            </div>

            <!-- Button -->
            <div class="md:col-span-4 hidden md:inline-block mr-6">
              <button
                type="submit"
                class="w-full bg-green-600 text-white py-2.5 px-6 rounded-md font-semibold hover:bg-green-700 transition"
              >
                Search now
              </button>
            </div>
          </div>

          <!-- Form -->
          <form class="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">

            <!-- Search -->
            <div>
              <label class="block mb-2 font-medium text-slate-800">Search : *</label>
              <div class="relative">
                <ion-icon name="search-outline" class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-800"></ion-icon>
                <input
                  type="text"
                  placeholder="Search your home"
                  class="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-1 focus:ring-green-500 outline-none"
                />
              </div>
            </div>

            <!-- Category -->
            <div>
              <label class="block mb-2 font-medium text-slate-800">Select Categories</label>
              <select class="w-full py-2 px-4 border rounded-md bg-white hover:bg-slate-100 transition cursor-pointer">
                ${data.categories.map((c) => `<option>${c}</option>`).join('')}
              </select>
            </div>

            <!-- Min Price -->
            <div>
              <label class="block mb-2 font-medium text-slate-800">Min Price</label>
              <select class="w-full py-2 px-4 border rounded-md bg-white hover:bg-slate-100 transition cursor-pointer">
                <option>Min Price</option>
                ${data.prices.map((p) => `<option>${p}</option>`).join('')}
              </select>
            </div>

            <!-- Max Price -->
            <div>
              <label class="block mb-2 font-medium text-slate-800">Max Price</label>
              <select class="w-full py-2 px-4 border rounded-md bg-white hover:bg-slate-100 transition cursor-pointer">
                <option>Max Price</option>
                ${data.prices.map((p) => `<option>${p}</option>`).join('')}
              </select>
            </div>

            <!-- Button -->
            <div class="md:col-span-4 md:hidden">
              <button
                type="submit"
                class="w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700 transition"
              >
                Search now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  `;
}

export default function initHero() {
  renderHero(heroData);

  const tabs = document.querySelectorAll('[data-hero-tab]');
  if (!tabs.length) return;

  let activeTab = tabs[0];

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      activeTab.classList.remove('bg-green-600', 'text-white');
      activeTab.classList.add('text-slate-700');

      tab.classList.remove('text-slate-700');
      tab.classList.add('bg-green-600', 'text-white');

      activeTab = tab;
    });
  });
}
