const propertyData = {
  title: 'Featured Properties',
  subtitle: 'Browse a variety of homes to buy, sell, or rent without any agent or commissions.',
  list: [
    {
      image: './assets/images/property-1.jpg',
      title: 'Hillshire Avenue Family Home',
      area: '7,500 sq ft',
      beds: 5,
      baths: 4,
      price: '$4,800 / month',
      rating: '4.8 (28)',
    },
    {
      image: './assets/images/property-2.jpg',
      title: 'Stonewall Drive Modern Villa',
      area: '6,200 sq ft',
      beds: 4,
      baths: 3,
      price: '$3,900 / month',
      rating: '4.7 (22)',
    },
    {
      image: './assets/images/property-3.jpg',
      title: 'Sandbar Drive Luxury Residence',
      area: '8,400 sq ft',
      beds: 6,
      baths: 5,
      price: '$6,200 / month',
      rating: '5.0 (35)',
    },
    {
      image: './assets/images/property-4.jpg',
      title: 'Royal Oak Drive Contemporary Home',
      area: '5,800 sq ft',
      beds: 3,
      baths: 2,
      price: '$3,200 / month',
      rating: '4.5 (18)',
    },
    {
      image: './assets/images/property-5.jpg',
      title: 'Boyd Drive Penthouse Apartment',
      area: '4,000 sq ft',
      beds: 2,
      baths: 2,
      price: '$2,500 / month',
      rating: '4.9 (25)',
    },
    {
      image: './assets/images/property-6.jpg',
      title: 'McLain Way Suburban Villa',
      area: '7,000 sq ft',
      beds: 5,
      baths: 4,
      price: '$5,100 / month',
      rating: '4.8 (30)',
    },
  ],
};

function renderProperty(data) {
  const propertyRoot = document.getElementById('property-root');
  if (!propertyRoot) return;

  propertyRoot.innerHTML = `
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4">

        <!-- Section Header -->
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-semibold text-slate-900">
            ${data.title}
          </h2>

          <p class="mt-4 max-w-2xl mx-auto text-slate-600">
            ${data.subtitle}
          </p>
        </div>

        <!-- Property Grid -->
        <div class="mt-16 max-w-[350px] sm:max-w-max mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          ${data.list
            .map(
              (item) => `
              <div class="rounded-xl overflow-hidden border border-green-300 hover:shadow-lg transition">

                <!-- Image -->
                <div class="relative">
                  <img
                    src="${item.image}"
                    alt="${item.title}"
                    class="w-full h-56 object-cover"
                  />

                  <!-- Favorite Button -->
                  <button
                    class="absolute top-4 right-4 w-9 h-9 rounded-full bg-white flex items-center justify-center text-red-500 shadow"
                    aria-label="Add to favorite"
                  >
                    <ion-icon name="heart"></ion-icon>
                  </button>
                </div>

                <!-- Content -->
                <div class="p-5">

                  <h3 class="text-lg font-semibold text-slate-900 leading-snug hover:text-green-600 transition">
                    ${item.title}
                  </h3>

                  <!-- Property Info -->
                  <div class="mt-4 flex flex-wrap gap-4 text-sm text-slate-600">
                    <span class="flex items-center gap-1">
                      <ion-icon name="cube-outline" class="text-green-600"></ion-icon>
                      ${item.area}
                    </span>
                    <span class="flex items-center gap-1">
                      <ion-icon name="bed-outline" class="text-green-600"></ion-icon>
                      ${item.beds} Beds
                    </span>
                    <span class="flex items-center gap-1">
                      <ion-icon name="water-outline" class="text-green-600"></ion-icon>
                      ${item.baths} Baths
                    </span>
                  </div>

                  <hr class="my-5" />

                  <!-- Price & Rating -->
                  <div class="flex items-center justify-between">

                    <div>
                      <p class="text-sm text-slate-500">Price</p>
                      <p class="font-semibold text-slate-900">${item.price}</p>
                    </div>

                    <div class="text-right">
                      <p class="text-sm text-slate-500 text-left">Rating</p>
                      <p class="flex items-center gap-1 text-yellow-500">
                        <ion-icon name="star"></ion-icon>
                        ${item.rating}
                      </p>
                    </div>

                  </div>

                </div>
              </div>
            `
            )
            .join('')}

        </div>
      </div>
    </section>
  `;
}

export default function initProperty() {
  renderProperty(propertyData);
}
