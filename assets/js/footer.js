const footerData = {
  brand: {
    name: 'HouseHub',
    description: 'A great platform to buy, sell and rent your properties without any agent or commissions.',
    icon: 'business-outline',
  },
  columns: [
    {
      title: 'Company',
      links: ['About us', 'Services', 'property', 'Sign Up'],
    },
    {
      title: 'Useful Links',
      links: ['Terms of Services', 'Privacy Policy', 'Listing', 'Contact'],
    },
  ],
  contact: {
    address: {
      text: 'C/54 Northwest Freeway',
      link: '#',
    },
    email: 'contact@example.com',
    phone: '+152 534-468-854',
  },
  social: ['logo-facebook', 'logo-instagram', 'logo-twitter', 'logo-linkedin'],
  copyright: {
    text: '© 2023 nawazdevx. All Rights Reserved.',
    author: 'Nawaz',
    link: '#',
  },
};

function renderFooter(data) {
  const footerRoot = document.getElementById('footer-root');
  if (!footerRoot) return;

  footerRoot.innerHTML = `
    <footer class="bg-slate-900 text-slate-400 mt-32">
      
      <!-- Footer Top -->
      <div class="max-w-7xl mx-auto px-4 py-20 flex justify-center gap-20 flex-wrap">

        <!-- Brand -->
        <div>
          <a href="#" class="flex items-center gap-2 text-white text-xl font-semibold">
            <ion-icon name="${data.brand.icon}" class="text-green-600 text-2xl"></ion-icon>
            ${data.brand.name}
          </a>
          <p class="mt-4 leading-relaxed max-w-56">
            ${data.brand.description}
          </p>
        </div>

        <!-- Footer Columns -->
        ${data.columns
          .map(
            (col) => `
            <div>
              <h4 class="text-white font-semibold mb-6">${col.title}</h4>
              <ul class="space-y-3">
                ${col.links
                  .map(
                    (link) => `
                    <li>
                      <a href="#" class="hover:text-white transition">
                        ${link}
                      </a>
                    </li>
                  `
                  )
                  .join('')}
              </ul>
            </div>
          `
          )
          .join('')}

        <!-- Contact -->
        <div>
          <h4 class="text-white font-semibold mb-6">Contact Details</h4>
          <ul class="space-y-4">

            <li class="flex gap-3">
              <ion-icon name="location-outline" class="text-green-600 text-xl"></ion-icon>
              <div>
                <p>${data.contact.address.text}</p>
                <a href="${data.contact.address.link}" class="text-green-500 hover:underline">
                  View on Google map
                </a>
              </div>
            </li>

            <li class="flex gap-3">
              <ion-icon name="mail-outline" class="text-green-600 text-xl"></ion-icon>
              <a href="mailto:${data.contact.email}" class="hover:text-white transition">
                ${data.contact.email}
              </a>
            </li>

            <li class="flex gap-3">
              <ion-icon name="call-outline" class="text-green-600 text-xl"></ion-icon>
              <a href="tel:${data.contact.phone}" class="hover:text-white transition">
                ${data.contact.phone}
              </a>
            </li>

          </ul>
        </div>

      </div>

      <!-- Footer Bottom -->
      <div class="border-t border-slate-800" >
        <div class="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p class="text-sm">
            ${data.copyright.text}
          </p>

          <div class="flex gap-3">
            ${data.social
              .map(
                (icon) => `
                <a
                  href="#"
                  class="w-9 h-9 border border-slate-700 rounded-md flex items-center justify-center hover:bg-green-600 hover:border-green-600 hover:text-white transition"
                >
                  <ion-icon name="${icon}"></ion-icon>
                </a>
              `
              )
              .join('')}
          </div>

        </div>
      </div>

    </footer>
  `;
}

export default function initFooter() {
  renderFooter(footerData);
}
