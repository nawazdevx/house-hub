const aboutData = {
  title: 'Efficiency. Transparency. Control.',
  description:
    'HouseHub is a modern real estate platform that allows buyers, sellers, and renters to manage properties independently with full transparency and confidence.',
  additionalDescription:
    'From discovering homes to managing listings and closing deals, HouseHub simplifies every step—eliminating agents, reducing costs, and putting control back in your hands.',
  features: [
    'Manage properties easily without agents or hidden fees',
    'Buy, sell, and rent homes with full transparency',
    'Smart property search with powerful filtering options',
    'Secure transactions designed for modern real estate needs',
    'Simple dashboard to control listings and property details',
  ],
  image: './assets/images/about-banner.jpg',
  button: {
    label: 'Learn More',
    link: '#about',
  },
};

function renderAbout(data) {
  const aboutRoot = document.getElementById('about-root');
  if (!aboutRoot) return;

  aboutRoot.innerHTML = `
    <section class="py-24  px-4">
      <div class="max-w-7xl mx-auto">

        
        <div class="grid gap-12 md:flex md:justify-between items-center">

          <!-- Image -->
          <div class="relative rounded-2xl overflow-hidden max-w-md mx-auto">
            <img
              src="${data.image}"
              alt="About image"
              class="w-full h-full object-cover"
            />

            <!-- Play Button -->
            <button
              class="absolute inset-0 flex items-center justify-center"
              aria-label="Play video"
            >
              <span class="absolute size-16 rounded-full bg-white opacity-75 animate-ping"></span>
              <span class="w-16 h-16 rounded-full bg-white flex items-center justify-center text-green-600 text-2xl shadow-lg">
                <ion-icon name="play"></ion-icon>
              </span>
            </button>
          </div>

          <!-- Content -->
          <div class="lg:max-w-[50%]">
            <h2 class="text-3xl md:text-4xl xl:text-[40px] font-semibold text-slate-900">
              ${data.title}
            </h2>

            <p class="mt-6 text-slate-600 leading-relaxed lg:text-lg">
              ${data.description}
            </p>

            <p class="mt-6 text-slate-600 leading-relaxed lg:text-lg">
              ${data.additionalDescription}
            </p>

            <ul class="mt-6 space-y-3 md:hidden lg:block">
              ${data.features
                .map(
                  (feature) => `
                  <li class="flex items-start gap-3 text-slate-700">
                    <ion-icon
                      name="checkmark-circle"
                      class="text-green-600 text-xl mt-0.5"
                    ></ion-icon>
                    <span>${feature}</span>
                  </li>
                `
                )
                .join('')}
            </ul>


            <a
              href="${data.button.link}"
              class="inline-block mt-8 bg-green-600 text-white px-8 py-2.5 lg:py-3 rounded-md font-medium hover:bg-green-700 transition"
            >
              ${data.button.label}
            </a>
          </div>

        </div>

      </div>
    </section>
  `;
}

export default function initAbout() {
  renderAbout(aboutData);
}
