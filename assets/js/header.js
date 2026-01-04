const headerData = {
  logo: {
    text: 'HouseHub',
    icon: 'business-outline',
    url: '#',
  },
  menu: [
    { label: 'Home', url: '#' },
    { label: 'Buy', url: '#' },
    { label: 'Sell', url: '#' },
    { label: 'Listing', url: '#' },
    { label: 'About Us', url: '#' },
    { label: 'Contact', url: '#' },
  ],
  action: {
    label: 'Sign Up',
    url: '#',
  },
};

function renderHeader() {
  const root = document.getElementById('header-root');
  if (!root) return;

  root.innerHTML = `
    <header class="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        <!-- Logo -->
        <a href="${headerData.logo.url}" class="flex items-center gap-2 text-xl font-semibold text-slate-900">
          <ion-icon name="${headerData.logo.icon}" class="text-green-600 text-2xl"></ion-icon>
          <span class="pt-2">${headerData.logo.text}</span>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-8">
          ${headerData.menu
            .map(
              (item) => `
              <a href="${item.url}" class="text-slate-700 font-medium hover:text-green-600 transition">
                ${item.label}
              </a>
            `
            )
            .join('')}
        </nav>

        <!-- Desktop Action Button -->
        <a
          href="${headerData.action.url}"
          class="hidden md:inline-flex items-center rounded-full bg-green-600 px-6 py-2 text-white font-medium hover:bg-green-700 transition"
        >
          ${headerData.action.label}
        </a>

        <!-- Mobile Menu Button -->
        <button
          id="header-menu-btn"
          aria-label="Toggle menu"
          class="md:hidden text-3xl text-slate-900"
        >
          <ion-icon id="icon-menu" name="menu-outline"></ion-icon>
          <ion-icon id="icon-close" name="close-outline" class="hidden"></ion-icon>
        </button>
      </div>

      <!-- Mobile Menu -->
      <nav
        id="header-mobile-menu"
        class="md:hidden overflow-hidden max-h-0 opacity-0 transition-all duration-700 ease-out border-t bg-white"
      >
        ${headerData.menu
          .map(
            (item) => `
            <a
              href="${item.url}"
              class="block px-6 py-4 text-slate-700 font-medium hover:bg-slate-100"
            >
              ${item.label}
            </a>
          `
          )
          .join('')}

        <div class="px-6 py-4">
          <a
            href="${headerData.action.url}"
            class="block text-center rounded-md max-w-max bg-green-600 py-2 px-6 text-white font-medium hover:bg-green-700 transition"
          >
            ${headerData.action.label}
          </a>
        </div>
      </nav>
    </header>
  `;
}

export default function initHeader() {
  renderHeader();

  const menuBtn = document.getElementById('header-menu-btn');
  const mobileMenu = document.getElementById('header-mobile-menu');
  const iconMenu = document.getElementById('icon-menu');
  const iconClose = document.getElementById('icon-close');

  if (!menuBtn || !mobileMenu) return;

  let isOpen = false;

  menuBtn.addEventListener('click', () => {
    isOpen = !isOpen;

    // Animate menu
    mobileMenu.classList.toggle('max-h-0');
    mobileMenu.classList.toggle('max-h-[500px]');
    mobileMenu.classList.toggle('opacity-0');
    mobileMenu.classList.toggle('opacity-100');

    // Toggle icons
    iconMenu.classList.toggle('hidden');
    iconClose.classList.toggle('hidden');
  });

  // Close menu when clicking a link (mobile UX)
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('max-h-0', 'opacity-0');
      mobileMenu.classList.remove('max-h-[500px]', 'opacity-100');
      iconMenu.classList.remove('hidden');
      iconClose.classList.add('hidden');
      isOpen = false;
    });
  });
}
