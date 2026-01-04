function renderBackTop() {
  const backTopRoot = document.getElementById('backtop-root');
  if (!backTopRoot) return;

  backTopRoot.innerHTML = `
    <button
      id="back-top-btn"
      aria-label="Back to top"
      class="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-green-600 text-white
             flex items-center justify-center shadow-lg
             opacity-0 invisible translate-y-3
             transition-all duration-300 hover:bg-green-700"
    >
      <ion-icon name="arrow-up-outline" class="text-xl"></ion-icon>
    </button>
  `;
}

export default function initBackTop() {
  renderBackTop();

  const btn = document.getElementById('back-top-btn');
  if (!btn) return;

  // Show / hide button on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.remove('opacity-0', 'invisible', 'translate-y-3');
      btn.classList.add('opacity-100', 'translate-y-0');
    } else {
      btn.classList.add('opacity-0', 'invisible', 'translate-y-3');
      btn.classList.remove('opacity-100', 'translate-y-0');
    }
  });

  // Scroll to top on click
  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}
