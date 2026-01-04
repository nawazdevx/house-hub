const contactData = {
  contact: {
    title: 'Have Question ? Get in touch!',
    description: 'A great platform to buy, sell and rent your properties without any agent or commissions.',
    button: {
      label: 'Contact us',
      link: '#contact',
    },
  },
  newsletter: {
    title: 'Subscribe to Newsletter!',
    description: 'Subscribe to get latest updates and information.',
    placeholder: 'Enter your email',
    button: 'Subscribe',
  },
};

function renderContact(data) {
  const contactRoot = document.getElementById('contact-root');
  if (!contactRoot) return;

  contactRoot.innerHTML = `
    <section class="relative pt-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 text-center">

        <!-- Contact Section -->
        <h2 class="text-3xl md:text-4xl font-semibold text-slate-900">
          ${data.contact.title}
        </h2>

        <p class="mt-4 max-w-2xl mx-auto text-slate-600">
          ${data.contact.description}
        </p>

        <a
          href="${data.contact.button.link}"
          class="inline-flex items-center gap-2 mt-8 bg-green-600 text-white px-8 py-3 rounded-md font-medium hover:bg-green-700 transition"
        >
          <ion-icon name="call-outline"></ion-icon>
          ${data.contact.button.label}
        </a>

        <!-- Newsletter Card -->
        <div class="relative mt-24 max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8 md:p-10">

          <div class="grid gap-6 md:grid-cols-2 items-center">

            <!-- Text -->
            <div class="text-left">
              <h3 class="text-2xl font-semibold text-slate-900">
                ${data.newsletter.title}
              </h3>
              <p class="mt-2 text-slate-600">
                ${data.newsletter.description}
              </p>
            </div>

            <!-- Form -->
            <form class="relative">
              <input
                type="email"
                placeholder="${data.newsletter.placeholder}"
                required
                class="w-full border rounded-full py-3 px-5 pr-32 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                class="absolute right-1 top-1 bottom-1 bg-green-600 text-white px-6 rounded-full font-medium hover:bg-green-700 transition"
              >
                ${data.newsletter.button}
              </button>
            </form>

          </div>
        </div>

      </div>
    </section>
  `;
}

export default function initContact() {
  renderContact(contactData);
}
