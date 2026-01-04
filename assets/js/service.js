const serviceData = {
  title: 'How HouseHub Works',
  subtitle: 'A simple, transparent way to buy, sell, and rent properties without agents or hidden fees.',
  services: [
    {
      icon: 'home-outline',
      title: 'List or Discover Properties',
      description:
        'Browse available homes or list your property in minutes using smart tools built for speed and clarity.',
    },
    {
      icon: 'briefcase-outline',
      title: 'Connect & Manage Directly',
      description:
        'Communicate, manage listings, and negotiate directly through the platform with full transparency and control.',
    },
    {
      icon: 'key-outline',
      title: 'Close Securely',
      description:
        'Finalize deals with secure processes designed for modern real estate transactions and peace of mind.',
    },
  ],
};

function renderService(data) {
  const serviceRoot = document.getElementById('service-root');
  if (!serviceRoot) return;

  serviceRoot.innerHTML = `
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 text-center">

        <!-- Section Header -->
        <h2 class="text-3xl md:text-4xl font-semibold text-slate-900">
          ${data.title}
        </h2>

        <p class="mt-4 mx-auto text-slate-600 max-w-96">
          ${data.subtitle}
        </p>

        <!-- Service Cards -->
        <div class="mt-16 flex gap-12 flex-wrap justify-center">

          ${data.services
            .map(
              (service) => `
              <div class="text-center px-6 max-w-[340px]">

                <!-- Icon -->
                <div class="mx-auto w-24 h-24 rounded-full bg-green-50 flex items-center justify-center">
                  <ion-icon
                    name="${service.icon}"
                    class="text-green-600 text-3xl"
                  ></ion-icon>
                </div>

                <!-- Title -->
                <h3 class="mt-8 text-xl font-semibold text-slate-900">
                  ${service.title}
                </h3>

                <!-- Description -->
                <p class="mt-4 text-slate-600 leading-relaxed">
                  ${service.description}
                </p>

              </div>
            `
            )
            .join('')}

        </div>
      </div>
    </section>
  `;
}

export default function initService() {
  renderService(serviceData);
}
